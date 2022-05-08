import React from "react";
// import classNames from "classnames";

const Button = React.forwardRef((props, ref) => {
  const { className, children, secondary, ...restProps } = props;
  return (
    <button
      ref={ref}
      className="inline-flex items-center justify-center shadow-sm border focus:outline-none rounded-sm text-[#fff] bg-primaryColor hover:bg-primaryDarkColor px-4 py-2 text-sm float-right w-full sm:min-w-auto sm:w-auto sm:ml-2"
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
