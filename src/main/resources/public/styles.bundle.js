webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/images/sprites_2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sprites_2x.e8d089baf17528e1cf2a.png";

/***/ }),

/***/ "../../../../../src/assets/scss/global.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/assets/scss/global.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--9-1!../../../node_modules/postcss-loader/index.js??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--9-3!./global.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--9-1!../../../node_modules/postcss-loader/index.js??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--9-3!./global.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/assets/scss/global.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*-------------------------------------------------------*/\n/*- HELPERS                                             -*/\n/*-------------------------------------------------------*/\na,\nabbr,\nacronym,\naddress,\napplet,\narticle,\naside,\naudio,\nb,\nbig,\nblockquote,\nbody,\ncanvas,\ncaption,\ncenter,\ncite,\ncode,\ndd,\ndel,\ndetails,\ndfn,\ndiv,\ndl,\ndt,\nem,\nembed,\nfieldset,\nfigcaption,\nfigure,\nfooter,\nform,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nheader,\nhtml,\ni,\niframe,\nimg,\nins,\nkbd,\nlabel,\nlegend,\nli,\nmark,\nmenu,\nnav,\nobject,\nol,\noutput,\np,\npre,\nq,\nruby,\ns,\nsamp,\nsection,\nsmall,\nspan,\nstrike,\nstrong,\nsub,\nsummary,\nsup,\ntable,\ntbody,\ntd,\ntfoot,\nth,\nthead,\ntime,\ntr,\ntt,\nu,\nul,\nvar,\nvideo {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n  border: 0; }\n\napp-root,\napp-footer,\napp-header,\napp-layout,\napp-user-card,\napp-profile,\narticle,\ndiv,\nfooter,\nheader,\nmain,\nnav,\nsection {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0 solid #000;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  -ms-flex-negative: 0;\n  flex-shrink: 0; }\n\na,\na:visited {\n  text-decoration: none;\n  color: #003569; }\n\n/*-------------------------------------------------------*/\n/*- COMPONENTS                                          -*/\n/*-------------------------------------------------------*/\napp-header {\n  -webkit-box-ordinal-group: 1;\n  -ms-flex-order: 0;\n  order: 0; }\n  app-header .space-holder {\n    -ms-flex-preferred-size: 75px;\n    flex-basis: 75px; }\n  app-header nav.header {\n    padding: 0;\n    background-color: #fafafa; }\n    app-header nav.header .controls,\n    app-header nav.header .header-container {\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center; }\n    app-header nav.header .header-container {\n      transition: height 0.2s ease-in-out;\n      position: fixed;\n      z-index: 1;\n      top: 0;\n      width: 100%;\n      height: 77px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.0975);\n      background-color: #fff; }\n      app-header nav.header .header-container .controls {\n        transition: height 0.2s ease-in-out;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        max-width: 1010px;\n        height: 77px;\n        padding: 26px 40px;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center; }\n        app-header nav.header .header-container .controls .brand {\n          min-width: 40px;\n          -webkit-box-flex: 1;\n          -ms-flex: 1 9999 0;\n          flex: 1 9999 0; }\n          app-header nav.header .header-container .controls .brand .logo {\n            position: relative;\n            overflow: hidden;\n            max-width: 100%;\n            margin-top: -4px;\n            margin-right: 12px; }\n            app-header nav.header .header-container .controls .brand .logo .name,\n            app-header nav.header .header-container .controls .brand .logo .image {\n              background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n              background-repeat: no-repeat;\n              background-size: 395px 371px;\n              transition: opacity 0.2s ease-in-out;\n              display: block;\n              overflow: hidden;\n              white-space: nowrap;\n              text-indent: 110%; }\n              @media (max-width: 768px) {\n                app-header nav.header .header-container .controls .brand .logo .name,\n                app-header nav.header .header-container .controls .brand .logo .image {\n                  -webkit-transform: translate3d(0, 0, 0) scale(0.8);\n                  transform: translate3d(0, 0, 0) scale(0.8);\n                  -webkit-transform-origin: left;\n                  transform-origin: left;\n                  text-indent: 200%; } }\n            app-header nav.header .header-container .controls .brand .logo .name {\n              width: 176px;\n              height: 35px;\n              opacity: 1;\n              background-position: -176px 0; }\n            app-header nav.header .header-container .controls .brand .logo .image {\n              position: absolute;\n              top: 4px;\n              width: 30px;\n              height: 30px;\n              pointer-events: none;\n              opacity: 0;\n              background-position: -193px -281px; }\n        app-header nav.header .header-container .controls .search {\n          width: 215px;\n          min-width: 125px;\n          height: 28px;\n          -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n          @media (max-width: 500px) {\n            app-header nav.header .header-container .controls .search {\n              display: none; } }\n          app-header nav.header .header-container .controls .search input {\n            box-sizing: border-box;\n            font-size: 14px;\n            z-index: 2;\n            width: 100%;\n            height: 100%;\n            padding: 3px 10px 3px 26px;\n            color: #262626;\n            border: solid 1px #dbdbdb;\n            border-radius: 3px;\n            outline: none;\n            -webkit-appearance: none; }\n          app-header nav.header .header-container .controls .search > .search-icon,\n          app-header nav.header .header-container .controls .search > .search-clear {\n            background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n            background-repeat: no-repeat;\n            background-size: 395px 371px; }\n          app-header nav.header .header-container .controls .search > .search-icon {\n            position: absolute;\n            z-index: 2;\n            top: 9px;\n            left: 11px;\n            width: 10px;\n            height: 10px;\n            background-position: -379px -161px; }\n          app-header nav.header .header-container .controls .search > .search-clear {\n            position: absolute;\n            z-index: 3;\n            top: 4px;\n            right: 5px;\n            width: 20px;\n            height: 20px;\n            background-position: -176px -113px; }\n          app-header nav.header .header-container .controls .search .input-overflow {\n            box-sizing: border-box;\n            font-size: 14px;\n            font-weight: 300;\n            position: absolute;\n            z-index: 2;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            padding: 7px;\n            cursor: text;\n            text-align: center;\n            color: #999;\n            border: solid 1px #dbdbdb;\n            border-radius: 3px;\n            background: #fafafa;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center; }\n            app-header nav.header .header-container .controls .search .input-overflow .layer {\n              left: -5px;\n              display: inline; }\n              app-header nav.header .header-container .controls .search .input-overflow .layer .search-icon {\n                background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n                background-repeat: no-repeat;\n                background-size: 395px 371px;\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                margin-right: 6px;\n                vertical-align: baseline;\n                background-position: -379px -161px; }\n              app-header nav.header .header-container .controls .search .input-overflow .layer .placeholder {\n                display: inline-block;\n                overflow: hidden;\n                max-width: 140px;\n                vertical-align: bottom;\n                white-space: nowrap;\n                text-overflow: ellipsis; }\n        app-header nav.header .header-container .controls .links {\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          flex-direction: row;\n          -ms-flex-line-pack: center;\n          align-content: center;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n          -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n          -webkit-box-flex: 1;\n          -ms-flex: 1 0 0;\n          flex: 1 0 0;\n          -webkit-box-pack: end;\n          -ms-flex-pack: end;\n          justify-content: flex-end; }\n          app-header nav.header .header-container .controls .links .links-container {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            flex-direction: row;\n            padding-left: 24px;\n            white-space: nowrap;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: row; }\n            app-header nav.header .header-container .controls .links .links-container .link-item {\n              box-sizing: border-box;\n              position: relative;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              flex-direction: column;\n              margin: 0;\n              padding: 0;\n              border: 0 solid #000;\n              -webkit-box-align: stretch;\n              -ms-flex-align: stretch;\n              align-items: stretch;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n              -ms-flex-negative: 0;\n              flex-shrink: 0; }\n              app-header nav.header .header-container .controls .links .links-container .link-item:not(:first-child) {\n                margin-left: 30px; }\n              app-header nav.header .header-container .controls .links .links-container .link-item a {\n                background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n                background-repeat: no-repeat;\n                background-size: 395px 371px;\n                display: block;\n                overflow: hidden;\n                width: 24px;\n                height: 24px;\n                white-space: nowrap;\n                text-indent: 110%; }\n                app-header nav.header .header-container .controls .links .links-container .link-item a.explore-link {\n                  background-position: -25px -347px; }\n                app-header nav.header .header-container .controls .links .links-container .link-item a.activity-link {\n                  background-position: -353px -151px; }\n                app-header nav.header .header-container .controls .links .links-container .link-item a.profile-link {\n                  background-position: -353px -226px; }\n      app-header nav.header .header-container.morphed {\n        height: 52px; }\n        app-header nav.header .header-container.morphed .controls {\n          height: 52px;\n          padding: 0 40px; }\n          app-header nav.header .header-container.morphed .controls .brand .logo .name {\n            pointer-events: none;\n            opacity: 0; }\n          app-header nav.header .header-container.morphed .controls .brand .logo .image {\n            pointer-events: all;\n            opacity: 1; }\n\napp-footer {\n  -webkit-box-ordinal-group: 6;\n  -ms-flex-order: 5;\n  order: 5; }\n  app-footer .footer {\n    padding: 0 20px;\n    background-color: #fafafa; }\n    app-footer .footer .links-container {\n      font-size: 12px;\n      font-weight: 600;\n      width: 100%;\n      max-width: 935px;\n      margin: 0 auto;\n      text-transform: uppercase; }\n      @media (min-width: 876px) {\n        app-footer .footer .links-container {\n          flex-direction: row;\n          padding: 38px 0;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n          -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n          -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between; } }\n      @media (min-width: 876px) {\n        app-footer .footer .links-container .footer-nav {\n          max-width: 100%; } }\n      app-footer .footer .links-container .footer-nav ul {\n        margin-bottom: 3px;\n        list-style: none;\n        -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n        flex-grow: 1; }\n        @media (min-width: 876px) {\n          app-footer .footer .links-container .footer-nav ul {\n            margin-right: 16px; } }\n        app-footer .footer .links-container .footer-nav ul li {\n          display: inline-block;\n          margin-right: 16px;\n          margin-bottom: 7px; }\n          app-footer .footer .links-container .footer-nav ul li:last-child {\n            margin-right: 0; }\n          app-footer .footer .links-container .footer-nav ul li .language-select {\n            color: #003569; }\n            app-footer .footer .links-container .footer-nav ul li .language-select select {\n              position: absolute;\n              top: 0;\n              left: 0;\n              width: 100%;\n              height: 100%;\n              cursor: pointer;\n              opacity: 0; }\n      app-footer .footer .links-container .copyrights {\n        color: #999; }\n\narticle.article {\n  padding: 0; }\n  @media (min-width: 640px) {\n    article.article {\n      margin-right: -1px;\n      margin-bottom: 60px;\n      margin-left: -1px;\n      border: 1px solid #e6e6e6;\n      border-radius: 3px;\n      background-color: #fff; } }\n  article.article header {\n    flex-direction: row;\n    height: 60px;\n    padding: 16px;\n    border-bottom-width: .5px;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row; }\n    article.article header .article-logo {\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-flex: 0;\n      -ms-flex: none;\n      flex: none;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -ms-flex-negative: 0;\n      flex-shrink: 0; }\n      article.article header .article-logo a {\n        position: relative;\n        display: block;\n        overflow: hidden;\n        box-sizing: border-box;\n        width: 30px;\n        height: 30px;\n        cursor: pointer;\n        border-radius: 50%;\n        background-color: #fafafa;\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n        flex: 0 0 auto; }\n        article.article header .article-logo a:after {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          content: '';\n          pointer-events: none;\n          border: 1px solid rgba(0, 0, 0, 0.0975);\n          border-radius: 50%; }\n        article.article header .article-logo a img {\n          width: 100%;\n          height: 100%; }\n    article.article header .article-title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      overflow: hidden;\n      margin-left: 12px;\n      -webkit-box-align: start;\n      -ms-flex-align: start;\n      align-items: flex-start;\n      -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      -ms-flex-negative: 1;\n      flex-shrink: 1; }\n      article.article header .article-title .name {\n        flex-direction: row;\n        max-width: 100%;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row; }\n        article.article header .article-title .name a {\n          font-weight: 600;\n          overflow: hidden;\n          margin-left: -5px;\n          padding-left: 5px;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #262626;\n          -webkit-box-flex: 0;\n          -ms-flex-positive: 0;\n          flex-grow: 0;\n          -ms-flex-negative: 1;\n          flex-shrink: 1; }\n      article.article header .article-title .location {\n        display: block;\n        overflow: hidden;\n        max-width: 100%;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n        article.article header .article-title .location a {\n          color: #262626; }\n  article.article .media-content .container {\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -webkit-tap-highlight-color: transparent; }\n    article.article .media-content .container .main-image {\n      display: block;\n      width: 100%;\n      background-color: #efefef; }\n      article.article .media-content .container .main-image .holder {\n        display: block;\n        overflow: hidden;\n        padding-bottom: 100%; }\n        article.article .media-content .container .main-image .holder img {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none; }\n      article.article .media-content .container .main-image .shift {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0; }\n  article.article .description {\n    padding: 0 16px; }\n    article.article .description .controls {\n      flex-direction: row;\n      margin-top: 4px;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: row; }\n      article.article .description .controls .like-btn,\n      article.article .description .controls .add-comment-btn {\n        display: inline-block;\n        padding: 8px;\n        cursor: pointer;\n        border: none;\n        background-color: transparent; }\n        article.article .description .controls .like-btn span,\n        article.article .description .controls .add-comment-btn span {\n          background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n          background-repeat: no-repeat;\n          background-size: 395px 371px;\n          display: block;\n          overflow: hidden;\n          width: 24px;\n          height: 24px;\n          white-space: nowrap;\n          text-indent: 110%; }\n      article.article .description .controls .like-btn {\n        margin-left: -8px; }\n        article.article .description .controls .like-btn .heart-open-icon {\n          background-position: -125px -347px; }\n      article.article .description .controls .add-comment-btn .comment-icon {\n        background-position: -353px -176px; }\n    article.article .description .likes {\n      flex-direction: row;\n      margin-bottom: 8px;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end; }\n      article.article .description .likes div {\n        display: block;\n        color: #262626;\n        -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n        flex-grow: 1;\n        -ms-flex-negative: 1;\n        flex-shrink: 1; }\n        article.article .description .likes div a {\n          font-weight: 600;\n          color: #262626; }\n    article.article .description .comments {\n      overflow: auto;\n      min-height: 0;\n      margin-top: -5px;\n      margin-bottom: 4px;\n      padding-top: 5px;\n      overflow-anchor: none;\n      -webkit-overflow-scrolling: touch;\n      -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      -ms-flex-negative: 1;\n      flex-shrink: 1; }\n      article.article .description .comments ul {\n        list-style: none;\n        -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n        flex-grow: 1; }\n        article.article .description .comments ul .comment {\n          position: relative;\n          overflow: hidden;\n          margin-top: -5px;\n          padding-top: 5px;\n          padding-bottom: 6px;\n          word-wrap: break-word; }\n          article.article .description .comments ul .comment .user-name {\n            font-weight: 600;\n            overflow: hidden;\n            margin-right: .3em;\n            margin-left: -5px;\n            padding-left: 5px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            color: #262626; }\n          article.article .description .comments ul .comment .more {\n            color: #999; }\n        article.article .description .comments ul .load-more {\n          margin-bottom: 8px; }\n          article.article .description .comments ul .load-more a {\n            font-size: inherit;\n            margin: 0;\n            padding: 0;\n            cursor: pointer;\n            vertical-align: middle;\n            color: #999;\n            border: none;\n            background: 0 0; }\n    article.article .description .time {\n      display: block;\n      margin-bottom: 4px; }\n      article.article .description .time a {\n        margin-bottom: 5px;\n        text-transform: uppercase;\n        color: #999; }\n        article.article .description .time a time {\n          font-size: 10px;\n          letter-spacing: .2px; }\n          @media (min-width: 736px) {\n            article.article .description .time a time {\n              line-height: 18px; } }\n    article.article .description .add-comment {\n      font-size: 14px;\n      line-height: 18px;\n      min-height: 56px;\n      margin-top: 4px;\n      padding: 16px 26px 16px 0;\n      color: #999;\n      border-top: 1px solid #efefef;\n      -ms-flex-negative: 0;\n      flex-shrink: 0;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center; }\n      article.article .description .add-comment form {\n        position: relative;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        flex-direction: row;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        -ms-flex-negative: 1;\n        flex-shrink: 1;\n        -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n        flex-grow: 1; }\n        article.article .description .add-comment form textarea {\n          font-size: inherit;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 18px;\n          max-height: 80px;\n          padding: 0;\n          resize: none;\n          color: #262626;\n          border: none;\n          outline: none;\n          background: 0 0;\n          -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n          flex-grow: 1; }\n  article.article .more-options {\n    position: absolute;\n    top: auto;\n    right: 10px;\n    bottom: 0;\n    height: 52px;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n    article.article .more-options button {\n      padding: 6px;\n      cursor: pointer;\n      border: 0;\n      background-color: transparent; }\n      article.article .more-options button .options-ellipsis-icon {\n        background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n        background-repeat: no-repeat;\n        background-size: 395px 371px;\n        display: block;\n        overflow: hidden;\n        width: 16px;\n        height: 16px;\n        white-space: nowrap;\n        text-indent: 110%;\n        background-position: -331px -113px; }\n\napp-user-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  margin-right: 28px;\n  padding-right: 16px;\n  padding-left: 16px;\n  border: solid 1px #efefef;\n  background: #fff;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 0;\n  flex: 1 0 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n  app-user-card:last-child {\n    margin-right: 0; }\n  app-user-card .user-photo {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    box-sizing: border-box;\n    width: 78px;\n    height: 78px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #fafafa;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto; }\n    app-user-card .user-photo:after {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      content: '';\n      pointer-events: none;\n      border: 1px solid rgba(0, 0, 0, 0.0975);\n      border-radius: 50%; }\n    app-user-card .user-photo img {\n      width: 100%;\n      height: 100%; }\n  app-user-card .user-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    flex-direction: column;\n    min-width: 70px;\n    margin-bottom: 12px;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-orient: vertical;\n    -ms-flex-direction: column;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-direction: normal; }\n    app-user-card .user-info .name {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      flex-direction: row;\n      -webkit-box-orient: horizontal;\n      -ms-flex-direction: row;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-box-direction: normal; }\n      app-user-card .user-info .name a {\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 18px;\n        overflow: hidden;\n        margin-bottom: 2px;\n        margin-left: -5px;\n        padding-left: 5px;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        color: #262626; }\n      app-user-card .user-info .name .verified-badge-icon {\n        background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n        background-repeat: no-repeat;\n        background-size: 395px 371px;\n        display: block;\n        overflow: hidden;\n        width: 18px;\n        height: 18px;\n        margin-left: 7px;\n        white-space: nowrap;\n        text-indent: 110%;\n        background-position: -276px -113px; }\n    app-user-card .user-info .sub-title {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 18px;\n      display: block;\n      overflow: hidden;\n      max-width: 175px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      color: #999; }\n  app-user-card .follow-section span {\n    position: relative;\n    display: block; }\n    app-user-card .follow-section span button {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 26px;\n      overflow: hidden;\n      width: 100%;\n      padding: 0 8px;\n      cursor: pointer;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      color: #fff;\n      border: 1px solid #3897f0;\n      border-radius: 3px;\n      outline: none;\n      background: #3897f0;\n      -webkit-appearance: none; }\n      @media (min-width: 736px) {\n        app-user-card .follow-section span button {\n          padding: 0 24px; } }\n\n.gallery {\n  margin-bottom: 20px; }\n  .gallery .gallery-row {\n    flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row; }\n    @media (min-width: 736px) {\n      .gallery .gallery-row {\n        margin-bottom: 28px; } }\n    @media (max-width: 735px) {\n      .gallery .gallery-row {\n        margin-bottom: 3px; } }\n    .gallery .gallery-row .gallery-item {\n      position: relative;\n      display: block;\n      width: 100%;\n      -webkit-box-flex: 1;\n      -ms-flex: 1 0 0;\n      flex: 1 0 0; }\n      @media (min-width: 736px) {\n        .gallery .gallery-row .gallery-item {\n          margin-right: 28px; } }\n      @media (max-width: 735px) {\n        .gallery .gallery-row .gallery-item {\n          margin-right: 3px; } }\n      .gallery .gallery-row .gallery-item:last-child {\n        margin-right: 0; }\n      .gallery .gallery-row .gallery-item .preview-container {\n        display: block;\n        width: 100%;\n        background-color: #efefef; }\n        .gallery .gallery-row .gallery-item .preview-container .img-holder {\n          display: block;\n          overflow: hidden;\n          padding-bottom: 100%; }\n          .gallery .gallery-row .gallery-item .preview-container .img-holder img {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none; }\n        .gallery .gallery-row .gallery-item .preview-container .shift {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0; }\n\napp-post-view .back-drop {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.75);\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n  app-post-view .back-drop .modal-close-btn {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n    height: 36px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: 0 0; }\n    app-post-view .back-drop .modal-close-btn:before {\n      font-size: 36px;\n      font-weight: 600;\n      line-height: 36px;\n      display: block;\n      margin: 0;\n      padding: 0;\n      content: '\\D7';\n      color: #fff; }\n  app-post-view .back-drop .modal-controls {\n    position: fixed;\n    z-index: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none; }\n    app-post-view .back-drop .modal-controls .controls-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: 0 auto;\n      padding: 40px; }\n      app-post-view .back-drop .modal-controls .controls-backdrop .controls-container {\n        width: 100%;\n        max-width: 935px;\n        height: 100%;\n        margin: 0 auto; }\n        app-post-view .back-drop .modal-controls .controls-backdrop .controls-container .left-arrow-icon,\n        app-post-view .back-drop .modal-controls .controls-backdrop .controls-container .right-arrow-icon {\n          background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n          background-repeat: no-repeat;\n          background-size: 395px 371px;\n          position: absolute;\n          top: 50%;\n          display: block;\n          overflow: hidden;\n          width: 40px;\n          height: 40px;\n          margin-top: -20px;\n          text-indent: -9999em;\n          pointer-events: auto; }\n        app-post-view .back-drop .modal-controls .controls-backdrop .controls-container .left-arrow-icon {\n          left: -40px;\n          background-position: -41px -281px; }\n        app-post-view .back-drop .modal-controls .controls-backdrop .controls-container .right-arrow-icon {\n          right: -40px;\n          background-position: -82px -281px; }\n  app-post-view .back-drop .modal-container {\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: auto;\n    width: auto;\n    min-height: 100%; }\n    @media (min-width: 481px) {\n      app-post-view .back-drop .modal-container {\n        padding: 0 40px;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n        pointer-events: none; }\n        app-post-view .back-drop .modal-container:after, app-post-view .back-drop .modal-container:before {\n          display: block;\n          content: '';\n          -ms-flex-preferred-size: 40px;\n          flex-basis: 40px;\n          -ms-flex-negative: 0;\n          flex-shrink: 0; } }\n    app-post-view .back-drop .modal-container .modal {\n      width: 100%;\n      max-width: 935px;\n      margin: auto;\n      pointer-events: auto;\n      background-color: #fff;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n      align-items: stretch; }\n      app-post-view .back-drop .modal-container .modal article {\n        width: 100%;\n        margin: 0;\n        padding: 0; }\n        app-post-view .back-drop .modal-container .modal article header {\n          position: absolute;\n          top: 0;\n          right: 24px;\n          flex-direction: row;\n          width: 287px;\n          height: 78px;\n          margin-right: 0;\n          padding: 20px 0;\n          border-bottom: 1px solid #efefef;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -ms-flex-direction: row; }\n          app-post-view .back-drop .modal-container .modal article header .profile-img {\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            -webkit-box-flex: 0;\n            -ms-flex: none;\n            flex: none;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -ms-flex-negative: 0;\n            flex-shrink: 0; }\n            app-post-view .back-drop .modal-container .modal article header .profile-img a {\n              position: relative;\n              display: block;\n              overflow: hidden;\n              box-sizing: border-box;\n              width: 40px;\n              height: 40px;\n              cursor: pointer;\n              border-radius: 50%;\n              background-color: #fafafa;\n              -webkit-box-flex: 0;\n              -ms-flex: 0 0 auto;\n              flex: 0 0 auto; }\n              app-post-view .back-drop .modal-container .modal article header .profile-img a:after {\n                position: absolute;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                content: '';\n                pointer-events: none;\n                border: 1px solid rgba(0, 0, 0, 0.0975);\n                border-radius: 50%; }\n              app-post-view .back-drop .modal-container .modal article header .profile-img a img {\n                width: 100%;\n                height: 100%; }\n          app-post-view .back-drop .modal-container .modal article header .follow-btn {\n            position: relative;\n            display: block;\n            max-width: 140px;\n            margin-left: 20px;\n            -ms-flex-negative: 0;\n            flex-shrink: 0; }\n            app-post-view .back-drop .modal-container .modal article header .follow-btn button {\n              font-size: 14px;\n              font-weight: 600;\n              line-height: 26px;\n              overflow: hidden;\n              width: 100%;\n              padding: 0 8px;\n              cursor: pointer;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n              color: #fff;\n              border: 1px solid #3897f0;\n              border-radius: 3px;\n              outline: none;\n              background: #3897f0;\n              -webkit-appearance: none; }\n          app-post-view .back-drop .modal-container .modal article header .user-info {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            overflow: hidden;\n            margin-left: 12px;\n            -webkit-box-align: start;\n            -ms-flex-align: start;\n            align-items: flex-start;\n            -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n            flex-grow: 1;\n            -ms-flex-negative: 1;\n            flex-shrink: 1; }\n            app-post-view .back-drop .modal-container .modal article header .user-info .user-name {\n              flex-direction: row;\n              max-width: 100%;\n              -webkit-box-align: center;\n              -ms-flex-align: center;\n              align-items: center;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n              -ms-flex-direction: row; }\n              app-post-view .back-drop .modal-container .modal article header .user-info .user-name a {\n                font-weight: 600;\n                overflow: hidden;\n                margin-left: -5px;\n                padding-left: 5px;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                color: #262626;\n                -webkit-box-flex: 0;\n                -ms-flex-positive: 0;\n                flex-grow: 0;\n                -ms-flex-negative: 1;\n                flex-shrink: 1; }\n              app-post-view .back-drop .modal-container .modal article header .user-info .user-name .verified-badge-icon {\n                background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n                background-repeat: no-repeat;\n                background-size: 395px 371px;\n                display: block;\n                overflow: hidden;\n                width: 12px;\n                height: 12px;\n                margin-left: 5px;\n                white-space: nowrap;\n                text-indent: 110%;\n                background-position: -379px -90px;\n                -ms-flex-negative: 0;\n                flex-shrink: 0; }\n            app-post-view .back-drop .modal-container .modal article header .user-info .user-full-name {\n              display: block;\n              overflow: hidden;\n              max-width: 100%;\n              white-space: nowrap;\n              text-overflow: ellipsis; }\n              app-post-view .back-drop .modal-container .modal article header .user-info .user-full-name a {\n                color: #262626; }\n        app-post-view .back-drop .modal-container .modal article .img-container {\n          min-height: 450px;\n          margin-right: 335px;\n          background-color: #000;\n          -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center; }\n          app-post-view .back-drop .modal-container .modal article .img-container .img-box {\n            position: relative;\n            cursor: pointer;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n            flex-grow: 1;\n            -webkit-tap-highlight-color: transparent; }\n            app-post-view .back-drop .modal-container .modal article .img-container .img-box .img-holder {\n              display: block;\n              overflow: hidden;\n              padding-bottom: 100%; }\n              app-post-view .back-drop .modal-container .modal article .img-container .img-box .img-holder img {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                -webkit-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none; }\n            app-post-view .back-drop .modal-container .modal article .img-container .img-box .shift {\n              position: absolute;\n              top: 0;\n              right: 0;\n              bottom: 0;\n              left: 0; }\n        app-post-view .back-drop .modal-container .modal article .comments-container {\n          position: absolute;\n          top: 78px;\n          right: 0;\n          bottom: 0;\n          box-sizing: border-box;\n          width: 335px;\n          padding-right: 24px;\n          padding-left: 24px; }\n          app-post-view .back-drop .modal-container .modal article .comments-container .post-controls {\n            flex-direction: row;\n            margin: 0;\n            padding-top: 2px;\n            border-top: 1px solid #efefef;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n            -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n            order: 2; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .heart-open-icon,\n            app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .comment-icon {\n              display: inline-block;\n              padding: 8px;\n              cursor: pointer;\n              border: none;\n              background-color: transparent; }\n              app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .heart-open-icon span,\n              app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .comment-icon span {\n                background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n                background-repeat: no-repeat;\n                background-size: 395px 371px;\n                display: block;\n                overflow: hidden;\n                width: 24px;\n                height: 24px;\n                white-space: nowrap;\n                text-indent: 110%; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .heart-open-icon {\n              margin-left: -8px; }\n              app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .heart-open-icon span {\n                background-position: -125px -347px; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .post-controls .comment-icon span {\n              background-position: -353px -176px; }\n          app-post-view .back-drop .modal-container .modal article .comments-container .likes-count {\n            flex-direction: row;\n            margin-bottom: 4px;\n            -webkit-box-ordinal-group: 4;\n            -ms-flex-order: 3;\n            order: 3;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n            -webkit-box-pack: end;\n            -ms-flex-pack: end;\n            justify-content: flex-end; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .likes-count div {\n              display: block;\n              color: #262626;\n              -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n              flex-grow: 1;\n              -ms-flex-negative: 1;\n              flex-shrink: 1; }\n              app-post-view .back-drop .modal-container .modal article .comments-container .likes-count div a {\n                font-weight: 600;\n                cursor: pointer;\n                color: #262626; }\n          app-post-view .back-drop .modal-container .modal article .comments-container .comments {\n            overflow: auto;\n            min-height: 0;\n            margin: 0 -24px auto;\n            padding: 12px 24px;\n            -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n            order: 1;\n            -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n            flex-grow: 1;\n            -ms-flex-negative: 1;\n            flex-shrink: 1;\n            overflow-anchor: none; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .comments ul {\n              list-style: none;\n              -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n              flex-grow: 1; }\n              app-post-view .back-drop .modal-container .modal article .comments-container .comments ul li {\n                position: relative;\n                overflow: hidden;\n                margin-top: -5px;\n                padding-top: 5px;\n                padding-bottom: 6px;\n                word-wrap: break-word; }\n                app-post-view .back-drop .modal-container .modal article .comments-container .comments ul li .user-link {\n                  font-weight: 600;\n                  overflow: hidden;\n                  margin-right: .3em;\n                  margin-left: -5px;\n                  padding-left: 5px;\n                  white-space: nowrap;\n                  text-overflow: ellipsis;\n                  color: #262626; }\n          app-post-view .back-drop .modal-container .modal article .comments-container .date-section {\n            display: block;\n            margin-bottom: 0;\n            -webkit-box-ordinal-group: 5;\n            -ms-flex-order: 4;\n            order: 4; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .date-section a {\n              margin-bottom: 5px;\n              text-transform: uppercase;\n              color: #999; }\n              app-post-view .back-drop .modal-container .modal article .comments-container .date-section a time {\n                font-size: 10px;\n                letter-spacing: .2px; }\n                @media (min-width: 736px) {\n                  app-post-view .back-drop .modal-container .modal article .comments-container .date-section a time {\n                    line-height: 18px; } }\n          app-post-view .back-drop .modal-container .modal article .comments-container .add-comment {\n            font-size: 14px;\n            line-height: 18px;\n            min-height: 56px;\n            margin-top: 4px;\n            padding: 16px 26px 16px 0;\n            color: #999;\n            border-top: 1px solid #efefef;\n            -webkit-box-ordinal-group: 6;\n            -ms-flex-order: 5;\n            order: 5;\n            -ms-flex-negative: 0;\n            flex-shrink: 0;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center; }\n            app-post-view .back-drop .modal-container .modal article .comments-container .add-comment form {\n              position: relative;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              flex-direction: row;\n              -webkit-box-align: center;\n              -ms-flex-align: center;\n              align-items: center;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n              -ms-flex-negative: 1;\n              flex-shrink: 1;\n              -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n              flex-grow: 1; }\n              app-post-view .back-drop .modal-container .modal article .comments-container .add-comment form textarea {\n                font-size: inherit;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                height: 18px;\n                max-height: 80px;\n                padding: 0;\n                resize: none;\n                color: #262626;\n                border: none;\n                outline: none;\n                background: 0 0;\n                -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                flex-grow: 1; }\n        app-post-view .back-drop .modal-container .modal article .more-options {\n          position: absolute;\n          top: auto;\n          right: 18px;\n          bottom: 0;\n          height: 52px;\n          -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center; }\n          app-post-view .back-drop .modal-container .modal article .more-options button {\n            padding: 6px;\n            cursor: pointer;\n            border: 0;\n            background-color: transparent; }\n            app-post-view .back-drop .modal-container .modal article .more-options button .options-ellipsis-icon {\n              background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n              background-repeat: no-repeat;\n              background-size: 395px 371px;\n              display: block;\n              overflow: hidden;\n              width: 16px;\n              height: 16px;\n              white-space: nowrap;\n              text-indent: 110%;\n              background-position: -331px -113px; }\n\n/*-------------------------------------------------------*/\n/*- LAYOUTS                                             -*/\n/*-------------------------------------------------------*/\napp-root,\nbody,\nhtml {\n  height: 100%; }\n\nbody,\nbutton,\ninput,\ntextarea {\n  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 18px; }\n\napp-layout {\n  overflow: hidden;\n  min-height: 100%; }\n\n.main-content {\n  background-color: #fafafa;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -webkit-box-ordinal-group: 5;\n  -ms-flex-order: 4;\n  order: 4; }\n\napp-home {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1; }\n  @media (min-width: 640px) {\n    app-home {\n      padding-top: 60px; } }\n  app-home .havey {\n    flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column; }\n\n.explore-container {\n  width: 100%;\n  max-width: 935px;\n  margin: 0 auto 30px;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1; }\n  @media (min-width: 736px) {\n    .explore-container {\n      box-sizing: content-box;\n      width: calc(100% - 40px);\n      padding: 40px 20px 0; } }\n  @media (min-width: 640px) {\n    .explore-container {\n      padding-top: 60px; } }\n  @media (min-width: 736px) {\n    .explore-container .discover-people {\n      margin-bottom: 60px; } }\n  @media (max-width: 735px) {\n    .explore-container .discover-people {\n      display: none; } }\n  .explore-container .discover-people .title {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 18px;\n    margin-bottom: 16px;\n    text-align: left;\n    text-transform: capitalize;\n    color: #999; }\n  .explore-container .discover-people .cards-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    flex-direction: row;\n    height: 220px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  .explore-container .explore-title {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 18px;\n    margin-bottom: 16px;\n    text-align: left;\n    text-transform: capitalize;\n    color: #999; }\n    @media (max-width: 735px) {\n      .explore-container .explore-title {\n        margin-left: 8px; } }\n\napp-profile article {\n  width: 100%;\n  max-width: 935px;\n  margin: 0 auto 30px;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1; }\n  @media (min-width: 736px) {\n    app-profile article {\n      box-sizing: content-box;\n      width: calc(100% - 40px);\n      padding: 60px 20px 0; } }\n  app-profile article header {\n    flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row; }\n    @media (min-width: 736px) {\n      app-profile article header {\n        margin-bottom: 44px; } }\n    @media (max-width: 735px) {\n      app-profile article header {\n        margin-top: 30px;\n        margin-right: 16px;\n        margin-left: 16px; } }\n    app-profile article header .profile-img {\n      -ms-flex-negative: 0;\n      flex-shrink: 0; }\n      @media (min-width: 736px) {\n        app-profile article header .profile-img {\n          margin-right: 30px;\n          -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n          -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n          flex-grow: 1; } }\n      @media (max-width: 735px) {\n        app-profile article header .profile-img {\n          margin-right: 28px; } }\n      app-profile article header .profile-img .img-center {\n        position: relative;\n        display: block;\n        overflow: hidden;\n        box-sizing: border-box;\n        margin-right: auto;\n        margin-left: auto;\n        border-radius: 50%;\n        background-color: #fafafa; }\n        @media (min-width: 736px) {\n          app-profile article header .profile-img .img-center {\n            width: 152px;\n            height: 152px; } }\n        @media (max-width: 735px) {\n          app-profile article header .profile-img .img-center {\n            width: 77px;\n            height: 77px; } }\n        app-profile article header .profile-img .img-center img {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%; }\n    app-profile article header .profile-info {\n      min-width: 0;\n      color: #262626;\n      -ms-flex-negative: 1;\n      flex-shrink: 1; }\n      @media (min-width: 736px) {\n        app-profile article header .profile-info {\n          -ms-flex-preferred-size: 30px;\n          flex-basis: 30px;\n          -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n          flex-grow: 2; } }\n      @media (max-width: 735px) {\n        app-profile article header .profile-info {\n          -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n          -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n          flex-grow: 1; } }\n      app-profile article header .profile-info .title {\n        flex-direction: row;\n        min-width: 0;\n        -ms-flex-negative: 1;\n        flex-shrink: 1;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row; }\n        @media (min-width: 736px) {\n          app-profile article header .profile-info .title {\n            margin-bottom: 20px; } }\n        @media (max-width: 735px) {\n          app-profile article header .profile-info .title {\n            margin-bottom: 12px; } }\n        app-profile article header .profile-info .title h1 {\n          overflow: hidden;\n          min-width: 0;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          -ms-flex-negative: 1;\n          flex-shrink: 1; }\n          @media (min-width: 736px) {\n            app-profile article header .profile-info .title h1 {\n              font-size: 32px;\n              font-weight: 200;\n              line-height: 40px; } }\n          @media (max-width: 735px) {\n            app-profile article header .profile-info .title h1 {\n              font-size: 22px;\n              line-height: 26px; } }\n        app-profile article header .profile-info .title .verified-badge-icon {\n          background-image: url(" + __webpack_require__("../../../../../src/assets/images/sprites_2x.png") + ");\n          background-repeat: no-repeat;\n          background-size: 395px 371px;\n          display: block;\n          overflow: hidden;\n          width: 18px;\n          height: 18px;\n          margin-left: 7px;\n          white-space: nowrap;\n          text-indent: 110%;\n          background-position: -276px -113px;\n          -ms-flex-negative: 0;\n          flex-shrink: 0; }\n      app-profile article header .profile-info .counts {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        flex-direction: row;\n        margin-bottom: 20px;\n        list-style: none;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row; }\n        app-profile article header .profile-info .counts li {\n          font-size: 16px;\n          margin-right: 40px; }\n          app-profile article header .profile-info .counts li:first-child {\n            margin-left: 0; }\n          app-profile article header .profile-info .counts li:last-child {\n            margin-right: 0; }\n          app-profile article header .profile-info .counts li .count-item {\n            color: inherit; }\n            app-profile article header .profile-info .counts li .count-item .bold-text {\n              font-weight: 600;\n              color: #262626; }\n      app-profile article header .profile-info .description {\n        display: block; }\n        @media (min-width: 736px) {\n          app-profile article header .profile-info .description {\n            font-size: 16px;\n            line-height: 24px; } }\n        @media (max-width: 735px) {\n          app-profile article header .profile-info .description {\n            font-size: 14px;\n            line-height: 17px;\n            overflow: hidden;\n            margin-bottom: 12px;\n            padding: 0 16px 24px;\n            text-overflow: ellipsis;\n            border-bottom: 1px solid #efefef; } }\n        app-profile article header .profile-info .description h2 {\n          font-weight: 600;\n          display: inline; }\n        app-profile article header .profile-info .description .bold-link {\n          font-weight: 600; }\n  app-profile article .gallery .load-more-btn {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 32px;\n    display: block;\n    overflow: hidden;\n    margin: 60px auto 0;\n    padding: 0 48px;\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: #fff;\n    border: 1px solid #3897f0;\n    border-radius: 3px;\n    background: #3897f0; }\n    @media (min-width: 736px) {\n      app-profile article .gallery .load-more-btn {\n        -webkit-align-self: center;\n        -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n            align-self: center; } }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/assets/scss/global.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map