import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Prices from "./components/prices";
import Contact from "./components/contact";
import Booking from "./components/booking";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Prices />
      <Booking />
      <Contact />
    </main>
  );
}
