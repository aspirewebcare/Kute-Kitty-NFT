import React from 'react';
import AnimatedText from 'react-animated-text-content';
import { Col, Container, Row } from 'react-bootstrap';
import Gobbo from '../../assets/images/team/01.png';
import Fabio from '../../assets/images/team/02.png';
import Bosco from '../../assets/images/team/03.png';
import Miracle from '../../assets/images/team/04.png';
import Desmond from '../../assets/images/team/05.png';
import Deborah from '../../assets/images/team/06.png';
import DEMO from '../../assets/images/placeholder.png';

import './team.css';

const Team = () => {
  const teamContent = (
    <>
      <Container fluid className='np nm team__main__container'>
        <Container className='team__container'>
          <Row>
            <Col>
              <h1 className='team__h1 animate__animated animate__bounce animate__faster'>
                <AnimatedText
                  type='words' // animate words or chars
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
                  OUR TEAM
                </AnimatedText>
              </h1>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <div className='team__box'>
                <img src={Gobbo} alt='' width={200} className='team__col' />
                <p className='team__box__p1'> Cristian Del Gobbo </p>
                <p className='team__box__p2'> Founder </p>
              </div>
            </Col>
            <Col md={3}>
              <div className='team__box'>
                <img src={Fabio} alt='' className='team__col' />
                <p className='team__box__p1'> Fabio Spina </p>
                <p className='team__box__p2'> Founder </p>
              </div>
            </Col>
            <Col md={3}>
              <div className='team__box'>
                <img src={Bosco} alt='' className='team__col' />
                <p className='team__box__p1'> Max Bosco Gael </p>
                <p className='team__box__p2'> Co Founder </p>
              </div>
            </Col>

            <Col md={3}>
              <div className='team__box'>
                <img src={DEMO} alt='' className='team__col' />
                <p className='team__box__p1'> Muhammad Delawar </p>
                <p className='team__box__p2'> Developer</p>
              </div>
            </Col>
            <Col md={3}>
              <div className='team__box'>
                <img src={DEMO} alt='' className='team__col' />
                <p className='team__box__p1'> Sameed Afzal </p>
                <p className='team__box__p2'> Web & Blockchain Dev </p>
              </div>
            </Col>
            <Col md={3}>
              <div className='team__box'>
                <img src={Miracle} alt='' className='team__col' />
                <p className='team__box__p1'> Pahrizr Hendrik </p>
                <p className='team__box__p2'> Social Media Manager </p>
              </div>
            </Col>
            <Col md={3}>
              <div className='team__box'>
                <img src={Desmond} alt='' className='team__col' />
                <p className='team__box__p1'> Joseph Aromeh</p>
                <p className='team__box__p2'> Social Media Manager </p>
              </div>
            </Col>
            <Col md={3}>
              <div className='team__box'>
                <img src={Deborah} alt='' className='team__col' />
                <p className='team__box__p1'> Fish Mandla Deborah </p>
                <p className='team__box__p2'> Twitter Manager </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );

  return <div>{teamContent}</div>;
};

export default Team;
