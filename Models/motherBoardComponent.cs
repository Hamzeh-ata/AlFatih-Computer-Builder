using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class motherBoardComponent
    {
        [Key]
        public int id { get; set; }
        public string? name { get; set; }
        public string? motherBoardImg { get; set; }
        public string? socket { get; set; }
        public string? formFactor { get; set; }
        public string? chipset { get; set; }
        public string? releaseYear { get; set; }
        public string? usbSlots { get; set; }
        public string? memorySlotProtcol { get; set; }
        public string? memoryMaximumSpeed { get; set; }
        public string? memoryMaximumCapacity { get; set; }
        public string? memoryMaximumChannels { get; set; }
        public string ? expansionSlots { get; set; }
        public string? m2Slots { get; set; }
        public string ? sataSlots { get; set; }
        public int watts { get; set; }
        public double price { get; set; }

    }
}
