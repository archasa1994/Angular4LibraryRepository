using BusinessEntities;
using Employee.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.BusinessLayer
{
    public class BookManager
    {
        BookRepository bookRepository;

        public BookManager()
        {
            bookRepository = new BookRepository();
        }

        public IEnumerable<BooksViewModel> GetBooks()
        {
            return bookRepository.GetBooks();
        }

        public IEnumerable<UsersViewModel> GetUsers()
        {
            return bookRepository.GetUsers();
        }

        public IEnumerable<DropDownBindingModel> GetCategories()
        {
            return bookRepository.GetCategories();
        }

        public IEnumerable<DropDownBindingModel> GetShelfs(int? id)
        {
            return bookRepository.GetShelfs(id);
        }

        public IEnumerable<ShelfsViewModel> GetShelfsByCategory(int id)
        {
            return bookRepository.GetShelfsByCategory(id);
        }

        public IEnumerable<BooksIssuedViewModel> GetIssuedBooks()
        {
            return bookRepository.GetIssuedBooks();
        }

        public string EnterBookIssued(DailyBookIssues bookIssued)
        {             
            bookIssued.ReturnDate = DateTime.Now.AddDays(7);
            return (bookRepository.EnterBookIssued(bookIssued));
        }

        public bool AddNewBook(Books newBook)
        {           
            return (bookRepository.AddNewBook(newBook));
        }

        public bool AddNewShelf(AddNewShelfViewModel newShelf)
        {
            return (bookRepository.AddNewShelf(newShelf));
        }
    }
}
