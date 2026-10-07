"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!fine || !motionOk || !cursor || !ring) return;

    cursor.style.opacity = "1";
    ring.style.opacity = "1";

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-1.5 w-1.5 rounded-full bg-primary opacity-0 mix-blend-difference lg:block"
      />
      <div
        id="cursor-ring"
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-9 w-9 rounded-full border border-primary/50 opacity-0 mix-blend-difference lg:block"
      />
    </>
  );
}
