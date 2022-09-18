import React, { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Gal1 from '../../../assets/images/9947.png';
import Gal2 from '../../../assets/images/9949.png';
import Gal3 from '../../../assets/images/9950.png';
import Gal4 from '../../../assets/images/9951.png';
import Gal5 from '../../../assets/images/9952.png';
import Gal6 from '../../../assets/images/9960.png';
import Gal7 from '../../../assets/images/9985.png';
import Gal8 from '../../../assets/images/9986.png';
import Gal9 from '../../../assets/images/9988.png';
import Gal10 from '../../../assets/images/9990.png';
import Gal11 from '../../../assets/images/9994.png';
import Gal12 from '../../../assets/images/9997.png';
import Gal13 from '../../../assets/images/9999.png';
import './slide.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  const imagesList = useMemo(
    () => [
      // {img : Falcon1},
      { image: `${Gal1}` },
      { image: `${Gal2}` },
      { image: `${Gal3}` },
      { image: `${Gal4}` },
      { image: `${Gal5}` },
      { image: `${Gal6}` },
      { image: `${Gal7}` },
      { image: `${Gal8}` },
      { image: `${Gal9}` },
      { image: `${Gal10}` },
      { image: `${Gal11}` },
      { image: `${Gal12}` },
      { image: `${Gal13}` },
    ],
    []
  );
  return (
    <div className='parent'>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        infinite={true}
        partialVisible={false}
        dotListClass='custom-dot-list-style'
      >
        {imagesList.map((imageUrl, index) => {
          return (
            <div className='slider' key={index}>
              <img
                src={imageUrl.image}
                width='100%'
                alt='movie'
                className='hero__slide__img'
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
