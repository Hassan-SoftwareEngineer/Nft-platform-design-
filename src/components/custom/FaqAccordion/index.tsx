import { FaqsProps } from "@/sections/Faqs/types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/motion-primitives/accordion";
import { FaQuestionCircle } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

const FaqAccordion: React.FC<FaqsProps> = ({ question, summary }) => {
  return (
    <Accordion
      className="flex w-full flex-col bg-surface-secondary/30 rounded-md border border-border-muted/10 py-3 px-4 lg:px-6"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <AccordionItem value="getting-started" className="">
        <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50 cursor-pointer">
          <div className="flex items-center justify-between transition-transform duration-200 group-data-expanded:mb-2">
            <h1 className="xl:text-lg text-sm md:text-base font-semibold flex gap-3 flex-center leading-relaxed">
              <FaQuestionCircle size={18} />
              {question}
            </h1>
            <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="font-medium text-primary/80 leading-loose text-xs md:text-sm xl:text-base">
            {summary}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
