import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const formData = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    msg: '',
  });
  return (
    <div className='md:pt-12 md:px-12 lg:w-9/12 rounded-2xl w-full p-4 pt-24 mx-auto my-4 shadow-2xl'>
      <div className='flex'>
        <h1 className='text-gray-50 w-full'>Send me a message</h1>
      </div>
      <div className='md:grid-cols-2 grid grid-cols-1 gap-5 mt-5'>
        <input
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='text'
          placeholder='First Name*'
        />
        <input
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='text'
          placeholder='Last Name*'
        />
        <input
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='email'
          placeholder='Email*'
        />
        <input
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='number'
          placeholder='Phone*'
        />
      </div>
      <div className='my-4'>
        <textarea
          placeholder='Message*'
          className='focus:outline-none focus:shadow-outline w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
        ></textarea>
      </div>
      <div className='lg:w-1/4 w-1/2 mx-auto my-2'>
        <button className='hover:bg-blue-500 focus:outline-none focus:shadow-outline w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-600 rounded-lg'>
          Send Message
        </button>
      </div>
    </div>
  );
}
