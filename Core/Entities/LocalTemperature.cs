﻿using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class LocalTemperature : BaseEntity
    {
        public DateTime TempDate { get; set; }
        public TimeOnly TempTime { get; set; }
        [MaxLength(60)]
        public string DistName { get; set; }
        public Int64 Latitude { get; set; }
        public Int64 Longitude { get; set; }
    }
}
