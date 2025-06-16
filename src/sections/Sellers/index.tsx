import SeeMore from "@/components/custom/SeeMore";
import React from "react";
import { topSellers } from "./constants";
import TopSellerCard from "@/components/custom/TopSellerCard";
import * as motion from "motion/react-client";
import { hiddenVisible, slideInY } from "@/components/custom/Animations";

const Sellers: React.FC = () => {
  return (
    <section className="section" id="sellers">
      <SeeMore
        title="Top Sellers"
        content="Explore profiles of the most successful and active sellers on the platform.From limited-edition drops to iconic collections, these names are setting the standard ..."
        path="#"
        btnText="View All"
      />
      <motion.div
        className="grid-columns-3 gap padding-top"
        initial={hiddenVisible.initial}
        whileInView={hiddenVisible.whileInView}
        viewport={hiddenVisible.viewport}
        variants={slideInY}
      >
        {topSellers.map((seller, index) => (
          <TopSellerCard
            key={index}
            userProfile={seller.userProfile}
            username={seller.username}
            topNfts={seller.topNfts}
            totalEarnings={seller.totalEarnings}
            detailsPath={seller.detailsPath}
            sellerNo={index + 1}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Sellers;
