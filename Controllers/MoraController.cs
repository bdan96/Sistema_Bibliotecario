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

        [Route("calcular")]

        [HttpGet]
        public IEnumerable getCalcularMora()
        {
            SqlConnection cnn = new SqlConnection("Data Source = localhost; Initial Catalog = BDBiblioteca; Integrated Security = True; Trusted_Connection = True");
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "insertMora";
            cnn.Open();
            SqlDataAdapter adapter2 = new SqlDataAdapter(cmd);
            DataTable dt2 = new DataTable();
            dt2.Clear();
            adapter2.Fill(dt2);
            cnn.Close();



            //DataTableSystemTextJson(dt);
            return DataTableSystemTextJson(dt2);


        }




        [HttpPost]
        [Route("guardar")]
        public async Task<IActionResult> Guardar([FromBody] Mora request)
        {
            await _dbcontext.Moras.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Mora request)
        {
            _dbcontext.Moras.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
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
