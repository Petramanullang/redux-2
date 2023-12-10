import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDo } from "../reducer/todoSlice";
import Loading from "./Loading";
import ErrorComponent from "./Error";

const ToDoComponent = () => {
  const dispatch = useDispatch();
  //untuk data
  const todo = useSelector((state) => state.todo.todo);
  //untuk status
  const status = useSelector((state) => state.todo.status);
  //untuk error
  const error = useSelector((state) => state.todo.error);

  //tanpa trigger, langsung loading
  useEffect(() => {
    dispatch(fetchToDo());
  }, [dispatch]);

  //print todo, status, error
  // console.log("todo", todo);
  // console.log("status", status);
  // console.log("error", error);

  //early return untuk loading
  if (status === "loading") return <Loading />;

  //early return untuk error
  if (status === "failed") return <ErrorComponent />;

  return (
    <>
      <div className="text-center w-2/4">
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

export default ToDoComponent;
