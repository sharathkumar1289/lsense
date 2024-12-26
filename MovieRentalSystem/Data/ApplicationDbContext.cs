using Microsoft.EntityFrameworkCore;
using MovieRentalSystem.Models;

namespace MovieRentalSystem
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Store> Stores { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<Address> Addresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Defining the relationships between Store, Staff, and Address
            modelBuilder.Entity<Store>()
                .HasOne(s => s.Manager)
                .WithMany()
                .HasForeignKey(s => s.ManagerStaffId)
                .OnDelete(DeleteBehavior.Restrict);  // Ensuring Manager cannot be deleted if associated with a store

            modelBuilder.Entity<Store>()
                .HasOne(s => s.Address)
                .WithMany()
                .HasForeignKey(s => s.AddressId)
                .OnDelete(DeleteBehavior.Cascade);  // When address is deleted, store will be deleted
        }
    }
}
