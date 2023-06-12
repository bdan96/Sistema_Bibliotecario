import React, { useState, useEffect } from 'react';
import sha256 from 'js-sha256';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../assets/css/Login.css';
import logo from "Logo-Red.png";

function Login(props) {

 const baseUrl ="https://localhost:5006/api/usuarios";
const cookies = new Cookies();

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
          cookies.set('id', respuesta.IdUsuario, { path: '/' });
          cookies.set('TipoUsuario', respuesta.IdTipoUsuario)
          cookies.set('apellidos', respuesta.Apellidos, {path: '/'});
          cookies.set('nombre', respuesta.Nombres, {path: '/'});
          cookies.set('correo', respuesta.Correo, {path: '/'});
          cookies.set('username', respuesta.NombreUsuario, {path: '/'});
          cookies.set('password', respuesta.Contrasenia, {path: '/'});
          alert("Bienvenido: " + respuesta.NombreUsuario);
          props.history.push('/dashboard');
      }else{
        alert('El usuario o la contraseña no son correctos');
      }
    })
    
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
if(cookies.get('id')){
  props.history.push('/dashboard');
}
  },[]);

    return (
        <div className="login-container">
			<div class="box-form">
				<div class="left">
					<div class="overlay">
                        <h1>Sistema </h1>
                        <h1>Bibliotecario</h1>
                        <br />
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
						
					</div>
				</div>
				<div class="right">
					<h5>Iniciar Sesion</h5>
					<div class="inputs">
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