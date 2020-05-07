import React, { useState } from "react";

import Swal from "sweetalert2";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Form, Button, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import axiosInstance from "../util/axiosInstance";
import { useHistory } from "react-router-dom";

const FormularioCargarAutores = ({ setMostrarForm, nombre, _id }) => {
  let history = useHistory();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const [lista, setLista] = useState([]);

  const [libro, setLibro] = useState([]);

  let autor = nombre;
  let titulo;
  const handleChange = (e) => {
    titulo = e.target.value;

    
  };
  

  const postLibro = async (libro) => {
    const response = await axiosInstance.post("/libros", libro);
    console.log(response);
    if (response.data.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El libro ya existe !",
      });
    } else {
      swalWithBootstrapButtons
        .fire({
          title: "Libro agreago con exito",
          text: "Desea seguir agregando ?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "si, quiero ",
          cancelButtonText: "No!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.value) {
            return;
          } else {
            history.push("/admin");
          }
        });
    }
  };

  const cargarLibroEnAutor = (libro) => {
    const newLibro = {
      nombre: libro.title,
      genero: libro.categories[0],
      publicado: libro.publishedDate,
      imagen: libro.imageLinks.smallThumbnail,
      autor: _id,
    };
    console.log(newLibro);
    postLibro(newLibro);
  };

  const pedirLibro = ( titulo , autor) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${titulo}+inauthor:${autor}& key =AIzaSyB_cEtcr4DCpNdEkbMj2rWb6oPhhXQsXTQ`,
      { method: "GET" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        if (myJson === undefined) {
          return;
        } else {
          setLista(myJson.items);
          console.log(myJson.items);
        }
      });
  };

  // mostrar los datos del form

  const onFinish = (e) => {
    e.preventDefault();

    
   
   
     
    

     pedirLibro(titulo,autor);

    //ocultar form de cargar
    // setMostrarForm({
    //   estado: false,
    // });

    // Swal.fire({
    //   icon: "success",
    //   title: "Libro agregado con exito.",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  const cerrar = () => {
    setMostrarForm({
      estado: false,
    });
  };

  return (
    <>
      <Row gutter={[24, 16]}>
        <Col span={6} push={9} className="contenedorFormCarga">
          <h2>Agrega un libro</h2>
          <Form onSubmit={onFinish}>
            <Form.Group
              name="nombre"
              rules={[{ required: true, message: "Libro requerido" }]}
            >
              <Form.Control
                name="nombre"
                placeholder="Nombre libro"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              name="autor"
              rules={[{ required: true, message: "autor requerido" }]}
            >
              <Form.Control
                name="autor"
                placeholder="Autor"
                disabled
                value={autor}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" >
                Buscar
              </Button>
              <Button
                className="botonCerrar"
                onClick={cerrar}
                type="danger"
                style={{ marginLeft: 120 }}
              >
                X
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {lista !== []
          ? lista.map(({ volumeInfo }) => (
              <Col sx={3}>
                <Card style={{ width: 250, Height: "100px" , overflow:"hidden"}} className="tarjeta">
                  <Card.Img
                  className="imagenAutor"
                    variant="top"
                    src={volumeInfo.imageLinks.smallThumbnail}
                  />
                  <Card.Body>
                    <Card.Title>{volumeInfo.title}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Autor:{volumeInfo.authors}</ListGroupItem>
                      <ListGroupItem>
                        Año de publicacion : {volumeInfo.publishedDate}
                      </ListGroupItem>
                      <ListGroupItem>{`genero: ${volumeInfo.categories}`}</ListGroupItem>
                    </ListGroup>
                    <Button
                      style={{
                        width: "100",
                        marginLeft: "65px",
                        marginTop: "10px",
                      }}
                      onClick={() => cargarLibroEnAutor(volumeInfo)}
                    >
                      <CloudDownloadIcon style={{ fontSize: "25px" }} />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default FormularioCargarAutores;
