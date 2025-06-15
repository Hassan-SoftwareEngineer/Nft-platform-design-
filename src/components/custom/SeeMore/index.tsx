import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { SeeMoreProps } from "./types";
import Link from "next/link";

const SeeMore: React.FC<SeeMoreProps> = ({ title, content, btnText, path = "/", needBtn = true }) => {
  return (
    <div className="text-fg-primary flex-between-center sm:flex-row flex-col sm:gap-0 gap-3 px-1.5">
      <div className="sm:max-w-md 2xl:max-w-lg">
        <h1 className="text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-semibold whitespace-nowrap">
          {title}
        </h1>
        <h4 className="font-medium mt-3 md:mt-4 lg:mt-5 text-sm lg:text-base leading-relaxed lg:leading-loose">{content}</h4>
      </div>
      {
        needBtn && (
          <Link
        href={path}
        className="rounded-full-transparent-link ease-transition max-sm:self-end"
      >
        {btnText}
        <span className="mt-1">
          <HiArrowLongRight size={24} />
        </span>
      </Link>
        )
      }
    </div>
  );
};

export default SeeMore;
