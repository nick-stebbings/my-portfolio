import React, { useState } from 'react';
import { SKILLS } from '@/routes/projectData';
import { SkillStars } from './Stars';

export default function SkillsRack() {
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);

  return (
    <section
      id='skills'
      className='main-content-skills mb-52 sm:mb-12 relative flex flex-col items-center justify-around pt-12 bg-gray-100'
    >
      <div className='md:w-3/4 md:p-8 absolute grid w-full p-4 mx-auto'>
        <div
          className='shadow-md'
          style={{ height: 'fit-content', marginTop: '15%' }}
        >
          <div className='tab w-full overflow-hidden border-t'>
            <input
              className=' absolute opacity-0'
              id='tab-multi-one'
              type='checkbox'
              name='tabs'
              checked={firstChecked}
              onChange={() => {
                setFirstChecked(!firstChecked);
                setSecondChecked(firstChecked);
              }}
            />
            <label
              className='md:text-xl xl:text-2xl block p-4 text-base leading-normal cursor-pointer'
              htmlFor='tab-multi-one'
            >
              Languages
            </label>
            <div className='tab-content hover:border-blue-600 overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-500'>
              <SkillStars skillsObj={SKILLS['langs']} />
            </div>
          </div>
          <div className='tab w-full overflow-hidden border-t'>
            <input
              className='absolute opacity-0'
              id='tab-multi-two'
              type='checkbox'
              name='tabs'
              checked={secondChecked}
              onChange={() => {
                setSecondChecked(!secondChecked);
                setFirstChecked(false);
                setThirdChecked(secondChecked);
              }}
            />
            <label
              className='md:text-xl xl:text-2xl block p-4 text-base leading-normal cursor-pointer'
              htmlFor='tab-multi-two'
            >
              Applications
            </label>
            <div className='tab-content hover:border-blue-600 overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-500'>
              <SkillStars skillsObj={SKILLS['apps']} />
            </div>
          </div>
          <div className='tab w-full overflow-hidden border-t'>
            <input
              className='absolute opacity-0'
              id='tab-multi-three'
              type='checkbox'
              name='tabs'
              checked={thirdChecked}
              onChange={() => {
                setThirdChecked(!thirdChecked);
                setSecondChecked(false);
                setFirstChecked(thirdChecked);
              }}
            />
            <label
              className='md:text-xl xl:text-2xl block p-4 text-base leading-normal cursor-pointer'
              htmlFor='tab-multi-three'
            >
              General
            </label>
            <div className='tab-content hover:border-blue-600 overflow-hidden leading-normal bg-gray-100 border-l-2 border-blue-500'>
              <SkillStars skillsObj={SKILLS['general']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
