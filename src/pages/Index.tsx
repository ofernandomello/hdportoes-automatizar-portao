import { useEffect } from "react";
import Header from "@/components/Header";
import Hero, { VideoSection } from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Motors from "@/components/Motors";
import AntiTheftLock from "@/components/AntiTheftLock";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pushGeoLocationData } from "@/lib/gtm";

const Index = () => {
  useEffect(() => {
    // Envia dados de geolocalização ao GTM após carregamento da página
    pushGeoLocationData();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <Motors />
      <Benefits />
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
