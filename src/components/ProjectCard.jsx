import React from 'react';

export default function ProjectCard({
  title,
  img,
  img2,
  mainText,
  subText,
  demoLink,
  gitLink,
  blogLink,
  skills,
  langs,
  libs,
}) {
  return (
    <div className=' lg:max-w-full lg:flex w-full'>
      <div
        className='h-72 lg:h-auto lg:w-72 lg:rounded-t-none lg:rounded-l flex-none overflow-hidden text-center bg-cover rounded-t'
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'top' }}
        title={title}
      ></div>
      <div className='lg:rounded-b-none drop-shadow-md flex flex-col justify-between p-4 leading-normal bg-gray-100'>
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
          <h3>{subText}</h3>
          {mainText.split('//').map((para, idx) => (
            <p className='mt-4 text-base text-gray-700' key={idx}>
              {para}
            </p>
          ))}
        </div>

        <div className='flex-nowrap flex justify-around w-full mt-4'>
          <div className='px-2 pb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 mx-auto'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <ul className='list-item mt-2 text-sm text-center'>
              {libs && libs.map((lib, idx) => <li key={idx}>{lib}</li>)}
            </ul>
          </div>
          <div className='px-2 pb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 mx-auto'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
            </svg>
            <ul className='list-item mt-2 text-sm text-center'>
              {skills && skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          {gitLink && (
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
          )}
          {demoLink && (
            <div className='flex items-center justify-center'>
              <a
                href={demoLink}
                className='hover:text-blue-600'
                target='_blank'
              >
                <div className='hover:text-blue-600 text-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-24 h-24'
                    viewBox='-24 -24 72 72'
                    fill='currentColor'
                    alt='live demo'
                  >
                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                  </svg>
                </div>
                <div className='text-sm text-center'>Live Demo</div>
              </a>
            </div>
          )}
          {blogLink && (
            <div className='flex items-center justify-center'>
              <a
                href={blogLink}
                className='hover:text-blue-600'
                target='_blank'
              >
                <div className='hover:text-blue-600 text-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-24 h-24'
                    fill='none'
                    viewBox='-24 -24 72 72'
                    fill='currentColor'
                    alt='related medium article'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'
                    />
                  </svg>
                </div>
                <div className='text-sm text-center'>Related Blog</div>
              </a>
            </div>
          )}
        </div>
      </div>

      {img2 && (
        <div
          className='h-72 lg:h-auto lg:w-72 lg:rounded-t-none lg:rounded-l flex-none overflow-hidden text-center bg-cover rounded-t'
          style={{ backgroundImage: `url(${img2})`, backgroundPosition: 'top' }}
          title={title}
        ></div>
      )}
    </div>
  );
}
