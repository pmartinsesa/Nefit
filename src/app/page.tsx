import { Schedulers } from "@/components/Schedulers";
import { NewsInfo } from "@/components/NewsInfo";

export default function Begin() {
  return (
    <>
      <NewsInfo />
      <div className="grid grid-cols-12 bg-[#69130E] mt-14 text-white">
        <Schedulers />
      </div>
    </>
  );
}
