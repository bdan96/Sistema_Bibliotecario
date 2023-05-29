using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;

namespace Sistema_Bibliotecario.Servicios.Contrato{ 
    public interface IUsuarioService
    {
        public Usuario CrearUsuario(Usuario usuario); 
        public void EditarUsuario(Usuario usuario); 
        public void EliminarUsuario(Usuario usuario); 
        public Usuario ObtenerUsuario(string correo, string clave); 
        public List<Usuario> ObtenerUsuarios(); 
    }
}                                                                                           