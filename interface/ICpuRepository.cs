using AfComputerBuilder.dto;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{
    public interface ICpuRepository
{
        ICollection<cpuComponent> getAllCpu();
        cpuComponent getCpuById(int id);
        bool cpuExists(int id);
        bool CreateCpu(cpuComponent cpuComponent);
        bool updateCpu(cpuComponent cpuComponent);
        bool deleteCpu(cpuComponent cpuComponent);

        bool Save();
    }
}
