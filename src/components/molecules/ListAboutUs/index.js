import React from "react";

const ListAboutUs = ({ className = "", desc = "" }) => {
  return (
    <div className={`text-[#606060] !text-[17px] ${className}`}>{desc}</div>
  );
};

export default ListAboutUs;
