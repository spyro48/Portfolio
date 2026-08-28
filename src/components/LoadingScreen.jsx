import { useEffect, useState, useRef } from "react";

function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [text, setText] = useState("");
  const canvasRef = useRef(null);
  const fullText = "LANCE IVAN SAN JOSE";

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f97316";
      ctx.font = "15px monospace";
      drops.forEach((y, i) => {
        const char = String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase < 1) return;
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typing);
        setTimeout(() => setPhase(2), 600);
        setTimeout(() => setFadeOut(true), 1400);
        setTimeout(() => onDone(), 2100);
      }
    }, 70);
    return () => clearInterval(typing);
  }, [phase]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      
      {/* Matrix canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        
        {/* Top label */}
        <p className={`text-orange-500/60 text-[10px] font-mono tracking-[0.5em] uppercase transition-opacity duration-500 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}>
          Initializing Portfolio...
        </p>

        {/* Main name */}
        <div className="relative">
          <h1 className="text-2xl sm:text-5xl font-black font-mono tracking-widest text-white">
            {text}
            <span className="text-orange-500 animate-pulse">▌</span>
          </h1>
          {/* Orange glow */}
          <h1 className="absolute inset-0 text-2xl sm:text-5xl font-black font-mono tracking-widest text-orange-500 blur-lg opacity-30 select-none" aria-hidden>
            {text}
          </h1>
        </div>

        {/* Subtitle */}
        <p className={`text-orange-500 text-[11px] sm:text-sm font-mono tracking-[0.4em] uppercase transition-all duration-700 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          Full Stack Developer
        </p>

        {/* Loading bar */}
        <div className="w-48 sm:w-72 h-[1px] bg-orange-500/20 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-orange-500 transition-all ease-linear"
            style={{
              width: phase >= 1 ? "100%" : "0%",
              transitionDuration: "1800ms",
              boxShadow: "0 0 8px #f97316"
            }}
          />
        </div>

        {/* Bottom status */}
        <p className={`text-orange-500/40 text-[9px] font-mono tracking-widest transition-opacity duration-500 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}>
          PORTFOLIO 2026
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;