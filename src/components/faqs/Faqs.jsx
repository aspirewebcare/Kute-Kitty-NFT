import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';

import Cat from '../../assets/images/cute-cat.svg';

import './faqs.css';

const Faqs = () => {
  return (
    <div>
      <Container fluid className='faq__container__main nm np'>
        <Container className='faq__container'>
          <h1 className='faq__h1'> FAQs</h1>
          <Row className='faq__row'>
            <Col sx={12} md={8}>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header className='faq-head'>
                    {' '}
                    why should you buy a Kutee kitty?{' '}
                  </Accordion.Header>
                  <Accordion.Body>Speech attachment. </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>when is our mint?</Accordion.Header>
                  <Accordion.Body>
                    Our mint date is still to be announced.{' '}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>where is mint happening?</Accordion.Header>
                  <Accordion.Body>Here on our website.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>what is our mint price?</Accordion.Header>
                  <Accordion.Body>
                    0.03 ETH for whitelisted 0.05 for public
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <img src={Cat} alt='catimage' className='faq__catl' />
          <img src={Cat} alt='catimage' className='faq__catr' />
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Faqs;
