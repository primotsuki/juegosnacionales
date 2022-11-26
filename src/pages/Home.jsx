const HomePage = () => {
    return (
        <main id="home-page" className="max-w-[100%] flex flex-row flex-wrap items-center justify-end h-[75vh] md:h-screen md:bg-[url('/futbol.png')] bg-no-repeat bg-contain">
            <div className="flex flex-col items-center md:items-end md:pr-14">
                <img src="/olimpiadas_logo_2.png" alt="logo_unidos" className="w-80 md:w-96 md:py-0 py-4"/>
                <span className="text-2xl md:text-3xl text-center">Juegos Nacionales Bautistas</span>
                <h1 className="font-barriecito text-6xl md:text-7xl text-center">Unidos En la Altura</h1>
                <span className="text-2xl pb-4 text-center font-raleway"> El alto del 3 al 7 de enero de 2023</span>
                <div className="basis-full ">
                    <button className="bg-rose text-white rounded-md px-16 py-4 text-3xl">Inscribete ya! <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </main>
    );
};
export default HomePage;