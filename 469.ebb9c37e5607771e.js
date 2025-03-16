"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[469],{9469:(G,f,d)=>{d.r(f),d.d(f,{Puzzle2048Module:()=>O});var s=d(1575),e=d(2010),b=d(7936);const m=(t,r,i)=>({height:t,width:r,"border-radius":i,"vertical-align":"middle"}),l=t=>({"border-radius":t});function p(t,r){if(1&t){const i=e.RV6();e.j41(0,"img",3),e.bIt("error",function(){e.eBV(i);const a=e.XpG();return e.Njj(a.showErrAvatar())}),e.k0s()}if(2&t){const i=e.XpG();e.Y8G("src",i.imgSrc,e.B4B)("ngStyle",e.sMw(2,m,i.height+"px",i.width+"px",i.isRound?"100%":"0"))}}function C(t,r){if(1&t&&(e.j41(0,"span",4),e.EFF(1),e.k0s()),2&t){const i=e.XpG();e.ZvI("devui-avatar-style devui-avatar-background-",i.code,""),e.xc7("width",i.width+"px")("height",i.height+"px")("line-height",i.height+"px")("font-size",i.fontSize+"px"),e.Y8G("ngStyle",e.eq3(13,l,i.isRound?"100%":"0")),e.R7$(),e.JRh(i.nameDisplay)}}function x(t,r){if(1&t&&(e.j41(0,"span",5),e.qSk(),e.j41(1,"svg",6)(2,"g",7),e.nrm(3,"circle",8)(4,"path",9),e.k0s()()()),2&t){const i=e.XpG();e.Y8G("ngStyle",e.eq3(7,l,i.isRound?"100%":"0")),e.R7$(),e.xc7("width",i.width+"px")("height",i.height+"px")("vertical-align","middle")}}function y(t,r){if(1&t&&(e.j41(0,"span",5),e.qSk(),e.j41(1,"svg",6)(2,"g",7),e.nrm(3,"path",10)(4,"path",11),e.k0s()()()),2&t){const i=e.XpG();e.Y8G("ngStyle",e.eq3(7,l,i.isRound?"100%":"0")),e.R7$(),e.xc7("width",i.width+"px")("height",i.height+"px")("vertical-align","middle")}}let w=(()=>{class t{constructor(){this.isNobody=!0,this.isErrorImg=!1,this.width=36,this.height=36,this.isRound=!0,this.MINIMUM_FONT_SIZE=12,this.fontSize=12}ngOnInit(){this.calcValues(this.customText?this.customText:this.name)}ngOnChanges(i){const{width:n,customText:a,gender:o,height:u,name:D}=i;[n,a,o,u,D].map(g=>g&&!g.isFirstChange()).includes(!0)&&this.calcValues(this.customText?this.customText:this.name)}showErrAvatar(){this.isErrorImg=!0}calcValues(i){const n=i,a=Math.min(this.width,this.height);n?(this.isNobody=!1,this.setDisplayName(n,a)):""===n?(this.isNobody=!1,this.nameDisplay=""):this.isNobody=!0;const o=a/4+3;this.fontSize=o<this.MINIMUM_FONT_SIZE?this.MINIMUM_FONT_SIZE:o}setDisplayName(i,n){if(this.customText)return this.nameDisplay=this.customText,void this.getBackgroundColor(this.customText.substr(0,1));if(i.length<2)this.nameDisplay=i;else if(/^[\u4e00-\u9fa5]/.test(i))this.nameDisplay=i.substr(i.length-2,2);else if(/^[A-Za-z]/.test(i))if(/[_ -]/.test(i)){const a=i.split(/_|-|\s+/)[0],o=i.split(/_|-|\s+/)[1];this.nameDisplay=a.substr(0,1).toUpperCase()+o.substr(0,1).toUpperCase()}else this.nameDisplay=i.substr(0,2).toUpperCase();else this.nameDisplay=this.name.substr(0,2);n<30&&(this.nameDisplay=/^[\u4e00-\u9fa5]/.test(i)?i.substr(i.length-1,1):this.name.substr(0,1).toUpperCase()),this.getBackgroundColor(i.substr(0,1))}getBackgroundColor(i){if(this.gender){if("male"===this.gender.toLowerCase())this.code=1;else{if("female"!==this.gender.toLowerCase())throw new Error('gender must be "Male" or "Female"');this.code=0}return}const n=i.charCodeAt();this.code=n%2}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["d-avatar"]],inputs:{gender:"gender",width:"width",height:"height",isRound:"isRound",imgSrc:"imgSrc",name:"name",customText:"customText"},features:[e.OA$],decls:4,vars:4,consts:[["alt","",3,"src","ngStyle","error",4,"ngIf"],[3,"class","width","height","line-height","font-size","ngStyle",4,"ngIf"],["class","devui-avatar-style",3,"ngStyle",4,"ngIf"],["alt","",3,"error","src","ngStyle"],[3,"ngStyle"],[1,"devui-avatar-style",3,"ngStyle"],["viewBox","0 0 30 30","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["fill","#CACFD8","cx","15","cy","15","r","15"],["d","M14.9997866,16 C12.5145053,16 10.4997866,13.9852814 10.4997866,11.5 C10.4997866,9.01471863 12.5145053,7 14.9997866,7 C17.485068,7 19.4997866,9.01471863 19.4997866,11.5 C19.4997866,13.9852814 17.485068,16 14.9997866,16 Z M23,23 L7,22.998553 C7,19.0122153 10.8892296,16.5 14.9997866,16.5 C19.1103437,16.5 23,20 23,23 Z","fill","#FFFFFF"],["d","M22.31,19.2474562 L22.31,21.9974562 L20.81,21.9974562 L20.81,19.2474562 L18.06,19.2474562 L18.06,17.7474562 L20.81,17.7474562 L20.81,14.9974562 L22.31,14.9974562 L22.31,17.7474562 L25.06,17.7474562 L25.06,19.2474562 L22.31,19.2474562 Z M14.9297866,14.9974562 C12.4445053,14.9974562 10.4297866,12.9827376 10.4297866,10.4974562 C10.4297866,8.01217483 12.4445053,5.9974562 14.9297866,5.9974562 C17.415068,5.9974562 19.4297866,8.01217483 19.4297866,10.4974562 C19.4297866,12.9827376 17.415068,14.9974562 14.9297866,14.9974562 Z M19.6797866,20.2474562 L19.6797866,21.9971623 L6.93,21.9960092 C6.93,18.0096715 10.8192296,15.4974562 14.9297866,15.4974562 C16.4608397,15.4974562 17.9612467,15.983021 19.2414296,16.7474562 L17.06,16.7474562 L17.06,20.2474562 L19.6797866,20.2474562 Z","fill","#959EB2"],["d","M0,15 L1,15 C1,15.6118966 1.03919561,16.2186526 1.11683409,16.8178549 L0.125124012,16.9463505 C0.0425740367,16.309242 0,15.6595925 0,15 Z M0.503241262,18.867175 L1.46961749,18.6100428 C1.62594651,19.1975718 1.8203704,19.7729973 2.05141295,20.3332823 L1.12693074,20.7145074 C0.880599065,20.1171459 0.67172715,19.500393 0.503241262,18.867175 Z M1.99122134,22.4730778 L2.85786221,21.9741453 C3.16078316,22.5003161 3.49772502,23.0063252 3.86631639,23.4889602 L3.0715754,24.0959089 C2.6777461,23.5802273 2.31659753,23.0382531 1.99122134,22.4730778 Z M4.38894559,25.6021078 L5.09634867,24.8952974 C5.52582519,25.3251341 5.98272136,25.7268214 6.46397085,26.0975793 L5.85367498,26.8897529 C5.33779918,26.4923186 4.84851395,26.0620615 4.38894559,25.6021078 Z M7.4424647,27.9597887 L7.94703323,27.096417 C8.47111119,27.4026968 9.0146817,27.6746032 9.57453904,27.9101878 L9.18668461,28.8319084 C8.58423501,28.5784013 8.00181692,28.2866833 7.4424647,27.9597887 Z M11.0671021,29.4791103 L11.3286494,28.5139196 C11.9126912,28.6721832 12.5080563,28.7925378 13.1119738,28.8738935 L12.9784667,29.8649413 C12.3271613,29.7772019 11.6891102,29.647662 11.0671021,29.4791103 Z M15,30 C14.9951965,30 14.9903936,29.9999977 14.9855912,30 L14.9865313,28.9999937 C14.9929361,28.9999987 14.9929361,28.9999987 14.999296,29 C15.6071552,29 16.2093364,28.9614092 16.8041774,28.8849313 L16.9316965,29.8767674 C16.2992813,29.9580762 15.6545362,30 15,30 Z M18.8545762,29.5001051 L18.5982903,28.5335041 C19.1860387,28.3776677 19.7617059,28.1837179 20.3222555,27.9531286 L20.7026875,28.8779375 C20.1050484,29.123784 19.4880358,29.3321488 18.8545762,29.5001051 Z M22.4608087,28.0158343 L21.9626951,27.1487226 C22.4893928,26.8461604 22.9959399,26.5095265 23.479119,26.1411926 L24.0853678,26.9364676 C23.5691101,27.3300178 23.0265585,27.6908386 22.4608087,28.0158343 Z M25.5921583,25.6209863 L24.8860071,24.9129252 C25.3161421,24.4839504 25.7181674,24.0275419 26.0893023,23.5467621 L26.8808873,24.1578212 C26.4830546,24.6731862 26.0524368,25.1619493 25.5921583,25.6209863 Z M27.9526445,22.5697466 L27.0897495,22.0643633 C27.3964738,21.5406601 27.6688549,20.9974409 27.904942,20.4379104 L28.8262855,20.8266601 C28.5722411,21.4287497 28.2800163,22.0107897 27.9526445,22.5697466 Z M29.4756977,18.9454696 L28.5107363,18.6830777 C28.6695136,18.099165 28.7903877,17.5039035 28.8722662,16.9000659 L29.8631978,17.0344333 C29.7748946,17.6856516 29.6447979,18.3235936 29.4756977,18.9454696 Z M30,15 C30,15.0093541 29.9999914,15.0187063 29.9999743,15.0280564 L28.999976,15.0262257 C28.9999956,15.0134169 28.9999956,15.0134169 29,15.0006466 C29,14.3970304 28.9619395,13.7989704 28.8865088,13.208136 L29.8784576,13.0814959 C29.9586571,13.7096843 30,14.3500145 30,15 Z M29.5038108,11.1594275 L28.5369608,11.4147728 C28.3816616,10.8267413 28.1882232,10.2507676 27.9581175,9.68988857 L28.8832852,9.31033004 C29.1286141,9.90831524 29.3364318,10.5256569 29.5038108,11.1594275 Z M28.0228788,7.55146763 L27.1552968,8.0487618 C26.853241,7.52179373 26.5170958,7.0149453 26.1492295,6.53143425 L26.9450761,5.92593594 C27.3381231,6.44254364 27.6984223,6.98541919 28.0228788,7.55146763 Z M25.6309089,4.41780044 L24.9221905,5.12329189 C24.4935639,4.69270467 24.0374698,4.2902078 23.5569705,3.9185855 L24.1687554,3.12756133 C24.6838129,3.52591118 25.1722392,3.95703271 25.6309089,4.41780044 Z M22.5819506,2.05451093 L22.0757531,2.91692851 C21.5523008,2.60968727 21.0092999,2.33677531 20.4499564,2.10014728 L20.8395722,1.17916981 C21.4414531,1.43379309 22.0232574,1.72658499 22.5819506,2.05451093 Z M18.9594329,0.528106464 L18.696103,1.4928123 C18.1122842,1.33345081 17.517086,1.21199245 16.9132846,1.12953261 L17.0485964,0.138729543 C17.6997753,0.227659622 18.3376514,0.358382523 18.9594329,0.528106464 Z M15,-1.11022302e-16 C15.0139048,-1.11022302e-16 15.0278052,1.892004e-05 15.0417011,5.673578e-05 L15.0389797,1.00005303 C15.0197685,1.00000934 15.0197685,1.00000934 15.0005868,1.00000001 C14.4012162,1 13.8072783,1.03753392 13.2204527,1.11192427 L13.0946918,0.119863691 C13.7186509,0.0407660189 14.3545651,-1.11022302e-16 15,-1.11022302e-16 Z M11.1720354,0.492865376 L11.4265338,1.45993857 C10.8386468,1.61464899 10.2627801,1.80746996 9.70196444,2.03693489 L9.32327455,1.11141127 C9.92118954,0.86676666 10.5384173,0.659610554 11.1720354,0.492865376 Z M7.56375123,1.97008801 L8.06022548,2.83813946 C7.53298826,3.13968806 7.02583975,3.47534367 6.54199783,3.84274131 L5.93725081,3.04632368 C6.4542073,2.65378102 6.99740556,2.29400434 7.56375123,1.97008801 Z M4.42776842,4.35917772 L5.13259949,5.06855291 C4.70156141,5.49682984 4.29859416,5.95260763 3.92648544,6.43282469 L3.13602297,5.82031423 C3.53488885,5.30556625 3.96651291,4.81747851 4.42776842,4.35917772 Z M2.0616775,7.40585279 L2.92361696,7.91286401 C2.61586086,8.43606175 2.34241977,8.97884042 2.10525197,9.53799293 L1.18464153,9.14751063 C1.43984243,8.54584288 1.73319965,7.96427837 2.0616775,7.40585279 Z M0.531541456,11.0280046 L1.49601653,11.2921785 C1.33614878,11.8758413 1.21417484,12.4709081 1.13119244,13.074601 L0.140507978,12.9384235 C0.230001486,12.2873626 0.361276825,11.6496255 0.531541456,11.0280046 Z","fill","#CACFD8","fill-rule","nonzero"]],template:function(n,a){1&n&&e.DNE(0,p,1,6,"img",0)(1,C,2,15,"span",1)(2,x,5,9,"span",2)(3,y,5,9,"span",2),2&n&&(e.Y8G("ngIf",a.imgSrc&&!a.isErrorImg),e.R7$(),e.Y8G("ngIf",!a.imgSrc&&!a.isNobody&&0!==(null==a.nameDisplay?null:a.nameDisplay.length)),e.R7$(),e.Y8G("ngIf",!a.imgSrc&&!a.isNobody&&0===(null==a.nameDisplay?null:a.nameDisplay.length)),e.R7$(),e.Y8G("ngIf",!a.imgSrc&&a.isNobody||a.isErrorImg))},dependencies:[s.bT,s.B3],styles:[".devui-avatar-style[_ngcontent-%COMP%]{display:inline-block;text-align:center;color:var(--devui-light-text, #ffffff)}.devui-avatar-background-0[_ngcontent-%COMP%]{background-color:#ff8b87}.devui-avatar-background-1[_ngcontent-%COMP%]{background-color:#7693f5}"],changeDetection:0})}}return t})(),z=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[s.MD,b.YN]})}}return t})();var v=d(5993),c=d(6186),M=d(1911),L=d(1221),h=d(7518),k=d(2598),T=d(338),_=d(3323);function I(t,r){if(1&t&&(e.nrm(0,"object",5),e.nI1(1,"safeUrl")),2&t){const i=e.XpG();e.Y8G("data",e.bMT(1,1,i.uri),e.f$h)}}function R(t,r){if(1&t){const i=e.RV6();e.qex(0),e.j41(1,"d-card",8)(2,"d-card-header"),e.nrm(3,"d-avatar",9),e.j41(4,"d-card-title"),e.EFF(5),e.k0s(),e.j41(6,"d-card-subtitle"),e.nrm(7,"i",10),e.j41(8,"span"),e.EFF(9),e.k0s()()(),e.j41(10,"d-card-content"),e.EFF(11),e.k0s(),e.j41(12,"d-card-actions",11)(13,"div",12),e.bIt("click",function(){const a=e.eBV(i).$implicit,o=e.XpG(2);return e.Njj(o.goTo(a.url))}),e.nrm(14,"i",13),e.j41(15,"span"),e.EFF(16),e.nI1(17,"translate"),e.k0s()()()(),e.bVm()}if(2&t){const i=r.$implicit;e.R7$(),e.Y8G("interactive",!0),e.R7$(2),e.Y8G("imgSrc",i.icon)("width",60)("height",60)("isRound",!1),e.R7$(2),e.JRh(i.name),e.R7$(4),e.JRh(i.author),e.R7$(2),e.JRh(i.desc),e.R7$(),e.Y8G("align","end"),e.R7$(4),e.JRh(e.bMT(17,10,"jump"))}}function Z(t,r){if(1&t&&(e.j41(0,"div",6),e.DNE(1,R,18,12,"ng-container",7),e.k0s()),2&t){const i=e.XpG();e.R7$(),e.Y8G("ngForOf",i.cardList)}}const j=[{path:"",component:(()=>{class t{constructor(){this.uri="/MyWebCollection/2048/",this.cardList=[{name:"My 2048",author:"yequanrui",desc:"My version of 2048",icon:"https://yequanrui.github.io/2048/favicon.ico",url:"https://yequanrui.github.io/2048/"},{name:"2048",author:"gabrielecirulli",desc:"Original version of 2048",icon:"https://gabrielecirulli.github.io/2048/favicon.ico",url:"https://gabrielecirulli.github.io/2048/"},{name:"16384",author:"aNNiMON",desc:"8x8 version of 2048",icon:"https://annimon.github.io/16384/favicon.ico",url:"https://annimon.github.io/16384/"},{name:"2048-AI",author:"ovolve",desc:"AI for the game 2048",icon:"https://ovolve.github.io/2048-AI/favicon.ico",url:"https://ovolve.github.io/2048-AI/"}];const i=location.hostname.includes("localhost")?`//${location.hostname}:8080/Web`:location.origin;this.uri=i+this.uri}goTo(i){i&&k.A8.jumpOuterUrl(i)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["puzzle-2048"]],decls:5,vars:6,consts:[["type","slider","size","md",1,"puzzle-type",3,"activeTabChange","activeTab","showContent"],["id","mine",3,"title"],["id","others",3,"title"],["width","100%","height","100%",3,"data",4,"ngIf"],["class","card-container",4,"ngIf"],["width","100%","height","100%",3,"data"],[1,"card-container"],[4,"ngFor","ngForOf"],[1,"card-content",3,"interactive"],["dCardAvatar","",3,"imgSrc","width","height","isRound"],[1,"card-icon","icon-op-member"],[3,"align"],[1,"card-block",3,"click"],[1,"card-icon","icon-link"]],template:function(n,a){1&n&&(e.j41(0,"d-tabs",0),e.mxI("activeTabChange",function(u){return e.DH7(a.activeTab,u)||(a.activeTab=u),u}),e.nrm(1,"d-tab",1)(2,"d-tab",2),e.k0s(),e.DNE(3,I,2,3,"object",3)(4,Z,2,1,"div",4)),2&n&&(e.R50("activeTab",a.activeTab),e.Y8G("showContent",!1),e.R7$(),e.Y8G("title","Mine"),e.R7$(),e.Y8G("title","Others"),e.R7$(),e.Y8G("ngIf","mine"===a.activeTab),e.R7$(),e.Y8G("ngIf","others"===a.activeTab))},dependencies:[w,v.ib,v.lM,v.v6,v.Vj,v.wV,v.W6,v.d6,c.OW,c.je,s.Sq,s.bT,T.D9,_.d],styles:["[_ngcontent-%COMP%]:export{devui-global-bg:var(--devui-global-bg, #f5f5f5);devui-glass-morphism-bg:var(--devui-glass-morphism-bg, rgba(245, 246, 248, .9));devui-global-bg-normal:var(--devui-global-bg-normal, #ffffff);devui-base-bg:var(--devui-base-bg, #ffffff);devui-base-bg-dark:var(--devui-base-bg-dark, #000000);devui-brand:var(--devui-brand, #0a59f7);devui-brand-foil:var(--devui-brand-foil, #f2f2f3);devui-brand-hover:var(--devui-brand-hover, #3979f9);devui-brand-active:var(--devui-brand-active, #0950de);devui-brand-active-focus:var(--devui-brand-active-focus, #00196b);devui-contrast:var(--devui-contrast, #c7000b);devui-text:var(--devui-text, #191919);devui-text-weak:var(--devui-text-weak, #333333);devui-aide-text:var(--devui-aide-text, #595959);devui-aide-text-hover:var(--devui-aide-text-hover, #000000);devui-aide-text-stress:var(--devui-aide-text-stress, #333333);devui-placeholder:var(--devui-placeholder, #808080);devui-light-text:var(--devui-light-text, #ffffff);devui-dark-text:var(--devui-dark-text, #000000);devui-link:var(--devui-link, #0950de);devui-link-active:var(--devui-link-active, #0950de);devui-link-light:var(--devui-link-light, #6b9bfa);devui-link-light-active:var(--devui-link-light-active, #9dbdfc);devui-line:var(--devui-line, #dbdbdb);devui-dividing-line:var(--devui-dividing-line, #f0f0f0);devui-block:var(--devui-block, #ffffff);devui-area:var(--devui-area, #f3f3f3);devui-danger:var(--devui-danger, #e02128);devui-warning:var(--devui-warning, #fcc800);devui-waiting:var(--devui-waiting, #9dbdfc);devui-success:var(--devui-success, #058358);devui-info:var(--devui-info, #0a59f7);devui-initial:var(--devui-initial, #cedefd);devui-unavailable:var(--devui-unavailable, #f3f3f3);devui-shadow:var(--devui-shadow, rgba(0, 0, 0, .16));devui-light-shadow:var(--devui-light-shadow, rgba(0, 0, 0, .08));devui-connected-overlay-shadow:var(--devui-connected-overlay-shadow, rgba(0, 0, 0, .16));devui-feedback-overlay-shadow:var(--devui-feedback-overlay-shadow, rgba(0, 0, 0, .16));devui-feedback-overlay-backdrop:var(--devui-feedback-overlay-backdrop, rgba(0, 0, 0, .3));devui-hover-shadow:var(--devui-hover-shadow, rgba(0, 0, 0, .16));devui-table-column-shadow-color:var(--devui-table-column-shadow-color, rgba(37, 43, 58, .08));devui-icon-text:var(--devui-icon-text, #808080);devui-icon-bg:var(--devui-icon-bg, #ffffff);devui-icon-fill:var(--devui-icon-fill, #595959);devui-icon-fill-weak:var(--devui-icon-fill-weak, #808080);devui-icon-fill-hover:var(--devui-icon-fill-hover, #191919);devui-icon-fill-active:var(--devui-icon-fill-active, #191919);devui-icon-fill-active-hover:var(--devui-icon-fill-active-hover, #000000);devui-shape-icon-fill:var(--devui-shape-icon-fill, #c2c2c2);devui-shape-icon-fill-hover:var(--devui-shape-icon-fill-hover, #808080);devui-shape-icon-fill-active:var(--devui-shape-icon-fill-active, #808080);devui-shape-icon-fill-disabled:var(--devui-shape-icon-fill-disabled, #f0f0f0);devui-form-control-line:var(--devui-form-control-line, #dbdbdb);devui-form-control-bg:var(--devui-form-control-bg, #ffffff);devui-form-control-line-hover:var(--devui-form-control-line-hover, #808080);devui-form-control-line-active:var(--devui-form-control-line-active, #0a59f7);devui-form-control-interactive-outline:var(--devui-form-control-interactive-outline, rgba(94, 124, 224, .08));devui-form-control-line-active-hover:var(--devui-form-control-line-active-hover, #00196b);devui-list-item-active-bg:var(--devui-list-item-active-bg, #cedefd);devui-list-item-active-text:var(--devui-list-item-active-text, #000000);devui-list-item-active-hover-bg:var(--devui-list-item-active-hover-bg, #cedefd);devui-list-item-hover-bg:var(--devui-list-item-hover-bg, #f2f2f3);devui-list-item-hover-text:var(--devui-list-item-hover-text, #000000);devui-list-item-selected-bg:var(--devui-list-item-selected-bg, #cedefd);devui-list-item-strip-bg:var(--devui-list-item-strip-bg, #e6eeff);devui-disabled-bg:var(--devui-disabled-bg, #f3f3f3);devui-disabled-line:var(--devui-disabled-line, #e6e6e6);devui-disabled-text:var(--devui-disabled-text, #c2c2c2);devui-primary-disabled:var(--devui-primary-disabled, #9dbdfc);devui-icon-fill-active-disabled:var(--devui-icon-fill-active-disabled, #9dbdfc);devui-label-bg:var(--devui-label-bg, #f0f0f0);devui-connected-overlay-bg:var(--devui-connected-overlay-bg, #ffffff);devui-connected-overlay-line:var(--devui-connected-overlay-line, #0950de);devui-fullscreen-overlay-bg:var(--devui-fullscreen-overlay-bg, #ffffff);devui-feedback-overlay-bg:var(--devui-feedback-overlay-bg, #333333);devui-feedback-overlay-text:var(--devui-feedback-overlay-text, #f0f0f0);devui-embed-search-bg:var(--devui-embed-search-bg, #f2f2f3);devui-embed-search-bg-hover:var(--devui-embed-search-bg-hover, #f5f5f5);devui-float-block-shadow:var(--devui-float-block-shadow, rgba(94, 124, 224, .3));devui-highlight-overlay:var(--devui-highlight-overlay, rgba(255, 255, 255, .8));devui-range-item-hover-bg:var(--devui-range-item-hover-bg, #cedefd);devui-gray-form-control-bg:var(--devui-gray-form-control-bg, #f5f5f5);devui-gray-form-control-hover-bg:var(--devui-gray-form-control-hover-bg, #dfdfdf);devui-nav-expand-bg:var(--devui-nav-expand-bg, #fbfbfc);devui-primary:var(--devui-primary, #0a59f7);devui-primary-hover:var(--devui-primary-hover, #3979f9);devui-primary-active:var(--devui-primary-active, #00196b);devui-contrast-hover:var(--devui-contrast-hover, #cc272a);devui-contrast-active:var(--devui-contrast-active, #78080e);devui-danger-line:var(--devui-danger-line, #e02128);devui-danger-bg:var(--devui-danger-bg, #fabdc1);devui-danger-text:var(--devui-danger-text, #850f12);devui-warning-line:var(--devui-warning-line, #f4840c);devui-warning-bg:var(--devui-warning-bg, #fde2bd);devui-warning-text:var(--devui-warning-text, #c76207);devui-info-line:var(--devui-info-line, #0a59f7);devui-info-bg:var(--devui-info-bg, #cedefd);devui-success-line:var(--devui-success-line, #09aa71);devui-success-bg:var(--devui-success-bg, #bcf2db);devui-success-text:var(--devui-success-text, #036142);devui-primary-line:var(--devui-primary-line, #0a59f7);devui-primary-bg:var(--devui-primary-bg, #e6eeff);devui-default-line:var(--devui-default-line, #0a59f7);devui-default-bg:var(--devui-default-bg, #fafafa);devui-animation-ease-in-smooth:var(--devui-animation-ease-in-smooth, cubic-bezier(.645, .045, .355, 1));devui-animation-duration-slow:var(--devui-animation-duration-slow, .3s);devui-animation-duration-base:var(--devui-animation-duration-base, .2s);devui-animation-duration-fast:var(--devui-animation-duration-fast, .1s);devui-animation-ease-in:var(--devui-animation-ease-in, cubic-bezier(.5, 0, .84, .25));devui-animation-ease-out:var(--devui-animation-ease-out, cubic-bezier(.16, .75, .5, 1));devui-animation-ease-in-out:var(--devui-animation-ease-in-out, cubic-bezier(.5, .05, .5, .95));devui-animation-ease-in-out-smooth:var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1));devui-animation-linear:var(--devui-animation-linear, cubic-bezier(0, 0, 1, 1));devui-border-radius:var(--devui-border-radius, 2px);devui-border-radius-feedback:var(--devui-border-radius-feedback, 4px);devui-border-radius-card:var(--devui-border-radius-card, 6px);devui-border-radius-full:var(--devui-border-radius-full, 100px);devui-font-size:var(--devui-font-size, 12px);devui-font-size-card-title:var(--devui-font-size-card-title, 14px);devui-font-size-page-title:var(--devui-font-size-page-title, 16px);devui-font-size-modal-title:var(--devui-font-size-modal-title, 18px);devui-font-size-price:var(--devui-font-size-price, 20px);devui-font-size-data-overview:var(--devui-font-size-data-overview, 24px);devui-font-size-h1-title:var(--devui-font-size-h1-title, 28px);devui-font-size-h2-title:var(--devui-font-size-h2-title, 24px);devui-font-size-h3-title:var(--devui-font-size-h3-title, 20px);devui-font-size-h4-title:var(--devui-font-size-h4-title, 18px);devui-font-size-h5-title:var(--devui-font-size-h5-title, 16px);devui-font-size-icon:var(--devui-font-size-icon, 16px);devui-font-size-sm:var(--devui-font-size-sm, 12px);devui-font-size-md:var(--devui-font-size-md, 12px);devui-font-size-lg:var(--devui-font-size-lg, 14px);devui-font-title-weight:var(--devui-font-title-weight, bold);devui-font-content-weight:var(--devui-font-content-weight, normal);devui-line-height-base:var(--devui-line-height-base, 1.5);devui-shadow-length-base:var(--devui-shadow-length-base, 0 1px 6px 0);devui-shadow-length-slide-left:var(--devui-shadow-length-slide-left, -2px 0 8px 0);devui-shadow-length-slide-right:var(--devui-shadow-length-slide-right, 2px 0 8px 0);devui-shadow-length-connected-overlay:var(--devui-shadow-length-connected-overlay, 0 4px 12px 0);devui-shadow-length-hover:var(--devui-shadow-length-hover, 0 8px 24px 0);devui-shadow-length-feedback-overlay:var(--devui-shadow-length-feedback-overlay, 0 8px 24px 0);devui-shadow-length-fullscreen-overlay:var(--devui-shadow-length-fullscreen-overlay, 0 16px 48px 0);devui-z-index-full-page-overlay:var(--devui-z-index-full-page-overlay, 1080);devui-z-index-pop-up:var(--devui-z-index-pop-up, 1060);devui-z-index-dropdown:var(--devui-z-index-dropdown, 1052);devui-z-index-modal:var(--devui-z-index-modal, 1050);devui-z-index-drawer:var(--devui-z-index-drawer, 1040);devui-z-index-framework:var(--devui-z-index-framework, 1000)}.puzzle-type[_ngcontent-%COMP%]{height:0;float:left}.card-container[_ngcontent-%COMP%]{margin-top:32px;display:flex;flex-wrap:wrap;flex-direction:row;align-content:center;justify-content:center}.card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{width:320px;margin:8px}.card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{cursor:pointer;font-size:var(--devui-font-size-icon, 16px);margin-right:8px;vertical-align:middle}.card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{vertical-align:middle}.card-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]{margin-right:16px}"]})}}return t})()}];let F=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[h.iI.forChild(j),h.iI]})}}return t})(),O=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[z,v.Dw,c.jr,M.G,L.Y,F]})}}return t})()}}]);