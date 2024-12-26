using FluentValidation;
using MovieRentalSystem.Models;

namespace MovieRentalSystem.Validators
{
    public class StoreDTOValidator : AbstractValidator<StoreDTO>
    {
        public StoreDTOValidator()
        {
            RuleFor(store => store.ManagerStaffId).GreaterThan(0).WithMessage("ManagerStaffId must be greater than 0.");
            RuleFor(store => store.AddressId).GreaterThan(0).WithMessage("AddressId must be greater than 0.");
        }
    }
}
