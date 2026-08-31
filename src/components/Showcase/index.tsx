"use client";
import { useState, useEffect } from "react";
import { showcaseData, showcaseOrder, ShowcaseItem } from "./showcaseData";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseGrid from "./ShowcaseGrid";
import ShowcaseModal from "./ShowcaseModal";

export default function ShowcasePage() {
  const [filter, setFilter] = useState("All");
  const [activeMedia, setActiveMedia] = useState<ShowcaseItem | null>(null);

  const categories = [
    "All",
    "Residential Additions",
    "Before & After",
    "Architecture",
    "Interior Design",
    "Commercial",
  ];

  const filteredData = showcaseData
    .filter(item => filter === "All" || item.category === filter)
    .sort((first, second) => showcaseOrder.indexOf(first.id) - showcaseOrder.indexOf(second.id));

  const activeIndex = activeMedia ? filteredData.findIndex(item => item.id === activeMedia.id) : -1;

  const handleNext = () => {
    if (filteredData.length <= 1) return;
    if (activeIndex < filteredData.length - 1) {
      setActiveMedia(filteredData[activeIndex + 1]);
    } else {
      setActiveMedia(filteredData[0]);
    }
  };

  const handlePrev = () => {
    if (filteredData.length <= 1) return;
    if (activeIndex > 0) {
      setActiveMedia(filteredData[activeIndex - 1]);
    } else {
      setActiveMedia(filteredData[filteredData.length - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeMedia) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveMedia(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMedia, activeIndex, filteredData]);

  useEffect(() => {
    if (activeMedia) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [activeMedia]);

  return (
    <main
      className="relative min-h-screen overflow-hidden pt-32 pb-24"
      style={{
        backgroundColor: "#F6F4EE",
        backgroundImage: [
          "radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)",
          "radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)",
          "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)",
        ].join(", "),
      }}
    >
      <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
      <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

      <ShowcaseHeader categories={categories} filter={filter} setFilter={setFilter} />
      <ShowcaseGrid filteredData={filteredData} setActiveMedia={setActiveMedia} />
      <ShowcaseModal
        activeMedia={activeMedia}
        filteredData={filteredData}
        setActiveMedia={setActiveMedia}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </main>
  );
}


