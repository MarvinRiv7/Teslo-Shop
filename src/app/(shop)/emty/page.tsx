'use client'

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyP() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] px-4 text-center bg-gray-50">
      <IoCartOutline size={100} className="text-gray-400 mb-2" />
      <h1 className="text-2xl font-bold text-gray-700">Tu carrito está vacío</h1>
      <p className="text-gray-500 mt-2">Parece que aún no has agregado productos.</p>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-colors"
      >
        Ir a la tienda
      </Link>
    </div>
  );
}
