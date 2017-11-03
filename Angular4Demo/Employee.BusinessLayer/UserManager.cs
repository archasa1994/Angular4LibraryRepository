using BusinessEntities;
using Employee.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.BusinessLayer
{
    public class UserManager
    {
        UserRepository userRepository;

        public UserManager()
        {
            userRepository = new UserRepository();
        }

        public IEnumerable<UserViewModel> GetUsers()
        {
            return userRepository.GetUsers();
        }

        public UserDetailsViewModel GetUserDetailsById(int id)
        {
            return userRepository.GetUserDetailsById(id);
        }

        public bool AddNewUser(Users newUser)
        {
            return userRepository.AddNewUser(newUser);
        }
    }
}
