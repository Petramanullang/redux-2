import { useSelector } from "react-redux";

const Card = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Count Amount : {count}
        </h5>
      </a>
    </>
  );
};

export default Card;
