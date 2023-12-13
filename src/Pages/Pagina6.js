import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Pagina6 = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    pais: '',
    ciudad: '',
    direccion: '', // Nuevo campo
    email: '', // Nuevo campo
  });
  const [diasEntrega, setDiasEntrega] = useState(getRandomInt(1, 10));

  const productos = [
    {
      id: 1,
      imagen: 'https://shop.realmadrid.com/cdn/shop/files/RMCFMS0161-07_533x.jpg?v=1699291332',
      descripcion: 'Jersey Navideño Rudolph',
    },
    {
      id: 2,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMJ0126-02_533x.jpg?v=1700234343',
      descripcion: 'Cazadora Outerwear Hombre Acolchada Montaña Blanco',
    },
    {
      id: 3,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFYJ0022-03_533x.jpg?v=1701711399',
      descripcion: 'Abrigo Parka Largo Outerwear Niños Acolchada Azul      ',
    },
    {
      id: 4,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFYJ0019_02_533x.jpg?v=1700234368',
      descripcion: 'Jersey Navideño Escudo Azul Marino/Gris',
    },
    {
      id: 5,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMJ0127-03_533x.jpg?v=1701711412',
      descripcion: 'Cortavientos Outerwear Hombre Detalle Color Blanco',
    },
    {
      id: 6,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMJ0126-02_533x.jpg?v=1700234343',
      descripcion: 'Chaqueta Sofshell Outerwear Hombre Acolchada Negra',
    },
    {
      id: 7,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMJ0124-02_533x.jpg?v=1700234330',
      descripcion: 'Abrigo Parka Largo Outerwear Hombre Acolchada Azul',
    },
    {
      id: 8,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMJ0121-03_533x.jpg?v=1701711460',
      descripcion: 'Abrigo Parka Largo Outerwear Hombre Acolchada Azul',
    },
    {
      id: 9,
      imagen: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMJ0119-03_589cd45a-76ee-446b-b0a5-a98ac498f59a_533x.jpg?v=1701711477',
      descripcion: 'Sudadera Capucha Azul Marino Hombre Escudo Color Essentials',
    },
    {
      id: 10,
      imagen: 'https://shop.realmadrid.com/cdn/shop/files/RMCFMS0212-2_360x.jpg?v=1692021046',
      descripcion: 'Cazadora Ligera Outerwear Hombre Acolchada Azul',
    },
    {
      id: 11,
      imagen: 'https://shop.realmadrid.com/cdn/shop/files/RMCFMJ0105-02_533x.jpg?v=1694537838',
      descripcion: 'adidas LFSTLR Camiseta Hombre Tercera Equipación 23/24',
    },
  ];

  const handleCompraClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    // Enviar al usuario al formulario al hacer clic en la imagen
    window.scrollTo({
      top: document.body.scrollHeight, // Desplazar hacia abajo hasta el final de la página
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  const handleCompraConfirmada = () => {
    // Lógica de compra simulada, podrías realizar una solicitud a un servidor aquí
    // y luego mostrar el mensaje de confirmación.
    setShowModal(false);
    alert(`¡Su pedido está listo! Llegará en ${diasEntrega} días.`);
    // Limpiar el formulario después de la compra
    setFormData({
      nombre: '',
      apellido: '',
      pais: '',
      ciudad: '',
      direccion: '',
      email: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Tienda Oficial</h1>
      </header>

      {/* Main Content */}
      <Container className="my-4">
        <Row>
          {productos.map((producto) => (
            <Col md={4} key={producto.id} className="mb-4">
              <h2>Producto {producto.id}</h2>
              <img
                src={producto.imagen}
                alt={`Producto ${producto.id}`}
                className="img-fluid"
                onClick={() => handleCompraClick(producto)}
                style={{ cursor: 'pointer' }}
              />
              <p>{producto.descripcion}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal de Compra */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Está seguro de que desea comprar {selectedItem?.descripcion}?</p>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPais">
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su país"
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCiudad">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Nuevos campos */}
            <Form.Group controlId="formDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dirección de envío"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Otros campos según tus necesidades */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCompraConfirmada}>
            Confirmar Compra
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer
        className="bg-dark text-white text-center py-3"
        style={{
          background: `linear-gradient(45deg, #AA3815, #BC4D1D, #D36833, #ED7D51, #EFA17F)`,
        }}
      >
        <p>&copy; 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Pagina6;
