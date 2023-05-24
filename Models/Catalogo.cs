using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Catalogo
    {
        public Catalogo()
        {
            InstanciaLibros = new HashSet<InstanciaLibro>();
        }

        public int IdLibro { get; set; }
        public int? IdCategoria { get; set; }
        public decimal? CantidadExistencia { get; set; }

        public virtual Categorium? IdCategoriaNavigation { get; set; }
        public virtual ICollection<InstanciaLibro> InstanciaLibros { get; set; }
    }
}
