import React from 'react';

const Curriculum = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(/learning.png)` }}
        className="w-[90vw] md:w-full min-h-[200px] flex-1 md:min-h-[370px] rounded-3xl overflow-hidden bg-no-repeat text-xl text-white md:text-6xl flex items-center font-normal px-5 md:px-10 md:leading-[70px] bg-cover bg-center"
      >
        <p className="w-[70%] xl:w-[60%]">
          Learn with the speed of light with our industry standard curriculum
        </p>
      </div>
    </div>
  );
};

export default Curriculum;
