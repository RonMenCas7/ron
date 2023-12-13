import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const Pagina5 = () => {
  const coloresFondo = {
    background: `linear-gradient(45deg, #AA9D94, #BBADA1, #D2C1B3, #E7D7CB, #F7EDE2)`,
    minHeight: '100vh',
    padding: '20px',
    color: '#000',
  };

  const carruselData = [
    {
      images: [
        'https://www.defensacentral.com/userfiles/2020/Jul/19/1060x545/1-236_O.jpg',
        'https://th.bing.com/th/id/OIP.8PuwbHtznRx4CwOIqPz6sQHaFY?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.fBAk241WcX8GOpbdEia3AQHaE8?rs=1&pid=ImgDetMain',
      ],
      description: 'Muchos son los futbolistas que han pasado por las categorías inferiores del Real Madrid. Unos llegan al primer equipo y otros muchos llegan a élite a través de otros clubes. Ya sea de un modo u otro, el conjunto blanco aporta un total de 43 en todas las ligas del mundo. ',
    },
    {
      images: [
        'https://th.bing.com/th/id/OIP.-ErR9MdV3unHEfi6UwYDnwHaEK?rs=1&pid=ImgDetMain',
        'https://s1.eestatic.com/2017/08/15/elbernabeu/real-madrid/cantera/cantera_239239025_90051429_1706x960.jpg',
        'https://s1.eestatic.com/2018/10/28/actualidad/actualidad_348981030_103512874_1706x960.jpg',
      ],
      description: 'Una de las curiosidades que se observa en el estudio es que Vinicius si es canterano madridista. Sin embargo, otros como Rodrygo Goes o Fede Valverde no los considera como tal. En el caso del brasileño es debido a que cumple los años en enero y no entra en la selección.',
    },
    {
      images: [
        'https://th.bing.com/th/id/OIP.118Q2csNxKVC0JZ4YWSIjwHaKr?rs=1&pid=ImgDetMain',
        'https://lh3.googleusercontent.com/-OAvdMutjMTY/TYp-4yB5eKI/AAAAAAAAAA4/mxS2S2K-IPI/w1200-h630-p-k-no-nu/o_real_madrid_cantera-11406.jpg',
        'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/07/03/15937879636558.jpg',
      ],
      description: 'Otro de los sitios donde es palpable el gran nivel es en la Selección española, especialmente en algunas como la Sub 19. En ella, en la última convocatoria entraron hasta siete mirlos blancos. Édgar Climent Pujol Portorreal, David Jiménez Corredor, Iker Bravo Solanilla, Rafel Obrador Burguera, César Palacios Pérez, Ferrán Quetglas Llorente y Mario Martín Rielves serán los representantes en ella tras recibir la llamada de Santi Denia. Ademas, también apuesta por grandes perlas como es el caso de Iker Bravo.',
    },
  ];

  return (
    <div style={coloresFondo}>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Cantera del Club</h1>
      </header>

      {/* Main Content */}
      <Container className="my-4">
        {carruselData.map((carrusel, index) => (
          <Row key={index} className="mb-4">
            {/* Carrusel */}
            <Col md={6}>
              <h2></h2>
              <Carousel>
                {carrusel.images.map((imagen, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <img className="d-block w-100" src={imagen} alt={`Carrusel ${index + 1} - Imagen ${imgIndex + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            {/* Texto */}
            <Col md={6}>
              <h2></h2>
              <p>{carrusel.description}</p>
            </Col>
          </Row>
        ))}
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Pagina5;
