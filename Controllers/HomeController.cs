using Microsoft.AspNetCore.Mvc;

namespace Sistema_Bibliotecario.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
