"use client";

import Image from "next/image";
import { useState } from "react";

import { BsCalendarCheck } from "react-icons/bs";
import testeAgenda from "../Assets/images/testeAgenda.png";

const schedules = [
  {
    image: testeAgenda,
    description:
      'teste1 Dando continuidade às nossas discussões sobre Positivismo, hoje teremos um dos encontros mais importantes\n\nFalaremos sobre o positivismo jurídico de Scott Shapiro. Para a discussão, analisaremos um capítulo da obra "legalidade" do autor, onde busca desenvolver, preliminarmente, a sua teoria positivista.',
    date: "01/02/2022",
    localization:
      "Nos reunimos às 18h30, na sala 310, 2° andar da faculdade de direito da UFPR.",
  },
  {
    image: testeAgenda,
    description:
      'teste2 Dando continuidade às nossas discussões sobre Positivismo, hoje teremos um dos encontros mais importantes\n\nFalaremos sobre o positivismo jurídico de Scott Shapiro. Para a discussão, analisaremos um capítulo da obra "legalidade" do autor, onde busca desenvolver, preliminarmente, a sua teoria positivista.',
    date: "01/02/2022",
    localization:
      "Nos reunimos às 18h30, na sala 310, 2° andar da faculdade de direito da UFPR.",
  },
  {
    image: testeAgenda,
    description:
      'teste3 Dando continuidade às nossas discussões sobre Positivismo, hoje teremos um dos encontros mais importantes\n\nFalaremos sobre o positivismo jurídico de Scott Shapiro. Para a discussão, analisaremos um capítulo da obra "legalidade" do autor, onde busca desenvolver, preliminarmente, a sua teoria positivista.',
    date: "01/02/2022",
    localization:
      "Nos reunimos às 18h30, na sala 310, 2° andar da faculdade de direito da UFPR.",
  },
];

export type SchedulerType = {};

export const Schedulers = ({}: SchedulerType) => {
  const [schedule, setSchedule] = useState<any>(null);

  const allSchedules = (): JSX.Element[] => {
    return schedules.map((s, i) => (
      <Image
        key={i}
        className="h-[22rem] w-[22rem] rounded-xl object-cover cursor-pointer"
        src={s.image}
        alt={`testemini-${i}`}
        onClick={(e: any) =>
          setSchedule(schedules[parseInt(e?.target?.alt.split("-")[1])])
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
            flex justify-between gap-8
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
              alt="testemini1"
            />
            <div
              className="
              pt-4 font-light justify-self-center whitespace-pre-line w-[30rem] h-[18rem]
              max-[850px]:text-sm max-[680px]:text-xs"
            >
              {`${schedule.description}\n\nData: ${schedule.date}\n${schedule.localization}\n\nEsperamos todos a sua presença`}
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
