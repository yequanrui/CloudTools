"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[888],{2029:(A,p,s)=>{s.d(p,{nM:()=>T,wx:()=>y});var e=s(1824),t=s(5996);const v=["*"],h=["carouselContainer"];function g(r,d){1&r&&(e.O4$(),e.TgZ(0,"g",12),e._UZ(1,"path",13)(2,"polygon",14),e.qZA())}function _(r,d){1&r&&(e.O4$(),e.TgZ(0,"g",12),e._UZ(1,"path",15)(2,"path",16),e.qZA())}function C(r,d){1&r&&(e.O4$(),e.TgZ(0,"g",12)(1,"g",17),e._UZ(2,"path",18)(3,"path",19),e.qZA()())}function b(r,d){1&r&&(e.O4$(),e.TgZ(0,"g",12)(1,"g",17),e._UZ(2,"path",20)(3,"path",21),e.qZA()())}function m(r,d){if(1&r&&(e.TgZ(0,"span",9),e.O4$(),e.TgZ(1,"svg",10),e.YNc(2,g,3,0,"g",11),e.YNc(3,_,3,0,"g",11),e.YNc(4,C,4,0,"g",11),e.YNc(5,b,4,0,"g",11),e.qZA()()),2&r){const a=e.oxw(2);e.xp6(1),e.Q6J("ngClass","danger"===a.type?"devui-icon-error":"devui-icon-"+a.type),e.xp6(1),e.Q6J("ngIf","success"===a.type),e.xp6(1),e.Q6J("ngIf","warning"===a.type),e.xp6(1),e.Q6J("ngIf","info"===a.type),e.xp6(1),e.Q6J("ngIf","danger"===a.type)}}function x(r,d){if(1&r){const a=e.EpF();e.TgZ(0,"div",22)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span",23),e.NdJ("click",function(){e.CHM(a);const l=e.oxw(2);return e.KtG(l.next())}),e.O4$(),e.TgZ(4,"svg",24)(5,"g",12),e._UZ(6,"path",25),e.qZA()()()()}if(2&r){const a=e.oxw(2);e.xp6(2),e.AsE("",a.currentIndex,"/",a.carouselNum,"")}}function k(r,d){}function M(r,d){if(1&r){const a=e.EpF();e.TgZ(0,"div",26),e.NdJ("click",function(){e.CHM(a);const l=e.oxw(2);return e.KtG(l.close())}),e.O4$(),e.TgZ(1,"svg",27)(2,"g",12)(3,"g",28),e._UZ(4,"path",29),e.qZA()()()()}}const O=function(r){return{close:r}};function P(r,d){if(1&r){const a=e.EpF();e.TgZ(0,"div"),e.YNc(1,m,6,5,"span",1),e.TgZ(2,"div",2)(3,"div",3,4),e.NdJ("mouseenter",function(){e.CHM(a);const l=e.oxw();return e.KtG(l.clearScheduledTransition())})("mouseleave",function(){e.CHM(a);const l=e.oxw();return e.KtG(l.autoScheduleTransition())}),e.Hsn(5),e.qZA()(),e.TgZ(6,"div",5),e.YNc(7,x,7,2,"div",6),e.YNc(8,k,0,0,"ng-template",7),e.YNc(9,M,5,0,"div",8),e.qZA()()}if(2&r){const a=e.oxw();e.MT6("devui-alert devui-alert-",a.type," ",a.cssClass,""),e.xp6(1),e.Q6J("ngIf",!1!==a.showIcon&&"simple"!==a.type),e.xp6(6),e.Q6J("ngIf",a.carouselNum>1),e.xp6(1),e.Q6J("ngTemplateOutlet",a.operationTemplate)("ngTemplateOutletContext",e.VKq(9,O,a.close)),e.xp6(1),e.Q6J("ngIf",a.closeable)}}let w=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["d-alert-carousel-item"]],ngContentSelectors:v,decls:1,vars:0,template:function(n,l){1&n&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;width:100%}"]})}return r})(),y=(()=>{class r{set dismissTime(a){setTimeout(()=>{this.close()},a)}constructor(a){this.renderer=a,this.type="info",this.closeable=!0,this.showIcon=!0,this.autoplay=!1,this.autoplaySpeed=3e3,this.transitionSpeed=500,this.closeEvent=new e.vpe,this.hide=!1,this.currentIndex=1,this.next=()=>{this.currentIndex<this.carouselNum?this.currentIndex++:this.currentIndex=1,this.translatePosition(this.currentIndex-1),this.autoScheduleTransition()},this.close=()=>{this.closeEvent.emit(this),this.hide=!0}}ngOnChanges(a){const{autoplay:n,autoplaySpeed:l,transitionSpeed:i}=a;!n&&!l||this.autoplay&&this.autoplaySpeed?this.autoScheduleTransition():this.clearScheduledTransition(),i&&this.transitionSpeed&&this.renderer.setStyle(this.box.nativeElement,"transition",`top ${this.transitionSpeed}ms ease`)}ngAfterViewInit(){this.renderCarouselItem(),this.carouselItems.changes.subscribe(()=>this.renderCarouselItem())}ngOnDestroy(){this.clearScheduledTransition()}renderCarouselItem(){this.carouselNum=this.carouselItems.length,this.carouselNum&&(this.renderer.setStyle(this.box.nativeElement,"transition",`top ${this.transitionSpeed}ms ease`),this.autoScheduleTransition())}autoScheduleTransition(){this.clearScheduledTransition(),this.autoplay&&this.autoplaySpeed&&(this.scheduledId=setTimeout(()=>this.next(),this.autoplaySpeed))}clearScheduledTransition(){this.scheduledId&&(clearTimeout(this.scheduledId),this.scheduledId=void 0)}translatePosition(a){this.renderer.setStyle(this.box.nativeElement,"top",100*-a+"%")}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["d-alert"]],contentQueries:function(n,l,i){if(1&n&&e.Suo(i,w,4),2&n){let c;e.iGM(c=e.CRH())&&(l.carouselItems=c)}},viewQuery:function(n,l){if(1&n&&e.Gf(h,5),2&n){let i;e.iGM(i=e.CRH())&&(l.box=i.first)}},inputs:{type:"type",cssClass:"cssClass",closeable:"closeable",showIcon:"showIcon",autoplay:"autoplay",autoplaySpeed:"autoplaySpeed",transitionSpeed:"transitionSpeed",operationTemplate:"operationTemplate",dismissTime:"dismissTime"},outputs:{closeEvent:"closeEvent"},features:[e.TTD],ngContentSelectors:v,decls:1,vars:1,consts:[[3,"class",4,"ngIf"],["class","devui-alert-icon",4,"ngIf"],[1,"devui-alert-carousel-container"],[1,"devui-alert-carousel-box",3,"mouseenter","mouseleave"],["carouselContainer",""],[1,"devui-alert-operation-container"],["class","devui-alert-carousel-num",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","devui-close",3,"click",4,"ngIf"],[1,"devui-alert-icon"],["width","16px","height","16px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-icon",3,"ngClass"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd",4,"ngIf"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["fill-rule","nonzero","d","M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"],["stroke-width","0.3","fill-rule","nonzero","points","6.82767602 11.5282799 3 7.24668779 3.89864233 6.37912367 6.82767602 9.04910002 12.2964408 4 13 4.64144383"],["d","M8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117 15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,15 14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873 0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229 C7.32086049,0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589 C8.70423071,0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 Z",1,"devui-icon-warning-outer"],["stroke-width","0.3","fill-rule","nonzero","d","M8.87894737,13 L7.08947368,13 L7.08947368,11.2105263 L8.87894737,11.2105263 L8.87894737,13 Z M8.62102372,9.86842105 L7.32800539,9.86842105 L7,4.5 L8.96842105,4.5 L8.62102372,9.86842105 Z",1,"devui-icon-warning-inner"],["fill-rule","nonzero"],["d","M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z",1,"devui-icon-info-outer"],["d","M9.19008504,7 L8.79402696,13 L7.15622605,13 L6.73158434,7 L9.19008504,7 Z M9,3 L9,5 L7,5 L7,3 L9,3 Z","stroke-width","0.2",1,"devui-icon-info-inner"],["d","M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z",1,"devui-icon-error-outer"],["d","M9,10.6 L9,12.6 L7,12.6 L7,10.6 L9,10.6 Z M9.1,3.1 L8.65924344,9.1 L7.28422786,9.1 L6.9,3.1 L9.1,3.1 Z","stroke-width","0.2",1,"devui-icon-error-inner"],[1,"devui-alert-carousel-num"],[1,"devui-alert-carousel-button",3,"click"],["width","12px","height","12px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["d","M2.64644661,5.14644661 C2.82001296,4.97288026 3.08943736,4.95359511 3.2843055,5.08859116 L3.35355339,5.14644661 L7.999,9.793 L12.6464466,5.14644661 C12.820013,4.97288026 13.0894374,4.95359511 13.2843055,5.08859116 L13.3535534,5.14644661 C13.5271197,5.32001296 13.5464049,5.58943736 13.4114088,5.7843055 L13.3535534,5.85355339 L8.35355339,10.8535534 C8.17998704,11.0271197 7.91056264,11.0464049 7.7156945,10.9114088 L7.64644661,10.8535534 L2.64644661,5.85355339 C2.45118446,5.65829124 2.45118446,5.34170876 2.64644661,5.14644661 Z","fill-rule","nonzero"],[1,"devui-close",3,"click"],["width","10px","height","10px","viewBox","0 0 10 10","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["transform","translate(-3.000000, -3.000000)","fill-rule","nonzero"],["d","M11.6426,3.19816936 C11.9239974,2.91574512 12.4131626,2.93784891 12.7352108,3.24751057 C13.0571998,3.5572302 13.0901298,4.03723416 12.8087324,4.31965839 L9.14064666,7.99900183 L12.8087324,11.6803416 C13.0645482,11.9370909 13.0605893,12.3571292 12.8158402,12.6640749 L12.7352108,12.7524894 C12.4131626,13.0621511 11.9239974,13.0842548 11.6426,12.8018306 L8,9.14489021 L4.35740003,12.8018306 C4.10158422,13.05858 3.6740594,13.0636532 3.35648225,12.8298003 L3.26478919,12.7524894 C2.94280021,12.4427698 2.90987023,11.9627658 3.19126762,11.6803416 L6.8583349,7.99900183 L3.19126762,4.31965839 C2.93545181,4.06290908 2.93941068,3.64287076 3.18415975,3.3359251 L3.26478919,3.24751057 C3.58683735,2.93784891 4.07600264,2.91574512 4.35740003,3.19816936 L8,6.85411161 L11.6426,3.19816936 Z"]],template:function(n,l){1&n&&(e.F$t(),e.YNc(0,P,10,11,"div",0)),2&n&&e.Q6J("ngIf",!l.hide)},dependencies:[t.mk,t.O5,t.tP],styles:[".devui-font-size-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px)}.devui-font-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px);font-weight:var(--devui-font-content-weight, normal);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}[_nghost-%COMP%]{display:block}.devui-alert[_ngcontent-%COMP%]{color:var(--devui-text, #252b3a);font-size:var(--devui-font-size, 12px);border:1px solid transparent;padding:8px 16px;line-height:24px;border-radius:var(--devui-border-radius, 2px);word-break:normal;word-wrap:break-word;display:flex;flex-wrap:nowrap;align-items:center}.devui-alert.devui-alert-success[_ngcontent-%COMP%]{background-color:var(--devui-success-bg, #cffcee);border-color:var(--devui-success-line, #50d4ab);color:var(--devui-text, #252b3a)}.devui-alert.devui-alert-success[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-success-line, #50d4ab)}.devui-alert.devui-alert-info[_ngcontent-%COMP%]{background-color:var(--devui-info-bg, #e9edfa);border-color:var(--devui-info-line, #5e7ce0);color:var(--devui-text, #252b3a)}.devui-alert.devui-alert-info[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-info-line, #5e7ce0)}.devui-alert.devui-alert-warning[_ngcontent-%COMP%]{background-color:var(--devui-warning-bg, #ffe1c7);border-color:var(--devui-warning-line, #fa9841);color:var(--devui-text, #252b3a)}.devui-alert.devui-alert-warning[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-warning-line, #fa9841)}.devui-alert.devui-alert-danger[_ngcontent-%COMP%]{background-color:var(--devui-danger-bg, #ffd5d4);border-color:var(--devui-danger-line, #f66f6a);color:var(--devui-text, #252b3a)}.devui-alert.devui-alert-danger[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-danger-line, #f66f6a)}.devui-alert.devui-alert-simple[_ngcontent-%COMP%]{border-color:var(--devui-line, #d7d8da);color:var(--devui-text, #252b3a)}.devui-alert.devui-alert-simple[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-text-weak, #575d6c)}.devui-alert[_ngcontent-%COMP%]   .devui-alert-icon[_ngcontent-%COMP%]{padding-right:8px}.devui-alert[_ngcontent-%COMP%]   svg.devui-icon[_ngcontent-%COMP%]{width:16px;height:16px;vertical-align:middle;transform:translateY(-1px)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-success[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-success-line, #50d4ab)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-success[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff);stroke:var(--devui-light-text, #ffffff)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-warning[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path.devui-icon-warning-outer[_ngcontent-%COMP%]{fill:var(--devui-warning-line, #fa9841)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-warning[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path.devui-icon-warning-inner[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff);stroke:var(--devui-light-text, #ffffff)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-info[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path.devui-icon-info-outer[_ngcontent-%COMP%]{fill:var(--devui-info-line, #5e7ce0)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-info[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path.devui-icon-info-inner[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff);stroke:var(--devui-light-text, #ffffff)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-error[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path.devui-icon-error-outer[_ngcontent-%COMP%]{fill:var(--devui-danger-line, #f66f6a)}.devui-alert[_ngcontent-%COMP%]   .devui-icon.devui-icon-error[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]   path.devui-icon-error-inner[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff);stroke:var(--devui-light-text, #ffffff)}.devui-alert[_ngcontent-%COMP%]   .devui-alert-carousel-container[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:0;height:24px;overflow:hidden}.devui-alert[_ngcontent-%COMP%]   .devui-alert-carousel-container[_ngcontent-%COMP%]   .devui-alert-carousel-box[_ngcontent-%COMP%]{position:relative;left:0;top:0}.devui-alert[_ngcontent-%COMP%]   .devui-alert-operation-container[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;display:flex;align-items:center;justify-content:flex-end;height:24px;min-width:200px}.devui-alert[_ngcontent-%COMP%]   .devui-alert-operation-container[_ngcontent-%COMP%]   .devui-alert-carousel-num[_ngcontent-%COMP%]{padding-right:8px}.devui-alert[_ngcontent-%COMP%]   .devui-alert-operation-container[_ngcontent-%COMP%]   .devui-alert-carousel-button[_ngcontent-%COMP%]{margin-left:8px;display:inline-flex;align-items:center;justify-content:center;width:24px;height:16px;line-height:16px;vertical-align:middle;background-color:transparent;text-align:center;border-radius:var(--devui-border-radius, 2px);cursor:pointer}.devui-alert[_ngcontent-%COMP%]   .devui-alert-operation-container[_ngcontent-%COMP%]   .devui-alert-carousel-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-text, #252b3a)}.devui-alert[_ngcontent-%COMP%]   .devui-alert-operation-container[_ngcontent-%COMP%]   .devui-alert-carousel-button[_ngcontent-%COMP%]:hover{background-color:var(--devui-shape-icon-fill-hover, #babbc0)}.devui-alert[_ngcontent-%COMP%]   .devui-alert-operation-container[_ngcontent-%COMP%]   .devui-alert-carousel-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff)}.devui-alert[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;color:var(--devui-text, #252b3a);opacity:1;line-height:26px;height:24px;padding-left:8px}.devui-alert[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff)}.devui-alert[_ngcontent-%COMP%]   .devui-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--devui-text, #252b3a);font-size:var(--devui-font-size, 12px);font-weight:700}"]})}return r})(),T=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[t.ez]})}return r})()},9863:(A,p,s)=>{s.d(p,{qm:()=>a,u$:()=>r});var e=s(5996),t=s(1824),v=s(9589),h=s(9938),g=s(3623);function _(n,l){1&n&&t._UZ(0,"span",13)}function C(n,l){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,_,1,0,"span",12),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.showAnimation)}}function b(n,l){if(1&n&&(t.O4$(),t._uU(0)),2&n){const i=t.oxw();t.Oqu(i.label)}}function m(n,l){1&n&&t.O4$()}const x=function(n,l,i,c){return{active:n,halfchecked:l,disabled:i,unchecked:c}},k=function(n,l,i){return{"border-color":n,"background-image":l,"background-color":i}},M=function(n,l,i,c){return{"custom-color":n,"devui-checkbox-no-label":l,"devui-no-animation":i,"devui-checkbox-default-background":c}},O=function(n){return{"devui-no-animation":n}},P=function(n,l,i,c,o){return{$implicit:n,checked:l,halfchecked:i,disabled:c,label:o}};let r=(()=>{class n{static#e=this.ID_SEED=0;get hasGlowStyle(){return this.showGlowStyle}constructor(i,c,o){this.changeDetectorRef=i,this.devConfigService=c,this.el=o,this.disabled=!1,this.isShowTitle=!0,this.halfchecked=!1,this.showAnimation=!0,this.showGlowStyle=!0,this.change=new t.vpe,this.onChange=f=>null,this.onTouch=()=>null,this.id=n.ID_SEED++}ngAfterViewInit(){if(this.showGlowStyle){const i=this.el.nativeElement.querySelector(".devui-checkbox > .devui-checkbox-glow-box"),c=this.el.nativeElement.querySelector(".devui-checkbox > label"),o=c&&getComputedStyle(c).height;i&&o&&"16px"!==o&&(i.style.height=o)}}writeValue(i){null!==i&&(this.checked=!!i,this.changeDetectorRef.markForCheck())}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouch=i}toggle(i){this.canChange().then(c=>{this.disabled||!c||(this.checked=!this.checked,this.onChange(this.checked),this.change.next(this.checked),this.onTouch())})}canChange(){let i=Promise.resolve(!0);if(this.beforeChange){const c=this.beforeChange(this.label);typeof c<"u"&&(i=c.then?c:c.subscribe?c.toPromise():Promise.resolve(c))}return i}static#t=this.\u0275fac=function(c){return new(c||n)(t.Y36(t.sBO),t.Y36(g._U),t.Y36(t.SBq))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["d-checkbox"]],hostVars:2,hostBindings:function(c,o){2&c&&t.ekj("devui-glow-style",o.hasGlowStyle)},inputs:{name:"name",label:"label",cssClass:"cssClass",color:"color",disabled:"disabled",isShowTitle:"isShowTitle",title:"title",labelTemplate:"labelTemplate",halfchecked:"halfchecked",showAnimation:"showAnimation",showGlowStyle:"showGlowStyle",beforeChange:"beforeChange"},outputs:{change:"change"},features:[t._Bn([{provide:v.JU,useExisting:(0,t.Gpc)(()=>n),multi:!0}])],decls:11,vars:39,consts:[[3,"ngClass"],["class","devui-checkbox-glow-box",4,"ngIf"],[3,"title","click"],["type","checkbox",1,"devui-checkbox-input",3,"name","checked","disabled","indeterminate","click","change"],[1,"devui-checkbox-material",3,"ngStyle","ngClass"],[1,"devui-checkbox-halfchecked-bg"],["viewBox","0 0 14 14","width","14","height","14",1,"devui-checkbox-tick"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["d","M 2.3 7.0 5.6 9.6 11.4 3.5","stroke","#fff","stroke-width","1.5","fill","none",1,"devui-tick",3,"ngClass"],[3,"ngIf"],[3,"ngIf","ngTemplateOutlet","ngTemplateOutletContext"],[1,"devui-checkbox-glow-box"],["class","devui-checkbox-glow-bg",4,"ngIf"],[1,"devui-checkbox-glow-bg"]],template:function(c,o){1&c&&(t.TgZ(0,"div",0),t.YNc(1,C,2,1,"div",1),t.TgZ(2,"label",2),t.NdJ("click",function(u){return o.toggle(u)}),t.TgZ(3,"input",3),t.NdJ("click",function(u){return u.stopPropagation()})("change",function(u){return u.stopPropagation()}),t.qZA(),t.TgZ(4,"span",4),t._UZ(5,"span",5),t.O4$(),t.TgZ(6,"svg",6)(7,"g",7),t._UZ(8,"path",8),t.qZA()()(),t.YNc(9,b,1,1,"ng-template",9),t.YNc(10,m,0,0,"ng-template",10),t.qZA()()),2&c&&(t.Gre("devui-checkbox ",o.cssClass,""),t.Q6J("ngClass",t.l5B(17,x,o.checked,o.halfchecked,o.disabled,!o.checked)),t.xp6(1),t.Q6J("ngIf",o.showGlowStyle),t.xp6(1),t.s9C("title",o.isShowTitle?o.title||o.label:""),t.xp6(1),t.Q6J("name",o.name||"checkbox-"+o.id)("checked",o.checked)("disabled",o.disabled)("indeterminate",o.halfchecked),t.xp6(1),t.Q6J("ngStyle",t.kEZ(22,k,(o.checked||o.halfchecked)&&o.color?o.color:"",o.color&&o.halfchecked||o.color?"linear-gradient("+o.color+", "+o.color+")":"",o.color&&o.halfchecked?o.color:""))("ngClass",t.l5B(26,M,o.color,!o.label&&!o.labelTemplate,!o.showAnimation,!o.halfchecked)),t.xp6(4),t.Q6J("ngClass",t.VKq(31,O,!o.showAnimation)),t.xp6(1),t.Q6J("ngIf",!!o.label&&!o.labelTemplate),t.xp6(1),t.Q6J("ngIf",!!o.labelTemplate)("ngTemplateOutlet",o.labelTemplate)("ngTemplateOutletContext",t.qbA(33,P,o,o.checked,o.halfchecked,o.disabled,o.label)))},dependencies:[e.mk,e.O5,e.tP,e.PC],styles:['.devui-font-size-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px)}.devui-font-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px);font-weight:var(--devui-font-content-weight, normal);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-checkbox[_ngcontent-%COMP%]{position:relative;display:flex;display:-ms-flexbox;align-items:center;-ms-flex-align:center;height:100%;margin:0}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-tick[_ngcontent-%COMP%]{position:absolute}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-tick[_ngcontent-%COMP%]   .devui-tick[_ngcontent-%COMP%]{stroke:var(--devui-light-text, #ffffff);stroke-dasharray:13 13;stroke-dashoffset:13;opacity:0;transform:scale(0);transform-origin:50% 50%;transition:stroke-dashoffset var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95)),opacity var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95)),transform var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95))}.devui-checkbox.active[_ngcontent-%COMP%]:not(.halfchecked)   .devui-tick[_ngcontent-%COMP%]{opacity:1;stroke-dashoffset:0;transform:scale(1);transition:stroke-dashoffset var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in, cubic-bezier(.5, 0, .84, .25)),opacity var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95))}.devui-checkbox.active[_ngcontent-%COMP%]:not(.disabled)   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color), .devui-checkbox.halfchecked[_ngcontent-%COMP%]:not(.disabled)   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color){border-color:var(--devui-brand, #5e7ce0)}.devui-checkbox.active[_ngcontent-%COMP%]:not(.disabled)   .devui-checkbox-material[_ngcontent-%COMP%]{background-size:100% 100%;transition:border-color var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95))}.devui-checkbox.unchecked[_ngcontent-%COMP%]:not(.disabled)   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color){background-size:0% 0%;transition:background-size var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95)),border-color var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95))}.devui-checkbox.unchecked[_ngcontent-%COMP%]:not(.disabled):hover   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color){border-color:var(--devui-brand, #5e7ce0)}.devui-checkbox.unchecked[_ngcontent-%COMP%]:not(.disabled)   .devui-checkbox-material.custom-color[_ngcontent-%COMP%]{background-size:0% 0%;transition:border-color var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95))}.devui-checkbox.halfchecked[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color){background-color:var(--devui-brand, #5e7ce0)}.devui-checkbox.halfchecked[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color) > .devui-checkbox-halfchecked-bg[_ngcontent-%COMP%]{opacity:1;transform:scale(.4288);transition:transform var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95));background-color:var(--devui-light-text, #ffffff)}.devui-checkbox.halfchecked[_ngcontent-%COMP%]   .devui-checkbox-material.custom-color[_ngcontent-%COMP%] > .devui-checkbox-halfchecked-bg[_ngcontent-%COMP%]{opacity:1;transform:scale(.4288);transition:transform var(--devui-animation-duration-base, .2s) var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95));background-color:var(--devui-light-text, #ffffff)}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%]{text-align:initial;height:14px;width:14px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid var(--devui-line, #d7d8da);border-radius:var(--devui-border-radius, 2px);background:linear-gradient(var(--devui-brand, #5e7ce0),var(--devui-brand, #5e7ce0)) no-repeat center/0%;margin-right:8px;vertical-align:text-bottom}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-material.devui-checkbox-default-background[_ngcontent-%COMP%]{background-color:var(--devui-base-bg, #ffffff)}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-material.devui-checkbox-no-label[_ngcontent-%COMP%]{margin-right:0}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%] > .devui-checkbox-halfchecked-bg[_ngcontent-%COMP%]{display:inline-block;position:absolute;content:"";background-color:var(--devui-light-text, #ffffff);top:0;left:0;height:100%;width:100%;transform:scale(1);opacity:0}.devui-checkbox[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{width:14px;height:14px}.devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):focus, .devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):active, .devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):hover{background-color:var(--devui-brand, #5e7ce0)}.devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):active, .devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):focus, .devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):hover:active, .devui-checkbox[_ngcontent-%COMP%]:not(.disabled).halfchecked   .devui-checkbox-material[_ngcontent-%COMP%]:not(.custom-color):hover:focus{background-color:var(--devui-brand-active, #526ecc)}.devui-checkbox-input[_ngcontent-%COMP%]{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none}.devui-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;font-size:var(--devui-font-size, 12px);font-weight:400;height:16px;line-height:16px;cursor:pointer;color:var(--devui-text, #252b3a);margin:0;display:block;flex:1}.devui-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;box-sizing:content-box;vertical-align:top}.devui-checkbox.disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--devui-disabled-text, #babbc0)}.devui-checkbox.disabled[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%]{border-color:var(--devui-icon-fill-active-disabled, #beccfa);background-color:var(--devui-icon-fill-active-disabled, #beccfa)}.devui-checkbox.disabled.unchecked[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%]{border-color:var(--devui-disabled-line, #dfe1e6);background-color:var(--devui-disabled-bg, #f5f5f5)}.devui-checkbox.disabled.halfchecked[_ngcontent-%COMP%]   .devui-checkbox-material[_ngcontent-%COMP%]{background-color:var(--devui-icon-fill-active-disabled, #beccfa)}.devui-checkbox.disabled.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff)}  :root .devui-glow-style .devui-checkbox .devui-checkbox-glow-box{position:absolute;width:16px;height:16px}  :root .devui-glow-style .devui-checkbox .devui-checkbox-glow-box .devui-checkbox-glow-bg{display:block;width:16px;height:16px;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--devui-border-radius, 2px);box-shadow:none;transition:box-shadow var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}  :root .devui-glow-style .devui-checkbox:not(.disabled):hover .devui-checkbox-glow-bg{box-shadow:0 0 0 6px var(--devui-range-item-hover-bg, #e9edfa)}.devui-no-animation[_ngcontent-%COMP%]{transition:none!important}'],changeDetection:0})}return(0,h.gn)([(0,g.oS)(),(0,h.w6)("design:type",Object)],n.prototype,"showAnimation",void 0),(0,h.gn)([(0,g.oS)(),(0,h.w6)("design:type",Object)],n.prototype,"showGlowStyle",void 0),n})(),a=(()=>{class n{static#e=this.\u0275fac=function(c){return new(c||n)};static#t=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[e.ez,v.u5]})}return n})()}}]);