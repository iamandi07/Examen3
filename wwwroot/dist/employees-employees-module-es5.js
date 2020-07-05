function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-edit/employees-edit.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-edit/employees-edit.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeesEmployeesEditEmployeesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Add/Edit employee</p>\r\n\r\n<mat-card class=\"example-card\">\r\n  <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n    <div class=\"example-container\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('name').touched && formGroup.get('name').errors && formGroup.get('name').errors.required\">\r\n          Name required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Position\" formControlName=\"position\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('position').touched && formGroup.get('position').errors && formGroup.get('position').errors.required\">\r\n          Position required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n      <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-list/employees-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-list/employees-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeesEmployeesListEmployeesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Employees</h1>\r\n\r\n<p>Many employees in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n<br>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Position </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n    </ng-container>\r\n\r\n\r\n    Action Column\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n      <td mat-cell *matCellDef=\"let employee\">\r\n        <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', employee.id]\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteEmployee(employee)\">delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!employees\"></mat-progress-bar>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeesEmployeesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./src/app/employees/employees-edit/employees-edit.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/employees/employees-edit/employees-edit.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmployeesEmployeesEditEmployeesEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  body {\r\n  background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy1lZGl0L2VtcGxveWVlcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBR0Y7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWVzLWVkaXQvZW1wbG95ZWVzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/employees/employees-edit/employees-edit.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/employees/employees-edit/employees-edit.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EmployeesEditComponent */

  /***/
  function srcAppEmployeesEmployeesEditEmployeesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesEditComponent", function () {
      return EmployeesEditComponent;
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


    var _employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../employees.service */
    "./src/app/employees/employees.service.ts");

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

    var EmployeesEditComponent = /*#__PURE__*/function () {
      function EmployeesEditComponent(router, route, employeesService, formBuilder) {
        _classCallCheck(this, EmployeesEditComponent);

        this.router = router;
        this.route = route;
        this.employeesService = employeesService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
      }

      _createClass(EmployeesEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.employeeID = parseInt(this.route.snapshot.params['id']);

          if (this.employeeID) {
            this.routerLink = '../../list';
            this.employeesService.getEmployee(this.employeeID).subscribe(function (res) {
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
            var employee = this.formGroup.value;
            employee.name = employee.name;

            if (this.isEdit) {
              employee.id = this.employeeID;
              this.employeesService.modifyEmployee(employee).subscribe(function (res) {
                _this2.router.navigate(['/employees']);
              });
            } else {
              this.employeesService.saveEmployee(employee).subscribe(function (res) {
                _this2.router.navigate(['/employees']);
              });
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm(employee) {
          this.formGroup = this.formBuilder.group({
            name: [employee.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            position: [employee.position, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return EmployeesEditComponent;
    }();

    EmployeesEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    EmployeesEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-employees-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./employees-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-edit/employees-edit.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./employees-edit.component.css */
      "./src/app/employees/employees-edit/employees-edit.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], EmployeesEditComponent);
    /***/
  },

  /***/
  "./src/app/employees/employees-list/employees-list.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/employees/employees-list/employees-list.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmployeesEmployeesListEmployeesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy1saXN0L2VtcGxveWVlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy1saXN0L2VtcGxveWVlcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/employees/employees-list/employees-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/employees/employees-list/employees-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EmployeesListComponent */

  /***/
  function srcAppEmployeesEmployeesListEmployeesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function () {
      return EmployeesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employees.service */
    "./src/app/employees/employees.service.ts");
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

    var EmployeesListComponent = /*#__PURE__*/function () {
      function EmployeesListComponent(employeesService) {
        _classCallCheck(this, EmployeesListComponent);

        this.employeesService = employeesService;
        this.displayedColumns = ['name', 'position', 'action'];
        this.isloading = false;
      }

      _createClass(EmployeesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEmployees();
        }
      }, {
        key: "loadEmployees",
        value: function loadEmployees() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      this.employeesService.listEmployees().subscribe(function (res) {
                        _this3.employees = res;
                        _this3.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.employees);
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
        key: "deleteEmployee",
        value: function deleteEmployee(employee) {
          var _this4 = this;

          this.employeesService.deleteEmployee(employee.id).subscribe(function (x) {
            _this4.loadEmployees();
          });
        }
      }]);

      return EmployeesListComponent;
    }();

    EmployeesListComponent.ctorParameters = function () {
      return [{
        type: _employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], EmployeesListComponent.prototype, "paginator", void 0);

    EmployeesListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-employees-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./employees-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees-list/employees-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./employees-list.component.css */
      "./src/app/employees/employees-list/employees-list.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]])], EmployeesListComponent);
    /***/
  },

  /***/
  "./src/app/employees/employees-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/employees/employees-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: EmployeesRoutingModule */

  /***/
  function srcAppEmployeesEmployeesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function () {
      return EmployeesRoutingModule;
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


    var _employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employees.component */
    "./src/app/employees/employees.component.ts");
    /* harmony import */


    var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employees-list/employees-list.component */
    "./src/app/employees/employees-list/employees-list.component.ts");
    /* harmony import */


    var _employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./employees-edit/employees-edit.component */
    "./src/app/employees/employees-edit/employees-edit.component.ts");

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
      component: _employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"],
      children: [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }, {
        path: 'list',
        component: _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesListComponent"]
      }, {
        path: 'edit/:id',
        component: _employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesEditComponent"]
      }, {
        path: 'edit',
        component: _employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesEditComponent"]
      }]
    }];

    var EmployeesRoutingModule = function EmployeesRoutingModule() {
      _classCallCheck(this, EmployeesRoutingModule);
    };

    EmployeesRoutingModule.routedComponents = [_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"], _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesListComponent"], _employees_edit_employees_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesEditComponent"]];
    EmployeesRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], EmployeesRoutingModule);
    /***/
  },

  /***/
  "./src/app/employees/employees.component.css":
  /*!***************************************************!*\
    !*** ./src/app/employees/employees.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmployeesEmployeesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/employees/employees.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/employees/employees.component.ts ***!
    \**************************************************/

  /*! exports provided: EmployeesComponent */

  /***/
  function srcAppEmployeesEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () {
      return EmployeesComponent;
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

    var EmployeesComponent = /*#__PURE__*/function () {
      function EmployeesComponent() {
        _classCallCheck(this, EmployeesComponent);
      }

      _createClass(EmployeesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmployeesComponent;
    }();

    EmployeesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-employees',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./employees.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./employees.component.css */
      "./src/app/employees/employees.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], EmployeesComponent);
    /***/
  },

  /***/
  "./src/app/employees/employees.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/employees/employees.module.ts ***!
    \***********************************************/

  /*! exports provided: EmployeesModule */

  /***/
  function srcAppEmployeesEmployeesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesModule", function () {
      return EmployeesModule;
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


    var _employees_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./employees-routing.module */
    "./src/app/employees/employees-routing.module.ts");
    /* harmony import */


    var _employees_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./employees.service */
    "./src/app/employees/employees.service.ts");

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

    var EmployeesModule = function EmployeesModule() {
      _classCallCheck(this, EmployeesModule);
    };

    EmployeesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_employees_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeesRoutingModule"].routedComponents],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employees_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeesRoutingModule"], _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
      providers: [_employees_service__WEBPACK_IMPORTED_MODULE_6__["EmployeesService"]]
    })], EmployeesModule);
    /***/
  },

  /***/
  "./src/app/employees/employees.service.ts":
  /*!************************************************!*\
    !*** ./src/app/employees/employees.service.ts ***!
    \************************************************/

  /*! exports provided: EmployeesService */

  /***/
  function srcAppEmployeesEmployeesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesService", function () {
      return EmployeesService;
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

    var EmployeesService = /*#__PURE__*/function () {
      function EmployeesService(http, applicationService) {
        _classCallCheck(this, EmployeesService);

        this.http = http;
        this.applicationService = applicationService;
      }

      _createClass(EmployeesService, [{
        key: "getEmployee",
        value: function getEmployee(id) {
          return this.http.get("".concat(this.applicationService.baseUrl, "api/Employees/").concat(id));
        }
      }, {
        key: "listEmployees",
        value: function listEmployees() {
          return this.http.get("".concat(this.applicationService.baseUrl, "api/Employees"));
        }
      }, {
        key: "saveEmployee",
        value: function saveEmployee(employee) {
          return this.http.post("".concat(this.applicationService.baseUrl, "api/Employees"), employee);
        }
      }, {
        key: "modifyEmployee",
        value: function modifyEmployee(employee) {
          return this.http.put("".concat(this.applicationService.baseUrl, "api/Employees/").concat(employee.id), employee);
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(id) {
          return this.http["delete"]("".concat(this.applicationService.baseUrl, "api/Employees/").concat(id));
        }
      }]);

      return EmployeesService;
    }();

    EmployeesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]
      }];
    };

    EmployeesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])], EmployeesService);
    /***/
  }
}]);
//# sourceMappingURL=employees-employees-module-es5.js.map