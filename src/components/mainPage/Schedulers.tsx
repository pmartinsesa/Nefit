import React from "react";

import Image from "next/image";
import { useState } from "react";

import { BsCalendarCheck } from "react-icons/bs";
import { Scheduler } from "@/types/scheduler";

export type SchedulerProps = {
  schedulers: Scheduler[];
};

export const Schedulers = ({ schedulers }: SchedulerProps) => {
  const [schedule, setSchedule] = useState<Scheduler | null>(null);

  const allSchedules = (): JSX.Element[] => {
    return schedulers.map((s, i) => (
      <Image
        key={i}
        className="h-[22rem] w-[22rem] rounded-xl object-cover cursor-pointer"
        src={s.image}
        width={500}
        height={500}
        alt={`agenda-${i}`}
        onClick={(e: any) =>
          setSchedule(schedulers[parseInt(e?.target?.alt.split("-")[1])])
        }
      />
    ));
  };

  const renderScheules = (): JSX.Element => {
    if (schedule === null) {
      return (
        <div
          className="
          col-start-2 col-span-10 my-20 gap-10
          min-[1950px]:justify-self-center"
        >
          <div
            className="
            flex justify-between gap-8 flex-wrap
            max-[1270px]:flex-col max-[1270px]:items-center"
          >
            {allSchedules()}
          </div>
        </div>
      );
    }

    return (
      <>
        <div
          className="
          col-start-2 col-span-12 my-20 
          min-[1950px]:justify-self-center
          min-[1950px]:w-[75rem]"
        >
          <div className="flex gap-[3.5rem]">
            <Image
              className="
                rounded-xl object-cover cursor-pointer h-[22rem] w-[22rem] 
                max-[850px]:h-[15rem] max-[850px]:w-[15rem] max-[550px]:h-[5rem] max-[550px]:w-[5rem]"
              src={schedule.image}
              width={500}
              height={500}
              alt="agenda-selecionada"
            />
            <div
              className="
              pt-4 font-light justify-self-center whitespace-pre-line w-[30rem] h-[18rem]
              max-[850px]:text-sm max-[680px]:text-xs"
            >
              {`${schedule.description}`}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="col-start-2 col-span-10 mt-16 min-[1950px]:justify-self-center min-[1950px]:w-[75rem]">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <BsCalendarCheck className="w-9 h-9 mt-2" />
            <div className="">
              <h1
                className="
                text-[40px] font-bold 
                max-[1270px]:text-3xl"
              >
                Agenda
              </h1>
              <h2
                className="
                text-[30px] font-extralight 
                max-[1270px]:text-2xl"
              >
                Participe de nossas próximas reuniões
              </h2>
            </div>
          </div>
          <button
            data-isopen={schedule !== null}
            className="
              h-12 w-[15rem] mt-12 px-4 py-1 text-white border-white rounded-xl
              transition duration-300 ease-in-out
              hover:bg-red-primary hover:text-white border
              max-[1270px]:h-10 max-[1270px]:w-[10rem]
              invisible data-[isopen=true]:visible"
            type="submit"
            onClick={() => setSchedule(null)}
          >
            <span
              className="
            text-lg 
            max-[1270px]:text-xs"
            >
              Ver todas as agendas
            </span>
          </button>
        </div>
      </div>
      {renderScheules()}
    </>
  );
};
