using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Models;
using Sistema_Bibliotecario.Servicios.Contrato;
using Sistema_Bibliotecario.Servicios.Implementacion;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    //AllowAnyHeader();
    options.AddPolicy("Policy1", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader();
    });

}
);
var connectionString = builder.Configuration.GetConnectionString("BibliotecaDBContextConnection");



builder.Services.AddDbContext<Sistema_Bibliotecario.Models.BDBibliotecaContext>(options =>
options.UseSqlServer(connectionString));

builder.Services.AddScoped<Sistema_Bibliotecario.Models.BDBibliotecaContext>();



builder.Services.AddScoped<IUsuarioService, UsuarioService>();


// Add services to the container.
builder.Services.AddTransient < UsuariosSeeder>();
builder.Services.AddControllersWithViews();

    var app = builder.Build();
if(args.Length == 1 && args[0].ToLower() == "seedusuarios")
{
    UsuariosSeeder(app);
}

void UsuariosSeeder(IHost app)
{
    var scopeFactory = app.Services.GetService<IServiceScopeFactory>();
    using (var scope = scopeFactory.CreateScope())
    {
        var seeder = scope.ServiceProvider.GetService<UsuariosSeeder>();
        seeder.seed();
    }
}


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");//{controller=Usuario}/{action=IniciarSesion}/{id?}

app.MapFallbackToFile("index.html"); ;


app.Run();
