import React from 'react';
import { Carousel } from 'react-bootstrap';

const Inicio1 = () => {
  const noticias = [
    'https://i.eurosport.com/2019/05/20/2591971-53738130-2560-1440.jpg',
    'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/25/15694029684777.jpg',
    'https://tododeportes.info/wp-content/uploads/2020/04/El-Real-Madrid-da-buenas-noticias-a-sus-jugadores-despues.jpg',
    'https://img.europapress.es/fotoweb/fotonoticia_20220810231831_1200.jpg',
    'https://img.nbc.com/sites/nbcunbc/files/images/2021/5/07/57c7d30a-466f-37a7-8f5a-180c156e6a61.jpg',
  ];

  return (
    <div>
      {/* Carousel */}
      <Carousel fade interval={5000} controls={false} pause={false}>
        {noticias.map((imagen, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imagen}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Espacio para Título y Texto con Fondo Degradado */}
      <div className="container my-4 text-center p-4" style={{ background: 'linear-gradient(to right, #596854, #7F803E, #CC9A52, #AD794B, #FCE4B4)', color: '#fff' }}>
        <h2>¡Últimas Noticias del Real Madrid!</h2>
        <p className="lead">
        El Real Madrid empieza como terminó


El Real Madrid repitió el guión de los últimos meses de la temporada pasada para seguir con la línea victoriosa en su arranque del curso 2022-23, gracias a un triunfo sin discusión frente al Eintracht de Frankfurt (2-0) que se ha traducido en la quinta Supercopa de Europa en la historia de los merengues, cada vez más acostumbrados a seguir añadiendo conquistas a sus vitrinas.

Leer más: https://www.notimerica.com/deportes/noticia-real-madrid-empieza-termino-20220810231831.html

(c) 2023 Europa Press. Está expresamente prohibida la redistribución y la redifusión de este contenido sin su previo y expreso consentimiento.

        </p>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Inicio1;
