"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[333],{2333:(D,u,r)=>{r.d(u,{Iz:()=>S,ZG:()=>z});var e=r(4650),c=r(6895),f=r(7049),p=r(4006);function _(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.Udp("max-width",t.maxWidth?t.maxWidth:""),e.ekj("devui-max-width-tag",t.maxWidth),e.xp6(1),e.Oqu(t.tag)}}function m(o,i){}const v=function(o){return{tag:o}};function h(o,i){if(1&o&&e.YNc(0,m,0,0,"ng-template",5),2&o){const t=e.oxw();e.Q6J("ngTemplateOutlet",t.customViewTemplate)("ngTemplateOutletContext",e.VKq(2,v,t.tag))}}const b=function(o){return{fill:o}};function C(o,i){if(1&o&&(e.O4$(),e.TgZ(0,"svg",9)(1,"g",10),e._UZ(2,"polygon",11),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(2),e.Q6J("ngStyle",e.VKq(1,b,t.isColorfulTag?t.checked?"#fff":t.customColor:""))}}function w(o,i){1&o&&(e.O4$(),e.TgZ(0,"svg",12)(1,"g",10),e._UZ(2,"path",13),e.qZA()())}const x=function(o){return{"default-button":o}};function M(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"a",6),e.NdJ("click",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.removeTag(a,l.tag))}),e.YNc(1,C,3,3,"svg",7),e.YNc(2,w,3,0,"svg",8),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(3,x,!t.isColorfulTag)),e.xp6(1),e.Q6J("ngIf",t.isColorfulTag),e.xp6(1),e.Q6J("ngIf",!t.isColorfulTag)}}const P=function(o,i,t,n){return{"devui-colorful-tag":o,"devui-selected-tag":i,"devui-deletable-tag":t,"devui-checkable-tag":n}},O=function(o,i,t,n){return{"border-color":o,"background-color":i,color:t,cursor:n}},y=function(o){return{"background-color":o}};let z=(()=>{class o{constructor(){this.labelStyle="",this.customColor="",this.deletable=!1,this.mode="default",this.checked=!1,this.tagDelete=new e.vpe,this.checkedChange=new e.vpe,this.deleteTag=!1,this.colorMap={"blue-w98":"#3383ff","aqua-w98":"#39afcc","olivine-w98":"#2fa898","green-w98":"#4eb15e","yellow-w98":"#b08d1a","orange-w98":"#d47f35","red-w98":"#f66f6a","pink-w98":"#f3689a","purple-w98":"#a97af8"}}get isColorfulTag(){return!!(this.colorMap[this.labelStyle]||this.customColor&&""!==this.customColor)}removeTag(t,n){this.deleteTag=!0,this.tagDelete.emit({tag:n,event:t})}tagClick(){"checkable"===this.mode&&(this.checked=!this.checked,this.checkedChange.emit(this.checked))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["d-tag"]],inputs:{tag:"tag",labelStyle:"labelStyle",customColor:"customColor",deletable:"deletable",titleContent:"titleContent",mode:"mode",checked:"checked",maxWidth:"maxWidth",customViewTemplate:"customViewTemplate"},outputs:{tagDelete:"tagDelete",checkedChange:"checkedChange"},exportAs:["Tag"],decls:5,vars:24,consts:[[3,"ngClass","ngStyle","title","click"],[1,"content-wrapper",3,"ngStyle"],[3,"devui-max-width-tag","maxWidth",4,"ngIf"],[4,"ngIf"],["class","remove-button",3,"ngClass","click",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"remove-button",3,"ngClass","click"],["width","12px","height","12px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["width","12px","height","12px","viewBox","0 0 12 12","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["width","12px","height","12px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["fill","#293040","fill-rule","nonzero","points","8 6.58578644 12.2426407 2.34314575 13.6568542 3.75735931 9.41421356 8 13.6568542 12.2426407 12.2426407 13.6568542 8 9.41421356 3.75735931 13.6568542 2.34314575 12.2426407 6.58578644 8 2.34314575 3.75735931 3.75735931 2.34314575",3,"ngStyle"],["width","12px","height","12px","viewBox","0 0 12 12","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["d","M8.86785321,3.13214679 C9.02624037,3.29053395 9.02624037,3.54733027 8.86785321,3.70571743 L6.573,6 L8.86785321,8.29428257 C9.02624037,8.45266973 9.02624037,8.70946605 8.86785321,8.86785321 C8.70946605,9.02624037 8.45266973,9.02624037 8.29428257,8.86785321 L6,6.573 L3.70571743,8.86785321 C3.54733027,9.02624037 3.29053395,9.02624037 3.13214679,8.86785321 C2.97375963,8.70946605 2.97375963,8.45266973 3.13214679,8.29428257 L5.427,6 L3.13214679,3.70571743 C2.97375963,3.54733027 2.97375963,3.29053395 3.13214679,3.13214679 C3.29053395,2.97375963 3.54733027,2.97375963 3.70571743,3.13214679 L6,5.427 L8.29428257,3.13214679 C8.45266973,2.97375963 8.70946605,2.97375963 8.86785321,3.13214679 Z","fill-rule","nonzero"]],template:function(t,n){1&t&&(e.TgZ(0,"span",0),e.NdJ("click",function(){return n.tagClick()}),e._UZ(1,"div",1),e.YNc(2,_,2,5,"span",2),e.YNc(3,h,1,4,null,3),e.YNc(4,M,3,5,"a",4),e.qZA()),2&t&&(e.Gre("devui-tag-item ",n.labelStyle,""),e.Udp("display",n.deleteTag?"none":"block"),e.s9C("title",n.titleContent?n.titleContent:n.tag),e.Q6J("ngClass",e.l5B(12,P,n.isColorfulTag,n.checked,"closeable"===n.mode||n.deletable,"checkable"===n.mode))("ngStyle",e.l5B(17,O,n.customColor,n.isColorfulTag&&n.checked?n.customColor:"",n.isColorfulTag?n.checked?"#fff":n.customColor:"","checkable"===n.mode?"pointer":"")),e.xp6(1),e.Q6J("ngStyle",e.VKq(22,y,n.colorMap[n.labelStyle]||n.customColor)),e.xp6(1),e.Q6J("ngIf",!n.customViewTemplate),e.xp6(1),e.Q6J("ngIf",n.customViewTemplate),e.xp6(1),e.Q6J("ngIf","closeable"===n.mode||n.deletable))},dependencies:[c.mk,c.O5,c.tP,c.PC],styles:[".devui-font-size-base[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size, 12px)}.devui-font-base[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size, 12px);font-weight:400;line-height:1.5}.devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:18px;font-size:var(--devui-font-size-modal-title, 18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-size:18px;font-size:var(--devui-font-size-modal-title, 18px);font-weight:700;line-height:1.5}.devui-font-size-page-title[_ngcontent-%COMP%]{font-size:16px;font-size:var(--devui-font-size-page-title, 16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-size:16px;font-size:var(--devui-font-size-page-title, 16px);font-weight:700;line-height:1.5}.devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:14px;font-size:var(--devui-font-size-card-title, 14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-size:14px;font-size:var(--devui-font-size-card-title, 14px);font-weight:700;line-height:1.5}[_nghost-%COMP%]{display:inline-block;position:relative}.devui-tag-item[_ngcontent-%COMP%]{padding:0 8px;min-height:20px;font-size:12px;font-size:var(--devui-font-size, 12px);line-height:20px;color:#71757f;color:var(--devui-aide-text, #71757f);background-color:#e9edfa;background-color:var(--devui-label-bg, #e9edfa);border-radius:2px;border-radius:var(--devui-border-radius, 2px);border-width:0;border-style:solid;border-color:inherit;display:block;align-items:center;position:relative;cursor:default}.devui-tag-item[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{pointer-events:none;position:absolute;width:100%;height:100%;border:1px solid transparent;top:0;left:0;opacity:0}.devui-tag-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:0}.devui-tag-item[_ngcontent-%COMP%]:hover:not(.devui-colorful-tag):not(.devui-selected-tag).devui-checkable-tag{color:#252b3a;color:var(--devui-aide-text-hover, #252b3a)}.devui-tag-item[_ngcontent-%COMP%]:hover:not(.devui-colorful-tag):not(.devui-selected-tag).devui-checkable-tag   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#7693f5;fill:var(--devui-brand-hover, #7693f5)}.devui-tag-item[_ngcontent-%COMP%]:hover.devui-checkable-tag   .content-wrapper[_ngcontent-%COMP%]{opacity:.08}.devui-tag-item.devui-selected-tag[_ngcontent-%COMP%]{color:#252b3a;color:var(--devui-aide-text-hover, #252b3a)}.devui-tag-item.devui-selected-tag[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#526ecc;fill:var(--devui-brand-active, #526ecc)}.devui-tag-item[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{margin-left:12px;font-size:16px;font-size:var(--devui-font-size-icon, 16px);cursor:pointer;width:12px;height:12px;line-height:12px;border-radius:50%;display:inline-block;text-align:center;position:absolute;top:50%;transform:translateY(-50%)}.devui-tag-item[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#71757f;fill:var(--devui-icon-fill, #71757f)}.devui-tag-item[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover{text-decoration:none;font-size:16px;font-size:var(--devui-font-size-icon, 16px)}.devui-tag-item[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%]{margin-left:12px;font-size:16px;font-size:var(--devui-font-size-icon, 16px);cursor:pointer;width:12px;height:12px;line-height:12px;background-color:#d7d8da;background-color:var(--devui-shape-icon-fill, #d7d8da);border-radius:50%;display:inline-block;text-align:center;transition:background-color cubic-bezier(.645,.045,.355,1) .3s;transition:background-color var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1)) var(--devui-animation-duration-slow, .3s)}.devui-tag-item[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff;fill:var(--devui-light-text, #ffffff)}.devui-tag-item[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#babbc0;background-color:var(--devui-shape-icon-fill-hover, #babbc0)}.devui-deletable-tag[_ngcontent-%COMP%]{padding-right:32px}.devui-colorful-tag[_ngcontent-%COMP%]{height:18px;line-height:18px;border-width:1px;background-color:#fff;background-color:var(--devui-base-bg, #ffffff)}.blue-w98[_ngcontent-%COMP%]{color:#0b81f6;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#0b81f6}.blue-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#0b81f6}.blue-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#0b81f6}.aqua-w98[_ngcontent-%COMP%]{color:#39afcc;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#39afcc}.aqua-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#39afcc}.aqua-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#39afcc}.olivine-w98[_ngcontent-%COMP%]{color:#2fa898;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#2fa898}.olivine-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#2fa898}.olivine-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#2fa898}.green-w98[_ngcontent-%COMP%]{color:#4eb15e;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#4eb15e}.green-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#4eb15e}.green-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#4eb15e}.yellow-w98[_ngcontent-%COMP%]{color:#b08d1a;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#b08d1a}.yellow-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#b08d1a}.yellow-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#b08d1a}.orange-w98[_ngcontent-%COMP%]{color:#d47f35;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#d47f35}.orange-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#d47f35}.orange-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#d47f35}.red-w98[_ngcontent-%COMP%]{color:#e05a46;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#e05a46}.red-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#e05a46}.red-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#e05a46}.pink-w98[_ngcontent-%COMP%]{color:#f3689a;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#f3689a}.pink-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#f3689a}.pink-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#f3689a}.purple-w98[_ngcontent-%COMP%]{color:#b05bc1;background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-width:1px;border-color:#b05bc1}.purple-w98[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#b05bc1}.purple-w98.devui-selected-tag[_ngcontent-%COMP%]{background-color:#b05bc1}.devui-selected-tag.devui-colorful-tag[_ngcontent-%COMP%]{color:#fff;color:var(--devui-base-bg, #ffffff)}.devui-selected-tag.devui-colorful-tag[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#fff;fill:var(--devui-base-bg, #ffffff)}.remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:text-top}.devui-tag-item.devui-checkable-tag[_ngcontent-%COMP%]{transition:color .3s cubic-bezier(.645,.045,.355,1),background-color .3s cubic-bezier(.645,.045,.355,1);transition:color var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1)),background-color var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}.devui-tag-item.devui-checkable-tag[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{transition:opacity .3s cubic-bezier(.645,.045,.355,1);transition:opacity var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}.devui-tag-item.devui-checkable-tag[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{transition:fill .3s cubic-bezier(.645,.045,.355,1);transition:fill var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1))}.devui-max-width-tag[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"]}),o})(),S=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,p.u5,f.UU]}),o})()}}]);