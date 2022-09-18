import React, { useRef, useState } from 'react';
import {
  CloseButton,
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Discord } from './../../assets/images/discord.svg';
import { ReactComponent as Instagram } from './../../assets/images/insta.svg';
import PDF from '../../assets/pdfs/Whitepaper-KittyNFT.pdf';
// import Logo from "./../../assets/images/Logo.png";
import { Button } from 'react-bootstrap';
import { ReactComponent as Twitter } from './../../assets/images/twitter.svg';
import './navbar2.css';

import { Link } from 'react-scroll';
import Social from './Social';

export const NavBar2 = () => {
  const offCanvasRef = useRef();
  const offsetValue = -56;

  const closeOffCanvas = () => offCanvasRef.current.backdrop.click();

  return (
    <>
      <Container>
        <Navbar expand={false}>
          {/* <Navbar.Brand href='#'>Navbar Offcanvas</Navbar.Brand> */}
          <Navbar.Toggle aria-controls=' nav__menuBtn'>
            <button className='nav__menuBtn'>Menu</button>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            ref={offCanvasRef}
            aria-labelledby='offcanvasNavbarLabel'
            placement='start'
          >
            <Offcanvas.Header>
              <CloseButton className='btn-close' onClick={closeOffCanvas} />
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                <h2 className='side__h2'> Kutee Kitty NFT</h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3 offcanvas--menu side-link'>
                <Link
                  activeClass='active'
                  to='our-mission'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Our Mission
                </Link>
                <Link
                  activeClass='active'
                  to='gallery'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Gallery
                </Link>
                <Link
                  activeClass='active'
                  to='roadmap'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Roadmap
                </Link>
                <Link
                  activeClass='active'
                  to='utilities'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Utilities
                </Link>
                <Link
                  activeClass='active'
                  to='contest'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Contest
                </Link>
                <Link
                  activeClass='active'
                  to='our-team'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Our Team
                </Link>
                <Link
                  activeClass='active'
                  to='faq'
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                >
                  Faqs
                </Link>
                <HashLink
                  activeClass='active'
                  to={PDF}
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className='p-3 border-bottom border-dark text-decoration-none'
                  onClick={closeOffCanvas}
                  target='_blank'
                >
                  Whitepaper
                </HashLink>
              </Nav>
              <Social />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </>
  );
};
