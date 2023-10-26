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
        className="h-[40rem] w-[40rem] rounded-xl object-cover cursor-pointer mb-20"
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
        <div className="col-start-2 col-end-12 col-span-12 max-[1650px]:justify-self-center grid min-[1650px]:grid-cols-3 grid-cols-1 mt-20 gap-10">
          {allSchedules()}
        </div>
      );
    }

    return (
      <>
        <div className="col-start-11 mt-12">
          <button
            className="justify-self-center col-span-12 transition duration-300 ease-in-out hover:bg-red-primary hover:text-white px-4 py-1 border text-white border-white rounded-xl h-12 w-[15rem] mt-12"
            type="submit"
            onClick={() => setSchedule(null)}
          >
            <span className="text-lg">Ver todas as agendas</span>
          </button>
        </div>
        <div className="col-start-2 col-end-11 col-span-12 grid grid-cols-2 mt-20 gap-4">
          <Image
            className="h-[40rem] w-[40rem] rounded-xl object-cover cursor-pointer mb-20"
            src={schedule.image}
            alt="testemini1"
          />
          <div className="min-[1674px]:text-[26.5px] min-[1270px]:text-[25px] text-[22px] pt-4 font-light justify-self-center whitespace-pre-line">{`${schedule.description}\n\nData: ${schedule.date}\n${schedule.localization}\n\nEsperamos todos a sua presença`}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="col-span-6 col-start-2 flex pt-16">
        <BsCalendarCheck className=" w-9 h-9" />
        <div className="ml-5 -mt-3">
          <h1 className="text-[40px] font-bold">Agenda</h1>
          <h2 className="text-[30px] font-extralight">
            Participe de nossas próximas reuniões
          </h2>
        </div>
      </div>
      {renderScheules()}
    </>
  );
};
