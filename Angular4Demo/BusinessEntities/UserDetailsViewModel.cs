using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities
{
    public class UserDetailsViewModel : UserViewModel
    {
        public IEnumerable<UserBookDetails> BookList { get; set; }
    }

    public class UserBookDetails
    {
        public int BookId { get; set; }
        public string BookName { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public decimal Fine { get; set; }
    }
}
