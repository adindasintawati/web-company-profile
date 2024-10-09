import React from "react";

const ListFooter = ({ className = "", text }) => {
  return (
    <div className={`text-[16px] text-[#232A3B] ${className}`}>{text}</div>
  );
};

export default ListFooter;
