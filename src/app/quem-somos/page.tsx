import React from "react";
import Image from "next/image";

import { Cover } from "@/components/Cover";
import { MembersPainel } from "@/components/quem-somos/MembersPainel";


export default function Aboutus() {
  return (
    <>
      <Cover title="Quem Somos" />
      <div className="grid grid-cols-12 mt-20 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10 flex gap-10 justify-between max-[1270px]:flex-col max-[1270px]:items-center">
          <Image
            className="h-[27rem] w-[40rem] rounded-xl"
            src="https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fsobre-nos%2Fimagens%2Fgeral.jpeg?alt=media&token=343c2a3e-f9fc-4848-843e-789aa6c67022"
            width={500}
            height={500}
            alt="quem-somos1"
          />
          <div className="flex flex-col min-[1950px]:w-[45rem] w-full">
            <h1 className=" text-red-primary text-4xl font-bold max-[1270px]:mt-10">
              Somos o NEFIT
            </h1>
            <p className="mt-6 text-gray-700 tracking-wider leading-relaxed">
              O NEFIT – Núcleo de Estudos em Filosofia e Teoria do Direito é um
              grupo de pesquisa que busca colocar em movimento a Teoria e a
              Filosofia do Direito no Brasil. O grupo surgiu em julho de 2020,
              ainda na pandemia, por iniciativa de discentes da Universidade
              Federal do Paraná. Desde então, desempenhou atividades que, aos
              poucos, foram incluindo pesquisadores, discentes e docentes de
              outras instituições.
            </p>
          </div>
        </div>
        <div className="col-start-2 col-span-10 mt-44 flex justify-between gap-10 max-[1270px]:flex-col max-[1270px]:items-center">
          <p className="text-gray-700 tracking-wider leading-relaxed min-[1950px]:w-[45rem] w-full">
            O núcleo centralizou suas atuações até aqui na organização de
            eventos e publicações coletivas, sem deixar de mirar em atividades
            de extensão e divulgação científica do conhecimento jurídico da
            Filosofia e Teoria do Direito. Para isto, o grupo desenvolve essas
            atividades focando em três eixos de atuação: a) Positivismos
            jurídicos; b) Teorias ‘do’ e ‘ao’ Direito e; c) Hermenêutica
            jurídica e teoria geral do Direito e democracia.
          </p>
          <Image
            className="h-[27rem] w-[40rem] rounded-xl"
            src="https://firebasestorage.googleapis.com/v0/b/nefit-dev.appspot.com/o/Nefit%2Fsobre-nos%2Fimagens%2Fgeral2.jpg?alt=media&token=bf5e43c8-bdd5-4249-9073-1e0e8fe93953"
            width={500}
            height={500}
            alt="quem-somos2"
          />
        </div>
        <div className="justify-self-center col-span-12 border-t-2 border-gray-300 mt-20 mb-16 min-[1950px]:w-[42rem] w-full"></div>
        <h1 className="justify-self-center col-span-12 text-red-primary mb-14 text-4xl font-bold">
          Membros
        </h1>
        <div
          className="
          col-start-2 col-span-10 min-[1950px]:w-[75rem] mb-10
         "
        >
          <div className="flex justify-center flex-wrap gap-y-20 gap-x-8">
            <MembersPainel />
          </div>
        </div>
      </div>
    </>
  );
}
