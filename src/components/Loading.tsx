import { Spinner } from "@chakra-ui/react";
import logo from "../Assets/images/logo-nefit-footer.png";
import Image from "next/image";

export const Loading = () => {
  return (
    <>
      <div className="absolute bg-slate-200 w-screen h-screen z-20 flex flex-col items-center gap-80">
        <Image
          className="grayscale object-fill h-[3.75rem] w-[10.65rem] bg-no-repeat"
          src={logo}
          alt="logo"
        />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.600"
          size="xl"
        />
      </div>
    </>
  );
};
