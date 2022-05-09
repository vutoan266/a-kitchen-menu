import classNames from "classnames";
import React from "react";

const Button = React.forwardRef((props, ref) => {
  const { className, children, disabled, onClick, ...restProps } = props;
  return (
    <button
      ref={ref}
      className={classNames(
        "inline-flex items-center justify-center shadow-sm border focus:outline-none rounded-sm text-[#fff] bg-primaryColor border-primaryColor hover:bg-primaryDarkColor px-4 py-2 text-sm float-right w-full sm:min-w-auto sm:ml-2",
        className,
        { "opacity-50 hover:bg-primaryColor": disabled }
      )}
      onClick={disabled ? null : onClick}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
