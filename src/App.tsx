import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import InfantFormula from "./pages/InfantFormula";
import Diapers from "./pages/Diapers";
import FeedingNursery from "./pages/FeedingNursery";
import BabyGear from "./pages/BabyGear";
import ProductDetail from "./pages/ProductDetail";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/infant-formula" element={<InfantFormula />} />
          <Route path="/diapers" element={<Diapers />} />
          <Route path="/feeding-nursery" element={<FeedingNursery />} />
          <Route path="/baby-gear" element={<BabyGear />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
