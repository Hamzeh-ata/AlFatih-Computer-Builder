using AfComputerBuilder.dto;
using AfComputerBuilder.Models;

namespace AfComputerBuilder.internalinterface
{
    public interface IGpuRepository
{
        ICollection<GpuComponent> getAllGpu();
        GpuComponent getGpuById(int id);
        bool GpuExists(int id);
        bool CreateGpu(GpuComponent GpuComponent);
        bool UpdateGpu(GpuComponent GpuComponent);
        bool deleteGpu(GpuComponent GpuComponent);
        bool Save();

    }
}
