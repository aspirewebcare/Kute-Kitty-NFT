import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { Navigation } from '../nvabar/Navigation';
// import ScrollToTop from '../../pages/scrolltoTop';
import MintThankYouContents from './MintThankYouContents';

export const MintThankYou = () => {
  return (
    <React.Fragment>
      {/* <ScrollToTop /> */}
      <Container fluid className='utility__section'>
        <Navigation />
        <Container maxwidth='xl' height='100%'>
          <Row>
            <Col sx={12} md={12}>
              <div className='utility__hero__right'>
                {/* <img src={Logo} width='50%' alt='Angry Falcon Hero' /> */}
              </div>
            </Col>
          </Row>
          <MintThankYouContents />
        </Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
};
