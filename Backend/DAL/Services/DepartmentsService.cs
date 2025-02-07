using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using EmployeeManagement_API.DAL.Interfaces;
using Web_API_with_Angular.DAL.Services.Repository;
using EmployeeManagement_API.Models;

namespace EmployeeManagement_API.DAL.Services
{
    public class DepartmentsService : IDepartmentsServices
    {
        private readonly IDepartmentsRepository _repository;
        public DepartmentsService(IDepartmentsRepository repository)
        {
            _repository = repository;
        }
        public Task<Department> CreateDepartment(Department department)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<bool> DeleteDepartmentById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public List<Department> GetAllDepartment()
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<Department> GetDepartmentById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<Department> GetDepartmentByName(string name)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<Department> UpdateDepartment(Department model)
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