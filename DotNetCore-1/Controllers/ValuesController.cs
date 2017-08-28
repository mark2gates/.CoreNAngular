using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace VSCodeExperiment.Controllers
{
    public class Person{
        public int ID {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
    }
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return new List<Person> { 
                new Person{ID=0, FirstName="Nilesh",LastName="Patel"},
                new Person{ID=0, FirstName="Yami",LastName="Patel"},
                new Person{ID=0, FirstName="Vaishu",LastName="Patel"},
                new Person{ID=0, FirstName="Jetra",LastName="Patel"},
             };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            return null;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
