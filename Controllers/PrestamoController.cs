using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
﻿using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Sistema_Bibliotecario.Models;
using System.Data;

namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class PrestamoController : ControllerBase
    {
        private readonly BDBibliotecaContext _dbcontext;

        public PrestamoController (BDBibliotecaContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("lista")]

        public async Task<ActionResult<List<Prestamo>>> Lista()
        {
            List<Prestamo> lista = await _dbcontext.Prestamos.OrderByDescending(c => c.IdPrestamo).ToListAsync();
            return lista;

        }

    }
}
