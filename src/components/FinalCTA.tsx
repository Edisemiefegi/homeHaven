import { useEffect, useRef, useState } from "react";
import ctaBg from "@/assets/cta-background.jpg";

const FinalCTA = () => {
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
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={ctaBg}
        alt="Luxury interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center section-padding transition-all duration-700 ease-studio ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-background tracking-tight mb-6 max-w-3xl leading-[1.1]">
          Ready to transform your space?
        </h2>
        <p className="font-sans text-sm md:text-base text-background/70 mb-10 max-w-md">
          Let's create something extraordinary together.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center font-sans text-sm uppercase tracking-[0.15em] bg-background text-foreground px-10 py-4 rounded-lg hover:bg-background/90 transition-all duration-300 ease-studio"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
