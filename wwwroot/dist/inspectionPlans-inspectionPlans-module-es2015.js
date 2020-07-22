(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspectionPlans-inspectionPlans-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add/Edit inspectionPlan</p>\r\n\r\n<mat-card class=\"example-card\">\r\n  <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n    <div class=\"example-container\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Description\" formControlName=\"description\" type=\"text\">\r\n        <mat-error *ngIf=\"formGroup.get('description').touched && formGroup.get('description').errors && formGroup.get('description').errors.required\">\r\n          Name required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Temperature\" formControlName=\"temperature\" type=\"number\">\r\n        <mat-error *ngIf=\"formGroup.get('temperature').touched && formGroup.get('temperature').errors && formGroup.get('temperature').errors.required\">\r\n          Temperature\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Humidity\" formControlName=\"humidity\" type=\"number\">\r\n        <mat-error *ngIf=\"formGroup.get('humidity').touched && formGroup.get('humidity').errors && formGroup.get('humidity').errors.required\">\r\n          Humidity required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Pressure\" formControlName=\"pressure\" type=\"number\">\r\n        <mat-error *ngIf=\"formGroup.get('pressure').touched && formGroup.get('pressure').errors && formGroup.get('pressure').errors.required\">\r\n          Pressure required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"PersonId\" formControlName=\"personId\" type=\"number\">\r\n        <mat-error *ngIf=\"formGroup.get('personId').touched && formGroup.get('personId').errors && formGroup.get('personId').errors.required\">\r\n          Person required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"example-button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n      <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Inspection Plans</h1>\r\n\r\n<p>Many Inspection Plans in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n<br>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Description </th>\r\n      <td mat-cell *matCellDef=\"let inspection\"> {{inspection.description}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"temperature\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Temperature </th>\r\n      <td mat-cell *matCellDef=\"let inspection\"> {{inspection.temperature}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"humidity\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Humidity </th>\r\n      <td mat-cell *matCellDef=\"let inspection\"> {{inspection.humidity}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"pressure\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Pressure </th>\r\n      <td mat-cell *matCellDef=\"let inspection\"> {{inspection.pressure}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"personId\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> PersonId </th>\r\n      <td mat-cell *matCellDef=\"let inspection\"> {{inspection.personId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n      <td mat-cell *matCellDef=\"let inspectionPlan\">\r\n        <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', inspectionPlan.id]\">edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteInspectionPlan(inspectionPlan)\">delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container> -->\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!inspectionPlans\"></mat-progress-bar>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/Core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/Core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/Core/guards/authentication.guard.ts");
/* harmony import */ var _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http-request-interceptor */ "./src/app/Core/services/http-request-interceptor.ts");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security.service */ "./src/app/Core/services/security.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.service */ "./src/app/Core/services/token.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/application.service */ "./src/app/Core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [],
        providers: [
            _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"],
            _services_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpRequestInterceptor"],
                multi: true
            }
        ],
        exports: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/Core/guards/authentication.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/Core/guards/authentication.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
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

let AuthenticationGuard = class AuthenticationGuard {
    constructor() { }
    canActivate() {
        return true;
    }
};
AuthenticationGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/Core/services/application.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Core/services/application.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/Core/services/token.service.ts");
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


let ApplicationService = class ApplicationService {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.baseUrl = document.getElementsByTagName('base')[0].href;
    }
    isLoggedIn() {
        return this.tokenService.getToken() != null;
    }
    userEmail() {
        var token = this.tokenService.getToken();
        if (token != null)
            return token.email;
        return "";
    }
};
ApplicationService.ctorParameters = () => [
    { type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }
];
ApplicationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
], ApplicationService);



/***/ }),

/***/ "./src/app/Core/services/http-request-interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/Core/services/http-request-interceptor.ts ***!
  \***********************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/Core/services/token.service.ts");
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





let HttpRequestInterceptor = class HttpRequestInterceptor {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    intercept(request, next) {
        var token = this.tokenService.getToken();
        request = token ? request.clone({
            headers: request.headers.set("Authorization", "Bearer " + token.value)
        }) : request;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error, caught) => {
            if (error.status === 401) {
                this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            if (error.status === 403) {
                this.router.navigate(['/forbidden']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
HttpRequestInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
HttpRequestInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], HttpRequestInterceptor);



/***/ }),

/***/ "./src/app/Core/services/security.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Core/services/security.service.ts ***!
  \***************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/Core/services/token.service.ts");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.service */ "./src/app/Core/services/application.service.ts");
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





let SecurityService = class SecurityService {
    constructor(httpClient, tokenService, applicationService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.applicationService = applicationService;
    }
    register(registerModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Register`, registerModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    login(loginModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Login`, loginModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    logout() {
        this.tokenService.deleteToken();
    }
};
SecurityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }
];
SecurityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
        _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
], SecurityService);



/***/ }),

/***/ "./src/app/Core/services/token.service.ts":
/*!************************************************!*\
  !*** ./src/app/Core/services/token.service.ts ***!
  \************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
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

let TokenService = class TokenService {
    constructor() { }
    saveToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    getToken() {
        return this.validate(JSON.parse(localStorage.getItem("token")));
    }
    validate(token) {
        if (token) {
            if (new Date(token.expiry) > new Date())
                return token;
        }
        return null;
    }
    deleteToken() {
        localStorage.removeItem("token");
    }
};
TokenService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenService);



/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  body {\r\n  background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zcGVjdGlvblBsYW5zL2luc3BlY3Rpb25QbGFucy1lZGl0L2luc3BlY3Rpb25QbGFucy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUY7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9pbnNwZWN0aW9uUGxhbnMvaW5zcGVjdGlvblBsYW5zLWVkaXQvaW5zcGVjdGlvblBsYW5zLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InspectionPlansEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPlansEditComponent", function() { return InspectionPlansEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inspectionPlans_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inspectionPlans.service */ "./src/app/inspectionPlans/inspectionPlans.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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




let InspectionPlansEditComponent = class InspectionPlansEditComponent {
    constructor(router, route, inspectionPlansService, formBuilder) {
        this.router = router;
        this.route = route;
        this.inspectionPlansService = inspectionPlansService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
    }
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
            this.initForm({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let inspectionPlan = this.formGroup.value;
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
            }
            else {
                this.inspectionPlansService.saveInspectionPlan(inspectionPlan).subscribe(res => {
                    this.router.navigate(['/inspectionPlans']);
                });
            }
        }
    }
    initForm(inspectionPlan) {
        this.formGroup = this.formBuilder.group({
            description: [inspectionPlan.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            temperature: [inspectionPlan.temperature, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            humidity: [inspectionPlan.humidity, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pressure: [inspectionPlan.pressure, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            personId: [inspectionPlan.personId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
};
InspectionPlansEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _inspectionPlans_service__WEBPACK_IMPORTED_MODULE_2__["InspectionPlansService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
InspectionPlansEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-inspectionPlans-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./inspectionPlans-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./inspectionPlans-edit.component.css */ "./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _inspectionPlans_service__WEBPACK_IMPORTED_MODULE_2__["InspectionPlansService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], InspectionPlansEditComponent);



/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zcGVjdGlvblBsYW5zL2luc3BlY3Rpb25QbGFucy1saXN0L2luc3BlY3Rpb25QbGFucy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaW5zcGVjdGlvblBsYW5zL2luc3BlY3Rpb25QbGFucy1saXN0L2luc3BlY3Rpb25QbGFucy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InspectionPlansListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPlansListComponent", function() { return InspectionPlansListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inspectionPlans_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inspectionPlans.service */ "./src/app/inspectionPlans/inspectionPlans.service.ts");
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



let InspectionPlansListComponent = class InspectionPlansListComponent {
    constructor(inspectionPlansService) {
        this.inspectionPlansService = inspectionPlansService;
        this.displayedColumns = ['description', 'temperature', 'humidity', 'pressure', 'personId', 'action'];
        this.isloading = false;
    }
    ngOnInit() {
        this.loadInspectionPlans();
    }
    loadInspectionPlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.inspectionPlansService.listInspectionPlans().subscribe(res => {
                    this.inspectionPlans = res;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.inspectionPlans);
                    this.isloading = true;
                    this.dataSource.paginator = this.paginator;
                });
            }
            catch (err) {
                console.error('this is not good: ${err/Message}');
                this.isloading = false;
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteInspectionPlan(inspectionPlan) {
        this.inspectionPlansService.deleteInspectionPlan(inspectionPlan.id).subscribe(x => {
            this.loadInspectionPlans();
        });
    }
};
InspectionPlansListComponent.ctorParameters = () => [
    { type: _inspectionPlans_service__WEBPACK_IMPORTED_MODULE_1__["InspectionPlansService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], InspectionPlansListComponent.prototype, "paginator", void 0);
InspectionPlansListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-inspectionPlans-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./inspectionPlans-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./inspectionPlans-list.component.css */ "./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_inspectionPlans_service__WEBPACK_IMPORTED_MODULE_1__["InspectionPlansService"]])
], InspectionPlansListComponent);



/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InspectionPlansRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPlansRoutingModule", function() { return InspectionPlansRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inspectionPlans_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectionPlans.component */ "./src/app/inspectionPlans/inspectionPlans.component.ts");
/* harmony import */ var _inspectionPlans_edit_inspectionPlans_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspectionPlans-edit/inspectionPlans-edit.component */ "./src/app/inspectionPlans/inspectionPlans-edit/inspectionPlans-edit.component.ts");
/* harmony import */ var _inspectionPlans_list_inspectionPlans_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspectionPlans-list/inspectionPlans-list.component */ "./src/app/inspectionPlans/inspectionPlans-list/inspectionPlans-list.component.ts");
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
        path: '', component: _inspectionPlans_component__WEBPACK_IMPORTED_MODULE_2__["InspectionPlansComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _inspectionPlans_list_inspectionPlans_list_component__WEBPACK_IMPORTED_MODULE_4__["InspectionPlansListComponent"] },
            { path: 'edit/:id', component: _inspectionPlans_edit_inspectionPlans_edit_component__WEBPACK_IMPORTED_MODULE_3__["InspectionPlansEditComponent"] },
            { path: 'edit', component: _inspectionPlans_edit_inspectionPlans_edit_component__WEBPACK_IMPORTED_MODULE_3__["InspectionPlansEditComponent"] },
        ]
    }
];
let InspectionPlansRoutingModule = class InspectionPlansRoutingModule {
};
InspectionPlansRoutingModule.routedComponents = [_inspectionPlans_component__WEBPACK_IMPORTED_MODULE_2__["InspectionPlansComponent"], _inspectionPlans_list_inspectionPlans_list_component__WEBPACK_IMPORTED_MODULE_4__["InspectionPlansListComponent"], _inspectionPlans_edit_inspectionPlans_edit_component__WEBPACK_IMPORTED_MODULE_3__["InspectionPlansEditComponent"]];
InspectionPlansRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], InspectionPlansRoutingModule);



/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans.component.css":
/*!***************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3BlY3Rpb25QbGFucy9pbnNwZWN0aW9uUGxhbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans.component.ts ***!
  \**************************************************************/
/*! exports provided: InspectionPlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPlansComponent", function() { return InspectionPlansComponent; });
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

let InspectionPlansComponent = class InspectionPlansComponent {
    constructor() { }
    ngOnInit() {
    }
};
InspectionPlansComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-inspectionPlans',
        template: __importDefault(__webpack_require__(/*! raw-loader!./inspectionPlans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inspectionPlans/inspectionPlans.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./inspectionPlans.component.css */ "./src/app/inspectionPlans/inspectionPlans.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], InspectionPlansComponent);



/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans.module.ts ***!
  \***********************************************************/
/*! exports provided: InspectionPlansModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPlansModule", function() { return InspectionPlansModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/core.module */ "./src/app/Core/core.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _inspectionPlans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspectionPlans-routing.module */ "./src/app/inspectionPlans/inspectionPlans-routing.module.ts");
/* harmony import */ var _inspectionPlans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspectionPlans.service */ "./src/app/inspectionPlans/inspectionPlans.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let InspectionPlansModule = class InspectionPlansModule {
};
InspectionPlansModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_inspectionPlans_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspectionPlansRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _inspectionPlans_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspectionPlansRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _Core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        providers: [_inspectionPlans_service__WEBPACK_IMPORTED_MODULE_6__["InspectionPlansService"]]
    })
], InspectionPlansModule);



/***/ }),

/***/ "./src/app/inspectionPlans/inspectionPlans.service.ts":
/*!************************************************************!*\
  !*** ./src/app/inspectionPlans/inspectionPlans.service.ts ***!
  \************************************************************/
/*! exports provided: InspectionPlansService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPlansService", function() { return InspectionPlansService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/application.service */ "./src/app/core/services/application.service.ts");
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



let InspectionPlansService = class InspectionPlansService {
    constructor(http, applicationService) {
        this.http = http;
        this.applicationService = applicationService;
    }
    getInspectionPlan(id) {
        return this.http.get(`${this.applicationService.baseUrl}api/InspectionPlans/${id}`);
    }
    listInspectionPlans() {
        return this.http.get(`${this.applicationService.baseUrl}api/InspectionPlans`);
    }
    saveInspectionPlan(inspectionPlan) {
        return this.http.post(`${this.applicationService.baseUrl}api/InspectionPlans`, inspectionPlan);
    }
    modifyInspectionPlan(inspectionPlan) {
        return this.http.put(`${this.applicationService.baseUrl}api/InspectionPlans/${inspectionPlan.id}`, inspectionPlan);
    }
    deleteInspectionPlan(id) {
        return this.http.delete(`${this.applicationService.baseUrl}api/InspectionPlans/${id}`);
    }
};
InspectionPlansService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
];
InspectionPlansService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
        _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
], InspectionPlansService);



/***/ })

}]);
//# sourceMappingURL=inspectionPlans-inspectionPlans-module-es2015.js.map