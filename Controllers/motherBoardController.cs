using AfComputerBuilder.dto;
using AfComputerBuilder.internalinterface;
using AfComputerBuilder.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AfComputerBuilder.Controllers
{
    [Route("api/components/[controller]")]
    [ApiController]
    public class motherBoardController : Controller
    {
        private readonly ImotherBoardRepository _motherBoardRepository;
        private readonly IMapper _mapper;

        public motherBoardController(ImotherBoardRepository motherBoardRepository , IMapper mapper)
        {
            _motherBoardRepository=motherBoardRepository;
            _mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200,Type = typeof(IEnumerable<motherBoardComponent>))]
        public IActionResult GetMotherBoards()
        {
            var motherBoard =_mapper.Map<List<MotherBoardDto>>(_motherBoardRepository.GetMotherBoards());
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(motherBoard);
        }
        [HttpGet("admin/")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<motherBoardComponent>))]
        [ProducesResponseType(400)]
        public IActionResult getMotherboardsAdmin()
        {
            var motherBoard = _motherBoardRepository.GetMotherBoards();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(motherBoard);

        }


        [HttpGet("{motherBoardId}/details")]
        [ProducesResponseType(200, Type = typeof(motherBoardComponent))]
        [ProducesResponseType(400)]
        public IActionResult getMoterBoardDetails(int id)
        {
            if (!_motherBoardRepository.motherBoardExists(id))
                return NotFound();

            var moterBoard = _motherBoardRepository.GetMotherBoardDetailsByid(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(moterBoard);

        }


        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult createMotherBoard([FromBody] motherBoardComponent motherBoardCreate)
        {
            if (motherBoardCreate == null)
                return BadRequest(ModelState);
            var motherBoard = _motherBoardRepository.GetMotherBoards()
                .Where(c => c.name.Trim().ToUpper() == motherBoardCreate.name.TrimEnd().ToUpper())
                .FirstOrDefault();
            if(motherBoard !=null)
            {
                ModelState.AddModelError("", "MotherBoard already exists");
                return StatusCode(422, ModelState);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var motherMap = _mapper.Map<motherBoardComponent>(motherBoardCreate);
            if (!_motherBoardRepository.CreatemotherBoard(motherMap))
            {
                ModelState.AddModelError("", "Somthing went wrong");
                return StatusCode(500,ModelState);
            }
            return Ok(motherBoard);
        }

        [HttpPut("{motherBoardId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult updateHardDisk(int motherBoardId, [FromBody] motherBoardComponent updatedMB)
        {
            if (updatedMB == null)
                return BadRequest(ModelState);

            if (motherBoardId != updatedMB.id)
                return BadRequest(ModelState);
            if (!_motherBoardRepository.motherBoardExists(motherBoardId))
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest();
            var MBMapper = _mapper.Map<motherBoardComponent>(updatedMB);
            if (!_motherBoardRepository.UpdatemotherBoard(MBMapper))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }
            return NoContent();

        }

        [HttpDelete("{motherBoardId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult deleteMotherBoard(int motherBoardId)
        {
            if (!_motherBoardRepository.motherBoardExists(motherBoardId))
            {
                return NotFound();
            }
            var MBToDelete = _motherBoardRepository.GetMotherBoardDetailsByid(motherBoardId);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_motherBoardRepository.deleteMotherBoard(MBToDelete))
            {
                ModelState.AddModelError("", "Something went wrong while updating");

            }
            return NoContent();
        }
    }
}
