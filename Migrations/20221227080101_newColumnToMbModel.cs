using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AfComputerBuilder.Migrations
{
    public partial class newColumnToMbModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "sataSlots",
                table: "motherBoardComponent",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
