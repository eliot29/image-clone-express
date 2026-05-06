import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Secteurs from "./pages/Secteurs";
import PourquoiIAGenerique from "./pages/PourquoiIAGenerique";
import MethodeSemaine54 from "./pages/MethodeSemaine54";
import ConceptionIASurMesure from "./pages/ConceptionIASurMesure";
import AccompagnementIA from "./pages/AccompagnementIA";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/secteurs" element={<Secteurs />} />
            <Route path="/pourquoi-ia-generique-ne-suffit-pas" element={<PourquoiIAGenerique />} />
            <Route path="/methode-semaine-54" element={<MethodeSemaine54 />} />
            <Route path="/conception-ia-sur-mesure" element={<ConceptionIASurMesure />} />
            <Route path="/accompagnement-ia" element={<AccompagnementIA />} />
            {/* Legacy redirects */}
            <Route path="/comment-ca-marche" element={<Navigate to="/methode-semaine-54" replace />} />
            <Route path="/pourquoi-semaine-54" element={<Navigate to="/pourquoi-ia-generique-ne-suffit-pas" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
