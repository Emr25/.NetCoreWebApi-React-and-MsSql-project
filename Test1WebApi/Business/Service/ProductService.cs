using Business.ServiceInterface;
using Domain.DomainRepository;
using Domain.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Service
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;

        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }



        public async Task AddProductAsync(ShoesProduct shoesProduct)
        {
            await _repository.AddAsync(shoesProduct);
        }

        public async Task DeleteProductAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

        public async Task<IEnumerable<ShoesProduct>> GetAllProductAsync()
        {
           return await _repository.GetAllAsync();
        }

        public async Task<ShoesProduct> GetProductByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task UpdateProductAsync(ShoesProduct shoesProduct)
        {
            await _repository.UpdateAsync(shoesProduct);
        }
    }
}
