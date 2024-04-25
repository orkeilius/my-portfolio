import { BsFileEarmarkPdf } from "react-icons/bs";

export default function Hero() {
    return (
        <div className="w-[90%] lg:w-[500px]  h-fit p-6 bg-gray-900 rounded-[3em] shadow-[-15px_15px_100px_5px_rgba(188,0,191,0.15)]">
            <div className="flex ">

                <div className="rounded-full aspect-square w-32 h-32 bg-slate-700 "></div>
                <div className="w-full">
                    <h1 className="text-4xl ml-4">Matthieu <br />De oliveira</h1>
                    <p className="ml-4 font-light text-lg text-indigo-500 hover:text-emerald-500 transition-all duration-700">Étudiant en bts sio</p>
                </div>
            </div>
            <div className="text-justify my-5">
                Je m'appelle Matthieu De Oliveira. J'ai 19 ans, Je cherche une entreprise en alternance pour faire
                reconnaître mes compétences en développement et en faire mon métier
            </div>
            <div className="flex">
                <a href="e4.pdf" className=" p-2 px-6 w-fit flex content-center justify-center  bg-blue-600 rounded-xl hover:bg-blue-800 transition-all duration-1000 m-1">
                    Compétence
                    <BsFileEarmarkPdf className="mt-1 ml-1" />
                </a>
                <a href="cv.pdf" className=" p-2 px-6 w-fit flex content-center justify-center  bg-red-600 rounded-xl hover:bg-red-800 transition-all duration-1000 m-1">
                    CV
                    <BsFileEarmarkPdf className="mt-1 ml-1" />
                </a>
            </div>
        </div>
    )
}