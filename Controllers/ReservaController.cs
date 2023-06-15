using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Sistema_Bibliotecario.Models;
using System.Data;

namespace Sistema_Bibliotecario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservaController : ControllerBase
    {
        public class TagViewModel
        {
            public int usuario { set; get; }
            public int libro { set; get; }
        }

        //cambiarlo
        private readonly BDBibliotecaContext _dBContext;

        private readonly ILogger<PrestamoController> _logger;
        public ReservaController(ILogger<PrestamoController> logger, BDBibliotecaContext context)
        {
            _dBContext = context;
            _logger = logger;
        }

        [EnableCors("Policy1")]
        [HttpPost]
        public string Post([FromBody] TagViewModel variable)
        {

            //revisar credenciales porque no me funcionan
            //SqlConnection conexion = new SqlConnection("Server=DESKTOP-HOIS6DM\\SQLEXPRESS;Database=BDBiblioteca;Trusted_Connection=True;MultipleActiveResultSets=true");
            SqlConnection conexion = new SqlConnection("Server=(localdb)\\mssqllocaldb;Database=BDBiblioteca;Trusted_Connection=True;MultipleActiveResultSets=true");
            SqlCommand sentencia = new SqlCommand();

            //revisar nombres
            sentencia.Connection = conexion;
            sentencia.CommandType = System.Data.CommandType.StoredProcedure;
            sentencia.CommandText = "insertReserva";

            sentencia.Parameters.Add("@usuario", SqlDbType.Int);
            sentencia.Parameters["@usuario"].Value = variable.usuario;

            sentencia.Parameters.Add("@libro", SqlDbType.Int);
            sentencia.Parameters["@libro"].Value = variable.libro;

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
