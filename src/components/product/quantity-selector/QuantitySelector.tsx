'use client';
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {

  const [count, setCount] = useState(quantity);

  const quantityChanged = (value: number) => {
    const newValue = count + value;
    if (newValue < 1 || newValue > 5) return;
    setCount(newValue);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => quantityChanged(-1)}
        disabled={count === 1}
        className={`transition-opacity ${count === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
      >
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="w-20 mx-3 px-5 bg-gray-300 text-center rounded">
        {count}
      </span>

      <button
        onClick={() => quantityChanged(1)}
        disabled={count === 5}
        className={`transition-opacity ${count === 5 ? 'opacity-30 cursor-not-allowed' : ''}`}
      >
        <IoMdAddCircleOutline size={30} />
      </button>
    </div>
  );
};
