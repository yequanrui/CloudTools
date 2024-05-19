"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[454],{1454:(E,u,s)=>{s.d(u,{QD:()=>S,eX:()=>D});var t=s(5306),d=s(63),f=s(1992),h=s(3522);const p=(i,l,e,n)=>({"devui-colorful-tag":i,"devui-selected-tag":l,"devui-deletable-tag":e,"devui-checkable-tag":n}),_=(i,l,e,n)=>({"border-color":i,"background-color":l,color:e,cursor:n}),v=i=>({"background-color":i}),m=i=>({tag:i}),C=i=>({"default-button":i}),b=i=>({fill:i});function w(i,l){if(1&i&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&i){const e=t.XpG();t.xc7("max-width",e.maxWidth?e.maxWidth:""),t.AVh("devui-max-width-tag",e.maxWidth),t.R7$(),t.JRh(e.currentTag)}}function P(i,l){}function x(i,l){if(1&i&&t.DNE(0,P,0,0,"ng-template",5),2&i){const e=t.XpG();t.Y8G("ngTemplateOutlet",e.customViewTemplate)("ngTemplateOutletContext",t.eq3(2,m,e.tag))}}function M(i,l){if(1&i&&(t.qSk(),t.j41(0,"svg",9)(1,"g",10),t.nrm(2,"polygon",11),t.k0s()()),2&i){const e=t.XpG(2);t.R7$(2),t.Y8G("ngStyle",t.eq3(1,b,e.isColorfulTag?e.checked?"#fff":e.customColor:""))}}function O(i,l){1&i&&(t.qSk(),t.j41(0,"svg",12)(1,"g",10),t.nrm(2,"path",13),t.k0s()())}function y(i,l){if(1&i){const e=t.RV6();t.j41(0,"a",6),t.bIt("click",function(o){t.eBV(e);const a=t.XpG();return t.Njj(a.removeTag(o,a.tag))}),t.DNE(1,M,3,3,"svg",7)(2,O,3,0,"svg",8),t.k0s()}if(2&i){const e=t.XpG();t.Y8G("ngClass",t.eq3(3,C,!e.isColorfulTag)),t.R7$(),t.Y8G("ngIf",e.isColorfulTag),t.R7$(),t.Y8G("ngIf",!e.isColorfulTag)}}let D=(()=>{class i{constructor(){this.labelStyle="",this.customColor="",this.deletable=!1,this.mode="default",this.checked=!1,this.tagDelete=new t.bkB,this.checkedChange=new t.bkB,this.deleteTag=!1,this.colorMap={"blue-w98":"#3383ff","aqua-w98":"#39afcc","olivine-w98":"#2fa898","green-w98":"#4eb15e","yellow-w98":"#b08d1a","orange-w98":"#d47f35","red-w98":"#f66f6a","pink-w98":"#f3689a","purple-w98":"#a97af8"}}get isColorfulTag(){return!!(this.colorMap[this.labelStyle]||this.customColor&&""!==this.customColor)}ngOnChanges(e){const{tag:n}=e;n&&(this.currentTag="string"==typeof this.tag?this.tag:"")}removeTag(e,n){this.canDeleteTag(n).then(o=>{o&&(this.deleteTag=!0,this.tagDelete.emit({tag:n,event:e}))})}tagClick(){"checkable"===this.mode&&(this.checked=!this.checked,this.checkedChange.emit(this.checked))}canDeleteTag(e){let n=Promise.resolve(!0);if(this.beforeDelete){const o=this.beforeDelete(e);typeof o<"u"&&(n=o.then?o:o.subscribe?o.toPromise():Promise.resolve(o))}return n}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=t.VBU({type:i,selectors:[["d-tag"]],inputs:{tag:"tag",labelStyle:"labelStyle",customColor:"customColor",deletable:"deletable",titleContent:"titleContent",mode:"mode",checked:"checked",maxWidth:"maxWidth",customViewTemplate:"customViewTemplate",beforeDelete:"beforeDelete"},outputs:{tagDelete:"tagDelete",checkedChange:"checkedChange"},exportAs:["Tag"],features:[t.OA$],decls:5,vars:24,consts:[[3,"click","ngClass","ngStyle","title"],[1,"content-wrapper",3,"ngStyle"],[3,"devui-max-width-tag","maxWidth",4,"ngIf"],[4,"ngIf"],["class","remove-button",3,"ngClass","click",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"remove-button",3,"click","ngClass"],["width","12px","height","12px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["width","12px","height","12px","viewBox","0 0 12 12","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["width","12px","height","12px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["fill","#293040","fill-rule","nonzero","points","8 6.58578644 12.2426407 2.34314575 13.6568542 3.75735931 9.41421356 8 13.6568542 12.2426407 12.2426407 13.6568542 8 9.41421356 3.75735931 13.6568542 2.34314575 12.2426407 6.58578644 8 2.34314575 3.75735931 3.75735931 2.34314575",3,"ngStyle"],["width","12px","height","12px","viewBox","0 0 12 12","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["d","M8.86785321,3.13214679 C9.02624037,3.29053395 9.02624037,3.54733027 8.86785321,3.70571743 L6.573,6 L8.86785321,8.29428257 C9.02624037,8.45266973 9.02624037,8.70946605 8.86785321,8.86785321 C8.70946605,9.02624037 8.45266973,9.02624037 8.29428257,8.86785321 L6,6.573 L3.70571743,8.86785321 C3.54733027,9.02624037 3.29053395,9.02624037 3.13214679,8.86785321 C2.97375963,8.70946605 2.97375963,8.45266973 3.13214679,8.29428257 L5.427,6 L3.13214679,3.70571743 C2.97375963,3.54733027 2.97375963,3.29053395 3.13214679,3.13214679 C3.29053395,2.97375963 3.54733027,2.97375963 3.70571743,3.13214679 L6,5.427 L8.29428257,3.13214679 C8.45266973,2.97375963 8.70946605,2.97375963 8.86785321,3.13214679 Z","fill-rule","nonzero"]],template:function(n,o){1&n&&(t.j41(0,"span",0),t.bIt("click",function(){return o.tagClick()}),t.nrm(1,"div",1),t.DNE(2,w,2,5,"span",2)(3,x,1,4,null,3)(4,y,3,5,"a",4),t.k0s()),2&n&&(t.ZvI("devui-tag-item ",o.labelStyle,""),t.xc7("display",o.deleteTag?"none":"block"),t.FS9("title",o.titleContent?o.titleContent:o.currentTag),t.Y8G("ngClass",t.ziG(12,p,o.isColorfulTag,o.checked,"closeable"===o.mode||o.deletable,"checkable"===o.mode))("ngStyle",t.ziG(17,_,o.customColor,o.isColorfulTag&&o.checked?o.customColor:"",o.isColorfulTag?o.checked?"#fff":o.customColor:"","checkable"===o.mode?"pointer":"")),t.R7$(),t.Y8G("ngStyle",t.eq3(22,v,o.colorMap[o.labelStyle]||o.customColor)),t.R7$(),t.Y8G("ngIf",!o.customViewTemplate),t.R7$(),t.Y8G("ngIf",o.customViewTemplate),t.R7$(),t.Y8G("ngIf","closeable"===o.mode||o.deletable))},dependencies:[d.YU,d.bT,d.T3,d.B3],styles:[".devui-font-size-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px)}.devui-font-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px);font-weight:var(--devui-font-content-weight, normal);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}[_nghost-%COMP%]{display:inline-block;position:relative}.devui-tag-item[_ngcontent-%COMP%]{padding:0 8px;min-height:20px;font-size:var(--devui-font-size, 12px);line-height:20px;color:var(--devui-aide-text, #71757f);background-color:var(--devui-label-bg, #e9edfa);border-radius:var(--devui-border-radius, 2px);border-width:0;border-style:solid;border-color:inherit;display:block;align-items:center;position:relative;cursor:default}.devui-tag-item[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{pointer-events:none;position:absolute;width:100%;height:100%;border:1px solid transparent;top:0;left:0;opacity:0}.devui-tag-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:0}.devui-tag-item[_ngcontent-%COMP%]:hover:not(.devui-colorful-tag):not(.devui-selected-tag).devui-checkable-tag{color:var(--devui-aide-text-hover, #252b3a)}.devui-tag-item[_ngcontent-%COMP%]:hover:not(.devui-colorful-tag):not(.devui-selected-tag).devui-checkable-tag   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--devui-brand-hover, #7693f5)}.devui-tag-item[_ngcontent-%COMP%]:hover.devui-checkable-tag   .content-wrapper[_ngcontent-%COMP%]{opacity:.08}.devui-tag-item.devui-selected-tag[_ngcontent-%COMP%]{color:var(--devui-aide-text-hover, #252b3a)}.devui-tag-item.devui-selected-tag[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--devui-brand-active, #526ecc)}.devui-tag-item[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{margin-left:12px;font-size:var(--devui-font-size-icon, 16px);cursor:pointer;width:12px;height:12px;line-height:12px;border-radius:50%;display:inline-block;text-align:center;position:absolute;top:50%;transform:translateY(-50%)}.devui-tag-item[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--devui-icon-fill, #71757f)}.devui-tag-item[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover{text-decoration:none;font-size:var(--devui-font-size-icon, 16px)}.devui-tag-item[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%]{margin-left:12px;font-size:var(--devui-font-size-icon, 16px);cursor:pointer;width:12px;height:12px;line-height:12px;background-color:var(--devui-shape-icon-fill, #d7d8da);border-radius:50%;display:inline-block;text-align:center;transition:background-color var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1)) var(--devui-animation-duration-slow, .3s)}.devui-tag-item[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-light-text, #ffffff)}.devui-tag-item[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:var(--devui-shape-icon-fill-hover, #babbc0)}.devui-deletable-tag[_ngcontent-%COMP%]{padding-right:32px}.devui-colorful-tag[_ngcontent-%COMP%]{height:18px;line-height:18px;border-width:1px;background-color:var(--devui-base-bg, #ffffff)}.blue-w98[_ngcontent-%COMP%]{color:#0b81f6;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#0b81f6}.blue-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#0b81f6}.blue-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#0b81f6}.aqua-w98[_ngcontent-%COMP%]{color:#39afcc;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#39afcc}.aqua-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#39afcc}.aqua-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#39afcc}.olivine-w98[_ngcontent-%COMP%]{color:#2fa898;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#2fa898}.olivine-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#2fa898}.olivine-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#2fa898}.green-w98[_ngcontent-%COMP%]{color:#4eb15e;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#4eb15e}.green-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#4eb15e}.green-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#4eb15e}.yellow-w98[_ngcontent-%COMP%]{color:#b08d1a;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#b08d1a}.yellow-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#b08d1a}.yellow-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#b08d1a}.orange-w98[_ngcontent-%COMP%]{color:#d47f35;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#d47f35}.orange-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#d47f35}.orange-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#d47f35}.red-w98[_ngcontent-%COMP%]{color:#e05a46;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#e05a46}.red-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#e05a46}.red-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#e05a46}.pink-w98[_ngcontent-%COMP%]{color:#f3689a;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#f3689a}.pink-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#f3689a}.pink-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#f3689a}.purple-w98[_ngcontent-%COMP%]{color:#b05bc1;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#b05bc1}.purple-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#b05bc1}.purple-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#b05bc1}.devui-selected-tag.devui-colorful-tag[_ngcontent-%COMP%]{color:var(--devui-base-bg, #ffffff)}.devui-selected-tag.devui-colorful-tag[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--devui-base-bg, #ffffff)}.remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:text-top}.devui-tag-item.devui-checkable-tag[_ngcontent-%COMP%]{transition:color var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1)),background-color var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}.devui-tag-item.devui-checkable-tag[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{transition:opacity var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}.devui-tag-item.devui-checkable-tag[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{transition:fill var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}.devui-max-width-tag[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"]})}return i})(),S=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=t.$C({type:i});static#n=this.\u0275inj=t.G2t({imports:[d.MD,h.YN,f.k0]})}return i})()}}]);