import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InspectionPlan } from "./inspectionPlans.models";
import { ApplicationService } from "../core/services/application.service";

@Injectable()
export class InspectionPlansService {

  constructor(
    private http: HttpClient,
    private applicationService: ApplicationService) { }

  getInspectionPlan(id: number) {
    return this.http.get<InspectionPlan>(`${this.applicationService.baseUrl}api/InspectionPlans/${id}`);
  }

  listInspectionPlans() {
    return this.http.get<InspectionPlan[]>(`${this.applicationService.baseUrl}api/InspectionPlans`);
  }

  saveInspectionPlan(inspectionPlan: InspectionPlan) {
    return this.http.post(`${this.applicationService.baseUrl}api/InspectionPlans`, inspectionPlan);
  }

  modifyInspectionPlan(inspectionPlan: InspectionPlan) {
    return this.http.put(`${this.applicationService.baseUrl}api/InspectionPlans/${inspectionPlan.id}`, inspectionPlan);
  }

  deleteInspectionPlan(id: number) {
    return this.http.delete<any>(`${this.applicationService.baseUrl}api/InspectionPlans/${id}`);
  }
}
