using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
using Microsoft.Data.SqlClient;
using System.Collections;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.CodeAnalysis.Scripting;
using System.Data;

namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class MoraController : ControllerBase
    {

        public class TagViewModel
        {
            public int usuario { set; get; }
            public int prestamo { set; get; }
        }
        private readonly BDBibliotecaContext _dbcontext;

        public MoraController(BDBibliotecaContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("lista")]
        public async Task<ActionResult<List<Mora>>> Lista()
        {
            List<Mora> lista = await _dbcontext.Moras.Include(m => m.IdPrestamoNavigation).ThenInclude(m => m.IdUsuarioNavigation).OrderBy(c => c.IdMora).ToListAsync();
            /*List<Mora> lista = await _dbcontext.Moras.Include("IdPrestamoNavigation").ToListAsync();*/
            return lista;

        }

        /*[HttpPost]
        public string Post([FromBody] TagViewModel variable)
        {

            //revisar credenciales porque no me funcionan
            //SqlConnection conexion = new SqlConnection("Server=DESKTOP-HOIS6DM\\SQLEXPRESS;Database=BDBiblioteca;Trusted_Connection=True;MultipleActiveResultSets=true");
            SqlConnection conexion = new SqlConnection("Data Source = localhost; Initial Catalog = BDBiblioteca; Integrated Security = True; Trusted_Connection = True");
            SqlCommand sentencia = new SqlCommand();

            //revisar nombres
            sentencia.Connection = conexion;
            sentencia.CommandType = System.Data.CommandType.StoredProcedure;
            sentencia.CommandText = "insertMora";


            sentencia.Parameters.Add("@prestamo", SqlDbType.Int);
            sentencia.Parameters["@prestamo"].Value = variable.prestamo;

            sentencia.Parameters.Add("@usuario", SqlDbType.Int);
            sentencia.Parameters["@usuario"].Value = variable.usuario;

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
        }*/




        [HttpPost]
        [Route("guardar")]
        public async Task<IActionResult> Guardar([FromBody] Mora request)
        {
            await _dbcontext.Moras.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("editar")]
        public async Task<IActionResult> Editar([FromBody] Mora request)
        {
            _dbcontext.Moras.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Mora mora1 = _dbcontext.Moras.Find(id);
            _dbcontext.Moras.Remove(mora1);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        public static IEnumerable DataTableSystemTextJson(DataTable dataTable)
        {
            var data = dataTable.Rows.OfType<DataRow>()
                        .Select(row => dataTable.Columns.OfType<DataColumn>()
                            .ToDictionary(col => col.ColumnName, c => row[c]));
            return data;
        }
    }
}
