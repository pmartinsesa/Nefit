import { Carrousel } from "../components/Carrousel";

import testeMiniNoticia1 from "../Assets/images/testeMiniNoticia1.jpg";
import testeAgenda from "../Assets/images/testeAgenda.png";
import logoUfpr from "../Assets/images/logo-ufpr.png";
import logo from "../Assets/images/logo.png";

import { BsCalendarCheck } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";



export const Begin = () => {
    return (
        <>
            <Carrousel />
            {/* Ultimas Publicações */}

            <div className="flex flex-col justify-center items-center mt-14">
                <h1 className="text-red-primary text-[40px] font-bold">Últimas publicações</h1>
                <div className="flex mt-8 gap-7">
                    <div className="flex flex-col">
                        <a className="hover:text-red-primary text-gray-800" href="">
                            <img className="transition duration-300 ease-in-out h-[23rem] w-[23rem] rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                            <h2 className="transition duration-300 ease-in-out text-[20px] w-[25rem] max-h-16 mt-4 font-bold overflow-hidden">
                                Título criativo da postagem dentro do site para chamar atenção
                            </h2>
                        </a>
                        <span className="w-[25rem] mt-1">Publicado em 04 de maio / 2023</span>
                        <span className="w-[25rem] mt-1">#Literatura #Hashtag</span>
                    </div>
                    <div className="flex flex-col">
                        <a className="hover:text-red-primary text-gray-800" href="">
                            <img className="transition duration-300 ease-in-out h-[23rem] w-[23rem] rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                            <h2 className="transition duration-300 ease-in-out text-[20px] w-[25rem] max-h-16 mt-4 font-bold overflow-hidden">
                                Título criativo da postagem dentro do site para chamar atenção
                            </h2>
                        </a>
                        <span className="w-[25rem] mt-1">Publicado em 04 de maio / 2023</span>
                        <span className="w-[25rem] mt-1">#Literatura #Hashtag</span>
                    </div>
                    <div className="flex flex-col">
                        <a className="hover:text-red-primary text-gray-800" href="">
                            <img className="transition duration-300 ease-in-out h-[23rem] w-[23rem] rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                            <h2 className="transition duration-300 ease-in-out text-[20px] w-[25rem] max-h-16 mt-4 font-bold overflow-hidden">
                                Título criativo da postagem dentro do site para chamar atenção
                            </h2>
                        </a>
                        <span className="w-[25rem] mt-1">Publicado em 04 de maio / 2023</span>
                        <span className="w-[25rem] mt-1">#Literatura #Hashtag</span>
                    </div>
                    <div className="flex flex-col">
                        <a className="hover:text-red-primary text-gray-800" href="">
                            <img className="transition duration-300 ease-in-out h-[23rem] w-[23rem] rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                            <h2 className="transition duration-300 ease-in-out text-[20px] w-[25rem] max-h-16 mt-4 font-bold overflow-hidden">
                                Título criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atençãoTítulo criativo da postagem dentro do site para chamar atenção
                            </h2>
                        </a>
                        <span className="w-[26.16rem] mt-1">Publicado em 04 de maio / 2023</span>
                        <span className="w-[26.16rem] mt-1">#Literatura #Hashtag</span>
                    </div>
                </div>
                <button
                    className="transition duration-300 ease-in-out hover:text-white hover:bg-red-primary px-4 py-1 border text-red-primary border-red-primary rounded-xl h-10 w-32 mt-12"
                    type="submit">
                    <a className="text-lg" href="">Ver mais</a>
                </button>
            </div>

            {/* AGENDA */}

            <div className="h-557 bg-[#69130E] mt-14 text-white">
                <div className="flex ml-56 pt-16">
                    <BsCalendarCheck className=" w-9 h-9"/>
                    <div className="ml-5 -mt-3">
                        <h1 className="text-[40px] font-bold">Agenda</h1>
                        <h2 className="text-[30px] font-extralight">Participe de nossas próximas reuniões</h2>
                    </div>
                </div>

                <div className="flex justify-start ml-56 mt-20 gap-10">
                   <img className="h-[32rem] w-[32rem] rounded-xl object-cover" src={testeAgenda} alt="testemini1" />                
                   <img className="h-[32rem] w-[32rem] rounded-xl object-cover" src={testeAgenda} alt="testemini1" />                
                   <img className="h-[32rem] w-[32rem] rounded-xl object-cover" src={testeAgenda} alt="testemini1" />                
                </div>
            </div>

            {/* Footer */}

            <div className="flex justify-around items-center bg-[#E4E4E4] h-32 gap-60">
                <div className="flex gap-7">
                    <img className="object-fill h-16 w-40 bg-no-repeat" src={logo} alt="logo" />
                    <img className="object-fill h-16 w-28 bg-no-repeat" src={logoUfpr} alt="logoufpr" />
                </div>
                <span className="text-gray-800">Todos os direitos reservados © 2023</span>
            </div>
            <div className="bg-[#69130E] flex justify-center items-center h-16 text-white gap-2">
                <a href=""><AiOutlineInstagram className="h-6 w-6"/></a>
                <a href=""><AiFillYoutube className="h-6 w-6"/></a>
                <a href=""><FaFacebookF className="h-6 w-6"/></a>
                <a href=""><AiOutlineTwitter className="h-6 w-6"/></a>
            </div>
        </>
    )
}