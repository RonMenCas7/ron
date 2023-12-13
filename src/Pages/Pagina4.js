import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

const Pagina4 = () => {
  // Array de URLs de imágenes para los carruseles
  const imagenesCarrusel1 = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Radael_Nadal_at_the_2011_Australian_Open2_crop.jpg/220px-Radael_Nadal_at_the_2011_Australian_Open2_crop.jpg',
    'https://th.bing.com/th/id/OIP.BCQdEu7YLq2k4tuaAlRrnwHaFj?w=247&h=186&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/R.a2e4597322948470c1ba946dc818a18f?rik=GjVUrCDrIpusfQ&riu=http%3a%2f%2fimg2.rtve.es%2fi%2f%3fw%3d1600%26i%3d1525793006728.jpg&ehk=SIWdxfD71Vq819thg0eMVpY1ub6hcTLuPm3uXbowHDg%3d&risl=&pid=ImgRaw&r=0',
  ];

  const imagenesCarrusel2 = [
    'https://cdn-pro.elsalvador.com/wp-content/uploads/2017/06/03144259/Aficionados-Real-Madrid.jpg',
    'https://media.americateve.com/p/e2cf29695d7e6f80a86c8ae9529a4bed/adjuntos/179/imagenes/003/415/0003415656/dep-fut_real_madrid-festejos-1jpg.jpg',
    'https://www.defensacentral.com/userfiles/2018/May/26/1060x545/aficion_O.jpg',
  ];

  const imagenesCarrusel3 = [
    'https://okdiario.com/img/real-madrid/2017/05/12/aficion-bernabeu.jpg',
    'https://2.bp.blogspot.com/-BWg86DZVpGQ/XI-GfE2WylI/AAAAAAAABWY/BceXIaqP6VMiBEXVS3b0RfcdhuojophXACLcBGAs/s1600/aficion-real-madrid.jpg',
    'https://www.record.com.mx/sites/default/files/articulos/2018/05/27/20180527145051.jpg',
  ];

  // Array de URLs de videos de YouTube
  const videosYouTube = [
    'https://www.youtube.com/watch?v=A8wVT7nsshU',
    'https://www.youtube.com/watch?v=cFGIut6xnFQ',
    'https://www.youtube.com/watch?v=cLQrlfP4gUA',
  ];

  const coloresFondo = {
    background: `linear-gradient(45deg, #FFB600, #44A9CC, #EB563A, #F4B998, #50BCB9)`,
    minHeight: '100vh',
    padding: '20px',
    color: '#fff',
  };

  return (
    <div style={coloresFondo}>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Socios y Afición</h1>
      </header>

      {/* Main Content */}
      <Container className="my-4">
        {/* Carrusel 1 */}
        <Row className="mb-4">
          <Col md={12}>
            <h2>SOCIOS</h2>
            <Carousel>
              {imagenesCarrusel1.map((imagen, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imagen} alt={`Imagen ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Videos */}
        <Row>
          {/* Video 1 */}
          <Col md={4} className="mb-4">
            <h2>REAL MADRID</h2>
            <YouTube videoId={videosYouTube[0].split('v=')[1]} />
          </Col>
        </Row>

        {/* Carrusel 2 */}
        <Row className="mb-4">
          <Col md={12}>
            <h2>SOCIOS</h2>
            <Carousel>
              {imagenesCarrusel2.map((imagen, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imagen} alt={`Imagen ${index + 4}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Videos */}
        <Row>
          {/* Video 2 */}
          <Col md={4} className="mb-4">
            <h2>**AFICION**</h2>
            <YouTube videoId={videosYouTube[1].split('v=')[1]} />
          </Col>
        </Row>

        {/* Carrusel 3 */}
        <Row className="mb-4">
          <Col md={12}>
            <h2>REAL MADRID</h2>
            <Carousel>
              {imagenesCarrusel3.map((imagen, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={imagen} alt={`Imagen ${index + 7}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Videos */}
        <Row>
          {/* Video 3 */}
          <Col md={4} className="mb-4">
            <h2>REAL MADRID</h2>
            <YouTube videoId={videosYouTube[2].split('v=')[1]} />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Pagina4;
