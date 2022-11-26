const Footer = () => {
    const ubicaciones=[{
        name:'Complejo Fabril',
        location: 'https://goo.gl/maps/rszw9FKvXPdMSMte6'
    },{
        name:'Colegio Elizardo Perez',
        location: 'https://goo.gl/maps/rszw9FKvXPdMSMte6'
    },{
        name:'Piscina Semi olimpica El Alto',
        location: 'https://goo.gl/maps/rszw9FKvXPdMSMte6'
    },{
        name:'Iglesia Bautistas Villa Esperanza',
        location: 'https://goo.gl/maps/rszw9FKvXPdMSMte6'
    }]
    return (
        <footer id="footer" className="w-screen max-w-[100%] md:h-[50vh] bg-obs text-white grid grid-cols-3 gap-4">
            <div id='ubicaciones' className="col-span-full md:col-span-1 flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl py-3">Lugares principales del evento</h1>
                <ul>
                {ubicaciones.map((location, i)=>
                    <li className="py-2 font-raleway" key={i}>
                        <a href={location.location} target="_blank"><i className="fa-solid fa-location-dot text-rose"></i>&nbsp;&nbsp; {location.name} </a>
                    </li>
                    )}
                </ul>

            </div>
            <div id='contactos' className='col-span-full md:col-span-1 flex flex-col items-center justify-center'>
                <h1 className="text-3xl py-3">Escribenos para saber mas</h1>
                <div className="flex flex-col items-center py-5">
                    <span className="font-raleway">Angel Escobar - Presidente del comite</span>
                    <p className="text-3xl"><i className="fa-solid fa-mobile-screen-button"></i> + 591 76140304</p>
                    <a className="p-3 border border-solid rounded-md" target='_blank'
                        href="https://wa.me/59176140304?text=Quisiera%20mas%20informacion%20del%20evento"> 
                        <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;
                        Enviar mensaje
                        </a>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-raleway">Damaris Arias - Inscripciones</span>
                    <p className="text-3xl"><i className="fa-solid fa-mobile-screen-button"></i> + 591 68069754</p>
                    <a className="p-3 border border-solid rounded-md" target='_blank'
                        href="https://wa.me/59168069754?text=Quisiera%20mas%20informacion%20del%20evento"> 
                        <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;
                        Enviar mensaje
                        </a>
                </div>
            </div>
            <div id='creditos' className="col-span-full md:col-span-1 flex flex-col justify-center items-center">
                <div className="text-7xl font-barriecito">
                    ujbea
                </div>
                <p className="text-end font-raleway">
                    Union de jovenes Bautistas El Alto <br />
                    La Paz - Bolivia <br />
                    Apoyan: <br />
                    UJBB-UBB-ABLP <br />
                </p>
                <div className="w-full flex flex-row justify-center">
                    <div className="border rounded-full w-14 h-14 flex flex-row justify-center items-center m-2 text-xl">
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                    <div className="border rounded-full w-14 h-14 flex flex-row justify-center items-center m-2 text-xl">
                        <a href="" ><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                    <div className="border rounded-full w-14 h-14 flex flex-row justify-center items-center m-2 text-xl">
                        <a href="" ><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;