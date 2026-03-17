import { useEffect, useState } from "react";

const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
          background: "radial-gradient(circle, hsla(36, 30%, 45%, 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default CursorSpotlight;
