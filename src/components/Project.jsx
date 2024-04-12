import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiSvelte, SiSpring, SiPhp, SiPython, SiGit, SiSupabase, SiReact, SiTypescript, SiLeetcode, SiUnity, SiLinux, SiPopos, SiPostgresql, SiGodotengine,SiWordpress ,SiElementor } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Project() {

    const projects = [
        {
            title: "erasableImage",// private
            date: "2023",
            description: "Repo Privé — widget WordPress Elementor qui permet de créer et personnaliser des images, et dégradé effaçable",
            color: "#AF42AE",
            icon: [
                { icon: <SiWordpress />, color: "#3776AB" },
                { icon: <SiElementor />, color: "#92003B" },
            ],
            source: "https://github.com/orkeilius/erasableImage-wpPlugin"
        },
        {
            title: "Py-calc",
            date: "2023",
            description: "Une calculatrice avec des fonctions scientifiques disponible sur Windows et Linux",
            color: "#AF42AE",
            icon: [{ icon: <SiPython />, color: "#3776AB" }],
            link: "https://github.com/orkeilius/py-calc/releases/tag/public",
            source: "https://github.com/orkeilius/py-calc"
        },
        {
            title: "Rogue-invaders",
            date: "2023",
            description: "Un remake de space-invaders sur navigateur en plus d'un mode de jeu rogue-like avec un système de pouvoir et des scores en ligne",
            color: "#AF42AE",
            icon: [
                { icon: <SiGodotengine />, color: "#478CBF" },
                { icon: <SiSupabase />, color: "#3FCF8E" }
            ],
            link: "https://a-random-baguette.itch.io/rogue",
            source: "https://github.com/orkeilius/rogue-invaders"
        },
        {
            title: "discrotte",
            date: "2019",
            description: "Copie simplifiée de discord pour un project de classe en java spring et react",
            color: "#AF42AE",
            icon: [
                { icon: <SiSpring />, color: "#6DB33F" },
                { icon: <SiReact />, color: "#0088CC" },
                { icon: <SiTailwindcss />, color: "#06B6D4" }
            ],
            source: "https://github.com/orkeilius/discrotte"
        },
        {
            title: "my exercice code",
            date: "2020-2023",
            description: "Repo contenant tout les exercice de code que j'ai fait sur leetcode, coding game, france-ioi et autre ",
            color: "#AF42AE",
            icon: [
                { icon: <SiTypescript />, color: "#3178C6" },
                { icon: <SiJavascript />, color: "#F7DF1E" },
                { icon: <SiPython />, color: "#3776AB" }
            ],
            source: "https://github.com/orkeilius/my-exercice-code"
        },
        {
            title: "little-rtc",
            date: "2019",
            description: "Site de chat en peer to peer pour tester la technologie webrtc et svelte",
            color: "#AF42AE",
            icon: [
                { icon: <SiSvelte />, color: "#FF3E00" },
                { icon: <SiTailwindcss />, color: "#06B6D4" },
                { icon: <SiTypescript />, color: "#3178C6" }
            ],
            link: "https://little-rtc.vercel.app/",
            source: "https://github.com/orkeilius/little-rtc"
        },
        {
            title: "voiture pisicne",
            date: "2019",
            description: "Site vitrine fictif et forum internet en php en project de groupe",
            color: "#AF42AE",
            icon: [
                { icon: <SiPhp />, color: "#6DB33F" },
                { icon: <SiPostgresql />, color: "#0088CC" },
            ],
            source: "https://github.com/orkeilius/voiture-piscine",
        },
        {
            title: "alarm discord bot",
            date: "2022",
            description: "Bot discord sur rasberry qui permet de gerer un petit systeme d'alarme et de prendre des photos",
            color: "#AF42AE",
            icon: [{ icon: <SiPython />, color: "#3776AB" }],
            source: "https://github.com/orkeilius/alarm_discord_bot",
        },
        {
            title: "infinite minesweeper",
            date: "2019",
            description: "Démineur fait en python permetant de faire des partie avec sur de grande grille",
            color: "#AF42AE",
            icon: [{ icon: <SiPython />, color: "#3776AB" }],
            link: "https://a-random-baguette.itch.io/infinite-mineswepper",
        },
        {
            title: "T-rex game plus",
            date: "2019",
            description: "Copie amélioré du jeu du dinosaure en python ",
            color: "#AF42AE",
            icon: [{ icon: <SiPython />, color: "#3776AB" }],
            link: "https://a-random-baguette.itch.io/t-rex-game-plus",
        }
    ]

    // color="#1E152A" color="#A5C882"

    return (
        <div className="grid grid-cols-3 mt-48 max-w-[1200px] mx-auto justify-around">
            <ProjectRenderer projects={projects} />
        </div>
    )
}

function ProjectRenderer({ projects }) {
    var col = [[], [], []]
    console.log(projects)
    for (let i = 0; i < 3; i++) {
        for (let j = i; j < projects.length; j += 3) {
            col[i].push(projects[j])
        }
    }
    return (
        <>
            {col.map((elem, index) => {
                return (
                    <div key={index} className="m-1">
                        {elem.map((elem, index) => {
                            return (<ProjectElem key={index} project={elem} />)
                        })}
                    </div>
                )
            })}
        </>
    )
}

function ProjectElem({ project }) {


    return (
        <div id="project" className="w-full m-2 h-fit w-[calc(33%-0.75em)]" style={{ "--color1": project.color + "11", "--color2": project.color + "77", }} >
            <div className="bg-[#1E152A11] group hover:bg-slate-800 bg-opacity-20 flex flex-col transition-all overflow-hidden duration-500 backdrop-blur-sm hover:backdrop-blur-2xl p-6 h-fit w-full rounded-xl shadow-[-15px_25px_100px_15px_#FFFFFF0F] ">
                <p className="text-xl ml-4">{project.title}</p>
                <p className="ml-4 font-extralight">{project.date}</p>
                <div className="h-0 transition-all group-hover:h-5 duration-700 overflow-hidden flex ml-2">
                    {project.icon.map((element, index) => {
                        return (
                            <div key={index} style={{ color: element.color }} className="mx-1 my-auto" >
                                <IconContext.Provider value={{ className: " transition h-4 w-4" }}>

                                    {element.icon}
                                </IconContext.Provider>
                            </div>
                        )
                    })}
                </div>
                <p className="ml-4 text-justify duration-1000 overflow-hidden transition-all text-ellipsis ">{project.description}</p>
                <div className="max-h-0 transition-all group-hover:max-h-48 duration-700 overflow-hidden">
                    {project.link && <a className="border m-2 font-bold rounded-md ml-auto p-1 text-md whitespace-nowrap flex w-fit" href={project.link}> Lien <BiLinkExternal /></a>}
                    {project.source && <a className="border m-2 font-bold rounded-md ml-auto p-1 text-md whitespace-nowrap flex w-fit" href={project.source}> Source <BiLinkExternal /></a>}
                </div>
            </div>
        </div>
    )
}