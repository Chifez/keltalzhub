import Button from '@/components/shared/Button';
import Image from 'next/image';
import React from 'react';

interface Item {
  title: string;
  desc: string;
  image: string[];
}
const AboutCard = ({ item }: { item: Item }) => {
  const { title, desc, image } = item;
  return (
    <div className="flex flex-col items-center justify-center text-center py-1 md:py-8">
      <Button
        title={title}
        extraclass="bg-[#6B1F00] py-2 text-white !text-xl md:!text-4xl px-12 my-4"
      />
      <p className="text-xl md:text-3xl w-[80%]">{desc}</p>
      <div className="md:hidden my-2">
        {image?.map((item, idx) => (
          <div
            className={`${
              idx === 1 ? 'absolute -top-4 left-4' : ''
            } relative w-52 h-52 rotate-6 border-4 border-blue-400`}
            key={idx}
          >
            <Image
              src={item}
              layout="fill"
              objectFit="cover"
              alt="about images"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
