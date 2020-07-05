using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examen3.Model
{
    public class Calibration
    {
        public long Id { get; set; }
        public long EquipmentId { get; set; }
        public Equipment Equipment { get; set; }
        public long PersonId { get; set; }
        public Person Person { get; set; }
    }
}
