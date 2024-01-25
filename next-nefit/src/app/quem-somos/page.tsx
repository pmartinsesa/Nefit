import Image from "next/image";

import { Cover } from "@/components/Cover";

import quemSomosUm from "../../Assets/Images/quem-somos-1.png";
import quemSomosDois from "../../Assets/Images/quem-somos-2.png";

export default function aboutus() {
  return (
    <>
      <Cover title="Quem Somos" />
      <div className="grid grid-cols-12 mt-20 gap-32 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-5 ">
          <Image
            className="h-[27rem] w-[34.125rem]"
            src={quemSomosUm}
            alt="quem-somos1"
          />
        </div>
        <div className="col-span-6 flex flex-col w-[34rem]">
          <h1 className=" text-red-primary text-4xl font-bold">
            Somos o NEFIT
          </h1>
          <p className="mt-6 text-xl text-gray-800">
            O NEFIT – Núcleo de Estudos em Filosofia e Teoria do Direito é um
            grupo de pesquisa que busca colocar em movimento a Teoria e a
            Filosofia do Direito no Brasil. O grupo surgiu em julho de 2020,
            ainda na pandemia, por iniciativa de discentes da Universidade
            Federal do Paraná. Desde então, desempenhou atividades que, aos
            poucos, foram incluindo pesquisadores, discentes e docentes de
            outras instituições.
          </p>
        </div>
        <div className="col-start-2 col-span-5 mt-44">
          <p className="text-xl text-gray-800 w-[34rem]">
            O núcleo centralizou suas atuações até aqui na organização de
            eventos e publicações coletivas, sem deixar de mirar em atividades
            de extensão e divulgação científica do conhecimento jurídico da
            Filosofia e Teoria do Direito. Para isto, o grupo desenvolve essas
            atividades focando em três eixos de atuação: a) Positivismos
            jurídicos; b) Teorias ‘do’ e ‘ao’ Direito e; c) Hermenêutica
            jurídica e teoria geral do Direito e democracia.
          </p>
        </div>
        <div className="mt-44 col-span-6">
          <Image
            className="h-[27rem] w-[34.125rem]"
            src={quemSomosDois}
            alt="quem-somos2"
          />
        </div>
        <div className="justify-self-center col-span-12 border-t-2 border-gray-300 mt-14 mb-6 w-[42rem]"></div>
        <h1 className="justify-self-center col-span-12 text-red-primary text-4xl font-bold">
          Membros
        </h1>
        <div
          className="
          justify-self-center col-span-12 grid grid-cols-4 gap-x-40 gap-y-16 mb-48
         "
        >
          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 1</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 2</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 3</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 4</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 5</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 6</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 7</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 8</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 9</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 10</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 11</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>

          <div className="flex flex-col justify-center items-center text-gray-500 h-[12rem] w-[12rem]">
            <Image
              className="rounded-full h-[9rem] w-[9rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
            <div className="font-bold mt-1">Nome 12</div>
            <div className="mt-1">Descrição do q faz</div>
          </div>
        </div>
      </div>
    </>
  );
}
