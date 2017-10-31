webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<article *ngIf=\"profileData\">\n  <header>\n    <div class=\"profile-img\">\n      <div class=\"img-center\"><img [src]=\"profileData.avatar\"></div>\n    </div>\n    <div class=\"profile-info\">\n      <div class=\"title\">\n        <h1 title=\"{{profileData.username}}\">{{profileData.username}}</h1>\n        <span class=\"verified-badge-icon\" title=\"Verified\" *ngIf=\"profileData.verified\">Verified</span>\n      </div>\n      <ul class=\"counts\">\n        <li><span class=\"count-item\"><span class=\"bold-text\">{{profileData.count.posts}}</span> posts</span></li>\n        <li><a class=\"count-item\" href=\"#/{{profileData.username}}\"><span class=\"bold-text\" title=\"{{profileData.count.followers}}\">{{profileData.count.followers}}</span> followers</a></li>\n        <li><a class=\"count-item\" href=\"#/{{profileData.username}}\"><span class=\"bold-text\">{{profileData.count.following}}</span> following</a></li>\n      </ul>\n      <div class=\"description\">\n        {{profileData.description}}\n      </div>\n    </div>\n  </header>\n  <div class=\"gallery\">\n    <div>\n      <div *ngFor=\"let item of profileData.gallery; let i = index\">\n        <div class=\"gallery-row\" *ngIf=\"i % 3 == 0\">\n          <div class=\"gallery-item\">\n            <a (click)=\"explorePost(profileData.gallery[i].id)\">\n              <div class=\"preview-container\">\n                <div class=\"img-holder\"><img [src]=\"profileData.gallery[i].picture.url\"></div>\n                <div class=\"shift\"></div>\n              </div>\n            </a>\n          </div>\n          <div class=\"gallery-item\" *ngIf=\"profileData.gallery.length > (i + 1)\">\n            <a (click)=\"explorePost(profileData.gallery[i+1].id)\">\n              <div class=\"preview-container\">\n                <div class=\"img-holder\"><img [src]=\"profileData.gallery[i+1].picture.url\"></div>\n                <div class=\"shift\"></div>\n              </div>\n            </a>\n          </div>\n          <div class=\"gallery-item\" *ngIf=\"profileData.gallery.length > (i + 2)\">\n            <a (click)=\"explorePost(profileData.gallery[i+2].id)\">\n              <div class=\"preview-container\">\n                <div class=\"img-holder\"><img [src]=\"profileData.gallery[i+2].picture.url\"></div>\n                <div class=\"shift\"></div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#\" class=\"load-more-btn\" *ngIf=\"false\">Load more</a>\n  </div>\n</article>\n<app-post-view (isShownChange)=\"postId=''\" [postId]=\"postId\"></app-post-view>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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


var ProfileComponent = (function () {
    function ProfileComponent(apiService) {
        this.apiService = apiService;
    }
    ProfileComponent.prototype.explorePost = function (id) {
        this.postId = id;
    };
    ProfileComponent.prototype.getUser = function (id) {
        var _this = this;
        this.apiService.getUser(id).subscribe(function (data) { return _this.profileData = data; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser(1);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_post_view_post_view_module__ = __webpack_require__("../../../../../src/app/shared/post-view/post-view.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_post_view_post_view_module__["a" /* PostViewModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
                },
            ]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */]
        ],
        providers: []
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map