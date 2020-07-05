import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EquipmentsService } from '../equipments.service';
import { Equipment } from '../equipments.models';

@Component({
  selector: 'app-equipments-edit',
  templateUrl: './equipments-edit.component.html',
  styleUrls: ['./equipments-edit.component.css']
})
export class EquipmentsEditComponent implements OnInit {

  private routerLink: string = '../list';

  private equipmentId: number;

  private isEdit: boolean = false;

  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private equipmentsService: EquipmentsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.equipmentId = parseInt(this.route.snapshot.params['id']);

    if (this.equipmentId) {
      this.routerLink = '../../list';

      this.equipmentsService.getEquipment(this.equipmentId).subscribe(res => {
        this.initForm(res);
        this.isEdit = true;
      });
    }
    else {
      this.initForm(<Equipment>{});
    }
  }

  save() {
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });

    if (this.formGroup.valid) {
      let equipment = this.formGroup.value as Equipment;
      equipment.description = equipment.description;
      equipment.equipementType = equipment.equipementType;
      equipment.model = equipment.model;
      equipment.serialNumber = equipment.serialNumber;
      equipment.calibrationDate = equipment.calibrationDate;

      if (this.isEdit) {
        equipment.id = this.equipmentId;

        this.equipmentsService.modifyEquipment(equipment).subscribe(res => {
          this.router.navigate(['/equipments']);
        });
      } else {

        this.equipmentsService.saveEquipment(equipment).subscribe(res => {
          this.router.navigate(['/equipments']);
        });
      }
    }
  }

  initForm(equipment: Equipment) {
    this.formGroup = this.formBuilder.group({
      description: [equipment.description, Validators.required],
      equipementType: [equipment.equipementType, Validators.required],
      model: [equipment.model, Validators.required],
      serialNumber: [equipment.serialNumber, Validators.required],
      calibrationDate: [equipment.calibrationDate, Validators.required]
    });
  }

}
