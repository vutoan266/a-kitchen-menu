import classNames from "classnames";
import React from "react";

const MIN_VALUE = 1;

const QuantityInput = React.forwardRef((props, ref) => {
  const { value = 1, disabled, onChange } = props;

  return (
    <div
      className={classNames(
        "quantity-control flex w-full sm:w-auto border font-bold",
        { "opacity-40": disabled }
      )}
    >
      <button
        onClick={() => onChange(value - 1 || MIN_VALUE)}
        className="inline-flex w-[40px] items-center justify-center break-keep shadow-sm focus:outline-none rounded-sm border-default text-default bg-[#fffefa] px-4 py-2 text-sm"
        disabled={disabled}
      >
        -
      </button>
      <div>
        <input
          type="number"
          className="block w-[40px] h-[38px] text-center sm:text-sm rounded-sm bg-default text-default border-default border-l-0 border-r-0 no-focus shadow-sm border-default focus:ring-primary focus:border-primary"
          min={MIN_VALUE}
          value={value}
          disabled={disabled}
          onChange={(e) =>
            parseInt(e.target.value) > 0
              ? onChange(parseInt(e.target.value))
              : null
          }
        />
      </div>
      <button
        onClick={() => onChange(value + 1)}
        className="inline-flex w-[40px] items-center justify-center break-keep shadow-sm focus:outline-none rounded-sm text-default bg-[#fffefa] px-4 py-2 text-sm"
        disabled={disabled}
      >
        +
      </button>
    </div>
  );
});

export default QuantityInput;
