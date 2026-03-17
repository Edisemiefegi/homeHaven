import { useEffect,  useState } from "react";
import heroImage from "@/assets/images/hero-interior.jpg";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const zoom = 1 + scrollY * 0.0003;
  const opacity = Math.max(0, 1 - scrollY * 0.0015);
  const translateY = scrollY * 0.3;

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with parallax zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious modern living room with golden hour light"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: `scale(${zoom}) translateY(${translateY * 0.1}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/50" />
      </div>

      {/* Content with parallax */}
      <div
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 section-padding"
        style={{ transform: `translateY(${translateY}px)`, opacity }}
      >
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-background/80 mb-6 animate-fade-up">
            Interior Design Studio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-background leading-[1.1] tracking-tight mb-6 animate-fade-up-delay-1">
            Designing Spaces That Tell Your Story
          </h1>
          <p className="font-sans text-base md:text-lg text-background/70 max-w-xl leading-relaxed mb-10 animate-fade-up-delay-2 prose-width">
            Modern interior design that blends comfort, beauty, and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <Button size={'lg'} variant={'secondary'}>
              <a
              href="#projects"
            >
              VIEW PROJECTS
            </a>
            </Button>
            <Button size={'lg'} variant={'outline'}>
              <a
              href="#contact"
            >
              Book Consultation
            </a>
            </Button>
           
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-up-delay-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-background/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
