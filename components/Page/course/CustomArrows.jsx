import React from 'react';

const CustomArrows = (props) => {
  const { children, style, onClick, arrowtype } = props;
  return (
    <div
      //   style={{ ...style, display: 'block', background: 'red' }}
      className={` ${
        arrowtype == 'right'
          ? 'absolute left-[100%] top-[50%] z-20 mx-2'
          : 'absolute right-[100%] top-[50%] z-20 mx-2'
      }  flex items-center justify-center bg-white text-black w-7 h-7 rounded-full`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CustomArrows;
