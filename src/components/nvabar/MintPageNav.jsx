import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg';
import { transition2d, backgroundTransition } from 'react-hover-css';
import './navbar.css';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import {
  connect,
  disconnect,
} from '../../Mint/redux/blockchain/blockchainActions';
import blockchainReducer from '../../Mint/redux/blockchain/blockchainReducer';

const MintPageNav = props => {
  const blockchain = useSelector(state => state.blockchain);
  const dispatch = useDispatch();
  const [accountId, setAccountId] = useState(null);

  useEffect(() => {
    if (!!blockchain.account) {
      setAccountId(blockchain.account);
    }
    console.log('Account ID', setAccountId);
  }, [blockchain]);

  return (
    <>
      <Container fluid className='nav__container'>
        <Container className='menu__main'>
          <Row className='nav__row'>
            <Col>
              <HashLink to='/'>
                <button className='back__nav__connectWallet'>
                  Back To Website
                </button>
              </HashLink>
            </Col>
            <Col>{/* <img src={Logo} alt={Logo} width='180px' /> */}</Col>
            <Col>
              {!blockchain.account ? (
                <button
                  className='mint__nav__connectWallet'
                  onClick={e => {
                    e.preventDefault();
                    dispatch(connect());
                  }}
                >
                  Connect Wallet
                </button>
              ) : (
                <button
                  className='disconnect__nav__connectWallet'
                  onClick={e => {
                    e.preventDefault();
                    dispatch(disconnect());
                  }}
                >
                  Disconnect
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MintPageNav;
