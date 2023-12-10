import React, { useEffect } from "react";
import { decrement, increment } from "./reducer/counterSlice";
import { toggle } from "./reducer/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import ToDoComponent from "./components/ToDoComponent";
import ToDoComponentById from "./components/ToDoByIdComponent";
import Modal from "./components/Modal";

function App() {
  const toggleReducer = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <img
        src="./src/assets/Pixel.png"
        alt=""
        className="-z-20 blur-sm h-full md:h-auto w-full brightness-75 fixed top-0"
      />
      <div className="flex flex-col justify-center z-10 items-center gap-5 p-10 shadow-2xl rounded-3xl m-10">
        <h1 className="text-3xl font-bold text-center text-[#FAF0E6]">
          Hello World
        </h1>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => dispatch(toggle())}
            className="py-2.5 w-32 me-2 mb-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            {toggleReducer ? "Hide" : "Show Card"}
          </button>
          <div className={toggleReducer ? "block" : "hidden"}>
            <Card />
          </div>
          <Modal />
        </div>
        <ToDoComponent />
        <ToDoComponentById />
      </div>
    </div>
  );
}

export default App;
