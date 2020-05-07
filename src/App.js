import React , {useState, useEffect} from "react";

import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import "./style.css";
import Users from './Usuario/Users';
import Admin from './Admin/Admin';
import NuevoAutor from './Admin/NuevoAutor';
import PerfilAutor from './Admin/PerfilAutor';
import axiosInstance from './util/axiosInstance'


function App() {
  const [libros , setLibros ]= useState([])
  const [autores, setAutores] = useState([]);

  const [autorPerfil, setAutorPerfil] = useState("");

  //contrasena de admin : 123456
  const [auth, setAuth] = useState(true);

  const fechAutores = async () => {
    const response = await axiosInstance.get("/autores");
    console.log(response.data.autores);
    setAutores(response.data.autores);
  };

  useEffect(() => {
    fechAutores()

  }, [])

  const fecthLibrosAutor = async () => {

  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users
           autores={autores}
           autorPerfil={autorPerfil}
           setAutorPerfil={setAutorPerfil}
          />
        </Route>

        <Route path="/admin">
          <Admin
         auth={auth}
         autores={autores}
         setAuth={setAuth}
        autorPerfil={autorPerfil}
         setAutorPerfil={setAutorPerfil}
         fechAutores={fechAutores}
          />{" "}
        </Route>

        <Route path="/autor-perfil">
          <PerfilAutor
          fecthLibrosAutor={fecthLibrosAutor}
             auth={auth}
             setAuth={setAuth}
           autorPerfil={autorPerfil}
           setAutorPerfil={setAutorPerfil}
           libros={libros}
           setLibros={setLibros}
          />
        </Route>

        <Route path="/autor-nuevo">
          <NuevoAutor
           auth={auth}
           setAuth={setAuth}
           autorPerfil={autorPerfil}
          />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
