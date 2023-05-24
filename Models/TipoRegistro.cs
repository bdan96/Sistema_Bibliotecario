using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class TipoRegistro
    {
        public TipoRegistro()
        {
            RegistrosCostoIngresos = new HashSet<RegistrosCostoIngreso>();
        }

        public int IdTipoRegistro { get; set; }
        public string TipoRegistro1 { get; set; } = null!;

        public virtual ICollection<RegistrosCostoIngreso> RegistrosCostoIngresos { get; set; }
    }
}
