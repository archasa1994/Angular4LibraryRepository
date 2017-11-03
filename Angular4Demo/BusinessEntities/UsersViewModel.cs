using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntities
{
    public class UsersViewModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public decimal fine { get; set; }
        public bool isActive { get; set; }
    }
}
