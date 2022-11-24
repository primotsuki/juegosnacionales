const CardInfo = ({ info }) => {
    return (
        <div className="flex flex-row justify-center relative h-[50vh]">
            <div className={`${info.color} w-2/3 h-64 absolute z-0  rounded-md flex flex-row justify-center`}>
                <span className="text-white text-5xl py-3">
                    <i className={info.icon}></i>
                </span>
            </div>
            <div className=" w-2/3 h-64 z-10 bg-white border border-gray-100 shadow-md rounded-md absolute top-20 left-5 flex flex-col justify-center items-center p-3">
                <h1 className="text-2xl font-barriecito text-center">{info.title}</h1>
                <p className="text-center p-2 font-raleway">{info.brief}</p>
                <button className={`${info.color} px-6 py-2 text-white rounded-md`}>Ver mas</button>
            </div>
        </div>
    )
};

export default CardInfo;