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

  public displayedColumns: string[] = ['name'];
  public persons: Person[];

  public dataSource;
  public isloading = false;

  constructor(private personsService: PersonsService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.loadPersons();

  }

  async loadPersons() {
    try {
      this.personsService.listPersons().subscribe(res => {
        this.persons = res;
        this.dataSource = new MatTableDataSource(this.persons);
        this.isloading = true;
        this.dataSource.paginator = this.paginator;
      });
    } catch (err) {
      console.error(`this is not good: ${err.Message}`);
      this.isloading = false;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteEmployee(person: Person) {
    this.personsService.deletePerson(person.id).subscribe(x => {
      this.loadPersons();
    });
  }

}
