import Image from 'next/image';
import React from 'react';

const TestimonyCard = () => {
  const list = new Array(4).fill(4);
  return (
    <>
      <div className="flex flex-row pl-6 pr-6 gap-8 overflow-scroll md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-4">
        {list.map((item, idx) => (
          <div
            className="bg-[#EDF9FF] rounded-2xl p-8 shadow min-w-[300px] max-w-[542px]"
            key={idx}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full">
                  <Image
                    src="/testimony1.png"
                    alt="testimony"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl">
                    Nwoga Emmanuel
                  </h3>
                  <p className="text-sm md:text-xl">Graphic designer</p>
                </div>
              </div>
              <p className="text-sm md:text-xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis assumenda animi consequatur molestias provident fugit
                optio itaque vitae iste consectetur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonyCard;
