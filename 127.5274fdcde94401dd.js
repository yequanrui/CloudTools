"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[127],{9949:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>AcousticCalcComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2010),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(338);let AcousticCalcComponent=(()=>{class AcousticCalcComponent{constructor(){this.result="0",this.operate=!0,this.xop=!0}ngOnInit(){}command(a){let i=this.result;i="0"===i?"":i,i+=a,this.result=i,this.play(a)}dot(a){this.xop&&(this.result+=".",this.xop=!1),this.play(a)}tools(a,i){if(this.operate){let e=this.result;e="0"==e?"0":e,this.result=e+a,this.operate=!1,this.xop=!0}this.play(i)}equal(m){this.play(m),this.result=`${eval(this.result)}`,this.operate=!0,this.xop=-1===this.result.indexOf(".")}play(a){const i=document.getElementById("music");i.src=`../../assets/audio/calc/${a}.wav`,i.play()}clearzero(a){this.result="0",this.operate=!0,this.xop=!0,this.play(a)}static{this.\u0275fac=function(i){return new(i||AcousticCalcComponent)}}static{this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.VBU({type:AcousticCalcComponent,selectors:[["acoustic-calc"]],decls:49,vars:4,consts:[[1,"calc"],[1,"title"],["id","result",1,"result"],[1,"operator"],[3,"click"],[1,"tool"],[1,"tool",3,"click"],[1,"tool2",3,"click"],["id","music","src",""]],template:function(i,e){1&i&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(0,"div",0)(1,"p",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(4,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(6,"div",3)(7,"ul")(8,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("7")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(9,"7"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(10,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("8")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(11,"8"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(12,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("9")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(13,"9"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(14,"li",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(15,"\u2190"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(16,"li",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.clearzero("j")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(17,"C"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(18,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("4")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(19,"4"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(20,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("5")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(21,"5"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(22,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("6")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(23,"6"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(24,"li",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.tools("*","g")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(25,"*"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(26,"li",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.tools("/","g")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(27,"\xf7"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(28,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("3")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(29,"3"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(30,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("2")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(31,"2"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(32,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("1")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(33,"1"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(34,"li",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.tools("+","g")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(35,"+"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(36,"li",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.tools("-","g")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(37,"-"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(38,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("0")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(39,"0"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(40,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.command("0")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(41,"00"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(42,"li",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.dot("g")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(43,"."),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(44,"li",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.tools("*","g")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(45,"%"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(46,"li",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return e.equal("j")}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(47,"="),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s()()()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nrm(48,"audio",8)),2&i&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(3,2,"menu.acousticCalc")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.JRh(e.result))},dependencies:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.D9],styles:["[_ngcontent-%COMP%]:export{devui-global-bg:var(--devui-global-bg, #f5f5f5);devui-glass-morphism-bg:var(--devui-glass-morphism-bg, rgba(245, 246, 248, .9));devui-global-bg-normal:var(--devui-global-bg-normal, #ffffff);devui-base-bg:var(--devui-base-bg, #ffffff);devui-base-bg-dark:var(--devui-base-bg-dark, #000000);devui-brand:var(--devui-brand, #0a59f7);devui-brand-foil:var(--devui-brand-foil, #f2f2f3);devui-brand-hover:var(--devui-brand-hover, #3979f9);devui-brand-active:var(--devui-brand-active, #0950de);devui-brand-active-focus:var(--devui-brand-active-focus, #00196b);devui-contrast:var(--devui-contrast, #c7000b);devui-text:var(--devui-text, #191919);devui-text-weak:var(--devui-text-weak, #333333);devui-aide-text:var(--devui-aide-text, #595959);devui-aide-text-hover:var(--devui-aide-text-hover, #000000);devui-aide-text-stress:var(--devui-aide-text-stress, #333333);devui-placeholder:var(--devui-placeholder, #808080);devui-light-text:var(--devui-light-text, #ffffff);devui-dark-text:var(--devui-dark-text, #000000);devui-link:var(--devui-link, #0950de);devui-link-active:var(--devui-link-active, #0950de);devui-link-light:var(--devui-link-light, #6b9bfa);devui-link-light-active:var(--devui-link-light-active, #9dbdfc);devui-line:var(--devui-line, #dbdbdb);devui-dividing-line:var(--devui-dividing-line, #f0f0f0);devui-block:var(--devui-block, #ffffff);devui-area:var(--devui-area, #f3f3f3);devui-danger:var(--devui-danger, #e02128);devui-warning:var(--devui-warning, #fcc800);devui-waiting:var(--devui-waiting, #9dbdfc);devui-success:var(--devui-success, #058358);devui-info:var(--devui-info, #0a59f7);devui-initial:var(--devui-initial, #cedefd);devui-unavailable:var(--devui-unavailable, #f3f3f3);devui-shadow:var(--devui-shadow, rgba(0, 0, 0, .16));devui-light-shadow:var(--devui-light-shadow, rgba(0, 0, 0, .08));devui-connected-overlay-shadow:var(--devui-connected-overlay-shadow, rgba(0, 0, 0, .16));devui-feedback-overlay-shadow:var(--devui-feedback-overlay-shadow, rgba(0, 0, 0, .16));devui-feedback-overlay-backdrop:var(--devui-feedback-overlay-backdrop, rgba(0, 0, 0, .3));devui-hover-shadow:var(--devui-hover-shadow, rgba(0, 0, 0, .16));devui-table-column-shadow-color:var(--devui-table-column-shadow-color, rgba(37, 43, 58, .08));devui-icon-text:var(--devui-icon-text, #808080);devui-icon-bg:var(--devui-icon-bg, #ffffff);devui-icon-fill:var(--devui-icon-fill, #595959);devui-icon-fill-weak:var(--devui-icon-fill-weak, #808080);devui-icon-fill-hover:var(--devui-icon-fill-hover, #191919);devui-icon-fill-active:var(--devui-icon-fill-active, #191919);devui-icon-fill-active-hover:var(--devui-icon-fill-active-hover, #000000);devui-shape-icon-fill:var(--devui-shape-icon-fill, #c2c2c2);devui-shape-icon-fill-hover:var(--devui-shape-icon-fill-hover, #808080);devui-shape-icon-fill-active:var(--devui-shape-icon-fill-active, #808080);devui-shape-icon-fill-disabled:var(--devui-shape-icon-fill-disabled, #f0f0f0);devui-form-control-line:var(--devui-form-control-line, #dbdbdb);devui-form-control-bg:var(--devui-form-control-bg, #ffffff);devui-form-control-line-hover:var(--devui-form-control-line-hover, #808080);devui-form-control-line-active:var(--devui-form-control-line-active, #0a59f7);devui-form-control-interactive-outline:var(--devui-form-control-interactive-outline, rgba(94, 124, 224, .08));devui-form-control-line-active-hover:var(--devui-form-control-line-active-hover, #00196b);devui-list-item-active-bg:var(--devui-list-item-active-bg, #cedefd);devui-list-item-active-text:var(--devui-list-item-active-text, #000000);devui-list-item-active-hover-bg:var(--devui-list-item-active-hover-bg, #cedefd);devui-list-item-hover-bg:var(--devui-list-item-hover-bg, #f2f2f3);devui-list-item-hover-text:var(--devui-list-item-hover-text, #000000);devui-list-item-selected-bg:var(--devui-list-item-selected-bg, #cedefd);devui-list-item-strip-bg:var(--devui-list-item-strip-bg, #e6eeff);devui-disabled-bg:var(--devui-disabled-bg, #f3f3f3);devui-disabled-line:var(--devui-disabled-line, #e6e6e6);devui-disabled-text:var(--devui-disabled-text, #c2c2c2);devui-primary-disabled:var(--devui-primary-disabled, #9dbdfc);devui-icon-fill-active-disabled:var(--devui-icon-fill-active-disabled, #9dbdfc);devui-label-bg:var(--devui-label-bg, #f0f0f0);devui-connected-overlay-bg:var(--devui-connected-overlay-bg, #ffffff);devui-connected-overlay-line:var(--devui-connected-overlay-line, #0950de);devui-fullscreen-overlay-bg:var(--devui-fullscreen-overlay-bg, #ffffff);devui-feedback-overlay-bg:var(--devui-feedback-overlay-bg, #333333);devui-feedback-overlay-text:var(--devui-feedback-overlay-text, #f0f0f0);devui-embed-search-bg:var(--devui-embed-search-bg, #f2f2f3);devui-embed-search-bg-hover:var(--devui-embed-search-bg-hover, #f5f5f5);devui-float-block-shadow:var(--devui-float-block-shadow, rgba(94, 124, 224, .3));devui-highlight-overlay:var(--devui-highlight-overlay, rgba(255, 255, 255, .8));devui-range-item-hover-bg:var(--devui-range-item-hover-bg, #cedefd);devui-gray-form-control-bg:var(--devui-gray-form-control-bg, #f5f5f5);devui-gray-form-control-hover-bg:var(--devui-gray-form-control-hover-bg, #dfdfdf);devui-nav-expand-bg:var(--devui-nav-expand-bg, #fbfbfc);devui-primary:var(--devui-primary, #0a59f7);devui-primary-hover:var(--devui-primary-hover, #3979f9);devui-primary-active:var(--devui-primary-active, #00196b);devui-contrast-hover:var(--devui-contrast-hover, #cc272a);devui-contrast-active:var(--devui-contrast-active, #78080e);devui-danger-line:var(--devui-danger-line, #e02128);devui-danger-bg:var(--devui-danger-bg, #fabdc1);devui-danger-text:var(--devui-danger-text, #850f12);devui-warning-line:var(--devui-warning-line, #f4840c);devui-warning-bg:var(--devui-warning-bg, #fde2bd);devui-warning-text:var(--devui-warning-text, #c76207);devui-info-line:var(--devui-info-line, #0a59f7);devui-info-bg:var(--devui-info-bg, #cedefd);devui-success-line:var(--devui-success-line, #09aa71);devui-success-bg:var(--devui-success-bg, #bcf2db);devui-success-text:var(--devui-success-text, #036142);devui-primary-line:var(--devui-primary-line, #0a59f7);devui-primary-bg:var(--devui-primary-bg, #e6eeff);devui-default-line:var(--devui-default-line, #0a59f7);devui-default-bg:var(--devui-default-bg, #fafafa);devui-animation-ease-in-smooth:var(--devui-animation-ease-in-smooth, cubic-bezier(.645, .045, .355, 1));devui-animation-duration-slow:var(--devui-animation-duration-slow, .3s);devui-animation-duration-base:var(--devui-animation-duration-base, .2s);devui-animation-duration-fast:var(--devui-animation-duration-fast, .1s);devui-animation-ease-in:var(--devui-animation-ease-in, cubic-bezier(.5, 0, .84, .25));devui-animation-ease-out:var(--devui-animation-ease-out, cubic-bezier(.16, .75, .5, 1));devui-animation-ease-in-out:var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95));devui-animation-ease-in-out-smooth:var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1));devui-animation-linear:var(--devui-animation-linear, cubic-bezier(0, 0, 1, 1));devui-border-radius:var(--devui-border-radius, 2px);devui-border-radius-feedback:var(--devui-border-radius-feedback, 4px);devui-border-radius-card:var(--devui-border-radius-card, 6px);devui-border-radius-full:var(--devui-border-radius-full, 100px);devui-font-size:var(--devui-font-size, 12px);devui-font-size-card-title:var(--devui-font-size-card-title, 14px);devui-font-size-page-title:var(--devui-font-size-page-title, 16px);devui-font-size-modal-title:var(--devui-font-size-modal-title, 18px);devui-font-size-price:var(--devui-font-size-price, 20px);devui-font-size-data-overview:var(--devui-font-size-data-overview, 24px);devui-font-size-h1-title:var(--devui-font-size-h1-title, 28px);devui-font-size-h2-title:var(--devui-font-size-h2-title, 24px);devui-font-size-h3-title:var(--devui-font-size-h3-title, 20px);devui-font-size-h4-title:var(--devui-font-size-h4-title, 18px);devui-font-size-h5-title:var(--devui-font-size-h5-title, 16px);devui-font-size-icon:var(--devui-font-size-icon, 16px);devui-font-size-sm:var(--devui-font-size-sm, 12px);devui-font-size-md:var(--devui-font-size-md, 12px);devui-font-size-lg:var(--devui-font-size-lg, 14px);devui-font-title-weight:var(--devui-font-title-weight, bold);devui-font-content-weight:var(--devui-font-content-weight, normal);devui-line-height-base:var(--devui-line-height-base, 1.5);devui-shadow-length-base:var(--devui-shadow-length-base, 0 1px 6px 0);devui-shadow-length-slide-left:var(--devui-shadow-length-slide-left, -2px 0 8px 0);devui-shadow-length-slide-right:var(--devui-shadow-length-slide-right, 2px 0 8px 0);devui-shadow-length-connected-overlay:var(--devui-shadow-length-connected-overlay, 0 4px 12px 0);devui-shadow-length-hover:var(--devui-shadow-length-hover, 0 8px 24px 0);devui-shadow-length-feedback-overlay:var(--devui-shadow-length-feedback-overlay, 0 8px 24px 0);devui-shadow-length-fullscreen-overlay:var(--devui-shadow-length-fullscreen-overlay, 0 16px 48px 0);devui-z-index-full-page-overlay:var(--devui-z-index-full-page-overlay, 1080);devui-z-index-pop-up:var(--devui-z-index-pop-up, 1060);devui-z-index-dropdown:var(--devui-z-index-dropdown, 1052);devui-z-index-modal:var(--devui-z-index-modal, 1050);devui-z-index-drawer:var(--devui-z-index-drawer, 1040);devui-z-index-framework:var(--devui-z-index-framework, 1000)}.calc[_ngcontent-%COMP%]{background:var(--devui-feedback-overlay-bg, #333333);width:550px;height:500px;margin:50px auto;border-radius:var(--devui-border-radius-feedback, 4px);box-shadow:var(--devui-shadow-length-feedback-overlay, 0 8px 24px 0) var(--devui-feedback-overlay-shadow, rgba(0, 0, 0, .16))}.calc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px);line-height:55px;text-indent:30px;color:var(--devui-feedback-overlay-text, #f0f0f0)}.calc[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]{background:var(--devui-primary-bg, #e6eeff);width:490px;margin:0 auto;padding:0 8px;border:1px solid var(--devui-primary-line, #0a59f7);border-radius:var(--devui-border-radius-card, 6px);font-size:50px;text-align:right;overflow:hidden}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]{width:500px;height:300px;margin:30px auto 0}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:var(--devui-primary, #0a59f7);width:80px;height:60px;margin:10px;border-radius:var(--devui-border-radius-card, 6px);box-shadow:var(--devui-shadow-length-base, 0 1px 6px 0) var(--devui-shadow, rgba(0, 0, 0, .16));color:var(--devui-text, #191919);font-family:fangsong;font-size:var(--devui-font-size-data-overview, 24px);font-weight:700;display:flex;align-items:center;justify-content:center;float:left;cursor:pointer}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:var(--devui-primary-hover, #3979f9)}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{background:var(--devui-primary-active, #00196b)}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.tool[_ngcontent-%COMP%]{background:var(--devui-contrast, #c7000b)}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.tool[_ngcontent-%COMP%]:hover{background:var(--devui-contrast-hover, #cc272a)}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.tool[_ngcontent-%COMP%]:active{background:var(--devui-contrast-active, #78080e)}.calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.tool2[_ngcontent-%COMP%], .calc[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.tool2[_ngcontent-%COMP%]:active{background:var(--devui-success, #058358)}"]})}}return AcousticCalcComponent})()},2127:(a,i,e)=>{e.r(i),e.d(i,{AcousticCalcModule:()=>d});var _=e(1911),o=e(7518),l=e(9949),t=e(2010);const c=[{path:"",component:l.G}];let u=(()=>{class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=t.$C({type:r})}static{this.\u0275inj=t.G2t({imports:[o.iI.forChild(c),o.iI]})}}return r})(),d=(()=>{class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=t.$C({type:r})}static{this.\u0275inj=t.G2t({imports:[_.G,u]})}}return r})()}}]);