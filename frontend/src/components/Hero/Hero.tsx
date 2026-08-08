import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { HERO_SLIDES, SLIDE_INTERVAL_MS } from "../../data/heroSlides";
import { HOME_SECTION_ID } from "../../data/navigation";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Increments on every slide change so the Ken Burns animation restarts
  // (via a changing `key`) each time a slide becomes active again.
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      setCycle((prev) => prev + 1);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id={HOME_SECTION_ID}
      aria-label="Hero"
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                key={isActive ? `${slide.id}-${cycle}` : slide.id}
                src={slide.src}
                alt=""
                className={`h-full w-full object-cover ${
                  isActive ? "motion-safe:animate-kenburns" : ""
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-espresso/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-white motion-safe:animate-fade-up sm:text-5xl lg:text-6xl">
          Your Beauty.
          <br />
          Our Expertise.
        </h1>

        <div className="flex flex-col items-center gap-4 motion-safe:animate-fade-up motion-safe:[animation-delay:200ms] sm:flex-row">
          <Button href="#appointment" variant="primary">
            Book Appointment
            <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </Button>
          <Button href="#services" variant="outline-light">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
