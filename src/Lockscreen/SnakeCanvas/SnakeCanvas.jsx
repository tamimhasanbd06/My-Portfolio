import React, { useEffect, useRef } from "react";

const SnakeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const segments = [];
    const total = 40;

    for (let i = 0; i < total; i++) {
      segments.push({ x: mouse.x, y: mouse.y });
    }

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", resizeCanvas);

    // 🌈 Gradient background
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gradient.addColorStop(0, "#020617"); // deep navy
      gradient.addColorStop(0.5, "#001a33"); // blue shade
      gradient.addColorStop(1, "#000814"); // dark base

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const draw = (x, y, i) => {
      ctx.beginPath();

      const size = Math.max(12 - i * 0.25, 2);

      ctx.arc(x, y, size, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(0, 255, 255, 0.85)";
      ctx.shadowColor = "#00ffff";
      ctx.shadowBlur = 22;

      ctx.fill();
    };

    const animate = () => {
      // 🎨 gradient background instead of white clear
      drawBackground();

      // head follow
      segments[0].x += (mouse.x - segments[0].x) * 0.2;
      segments[0].y += (mouse.y - segments[0].y) * 0.2;

      // body follow chain
      for (let i = 1; i < segments.length; i++) {
        const prev = segments[i - 1];
        const curr = segments[i];

        curr.x += (prev.x - curr.x) * 0.25;
        curr.y += (prev.y - curr.y) * 0.25;
      }

      // draw snake
      for (let i = segments.length - 1; i >= 0; i--) {
        draw(segments[i].x, segments[i].y, i);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default SnakeCanvas;