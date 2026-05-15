import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Events from "./pages/Events.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const SECTION_ROUTES = [
  "home",
  "essence",
  "about",
  "approach",
  "work",
  "work-with-me",
  "touch-to-soul",
  "sessions",
  "workshops",
  "retreats",
  "courses",
  "from-you",
  "your-words",
  "free-call",
  "lets-talk",
  "contact",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/it" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/it/events" element={<Events />} />
          {SECTION_ROUTES.map((route) => (
            <Route key={route} path={`/${route}`} element={<Index />} />
          ))}
          {SECTION_ROUTES.map((route) => (
            <Route key={`it-${route}`} path={`/it/${route}`} element={<Index />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;