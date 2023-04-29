import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import bg from '../public/images/bg-gradient.png';
import hero from '../public/images/hero.png';
import join from '../public/images/join.png';

import arrow from '../public/images/arrow.png';

import React, { useRef, useState } from 'react';

import Games from '../components/Games';
import Features from '../components/Features';
import Product from '../components/Product';
import Faq from '../components/Faq';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='flex h-full w-full flex-col px-6 bg-black'>
      <Head>
        <title>GamePayy</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image src={bg} alt='background' className='absolute -z-1' fill />
      <Header />
      <div className='text-white h-screen flex flex-col items-start sm:items-center md:flex-row-reverse md:justify-around z-10'>
        <Image src={hero} alt='hero' className='sm:w-[300px] md:w-[500px]' />

        <div className='flex flex-col items-start space-y-6 md:w-1/2'>
          <h1 className='leading-none text-[32px] md:text-[48px]'>
            Social Matchmaking Platform for Competitive Gamers
          </h1>
          <div className='flex justify-center items-start'>
            <Image src={arrow} alt='arrow' width={48} />
            <p className='md:text-[20px]'>
              Experience the thrill of competition and earn rewards on our new
              gaming platform
            </p>
          </div>
          <button
            className='btn-primary'
            onClick={() => openInNewTab('https://gamepayy.com')}
          >
            Become an early adopter
          </button>
        </div>
      </div>

      <Games />

      <Features />

      <Product />

      <Faq />

      {/* <CTA /> */}

      <Image
        src={join}
        alt='join'
        className='cursor-pointer'
        onClick={() => openInNewTab('https://gamepayy.com')}
      />

      <Footer />
    </div>
  );
};

export default Home;
