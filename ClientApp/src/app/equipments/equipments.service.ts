import { HttpClient } from "@angular/common/http";
import { ApplicationService } from "../core/services/application.service";
import { Injectable } from "@angular/core";
import { Equipment } from "./equipments.models";

@Injectable()
export class EquipmentsService {

  constructor(
    private http: HttpClient,
    private applicationService: ApplicationService) { }

  getEquipment(id: number) {
    return this.http.get<Equipment>(`${this.applicationService.baseUrl}api/Equipments/${id}`);
  }

  listEquipments() {
    return this.http.get<Equipment[]>(`${this.applicationService.baseUrl}api/Equipments`);
  }

  saveEquipment(equipment: Equipment) {
    return this.http.post(`${this.applicationService.baseUrl}api/Equipments`, equipment);
  }

  modifyEquipment(equipment: Equipment) {
    return this.http.put(`${this.applicationService.baseUrl}api/Equipments/${equipment.id}`, equipment);
  }

  deleteEquipment(id: number) {
    return this.http.delete<any>(`${this.applicationService.baseUrl}api/Equipments/${id}`);
  }
}
