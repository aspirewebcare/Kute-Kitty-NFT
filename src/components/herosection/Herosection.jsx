import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';
import './herosection.css';
import 'animate.css';
import { Navigation } from '../nvabar/Navigation';
import Slide from '../../components/herosection/imageSlide/Slide';
import { HashLink } from 'react-router-hash-link';
import { ArrowDown } from 'react-bootstrap-icons';

const Herosection = () => {
  const heroContent = (
    <>
      <Container fluid className='np nm  main__container'>
        <Navigation />

        <Container className='hero__container animate__animated animate__slideInDown'>
          <Row>
            <Col md={12}>
              <h1 className='hero__h1 '>
                <AnimatedText
                  type='chars' // animate words or chars
                  animation={{
                    x: '200px',
                    y: '-30px',
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
                  KUTEE KITTY
                </AnimatedText>
              </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ display: 'flex' }}>
            <Col sm={12} md={5} style={{ textAlign: 'center' }}>
              {/* <ImagesSlides /> */}
              <Slide />
            </Col>
            <Col sm={12} md={7}>
              <p className='here__top__des'>
                Kutee Kitty NFT (KKT) is an NFT collection offering the world a
                more beautiful and safe place to live, our main goal is to save
                the world and you can say: yes, but how?
              </p>
              <p className='here__top__des'>
                This NFT's project is only the beginning of a big project that
                will save the world from this plastic pollution. Ocean and the
                earth where we live is full of plastic, and if neglected, it can
                cause a lot of problems to the animals and also to all mankind.
              </p>
              <p className='here__top__des'>
                With the third phase of this big project we want to take the
                plastic in the ocean and in the earth to give it a new life, we
                will produce useful things from recycled plastic and many other
                project that we'll make, stay tuned!
              </p>
            </Col>
          </Row>
        </Container>
        <HashLink
          activeClass='active'
          to='#our-mission'
          spy={true}
          smooth={true}
          duration={500}
        >
          <ArrowDown className='h__arrow__down' />
        </HashLink>
      </Container>
    </>
  );

  return <div>{heroContent}</div>;
};

export default Herosection;
