import React, { useState } from "react";

import { ListGroup } from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ListaAutores = ({ setAutorPerfil, autores, fecthLibrosAutor }) => {
  // traer los autores

  const autoresDatos = (autor) => {
    console.log(autor);
    setAutorPerfil(autor);
    
  };

  return (
    <>
      <ListGroup defaultActiveKey="0">
      <h3 style = {{ color: 'black', paddingTop:'5%' , textAlign:'center'}}>Autores</h3>
        {autores.map((autor, index) => (
          <ListGroup.Item
            action
            variant="dark"
            eventKey={`${index}`}
            key={index}
            onClick={() => autoresDatos(autor)}
          >< AccountCircleIcon />
            {autor.nombre}  
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaAutores;
