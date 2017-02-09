using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiShoes.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Stores()
        {
            ViewBag.Title = "Stores Page";

            return View();
        }

        public ActionResult Articles()
        {
            ViewBag.Title = "Articles Page";

            return View();
        }
    }
}
