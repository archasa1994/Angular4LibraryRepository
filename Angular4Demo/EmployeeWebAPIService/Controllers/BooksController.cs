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
    public class BooksController : ApiController
    {
        BookManager bookManager;

        public BooksController()
        {
            bookManager = new BookManager();
        }

        [Route("api/books/GetBooks")]
        public IEnumerable<BooksViewModel> GetBooks()
        {
            return bookManager.GetBooks();
        }

        [Route("api/books/GetUsers")]
        public IEnumerable<UsersViewModel> GetUsers()
        {
            return bookManager.GetUsers();
        }

        [Route("api/books/GetCategories")]
        public IEnumerable<DropDownBindingModel> GetCategories()
        {
            return bookManager.GetCategories();
        }

        [Route("api/books/GetShelfs/{id=0}")]
        public IEnumerable<DropDownBindingModel> GetShelfs(int? id)
        {
            return bookManager.GetShelfs(id);
        }

        [Route("api/books/GetShelfsByCategory/{category}")]
        public IEnumerable<ShelfsViewModel> GetShelfsByCategory(int category)
        {
            return bookManager.GetShelfsByCategory(category);
        }

        [Route("api/books/GetIssuedBooks")]
        public IEnumerable<BooksIssuedViewModel> GetIssuedBooks()
        {
            return bookManager.GetIssuedBooks();
        }

        [Route("api/books/BookIssue")]
        [HttpPost]
        public bool BookIssue(DailyBookIssues bookIssued)
        {
           
            if (bookManager.EnterBookIssued(bookIssued) == "success")
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [Route("api/books/AddNewBook")]
        [HttpPost]
        public bool AddNewBook(Books newBook)
        {
            try
            {
                return bookManager.AddNewBook(newBook);               
            }
            catch(Exception)
            {
                return false;
            }            
        }

        [Route("api/books/AddNewShelf")]
        [HttpPost]
        public bool AddNewShelf(AddNewShelfViewModel newShelf)
        {
            try
            {
                return bookManager.AddNewShelf(newShelf);
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
