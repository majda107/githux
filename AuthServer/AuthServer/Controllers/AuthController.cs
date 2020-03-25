using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CORSTest.Controllers
{
    public class AuthController: ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        private readonly string _client_id = String.Empty;
        private readonly string _client_secret = String.Empty;
        public AuthController(IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            this._clientFactory = clientFactory;

            this._client_id = configuration["Secret:ClientID"];
            this._client_secret = configuration["Secret:ClientSecret"];
        }

        [HttpGet]
        [Route("auth/GetToken")]
        public async Task<IActionResult> GetToken(string code)
        {
            var client = this._clientFactory.CreateClient();


            var res = await client.GetAsync($"https://github.com/login/oauth/access_token?code={code}&client_id={this._client_id}&client_secret={this._client_secret}");

            var content = await res.Content.ReadAsStringAsync();

            Console.WriteLine(" --- TOKEN: " + content);

            var result = new JsonResult(new { token = content });

            return result;
        }
    }
}
