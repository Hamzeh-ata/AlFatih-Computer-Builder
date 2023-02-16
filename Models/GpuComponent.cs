using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class GpuComponent
    {
        [Key]
        public int id { get; set; }
        public string? name { get; set; }
        public string? img { get; set; }
        public string? slotWidth { get; set; }
        public string? DirectX { get; set; }
        public string? busInterface { get;set; }  
        public string? memorySize { get; set; }
        public string? baseClock { get; set; }
        public string? boostClock { get; set; }
        public string? outputs { get; set; }
        public int watts { get; set; }
        public double price { get; set; }
    }
}
