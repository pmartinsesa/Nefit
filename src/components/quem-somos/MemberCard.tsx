import React from "react";
import Image from "next/image";

export type MemberCardProps = {
  image: any;
  name: string;
  description: string;
};

export const MemberCard = ({ image, name, description }: MemberCardProps) => {
  return (
    <>
      <div className="flex flex-col items-center text-gray-500">
        <Image
          className="rounded-full h-[9rem] w-[9rem]"
          src={image}
          alt={name}
          width={500}
          height={500}
        />
        <div className="text-center w-[15rem]">
          <div className="font-bold mt-5">{name}</div>
          <div className="mt-2">{description}</div>
        </div>
      </div>
    </>
  );
};
