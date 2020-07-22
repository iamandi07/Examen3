(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calibration-calibrations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations-edit/calibrations-edit.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations-edit/calibrations-edit.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add/Edit equipment</p>\r\n\r\n<mat-card class=\"example-card\">\r\n  <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n    <div class=\"example-container\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"EquipmentId\" formControlName=\"equipmentId\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('equipmentId').touched && formGroup.get('equipmentId').errors && formGroup.get('equipmentId').errors.required\">\r\n          EquipmenrId required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"PersonId\" formControlName=\"personId\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('personId').touched && formGroup.get('personId').errors && formGroup.get('personId').errors.required\">\r\n          PersonId required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n      <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations-list/calibrations-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations-list/calibrations-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Calibrations</h1>\r\n\r\n<p>Many calibrations in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n<br>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"equipmentId\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> EquipmentId </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.equipmentId}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"personId\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> PersonId </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.personId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Action </th>\r\n      <td mat-cell *matCellDef=\"let calibration\">\r\n        <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', calibration.id]\">edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteCalibration(calibration)\">delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!calibrations\"></mat-progress-bar>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/calibration/calibrations-edit/calibrations-edit.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/calibration/calibrations-edit/calibrations-edit.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  body {\r\n  background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsaWJyYXRpb24vY2FsaWJyYXRpb25zLWVkaXQvY2FsaWJyYXRpb25zLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7RUFFRjtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NhbGlicmF0aW9uL2NhbGlicmF0aW9ucy1lZGl0L2NhbGlicmF0aW9ucy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/calibration/calibrations-edit/calibrations-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/calibration/calibrations-edit/calibrations-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalibrationsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrationsEditComponent", function() { return CalibrationsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calibrations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calibrations.service */ "./src/app/calibration/calibrations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let CalibrationsEditComponent = class CalibrationsEditComponent {
    constructor(router, route, calibrationsService, formBuilder) {
        this.router = router;
        this.route = route;
        this.calibrationsService = calibrationsService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
    }
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
            this.initForm({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let calibration = this.formGroup.value;
            calibration.equipmentId = calibration.equipmentId;
            calibration.personId = calibration.personId;
            if (this.isEdit) {
                calibration.equipmentId = this.calibrationId;
                this.calibrationsService.modifyCalibration(calibration).subscribe(res => {
                    this.router.navigate(['/calibrations']);
                });
            }
            else {
                this.calibrationsService.saveCalibrations(calibration).subscribe(res => {
                    this.router.navigate(['/calibrations']);
                });
            }
        }
    }
    initForm(calibration) {
        this.formGroup = this.formBuilder.group({
            equipmentId: [calibration.equipmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            personId: [calibration.personId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
};
CalibrationsEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _calibrations_service__WEBPACK_IMPORTED_MODULE_3__["CalibrationsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
CalibrationsEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-calibrations-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./calibrations-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations-edit/calibrations-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./calibrations-edit.component.css */ "./src/app/calibration/calibrations-edit/calibrations-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _calibrations_service__WEBPACK_IMPORTED_MODULE_3__["CalibrationsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], CalibrationsEditComponent);



/***/ }),

/***/ "./src/app/calibration/calibrations-list/calibrations-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/calibration/calibrations-list/calibrations-list.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsaWJyYXRpb24vY2FsaWJyYXRpb25zLWxpc3QvY2FsaWJyYXRpb25zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYWxpYnJhdGlvbi9jYWxpYnJhdGlvbnMtbGlzdC9jYWxpYnJhdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/calibration/calibrations-list/calibrations-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/calibration/calibrations-list/calibrations-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalibrationsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrationsListComponent", function() { return CalibrationsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _calibrations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calibrations.service */ "./src/app/calibration/calibrations.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CalibrationsListComponent = class CalibrationsListComponent {
    constructor(calibrationsService) {
        this.calibrationsService = calibrationsService;
        this.displayedColumns = ['equipmentId', 'personId', 'action'];
        this.isloading = false;
    }
    ngOnInit() {
        this.loadCalibrations();
    }
    loadCalibrations() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.calibrationsService.listCalibrations().subscribe(res => {
                    this.calibrations = res;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.calibrations);
                    this.isloading = true;
                    this.dataSource.paginator = this.paginator;
                });
            }
            catch (err) {
                console.error(`this is not good: ${err.Message}`);
                this.isloading = false;
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteCalibration(calibration) {
        this.calibrationsService.deleteCalibration(calibration.equipmentId).subscribe(x => {
            this.loadCalibrations();
        });
    }
};
CalibrationsListComponent.ctorParameters = () => [
    { type: _calibrations_service__WEBPACK_IMPORTED_MODULE_1__["CalibrationsService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], CalibrationsListComponent.prototype, "paginator", void 0);
CalibrationsListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-calibrations-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./calibrations-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations-list/calibrations-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./calibrations-list.component.css */ "./src/app/calibration/calibrations-list/calibrations-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_calibrations_service__WEBPACK_IMPORTED_MODULE_1__["CalibrationsService"]])
], CalibrationsListComponent);



/***/ }),

/***/ "./src/app/calibration/calibrations-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/calibration/calibrations-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CalibrationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrationsRoutingModule", function() { return CalibrationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calibrations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calibrations.component */ "./src/app/calibration/calibrations.component.ts");
/* harmony import */ var _calibrations_list_calibrations_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calibrations-list/calibrations-list.component */ "./src/app/calibration/calibrations-list/calibrations-list.component.ts");
/* harmony import */ var _calibrations_edit_calibrations_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calibrations-edit/calibrations-edit.component */ "./src/app/calibration/calibrations-edit/calibrations-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    {
        path: '', component: _calibrations_component__WEBPACK_IMPORTED_MODULE_2__["CalibrationsComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _calibrations_list_calibrations_list_component__WEBPACK_IMPORTED_MODULE_3__["CalibrationsListComponent"] },
            { path: 'edit/:id', component: _calibrations_edit_calibrations_edit_component__WEBPACK_IMPORTED_MODULE_4__["CalibrationsEditComponent"] },
            { path: 'edit', component: _calibrations_edit_calibrations_edit_component__WEBPACK_IMPORTED_MODULE_4__["CalibrationsEditComponent"] },
        ]
    }
];
let CalibrationsRoutingModule = class CalibrationsRoutingModule {
};
CalibrationsRoutingModule.routedComponents = [_calibrations_component__WEBPACK_IMPORTED_MODULE_2__["CalibrationsComponent"], _calibrations_list_calibrations_list_component__WEBPACK_IMPORTED_MODULE_3__["CalibrationsListComponent"], _calibrations_edit_calibrations_edit_component__WEBPACK_IMPORTED_MODULE_4__["CalibrationsEditComponent"]];
CalibrationsRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], CalibrationsRoutingModule);



/***/ }),

/***/ "./src/app/calibration/calibrations.component.css":
/*!********************************************************!*\
  !*** ./src/app/calibration/calibrations.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsaWJyYXRpb24vY2FsaWJyYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NhbGlicmF0aW9uL2NhbGlicmF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/calibration/calibrations.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/calibration/calibrations.component.ts ***!
  \*******************************************************/
/*! exports provided: CalibrationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrationsComponent", function() { return CalibrationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CalibrationsComponent = class CalibrationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CalibrationsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-calibrations',
        template: __importDefault(__webpack_require__(/*! raw-loader!./calibrations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calibration/calibrations.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./calibrations.component.css */ "./src/app/calibration/calibrations.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CalibrationsComponent);



/***/ }),

/***/ "./src/app/calibration/calibrations.module.ts":
/*!****************************************************!*\
  !*** ./src/app/calibration/calibrations.module.ts ***!
  \****************************************************/
/*! exports provided: CalibrationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrationsModule", function() { return CalibrationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _calibrations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calibrations-routing.module */ "./src/app/calibration/calibrations-routing.module.ts");
/* harmony import */ var _calibrations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calibrations.service */ "./src/app/calibration/calibrations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let CalibrationsModule = class CalibrationsModule {
};
CalibrationsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_calibrations_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalibrationsRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _calibrations_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalibrationsRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        providers: [_calibrations_service__WEBPACK_IMPORTED_MODULE_6__["CalibrationsService"]],
    })
], CalibrationsModule);



/***/ }),

/***/ "./src/app/calibration/calibrations.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/calibration/calibrations.service.ts ***!
  \*****************************************************/
/*! exports provided: CalibrationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrationsService", function() { return CalibrationsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/application.service */ "./src/app/core/services/application.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CalibrationsService = class CalibrationsService {
    constructor(http, applicationService) {
        this.http = http;
        this.applicationService = applicationService;
    }
    getCalibration(id) {
        return this.http.get(`${this.applicationService.baseUrl}api/Calibrations/${id}`);
    }
    listCalibrations() {
        return this.http.get(`${this.applicationService.baseUrl}api/Calibrations`);
    }
    saveCalibrations(calibration) {
        return this.http.post(`${this.applicationService.baseUrl}api/Calibrations`, calibration);
    }
    modifyCalibration(calibration) {
        return this.http.put(`${this.applicationService.baseUrl}api/Calibrations/${calibration.equipmentId}`, calibration);
    }
    deleteCalibration(id) {
        return this.http.delete(`${this.applicationService.baseUrl}api/Calibrations/${id}`);
    }
};
CalibrationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"] }
];
CalibrationsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
        _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
], CalibrationsService);



/***/ })

}]);
//# sourceMappingURL=calibration-calibrations-module-es2015.js.map