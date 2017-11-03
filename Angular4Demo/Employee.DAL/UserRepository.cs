using BusinessEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.DAL
{
    public class UserRepository
    {
        EmployeeDBEntities employeeEntity;
        public UserRepository()
        {
            employeeEntity = new EmployeeDBEntities();
        }

        public IEnumerable<UserViewModel> GetUsers()
        {
            return employeeEntity.Users
                .Select(u => new UserViewModel
                {
                    UserId = u.UserID,
                    UserName = u.UserName,
                    Email = u.Email,
                    Fine = u.Fine
                }).ToList();
        }

        public UserDetailsViewModel GetUserDetailsById(int id)
        {
            var user = employeeEntity.Users.Where(u => u.UserID == id)
                .Select(u => new UserDetailsViewModel
                {
                    UserId = u.UserID,
                    UserName = u.UserName,
                    Email = u.Email,
                    Fine = u.Fine
                }).FirstOrDefault();

            var userBooks = employeeEntity.DailyBookIssues.Include("Books").Where(d => d.UserID == id)
                .Select(d => new UserBookDetails {
                    BookId = d.BookID,
                    BookName = d.Books.BookName,
                    IssueDate = d.IssueDate,
                    ReturnDate = d.ReturnDate,
                    Fine = d.Fine
                }).ToList();
            user.BookList = userBooks;
            return user;
        }

        public bool AddNewUser(Users newUser)
        {
            try
            {
                newUser.IsActive = true;
                employeeEntity.Users.Add(newUser);
                employeeEntity.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }
        }

        public bool EditUser(Users editUser)
        {
            try
            {
                var user = employeeEntity.Users.Where(u => u.UserID == editUser.UserID).FirstOrDefault();
                user.UserName = editUser.UserName;
                user.Email = editUser.Email;
                user.IsActive = editUser.IsActive;
                user.Fine = editUser.Fine;
                employeeEntity.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }
        }

        public bool DeleteUser(int id)
        {
            try
            {
                var user = employeeEntity.Users.Where(u => u.UserID == id).FirstOrDefault();
                employeeEntity.Users.Remove(user);
                employeeEntity.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }
        }        
    }
}

