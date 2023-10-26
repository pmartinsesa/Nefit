import Image from "next/image";

import { Cover } from "@/components/Cover";

import quemSomosUm from "../../Assets/Images/quem-somos-1.png";
import quemSomosDois from "../../Assets/Images/quem-somos-2.png";

export default function aboutus() {
  return (
    <>
      <Cover title="Quem Somos" />
      <div className="grid grid-cols-12 mt-20">
        <div className="col-start-2 col-span-10 grid grid-cols-2">
          <div className="col-start-1">
            <Image
              className="h-[33rem] w-[50rem]"
              src={quemSomosUm}
              alt="quem-somos1"
            />
          </div>
          <div className="col-start-2 w-[50rem]">
            <h1 className=" text-red-primary text-[40px] font-bold">
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
          <div className="col-start-1 w-[50rem] mt-[17rem]">
            <p className="text-xl text-gray-800">
              O núcleo centralizou suas atuações até aqui na organização de
              eventos e publicações coletivas, sem deixar de mirar em atividades
              de extensão e divulgação científica do conhecimento jurídico da
              Filosofia e Teoria do Direito. Para isto, o grupo desenvolve essas
              atividades focando em três eixos de atuação: a) Positivismos
              jurídicos; b) Teorias ‘do’ e ‘ao’ Direito e; c) Hermenêutica
              jurídica e teoria geral do Direito e democracia.
            </p>
          </div>
          <div className="col-start-2 mt-[17rem]">
            <Image
              className="h-[33rem] w-[50rem]"
              src={quemSomosDois}
              alt="quem-somos2"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-[10rem] mb-12">
        <h1 className="justify-self-center col-span-12 text-red-primary text-[40px] font-bold">
          Membros
        </h1>
      </div>
    </>
  );
}
