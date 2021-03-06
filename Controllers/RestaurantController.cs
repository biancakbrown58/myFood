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
  public class RestaurantController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public RestaurantController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Restaurant
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Restaurant>>> GetRestaurants()
    {
      return await _context.Restaurants.ToListAsync();
    }

    // GET: api/Restaurant/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Restaurant>> GetRestaurant(int id)
    {
      // get menu items
      var restaurant = await _context.Restaurants.Include(rest => rest.MenuItems).Include(rest => rest.Reviews).FirstOrDefaultAsync(j => j.Id == id);

      // also get reviews?????

      if (restaurant == null)
      {
        return NotFound();
      }

      return restaurant;
    }


    [HttpGet("reviews")]
    public async Task<ActionResult<Restaurant>> GetRestaurantReview(int id)
    {
      var restaurant = await _context.Restaurants.Include(rest => rest.Reviews).FirstOrDefaultAsync(r => r.Id == id);

      if (restaurant == null)
      {
        return NotFound();
      }
      return restaurant;
    }
    // List<int> reviews = new List<int> { overallRating, sauceRating };
    // double average = reviews.Average();
    // Console.WriteLine("the average rating is {0}", average);

    // PUT: api/Restaurant/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRestaurant(int id, Restaurant restaurant)
    {
      if (id != restaurant.Id)
      {
        return BadRequest();
      }

      _context.Entry(restaurant).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!RestaurantExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Restaurant
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Restaurant>> PostRestaurant(Restaurant restaurant)
    {
      _context.Restaurants.Add(restaurant);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetRestaurant", new { id = restaurant.Id }, restaurant);
    }
    [HttpPost("{restaurantId}/menuItem")]
    public async Task<ActionResult> AddMenuItem(int restaurantId, MenuItem menuItem)
    {
      //add menu item to restaurant
      menuItem.RestaurantId = restaurantId;
      _context.MenuItems.Add(menuItem);
      await _context.SaveChangesAsync();
      return Ok(menuItem);
    }

    // DELETE: api/Restaurant/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Restaurant>> DeleteRestaurant(int id)
    {
      var restaurant = await _context.Restaurants.FindAsync(id);
      if (restaurant == null)
      {
        return NotFound();
      }

      _context.Restaurants.Remove(restaurant);
      await _context.SaveChangesAsync();

      return restaurant;
    }

    private bool RestaurantExists(int id)
    {
      return _context.Restaurants.Any(e => e.Id == id);
    }
  }
}
