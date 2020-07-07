import { Person } from "./persons.models";

export interface PaginatedPersons {
  currentPage: number,
  totalItems: number,
  itemsPerPage: number,
  persons: Person[];
}
