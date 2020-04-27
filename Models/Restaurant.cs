using System;
using System.Collections.Generic;

namespace myFood.Models
{
  public class Restaurant
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string FoodType { get; set; }


    public List<MenuItem> MenuItems { get; set; } = new List<MenuItem>();
    public List<Review> Reviews { get; set; } = new List<Review>();
  }
}