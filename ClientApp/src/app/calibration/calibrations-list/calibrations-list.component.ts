import { Component, OnInit, ViewChild } from '@angular/core';
import { Calibration } from '../calibrations.models';
import { CalibrationsService } from '../calibrations.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-calibrations-list',
  templateUrl: './calibrations-list.component.html',
  styleUrls: ['./calibrations-list.component.css']
})
export class CalibrationsListComponent implements OnInit {

  public displayedColumns: string[] = ['equipmentId', 'personId', 'action'];
  public calibrations: Calibration[];

  public dataSource;
  public isloading = false;

  constructor(private calibrationsService: CalibrationsService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.loadCalibrations();
  }

  async loadCalibrations() {
    try {
      this.calibrationsService.listCalibrations().subscribe(res => {
        this.calibrations = res;
        this.dataSource = new MatTableDataSource(this.calibrations);
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

  deleteCalibration(calibration: Calibration) {
    this.calibrationsService.deleteCalibration(calibration.equipmentId).subscribe(x => {
      this.loadCalibrations();
    });
  }
}
