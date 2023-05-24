﻿using System;
using System.Collections.Generic;

namespace Sistema_Bibliotecario.Models
{
    public partial class InvInstLibro
    {
        public int IdInvInst { get; set; }
        public int? IdPrestamo { get; set; }
        public int? IdInstLibro { get; set; }
        public bool? Prestado { get; set; }

        public virtual InstanciaLibro? IdInstLibroNavigation { get; set; }
        public virtual Prestamo? IdPrestamoNavigation { get; set; }
    }
}