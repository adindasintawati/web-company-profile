import React from "react";

const CartVisiMisi = ({ className, desc, img }) => {
  return (
    <div className={`text-[17px] text-[white] ${className}`}>
      {desc} {img}
    </div>
  );
};

export default CartVisiMisi;
