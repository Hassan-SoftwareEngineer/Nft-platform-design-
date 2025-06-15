import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BrowseByCardProps } from './types';

const BrowseByCard : React.FC <BrowseByCardProps> = ({
  image,
  title,
  path
}) => {
  return (
    <div className='relative rounded-lg h-72 w-full'>
      <Image src={image} alt={title} className='bg-cover rounded-lg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      <div className='absolute inset-0 bg-surface-primary/25' />
      <Link href={path} className='rounded-full-link absolute top-1 left-2 z-10'>
      {title}
      </Link>
    </div>
  )
}

export default BrowseByCard;
