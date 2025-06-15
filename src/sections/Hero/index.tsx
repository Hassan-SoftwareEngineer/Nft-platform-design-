import Image from "next/image";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { heroCards } from "./constants";
import * as motion from "motion/react-client";
import { slideInLeft } from "@/components/custom/Animations";

const Hero: React.FC = () => {
  return (
    <section className="bg-fuchsia-950/20 rounded-md shadow-md" id="home"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-0 2xl:gap-18 gap-6 max-width mx-auto h-full sm:p-8 xs:p-6 p-4 lg:py-3.5 xl:py-6">
        <motion.div
        className="flex-gap-4 flex-col justify-center max-w-[450px] 2xl:max-w-full"
        initial = {slideInLeft.initial}
        animate = {slideInLeft.animate}
        transition={slideInLeft.transition}
        >
          <div className="px-6 py-2 flex gap-2 relative bg-surface-secondary/40 rounded-full text-fg-secondary w-fit font-semibold items-center">
            <div className="h-3 w-3 bg-action-primary rounded-full" />
            Collect NFTs
          </div>
          <h1 className="2xl:text-6xl md:text-4xl xs:text-2xl text-xl text-fg-primary font-semibold leading-relaxed md:leading-snug  capitalize xl:leading-tight max-w-xs 2xl:max-w-md">
            <span className="fuchsia-to-pink-red-gradient bg-clip-text text-transparent mr-4 whitespace-nowrap">
              Discover & collect
            </span>
            <br />
            The best NFTs digital art
          </h1>
          <h3 className="xl:text-xl text-fg-primary text-sm xs:text-base  sm:max-w-xs max-w-[300px] xl:max-w-[380px] 2xl:max-w-lg  leading-loose lg:mb-1">
            We are a leading marketplace focused on connecting NFT artists with
            their fans and collectors of unique digital assets !
          </h3>
          <div className="flex xs:gap-4 gap-2 2xl:mt-1">
            <div className="px-6 py-2 2xl:py-3 rounded-md bg-action-primary hover:bg-action-secondary text-primary font-medium w-fit cursor-pointer ease-transition 3xs:text-base text-sm">
              Explore Now
            </div>
            <div className="xs:px-6 px-4 py-2 rounded-md border border-fg-primary/30 bg-transparent hover:bg-action-primary text-fg-primary font-medium w-fit cursor-pointer ease-transition gap-3 flex-center hover:border-none 3xs:text-base text-sm 2xl:py-3">
              Sell Now
              <ImArrowUpRight2 size={16} color="#ffffff" />
            </div>
          </div>
        </motion.div>
        <motion.div 
         initial = {{
          opacity : 0,
          x : 100  
        }}
        animate = {{
          opacity : 1,
          x : 0
        }}
        transition={{
          duration : 1,
          delay : 0.3,
          ease : "easeInOut"
        }}
        className="grid grid-cols-2 gap-5 py-3  lg:ml-auto mx-auto">
          <div className="grid grid-rows-2 gap-4 pt-12">
            {heroCards.slice(0, 2).map((card, index) => (
              <Image
                key={index}
                src={card.image}
                alt={card.alt}
                className={`w-full rounded-lg md:h-60 h-full ${card.bgColor}`}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ))}
          </div>
          <div className="grid grid-rows-2 gap-4 pb-12">
            {heroCards.slice(2).map((card, index) => (
              <Image
                key={index}
                src={card.image}
                alt={card.alt}
                className={`w-full rounded-lg md:h-60 h-full ${card.bgColor}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
