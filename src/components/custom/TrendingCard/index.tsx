"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { TrendingCardProps } from './types';
import { FaHeart } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import * as motion from "motion/react-client";


const TrendingCard : React.FC <TrendingCardProps> = ({
  userProfile,
  username,
  cardNo,
  nftImage,
  nftName,
  currentBid,
  lastBid
}) => {

  const bidRates = [{title : "Current Bid", rate : currentBid },
     {title : "Last Bid", rate : lastBid}];
  
     const [placeBid, setPlaceBid] = useState(false);

  return (
    <div className='cards p-3' onMouseEnter={() => setPlaceBid(true)} onMouseLeave={() => setPlaceBid(false)}>
      <div className='relative h-64 w-full'>
  <Image
    src={nftImage}
    alt={nftName}
    fill
    className='object-cover object-center rounded-md'
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
  {
    placeBid && (
      <div 
      className='absolute inset-0 bg-black/50 flex-center ease-transition'
      >
         <motion.button className='rounded-full-link ease-transition text-sm'
          initial = {{
        y : 0,
        opacity : 0
      }}
      animate = {{
        y : 1,
        opacity : 1
      }}
      transition={{
        duration : 0.5,
        delay : 0.2,
        ease : "easeOut"
      }}
         >
          Place Bid
          <IoNavigate size={16} className='mt-0.5' />
  </motion.button>
      </div>
    )
  }
</div>
        <div className='flex-between-center py-3 px-1'>
          <div className='flex-center gap-3'>
            <div className='relative h-10 w-10'>
               <Image src={userProfile} className='bg-cover bg-center rounded-full' fill alt={username} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
<div>
  <h2 className='font-semibold'>  @{username} </h2>
  <h4 className='font-medium text-sm'> {nftName} </h4>
</div>
          </div>
          <span className={`${(cardNo == 2 || cardNo == 8) && "text-red-600"}`}>
             <FaHeart size={18} className='mr-2'  />
          </span>
        </div>
         <div className='flex-between-center px-2'>
          {
            bidRates.map((bid, index) => (
              <div key={index}>
            <h3 className={`font-bold ${bid.title === "Last Bid" ? "text-end" : "ml-2"}`}> {bid.title} </h3>
             <p className='flex gap-1 text-fg-secondary py-1.5 font-semibold'>
              <SiEthereum size={18} />
              {
               bid.rate
              }
               <span>
                ETH
                </span>
            </p>
          </div>
            ))
          }
         </div>
    </div>
  )
}

export default TrendingCard;
