"use client";

import Hero from "@/components/Hero";
import MostTrending from "@/components/MostTrending";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Sidebar from "@/components/Sidebar";

function LandingPage() {
  return (
    <div className="bg-[#1e1d16]">
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        <div className="border-r-[1px] border-r-[rgba(255,255,255,0.3)] mx-4 min-h-screen absolute top-0 left-[103px] "></div>
        <div className="">
          <Hero />
          <MostTrending />
          <ProductSection title="Evolution" position="right" />
          <ProductSection title="Valorant" position="middle" />
          <ProductSection title="Warlords" position="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
