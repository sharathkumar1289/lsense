"use client";
import Community from "@/components/Community";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Portfolio from "@/components/Team";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">

      <Navbar />

      <HeroSection />
      <CoreFeatures />
      <Features />
      <Services />
      <Community/>
     
    </div>
  );
}
