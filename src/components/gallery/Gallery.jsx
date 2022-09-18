import React from 'react';
import AnimatedText from 'react-animated-text-content';
import { Button, Col, Container, Row } from 'react-bootstrap';

import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import './gallery.css';

const Gallery = () => {
  const galleryContent = (
    <>
      <Container fluid className='gal__container '>
        <Container>
          <Row>
            <Col>
              <h1 className='gal__h1 '>
                <AnimatedText
                  type='chars' // animate words or chars
                  animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                  }}
                  animationType='float'
                  interval={0.09}
                  duration={1}
                  tag='p'
                  className='animated-paragraph'
                  includeWhiteSpaces
                  threshold={0.9}
                  rootMargin='20%'
                >
                  GALLERY
                </AnimatedText>
              </h1>
            </Col>
          </Row>
        </Container>
        <SimpleSlider />
        <button className='gal__btn__opensea'>CHECK ON OPENSEA</button>
      </Container>
    </>
  );

  return <div>{galleryContent}</div>;
};

export default Gallery;
