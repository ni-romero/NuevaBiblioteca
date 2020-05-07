import React, {useState,useEffect} from 'react';
import {  Form, Button  } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Auth = ({setAuth}) => {



let clave 
    const handleChange = e => {
        console.log(e.target.value)
        clave = e.target.value
    }
    const mostrarAdmin = () => {

         if(clave === "123456"){
            
            localStorage.setItem('Auth',JSON.stringify(false))
            setAuth(false)
            
         }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta',
                footer: 'Try again!'
              })
         }
        
    }
   
    const mostrarAuth = () => {
      let estado = JSON.parse(localStorage.getItem('Auth')) 
      if(estado === null){
        return
      }else{
        console.log(estado)
        setAuth(estado)
      }
      
    }

    mostrarAuth()
 

    return ( 
  
      <div className='fondo'>
          <div className='cajaInput'>
            <h2>Adminitrador</h2>
          <Form.Control type="password" placeholder="Ingrese clave" className="clave"  name ="clave" onChange={handleChange}/>
          <Button className="ingreso" type='button' onClick={mostrarAdmin}> Ingresar</Button>
          </div>
      </div>
    
     );
}
 
export default Auth;