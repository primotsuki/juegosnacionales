import { Component } from 'react';
import CardInfo from '../components/disciplines/CardInfo'
import Slider from 'react-slick';
const disciplinas = [{
    title: 'Futbol y Fustal',
    color: 'bg-obs',
    icon: 'fa-solid fa-football',
    brief: 'forma parte de esta disciplina y participa con un minimo de 11 jugadores, Futbol esta habilitado solo para varones. Futsal tendra su version de damas y varones',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos']
}, {
    title: 'Voleibol',
    icon: "fa-solid fa-volleyball",
    color: 'bg-emerald',
    brief: 'Esta disciplina tendra su version de damas y varones, participa con un minimo de 6 jugadores',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
},{
    title: 'Basquetbol',
    icon: "fa-solid fa-basketball",
    color: 'bg-amber',
    brief: 'Esta disciplina tendra su version de damas y varones, participa con un minimo de 6 jugadores',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
},
{
    title: 'Conocimiento Biblico',
    icon: 'fa-solid fa-book-bible',
    color: 'bg-sky',
    brief: 'Disciplina mixta, en su version de Conocimiento general, Esgrima biblico y mayor cantidad de versiculos',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
},{
    title: 'Danza y Pandero',
    icon: 'fa-solid fa-church',
    color: 'bg-emerald',
    brief: 'forma parte de esta disciplina y participa con un minimo de 11 jugadores',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
},{
    title: 'Cortometrajes',
    icon: 'fa-solid fa-film',
    color: 'bg-rose',
    brief: 'Crear tu propio cortometraje de no mas de 20 minutos, la tematica es La iglesia en la pandemia',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
}]
class Disciplines extends Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            responsive: [
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
          };
        return (
            <div className="md:h-[75vh] w-screen max-w-[100%] flex flex-col items-center p-3">
                <div id='heading' className='h-40 flex items-center'>
                    <h1 className='text-4xl font-barriecito'>Disciplinas a Realizarse</h1>
                </div>
                <Slider {...settings} className='w-full '>
                    {disciplinas.map(element=>{
                        return (
                            <CardInfo key={element.title} info={element}/>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Disciplines;