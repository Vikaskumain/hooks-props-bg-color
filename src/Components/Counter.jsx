import React from "react";
import { useState } from "react";
function Counter() {
  const [Counter, setCounter] = useState(10);

  const addButton = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeButton = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className=" flex justify-center h-screen items-center flex-row">
      <div className="bg-gray-500 h-[600px] w-[500px] flex justify-center items-center flex-col rounded-2xl ">
        <h1 className="mt-3 py-4 bg-blue-300 rounded-sm">
          Counter App :{Counter}{" "}
        </h1>
        <button
          className="bg-green-500 text-white mt-2  py-2 cursor-pointer rounded-xl"
          onClick={addButton}
        >
          Add button
        </button>
        <button
          className="bg-black text-white mt-2 py-2 cursor-pointer rounded-xl"
          onClick={removeButton}
        >
          Remove button
        </button>
      </div>
    </div>
  );
}

export default Counter;
