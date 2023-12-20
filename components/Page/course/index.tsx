'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CourseCard from './CourseCard';
import CustomArrows from './CustomArrows';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { CourseList } from '@/libs/data/courseData';

const CoursePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: 'rounded-3xl',
    nextArrow: (
      <CustomArrows arrowtype="left">
        <MdNavigateBefore className="w-8 h-8" />
      </CustomArrows>
    ),
    prevArrow: (
      <CustomArrows arrowtype="right">
        <MdNavigateNext className="w-8 h-8" />
      </CustomArrows>
    ),
  };

  // const CourseList = [
  //   {
  //     header: ' Design Courses',

  //     list: [
  //       {
  //         title: 'Video Editing',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designOne.png',
  //         url:'/course/'
  //       },
  //       {
  //         title: 'UI/UX',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designTwo.png',
  //       },
  //       {
  //         title: 'Graphic Design',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designThree.png',
  //       },
  //       {
  //         title: 'Animations',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designFour.png',
  //       },
  //     ],
  //   },
  //   {
  //     header: ' Programming',

  //     list: [
  //       {
  //         title: 'web Development',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designOne.png',
  //       },
  //       {
  //         title: 'App Development',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designTwo.png',
  //       },
  //       {
  //         title: 'Machine Learning',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designThree.png',
  //       },
  //       {
  //         title: 'Data science',
  //         desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
  //         image: '/designFour.png',
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className="px-6 md:px-12">
      <h1 className="text-center font-semibold text-4xl pb-2 md:pb-4">
        Our Courses
      </h1>
      {CourseList.map((item, idx) => (
        <div key={idx} className=" mb-20">
          <p className="text-center text-[#2D2D2E] font-semibold text-2xl pb-4">
            {item.header}
          </p>
          <div className="hidden md:grid grid-cols lg:grid-cols-2 gap-8 my-4">
            {item.list.map((course, idx) => (
              <CourseCard course={course} key={idx} />
            ))}
          </div>
          <div className="md:hidden relative">
            <Slider {...settings} className="border mx-3 rounded-3xl ">
              {item.list.map((course, idx) => (
                <CourseCard course={course} key={idx} />
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
