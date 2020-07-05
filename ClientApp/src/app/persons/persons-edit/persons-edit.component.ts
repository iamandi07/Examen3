import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonsService } from '../persons.service';
import { Person } from '../persons.models';

@Component({
  selector: 'app-persons-edit',
  templateUrl: './persons-edit.component.html',
  styleUrls: ['./persons-edit.component.css']
})
export class PersonsEditComponent implements OnInit {
  private routerLink: string = '../list';

  private personId: number;

  private isEdit: boolean = false;

  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personsService: PersonsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.personId = parseInt(this.route.snapshot.params['id']);

    if (this.personId) {
      this.routerLink = '../../list';

      this.personsService.getPerson(this.personId).subscribe(res => {
        this.initForm(res);
        this.isEdit = true;
      });
    }
    else {
      this.initForm(<Person>{});
    }
  }

  save() {
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });

    if (this.formGroup.valid) {
      let person = this.formGroup.value as Person;
      person.name = person.name;
      person.surname = person.surname;
      person.phoneNumber = person.phoneNumber;
      person.email = person.email;

      if (this.isEdit) {
        person.id = this.personId;

        this.personsService.modifyPerson(person).subscribe(res => {
          this.router.navigate(['/persons']);
        });
      } else {

        this.personsService.savePerson(person).subscribe(res => {
          this.router.navigate(['/persons']);
        });
      }
    }
  }

  initForm(person: Person) {
    this.formGroup = this.formBuilder.group({
      name: [person.name, Validators.required],
      surname: [person.surname, Validators.required],
      phoneNumber: [person.phoneNumber, Validators.required],
      email: [person.email, Validators.required]
    });
  }

}
