import Paragraph from "@/components/atoms/Paragraph";
import React from "react";

const ListProduct = ({ className = "", title, desc }) => {
  return (
    <div
      className={`bg-gray-100 rounded-xl px-10 py-10 w-[50vh] flex flex-col gap-5 ${className}`}
    >
      <Paragraph
        className="text-[black] text-[24px] font-semibold"
        text={title}
      />
      <Paragraph className="!text-[#505050] text-[17px]" text={desc} />
    </div>
  );
};

export default ListProduct;
