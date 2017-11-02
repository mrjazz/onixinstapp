webpackJsonp(["explore.module"],{

/***/ "../../../../../src/app/explore/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_card_component__ = __webpack_require__("../../../../../src/app/explore/components/user-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__user_card_component__["a" /* UserCardComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/explore/components/user-card.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"user-photo\" href=\"#/{{userData.username}}\">\n  <img  [src]=\"userData.avatar\" >\n</a>\n<div class=\"user-info\">\n  <div class=\"name\">\n    <a title=\"bbc_travel\" href=\"#/{{userData.username}}\">{{userData.username}}</a>\n    <span class=\"verified-badge-icon\" title=\"Verified\">Verified</span>\n  </div>\n  <div class=\"sub-title\">{{userData.full_name}}</div>\n</div>\n<div class=\"follow-section\">\n    <span>\n      <button>Follow</button>\n    </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/explore/components/user-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserCardComponent = (function () {
    function UserCardComponent() {
    }
    return UserCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], UserCardComponent.prototype, "userData", void 0);
UserCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-card',
        template: __webpack_require__("../../../../../src/app/explore/components/user-card.component.html")
    })
], UserCardComponent);

//# sourceMappingURL=user-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"explore-container\">\n  <div class=\"discover-people\">\n    <h2 class=\"title\">Discover People</h2>\n    <div class=\"cards-container\">\n      <app-user-card *ngFor=\"let user of usersList\" [userData]=\"user\"></app-user-card>\n    </div>\n  </div>\n  <h2 class=\"explore-title\">Explore</h2>\n  <article class=\"gallery\">\n    <div>\n      <div *ngFor=\"let item of gallery; let i = index\">\n        <div class=\"gallery-row\" *ngIf=\"i % 3 == 0\">\n          <div class=\"gallery-item\">\n            <a (click)=\"explorePost(gallery[i].id)\">\n              <div class=\"preview-container\">\n                <div class=\"img-holder\"><img [src]=\"gallery[i].picture.url\"></div>\n                <div class=\"shift\"></div>\n              </div>\n              <div class=\"img-overflow\">\n                <ul>\n                  <li><span>{{gallery[i].likes | formatNumbers}}</span><span class=\"heart-small-icon\">likes</span></li>\n                  <li><span>{{gallery[i].posts | formatNumbers}}</span><span class=\"speech-bubble-small-icon\">comments</span></li>\n                </ul>\n              </div>\n            </a>\n          </div>\n          <div class=\"gallery-item\" *ngIf=\"gallery.length > (i + 1)\">\n            <a (click)=\"explorePost(gallery[i+1].id)\">\n              <div class=\"preview-container\">\n                <div class=\"img-holder\"><img [src]=\"gallery[i+1].picture.url\"></div>\n                <div class=\"shift\"></div>\n              </div>\n              <div class=\"img-overflow\">\n                <ul>\n                  <li><span>{{gallery[i+1].likes | formatNumbers}}</span><span class=\"heart-small-icon\">likes</span></li>\n                  <li><span>{{gallery[i+1].posts | formatNumbers}}</span><span class=\"speech-bubble-small-icon\">comments</span></li>\n                </ul>\n              </div>\n            </a>\n          </div>\n          <div class=\"gallery-item\" *ngIf=\"gallery.length > (i + 2)\">\n            <a (click)=\"explorePost(gallery[i+2].id)\">\n              <div class=\"preview-container\">\n                <div class=\"img-holder\"><img [src]=\"gallery[i+2].picture.url\"></div>\n                <div class=\"shift\"></div>\n              </div>\n              <div class=\"img-overflow\">\n                <ul>\n                  <li><span>{{gallery[i+2].likes | formatNumbers}}</span><span class=\"heart-small-icon\">likes</span></li>\n                  <li><span>{{gallery[i+2].posts | formatNumbers}}</span><span class=\"speech-bubble-small-icon\">comments</span></li>\n                </ul>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n</div>\n<app-post-view (isShownChange)=\"postId=''\" [postId]=\"postId\"></app-post-view>\n"

/***/ }),

/***/ "../../../../../src/app/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExploreComponent = (function () {
    function ExploreComponent(apiService) {
        this.apiService = apiService;
    }
    ExploreComponent.prototype.explorePost = function (id) {
        this.postId = id;
    };
    ExploreComponent.prototype.getGallery = function () {
        var _this = this;
        this.apiService.getGallery().subscribe(function (data) { return _this.gallery = data; });
    };
    ExploreComponent.prototype.getUsers = function () {
        var _this = this;
        this.apiService.getUsers().subscribe(function (data) { return _this.usersList = data; });
    };
    ExploreComponent.prototype.ngOnInit = function () {
        this.getGallery();
        this.getUsers();
    };
    return ExploreComponent;
}());
ExploreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-explore',
        template: __webpack_require__("../../../../../src/app/explore/explore.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ExploreComponent);

var _a;
//# sourceMappingURL=explore.component.js.map

/***/ }),

/***/ "../../../../../src/app/explore/explore.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreModule", function() { return ExploreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("../../../../../src/app/explore/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_post_view_post_view_module__ = __webpack_require__("../../../../../src/app/shared/post-view/post-view.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__explore_component__ = __webpack_require__("../../../../../src/app/explore/explore.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ExploreModule = (function () {
    function ExploreModule() {
    }
    return ExploreModule;
}());
ExploreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_pipes_shared_pipes_module__["a" /* SharedPipesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_post_view_post_view_module__["a" /* PostViewModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_7__explore_component__["a" /* ExploreComponent */],
                },
            ]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__explore_component__["a" /* ExploreComponent */]
        ],
        providers: []
    })
], ExploreModule);

//# sourceMappingURL=explore.module.js.map

/***/ })

});
//# sourceMappingURL=explore.module.chunk.js.map