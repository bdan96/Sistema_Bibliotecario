import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../assets/css/Login.css';
import logo from "Logo-Red.png";
import { useNavigate } from 'react-router-dom';


function Login(props) {

 const baseUrl ="http://localhost:5006/api/usuarios";
    const cookies = new Cookies();
    const navigate = useNavigate();

const [form, setForm]=useState({
  username:'',
  password: ''
});
  const handleChange=e=>{
 const {name, value} = e.target;
 setForm({
   ...form,
   [name]: value
 });
  }

  const iniciarSesion=async()=>{
    await axios.get(baseUrl+`/${form.email}/${form.password}`)
    .then(response=>{
        return response.data;
    }).then(response=>{
      if(response.length>0){
       var respuesta=response[0];
          cookies.set('id', respuesta.idUsuario, { path: '/' });
          cookies.set('TipoUsuario', respuesta.idTipoUsuario, { path: '/' });
          cookies.set('apellidos', respuesta.apellidos, {path: '/'});
          cookies.set('nombre', respuesta.nombres, {path: '/'});
          cookies.set('correo', respuesta.correo, {path: '/'});
          cookies.set('username', respuesta.nombreUsuario, { path: '/' });
          navigate('/dashboard', { replace: true });
        

      }else{
          alert('El usuario o la contraseña no son correctos');
      }
    })
    
    .catch(error=>{
      console.log(error);
    })
  }
    useEffect(() => {
        if (cookies.get('id')) {
            navigate('/dashboard', { replace: true });
        }
    });

    return (
        <div className="login-container">
			<div className="box-form">
				<div className="left">
					<div className="overlay">
                        <h1>Sistema </h1>
                        <h1>Bibliotecario</h1>
                        <br />
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
						
					</div>
				</div>
				<div className="right">
					<h5>Iniciar Sesion</h5>
					<div className="inputs">
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Correo electrónico"
                            onChange={handleChange}
                            required
                        />
                        <br/>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Contraseña"
                            onChange={handleChange}
                            required
                        />
					</div>
                    <br /><br />
                    <button onClick={() => iniciarSesion()} >Iniciar Sesion</button>
                    <br /><br /><br /><br />
                    <p>No tienes cuenta? <a href="/registrar">Registro</a></p>
				</div>
			</div>
        </div>
    );
  
}

export default Login;