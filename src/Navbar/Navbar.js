import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Navegador = ({setAuth}) => {

    const cerrarAdmin = () =>{
        localStorage.setItem("Auth" , JSON.stringify(true))
        setAuth(true)
      }
    return (
        
            <Navbar bg="dark" variant="dark" expand="lg" className="navegador">
                <Navbar.Brand href="/">ReLibros</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Libros</Nav.Link>
                    <Nav.Link href="/admin">Autores</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={cerrarAdmin}><PowerSettingsNewIcon/></Button>
                </Form>
            </Navbar>


    );
}
export default Navegador