using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Portfolio_v3.Models;

namespace Portfolio_v3.Controllers
{
    [ApiController]
    [Route("api/projects")]
    public class ProjectsController : Controller
    {
        [HttpGet]
        public List<Projects> GetProjectInfo()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/projects.json");
            return JsonConvert.DeserializeObject<List<Projects>>(jsonText);
        }
    }
}
