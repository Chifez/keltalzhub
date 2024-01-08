import React from 'react';
import CurriculumCards from './curriculumCards';

const Curriculum = () => {
  const curriculumList = [
    {
      title: '100% Practical session',
      src: '/practical.png',
      description:
        'Action speaks louder than words and we incorporate that mantra in our tech hub',
    },
    {
      title: 'Certification upon Conclusion',
      src: '/certificiation.png',
      description:
        'Action speaks louder than words and we incorporate that mantra in our tech hub',
    },
    {
      title: 'Continuous Mentorship',
      src: '/mentor.png',
      description:
        'Action speaks louder than words and we incorporate that mantra in our tech hub',
    },
  ];
  return (
    <div className="w-full h-full scrollbar-hide">
      <div
        style={{ backgroundImage: `url(/learning.png)` }}
        className="w-full md:w-full min-h-[200px] md:min-h-[370px] rounded-lg md:rounded-3xl overflow-hidden bg-no-repeat text-xl text-white md:text-4xl lg:text-6xl flex items-center font-normal px-5 md:px-10 md:leading-[70px] bg-cover bg-center"
      >
        <p className="w-[70%] xl:w-[60%]">
          Learn with the speed of light with our industry standard curriculum
        </p>
      </div>

      <div className="mt-10 mb-5 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
        {curriculumList.map((item, idx) => (
          <CurriculumCards props={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
