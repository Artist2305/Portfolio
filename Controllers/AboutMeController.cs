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
    [Route("api/aboutMe")]
    public class AboutMeController : Controller
    {
        [HttpGet]
        public AboutMe GetAboutMeInfo()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/aboutMe.json");
            return JsonConvert.DeserializeObject<AboutMe>(jsonText);
        }
    }
}
