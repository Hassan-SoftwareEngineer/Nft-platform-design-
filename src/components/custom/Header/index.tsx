"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "./constants";
import Image from "next/image";
import { logo } from "@/components/assets/images";
import { ArrowBigDownDash } from "lucide-react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import * as motion from "motion/react-client";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScroll } from "motion/react";

const Header: React.FC = () => {
  const sectionIds = ["home", "categories", "sellers", "showcase", "faqs", "blogs"];
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky inset-0 top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-surface-accent/80" : "bg-transparent"
      }`}
    >
      <motion.div
        className="fixed xl:top-20 top-28 md:top-33.5 inset-0 h-1.5 fuchsia-to-pink-red-gradient rounded-md origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex-between-center flex-col xl:flex-row p-4 xl:py-2.5 md:px-6 max-w-7xl mx-auto">
        <Link className="gap-2 md:gap-1.5 flex items-center max-xl:self-start" href="/">
          <Image src={logo} alt="logo" className="md:h-16 h-10 w-full" />
          <h1 className="sm:text-3xl text-xl font-semibold text-fg-primary whitespace-nowrap">
            TokenVault 
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger className="text-fg-primary md:text-4xl text-3xl font-bold absolute md:top-5 md:right-5 top-5 right-3 xl:hidden">
            <HiOutlineMenuAlt2 />
          </SheetTrigger>
          <SheetContent className="slate-to-fuchsia border-none">
            <nav className="flex gap-2 h-full justify-center flex-col">
              <h2 className="font-bold text-center text-2xl sm:mb-4 mb-3">
                Useful Links
              </h2>
              {navLinks.map((navLink, index) => (
                <div
                  key={index}
                  className={`p-4 slate-to-gray-to-fuchsia-gradient font-semibold transition-colors ${
                    activeSection === navLink.path ? "text-fg-secondary" : "text-fg-primary"
                  }`}
                >
                  <a href={`#${navLink.path}`}>{navLink.link}</a>
                </div>
              ))}
            </nav>
            <SheetHeader>
              <SheetTitle />
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <nav className="xl:flex gap-10 hidden">
          {navLinks.map((navLink, index) => (
            <div key={index} className="relative w-fit py-3 group">
              <Link
                href={navLink.link === "Home" ? "/" : `#${navLink.path}`}
                className={`font-semibold lg:text-lg ease-transition group-hover:text-fg-secondary ${
                  activeSection === navLink.path  ? "text-fg-secondary" : "text-fg-primary"
                }`}
              >
                {navLink.link}
              </Link>
              <div
                className={`absolute left-0 top-10 h-[2px] bg-fg-secondary z-20 ease-transition ${
                  activeSection === navLink.path ? "w-3/4" : "w-0"
                }`}
              />
            </div>
          ))}
        </nav>

        <button className="text-fg-primary bg-action-primary md:px-6 px-4 rounded-full py-2 flex md:gap-3 gap-1 font-medium md:text-lg text-sm items-center cursor-pointer transition-transform hover:bg-action-secondary hover:scale-110 max-xl:self-end">
          <ArrowBigDownDash size={24} />
          Download
        </button>
      </div>
    </header>
  );
};

export default Header;
