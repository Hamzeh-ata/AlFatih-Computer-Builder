using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class cpuCoolerController : Controller
    {
        private readonly ICpuCoolerRepository _CpuCoolerRepository;
        private readonly IMapper _mapper;
        public cpuCoolerController(ICpuCoolerRepository CpuCoolerRepository, IMapper mapper)
        {
            _CpuCoolerRepository = CpuCoolerRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<cpuCoolerComponent>))]
        public IActionResult getCooler()
        {
            var cooler = _mapper.Map<List<cpuCoolerComponent>>(_CpuCoolerRepository.getAllCoolers());
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cooler);
        }

        [HttpGet("{coolerId}/details")]
        [ProducesResponseType(200, Type = typeof(cpuCoolerComponent))]
        [ProducesResponseType(400)]
        public IActionResult getCoolerDetails(int id)
        {
            if (!_CpuCoolerRepository.CoolerExists(id))
                return NotFound();
            var cooler= _CpuCoolerRepository.getCoolerById(id);
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cooler);
        }

        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(cpuCoolerComponent))]
        [ProducesResponseType(400)]
        public IActionResult getCoolerAdmin()
        {
            var cooler = _mapper.Map<List<cpuCoolerComponent>>(_CpuCoolerRepository.getAllCoolers());
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cooler);
        }
        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateCooler([FromBody] cpuCoolerComponent coolerCreate)
        {
            if (coolerCreate == null)
                return BadRequest(ModelState);

            var cooler = _CpuCoolerRepository.getAllCoolers()
                .Where(c => c.name.Trim().ToUpper() == coolerCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if (cooler != null)
            {
                ModelState.AddModelError("", "cooler already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var coolerMap = _mapper.Map<cpuCoolerComponent>(coolerCreate);
            if (!_CpuCoolerRepository.CreateCooler(coolerMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500, ModelState);
            }
            return Ok(cooler);
        }

        [HttpPut("{coolerId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updateCooler(int coolerId, [FromBody] cpuCoolerComponent updatedCooler)
        {
            if (updatedCooler == null)
                return BadRequest(ModelState);
            if (!_CpuCoolerRepository.CoolerExists(coolerId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var coolerMapper = _mapper.Map<cpuCoolerComponent>(updatedCooler);
            if(!_CpuCoolerRepository.updateCooler(coolerMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{coolerId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deleteCooler(int coolerId)
        {
            if (!_CpuCoolerRepository.CoolerExists(coolerId))
            {
                return NotFound();
            }
            var coolerToDelete = _CpuCoolerRepository.getCoolerById(coolerId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_CpuCoolerRepository.deleteCooler(coolerToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");

            }
            return NoContent();
        }


    }
   
}
