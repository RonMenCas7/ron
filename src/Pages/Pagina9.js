import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const styles = {
  background: `linear-gradient(to right, #461E52, #DD517F, #E68E36, #556DC8, #7998EE)`,
  height: '100vh',
};

const Pagina9 = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
    asunto: '',
    empresa: '',
    pais: '',
    direccion: '',
    codigoPostal: '',
    ciudad: '',
    estado: '',
    fechaNacimiento: '',
    genero: '',
    ocupacion: '',
    intereses: '',
    ingresos: '',
    educacion: '',
    numHijos: '',
    estadoCivil: '',
    tipoCliente: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu servidor o realizar otras acciones necesarias
    setShowModal(true);
    // Limpiar el formulario después del envío
    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: '',
      asunto: '',
      empresa: '',
      pais: '',
      direccion: '',
      codigoPostal: '',
      ciudad: '',
      estado: '',
      fechaNacimiento: '',
      genero: '',
      ocupacion: '',
      intereses: '',
      ingresos: '',
      educacion: '',
      numHijos: '',
      estadoCivil: '',
      tipoCliente: '',
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={styles}>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-white text-center">Contactos</h1>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formNombre">
                    <Form.Label className="text-white">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCorreo">
                    <Form.Label className="text-white">Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo electrónico"
                      name="correo"
                      value={formData.correo}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formTelefono">
                    <Form.Label className="text-white">Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ingrese su número de teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formMensaje">
                    <Form.Label className="text-white">Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Escriba su mensaje o consulta"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formAsunto">
                    <Form.Label className="text-white">Asunto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique el asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmpresa">
                    <Form.Label className="text-white">Empresa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre de la empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formPais">
                    <Form.Label className="text-white">País</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su país de origen"
                      name="pais"
                      value={formData.pais}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDireccion">
                    <Form.Label className="text-white">Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su dirección"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formCodigoPostal">
                    <Form.Label className="text-white">Código Postal</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su código postal"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCiudad">
                    <Form.Label className="text-white">Ciudad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEstado">
                    <Form.Label className="text-white">Estado/Provincia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su estado o provincia"
                      name="estado"
                      value={formData.estado}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formFechaNacimiento">
                    <Form.Label className="text-white">Fecha de Nacimiento</Form.Label>
                    <Form.Control
                      type="date"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formGenero">
                    <Form.Label className="text-white">Género</Form.Label>
                    <Form.Control
                      as="select"
                      name="genero"
                      value={formData.genero}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccione</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formOcupacion">
                    <Form.Label className="text-white">Ocupación</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su ocupación"
                      name="ocupacion"
                      value={formData.ocupacion}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formIntereses">
                    <Form.Label className="text-white">Intereses</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique sus intereses"
                      name="intereses"
                      value={formData.intereses}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formIngresos">
                    <Form.Label className="text-white">Nivel de Ingresos</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su nivel de ingresos"
                      name="ingresos"
                      value={formData.ingresos}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEducacion">
                    <Form.Label className="text-white">Nivel Educativo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su nivel educativo"
                      name="educacion"
                      value={formData.educacion}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formNumHijos">
                    <Form.Label className="text-white">Número de Hijos</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Especifique el número de hijos"
                      name="numHijos"
                      value={formData.numHijos}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEstadoCivil">
                    <Form.Label className="text-white">Estado Civil</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Especifique su estado civil"
                      name="estadoCivil"
                      value={formData.estadoCivil}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formTipoCliente">
                    <Form.Label className="text-white">Tipo de Cliente</Form.Label>
                    <Form.Control
                      as="select"
                      name="tipoCliente"
                      value={formData.tipoCliente}
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccione</option>
                      <option value="nuevo">Nuevo Cliente</option>
                      <option value="existente">Cliente Existente</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="light" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Gracias por enviar el formulario! Tu solicitud ha sido recibida correctamente.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pagina9;
