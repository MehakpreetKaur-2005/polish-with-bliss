import Accordion from "../ui/Accordion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { PRICING_CATEGORIES } from "../../data/pricing";

const HEADING_ID = "pricing-heading";

export default function Pricing() {
  const accordionItems = PRICING_CATEGORIES.map((category) => ({
    id: category.id,
    title: category.name,
    content: (
      <ul className="flex flex-col gap-3">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-t border-rose-gold/10 pt-3 first:border-t-0 first:pt-0"
          >
            <span className="font-body text-sm text-espresso sm:text-base">
              {item.name}
            </span>
            <span className="font-body text-sm font-semibold text-terracotta sm:text-base">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section
      id="pricing"
      aria-labelledby={HEADING_ID}
      className="py-16 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          headingId={HEADING_ID}
          title="Service Pricing"
          tagline="Transparent Pricing. No Hidden Charges."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion items={accordionItems} />
        </div>
      </Container>
    </section>
  );
}
