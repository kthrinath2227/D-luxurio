import React, { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const requestRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });

  // Detect touch screens to safely bypass custom cursor on mobile/tablets
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
    }
  }, []);

  // Track mouse coordinates
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile]);

  // Ultra-smooth linear interpolation (lerp) loop for the outer luxury ring
  useEffect(() => {
    if (isMobile) return;

    const updateLoop = () => {
      posRef.current.x += (cursorPos.x - posRef.current.x) * 0.12;
      posRef.current.y += (cursorPos.y - posRef.current.y) * 0.12;
      setRingPos({ x: posRef.current.x, y: posRef.current.y });

      requestRef.current = requestAnimationFrame(updateLoop);
    };

    requestRef.current = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(requestRef.current);
  }, [cursorPos, isMobile]);

  // Intelligent hover states for interactive elements
  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, select, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Precision Dot */}
      <div
        style={{
          position: "fixed",
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isClicking ? "6px" : isHovered ? "4px" : "8px",
          height: isClicking ? "6px" : isHovered ? "4px" : "8px",
          backgroundColor: isClicking ? "#ffffff" : "#E5C158",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 12px rgba(229, 193, 88, 0.7)",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />

      {/* Outer Luxury Fluid Ring */}
      <div
        style={{
          position: "fixed",
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isHovered ? "56px" : isClicking ? "36px" : "44px",
          height: isHovered ? "56px" : isClicking ? "36px" : "44px",
          border: `1.5px solid ${isHovered ? "rgba(229, 193, 88, 0.9)" : "rgba(255, 255, 255, 0.3)"}`,
          backgroundColor: isHovered ? "rgba(229, 193, 88, 0.08)" : "transparent",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          backdropFilter: isHovered ? "blur(1px)" : "none",
          transition:
            "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;