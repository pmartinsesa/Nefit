import { FaFacebookF } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import logoUfpr from "../Assets/images/logo-ufpr.png";
import logo from "../Assets/images/logo-nefit-footer.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-12 place-content-center bg-[#E4E4E4] h-32">
        <Image
          className="col-start-2 col-span-2 grayscale object-fill h-[3.75rem] w-[10.65rem] bg-no-repeat"
          src={logo}
          alt="logo"
        />
        <Image
          className="grayscale object-fill h-[4rem] w-[7rem] bg-no-repeat"
          src={logoUfpr}
          alt="logoUfpr"
        />
        <span className="col-end-12 mt-6 justify-self-end w-[18rem] text-gray-800">
          Todos os direitos reservados © 2023
        </span>
      </div>
      <div className="bg-[#69130E] flex justify-center items-center h-16 text-white gap-2">
        <a href="">
          <AiOutlineInstagram className="h-6 w-6" />
        </a>
        <a href="">
          <AiFillYoutube className="h-6 w-6" />
        </a>
        <a href="">
          <FaFacebookF className="h-6 w-6" />
        </a>
        <a href="">
          <AiOutlineTwitter className="h-6 w-6" />
        </a>
      </div>
    </>
  );
};
