using AfComputerBuilder.Auth_models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AfComputerBuilder.authControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManger;
        private SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _applicationSettings;
        public ApplicationUserController(UserManager<ApplicationUser> userManger, SignInManager<ApplicationUser> signInManager,IOptions<ApplicationSettings> appSettings)
        {
            _userManger = userManger;
            _signInManager = signInManager;
            _applicationSettings = appSettings.Value;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<Object> postApplicationUser(ApplicationUserModel model)
        {
            var applicationUser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
            };
            try
            {
                var result = await _userManger.CreateAsync(applicationUser, model.Password);
                return (result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> login(loginModel model)
        {
            var user = await _userManger.FindByNameAsync(model.UserName);
            if(user != null && await _userManger.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                  {
                      new Claim("UserID", user.Id.ToString())
                  }),
                    Expires = DateTime.UtcNow.AddMinutes(60),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_applicationSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHnadelr = new JwtSecurityTokenHandler();
                var securityToken = tokenHnadelr.CreateToken(tokenDescriptor);
                var token = tokenHnadelr.WriteToken(securityToken);
                return Ok(new { token });
            }

              else if(user != null && !(await _userManger.CheckPasswordAsync(user, model.Password)))
            {
                return Ok( "password incorrect");
            }
            else
            {
                return Ok( "userName or password incorrect" );

            }
        }
    }
}
