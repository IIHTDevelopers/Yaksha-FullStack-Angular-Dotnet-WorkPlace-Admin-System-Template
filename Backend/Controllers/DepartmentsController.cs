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
    [RoutePrefix("api/departments")]
    public class DepartmentsController : ApiController
    {
        private readonly IDepartmentsServices _service;
        // GET: Departments
        public DepartmentsController()
        { }
        public DepartmentsController(IDepartmentsServices service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("GetAllDepartments")]
        public IEnumerable<Department> GetAllDepartments()
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpGet]
        [Route("{id:long}")]
        public async Task<IHttpActionResult> GetDepartmentsId(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpPost]
        [Route("departments")]
        [AllowAnonymous]
        public async Task<IHttpActionResult> CreateDepartments([FromBody] Department model)
        {
            //write your code here
            throw new NotImplementedException();
        }
        [HttpPut]
        [Route("UpdateDepartment/{deptId}")]
        public async Task<IHttpActionResult> UpdateDepartment(long deptId, [FromBody] Department model)
        {
            //write your code here
            throw new NotImplementedException();
        }
    }
}