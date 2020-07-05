import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipment } from '../equipments.models';
import { EquipmentsService } from '../equipments.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['./equipments-list.component.css']
})
export class EquipmentsListComponent implements OnInit {

  public displayedColumns: string[] = ['description', 'equipementType', 'model', 'serialNumber', 'calibrationDate', 'action'];
  public equipments: Equipment[];

  public dataSource;
  public isloading = false;

  constructor(private equipmentsService: EquipmentsService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.loadEquipments();
  }

  async loadEquipments() {
    try {
      this.equipmentsService.listEquipments().subscribe(res => {
        this.equipments = res;
        this.dataSource = new MatTableDataSource(this.equipments);
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

  deleteEquipment(equipment: Equipment) {
    this.equipmentsService.deleteEquipment(equipment.id).subscribe(x => {
      this.loadEquipments();
    });
  }
}
