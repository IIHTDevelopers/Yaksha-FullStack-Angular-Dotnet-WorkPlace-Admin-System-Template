using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using EmployeeManagement_API.DAL;
using EmployeeManagement_API.DAL.Services.Repository;
using EmployeeManagement_API.Models;

namespace Web_API_with_Angular.DAL.Services.Repository
{
    public class EmployeesRepository : IEmployeesRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public EmployeesRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Employee> CreateEmployee(Employee employee)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteEmployeeById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public List<Employee> GetAllEmployee()
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Employee> GetEmployeeById(long id)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Employee>> GetEmployeesByDepartment(int departmentId)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Employee> UpdateEmployee(Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }

        public async Task<Employee> UpdateEmployee(long empId, Employee model)
        {
            //write your code here
            throw new NotImplementedException();
        }
    }
}