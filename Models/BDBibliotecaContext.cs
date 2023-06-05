using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Sistema_Bibliotecario.Models
{
    public partial class BDBibliotecaContext : DbContext
    {
        public BDBibliotecaContext()
        {
        }

        public BDBibliotecaContext(DbContextOptions<BDBibliotecaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Carnet> Carnets { get; set; } = null!;
        public virtual DbSet<Catalogo> Catalogos { get; set; } = null!;
        public virtual DbSet<Categorium> Categoria { get; set; } = null!;
        public virtual DbSet<Genero> Generos { get; set; } = null!;
        public virtual DbSet<Idioma> Idiomas { get; set; } = null!;
        public virtual DbSet<InstanciaLibro> InstanciaLibros { get; set; } = null!;
        public virtual DbSet<InvInstLibro> InvInstLibros { get; set; } = null!;
        public virtual DbSet<Mora> Moras { get; set; } = null!;
        public virtual DbSet<Prestamo> Prestamos { get; set; } = null!;
        public virtual DbSet<RegistrosCostoIngreso> RegistrosCostoIngresos { get; set; } = null!;
        public virtual DbSet<ReservaLibro> ReservaLibros { get; set; } = null!;
        public virtual DbSet<Telefono> Telefonos { get; set; } = null!;
        public virtual DbSet<TipoRegistro> TipoRegistros { get; set; } = null!;
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Carnet>(entity =>
            {
                entity.HasKey(e => e.IdCarnet)
                    .IsClustered(false);

                entity.ToTable("CARNET");

                entity.HasIndex(e => e.IdUsuario, "TIENE_UN_FK");

                entity.Property(e => e.IdCarnet).HasColumnName("ID_CARNET");

                entity.Property(e => e.FechaVencimiento)
                    .HasColumnType("datetime")
                    .HasColumnName("FECHA_VENCIMIENTO");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Carnets)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_CARNET_TIENE_UN_USUARIO");
            });

            modelBuilder.Entity<Catalogo>(entity =>
            {
                entity.HasKey(e => e.IdLibro)
                    .IsClustered(false);

                entity.ToTable("CATALOGO");

                entity.HasIndex(e => e.IdCategoria, "PERTENECE_2_FK");

                entity.Property(e => e.IdLibro).HasColumnName("ID_LIBRO");

                entity.Property(e => e.CantidadExistencia)
                    .HasColumnType("numeric(20, 0)")
                    .HasColumnName("CANTIDAD_EXISTENCIA");

                entity.Property(e => e.IdCategoria).HasColumnName("ID_CATEGORIA");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Catalogos)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK_CATALOGO_PERTENECE_CATEGORI");
            });

            modelBuilder.Entity<Categorium>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .IsClustered(false);

                entity.ToTable("CATEGORIA");

                entity.Property(e => e.IdCategoria).HasColumnName("ID_CATEGORIA");

                entity.Property(e => e.Categoria)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("CATEGORIA");
            });

            modelBuilder.Entity<Genero>(entity =>
            {
                entity.HasKey(e => e.IdGenero)
                    .IsClustered(false);

                entity.ToTable("GENERO");

                entity.Property(e => e.IdGenero).HasColumnName("ID_GENERO");

                entity.Property(e => e.NombreGenero)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_GENERO");
            });

            modelBuilder.Entity<Idioma>(entity =>
            {
                entity.HasKey(e => e.IdIdioma)
                    .IsClustered(false);

                entity.ToTable("IDIOMA");

                entity.Property(e => e.IdIdioma).HasColumnName("ID_IDIOMA");

                entity.Property(e => e.Idioma1)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("IDIOMA");
            });

            modelBuilder.Entity<InstanciaLibro>(entity =>
            {
                entity.HasKey(e => e.IdInstLibro)
                    .IsClustered(false);

                entity.ToTable("INSTANCIA_LIBRO");

                entity.HasIndex(e => e.IdLibro, "GENERALIZA_FK");

                entity.HasIndex(e => e.IdGenero, "PERTENECE_3_FK");

                entity.HasIndex(e => e.IdIdioma, "TIENE_2_FK");

                entity.Property(e => e.IdInstLibro).HasColumnName("ID_INST_LIBRO");

                entity.Property(e => e.AutorLibro)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("AUTOR_LIBRO");

                entity.Property(e => e.CantidadInstanciaLibro)
                    .HasColumnType("numeric(20, 0)")
                    .HasColumnName("CANTIDAD_INSTANCIA_LIBRO");

                entity.Property(e => e.IdGenero).HasColumnName("ID_GENERO");

                entity.Property(e => e.IdIdioma).HasColumnName("ID_IDIOMA");

                entity.Property(e => e.IdLibro).HasColumnName("ID_LIBRO");

                entity.Property(e => e.Isbn)
                    .HasColumnType("numeric(13, 0)")
                    .HasColumnName("ISBN");

                entity.Property(e => e.LogoLibro)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("LOGO_LIBRO");

                entity.Property(e => e.TituloLibro)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("TITULO_LIBRO");

                entity.HasOne(d => d.IdGeneroNavigation)
                    .WithMany(p => p.InstanciaLibros)
                    .HasForeignKey(d => d.IdGenero)
                    .HasConstraintName("FK_INSTANCI_PERTENECE_GENERO");

                entity.HasOne(d => d.IdIdiomaNavigation)
                    .WithMany(p => p.InstanciaLibros)
                    .HasForeignKey(d => d.IdIdioma)
                    .HasConstraintName("FK_INSTANCI_TIENE_2_IDIOMA");

                entity.HasOne(d => d.IdLibroNavigation)
                    .WithMany(p => p.InstanciaLibros)
                    .HasForeignKey(d => d.IdLibro)
                    .HasConstraintName("FK_INSTANCI_GENERALIZ_CATALOGO");
            });

            modelBuilder.Entity<InvInstLibro>(entity =>
            {
                entity.HasKey(e => e.IdInvInst)
                    .IsClustered(false);

                entity.ToTable("INV_INST_LIBRO");

                entity.HasIndex(e => e.IdInstLibro, "CONTIENE_FK");

                entity.HasIndex(e => e.IdUsuario, "QUIENTIENELIBRO_FK");

                entity.Property(e => e.IdInvInst).HasColumnName("ID_INV_INST");

                entity.Property(e => e.IdInstLibro).HasColumnName("ID_INST_LIBRO");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.Property(e => e.Prestado).HasColumnName("PRESTADO");

                entity.HasOne(d => d.IdInstLibroNavigation)
                    .WithMany(p => p.InvInstLibros)
                    .HasForeignKey(d => d.IdInstLibro)
                    .HasConstraintName("FK_INV_INST_CONTIENE_INSTANCI");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.InvInstLibros)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_INV_INST_QUIENTIEN_USUARIO");
            });

            modelBuilder.Entity<Mora>(entity =>
            {
                entity.HasKey(e => e.IdMora)
                    .IsClustered(false);

                entity.ToTable("MORA");

                entity.HasIndex(e => e.IdPrestamo, "GENERA_FK");

                entity.HasIndex(e => e.IdRegistro, "TIENE_FK");

                entity.Property(e => e.IdMora).HasColumnName("ID_MORA");

                entity.Property(e => e.Dias).HasColumnName("DIAS");

                entity.Property(e => e.IdPrestamo).HasColumnName("ID_PRESTAMO");

                entity.Property(e => e.IdRegistro).HasColumnName("ID_REGISTRO");

                entity.Property(e => e.PagoMora)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("PAGO_MORA");

                entity.Property(e => e.TotalMora)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("TOTAL_MORA");

                entity.HasOne(d => d.IdPrestamoNavigation)
                    .WithMany(p => p.Moras)
                    .HasForeignKey(d => d.IdPrestamo)
                    .HasConstraintName("FK_MORA_GENERA_PRESTAMO");

                entity.HasOne(d => d.IdRegistroNavigation)
                    .WithMany(p => p.Moras)
                    .HasForeignKey(d => d.IdRegistro)
                    .HasConstraintName("FK_MORA_TIENE_REGISTRO");
            });

            modelBuilder.Entity<Prestamo>(entity =>
            {
                entity.HasKey(e => e.IdPrestamo)
                    .IsClustered(false);

                entity.ToTable("PRESTAMO");

                entity.HasIndex(e => e.IdInvInst, "AGRUPA_FK");

                entity.HasIndex(e => e.IdUsuario, "REALIZA_FK");

                entity.HasIndex(e => e.Idreservalibro, "SE_CONVIERTE_FK");

                entity.Property(e => e.IdPrestamo).HasColumnName("ID_PRESTAMO");

                entity.Property(e => e.FechaEntrega)
                    .HasColumnType("datetime")
                    .HasColumnName("FECHA_ENTREGA");

                entity.Property(e => e.FechaPrestamo)
                    .HasColumnType("datetime")
                    .HasColumnName("FECHA_PRESTAMO");

                entity.Property(e => e.IdInvInst).HasColumnName("ID_INV_INST");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.Property(e => e.Idreservalibro).HasColumnName("IDRESERVALIBRO");

                entity.HasOne(d => d.IdInvInstNavigation)
                    .WithMany(p => p.Prestamos)
                    .HasForeignKey(d => d.IdInvInst)
                    .HasConstraintName("FK_PRESTAMO_AGRUPA_INV_INST");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Prestamos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_PRESTAMO_REALIZA_USUARIO");

                entity.HasOne(d => d.IdreservalibroNavigation)
                    .WithMany(p => p.Prestamos)
                    .HasForeignKey(d => d.Idreservalibro)
                    .HasConstraintName("FK_PRESTAMO_SE_CONVIE_RESERVA_");
            });

            modelBuilder.Entity<RegistrosCostoIngreso>(entity =>
            {
                entity.HasKey(e => e.IdRegistro)
                    .IsClustered(false);

                entity.ToTable("REGISTROS_COSTO_INGRESO");

                entity.HasIndex(e => e.IdTipoRegistro, "DIVIDEN_FK");

                entity.Property(e => e.IdRegistro).HasColumnName("ID_REGISTRO");

                entity.Property(e => e.Descripcion)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("DESCRIPCION");

                entity.Property(e => e.FechaRegistro)
                    .HasColumnType("datetime")
                    .HasColumnName("FECHA_REGISTRO");

                entity.Property(e => e.IdTipoRegistro).HasColumnName("ID_TIPO_REGISTRO");

                entity.Property(e => e.Monto)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("MONTO");

                entity.HasOne(d => d.IdTipoRegistroNavigation)
                    .WithMany(p => p.RegistrosCostoIngresos)
                    .HasForeignKey(d => d.IdTipoRegistro)
                    .HasConstraintName("FK_REGISTRO_DIVIDEN_TIPO_REG");
            });

            modelBuilder.Entity<ReservaLibro>(entity =>
            {
                entity.HasKey(e => e.Idreservalibro)
                    .IsClustered(false);

                entity.ToTable("RESERVA_LIBRO");

                entity.HasIndex(e => e.IdUsuario, "REALIZARESERVA_FK");

                entity.HasIndex(e => e.IdInvInst, "TIENEMUCHASRESERVAS_FK");

                entity.Property(e => e.Idreservalibro).HasColumnName("IDRESERVALIBRO");

                entity.Property(e => e.FechaVencimientoreserva)
                    .HasColumnType("datetime")
                    .HasColumnName("FECHA_VENCIMIENTORESERVA");

                entity.Property(e => e.IdInvInst).HasColumnName("ID_INV_INST");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.HasOne(d => d.IdInvInstNavigation)
                    .WithMany(p => p.ReservaLibros)
                    .HasForeignKey(d => d.IdInvInst)
                    .HasConstraintName("FK_RESERVA__TIENEMUCH_INV_INST");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.ReservaLibros)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_RESERVA__REALIZARE_USUARIO");
            });

            modelBuilder.Entity<Telefono>(entity =>
            {
                entity.HasKey(e => e.IdTelefono)
                    .IsClustered(false);

                entity.ToTable("TELEFONO");

                entity.HasIndex(e => e.IdUsuario, "POSEE_FK");

                entity.Property(e => e.IdTelefono).HasColumnName("ID_TELEFONO");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.Property(e => e.NumeroTelefono)
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("NUMERO_TELEFONO");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Telefonos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_TELEFONO_POSEE_USUARIO");
            });

            modelBuilder.Entity<TipoRegistro>(entity =>
            {
                entity.HasKey(e => e.IdTipoRegistro)
                    .IsClustered(false);

                entity.ToTable("TIPO_REGISTRO");

                entity.Property(e => e.IdTipoRegistro).HasColumnName("ID_TIPO_REGISTRO");

                entity.Property(e => e.TipoRegistro1)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TIPO_REGISTRO");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .IsClustered(false);

                entity.ToTable("TIPO_USUARIO");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("ID_TIPO_USUARIO");

                entity.Property(e => e.TipoUsuario1)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TIPO_USUARIO");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .IsClustered(false);

                entity.ToTable("USUARIO");

                entity.HasIndex(e => e.IdTipoUsuario, "PERTENECE_FK");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.Property(e => e.Apellidos)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("APELLIDOS");

                entity.Property(e => e.Avatar)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("AVATAR");

                entity.Property(e => e.Contrasenia)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CONTRASENIA");

                entity.Property(e => e.Correo)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("CORREO");

                entity.Property(e => e.Estado).HasColumnName("ESTADO");

                entity.Property(e => e.FechaNacimiento)
                    .HasColumnType("datetime")
                    .HasColumnName("FECHA_NACIMIENTO");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("ID_TIPO_USUARIO");

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE_USUARIO");

                entity.Property(e => e.Nombres)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRES");

                entity.Property(e => e.Responsable).HasColumnName("RESPONSABLE");

                entity.Property(e => e.Sexo)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("SEXO");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK_USUARIO_PERTENECE_TIPO_USU");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
