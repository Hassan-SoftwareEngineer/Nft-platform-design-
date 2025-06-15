import React from 'react';
import { ShowcaseCardProps } from './types';

const ShowcaseCard : React.FC <ShowcaseCardProps> = ({
    Icon,
    title,
    content
}) => {
  return (
    <div className={`${title.includes("wallet") ? "rounded-l-xl" : "rounded-r-xl"} px-6 py-8 bg-fuchsia-950/70 hover:bg-surface-secondary group ease-transition`}>

    <div className="w-16 h-16 m-4 mb-8 rotate-45 rounded-lg bg-surface-secondary/60 flex items-center justify-center group-hover:bg-fg-primary/25 group-hover:text-primary">
  <div className="-rotate-45 text-fg-secondary group-hover:text-fg-primary">
    <Icon size={24} />
  </div>
</div>


<h1 className='md:text-xl 2xl:text-2xl text-lg font-semibold'> {title} </h1>
<p className='mt-3 text-sm lg:text-base leading-relaxed'> {content} </p>
    </div>
  )
}

export default ShowcaseCard;
