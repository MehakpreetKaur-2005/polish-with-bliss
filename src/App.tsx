import Navigation from "./components/layout/Navigation";
import Hero from "./components/Hero/Hero";
import BlissExperience from "./components/BlissExperience/BlissExperience";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Founder from "./components/Founder/Founder";
import Appointment from "./components/Appointment/Appointment";

/**
 * Temporary, unstyled placeholder so the Navigation module has a real DOM
 * target to scroll to and highlight. This is NOT a section implementation —
 * it will be replaced when that section's feature branch is built.
 */
function SectionPlaceholder({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <section
      id={id}
      className="flex min-h-[60vh] items-center justify-center border-b border-espresso/5 text-espresso/30"
    >
      <p className="font-body text-sm uppercase tracking-widest">
        {title} — coming soon
      </p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BlissExperience />
        <Services />
        <Pricing />
        <Founder />
        <Appointment />
        <SectionPlaceholder id="contact" title="Contact" />
      </main>
    </>
  );
}
