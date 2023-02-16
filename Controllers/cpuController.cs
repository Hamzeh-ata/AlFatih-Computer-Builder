using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class cpuController : Controller
    {
        private readonly ICpuRepository _cpuRepository;
        private readonly IMapper _mapper;
        public cpuController(ICpuRepository CpuRepository , IMapper mapper)
        {
            _cpuRepository = CpuRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<cpuComponent>))]
        public IActionResult getCpu()
        {
            var cpu = _mapper.Map<List<cpuDto>>(_cpuRepository.getAllCpu());
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cpu);
        }

        [HttpGet("{cpuId}/details")]
        [ProducesResponseType(200, Type = typeof(cpuComponent))]
        [ProducesResponseType(400)]
        public IActionResult getCpuDetails(int id)
        {
            if (!_cpuRepository.cpuExists(id))
                return NotFound();
            var cpu = _cpuRepository.getCpuById(id);
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cpu);
        }

        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(cpuComponent))]
        [ProducesResponseType(400)]
        public IActionResult getCpuAdmin()
        {
            var cpu = _mapper.Map<List<cpuComponent>>(_cpuRepository.getAllCpu());
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cpu);
        }
        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateCpu([FromBody] cpuComponent cpuCreate)
        {
            if (cpuCreate == null)
                return BadRequest(ModelState);

            var cpu = _cpuRepository.getAllCpu()
                .Where(c => c.name.Trim().ToUpper() == cpuCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if (cpu != null)
            {
                ModelState.AddModelError("", "cpu already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var cpuMap = _mapper.Map<cpuComponent>(cpuCreate);
            if (!_cpuRepository.CreateCpu(cpuMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500, ModelState);
            }
            return Ok(cpu);
        }

        [HttpPut("{cpuId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updateCpu(int cpuId, [FromBody] cpuComponent updatedCpu)
        {
            if (updatedCpu == null)
                return BadRequest(ModelState);

            if (cpuId != updatedCpu.id)
                return BadRequest(ModelState);

            if (!_cpuRepository.cpuExists(cpuId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var cpuMapper = _mapper.Map<cpuComponent>(updatedCpu);
            if(!_cpuRepository.updateCpu(cpuMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{cpuId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deleteCpu(int cpuId)
        {
            if (!_cpuRepository.cpuExists(cpuId))
            {
                return NotFound();
            }
            var cpuToDelete = _cpuRepository.getCpuById(cpuId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_cpuRepository.deleteCpu(cpuToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");

            }
            return NoContent();
        }


    }
   
}
