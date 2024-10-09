import React from "react";

const Button = ({
  className = "",
  color = "bg-[#ea7c3b]",
  textButton = "Penawaran",
  size,
  type,
}) => {
  return (
    <button
      type={type}
      className={`h-10 px-8 rounded-3xl text-[white] hover:bg-[#ea7c3b] ${className} ${color} ${size}`}
    >
      {textButton}
    </button>
  );
};

export default Button;
