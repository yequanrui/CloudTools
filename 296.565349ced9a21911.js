"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[296],{1296:(j,g,a)=>{a.r(g),a.d(g,{TranscodingModule:()=>Y});var h=a(2547),m=a(7775),C=a(736),c=a(8493),v=a(6866),p=a(5020),l=a(6497),b=a(7649),F=a(4406),f=a(959),e=a(3529),T=a(6006),u=a(6881),x=a(973);const I=()=>[0,8],R=()=>({height:"100%"}),G=()=>({height:"50%"}),N=()=>[8,8];function S(o,d){if(1&o&&e.nrm(0,"d-tab",13),2&o){const t=d.$implicit;e.Y8G("id",t.id)("title",t.title)}}function y(o,d){if(1&o){const t=e.RV6();e.j41(0,"d-radio",16),e.mxI("ngModelChange",function(n){e.eBV(t);const s=e.XpG(2);return e.DH7(s.urlRadio,n)||(s.urlRadio=n),e.Njj(n)}),e.EFF(1),e.k0s()}if(2&o){const t=d.$implicit,i=e.XpG(2);e.xc7("margin-bottom",20,"px"),e.R50("ngModel",i.urlRadio),e.Y8G("value",t)("content",t.title)("controlled",!0),e.R7$(),e.SpI(" ",t.name," ")}}function U(o,d){if(1&o&&(e.j41(0,"div",14),e.DNE(1,y,2,7,"d-radio",15),e.k0s()),2&o){const t=e.XpG();e.Y8G("dGutter",e.lJ4(2,N)),e.R7$(),e.Y8G("ngForOf",t.urlRadios)}}function M(o,d){if(1&o&&(e.j41(0,"div"),e.nrm(1,"d-checkbox",17),e.k0s()),2&o){const t=e.XpG();e.R7$(),e.Y8G("label","\u4e0d\u8f6c\u6362\u5b57\u6bcd\u548c\u6570\u5b57")("isShowTitle",!1)("ngModel",t.ignoreLetter)}}const $=[{path:"",component:(()=>{class o{constructor(){this.customSource="\u8fd9\u662f\u4e00\u4e2a\u4f8b\u5b50,this is a example",this.tabs=[{title:"URL\u8f6c\u7801",sourceName:"URL",sourceValue:location.href,targetName:"\u7f16\u7801\u7ed3\u679c"},{title:"Base64",sourceName:"\u539f\u6587",sourceValue:this.customSource,targetName:"\u7f16\u7801\u7ed3\u679c"},{title:"Native/Unicode",sourceName:"Native",sourceValue:this.customSource,targetName:"Unicode"},{title:"Native/UTF-8",sourceName:"Native",sourceValue:this.customSource,targetName:"UTF-8"},{title:"Native/ASCII",sourceName:"Native",sourceValue:this.customSource,targetName:"ASCII"}],this.source="",this.target="",this.urlRadios=[{name:"encodeURI",title:"\u4f7f\u7528JavaScript encodeURI()\u51fd\u6570\uff0c\u7528\u4e8e\u5b8c\u6574\u7684URL\u7f16\u7801\u3002"},{name:"encodeURIComponent",title:"\u4f7f\u7528JavaScript encodeURIComponent()\u51fd\u6570\uff0c\u7528\u4e8e\u62fc\u63a5URL\u7684\u53c2\u6570\u3002"}],this.urlRadio=this.urlRadios[0],this.ignoreLetter=!0,this.tabs.forEach((t,i)=>{t.id=i}),this.activeTabChange(0)}ngOnInit(){}activeTabChange(t){this.activeTab=this.tabs[t],this.source=this.activeTab.sourceValue,this.target=""}encode(){switch(this.activeTab.id){case 0:this.target="encodeURI"===this.urlRadio.name?encodeURI(this.source):encodeURIComponent(this.source);break;case 1:this.target=window.btoa(unescape(encodeURIComponent(this.source)));break;case 2:this.native2Unicode();break;case 3:this.target=this.source.replace(/[^\u0000-\u00FF]/g,t=>escape(t).replace(/(%u)(\w{4})/gi,"&#x$2;"));break;case 4:this.native2Ascii()}}decode(){switch(this.activeTab.id){case 0:this.source="encodeURI"===this.urlRadio.name?decodeURI(this.target):decodeURIComponent(this.target);break;case 1:this.source=decodeURIComponent(escape(window.atob(this.target)));break;case 2:this.unicode2Native();break;case 3:this.source=unescape(this.target.replace(/&#x/g,"%u").replace(/;/g,""));break;case 4:this.ascii2Native()}}native2Unicode(){this.target="";for(let t=0;t<this.source.length;t++)this.target+=`&#${this.source.charCodeAt(t)};`}unicode2Native(){const t=this.target.match(/&#(\d+);/g);if(t){this.source="";for(let i=0;i<t.length;i++)this.source+=String.fromCharCode(Number(t[i].replace(/[&#;]/g,"")))}}native2Ascii(){const t=this.source.split("");let i="";for(let n=0;n<t.length;n++){const s=Number(t[n].charCodeAt(0));if(!this.ignoreLetter||s>127){let r=s.toString(16);r=new String("0000").substring(r.length,4)+r,i+=`\\u${r}`}else i+=t[n]}this.target=i}ascii2Native(){const t=this.target.split("\\u");let i=t[0];for(let n=1;n<t.length;n++){const s=t[n];i+=String.fromCharCode(parseInt(`0x${s.substring(0,4)}`)),s.length>4&&(i+=s.substring(4,s.length))}this.source=i}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["transcoding"]],decls:23,vars:44,consts:[[3,"dFlex","dFlexContainer","dAlign","dGutter","dStyle"],["type","info",3,"closeable","showIcon"],["type","tabs",3,"activeTabChange","showContent","activeTab"],[3,"id","title",4,"ngFor","ngForOf"],[3,"dFlex"],[3,"dFlex","dFlexContainer","dJustify","dStyle"],["dTextarea","",3,"ngModelChange","placeholder","ngModel"],[3,"dFlex","dFlexContainer","dAlign","dJustify"],[3,"dGutter",4,"ngIf"],[4,"ngIf"],[3,"dFlex","dFlexContainer","dAlign","dJustify","dStyle"],["icon","icon-arrow-right","bsStyle","primary","bsSize","xs","shape","circle",3,"btnClick"],["icon","icon-arrow-left","bsStyle","primary","bsSize","xs","shape","circle",3,"btnClick"],[3,"id","title"],[3,"dGutter"],["name","url-radio","dPopover","","trigger","hover",3,"margin-bottom","ngModel","value","content","controlled","ngModelChange",4,"ngFor","ngForOf"],["name","url-radio","dPopover","","trigger","hover",3,"ngModelChange","ngModel","value","content","controlled"],[3,"label","isShowTitle","ngModel"]],template:function(i,n){1&i&&(e.j41(0,"d-row",0)(1,"d-col")(2,"d-alert",1),e.EFF(3),e.nI1(4,"translate"),e.k0s()(),e.j41(5,"d-col")(6,"d-tabs",2),e.bIt("activeTabChange",function(r){return n.activeTabChange(r)}),e.DNE(7,S,1,2,"d-tab",3),e.k0s()(),e.j41(8,"d-col",4)(9,"d-row",5)(10,"d-col",4)(11,"textarea",6),e.mxI("ngModelChange",function(r){return e.DH7(n.source,r)||(n.source=r),r}),e.EFF(12,"        "),e.k0s()(),e.j41(13,"d-col",4)(14,"d-row",7),e.DNE(15,U,2,3,"div",8)(16,M,2,3,"div",9),e.k0s(),e.j41(17,"d-row",10)(18,"d-button",11),e.bIt("btnClick",function(){return n.encode()}),e.k0s(),e.j41(19,"d-button",12),e.bIt("btnClick",function(){return n.decode()}),e.k0s()()(),e.j41(20,"d-col",4)(21,"textarea",6),e.mxI("ngModelChange",function(r){return e.DH7(n.target,r)||(n.target=r),r}),e.EFF(22,"        "),e.k0s()()()()()),2&i&&(e.Y8G("dFlex",1)("dFlexContainer","column")("dAlign","stretch")("dGutter",e.lJ4(40,I))("dStyle",e.lJ4(41,R)),e.R7$(2),e.Y8G("closeable",!1)("showIcon",!1),e.R7$(),e.SpI(" ",e.bMT(4,38,"menu.transcoding")," "),e.R7$(3),e.Y8G("showContent",!1)("activeTab",n.activeTab.id),e.R7$(),e.Y8G("ngForOf",n.tabs),e.R7$(),e.Y8G("dFlex",1),e.R7$(),e.Y8G("dFlex",1)("dFlexContainer","row")("dJustify","between")("dStyle",e.lJ4(42,R)),e.R7$(),e.Y8G("dFlex",.43),e.R7$(),e.xc7("height",100,"%"),e.Y8G("placeholder",n.activeTab.sourceName),e.R50("ngModel",n.source),e.R7$(2),e.Y8G("dFlex",.14),e.R7$(),e.Y8G("dFlex",.4)("dFlexContainer","column")("dAlign","center")("dJustify","center"),e.R7$(),e.Y8G("ngIf",0===n.activeTab.id),e.R7$(),e.Y8G("ngIf",4===n.activeTab.id),e.R7$(),e.Y8G("dFlex",.4)("dFlexContainer","column")("dAlign","center")("dJustify","around")("dStyle",e.lJ4(43,G)),e.R7$(3),e.Y8G("dFlex",.43),e.R7$(),e.xc7("height",100,"%"),e.Y8G("placeholder",n.activeTab.targetName),e.R50("ngModel",n.target))},dependencies:[h.Cy,m.Qp,C.$W,c.Z4,c.Re,c.Mj,c.mf,c.$x,v.Hc,p.v2,l.OW,l.je,b.i,T.Sq,T.bT,u.me,u.BC,u.vS,x.D9],encapsulation:2})}return o})()}];let k=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#n=this.\u0275inj=e.G2t({imports:[f.iI.forChild($),f.iI]})}return o})(),Y=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#n=this.\u0275inj=e.G2t({imports:[h.Zi,m.tm,C.a,c.RH,v.k0,p.s7,l.jr,b.N,F.G,k]})}return o})()}}]);