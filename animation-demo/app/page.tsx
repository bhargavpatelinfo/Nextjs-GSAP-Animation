import { HomeHeroSection } from "@/components/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GSAP Animation Demo | Next.js",
  description: "Interactive page with smooth GSAP animations featuring music streaming integrations, email subscription, and modern card-based design.",
  keywords: ["GSAP", "Next.js", "Animation", "Music", "Spotify", "Apple Music"],
  openGraph: {
    title: "GSAP Animation Demo | Next.js",
    description: "Interactive page with smooth GSAP animations featuring music streaming integrations.",
    type: "website",
  },
};

export default function Home() {
  return (
    <HomeHeroSection />
  )
}
