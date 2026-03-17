import { useEffect, useRef, useState } from "react";
import project1 from "@/assets/images/project-1.jpg";
import project2 from "@/assets/images/project-2.jpg";
import project3 from "@/assets/images/project-3.jpg";
import project4 from "@/assets/images/project-4.jpg";
import project5 from "@/assets/images/project-5.jpg";
import project6 from "@/assets/images/project-6.jpg";

const projects = [
  {
    image: project1,
    name: "The Haussmann Refinement",
    location: "Paris",
    type: "Apartment",
    aspect: "aspect-[4/5]",
  },
  {
    image: project2,
    name: "Copper & Stone Kitchen",
    location: "London",
    type: "Residence",
    aspect: "aspect-[1/1]",
  },
  {
    image: project3,
    name: "The Serene Retreat",
    location: "Milan",
    type: "Bedroom Suite",
    aspect: "aspect-[4/5]",
  },
  {
    image: project4,
    name: "The Executive Study",
    location: "New York",
    type: "Office",
    aspect: "aspect-[1/1]",
  },
  {
    image: project5,
    name: "Spa Sanctuary",
    location: "Copenhagen",
    type: "Bathroom",
    aspect: "aspect-[4/5]",
  },
  {
    image: project6,
    name: "Sky Residence",
    location: "Dubai",
    type: "Penthouse",
    aspect: "aspect-[1/1]",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => setActive((prev) => !prev)}
      className={`group cursor-pointer transition-all duration-700 ease-studio ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-secondary 
  ${project.aspect} sm:${project.aspect}`}
      >
        {" "}
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-studio 
          ${active ? "scale-[1.04]" : ""} group-hover:scale-[1.04]`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-haven-charcoal/40 to-transparent transition-opacity duration-500 
          ${active ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
        />
        <div
          className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ease-studio
${active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
group-hover:translate-y-0 group-hover:opacity-100`}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-haven-cream/80 mb-2">
            {project.type} · {project.location}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-haven-cream font-light">
            {project.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-36 section-padding bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-2 gap-4 sm:gap-6 space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {" "}
          {projects.map((project, i) => (
            <div key={project.name} className="break-inside-avoid">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
