import Image from "next/image";

export type MemberCardProps = {
  image: any;
  name: string;
  description: string;
}

export const MemberCard = ({image, name, description}: MemberCardProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
        <Image
          className="rounded-full h-[9rem] w-[9rem]"
          src={image}
          alt={name}
        />
        <div className="font-bold mt-1">{name}</div>
        <div className="mt-1">{description}</div>
      </div>
    </>
  );
};
