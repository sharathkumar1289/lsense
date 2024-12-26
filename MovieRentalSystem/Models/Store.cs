namespace MovieRentalSystem.Models
{
    public class Store
    {
        public int StoreId { get; set; }
        public int ManagerStaffId { get; set; }  // Reference to Staff (Manager)
        public int AddressId { get; set; }       // Reference to Address
        public DateTime LastUpdate { get; set; }

        public virtual Staff Manager { get; set; }  // Navigation property for Staff
        public virtual Address Address { get; set; } // Navigation property for Address
    }
}
