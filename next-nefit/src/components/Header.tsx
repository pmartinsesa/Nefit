"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import nefitLogo from "../Assets/images/logo-nefit-branco.png";
import nefitLogoCinza from "../Assets/images/logo-nefit-cinza.png";
import { Search } from "@/Assets/Icons/Search";

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
        className="grid grid-cols-12 fixed z-10 w-full data-[isOnTop=false]:bg-gray-100 text-white data-[isOnTop=false]:text-[#213030]"
      >
        <div
          className="
          col-start-2 col-span-10 my-5 text-xl 
          min-[1950px]:justify-self-center"
        >
          <div
            className="
            flex justify-between items-center 
            min-[1950px]:gap-28"
          >
            <Link href="/">
              <Image
                className="object-fill h-[3rem] w-[8rem] bg-no-repeat"
                src={scrollTop === 0 ? nefitLogo : nefitLogoCinza}
                alt="logo"
              />
            </Link>
            <div
              data-isActive={pathName === "/"}
              className="data-[isActive=true]:text-red-active data-[isActive=true]:underline underline-offset-8 data-[isActive=true]:font-bold"
            >
              <Link className="hover:underline underline-offset-8" href="/">
                Início
              </Link>
            </div>
            <div
              data-isActive={pathName === "/quem-somos"}
              className="data-[isActive=true]:text-red-active data-[isActive=true]:underline underline-offset-8 data-[isActive=true]:font-bold"
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
              className="data-[isActive=true]:text-red-active data-[isActive=true]:underline underline-offset-8 data-[isActive=true]:font-bold"
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
              className="data-[isActive=true]:text-red-active data-[isActive=true]:underline underline-offset-8 data-[isActive=true]:font-bold"
            >
              <Link
                className="hover:underline hover:underline-offset-8"
                href=""
              >
                Publicações
              </Link>
            </div>

            <div>
              <button>
                <Search color={scrollTop ? "#213030" : "white"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
