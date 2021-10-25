import React from 'react';

import CustomLink from '@/components/CustomLink';
import { ROUTE_STRINGS } from '@/routes/Routes';

export default function Home() {
  return (
    <>
      <header className='w-full min-h-screen, font-sans, bg-gray-900'>
        <div>
          <a
            href='#'
            className='flex items-center justify-center w-12 h-12 text-xl text-gray-900 bg-white rounded-full'
          >
            ES
          </a>
        </div>
        <nav className='border-1 grid w-full grid-cols-4 pb-24 border-white'>
          <ul>
            {ROUTE_STRINGS.map((route, idx) => (
              <li
                key={idx}
                className='text-xl tracking-widest text-white uppercase'
              >
                {route}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>hi</main>
    </>
  );
}
