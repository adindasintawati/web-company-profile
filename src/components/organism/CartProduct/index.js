import React from "react";

const CartProduct = ({ className, img, title, desc }) => {
  return (
    <div className={`bg-gray-100 px-10 py-10 rounded-lg ${className}`}>
      <div className="flex flex-col gap-5">
        <div className="h-[146px] w-[146px]">{img}</div>
        <div className={`text-[23px] text-[#000000]`}>{title}</div>
        <div className={`text-[17px] text-[#606060]`}>{desc}</div>
      </div>
    </div>
  );
};

export default CartProduct;
