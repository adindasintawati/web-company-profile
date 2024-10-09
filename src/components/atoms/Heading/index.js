import React from "react";

const Heading = ({ clasName = "", text = "" }) => {
  return <div clasName={`text-[47px] text-[#FFFFFF] ${clasName}`}>{text}</div>;
};

export default Heading;
