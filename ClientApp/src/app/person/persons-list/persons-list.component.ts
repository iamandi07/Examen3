import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../Persons.model';
import { PersonsService } from '../persons.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-persons-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class PersonsListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'surname', 'phoneNumber', 'email'];
  public persons: Person[];

  public dataSource;
  public isloading = false;

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.loadPersons();

  }

  async loadPersons() {
    try {
      this.personsService.listPersons().subscribe(res => {
        this.persons = res;
        this.dataSource = new MatTableDataSource(this.persons);
        this.isloading = true;
      });
    } catch (err) {
      console.error(`this is not good: ${err.Message}`);
      this.isloading = false;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deletePerson(person: Person) {
    this.personsService.deletePerson(person.id).subscribe(x => {
      this.loadPersons();
    });
  }

}
