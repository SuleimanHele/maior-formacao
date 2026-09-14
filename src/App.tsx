import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index.tsx";
import Sucess from "./pages/Sucess.tsx";
import NotFound from "./pages/NotFound.tsx";



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