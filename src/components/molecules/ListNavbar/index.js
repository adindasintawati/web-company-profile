import React from "react";

const ListNavbar = ({ className = "", text = "" }) => {
  return <div className={` items-center ${className}`}>{text}</div>;
};

export default ListNavbar;
