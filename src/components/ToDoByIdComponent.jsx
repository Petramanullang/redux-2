import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import ErrorComponent from "./Error";
import { fetchToDoById } from "../reducer/todoDynamicSlice";

const ToDoComponentById = () => {
  const dispatch = useDispatch();
  //untuk data
  const todo = useSelector((state) => state.todoById.todo);
  //untuk status
  const status = useSelector((state) => state.todoById.status);
  //untuk error
  const error = useSelector((state) => state.todoById.error);

  //tanpa trigger, langsung loading
  //   useEffect(() => {
  //     dispatch(fetchToDoById());
  //   }, [dispatch]);

  //state untuk simpan value input
  const [input, setInput] = useState("");
  //trigger untuk simpan input ke function
  const handleFetchClick = () => {
    if (input) {
      dispatch(fetchToDoById(input));
    }
  };

  //print todo, status, error
  console.log("todo by id", todo);
  console.log("statu by id", status);
  console.log("error by id", error);

  //early return untuk loading
  if (status === "loading") return <Loading />;

  //early return untuk error
  if (status === "failed") return <ErrorComponent />;

  return (
    <>
      <div className="text-center flex-col flex justify-center items-center p-5">
        <div className="bg-white p-8 max-w-xs w-full rounded-lg">
          {/* Input Todo By Id */}
          <input
            type="number"
            placeholder="Enter To Do Id"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mb-5"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={handleFetchClick}>
            {""}
            Fetch To Do
          </button>
        </div>
        {/* Kalau success */}
        {status === "succeeded" && (
          <div key={todo.id}>
            <h3 className="font-bold text-3xl text-white">{todo.title}</h3>
            <p
              className={`font-semibold text-xl mt-5 ${
                todo.completed ? "text-green-600" : "text-red-600"
              }`}>
              Complete: {todo.completed ? "Yes" : "No"}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ToDoComponentById;
