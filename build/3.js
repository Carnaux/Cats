webpackJsonp([3],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatinhosEditPageModule", function() { return GatinhosEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gatinhos_edit__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GatinhosEditPageModule = /** @class */ (function () {
    function GatinhosEditPageModule() {
    }
    GatinhosEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gatinhos_edit__["a" /* GatinhosEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gatinhos_edit__["a" /* GatinhosEditPage */]),
            ],
        })
    ], GatinhosEditPageModule);
    return GatinhosEditPageModule;
}());

//# sourceMappingURL=gatinhos-edit.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatinhosEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GatinhosEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GatinhosEditPage = /** @class */ (function () {
    function GatinhosEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.cat = this.navParams.data.drug || {};
        this.createFormCat();
    }
    GatinhosEditPage.prototype.createFormCat = function () {
        this.form = this.formBuilder.group({
            key: [this.cat.key],
            nome: [this.cat.nome, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            idade: [this.cat.idade],
            dono: [this.cat.dono, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            doenca: [this.cat.doenca, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    GatinhosEditPage.prototype.onSubmitCat = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.saveG(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    GatinhosEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-gatinhos-edit',template:/*ion-inline-start:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\gatinhos-edit\gatinhos-edit.html"*/'<!--\n  Generated template for the GatinhosEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adicionar gatinho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" formControlName="nome"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n      <div [hidden]="!form.controls.nome.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Idade</ion-label>\n      <ion-input type="text" formControlName="idade"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Dono</ion-label>\n      <ion-input type="text" formControlName="dono"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.dono.valid && (form.controls.dono.dirty || form.controls.dono.touched)" color="danger">\n      <div [hidden]="!form.controls.dono.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Doença</ion-label>\n      <ion-input type="text" formControlName="doenca"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.doenca.valid && (form.controls.doenca.dirty || form.controls.doenca.touched)" color="danger">\n      <div [hidden]="!form.controls.doenca.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmitCat()">Salvar</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\gatinhos-edit\gatinhos-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], GatinhosEditPage);
    return GatinhosEditPage;
}());

//# sourceMappingURL=gatinhos-edit.js.map

/***/ })

});
//# sourceMappingURL=3.js.map