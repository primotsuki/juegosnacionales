const CardSponsor = () => {
    return (
    <div className="max-w-md flex flex-col items-center p-4 border border-gray-200 rounded-md shadow-md">
        <img src="/diaconia.jpg" alt="auspiciador" className="w-24 rounded-full border "/>
        <h3 >Diaconia IFD</h3>
        <p className="text-center font-raleway">fondo de desarrollo para el pueblo alteno</p>
    </div>)
}
const Partners = () => {
    return (
        <div className="flex flex-col items-center justify-start px-2 md:px-3 md:h-[50vh]">
            <h1 className="text-4xl py-4 text-center"> Este evento esta apoyado por :</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 w-full">
                <CardSponsor />
                <CardSponsor />
                <CardSponsor />
                <CardSponsor />
                <CardSponsor />
                <CardSponsor />
            </div>
        </div>
    )
}

export default Partners;