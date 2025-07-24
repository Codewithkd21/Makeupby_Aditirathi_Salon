import React from 'react';
import { Link } from 'react-router-dom';
import HairImg from "../assets/Hair.png";
import makeup from '../assets/makeup.png';
import manicure from '../assets/manicure.png';
import skincare from '../assets/skincare.png';
import facial from '../assets/facial.png';
import serviceImage from '../assets/Services.png';
import storyImage from '../assets/salon-artist.png';
import bg1Image from '../assets/rectangle-bg.png';

// Import all components you want inside Home
import Services from './Services';
import OurStory from './OurStory';
import BookOnline from './Onlinebook';


import img1 from '../assets/pic01.png';
import img2 from '../assets/pic02.png';
import img3 from '../assets/pic03.png';
import img4 from '../assets/pic04.png';
import bgImage from '../assets/rectangle12.png'; 

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="min-h-screen bg-[url('/src/assets/salon.jpg')] bg-cover bg-center flex flex-col justify-center items-center relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover A New <span className="text-pink-400">Glow</span> In Your Life
          </h1>
          <p className="text-white/80 mb-8">
            Indulge in the luxury of self-care and let your inner beauty shine.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-pink-300 hover:bg-pink-400 text-gray-800 font-semibold px-6 py-3 rounded shadow transition">
              Book Appointment
            </Link>
            <Link to="/services" className="border border-pink-400 hover:bg-pink-400 hover:text-gray-800 text-white font-semibold px-6 py-3 rounded transition">
              Service Menu
            </Link>
          </div>
        </div>

        {/* Info boxes */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 px-6 max-w-6xl w-full">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/30 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <p className="text-white/70">Ph:+91 7900227237</p>
            <p className="text-white/70">Insta ID : makeupby_aditirathi</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/30 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
            <p className="text-white/70">Mon - Fri: 7:30 am – 8:00 pm</p>
            <p className="text-white/70">Sat: 9:00 am – 8:00 pm</p>
            <p className="text-white/70">Sun: 9:00 am – 8:00 pm</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/30 hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-white/70">Uday City Pallavpuram Phase 2,</p>
            <p className="text-white/70">Meerut, Up, India </p>
          </div>
        </div>
      </div>

      {/* Service Section */}
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
    <Link to="/services">
      <button className="bg-pink-300 hover:bg-pink-400 text-[#4a2c23] font-semibold py-3 px-8 rounded-full shadow transition">
        View Service Menu
      </button>
    </Link>
  </div>
</section>

     <section
        className="w-full relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1Image})` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Image with Blur Background */}
          <div className="relative flex-1 w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-pink-100/50 rounded-lg -rotate-2"></div>
            <img
              src={storyImage}
              alt="Our Story"
              className="relative z-10 w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 w-full">
            <h2 className="text-4xl font-bold mb-6 text-[#4a2c23]">Our Story</h2>
            <p className="text-[#4a2c23] mb-6 leading-relaxed">
              We started as a small beauty studio in Pakistan. Our main idea was to create the best beauty studio in the world.
              Can there be compromises in the best studio in the world? Our answer is always no. We care about the best quality,
              we hire the best specialists and provide the best customer service. This approach allowed us to grow and create
              an awesome team that is passionate about everything we do.
            </p>
            <button className="border border-[#4a2c23] hover:bg-pink-200 text-[#4a2c23] px-6 py-2 rounded-full transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Wave SVG */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full h-32">
            <path
              fill="#fcd5ce"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,149.3C672,149,768,171,864,170.7C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
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
    </div>
  );
};

export default Home;
