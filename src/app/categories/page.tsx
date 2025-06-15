import SeeMore from "@/components/custom/SeeMore";
import React from "react";
import { categoriesData } from "./constants";
import TrendingCard from "@/components/custom/TrendingCard";
import * as motion from "motion/react-client";
import { hiddenVisible, slideInY } from "@/components/custom/Animations";

const Categories: React.FC = () => {
  return (
    <section className="padding-top max-width mx-auto" id="categories">
      <SeeMore
        title="Trending Categories"
        content="  Start working with Tailwindcss It allows you to compose complex
            designs by combining and customizing utility classes.."
        btnText="See More"
        path="#"
      />
      <motion.div
        className="grid-columns-4 gap padding-top"
  initial={hiddenVisible.initial}
  whileInView={hiddenVisible.whileInView}
  viewport={hiddenVisible.viewport} 
  variants={slideInY}
      >
        {categoriesData.map((category, index) => (
          <TrendingCard
            key={index}
            userProfile={category.userProfile}
            username={category.username}
            cardNo={index + 1}
            nftName={category.nftName}
            nftImage={category.nftImage}
            currentBid={category.currentBid}
            lastBid={category.lastBid}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;
