using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;

namespace Sistema_Bibliotecario.Controllers
{

    [ApiController]
    [Route("api/[controller]")]

    public class ReservaLibroController : ControllerBase
    {
        private readonly BDBibliotecaContext _dbcontext;

        public ReservaLibroController (BDBibliotecaContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("lista")]

        public async Task<ActionResult<List<ReservaLibro>>> Lista()
        {
            List<ReservaLibro> lista = await _dbcontext.ReservaLibros.OrderByDescending(c => c.Idreservalibro).ToListAsync();
            return lista;
        }
    }
}
