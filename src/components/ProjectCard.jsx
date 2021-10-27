import React from 'react';

export default function ProjectCard({
  title,
  img,
  mainText,
  subText,
  skills,
  langs,
  gitLink,
}) {
  return (
    <div className=' lg:max-w-full lg:flex w-full'>
      <div
        className='h-72 lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l flex-none overflow-hidden text-center bg-cover rounded-t'
        style={{ backgroundImage: `url(${img})` }}
        title={title}
      ></div>
      <div className='lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r border-gray-50 flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r rounded-b'>
        <div className='mb-8'>
          <span className='flex items-center text-sm text-gray-700'>
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
                d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span className='pl-2'>{langs}</span>
          </span>
          <p className='mt-8 text-base text-gray-700'>{mainText}</p>
        </div>
        {skills && skills.join(', ')}
        <div className='flex items-center justify-center'>
          <a href={gitLink} className='hover:text-blue-600' target='_blank'>
            <div className='hover:text-blue-600 text-gray-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-24 h-24'
                fill='none'
                viewBox='-24 -24 72 72'
                fill='currentColor'
                alt='my github account'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                />
              </svg>
            </div>
            <div className='text-sm text-center'>View Code</div>
          </a>
        </div>
      </div>
    </div>
  );
}
