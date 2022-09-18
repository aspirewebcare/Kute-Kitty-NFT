import keccak256 from 'keccak256';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  InputGroup,
  Row,
} from 'react-bootstrap';
import ETH from '../assets/images/eth.png';
import { isMobile, isSafari } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { toChecksumAddress } from 'web3-utils';
import DappImg from '../assets/images/gif/dapp-img.gif';
// import { isMobile } from "web3modal";
import MintThankYouContents from '../components/mint/MintThankYouContents';
import Card from '../components/UI/Card';
import { getMerkleTree, _doThis } from './libs/api';
import { getContractNft } from './libs/smart-contract';
import './mint.css';
import './mint2.css';
import {
  connect,
  disconnect,
  reSyncAccount,
} from './redux/blockchain/blockchainActions';
import { fetchData } from './redux/data/dataActions';

export const MintDapp2 = () => {
  const endDate = new Date('2022-05-19T14:00:00.000Z');
  const [nowDate, setNowDate] = useState(new Date());
  const minttimer = useRef(null);
  useEffect(() => {
    minttimer.current = setInterval(() => setNowDate(new Date()), 1000);
    return () => {
      clearInterval(minttimer.current);
    };
  });

  const days = parseInt((endDate - nowDate) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(endDate - nowDate) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt(
    (Math.abs(endDate.getTime() - nowDate.getTime()) / (1000 * 60)) % 60
  );
  const seconds = parseInt(
    (Math.abs(endDate.getTime() - nowDate.getTime()) / 1000) % 60
  );

  const dispatch = useDispatch();
  const preSaleStartTime = new Date('2022-05-19T14:00:00.000Z').getTime();
  const saleStartTime = new Date('2022-05-20T14:00:00.000Z').getTime();
  const todayTime = new Date().getTime();

  const [preSaleActive, setPreSaleActive] = useState(
    todayTime >= preSaleStartTime && todayTime < saleStartTime
  );
  const [saleActive, saleSaleActive] = useState(todayTime >= saleStartTime);
  const [nftPrice, setNftPrice] = useState(0.3);
  const [maxNfts, setMaxNfts] = useState(7);
  const [totalSupply, setTotalSupply] = useState(10000);

  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);

  const [isCollectionHolder, setIsCollectionHolder] = useState(false);

  const [feedback, setFeedback] = useState('');
  const [isMinted, setIsMinted] = useState(false);
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintingNft, setMintingNft] = useState(1);
  const [loading, setLoading] = useState(false);
  const [remainingToken, setRemaining] = useState(0);
  const [isWhiteListed, setIsWhiteListed] = useState(true);

  const web3 = !!blockchain.web3 ? blockchain.web3 : null;
  const [accountId, setAccountId] = useState(null);

  useEffect(() => {
    if (!!blockchain.account) {
      setAccountId(blockchain.account);
    }
  }, [blockchain]);

  const _remainToken = async () => {
    if (accountId && web3) {
      try {
        const token = getContractNft(web3);
        const tokenMinted = await token.methods.totalSupply().call();
        return setRemaining(tokenMinted);
      } catch (e) {}
    }
    // return _doThis(async (account, web3) => {

    // }, false);
  };

  const mintNfts = async () => {
    //const web3 = new Web3(Web3.givenProvider);
    const web3 = blockchain.web3;
    const account = blockchain.account;
    if (!mintingNft || isNaN(mintingNft)) {
      alert('Enter some nft quantity to buy');
      return;
    }

    //setFeedback("Minting ...");
    setClaimingNft(true);

    const nft = getContractNft(web3);

    try {
      // Mainnet

      const price = web3.utils.fromWei(
        await (saleActive
          ? nft.methods.costPerNft().call()
          : nft.methods.itemPricePresale().call())
      );

      const _howMany = Number(mintingNft);
      const totalPrice = web3.utils.toWei(
        (Number(price) * _howMany).toString()
      );

      const leaf = keccak256(toChecksumAddress(account));
      const proof = getMerkleTree().getHexProof(leaf);

      console.log('totalPrice', totalPrice);
      //Mainnet
      //const purchase = nft.methods.purchasePresaleTokens(mintingNft, proof);
      const purchase = saleActive
        ? nft.methods.purchaseTokens(mintingNft)
        : nft.methods.purchaseTokensPresale(mintingNft, proof);

      //This is for rinkeby
      // const purchase = nft.methods.mint(mintingNft);

      // Gas for rinkeby and mainnet
      let options = {
        from: account,
        gas: '0',
        value: totalPrice,
      };

      const estimateGas = Math.trunc(await purchase.estimateGas(options));

      try {
        options = {
          ...options,
          gas: '' + estimateGas,
        };
      } catch (e) {
        parseErrorMessage(e);
        setClaimingNft(false);
        return;
      }

      try {
        setLoading(true);
        await purchase.send(options).on('confirmation', i => {
          setFeedback(
            'Congratulations! Mint successful. Go visit Opensea.io to view it.'
          );
          setClaimingNft(false);
          dispatch(reSyncAccount(blockchain));
          setIsMinted(true);
          syncCollectionHolder();
          dispatch(fetchData(blockchain.account));
        });
      } catch (e) {
        setLoading(false);

        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      }
    } catch (e) {
      parseErrorMessage(e);
      console.log('errorMsg', e.message.toString());

      setClaimingNft(false);
    }

    //_doThis(async (account, web3) => {}, true);
  };

  const parseErrorMessage = e => {
    let msg = null;
    let errorMsg = e.message.toString();
    console.log('errorMsg', errorMsg);

    try {
      let a = e.message;
      msg = JSON.parse(
        a.substring(a.indexOf('{'), a.lastIndexOf('}') + 1)
      ).message;
      msg = msg.replace('err: ', '');
      msg = msg.replace('execution reverted: ', '');
    } catch (eiii) {}

    console.log('errorMsg', errorMsg);
    if (errorMsg.indexOf('Presale is not active') > -1) {
      msg = 'contract is paused';
    } else if (errorMsg.indexOf('You are not in presale') > -1) {
      msg = 'you are not whitelisted';
    }

    if (!msg || msg === undefined) {
      msg = 'Insufficient funds';
    }

    setFeedback('Sorry, ' + msg);
  };

  const getData = () => {
    if (!!blockchain.account && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      _remainToken();

      setInterval(() => {
        _remainToken();
      }, 3000);
    }
  };

  useEffect(() => {
    getData();
    getContractCores();
    _remainToken();
  }, [blockchain.account]);

  const syncCollectionHolder = async () => {
    console.log('accountId', accountId);
    if (accountId && web3) {
      const nft = getContractNft(web3);
      const ownerTokens = await nft.methods
        .balanceOf(blockchain.account)
        .call();

      setIsCollectionHolder(ownerTokens.length > 0);
    }
    // if (!!blockchain.account) {
    //   _doThis(async (account, web3) => {
    //   });
    // }
  };

  useEffect(() => {
    syncCollectionHolder();
  }, [accountId]);

  const getContractCores = async () => {
    if (accountId && web3) {
    }
    _doThis(async (account, web3) => {
      try {
        const nft = getContractNft(web3);

        let priceMethod = nft.methods.itemPricePresale();
        let maxMintAmountMethod = nft.methods.presaleMaxMint();
        let maxSupplyMethod = nft.methods.maxSupply();
        const token = getContractNft(web3);
        const tokenMinted = await token.methods.totalSupply().call();

        if (saleActive) {
          priceMethod = nft.methods.costPerNft();
          maxMintAmountMethod = nft.methods.maxMintAmount();
        } else if (preSaleActive) {
        }

        const price = web3.utils.fromWei(await priceMethod.call());
        const maxMintAmount = await maxMintAmountMethod.call();
        const maxSupply = await maxSupplyMethod.call();

        setNftPrice(price);
        setMaxNfts(maxMintAmount);
        setTotalSupply(maxSupply);
        setRemaining(tokenMinted);
      } catch (e) {}
    }, false);
  };

  const onChangeNft = useCallback(
    value => {
      value = parseInt(value);
      value = isNaN(value) ? 1 : value;
      if (value > maxNfts) {
        setMintingNft(maxNfts);
      } else if (value < 2) {
        setMintingNft(1);
      } else {
        setMintingNft(value);
      }
    },
    [maxNfts]
  );

  return (
    <React.Fragment>
      <Container fluid className='minttimer__section'>
        <Container className='inner__container'>
          <Row>
            <Col sx={12} md={5} className='time__section__column'>
              <p className='minttimer__p'> </p>
              {/* -------------------------------------- NEW Section ADDED ----------------------------*/}

              <>
                <div className='mint-box-container'>
                  <div className='mint-box-header'>
                    <h1 className='mint__heading2'>
                      Reitio Capsule Access Key
                    </h1>
                    <h1 className='mint__heading2'>
                      {remainingToken}/{totalSupply} Minted
                    </h1>
                  </div>

                  <div className='mint-box2'>
                    <div className='mint-btn-container d-flex flex-column '>
                      <div className='mint-box d-flex flex-column justify-content-center'>
                        <div className='mint__new__section'>
                          <span className='mint__count__section'>
                            {/* <FormGroup>
                              <InputGroup className='mb-3 mint-input-group'>
                                <InputGroup.Text
                                  className='input-group-prepend'
                                  onClick={() =>
                                    setMintingNft(mintingNft =>
                                      mintingNft > 2 ? mintingNft - 1 : 1
                                    )
                                  }
                                >
                                  -
                                </InputGroup.Text>
                                <FormControl
                                  className='text-center'
                                  value={mintingNft}
                                  aria-label=''
                                  onChange={e => onChangeNft(e.target.value)}
                                />
                                <InputGroup.Text
                                  className='input-group-append'
                                  onClick={() =>
                                    setMintingNft(mintingNft =>
                                      mintingNft >= maxNfts
                                        ? maxNfts
                                        : mintingNft + 1
                                    )
                                  }
                                >
                                  +
                                </InputGroup.Text>
                              </InputGroup>
                            </FormGroup> */}
                            <Button className='mint__btn'>Mint</Button>
                            <Button className='mint__btn'>
                              Whitelist Now{' '}
                            </Button>
                          </span>
                        </div>
                        <p className='mint__p2'>Max 2 NFTs per wallet</p>
                        <p className='mint__p2'>Price: 0.1 ETH per NFT</p>
                        <p className='mint__p2'>
                          Mint is live on 30 / 09 / 2022{' '}
                        </p>
                      </div>
                      <div className='error-box'>
                        {blockchain.errorMsg !== '' && (
                          <p>{blockchain.errorMsg}</p>
                        )}
                        <br />
                        {feedback !== '' && <p>{feedback}</p>}
                        <br />
                        {!isWhiteListed && `You are not whitelisted`}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mint-box d-flex align-items-center flex-column justify-content-center'>
                  <div
                    className={isSafari ? 'safari__issue' : 'other__browser'}
                    style={{ marginTop: '20px' }}
                  >
                    {isSafari
                      ? 'SAFARI is not supported at this time, please use a different browser'
                      : ''}
                  </div>
                  <div
                    className='d-flex flex-column align-items-center'
                    style={{ marginTop: 10 }}
                  >
                    {(!isSafari || (isSafari && isMobile)) && (
                      <>
                        {!blockchain.account && (
                          <Button
                            className='mint__btn'
                            onClick={e => {
                              e.preventDefault();
                              dispatch(connect());
                              getData();
                            }}
                          >
                            {' '}
                            Connect Wallet{' '}
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                  {/* <div className='error-box mt-3'>
                    {blockchain.errorMsg !== '' && (
                      <p className='minttimer__p'>{blockchain.errorMsg}</p>
                    )}
                    {feedback !== '' && (
                      <p className='minttimer__p'>{feedback}</p>
                    )}
                    {!isWhiteListed && `You are not whitelisted`}
                  </div> */}
                  <p className='verified__contract'></p>
                </div>
              </>
            </Col>
            <Col sx={12} md={4}>
              {/* <img
                src={DappImg}
                alt='falconmint'
                width='80%'
                className='mint__image'
              /> */}
            </Col>{' '}
            <Col sx={12} md={3}>
              <Card>
                <img
                  src={DappImg}
                  alt='falconmint'
                  width='80%'
                  className='mint__image'
                />
                <p className='card__heading'>Ratieo Capsule Access Key</p>
                <div className='card__details'>
                  <img src={ETH} alt='eth' width={28} />
                  <span className='eth__price'>0.1</span>
                  <span className='eth__mint__count'>
                    {remainingToken}/{totalSupply}
                  </span>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};
