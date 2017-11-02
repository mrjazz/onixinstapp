webpackJsonp(["common"],{

/***/ "../../../../../src/app/shared/post-view/post-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back-drop\" *ngIf=\"isShown\" (click)=\"hideModal($event)\" role=\"dialog\">\n  <div class=\"modal-controls\">\n    <div class=\"controls-backdrop\">\n      <div class=\"controls-container\">\n        <a class=\"left-arrow-icon\" role=\"button\" (click)=\"getPost(1)\">Previous</a>\n        <a class=\"right-arrow-icon\" role=\"button\" (click)=\"getPost(1)\">Next</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-container\">\n    <div class=\"modal\">\n      <article>\n        <header>\n          <div class=\"profile-img\">\n            <a href=\"#/{{postData.profile.username}}\">\n              <img [src]=\"postData.profile.avatar\">\n            </a>\n          </div>\n          <div class=\"user-info\">\n            <div>\n              <div class=\"user-name\">\n                <a title=\"{{postData.profile.username}}\" href=\"#/{{postData.profile.username}}\">{{postData.profile.username}}</a>\n                <span class=\"verified-badge-icon\" title=\"Verified\" *ngIf=\"postData.profile.verified\">Verified</span></div>\n            </div>\n            <div class=\"user-full-name\"></div>\n          </div>\n          <span class=\"follow-btn\"><button>Follow</button></span>\n        </header>\n        <div class=\"img-container\">\n          <div>\n            <div class=\"img-box\">\n              <div class=\"img-holder\">\n                <img [src]=\"postData.picture.url\">\n              </div>\n              <div class=\"shift\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"comments-container\">\n          <section class=\"post-controls\">\n            <a class=\"heart-open-icon\" routeLink=\"#\" role=\"button\" aria-disabled=\"false\"><span>Like</span></a>\n            <a class=\"comment-icon\" routeLink=\"#\" role=\"button\"><span>Comment</span></a>\n          </section>\n          <section class=\"likes-count\">\n            <div><a routeLink=\"#\" role=\"button\"><span>{{postData.likesCount}}</span> likes</a></div>\n          </section>\n          <div class=\"comments\">\n            <ul>\n              <li *ngFor=\"let comment of postData.comments\">\n                <a class=\"user-link\" title=\"{{comment.user.username}}\" href=\"#/{{comment.user.username}}\">\n                  {{comment.user.username}}\n                </a>\n                <span>{{comment.text}}</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"date-section\">\n            <a>\n              <app-time-ago [timeStamp]=\"postData.timestamp * 1000\"></app-time-ago>\n            </a>\n          </div>\n          <section class=\"add-comment\">\n            <form><textarea aria-label=\"Add a comment…\" placeholder=\"Add a comment…\"></textarea></form>\n          </section>\n        </div>\n        <div class=\"more-options\"><button><span class=\"options-ellipsis-icon\">More options</span></button></div>\n      </article>\n    </div>\n  </div>\n  <button class=\"modal-close-btn\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/post-view/post-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostViewComponent = (function () {
    function PostViewComponent(apiService) {
        this.apiService = apiService;
        this.isShownChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(PostViewComponent.prototype, "postId", {
        set: function (value) {
            if (value) {
                this._postId = value;
                this.getPost(this._postId);
            }
        },
        enumerable: true,
        configurable: true
    });
    PostViewComponent.prototype.hideModal = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var value = target.attributes.class.nodeValue;
        if (value == "back-drop" || value == "modal-close-btn") {
            this.isShown = !this.isShown;
            this.isShownChange.emit(this.isShown);
        }
    };
    PostViewComponent.prototype.getPost = function (id) {
        var _this = this;
        this.apiService.getPost(id).subscribe(function (data) {
            _this.postData = data;
            _this.isShown = true;
        });
    };
    return PostViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PostViewComponent.prototype, "isShownChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PostViewComponent.prototype, "postId", null);
PostViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-view',
        template: __webpack_require__("../../../../../src/app/shared/post-view/post-view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], PostViewComponent);

var _a, _b;
//# sourceMappingURL=post-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/post-view/post-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_time_ago_time_ago_module__ = __webpack_require__("../../../../../src/app/shared/time-ago/time-ago.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_view_component__ = __webpack_require__("../../../../../src/app/shared/post-view/post-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__post_view_component__["a" /* PostViewComponent */]
];
var PostViewModule = (function () {
    function PostViewModule() {
    }
    return PostViewModule;
}());
PostViewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_time_ago_time_ago_module__["a" /* TimeAgoModule */]
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], PostViewModule);

//# sourceMappingURL=post-view.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/time-ago/time-ago.component.html":
/***/ (function(module, exports) {

module.exports = "<time\n  title=\"{{timeStamp | date}}\">\n  {{timeStamp | timeago}}\n</time>\n"

/***/ }),

/***/ "../../../../../src/app/shared/time-ago/time-ago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoComponent; });
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

var TimeAgoComponent = (function () {
    function TimeAgoComponent() {
    }
    return TimeAgoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimeAgoComponent.prototype, "timeStamp", void 0);
TimeAgoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-time-ago',
        template: __webpack_require__("../../../../../src/app/shared/time-ago/time-ago.component.html")
    })
], TimeAgoComponent);

//# sourceMappingURL=time-ago.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/time-ago/time-ago.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_ago_component__ = __webpack_require__("../../../../../src/app/shared/time-ago/time-ago.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TimeAgoModule = (function () {
    function TimeAgoModule() {
    }
    return TimeAgoModule;
}());
TimeAgoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_shared_pipes_module__["a" /* SharedPipesModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__time_ago_component__["a" /* TimeAgoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__time_ago_component__["a" /* TimeAgoComponent */]],
    })
], TimeAgoModule);

//# sourceMappingURL=time-ago.module.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map