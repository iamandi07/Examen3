function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["persons-persons-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons-edit/persons-edit.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons-edit/persons-edit.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonsPersonsEditPersonsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Add/Edit person</p>\r\n\r\n<mat-card class=\"example-card\">\r\n  <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n    <div class=\"example-container\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('name').touched && formGroup.get('name').errors && formGroup.get('name').errors.required\">\r\n          Name required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Surname\" formControlName=\"surname\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('surname').touched && formGroup.get('surname').errors && formGroup.get('surname').errors.required\">\r\n          Surname required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"PhoneNumber\" formControlName=\"phoneNumber\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('phoneNumber').touched && formGroup.get('phoneNumber').errors && formGroup.get('phoneNumber').errors.required\">\r\n          PhoneNumber required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"text\">\r\n\r\n        <mat-error *ngIf=\"formGroup.get('email').touched && formGroup.get('email').errors && formGroup.get('email').errors.required\">\r\n          Email required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n      <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons-list/persons-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons-list/persons-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonsPersonsListPersonsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Persons</h1>\r\n\r\n<p>Many persons in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n<br>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"surname\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Surname </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"phoneNumber\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> PhoneNumber </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"email\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Email </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n\r\n    Action Column\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n      <td mat-cell *matCellDef=\"let person\">\r\n        <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', person.id]\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deletePerson(person)\">delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!persons\"></mat-progress-bar>\r\n  <!--  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonsPersonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./src/app/persons/persons-edit/persons-edit.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/persons/persons-edit/persons-edit.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonsPersonsEditPersonsEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  body {\r\n  background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ucy9wZXJzb25zLWVkaXQvcGVyc29ucy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25zL3BlcnNvbnMtZWRpdC9wZXJzb25zLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/persons/persons-edit/persons-edit.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/persons/persons-edit/persons-edit.component.ts ***!
    \****************************************************************/

  /*! exports provided: PersonsEditComponent */

  /***/
  function srcAppPersonsPersonsEditPersonsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonsEditComponent", function () {
      return PersonsEditComponent;
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


    var _persons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../persons.service */
    "./src/app/persons/persons.service.ts");

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

    var PersonsEditComponent = /*#__PURE__*/function () {
      function PersonsEditComponent(router, route, personsService, formBuilder) {
        _classCallCheck(this, PersonsEditComponent);

        this.router = router;
        this.route = route;
        this.personsService = personsService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
      }

      _createClass(PersonsEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.personId = parseInt(this.route.snapshot.params['id']);

          if (this.personId) {
            this.routerLink = '../../list';
            this.personsService.getPerson(this.personId).subscribe(function (res) {
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
            var person = this.formGroup.value;
            person.name = person.name;

            if (this.isEdit) {
              person.id = this.personId;
              this.personsService.modifyPerson(person).subscribe(function (res) {
                _this2.router.navigate(['/persons']);
              });
            } else {
              this.personsService.savePerson(person).subscribe(function (res) {
                _this2.router.navigate(['/persons']);
              });
            }
          }
        }
      }, {
        key: "initForm",
        value: function initForm(person) {
          this.formGroup = this.formBuilder.group({
            name: [person.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return PersonsEditComponent;
    }();

    PersonsEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _persons_service__WEBPACK_IMPORTED_MODULE_3__["PersonsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    PersonsEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-persons-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./persons-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons-edit/persons-edit.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./persons-edit.component.css */
      "./src/app/persons/persons-edit/persons-edit.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _persons_service__WEBPACK_IMPORTED_MODULE_3__["PersonsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], PersonsEditComponent);
    /***/
  },

  /***/
  "./src/app/persons/persons-list/persons-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/persons/persons-list/persons-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonsPersonsListPersonsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ucy9wZXJzb25zLWxpc3QvcGVyc29ucy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGVyc29ucy9wZXJzb25zLWxpc3QvcGVyc29ucy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/persons/persons-list/persons-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/persons/persons-list/persons-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: PersonsListComponent */

  /***/
  function srcAppPersonsPersonsListPersonsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonsListComponent", function () {
      return PersonsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _persons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../persons.service */
    "./src/app/persons/persons.service.ts");
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

    var PersonsListComponent = /*#__PURE__*/function () {
      function PersonsListComponent(personsService) {
        _classCallCheck(this, PersonsListComponent);

        this.personsService = personsService;
        this.displayedColumns = ['name', 'surname', 'phoneNumber', 'email'];
        this.isloading = false;
      }

      _createClass(PersonsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadPersons();
        }
      }, {
        key: "loadPersons",
        value: function loadPersons() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      this.personsService.listPersons().subscribe(function (res) {
                        _this3.persons = res;
                        _this3.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.persons);
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
        key: "deletePerson",
        value: function deletePerson(person) {
          var _this4 = this;

          this.personsService.deletePerson(person.id).subscribe(function (x) {
            _this4.loadPersons();
          });
        }
      }]);

      return PersonsListComponent;
    }();

    PersonsListComponent.ctorParameters = function () {
      return [{
        type: _persons_service__WEBPACK_IMPORTED_MODULE_1__["PersonsService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], PersonsListComponent.prototype, "paginator", void 0);

    PersonsListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-persons-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./persons-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons-list/persons-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./persons-list.component.css */
      "./src/app/persons/persons-list/persons-list.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_persons_service__WEBPACK_IMPORTED_MODULE_1__["PersonsService"]])], PersonsListComponent);
    /***/
  },

  /***/
  "./src/app/persons/persons-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/persons/persons-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PersonsRoutingModule */

  /***/
  function srcAppPersonsPersonsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonsRoutingModule", function () {
      return PersonsRoutingModule;
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


    var _persons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./persons.component */
    "./src/app/persons/persons.component.ts");
    /* harmony import */


    var _persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./persons-list/persons-list.component */
    "./src/app/persons/persons-list/persons-list.component.ts");
    /* harmony import */


    var _persons_edit_persons_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./persons-edit/persons-edit.component */
    "./src/app/persons/persons-edit/persons-edit.component.ts");

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
      component: _persons_component__WEBPACK_IMPORTED_MODULE_2__["PersonsComponent"],
      children: [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }, {
        path: 'list',
        component: _persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonsListComponent"]
      }, {
        path: 'edit/:id',
        component: _persons_edit_persons_edit_component__WEBPACK_IMPORTED_MODULE_4__["PersonsEditComponent"]
      }, {
        path: 'edit',
        component: _persons_edit_persons_edit_component__WEBPACK_IMPORTED_MODULE_4__["PersonsEditComponent"]
      }]
    }];

    var PersonsRoutingModule = function PersonsRoutingModule() {
      _classCallCheck(this, PersonsRoutingModule);
    };

    PersonsRoutingModule.routedComponents = [_persons_component__WEBPACK_IMPORTED_MODULE_2__["PersonsComponent"], _persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonsListComponent"], _persons_edit_persons_edit_component__WEBPACK_IMPORTED_MODULE_4__["PersonsEditComponent"]];
    PersonsRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], PersonsRoutingModule);
    /***/
  },

  /***/
  "./src/app/persons/persons.component.css":
  /*!***********************************************!*\
    !*** ./src/app/persons/persons.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonsPersonsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbnMvcGVyc29ucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/persons/persons.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/persons/persons.component.ts ***!
    \**********************************************/

  /*! exports provided: PersonsComponent */

  /***/
  function srcAppPersonsPersonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonsComponent", function () {
      return PersonsComponent;
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

    var PersonsComponent = /*#__PURE__*/function () {
      function PersonsComponent() {
        _classCallCheck(this, PersonsComponent);
      }

      _createClass(PersonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonsComponent;
    }();

    PersonsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-persons',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./persons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/persons/persons.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./persons.component.css */
      "./src/app/persons/persons.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], PersonsComponent);
    /***/
  },

  /***/
  "./src/app/persons/persons.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/persons/persons.module.ts ***!
    \*******************************************/

  /*! exports provided: PersonsModule */

  /***/
  function srcAppPersonsPersonsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonsModule", function () {
      return PersonsModule;
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


    var _persons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./persons-routing.module */
    "./src/app/persons/persons-routing.module.ts");
    /* harmony import */


    var _persons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./persons.service */
    "./src/app/persons/persons.service.ts");

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

    var PersonsModule = function PersonsModule() {
      _classCallCheck(this, PersonsModule);
    };

    PersonsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_persons_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonsRoutingModule"].routedComponents],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _persons_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonsRoutingModule"], _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
      providers: [_persons_service__WEBPACK_IMPORTED_MODULE_6__["PersonsService"]]
    })], PersonsModule);
    /***/
  },

  /***/
  "./src/app/persons/persons.service.ts":
  /*!********************************************!*\
    !*** ./src/app/persons/persons.service.ts ***!
    \********************************************/

  /*! exports provided: PersonsService */

  /***/
  function srcAppPersonsPersonsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonsService", function () {
      return PersonsService;
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

    var PersonsService = /*#__PURE__*/function () {
      function PersonsService(http, applicationService) {
        _classCallCheck(this, PersonsService);

        this.http = http;
        this.applicationService = applicationService;
      }

      _createClass(PersonsService, [{
        key: "getPerson",
        value: function getPerson(id) {
          return this.http.get("".concat(this.applicationService.baseUrl, "api/People/").concat(id));
        }
      }, {
        key: "listPersons",
        value: function listPersons() {
          return this.http.get("".concat(this.applicationService.baseUrl, "api/People"));
        }
      }, {
        key: "savePerson",
        value: function savePerson(person) {
          return this.http.post("".concat(this.applicationService.baseUrl, "api/People"), person);
        }
      }, {
        key: "modifyPerson",
        value: function modifyPerson(person) {
          return this.http.put("".concat(this.applicationService.baseUrl, "api/People/").concat(person.id), person);
        }
      }, {
        key: "deletePerson",
        value: function deletePerson(id) {
          return this.http["delete"]("".concat(this.applicationService.baseUrl, "api/People/").concat(id));
        }
      }]);

      return PersonsService;
    }();

    PersonsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]
      }];
    };

    PersonsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])], PersonsService);
    /***/
  }
}]);
//# sourceMappingURL=persons-persons-module-es5.js.map