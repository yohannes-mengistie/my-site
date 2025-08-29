'use client'
"use client";
import { useEffect } from "react";

export default function MouseTracker() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}