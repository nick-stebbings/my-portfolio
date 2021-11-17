import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
init('user_E5BJN1TcSuGwxdmbhba8s');

const validateForm = (formData) => {
  return Object.values(formData).every((val) => val.length > 0);
};

export default function ContactForm() {
  const defaultData = {
    firstName: '',
    lastName: '',
    email: '',
    // phone: '',
    msg: '',
  };
  const [formData, setFormData] = useState(defaultData);
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = () => {
    setIsValid(validateForm(formData));
    if (!isValid) {
      alert('Please fill out all fields');
      return;
    }
    emailjs
      .send('service_30gijuw', 'template_xlpb8zi', {
        message: formData.msg,
        to_name: `${formData.firstName} ${formData.lastName}`,
        from_name: `Nick Stebbings`,
        to_email: formData.email,
      })
      .then(
        function (response) {
          setFormData(defaultData);
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        },
        function (error) {
          console.log('FAILED...', error);
          alert('There was an error sending the email. Please try again.');
        }
      );
  };
  return (
    <div
      id='contact-form'
      className='md:pt-12 md:my-auto md:px-12 lg:w-9/12 rounded-2xl w-full p-4 pt-24 mx-auto my-4 mb-12'
    >
      <div className='flex'>
        <h2 className='text-gray-50 w-full mb-4 leading-5 tracking-wider'>
          Send me a message
        </h2>
      </div>
      <div className='md:grid-cols-2 grid grid-cols-1 gap-5 mt-5'>
        <input
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
          value={formData.firstName}
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='text'
          placeholder='First Name*'
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
          value={formData.lastName}
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='text'
          placeholder='Last Name*'
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='email'
          placeholder='Email*'
        />
        {/* <input
          onChange={(e) => {
            setFormData({ ...formData, phone: String(e.target.value) });
          }}
          value={formData.phone}
          className='focus:outline-none focus:shadow-outline w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
          type='number'
          placeholder='Phone*'
        /> */}
      </div>
      <div className='my-4'>
        <textarea
          value={formData.msg}
          onChange={(e) => {
            setFormData({ ...formData, msg: e.target.value });
          }}
          placeholder='Message*'
          className='focus:outline-none focus:shadow-outline w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg'
        ></textarea>
      </div>
      <div className='lg:w-1/4 w-1/2 mx-auto my-2'>
        <button
          onClick={handleSubmit}
          className='hover:bg-blue-500 focus:outline-none focus:shadow-outline w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-600 rounded-lg'
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
