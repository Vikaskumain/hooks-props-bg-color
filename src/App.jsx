import { useState } from "react";
import Cards from "./Components/Cards";
import Counter from "./Components/Counter";

function App() {
  const [Color, setColor] = useState("olive");
  return (
    <>
      <div
        className=" duration-200 flex justify-center h-screen items-center flex-wrap w-full"
        style={{ backgroundColor: Color }}
      >
        <Counter />
        <Cards laptopName="Dell" servies="Nearby-gurgoan" />
        <Cards laptopName="Hp" servies="Nearby-delhi" />
        <Cards laptopName="Lenove" servies="Nearby-Noida" />
        <div className="flex justify-center flex-wrap fixed bottom-3 px-2  inset-x-0">
          <div className="flex justify-center gap-3 px-3 flex-wrap py-2 bg-white rounded-3xl shadow-lg">
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-red-500 rounded-full"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-black rounded-full"
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-yellow-400 rounded-full"
              onClick={() => setColor("Yellow")}
            >
              Yellow
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-orange-700 rounded-full"
              onClick={() => setColor("Orange")}
            >
              Orange
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-sky-400 rounded-full"
              onClick={() => setColor("sky")}
            >
              Sky
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-violet-300 rounded-full"
              onClick={() => setColor("Violet")}
            >
              Violet
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-amber-600 rounded-full"
              onClick={() => setColor("amber")}
            >
              Amber
            </button>
            <button
              className=" px-4 py-1 outline-none text-white shadow-lg bg-fuchsia-500 rounded-full"
              onClick={() => setColor("Fuchsia")}
            >
              Fuchsia
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
