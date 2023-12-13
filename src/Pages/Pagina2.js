import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Pagina2 = () => {
  const coloresFondo = {
    background: 'linear-gradient(45deg, #18363E, #5F97AA, #2D5F6E, #3E88A5, #93C4D1)',
    minHeight: '100vh',
    padding: '20px',
    color: '#000',  // Cambiado a negro
  };

  // Array de URLs de imágenes para el carrusel
  const imagenesCarrusel = [
    'https://www.realmadrid.com/static/img/vertical_220px/mejor-club-del-siglo-xxthumb.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/champions-palmares2thumb.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/copa-mundial-de-clubes_220.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/supercopas-de-europa_220.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/liga_rm_220.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/copas-del-rey_220.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/supercopas-de-espana_220.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/copa_liga-7.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/pequenas-copas-del-mundo_220.jpg',
    'https://www.realmadrid.com/static/img/vertical_220px/copa_iberoamerica_220x260-web_20230321081520.jpg',
  ];

  const textosCarrusel = [
    'TROFEO FIFA AL MEJOR CLUB DEL SIGLO XX',
    "COPAS DE EUROPA    1955-56  1956-57  1957-58  1958-59  1959-60  1965-66  1997-981999-00  2001-02  2013-14  2015-16  2016-17  2017-18  2021-22",
    'MUNDIALES DE CLUBES    1960  1998  2002  2014  2016  2017  2018  2022',
    'SUPERCOPAS DE EUROPA    2002  2014  2016  2017  2022',
    'COPAS DE LA UEFA 1984-85  1985-86',
    'LIGAS 1931-32  1932-33  1953-54  1954-55  1956-57  1957-58  1960-61  1961-62  1962-63  1963-64  1964-65  1966-67  1967-68  1968-69  1971-72  1974-75  1975-76  1977-78  1978-79  1979-80  1985-86 1986-87  1987-88  1988-89  1989-90  1994-95  1996-97  2000-01  2002-03  2006-07  2007-08  2011-12   2016-17  2019-20  2021-22',
    'COPAS DEL REY1904-05  1905-06  1906-07  1907-08  1916-17  1933-34  1935-36 1945-46  1946-47  1961-62  1969-70  1973-74  1974-75  1979-80  1981-82  1988-89  1992-93  2010-11  2013-14  2022-23',
    'SUPERCOPAS DE ESPAÑA    1988  1989  1990  1993  1997  2001  2003  2008  2012  2017  2020  2022',
    'COPA DE LA LIGA 1984-85',
    'PEQUEÑAS COPAS DEL MUNDO 1952  1956',
  ];

  return (
    <div style={coloresFondo}>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Trofeos y Logros</h1>
      </header>

      {/* Main Content */}
      <div className="container my-4">
        {/* Carrusel */}
        <Carousel>
          {imagenesCarrusel.map((imagen, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={imagen} alt={`Imagen ${index + 1}`} />
              <div className="carousel-caption">
                <p style={{ color: '#000' }}>{textosCarrusel[index]}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Sección de Videos */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Video 1</h2>
            <a href="https://www.youtube.com/watch?v=PvoFK1js_Xg&pp=ygUXVFJPRkVPUyBETEUgUkVBTCBNQURSSUQ%3D" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.eldiario.com.ec/fotos-manabi-ecuador/2018/05/20180526040742_a-real-madrid-campea-n-de-la-champi.jpg"
                alt="Video 1"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6">
            <h2>Video 2</h2>
            <a href="https://www.youtube.com/watch?v=PvoFK1js_Xg&pp=ygUXVFJPRkVPUyBETEUgUkVBTCBNQURSSUQ%3D">
              <img
                src="https://cadenaser00.epimg.net/ser/imagenes/2016/05/31/deportes/1464700380_432952_1464700575_noticia_normal.jpg"
                alt="Video 2"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Pagina2;
