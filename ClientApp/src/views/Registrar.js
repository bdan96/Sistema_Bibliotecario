import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../assets/css/Registro.css';

import { useNavigate } from 'react-router-dom';

function Registrar(props) {

    const baseUrl = "http://localhost:5006/api/usuarios";
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
    //const registro = async () => {
    //    await axios.post(baseUrl, { nombre: form.nombre, apellido: form.apellido, nombreUsuario: form.nombreUsuario, fechaNacimiento: form.fechaNacimiento, sexo: form.sexo, email: form.email, contraseña: form.contraseña })
    //        .then(response => {
    //            return response.data;
    //        }).then(response => {
    //            if (response.length > 0) {
    //                var respuesta = response[0];
    //                navigate('/', { replace: true });
    //            } else {
    //                alert('El usuario no ha sido creado, revise los campos requeridos');
    //            }
    //        })
    //        .catch(error => {
    //            console.log(error);
    //        })
    //}
    useEffect(() => {
        if (cookies.get('id')) {
            navigate('/dashboard', { replace: true });
        }
    });

        return (
            <div className="registro-container">
                <div className="box">
                    <h5>Registro</h5>
                    <br />
                    <br />
                    <div className="inputs">
                        <label for="nombre">Nombres</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"                           
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <label>Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            name="apellido"                           
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombreUsuario"                            
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <label>Fecha de nacimiento</label>
                        <input
                            type="date"
                            className="form-control"
                            name="fechaNacimiento"
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <label>Sexo</label>
                        <select 
                            className="form-control"
                            name="sexo"
                            onChange={handleChange}
                            required
                        >
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                         </select>
                        <br />
                        <label>email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"                          
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="contraseña"                           
                            onChange={handleChange}
                            required
                        />
                        <br /><br />
                        <button className="boton">Registrarse</button>

                    </div>
                    <br /><br />
                    <p>Ya tienes cuenta? <a href="/">Inicia Sesion</a></p>
                    
                </div>
            </div>
        );
}

export default Registrar;
