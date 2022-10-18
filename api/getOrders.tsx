export default getOrders() { 
const { data: tokenData } = useQuery(
    ["token"],
    async () => {
      if (tokenData)
        await axios.get(`http://192.168.1.108:9042/api/logout/${tokenData}`);

      return axios.get("http://192.168.1.108:9042/api/login/2050");
    },
    {
      // cacheTime: 28 * 60 * 1000,
      refetchInterval: 26 * 60 * 1000,
      staleTime: 26 * 60 * 1000 /*, refetchOnWindowFocus: false*/,
    }
  );

  const { isLoading, error, data, isFetching } = useQuery(
    ["orderData", tokenData],
    () =>
      axios
        .get(
          `http://192.168.1.108:9042/api/kitchenorders?key=${tokenData.data}`
        )
        .then((res) => res.data),
    { refetchInterval: 2000 }
  );

  const cookingOrders = useMemo(() => {
    return data?.filter((order: any) =>
      order.Items.find((item: any) => item.ProcessingStatus < 6)
    );
  }, [data]);

  const cookedOrders = useMemo(() => {
    return data
      ?.filter((order: any) =>
        order.Items.every((item: any) => item.ProcessingStatus === 6)
      )
      .sort(
        (a: { Number: number }, b: { Number: number }) => b.Number - a.Number
      );
  }, [data]);

  // const cookedOrdersFromBarcode = async () => {
  //   if (cookedOrders != 0) {
  //     await cookedOrders.map((order: any) => {
  //       if (order.Number == orderNumber) {
  //         audio.play();
  //         audio.loop = false;
  //       }
  //     });
  //   }
  // };

  // window.ipc.on("fromMain", (obj: any, data: string) => {
  //   console.log("davr", data);
  //   const lastThree = data.slice(-4);
  //   const firstTwo = lastThree.slice(0, 2);
  //   orderNumber = firstTwo;
  //   if (cookedOrdersCount != 0) {
  //     cookedOrdersFromBarcode();
  //   }
  // });

  useEffect(() => {
    if (
      cookedOrdersCount != 0 &&
      cookedOrders &&
      cookedOrders.length != cookedOrdersCount
    ) {
      audio.play();
      audio.loop = false;
      cookedOrdersCount = cookedOrders.length;
      let today = new Date();
      let milliseconds = today.getMilliseconds();
      const db = new Dexie("Orders");
      db.version(1).stores({
        orders: "++id, *orders",
      });
      db.open().catch((err) => {
        console.log(err);
      });
      db.table("orders").put({ id: milliseconds, cookedOrders });
    } else {
      if (cookedOrders) {
        cookedOrdersCount = cookedOrders.length;
      }
    }
  }, [cookedOrders]);

  // console.log(cookedOrders);
  // console.log(cookingOrders);

  return (
    <div className="bg-white">
      <LesTemplate cooking={cookingOrders} cooked={cookedOrders} />
      {/* <ChoparTemplate cooking={cookingOrders} cooked={cookedOrders} /> */}
    </div>
  );
}