import Hero, { VideoSection } from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Motors from "@/components/Motors";
import AntiTheftLock from "@/components/AntiTheftLock";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <Benefits />
      <Motors />
      <AntiTheftLock />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
