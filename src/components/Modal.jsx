import React, { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const modalToggle = document.querySelector("[data-modal-toggle]");
    const modalHide = document.querySelectorAll("[data-modal-hide]");
    const defaultModal = document.getElementById("default-modal");

    const handleToggleClick = () => {
      defaultModal.classList.toggle("hidden");
      defaultModal.setAttribute(
        "aria-hidden",
        String(!(defaultModal.getAttribute("aria-hidden") === "true"))
      );
    };

    const handleHideClick = () => {
      defaultModal.classList.add("hidden");
      defaultModal.setAttribute("aria-hidden", "true");
    };

    modalToggle.addEventListener("click", handleToggleClick);

    modalHide.forEach((button) => {
      button.addEventListener("click", handleHideClick);
    });

    return () => {
      modalToggle.removeEventListener("click", handleToggleClick);
      modalHide.forEach((button) =>
        button.removeEventListener("click", handleHideClick)
      );
    };
  }, []);
  return (
    <>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Press for Modal
      </button>

      <div
        id="default-modal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed md:left-1/4 md:top-1/4 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Feature of the web
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <ol className="text-white list-disc">
                <li>Card : u can click the butto "Show" to show and hide the card below</li>
                <li>Loading: for loading</li>
                <li>Error: for error message</li>
                <li>Todo component : Actually, idk what this is used for</li>
              </ol>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
