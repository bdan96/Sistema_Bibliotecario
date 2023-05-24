using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Carnet
    {
        public int IdCarnet { get; set; }
        public int? IdUsuario { get; set; }
        public DateTime? FechaVencimiento { get; set; }

        public virtual Usuario? IdUsuarioNavigation { get; set; }
    }
}
