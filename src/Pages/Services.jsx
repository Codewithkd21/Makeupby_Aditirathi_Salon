import React from 'react';
import { NavLink } from 'react-router-dom';
import HairImg from "../assets/Hair.png";
import makeup from '../assets/makeup.png';
import manicure from '../assets/manicure.png';
import skincare from '../assets/skincare.png';
import facial from '../assets/facial.png';
import serviceImage from '../assets/Services.png';

import img1 from '../assets/pic01.png';
import img2 from '../assets/pic02.png';
import img3 from '../assets/pic03.png';
import img4 from '../assets/pic04.png';
import bgImage from '../assets/rectangle12.png'; 

const Services = () => {
  return (
    <>
      {/* Full-width Hero Section */}
      <section className="w-full h-auto md:h-[85vh] bg-[#fee3db] flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Text Block */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:py-0">
          <div className="max-w-xl text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-5xl text-center font-bold text-[#2e1a16]">Service Menu</h2>
            <p className="text-center md:text-lg text-gray-800 leading-relaxed">
              We enhance individual beauty with state-of-the-art technologies and personalized service. 
              Our professional team is ready to provide the greatest service you’ve ever had.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src={serviceImage}
            alt="Beauty tools"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </section>

      {/* Service Icons Section */}
      <section className="w-full bg-white/20 backdrop-blur-sm py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-20 text-[#4a2c23]">Service Menu</h2>

        <div className="flex flex-wrap justify-center gap-16 md:gap-32 mb-20 px-6">
          <img src={HairImg} alt="Hair" className="h-28 md:h-32 hover:scale-110 transition duration-300" />
          <img src={makeup} alt="Makeup" className="h-28 md:h-32 hover:scale-110 transition duration-300" />
          <img src={manicure} alt="Manicure" className="h-28 md:h-32 hover:scale-110 transition duration-300" />
          <img src={skincare} alt="Skincare" className="h-28 md:h-32 hover:scale-110 transition duration-300" />
          <img src={facial} alt="Facial" className="h-28 md:h-32 hover:scale-110 transition duration-300" />
        </div>

        <p className="text-center text-[#4a2c23] text-lg px-6 max-w-3xl mx-auto mb-12">
          Get your nails done for great mood. Simple pleasures can make your week, not just day.
        </p>

      <div className="flex justify-center">
          <NavLink
            to="/services"
            className="bg-pink-300 hover:bg-pink-400 text-[#4a2c23] font-semibold py-3 px-8 rounded-full shadow transition"
          >
            View Service Menu
          </NavLink>
        </div>
      </section>
     <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-black mb-4">Hair</h2>
      <p className="text-center text-gray-700 max-w-xl mx-auto mb-12">
        Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-10 text-left">
        {/* Left column */}
        <div>
          <h3 className="font-bold text-black mb-2">Steps Cutting <span className="text-sm font-normal float-right">₹ 1500</span></h3>
          <p className="text-gray-600 mb-6">A graduated haircut in which the hair takes the form of cascading steps</p>

          <h3 className="font-bold text-black mb-2">Kids Cutting <span className="text-sm font-normal float-right">₹ 1000</span></h3>
          <p className="text-gray-600">A haircut on a child age 10 & under</p>
        </div>

        {/* Right column */}
        <div>
          <h3 className="font-bold text-black mb-2">Layers Cutting <span className="text-sm font-normal float-right">₹ 1500</span></h3>
          <p className="text-gray-600 mb-6">A layered haircut creates the appearance of length and volume</p>

          <h3 className="font-bold text-black mb-2">Korean Cutting <span className="text-sm font-normal float-right">₹ 2000</span></h3>
          <p className="text-gray-600">A Korean hairstyle for men with short, medium, and long hair</p>
        </div>
      </div>

       <div className="flex justify-center">
          <NavLink
            to="/book"
            className="bg-[#fee3db] hover:bg-[#f7cfc5] text-black font-semibold py-3 px-6 rounded-full shadow transition"
          >
            Book an Appointment
          </NavLink>
        </div>
    </section>
    <section className="w-full bg-white px-2 md:px-8 py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-center">Manicure Pedicure</h2>
        </div>
       <p className="text-center text-black max-w-3xl mx-auto mb-14 text-sm md:text-base">
  Pamper your hands and feet with professional care. 
  From classic cleanups to luxurious spa treatments, 
  enjoy softness, relaxation, and beautiful nails.
</p>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-y-12 gap-x-16 px-4">
          <div>
            <h4 className="font-semibold mb-2">Basic Manicure <span className="float-right text-sm font-normal">₹ 600</span></h4>
            <p className="text-gray-700 text-sm">Cleansing, shaping, and polish application for hands</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Spa Manicure <span className="float-right text-sm font-normal">₹ 900</span></h4>
            <p className="text-gray-700 text-sm">Includes massage, scrub, and moisturizing treatment</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Basic Pedicure <span className="float-right text-sm font-normal">₹ 700</span></h4>
            <p className="text-gray-700 text-sm">Foot soak, nail care, and polish for feet</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Spa Pedicure <span className="float-right text-sm font-normal">₹ 1000</span></h4>
            <p className="text-gray-700 text-sm">Luxury foot treatment with exfoliation and massage</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <NavLink
            to="/book"
            className="bg-[#fee3db] hover:bg-[#f7cfc5] text-black font-semibold py-3 px-6 rounded-full shadow transition"
          >
            Book an Appointment
          </NavLink>
        </div>
      </div>
    </section>

     <section className="w-full bg-white px-2 md:px-8 py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-center">Makeup</h2>
        </div>
        
        {/* New Description */}
        <p className="text-center text-black max-w-3xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
          Get your glam on with our expert makeup services. <br />
          From natural looks to bold transformations, <br />
          we enhance your beauty for every occasion.
        </p>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-y-12 gap-x-16 px-4">
          <div>
            <h4 className="font-semibold mb-2">
              Party Makeup 
              <span className="float-right text-sm font-normal">₹ 1500</span>
            </h4>
            <p className="text-gray-700 text-sm">Glamorous look perfect for evening parties and events</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Bridal Makeup 
              <span className="float-right text-sm font-normal">₹ 5000</span>
            </h4>
            <p className="text-gray-700 text-sm">Full bridal transformation with long-lasting finish</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Engagement Makeup 
              <span className="float-right text-sm font-normal">₹ 3000</span>
            </h4>
            <p className="text-gray-700 text-sm">Soft and elegant makeup for special pre-wedding events</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Photoshoot Makeup 
              <span className="float-right text-sm font-normal">₹ 2500</span>
            </h4>
            <p className="text-gray-700 text-sm">Camera-ready look for personal or professional shoots</p>
          </div>
        </div>

        {/* Button */}
         <div className="flex justify-center">
          <NavLink
            to="/book"
            className="bg-[#fee3db] hover:bg-[#f7cfc5] text-black font-semibold py-3 px-6 rounded-full shadow transition"
          >
            Book an Appointment
          </NavLink>
        </div>
      </div>
    </section>

      <section className="w-full bg-white px-2 md:px-8 py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-center">Skincare</h2>
        </div>
        
        {/* Description */}
        <p className="text-center text-black max-w-3xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
          Nourish and refresh your skin with our premium skincare services. <br />
          Designed for deep cleansing, hydration, and glowing skin, <br />
          each treatment is tailored to your unique skin needs.
        </p>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-y-12 gap-x-16 px-4">
          <div>
            <h4 className="font-semibold mb-2">
              Deep Cleansing Facial 
              <span className="float-right text-sm font-normal">₹ 1200</span>
            </h4>
            <p className="text-gray-700 text-sm">Removes impurities and revitalizes dull, tired skin</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Hydrating Facial 
              <span className="float-right text-sm font-normal">₹ 1500</span>
            </h4>
            <p className="text-gray-700 text-sm">Boosts skin moisture and restores natural glow</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Anti-Aging Treatment 
              <span className="float-right text-sm font-normal">₹ 1800</span>
            </h4>
            <p className="text-gray-700 text-sm">Reduces fine lines and firms up your skin tone</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Brightening Facial 
              <span className="float-right text-sm font-normal">₹ 1600</span>
            </h4>
            <p className="text-gray-700 text-sm">Evens skin tone and gives a luminous finish</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <NavLink
            to="/book"
            className="bg-[#fee3db] hover:bg-[#f7cfc5] text-black font-semibold py-3 px-6 rounded-full shadow transition"
          >
            Book an Appointment
          </NavLink>
        </div>
      </div>
    </section>

    <section className="w-full bg-white px-2 md:px-8 py-16">
  <div className="max-w-[1300px] mx-auto">
    {/* Heading */}
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-3xl font-bold text-center">Facial</h2>
    </div>
    
    {/* Description */}
    <p className="text-center text-black max-w-3xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
      Rejuvenate your skin with our luxurious facial treatments. <br />
      From cleansing to hydration, each facial is designed to enhance your skin’s natural glow. <br />
      Suitable for all skin types and customized to your needs.
    </p>

    {/* Service Grid */}
    <div className="grid md:grid-cols-2 gap-y-12 gap-x-16 px-4">
      <div>
        <h4 className="font-semibold mb-2">
          Deep Cleansing Facial 
          <span className="float-right text-sm font-normal">₹ 1200</span>
        </h4>
        <p className="text-gray-700 text-sm">Removes impurities and revitalizes dull, tired skin</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Hydrating Facial 
          <span className="float-right text-sm font-normal">₹ 1500</span>
        </h4>
        <p className="text-gray-700 text-sm">Boosts skin moisture and restores natural glow</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Anti-Aging Treatment 
          <span className="float-right text-sm font-normal">₹ 1800</span>
        </h4>
        <p className="text-gray-700 text-sm">Reduces fine lines and firms up your skin tone</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">
          Brightening Facial 
          <span className="float-right text-sm font-normal">₹ 1600</span>
        </h4>
        <p className="text-gray-700 text-sm">Evens skin tone and gives a luminous finish</p>
      </div>
    </div>

    {/* Button */}
     <div className="flex justify-center">
          <NavLink
            to="/book"
            className="bg-[#fee3db] hover:bg-[#f7cfc5] text-black font-semibold py-3 px-6 rounded-full shadow transition"
          >
            Book an Appointment
          </NavLink>
        </div>
  </div>
</section>

 <section
      className="w-full py-20 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Frame Container */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-lg border border-white/30">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
          Follow us on Instagram
        </h2>

        {/* Grid Images inside Frame */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src={img1} alt="Insta 1" className="w-full h-48 object-cover rounded-xl" />
          <img src={img2} alt="Insta 2" className="w-full h-48 object-cover rounded-xl" />
          <img src={img3} alt="Insta 3" className="w-full h-48 object-cover rounded-xl" />
          <img src={img4} alt="Insta 4" className="w-full h-48 object-cover rounded-xl" />
        </div>

        {/* Instagram Link Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.instagram.com/makeupby_aditirathi?igsh=ejY5d3hob2tvYzZm&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 text-white font-semibold px-8 py-3 rounded-full backdrop-blur-md hover:bg-white/30 transition"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
    </>
  );
};
export default Services;