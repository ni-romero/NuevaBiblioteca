import React from 'react';
import logo from './logo.svg';
import './style.css';
import Navegador from './Navbar/Navbar';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navegador/>
     <Footer/>
    </div>
  );
}

export default App;
