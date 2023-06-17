using Microsoft.AspNetCore.Mvc;

namespace Sistema_Bibliotecario.Controllers
{
    public class PrestamoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
