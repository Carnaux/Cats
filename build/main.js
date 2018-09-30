webpackJsonp([5],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactProvider = /** @class */ (function () {
    function ContactProvider(db) {
        this.db = db;
        this.PATH = 'contacts/';
        this.PATHM = 'mantimen/';
        this.PATHD = 'mantimen/medicamentos/';
        this.PATHG = 'gatinhos/';
    }
    ContactProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ContactProvider.prototype.getAllM = function () {
        return this.db.list(this.PATHM, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ContactProvider.prototype.getAllD = function () {
        return this.db.list(this.PATHD, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ContactProvider.prototype.getAllG = function () {
        return this.db.list(this.PATHG, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ContactProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    ContactProvider.prototype.save = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (contact.key) {
                _this.db.list(_this.PATH)
                    .update(contact.key, { name: contact.name, tel: contact.tel })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ name: contact.name, tel: contact.tel })
                    .then(function () { return resolve(); });
            }
        });
    };
    ContactProvider.prototype.saveD = function (drug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (drug.key) {
                _this.db.list(_this.PATHD)
                    .update(drug.key, { nome: drug.nome, funcao: drug.funcao })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATHD)
                    .push({ nome: drug.nome, funcao: drug.funcao })
                    .then(function () { return resolve(); });
            }
        });
    };
    ContactProvider.prototype.saveG = function (cat) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (cat.key) {
                _this.db.list(_this.PATHG)
                    .update(cat.key, { nome: cat.nome, idade: cat.idade, dono: cat.dono, doenca: cat.doenca })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATHG)
                    .push({ nome: cat.nome, idade: cat.idade, dono: cat.dono, doenca: cat.doenca })
                    .then(function () { return resolve(); });
            }
        });
    };
    ContactProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ContactProvider.prototype.removeD = function (key) {
        return this.db.list(this.PATHD).remove(key);
    };
    ContactProvider.prototype.removeG = function (key) {
        return this.db.list(this.PATHG).remove(key);
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact-edit/contact-edit.module": [
		472,
		4
	],
	"../pages/gatinhos-edit/gatinhos-edit.module": [
		473,
		3
	],
	"../pages/gatinhos/gatinhos.module": [
		474,
		2
	],
	"../pages/mantimentos/mantimentos.module": [
		475,
		1
	],
	"../pages/remedios/remedios.module": [
		476,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(85);
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





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, provider, toast, db) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.db = db;
        this.picToView = "assets/imgs/fome.png";
        this.PATH1 = 'contacts/';
        this.splash = true;
        this.counter = 0;
        this.contacts = this.provider.getAll();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        document.getElementById("custom-overlayimg").style.animationPlayState = "paused";
        setTimeout(function () { return document.getElementById("custom-overlayimg").style.animationPlayState = "running"; }, 2000);
        setTimeout(function () { return _this.splash = false; }, 4500);
    };
    HomePage.prototype.MudarStatus = function (contact) {
        var _this = this;
        if (document.getElementById('id1').innerHTML == "true") {
            this.picToView = "assets/imgs/fome.png";
            document.getElementById('txtBt').innerHTML = "Os gatinhos não foram alimentados";
            document.getElementById("btmantimentos").style.backgroundColor = "#ff2323"; //"#ff2323";
            document.getElementById("btgatos").style.backgroundColor = "#ff2323";
            return new Promise(function (resolve, reject) {
                if ("-LHnMAHbHyjA1UfNdt-H") {
                    _this.db.list(_this.PATH1)
                        .update("-LHnMAHbHyjA1UfNdt-H", { ali: false })
                        .then(function () { return resolve(); })
                        .catch(function (e) { return reject(e); });
                }
            });
        }
        else {
            this.picToView = "assets/imgs/alimentado.png";
            document.getElementById('txtBt').innerHTML = "Os gatinhos já foram alimentados";
            document.getElementById("btmantimentos").style.backgroundColor = "#27cc2a";
            document.getElementById("btgatos").style.backgroundColor = "#27cc2a";
            return new Promise(function (resolve, reject) {
                if ("-LHnMAHbHyjA1UfNdt-H") {
                    _this.db.list(_this.PATH1)
                        .update("-LHnMAHbHyjA1UfNdt-H", { ali: true })
                        .then(function () { return resolve(); })
                        .catch(function (e) { return reject(e); });
                }
            });
        }
    };
    HomePage.prototype.setUpStatus = function (objeto) {
        if (this.counter == 0) {
            if (objeto) {
                this.picToView = "assets/imgs/alimentado.png";
                document.getElementById('txtBt').innerHTML = "Os gatinhos já foram alimentados";
                document.getElementById("btmantimentos").style.backgroundColor = "#27cc2a";
                document.getElementById("btgatos").style.backgroundColor = "#27cc2a";
            }
            else {
                this.picToView = "assets/imgs/fome.png";
                document.getElementById('txtBt').innerHTML = "Os gatinhos não foram alimentados";
                document.getElementById("btgatos").style.backgroundColor = "#ff2323";
                document.getElementById("btmantimentos").style.backgroundColor = "#ff2323";
            }
        }
        this.counter = this.counter + 1;
    };
    HomePage.prototype.TrocaPage = function (n) {
        if (n == 1) {
            this.navCtrl.push('MantimentosPage');
            this.counter = 0;
        }
        else if (n == 2) {
            this.navCtrl.push('GatinhosPage');
            this.counter = 0;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n     <div class="flb">\n          <img id="custom-overlayimg" src="assets/imgs/caticon.png">\n          <p id="textSplash">Desenvolvido por Daniel Fernandes</p>\n     </div>\n</div>\n<ion-header>\n</ion-header>\n\n<ion-content color="primary" id="content" padding>\n\n  <div *ngFor="let contact of contacts | async">\n    <p id="id1" >{{ contact.ali }}</p>\n    <p id="id2">{{setUpStatus(contact.ali)}}</p>\n\n    <button id="btAli" (click)="MudarStatus(contact.ali)">\n      <img id="imgBtAlino" [src]="picToView">\n    </button>\n\n\n  </div>\n  <p id="txtBt"></p>\n\n  <div id="tabs">\n    <button ion-button item-end icon-start id="btmantimentos" (click)="TrocaPage(\'1\')" >\n      Mantimentos\n      <ion-icon name="cart"></ion-icon>\n    </button>\n    <button ion-button item-end icon-start id="btgatos" (click)="TrocaPage(\'2\')" >\n      Gatinhos\n      <ion-icon name="paw"></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(404);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_contact_contact__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact-edit/contact-edit.module#ContactEditPageModule', name: 'ContactEditPage', segment: 'contact-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gatinhos-edit/gatinhos-edit.module#GatinhosEditPageModule', name: 'GatinhosEditPage', segment: 'gatinhos-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gatinhos/gatinhos.module#GatinhosPageModule', name: 'GatinhosPage', segment: 'gatinhos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mantimentos/mantimentos.module#MantimentosPageModule', name: 'MantimentosPage', segment: 'mantimentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remedios/remedios.module#RemediosPageModule', name: 'RemediosPage', segment: 'remedios', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyBS3zY1YIsKpf24xjzEa1pY4Z5rKNT-CyM",
                    authDomain: "gatinhos-66a4d.firebaseapp.com",
                    databaseURL: "https://gatinhos-66a4d.firebaseio.com",
                    projectId: "gatinhos-66a4d",
                    storageBucket: "gatinhos-66a4d.appspot.com",
                    messagingSenderId: "1255156079"
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_contact_contact__["a" /* ContactProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Daniel\Desktop\Documentos de Projeto\RESIDENCIA\Gatos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map