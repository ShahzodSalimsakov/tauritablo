import React, { useEffect } from "react";
export default function LesTemplate({ cooking, cooked }: any) {
  console.log("les rendering");
  return (
    <div>
      <div className="relative grid grid-cols-2 overflow-y-hidden text-center font-bold uppercase">
        <img
          src="/main_logo.svg"
          className="absolute left-0 top-0 z-30 h-full w-full px-10 opacity-10"
        />
        <div className="absolute top-0  left-0 z-20 h-[100vh] w-1/2 bg-white "></div>
        <div className="z-40 h-[100vh]">
          <div className="mb-8 text-[8vw] text-red-500 landscape:text-[6vw]">
            Готовятся
          </div>
          <div
            className="columns-2 gap-0 text-[12vw] landscape:columns-3 landscape:text-[8vw]"
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
            <div className="text-red-500 drop-shadow-2xl">123</div>
            <div className="text-red-500 drop-shadow-2xl">124</div>
            <div className="text-red-500 drop-shadow-2xl">123</div>
            <div className="text-red-500 drop-shadow-2xl">123</div>
          </div>
        </div>
        <div className="absolute top-0  right-0 z-20 h-[100vh] w-1/2 bg-white"></div>
        <div className="z-40 h-[100vh]">
          <div className="mb-8 text-[8vw] text-green-500 landscape:text-[6vw]">
            Готовые
          </div>
          <div className="columns-2 gap-0 text-[12vw] landscape:columns-3 landscape:text-[8vw]">
            {/* {cooked && cooked.length > 0 ? (
              cooked.map((order: any) => (
                <div key={order.Id} className="drop-shadow-2xl">{order.Number}</div>
              ))
            ) : (
              <div>Нет заказов</div>
            )} */}
            <div className="text-green-500 drop-shadow-2xl">123</div>
            <div className="text-green-500 drop-shadow-2xl">124</div>
          </div>
        </div>
      </div>
    </div>
  );
}
