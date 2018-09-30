webpackJsonp([2],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatinhosPageModule", function() { return GatinhosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gatinhos__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GatinhosPageModule = /** @class */ (function () {
    function GatinhosPageModule() {
    }
    GatinhosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gatinhos__["a" /* GatinhosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gatinhos__["a" /* GatinhosPage */]),
            ],
        })
    ], GatinhosPageModule);
    return GatinhosPageModule;
}());

//# sourceMappingURL=gatinhos.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatinhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the GatinhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GatinhosPage = /** @class */ (function () {
    function GatinhosPage(navCtrl, navParams, provider, db, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.Cats = this.provider.getAllG();
    }
    GatinhosPage.prototype.newCat = function () {
        this.navCtrl.push('GatinhosEditPage');
    };
    GatinhosPage.prototype.editCats = function (contact) {
        this.navCtrl.push('GatinhosEditPage', { contact: contact });
    };
    GatinhosPage.prototype.removeCat = function (key) {
        var _this = this;
        if (key) {
            this.provider.removeG(key)
                .then(function () {
                _this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
            });
        }
    };
    GatinhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gatinhos',template:/*ion-inline-start:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\gatinhos\gatinhos.html"*/'<!--\n  Generated template for the GatinhosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Gatinhos\n      <ion-icon name="paw"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="pagCats" padding>\n  <ion-list >\n      <ion-item-sliding id="slideItemMed" *ngFor="let cat of Cats | async">\n        <ion-item>\n          \n          <h2>{{ cat.nome }}</h2>\n          <p>{{ cat.idade }}</p>\n          <p>{{ cat.dono }}</p>\n          <p>{{ cat.doenca }}</p>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="secondary" (click)="editCats(cat)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n          <button ion-button color="danger" (click)="removeCat(cat.key)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab bottom right>\n       <button ion-fab color="primary" (click)="newCat()">\n         <ion-icon name="add"></ion-icon>\n       </button>\n     </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\gatinhos\gatinhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], GatinhosPage);
    return GatinhosPage;
}());

//# sourceMappingURL=gatinhos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map