using AfComputerBuilder.Data;
using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using Microsoft.EntityFrameworkCore;

namespace AfComputerBuilder.repository
{
    public class motherBoardRepository : ImotherBoardRepository
    {
        private readonly DataContext _context;
        public motherBoardRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreatemotherBoard(motherBoardComponent motherBoardComponent)
        {
            _context.Add(motherBoardComponent);
            return Save();
        }

        public bool deleteMotherBoard(motherBoardComponent motherBoardComponent)
        {
            _context.Remove(motherBoardComponent);
            return Save();
        }

        public motherBoardComponent GetMotherBoardDetailsByid(int id)
        {
            return _context.motherBoardComponent.Where(p => p.id == id).FirstOrDefault();
            
        }
        public ICollection<motherBoardComponent> GetMotherBoards()
        {
            return _context.motherBoardComponent.OrderBy(p => p.name).ToList();
        }

        public bool motherBoardExists(int id)
        {
            return _context.motherBoardComponent.Any(p => p.id == id);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdatemotherBoard(motherBoardComponent motherBoardComponent)
        {
            _context.Update(motherBoardComponent);
            return Save();
        }
    }
}
