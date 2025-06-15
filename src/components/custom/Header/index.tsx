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
import { useScroll } from "motion/react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const [currentHash, setCurrentHash] = useState<string>("");

  // Combined scroll + hash logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

     const hash = window.location.hash;
    if (hash) {
      setCurrentHash(hash);
    } else {
      setCurrentHash("/"); // fallback to Home if no hash
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "/");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header
      className={`sticky inset-0 max-h-34 top-0 left-0 z-50 ${
        isScrolled ? "bg-surface-accent/70" : "bg-transparent"
      }`}
    >
      <motion.div
        className="fixed xl:top-20 top-28 md:top-32 inset-0 h-1.5 fuchsia-to-pink-red-gradient rounded-md origin-left"
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <div className="flex-between-center flex-col xl:flex-row p-4 md:px-6 max-width mx-auto">
        <Link className="md:gap-3 gap-2 flex-center max-xl:self-start" href="/">
          <Image src={logo} alt="logo" className="md:h-13 h-10 w-full" />
          <h1 className="sm:text-3xl text-xl font-semibold text-fg-primary whitespace-nowrap">
            {" "}
            3% CodeCraft{" "}
          </h1>
        </Link>
        <Sheet>
          <SheetTrigger className="text-fg-primary md:text-4xl text-3xl font-bold absolute md:top-5 md:right-5 top-5 right-3 xl:hidden">
            <HiOutlineMenuAlt2 />
          </SheetTrigger>
          <SheetContent className="slate-to-fuchsia border-none">
            <nav className="flex gap-2 h-full justify-center flex-col">
              <h2 className="font-bold text-center text-2xl sm:mb-4 mb-3">
                {" "}
                Useful Links{" "}
              </h2>
              {navLinks.map((navLink, index) => (
                <div
                  key={index}
                  className={`p-4 slate-to-gray-to-fuchsia-gradient font-semibold ${
                    currentHash ===  navLink.path && "text-fg-secondary"
                  }`}
                >
                  <a href={navLink.path}>{navLink.link}</a>
                </div>
              ))}
            </nav>
            <SheetHeader>
              <SheetTitle />
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <nav className="xl:flex gap-12  hidden">
          {navLinks.map((navLink, index) => (
            <div key={index} className="relative w-fit py-3 group">
              <a
                href={navLink.path}
                className={`font-semibold  group-hover:text-fg-secondary transition-all duration-500 ease-linear ${
                  currentHash ===  navLink.path && "text-fg-secondary"
                }`}
              >
                {navLink.link}
              </a>
              <div
                className={`absolute left-0 top-10 h-[2px] bg-fg-secondary z-20 transition-all duration-500 ease-linear ${
                   currentHash ===  navLink.path && "w-3/4"
                }`}
              ></div>
            </div>
          ))}
        </nav>

        <button className="text-fg-primary bg-action-primary md:px-6 px-4 rounded-full py-2 flex md:gap-3 gap-1 font-medium md:text-lg text-sm items-center cursor-pointer ease-transition hover:bg-action-secondary hover:scale-110 max-xl:self-end max-xl:mt-2">
          <ArrowBigDownDash size={24} />
          Download
        </button>
      </div>
    </header>
  );
};

export default Header;
