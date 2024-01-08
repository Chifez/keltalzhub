import Image from 'next/image';
import React from 'react';

const TestimonyCard = () => {
  const list = [
    {
      name: 'Nwoga Emmanuel',
      course: 'Graphics Designer',
      image: '/testimony2.png',
      desc: 'Within a month I was able to learn the skill of graphics designing and  was able to market my skills to the extent of getting gigs while still learning',
    },
    {
      name: 'Stellz Graphics',
      course: 'Graphics Designer',
      image: '/testimony3.png',
      desc: 'I had no prior experience in graphics designing but while at Keltalz Tech Hub, I learnt the secrets to creating a stunning and appealing designs.',
    },
    {
      name: 'Ohanado Brian',
      course: 'Animator',
      image: '/testimony4.png',
      desc: 'I always loved illustrations and animations and I ventured into this filled and I have no regret, I can now design and animate multiple characters.',
    },
    {
      name: 'Ohanado Martins',
      course: 'Video Editor',
      image: '/testimony1.png',
      desc: 'I thought Video editing was so complex but after 1 month plus of learning video Editing, it looks like the simplest skill on earth.',
    },
  ];
  return (
    <>
      <div className="scrollbar-hide flex flex-row pl-6 pr-6 gap-8 overflow-scroll md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-4">
        {list.map((item, idx) => (
          <div
            className="bg-[#EDF9FF] rounded-2xl p-8 shadow min-w-[300px] max-w-[542px]"
            key={idx}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full">
                  <Image
                    src={item.image}
                    alt="testimony"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-xl">{item.course}</p>
                </div>
              </div>
              <p className="text-sm md:text-xl font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonyCard;
