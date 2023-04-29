import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import bg from '../public/images/bg-gradient.png';
import hero from '../public/images/hero.png';
import join from '../public/images/join.png';

import React, { useRef, useState } from 'react';

import Games from '../components/Games';
import Features from '../components/Features';
import Product from '../components/Product';
import Faq from '../components/Faq';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

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

      <Hero />

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
