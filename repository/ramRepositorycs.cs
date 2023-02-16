using AfComputerBuilder.Data;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.repository
{
    public class ramRepository : IramRepository
    {
        private readonly DataContext _context;
        public ramRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateRam(ramComponent ramComponent)
        {
            _context.Add(ramComponent);
            return Save();
        }

        public bool deleteRam(ramComponent ramComponent)
        {
            _context.Remove(ramComponent);
            return Save();
        }

        public ICollection<ramComponent> getAllRam()
        {
            return _context.ramComponent.OrderBy(p => p.id).ToList();
        }

        public ramComponent getRamById(int id)
        {
            return _context.ramComponent.Where(p => p.id == id).FirstOrDefault();
        }

        public bool ramExisits(int id)
        {
            return _context.ramComponent.Any(p => p.id == id);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdateRam(ramComponent ramComponent)
        {
            _context.Update(ramComponent);
            return Save();
        }
    }
}
