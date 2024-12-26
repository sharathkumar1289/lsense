using MovieRentalSystem.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MovieRentalSystem.Repositories
{
    public interface IStoreRepository
    {
        Task<List<Store>> AddStoreAsync(Store store);
    }
}
