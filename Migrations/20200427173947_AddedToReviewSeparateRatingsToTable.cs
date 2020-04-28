using Microsoft.EntityFrameworkCore.Migrations;

namespace myFood.Migrations
{
    public partial class AddedToReviewSeparateRatingsToTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Reviews");

            migrationBuilder.AddColumn<int>(
                name: "AverageRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FlavorRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FreshRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OrderAgainRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OverallRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PortionSizeRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProperlyCookedRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SauceRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TemperatureRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TextureRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorthItRating",
                table: "Reviews",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AverageRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "FlavorRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "FreshRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "OrderAgainRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "OverallRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "PortionSizeRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "ProperlyCookedRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "SauceRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "TemperatureRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "TextureRating",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "WorthItRating",
                table: "Reviews");

            migrationBuilder.AddColumn<int>(
                name: "Rating",
                table: "Reviews",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
