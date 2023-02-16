using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class gpuController : Controller
    {
        private readonly IGpuRepository _gpuRepository;
        private readonly IMapper _mapper;

        public gpuController(IGpuRepository gpuRepository, IMapper mapper)
        {
            _gpuRepository = gpuRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<GpuComponent>))]
        public IActionResult getGpu()
        {
            var gpu = _mapper.Map<List<gpuDto>>(_gpuRepository.getAllGpu());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(gpu);
        }
        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(GpuComponent))]
        [ProducesResponseType(400)]
        public IActionResult getGpuAdmin()
        {
            var gpu = _mapper.Map<List<GpuComponent>>(_gpuRepository.getAllGpu());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(gpu);
        }
        [HttpGet("{gpudId}/details")]
        [ProducesResponseType(200, Type = typeof(GpuComponent))]
        [ProducesResponseType(400)]
        public IActionResult getGpuDetails(int id)
        {
            if (!_gpuRepository.GpuExists(id))
                return NotFound();
            var gpu = _gpuRepository.getGpuById(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(gpu);
        }
        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateGpu([FromBody] GpuComponent gpuCreate)
        {
            if (gpuCreate == null)
                return BadRequest(ModelState);

            var Gpu = _gpuRepository.getAllGpu()
                .Where(c => c.name.Trim().ToUpper() == gpuCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if (Gpu != null)
            {
                ModelState.AddModelError("", "Gpu already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var gpuMap = _mapper.Map<GpuComponent>(gpuCreate);
            if (!_gpuRepository.CreateGpu(gpuMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500, ModelState);
            }
            return Ok(Gpu);
        }
        [HttpPut("{gpuId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updateGpu(int gpuId, [FromBody] GpuComponent updatedGpu)
        {
            if (updatedGpu == null)
                return BadRequest(ModelState);

            if(gpuId != updatedGpu.id)
                return BadRequest(ModelState);
            if (!_gpuRepository.GpuExists(gpuId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
             var gpuMapper = _mapper.Map<GpuComponent>(updatedGpu);
            if(!_gpuRepository.UpdateGpu(gpuMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500,ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{gpuId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deleteGpu(int gpuId)
        {
            if (!_gpuRepository.GpuExists(gpuId)) {
                return NotFound();
            }
            var gpuToDelete = _gpuRepository.getGpuById(gpuId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_gpuRepository.deleteGpu(gpuToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");

            }
            return NoContent();
        }

    }
}
