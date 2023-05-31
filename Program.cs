using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Sistema_Bibliotecario.Areas.Identity.Data;
using Sistema_Bibliotecario.Data;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
    {

        options.AddPolicy("Policy1", policy =>
        {
            policy.AllowAnyOrigin();
        });

    }
);

var connectionString = builder.Configuration.GetConnectionString("BibliotecaDBContextConnection") ?? throw new InvalidOperationException("Connection string 'BibliotecaDBContextConnection' not found.");

builder.Services.AddDbContext<BibliotecaDBContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddDefaultIdentity<User>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<BibliotecaDBContext>();

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();
app.UseCors();



app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;
app.UseAuthentication(); ;

app.Run();
