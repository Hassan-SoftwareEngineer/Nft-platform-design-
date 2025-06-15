import Image from 'next/image';
import React from 'react';
import { TopSellerCardProps } from './types';
import Link from 'next/link';

const TopSellerCard : React.FC <TopSellerCardProps>= ({
    topNfts,
    userProfile,
    username,
    sellerNo,
    totalEarnings,
    detailsPath
}) => {
  return (
    <div className='flex-gap-4 flex-col cards p-4'>
        <div className='grid grid-cols-3 gap-3 border-b border-border-muted/50 border-dotted pb-4'>
            {
                topNfts.map((nft, index) => (
                    <div className='relative h-28 w-full rounded-md' key={index}>
                <Image src={nft} alt={username} fill className='bg-cover rounded-md' />
            </div>
                ))
            }
        </div>
        <div className='flex-between-center'>
            <div className='relative h-12 w-12 mt-0.5'>
                          <Image src={userProfile} className='bg-cover object-center rounded-full' fill alt={username} />
                       </div>
<h1 className='opacity-50 text-4xl font-bold'>
0
{
    sellerNo
}
</h1>
        </div>
        <div className='md:pb-2'>
              <h2 className='md:text-xl text-lg font-semibold mb-1'> {username} </h2>
        <div className='flex sm:items-center sm:justify-between max-sm:flex-col'>
            <p className='text-sm font-medium'>
                    Total earnings : $
                    <span className = "text-base font-bold"> {totalEarnings}</span>
                     </p>
            <Link href={detailsPath} className=' rounded-full-transparent-link ease-transition w-fit text-sm max-sm:self-end max-sm:mt-3'>
            View Detail
            </Link>
        </div>
        </div>
    </div>
  )
}

export default TopSellerCard;
