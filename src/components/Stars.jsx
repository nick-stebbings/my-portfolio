import React from 'react';

const FullStar = ({ idx }) => (
  <div key={idx} className='pt-1 text-blue-500'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className=' w-6 h-6'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </svg>
  </div>
);
const EmptyStar = ({ idx }) => (
  <div key={idx} className='pr-1 text-gray-400'>
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

export const SkillStars = ({ skillsObj }) => (
  <div className='md:p-5 p-2'>
    <ul className='list-item mt-2 text-sm text-center'>
      {Object.entries(skillsObj).map(([lang, stars], idx) => {
        return (
          <li
            key={idx}
            className='text-gray-light flex flex-no-wrap items-center justify-around w-full mb-2 xl:text-xl'
          >
            <div className='w-1/5 mr-1 text-gray-900'>{lang}</div>
            <div className='flex justify-start h-12'>
              <div className='flex items-center w-1/2'>
                {[...new Array(stars)].map((num, idx) => (
                  <FullStar key={idx} idx={idx} />
                ))}
                {[...new Array(5 - stars)].map((num, idx) => (
                  <EmptyStar key={idx} idx={idx} />
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);
