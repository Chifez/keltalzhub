import React from 'react';
import Image from 'next/image';

const Icon = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="hero icon"
      width={20}
      height={20}
      //     objectFit="cover"
      //    className='relative'
    />
  );
};

export default Icon;
