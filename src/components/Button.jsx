import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-copper text-white h-12 rounded-md border-gray-700 w-full text-sm",
  secondary: "bg-secondary text-white",
  transparent:
    "rounded-md text-gray-400 border-2 h-12 border-gray-700 w-full text-sm",
};

export function Button(props) {
  const { text, variant, type, onClick, Icon, className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(variants[variant], className)}
    >
      <div className="flex items-center justify-center">
        {Icon && Icon}
        <p className="pl-2 font-dmsans">{text}</p>
      </div>
    </button>
  );
}
