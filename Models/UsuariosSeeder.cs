using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using Sistema_Bibliotecario.Recursos;

namespace Sistema_Bibliotecario.Models
{
    public class UsuariosSeeder
    {     
        private readonly BDBibliotecaContext _context;

        public UsuariosSeeder(BDBibliotecaContext context) { 
            _context = context;
        }

        public void seed()
        {
            
                var tipoUsuario = new List<TipoUsuario>
                {
                    new TipoUsuario
                    {
                       
                        TipoUsuario1 = "Administrador"
                        
                    },
                    new TipoUsuario
                    {
                       
                        TipoUsuario1 = "Bibliotecario"
                       
                    },
                    new TipoUsuario
                    {
                       
                        TipoUsuario1 = "Estudiante"
                        
                    }
                };
                var Usuarios = new List<Usuario>
                {
                    new Usuario
                    {                       
                        IdTipoUsuario = 1,
                        Responsable = true,
                        NombreUsuario = "admin",
                        Contrasenia = Utilidades.EncriptarClave("123456"),
                        Nombres = "admin",
                        Apellidos = "admin",
                        FechaNacimiento = DateTime.Now,
                        Correo = "admin@test.com",
                        Estado = true,
                        Sexo = "M",

                    },
                    new Usuario
                    {
                        IdTipoUsuario = 2,
                        Responsable = true,
                        NombreUsuario = "Bibliotecario",
                        Contrasenia = Utilidades.EncriptarClave("123456"),
                        Nombres = "Bibliotecario",
                        Apellidos = "Bibliotecario",
                        FechaNacimiento = DateTime.Now,
                        Correo = "bibliotecario@test.com",
                        Estado = true,
                        Sexo = "M",
                    },
                    new Usuario
                    {                        
                        IdTipoUsuario = 3,
                        Responsable = true,
                        NombreUsuario = "Estudiante",
                        Contrasenia = Utilidades.EncriptarClave("123456"),
                        Nombres = "Estudiante",
                        Apellidos = "Estudiante",
                        FechaNacimiento = DateTime.Now,
                        Correo = "user@test.com",
                        Estado = true,
                        Sexo = "M",
                    }
                };

                _context.AddRange(tipoUsuario);
                _context.AddRange(Usuarios);
                _context.SaveChanges();
                
          }
        
    }                                                                               
}