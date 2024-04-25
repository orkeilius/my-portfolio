
export default function Timeline() {


    return (
        <div className="mx-auto max-w-5xl flex ">
            <div className="timeline-gradient  min-h-screen w-[5px] mx-12 " />
            <div className="w-full">
                <ElemTimeline title="Stage a lmweb" date="janvier-février 2024" description="Création de sites web et développement de plugins wordpress en javascript et php pour les différents clients de l'agence" color="#3E92CC" />
                <ElemTimeline title="bts sio 2eme année" date="depuis septembre 2023" description="" color="#52b788" ping/>
                <ElemTimeline title="Erasmus a l'université trinity a Dublin" date="mai-juillet 2023" description="Erasmus création d'un site web permettent de créer, modifier
et partager des portfolio avec un système de gestion de
classe pour les professeurs du labo des langues" color="#3E92CC" />
                <ElemTimeline title="bts sio 1eme année" date="2022 - 2023" description="" color="#C200FB" />
                <ElemTimeline title="bac pro sn" date="2019 - 2022" description="" color="#EC7D10" />
                <ElemTimeline title="brevet d'initiation a l'aéronotique" date="2019" description="" color="#AAAAAA" />
            </div>
        </div>
    )
}


function ElemTimeline({ title, date, description, color,ping = false }) {
    return (
        <div className=" mb-32 h-fit" style={{ "--color1": color + "11", "--color2": color + "55", }} >
            <div className="bg-[var(--color1)] hover:bg-[var(--color2)] transition-colors duration-[4000ms] backdrop-blur-sm  p-6 h-fit w-full rounded-[3em] shadow-[-15px_25px_100px_5px_var(--color2)]">
                <div className="absolute -translate-x-[75px] -translate-y-[1.5em] h-full flex flex-row justify-around">
                    <div className="absolute top-[calc(50%-1em)] h-4 w-4 bg-green-500 rounded-full" />
                    {ping && <div className="absolute top-[calc(50%-1em)] animate-ping h-4 w-4 bg-green-500 rounded-full " /> }
                    </div>
                <p className="text-4xl ml-4">{title}</p>
                <p className="ml-4 mb-2 font-extralight">{date}</p>
                <p className="ml-4 text-justify">{description}</p>
            </div>
        </div>

    )
}