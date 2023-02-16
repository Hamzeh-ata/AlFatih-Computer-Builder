using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class hardDiskController : Controller
    {
        private readonly ihardDiskRepository _hardDiskRepository;
        private readonly IMapper _mapper;
        public hardDiskController(ihardDiskRepository hardDiskRepository, IMapper mapper)
        {
            _hardDiskRepository = hardDiskRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<hardDiskComponent>))]

        public IActionResult getHardDisk()
        {
            var hardDisk = _mapper.Map<List<hardDiskDto>>(_hardDiskRepository.getAllhardDisks());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(hardDisk);

        }
        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(hardDiskComponent))]
        [ProducesResponseType(400)]
        public IActionResult getHardDiskAdmin()
        {
            var hardDisk = _mapper.Map<List<hardDiskComponent>>(_hardDiskRepository.getAllhardDisks());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                return Ok(hardDisk);
        }

        [HttpGet("{hardDiskId}/details")]
        [ProducesResponseType(200, Type = typeof(hardDiskComponent))]
        [ProducesResponseType(400)]
        public IActionResult getHardDiskDetails(int id) {
            if (!_hardDiskRepository.hardDiskExists(id))
                return NotFound();
            var hardDisk = _hardDiskRepository.GetHardDiskById(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(hardDisk);


        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateHardDisk([FromBody] hardDiskComponent hardDiskCreate)
        {
            if (hardDiskCreate == null)
                return BadRequest(ModelState);

            var hardDisk = _hardDiskRepository.getAllhardDisks()
                .Where(c => c.name.Trim().ToUpper() == hardDiskCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if (hardDisk != null)
            {
                ModelState.AddModelError("", "HardDisk already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var hardDiskMap = _mapper.Map<hardDiskComponent>(hardDiskCreate);
            if (!_hardDiskRepository.CreateHardDisk(hardDiskMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500, ModelState);
            }
            return Ok(hardDisk);
        }

        [HttpPut("{hardDiskId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updatehardDisk(int hardDiskId, [FromBody] hardDiskComponent updatedHardDisk)
        {
            if (updatedHardDisk == null)
                return BadRequest(ModelState);
            if (hardDiskId != updatedHardDisk.id)
                return BadRequest(ModelState);
            if (!_hardDiskRepository.hardDiskExists(hardDiskId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var hardDiskMapper = _mapper.Map<hardDiskComponent>(updatedHardDisk);
            if (!_hardDiskRepository.updateHardDisk(hardDiskMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{hardDiskId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deleteHardDisk(int hardDiskId)
        {
            if (!_hardDiskRepository.hardDiskExists(hardDiskId))
            {
                return NotFound();
            }
            var hardDiskToDelete = _hardDiskRepository.GetHardDiskById(hardDiskId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_hardDiskRepository.deleteHardDisk(hardDiskToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
             }
            return NoContent();
        }
    } 
}
