import { titleFont } from "@/config/font";
import Link from "next/link";

export default function loginP() {
  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-32">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <div className="flex flex-col">
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-300 rounded mb-5"
          type="email"
        />

        <label htmlFor="password">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-300 rounded mb-5"
          type="password"
        />

        <button className="btn-primary">Ingresar</button>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new-account" className="btn-secondary text-center">
          Crear una nueva cuenta
        </Link>
      </div>
    </div>
  );
}
