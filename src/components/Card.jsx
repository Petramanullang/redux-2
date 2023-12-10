import { useSelector } from "react-redux";

const Card = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Count Amount : {count}
        </h5>
        <p className="font-normal text-xs text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          officia.
        </p>
      </div>
    </>
  );
};

export default Card;
