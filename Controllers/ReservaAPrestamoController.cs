using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
using System.Data;


namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ReservaAPrestamoController : ControllerBase

    {
        public class TagViewModel
        {
            public int usuario { set; get; }
            public int reserva { set; get; }
        }


        private readonly BDBibliotecaContext _dbcontext;

        public ReservaAPrestamoController(BDBibliotecaContext context)
        {
            _dbcontext = context;
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
            sentencia.CommandText = "pasarReservaAPrestamo";

            sentencia.Parameters.Add("@reserva", SqlDbType.Int);
            sentencia.Parameters["@reserva"].Value = variable.reserva;

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
        }

    }
}
