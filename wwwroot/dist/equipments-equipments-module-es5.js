function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipments-equipments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments-edit/equipments-edit.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments-edit/equipments-edit.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEquipmentsEquipmentsEditEquipmentsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Add/Edit equipment</p>\r\n\r\n<mat-card class=\"example-card\">\r\n  <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n    <div class=\"example-container\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Description\" formControlName=\"description\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('description').touched && formGroup.get('description').errors && formGroup.get('description').errors.required\">\r\n          Description required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"EquipementType\" formControlName=\"equipementType\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('equipementType').touched && formGroup.get('equipementType').errors && formGroup.get('equipementType').errors.required\">\r\n          Equipment Type required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Model\" formControlName=\"model\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('model').touched && formGroup.get('model').errors && formGroup.get('model').errors.required\">\r\n          Model required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"SerialNumber\" formControlName=\"serialNumber\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('serialNumber').touched && formGroup.get('serialNumber').errors && formGroup.get('serialNumber').errors.required\">\r\n          Serial Number required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"CalibrationDate\" formControlName=\"calibrationDate\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('calibrationDate').touched && formGroup.get('calibrationDate').errors && formGroup.get('calibrationDate').errors.required\">\r\n          Serial Number required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n      <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments-list/equipments-list.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments-list/equipments-list.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEquipmentsEquipmentsListEquipmentsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Equipments</h1>\r\n\r\n<p>Many equipments in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n<br>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Description </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"equipementType\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> EquipmentType </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.equipementType}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"model\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Model </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"serialNumber\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Serial Number </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.serialNumber}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"calibrationDate\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Calibration Date </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.calibrationDate}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Action </th>\r\n      <td mat-cell *matCellDef=\"let equipment\">\r\n        <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', equipment.id]\">edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteEquipment(equipment)\">delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!equipments\"></mat-progress-bar>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEquipmentsEquipmentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./src/app/equipments/equipments-edit/equipments-edit.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/equipments/equipments-edit/equipments-edit.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEquipmentsEquipmentsEditEquipmentsEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  body {\r\n  background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBtZW50cy9lcXVpcG1lbnRzLWVkaXQvZXF1aXBtZW50cy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9lcXVpcG1lbnRzL2VxdWlwbWVudHMtZWRpdC9lcXVpcG1lbnRzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/equipments/equipments-edit/equipments-edit.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/equipments/equipments-edit/equipments-edit.component.ts ***!
    \*************************************************************************/

  /*! exports provided: EquipmentsEditComponent */

  /***/
  function srcAppEquipmentsEquipmentsEditEquipmentsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsEditComponent", function () {
      return EquipmentsEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _equipments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../equipments.service */
    "./src/app/equipments/equipments.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EquipmentsEditComponent = /*#__PURE__*/function () {
      function EquipmentsEditComponent(router, route, equipmentsService, formBuilder) {
        _classCallCheck(this, EquipmentsEditComponent);

        this.router = router;
        this.route = route;
        this.equipmentsService = equipmentsService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
      }

      _createClass(EquipmentsEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.equipmentId = parseInt(this.route.snapshot.params['id']);

          if (this.equipmentId) {
            this.routerLink = '../../list';
            this.equipmentsService.getEquipment(this.equipmentId).subscribe(function (res) {
              _this.initForm(res);

              _this.isEdit = true;
            });
          } else {
            this.initForm({});
          }
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          Object.keys(this.formGroup.controls).forEach(function (control) {
            _this2.formGroup.get(control).markAsTouched();
          });

          if (this.formGroup.valid) {
            var equipment = this.formGroup.value;
            equipment.description = equipment.description;
            equipment.equipementType = equipment.equipementType;
            equipment.model = equipment.model;
            equipment.serialNumber = equipment.serialNumber;
            equipment.calibrationDate = equipment.calibrationDate;

            if (this.isEdit) {
              equipment.id = this.equipmentId;
              this.equipmentsService.modifyEquipment(equipment).subscribe(function (res) {
                _this2.router.navigate(['/equipments']);
              });
            } else {
              this.equipmentsService.saveEquipment(equipment).subscribe(function (res) {
                _this2.router.navigate(['/equipments']);
              });
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm(equipment) {
          this.formGroup = this.formBuilder.group({
            description: [equipment.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            equipementType: [equipment.equipementType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            model: [equipment.model, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            serialNumber: [equipment.serialNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            calibrationDate: [equipment.calibrationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return EquipmentsEditComponent;
    }();

    EquipmentsEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _equipments_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    EquipmentsEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-equipments-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipments-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments-edit/equipments-edit.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./equipments-edit.component.css */
      "./src/app/equipments/equipments-edit/equipments-edit.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _equipments_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], EquipmentsEditComponent);
    /***/
  },

  /***/
  "./src/app/equipments/equipments-list/equipments-list.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/equipments/equipments-list/equipments-list.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEquipmentsEquipmentsListEquipmentsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBtZW50cy9lcXVpcG1lbnRzLWxpc3QvZXF1aXBtZW50cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZXF1aXBtZW50cy9lcXVpcG1lbnRzLWxpc3QvZXF1aXBtZW50cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/equipments/equipments-list/equipments-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/equipments/equipments-list/equipments-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: EquipmentsListComponent */

  /***/
  function srcAppEquipmentsEquipmentsListEquipmentsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsListComponent", function () {
      return EquipmentsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _equipments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../equipments.service */
    "./src/app/equipments/equipments.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EquipmentsListComponent = /*#__PURE__*/function () {
      function EquipmentsListComponent(equipmentsService) {
        _classCallCheck(this, EquipmentsListComponent);

        this.equipmentsService = equipmentsService;
        this.displayedColumns = ['description', 'equipementType', 'model', 'serialNumber', 'calibrationDate', 'action'];
        this.isloading = false;
      }

      _createClass(EquipmentsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEquipments();
        }
      }, {
        key: "loadEquipments",
        value: function loadEquipments() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      this.equipmentsService.listEquipments().subscribe(function (res) {
                        _this3.equipments = res;
                        _this3.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.equipments);
                        _this3.isloading = true;
                        _this3.dataSource.paginator = _this3.paginator;
                      });
                    } catch (err) {
                      console.error("this is not good: ".concat(err.Message));
                      this.isloading = false;
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "deleteEquipment",
        value: function deleteEquipment(equipment) {
          var _this4 = this;

          this.equipmentsService.deleteEquipment(equipment.id).subscribe(function (x) {
            _this4.loadEquipments();
          });
        }
      }]);

      return EquipmentsListComponent;
    }();

    EquipmentsListComponent.ctorParameters = function () {
      return [{
        type: _equipments_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentsService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], EquipmentsListComponent.prototype, "paginator", void 0);

    EquipmentsListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-equipments-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipments-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments-list/equipments-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./equipments-list.component.css */
      "./src/app/equipments/equipments-list/equipments-list.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_equipments_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentsService"]])], EquipmentsListComponent);
    /***/
  },

  /***/
  "./src/app/equipments/equipments-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/equipments/equipments-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: EquipmentsRoutingModule */

  /***/
  function srcAppEquipmentsEquipmentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsRoutingModule", function () {
      return EquipmentsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _equipments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./equipments.component */
    "./src/app/equipments/equipments.component.ts");
    /* harmony import */


    var _equipments_list_equipments_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./equipments-list/equipments-list.component */
    "./src/app/equipments/equipments-list/equipments-list.component.ts");
    /* harmony import */


    var _equipments_edit_equipments_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./equipments-edit/equipments-edit.component */
    "./src/app/equipments/equipments-edit/equipments-edit.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _equipments_component__WEBPACK_IMPORTED_MODULE_2__["EquipmentsComponent"],
      children: [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }, {
        path: 'list',
        component: _equipments_list_equipments_list_component__WEBPACK_IMPORTED_MODULE_3__["EquipmentsListComponent"]
      }, {
        path: 'edit/:id',
        component: _equipments_edit_equipments_edit_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsEditComponent"]
      }, {
        path: 'edit',
        component: _equipments_edit_equipments_edit_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsEditComponent"]
      }]
    }];

    var EquipmentsRoutingModule = function EquipmentsRoutingModule() {
      _classCallCheck(this, EquipmentsRoutingModule);
    };

    EquipmentsRoutingModule.routedComponents = [_equipments_component__WEBPACK_IMPORTED_MODULE_2__["EquipmentsComponent"], _equipments_list_equipments_list_component__WEBPACK_IMPORTED_MODULE_3__["EquipmentsListComponent"], _equipments_edit_equipments_edit_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentsEditComponent"]];
    EquipmentsRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], EquipmentsRoutingModule);
    /***/
  },

  /***/
  "./src/app/equipments/equipments.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/equipments/equipments.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEquipmentsEquipmentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvZXF1aXBtZW50cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/equipments/equipments.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/equipments/equipments.component.ts ***!
    \****************************************************/

  /*! exports provided: EquipmentsComponent */

  /***/
  function srcAppEquipmentsEquipmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsComponent", function () {
      return EquipmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EquipmentsComponent = /*#__PURE__*/function () {
      function EquipmentsComponent() {
        _classCallCheck(this, EquipmentsComponent);
      }

      _createClass(EquipmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EquipmentsComponent;
    }();

    EquipmentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-equipments',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipments/equipments.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./equipments.component.css */
      "./src/app/equipments/equipments.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], EquipmentsComponent);
    /***/
  },

  /***/
  "./src/app/equipments/equipments.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/equipments/equipments.module.ts ***!
    \*************************************************/

  /*! exports provided: EquipmentsModule */

  /***/
  function srcAppEquipmentsEquipmentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsModule", function () {
      return EquipmentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/angular-material.module */
    "./src/app/shared/angular-material.module.ts");
    /* harmony import */


    var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./equipments-routing.module */
    "./src/app/equipments/equipments-routing.module.ts");
    /* harmony import */


    var _equipments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./equipments.service */
    "./src/app/equipments/equipments.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EquipmentsModule = function EquipmentsModule() {
      _classCallCheck(this, EquipmentsModule);
    };

    EquipmentsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsRoutingModule"].routedComponents],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsRoutingModule"], _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
      providers: [_equipments_service__WEBPACK_IMPORTED_MODULE_6__["EquipmentsService"]]
    })], EquipmentsModule);
    /***/
  },

  /***/
  "./src/app/equipments/equipments.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/equipments/equipments.service.ts ***!
    \**************************************************/

  /*! exports provided: EquipmentsService */

  /***/
  function srcAppEquipmentsEquipmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsService", function () {
      return EquipmentsService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/services/application.service */
    "./src/app/core/services/application.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EquipmentsService = /*#__PURE__*/function () {
      function EquipmentsService(http, applicationService) {
        _classCallCheck(this, EquipmentsService);

        this.http = http;
        this.applicationService = applicationService;
      }

      _createClass(EquipmentsService, [{
        key: "getEquipment",
        value: function getEquipment(id) {
          return this.http.get("".concat(this.applicationService.baseUrl, "api/Equipments/").concat(id));
        }
      }, {
        key: "listEquipments",
        value: function listEquipments() {
          return this.http.get("".concat(this.applicationService.baseUrl, "api/Equipments"));
        }
      }, {
        key: "saveEquipment",
        value: function saveEquipment(equipment) {
          return this.http.post("".concat(this.applicationService.baseUrl, "api/Equipments"), equipment);
        }
      }, {
        key: "modifyEquipment",
        value: function modifyEquipment(equipment) {
          return this.http.put("".concat(this.applicationService.baseUrl, "api/Equipments/").concat(equipment.id), equipment);
        }
      }, {
        key: "deleteEquipment",
        value: function deleteEquipment(id) {
          return this.http["delete"]("".concat(this.applicationService.baseUrl, "api/Equipments/").concat(id));
        }
      }]);

      return EquipmentsService;
    }();

    EquipmentsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]
      }];
    };

    EquipmentsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])], EquipmentsService);
    /***/
  }
}]);
//# sourceMappingURL=equipments-equipments-module-es5.js.map