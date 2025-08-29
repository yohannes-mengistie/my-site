'use client'
import { useEffect,useRef } from "react";

interface Star{
    x:number;
    y:number;
    size:number;
    speed:number;
    opacity:number;
}

export default function AnimatedBackground(){
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const startsRef = useRef<Star[]>([]);
    const animationRef = useRef<number | null>(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
        };

        const createStars = ()=>{
            const stars: Star[] = [];
            const numberOfStars = Math.min(100, Math.floor(window.innerWidth / 10));
            for (let i = 0; i < numberOfStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speed: Math.random() * 0.5 + 0.1,
                    opacity: Math.random() * 0.5 + 0.5
                });
            }
            startsRef.current = stars;
        }

        const animate = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const stars = startsRef.current;

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createStars();
        animate();

        const handleResize =()=>{
            resizeCanvas();
            createStars();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
    }
        },[])

    return (
        <>
            <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{background:"linear-gradient(135degrees,#0f172a 0%, #1e293b 50%,#334155 100%)"}}/>
            <div  className="fixed inset-0 z-10 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-black/60 pointer-events-none" />
        </>
    )
}