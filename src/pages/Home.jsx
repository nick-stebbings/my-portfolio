import React, { useState, useRef } from 'react';
import PROJECT_INFO from '@/routes/projectData';

import dotsSvg from '/images/dots.svg?import&component';
import SmoothScroll from 'smooth-scroll';
import Modal from '@/components/Modal';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentModalContent, setCurrentModalContent] = useState('Hi');
  const modalRef = useRef();
  const scroll = new SmoothScroll('a[href*="#"', {
    speed: 900,
  });

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
        <Header />
        <section
          id='projects'
          className='bg-gray-50 md:py-24 main-content-projects py-12'
        >
          <div className='portfolio md:px-16 grid w-full h-full grid-cols-5 gap-5 px-4'>
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
              onClick={() => openPortfolioItemModal('habitFractV1')}
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
        <section
          id='skills'
          className='main-content-skills bg-gray-200'
        ></section>
        <Footer></Footer>
      </main>
    </>
  );
}
