using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Sistema_Bibliotecario.Models;
//using System.Web.Http.Cors;
using Microsoft.AspNetCore.Cors;

namespace Sistema_Bibliotecario.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {


        private readonly ILogger<DashboardController> _logger;

        public DashboardController(ILogger<DashboardController> logger)
        {
            _logger = logger;
        }

        [EnableCors("Policy1")]
        //[DisableCors]

        [HttpGet]
        public List<string> Get()
        {

            return new List<string> {
                "Data1",
                "Data2"
            };

        }



    }
}