import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CalibrationsService } from '../calibrations.service';
import { Calibration } from '../calibrations.models';

@Component({
  selector: 'app-calibrations-edit',
  templateUrl: './calibrations-edit.component.html',
  styleUrls: ['./calibrations-edit.component.css']
})
export class CalibrationsEditComponent implements OnInit {

  private routerLink: string = '../list';

  private calibrationId: number;

  private isEdit: boolean = false;

  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calibrationsService: CalibrationsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.calibrationId = parseInt(this.route.snapshot.params['id']);

    if (this.calibrationId) {
      this.routerLink = '../../list';

      this.calibrationsService.getCalibration(this.calibrationId).subscribe(res => {
        this.initForm(res);
        this.isEdit = true;
      });
    }
    else {
      this.initForm(<Calibration>{});
    }
  }

  save() {
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });

    if (this.formGroup.valid) {
      let calibration = this.formGroup.value as Calibration;
      calibration.equipmentId = calibration.equipmentId;
      calibration.personId = calibration.personId;

      if (this.isEdit) {
        calibration.id = this.calibrationId

        this.calibrationsService.modifyCalibration(calibration).subscribe(res => {
          this.router.navigate(['/calibrations']);
        });
      } else {

        this.calibrationsService.saveCalibrations(calibration).subscribe(res => {
          this.router.navigate(['/calibrations']);
        });
      }
    }
  }

  initForm(calibration: Calibration) {
    this.formGroup = this.formBuilder.group({
      equipmentId: [calibration.equipmentId, Validators.required],
      personId: [calibration.personId, Validators.required]
    });
  }

}
