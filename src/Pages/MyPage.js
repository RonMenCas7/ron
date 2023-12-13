// En un archivo como Pages/MyPage.jsx
import React from 'react';

const MyPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Mi Sitio</h1>
      </header>

      {/* Main Content */}
      <div className="container my-4">
        <div className="row">
          {/* Contenido específico de MyPage */}
          <div className="col-md-12">
            <h2>Bienvenido a Mi Sitio</h2>
            <p>Este es el contenido de MyPage.</p>
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

export default MyPage;