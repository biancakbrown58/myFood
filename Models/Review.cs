using System;
using System.Text.Json.Serialization;

namespace myFood.Models
{
  public class Review
  {
    public int Id { get; set; }
    // public int Rating { get; set; }
    public int OverallRating { get; set; }
    public int FlavorRating { get; set; }
    public int PortionSizeRating { get; set; }
    public int TextureRating { get; set; }
    public int SauceRating { get; set; }
    public int TemperatureRating { get; set; }
    public int FreshRating { get; set; }
    public int ProperlyCookedRating { get; set; }
    public int OrderAgainRating { get; set; }
    public int WorthItRating { get; set; }
    public int AverageRating { get; set; }
    public string Comment { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    public int MenuItemId { get; set; }

    [JsonIgnore]
    public MenuItem MenuItem { get; set; }
    public int RestaurantId { get; set; }

    [JsonIgnore]
    public Restaurant Restaurant { get; set; }
  }
}