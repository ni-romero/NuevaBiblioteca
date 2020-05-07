import React, { useState } from "react";
import FormulariosCargarAutores from "./FormularioCargarAutores";

//componentes de Ant
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const FormulariosAutores = ({ nombre, _id }) => {
  const [mostrarForm, setMostrarForm] = useState({
    estado: false,
  });

  const { estado } = mostrarForm;

  //funcion para mostrar forn de carga
  const mostrar = () => {
    const changeEstado = !estado;
    setMostrarForm({
      ...mostrarForm,
      estado: changeEstado,
    });
  };

  // mostrar los datos del form

  const onFinish = (values) => {
    console.log(values.libro);
  };

  return (
    <>
      {" "}
      <div>
        {/* <h1 className="tituloLibreria">ReLibros</h1> */}
        {!estado ? (
          <Form onFinish={onFinish} name="formulario" size="large">
            <Row>
              <Col xs={4} style={{paddingLeft:"120px",paddingRight:"2px", marginRight:"2px"}}>
                <Form.Control
                  name="libro"
                  noStyle
                  style={{ width: 200,paddingRight:"2px", marginRight:"2px" }}
                  placeholder="Ingresa libro"
                />
              </Col>
              <Col xs={4} style={{marginRight:"2px", paddingRight:"3px"}}>
                <Form.Control as="select" custom style={{ width: 200 }}>
                    <option value="todos">Todos</option>
                  <option value="jack">drama</option>
                  <option value="lucy">comedia</option>
                </Form.Control>
              </Col>
            
              <Col xs= {3} className="ml-0">
                <Button type="button" htmlType="submit" className="mr-5 btn-primary">
                  Buscar
                </Button>

                <Button type="button" className="botonCargar btn-danger" onClick={mostrar}>
                  Cargar Libro
                </Button>
              </Col>
            </Row>
          </Form>
        ) : null}

        {estado ? (
          <FormulariosCargarAutores
            nombre={nombre}
            setMostrarForm={setMostrarForm}
            _id={_id}
          />
        ) : null}
      </div>
    </>
  );
};

export default FormulariosAutores;
