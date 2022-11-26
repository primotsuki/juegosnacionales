import { Component } from 'react';
import Slider from 'react-slick';

import CardPartner from '../components/Partner/CardPartner';

const sponsors = [ {
    logo : '/partners/ubb.jpeg',
    name :'Union bautista Boliviana'
}, {
    logo : '/partners/ablp.jpeg',
    name :'Asociacion Bautista La Paz'
},{
    logo : '/partners/stb.jpeg',
    name :'Seminario teologico La Paz'
},{
    logo : '/partners/obades.jpeg',
    name :'OBADES'
},{
    logo : '/partners/diaconia.jpg',
    name :'Diaconia IFD'
}, {
    logo : '/partners/ujbb.jpeg',
    name :'Union de jovenes bautista Boliviana'
}, {
    logo : '/partners/ablp.jpeg',
    name :'Asociacion Bautista La Paz'
},{
    logo : '/partners/stb.jpeg',
    name :'Seminario teologico La Paz'
},{
    logo : '/partners/obades.jpeg',
    name :'OBADES'
}]
class Partners extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }]
        }
        return (
            <section id="sponsors" className="flex flex-col items-center justify-start px-2 md:px-3 md:h-[50vh]">
                <h1 className="text-4xl py-4 text-center font-barriecito"> Este evento esta apoyado por :</h1>
                <Slider { ...settings } className="w-full">
                    {sponsors.map( (sponsor, i) => (
                        <CardPartner key={i} logo={sponsor.logo} name={sponsor.name}/>
                    ) )}

                </Slider>
            </section>
        )
    }
    
}

export default Partners;