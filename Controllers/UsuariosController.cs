using Microsoft.AspNetCore.Mvc;
using Sistema_Bibliotecario.Models;
using Sistema_Bibliotecario.Servicios.Contrato;
using Sistema_Bibliotecario.Recursos;

using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;


namespace Sistema_Bibliotecario.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly IUsuarioService _usuarioService;

        public UsuariosController(IUsuarioService usuarioService)
        {
            this._usuarioService = usuarioService;
        }

        public IActionResult Registrarse()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Registrarse(Usuario user)
        {
            user.Contrasenia = Utilidades.EncriptarClave(user.Contrasenia);
            user.IdTipoUsuario = 3;
            Usuario usuarioCreado = _usuarioService.CrearUsuario(user);
            if (usuarioCreado.IdUsuario > 0)
            {
                return RedirectToAction("IniciarSesion");
            }
            else
            {
                ViewData["Mensaje"]="Error al crear el usuario";
                return View();
            }
           
        }

        public IActionResult IniciarSesion()
        {
            return View();
        }

        [HttpPost]
        public IActionResult IniciarSesion(string correo, string clave)
        {
            Usuario usuario_encontrado = _usuarioService.ObtenerUsuario(correo, Utilidades.EncriptarClave(clave));
            if (usuario_encontrado != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, usuario_encontrado.Correo),
                    new Claim(ClaimTypes.Role, usuario_encontrado.IdTipoUsuario.ToString())
                };
                var claimsIdentity = new ClaimsIdentity(
                                       claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var authProperties = new AuthenticationProperties
                {
                    AllowRefresh = true,
                    // Refreshing the authentication session should be allowed.
                    ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
                    // The time at which the authentication ticket expires. A 
                    // value set here overrides the ExpireTimeSpan option of 
                    // CookieAuthenticationOptions set with AddCookie.
                    //IsPersistent = true,
                    // Whether the authentication session is persisted across 
                    // multiple requests. When used with cookies, controls
                    // whether the cookie's lifetime is absolute (matching the
                    // lifetime of the authentication ticket) or session-based.
                    //IssuedUtc = <DateTimeOffset>,
                    // The time at which the authentication ticket was issued.
                    //RedirectUri = <string>
                    // The full path or absolute URI to be used as an http 
                    // redirect response value.
                };
                HttpContext.SignInAsync(
                                       CookieAuthenticationDefaults.AuthenticationScheme,
                                                          new ClaimsPrincipal(claimsIdentity),
                                                                             authProperties);
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewData["Mensaje"] = "Usuario o contraseña incorrectos";
                return View();
            }
        }
    }
}                                                                                                                                        