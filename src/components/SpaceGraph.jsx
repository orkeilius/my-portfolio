import { useEffect, useRef, useState } from "react";
import { SiHtml5, SiCss3,SiTailwindcss, SiJavascript, SiSvelte, SiSpring, SiPhp,SiGodotengine, SiPython, SiGit, SiSupabase, SiReact, SiTypescript, SiLeetcode, SiUnity, SiLinux, SiPopos, SiPostgresql } from "react-icons/si";
import { IconContext } from "react-icons";

export default function SpaceGraph() {


    const canvasRef = useRef(null)
    const warpRef = useRef(null)
    const nodesInfo = [
        { icon: <SiHtml5 />, color: "#E34F26", x: { freq: 2, offset: 1 }, y: { freq: 4, offset: 5 } },
        { icon: <SiCss3 />, color: "#1572B6", x: { freq: 3, offset: 10 }, y: { freq: 2, offset: 7 } },
        { icon: <SiTailwindcss />, color: "#06B6D4", x: { freq: 1, offset: 100 }, y: { freq: 7, offset: 70 } }, 
        { icon: <SiSvelte />, color: "#FF3E00", x: { freq: 6, offset: 40 }, y: { freq: 8, offset: 145 } },
        { icon: <SiSpring />, color: "#6DB33F", x: { freq: 6, offset: 4 }, y: { freq: 7, offset: 15 } },
        { icon: <SiPhp />, color: "#777BB4", x: { freq: 8, offset: 20 }, y: { freq: 16, offset: 90 } },
        { icon: <SiPython />, color: "#3776AB", x: { freq: 5, offset: 29 }, y: { freq: 6, offset: 93 } },
        { icon: <SiGit />, color: "#F05032", x: { freq: 6, offset: 41 }, y: { freq: 8, offset: 20 } },
        { icon: <SiSupabase />, color: "#3FCF8E", x: { freq: 2, offset: 30 }, y: { freq: 1, offset: 37 } },
        { icon: <SiReact />, color: "#0088CC", x: { freq: 8, offset: 25 }, y: { freq: 12, offset: 100 } },
        { icon: <SiTypescript />, color: "#3178C6", x: { freq: 12, offset: 6 }, y: { freq: 16, offset: 150 } },
        { icon: <SiJavascript />, color: "#F7DF1E", x: { freq: 3, offset: 294 }, y: { freq: 4, offset: 3 } },
        { icon: <SiLeetcode />, color: "#FFA116", x: { freq: 7, offset: 2024 }, y: { freq: 5, offset: 203 } },
        { icon: <SiUnity />, color: "#000", x: { freq: 6, offset: 1224 }, y: { freq: 2, offset: 531 } },
        { icon: <SiPopos />, color: "#48B9C7", x: { freq: 1, offset: 4 }, y: { freq: 7, offset: 531 } },
        { icon: <SiLinux />, color: "#000", x: { freq: 6, offset: 1224 }, y: { freq: 2, offset: 1531 } },
        { icon: <SiPostgresql />, color: "#4169E1", x: { freq: 6, offset: 1224 }, y: { freq: 3, offset: 1431 } },
        { icon: <SiGodotengine />, color: "#478CBF", x: { freq: 3, offset: 170 }, y: { freq: 6, offset: 420 } },
    ]
    const [nodeOpen, setNodeOpen] = useState(new Array(nodesInfo.length).fill(false))

    const triangles =genTriangle()

    function genTriangle() {
        let out = []
        for (let i = 0; i < 100; i++) {
            let use = new Set()
            let triangle = []
            for (let j = 0; j < 3; j++) {
                let elem = Math.floor(Math.random() * (nodesInfo.length ))
                while (use.has(elem)) {
                    elem = Math.floor(Math.random() * (nodesInfo.length ))
                }
                triangle.push(elem)
            }
            out.push(triangle)
        }
        return out
    }

    function isHidden(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top -100  >= (window.innerHeight || document.documentElement.clientHeight) ||
            rect.bottom + 100 <= 0);
    }
    

    function calcPos(freq, offset, ampl, currentTime) {
        return ampl * 0.5 * (1 + Math.sin(currentTime * freq + offset))
    }

    function update() {
        let currentTime = (new Date()).getTime() / 60000
        if (warpRef.current == null) {
            return
        }
        if (isHidden(canvasRef.current)) {
            return
        }
        let ampl = { x: warpRef.current.parentNode.clientWidth, y: warpRef.current.parentNode.clientHeight }


        let pos = []

        for (let i = 0; i < warpRef.current.children.length; i++) {
            pos.push([
                calcPos(nodesInfo[i].x.freq, nodesInfo[i].x.offset, ampl.x, currentTime),
                calcPos(nodesInfo[i].y.freq, nodesInfo[i].y.offset, ampl.y, currentTime)
            ])
            warpRef.current.children[i].style.left = warpRef.current.offsetLeft + pos[pos.length - 1][0] + "px"
            warpRef.current.children[i].style.top = warpRef.current.offsetTop + pos[pos.length - 1][1] + "px"
        }

        canvasRef.current.width = ampl.x
        canvasRef.current.height = ampl.y
        let canvas = canvasRef.current.getContext("2d");
        canvas.clearRect(0, 0, warpRef.current.parentNode.clientWidth, warpRef.current.parentNode.clientHeight)
        canvas.fillStyle = "rgba(2, 151, 240,0.025)"
        canvas.strokeStyle = `#E7EFC520`
        for (const triangle of triangles) {
            canvas.beginPath();
            canvas.moveTo(...pos[triangle[0]]);
            canvas.lineTo(...pos[triangle[1]]);
            canvas.lineTo(...pos[triangle[2]]);
            canvas.lineTo(...pos[triangle[0]]);
            canvas.closePath();
            canvas.stroke();
            canvas.fill()

        }
    }

    function updateSelection() {
        let newNodeOpen = []
        for (let i = 0; i < nodeOpen.length; i++) {
            newNodeOpen.push(Math.random() < 0.4)
        }
        setNodeOpen(newNodeOpen)
    }

    useEffect(() => {
        let interval = setInterval(update, 1000 / 30)

        updateSelection()
        let intervalSelection = setInterval(updateSelection, 1000 * 10)
        return () => {
            clearInterval(interval)
            clearInterval(intervalSelection)
        }
    }
        , [])



    return (
        <div className="h-full box-border">
            <div ref={warpRef} className="" >

                {nodesInfo.map((node, index) => {
                    return (
                        <div key={index} className={" absolute -translate-x-1/2 -translate-y-1/2  "} >
                            <div style={{ color: node.color }} className={" rounded-full transition-all duration-1000 flex justify-center overflow-hidden " + (nodeOpen[index] ? "w-12 h-12 bg-slate-200 bg-opacity-95" : "w-2 h-2 bg-white bg-opacity-100")}>
                                <IconContext.Provider value={{ className: "m-auto scale-150 transition " + (nodeOpen[index] ? "opacity-100" : "opacity-0") }}>

                                    {node.icon}
                                </IconContext.Provider>
                            </div>
                        </div>

                    )
                })}
            </div>
            <canvas ref={canvasRef} height={500} className="w-full " />
        </div>

    )
}

