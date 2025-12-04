import { useEffect } from "react";
import Header from "@/components/Header";
import Hero, { VideoSection } from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Motors from "@/components/Motors";
import AntiTheftLock from "@/components/AntiTheftLock";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactFormKommo from "@/components/ContactFormKommo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pushGeoLocationData } from "@/lib/gtm";
import { buttonActions } from "@/config/buttonConfig";
import { useCanonical } from "@/hooks/use-canonical";

const GadsForm = () => {
  useCanonical();

  useEffect(() => {
    // Envia dados de geolocalização ao GTM após carregamento da página
    pushGeoLocationData();

    // Sobrescreve ação de contatoWhatsApp localmente para rolar até o formulário
    // Isso garante que, nesta página, botões que usarem actionKey="contatoWhatsApp"
    // rolem até a seção com id="formulario" em vez de abrir o WhatsApp.
    if (buttonActions && buttonActions.contatoWhatsApp) {
      buttonActions.contatoWhatsApp = {
        ...buttonActions.contatoWhatsApp,
        type: "custom",
        callback: () => {
          const el = document.getElementById("formulario");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.location.hash = "#formulario";
        },
      } as any;
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <Benefits />
      <Motors />
      <AntiTheftLock />
      <Testimonials />
      <FAQ />
      <ContactFormKommo />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GadsForm;
