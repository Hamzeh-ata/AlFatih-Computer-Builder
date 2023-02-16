
using AfComputerBuilder.Data;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.repository
{
    public class cpucoolersRepository : ICpuCoolerRepository
    {
        private readonly DataContext _context;
        public cpucoolersRepository(DataContext context)
        {
            _context = context;
        }

        public bool CoolerExists(int id)
        {
            return _context.cpuCoolerComponent.Any(p => p.id == id);
        }

        public bool CreateCooler(cpuCoolerComponent cpuCoolerComponent)
        {
            _context.Add(cpuCoolerComponent);
            return Save();
        }

        public bool deleteCooler(cpuCoolerComponent cpuCoolerComponent)
        {
            _context.Remove(cpuCoolerComponent);
            return Save();
        }

        public ICollection<cpuCoolerComponent> getAllCoolers()
        {
            return _context.cpuCoolerComponent.OrderBy(p => p.id).ToList();
        }

        public cpuCoolerComponent getCoolerById(int id)
        {
            return _context.cpuCoolerComponent.Where(e => e.id == id).FirstOrDefault();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool updateCooler(cpuCoolerComponent cpuCoolerComponent)
        {
            _context.Update(cpuCoolerComponent);
            return Save();
        }
    }
}
