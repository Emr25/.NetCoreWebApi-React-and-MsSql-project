using Domain.DomainRepository;
using Domain.Entites;
using Infrastructure.DataDbContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repository
{
    public class ProductRepository : IProductRepository
    {

        private readonly ApplicationDbContext _dbContext;
        public ProductRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        public async Task AddAsync(ShoesProduct shoesProduct)
        {
            await _dbContext.ShoesProducts.AddAsync(shoesProduct);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var product = await _dbContext.ShoesProducts.FindAsync(id);
            _dbContext.ShoesProducts.Remove(product);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<ShoesProduct>> GetAllAsync()
        {
            return await _dbContext.ShoesProducts.ToListAsync();
        }

        public async Task<ShoesProduct> GetByIdAsync(int id)
        {
            return await _dbContext.ShoesProducts.FindAsync(id);

        }

        public async Task UpdateAsync(ShoesProduct shoesProduct)
        {
          _dbContext.ShoesProducts.Update(shoesProduct);
            await _dbContext.SaveChangesAsync();
        }
    }
}
