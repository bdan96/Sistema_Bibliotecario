using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;

namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class InstanciaLibroController : ControllerBase

    {

        private readonly BDBibliotecaContext _dbcontext;

        public InstanciaLibroController(BDBibliotecaContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("lista")]
        public async Task<ActionResult<List<InstanciaLibro>>> Lista()
        {
            List<InstanciaLibro> lista = await _dbcontext.InstanciaLibros.OrderByDescending(c => c.IdInstLibro).ToListAsync();
            return lista;

        }

        [HttpPost]
        [Route("guardar")]
        public async Task<IActionResult> Guardar([FromBody] InstanciaLibro request)
        {


            _dbcontext.InstanciaLibros.Add(request);
            _dbcontext.SaveChanges();

            for (int i = 0; i < request.CantidadInstanciaLibro; i++)
            {
                InvInstLibro Inventario = new InvInstLibro();
                Inventario.IdInstLibroNavigation = request;
                Inventario.Prestado = false;
                _dbcontext.InvInstLibros.Add(Inventario);
            }

             _dbcontext.SaveChanges();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] InstanciaLibro request)
        {
            _dbcontext.InstanciaLibros.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            InstanciaLibro instanciaLibro = _dbcontext.InstanciaLibros.Find(id);
            _dbcontext.InstanciaLibros.Remove(instanciaLibro);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }
    }
}
