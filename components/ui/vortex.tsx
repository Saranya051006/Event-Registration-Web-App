"use client";

import { useEffect, useRef } from "react";

export function Vortex({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const PC = 500;
    const PP = 9;
    const props = new Float32Array(PC * PP);

    let tick = 0;

    const rand = (n: number) => n * Math.random();
    const rr = (n: number) => n - rand(2 * n);
    const lerp = (a: number, b: number, s: number) => (1 - s) * a + s * b;
    const TAU = Math.PI * 2;

    const init = (i: number) => {
      props.set(
        [
          rand(canvas.width),
          rand(canvas.height),
          0,
          0,
          0,
          50 + rand(150),
          rand(1.5),
          1 + rand(2),
          0 + rand(20), // red particles
        ],
        i
      );
    };

    for (let i = 0; i < PC * PP; i += PP) init(i);

    const frame = () => {
      tick++;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < PC * PP; i += PP) {
        const x = props[i];
        const y = props[i + 1];

        const angle = Math.sin((x + tick) * 0.002) * TAU;

        const vx = lerp(props[i + 2], Math.cos(angle), 0.5);
        const vy = lerp(props[i + 3], Math.sin(angle), 0.5);

        const life = props[i + 4];
        const ttl = props[i + 5];
        const spd = props[i + 6];
        const r = props[i + 7];
        const h = props[i + 8];

        const x2 = x + vx * spd;
        const y2 = y + vy * spd;

        ctx.lineCap = "round";
        ctx.lineWidth = r;
        ctx.strokeStyle = `hsla(${h},100%,60%,0.8)`;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        props[i] = x2;
        props[i + 1] = y2;
        props[i + 2] = vx;
        props[i + 3] = vy;
        props[i + 4] = life + 1;

        if (x2 > canvas.width || x2 < 0 || y2 > canvas.height || y2 < 0 || life > ttl) {
          init(i);
        }
      }

      ctx.save();
      ctx.filter = "blur(6px) brightness(180%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      animRef.current = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}