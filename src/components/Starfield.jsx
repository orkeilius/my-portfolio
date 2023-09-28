import { useEffect, useRef, useState } from "react";

export default function Starfield() {

    
    const canvasRef = useRef(null)
    
    let mouseDown = false;
    document.body.onmousedown = () => {
        mouseDown = true;
    };
    document.body.onmouseup = () => {
        mouseDown = false;
    };

    useEffect(() => {
        const requestAnimFrame = (function () { return window.requestAnimationFrame })();
        let centerX, centerY;
        let numStars = 100;
        let stars = [], star;


        function executeFrame() {

            requestAnimFrame(executeFrame);

            if (canvas.width != window.innerWidth || canvas.height != window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                initializeStars()
            }
            moveStars();
            drawStars();
        }

        function initializeStars() {

            stars = [];
            for (let i = 0; i < numStars; i++) {
                star = {
                    x: ((Math.random()-0.5) * canvas.width) /4+ (canvas.width/2) ,
                    y: ((Math.random()-0.5) * canvas.height ) /4+ (canvas.height/2),
                    z: Math.random() * canvas.width,
                    o: '0.' + Math.floor(Math.random() * 99) + 1
                };
                stars.push(star);
            }
        }

        function moveStars() {
            for (let i = 0; i < numStars; i++) {
                star = stars[i];
                star.z -= mouseDown ? 4 : 2
            }
        }

        function drawStars() {
            var pixelX, pixelY, pixelRadius;
            c.fillStyle = `rgba(0,10,10,${mouseDown ?0.005 :0.2 })`
            c.fillRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < numStars; i++) {
                star = stars[i];

                pixelX = (star.x - centerX) * (focalLength / star.z);
                pixelY = (star.y - centerY) * (focalLength / star.z);
                pixelRadius = 1 * (focalLength / star.z) * 0.4;

                if (
                    Math.abs(pixelX) > canvas.width * 0.6 ||
                    Math.abs(pixelY) > canvas.height * 0.6 ||
                    star.z <= 0
                ) {
                    star.z = canvas.width
                    star.x = ((Math.random()-0.5) * canvas.width) /4+ (canvas.width/2) 
                    star.y = ((Math.random()-0.5) * canvas.height ) /4+ (canvas.height/2)
                    continue
                }
                pixelY += centerY;
                pixelX += centerX;

                c.beginPath();
                c.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
                c.fillStyle = `rgba(255, 255, 255, ${1 / (star.z * 0.0015)})`;
                c.fill();
            }
        }



        const canvas = canvasRef.current
        var c = canvas.getContext("2d");
        const focalLength = canvas.width * 2;
        initializeStars()
        setInterval(executeFrame(), 1000 / 30);
    }
        , [])




    return <canvas ref={canvasRef} className="w-full h-full"></canvas>
}