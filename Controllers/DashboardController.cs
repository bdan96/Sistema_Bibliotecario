using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Sistema_Bibliotecario.Models;
//using System.Web.Http.Cors;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.CodeAnalysis.Scripting;
using System.Collections;

namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {


        private readonly ILogger<DashboardController> _logger;

        private readonly BDBibliotecaContext _context;

        public DashboardController(ILogger<DashboardController> logger, BDBibliotecaContext context)
        {
            _logger = logger;
            _context = context;
        }

        [EnableCors("Policy1")]
        //[DisableCors]



        [HttpGet]
        public IEnumerable Get()
        {
            //string cnnString = System.Configuration.ConfigurationManager.ConnectionStrings["BibliotecaDBContextConnection"];



            SqlConnection cnn = new SqlConnection("Data Source = DESKTOP-HOIS6DM\\SQLEXPRESS; Initial Catalog = BDBiblioteca; Integrated Security = True; Trusted_Connection = True");
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "getLibrosNuevos";
            cnn.Open();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            dt.Clear();
            adapter.Fill(dt);
            cnn.Close();
            //var das = dt.AsEnumerable();

            //string serialice = JsonSerializer.Serialize(das);

            return DataTableSystemTextJson(dt);


        }

        //public static string DataTableSystemTextJson(DataTable dataTable)
        public static IEnumerable DataTableSystemTextJson(DataTable dataTable)
        {
            /*if (dataTable == null)
            {
                //return string.Empty;
                return new IEnumerable();
            }*/
            var data = dataTable.Rows.OfType<DataRow>()
                        .Select(row => dataTable.Columns.OfType<DataColumn>()
                            .ToDictionary(col => col.ColumnName, c => row[c]));
            //return System.Text.Json.JsonSerializer.Serialize(data);
            return data;
        }



    }
}