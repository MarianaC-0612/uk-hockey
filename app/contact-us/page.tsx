"use client"; // This directive tells Next.js that this file contains client-side code

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'blog',
    message: '',
    toWhom: 'Mariana Caceres' // Default selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map of recipient names to email addresses
    const recipientEmails = {
      'Mariana Caceres': 'Mjcc-0612@hotmail.com',
      'Option2': 'caceres-camiloaga.mariana@bro.gdst.net',
      'Option3': 'option3@example.com'
    };

    // Get the recipient email based on the selected 'toWhom' value
    const recipientEmail = recipientEmails[formData.toWhom] || 'default@example.com';

    // Send email using EmailJS
    emailjs.send(
      'mjcc-service-id',       // Your actual EmailJS service ID
      'template_ofkz7ba',      // Your actual EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        toWhom: formData.toWhom, // You can include this as info
        recipient_email: recipientEmail // Send the correct recipient email
      },
      '8q1iruLGhJQsgLDJ4'      // Your actual EmailJS user ID
    )
    .then((result) => {
      console.log('Success:', result.text);
      alert('Message sent successfully!');
      // Optionally, clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: 'blog',
        message: '',
        toWhom: 'Mariana Caceres' // Reset to default
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      
      {/* Who to Email Section */}
      <div className="w-full max-w-4xl text-center mb-5">
        <h2 className="text-xl font-semibold mb-2">Who to Email</h2>
        <h4 className="text-m font-medium mb-2">Here is our team, feel free to enter the form, and email any one of us:</h4>
        <ul className="list-none space-y-3">
          <li>Head of UK HOCKEY: Mariana Caceres, Mjcc-0612@hotmail.com</li>
          <li>Head of Blogs: -blank-</li>
          <li>Support: -blank-</li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="toWhom" className="block text-sm font-medium text-gray-700">To Whom</label>
          <select
            id="toWhom"
            name="toWhom"
            value={formData.toWhom}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Mariana Caceres">Mariana Caceres</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="blog">Blog</option>
            <option value="news">News</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
