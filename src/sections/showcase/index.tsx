import Image from "next/image";
import React from "react";
import {
  browseByCategories,
  showCaseCards,
  showcaseGallery,
} from "./constants";
import ShowcaseCard from "@/components/custom/ShowcaseCard";
import SeeMore from "@/components/custom/SeeMore";
import BrowseByCard from "@/components/custom/BrowseByCard";
import * as motion from "motion/react-client";
import { hiddenVisible, slideInY } from "@/components/custom/Animations";

const Showcase: React.FC = () => {
  return (
    <section className="section" id="showcase">
      <motion.div
        initial={hiddenVisible.initial}
        whileInView={hiddenVisible.whileInView}
        viewport={hiddenVisible.viewport}
        variants={slideInY}
      >
        <div className="relative text-center w-full">
          <div className="h-50 md:h-56 lg:h-60 xl:h-54 2xl:h-72 opacity-20">
            <h1 className="2xl:text-8xl font-extrabold 2xl:pt-16 pt-8 md:pt-10 lg:pt-12 xl:pt-16 text-4xl lg:text-5xl leading-normal tracking-tight xl:text-6xl dark:text-zinc-200 uppercase">
              Photos
            </h1>
          </div>
          <div className="absolute inset-0">
            <h1 className="md:text-4xl text-3xl 2xl:text-7xl lg:text-5xl leading-normal font-bold tracking-tight xl:text-6xl dark:text-zinc-200 mt-1">
              TokenVault Showcase
            </h1>
            <div className="flex gap-2 flex-col xl:hidden text-primary/80 md:text-xl mt-14 font-medium ">
              <p> Making NFT ownership easier </p>
              <p> with financing plans </p>
              <p className="flex justify-end md:justify-center items-center gap-4 md:ml-52 mx-4">
                that work for you
                <span className="w-22 h-1 mt-2 bg-fg-secondary"></span>
              </p>
            </div>
            <p className="text-primary/80 hidden xl:flex justify-end items-center gap-4 text-xl mt-20 2xl:mt-30 font-medium  2xl:ml-12">
              Making NFT ownership easier with financing plans that work for you
              <span className="w-24 h-1 mt-2 bg-fg-secondary"></span>
            </p>
          </div>
        </div>
        <div className="grid-columns-3 gap max-width mx-auto padding-top">
          {showcaseGallery.map((gallery, index) => (
            <div key={index}>
              <div className="relative h-72 w-full rounded-lg hover:scale-105 ease-transition">
                <Image
                  className="bg-cover rounded-lg"
                  src={gallery.image}
                  alt={gallery.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={hiddenVisible.initial}
        whileInView={hiddenVisible.whileInView}
        viewport={hiddenVisible.viewport}
        variants={slideInY}
        className="grid-columns-2 md:gap-1 gap-2 padding-top"
      >
        {showCaseCards.map((card, index) => (
          <ShowcaseCard
            key={index}
            Icon={card.Icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </motion.div>
      <motion.div
        initial={hiddenVisible.initial}
        whileInView={hiddenVisible.whileInView}
        viewport={hiddenVisible.viewport}
        variants={slideInY}
      >
        <div className="padding-top">
          <SeeMore
            title="Browse by categories"
            content="Browse by category to explore a wide range of NFTs, from digital art to gaming collectibles .."
            btnText="See All"
            path="#"
          />
        </div>

        <div className="grid-columns-3 gap padding-top">
          {browseByCategories.map((browseCard, index) => (
            <BrowseByCard
              key={index}
              image={browseCard.image}
              title={browseCard.title}
              path={browseCard.path}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;
