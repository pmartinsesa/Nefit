import { Carrousel } from "../components/Carrousel";

import testeMiniNoticia1 from "../Assets/images/testeMiniNoticia1.jpg";


export const Begin = () => {
    return (
        <>
            <Carrousel />
            <div className="flex flex-col justify-center items-center mt-14">
                <h1 className="text-red-primary text-[40px] font-bold">Últimas publicações</h1>
            
                <div className="flex mt-8 gap-5">
                    <div>
                        <a className="" href="">
                            <img className="transition duration-300 ease-in-out h-96 w-96 rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                        </a>
                    </div>
                    <div>
                        <a className="" href="">
                            <img className="transition duration-300 ease-in-out h-96 w-96 rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                        </a>
                    </div>
                    <div>
                        <a className="" href="">
                            <img className="transition duration-300 ease-in-out h-96 w-96 rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                        </a>
                    </div>
                    <div>
                        <a className="" href="">
                            <img className="transition duration-300 ease-in-out h-96 w-96 rounded-xl grayscale-[80%] object-cover hover:grayscale-0" src={testeMiniNoticia1} alt="testemini1" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}