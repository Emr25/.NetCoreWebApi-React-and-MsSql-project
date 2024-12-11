using Domain.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.ServiceInterface
{
    public interface IProductService
    {
        Task<IEnumerable<ShoesProduct>> GetAllProductAsync();
        Task<ShoesProduct>GetProductByIdAsync(int id);
        Task AddProductAsync(ShoesProduct shoesProduct);
        Task UpdateProductAsync(ShoesProduct shoesProduct);
        Task DeleteProductAsync(int id);
    }
}
