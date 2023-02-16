using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class cpuComponent
    {
        [Key]
        public int id { get; set; }
        public string? name { get; set; }
        public string? img { get; set; }    
        public string ? processorNumber { get; set; }
        public string ? chipset { get; set; }
        public string? includesCooler { get; set; }
        public string? releaseYear { get; set; }
        public string? totalCores { get; set; }
        public string? maxTurbo { get; set; }
        public string? cashe { get; set; }
        public string? totalL2Cache { get; set; }
        public string? maxMemorySize { get; set; }
        public string? memoryTypes { get; set; }
        public string? maxMemoryChannels { get; set; }
        public string ? processorGraphics { get; set; }
        public string? socket { get; set; }
        public string? clock { get; set; }
        public string? threds { get; set; }
        public int baseWatts { get; set; }
        public int maxWatts { get; set; }
        public double Price { get; set; }


    }
}
