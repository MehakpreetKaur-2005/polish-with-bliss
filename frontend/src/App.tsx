import Navigation from "./components/layout/Navigation";
import Hero from "./components/Hero/Hero";
import BlissExperience from "./components/BlissExperience/BlissExperience";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Founder from "./components/Founder/Founder";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layout/Footer";

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
