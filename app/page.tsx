"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Preloader } from "@/components/layout/preloader";

// Lazy load components with loading fallbacks
const Hero = dynamic(() => import("@/components/home/hero").then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="h-screen bg-black" />,
});

const Ticker = dynamic(() => import("@/components/home/ticker").then(mod => ({ default: mod.Ticker })), {
  loading: () => <div className="h-20 bg-black" />,
});

const IntroVideo = dynamic(() => import("@/components/home/intro-video").then(mod => ({ default: mod.IntroVideo })), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const Spotlight = dynamic(() => import("@/components/home/spotlight").then(mod => ({ default: mod.Spotlight })), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const AboutPreview = dynamic(() => import("@/components/home/about-preview").then(mod => ({ default: mod.AboutPreview })), {
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
      <Hero />
      <Ticker />
      <IntroVideo />
      <Spotlight />
      <AboutPreview />
      <Footer />
    </main>
  );
}
