using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using MovieRentalSystem;
using MovieRentalSystem.Services;
using FluentValidation;
using MovieRentalSystem.Models;
using MovieRentalSystem.Validators;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure the DbContext with your connection string
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Register FluentValidation services
builder.Services.AddValidatorsFromAssemblyContaining<StoreDTOValidator>();

// Register the StoreService and IStoreService for Dependency Injection
builder.Services.AddScoped<IStoreService, StoreService>();

// Add Swagger for API documentation (optional, can be useful for testing)
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
