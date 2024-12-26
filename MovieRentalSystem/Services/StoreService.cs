using MovieRentalSystem.Models;
using MovieRentalSystem.Validators;
using FluentValidation;

namespace MovieRentalSystem.Services
{
    public interface IStoreService
    {
        Task AddStoreAsync(StoreDTO storeDto);
    }

    public class StoreService : IStoreService
    {
        private readonly ApplicationDbContext _context;
        private readonly IValidator<StoreDTO> _storeDtoValidator;

        public StoreService(ApplicationDbContext context, IValidator<StoreDTO> storeDtoValidator)
        {
            _context = context;
            _storeDtoValidator = storeDtoValidator;
        }

        public async Task AddStoreAsync(StoreDTO storeDto)
        {
            // Validate the StoreDTO
            var validationResult = await _storeDtoValidator.ValidateAsync(storeDto);

            if (!validationResult.IsValid)
            {
                // Handle validation failure (e.g., throw exception)
                throw new ValidationException(validationResult.Errors);
            }

            // Manually map the DTO to the Entity
            var store = new Store
            {
                ManagerStaffId = storeDto.ManagerStaffId,
                AddressId = storeDto.AddressId,
                LastUpdate = DateTime.UtcNow
            };

            // Add the new store to the database
            _context.Stores.Add(store);
            await _context.SaveChangesAsync();
        }
    }
}
