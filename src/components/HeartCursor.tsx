import { useEffect } from "react";

const HeartCursor = () => {
  useEffect(() => {
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last < 60) return;
      last = now;
      const heart = document.createElement("span");
      heart.textContent = "❤";
      heart.style.cssText = `
        position:fixed;left:${e.clientX}px;top:${e.clientY}px;
        pointer-events:none;z-index:60;font-size:${10 + Math.random() * 14}px;
        color:hsl(348 70% 55%);transform:translate(-50%,-50%);
        transition:transform 1s ease-out, opacity 1s ease-out;opacity:0.9;
      `;
      document.body.appendChild(heart);
      requestAnimationFrame(() => {
        heart.style.transform = `translate(-50%,calc(-50% - ${30 + Math.random() * 40}px)) rotate(${(Math.random() - 0.5) * 60}deg)`;
        heart.style.opacity = "0";
      });
      setTimeout(() => heart.remove(), 1100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return null;
};

export default HeartCursor;
