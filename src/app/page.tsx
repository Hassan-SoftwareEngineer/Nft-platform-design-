import Hero from "@/sections/Hero";
import Categories from "../sections/categories";
import Sellers from "../sections/sellers";
import Showcase from "../sections/showcase";
import Faqs from "../sections/faqs";
import Blog from "../sections/blogs";

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
