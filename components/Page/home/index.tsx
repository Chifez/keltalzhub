'use client';

import Button from '@/components/shared/Button';
import { FaPlayCircle } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Curriculum from './curriculum';

const HomePage = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full flex flex-col text-center lg:text-justify lg:flex-row gap-5 px-5 lg:px-0 py-2">
        <div className="w-full">
          <div>
            <h1 className="break-all text-4xl lg:text-5xl xl:text-6xl leading-[40px] lg:leading-[70px] xl:leading-[80px] font-bold">
              We make Tech as <br /> Easy as ‘A’ ‘B’ ‘C’
              <div className="flex flex-row gap-5 justify-center lg:justify-normal">
                <p>for</p>
                <div className="text-[#000B6A] text-center">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Adults')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Teens')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Kids')
                        .start();
                    }}
                  />
                </div>
              </div>
            </h1>
            <p className="break-words text-xl text-center w-[80%] mx-auto lg:mx-0 lg:text-justify lg:mb-8">
              We understand that venturing into a new skill can be overwhelming
              and daunting and that’s exactly why we exist.
              <br />
              <i>To make tech easier for you</i>
            </p>
            <div className="hidden md:flex flex-row gap-2 w-full md:justify-center lg:justify-start">
              <Button
                title="Start learning"
                url="/enroll"
                extraclass="text-2xl py-2 px-8 text-white"
              />
              <Button
                title="Or view our courses"
                url="/courses"
                icon={<FaPlayCircle className="fill-[#6B1F00]" />}
                extraclass="flex items-center justify-center gap-2 border-2 border-[#000B6A] bg-white text-xl py-2 px-4 line-clamp-1"
              />
            </div>
          </div>
        </div>
        <div className="relative lg:w-[90%] h-[300px] md:h-[450px] w-[80vw] m-auto rounded-2xl overflow-hidden">
          <Image src="/hero.png" alt="hero" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col gap-2 py-2 w-[60vw] m-auto md:hidden ">
          <Button
            title="Start learning"
            url="/enroll"
            extraclass="text-xl md:!text-2xl py-3 md:py-2 px-2 text-white"
          />
          <Button
            title="Or view our courses"
            url="/courses"
            icon={<FaPlayCircle className="fill-[#6B1F00]" />}
            extraclass="flex items-center justify-center gap-2 border-2 border-[#000B6A] bg-white !text-xl md:!text-2xl py-3 md:py-1"
          />
        </div>
      </div>
      <div className="px-2 md:px-0 mt-12 w-full  ">
        <Curriculum />
      </div>
    </div>
  );
};
export default HomePage;
