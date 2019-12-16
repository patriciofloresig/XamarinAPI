using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Consumidor
{
    public class Alumno
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Clase { get; set; }

    }

    public static class WSAlumno
    {
        // Esta peticion nos devuelve una coleccion de objetos Alumnos en JSON 
        // que se transformaria en una lista de objetos de clase Alumnos
        public async static Task<List<Alumno>> GetCuentas()
        {
            return await new WSCliente().GetJSON<List<Alumno>>("alumnos");
        }
    }
}
