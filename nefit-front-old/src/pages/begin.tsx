/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Carrousel } from "../components/Carrousel";

import testeMiniNoticia1 from "../Assets/images/testeMiniNoticia1.jpg";
import testeAgenda from "../Assets/images/testeAgenda.png";

import { BsCalendarCheck } from "react-icons/bs";
import { News } from "../components/News";
import { useState } from "react";
import { Footer } from "../components/Footer";

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

export const Begin = () => {
  const [schedule, setSchedule] = useState<any>(null);

  const allSchedules = (): JSX.Element[] => {
    return schedules.map((s, i) => (
      <img
        className="h-[40rem] w-[40rem] rounded-xl object-cover cursor-pointer mb-20"
        src={s.image}
        alt={`testemini-${i}`}
        onClick={(e) =>
          setSchedule(schedules[parseInt(e.target.alt.split("-")[1])])
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
          <img
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
      <Carrousel />
      <div className="grid grid-cols-12 mt-14">
        <h1 className="justify-self-center col-span-12 text-red-primary text-[40px] font-bold">
          Últimas publicações
        </h1>
        <div className="max-[1950px]:justify-self-center col-start-2 col-end-12 col-span-12 grid min-[1950px]:grid-cols-4 min-[1016px]:grid-cols-2 grid-cols-1 mt-8 gap-14">
          <News
            image={testeMiniNoticia1}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
          <News
            image={testeMiniNoticia1}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
          <News
            image={testeMiniNoticia1}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
          <News
            image={testeMiniNoticia1}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
        </div>
        <button
          className="justify-self-center col-span-12 transition duration-300 ease-in-out hover:text-white hover:bg-red-primary px-4 py-1 border text-red-primary border-red-primary rounded-xl h-10 w-32 mt-12"
          type="submit"
        >
          <a className="text-lg" href="">
            Ver mais
          </a>
        </button>
      </div>

      <div className="grid grid-cols-12 bg-[#69130E] mt-14 text-white">
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
      </div>

      <Footer />
    </>
  );
};
