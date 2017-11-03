webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input, textarea {\r\n    display:block;\r\n    width: 100%;\r\n    margin-bottom:15px;\r\n    padding:10px;\r\n    background:none;\r\n    border-bottom: 1px solid #414a59 !important;\r\n    border:0;\r\n    color:#fff;\r\n}\r\n\r\ninput[type='submit'] {\r\n    background-color:#ffcc00;\r\n    cursor:pointer;\r\n    color:#000;\r\n    font-weight:bold;\r\n    margin-bottom:50px;\r\n    padding:20px;\r\n}\r\n\r\n\r\nh1 {\r\n    margin-top:50px;\r\n}\r\n\r\n.thumbnail {\r\n    padding:0px;\r\n}\r\n.panel {\r\n\tposition:relative;\r\n}\r\n.panel>.panel-heading:after,.panel>.panel-heading:before{\r\n\tposition:absolute;\r\n\ttop:11px;left:-16px;\r\n\tright:100%;\r\n\twidth:0;\r\n\theight:0;\r\n\tdisplay:block;\r\n\tcontent:\" \";\r\n\tborder-color:transparent;\r\n\tborder-style:solid solid outset;\r\n\tpointer-events:none;\r\n}\r\n.panel>.panel-heading:after{\r\n\tborder-width:7px;\r\n\tborder-right-color:#f7f7f7;\r\n\tmargin-top:1px;\r\n\tmargin-left:2px;\r\n}\r\n.panel>.panel-heading:before{\r\n\tborder-right-color:#ddd;\r\n\tborder-width:8px;\r\n}\r\n\r\n.readchat\r\n{\r\n    height:500px;\r\n    overflow-y:scroll;\r\n}\r\n\r\n.panel-body\r\n{\r\n    color:black;\r\n}\r\n\r\n.mytext{\r\n    border:0;padding:10px;background:whitesmoke;\r\n}\r\n.text{\r\n    width:75%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;\r\n}\r\n.text > p:first-of-type{\r\n    width:100%;margin-bottom:auto;line-height: 13px;font-size: 12px;\r\n}\r\n.text > p:last-of-type{\r\n    width:100%;color:black;margin-bottom:-7px;\r\n}\r\n.text-l{\r\n    float:left;padding-right:10px;\r\n}        \r\n.text-r{\r\n    float:right;padding-left:10px;\r\n}\r\n.avatar{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n    width:5%;\r\n    float:left;\r\n    padding-right:10px;\r\n}\r\n.macro{\r\n    margin-top:5px;width:85%;border-radius:5px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;\r\n}\r\n.msj-rta{\r\n    float:right;background:whitesmoke;\r\n}\r\n.msj{\r\n    float:left;background:white;\r\n}\r\n.frame{\r\n    background:#e0e0de;\r\n    height:450px;\r\n    overflow:hidden;\r\n    padding:0;\r\n}\r\n.frame > div:last-of-type{\r\n    position:absolute;bottom:5px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;\r\n}\r\nul {\r\n    width:100%;\r\n    list-style-type: none;\r\n    padding:18px;\r\n    bottom:32px;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n}\r\n.msj:before{\r\n    width: 0;\r\n    height: 0;\r\n    content:\"\";\r\n    top:-5px;\r\n    left:-14px;\r\n    position:relative;\r\n    border-style: solid;\r\n    border-width: 0 13px 13px 0;\r\n    border-color: transparent #ffffff transparent transparent;            \r\n}\r\n.msj-rta:after{\r\n    width: 0;\r\n    height: 0;\r\n    content:\"\";\r\n    top:-5px;\r\n    left:14px;\r\n    position:relative;\r\n    border-style: solid;\r\n    border-width: 13px 13px 0 0;\r\n    border-color: whitesmoke transparent transparent transparent;           \r\n}  \r\ninput:focus{\r\n    outline: none;\r\n}        \r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #d4d4d4;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n    color: #d4d4d4;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n    color: #d4d4d4;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n    color: #d4d4d4;\r\n}   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div #readscroll class=\"readchat\">\r\n  <ul><!--ul-->\r\n    <ng-container *ngFor=\"let message of messages | async;let i = index\">\r\n      <li *ngIf=\"user.displayName == message.data.username\" style=\"width:100%\">\r\n        <div class=\"msj macro\">\r\n          <div class=\"avatar\"><img class=\"img-circle\" style=\"width:100%;\" src=\"{{message.data.avatar}}\" /></div>\r\n              <div class=\"text text-l\">\r\n                  <p>{{message.data.content}}</p>\r\n                  <!--p><small>'+date+'</small></p-->\r\n              </div>\r\n          </div>\r\n      </li>\r\n      <li *ngIf=\"user.displayName != message.data.username\" style=\"width:100%;\">\r\n        <div class=\"msj-rta macro\">\r\n            <div class=\"text text-r\">\r\n                <p>{{message.data.content}}</p>\r\n            </div>\r\n            <div class=\"avatar\" style=\"padding:0px 0px 0px 10px !important\">\r\n              <img class=\"img-circle\" style=\"width:100%;\" src=\"{{message.data.avatar}}\" />\r\n            </div>  \r\n        </div>                           \r\n      </li>\r\n    </ng-container>\r\n  </ul><!--ul end-->\r\n</div>\r\n\r\n<div *ngIf=\"afAuth.authState | async; let user; else showLogin\">\r\n  <h4>Hello {{ user.displayName }}!</h4>\r\n  <textarea [(ngModel)]=\"content\" name=\"content\" placeholder=\"Content..\"></textarea>\r\n  <input type=\"submit\" value=\"Send Message\" (click)=\"sendMessage()\">\r\n  <div *ngIf=\"empty_flg\" class=\"alert alert-danger alert-dismissable fade in\">\r\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n    <strong>Error:</strong> Content can not be empty.\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\r\n  \r\n</div>\r\n<ng-template #showLogin>\r\n  <p>Please login.</p>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login with Google</button>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/**
 *  AngularFire Chat app Demo
 *
 *  @package  Angular4
 *  @author   Trần Bảo Tín <tbaotin96@gmail.com>
 *  Skype: tbaotin96@gmail.com
 *
 *  An Angular4 App using AngularFire2 5.0.0 + Angular-Cli 1.2.3 + Bootstrap 3.3.7 + Firebase Cloud Storage Beta
 *
 *  Hồ Chí Minh City @ 11/2017
 *
 **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.content = "";
        this.empty_flg = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.user = res;
                console.log('user is logged in', res);
            }
            else {
                console.log('user not logged in', res);
            }
        });
        this.messagesCol = this.afs.collection('messages');
        this.messages = this.messagesCol.snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    /**
     * Add message data to cloud storage
     *
     */
    AppComponent.prototype.sendMessage = function () {
        if (this.content != "") {
            //The statement below is add without customize key for data, the key will auto generate.
            //this.afs.collection('posts').add({'username': this.user.displayName, 'content': this.content,'avatar':this.user.photoURL});
            var d = new Date();
            //The statement below is add with customize key for data, the key for data is variable d:date
            this.afs.collection('messages').doc(d.toString()).set({ 'username': this.user.displayName, 'content': this.content, 'avatar': this.user.photoURL });
            this.scrollToBottom();
            this.content = "";
            this.empty_flg = false;
        }
        else {
            this.empty_flg = true;
        }
    };
    /**
     * Get message detail by ID
     * @param messageId
     */
    AppComponent.prototype.getMessage = function (messageId) {
        this.postDoc = this.afs.doc('messages/' + messageId);
        this.message = this.postDoc.valueChanges();
    };
    /**
     * Delete message by ID
     * @param messageId
     */
    AppComponent.prototype.deleteMessage = function (messageId) {
        this.afs.doc('messages/' + messageId).delete();
    };
    /**
     * Login Google by Auth of Firebase
     * Remember to enable Sign-in method in Authentication
     */
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
    };
    /**
     * Logout auth
     */
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AppComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('readscroll'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "myScrollContainer", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["b" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["b" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Setting firebase key config
var firebaseConfig = {
    apiKey: "AIzaSyAd4t6ThuoE91L6ZTNbEqTwj0unSKzqZcE",
    authDomain: "angularfirebase-6ac2e.firebaseapp.com",
    databaseURL: "https://angularfirebase-6ac2e.firebaseio.com",
    projectId: "angularfirebase-6ac2e",
    storageBucket: "angularfirebase-6ac2e.appspot.com",
    messagingSenderId: "843294637474"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map