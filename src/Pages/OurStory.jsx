import React from 'react';
import storyImage from '../assets/salon-artist.png';
import bgImage from '../assets/rectangle-bg.png';
import perfume from '../assets/perfume-pic.png';
import productsImage from '../assets/products-pic.png';
const OurStory = () => {
  return (
    <>
      {/* Top Section - Perfume and Our Story */}
      <section className="bg-[#FAE3DC] w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-5xl font-bold text-black mb-6">Our Story</h2>
            <p className="text-gray-800 text-base md:text-lg max-w-md">
              Our main goal was to create the best beauty studio in the world.
              Can there be any compromises in the best studio in the world?
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={perfume}
              alt="Perfume Bottle"
              className="w-[300px] md:w-[400px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section - Full Story with BG Image */}
      <section
        className="w-full relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
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
        <section className="bg-[#facfc2] w-full py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#3b2018] mb-6">Our Products</h2>
          <p className="text-[#3b2018] text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            All our products are cruelty-free, it’s a category containing all cosmetics that have not been tested on animals. 
            Each cosmetic is subject to strict control by independent inspection bodies chosen by the Coalition for Consumer Information in Cosmetics (CCIC), 
            which is an NGO founded by 8 international animal protection groups such as: American Anti-Vivisection Society, Animal Alliance of Canada, 
            Doris Day Animal League, etc.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={productsImage}
            alt="Cosmetic Products"
            className="max-w-[450px] w-full object-contain"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default OurStory;
