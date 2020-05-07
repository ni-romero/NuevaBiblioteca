import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Auth from "./Auth";

import { Form, Button } from "react-bootstrap";
// import ListaAutoresAdmin from '../Admin/ListaAutoresAdmin';
import Navbar from "../Navbar/Navbar";
import ListaAutoresAdmin from "./ListaAutoresAdmin";

const Admin = ({
  autorPerfil,
  setAutorPerfil,
  autores,
  auth,
  setAuth,
  fechAutores,
}) => {
  const [searchAutor, setSearchAutor] = useState();
  const handleChange = (evt) => {
    setSearchAutor(evt);
  };

  const onsubmit = () => {
    console.log(searchAutor);

    setSearchAutor("");
  };

  return (
    <>
      {auth ? (
        <Auth setAuth={setAuth} />
      ) : (
        <div  style={{ width: "100%" }}>
          {/* <Header >ReLibros Administrador</Header> */}

          <Navbar setAuth={setAuth} />
          <Container style={{ height: "86vh" }}>
            <Row>
              <Col  style={{ textAlign: "center", color: "black" }}>
                <h2 className="letraAutor">Autores</h2>
              </Col>
            </Row>

            <Row>
              <Col
                
              >
                <Form.Control type="email" placeholder="Ingresa autor" />
              </Col>

              <Col >
                <Button
                  type="primary"
                  style={{ textAlign: "center" }}
                  onClick={onsubmit}
                >
                  Buscar
                </Button>
              </Col>
              <Col
                
              >
                <Button type="danger" href="/autor-nuevo">
                  Agregar Autor
                </Button>
              </Col>
            </Row>

            <Row
             
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              <ListaAutoresAdmin
                autorPerfil={autorPerfil}
                setAutorPerfil={setAutorPerfil}
                autores={autores}
                fechAutores={fechAutores}
              />
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Admin;
