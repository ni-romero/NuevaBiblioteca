import React, { useState } from "react";


//componentes de Ant
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Formulario = ({
  mostrarLista,
  ocultarLista,
  setLibros,
  libros,
  fetchLibrosAll,
  fetchLibros,
  fetchLibrosNombre
}) => {
  //State
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

    ocultarLista();
  };

  // mostrar los datos del form

  const onFinish = (e) => {
      e.preventDefault()
    
    console.log(e.target.categoria.value)
    
    const nombre =e.target.libro.value ;
     if(nombre !== ""){
      fetchLibrosNombre(nombre)
     }
       mostrarLista();

    
  };

  return (
    <>
      {" "}
      <div>
        {/* <h1 className="tituloLibreria">ReLibros</h1> */}
        {!estado ? (
          <Row>
            <Col xs={12}>
              <Form onSubmit={onFinish} name="formulario" size="large">
                <Row>
                  <Col
                    xs={4}
                    style={{
                      paddingLeft: "120px",
                      paddingRight: "2px",
                      marginRight: "2px",
                    }}
                  >
                    <Form.Control
                      name="libro"
                      noStyle
                      style={{
                        width: 200,
                        paddingRight: "2px",
                        marginRight: "2px",
                      }}
                      placeholder="Ingresa libro"
                    />
                  </Col>
                  <Col
                    xs={4}
                    style={{ marginRight: "2px", paddingRight: "3px" }}
                  >
                    <Form.Control as="select" custom style={{ width: 200 }} name ="categoria">
                      <option value="todos">Todos</option>
                      <option value="jack">drama</option>
                      <option value="lucy">comedia</option>
                    </Form.Control>
                  </Col>

                  <Col xs={3} className="ml-0">
                    <Button
                      type="submit"
                   
                      className="mr-5 btn-primary"
                    >
                      Buscar
                    </Button>
                  </Col>
                </Row>
              </Form>
              
            </Col>
          </Row>
        ) : null}

        
      </div>
    </>
  );
};

export default Formulario;
