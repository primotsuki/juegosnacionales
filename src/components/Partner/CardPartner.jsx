const CardPartner = ( {logo, name} ) => {
    return (
        <div className="max-w-md flex flex-col items-center m-3">
            <img src={logo} alt="auspiciador" className="w-24 h-24 block rounded-full border "/>
            <h4 className="font-raleway text-center text-xs">{name}</h4>
        </div>
    )
}

export default CardPartner;