import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  innerText?: string;
}

export const Button = ({ className, onClick, innerText = "BUTTON" }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {innerText}
    </button>
  );
};
