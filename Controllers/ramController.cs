using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class ramController : Controller
    {
        private readonly IramRepository _ramRepository;
        private readonly IMapper _mapper;
        public ramController(IramRepository ramRepository, IMapper mapper)
        {
            _ramRepository = ramRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<ramComponent>))]
        public IActionResult getRam()
        {
            var ram = _mapper.Map<List<ramDto>>(_ramRepository.getAllRam());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(ram);
        }

        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(ramComponent))]
        [ProducesResponseType(400)]
        public IActionResult getRamAdmin()
        {
            var ram = _mapper.Map<List<ramComponent>>(_ramRepository.getAllRam());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(ram);
        }
        [HttpGet("{ramId}/details")]
        [ProducesResponseType(200, Type = typeof(ramComponent))]
        [ProducesResponseType(400)]
        public IActionResult getRamById(int id)
        {
            if (!_ramRepository.ramExisits(id))
                return NotFound();
            var ram = _ramRepository.getRamById(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(ram);
        }


        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateRam([FromBody] ramComponent ramCreate)
        {
            if (ramCreate == null)
                return BadRequest(ModelState);

            var ram = _ramRepository.getAllRam()
                .Where(c => c.name.Trim().ToUpper() == ramCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if (ram != null)
            {
                ModelState.AddModelError("", "ram already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var ramMap = _mapper.Map<ramComponent>(ramCreate);
            if (!_ramRepository.CreateRam(ramMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500, ModelState);
            }
            return Ok(ram);
        }
        [HttpPut("{ramId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updateRam(int ramId, [FromBody] ramComponent updatedRam)
        {
            if (updatedRam == null)
                return BadRequest(ModelState);
            if (ramId != updatedRam.id)
                return BadRequest(ModelState);
            if (!_ramRepository.ramExisits(ramId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var ramMapper = _mapper.Map<ramComponent>(updatedRam);
            if (!_ramRepository.UpdateRam(ramMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{ramId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deleteRam(int ramId)
        {
            if (!_ramRepository.ramExisits(ramId))
            {
                return NotFound();
            }
            var ramToDelete = _ramRepository.getRamById(ramId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_ramRepository.deleteRam(ramToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");

            }
            return NoContent();
        }






    }
}
