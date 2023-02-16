using AfComputerBuilder.dto;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{
    public interface ihardDiskRepository
{
        ICollection<hardDiskComponent> getAllhardDisks();
        hardDiskComponent GetHardDiskById(int id);
        bool hardDiskExists (int id);
        bool CreateHardDisk(hardDiskComponent hardDiskComponent);
        bool updateHardDisk(hardDiskComponent hardDiskComponent);
        bool deleteHardDisk(hardDiskComponent hardDiskComponent);

        bool Save();

    }
}
