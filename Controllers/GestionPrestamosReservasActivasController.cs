using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
using System.Data;
using static Sistema_Bibliotecario.Controllers.PrestamoController;

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
            List<Prestamo> lista = await _dbcontext.Prestamos.Include(m => m.IdInvInstNavigation).ThenInclude(lo => lo.IdInstLibroNavigation).Include(m => m.IdUsuarioNavigation).OrderByDescending(c => c.IdPrestamo).ToListAsync();
            return lista;

        }


        [HttpGet]
        [Route("listaReserva")]
        public async Task<ActionResult<List<ReservaLibro>>> ListaRer()
        {
            List<ReservaLibro> lista = await _dbcontext.ReservaLibros.Include(m => m.IdUsuarioNavigation).OrderBy(c => c.Idreservalibro).ToListAsync();
            return lista;

        }

        [HttpPost]
        public string Post([FromBody] TagViewModel variable)
        {

            //revisar credenciales porque no me funcionan
            //SqlConnection conexion = new SqlConnection("Server=DESKTOP-HOIS6DM\\SQLEXPRESS;Database=BDBiblioteca;Trusted_Connection=True;MultipleActiveResultSets=true");
            SqlConnection conexion = new SqlConnection("Data Source = localhost; Initial Catalog = BDBiblioteca; Integrated Security = True; Trusted_Connection = True");
            SqlCommand sentencia = new SqlCommand();

            //revisar nombres
            sentencia.Connection = conexion;
            sentencia.CommandType = System.Data.CommandType.StoredProcedure;
            sentencia.CommandText = "devolverLibro";


            sentencia.Parameters.Add("@usuario", SqlDbType.Int);
            sentencia.Parameters["@usuario"].Value = variable.usuario;

            sentencia.Parameters.Add("@id", SqlDbType.Int);
            sentencia.Parameters["@id"].Value = variable.libro;



            conexion.Open();

            SqlDataAdapter adapter = new SqlDataAdapter(sentencia);

            DataTable dt1 = new DataTable();
            dt1.Clear();

            adapter.Fill(dt1);

            conexion.Close();

            if (dt1.Rows.Count < 1)
            {

                return "error";
            }

            return "exito";
        }

    }
}
