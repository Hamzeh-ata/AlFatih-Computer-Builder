using AfComputerBuilder.Data;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.repository
{

    public class psuRepository : IpsuRepository
    {
        private readonly DataContext _context;
        public psuRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreatePsu(psuComponent psuComponent)
        {
            _context.Add(psuComponent);
            return Save();
        }

        public bool deletePsu(psuComponent psuComponent)
        {
            _context.Remove(psuComponent);
            return Save();
        }

        public ICollection<psuComponent> getAllpsu()
        {
            return _context.psuComponent.OrderBy(p => p.id).ToList();
        }

        public psuComponent getpsuById(int id)
        {
            return _context.psuComponent.Where(p => p.id == id).FirstOrDefault();
          
        }

        public bool psuExists(int id)
        {
            return _context.psuComponent.Any(psuComponent => psuComponent.id == id);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool updatePsu(psuComponent psuComponent)
        {
            _context.Update(psuComponent);
            return Save();
        }
    }
}

