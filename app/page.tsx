import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AppShowcase from "@/components/AppShowcase";
import ClientApps from "@/components/ClientApps";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <AppShowcase />
      <ClientApps />
      <Process />
      <WhyUs />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}
