import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';
import './mission.css';
import { ArrowDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Mission = () => {
  const missionContent = (
    <>
      <Container fluid className='missionContainer '>
        <Container className='mission-inner-container'>
          <Row>
            <Col>
              <h1 className='mission__h1 '>
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
                  OUR MISSION
                </AnimatedText>
              </h1>
              <p className='mission__p1'>
                Our collection features 10,000 NFTs that combine over 100+
                different traits to create a unique and desirable Kutee kitty.
                Each attribute rarity is displayed in your NFTs metadata,
                showing how many NFTs feature that specific attribute. Holding a
                kutee kitty is the right way to give your contribute to save the
                world, obviously is only the first step into a change that we'll
                be so big and all the mankind will benefit from this!
              </p>
            </Col>
          </Row>
        </Container>
        <HashLink
          activeClass='active'
          to='#gallery'
          spy={true}
          smooth={true}
          duration={500}
        >
          <ArrowDown className='m__arrow__down' />
        </HashLink>
      </Container>
    </>
  );

  return <div>{missionContent}</div>;
};

export default Mission;
