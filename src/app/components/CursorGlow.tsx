import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
      return;
    }

    function onMouseMove(e: MouseEvent) {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    }

    function onMouseEnter() { setVisible(true); }
    function onMouseLeave() { setVisible(false); }

    document.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157,207,188,0.18) 0%, rgba(125,191,164,0.10) 40%, transparent 72%)",
          filter: "blur(6px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
