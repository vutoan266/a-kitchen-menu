import classNames from "classnames";
import React from "react";

const Modal = (props) => {
  const { className, children, onClose } = props;
  return (
    <div
      tabIndex={1}
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-modal h-full bg-[rgba(3,3,3,0.5)] flex"
    >
      <div
        className={classNames(
          "relative w-full max-w-4xl h-[100vh] md:h-auto bg-[#fff] m-auto",
          className
        )}
      >
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-1 right-1 z-50"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
