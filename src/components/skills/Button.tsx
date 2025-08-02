import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  active: boolean;
};

export default function Button({ children, active, ...props }: ButtonProps) {
  return (
    <button
      className={`border-2 font-semibold ${
        active
          ? "border-brand-folly text-brand-folly"
          : "border-platinum-100 text-platinum-100"
      } rounded-lg font-ibmPlex py-2 px-3 transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}
