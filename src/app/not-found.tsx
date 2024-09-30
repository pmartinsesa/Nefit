import React from "react";

import Link from "next/link";
import logo from "../Assets/images/logo-nefit-footer.png";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <>
      <div className="absolute bg-slate-200 w-screen h-screen z-20 flex justify-center items-center text-gray-700">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="grayscale object-fill h-[3.75rem] w-[10.65rem] bg-no-repeat"
            src={logo}
            alt="logo"
          />
          <div className="font-bold">Opa!</div>
          <div>Por enquanto, não tem nada por aqui...</div>
          <button
            className="
            justify-self-center col-span-12 
            transition duration-300 ease-in-out 
            text-white bg-red-primary 
            hover:text-red-primary hover:border-red-primary hover:bg-transparent    
            px-4 py-1 border rounded-xl h-10 w-auto mt-12"
            type="submit"
          >
            <Link className="text-lg" href="/">
              Ir para a página inicial
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
