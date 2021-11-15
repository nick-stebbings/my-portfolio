import React from 'react';
import PROJECT_INFO from '@/routes/projectData';

export default function ProjectsRack({ openPortfolioItemModal }) {
  return (
    <section
      id='projects'
      className='bg-gray-50 md:pt-16 md:pb-24 main-content-projects md:py-16 pt-24 pb-4'
    >
      <div className='portfolio xl:p-0 md:place-content-center md:px-16 grid w-full h-full grid-cols-5 gap-6 px-4'>
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
          <span className='project-tag'>Shopify App</span>
        </div>
      </div>
    </section>
  );
}
