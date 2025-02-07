using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using EmployeeManagement_API.DAL.Interfaces;
using EmployeeManagement_API.DAL.Services.Repository;
using EmployeeManagement_API.Models;

namespace EmployeeManagement_API.DAL.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeesRepository _repository;
        public EmployeeService(IEmployeesRepository repository) 
        {
            _repository = repository;
        }
        public Task<Employee> CreateEmployee(Employee employee)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<bool> DeleteEmployeeById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public List<Employee> GetAllEmployee()
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<Employee> GetEmployeeById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Employee>> GetEmployeesByDepartment(int departmentId)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<Employee> UpdateEmployee(Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public Task<Employee> UpdateEmployee(long empId, Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }
    }
}