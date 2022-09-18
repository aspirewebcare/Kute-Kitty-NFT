import React from 'react';
import Discord from '../../assets/images/discord.svg';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/insta.svg';
import './Social.css';

const Social = () => {
  return (
    <div className='m2__container'>
      <div className='m2__social__box '>
        <a
          href='https://discord.gg/gvr37ZfhJp'
          className='btn-discord'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Discord} alt='discord' width={32} />
        </a>
      </div>
      <div className='m2__social__box '>
        <a
          href='https://twitter.com/KuteeKitty_nft?s=09'
          className='btn-twitter'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Twitter} alt='twitter' width={32} />
        </a>
      </div>
      <div className='m2__social__box '>
        <a
          href='https://www.instagram.com/Kutee.Kitty_nft'
          className='btn-insta'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Instagram} alt='instagram' width={32} />
        </a>
      </div>
    </div>
  );
};

export default Social;
