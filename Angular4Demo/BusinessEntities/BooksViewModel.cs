using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities
{
    public class BooksViewModel
    {
        public int bookId { get; set; }
        public string bookName { get; set; }
        public string author { get; set; }
        public string category { get; set; }
        public int shelf { get; set; }
    }
}
