import Container from "../ui/Container";
import { useInViewOnce } from "../../hooks/useInViewOnce";

const HEADING_ID = "founder-heading";

export default function Founder() {
  const [sectionRef, isInView] = useInViewOnce<HTMLDivElement>();

  return (
    <section id="about" aria-labelledby={HEADING_ID} className="py-16 md:py-[120px]">
      <Container>
        <div
          ref={sectionRef}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h2
              id={HEADING_ID}
              className="font-heading text-3xl font-bold text-espresso sm:text-4xl"
            >
              The Heart Behind the Bliss
            </h2>

            <div className="mt-6 flex flex-col gap-4 font-body text-base leading-relaxed text-espresso/80">
              <p>Hey, I&apos;m Haspinder,</p>
              <p>
                Polish with Bliss was created with a simple vision—to provide
                a welcoming space where every client feels comfortable,
                confident, and genuinely cared for. My goal is to deliver
                personalized beauty services with attention to detail,
                quality products, and a relaxing experience from the moment
                you arrive.
              </p>
              <p>
                I look forward to welcoming you and helping you look and feel
                your absolute best.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-body text-base text-espresso/80">With love,</p>
              <p className="mt-1 font-heading text-lg font-semibold text-espresso">
                Haspinder
              </p>
              <p className="font-body text-sm uppercase tracking-widest text-terracotta">
                Founder
              </p>
            </div>
          </div>

          <div
            className={`flex justify-center transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/images/founder/founder-haspinder.webp"
              alt="Haspinder, founder of Polish with Bliss"
              className="aspect-[4/5] w-full max-w-sm rounded object-cover shadow-lg transition-transform duration-300 ease-out hover:scale-[1.02] lg:max-w-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
