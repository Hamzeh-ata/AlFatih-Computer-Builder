using AfComputerBuilder.dto;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{
    public interface ImotherBoardRepository
{
        ICollection<motherBoardComponent> GetMotherBoards();
        bool motherBoardExists(int id);
        motherBoardComponent GetMotherBoardDetailsByid(int id);
        bool CreatemotherBoard(motherBoardComponent motherBoardComponent);
        bool UpdatemotherBoard(motherBoardComponent motherBoardComponent);
        bool deleteMotherBoard(motherBoardComponent motherBoardComponent);

        bool Save();

    }

}
