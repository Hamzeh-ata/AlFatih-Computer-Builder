using AfComputerBuilder.dto;
using AfComputerBuilder.Models;
using AutoMapper;

namespace AfComputerBuilder.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<motherBoardComponent, MotherBoardDto>();
            CreateMap<cpuComponent, cpuDto>();
            CreateMap<GpuComponent, gpuDto>();
            CreateMap<hardDiskComponent, hardDiskDto>();
            CreateMap<ramComponent, ramDto>();
            CreateMap<psuComponent, psuDto>();
        }
    }
}
