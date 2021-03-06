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
  public class MenuItemController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public MenuItemController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/MenuItem
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MenuItem>>> GetMenuItems()
    {
      return await _context.MenuItems.ToListAsync();
    }

    // GET: api/MenuItem/5
    [HttpGet("{id}")]
    public async Task<ActionResult<MenuItem>> GetMenuItem(int id)
    {
      //get menu item and reviews
      // var menuItem = await _context.MenuItems.FindAsync(id);
      var menuItem = await _context.MenuItems.Include(menu => menu.Reviews).FirstOrDefaultAsync(f => f.Id == id);

      if (menuItem == null)
      {
        return NotFound();
      }

      return menuItem;
    }
    //  List<int> reviews = new List<int> { overallRating, sauceRating };
    // double average = reviews.Average();
    // Console.WriteLine("the average rating is {0}", average);

    // PUT: api/MenuItem/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutMenuItem(int id, MenuItem menuItem)
    {
      if (id != menuItem.Id)
      {
        return BadRequest();
      }

      _context.Entry(menuItem).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!MenuItemExists(id))
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

    // POST: api/MenuItem
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<MenuItem>> PostMenuItem(MenuItem menuItem)
    {
      _context.MenuItems.Add(menuItem);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetMenuItem", new { id = menuItem.Id }, menuItem);
    }

    // POST REVIEW

    [HttpPost("{menuItemId}/review")]
    public async Task<ActionResult> AddReview(int menuItemId, Review review)
    {
      //get menu item id
      // get the restId 
      var menuItem = await _context.MenuItems.FirstOrDefaultAsync(f => f.Id == menuItemId);

      review.RestaurantId = menuItem.RestaurantId;
      review.MenuItemId = menuItemId;
      _context.Reviews.Add(review);
      await _context.SaveChangesAsync();
      return Ok(review);
    }

    // DELETE: api/MenuItem/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<MenuItem>> DeleteMenuItem(int id)
    {
      var menuItem = await _context.MenuItems.FindAsync(id);
      if (menuItem == null)
      {
        return NotFound();
      }

      _context.MenuItems.Remove(menuItem);
      await _context.SaveChangesAsync();

      return menuItem;
    }

    private bool MenuItemExists(int id)
    {
      return _context.MenuItems.Any(e => e.Id == id);
    }
  }
}
