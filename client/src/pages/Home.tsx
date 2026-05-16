import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { About, Booking, Contact, Gallery, Hero, Services } from "../sections";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
};
