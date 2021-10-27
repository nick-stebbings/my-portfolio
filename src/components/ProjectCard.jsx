import React from 'react';

export default function ProjectCard({ title, img, mainText, gitLink }) {
  return (
    <div className=' lg:max-w-full lg:flex w-full'>
      <div
        className='h-72 lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l flex-none overflow-hidden text-center bg-cover rounded-t'
        style={{ backgroundImage: `url(${img})` }}
        title={title}
      ></div>
      <div className='lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b'>
        <div className='mb-8'>
          <p className='flex items-center text-sm text-gray-600'>
            <svg
              className='w-3 h-3 mr-2 text-gray-500 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
            </svg>
            Members only
          </p>
          <div className='mb-2 text-xl font-bold text-gray-900'>
            Best Mountain Trails 2020
          </div>
          <p className='text-base text-gray-700'>{mainText}</p>
        </div>
        <div className='flex items-center'>
          <img
            className='w-10 h-10 mr-4 rounded-full'
            src='/ben.png'
            alt='Git Repo'
          />
          <div className='text-sm'>
            <a href={gitLink} target='_blank'>
              <span className='leading-none text-gray-900'>Git Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
