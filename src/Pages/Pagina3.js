import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

const Pagina3 = () => {
  // Cambia esta URL con la URL de tu video de YouTube
  const videoUrl = 'https://www.youtube.com/watch?v=QvJoCy-0XCs';

  const coloresFondo = {
    background: 'linear-gradient(45deg, #2D4030, #49684C, #5D7F61, #6B8E6E, #97B299)',
    minHeight: '100vh',
    padding: '20px',
    color: '#fff',
  };

  const historiaResumen = `
    **Historia**
    Alternar subsección Historia

    - **Antecedentes y una confusa fundación:**
      El club tuvo sus inicios en circunstancias difusas, pero con el tiempo se consolidó como una institución destacada.

    - **Oficialidad y primeros encuentros:**
      El proceso de oficialización del club y sus primeros enfrentamientos en el ámbito futbolístico.

    - **Pionero en el desarrollo del foot-ball:**
      Contribuciones significativas en el desarrollo y evolución del fútbol.

    - **Crecimiento como institución. Un club Real:**
      La evolución del club como institución, adoptando el título "Real" y consolidando su estatus.

    - **Nuevas secciones deportivas en el impás político:**
      Diversificación con la incorporación de nuevas secciones deportivas durante momentos políticos cruciales.

    - **Primera época dorada. La llegada de Di Stéfano:**
      La llegada de Alfredo Di Stéfano marcó el inicio de una época dorada para el club.

    - **El relevo generacional continúa la estela:**
      Periodo de transición y consolidación de nuevos talentos.

    - **Referente mundial:**
      El Real Madrid se establece como un referente a nivel mundial.

    - **El esplendor de los años ochenta y el denominado «fútbol moderno»:**
      Dominio en la década de los ochenta y contribuciones al desarrollo del fútbol moderno.

    - **La supremacía de «La Quinta del Buitre»:**
      Época destacada con el grupo de jugadores conocido como "La Quinta del Buitre".

    - **Máxima competencia y contiendas a nivel nacional:**
      Participación destacada en competiciones nacionales e internacionales.

    - **La llegada de Florentino Pérez. El mejor club del siglo XX:**
      Cambios significativos con la llegada de Florentino Pérez y reconocimientos como el mejor club del siglo XX.

    - **Máxima expansión mundial; un club universal:**
      Expansión global consolidando su presencia como un club universal.

    - **La hegemonía internacional con Cristiano Ronaldo:**
      Dominio en competiciones internacionales con la presencia de Cristiano Ronaldo.

    - **La inflexión de Kiev y la sección femenina:**
      Momento crítico en Kiev y el crecimiento de la sección femenina.

    - **Una lenta y difícil reconstrucción:**
      Período de reconstrucción tras desafíos y cambios internos.

    - **Éxito en el estreno del equipo femenino:**
      Logros destacados con el equipo femenino en su temporada de estreno.

    - **La irregularidad deportiva de la «vieja guardia» (Actualidad):**
      Retos y desafíos actuales enfrentados por la "vieja guardia" del club.

    - **Camino a nuevos éxitos (Actualidad):**
      Perspectivas y preparación para nuevos éxitos en la actualidad.
  `;

  return (
    <div style={coloresFondo}>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Historia del Club</h1>
      </header>

      {/* Main Content */}
      <Container className="my-4">
        <Row>
          {/* Video */}
          <Col md={12} className="text-center">
            <h2>**HISTORIA EN UN VIDEO**</h2>
            <YouTube videoId={videoUrl.split('v=')[1]} />
          </Col>

          {/* Texto */}
          <Col md={12} className="mt-4">
            <h2>**Reseña Histórica**</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{historiaResumen}</p>
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

export default Pagina3;
