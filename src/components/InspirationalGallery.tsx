import { useEffect, useRef, useState } from "react";
import insp1 from "@/assets/images/project-1.jpg";
import insp2 from "@/assets/images/project-2.jpg";
import insp3 from "@/assets/images/project-3.jpg";
import insp4 from "@/assets/images/project-4.jpg";
import insp5 from "@/assets/images/project-5.jpg";
import insp6 from "@/assets/images/project-6.jpg";
import insp7 from "@/assets/images/project-1.jpg";
import insp8 from "@/assets/images/project-2.jpg";

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Luxury", "Minimal"];

const items = [
  { image: insp1, category: "Living Room", title: "Golden Hour Living", aspect: "aspect-[4/5]" },
  { image: insp2, category: "Kitchen", title: "Walnut & Marble Kitchen", aspect: "aspect-[1/1]" },
  { image: insp3, category: "Bedroom", title: "Serene Sanctuary", aspect: "aspect-[3/4]" },
  { image: insp4, category: "Office", title: "Executive Library", aspect: "aspect-[1/1]" },
  { image: insp5, category: "Luxury", title: "Spa Retreat", aspect: "aspect-[4/5]" },
  { image: insp6, category: "Minimal", title: "Warm Dining", aspect: "aspect-[1/1]" },
  { image: insp7, category: "Luxury", title: "Grand Foyer", aspect: "aspect-[3/4]" },
  { image: insp8, category: "Living Room", title: "Sky Terrace", aspect: "aspect-[1/1]" },
];

const InspirationGallery = () => {
  const [active, setActive] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section className="py-24 md:py-36 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Inspiration
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Style Gallery
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setActiveIndex(null); // reset open card
              }}
              className={`font-sans text-xs uppercase tracking-[0.15em] px-5 py-2 rounded-full transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={item.title}
                onClick={() =>
                  setActiveIndex(isActive ? null : i)
                }
                className={`break-inside-avoid group cursor-pointer transition-all duration-700 ease-studio ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${item.aspect}`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full  object-cover transition-transform duration-700 ease-studio
                    ${isActive ? "scale-[1.06]" : ""}
                    group-hover:scale-[1.06]`}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500
                    ${
                      isActive
                        ? "bg-foreground/30"
                        : "bg-foreground/0"
                    }
                    group-hover:bg-foreground/30`}
                  />

                  {/* Text */}
                  <div
                    className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ease-studio
                    ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }
                    group-hover:translate-y-0 group-hover:opacity-100`}
                  >
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-background/70">
                      {item.category}
                    </span>
                    <p className="font-serif text-lg text-background font-light">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InspirationGallery;