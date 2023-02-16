using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class cpuCoolerComponent
    {
        [Key]
        public int id { get; set; }
        public string ? name { get; set; }
        public string? img { get; set; }
        public string? Manufacturer { get; set; }
        public string? Model { get; set; }
        public string? fanRPM { get; set; }
        public string? noiseLevel { get; set; }
        public string? Color { get; set; }
        public string? Height { get; set; }
        public string? CPUSocket { get; set; }
        public double price { get; set; }


    }
}
