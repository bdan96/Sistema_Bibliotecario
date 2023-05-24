using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Categorium
    {
        public Categorium()
        {
            Catalogos = new HashSet<Catalogo>();
        }

        public int IdCategoria { get; set; }
        public string Categoria { get; set; } = null!;

        public virtual ICollection<Catalogo> Catalogos { get; set; }
    }
}
