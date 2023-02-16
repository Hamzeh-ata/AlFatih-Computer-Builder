using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{
    public interface ICpuCoolerRepository
{
        ICollection<cpuCoolerComponent> getAllCoolers();
        cpuCoolerComponent getCoolerById(int id);
        bool CoolerExists(int id);
        bool CreateCooler(cpuCoolerComponent cpuCoolerComponent);
        bool updateCooler(cpuCoolerComponent cpuCoolerComponent);
        bool deleteCooler(cpuCoolerComponent cpuCoolerComponent);
        bool Save();

    }
}
