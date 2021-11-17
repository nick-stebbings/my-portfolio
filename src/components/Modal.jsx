import React from 'react';

import ProjectCard from './ProjectCard';

export default function Modal({ onClose, modalRef, cardData }) {
  const {
    title,
    img,
    img2,
    mainText,
    subText,
    gitLink,
    langs,
    libs,
    skills,
    blogLink,
    demoLink,
  } = cardData;
  return (
    <div
      ref={modalRef}
      className='modal fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none'
    >
      <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

      <div className='modal-container md:w-11/12 w-full mx-auto overflow-y-auto bg-white rounded shadow-lg'>
        <div className='modal-close absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer'>
          <svg
            className='text-white fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
        </div>

        <div className='modal-content xl:text-center px-6 py-4 text-left'>
          <div className='flex items-center justify-between pb-3'>
            <p className='md:text-2xl sm:text-center sm:w-auto relative w-5/6 text-lg font-bold text-right'>
              {title}
              {title.includes('Holochain') && (
                <div className='-right-6 absolute top-0'>
                  <a
                    href={'https://holo.host/faq/what-is-holochain/'}
                    className='hover:text-blue-600'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              )}
            </p>
            <div className='modal-close z-50 cursor-pointer'>
              <svg
                className='text-black fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
              </svg>
            </div>
          </div>

          <ProjectCard
            title={title}
            img={img}
            img2={img2}
            mainText={mainText}
            subText={subText}
            gitLink={gitLink}
            blogLink={blogLink}
            demoLink={demoLink}
            langs={langs}
            libs={libs}
            skills={skills}
          />
        </div>
      </div>
    </div>
  );
}
