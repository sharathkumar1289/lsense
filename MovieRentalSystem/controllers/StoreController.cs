using FilmRentalStore.DTO;
using FilmRentalStore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmRentalStore.Services
{
    public class StoreRepository : IStoreRepository
    {
        private readonly Sakila12Context _context;

        public StoreRepository(Sakila12Context context)
        {
            _context = context;
        }

        // Add a new Store
        public async Task AddStore(StoreDTO storeDto)
        {
            var store = new Store
            {
                ManagerStaffId = storeDto.ManagerStaffId,
                AddressId = storeDto.AddressId,
                LastUpdate = DateTime.UtcNow
            };

            _context.Stores.Add(store);
            await _context.SaveChangesAsync();
        }

        // Assign Address to a Store
        public async Task AssignAddress(int storeId, AddressDTO addressDto)
        {
            var store = await _context.Stores.FindAsync(storeId);
            if (store == null)
                throw new KeyNotFoundException("Store not found");

            var address = new Address
            {
                Address1 = addressDto.Address1,
                Address2 = addressDto.Address2,
                District = addressDto.District,
                CityId = addressDto.CityId,
                PostalCode = addressDto.PostalCode,
                Phone = addressDto.Phone,
                LastUpdate = DateTime.UtcNow
            };

            _context.Addresses.Add(address);
            await _context.SaveChangesAsync();

            store.AddressId = address.AddressId;
            store.LastUpdate = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        // Get Stores by City
        public async Task<List<StoreDTO>> GetStoreByCity(string city)
        {
            return await _context.Stores
                .Include(s => s.Address)
                .ThenInclude(a => a.City)
                .Where(s => s.Address.City.Name == city)
                .Select(s => new StoreDTO
                {
                    StoreId = s.StoreId,
                    AddressId = s.AddressId,
                    ManagerStaffId = s.ManagerStaffId,
                    LastUpdate = s.LastUpdate
                })
                .ToListAsync();
        }

        // Get Stores by Country
public async Task<List<StoreDTO>> GetStoreByCountry(string country)
{
    return await (from store in _context.Stores
                  join address in _context.Addresses on store.AddressId equals address.AddressId
                  join city in _context.Cities on address.CityId equals city.CityId
                  join countryEntity in _context.Countries on city.CountryId equals countryEntity.CountryId
                  where countryEntity.Name == country
                  select new StoreDTO
                  {
                      StoreId = store.StoreId,
                      AddressId = store.AddressId,
                      ManagerStaffId = store.ManagerStaffId,
                      LastUpdate = store.LastUpdate
                  }).ToListAsync();
}



        // Get Store by Phone
        public async Task<StoreDTO> GetStoreByPhone(string phone)
        {
            var store = await _context.Stores
                .Include(s => s.Address)
                .FirstOrDefaultAsync(s => s.Address.Phone == phone);

            if (store == null)
                throw new KeyNotFoundException("Store not found");

            return new StoreDTO
            {
                StoreId = store.StoreId,
                AddressId = store.AddressId,
                ManagerStaffId = store.ManagerStaffId,
                LastUpdate = store.LastUpdate
            };
        }


        // Update Store Phone
        public async Task UpdateStorePhone(int storeId, string phone)
        {
            var store = await _context.Stores.Include(s => s.Address).FirstOrDefaultAsync(s => s.StoreId == storeId);
            if (store == null)
                throw new KeyNotFoundException("Store not found");

            store.Address.Phone = phone;
            store.LastUpdate = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        // Assign Manager to a Store
        public async Task AssignManager(int storeId, int managerId)
        {
            var store = await _context.Stores.FindAsync(storeId);
            if (store == null)
                throw new KeyNotFoundException("Store not found");

            store.ManagerStaffId = managerId;
            store.LastUpdate = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        // Get Staff of a Store
        public async Task<List<StaffDTO>> GetStaffOfStore(int storeId)
        {
            return await _context.Staff
                .Where(s => s.StoreId == storeId)
                .Select(s => new StaffDTO
                {
                    StaffId = s.StaffId,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Email = s.Email,
                    Active = s.Active,
                    LastUpdate = s.LastUpdate
                })
                .ToListAsync();
        }

        // Get Customers of a Store
        public async Task<List<CustomerDTO>> GetCustomersOfStore(int storeId)
        {
            return await _context.Customers
                .Where(c => c.StoreId == storeId)
                .Select(c => new CustomerDTO
                {
                    CustomerId = c.CustomerId,
                    FirstName = c.FirstName,
                    LastName = c.LastName,
                    Email = c.Email,
                    Active = c.Active,
                    CreateDate = c.CreateDate,
                    LastUpdate = c.LastUpdate
                })
                .ToListAsync();
        }

        // Get Manager of a Store
        public async Task<ManagerDTO> GetManagerOfStore(int storeId)
        {
            var store = await _context.Stores
                .Include(s => s.ManagerStaff)
                .FirstOrDefaultAsync(s => s.StoreId == storeId);

            if (store == null || store.ManagerStaff == null)
                throw new KeyNotFoundException("Manager not found");

            return new ManagerDTO
            {
                StaffId = store.ManagerStaff.StaffId,
                FirstName = store.ManagerStaff.FirstName,
                LastName = store.ManagerStaff.LastName,
                Email = store.ManagerStaff.Email,
                Phone = store.ManagerStaff.Phone,
                LastUpdate = store.ManagerStaff.LastUpdate
            };
        }

        // Get All Managers and Stores
        public async Task<List<ManagerStoreDetailsDTO>> GetAllManagersAndStores()
        {
            return await _context.Stores
                .Include(s => s.ManagerStaff)
                .Include(s => s.Address)
                .ThenInclude(a => a.City)
                .Select(s => new ManagerStoreDetailsDTO
                {
                    StoreId = s.StoreId,
                    ManagerFirstName = s.ManagerStaff.FirstName,
                    ManagerLastName = s.ManagerStaff.LastName,
                    ManagerEmail = s.ManagerStaff.Email,
                    Address = s.Address.Address1,
                    City = s.Address.City.Name,
                    Country = s.Address.City.Country.Name,
                    Phone = s.Address.Phone,
                    LastUpdate = s.LastUpdate
                })
                .ToListAsync();
        }
    }
}