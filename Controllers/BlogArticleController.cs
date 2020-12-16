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
    [Route("api/blogArticle")]
    public class BlogArticleController : Controller
    {
        [HttpGet]
        public List<BlogArticle> GetAboutMeInfo()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/blogArticlesData.json");
            return JsonConvert.DeserializeObject<List<BlogArticle>>(jsonText);
        }
    }
}
