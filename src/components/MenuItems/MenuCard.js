import Image from "next/image";
import React, { useMemo } from "react";
import Button from "../commons/Button";

const MenuCard = (props) => {
  const { menuItem, onClick, disabled } = props;
  const {
    label,
    description,
    imageUrl,
    unitPriceFractional,
    currency,
    itemStock: { quantityLeft },
  } = menuItem;

  const isDisable = useMemo(
    () => disabled || quantityLeft === 0,
    [disabled, quantityLeft]
  );

  return (
    <div
      className="flex flex-col shadow-lg overflow-hidden menu-item cursor-pointer"
      style={{ backgroundColor: "white" }}
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <div className="relative w-full overflow-hidden pt-[100%]">
          <Image
            className="absolute top-0 object-cover w-full h-full transition-transform transform hover:scale-110"
            src={imageUrl}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
        <div>
          <p className="mb-3 text-base font-semibold text-default line-clamp-2">
            {label}
          </p>
          <div
            className="mt-1 text-sm text-default line-clamp-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="mt-3 sm:mt-6">
          <div className="flex flex-col items-stretch sm:items-center justify-between justify-items-stretch sm:flex-row">
            <div className="w-full mb-3 sm:mb-0 space-x-1 sm:w-auto text-md text-default">
              {currency} {unitPriceFractional / 1000}
            </div>
            <div className="w-full sm:w-auto">
              <Button className="min-w-[100px]" disabled={isDisable}>
                {quantityLeft > 0 ? "Add" : "Sold out"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
