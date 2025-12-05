"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Preloader } from "@/components/layout/preloader";

// Lazy load the merged landing page component
const LandingPage = dynamic(() => import("@/components/home/landing-page").then(mod => ({ default: mod.LandingPage })), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Footer = dynamic(() => import("@/components/layout/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-96 bg-black" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
      <Preloader />
      <Navbar />
      <LandingPage />
      <Footer />
    </main>
  );
}

