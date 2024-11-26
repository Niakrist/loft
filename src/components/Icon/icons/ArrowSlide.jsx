import React from "react";

const ArrowSlide = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2L2 6L6 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default ArrowSlide;
