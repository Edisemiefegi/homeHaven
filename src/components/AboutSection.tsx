import { useEffect, useRef, useState } from "react";
import designerImage from "@/assets/images/designer-portrait.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-36 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-3xl transition-all duration-700 ease-studio ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img
            src={designerImage}
            alt="Elena Marchetti, founder of Studio Haven"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-700 ease-studio delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Designer Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-[1.15] mb-6">
            Design is more than decoration.<br />
            <span className="text-muted-foreground">It's how a space makes you feel.</span>
          </h2>
          <div className="prose-width space-y-4 text-muted-foreground font-sans leading-relaxed">
            <p>
              Elena Marchetti founded Studio Haven in 2012 with a conviction that interior design should be invisible —
              felt deeply but never forced. Her approach draws from architectural history, material honesty, and the quiet rituals of daily life.
            </p>
            <p>
              With a background in architecture from the Politecnico di Milano and over a decade of practice across Europe
              and North America, Elena has developed a signature style: warm minimalism anchored by natural materials and considered proportions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-border">
            {[
              { value: "14", label: "Years of Practice" },
              { value: "128", label: "Curated Spaces" },
              { value: "12", label: "Design Awards" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-light text-foreground tabular-nums">
                  {stat.value}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
