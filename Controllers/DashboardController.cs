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

            SqlConnection cnn = new SqlConnection("Data Source = localhost; Initial Catalog = BDBiblioteca; Integrated Security = True; Trusted_Connection = True");
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



            //DataTableSystemTextJson(dt);
            return DataTableSystemTextJson(dt);


        }

        [EnableCors("Policy1")]
        //[DisableCors]

        [Route("popular")]

        [HttpGet]
        public IEnumerable getPopular()
        {
            //string cnnString = System.Configuration.ConfigurationManager.ConnectionStrings["BibliotecaDBContextConnection"];



            SqlConnection cnn = new SqlConnection("Data Source = localhost; Initial Catalog = BDBiblioteca; Integrated Security = True; Trusted_Connection = True");
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "libroPopularPorCategoria";
            cnn.Open();
            SqlDataAdapter adapter1 = new SqlDataAdapter(cmd);
            DataTable dt1 = new DataTable();
            dt1.Clear();
            adapter1.Fill(dt1);
            cnn.Close();



            //DataTableSystemTextJson(dt);
            return DataTableSystemTextJson(dt1);


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