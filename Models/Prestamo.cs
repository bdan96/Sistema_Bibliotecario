using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class Prestamo
    {
        public Prestamo()
        {
            Moras = new HashSet<Mora>();
        }

        public int IdPrestamo { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdInvInst { get; set; }
        public int? Idreservalibro { get; set; }
        public DateTime FechaEntrega { get; set; }
        public DateTime FechaPrestamo { get; set; }

        public virtual InvInstLibro? IdInvInstNavigation { get; set; }
        public virtual Usuario? IdUsuarioNavigation { get; set; }
        public virtual ReservaLibro? IdreservalibroNavigation { get; set; }
        public virtual ICollection<Mora> Moras { get; set; }
    }
}
