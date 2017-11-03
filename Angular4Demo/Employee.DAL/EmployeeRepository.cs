using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.DAL
{
    public class EmployeeRepository
    {
        EmployeeDBEntities employeeEntity;
        public EmployeeRepository()
        {
            employeeEntity = new EmployeeDBEntities();
        }

        public bool Login(Employees loginDetails)
        {
            return employeeEntity.Employees.Where(e => e.name == loginDetails.name && e.password == loginDetails.password).Any();
        }

        public IEnumerable<Employees> GetEmployees()
        {
            return employeeEntity.Employees.ToList();
        }

        public Employees GetEmployeeByCode(string code)
        {
            var employee = employeeEntity.Employees.Where(e => e.code == code).FirstOrDefault();
            employee.dateOfBirth = employee.dateOfBirth.Value.Date;
            var a = employee.dateOfBirth.Value.Date;
            return employee;
        }

        public bool EditEmployee(Employees editEmployee )
        {
            try
            {
                var employee = employeeEntity.Employees.Where(e => e.code == editEmployee.code).FirstOrDefault();
                employee.name = editEmployee.name;
                employee.gender = editEmployee.gender;
                employee.annualSalary = editEmployee.annualSalary;
                employee.dateOfBirth = editEmployee.dateOfBirth;
                employeeEntity.SaveChanges();
                return true;
            }
            
            catch
            {
                return false;
            }
        }

        public bool DeleteEmployee(string code)
        {
            try
            {
                var employee = employeeEntity.Employees.Where(e => e.code == code).FirstOrDefault();
                employeeEntity.Employees.Remove(employee);
                employeeEntity.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }
        }

        public bool AddNewEmployee(Employees newEmployee)
        {
            try
            {
                string newEmpCode;
                if (employeeEntity.Employees.Count() == 0)
                    newEmpCode = "emp101";
                else
                {
                    var empCode = employeeEntity.Employees.OrderByDescending(e => e.code).FirstOrDefault().code;
                    empCode = empCode.Substring(3);
                    int newEmpNumber = Convert.ToInt32(empCode) + 1;
                    newEmpCode = "emp" + newEmpNumber;                    
                }                
                newEmployee.code = newEmpCode;                
                employeeEntity.Employees.Add(newEmployee);
                employeeEntity.SaveChanges();
                return true;
            }

            catch(Exception ex)
            {
                return false;
            }
        }
    }
}
