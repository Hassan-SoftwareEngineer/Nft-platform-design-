import SeeMore from "@/components/custom/SeeMore";
import { blogs } from "./constants";
import BlogCard from "@/components/custom/BlogCard";
import * as motion from "motion/react-client";
import { hiddenVisible, slideInLeftInView } from "@/components/custom/Animations";

const Blogs = () => {
  return (
    <section className="section" id="blogs">
        <SeeMore
        title="Resources Blog & news"
        content="Explore our blog to deepen your understanding of NFTs and digital ownership.From how-tos to market trends, it’s your go-to source for learning and inspiration ..."
        btnText="See All"
        path="#"
        />
        <motion.div 
        className="grid-columns-2 gap padding-top"
        initial={hiddenVisible.initial}
  whileInView={hiddenVisible.whileInView}
  viewport={hiddenVisible.viewport} 
  variants={slideInLeftInView}
        >
            {
                blogs.map((blog, index) => (
                    <BlogCard
                    key={index}
                    image={blog.image}
                    date={blog.date}
                    title={blog.title}
                    content={blog.content}
                    />
                ))
            }
        </motion.div>
    </section>   
  )
}

export default Blogs;
