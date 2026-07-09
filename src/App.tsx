import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index.tsx";
import Sucess from "./pages/Sucess.tsx";
import NotFound from "./pages/NotFound.tsx";
import Consultoria from "@/pages/consultoria";
import { formacoesSucesso } from "@/components/data/formacoesSucesso";

// NOVA PÁGINA DE CURSO
import TrafegoPago from "./pages/courses/Trafego-pago.tsx";
import CursoIa from "./pages/courses/Curso-ia.tsx";
import AgenteIa from "./pages/courses/vendedor.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* 🔥 isto resolve o scroll */}
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/consultoria" element={<Consultoria />} />

            {/* COURSES */}
            <Route path="/courses/trafego-pago" element={<TrafegoPago />} />
            <Route path="/courses/Websites" element={<CursoIa />} />
            <Route path="/courses/agenteia" element={<AgenteIa />} />

            {/* SUCCESS */}
            <Route path="/sucess/:curso" element={<Sucess />} />

            {/* FALLBACK */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;