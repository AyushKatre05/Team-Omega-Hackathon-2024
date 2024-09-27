import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className="relative h-80 w-72 lg:w-60 p-4 shadow-lg rounded-xl bg-gradient-to-b from-red-600 to-black transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t">
        {/* Icon Section */}
        <div className="flex items-center justify-center h-20 mb-4">
          <Image 
            src={item.icon} 
            alt="icon" 
            width={60} 
            height={60} 
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Title and Description */}
        <div className="flex-grow text-center">
          <h2 className="font-bold text-xl text-white">{item.name}</h2>
          <p className="text-gray-200 text-sm mt-2 leading-tight line-clamp-3">
            {item.desc}
          </p>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </Link>
  );
}

export default TemplateCard;
