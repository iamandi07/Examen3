import { Component, OnInit, ViewChild } from '@angular/core';
import { InspectionPlan } from '../inspectionPlans.models';
import { InspectionPlansService } from '../inspectionPlans.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-inspectionPlans-list',
  templateUrl: './inspectionPlans-list.component.html',
  styleUrls: ['./inspectionPlans-list.component.css']
})
export class InspectionPlansListComponent implements OnInit {

  public displayedColumns: string[] = ['description', 'temperature', 'humidity', 'pressure', 'personId', 'action' ];
  public inspectionPlans: InspectionPlan[]

  public dataSource;
  public isloading = false;

  constructor(private inspectionPlansService: InspectionPlansService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
      this.loadInspectionPlans();
  }

  async loadInspectionPlans() {
    try {
      this.inspectionPlansService.listInspectionPlans().subscribe(res => {
        this.inspectionPlans = res;
        this.dataSource = new MatTableDataSource(this.inspectionPlans);
        this.isloading = true;
        this.dataSource.paginator = this.paginator;
      });
    } catch (err) {
      console.error('this is not good: ${err/Message}')
      this.isloading = false;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteInspectionPlan(inspectionPlan: InspectionPlan) {
      this.inspectionPlansService.deleteInspectionPlan(inspectionPlan.id).subscribe(x => {
        this.loadInspectionPlans();
    })
  }
}
