import SeeMore from '@/components/custom/SeeMore';
import { faqs } from './constants';
import FaqAccordion from '@/components/custom/FaqAccordion';
import * as motion from "motion/react-client";
import { hiddenVisible, slideInLeftInView } from '@/components/custom/Animations';

const Faqs = () => {
  return (
    <section className='max-width mx-auto padding-top' id="faqs">
      <SeeMore
      title = "Faqs"
      content = "Start working with Tailwindcss It allows you to compose complex designs by combining and customizing utility classes.."
      needBtn = {false}
      />
      <motion.div 
      className='grid-columns-2 little-gap padding-top'
      initial={hiddenVisible.initial}
  whileInView={hiddenVisible.whileInView}
  viewport={hiddenVisible.viewport} 
  variants={slideInLeftInView}
      >
        <div className='flex flex-col little-gap'>
          {
            faqs.filter((faq) => faq.id % 2 !== 0 ).map((faq) => (
              <FaqAccordion
              id={faq.id}
              key={faq.id}
              question={faq.question}
              summary={faq.summary}
              />
            ))
          }
        </div>
        <div className='flex flex-col little-gap'>
          {
            faqs.filter((faq) => faq.id % 2 === 0 ).map((faq) => (
              <FaqAccordion
              id={faq.id}
              key={faq.id}
              question={faq.question}
              summary={faq.summary}
              />
            ))
          }
        </div>
      </motion.div>
        </section>
  );
}

export default Faqs;
