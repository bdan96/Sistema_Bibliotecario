using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class RegistrosCostoIngreso
    {
        public RegistrosCostoIngreso()
        {
            Moras = new HashSet<Mora>();
        }

        public int IdRegistro { get; set; }
        public int? IdTipoRegistro { get; set; }
        public decimal Monto { get; set; }
        public decimal Descripcion { get; set; }
        public DateTime FechaRegistro { get; set; }

        public virtual TipoRegistro? IdTipoRegistroNavigation { get; set; }
        public virtual ICollection<Mora> Moras { get; set; }
    }
}
