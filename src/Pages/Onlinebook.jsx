import React, { useState } from 'react';
import PhotoRoom from '../assets/PhotoRoom.png';
import perfume from '../assets/perfume.png';
import perfumepic from '../assets/perfumepic.png';
import HeartIcon from '../assets/Heart-icon.png';

const Onlinebook = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, subject, message } = formData;

    // Construct WhatsApp message with user input
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // WhatsApp link (91 = India country code)
    const whatsappNumber = '917297090864';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat in new tab with auto-filled message
    window.open(url, '_blank');
  };

  return (
    <section className="w-full">
      <div className="font-sans">
        {/* Header */}
        <div className="bg-[#FDE3DB] py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="text-left">
              <h2 className="text-5xl font-bold text-black">Book Appointment</h2>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={PhotoRoom}
                alt="Header"
                className="w-full max-w-[450px] shadow-lg"
                style={{ marginBottom: '8px' }}
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white py-14 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src={perfume}
                alt="Perfume"
                className="w-full max-w-[500px] shadow-2xl rounded-md object-contain"
              />
            </div>

            {/* Right Form */}
            <div className="bg-[#FDE3DB] p-10 rounded-md shadow-md w-full">
              <h3 className="text-3xl font-bold mb-8 text-black text-center">Contact Us</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-md"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-md"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#FBCFC2] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#f7b6a5] w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="bg-white w-full py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <img src={HeartIcon} alt="Heart Icon" className="w-10 h-10" />
              <h2 className="text-3xl font-bold text-black">Join Our Team</h2>
              <p className="text-gray-700 text-sm max-w-xs">
                Please send us an email telling us a bit about us
              </p>
              <div className="border border-gray-400 px-6 py-2 rounded-md">
                <span className="text-black font-semibold">salon@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={perfumepic}
                alt="Perfume"
                className="w-full max-w-md h-auto object-cover shadow-md rounded-md mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onlinebook;
