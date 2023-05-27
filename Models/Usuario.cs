using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Sistema_Bibliotecario.Models
{
    public partial class Usuario 
    {
        public Usuario()
        {
            Carnets = new HashSet<Carnet>();
            Prestamos = new HashSet<Prestamo>();
            Telefonos = new HashSet<Telefono>();
        }

        public int IdUsuario { get; set; }
        public int? IdTipoUsuario { get; set; }
        public bool Responsable { get; set; }
        public string NombreUsuario { get; set; } = null!;
        public string Contrasenia { get; set; } = null!;
        public string Nombres { get; set; } = null!;
        public string Apellidos { get; set; } = null!;
        public DateTime FechaNacimiento { get; set; }
        public string Correo { get; set; } = null!;
        public bool Estado { get; set; }
        public string Sexo { get; set; } = null!;

        public virtual TipoUsuario? IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Carnet> Carnets { get; set; }
        public virtual ICollection<Prestamo> Prestamos { get; set; }
        public virtual ICollection<Telefono> Telefonos { get; set; }
    }
}
