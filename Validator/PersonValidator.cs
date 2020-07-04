using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examen3.Model;
using FluentValidation;

namespace Examen3.Validator
{
    public class PersonValidator : AbstractValidator<Person>
    {
        public PersonValidator()
        {
            RuleFor(x => x.PhoneNumber).Length(10);
        }
    }
}
