import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Obrigado = () => {
  const waLink = "https://wa.me/5511921349917?text=Iniciar%20atendimento";

  useEffect(() => {
    const t = setTimeout(() => {
      // redireciona após 4s
      window.location.href = waLink;
    }, 4000);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="max-w-xl text-center bg-card p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            {/* ícone check verde */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} className="opacity-20" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-4">Obrigado!</h1>
          <p className="text-base text-muted-foreground mb-6">
            A Jaqueline irá lhe atender em instantes. Fique de olho no seu Whatsapp.
          </p>

          <div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
            >
              Ir para o WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Obrigado;
