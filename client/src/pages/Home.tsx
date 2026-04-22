import { Navbar } from "../components/layout/Navbar";
import { About, Booking, Contact, Gallery, Hero, Services } from "../sections";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Booking />
      <Contact />
    </>
  );
};
