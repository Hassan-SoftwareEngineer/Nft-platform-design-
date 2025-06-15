import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { BlogCardProps } from './types';

const BlogCard : React.FC <BlogCardProps> = ({
    image,
    date,
    title,
    content,
}) => {
  return (
    <div className='h-96 rounded-md p-3 bg-surface-secondary/30 group'>
        <div className='relative h-full w-full rounded-md  overflow-hidden'>
             <Image
    src={image}
    alt=""
    className="absolute inset-0 w-full h-full object-cover 
    ease-transition group-hover:scale-105"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
            <div className='absolute inset-0 bg-surface-accent/60' />
            <div className='absolute inset-0 z-10 flex flex-col justify-end gap-2 lg:p-6 p-4'>
                <h3 className='font-semibold text-lg'> {date} </h3>
                <h1 className='md:text-2xl lg:text-3xl text-xl font-bold lg:leading-tight leading-normal'> {title} </h1>
                <p className='lg:font-semibold font-medium text-base leading-normal'> {content} </p>
                  <Link
        href="#"
        className="py-1.5 border-b border-dashed border-primary font-medium w-fit flex gap-2 mt-1"
      >
        Read More 
        <span className="mt-1">
          <HiArrowLongRight size={20} />
        </span>
      </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard;
