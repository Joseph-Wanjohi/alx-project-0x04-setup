import React from "react";
import { ButtonProps } from "@/interface";
const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonSize = "",
  buttonBackgroundColor,
  action,
}) => {
  const bgClass = buttonBackgroundColor
    ? {
        red:   "bg-red-500",
        blue:  "bg-blue-500",
        orange:"bg-orange-500",
        green: "bg-green-500",
      }[buttonBackgroundColor]
    : "bg-slate-500";

  return (
    <button
      onClick={action}
      className={`
        ${bgClass} ${buttonSize} px-6 py-2 text-sm font-semibold
        rounded-lg hover:${bgClass}/50 transition duration-300 text-white
      `}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;