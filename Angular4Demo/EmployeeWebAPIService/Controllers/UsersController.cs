using BusinessEntities;
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
    public class UsersController : ApiController
    {
        UserManager userManager;

        public UsersController()
        {
            userManager = new UserManager();
        }

        [Route("api/users/GetUsers")]
        public IEnumerable<UserViewModel> GetUsers()
        {
            return userManager.GetUsers();
        }

        [Route("api/users/GetUserDetailsById/{id}")]
        public UserDetailsViewModel GetUserDetailsById(int id)
        {
            return userManager.GetUserDetailsById(id);
        }

        [Route("api/users/AddNewUser")]
        [HttpPost]
        public bool AddNewUser(Users newUser)
        {
            return userManager.AddNewUser(newUser);
        }
    }
}
