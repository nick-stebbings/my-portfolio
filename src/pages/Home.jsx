import React, { useState, useRef } from 'react';
import PROJECT_INFO from '@/routes/projectData';

import SmoothScroll from 'smooth-scroll';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  const modalRef = useRef();
  const scroll = new SmoothScroll('a[href*="#"', {
    speed: 900,
    offset: 150,
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
          className='bg-gray-50 md:py-24 main-content-projects py-12'
        >
          <div className='portfolio md:px-16 grid w-full h-full grid-cols-5 gap-5 px-4'>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV2'].img})`,
              }}
              className='portfolio-item square'
              onClick={() => openPortfolioItemModal('habitFractV2')}
            >
              1
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV3'].img})`,
              }}
              className='portfolio-item large-square'
              onClick={() => openPortfolioItemModal('habitFractV3')}
            >
              2
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV2api'].img})`,
              }}
              className='portfolio-item square'
              onClick={() => openPortfolioItemModal('habitFractV2api')}
            >
              3
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['habitFractV1'].img})`,
              }}
              className='portfolio-item small-square'
              onClick={() => openPortfolioItemModal('habitFractV1')}
            >
              4
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['instagramClone'].img})`,
              }}
              className='portfolio-item tall'
              onClick={() => openPortfolioItemModal('instagramClone')}
            >
              5
            </div>
            <div
              style={{
                backgroundImage: `url(${PROJECT_INFO['auntJenny'].img})`,
              }}
              className='portfolio-item wide'
              onClick={() => openPortfolioItemModal('auntJenny')}
            >
              6
            </div>
          </div>
        </section>
        <section
          id='skills'
          className='main-content-skills bg-gray-200'
        ></section>
        <Footer></Footer>
      </main>
    </>
  );
}
