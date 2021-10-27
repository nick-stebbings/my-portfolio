import React, { useState, useRef } from 'react';
import { ROUTE_STRINGS } from '@/routes/Routes';

import dotsSvg from '/images/dots.svg?import&component';
import Modal from '@/components/Modal';

export default function Home() {
  const [currentModalContent, setCurrentModalContent] = useState('Hi');
  const modalRef = useRef();

  function toggleModal() {
    modalRef.current.classList.toggle('opacity-0');
    modalRef.current.classList.toggle('pointer-events-none');
    document.classList.toggle('modal-active');
  }

  const openPortfolioItemModal = (itemNumber) => {
    setCurrentModalContent(String(itemNumber));
    toggleModal();
  };

  return (
    <>
      <Modal
        onClose={toggleModal}
        modalRef={modalRef}
        children={currentModalContent}
      ></Modal>
      <main className='w-full min-h-screen font-sans bg-gray-900'>
        <header className='main-header md:pb-24 gap-y-4 gap-x-2 grid w-full'>
          <div className='md:col-start-2 place-items-center col-span-2 col-start-2 py-10'>
            <a
              href='#'
              className='md:text-xl flex items-center justify-center w-12 h-12 text-gray-900 bg-white rounded-full'
            >
              C
            </a>
          </div>
          <ul className='md:grid-cols-4 md:col-span-4 md:col-start-4 grid items-center col-span-4 col-start-4 text-center'>
            {ROUTE_STRINGS.map((route, idx) => (
              <li
                key={idx}
                className='sm:text-lg md:py-4 py-2 text-xl tracking-widest text-white uppercase'
              >
                {route}
              </li>
            ))}
          </ul>
          <div className='md:col-span-5 md:col-start-2 md:row-span-3 md:py-24 col-span-6 col-start-2 row-start-2'>
            <span className='pl-5 text-[13px] text-white/50 font-medium tracking-widest uppercase border-l border-white/50'>
              Featured Class
            </span>
            <div className='mt-3 md:text-[110px] text-[55px] text-white font-medium leading-none'>
              The role of <br />
              User Interface Designer
            </div>
          </div>
          <div className='md:col-start-7 md:row-start-4 relative col-start-2 row-start-4'>
            <dotsSvg className='absolute top-0 right-0 w-24 translate-x-1/2 -translate-y-1/2' />
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
              <span className='text-2xl font-semibold'>Join The Class</span>
            </div>
          </div>
          <div className='md:col-start-2 md:col-end-4 md:row-span-2 aspect-1/1 md:row-start-5 relative self-end col-span-4 col-start-4 row-start-3'>
            <dotsSvg className='bottom-24 absolute left-0 -translate-x-1/2' />
            <img className='relative' src='./images/avatar.jpg' alt='' />
          </div>
          <div className='md:col-span-2 md:col-start-5 md:row-start-5 col-span-6 col-start-2 row-start-4'>
            <div className='pl-5 text-white text-[15px] leading-relaxed tracking-widest uppercase border-l border-white'>
              About
            </div>
            <p className='pt-2 pl-5 text-[13px] text-white/50 leading-extra-loose'>
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
            </p>
          </div>
          <div className='col-start-8'>
            <div className='bg-[#353535] aspect-1/1' />
          </div>
          <div className='aspect-1/1 col-start-5'>
            <img src='./images/avatar.jpg' alt='' />
          </div>
          <div className='md:col-span-2 md:col-start-6 col-span-4 col-start-4 row-start-6'>
            <div className='bg-[#353535] grid place-items-center aspect-2/1 relative'>
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
            <div className='text-[13px] text-white/50 leading-loose'>
              Tom Hope
            </div>
          </div>
          <div className='col-start-7'>
            <div className='pt-5 leading-loose text-right text-[13px] text-white/50'>
              20:45
            </div>
          </div>
          <div className='col-start-4'>
            <div className='aspect-1/1 relative'>
              <img src='./images/avatar.jpg' alt='' />
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
              Watch Trailer
            </div>
            <div className='text-[13px] text-white/50 leading-loose'>2 min</div>
          </div>
        </header>
        <section className='bg-gray-50 md:py-24 main-content py-12'>
          <div className='portfolio grid w-3/4 h-full grid-cols-5 gap-5 mx-auto'>
            <div
              className='portfolio-item square'
              onClick={() => openPortfolioItemModal(1)}
            >
              1
            </div>
            <div
              className='portfolio-item large-square'
              onClick={() => openPortfolioItemModal(2)}
            >
              2
            </div>
            <div
              className='portfolio-item square'
              onClick={() => openPortfolioItemModal(3)}
            >
              3
            </div>
            <div
              className='portfolio-item small-square'
              onClick={() => openPortfolioItemModal(4)}
            >
              4
            </div>
            <div
              className='portfolio-item tall'
              onClick={() => openPortfolioItemModal(5)}
            >
              5
            </div>
            <div
              className='portfolio-item wide'
              onClick={() => openPortfolioItemModal(6)}
            >
              6
            </div>
          </div>
        </section>
        <footer className='flex flex-col items-center w-full'>
          <header className='contact-info flex flex-col items-center justify-between w-3/4'>
            <div className='md:col-start-2 place-items-center py-10'>
              <a
                href='#'
                className='md:text-xl flex items-center justify-center w-12 h-12 text-gray-900 bg-white rounded-full'
              >
                C
              </a>
            </div>
            <div className='icons h-14 flex'>
              <div className='text-accent flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-24 h-24'
                  fill='none'
                  viewBox='0 0 72 72'
                  fill='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                  />
                </svg>
              </div>
              <div className='text-accent flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-24 h-24'
                  fill='none'
                  viewBox='0 0 72 72'
                  fill='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                  />
                </svg>
              </div>
              <div className='text-accent flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-24 h-24'
                  fill='none'
                  viewBox='0 0 72 72'
                  fill='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'
                  />
                </svg>
              </div>
            </div>
          </header>
          <main className='md:grid-rows-1 md:grid-cols-4 grid-cols-1 grid-rows-4 bg-[#353535]'>
            <h2 className='sm:text-lg text-gray-50 pb-4 text-xl tracking-widest'>
              Legal
            </h2>
            <ul>
              <li>General Terms & Conditions</li>
              <li>Data Processing Agreement</li>
              <li>Privacy Statement</li>
            </ul>
            <h2 className='sm:text-lg text-gray-50 pb-4 text-xl tracking-widest'>
              Contact
            </h2>
            <ul>
              <li className='flex'>
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
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='flex'>
                  Rorikstraat 159 Wijk bij <br />
                  Duurstede The Netherlands
                </span>
              </li>
              <li className='flex'>
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
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
                <span className='flex'>support@company.com</span>
              </li>
            </ul>
            <h2 className='sm:text-lg text-gray-50 pb-4 text-xl tracking-widest'>
              Latest Articles
            </h2>
            <ul>
              <li className='flex'>
                <div className='w-6 h-6 p-2 bg-white'></div>
                <div className='font-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </div>
              </li>
              <li className='flex'>
                <div className='w-6 h-6 p-2 bg-white'></div>
                <div className='font-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </div>
              </li>
            </ul>
          </main>
          <footer className='bg-flex flex-col justify-center w-full bg-gray-900'>
            <div className='text-gray-50 w-full py-2 text-center'>
              ©2021 Ebb Stings' Web Things. All rights reserved.
            </div>
          </footer>
        </footer>
      </main>
    </>
  );
}
