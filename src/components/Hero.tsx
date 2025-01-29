import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/banner1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bem-vindo à Igreja Adonai Cenáculo da salvação
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            A olaría de Deus
          </p>
          <a
            href="#services"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Nossos Cultos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;