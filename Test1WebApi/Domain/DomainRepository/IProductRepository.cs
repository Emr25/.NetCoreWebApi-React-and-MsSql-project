using Domain.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DomainRepository
{
      public interface  IProductRepository
    {
        Task<IEnumerable<ShoesProduct>> GetAllAsync();
        Task<ShoesProduct> GetByIdAsync(int id);
        Task AddAsync (ShoesProduct shoesProduct);
        Task UpdateAsync ( ShoesProduct shoesProduct);
        Task DeleteAsync (int id);
    }
}
