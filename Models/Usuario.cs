using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Sistema_Bibliotecario.Models
{
    public partial class Usuario /*: IdentityUser*/
    {
        public Usuario()
        {
            Carnets = new HashSet<Carnet>();
            InvInstLibros = new HashSet<InvInstLibro>();
            Prestamos = new HashSet<Prestamo>();
            ReservaLibros = new HashSet<ReservaLibro>();
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
        public string? Avatar { get; set; }

        public virtual TipoUsuario? IdTipoUsuarioNavigation { get; set; }

        [JsonIgnore]
        public virtual ICollection<Carnet> Carnets { get; set; }
        [JsonIgnore]
        public virtual ICollection<InvInstLibro> InvInstLibros { get; set; }
        [JsonIgnore]
        public virtual ICollection<Prestamo> Prestamos { get; set; }
        [JsonIgnore]
        public virtual ICollection<ReservaLibro> ReservaLibros { get; set; }
        [JsonIgnore]
        public virtual ICollection<Telefono> Telefonos { get; set; }

        public string getFullName()
        {
            return Nombres + " " + Apellidos;
        }
    }
}
