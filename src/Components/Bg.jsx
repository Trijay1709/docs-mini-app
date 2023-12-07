import React from "react";

function Bg() {
  return (
    <>
      <div className="fixed h-screen w-full z-[1] ">
        <h2 className="text-2xl text-zinc-400 flex justify-center p-[5vw]">
          Hello, Trijay
        </h2>
        <h1 className="absolute text-[20vw] text-zinc-900 leading-none tracking-tight -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 font-bold">
          DOCS.
        </h1>
      </div>
    </>
  );
}

export default Bg;
