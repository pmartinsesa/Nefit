import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import logoUfpr from "../Assets/Images/logo-ufpr.png";
import logo from "../Assets/Images/logo-nefit-footer.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-12 place-content-center bg-[#E4E4E4] h-48 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10 flex justify-between min-[1950px]:w-[75rem]">
          <div className="flex gap-4 flex-wrap">
            <Image
              className="grayscale object-fill h-[4rem] w-[7rem] bg-no-repeat"
              src={logo}
              alt="logo"
            />
            <Image
              className="grayscale object-fill h-[4rem] w-[7rem] bg-no-repeat"
              src={logoUfpr}
              alt="logoUfpr"
            />
          </div>
          <span className="mt-6 w-[18rem] text-gray-800 self-center">
            {`Todos os direitos reservados © ${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
      <div className="bg-[#69130E] flex justify-center items-center h-16 text-white gap-2">
        <a href="https://www.instagram.com/nefitufpr/" target="_blank">
          <AiOutlineInstagram className="h-6 w-6" />
        </a>
        <a href="https://www.youtube.com/channel/UCSl3ofOZQSYHe9RqUDk0W5Q" target="_blank">
          <AiFillYoutube className="h-6 w-6" />
        </a>
        <a href="https://web.facebook.com/nefitufpr/?_rdc=1&_rdr" target="_blank">
          <FaFacebookF className="h-6 w-6" />
        </a>
      </div>
    </>
  );
};
