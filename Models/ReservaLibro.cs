using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class ReservaLibro
    {
        public ReservaLibro()
        {
            Prestamos = new HashSet<Prestamo>();
        }

        public int Idreservalibro { get; set; }
        public int? IdInvInst { get; set; }
        public int? IdPrestamo { get; set; }
        public int? IdUsuario { get; set; }
        public DateTime? FechaVencimientoreserva { get; set; }

        public virtual InvInstLibro? IdInvInstNavigation { get; set; }
        public virtual Prestamo? IdPrestamoNavigation { get; set; }
        public virtual Usuario? IdUsuarioNavigation { get; set; }
        public virtual ICollection<Prestamo> Prestamos { get; set; }
    }
}
