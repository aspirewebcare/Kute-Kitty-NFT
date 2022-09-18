import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { MintDapp } from '../../Mint/MintDapp';
import Herosection from '../herosection/Herosection';
import { Navigation } from '../nvabar/Navigation';
import MintPageNav from '../nvabar/MintPageNav';
// import ScrollToTop from "../../pages/scrolltoTop";
// import { Faqs } from "../faqs/Faqs";
// import { Getintouch } from "../getintouch/Getintouch";
// import { Navigation } from "../nvabar/Navigation";
// import Hero from "./../../assets/images/top-falcons-hero.png";
// import { MintLinks } from './MintLinks';
import './mintpage.css';
import { MintDapp2 } from '../../Mint/MintDapp2';

export const MintPage = () => {
  return (
    <React.Fragment>
      {/* <ScrollToTop /> */}
      <Container fluid className='mint__main__container'>
        {/* <Container maxwidth="xl" height="100%">
          <Row>
            <Col sx={12} md={6}>
              <h1 className="hero__h1">Mint</h1>
              <h3 className="utility__h3__main"> Be part of the lifestyle</h3>
            </Col>
            <Col sx={12} md={6}>
              <div className="utility__hero__right">
                <img src={Hero} width="80%" alt="Angry Falcon Hero" />
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container> */}
        <MintPageNav />
        <MintDapp />
        <Footer />
      </Container>
      {/* PAGE DATA STARTS HERE */}
      {/* <MintLinks /> */}
      {/* <Faqs /> */}
    </React.Fragment>
  );
};
