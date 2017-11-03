using BusinessEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.DAL
{
    public class BookRepository
    {
        EmployeeDBEntities employeeEntity;
        public BookRepository()
        {
            employeeEntity = new EmployeeDBEntities();
        }

        public IEnumerable<BooksViewModel> GetBooks()
        {
            return employeeEntity.Books.Include("BookCategories")
               .Select(b => new BooksViewModel
               {
                   bookId = b.BookID,
                   bookName = b.BookName,
                   author = b.Author,
                   category = b.BookCategories.CategoryName,
                   shelf = b.ShelfID
               }).ToList();
        }

        public IEnumerable<UsersViewModel> GetUsers()
        {
            return employeeEntity.Users
               .Select(u => new UsersViewModel
               {
                   id = u.UserID,
                   name = u.UserName,
                   email = u.Email,
                   fine = u.Fine,
                   isActive = u.IsActive
               }).ToList();
        }

        public IEnumerable<DropDownBindingModel> GetCategories()
        {
            return employeeEntity.BookCategories
               .Select(c => new DropDownBindingModel
               {
                   id = c.CategoryID,
                   name = c.CategoryName                   
               }).ToList();
        }

        public IEnumerable<DropDownBindingModel> GetShelfs(int? Id)
        {
            return employeeEntity.ShelfCategory.Where(s => s.CategoryId == (Id !=0 ? Id : s.CategoryId))
               .Select(s => new DropDownBindingModel
               {
                   id = s.ShelfId,
                   name = s.ShelfId.ToString()
               }).ToList();
        }

        public IEnumerable<ShelfsViewModel> GetShelfsByCategory(int id)
        {
            return employeeEntity.ShelfCategory.Include("ShelfDetails").Where(s => s.CategoryId == id)
               .Select(s => new ShelfsViewModel
               {
                   id = s.ShelfId,
                   capacity = s.ShelfDetails.ShelfCapacity
               }).ToList();
        }

        public IEnumerable<BooksIssuedViewModel> GetIssuedBooks()
        {
            return employeeEntity.DailyBookIssues.Include("Books").Include("Users")
                .Select(b => new BooksIssuedViewModel
                {
                    BookId = b.BookID,
                    BookName = b.Books.BookName,
                    Email = b.Users.Email,
                    UserId = b.UserID,
                    UserName = b.Users.UserName
                }).ToList();
        }

        public string EnterBookIssued(DailyBookIssues bookIssued)
        {

            try
            {
                employeeEntity.DailyBookIssues.Add(bookIssued);
                employeeEntity.SaveChanges();
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
            return "success";
        }

        public bool AddNewBook(Books newBook)
        {
            try
            {
                int? bookId = employeeEntity.Books.Where(b => b.CategoryID == newBook.CategoryID)
                    .OrderByDescending(b => b.BookID).FirstOrDefault()?.BookID;
                if(bookId == null)
                {
                    newBook.BookID = newBook.CategoryID * 100;
                }
                else
                {
                    newBook.BookID = bookId.Value + 1;
                }                
                employeeEntity.Books.Add(newBook);
                employeeEntity.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }            
        }

        public bool AddNewShelf(AddNewShelfViewModel newShelf)
        {
            int shelfId;
            try
            {
                int? shelfCat = employeeEntity.ShelfCategory.Where(s => s.CategoryId == newShelf.CategoryId)
                    .OrderByDescending(s => s.ShelfId).FirstOrDefault()?.ShelfId;
                
                if(shelfCat == null)
                {
                    shelfId = newShelf.CategoryId * 10;
                }
                else
                {
                    shelfId = shelfCat.Value + 1;
                }

                ShelfDetails shelf = new ShelfDetails()
                {
                    ShelfID = shelfId,
                    ShelfCapacity = newShelf.ShelfCapacity
                };
                employeeEntity.ShelfDetails.Add(shelf);

                ShelfCategory shelfCategory = new ShelfCategory()
                {
                    CategoryId = newShelf.CategoryId,
                    ShelfId = shelfId
                };                
                employeeEntity.ShelfCategory.Add(shelfCategory);
                employeeEntity.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }        
    }
}
