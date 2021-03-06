import React from 'react';
import { ROUTE_STRINGS } from '@/routes/Routes';

import quote from '/images/quote.svg';
import cvImg from '/images/cv-pic.png';
import aJimg from '/images/aunt-jenny.jpg';
import dots from '/images/dots.svg';

export default function Header({ openPortfolioItemModal }) {
  return (
    <header className='main-header bg-gray-900 sm:pb-24 gap-y-8 md:gap-y-16 gap-x-2 md:pt-12 relative grid w-full pb-16'>
      <nav className='layout fixed inset-x-0 top-0 z-50 grid w-full bg-gray-900'>
        <div className='md:col-start-2 md:pl-0 md:py-2 grid items-center col-span-2 col-start-1 py-4 pl-4'>
          <a
            href='#top'
            className='md:text-xl flex items-center justify-center w-12 h-12 text-gray-900 bg-white rounded-full'
          >
            ns
          </a>
        </div>
        <ul className='md:grid-cols-3 sm:flex md:col-span-4 grid items-center justify-end col-span-5 mr-2 text-right'>
          {ROUTE_STRINGS.map((route, idx) => (
            <li
              key={idx}
              className='md:mr-0 hover:underline sm:text-lg md:py-4 sm:ml-6 md:ml-8 md:text-xl lg:px-0 items-center py-1 mt-1 text-sm tracking-widest text-white uppercase'
            >
              <a href={`#${route.toLowerCase()}`}>{route}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='md:col-start-2 md:row-span-3 md:pb-12 md:pt-24 col-span-6 col-start-2 row-start-2'>
        <span className='px-6 text-[13px] md:text-[20px] text-gray-50 font-medium tracking-widest uppercase border-l border-gray-50'>
          Portfolio for
        </span>
        <div className='md:mt-4 lg:mt-8 pt-2 mt-2 text-white'>
          <h1 className='hero-title'>Full Stack Development_</h1>
        </div>
      </div>
      <div className='md:col-start-7 md:row-start-4 relative col-start-2 row-start-3'>
        <img
          src={dots}
          alt='decorative dots'
          className='opacity-40 md:-translate-y-1/4 sm:-translate-y-1/2 sm:-translate-x-1/2 absolute w-24'
        />
        <div className='bg-accent flex items-center justify-center aspect-1/1 hover:text-gray-50 relative rounded-full p-1 text-gray-900'>
          <a
            href='#contact'
            className='hover:text-gray-50 flex pt-2 px-4 md:px-12 justify-center items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='md:block hidden xl:w-20 xl:h-20 xl:ml-2 w-6 h-6'
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
            <div className='md:hidden translate-x-1/4 flex items-center text-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='sm:w-16 sm:h-16 w-12 h-12'
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
            <span className='cta-circle md:block pl-4 hidden text-base lg:text-xl xl:text-2xl font-semibold'>
              Get In Touch
            </span>
          </a>
        </div>
      </div>
      <div className='md:col-start-2 md:col-end-4 md:row-span-2 aspect-1/1 md:row-start-5 md:col-span-4 md:-translate-y-1/4 sm:-translate-y-1/2 -translate-y-3/4 relative self-end col-span-3 sm:col-span-3 col-start-2 row-start-6'>
        <img
          src={dots}
          alt='decorative dots'
          className='opacity-40 bottom-24 md:-translate-y-1/4 sm:-translate-y-1/2 -translate-y-3/4 absolute left-0 -translate-x-1/2'
        />
        <img
          className='avatar-img rounded-full absolute lg:-top-40'
          src='./images/avatar.jpg'
          alt='picture of nick'
        />
      </div>
      <div className='md:col-span-3 md:row-start-5 col-span-6 col-start-2 row-start-4'>
        <div className='pl-5 pt-6 text-white text-md md:text-[20px] leading-relaxed tracking-widest uppercase border-l border-white'>
          Now Developing:
        </div>
        <p className='pt-4 pl-5 text-[15px] xl:text-xl xl:w-2/3 xl:leading-loose text-gray-200 leading-extra-loose'>
          A
          <span className='bg-accent p-1 m-2 text-gray-800 uppercase'>
            personal
          </span>
          &{' '}
          <span className='bg-accent p-1 m-2 text-gray-800'>
            <span className='text-gray-800 underline'>social</span>
          </span>{' '}
          <span>
            <em>FRACTALLY</em> structured
          </span>{' '}
          <span
            className='underline'
            style={{ textDecorationColor: '#2563EB' }}
          >
            <span className='text-gray-50'>Habit Tracking </span>application
          </span>
          , <span className='uppercase'>decentralised</span> and P2P (on
          Holochain), with{' '}
          <span className='text-gray-50 font-semibold'>React & Redux, </span> in{' '}
          <span className='text-gray-50 font-semibold'>TypesScript & Rust</span>
          <a
            className='hover:text-blue-500 flex flex-row-reverse items-center text-right border-0 mt-4'
            href='https://habfract.online'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-12'
              fill='none'
              viewBox='-24 -24 72 72'
              fill='currentColor'
              alt='demonstration of the UI'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
              />
            </svg>
            <span className='cta-btn text-xl font-bold tracking-widest uppercase'>
              UI Demo
            </span>
          </a>
          <span
            className='hover:text-blue-500 flex flex-row-reverse xl:flex-row items-center text-right border-0 cursor-pointer xl:float-left'
            onClick={() => openPortfolioItemModal('habitFractV2Synopsis')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-12'
              fill='none'
              viewBox='-24 -24 72 72'
              fill='currentColor'
              alt='project synopsis'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className='cta-btn text-xl font-bold tracking-widest uppercase'>
              Project Synopsis
            </span>
          </span>
          <a
            className='hover:text-blue-500 flex flex-row-reverse items-center text-right border-0 clear-both xl:mb-8'
            href='https://n-stebbings.medium.com/from-local-storage-to-do-list-to-fractal-peer-to-peer-habit-tracker-3be56214c6ee?source=your_stories_page----------------------------------------'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-12'
              fill='none'
              viewBox='-24 -24 72 72'
              fill='currentColor'
              alt='related medium article'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'
              />
            </svg>
            <span className='cta-btn text-xl font-bold tracking-widest uppercase'>
              Related Blog
            </span>
          </a>
          <a
            className='hover:text-blue-500 flex flex-row-reverse items-center text-right border-0 xl:float-left'
            href='https://github.com/nick-stebbings/fractal-habits-SPA-tailwind-react-redux'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-12'
              fill='none'
              viewBox='-24 -24 72 72'
              fill='currentColor'
              alt='see the code (frontend)'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
              />
            </svg>
            <span className='cta-btn text-sm font-semibold tracking-widest uppercase'>
              Frontend Repo
            </span>
          </a>
          <a
            className='hover:text-blue-500 flex flex-row-reverse items-center text-right border-0'
            href='https://github.com/nick-stebbings/hc-react-redux-shared-todo-feed/tree/red-dots'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-12'
              fill='none'
              viewBox='-24 -24 72 72'
              fill='currentColor'
              alt='see the code (backend)'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
              />
            </svg>
            <span className='cta-btn text-sm font-semibold tracking-widest uppercase'>
              Backend Repo
            </span>
          </a>
        </p>
      </div>
      <div className='xl:col-span-3 xl:col-start-3 md:col-start-2 md:row-start-auto relative col-span-4 col-start-4 row-start-3'>
        <img
          src={dots}
          alt='decorative dots'
          className='opacity-40 w-36 -bottom-12 -right-12 absolute translate-x-1/2'
        />
        <a href='https://zety.com/profile/nick-stebbings' target='_blank'>
          <div
            className='cv-img aspect-1/1 -translate-y-6 rounded-full bg-opacity-50 bg-cover'
            style={{
              backgroundImage: `url(${cvImg})`,
              backgroundColor: '#353535',
              backgroundPositionX: '-20px',
            }}
          />
        </a>
      </div>
      <div className='aspect-1/1 col-start-5 row-start-6'>
        <img src={aJimg} className='rounded-full' alt='logo for Aunt Jenny' />
      </div>
      <div className='md:col-span-2 md:col-start-6 col-span-3 row-start-6 mb-4'>
        <div className='pl-5 pt-6 text-white text-lg md:text-[20px] leading-relaxed tracking-widest uppercase border-l border-white mb-4'>
          Latest Client
        </div>
        <div className='testimonial place-items-center lg:aspect-1/1 bg-gray-50 md:mr-0 relative grid mr-4'>
          <blockquote>
            "Nick is continuing to help automate the order processing and
            responds well to feedback and requests for new features. He is a
            great problem solver and I would reccommend him..."
          </blockquote>
          <img
            src={quote}
            className='quote-mark absolute opacity-20 h-44 md:h-auto xl:h-72'
            alt='quotation mark'
          />
          <a href='#projects' target='_blank'>
            <div
              className='place-items-center text-blue-600 bg-gray-200 md:w-full md:h-12 absolute xl:bottom-0 right-0 flex justify-between h-6 px-2 hover:text-white translate-y-2 hover:bg-blue-600 cursor-pointer'
              onClick={() => openPortfolioItemModal('auntJenny')}
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

      <div className='md:col-start-6 translate-y-1/4 md:row-start-auto flex flex-col items-end justify-end hidden col-span-2 col-start-4 row-start-6'>
        <div className='pl-5 text-white text-[18px] leading-relaxed tracking-widest uppercase border-l border-white'>
          Testimonial
        </div>
        <div className='text-[13px] pl-5 text-gray-200 leading-loose pb-2'>
          Shopify App
        </div>
      </div>
      <div className='relative col-start-7'>
        <div className='aj-ref absolute bottom-0 right-0 leading-loose text-right text-[13px] text-gray-200 hidden md:hidden'>
          <a href='https://www.auntjenny.com.au/' target='_blank'>
            Aunt Jenny Ltd.
          </a>
        </div>
      </div>
    </header>
  );
}
