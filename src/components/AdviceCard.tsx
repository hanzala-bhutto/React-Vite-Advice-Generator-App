import { useEffect, useState } from "react";

const AdviceCard = () => {

    const [advice, setAdvice] = useState({
        id: 0,
        advice: ''
    })

    useEffect(() => {
        generateAdvice();
    },[])

    const generateAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => {setAdvice(data.slip);console.log(data.slip)})
    }



    return (
        <>
            <section className="w-80 md:w-96 flex flex-col items-center gap-6 p-10 pb-0 rounded-2xl bg-darkGreyBlue">
                <h1 className="text-xs font-bold text-neonGreen">ADVICE #{advice.id}</h1>
                <p className="text-2xl font-bold text-litCyan text-center">"{advice.advice}"</p>
                <img src='./images/pattern-divider-desktop.svg' alt='pattern divider' />
                <div onClick={generateAdvice} className="-m-3 relative top-4">
                    <img className=" bg-neonGreen rounded-full p-4 cursor-pointer" src='./images/icon-dice.svg' alt='icon dice' />
                </div>
            </section>
        </>
    )
    
}

export default AdviceCard;