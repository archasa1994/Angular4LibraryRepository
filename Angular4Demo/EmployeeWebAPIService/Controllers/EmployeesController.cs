using Employee.BusinessLayer;
using Employee.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebAPIService.Controllers
{
    public class EmployeesController : ApiController
    {
        EmployeeManager employeeManager;

        public EmployeesController()
        {
            employeeManager = new EmployeeManager();
        }

        [Route("api/employees/Login")]
        [HttpPost]
        public bool Login(Employees loginDetails)
        {
            return employeeManager.Login(loginDetails);
        }

        [Route("api/employees/Get")]
        public IEnumerable<Employees> Get()
        {
            return employeeManager.GetEmployees();
        }

        [Route("api/employees/Get/{code}")]
        public Employees Get(string code)
        {
            return employeeManager.GetEmployeeByCode(code);
        }

        [Route("api/employees/Post")]
        [HttpPost]
        public bool Post([FromBody]Employees editEmployee)
        {
            try
            {
                if (editEmployee == null)
                    return false;
                else
                {
                    var result = employeeManager.EditEmployee(editEmployee);
                    if (result == true)
                        return true;
                    else
                        return false;
                }
            }
            catch(Exception)
            {
                return false;
            }              
        }

        [Route("api/employees/DeleteEmployee")]
        [HttpPost]
        public bool DeleteEmployee([FromBody]string code)
        {
            try
            {
                if (code == null)
                    return false;
                else
                {
                    var result = employeeManager.DeleteEmployee(code);
                    if (result == true)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }

        [Route("api/employees/AddNewEmployee")]
        [HttpPost]
        public bool AddNewEmployee([FromBody]Employees newEmployee)
        {
            try
            {
                if (newEmployee == null)
                    return false;
                else
                {
                    var result = employeeManager.AddNewEmployee(newEmployee);
                    if (result == true)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
