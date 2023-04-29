import React from 'react';
import {
  RiTrophyFill,
  RiFlashlightFill,
  RiGroupFill,
  RiCoinsFill,
} from 'react-icons/ri';

const Features = () => {
  return (
    <section className='flex flex-col text-white mt-20 mb-20 text-center'>
      <h2 className='mb-5'>
        Headline about the program or platform and advantages
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
        <div className='p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center'>
          <RiTrophyFill size={100} />
          <div className='text-3xl'>Feature 1</div>
          <div className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className='p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center'>
          <RiCoinsFill size={100} />
          <div className='text-3xl'>Feature 2</div>
          <div className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className='p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center'>
          <RiFlashlightFill size={100} />
          <div className='text-3xl '>Feature 3</div>
          <div className='mt-4 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className='p-6 border-4 border-transparent rounded-lg hover:border-secondary hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center'>
          <RiGroupFill size={100} />
          <div className='text-3xl '>Feature 4</div>
          <div className='mt-4 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
