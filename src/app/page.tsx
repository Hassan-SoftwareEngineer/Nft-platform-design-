import Hero from "@/components/custom/Hero";
import Categories from "./categories/page";
import Sellers from "./sellers/page";
import Showcase from "./showcase/page";
import Faqs from "./faqs/page";
import Blog from "./blog/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Sellers />
      <Showcase />
      <Faqs />
      <Blog />
    </>
  );
}
