import React from 'react';

export default function Footer() {
  return (
    <footer
      id='contact'
      className='flex flex-col items-center justify-end w-full'
    >
      <header className='contact-info flex flex-col items-center justify-between w-3/4'>
        <div className='icons h-14 flex'>
          <div className='text-accent flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-24 h-24'
              fill='none'
              viewBox='-24 -24 72 72'
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
              viewBox='-24 -24 72 72'
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
              viewBox='-24 -24 72 72'
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
      <main className='md:grid-rows-1 md:grid-cols-4 grid-cols-1 grid-rows-4 bg-[#353535] w-full px-4 md:px-16'>
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
  );
}
