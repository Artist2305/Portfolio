using Microsoft.AspNetCore.Mvc;
using Portfolio_v3.Models;
using MimeKit;
using System.Security.Authentication;

namespace Portfolio_v3.Controllers
{
    [ApiController]
    [Route("sendmessage")]
    public class MessageController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody] Message ms)
        {
            if (ModelState.IsValid)
            {
                MimeMessage message = new MimeMessage();

                MailboxAddress from = new MailboxAddress("Costumer",
                "szostekm230590@gmail.com");
                message.From.Add(from);

                MailboxAddress to = new MailboxAddress("User",
                "szostekm230590@gmail.com");
                message.To.Add(to);

                message.Subject = "JOB ALERT";

                BodyBuilder bodyBuilder = new BodyBuilder()
                {
                    HtmlBody = ms.Text + " EMAIL ADDRESS: " + ms.Email + " NAME: " + ms.Name,
                    TextBody = ms.Text + " EMAIL ADDRESS: " + ms.Email + " NAME: " + ms.Name
                };

                //bodyBuilder.Attachments.Add(_hostingEnvironment.WebRootPath + "\\file.png");

                message.Body = bodyBuilder.ToMessageBody();

                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                    client.SslProtocols = SslProtocols.Ssl3 | SslProtocols.Tls | SslProtocols.Tls11 | SslProtocols.Tls12 | SslProtocols.Tls13;
                    client.Connect("smtp.gmail.com", 465, true);

                    client.Authenticate("", "");

                    client.Send(message);
                    client.Disconnect(true);
                    client.Dispose();
                }
                return new JsonResult(ms);
            }
            return new JsonResult(ms);
        }
    }
}
