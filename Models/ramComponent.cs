using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class ramComponent
    {
        [Key]
        public int id { get; set; }
        public string? name { get; set; }
        public string? img { get; set; }
        public string? size { get; set; }
        public string? formFactor { get; set; }
        public string? frequency { get; set; }
        public string? ddr { get; set; }
        public string? color { get; set; }
        public int Watts { get; set; }
        public double Price { get; set; }
    }
}
