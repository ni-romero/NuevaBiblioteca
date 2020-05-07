import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Formulario from "./Libreria/Formulario";

import ListaAutores from "./Libreria/ListAutores";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListadoLibros from "./Libreria/ListadoLibros";

import axiosInstance from "../util/axiosInstance";

const Users = ({ autores, autorPerfil, setAutorPerfil }) => {
  //STATES lIBROS INFORMACION
  const [libros, setLibros] = useState([]);

 
  const fecthLibrosAutor = async () => {
const autor = autorPerfil._id

  const response = await axiosInstance.get(`/libros/${autor}` )
  console.log(response.data.libros);
  setLibros(response.data.libros)
  }  
  
useEffect(()=>{
  fecthLibrosAutor()
},[autorPerfil])


  //Traer datos del servidor
  const fetchLibrosNombre = async (nombre) => {


    const resultado = await axiosInstance.get(`/libros/${nombre}`)
    const respuesta = resultado.data.libros;
    console.log(respuesta)

    if (respuesta.length === 0) {
      Swal.fire({
        title: 'Libro no encontrado .Por favor busca otro.',
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        }
      })

    } else {
      setLibros(respuesta);
    }


  };







  const fetchLibrosAll = async () => {

    const resultado = await axiosInstance.get(`/libros`)

    // const resultado = await axiosInstance.get("/libros", body);
    console.log(resultado.data.libros)
    setLibros(resultado.data.libros);

  };

  //State
  const [mostLista, setMostLista] = useState(false);

  //mostrar Lista
  const mostrarLista = () => {
    setMostLista(true);
  };
  //ocultar lista
  const ocultarLista = () => {
    setMostLista(false);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Navbar />
        </Row>

        {/* sidebar y body */}
        <Row>
          <Col
            xs={3}
            className="bordes"
            style={{
              height: "90vh",
              left: 0,
              borderRight: "1px black solid",
            }}
          >
            <ListaAutores
              fecthLibrosAutor={fecthLibrosAutor}
              autores={autores}
              setAutorPerfil={setAutorPerfil}
            />
          </Col>

          <Col xs={9}>
            <Container style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div style={{ padding: 24, minHeight: 400, textAlign: "center" }}>
                {autorPerfil === "" ? null : (
                  <>
                    <Row>
                      <div className="row usuar">
                        <div className="col-4">
                          {" "}
                          <img src={autorPerfil.imagen} className="avatar" />
                        </div>
                        <div className="col-8">
                          {" "}
                          <h3 className="text-asuar text-center">
                            {autorPerfil.nombre}
                          </h3>{" "}
                          <br />
                          <h5 className="text-asuar text-center">
                            {autorPerfil.descripcion}{" "}
                          </h5>
                          <br />
                          <h4 className="text-asuar text-center text-danger">
                            {" "}
                            <bold> Libros : {libros.length}</bold>{" "}
                          </h4>
                        </div>
                      </div>
                    </Row>

                    <Row>
                      <Col xs={12}>
                        <Formulario
                        fetchLibrosNombre={fetchLibrosNombre}
                          setLibros={setLibros}
                          mostrarLista={mostrarLista}
                          ocultarLista={ocultarLista}
                          libros={libros}
                          fetchLibrosAll={fetchLibrosAll}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12}>
                        {mostLista && libros !== null ? (
                          <ListadoLibros
                            libros={libros}
                            setLibros={setLibros}
                            fetchLibrosAll={fetchLibrosAll}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            </Container>
          </Col>
        </Row>

        {/* footer*/}
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
