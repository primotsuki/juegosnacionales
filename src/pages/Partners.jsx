import { Component } from 'react';
import Slider from 'react-slick';

// const CardSponsor = () => {
//     return (
    
// }

class Partners extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }]
        }
        return (
            <div className="flex flex-col items-center justify-start px-2 md:px-3 md:h-[50vh]">
                <h1 className="text-4xl py-4 text-center"> Este evento esta apoyado por :</h1>
                <Slider { ...settings } className="w-full">
                    {/* <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor />
                    <CardSponsor /> */}
                    <div className="max-w-md flex flex-col items-center p-4 border border-gray-200 rounded-md shadow-md m-3">
        <img src="/diaconia.jpg" alt="auspiciador" className="w-24 rounded-full border "/>
        <h3 >Diaconia IFD</h3>
        <p className="text-center font-raleway">fondo de desarrollo para el pueblo alteno</p>
    </div>
    <div className="max-w-md flex flex-col items-center p-4 border border-gray-200 rounded-md shadow-md m-3">
        <img src="/diaconia.jpg" alt="auspiciador" className="w-24 rounded-full border "/>
        <h3 >Diaconia IFD</h3>
        <p className="text-center font-raleway">fondo de desarrollo para el pueblo alteno</p>
    </div>
    <div className="max-w-md flex flex-col items-center p-4 border border-gray-200 rounded-md shadow-md m-3">
        <img src="/diaconia.jpg" alt="auspiciador" className="w-24 rounded-full border "/>
        <h3 >Diaconia IFD</h3>
        <p className="text-center font-raleway">fondo de desarrollo para el pueblo alteno</p>
    </div>
                </Slider>
            </div>
        )
    }
    
}

export default Partners;