import SeeMore from "@/components/custom/SeeMore";
import { blogs } from "./constants";
import BlogCard from "@/components/custom/BlogCard";
import * as motion from "motion/react-client";
import { hiddenVisible, slideInLeftInView } from "@/components/custom/Animations";

const Blog = () => {
  return (
    <section className="max-width mx-auto padding-top" id="blogs">
        <SeeMore
        title="Resources Blog & news"
        content="Start working with Tailwindcss It allows you to compose complex designs by combining and customizing utility classes.."
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

export default Blog;
