import {  MapPin} from 'lucide-react';
import React from 'react';

export const Maps = () => {
  return (
    <section id="contact" className="py-10 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Map Section */}
      <div className="mt-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-900 p-6 border-b">Nossa Localização</h3>
          <div className="aspect-video w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1775656936357!2d-46.6522202!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1654321234567!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja da Paz"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="flex items-center text-indigo-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-medium">Rua Example, 123 - Cidade, Estado - CEP: 12345-678</span>
            </div>
            <p className="mt-2 text-gray-600">
              Estamos localizados em uma área de fácil acesso, próximo ao transporte público.
              Venha nos visitar!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
