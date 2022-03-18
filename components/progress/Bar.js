import React from 'react';

const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className='bg-cyan-500 h-1 w-full fixed top-0 left-0 z-50'
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`
      }}
    >

    </div>
  );
};

export default Bar;