'use client';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import TestimonyCard from './testimonyCard';
import WorkCard from './workCard';

const TestimonyPage = () => {
  const list = new Array(4).fill(4);

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
    <div>
      <div className="scrollbar-hide">
        <div className="text-center py-4 px-6 lg:px-12">
          <h4 className="text-4xl font-semibold mb-2">Words on the street</h4>
          <p className="text-3xl font-medium">
            No need for explanations, here are our evidence
          </p>
        </div>

        <TestimonyCard />

        <div className="px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-center font-semibold py-10">
            Ongoing Programs
          </h2>
          <WorkCard />;
        </div>
      </div>
    </div>
  );
};
export default TestimonyPage;
