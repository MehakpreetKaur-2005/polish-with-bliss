import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { BLISS_FEATURES } from "../../data/blissExperience";

const HEADING_ID = "bliss-experience-heading";

export default function BlissExperience() {
  return (
    <section
      id="experience"
      aria-labelledby={HEADING_ID}
      className="py-16 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          headingId={HEADING_ID}
          title="The Bliss Experience"
          tagline="Because You Deserve More Than Just a Service."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLISS_FEATURES.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-espresso">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm text-espresso/70">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
