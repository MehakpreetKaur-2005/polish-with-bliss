import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { CONTACT_METHODS } from "../../data/contact";

const HEADING_ID = "contact-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby={HEADING_ID}
      className="py-16 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          headingId={HEADING_ID}
          title="Contact Us"
          tagline="Questions? We're just a message away."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CONTACT_METHODS.map(({ id, icon: Icon, label, value, href }) => (
            <Card key={id} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <Icon size={24} aria-hidden="true" />
              </div>
              <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-terracotta">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-1 inline-block rounded font-body text-sm text-espresso underline-offset-2 hover:text-terracotta hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush sm:text-base"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 font-body text-sm text-espresso sm:text-base">
                  {value}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
