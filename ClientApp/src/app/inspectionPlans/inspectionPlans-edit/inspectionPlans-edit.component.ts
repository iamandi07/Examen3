import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InspectionPlansService } from '../inspectionPlans.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InspectionPlan } from '../inspectionPlans.models';

@Component({
  selector: 'app-inspectionPlans-edit',
  templateUrl: './inspectionPlans-edit.component.html',
  styleUrls: ['./inspectionPlans-edit.component.css']
})
export class InspectionPlansEditComponent implements OnInit {

  private routerLink: string = '../list';

  private inspectionPlanId: number;

  private isEdit: boolean = false;

  private formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inspectionPlansService: InspectionPlansService,
    private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.inspectionPlanId = parseInt(this.route.snapshot.params['id']);

    if (this.inspectionPlanId) {
      this.routerLink = '../../list';

      this.inspectionPlansService.getInspectionPlan(this.inspectionPlanId).subscribe(res => {
        this.initForm(res);
        this.isEdit = true;
      });
    }

    else {
      this.initForm(<InspectionPlan>{});
    }
  }

  save() {
    Object.keys(this.formGroup.controls).forEach(control => {
      this.formGroup.get(control).markAsTouched();
    });

    if (this.formGroup.valid) {
      let inspectionPlan = this.formGroup.value as InspectionPlan;
      inspectionPlan.description = inspectionPlan.description;
      inspectionPlan.temperature = inspectionPlan.temperature;
      inspectionPlan.humidity = inspectionPlan.humidity;
      inspectionPlan.pressure = inspectionPlan.pressure;
      inspectionPlan.personId = inspectionPlan.personId;

      if (this.isEdit) {
        inspectionPlan.id = this.inspectionPlanId;

        this.inspectionPlansService.modifyInspectionPlan(inspectionPlan).subscribe(res => {
          this.router.navigate(['/inspectionPlans']);
        });
      } else {

        this.inspectionPlansService.saveInspectionPlan(inspectionPlan).subscribe(res => {
          this.router.navigate(['/inspectionPlans']);
        });
      }
    }
  }

  initForm(inspectionPlan: InspectionPlan) {
    this.formGroup = this.formBuilder.group({
      description: [inspectionPlan.description, Validators.required],
      temperature: [inspectionPlan.temperature, Validators.required],
      humidity: [inspectionPlan.humidity, Validators.required],
      pressure: [inspectionPlan.pressure, Validators.required],
      personId: [inspectionPlan.personId, Validators.required],
    });
  }
}
