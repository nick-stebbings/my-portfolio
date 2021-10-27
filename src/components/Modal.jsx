import React from 'react';

export default function Modal({ onClose, modalRef, children }) {
  return (
    <div
      ref={modalRef}
      className='modal fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none'
    >
      <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

      <div className='modal-container md:max-w-md z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg'>
        <div className='modal-close absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer'>
          <svg
            className='text-white fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
          <span className='text-sm'>(Esc)</span>
        </div>

        <div className='modal-content px-6 py-4 text-left'>
          <div className='flex items-center justify-between pb-3'>
            <p className='text-2xl font-bold'>Simple Modal!</p>
            <div className='modal-close z-50 cursor-pointer'>
              <svg
                className='text-black fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
              </svg>
            </div>
          </div>

          {children}

          <div className='flex justify-end pt-2'>
            <button
              className='modal-close hover:bg-indigo-400 p-3 px-4 text-white bg-indigo-500 rounded-lg'
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
