 using AfComputerBuilder.Models;
using Microsoft.EntityFrameworkCore;

namespace AfComputerBuilder.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options ):base(options)    
        {

        }
        public DbSet<cpuComponent> cpuComponent { get; set; }
        public DbSet<GpuComponent> GpuComponent { get; set; }
        public DbSet<hardDiskComponent> hardDiskComponent { get; set; }
        public DbSet<motherBoardComponent> motherBoardComponent { get; set; }
        public DbSet<psuComponent> psuComponent { get; set; }
        public DbSet<ramComponent> ramComponent { get; set; }
        public DbSet<cpuCoolerComponent> cpuCoolerComponent { get; set; }


    }
}
