using System.ComponentModel.DataAnnotations;

namespace AfComputerBuilder.Models
{
    public class hardDiskComponent
    {
        [Key]
        public int id { get; set; }
        public string? name { get; set; }
        public string? img { get; set; }
        public string? interFace { get; set; }
        public string? capacity { get; set; }
        public string? readSpead { get; set; }
        public string? rotationRate { get; set; }
        public int? watts { get; set; }
        public double price { get; set; }
    }
}
