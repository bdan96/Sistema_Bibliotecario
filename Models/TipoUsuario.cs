using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class TipoUsuario : IdentityRole
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }
        public string TipoUsuario1 { get; set; } = null!;

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
