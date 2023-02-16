
using AfComputerBuilder.Data;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.repository
{
    public class cpuRepository : ICpuRepository
    {
        private readonly DataContext _context;
        public cpuRepository(DataContext context)
        {
            _context = context;
        }

        public bool cpuExists(int id)
        {
            return _context.cpuComponent.Any(p => p.id == id);
        }

        public bool CreateCpu(cpuComponent cpuComponent)
        {
            _context.Add(cpuComponent);
            return Save();
        }

        public bool deleteCpu(cpuComponent cpuComponent)
        {
            _context.Remove(cpuComponent);
            return Save();
        }

        public ICollection<cpuComponent> getAllCpu()
        {
            return _context.cpuComponent.OrderBy(p => p.id).ToList();
        }

        public cpuComponent getCpuById(int id)
        {
            return _context.cpuComponent.Where(e => e.id == id).FirstOrDefault();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool updateCpu(cpuComponent cpuComponent)
        {
            _context.Update(cpuComponent);
            return Save();
        }
    }
}
