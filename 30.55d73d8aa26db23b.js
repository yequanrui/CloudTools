"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[30],{7030:(Q,u,n)=>{n.r(u),n.d(u,{QrCodeModule:()=>M});var C=n(7150),d=n(6644),c=n(5974),g=n(5303),h=n(7810),m=n(8947),e=n(4650),p=n(9383),l=n(4006);const q=[{path:"",component:(()=>{class t{constructor(o){this.translate=o,this.qrApi="https://api.qrserver.com/v1/create-qr-code/",this.qrSize=160,this.qrSrc="",this.qrText="",this.btnText=this.translate.instant("qrCode.generate")}generateCode(){this.btnText=this.translate.instant("qrCode.generating"),this.qrSrc=`${this.qrApi}?size=${this.qrSize}x${this.qrSize}&data=${this.qrText}`}loadImg(){this.btnText=this.translate.instant("qrCode.generate")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.sK))},t.\u0275cmp=e.Xpm({type:t,selectors:[["qr-code"]],decls:16,vars:18,consts:[[1,"qr-code"],[1,"qr-size",3,"min","max","step","ngModel","ngModelChange"],["dTextarea","",3,"placeholder","ngModel","ngModelChange"],[3,"align"],[3,"disabled","btnClick"],[3,"load"]],template:function(o,r){1&o&&(e.TgZ(0,"d-card",0)(1,"d-card-header")(2,"d-card-title"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"d-card-subtitle"),e._uU(6),e.ALo(7,"translate"),e.qZA()(),e.TgZ(8,"d-card-content")(9,"d-input-number",1),e.NdJ("ngModelChange",function(i){return r.qrSize=i}),e.qZA(),e.TgZ(10,"textarea",2),e.NdJ("ngModelChange",function(i){return r.qrText=i}),e.ALo(11,"translate"),e.qZA()(),e.TgZ(12,"d-card-actions",3)(13,"d-button",4),e.NdJ("btnClick",function(){return r.generateCode()}),e._uU(14),e.qZA(),e.TgZ(15,"img",5),e.NdJ("load",function(){return r.loadImg()}),e.qZA()()()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,12,"menu.qrCode")),e.xp6(3),e.Oqu(e.lcZ(7,14,"qrCode.remark")),e.xp6(3),e.Q6J("min",80)("max",320)("step",80)("ngModel",r.qrSize),e.xp6(1),e.Q6J("placeholder",e.lcZ(11,16,"qrCode.placeholder"))("ngModel",r.qrText),e.xp6(2),e.Q6J("align","spaceBetween"),e.xp6(1),e.Q6J("disabled",!r.qrText),e.xp6(1),e.Oqu(r.btnText),e.xp6(1),e.uIk("src",r.qrSrc,e.LSH))},dependencies:[C.r0,d.Ak,d.nk,d.Ft,d.ge,d.qk,d.Z4,c.l,g.b,l.Fj,l.JJ,l.On,p.X$],styles:[".qr-code[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.qr-code[_ngcontent-%COMP%]   .qr-size[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(q),m.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.hJ,d.dT,c.L,g.J,h.m,T]}),t})()}}]);