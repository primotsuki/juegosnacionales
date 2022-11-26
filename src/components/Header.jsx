import { useState, useEffect, useRef} from "react";
import SideMenu from "./SideMenu/SideMenu";

const Header = () => {

    const [ open, setOpen ] = useState(false);
    const navElem = useRef(null);
    const handleOpen = () => {
        console.log('openning menu')
        setOpen(true);
    };
    const handleClose = () =>{
        setOpen(false);
    }
    useEffect(()=>{
        setTimeout(()=>{
            navElem.current.firstChild.classList.add('hide_menu`')
        })
    },[])
    return (
        <nav ref={navElem} className="bg-white h-14 shadow-md flex flex-row items-center justify-between fixed w-screen max-w-[100%] z-20">
            <SideMenu className="md:hidden" open={open} handleOpen={handleOpen} handleClose={handleClose} pageWrapId={'sideMenuBar'} outerContainerId={'app'}/>
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
    )
};
export default Header;