using EmployeeManagement_API.DAL.Admin;
using EmployeeManagement_API.DAL.Interfaces;
using EmployeeManagement_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace EmployeeManagement_API.Controllers
{
    [AuthFilter]
    [RoutePrefix("api/employees")]
    public class EmployeesController : ApiController
    {
        private readonly IEmployeeService _service;
        public EmployeesController()
        {
        }
        public EmployeesController(IEmployeeService service)
        {
            _service = service;
        }
        [HttpGet]
        [Route("{id:long}")]
        public async Task<IHttpActionResult> GetEmployeesId(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpPost]
        [Route("employees")]
        [AllowAnonymous]
        public async Task<IHttpActionResult> CreateEmployees([FromBody] Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpPut]
        [Route("UpdateEmployee")]
        public async Task<IHttpActionResult> UpdateEmployee([FromBody] Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpDelete]
        [Route("DeleteEmployee")]
        public async Task<IHttpActionResult> DeleteEmployee(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        [HttpPut]
        [Route("UpdateEmployee/{empId}")]
        public async Task<IHttpActionResult> UpdateEmployee(long empId, [FromBody] Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpGet]
        [Route("GetEmployeesByDepartment/{departmentId}")]
        public async Task<IHttpActionResult> GetEmployeesByDepartment(int departmentId)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpGet]
        [Route("GetAllEmployee")]
        public IEnumerable<Employee> GetAllEmployee()
        {
            //write your code here
            throw new NotImplementedException();
        }
    }
}