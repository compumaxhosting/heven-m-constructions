"use client";
import { useState, useRef, useEffect } from "react";
import { projects, categories, type Category } from '../../data/projectsData';
import PortfolioHero from './PortfolioHero';
import PortfolioFilter from './PortfolioFilter';
import PortfolioGrid from './PortfolioGrid';
import PortfolioCTA from './PortfolioCTA';

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");
  const [filterFixed, setFilterFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(80);
  const [filterHeight, setFilterHeight] = useState(72);

  const filterRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measureNav = () => {
      const header = document.querySelector("header");
      if (header) setNavHeight(header.offsetHeight);
    };
    measureNav();
    window.addEventListener("resize", measureNav, { passive: true });
    return () => window.removeEventListener("resize", measureNav);
  }, []);

  useEffect(() => {
    const measureFilter = () => {
      if (filterRef.current) setFilterHeight(filterRef.current.offsetHeight);
    };
    measureFilter();
    window.addEventListener("resize", measureFilter, { passive: true });
    return () => window.removeEventListener("resize", measureFilter);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFilterFixed(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${navHeight}px 0px 0px 0px` },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [navHeight]);

  useEffect(() => {
    if (!filterFixed) return;
    const header = document.querySelector("header");
    if (header) {
      setNavHeight(header.getBoundingClientRect().height);
    }
  }, [filterFixed]);

  const handleTabClick = (cat: Category) => {
    setActive(cat);
    setTimeout(() => {
      const el = filterRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main>
      <PortfolioHero />
      <div ref={sentinelRef} className="h-0" />
      <PortfolioFilter
        filterRef={filterRef}
        filterFixed={filterFixed}
        navHeight={navHeight}
        active={active}
        handleTabClick={handleTabClick}
      />
      {filterFixed && <div style={{ height: filterHeight }} />}
      <PortfolioGrid filtered={filtered} gridRef={gridRef} />
      <PortfolioCTA />
    </main>
  );
}


