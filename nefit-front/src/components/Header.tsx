import { BsSearch } from 'react-icons/bs';
import nefitLogo from "../Assets/images/logo.png";

export const Header = () => {
    return (
        <>
            <div className="absolute z-10 w-full">
                <div className="flex justify-around items-center h-16 mt-9 text-white text-xl">
                    <div>
                        <a className="" href="">
                            <img className="object-fill h-16 w-48 bg-no-repeat" src={nefitLogo} alt="logo" />
                        </a>
                    </div>
                    <ul className="flex gap-14 list-none">
                        <li className="text-red-active underline underline-offset-8"><a href="">Início</a></li>
                        <li className="hover:underline hover:underline-offset-8"><a href="">Quem somos</a></li>
                        <li className="hover:underline hover:underline-offset-8"><a href="">Produção acadêmica</a></li>
                        <li className="hover:underline hover:underline-offset-8"><a href="">Membros</a></li>
                        <li className="hover:underline hover:underline-offset-8"><a href="">Contato</a></li>
                    </ul>
                    <button><BsSearch /></button>
                </div>
            </div>
        </>
    )
}