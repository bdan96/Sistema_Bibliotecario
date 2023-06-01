using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Prestamo
    {
        public Prestamo()
        {
            InvInstLibros = new HashSet<InvInstLibro>();
            Moras = new HashSet<Mora>();
            ReservaLibros = new HashSet<ReservaLibro>();
        }

        public int IdPrestamo { get; set; }
        public int? Idreservalibro { get; set; }
        public int? IdUsuario { get; set; }
        public DateTime FechaEntrega { get; set; }
        public DateTime FechaPrestamo { get; set; }

        public virtual Usuario? IdUsuarioNavigation { get; set; }
        public virtual ReservaLibro? IdreservalibroNavigation { get; set; }
        public virtual ICollection<InvInstLibro> InvInstLibros { get; set; }
        public virtual ICollection<Mora> Moras { get; set; }
        public virtual ICollection<ReservaLibro> ReservaLibros { get; set; }
    }
}
