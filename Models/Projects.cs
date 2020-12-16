using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio_v3.Models
{
    public class Projects
    {
        public int Id { get; set; }
        public string Link { get; set; }
        public string Name { get; set; }
        public int Date { get; set; }
        public Technologies[] Technologies { get; set; }
        public Roles[] Roles { get; set; }
        public string Client { get; set; }
        public string Description { get; set; }
        public Pictures[] Pictures { get; set; }
        public string  Testimonial { get; set; }
        public string ClientName { get; set; }
        public bool Download { get; set; }
        public bool Code { get; set; }
        public bool Live { get; set; }
    }
    public class Technologies
    {
        public string Id { get; set; }
        public string Name { get; set; }

    }
    public class Roles {
        public string Id { get; set; }
        public string Name { get; set; }
    }
    public class Pictures {
        public string Id { get; set; }
        public string Path { get; set; }
    }
}
