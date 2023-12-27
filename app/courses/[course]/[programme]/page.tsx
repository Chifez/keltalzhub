import React from 'react';
import { CourseList } from '@/libs/data/courseData';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import Link from 'next/link';

const page = ({
  params,
}: {
  params: { course: string; programme: string };
}) => {
  const { course, programme } = params;
  const courseInfo = CourseList.flatMap((item) => item.list).find(
    (c) => c.url === `/courses/${course}/${programme}`
  );

  if (!courseInfo) {
    return <div>Course not found</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center border border-red-600">
        <div className="w-[80%] rounded-lg overflow-hidden">
          <div className="relative w-full h-[250px] ">
            <Image
              layout="fill"
              objectFit="cover"
              src={courseInfo?.image}
              alt="course logo"
            />
          </div>
          {/* <img src={courseInfo?.image} alt="course logo" /> */}
          <div className="flex-1 py-5 w-full text-white bg-red-500 text-center text-2xl">
            <p>{courseInfo?.title}</p>
          </div>
        </div>
        <div className="w-[80%] md:w-auto my-4 grid md:grid-cols-2 md:gap-x-40 gap-y-10">
          {courseInfo?.info.map((item, idx) => (
            <div key={idx} className="flex items-center justify-start ">
              <div className="">
                <h4 className="text-xl text-[#D9D9D9] font-medium">
                  {item.header}
                </h4>
                <p className="text-xl font-bold">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[80%]">
          <h3 className="text-xl text-[#D9D9D9] font-medium mb-4">
            who is this course meant for?
          </h3>
          <ul className="list-disc">
            <li className="text-xl">
              This class is suitable for novice users of After Effects or
              individuals engaged in or aspiring to work in the video industry,
              or Adobe users desiring to expand their expertise in video
              enhancements.{' '}
            </li>
            <li className="text-xl">
              This class is suitable for novice users of After Effects or
              individuals engaged in or aspiring to work in the video industry,
              or Adobe users desiring to expand their expertise in video
              enhancements.
            </li>
          </ul>
        </div>
        <div className="flex flex-col item-center justify-center my-8 gap-2">
          <Button title="enroll for this course" extraclass="text-white p-4 " />
          <Link href="#" className=" underline text-[#000B6A] font-medium">
            Download course brochure
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
