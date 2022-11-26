import { useState } from 'react';
const Question = ( {question}) => {

    const [open, setOpen] = useState(false);
    return (
    <div id='question' className="w-full border-b border-gray-200 flex flex-col items-center">
        <div className='flex flex-row w-full justify-between items-start py-3'>
            <h2 className='text-2xl text-obs'>{question.question}</h2>
            <button onClick={() => {setOpen(!open)}} className='p-2'>
                {
                    open ?
                        <i className="fa-solid fa-circle-minus text-xl text-obs"></i>
                    :
                        <i className="fa-solid fa-circle-plus text-xl text-obs"></i>
                }
            </button>
        </div>
        <ul className={`font-raleway text-lg flex flex-col w-10/12 pb-3 ${ !open && 'hidden'} list-disc`}>{
            question.answers.map((answer, i)=> (
                <li key={i}>
                    {answer}
                </li>
            ))
        
        }
        </ul>
    </div>
    )
};

const Questions = () => {
    const questions = [{
        question: 'Quienes pueden participar del evento?',
        answers: ['Todos los miembros de las Uniones de Jovenes Bautistas de Bolivia', 
                    'Las personas con membresia y con una antiguedad de mas de 2 años en sus iglesias.']
    }, {
        question: 'como puedo participar del evento?',
        answers: [
            'Puedes inscribirte a cancelando tu inscripcion de 380 bs hasta el 11 de diciembre',
            <span>haz tu deposito al Nro de cuenta 12321412111 BNB o puedes pagar mediante QR <a className='underline text-sky' download="/diaconia.jpg" href="/path/to/image" title="ImageName">
                aqui,
        </a>
        </span>,
        'Si ya realizaste el deposito, puedes inscribirte y tener tu tarjeta de inscripcion atraves de esta misma pagina'
        ]
    }, {
        question: 'Cuales seran las reglas del Evento?',
        answers: [
            'Todas las disciplinas se jugaran bajo el cumplimiento de nuestro reglamento',
            <span>Puedes revisar el reglamento de las disciplinas deportivas <a className='underline text-sky' download="/diaconia.jpg" href="/path/to/image" title="ImageName">
                aqui</a> </span>,
            <span>Puedes revisar el reglamento de las disciplinas ministeriales <a className='underline text-sky' download="/diaconia.jpg" href="/path/to/image" title="ImageName">
            aqui</a> </span>
        ]
    }, {
        question: 'Como se definira los Ganadores?',
        answers:[
            'Tendremos un Podia premiando a los 3 mejores distritos de los juegos',
            'Para el podio se tomara en cuenta la totalidad de disciplinas en las que participo cada distrito'
        ]
    }]
    return (
        <section id="questions" className="max-w-[100%] flex flex-col flex-wrap items-center justify-start py-10">
            <h1 className="text-3xl pb-12 font-barriecito">Preguntas frecuentes</h1>
            <div id="accordion" className="w-full md:w-1/2 px-4">
                {questions.map((elem, i) => <Question key={i}question={elem}/>)}
            </div>
        </section>
    )
};

export default Questions;