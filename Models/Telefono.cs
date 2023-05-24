using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Telefono
    {
        public int IdTelefono { get; set; }
        public int? IdUsuario { get; set; }
        public string NumeroTelefono { get; set; } = null!;

        public virtual Usuario? IdUsuarioNavigation { get; set; }
    }
}
