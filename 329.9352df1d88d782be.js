"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[329],{6329:(f,c,n)=>{n.r(c),n.d(c,{QrCodeModule:()=>T});var h=n(2714),a=n(612),m=n(5112),C=n(1480),p=n(8898),u=n(2960),t=n(1270),g=n(694),d=n(6648);const q=[{path:"",component:(()=>{class e{constructor(i){this.translate=i,this.qrApi="https://api.qrserver.com/v1/create-qr-code/",this.qrSize=160,this.qrSrc="",this.qrText="",this.btnText=this.translate.instant("qrCode.generate")}generateCode(){this.btnText=this.translate.instant("qrCode.generating"),this.qrSrc=`${this.qrApi}?size=${this.qrSize}x${this.qrSize}&data=${this.qrText}`}loadImg(){this.btnText=this.translate.instant("qrCode.generate")}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(g.c$))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["qr-code"]],decls:16,vars:18,consts:[[1,"qr-code"],[1,"qr-size",3,"ngModelChange","min","max","step","ngModel"],["dTextarea","",3,"ngModelChange","placeholder","ngModel"],[3,"align"],[3,"btnClick","disabled"],[3,"load"]],template:function(o,r){1&o&&(t.j41(0,"d-card",0)(1,"d-card-header")(2,"d-card-title"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"d-card-subtitle"),t.EFF(6),t.nI1(7,"translate"),t.k0s()(),t.j41(8,"d-card-content")(9,"d-input-number",1),t.mxI("ngModelChange",function(s){return t.DH7(r.qrSize,s)||(r.qrSize=s),s}),t.k0s(),t.j41(10,"textarea",2),t.nI1(11,"translate"),t.mxI("ngModelChange",function(s){return t.DH7(r.qrText,s)||(r.qrText=s),s}),t.k0s()(),t.j41(12,"d-card-actions",3)(13,"d-button",4),t.bIt("btnClick",function(){return r.generateCode()}),t.EFF(14),t.k0s(),t.j41(15,"img",5),t.bIt("load",function(){return r.loadImg()}),t.k0s()()()),2&o&&(t.R7$(3),t.JRh(t.bMT(4,12,"menu.qrCode")),t.R7$(3),t.JRh(t.bMT(7,14,"qrCode.remark")),t.R7$(3),t.Y8G("min",80)("max",320)("step",80),t.R50("ngModel",r.qrSize),t.R7$(),t.Y8G("placeholder",t.bMT(11,16,"qrCode.placeholder")),t.R50("ngModel",r.qrText),t.R7$(2),t.Y8G("align","spaceBetween"),t.R7$(),t.Y8G("disabled",!r.qrText),t.R7$(),t.JRh(r.btnText),t.R7$(),t.BMQ("src",r.qrSrc,t.B4B))},dependencies:[h.Qp,a.ib,a.lM,a.Vj,a.wV,a.W6,a.d6,m.n,C.i,d.me,d.BC,d.vS,g.D9],styles:[".qr-code[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.qr-code[_ngcontent-%COMP%]   .qr-size[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}"]})}return e})()}];let M=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[u.iI.forChild(q),u.iI]})}return e})(),T=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[h.tm,a.Dw,m.O,C.N,p.G,M]})}return e})()}}]);