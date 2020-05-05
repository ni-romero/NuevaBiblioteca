import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'; 
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Footer =()=>{
    return(

  <Row className="futer">
    <Col sm >&copy; 2020 Powered by ThreeCoffees</Col>
    <Col sm>Three <LocalCafeIcon /> Coffees</Col>
    <Col sm><MailOutlineIcon/>contact@ThreeCoffees.com</Col>
  </Row>

    );
}

export default Footer