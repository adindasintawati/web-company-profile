import React from "react";

const Paragraph = ({ className = "", text = "" }) => {
  return (
    <div className={`text-[20px] text-[#FFFFFF] ${className}`}>{text}</div>
  );
};

export default Paragraph;
