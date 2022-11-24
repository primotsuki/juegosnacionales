import { Component } from 'react';
import CardInfo from '../components/disciplines/CardInfo'
import Slider from 'react-slick';
const disciplinas = [{
    title: 'Futbol',
    color: 'bg-obs',
    icon: 'fa-solid fa-football',
    brief: 'forma parte de esta disciplina y participa con un minimo de 11 jugadores',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos']
}, {
    title: 'Voleibol',
    icon: "fa-solid fa-volleyball",
    color: 'bg-emerald',
    brief: 'forma parte de esta disciplina y participa con un minimo de 11 jugadores',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
},{
    title: 'Conocimiento Biblico',
    icon: 'fa-solid fa-book-bible',
    color: 'bg-amber',
    brief: 'forma parte de esta disciplina y participa con un minimo de 11 jugadores',
    moreInfo: ['Con un maximo de 15 jugadores', 'traer balon para los partidos', '']
},{
    title: 'Danza y Pandero',
    icon: 'fa-solid fa-church',
    color: 'bg-rose',
    brief: 'forma parte de esta disciplina y participa con un minimo de 11 jugadores',
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
            <div className="md:h-[75vh] w-screen flex flex-col items-center p-3">
                <div id='heading' className='h-40 flex items-center'>
                    <h1 className='text-4xl'>Disciplinas a Realizarse</h1>
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