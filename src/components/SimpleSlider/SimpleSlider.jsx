import React, { useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Gal1 from '../../assets/images/9947.png';
import Gal2 from '../../assets/images/9949.png';
import Gal3 from '../../assets/images/9950.png';
import Gal4 from '../../assets/images/9951.png';
import Gal5 from '../../assets/images/9952.png';
import Gal6 from '../../assets/images/9960.png';
import Gal7 from '../../assets/images/9985.png';
import Gal8 from '../../assets/images/9986.png';
import Gal9 from '../../assets/images/9988.png';
import Gal10 from '../../assets/images/9990.png';
import Gal11 from '../../assets/images/9994.png';
import Gal12 from '../../assets/images/9997.png';
import Gal13 from '../../assets/images/9999.png';
import './simple-slider.css';

export default function SimpleSlider() {
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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: 'linear',
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 5,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplaySpeed: 2000,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid>
      <Row className='falcon__slider falcon__row__top'>
        <div style={{ margin: '0px auto' }}>
          <Slider {...settings}>
            {imagesList.map((imageList, index) => (
              <div key={index} style={{ margin: '10px' }}>
                <img src={imageList.image} width='99%' alt='falcon' />
              </div>
            ))}
          </Slider>
        </div>
      </Row>
    </Container>
  );
}
