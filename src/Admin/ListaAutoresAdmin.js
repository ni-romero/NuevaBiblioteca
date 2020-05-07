import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import Autor from './Autor'

const ListaAutoresAdmin = ({setAutorPerfil,autorPerfil ,autores, fechAutores}) => {

 
    return ( 
        <>      
        { autores.length >= 0 ? autores.map( autor => ( 
        
        <Col xs={3} style={{margin:"3%"}}>
        <Autor 
        fechAutores={fechAutores}
        autor={autor}
        autorPerfil={autorPerfil}
        setAutorPerfil={setAutorPerfil}
        />
        </Col>
        )  
        ) : null  }
        </>
     );
}
 
export default ListaAutoresAdmin;