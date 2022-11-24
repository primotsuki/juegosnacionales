import { useState } from 'react';
const Question = ( {question}) => {

    const [open, setOpen] = useState(false);
    return (
    <div id='question' className="w-full border-b border-gray-200">
        <div className='flex flex-row justify-between items-start'>
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
        <p className={`font-raleway text-lg flex ${ !open && 'hidden'} `}>{question.answer}</p>
    </div>
    )
};

const Questions = () => {
    const questions = [{
        question: 'Quienes pueden participar del evento?',
        answer: 'Todos los miembros de las iglesias Bautistas de Bolivia'
    }]
    return (
        <div className="flex flex-col flex-wrap items-center justify-start h-screen">
            <h1 className="text-3xl pb-12">Preguntas frecuentes</h1>
            <div id="accordion" className="w-full md:w-1/2 px-4">
                {questions.map(elem => <Question question={elem}/>)}
            </div>
        </div>
    )
};

export default Questions;