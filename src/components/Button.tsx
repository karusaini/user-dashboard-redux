import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  color?: "blue" | "red" | "green";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "blue",
}) => {
  const bgColor =
    color === "blue"
      ? "bg-blue-600"
      : color === "red"
      ? "bg-red-600"
      : "bg-green-600";

  return (
    <button
      className={`${bgColor} text-white px-4 py-2 rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
