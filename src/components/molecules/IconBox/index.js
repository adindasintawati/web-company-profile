import React from "react";

const IconBox = ({ className, imgUrl, text }) => {
  return (
    <div className={`text-[13px] text-[black] flex gap-2 ${className}`}>
      {imgUrl} {text}
    </div>
  );
};

export default IconBox;
