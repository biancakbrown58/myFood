namespace myFood.Models
{
  public class MenuItem
  {
    public int Id { get; set; }
    public string Dish { get; set; }
    public string Description { get; set; }
    public int Rating { get; set; }

    public int RestaurantId { get; set; }
    public Restaurant Restaurant { get; set; }
  }
}