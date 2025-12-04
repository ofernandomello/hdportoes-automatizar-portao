import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GadsForm from "./pages/GadsForm";
import Obrigado from "./pages/Obrigado";
import NotFound from "./pages/NotFound";
import FormGAds from "./pages/FormGAds";
import FormMetaAds from "./pages/FormMetaAds";
import ClickGAds from "./pages/ClickGAds";
import ClickMetaAds from "./pages/ClickMetaAds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gads-form" element={<GadsForm />} />
            <Route path="/form-gads" element={<FormGAds />} />
            <Route path="/form-meta" element={<FormMetaAds />} />
            <Route path="/click-gads" element={<ClickGAds />} />
            <Route path="/click-meta" element={<ClickMetaAds />} />
            <Route path="/obrigado" element={<Obrigado />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
