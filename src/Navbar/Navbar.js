import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Navegador = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">ReLibros</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Libros</Nav.Link>
                    <Nav.Link href="#pricing">Autores</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info"><PowerSettingsNewIcon/></Button>
                </Form>
            </Navbar>


        </>
    );
}
export default Navegador