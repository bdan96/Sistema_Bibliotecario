﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sistema_Bibliotecario.Models
{
    public partial class Mora
    {
        public int IdMora { get; set; }
        public int? IdRegistro { get; set; }

        /*[ForeignKey("Prestamo")]*/
        public int? IdPrestamo { get; set; }
        public int Dias { get; set; }
        public decimal TotalMora { get; set; }
        public decimal PagoMora { get; set; }


        public virtual Prestamo? IdPrestamoNavigation { get; set; }
        public virtual RegistrosCostoIngreso? IdRegistroNavigation { get; set; }
    }
}
