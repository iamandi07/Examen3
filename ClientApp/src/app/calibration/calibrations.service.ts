import { HttpClient } from "@angular/common/http";
import { ApplicationService } from "../core/services/application.service";
import { Injectable } from "@angular/core";
import { Calibration } from "./calibrations.models";

@Injectable()
export class CalibrationsService {

  constructor(
    private http: HttpClient,
    private applicationService: ApplicationService) { }

  getCalibration(id: number) {
    return this.http.get<Calibration>(`${this.applicationService.baseUrl}api/Calibrations/${id}`);
  }

  listCalibrations() {
    return this.http.get<Calibration[]>(`${this.applicationService.baseUrl}api/Calibrations`);
  }

  saveCalibrations(calibration: Calibration) {
    return this.http.post(`${this.applicationService.baseUrl}api/Calibrations`, calibration);
  }

  modifyCalibration(calibration: Calibration) {
    return this.http.put(`${this.applicationService.baseUrl}api/Calibrations/${calibration.equipmentId}`, calibration);
  }

  deleteCalibration(id: number) {
    return this.http.delete<any>(`${this.applicationService.baseUrl}api/Calibrations/${id}`);
  }
}
