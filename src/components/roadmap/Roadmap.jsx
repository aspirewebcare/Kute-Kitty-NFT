import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Reveal from 'react-reveal/Reveal';
import Aos from 'aos';
import bg1 from '../../assets/images/roadmap_bg1.webp'
import bg2 from '../../assets/images/roadmap_bg2.jpg'

import 'aos/dist/aos.css';
import Agency from './Agency';

import './roadmap.css';
import AnimatedText from 'react-animated-text-content';

const RoadmapH1 = React.memo(() => {
  return (
    <h1 className='roadmap__h1 '>
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
        ROADMAP
      </AnimatedText>
    </h1>
  )
})

const Roadmap = () => {
  const roadmapContainerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scale, setScale] = useState(window.innerWidth)
  const [opacity, setOpacity] = useState(1);
  const [ paddingTop, setPaddingTop ] = useState(50)
  useEffect(() => {
    Aos.init({ offset: 200, duration: 2000, delay: 200 });
  }, []);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > 3115 && currentPosition < 3950) {
        const scaleChange = (currentPosition - 3115) * 2.2;
        const reverse = (3115 - currentPosition) * 1.7;
        if (scrollPosition < currentPosition) {
          setScale(() => window.innerWidth + scaleChange)
          setPaddingTop(() => Math.floor((currentPosition - 3115)/2))
          if(currentPosition > 3150 && opacity >= 0.15) {
            setOpacity(() => 1 + (1/(currentPosition-3950)))
          }
        } else if (scrollPosition > currentPosition) {
          setPaddingTop(() => Math.floor((currentPosition - 3115)/2))
          if(scale > window.innerWidth + 30) {
            setScale(() => window.innerWidth - reverse)
          }
          if(opacity < 1) {
            setOpacity(() => 1 - (1/(3950-currentPosition)))
          }
        }
      }
      if(currentPosition >= 3950) {
        if(opacity < 1) {
          setOpacity(() => 1 + (1/(3949 - currentPosition)))
        }
      }
      if(currentPosition < 3115) {
        if(scale !== window.innerWidth) {
          setScale(window.innerWidth)
        }
      }
      setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
      // roadmapContainerRef.current.style = `paddingTop: ${paddingTop}px !important`;
    }
    console.log(paddingTop,'top==')

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scale]);

  const roadmapContent = (
    <>
      <div 
        className='roadmapContainer' 
        style={{
          backgroundSize: `${scale}px`,
          backgroundImage: window.pageYOffset < 3950 && window.pageYOffset > 3900 ? `url(${bg1}),url(${bg2})` : window.pageYOffset >= 3950 ? `url(${bg2})` : '',
          backgroundBlendMode: 'darken',
          opacity: opacity
        }}
      >
        {window.pageYOffset >= 3950 && <div style={{paddingTop: `${780}px`}}/>}
        <div style={window.pageYOffset > 3115 && window.pageYOffset < 3950 ? { position: 'fixed', top: '50px', width: '100%' } : {}}>
          <React.StrictMode>
            <RoadmapH1 />
          </React.StrictMode>
        </div>
        
        {scrollPosition > 3950 && (<Reveal effect="fadeInLeft" duration={1300}>
        <Row className='text__center'>
          <Col md={6}>
            <div className='roadmap_board'>
              <span className='roadmap__h3'> PHASE 1</span>
            </div>
            <div className='roadmap__ph1'>
              <span className='roadmap__bullet'>
                {' '}
                Minting of the collection in our website, fair prize of 0.03Eth
              </span>
              <span className='roadmap__bullet'>
                {' '}
                Launch of the project on opensea{' '}
              </span>
              <span className='roadmap__bullet'>
                {' '}
                Launch of our kitten puppets
              </span>
              <span className='roadmap__bullet'>
                {' '}
                Launch of our ecological t-shirt, composed only by recycled{' '}
              </span>
            </div>
          </Col>
        </Row>
        </Reveal>)}
        
        {scrollPosition > 4000 && (<Reveal effect="fadeInRight" duration={1300}>
        <Row className='text__center'>
          <Col md={6}>
            <div className='roadmap_board'>
              <span className='roadmap__h3'> PHASE 2</span>
            </div>
            <div className='roadmap__ph1'>
              <span className='roadmap__bullet'>
                Launch of a 3D cats collection you can use these NFT's in the
                metaverse and you will have your virtual cat friend!
              </span>
              <span className='roadmap__bullet'>
                Other information will appear at the end of the first phase stay
                tuned!
              </span>
              <span className='roadmap__bullet'>
                In this phase we will do some collaboration with big metaverse
                project
              </span>
            </div>
          </Col>
        </Row>
        </Reveal>)}
        
        {scrollPosition > 4050 && (<Reveal effect="fadeInLeft" duration={1300}>
        <Row className='text__center'>
          <Col md={6}>
            <div className='roadmap_board'>
              <span className='roadmap__h3'> PHASE 3</span>
            </div>
            <div className='roadmap__ph1'>
              <span className='roadmap__bullet'>
                Now our mission can start! We will start to travel all around
                the world to show you ( YouTube channel) all the natural beauty
                of our planet, and in each travel we'll plant a lot of trees and
                many other good things for the environment.
              </span>
              <span className='roadmap__bullet'>
                Moreover, with our utilities you can do travels all around the
                world by yourself, obviously all the travel will be paid by us!
                We want to show you the beauty of this world! Thanks to your
                support we will start to take plastic all over the world We will
                give all the plastic a new life with project that you will
                discover in a future not too far Remember that all together we
                can save our planet, but your help is the key of this project
                'THE BEAUTY WILL SAVE THE WORLD'
              </span>
            </div>
          </Col>
        </Row>
        </Reveal>)}
      </div>
    </>
  );

  return <div>{roadmapContent}</div>;
};

export default Roadmap;
