import Image from "next/image";

import { Cover } from "@/components/Cover";

import quemSomosUm from "../../Assets/Images/quem-somos-1.png";
import quemSomosDois from "../../Assets/Images/quem-somos-2.png";
import { MemberCard } from "@/components/MemberCard";

const NEFIT_MEMBERS = [
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
  {
    name: "nome1",
    description: "oq faz",
    image: quemSomosUm,
  },
];

const renderMembers = (members: Array<any>) => {
  return members.map((m) => (
    <MemberCard key={m.name} name={m.name} description={m.description} image={m.image} />
  ));
};

export default function aboutus() {
  return (
    <>
      <Cover title="Quem Somos" />
      <div className="grid grid-cols-12 mt-20 min-[1950px]:justify-items-center">
        <div className="col-start-2 col-span-10 flex gap-12 justify-between max-[1270px]:flex-col max-[1270px]:items-center">
          <Image
            className="h-[27rem] w-[34.125rem]"
            src={quemSomosUm}
            alt="quem-somos1"
          />
          <div className="flex flex-col w-[34rem]">
            <h1 className=" text-red-primary text-4xl font-bold max-[1270px]:mt-10">
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
        </div>
        <div className="col-start-2 col-span-10 mt-44 gap-12 flex justify-between max-[1270px]:flex-col max-[1270px]:items-center">
          <p className="text-xl text-gray-800 w-[34rem]">
            O núcleo centralizou suas atuações até aqui na organização de
            eventos e publicações coletivas, sem deixar de mirar em atividades
            de extensão e divulgação científica do conhecimento jurídico da
            Filosofia e Teoria do Direito. Para isto, o grupo desenvolve essas
            atividades focando em três eixos de atuação: a) Positivismos
            jurídicos; b) Teorias ‘do’ e ‘ao’ Direito e; c) Hermenêutica
            jurídica e teoria geral do Direito e democracia.
          </p>
          <Image
            className="h-[27rem] w-[34.125rem]"
            src={quemSomosDois}
            alt="quem-somos2"
          />
        </div>
        <div className="justify-self-center col-span-12 border-t-2 border-gray-300 mt-20 mb-16 w-[42rem]"></div>
        <h1 className="justify-self-center col-span-12 text-red-primary mb-14 text-4xl font-bold">
          Membros
        </h1>
        <div
          className="
          col-start-2 col-span-10 grid justify-items-center min-[1271px]:grid-cols-4 gap-x-40 gap-y-16 mb-48
          min-[610px]:grid-cols-2 min-[1270px]:grid-cols-3
         "
        >
          {renderMembers(NEFIT_MEMBERS)}
        </div>
      </div>
    </>
  );
}
