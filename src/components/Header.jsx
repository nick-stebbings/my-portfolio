import React from 'react';
import { ROUTE_STRINGS } from '@/routes/Routes';

import cvImg from '/images/cv-pic.png';
import aJimg from '/images/aunt-jenny.jpg';
import dots from '/images/dots.svg';
import { toggleModal } from '@/helpers/modal';

export default function Header() {
  return (
    <header className='layout main-header sm:pb-24 gap-y-8 md:gap-y-16 gap-x-2 md:pt-12 relative grid w-full pb-16'>
      <nav className='layout fixed top-0 z-50 grid w-full mx-auto bg-gray-900'>
        <div className='md:col-start-2 md:pl-0 md:py-2 grid items-center col-span-2 col-start-1 py-4 pl-4'>
          <a
            href='#top'
            className='md:text-xl flex items-center justify-center w-12 h-12 text-gray-900 bg-white rounded-full'
          >
            ns
          </a>
        </div>
        <ul className='md:grid-cols-3 sm:flex sm:justify-end sm:gap-6 grid col-span-4 text-right'>
          {ROUTE_STRINGS.map((route, idx) => (
            <li
              key={idx}
              className='md:mr-0 hover:underline sm:text-lg md:py-4 md:text-xl lg:px-4 items-center py-1 mt-1 text-sm tracking-widest text-white uppercase'
            >
              <a href={`#${route.toLowerCase()}`}>{route}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='md:col-span-5 md:col-start-2 md:row-span-3 md:pb-12 md:pt-24 col-span-6 col-start-2 row-start-2'>
        <span className='px-5 text-[13px] md:text-[20px] text-gray-50 font-medium tracking-widest uppercase border-l border-gray-50'>
          Portfolio for
        </span>
        <div className='mt-2 pt-2 md:-mt-4 text-[60px] text-white'>
          <h1 className='hero-title sm:text-[70px] leading-relaxed md:text-[80px] xl:text-[100px]'>
            Full Stack Delopment_
          </h1>
        </div>
      </div>
      <div className='md:col-start-7 md:row-start-4 relative col-start-2 row-start-3'>
        <img
          src={dots}
          alt='decorative dots'
          className='absolute top-0 right-0 w-24 translate-x-1/2 translate-y-1/2'
        />
        <div className='bg-accent aspect-1/1 hover:text-gray-50 relative flex flex-col justify-between p-2 text-gray-900'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='md:block hidden w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 5l7 7-7 7M5 5l7 7-7 7'
            />
          </svg>
          <a href='#contact'>
            <div className='md:hidden hover:text-blue-500 grid items-center pb-2 pl-1 text-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='sm:w-12 sm:h-12 w-16 h-16'
                fill='none'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='#353535'
                strokeWidth='1px'
                strokeOpacity='0.5'
                alt='contact me'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
            </div>
            <span className='md:block cta-btn hidden text-xl font-semibold uppercase'>
              Drop Me a Line
            </span>
          </a>
        </div>
      </div>
      <div className='md:col-start-2 md:col-end-4 md:row-span-2 aspect-1/1 md:row-start-5 md:col-span-4 md:-translate-y-1/4 sm:-translate-y-1/2 -translate-y-3/4 relative self-end col-span-2 col-start-2 row-start-6'>
        <img
          src={dots}
          alt='decorative dots'
          className='bottom-24 absolute left-0 -translate-x-1/2 translate-y-1/2'
        />
        <img
          className='relative rounded-full'
          src='./images/avatar.jpg'
          alt='picture of nick'
        />
      </div>
      <div className='md:col-span-2 md:row-start-5 col-span-6 col-start-2 row-start-4'>
        <div className='pl-5 pt-6 text-white text-sm md:text-[18px] leading-relaxed tracking-widest uppercase border-l border-white'>
          Now Developing:
        </div>
        <p className='pt-4 pl-5 text-[15px] text-gray-200 leading-extra-loose text-justify'>
          A <span className='uppercase'>decentralised</span> and P2P,{' '}
          <span className='bg-accent p-1 m-2 text-gray-800'>
            <span className='text-gray-800 underline'>social</span>
          </span>{' '}
          &{' '}
          <span className='bg-accent p-1 m-2 text-gray-800 uppercase'>
            personal
          </span>
          <span>
            <em>fractally</em> structured
          </span>{' '}
          <span className='text-gray-50'>Habit Tracking </span>application with{' '}
          <span className='text-gray-50'>React & Redux</span> in{' '}
          <span className='text-gray-50'>TypesScript & Rust</span>.
        </p>
      </div>
      <div className='md:col-span-4 md:col-start-2 md:row-start-auto relative col-span-4 col-start-4 row-start-3'>
        <img
          src={dots}
          alt='decorative dots'
          className='w-36 -bottom-4 absolute right-0 translate-x-1/2'
        />
        <div
          className='aspect-1/1 -translate-y-6 bg-opacity-50 bg-cover'
          style={{
            backgroundImage: `url(${cvImg})`,
            backgroundColor: '#353535',
          }}
        />
      </div>
      <div className='aspect-1/1 col-start-5 row-start-6'>
        <img src={aJimg} alt='logo for Aunt Jenny' />
      </div>
      <div className='md:col-span-2 md:col-start-6 col-span-4 row-start-6 mb-4'>
        <div className='place-items-center xl:aspect-2/1 aspect-1/1 bg-gray-light md:mr-0 relative grid mr-4'>
          <a href='#projects' target='_blank'>
            <div
              className='place-items-center hover:text-blue-600 hover:bg-gray-200 md:w-full md:h-12 absolute bottom-0 right-0 flex justify-between h-6 px-2 text-white translate-y-2 bg-blue-600 cursor-pointer'
              onClick={() => toggleModal()}
            >
              <span className='md:block hidden'>Summary</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 5l7 7-7 7M5 5l7 7-7 7'
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div className='md:col-start-6 translate-y-1/4 md:row-start-auto flex flex-col items-end justify-end col-span-2 col-start-4 row-start-6'>
        <div className='pl-5 text-white text-[18px] leading-relaxed tracking-widest uppercase border-l border-white'>
          Testimonial
        </div>
        <div className='text-[13px] pl-5 text-gray-200 leading-loose pb-2'>
          Shopify App
        </div>
      </div>
      <div className='relative col-start-7'>
        <div className='aj-ref absolute bottom-0 right-0 leading-loose text-right text-[13px] text-gray-200 hidden md:block'>
          <a href='https://www.auntjenny.com.au/' target='_blank'>
            Aunt Jenny Ltd.
          </a>
        </div>
      </div>
    </header>
  );
}
