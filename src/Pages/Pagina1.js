import React from 'react';
import YouTube from 'react-youtube';

const Pagina1 = () => {
  // Array de instalaciones con imágenes y videos
  const instalaciones = [
    {
      id: 1,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/EstadioO%27donnell_1912.jpg/250px-EstadioO%27donnell_1912.jpg',
      video: 'https://www.youtube.com/watch?v=Fl6xKVrDcyA&pp=ygUcaW5zdGxhY2lvbmVzIGRlbCByZWFsIG1hZHJpZA%3D%3D', 
      descripcion: "A finales de 1912 se inaugura oficialmente el nuevo campo del Madrid F.C. buscando una mayor afluencia de espectadores (dando cabida a alrededor de 7.000 seguidores).5​ Situado entre las calles O'Donnell, Narváez, Fernán González y Duque de Sesto el alquiler del terreno a Laureano García Camisón, propietario de los terrenos, le costaba al club 1 000 pesetas al año. Sin embargo, éste necesitaba arreglos. En las labores de allanamiento y desescombro del terreno colaboraron cientos de entusiastas seguidores del Madrid, entre ellos un muchacho llamado Santiago Bernabéu, que jugaba en el equipo juvenil.6​",
    },
    {
      id: 2,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ciudad_Lineal-Vel%C3%B3dromo.jpg/250px-Ciudad_Lineal-Vel%C3%B3dromo.jpg',
      video: 'https://www.youtube.com/watch?v=3G-_Q3ULOYI&pp=ygUcaW5zdGxhY2lvbmVzIGRlbCByZWFsIG1hZHJpZA%3D%3D',
      descripcion:"El campo de O'Donnell ya se había quedado pequeño para la cantidad de aficionados que reunía el Real Madrid y la directiva se fijó en que el nuevo velódromo de la ciudad de Madrid podría albergar el nuevo campo aprovechando el terreno que quedaba en medio de la pista. La acción se llevó a cabo, y el nuevo terreno de juego pasaba al fin a ser de hierba, resultando ser uno de los pioneros en España, con unas dimensiones de 108 x 68 metros. Su capacidad era de 8 000 espectadores, un gran número para la época, por lo que el Ayuntamiento de Madrid colaboró doblando el servicio de tranvías que partían de la Plaza de Cibeles y la Glorieta de Cuatro Caminos en dirección al estadio los días de partido." 
    },  
    {
      id: 3,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Estadio_Santiago_Bernab%C3%A9u_-_02.jpg/250px-Estadio_Santiago_Bernab%C3%A9u_-_02.jpg',
      video: 'https://www.youtube.com/watch?v=4Kemwg4mxps&pp=ygUcaW5zdGxhY2lvbmVzIGRlbCByZWFsIG1hZHJpZA%3D%3D', 
      descripcion:"Desde 1947 el estadio del Real Madrid es el Estadio Santiago Bernabéu, siendo hasta 1955 denominado como Nuevo Estadio de Chamartín para diferenciarlo del antiguo Estadio de Chamartín.13​ Se encuentra localizado en el distrito de Chamartín, ocupando la manzana delimitada por el Paseo de la Castellana, la avenida Concha Espina y las calles Padre Damián y Rafael Salgado.Fue inaugurado el 14 de diciembre de 1947 con un partido frente al Clube de Futebol Os Belenenses bajo una capacidad de 75 000 espectadores, que llegó años más tarde hasta los 120 000 tras las numerosas remodelaciones a las que fue sometido. En 1955 adoptó el actual nombre en honor al presidente del club Santiago Bernabéu."
    },  
    {
      id: 4,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Distafanomillonarios.JPG/198px-Distafanomillonarios.JPG',
      video: 'https://www.youtube.com/watch?v=62MML4UyxKw&pp=ygURbXVzZW8gcmVhbCBtYWRyaWQ%3D', 
      descripcion:"El Museo del club, situado en el interior del Estadio Santiago Bernabéu, contiene no sólo la Sala de Exposición de Trofeos, sino también los archivos que hacen referencia a la historia del club (esta última sólo accesible mediante las distintas exposiciones y eventos organizados por el club), tales como documentos escritos, gráficos o audiovisuales, además de objetos representativos del Real Madrid, como banderines, carteles, indumentaria o carnés personales. Todo ello puede ser visitado mediante el Tour Bernabéu que ofrece el Estadio y que recorre todos los rincones fundamentales de la historia blanca a través del mismo recinto."
    },  
  ];
  
  const fondoEstilos = {
    background: 'linear-gradient(45deg, #461E52, #DD517F, #E68E36, #556DC8, #7998EE)',
    minHeight: '100vh',
  };

  return (
    <div style={fondoEstilos}>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>LA CASA BLANCA</h1>
      </header>

      {/* Main Content */}
      <div className="container my-4">
        {/* Mapeo sobre las instalaciones */}
        {instalaciones.map((instalacion) => (
          <div className="row mb-4" key={instalacion.id}>
            {/* Columna de la Imagen */}
            <div className="col-md-6">
              <img
                src={instalacion.imagen}
                alt={`Instalación ${instalacion.id}`}
                className="img-fluid"
              />
            </div>

            {/* Columna del Video */}
            <div className="col-md-6">
              <h2>{`Instalación ${instalacion.id}`}</h2>
              <p>{instalacion.descripcion}</p>

              {/* Video */}
              <div className="embed-responsive embed-responsive-16by9 mt-3">
                <YouTube
                  videoId={instalacion.video}
                  opts={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Pagina1;