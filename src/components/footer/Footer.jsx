import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Discord from '../../assets/images/discord.svg';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/insta.svg';

import './footer.css';

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className='footer__container'>
        <Container>
          <Row className='footer__row '>
            <Col xs={12} md={6} className=' footer__credits'>
              Copyright © 2022 Kutee Kitty Nft.
            </Col>

            <Col xs={12} md={6} className=' footer__credits2'>
              <h2
                className='footer__follow'
                style={{ paddingRight: '20px', paddingTop: '20px' }}
              >
                {' '}
                Follow Us :{' '}
              </h2>
              <div className='social__box '>
                <a
                  href='https://discord.gg/gvr37ZfhJp'
                  className='btn-discord'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={Discord} alt='discord' width={32} />
                </a>
              </div>
              <div className='social__box '>
                <a
                  href='https://twitter.com/KuteeKitty_nft?s=09'
                  className='btn-twitter'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={Twitter} alt='twitter' width={32} />
                </a>
              </div>
              <div className='social__box '>
                <a
                  href='https://www.instagram.com/Kutee.Kitty_nft'
                  className='btn-insta'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={Instagram} alt='instagram' width={32} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
