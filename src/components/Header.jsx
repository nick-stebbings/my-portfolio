import React from 'react';
import { ROUTE_STRINGS } from '@/routes/Routes';

import cvImg from '/images/cv-pic.png';
import pyramidSvg from '/images/habit-pyramid.png';
import dots from '/images/dots.svg';

export default function Header() {
  return (
    <header className='main-header md:pb-24 gap-y-4 gap-x-2 grid w-full'>
      <nav className='fixed top-0 left-0 z-50 grid w-full bg-gray-900'>
        <div className='md:col-start-2 place-items-center md:pl-0 md:py-2 col-span-2 col-start-1 pt-4 pl-4'>
          <a
            href='#top'
            className='md:text-xl flex items-center justify-center w-12 h-12 text-gray-900 bg-white rounded-full'
          >
            ns
          </a>
        </div>
        <ul className='md:grid-cols-3 flex items-center justify-end col-span-4 col-start-4 gap-6 text-right'>
          {ROUTE_STRINGS.map((route, idx) => (
            <li
              key={idx}
              className='md:mr-0 md:mt-0 hover:underline sm:text-lg md:py-4 py-2 mt-2 mr-4 text-xl tracking-widest text-white uppercase'
            >
              <a href={`#${route.toLowerCase()}`}>{route}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='md:col-span-5 md:col-start-2 md:row-span-3 md:py-24 col-span-6 col-start-2 row-start-2'>
        <span className='pl-5 text-[13px] text-white/50 font-medium tracking-widest uppercase border-l border-white/50'>
          Portfolio for
        </span>
        <div className='mt-3 text-[55px] text-white'>
          <h1 className='sm:text-[50px] md:text-[100px]'>
            Full-Stack Development
          </h1>
        </div>
      </div>
      <div className='md:col-start-7 md:row-start-4 relative col-start-2 row-start-3'>
        <img
          src={dots}
          alt='decorative dots'
          className='absolute top-0 right-0 w-24 translate-x-1/2 -translate-y-1/2'
        />
        <div className='px-7 bg-accent aspect-1/1 relative flex flex-col justify-between py-8 text-gray-900'>
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
          <a href='#contact'>
            <span className='text-2xl font-semibold'>Drop Me a Line</span>
          </a>
        </div>
      </div>
      <div className='md:col-start-2 md:col-end-4 md:row-span-2 aspect-1/1 md:row-start-5 md:row-start-3 relative self-end col-span-4 col-start-4 row-start-6'>
        <img
          src={dots}
          alt='decorative dots'
          className='bottom-24 absolute left-0 -translate-x-1/2'
        />
        <img className='relative' src='./images/avatar.jpg' alt='' />
      </div>
      <div className='md:col-span-2 md:col-start-6 md:row-start-5 col-span-6 col-start-2 row-start-4'>
        <div className='pl-5 text-white text-[18px] leading-relaxed tracking-widest uppercase border-l border-white'>
          Now Developing:
        </div>
        <p className='pt-2 pl-5 text-[13px] text-white/50 leading-extra-loose'>
          A <span className='uppercase'>decentralised</span> and P2P,{' '}
          <span className='bg-accent p-1 m-2 text-gray-800 uppercase'>
            <span className='underline'>social</span>
          </span>{' '}
          &{' '}
          <span className='bg-accent p-1 m-2 text-gray-800 uppercase'>
            personal
          </span>
          <span className='underline'>
            <em>fractally</em> structured
          </span>{' '}
          <span className='text-gray-50'>Habit Tracking </span>application with{' '}
          <span className='text-gray-50'>React & Redux</span> in{' '}
          <span className='text-gray-50'>TypesScript & Rust</span>.
        </p>
      </div>
      <div className='md:col-span-4 md:col-start-2 md:row-start-auto col-span-4 col-start-4 row-start-3'>
        <div
          className='aspect-1/1 bg-opacity-50 bg-cover'
          style={{
            backgroundImage: `url(${cvImg})`,
            backgroundColor: '#353535',
          }}
        />
      </div>
      <div className='aspect-1/1 col-start-5'>
        <img src='./images/avatar.jpg' alt='' />
      </div>
      <div className='md:col-span-2 md:col-start-6 col-span-4 col-start-4 row-start-6'>
        <div className='bg-[#080707] grid place-items-center aspect-2/1 relative'>
          <div className='place-items-center absolute bottom-0 right-0 grid w-12 h-12 text-white bg-blue-600 cursor-pointer'>
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
        </div>
      </div>
      <div className='md:col-start-2 col-span-3 col-start-4'>
        <div className='pt-3 text-xl font-normal leading-loose text-white'>
          Karen William
        </div>
        <div className='text-[13px] text-white/50 leading-loose'>
          Senior Designer
        </div>
      </div>
      <div className='col-start-6'>
        <div className='pt-3 text-xl font-normal leading-loose text-white'>
          Testimonial
        </div>
        <div className='text-[13px] text-white/50 leading-loose'>Tom Hope</div>
      </div>
      <div className='col-start-7'>
        <div className='pt-5 leading-loose text-right text-[13px] text-white/50'>
          20:45
        </div>
      </div>
      <div className='col-start-4'>
        <div className='aspect-1/1 relative'>
          <img src={pyramidSvg} alt='' />
          <div className='place-items-center hover:bg-blue-600 hover:text-white absolute bottom-0 right-0 grid w-12 h-12 text-gray-900 transition-colors bg-white cursor-pointer'>
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
        </div>
      </div>
      <div className='col-start-5'>
        <div className='pt-3 text-xl font-normal leading-loose text-white'>
          Read Summary
        </div>
        <div className='text-[13px] text-white/50 leading-loose'>2 min</div>
      </div>
    </header>
  );
}
