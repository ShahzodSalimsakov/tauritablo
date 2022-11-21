import React, { useEffect } from "react";
export default function LesTemplate({ cooking, cooked }: any) {
  console.log("les rendering");
  return (
    <div>
      <div className="h-full text-9xl overflow-hidden font-bold text-white uppercase">
        <div className="text-secondary bg-white text-center">
          <div className="bg-secondary text-white py-16">Готовые</div>
          <div className="text-9xl">
            <div className="flex justify-between items-center mx-6 my-20">
              <img
                src="/burger.svg"
                width={300}
                height={300}
                className="animate-bounce"
              />
              <div className="text-large">
                {/* {cooked && cooked.length > 0 && cooked[0].Number} */}
              </div>
              <img
                src="/chicken.svg"
                width={300}
                height={300}
                className="animate-bounce"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 py-12 mt-10 overflow-hidden h-80">
            {/* {cooked && cooked.length > 0 ? (
              cooked.map((order: any) => (
                <div key={order.Id}>{order.Number}</div>
              ))
            ) : (
              <div>Нет заказов</div>
            )} */}
          </div>
        </div>
        <div className="text-center text-primary">
          <div className="bg-primary text-white py-10">Готовятся</div>

          <div className="grid grid-cols-3 text-primary bg-white">
            {/* {cooking ? (
              cooking.map((order: any) => (
                <div key={order.Id}>{order.Number}</div>
              ))
            ) : (
              <div>Нет заказов</div>
            )} */}
          </div>
          <div className="flex justify-between items-center mx-6 my-20">
            <img
              src="/lester.svg"
              width={130}
              height={130}
              className="animate-bounce"
            />
            <img
              src="/salad.svg"
              width={130}
              height={130}
              className="animate-bounce"
            />
            <img
              src="/soda.svg"
              width={130}
              height={130}
              className="animate-bounce"
            />
            <img
              src="/chips.svg"
              width={130}
              height={130}
              className="animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
