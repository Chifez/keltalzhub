import Button from '@/components/shared/Button';
import React from 'react';

const CourseCard = ({ course }: any) => {
  const { title, desc, image } = course;
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="flex flex-col items-start justify-end bg-cover gap-3 p-10 bg-no-repeat text-white w-[558px] h-[558px] rounded-3xl"
    >
      <p className="text-4xl">{title}</p>
      <div className="text-xl">{desc}</div>
      <Button
        title="View Details"
        extraclass="bg-[#6B1F00] py-2 px-4 text-white text-4xl"
      />
    </div>
  );
};

export default CourseCard;
