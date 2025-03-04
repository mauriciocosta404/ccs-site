import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules'; // Importe os módulos necessários
import 'swiper/css'; // Estilo básico do Swiper
import 'swiper/css/effect-fade'; // Estilo para o efeito de transição

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]} // Adicione os módulos aqui
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // Delay de 3 segundos
        disableOnInteraction: false, // Continua o autoplay após interação do usuário
      }}
      effect="fade" // Efeito de transição
      speed={1000} // Duração da transição em milissegundos
      className="h-screen" // Altura do Swiper
    >
      <SwiperSlide>
        <div className="h-full relative">
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/banner1.jpg')", // Altere para a segunda imagem
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
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;