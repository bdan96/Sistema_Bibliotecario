using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Genero
    {
        public Genero()
        {
            InstanciaLibros = new HashSet<InstanciaLibro>();
        }

        public int IdGenero { get; set; }
        public string NombreGenero { get; set; } = null!;

        public virtual ICollection<InstanciaLibro> InstanciaLibros { get; set; }
    }
}
