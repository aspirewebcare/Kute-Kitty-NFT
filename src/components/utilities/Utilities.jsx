import React, { Component, useEffect, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import { Col, Container, Row } from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';
import BG from '../../assets/images/ut__bg.png';
import './utilities.css';
import {
  Arrow90degDown,
  ArrowLeft,
  ArrowRight,
  CaretLeftSquare,
  CurrencyDollar,
  HandIndexThumb,
  HandThumbsUp,
  Percent,
  PuzzleFill,
  Tree,
} from 'react-bootstrap-icons';

const Utilities = () => {
  const sliderRef = useRef();

  const breakpoints = [
    { width: 1, itemsToShow: 1, pagination: false, showArrows: false },
    { width: 850, itemsToShow: 3, pagination: false, showArrows: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 1450, itemsToShow: 4, pagination: false },
    { width: 1750, itemsToShow: 4, pagination: false },
  ];

  const utItems = [
    {
      icons: <CaretLeftSquare className='ut__icons' />,
      title: 'Free Travel',
      description:
        '5 people selected by members of the whitelist will win a travel completely paid by us in a natural location to show the beauty of this planet',
    },
    {
      icons: <HandThumbsUp className='ut__icons' />,
      title: 'Following Back',
      description: 'KuteeKitty will start to follow you back',
    },
    {
      icons: <Percent className='ut__icons' />,
      title: '20% Discount',
      description: '20% of the mint redistributed at who are in the whitelist',
    },
    {
      icons: <CurrencyDollar className='ut__icons' />,
      title: 'Free NFTs',
      description: 'Free nft of the next collection for the whitelist people',
    },
    {
      icons: <PuzzleFill className='ut__icons' />,
      title: 'Free Whitelist',
      description:
        'Whitelist for the next collection, for the first 100 that will be mint the project',
    },
    {
      icons: <Tree className='ut__icons' />,
      title: 'Tree Plantation ',
      description:
        'KuteeKitty will plant 10 trees for each owners (video prove)',
    },
    {
      icons: <Tree className='ut__icons' />,
      title: 'Tree Plantation ',
      description:
        'The first 100 people who will put a kutee kitty as a profile picture (Instagram or Twitter) will be put on the whitelist for the next collection, and moreover an extraction will be made among those who have a kutee kitty as their photo profile, and there will be a cash prize',
    },
  ];

  return (
    <Container fluid className='nm np ut__container__main'>
      <h1 className='ut__h1 '>
        <AnimatedText
          type='chars' // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
          }}
          animationType='float'
          interval={0.06}
          duration={1}
          tag='p'
          className='animated-paragraph'
          includeWhiteSpaces
          threshold={0.1}
          rootMargin='20%'
        >
          UTILITIES
        </AnimatedText>
      </h1>

      <div style={{ margin: '10px 20px 0px 20px' }}>
        <Carousel
          ref={sliderRef}
          breakPoints={breakpoints}
          itemPadding={[10, 50]}
          scroll='Infinite'
        >
          {utItems.map((utItem, index) => (
            <div key={index} className='ut__box'>
              {utItem.icons}
              <h3 className='ut__h3'> {utItem.title}</h3>
              <p className='ut__p1'>{utItem.description}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className='slider__arrows'>
        <button
          className='btn__slide__left'
          onClick={() => sliderRef.current.slidePrev()}
        >
          <ArrowLeft className='arrows__slider' />
        </button>

        <button
          className='btn__slide__left'
          onClick={() => sliderRef.current.slideNext()}
        >
          <ArrowRight className='arrows__slider' />
        </button>
      </div>
      <img src={BG} className='ut__cats' alt='utility cats' width='50%' />
    </Container>
  );
};

export default Utilities;
