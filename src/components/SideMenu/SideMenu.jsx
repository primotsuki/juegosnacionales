import { slide as Menu } from "react-burger-menu";
import './sideMenu.css';

const SideMenu = ({open, handleOpen, handleClose, ...rest}) => {
    return (
        <Menu {...rest}
        isOpen={open} 
        customBurgerIcon={<i onClick={handleOpen} className="fa-solid fa-bars"></i>}
        >
            <a href="#home" onClick={handleClose}>Inicio</a>
            <a href="#disciplines" onClick={handleClose}>Disciplinas</a>
            <a href="#questions" onClick={handleClose}>Preguntas frecuentes</a>
            <a href="#footer" onClick={handleClose}>Mas informacion</a>
            <a href="">Inscripciones</a>
            <a href="">Resultados</a>
        </Menu>
    )
};

export default SideMenu;