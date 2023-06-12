
import React, { useRef, useEffect } from 'react';
//import styled from 'styled-components';

import Carouselbutton from './Carouselbutton';
const Carousel = ({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) => {

    const slideRef = useRef();
useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
  return (

    <div className='relative w-[55%] overflow-hidden shadow-neutral-50'>
      <div className={`flex w-[100% h-450px] transition-transform duration-600 ease-in-out`} xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img className='w-[100%] h-[100%]' src={img} alt={img} key={i} />
        ))}
      </div>
      <Carouselbutton
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </div>
  )
}

export default Carousel