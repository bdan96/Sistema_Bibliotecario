using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class InstanciaLibro
    {
        public InstanciaLibro()
        {
            InvInstLibros = new HashSet<InvInstLibro>();
        }

        public int IdInstLibro { get; set; }
        public int? IdLibro { get; set; }
        public int? IdIdioma { get; set; }
        public int? IdGenero { get; set; }
        public string? LogoLibro { get; set; }
        public string? AutorLibro { get; set; }
        public string? TituloLibro { get; set; }
        public decimal? Isbn { get; set; }
        public decimal? CantidadInstanciaLibro { get; set; }

        public virtual Genero? IdGeneroNavigation { get; set; }
        public virtual Idioma? IdIdiomaNavigation { get; set; }
        public virtual Catalogo? IdLibroNavigation { get; set; }
        public virtual ICollection<InvInstLibro> InvInstLibros { get; set; }
    }
}
