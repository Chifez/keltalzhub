import React from 'react';
import Image from 'next/image';

const CurriculumCards = ({ props }: any) => {
  const { src, title, description } = props;
  return (
    <div className="flex flex-col items-start gap-4 w-full h-full border border-[#6B1F00]  rounded-lg p-4 shadow-sm shadow-[#d619225b] pb-10">
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="keletalzhub curriculum"
        />
      </div>
      <div className="w-24 h-10 bg-slate-300 rounded-full"></div>

      <div className="my-2">
        <h2 className="text-3xl h-20 font-semibold">{title}</h2>
        <p className="text-xl md:text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default CurriculumCards;
