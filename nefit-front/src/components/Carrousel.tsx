import testeNoticiaUm from "../Assets/images/testeNoticiaUm.png";

export const Carrousel = () => {
    return (
        <>
            <div className="text-white">
                <img className="w-full h-[42rem] object-cover brightness-50 bg-no-repeat" src={testeNoticiaUm} alt="not1" />
                <div className="absolute -mt-[24.5rem] z-10 ml-[190px] w-[33rem] h-[11.75rem]">
                    <div className="h-auto text-[40px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <button
                        className="transition duration-300 ease-in-out hover:bg-black px-4 py-1 border rounded-xl h-10 w-32 mt-2"
                        type="submit">
                        <a className="text-lg" href="">Ver mais</a>
                    </button>
                    <div className="flex gap-4 cursor-pointer mt-8">
                        <div className="bg-red-secondary hover:bg-gray-400 rounded-xl w-7 h-3"></div>
                        <div className="bg-white hover:bg-gray-400 rounded-xl w-7 h-3"></div>
                        <div className="bg-white hover:bg-gray-400 rounded-xl w-7 h-3"></div>
                        <div className="bg-white hover:bg-gray-400 rounded-xl w-7 h-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}