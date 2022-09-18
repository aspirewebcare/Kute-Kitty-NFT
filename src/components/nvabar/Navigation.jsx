import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
// import Logo from '../../assets/images/logo.svg';
import './navbar.css';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../Mint/redux/blockchain/blockchainActions';
import blockchainReducer from '../../Mint/redux/blockchain/blockchainReducer';
import { NavBar2 } from './NavBar2';

const links = [
  'OUR MISSION',
  'GALLERY',
  'ROADMAP',
  'UTILITIES',
  'OUR TEAM',
  'FAQs',
];

export const Navigation = props => {
  const blockchain = useSelector(state => state.blockchain);
  const dispatch = useDispatch();

  return (
    <>
      <Container className='menu__main' fluid>
        <Row className='nav__row'>
          <Col sm={4}>
            <NavBar2 />
          </Col>
          <Col sm={4}>
            {!blockchain.account ? (
              <button
                className='nav__connectWallet '
                onClick={e => {
                  e.preventDefault();
                  dispatch(connect());
                }}
              >
                Connect Wallet
              </button>
            ) : (
              <button className='nav__menuMint'>
                <HashLink spy={true} smooth={true} to='/mint'>
                  Mint
                </HashLink>
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
