import React, { useState, useRef } from 'react';
import PROJECT_INFO from '@/routes/projectData';

import SmoothScroll from 'smooth-scroll';
import Modal from '@/components/Modal';
import SkillsRack from '@/components/SkillsRack';
import ProjectsRack from '@/components/ProjectsRack';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentModalContent, setCurrentModalContent] = useState(
    PROJECT_INFO['auntJenny']
  );
  const modalRef = useRef();
  new SmoothScroll('a[href*="#"', {
    speed: 300,
    offset: 20,
    clip: true,
    easing: 'easeOutQuad',
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
      <main id='top' className='layout w-full min-h-screen font-sans'>
        <Header />
        <SkillsRack openPortfolioItemModal={openPortfolioItemModal} />
        <ProjectsRack openPortfolioItemModal={openPortfolioItemModal} />
        <Footer />
      </main>
    </>
  );
}
