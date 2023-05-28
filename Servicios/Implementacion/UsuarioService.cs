using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
using Sistema_Bibliotecario.Servicios.Contrato;

namespace Sistema_Bibliotecario.Servicios.Implementacion{
    public class UsuarioService : IUsuarioService
    {
        private readonly BibliotecaDBContext _context;
        public UsuarioService(BibliotecaDBContext context)
        {
            _context = context;
        }
        public Usuario CrearUsuario(Usuario usuario)
        {
            _context.Add(usuario);
            _context.SaveChanges();
            return usuario;
        }
        public void EditarUsuario(Usuario usuario)
        {
            _context.Update(usuario);
            _context.SaveChanges();
        }
        public void EliminarUsuario(Usuario usuario)
        {
            _context.Remove(usuario);
            _context.SaveChanges();
        }
        public Usuario ObtenerUsuario(string correo, string clave)
        {
            return _context.Usuarios.FirstOrDefault(u => u.Correo == correo && u.Contrasenia == clave);
        }

        public List<Usuario> ObtenerUsuarios()
        {
            return _context.Usuarios.ToList();
        }
    }
}                                                                                       