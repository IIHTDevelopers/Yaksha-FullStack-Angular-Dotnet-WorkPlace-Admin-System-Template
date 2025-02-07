using EmployeeManagement_API.DAL.Admin;
using EmployeeManagement_API.Models;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace EmployeeManagement_API.Controllers
{
    [RoutePrefix("api/auth")]
    public class AuthController : ApiController
    {
        private readonly IEmployeeLoginService _loginService;

        public AuthController(IEmployeeLoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IHttpActionResult> Login([FromBody] EmployeeLogin model)
        {
            //write your code here
            throw new NotImplementedException();
        }
    }
}