import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import Libro from './Libro';



const ListadoLibros = ({
  libros,
  setLibros,
  fetchLibrosAll,
 
}) => {

    
  return (
    <Container style={{ margin: "24px 16px 0" }}>
      <div
        className=" contenedor"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Row gutter={[16, 16]}>
          {libros.map((libro, index) => (
            <Col span={8} key={libro._id} className="p-3" >
              <Libro
                index={index}
                libro={libro}
                setLibros={setLibros}
                libros={libros}
                fetchLibrosAll={fetchLibrosAll}
             
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ListadoLibros;
