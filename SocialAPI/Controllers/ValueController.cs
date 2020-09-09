using System.Linq;
using System.Threading.Tasks;
using SocialAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace SocialAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValueController : ControllerBase
    {
        private readonly DataContext _context;
        public ValueController(DataContext context)
        {
            this._context = context;
        }

        //GET api/value
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var model = await _context.Values.ToListAsync();
            var count = await _context.Values.CountAsync();
            return Ok(new { data = model, count = count });
        }

        //GET api/value/value 101
        [AllowAnonymous]
        [HttpGet("{name}")]
        public async Task<IActionResult> GetByName(string name)
        {
            var model = await _context.Values.FirstOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
            return Ok(model);
        }

        //POST api/value
        [HttpPost]
        public async Task<IActionResult> PostValue([FromBody] Value value)
        {
            if (!ModelState.IsValid) return BadRequest("Invalid Request");
            var model = new Value() { ID = value.ID, Name = value.Name };
            await _context.Values.AddAsync(model);
            await _context.SaveChangesAsync();
            return Ok();
        }

        //PUT api/value
        [HttpPut]
        public IActionResult UpdateValue([FromBody] Value value)
        {
            var query = _context.Values.Where(x => x.ID == value.ID).FirstOrDefault();
            if (query == null) return NotFound();

            query.Name = value.Name;
            _context.Entry(query).State = EntityState.Modified;
            _context.SaveChanges();
            return Ok();
        }

        //DELETE api/value
        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteValue(string name)
        {
            var data = await _context.Values.SingleOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
            _context.Entry(data).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}