using System;
using System.Text.Json.Serialization;

namespace myFood.Models
{
  public class Review
  {
    public int Id { get; set; }
    public int Rating { get; set; }
    public string Comment { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    public int MenuItemId { get; set; }

    [JsonIgnore]
    public MenuItem MenuItem { get; set; }
  }
}