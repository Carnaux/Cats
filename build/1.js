webpackJsonp([1],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantimentosPageModule", function() { return MantimentosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mantimentos__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MantimentosPageModule = /** @class */ (function () {
    function MantimentosPageModule() {
    }
    MantimentosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mantimentos__["a" /* MantimentosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mantimentos__["a" /* MantimentosPage */]),
            ],
        })
    ], MantimentosPageModule);
    return MantimentosPageModule;
}());

//# sourceMappingURL=mantimentos.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MantimentosPage; });
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






var MantimentosPage = /** @class */ (function () {
    /*constructor(public navCtrl: NavController, public navParams: NavParams, private provider: ContactProvider, private db: AngularFireDatabase) {
      this.Goods = this.provider.getAll();
    }*/
    function MantimentosPage(navCtrl, navParams, provider, db, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.picToView2 = "assets/imgs/pouca.png";
        this.Goods = this.provider.getAllM();
        this.Drugs = this.provider.getAllD();
        this.counterM = 0;
    }
    MantimentosPage.prototype.setupManti = function (objeto) {
        if (this.counterM == 0) {
            if (objeto >= 6) {
                this.picToView2 = "assets/imgs/muita.png";
            }
            else if (objeto <= 5 && objeto >= 3) {
                this.picToView2 = "assets/imgs/medio.png";
            }
            else if (objeto <= 2) {
                this.picToView2 = "assets/imgs/pouca.png";
            }
        }
    };
    MantimentosPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Ração',
            message: "Os gatinhos foram alimentados, quantos kgs temos sobrando?",
            inputs: [
                {
                    name: 'quantidade',
                    placeholder: 'Quantidade'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        return new Promise(function (resolve, reject) {
                            if ("a1b2c3") {
                                _this.db.list("mantimen/")
                                    .update("a1b2c3", { racao: data.quantidade })
                                    .then(function () { return resolve(); })
                                    .catch(function (e) { return reject(e); });
                                _this.setupManti(data.quantidade);
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    MantimentosPage.prototype.onScroll = function ($event) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            document.getElementById('btadd').style.visibility = "visible";
        }
        else {
            document.getElementById('btadd').style.visibility = "hidden";
        }
    };
    MantimentosPage.prototype.newContactDrugs = function () {
        this.navCtrl.push('RemediosPage');
    };
    MantimentosPage.prototype.editContactDrugs = function (contact) {
        this.navCtrl.push('RemediosPage', { contact: contact });
    };
    MantimentosPage.prototype.removeContactD = function (key) {
        var _this = this;
        console.log(key);
        if (key) {
            this.provider.removeD(key)
                .then(function () {
                _this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
            });
        }
    };
    MantimentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mantimentos',template:/*ion-inline-start:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\mantimentos\mantimentos.html"*/'\n<ion-header >\n\n  <ion-navbar id="MantiHeader">\n    <ion-title>\n      Mantimentos\n      <ion-icon name="cart"></ion-icon>\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="content2" (ionScrollEnd)="onScroll($event)" padding>\n\n  <div *ngFor="let good of Goods | async">\n    <p>{{setupManti(good.racao)}}</p>\n    <div id="txtBtRacao">\n      <p >Ração em estoque: {{good.racao}} </p>\n    </div>\n\n  </div>\n\n\n  <img id="imgRacao" [src]="picToView2" (click)="showPrompt()">\n\n  <ion-list id="medicamentos">\n      <ion-item-sliding id="slideItemMed" *ngFor="let drug of Drugs | async">\n        <ion-item>\n          <h1>{{ drug.nome }}</h1>\n          <p>{{ drug.funcao }}</p>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="secondary" (click)="editContactDrugs(drug)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n          <button ion-button color="danger" (click)="removeContactD(drug.key)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n<ion-fab id="btadd" bottom right>\n   <button ion-fab color="primary" (click)="newContactDrugs()">\n     <ion-icon name="add"></ion-icon>\n   </button>\n </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\mantimentos\mantimentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MantimentosPage);
    return MantimentosPage;
}());

//# sourceMappingURL=mantimentos.js.map

/***/ })

});
//# sourceMappingURL=1.js.map