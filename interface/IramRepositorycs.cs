using AfComputerBuilder.dto;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{ 
    public interface IramRepository
{
    ICollection<ramComponent> getAllRam();
    ramComponent getRamById(int id);
    bool ramExisits(int id);
    bool CreateRam(ramComponent ramComponent);
    bool UpdateRam(ramComponent ramComponent);
    bool deleteRam(ramComponent ramComponent);
     bool Save();


    }
}
