import { useRef, useState, useEffect } from "react";
import beforeImg from "@/assets/images/before.jpg";
import afterImg from "@/assets/images/after.jpg";

const BeforeAfterSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(2, Math.min(98, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-24 md:py-36 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Transformation
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Before & After
          </h2>
        </div>

        <div
          ref={containerRef}
          className={`relative aspect-[16/9] overflow-hidden rounded-3xl cursor-ew-resize select-none transition-all duration-700 ease-studio ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
          }`}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After image (full) */}
          <img
            src={afterImg}
            alt="After renovation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={beforeImg}
              alt="Before renovation"
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${containerRef.current?.offsetWidth || 1000}px` }}
            />
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 font-sans text-xs uppercase tracking-[0.2em] bg-haven-charcoal/60 backdrop-blur-sm text-haven-cream px-3 py-1.5 rounded-lg">
            Before
          </div>
          <div className="absolute top-6 right-6 font-sans text-xs uppercase tracking-[0.2em] bg-haven-charcoal/60 backdrop-blur-sm text-haven-cream px-3 py-1.5 rounded-lg">
            After
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-haven-cream/60 z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-haven-cream/60 backdrop-blur-md bg-haven-charcoal/20 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 rounded-full bg-haven-cream/80" />
                <div className="w-0.5 h-3 rounded-full bg-haven-cream/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
