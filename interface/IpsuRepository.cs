using AfComputerBuilder.dto;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{
    public interface IpsuRepository
    {
        ICollection<psuComponent> getAllpsu();
        psuComponent getpsuById(int id);
        bool psuExists(int id);
        bool CreatePsu(psuComponent psuComponent);
        bool updatePsu(psuComponent psuComponent);
        bool deletePsu(psuComponent psuComponent);

        bool Save();


    }
}
