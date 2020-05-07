import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import Swal from "sweetalert2";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";

const Autor = ({ autor, setAutorPerfil, autorPerfil, fechAutores }) => {
  const { nombre, imagen, descripcion } = autor;

  const cargarPerfil = (autorPerfil) => {
    localStorage.setItem("autorPerfil",JSON.stringify(autorPerfil) )
    setAutorPerfil(autorPerfil);
  };

  const deleteAutor = async (id) => {
    const response = await axiosInstance.delete(`/autores/${id}`);
    console.log(response);
    fechAutores();
  };

  const borrarAutor = (id) => {
    //seguro quieres borrar esto
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion no puede removerse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, eliminar libro!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        deleteAutor(id);
        
        Swal.fire("Elimnado!", "Tu libro fue eliminado con exito.", "success");
      }
    });
   
    
  };

  return (
    <Card className="cardAutor">
      <Card.Img variant="top" src={imagen}  className="imagenAutor" />
      <Card.Body className="cardBodyAutor">
        <Card.Title >{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Row className="cardTitle">
          <Col
          >
            <DeleteOutlinedIcon
            className="botonDelete"
              key="delete"
              onClick={() => borrarAutor(autor._id)}
            />
          </Col>
          <Col className="bordesCard">
            <Link to="/autor-perfil">
              <EditIcon
                key="edit"
                onClick={() => {
                  cargarPerfil(autor);
                }}
              />
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Autor;
