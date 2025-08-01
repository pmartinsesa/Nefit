"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import nefitLogo from "../Assets/Images/logo-nefit-branco.png";
import nefitLogoCinza from "../Assets/Images/logo-nefit-cinza.png";

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
        data-isontop={scrollTop === 0}
        className="grid grid-cols-12 fixed z-20 w-full data-[isontop=false]:bg-gray-100 text-white data-[isontop=false]:text-[rgb(33,48,48)]"
      >
        <div
          className="
          col-start-2 col-span-10 my-5 text-xl 
          min-[1950px]:justify-self-center"
        >
          <div
            className="
            flex justify-between items-center flex-wrap 
            min-[1950px]:gap-28 gap-1"
          >
            <Link href="/">
              <Image
                className="object-fill h-[3rem] w-[8rem] bg-no-repeat"
                src={scrollTop === 0 ? nefitLogo : nefitLogoCinza}
                alt="logo"
              />
            </Link>
            <div
              data-isactive={pathName === "/"}
              className="data-[isactive=true]:text-red-active data-[isactive=true]:underline underline-offset-8 data-[isactive=true]:font-bold"
            >
              <Link className="hover:underline underline-offset-8" href="/">
                Início
              </Link>
            </div>
            <div
              data-isactive={pathName === "/quem-somos"}
              className="data-[isactive=true]:text-red-active data-[isactive=true]:underline underline-offset-8 data-[isactive=true]:font-bold"
            >
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/quem-somos"
              >
                Quem somos
              </Link>
            </div>
            <div
              data-isactive={pathName === "/livros-e-obras" || pathName === "/modulos-de-estudos"}
              className="data-[isactive=true]:text-red-active data-[isactive=true]:underline underline-offset-8 data-[isactive=true]:font-bold"
            >
              <div className="group">
                Produção acadêmica
                <div className="absolute z-10 invisible group-hover:visible bg-gray-800 p-4 text-white font-normal">
                  <ul>
                    <li>
                      <Link
                        className="hover:underline hover:underline-offset-8"
                        href="/livros-e-obras"
                      >
                        Livros e obras
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="hover:underline hover:underline-offset-8"
                        href="/modulos-de-estudos"
                      >
                        Módulos de estudo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-isactive={pathName === "/publicacoes" || pathName === "/cripticos"}
              className="data-[isactive=true]:text-red-active data-[isactive=true]:underline underline-offset-8 data-[isactive=true]:font-bold"
            >
              <div className="group">
                Publicações
                <div className="absolute z-10 invisible group-hover:visible bg-gray-800 p-4 text-white font-normal">
                  <ul>
                    <li>
                      <Link
                        className="hover:underline hover:underline-offset-8"
                        href="/publicacoes"
                      >
                        Opinião NEFIT
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="hover:underline hover:underline-offset-8"
                        href="/cripticos"
                      >
                        Crípticos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
