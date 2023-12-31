
import { Carrousel } from "../components/Carrousel";
import testeMiniNoticia1 from "../Assets/images/testeMiniNoticia1.jpg";

import { News } from "../components/News";
import { Schedulers } from "@/components/Schedulers";

export default function Begin() {

  return (
    <>
      <Carrousel />
      <div className="grid grid-cols-12 mt-14">
        <h1 className="justify-self-center col-span-12 text-red-primary text-[40px] font-bold">
          Últimas publicações
        </h1>
        <div className="max-[1950px]:justify-self-center col-start-2 col-end-12 col-span-12 grid min-[1950px]:grid-cols-4 min-[1016px]:grid-cols-2 grid-cols-1 mt-8 gap-14">
          <News
            image={testeMiniNoticia1 as unknown as string}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
          <News
            image={testeMiniNoticia1 as unknown as string}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
          <News
            image={testeMiniNoticia1 as unknown as string}
            title="Título criativo da postagem dentro do site para chamar atenção"
            publishTime="04 de maio / 2023"
            hashtags="#Literatura #Hashtag"
            route=""
          />
          <News
            image={testeMiniNoticia1 as unknown as string}
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
        <Schedulers/>
      </div>
    </>
  );
}
