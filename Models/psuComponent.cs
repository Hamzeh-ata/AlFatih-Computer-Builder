using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class psuComponent
    {
        [Key]
        public int id { get; set; }
        public string? name { get; set; }
        public string? img { get; set; }
        public int? wattage { get; set; }
        public string? powerOutput { get; set; }
        public string? efficiencyRating { get; set; }
        public string? modularity { get; set; }
        public string? type { get; set; }
        public double price { get; set; }

    }
}
