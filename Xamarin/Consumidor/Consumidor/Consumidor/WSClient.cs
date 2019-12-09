﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace Consumidor
{
    public class WSCliente
    {
        private HttpClient client = new HttpClient();


        public WSCliente()
        {
            client.BaseAddress =  new Uri("http://192.168.204.145:3000/");
        }

        public async Task<T> Get<T>(string url)
        {
            var response = await client.GetAsync(url);
            var json = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(json);
        }

        public async Task PostJson (string url, Alumno o)
        {
            HttpClient client = new HttpClient();
            var content = new StringContent(JsonConvert.SerializeObject(o), Encoding.UTF8, "application/json");
            var result = client.PostAsync(url, content).Result;
            var response = await client.PostAsync(url, content);
        }

    }
}
