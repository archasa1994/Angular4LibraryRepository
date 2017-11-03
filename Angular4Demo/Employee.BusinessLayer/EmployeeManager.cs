using Employee.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.BusinessLayer
{
    public class EmployeeManager
    {
        EmployeeRepository employeeRepository;

        public EmployeeManager()
        {
            employeeRepository = new EmployeeRepository();
        }

        public bool Login(Employees loginDetails)
        {
            return employeeRepository.Login(loginDetails);
        }

        public IEnumerable<Employees> GetEmployees()
        {
            return employeeRepository.GetEmployees();
        }

        public Employees GetEmployeeByCode(string code)
        {
            return employeeRepository.GetEmployeeByCode(code);
        }

        public bool EditEmployee(Employees editEmployee)
        {
            return employeeRepository.EditEmployee(editEmployee);
        }

        public bool DeleteEmployee(string code)
        {
            return employeeRepository.DeleteEmployee(code);
        }

        public bool AddNewEmployee(Employees newEmployee)
        {
            return employeeRepository.AddNewEmployee(newEmployee);
        }
    }
}
