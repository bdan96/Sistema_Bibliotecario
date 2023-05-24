using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Idioma
    {
        public Idioma()
        {
            InstanciaLibros = new HashSet<InstanciaLibro>();
        }

        public int IdIdioma { get; set; }
        public string Idioma1 { get; set; } = null!;

        public virtual ICollection<InstanciaLibro> InstanciaLibros { get; set; }
    }
}
