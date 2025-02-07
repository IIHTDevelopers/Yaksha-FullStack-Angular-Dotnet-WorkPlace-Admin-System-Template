using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using EmployeeManagement_API.DAL;
using EmployeeManagement_API.Models;

namespace Web_API_with_Angular.DAL.Services.Repository
{
    public class DepartmentsRepository : IDepartmentsRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public DepartmentsRepository(ApplicationDbContext dbContext) 
        {
            _dbContext = dbContext;
        }
        public async Task<Department> CreateDepartment(Department department)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteDepartmentById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public List<Department> GetAllDepartment()
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Department> GetDepartmentById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Department> GetDepartmentByName(string name)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Department> UpdateDepartment(Department model)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Department> UpdateDepartment(long deptId, Department model)
        {
            //write your code here
            throw new NotImplementedException();
        }
    }
}