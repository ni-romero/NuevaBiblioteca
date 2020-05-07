import React from "react";
import Swal from "sweetalert2";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import {
  UserAddOutlined,
  UserOutlined,
  FieldNumberOutlined,
  FormOutlined,
} from "@material-ui/icons/PowerSettingsNew";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Auth from "../Admin/Auth";
import axiosInstance from "../util/axiosInstance";

const NuevoAutor = ({ setMostrarForm, auth, setAuth }) => {
  const cargarAutor = async (autor) => {
    const response = await axiosInstance.post("/autores", autor);
    console.log(response);
    if (response.data.message) {
      Swal.fire({
        icon: "error",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Autor creado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  //ocultar form de cargar
  const onFinish = (e) => {
    e.preventDefault();
    const nombre=e.target.nombre.value;
    const edad =e.target.edad.value;
    const descripcion=e.target.descripcion.value;
    const imagen = e.target.imagen.value
   
     const newAutor = { nombre, edad, descripcion, imagen };

     console.log(newAutor);

    cargarAutor(newAutor)

    //ocultar form de cargar
  };

  return (
    <>
      <Navbar />
      <Container fluid style={{ height: "83vh" }}>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Col xs={3}>
            <h3 style={{ textAlign: "center", paddingBottom: "15%" }}>
              Agregar un Autor
            </h3>
            <Form
              onSubmit={onFinish}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Form.Group controlId="Nombre">
                <Form.Control
                  type="text"
                  placeholder="Ingresa un nombre"
                  name="nombre"
                />
              </Form.Group>

              <Form.Group controlId="Edad">
                <Form.Control
                  type="text"
                  placeholder="Ingrese la edad"
                  name="edad"
                />
              </Form.Group>
              <Form.Group controlId="descripcion">
                <Form.Control
                  type="text"
                  placeholder="Ingresa una descripcion"
                  name="descripcion"
                />
              </Form.Group>
              <Form.Group controlId="imagen">
                <Form.Control
                  type="text"
                  placeholder="Ingresa una link de imagen"
                  name="imagen"
                />
              </Form.Group>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    size="sm"
                    className="mr-3"
                  >
                    Guardar
                  </Button>

                  <Button
                    variant="danger"
                    type="button"
                    size="sm"
                    href="/admin"
                  >
                    Cancelar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NuevoAutor;
