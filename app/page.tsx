import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadModalProvider from "@/components/LeadModalProvider";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  return (
    <LeadModalProvider>
      <main>
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
        <Footer />
        <LeadModal />
      </main>
    </LeadModalProvider>
  );
}
