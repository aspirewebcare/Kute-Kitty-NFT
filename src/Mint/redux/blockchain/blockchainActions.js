// constants
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnect from '@walletconnect/web3-provider';
import { isMobile } from 'react-device-detect';
import Web3 from 'web3';
import Web3EthContract from 'web3-eth-contract';
import Web3Modal from 'web3modal';
import {
  getContractNft,
  nftAbi,
  nftAddress,
  requiredChainId,
  requiredChainIdName,
  requiredChainIdNum,
} from '../../libs/smart-contract';
// log
import { fetchData } from '../data/dataActions';

const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  };
};

const connectSuccess = payload => {
  return {
    type: 'CONNECTION_SUCCESS',
    payload: payload,
  };
};

const connectFailed = payload => {
  return {
    type: 'CONNECTION_FAILED',
    payload: payload,
  };
};

const updateAccountRequest = payload => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: payload,
  };
};

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

export const getWeb3Object = async () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://mainnet.infura.io/v3/b9586c09de9e4760b222edb9f1f04b20'
    )
  );
  return web3;
  //const web3Modal = await getWeb3Modal();
  //const provider = await web3Modal.connect();

  //await provider.enable();
  // const web3 = initWeb3(provider);

  // return web3;
  //await provider.enable();
};

const getWeb3Modal = async () => {
  const coinBase = isMobile
    ? {}
    : {
        coinbasewallet: {
          package: CoinbaseWalletSDK,
          options: {
            appName: 'walletconnect',
            infuraId: '5901345316dc4c3eaa66ac2c45f8a25f',
          },
        },
      };
  const providerOptions = {
    ...coinBase,
    walletconnect: {
      // display: {
      //   logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      //   name: "Mobile",
      //   description: "Scan qrcode with your mobile wallet",
      // },
      package: WalletConnect,
      options: {
        infuraId: '5901345316dc4c3eaa66ac2c45f8a25f', // required
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: requiredChainIdName, // optional
    cacheProvider: false, // optional
    providerOptions, // required
  });

  return web3Modal;
};

export const connect = () => {
  return async dispatch => {
    dispatch(connectRequest());

    const web3Modal = await getWeb3Modal();
    const provider = await web3Modal.connect();

    await provider.enable();

    if (!provider) {
      dispatch(connectFailed('Something went wrong.'));
    }

    // if (Web3.givenProvider == null) {
    //   dispatch(
    //     connectFailed(
    //       "Provider is null. Do you have a crypto wallet installed?"
    //     )
    //   );
    //   return;
    // }

    //const web3 = new Web3(Web3.givenProvider);
    const web3 = initWeb3(provider);
    const chainId = web3.currentProvider.chainId;

    if (chainId != requiredChainId) {
      dispatch(
        connectFailed(
          'Wallet is not connected to ' + requiredChainIdName + ' network'
        )
      );
      return;
    }

    const SmartContractObj = new web3.eth.Contract(nftAbi, nftAddress);
    const nft = getContractNft(web3);

    const ethereum = window.ethereum || provider;

    try {
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const networkId = await web3.eth.net.getId();
      const accountId = address; //"0xA01575aa8B036A6A9F7cdB9a197a2AfaC7B31890"; //accounts[0]; //0xA01575aa8B036A6A9F7cdB9a197a2AfaC7B31890;

      let transactions = [];
      let ownerTokens = 0;

      try {
        ownerTokens = await nft.methods.balanceOf(accountId).call();
        await SmartContractObj.getPastEvents(
          'Transfer',
          {
            fromBlock: 0,
            toBlock: 'latest',
            filter: { to: accountId },
          },
          (error, events) => {
            if (!error) {
              console.log('events', events);
              events.forEach(event => {
                const t = {
                  txnHash: event.transactionHash,
                  tokenId: event.returnValues.tokenId,
                  to: event.returnValues.to,
                  id: event.id,
                };

                transactions.push(t);
              });
              // for (var i = 0; i < events.length; i++) {
              //   transactions.push(events[i]);
              //   console.log(
              //     events[i].returnValues,
              //     events[i].returnValues.tokenId
              //   );
              // }
            }
          }
        );
      } catch (error) {}

      dispatch(
        connectSuccess({
          account: accountId,
          smartContract: SmartContractObj,
          web3: web3,
          connector: provider,
          type: provider.wc ? 'wc' : 'metamask',
          ownerTokens: ownerTokens,
          transactions: transactions,
        })
      );

      try {
        // Add listeners start
        ethereum.on('accountsChanged', accounts => {
          dispatch(updateAccount(accountId));
        });
        ethereum.on('chainChanged', () => {
          window.location.reload();
        });
      } catch (e) {}
    } catch (e) {
      dispatch(connectFailed('Something went wrong.' + e));
    }

    try {
    } catch (err) {
      dispatch(connectFailed('Something went wrong.' + err));
    }
  };
};

export const reSyncAccount = blockchain => {
  return async dispatch => {
    let transactions = [];
    await blockchain.smartContract.getPastEvents(
      'Transfer',
      {
        fromBlock: 0,
        toBlock: 'latest',
        filter: { to: blockchain.account },
      },
      (error, events) => {
        if (!error) {
          console.log('events', events);
          events.forEach(event => {
            const t = {
              txnHash: event.transactionHash,
              tokenId: event.returnValues.tokenId,
              to: event.returnValues.to,
              id: event.id,
            };

            transactions.push(t);
          });
          // for (var i = 0; i < events.length; i++) {
          //   transactions.push(events[i]);
          //   console.log(
          //     events[i].returnValues,
          //     events[i].returnValues.tokenId
          //   );
          // }
        }
      }
    );

    dispatch(connectSuccess({ ...blockchain, transactions }));
  };
};

const getTokenData = async (nft, trans) => {
  const tokenURI = await nft.methods.tokenURI(trans.tokenId).call();
  const tokenAPI = await fetch(tokenURI);
  const tokenData = await tokenAPI.json();
  return { ...tokenData, tokenURI };
};

export const connectOld = () => {
  return async dispatch => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log('accounts', accounts);
        const networkId = await ethereum.request({
          method: 'net_version',
        });
        // const NetworkData = await SmartContract.networks[networkId];

        if (networkId == requiredChainIdNum) {
          const SmartContractObj = new Web3EthContract(nftAbi, nftAddress);
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on('accountsChanged', accounts => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on('chainChanged', () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          if (requiredChainIdNum == '1') {
            dispatch(connectFailed('Change network to rinkeby.'));
          } else {
            dispatch(connectFailed('Change network to Ethereum.'));
          }
        }
      } catch (err) {
        dispatch(connectFailed('Something went wrong.'));
      }
    } else {
      dispatch(connectFailed('Install Metamask.'));
    }
  };
};

export const updateAccount = account => {
  return async dispatch => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};

export const disconnect = () => {
  return async dispatch => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      dispatch(updateAccount(null));
    }
  };
};
