import { useState, useEffect, useRef, Fragment} from "react";
import { slide as Menu } from "react-burger-menu";
import './sideMenu.css';

const menuItems = [{
    name: 'Inicio',
    url: '#home'
}, {
    name: 'Disciplinas',
    url: '#disciplines'
}, {
    name: 'Preguntas frecuentes',
    url: '#questions'
}, {
    name: 'Mas informacion',
    url: '#footer'
}, {
    name: 'Inscripciones',
    url: '#'
}, {
    name: 'resultados',
    url: '#'
}]

const Header = () => {

    const [ open, setOpen ] = useState(false);
    const navElem = useRef(null);
    const handleOpen = () => {
        setOpen(true);
        setTimeout(()=>{

        })
    };
    const handleClose = () =>{
        setOpen(false);
    }
    return (
        <Fragment>
            <Menu
                isOpen={open} 
            >
            <button onClick={handleClose} className="!flex w-full flex-row justify-end"><i class="fa-solid fa-xmark"></i></button>
            {menuItems.map(elem=>{
                return(
                    <a href={elem.url} onClick={handleClose}>{elem.name}</a>
                )
            })}
            </Menu>
            <nav ref={navElem} className="bg-white h-14 shadow-md flex flex-row items-center justify-between fixed w-screen max-w-[100%] z-20">
                <button onClick={handleOpen} className="px-4"><i className="fa-solid fa-bars"></i></button>
                <div className="px-2 flex flex-row items-center">
                    <h2>Juegos Bautistas El Alto 2023</h2>
                    <img src="/Olympic_rings.svg" className="w-20 h-14 px-2"/>
                </div>
                <div className="hidden md:block">
                    <ul className="flex flex-row items-center">
                        <li className="px-4 hover:bg-gray-900 hover:text-white hover:rounded-md hover:h-8 flex items-center">
                            Inicio
                        </li>
                        <li className="px-4 hover:bg-gray-900 hover:text-white hover:rounded-md hover:h-8 flex items-center">
                            Disciplinas
                        </li>
                        <li className="px-4 hover:bg-gray-900 hover:text-white hover:rounded-md hover:h-8 flex items-center">
                            Inscripciones
                        </li>
                        <li className="px-4 hover:bg-gray-900 hover:text-white hover:rounded-md hover:h-8 flex items-center">
                            Resultados
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
};
export default Header;