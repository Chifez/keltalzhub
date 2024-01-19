import React from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const WorkCard = () => {
  const list = ['/works1.jpg', '/works2.jpg', '/works3.jpg', '/works4.jpg'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <div className="bg-[#EDF9FF] rounded-md p-4 md:p-8">
        <Slider {...settings}>
          {list.map((item, idx) => {
            return (
              <div
                className="relative w-full min-h-[200px] md:min-h-[400px]"
                key={idx}
              >
                <Image src={item} alt="works" layout="fill" objectFit="cover" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default WorkCard;
