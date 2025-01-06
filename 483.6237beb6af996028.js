"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[483],{7483:(P,f,u)=>{u.d(f,{O:()=>x,n:()=>m});var r=u(3422),c=u(6627),i=u(1414),b=u(754),h=u(8884),p=u(624);const v=["incButton"],_=["decButton"],C=["inputElement"],M=(a,g,t,n)=>({disabled:a,"devui-input-number-lg":g,"devui-input-number-sm":t,"devui-gray-style":n}),d=a=>({disabled:a}),O=(a,g,t)=>({"devui-input-number-lg":a,"devui-input-number-sm":g,"devui-gray-style":t}),w={provide:b.kq,useExisting:(0,i.Rfq)(()=>m),multi:!0};let m=(()=>{class a{get hasGlowStyle(){return this.showGlowStyle}set min(t){(t||0===t)&&(this._min=t)}get min(){return this._min}set max(t){(t||0===t)&&(this._max=t)}get max(){return this._max}constructor(t,n,e,s,o){this.cdr=t,this.devConfigService=n,this.el=e,this.renderer=s,this.doc=o,this.step=1,this.disabled=!1,this.size="",this.autoFocus=!1,this.allowEmpty=!1,this.placeholder="",this.maxLength=0,this.styleType="default",this.showGlowStyle=!0,this.afterValueChanged=new i.bkB,this.whileValueChanging=new i.bkB,this._min=Number.MIN_SAFE_INTEGER,this._max=Number.MAX_SAFE_INTEGER,this.disabledInc=!1,this.disabledDec=!1,this.onTouchedCallback=()=>{},this.onChangeCallback=l=>{},this.increaseValue=()=>{this.inDecreaseValue("increase")},this.decreaseValue=()=>{this.inDecreaseValue("decrease")},this.document=this.doc}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this.disabled=t,this.toggleDisabled(t)}writeValue(t){this.lastEmittedValue=t,this.setValue(this.ensureValueInRange(t))}valueMustBeValid(t){return!isNaN("number"!=typeof t?parseFloat(t):t)}clamp(t,n,e){let s=void 0!==e?Math.min(n,e):n;return s=void 0!==t?Math.max(t,s):s,s}ensureValueInRange(t){let n;if(this.allowEmpty&&null==t)n=null;else if(this.valueMustBeValid(t)){let e=t;t||(e=0),n=this.clamp(this.min,e,this.max)}else n=0;return n}setValue(t){this.value=t,this.lastValue=t,this.allowEmpty&&null===t?(this.subscribeDecAction(),this.subscribeIncAction()):(this.canDecrease()?this.subscribeDecAction():this.unsubscribeDecAction(),this.canIncrease()?this.subscribeIncAction():this.unsubscribeIncAction()),this.renderer.setProperty(this.inputElement.nativeElement,"value",t),this.disabledDec=this.value===this.min,this.disabledInc=this.value===this.max,this.cdr.detectChanges()}ngAfterViewInit(){this.registerListeners(),this.subscribeActions(),setTimeout(()=>{this.toggleDisabled(this.disabled),this.disabled||this.autoFocus&&(this.el.nativeElement.click(),this.inputElement.nativeElement.focus())})}ngOnChanges(t){(Object.prototype.hasOwnProperty.call(t,"min")||Object.prototype.hasOwnProperty.call(t,"max"))&&(this.checkRangeValues(this.min,this.max),this.value<this.min?this.setValue(this.min):this.value>this.max&&this.setValue(this.max))}ngOnDestroy(){this.unsubscribeActions()}registerListeners(){this.incButton&&this.incButton.nativeElement&&(this.incListener=(0,p.R)(this.incButton.nativeElement,"click")),this.decButton&&this.decButton.nativeElement&&(this.decListener=(0,p.R)(this.decButton.nativeElement,"click"))}subscribeActions(){this.subscribeIncAction(),this.subscribeDecAction()}subscribeIncAction(){this.incListener&&!this.incAction&&(this.incAction=this.incListener.subscribe(this.increaseValue))}subscribeDecAction(){this.decListener&&!this.decAction&&(this.decAction=this.decListener.subscribe(this.decreaseValue))}unsubscribeActions(){this.unsubscribeIncAction(),this.unsubscribeDecAction()}unsubscribeIncAction(){this.incListener&&this.incAction&&(this.incAction.unsubscribe(),this.incAction=null,this.disabledInc=!0)}unsubscribeDecAction(){this.incListener&&this.decAction&&(this.decAction.unsubscribe(),this.decAction=null,this.disabledDec=!0)}inDecreaseValue(t){if("increase"===t?this.canIncrease():this.canDecrease()){if(this.allowEmpty&&null==this.value)this.updateValue(0);else{const e=this.getMaxDecimals(this.value),s="increase"===t?this.value+this.step:this.value-this.step;if(this.matchReg(String(s))){let o;o=s<0?Math.ceil(s*+`1e+${e}`-1e-12)/+`1e+${e}`:Math.floor(s*+`1e+${e}`+1e-12)/+`1e+${e}`,this.updateValue(o)}}this.inputElement.nativeElement.focus()}}matchReg(t){return!(this.reg&&!t.match(new RegExp(this.reg)))}canIncrease(){return this.allowEmpty&&null==this.value?this.min+this.step<=this.max:this.value+this.step<=this.max}canDecrease(){return this.allowEmpty&&null==this.value?this.min+this.step<=this.max:this.value-this.step>=this.min}toggleDisabled(t){t?this.unsubscribeActions():(this.disabledDec=this.value===this.min,this.disabledInc=this.value===this.max,this.subscribeActions())}ensureValueIsValid(t){if(t.stopPropagation(),this.disabled)return;const n=t.target.value,e=parseFloat(n);let s;s=this.allowEmpty&&""===n?null:isNaN(e)?this.value:e,s=this.ensureValueInRange(s),this.notifyWhileValueChanging(s),this.updateValue(s);const o=new Event("blur",{bubbles:!1,cancelable:!0});this.el.nativeElement.dispatchEvent(o),this.onTouchedCallback()}checkRangeValues(t,n){if(n<t)throw new Error("max value must be greater than or equal to min value")}getDecimals(t){const n=t.toString(),e=n.indexOf(".")+1;return n.length-e}getMaxDecimals(t){const n=this.getDecimals(this.step),e=this.getDecimals(t);return t?null!=this.decimalLimit?this.decimalLimit:Math.max(e,n):n}handleKeyDown(t){this.handleBackspace(t),this.keyBoardControl(t)}protectInput(t){if(this.disabled)return;const n=t.target;let s,e=n.value,o=n.selectionStart,l=n.selectionEnd;if(t.clipboardData)s=t.clipboardData.getData("text"),e=e.substring(0,o)+s+e.substring(l),t.preventDefault();else{if(s=t.data,null==s)return;o-=s.length,l-=s.length}if(this.maxLength&&e.length>this.maxLength)this.setValue(this.lastValue);else if(this.matchReg(e)){if(!("-"===e||e.match(/^\s*(-|\+)?\d+\.$/)||e.match(/^\s*(-|\+)?\d+\.[0-9]*0$/)||e.match(/^\s*(-|\+)0+$/)))if(e.match(/^\s*(-|\+)?(\d+|(\d*(\.\d*)))$/)){if(null!=this.decimalLimit&&(e=e<0?Math.ceil(e*+`1e+${this.decimalLimit}`-1e-12)/+`1e+${this.decimalLimit}`:Math.floor(e*+`1e+${this.decimalLimit}`+1e-12)/+`1e+${this.decimalLimit}`),e=parseFloat(e),!isNaN(e))return this.setValue(e),this.notifyWhileValueChanging(e),void(null!==s&&setTimeout(()=>{n.setSelectionRange(o+s.length,o+s.length)},0))}else this.setValue(e.slice(0,e.length-1)),setTimeout(()=>{n.setSelectionRange(o,o)},0)}else this.setValue(this.lastValue)}notifyValueChange(){this.afterValueChanged.emit(this.value),this.onChangeCallback(this.value)}notifyWhileValueChanging(t){this.whileValueChanging.emit(t)}updateValue(t){this.disabled||(this.setValue(t),this.lastEmittedValue!==t&&(this.lastEmittedValue=t,this.notifyValueChange()))}handleBackspace(t){if("Backspace"===t.key){const n=t.target,e=n.value,o=n.selectionEnd;let l=e.substring(0,n.selectionStart-1)+e.substring(o);"-"!==l&&!l.match(/^\s*(-|\+)?\d+\.$/)&&(l=""===l?null:l,this.notifyWhileValueChanging(l))}}keyBoardControl(t){const n=t.key;"ArrowUp"===n||"Up"===n?(t.preventDefault(),this.increaseValue()):"ArrowDown"===n||"Down"===n?(t.preventDefault(),this.decreaseValue()):"Enter"===n&&this.inputElement.nativeElement.blur()}static#t=this.\u0275fac=function(n){return new(n||a)(i.rXU(i.gRc),i.rXU(h.zh),i.rXU(i.aKT),i.rXU(i.sFG),i.rXU(c.qQ))};static#e=this.\u0275cmp=i.VBU({type:a,selectors:[["d-input-number"]],viewQuery:function(n,e){if(1&n&&(i.GBs(v,7),i.GBs(_,7),i.GBs(C,7)),2&n){let s;i.mGM(s=i.lsd())&&(e.incButton=s.first),i.mGM(s=i.lsd())&&(e.decButton=s.first),i.mGM(s=i.lsd())&&(e.inputElement=s.first)}},hostVars:2,hostBindings:function(n,e){2&n&&i.AVh("devui-glow-style",e.hasGlowStyle)},inputs:{step:"step",disabled:"disabled",size:"size",decimalLimit:"decimalLimit",autoFocus:"autoFocus",allowEmpty:"allowEmpty",placeholder:"placeholder",maxLength:"maxLength",reg:"reg",styleType:"styleType",showGlowStyle:"showGlowStyle",min:"min",max:"max"},outputs:{afterValueChanged:"afterValueChanged",whileValueChanging:"whileValueChanging"},features:[i.Jv_([w]),i.OA$],decls:14,vars:22,consts:[["incButton",""],["decButton",""],["inputElement",""],[1,"input-control-buttons",3,"ngClass"],[1,"input-control-button","input-control-inc",3,"ngClass"],["width","1em","height","1em","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-svg-icon-arrow"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["d","M12.1464466,6.85355339 L8.35355339,10.6464466 C8.15829124,10.8417088 7.84170876,10.8417088 7.64644661,10.6464466 L3.85355339,6.85355339 C3.65829124,6.65829124 3.65829124,6.34170876 3.85355339,6.14644661 C3.94732158,6.05267842 4.07449854,6 4.20710678,6 L11.7928932,6 C12.0690356,6 12.2928932,6.22385763 12.2928932,6.5 C12.2928932,6.63260824 12.2402148,6.7597852 12.1464466,6.85355339 Z","fill-rule","nonzero"],[1,"input-control-button","input-control-dec",3,"ngClass"],[1,"input-container",3,"ngClass"],[1,"input-box","devui-input",3,"keydown","input","blur","paste","ngClass","placeholder"]],template:function(n,e){if(1&n){const s=i.RV6();i.j41(0,"div",3)(1,"span",4,0),i.qSk(),i.j41(3,"svg",5)(4,"g",6),i.nrm(5,"path",7),i.k0s()()(),i.joV(),i.j41(6,"span",8,1),i.qSk(),i.j41(8,"svg",5)(9,"g",6),i.nrm(10,"path",7),i.k0s()()()(),i.joV(),i.j41(11,"div",9)(12,"input",10,2),i.bIt("keydown",function(l){return i.eBV(s),i.Njj(e.handleKeyDown(l))})("input",function(l){return i.eBV(s),i.Njj(e.protectInput(l))})("blur",function(l){return i.eBV(s),i.Njj(e.ensureValueIsValid(l))})("paste",function(l){return i.eBV(s),i.Njj(e.protectInput(l))}),i.k0s()()}2&n&&(i.Y8G("ngClass",i.ziG(7,M,e.disabled,"lg"===e.size,"sm"===e.size,"gray"===e.styleType)),i.R7$(),i.Y8G("ngClass",i.eq3(12,d,e.disabledInc)),i.R7$(5),i.Y8G("ngClass",i.eq3(14,d,e.disabledDec)),i.R7$(5),i.Y8G("ngClass",i.sMw(16,O,"lg"===e.size,"sm"===e.size,"gray"===e.styleType)),i.R7$(),i.Y8G("ngClass",i.eq3(20,d,e.disabled))("placeholder",e.placeholder),i.BMQ("readonly",e.disabled?"":null))},dependencies:[c.YU],styles:[".devui-font-size-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px)}.devui-font-base[_ngcontent-%COMP%]{font-size:var(--devui-font-size, 12px);font-weight:var(--devui-font-content-weight, normal);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}.devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-card-title, 14px);font-weight:var(--devui-font-title-weight, bold);line-height:var(--devui-line-height-base, 1.5)}[_nghost-%COMP%]{display:inline-block;position:relative;width:80px}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]:hover   .input-box[_ngcontent-%COMP%]:not(.disabled){padding-right:24px}[_nghost-%COMP%]:hover   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){display:flex}[_nghost-%COMP%]:focus-within   .input-box[_ngcontent-%COMP%]:not(.disabled){border:1px solid var(--devui-form-control-line-active, #0a59f7);padding-right:24px}[_nghost-%COMP%]:focus-within   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){border-color:var(--devui-form-control-line-active, #0a59f7)}[_nghost-%COMP%]:focus-within   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){display:flex}[_nghost-%COMP%]   .input-box[_ngcontent-%COMP%]{box-sizing:border-box;padding:4px 8px;font-size:var(--devui-font-size, 12px);vertical-align:middle;border-radius:var(--devui-border-radius, 2px);outline:none;width:100%;line-height:20px;height:28px;border-width:1px;border-style:solid}[_nghost-%COMP%]   .input-box[_ngcontent-%COMP%]:not(.disabled){background-color:var(--devui-base-bg, #ffffff);border-color:var(--devui-line, #dbdbdb);color:var(--devui-text, #191919)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]{display:none;position:absolute;right:0;width:22px;height:100%;flex-direction:column;justify-content:center;align-items:center;border:1px solid transparent;border-left-color:var(--devui-line, #dbdbdb);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;line-height:100%;border-radius:0 var(--devui-border-radius, 2px) var(--devui-border-radius, 2px) 0}[_nghost-%COMP%]   .input-control-buttons.disabled[_ngcontent-%COMP%]{border-left-color:var(--devui-disabled-line, #e6e6e6)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:50%;line-height:50%;border-width:0 1px;transition:transform var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1));display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button.input-control-inc[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;top:2px;transform:rotate(180deg)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button.input-control-dec[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;bottom:2px}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-text-weak, #333333)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]:not(.disabled):hover > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-icon-fill-active-hover, #000000)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button.disabled[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--devui-disabled-text, #c2c2c2)}.devui-input-number-lg[_ngcontent-%COMP%] > .input-box[_ngcontent-%COMP%]{font-size:var(--devui-font-size-lg, 14px);line-height:24px;height:46px}  .devui-input-number-lg.input-control-buttons .input-control-button .devui-svg-icon-arrow{width:16px;height:16px}.devui-input-number-sm[_ngcontent-%COMP%] > .input-box[_ngcontent-%COMP%]{font-size:var(--devui-font-size-sm, 12px);line-height:18px;height:26px}.devui-input-number-sm[_ngcontent-%COMP%]     .input-control-buttons .input-control-button:first-child .devui-svg-icon-arrow{width:14px;height:14px}.devui-input-number-sm[_ngcontent-%COMP%]     .input-control-buttons .input-control-button:last-child .devui-svg-icon-arrow{width:13px;height:13px;left:0}.input-container[_ngcontent-%COMP%]{line-height:100%}"]})}return(0,r.Cg)([(0,h.H4)(),(0,r.Sn)("design:type",Object)],a.prototype,"styleType",void 0),(0,r.Cg)([(0,h.H4)(),(0,r.Sn)("design:type",Object)],a.prototype,"showGlowStyle",void 0),a})(),x=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=i.$C({type:a});static#i=this.\u0275inj=i.G2t({imports:[c.MD,b.YN]})}return a})()}}]);