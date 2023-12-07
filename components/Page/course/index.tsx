import CourseCard from './CourseCard';

const CoursePage = () => {
  const DesignCourseList = [
    {
      title: 'Video Editing',
      desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
      image: '/designOne.png',
    },
    {
      title: 'UI/UX',
      desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
      image: '/designTwo.png',
    },
    {
      title: 'Graphic Design',
      desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
      image: '/designThree.png',
    },
    {
      title: 'Animations',
      desc: 'This course is designed to introduce participants to the art and techniques of video editing and animation. ',
      image: '/designFour.png',
    },
  ];
  return (
    <div className="">
      <h1 className="text-center font-semibold text-6xl pb-4">Our Courses</h1>
      <div>
        <p className="text-center text-[#2D2D2E] font-semibold text-4xl pb-4">
          Design Courses
        </p>
        <div className="grid grid-cols lg:grid-cols-2  gap-8 my-4">
          {DesignCourseList.map((course, idx) => (
            <CourseCard course={course} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
