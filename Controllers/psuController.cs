using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class psuController: Controller
    {
        private readonly IpsuRepository _psuRepository;
        private readonly IMapper _mapper;
        public psuController(IpsuRepository psuRepository, IMapper mapper)
        {
            _psuRepository = psuRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<psuComponent>))]
        public IActionResult getpsu()
        {
            var psu = _mapper.Map<List<psuDto>>(_psuRepository.getAllpsu());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(psu);
        }

        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(psuComponent))]
        [ProducesResponseType(400)]
        public IActionResult getPsuAdmin()
        {
            var psu = _mapper.Map<List<psuComponent>>(_psuRepository.getAllpsu());
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(psu);
        }

        [HttpGet("{psuId}/details")]
        [ProducesResponseType(200, Type = typeof(psuComponent))]
        [ProducesResponseType(400)]
        public IActionResult getpsuDetails(int id)
        {
            if (!_psuRepository.psuExists(id))
                return NotFound();
            var psu = _psuRepository.getpsuById(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(psu);
        }


        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreatePsu([FromBody] psuComponent psuCreate)
        {
            if (psuCreate == null)
                return BadRequest(ModelState);

            var psu = _psuRepository.getAllpsu()
                .Where(c => c.name.Trim().ToUpper() == psuCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if(psu != null)
            {
                ModelState.AddModelError("", "Psu already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var psuMap = _mapper.Map<psuComponent>(psuCreate);
            if(!_psuRepository.CreatePsu(psuMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500, ModelState);
             }
            return Ok(psu);
        }


        [HttpPut("{psuId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updatePsu(int psuId, [FromBody] psuComponent updatedpsu)
        {
            if (updatedpsu == null)
                return BadRequest(ModelState);

            if (psuId != updatedpsu.id)
                return BadRequest(ModelState);
            if (!_psuRepository.psuExists(psuId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var psuMapper = _mapper.Map<psuComponent>(updatedpsu);
            if (!_psuRepository.updatePsu(psuMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{psuId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deletePsu(int psuId)
        {
            if (!_psuRepository.psuExists(psuId))
            {
                return NotFound();
            }
            var psuToDelete = _psuRepository.getpsuById(psuId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_psuRepository.deletePsu(psuToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");

            }
            return NoContent();
        }





    }

}
