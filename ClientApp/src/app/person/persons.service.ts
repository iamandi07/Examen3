import { HttpClient } from "@angular/common/http";
import { ApplicationService } from "../core/services/application.service";
import { Injectable } from "@angular/core";
import { Person } from "./Persons.model";

@Injectable()
export class PersonsService {

  constructor(
    private http: HttpClient,
    private applicationService: ApplicationService) { }

  getPerson(id: number) {
    return this.http.get<Person>(`${this.applicationService.baseUrl}api/People/${id}`);
  }

  listPersons() {
    return this.http.get<Person[]>(`${this.applicationService.baseUrl}api/People`);
  }

  savePerson(person: Person) {
    return this.http.post(`${this.applicationService.baseUrl}api/People`, person);
  }

  modifyPerson(person: Person) {
    return this.http.put(`${this.applicationService.baseUrl}api/People/${person.id}`, person);
  }

  deletePerson(id: number) {
    return this.http.delete<any>(`${this.applicationService.baseUrl}api/People/${id}`);
  }
}
