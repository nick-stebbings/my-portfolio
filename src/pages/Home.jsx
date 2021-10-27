import React, { useState, useRef } from 'react';
import PROJECT_INFO from '@/routes/projectData';
const SKILLS = {
  langs: {
    JavaScript: 4,
    TypeScript: 3,
    Ruby: 4,
    Rust: 2,
    SQL: 5,
    GraphQL: 4,
    HTML5: 5,
    CSS3: 4,
  },
  apps: {
    'VSCode IDE': 4,
    'Chrome DevTools': 4,
    'Linux Command Line': 3,
    Photoshop: 3,
    Figma: 3,
  },
  general: {
    'UX/UI Design': 4,
    'Figma to Code': 5,
    Planning: 3,
    Debugging: 5,
    Networking: 4,
    'Learning Pace': 4,
    Teamwork: 4,
  },
};
const skillStars = (skillsObj) => (
  <p className='p-5'>
    <ul className='list-item mt-2 text-sm text-center'>
      {Object.entries(skillsObj).map(([lang, stars], idx) => {
        return (
          <li
            key={idx}
            className='flex flex-no-wrap items-center justify-between w-full text-semibold text[#353535]'
          >
            <div className='text-gray-900'>{lang}</div>
            <div className='h-12'>
              <div className='flex'>
                {[...new Array(stars)].map((num, idx) => fullStar(idx))}
                {[...new Array(5 - stars)].map((num, idx) => emptyStar(idx))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </p>
);

import SmoothScroll from 'smooth-scroll';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fullStar = (idx) => (
  <div key={idx} className='text-blue-500'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </svg>
  </div>
);
const emptyStar = (idx) => (
  <div key={idx} className='text-gray-400'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
      />
    </svg>
  </div>
);
export default function Home() {
  const [currentModalContent, setCurrentModalContent] = useState({
    title: '1',
    mainText: '',
    subText: '',
    img: '',
    img2: '',
    gitLink: '',
    demoLink: '',
    langs: '',
    libs: '',
    skills: [],
  });
  const [firstChecked, setFirstChecked] = useState(true);
  const modalRef = useRef();
  const scroll = new SmoothScroll('a[href*="#"', {
    speed: 900,
    offset: 20,
    clip: true,
  });

  function toggleModal() {
    modalRef.current.classList.toggle('opacity-0');
    modalRef.current.classList.toggle('pointer-events-none');
    document.body.classList.toggle('modal-active');
  }

  const openPortfolioItemModal = (itemRef) => {
    setCurrentModalContent(PROJECT_INFO[itemRef]);
    toggleModal();
  };

  return (
    <>
      <Modal
        onClose={toggleModal}
        modalRef={modalRef}
        cardData={currentModalContent}
      />
      <main id='top' className='w-full min-h-screen font-sans bg-gray-900'>
        <Header />
        <section
          id='projects'
          className='bg-gray-50 md:pt-16 md:pb-24 main-content-projects py-12'
        >
          <div className='portfolio md:px-16 grid w-full h-full grid-cols-5 gap-6 px-4'>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV2'].img})`,
              }}
              className='portfolio-item square'
              onClick={() => openPortfolioItemModal('habitFractV2')}
            >
              <span className='project-tag'>HabitFract</span>
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV3'].img2})`,
              }}
              className='portfolio-item large-square'
              onClick={() => openPortfolioItemModal('habitFractV3')}
            >
              <span className='project-tag'>p2p HabitFract</span>
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV2api'].img})`,
              }}
              className='portfolio-item square'
              onClick={() => openPortfolioItemModal('habitFractV2api')}
            >
              <span className='project-tag'>Web API</span>
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV1'].img})`,
              }}
              className='portfolio-item small-square'
              onClick={() => openPortfolioItemModal('habitFractV1')}
            >
              <span className='project-tag'>Habit Triangles</span>
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['instagramClone'].img})`,
              }}
              className='portfolio-item tall'
              onClick={() => openPortfolioItemModal('instagramClone')}
            >
              <span className='project-tag'>Insta Clone</span>
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['auntJenny'].img})`,
              }}
              className='portfolio-item wide'
              onClick={() => openPortfolioItemModal('auntJenny')}
            >
              <span className='project-tag'>Shopify</span>
            </div>
          </div>
        </section>
        <section
          id='skills'
          className='main-content-skills flex flex-col items-center justify-around pt-12 bg-gray-200'
        >
          <h2 className='tracking-wider text-gray-900'>Skills Overview</h2>
          <div className='md:w-3/4 md:p-8 grid w-full h-full p-4 mx-auto'>
            <div className='shadow-md'>
              <div className='tab w-full overflow-hidden border-t'>
                <input
                  className=' absolute opacity-0'
                  id='tab-multi-one'
                  type='checkbox'
                  name='tabs'
                  defaultChecked={firstChecked}
                  onChange={() => setFirstChecked(!firstChecked)}
                />
                <label
                  className='block p-4 text-2xl leading-normal cursor-pointer'
                  htmlFor='tab-multi-one'
                >
                  Programming Languages
                </label>
                <div className='tab-content hover:border-blue-600 overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-500'>
                  {skillStars(SKILLS['langs'])}
                </div>
              </div>
              <div className='tab w-full overflow-hidden border-t'>
                <input
                  className='absolute opacity-0'
                  id='tab-multi-two'
                  type='checkbox'
                  name='tabs'
                />
                <label
                  className='block p-4 text-2xl leading-normal cursor-pointer'
                  htmlFor='tab-multi-two'
                >
                  Applications
                </label>
                <div className='tab-content hover:border-blue-600 overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-500'>
                  <p className='p-5'>{skillStars(SKILLS['apps'])}</p>
                </div>
              </div>
              <div className='tab w-full overflow-hidden border-t'>
                <input
                  className='absolute opacity-0'
                  id='tab-multi-three'
                  type='checkbox'
                  name='tabs'
                />
                <label
                  className='block p-4 text-2xl leading-normal cursor-pointer'
                  htmlFor='tab-multi-three'
                >
                  General
                </label>
                <div className='tab-content hover:border-blue-600 overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-500'>
                  <p className='p-5'>{skillStars(SKILLS['general'])}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}
