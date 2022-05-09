import Image from "next/image";
import React, { useState } from "react";
import Button from "../commons/Button";
import Modal from "../commons/Modal";
import QuantityInput from "../CustomInput/QuantityInput";

const DetailMenuItemModal = (props) => {
  const { menuItem, onClose } = props;
  const {
    label,
    description,
    imageUrl,
    unitPriceFractional,
    currency,
    itemStock: { quantityLeft },
  } = menuItem;
  const [quantity, setQuantity] = useState(1);

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col flex-grow overflow-y-auto lg:flex-row">
        <div className="min-h-[500px] max-h-[100vh] flex-1 w-[100%] relative">
          <Image src={imageUrl} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="max-h-[100vh] flex-1 bg-backgroundColor flex flex-col">
          <div className="flex flex-col flex-grow p-6 pt-12 space-y-3 overflow-y-auto">
            <p className="mb-3 text-base font-semibold text-2xl">{label}</p>
            <div
              className="mt-1 text-sm text-default"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="p-6 space-y-4 bg-default2 hidden lg:block bg-grey">
            <div className="flex flex-col items-stretch sm:items-center justify-between justify-items-stretch sm:flex-row">
              <div className="w-full mb-3 sm:mb-0 space-x-1 sm:w-auto text-md text-default">
                <QuantityInput
                  value={quantity}
                  onChange={setQuantity}
                  disabled={quantityLeft === 0}
                />
              </div>
              <div className="w-full">
                <Button
                  className="w-[90%] h-[40px] "
                  disabled={quantityLeft === 0}
                >
                  {quantityLeft > 0 ? "Add" : "Sold out"}
                  {` (${currency} ${unitPriceFractional / 1000})`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailMenuItemModal;
