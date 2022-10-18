import React from "react";

export default function ChoparTemplate({ cooking, cooked }: any) {
  return (
    <div className="h-screen text-blue">
      <img src="/bg-top.png" className="w-full" />
      <img src="/logo.png" className="ml-10" />
      <div className="flex items-center justify-center text-7xl font-bold">
        <div>Заказ №:</div>
        <div className="border-8 flex h-80 items-center justify-center mx-4 rounded-3xl text-12xl w-1/3">
          {cooked && cooked.length > 0 && cooked[0].Number}
        </div>
        <div>ГОТОВ !!!</div>
      </div>
      <div className="flex gap-12 justify-center mt-16">
        {cooking ? (
          cooking.map((order: any) => (
            <div
              className="bg-yellow flex h-64 items-center justify-center rounded-full text-9xl w-64"
              key={order.Id}
            >
              {order.Number}
            </div>
          ))
        ) : (
          <div>Нет заказов</div>
        )}
      </div>
      <img src="/bg-bottom.png" className="absolute bottom-0 w-full" />
    </div>
  );
}
