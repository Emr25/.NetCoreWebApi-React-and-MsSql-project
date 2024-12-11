using Business.ServiceInterface;
using Domain.Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Test1WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _service;

        public ProductController(IProductService productService)
        {
            _service = productService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShoesProduct>>>GetAll()
        {
         var products = await _service.GetAllProductAsync();
         return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ShoesProduct>>GetById(int id)
        {
            var product = await _service.GetProductByIdAsync(id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody]ShoesProduct shoesProduct)
        {
          await _service.AddProductAsync(shoesProduct);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult>Update(int id ,[FromBody] ShoesProduct shoesProduct)
        {
            if(id != shoesProduct.Id)
            {
                return BadRequest();
            }
            await _service.UpdateProductAsync(shoesProduct);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteProductAsync(id);
            return Ok();
        }

    }
}
