import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer/Footer";
import FormulariosAutores from "./FormularioAutores";
import ListadoLibros from "../Usuario/Libreria/ListadoLibros";
import Auth from "./Auth";
import Navbar from "../Navbar/Navbar";

const PerfilAutor = ({  setAuth, auth, fechAutores ,libros,setLibros}) => {
   const autorPerfil= JSON.parse(localStorage.getItem("autorPerfil"))
  const { nombre, imagen, descripcion, _id } = autorPerfil;

  return (
    <>
      {auth ? (
        <Auth setAuth={setAuth} />
      ) : (
        <Container fluid className="layout">
          <Navbar />
          <Container fluid >
            <div className="row usuar">
              <div className="col-4 ">
                {" "}
                <img src={imagen} className="avatar" />
              </div>
              <div className="col-8">
                {" "}
                <h3 className="text-asuar text-center">{nombre}</h3> <br />
                <h5 className="text-asuar text-center">{descripcion}</h5>
                <br />
                <h5 className="text-asuar text-center text-danger">
                  {" "}
                  <bold> </bold>{" "}
                </h5>
              </div>
            </div>

           
                <FormulariosAutores nombre={nombre} _id={_id} />
             
            <Row>
              <Col>
                <ListadoLibros libros={libros} setLibros={setLibros}  />
              </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default PerfilAutor;
