import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Motors from "@/components/Motors";
import AntiTheftLock from "@/components/AntiTheftLock";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Motors />
      <AntiTheftLock />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
