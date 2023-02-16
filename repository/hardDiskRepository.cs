using AfComputerBuilder.Data;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.repository
{
    public class hardDiskRepository : ihardDiskRepository
    {
        private readonly DataContext _context;
        public hardDiskRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateHardDisk(hardDiskComponent hardDiskComponent)
        {
            _context.Add(hardDiskComponent);
            return Save();
        }

        public bool deleteHardDisk(hardDiskComponent hardDiskComponent)
        {
            _context.Remove(hardDiskComponent);
            return Save();
        }

        public ICollection<hardDiskComponent> getAllhardDisks()
        {
            return _context.hardDiskComponent.OrderBy(p => p.id).ToList();
        }

        public hardDiskComponent GetHardDiskById(int id)
        {
            return _context.hardDiskComponent.Where(p => p.id == id).FirstOrDefault();
            
        }

        public bool hardDiskExists(int id)
        {
            return _context.hardDiskComponent.Any(p => p.id == id);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool updateHardDisk(hardDiskComponent hardDiskComponent)
        {
            _context.Update(hardDiskComponent);
            return Save();
        }
    }
}
