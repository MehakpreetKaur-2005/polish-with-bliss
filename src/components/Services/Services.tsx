import { useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { SERVICES, SERVICE_SLIDE_INTERVAL_MS } from "../../data/services";
import { useSlideshow } from "../../hooks/useSlideshow";

const HEADING_ID = "services-heading";
const SWIPE_THRESHOLD_PX = 50;

export default function Services() {
  const { activeIndex, tick, goToNext, goToPrevious, goToIndex } =
    useSlideshow(SERVICES.length, SERVICE_SLIDE_INTERVAL_MS);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX;

    if (deltaX > SWIPE_THRESHOLD_PX) {
      goToPrevious();
    } else if (deltaX < -SWIPE_THRESHOLD_PX) {
      goToNext();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="services"
      aria-labelledby={HEADING_ID}
      className="py-16 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          headingId={HEADING_ID}
          title="Our Services"
          tagline="Beauty Tailored to Every Moment."
        />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Our services"
          className="relative mt-12 overflow-hidden rounded shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${SERVICES.length}`}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-espresso/50"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
                    <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm italic text-white/90 sm:text-base">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous service"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next service"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => goToIndex(index)}
                  aria-label={`Show ${service.name}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                    isActive ? "w-6 bg-terracotta" : "w-2.5 bg-white/60 hover:bg-white/80"
                  }`}
                />
              );
            })}
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
            <div
              key={tick}
              className="h-full bg-terracotta motion-safe:animate-progress motion-reduce:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
