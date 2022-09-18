import React from 'react';
import AnimatedText from 'react-animated-text-content';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDown } from 'react-bootstrap-icons';
import AgencyImg from '../../assets/images/agency-img.jpg';
import { HashLink } from 'react-router-hash-link';
import './agency.css';

const Agency = () => {
  return (
    <Container fluid className='agencyContainer'>
      <Row>
        <Col>
          <h1 className='agency__h1 '>
            <AnimatedText
              type='words' // animate words or chars
              animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType='bounce'
              interval={0.06}
              duration={1}
              tag='p'
              className='animated-paragraph'
              includeWhiteSpaces
              threshold={0.1}
              rootMargin='20%'
            >
              OCEAN VOYAGES INSTITUTE SETS SAIL FOR GREAT PACIFIC GARBAGE PATCH
              AMID CLIMATE EMERGENCY
            </AnimatedText>
          </h1>
          <p className='agency__p1'>
            The project of this agency is completely in line with ours and we
            are grateful to be able to offer our support, until we too with our
            project will begin, with your help, we will collect plastic in the
            Oceans
          </p>
          <div style={{ margin: '25px 0px' }}>
            <button className='btn__agency'>
              <a
                className='ag__btn'
                href='https://www.oceanvoyagesinstitute.org/'
                target='_self'
              >
                VISIT WEBSITE
              </a>
            </button>
          </div>
        </Col>
      </Row>
      <AnimationOnScroll animateIn='animate__slideInUp'>
        <Row>
          <Col>
            <img
              src={AgencyImg}
              alt='agency group '
              width='100%'
              className='agency__img'
            />
          </Col>
        </Row>
      </AnimationOnScroll>
      <div style={{ textAlign: 'center' }}>
        <HashLink
          activeClass='active'
          to='#utilities'
          smooth={true}
          duration={500}
        >
          <ArrowDown className='c__arrow__down' />
        </HashLink>
      </div>
    </Container>
  );
};

export default Agency;
