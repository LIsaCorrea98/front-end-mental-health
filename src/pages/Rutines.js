import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/PageStyles.css'; // Asegúrate de tener este archivo para los estilos

const Rutines = () => {
  return (
    <div className="bg-image">
      <Container className="text-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="align-items-center w-100">
          <Col md={8} className="mb-4 mb-md-0">
            <div className="rutines-box p-4 rounded">
              <h2>Esta Semana</h2>
              {/* Aquí puedes agregar más contenido o componentes */}
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="labels-box p-4 rounded">
              <h2>Etiquetas</h2>
              {/* Aquí puedes agregar más contenido o componentes */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rutines;
