import Button from '@/components/shared/Button';
import React from 'react';
const CourseCard = ({ course }: any) => {
  const { title, desc, image, url } = course;
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-blend-overlay bg-black/30 flex flex-col items-start justify-end bg-cover gap-3 p-2 md:p-10 bg-no-repeat text-white w-full h-[329px] md:h-[545px] rounded-3xl"
    >
      <p className="text-2xl md:text-4xl">{title}</p>
      <div className="text-base md:text-xl line-clamp-2">{desc}</div>
      {desc !== 'coming soon' && (
        <Button
          title="View Details"
          extraclass="bg-[#6B1F00] py-2 px-4 text-white text-xl md:text-3xl"
          url={url}
        />
      )}
    </div>
  );
};

export default CourseCard;
