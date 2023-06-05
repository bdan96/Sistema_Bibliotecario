using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Sistema_Bibliotecario.Models;
//using System.Web.Http.Cors;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

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
        public List<string> Get()
        {
            var result = _context.Database.ExecuteSqlRaw("consultarReservas");

            return new List<string> {
                "Data1",
                "Data2"
            };

        }



    }
}