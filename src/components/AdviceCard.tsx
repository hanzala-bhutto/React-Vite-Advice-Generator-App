
const AdviceCard = () => {

    return (
        <>
            <section className="w-80 md:w-96 flex flex-col items-center gap-6 p-10 pb-0 rounded-2xl bg-darkGreyBlue">
                <h1 className="text-xs font-bold text-neonGreen">ADVICE #{117}</h1>
                <p className="text-2xl font-bold text-litCyan text-center">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
                <img src='./images/pattern-divider-desktop.svg' alt='pattern divider' />
                <div className="-m-3 relative top-4">
                    <img className=" bg-neonGreen rounded-full p-4 cursor-pointer" src='./images/icon-dice.svg' alt='icon dice' />
                </div>
            </section>
        </>
    )
    
}

export default AdviceCard;