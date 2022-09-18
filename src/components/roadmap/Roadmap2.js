import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './roadmap.css';
import AnimatedText from 'react-animated-text-content';

const Roadmap2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  const roadmapContent = (
    <>
      <div className='roadmapContainer'>
        <h1 className='roadmap__h1 '>ROADMAP</h1>

        <div
          style={{
            transform: `${
              scrollPosition > 3400
                ? `translate(0%, 100%)`
                : `translate(0%, 0%)`
            }`,

            transition: 'all 0.5s ease-in',
            opacity: `${
              scrollPosition < 3000 || scrollPosition > 3500 ? 0 : 1
            }`,
          }}
        >
          <div className='text__center'>
            <Col md={6}>
              <div className='roadmap_board'>
                <span className='roadmap__h3'> PHASE 1</span>
              </div>
              <div className='roadmap__ph1'>
                <span className='roadmap__bullet'>
                  {' '}
                  Minting of the collection in our website, fair prize of
                  0.03Eth
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
          </div>
        </div>
        <div
          style={{
            transform: `${
              scrollPosition > 4000
                ? `translate(0%, 100%)`
                : `translate(0%, 0%)`
            }`,

            transition: 'all 0.5s ease-in',
            opacity: `${
              scrollPosition < 3500 || scrollPosition > 4000 ? 0 : 1
            }`,
          }}
        >
          <div className='text__center'>
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
                  Other information will appear at the end of the first phase
                  stay tuned!
                </span>
                <span className='roadmap__bullet'>
                  In this phase we will do some collaboration with big metaverse
                  project
                </span>
              </div>
            </Col>
          </div>
        </div>
        <div
          style={{
            transform: `${
              scrollPosition > 4600
                ? `translate(0%, 100%)`
                : `translate(0%, 0%)`
            }`,

            transition: 'all 0.5s ease-in',
            opacity: `${
              scrollPosition < 3900 || scrollPosition > 4600 ? 0 : 1
            }`,
          }}
        >
          <div className='text__center'>
            <Col md={6}>
              <div className='roadmap_board'>
                <span className='roadmap__h3'> PHASE 3</span>
              </div>
              <div className='roadmap__ph1'>
                <span className='roadmap__bullet'>
                  Now our mission can start! We will start to travel all around
                  the world to show you ( YouTube channel) all the natural
                  beauty of our planet, and in each travel we'll plant a lot of
                  trees and many other good things for the environment.
                </span>
                <span className='roadmap__bullet'>
                  Moreover, with our utilities you can do travels all around the
                  world by yourself, obviously all the travel will be paid by
                  us! We want to show you the beauty of this world! Thanks to
                  your support we will start to take plastic all over the world
                  We will give all the plastic a new life with project that you
                  will discover in a future not too far Remember that all
                  together we can save our planet, but your help is the key of
                  this project 'THE BEAUTY WILL SAVE THE WORLD'
                </span>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );

  return <div>{roadmapContent}</div>;
};

export default Roadmap2;
