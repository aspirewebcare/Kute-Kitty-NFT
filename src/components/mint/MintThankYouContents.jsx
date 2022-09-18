import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DappImg from '../../assets/images/gif/dapp-img.gif';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { getContractNft } from '../../Mint/libs/smart-contract';

const MintThankYouContents = props => {
  const blockchain = useSelector(state => state.blockchain);
  const [price, setPrice] = useState(props.price || 0.44);
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    if (!!blockchain.account) {
      const nft = getContractNft(blockchain.web3);
      const trans = blockchain.transactions[blockchain.transactions.length - 1];
      setTransaction(trans);

      setTxnUrl(nft, trans);
    }
  }, [blockchain]);

  const setTxnUrl = async (nft, trans) => {
    const tokenURI = await nft.methods.tokenURI(trans.tokenId).call();
    const tokenAPI = await fetch(tokenURI);
    const tokenData = await tokenAPI.json();

    setTransaction({ ...trans, ...tokenData, tokenURI });
  };

  return (
    <React.Fragment>
      <Container fluid className='minttimer__section'>
        <Container className='ty__inner__container'>
          <Row>
            <Col sx={12} md={6} className='ty__column1'>
              <img src={DappImg} alt='buddy boo' className='ty__mint__image' />
            </Col>

            <Col sx={12} md={6} className='ty__column2'>
              <h1 className='minttimer__h1' style={{ margin: '30px 0px' }}>
                {' '}
                Minted {!!transaction && <>#{transaction.tokenId}</>}
              </h1>
              {/* <p className='minttimer__p'>     Vitae non ullamcorper eget pretium congue. Odio in cursus amet. Integer sed enim facilisis netus est sit blandit potenti. Justo, pharetra volutpat pulvinar malesuada. Luctus odio ut ipsum aenean vestibulum morbi vitae non ullamcorper eget. </p> */}

              <Row style={{ margin: '35px 0px' }}>
                <p className='ty__minttimer__p1'>
                  {' '}
                  Price: <span className='price__eth'> {price} ETH </span>
                </p>
              
              </Row>

              {!!transaction && (
                <a
                  href={`https://etherscan.io/tx/${transaction.txnHash}`}
                  target={'_blank'}
                  rel='noreferrer'
                >
                  <Button className='mint__btn'> View Transaction </Button>
                </a>
              )}
              {!transaction && (
                <HashLink to='/mint '>
                  <Button className='mint__btn__transaction'>
                    {' '}
                    View Transaction{' '}
                  </Button>
                </HashLink>
              )}

              <a
                href='https://opensea.io/collection/buddyboo'
                target={'_blank'}
                rel='noreferrer'
              >
                <Button className='mint__btn__collection'>
                  {' '}
                  View Collection{' '}
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default MintThankYouContents;
