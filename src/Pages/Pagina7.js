import React, { useState } from 'react';
import { Carousel, Container, Modal, Button } from 'react-bootstrap';

const eventos = [
  {
    id: 1,
    imagen: 'https://th.bing.com/th/id/R.4da276e17b3af2846da6ef4b21437074?rik=7C1K3gcTgc2s1Q&pid=ImgRaw&r=0',
    descripcion: 'Horario Real Madrid - Eibar: Dónde ver hoy sábado por TV el partido de la LaLiga Santander',
  },
  {
    id: 2,
    imagen: 'https://www.sofascore.com/news/wp-content/uploads/2017/01/Real-Madrid-vs-Malaga.jpg',
    descripcion: 'Real Madrid vs Malaga – Preview, Team news, Possible lineups    ',
  },
  {
    id: 3,
    imagen: 'https://www.sofascore.com/news/wp-content/uploads/2014/11/Real-vs-Rayo.png',
    descripcion: 'Primera La Liga BBVA 11th round: Real Madrid CF vs Rayo Vallecano Match preview',
  },
  {
    id: 4,
    imagen: 'https://www.sofascore.com/news/wp-content/uploads/2014/10/Granada-vs-Real-Madrid.png',
    descripcion: 'Primera La Liga BBVA 10th round: Granada – Real Madrid Match preview',
  },
  {
    id: 5,
    imagen: 'https://diariomejor.com/wp-content/uploads/2022/04/Osasuna-vs-Real-Madrid-Live-Online-Laliga-2021.jpg',
    descripcion: 'Osasuna vs Real Madrid LIVE ONLINE, Time, Where and How to Watch | LaLiga Santander 2021',
  },
  {
    id: 6,
    imagen: 'https://sportslens.com/wp-content/uploads/2017/01/Real-Madrid-vs-Real-Sociedad.jpg',
    descripcion: 'Real Madrid Vs Real Sociedad Prediction, Betting Tips, Preview & Live Stream Info',
  },
  {
    id: 7,
    imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/05/11/15575958938362.jpg',
    descripcion: 'Real Madrid 0-0 Real Sociedad: Highlights - LaLiga 22/23',
  },
  {
    id: 8,
    imagen: 'https://i.ytimg.com/vi/2Ryz8neaW_c/maxresdefault.jpg',
    descripcion: 'Real madride vs deportivo alaves#4',
  },
  {
    id: 9,
    imagen: 'https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2020/11/18/1821478467597/UCL_Match_Replay_Internationale_VS_Real_Madrid_377303_1920x1080.jpg',
    descripcion: 'Real Madrid vs. Atalanta on Paramount+: Live stream UEFA Champions League, how to watch on TV, news, odds',
  },
  {
    id: 10,
    imagen: 'https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2022/10/19/2086723651902/UEFA_UCL_CHAMPIONS_THUMB_08_RB-Leipzig-v-Real-Madrid_1726111_1920x1080.jpg',
    descripcion: 'Real Madrid vs RB Leipzig    UEFA Champions League, KO: 20:00 Sep 14, 2022, Bernabeu',
  },

  
  
];

const Pagina7 = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleImageClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Eventos Oficiales</h1>
      </header>

      {/* Main Content */}
      <Container className="my-4">
        <Carousel
          style={{
            background: `repeating-linear-gradient(
              45deg,
              #0F0E11,
              #23252D 20px,
              #2B2D35 20px,
              #3A3C44 40px
            )`,
          }}
        >
          {eventos.map((evento) => (
            <Carousel.Item key={evento.id} onClick={() => handleImageClick(evento)}>
              <img
                className="d-block w-100"
                src={evento.imagen}
                alt={`Evento ${evento.id}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Modal para mostrar la descripción del evento */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent && `Evento ${selectedEvent.id}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedEvent && selectedEvent.descripcion}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer
        className="bg-dark text-white text-center py-3"
        style={{
          background: `linear-gradient(45deg, #0F0E11, #23252D, #2B2D35, #3A3C44, #46484F)`,
        }}
      >
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Pagina7;
