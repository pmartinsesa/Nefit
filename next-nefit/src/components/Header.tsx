"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import nefitLogo from "../Assets/images/logo-nefit-branco.png";
import nefitLogoCinza from "../Assets/images/logo-nefit-cinza.png";

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <>
      <div
        data-isOnTop={scrollTop === 0}
        className="fixed z-10 w-full data-[isOnTop=false]:bg-gray-100 text-white data-[isOnTop=false]:text-[#213030]"
      >
        <div className="grid grid-cols-12 h-16 mt-9 text-xl">
          <div className="col-start-2 col-span-10">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image
                  className="object-fill h-16 w-48 bg-no-repeat"
                  src={scrollTop === 0 ? nefitLogo : nefitLogoCinza}
                  alt="logo"
                />
              </Link>
              <div
                data-isActive={pathName === "/"}
                className="data-[isActive=true]:text-red-active"
              >
                <Link className="hover:underline underline-offset-8" href="/">
                  Início
                </Link>
              </div>
              <div
                data-isActive={pathName === "/quem-somos"}
                className="data-[isActive=true]:text-red-active"
              >
                <Link
                  className="hover:underline hover:underline-offset-8"
                  href="/quem-somos"
                >
                  Quem somos
                </Link>
              </div>
              <div
                data-isActive={pathName === "/producao-academica"}
                className="data-[isActive=true]:text-red-active"
              >
                <Link
                  className="hover:underline hover:underline-offset-8"
                  href=""
                >
                  Produção acadêmica
                </Link>
              </div>
              <div
                data-isActive={pathName === "/historico-de-atividades"}
                className="data-[isActive=true]:text-red-active"
              >
                <Link
                  className="hover:underline hover:underline-offset-8"
                  href=""
                >
                  Histórico de atividades
                </Link>
              </div>
              <div
                data-isActive={pathName === "/contato"}
                className="data-[isActive=true]:text-red-active"
              >
                <Link
                  className="hover:underline hover:underline-offset-8"
                  href=""
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
