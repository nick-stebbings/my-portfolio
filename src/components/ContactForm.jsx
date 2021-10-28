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
    <div class='pt-24 md:pt-12 w-full p-4 my-4 md:px-12 lg:w-9/12 mx-auto rounded-2xl shadow-2xl'>
      <div class='flex'>
        <h1 class='text-gray-50 w-full'>Send me a message</h1>
      </div>
      <div class='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
        <input
          class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='First Name*'
        />
        <input
          class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Last Name*'
        />
        <input
          class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
          type='email'
          placeholder='Email*'
        />
        <input
          class='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
          type='number'
          placeholder='Phone*'
        />
      </div>
      <div class='my-4'>
        <textarea
          placeholder='Message*'
          class='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
        ></textarea>
      </div>
      <div class='my-2 w-1/2 lg:w-1/4 mx-auto'>
        <button class='uppercase text-sm font-bold tracking-wide hover:bg-blue-500 bg-blue-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'>
          Send Message
        </button>
      </div>
    </div>
  );
}
