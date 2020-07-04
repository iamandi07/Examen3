using Examen3.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examen3.Context
{
    public class ExamenDbContext2 : IdentityDbContext
    {
        public ExamenDbContext2(DbContextOptions<ExamenDbContext2> options)
            : base(options)
        {

        }

        public DbSet<Person> Persons { get; set; }
        public DbSet<InspectionPlan> InspectionPlans { get; set; }
        public DbSet<Equipment> Equipments { get; set; }
        public DbSet<Calibration> Calibrations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Person>().HasKey(person => person.Id);
            modelBuilder.Entity<InspectionPlan>().HasKey(inspectionPlan => inspectionPlan.Id);
            modelBuilder.Entity<Equipment>().HasKey(equipment => equipment.Id);

            modelBuilder.Entity<InspectionPlan>()
                .HasOne(f => f.Person)
                .WithMany(f => f.InspectionPlans)
                .HasForeignKey(person => person.PersonId);

            modelBuilder.Entity<Calibration>()
                .HasKey(sc => new { sc.PersonId, sc.EquipmentId });
        }
    }
 }

