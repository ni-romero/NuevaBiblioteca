import React, { useState } from "react";

import Swal from "sweetalert2";
import axiosInstance from "../../util/axiosInstance";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";

import { Card ,Row , Col} from "react-bootstrap";


const Libro = ({ libro, libros, setLibros, index, fetchLibrosAll }) => {
   const { nombre, autor, genero, publicado, imagen, _id } = libro;

  console.log(libro)

  //mostrar form de edicion
  const mostrarFormEdic = (id) => {
    //   const {nombre,autor,genero,imagen}=libro

    mostarModal();
  };

  //Eliminar un libro por id
  const eliminar = (id) => () => {
    console.log(id);

    //seguro quieres borrar esto
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion no puede removerse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, eliminar libro!",
    }).then((result) => {
      if (result.value) {
        deleteLibro(id);

        Swal.fire("Elimnado!", "Tu libro fue eliminado con exito.", "success");
      }
    });
  };

  //elimnar libro
  const deleteLibro = async (id) => {
    const resultado = await axiosInstance.delete(`/libros/${id}`);
    console.log(resultado);
    fetchLibrosAll();
  };

  //modal
  const [visible, setVisible] = useState(false);

  const mostarModal = () => {
    setVisible({
      visible: true,
    });
  };

  return (
   

<Card className="cardAutor">
      <Card.Img variant="top" src={imagen}  className="imagenAutor" />
      <Card.Body className="cardBodyAutor">
        <Card.Title >{nombre}</Card.Title>
        <Card.Text>publicado: {publicado}</Card.Text>
        <Card.Text> genero:{genero}</Card.Text>
      
      </Card.Body>
    </Card>

  );
};
export default Libro;
