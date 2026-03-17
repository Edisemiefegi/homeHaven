import { useEffect, useRef, useState } from "react";
import transform1 from "@/assets/images/transform-1.jpg";
import transform2 from "@/assets/images/transform-2.jpg";
import transform3 from "@/assets/images/transform-3.jpg";
import transform4 from "@/assets/images/transform-4.jpg";

const stages = [
  {
    image: transform1,
    label: "The Challenge",
    title: "An Empty Canvas",
    text: "Every great design starts with an empty space — bare walls, raw potential. We see what others overlook: the play of light, the rhythm of architecture, the story waiting to be told.",
  },
  {
    image: transform2,
    label: "Foundation",
    title: "Setting the Tone",
    text: "Color, texture, and materiality form the foundation of every interior. We carefully select finishes that create warmth and character, establishing the emotional palette of the space.",
  },
  {
    image: transform3,
    label: "Composition",
    title: "Bringing It Together",
    text: "Furniture, layout, and spatial flow converge to create functional beauty. Each piece is chosen not just for aesthetics, but for how it shapes daily life within the space.",
  },
  {
    image: transform4,
    label: "Revelation",
    title: "The Final Story",
    text: "Art, lighting, and curated details complete the narrative. The space transcends decoration — it becomes a living expression of who you are and how you want to feel at home.",
  },
];

const AUTO_PLAY_DELAY = 5000;

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 👉 Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, []);

  // 👉 Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // swipe left → next
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }

    if (diff < -50) {
      // swipe right → prev
      setActiveIndex((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
    }
  };

  return (
    <section
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="grid md:grid-cols-2 h-full">
        {/* Image */}
        <div className="relative overflow-hidden">
          {stages.map((stage, i) => (
            <img
              key={i}
              src={stage.image}
              alt={stage.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                i === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <div className="flex items-center section-padding bg-background">
          <div className="max-w-lg relative">
            {stages.map((stage, i) => (
              <div
                key={i}
                className={`absolute transition-all duration-700 ${
                  i === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
                  {stage.label}
                </p>
                <h2 className="text-3xl md:text-5xl font-light mb-6">
                  {stage.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stage.text}
                </p>
              </div>
            ))}

            {/* Dots */}
            <div className="flex gap-2 mt-10">
              {stages.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 cursor-pointer transition-all ${
                    i === activeIndex ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
