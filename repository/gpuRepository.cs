using AfComputerBuilder.Data;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.repository
{
    public class gpuRepository : IGpuRepository
    {
        private readonly DataContext _context;

        public gpuRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateGpu(GpuComponent GpuComponent)
        {
            _context.Add(GpuComponent);
            return Save();
        }

        public bool deleteGpu(GpuComponent GpuComponent)
        {
            _context.Remove(GpuComponent);
            return Save();
        }

        public ICollection<GpuComponent> getAllGpu()
        {
            return _context.GpuComponent.OrderBy(p => p.id).ToList();

        }

        public GpuComponent getGpuById(int id)
        {
            return _context.GpuComponent.Where(e => e.id == id).FirstOrDefault();
        }
        public bool GpuExists(int id)
        {
            return _context.GpuComponent.Any(p => p.id == id);
       }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdateGpu(GpuComponent GpuComponent)
        {
            _context.Update(GpuComponent);
            return Save();
        }

      
    }
}
