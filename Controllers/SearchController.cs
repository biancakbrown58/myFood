using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using myFood.Models;

namespace myFood.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {

    private DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      _context = context;
    }
    [HttpGet("restaurant")]
    public async Task<ActionResult> SearchRestaurants(string searchTerm)
    {
      var results = _context.Restaurants.Where(r => r.Name.ToLower().Contains(searchTerm.ToLower()) || r.City.ToLower().Contains(searchTerm.ToLower()));
      return Ok(await results.ToListAsync());

    }
  }
}