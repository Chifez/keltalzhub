import Image from 'next/image';
import React from 'react';

const TestimonyCard = () => {
  return (
    <div className="bg-[#EDF9FF] rounded-lg p-8 shadow max-w-[542px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div>
            <Image src="" alt="testimony" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Nwoga Emmanuel</h3>
            <p className="text-xl">Graphic designer</p>
          </div>
        </div>
        <p className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          assumenda animi consequatur molestias provident fugit optio itaque
          vitae iste consectetur.
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
