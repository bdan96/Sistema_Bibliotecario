using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
using Sistema_Bibliotecario.Servicios.Contrato;
using Sistema_Bibliotecario.Servicios.Implementacion;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("BibliotecaDBContextConnection") ?? throw new InvalidOperationException("Connection string 'BibliotecaDBContextConnection' not found.");

builder.Services.AddDbContext<Sistema_Bibliotecario.Data.BibliotecaDBContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddScoped<IUsuarioService, UsuarioService>();  

builder.Services.AddDefaultIdentity<Usuario>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<Sistema_Bibliotecario.Data.BibliotecaDBContext>();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Usuarios/IniciarSesion";
        options.AccessDeniedPath = "/Usuarios/IniciarSesion";
    });

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");//{controller=Usuario}/{action=IniciarSesion}/{id?}

app.MapFallbackToFile("index.html"); ;


app.Run();
