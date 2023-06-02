using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class InvInstLibro
    {
        public InvInstLibro()
        {
            Prestamos = new HashSet<Prestamo>();
            ReservaLibros = new HashSet<ReservaLibro>();
        }

        public int IdInvInst { get; set; }
        public int? IdInstLibro { get; set; }
        public bool? Prestado { get; set; }

        public virtual InstanciaLibro? IdInstLibroNavigation { get; set; }
        public virtual ICollection<Prestamo> Prestamos { get; set; }
        public virtual ICollection<ReservaLibro> ReservaLibros { get; set; }
    }
}
