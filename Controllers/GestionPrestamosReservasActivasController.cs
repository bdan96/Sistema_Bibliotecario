﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;

namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class GestionPrestamosReservasActivasController : ControllerBase
    {
        private readonly BDBibliotecaContext _dbcontext;

        public GestionPrestamosReservasActivasController(BDBibliotecaContext context)
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