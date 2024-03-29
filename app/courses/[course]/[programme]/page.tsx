'use client';
import React from 'react';
import { CourseList } from '@/libs/data/courseData';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import Link from 'next/link';

interface Course {
  title: string;
  desc: string;
  image: string;
  url: string;
  brochureId: string;
  info: {
    header: string;
    content: string;
  }[];
  headerDesc?: string;
  audience?: string[];
}
const page = ({
  params,
}: {
  params: { course: string; programme: string };
}) => {
  const { course, programme } = params;
  // const courseInfo = CourseList.flatMap((item) => item.list).find(
  //   (c) => c.url === `/courses/${course}/${programme}`
  // );
  const courseInfo: Course | undefined = CourseList.flatMap(
    (item) => item.list
  ).find((c) => c.url === `/courses/${course}/${programme}`);

  // const downloadBrochure = async () => {
  //   try {
  //     // const response = await fetch(
  //     //   `/api/downloadBrochure/${courseInfo?.brochureId}?filename=${courseInfo?.brochureId}`
  //     // );
  //     const response = await fetch(`${courseInfo?.brochureId}`);
  //     if (!response.ok) {
  //       console.error('Failed to download brochure', response);
  //       return;
  //     }
  //     const fileName = courseInfo?.title
  //       ? `${courseInfo.title}.pdf`
  //       : 'course_brochure.pdf';

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);

  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = fileName || 'course_brochure';
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   } catch (error) {
  //     console.error('Error downloading brochure:', error);
  //   }
  // };

  if (!courseInfo) {
    return <div>Course not found</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[80%] rounded-lg overflow-hidden">
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
        <div className="w-[90%] md:w-auto my-4 grid md:grid-cols-2 md:gap-x-40 gap-y-10">
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
        {courseInfo.audience && (
          <div className="w-[90%] md:w-[80%]">
            <h3 className="text-xl text-[#D9D9D9] font-medium mb-4">
              who is this course meant for?
            </h3>
            {courseInfo.headerDesc && (
              <p className="text-xl mb-4">{courseInfo.headerDesc}</p>
            )}
            <ul
              className={`${
                courseInfo.headerDesc ? 'ml-10' : 'mr-0'
              } list-disc`}
            >
              {courseInfo.audience.map((item, idx) => (
                <li className="text-xl" key={idx}>
                  {item}
                </li>
              ))}
              {/* <li className="text-xl">
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
            </li> */}
            </ul>
          </div>
        )}
        <div className="flex flex-col item-center justify-center my-8 gap-2">
          <Button
            title="enroll for this course"
            extraclass="text-white p-4"
            url="/enroll"
          />
          <Link
            href={courseInfo.brochureId}
            target="_blank"
            // onClick={downloadBrochure}
            className=" underline text-[#000B6A] font-medium"
          >
            Download course brochure
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
