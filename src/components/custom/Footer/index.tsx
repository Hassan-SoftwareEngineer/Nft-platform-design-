import { logo } from "@/components/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socialLinks, usefulLinks } from "./constants";
import { LuCircleSlash } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="bg-fuchsia-950/30 text-fg-primary/90 pt-4">
      <Link
        href="/"
        className="fixed right-4 lg:right-6 bottom-4 lg:bottom-6 h-8 w-8 bg-fg-primary/90 rounded-full indent-0 flex-center text-fg-secondary cursor-pointer font-bold"
      >
        <RiArrowUpSLine size={24} />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 xl:gap-12 max-width mx-auto padding justify-center">
        <div className="flex-gap-4 flex-col xl:col-span-2 md:col-span-2">
          <Link href="/" className="flex-gap-2 items-center">
            <Image
              src={logo}
              alt="logo"
              className="md:w-16 md:h-12 h-10 w-12  object-cover"
              priority
            />
            <h1 className="text-2xl md:text-3xl font-bold"> TokenVault </h1>
          </Link>
          <p className="font-semibold max-w-md">
            TokenVault is your trusted gateway to the future of digital assets.
            We deliver secure, scalable NFT solutions that help brands,
            creators, and collectors grow in the evolving Web3 economy.
          </p>
          <p className="font-bold text-xl"> Follow Us</p>
          <div className="flex-gap-2">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="p-2 h-7 w-8 ease-transition bg-transparent hover:bg-action-secondary hover:border-none border-[0.5px] border-border-muted/30 rounded-sm flex-center"
              >
                <link.Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
        {usefulLinks.map((link, index) => (
          <div className="flex-gap-4  flex-col mt-1" key={index}>
            <h1 className="text-xl md:text-2xl font-semibold">
              {" "}
              {link.mainHeading}{" "}
            </h1>
            {link.links.map((iconLink, index) => (
              <Link
                href={iconLink.path}
                className="flex gap-3 hover:text-fg-secondary items-center font-semibold ease-transition"
                key={index}
              >
                <LuCircleSlash />
                <span> {iconLink.title} </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="py-4 md:py-6 border-t border-border-muted/20">
        <div className="max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-fg-primary/70 px-4 xl:px-8">
          <h3 className="text-center text-sm md:text-base lg:text-lg font-semibold flex items-center justify-center flex-wrap gap-1 max-sm:leading-relaxed">
            2025 © NFT Platform - Design & Crafted
            <span className="text-red-500 mx-1">
              <FaHeart size={16} />
            </span>
            by 10x CodeCraft
          </h3>

          <h3 className="text-center text-sm md:text-base lg:text-lg font-semibold">
            Terms, Conditions & Policies
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
