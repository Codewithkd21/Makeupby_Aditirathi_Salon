import React from 'react';
import mobileIcon from '../assets/mobile.png';
import clockIcon from '../assets/clock.png';
import locationIcon from '../assets/location.png';
import ellipse from '../assets/Ellipse.png';
import textLogo from '../assets/Group.png'; // your curve text
import fbIcon from '../assets/Fb.png';
import instaIcon from '../assets/Insta.png';

const Footer = () => {
  return (
    <footer className="bg-white text-[#4a2c23] pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* CONTACT */}
        <div className="flex flex-col items-center">
          <img src={mobileIcon} alt="Contact" className="w-12 mb-4" />
          <h3 className="font-bold tracking-widest mb-2">CONTACT</h3>
          <p>Ph:+91 7900227237 </p>
          <p>insta : makeupby_aditirathi</p>
        </div>

        {/* HOURS */}
        <div className="flex flex-col items-center">
          <img src={clockIcon} alt="Hours" className="w-12 mb-4" />
          <h3 className="font-bold tracking-widest mb-2">HOURS</h3>
          <p>Mon to Fri: 7:30 am — 8:00 pm</p>
          <p>Sat: 9:00 am — 8:00 pm</p>
          <p>Sun: 9:00 am — 8:30 pm</p>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col items-center">
          <img src={locationIcon} alt="Location" className="w-12 mb-4" />
          <h3 className="font-bold tracking-widest mb-2">LOCATION</h3>
          <p>Uday City Pallavpuram phase 2 ,</p>
          <p>Meerut,Up </p>
          <p>India</p>
        </div>
      </div>

      {/* LOWER FOOTER */}
      <div className="mt-16 bg-[#fddac7] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          {/* LOGO SECTION */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="relative">
              <img src={ellipse} alt="Ellipse" className="w-28" />
              <img src={textLogo} alt="We Don't Keep" className="absolute top-0 left-0 w-28" />
              <div className="absolute top-8 left-6 font-bold">SALON</div>
            </div>
          </div>

       
          {/* SOCIAL & CONTACT */}
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p className="mb-4">Don't miss promotions, follow us for the latest news</p>
            <div className="flex justify-center md:justify-end gap-4">
              <img src={fbIcon} alt="Facebook" className="w-6 cursor-pointer hover:scale-110 transition" />
              <img src={instaIcon} alt="Instagram" className="w-6 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#fcd5ce] text-center py-3 text-xs mt-4">
        © 2025 Salon. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
