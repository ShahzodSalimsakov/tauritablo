import React, { useEffect } from "react";
export default function LesTemplate({ cooking, cooked }: any) {
  console.log("les rendering");
  return (
    <div>
      <div className="overflow-y-hidden font-bold uppercase grid grid-cols-2 text-center relative">
        <img
          src="/main_logo.svg"
          className="absolute left-0 top-0 w-full h-full z-30 px-10 opacity-40"
        />
        <div className="relative"></div>
        <div className="absolute bg-red-500  z-20 h-[100vh] top-0 left-0 w-1/2 "></div>
        <div className="z-30  h-[100vh] top-0 left-0 w-1/2  absolute">
          <div className="mb-8 text-[8vw] landscape:text-[6vw] ">Готовятся</div>
          <div
            className="text-[12vw] landscape:text-[8vw] gap-0 landscape:columns-3 columns-2"
            // style={{
            //   backgroundImage: `url("/main_logo.svg")`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   backgroundSize: "contain",
            // }}
          >
            {/* {cooking ? (
              cooking.map((order: any) => (
                <div key={order.Id} className="drop-shadow-2xl">{order.Number}</div>
              ))
            ) : (
              <div>Нет заказов</div>
            )} */}
            <div className="drop-shadow-2xl">123</div>
            <div className="drop-shadow-2xl">124</div>
            <div className="drop-shadow-2xl">123</div>
            <div className="drop-shadow-2xl">123</div>
          </div>
        </div>
        <div className="absolute bg-green-500  z-20 h-[100vh] top-0 right-0 w-1/2"></div>
        <div className="border-l-2  z-30  h-[100vh] top-0 right-0">
          <div className="mb-8 text-[8vw] landscape:text-[6vw] ">Готовые</div>
          <div className="text-[12vw] landscape:text-[8vw] gap-0 landscape:columns-3 columns-2">
            {/* {cooked && cooked.length > 0 ? (
              cooked.map((order: any) => (
                <div key={order.Id} className="drop-shadow-2xl">{order.Number}</div>
              ))
            ) : (
              <div>Нет заказов</div>
            )} */}
            <div className="drop-shadow-2xl">123</div>
            <div className="drop-shadow-2xl">124</div>
          </div>
        </div>
      </div>
    </div>
  );
}
