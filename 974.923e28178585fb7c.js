"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[974],{5974:(M,g,a)=>{a.d(g,{L:()=>x,l:()=>p});var u=a(6895),n=a(4650),d=a(4006),h=a(4968);const b=["incButton"],f=["decButton"],m=["inputElement"],v=function(o,r,t){return{disabled:o,"devui-input-number-lg":r,"devui-input-number-sm":t}},c=function(o){return{disabled:o}},_=function(o,r){return{"devui-input-number-lg":o,"devui-input-number-sm":r}},C={provide:d.JU,useExisting:(0,n.Gpc)(()=>p),multi:!0};let p=(()=>{class o{constructor(t,e,i,s){this.cdr=t,this.el=e,this.renderer=i,this.doc=s,this.step=1,this.disabled=!1,this.size="",this.autoFocus=!1,this.allowEmpty=!1,this.placeholder="",this.maxLength=0,this.afterValueChanged=new n.vpe,this.whileValueChanging=new n.vpe,this._min=Number.MIN_SAFE_INTEGER,this._max=Number.MAX_SAFE_INTEGER,this.disabledInc=!1,this.disabledDec=!1,this.onTouchedCallback=()=>{},this.onChangeCallback=l=>{},this.document=this.doc}set min(t){(t||0===t)&&(this._min=t)}get min(){return this._min}set max(t){(t||0===t)&&(this._max=t)}get max(){return this._max}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this.disabled=t,this.toggleDisabled(t)}writeValue(t){this.lastEmittedValue=t,this.setValue(this.ensureValueInRange(t))}valueMustBeValid(t){return!isNaN("number"!=typeof t?parseFloat(t):t)}clamp(t,e,i){let s=void 0!==i?Math.min(e,i):e;return s=void 0!==t?Math.max(t,s):s,s}ensureValueInRange(t){let e;if(this.allowEmpty&&null==t)e=null;else if(this.valueMustBeValid(t)){let i=t;t||(i=0),e=this.clamp(this.min,i,this.max)}else e=0;return e}setValue(t){this.value=t,this.lastValue=t,this.allowEmpty&&null===t?(this.subscribeDecAction(),this.subscribeIncAction()):(this.canDecrease()?this.subscribeDecAction():this.unsubscribeDecAction(),this.canIncrease()?this.subscribeIncAction():this.unsubscribeIncAction()),this.renderer.setProperty(this.inputElement.nativeElement,"value",t),this.disabledDec=this.value===this.min,this.disabledInc=this.value===this.max,this.cdr.detectChanges()}ngAfterViewInit(){this.registerListeners(),this.subscribeActions(),setTimeout(()=>{this.toggleDisabled(this.disabled),this.disabled||this.autoFocus&&(this.el.nativeElement.click(),this.inputElement.nativeElement.focus())}),this.el.nativeElement.addEventListener("click",this.registerBlurListener.bind(this))}ngOnChanges(t){(Object.prototype.hasOwnProperty.call(t,"min")||Object.prototype.hasOwnProperty.call(t,"max"))&&this.checkRangeValues(this.min,this.max)}ngOnDestroy(){this.unsubscribeActions()}registerListeners(){this.incButton&&this.incButton.nativeElement&&(this.incListener=(0,h.R)(this.incButton.nativeElement,"click")),this.decButton&&this.decButton.nativeElement&&(this.decListener=(0,h.R)(this.decButton.nativeElement,"click"))}subscribeActions(){this.subscribeIncAction(),this.subscribeDecAction()}subscribeIncAction(){this.incListener&&!this.incAction&&(this.incAction=this.incListener.subscribe(this.increaseValue.bind(this)))}subscribeDecAction(){this.decListener&&!this.decAction&&(this.decAction=this.decListener.subscribe(this.decreaseValue.bind(this)))}unsubscribeActions(){this.unsubscribeIncAction(),this.unsubscribeDecAction()}unsubscribeIncAction(){this.incListener&&this.incAction&&(this.incAction.unsubscribe(),this.incAction=null,this.disabledInc=!0)}unsubscribeDecAction(){this.incListener&&this.decAction&&(this.decAction.unsubscribe(),this.decAction=null,this.disabledDec=!0)}increaseValue(){this.inDecreaseValue("increase")}decreaseValue(){this.inDecreaseValue("decrease")}inDecreaseValue(t){if("increase"===t?this.canIncrease():this.canDecrease()){if(this.allowEmpty&&null==this.value)this.updateValue(0);else{const i=this.getMaxDecimals(this.value),s="increase"===t?this.value+this.step:this.value-this.step;this.matchReg(String(s))&&this.updateValue(parseFloat(s.toFixed(i)))}this.inputElement.nativeElement.focus()}}matchReg(t){return!(this.reg&&!t.match(new RegExp(this.reg)))}canIncrease(){return this.allowEmpty&&null==this.value?this.min+this.step<=this.max:this.value+this.step<=this.max}canDecrease(){return this.allowEmpty&&null==this.value?this.min+this.step<=this.max:this.value-this.step>=this.min}toggleDisabled(t){t?this.unsubscribeActions():this.subscribeActions()}ensureValueIsValid(t){if(t.stopPropagation(),this.disabled)return;const e=t.target.value,i=parseFloat(e);let s;s=this.allowEmpty&&""===e?null:isNaN(i)?this.value:i,s=this.ensureValueInRange(s),this.notifyWhileValueChanging(s),this.updateValue(s)}checkRangeValues(t,e){if(e<t)throw new Error("max value must be greater than or equal to min value")}getDecimals(t){const e=t.toString(),i=e.indexOf(".")+1;return e.length-i}getMaxDecimals(t){const e=this.getDecimals(this.step),i=this.getDecimals(t);return t?null!=this.decimalLimit?this.decimalLimit:Math.max(i,e):e}handleKeyDown(t){this.handleBackspace(t),this.keyBoardControl(t)}protectInput(t){if(this.disabled)return;let i,e=t.target.value,s=t.target.selectionStart,l=t.target.selectionEnd;if(t.clipboardData)i=t.clipboardData.getData("text"),e=e.substring(0,s)+i+e.substring(l),t.preventDefault();else{if(i=t.data,null==i)return;s-=i.length,l-=i.length}if(this.maxLength&&e.length>this.maxLength)this.setValue(this.lastValue);else if(this.matchReg(e)){if(!("-"===e||e.match(/^\s*(-|\+)?\d+\.$/)||e.match(/^\s*(-|\+)?\d+\.[0-9]*0$/)||e.match(/^\s*(-|\+)0+$/)))if(e.match(/^\s*(-|\+)?(\d+|(\d*(\.\d*)))$/)){if(null!=this.decimalLimit&&(e=parseFloat(e).toFixed(this.decimalLimit)),e=parseFloat(e),!isNaN(e))return this.setValue(e),this.notifyWhileValueChanging(e),void(null!==i&&setTimeout(()=>{t.target.setSelectionRange(s+i.length,s+i.length)},0))}else this.setValue(this.value),setTimeout(()=>{t.target.setSelectionRange(s,s)},0)}else this.setValue(this.lastValue)}notifyValueChange(){this.afterValueChanged.emit(this.value),this.onChangeCallback(this.value)}notifyWhileValueChanging(t){this.whileValueChanging.emit(t)}updateValue(t){this.disabled||(this.setValue(t),this.lastEmittedValue!==t&&(this.lastEmittedValue=t,this.notifyValueChange()))}handleBackspace(t){if("Backspace"===t.key){const e=t.target.value,s=t.target.selectionEnd;let l=e.substring(0,t.target.selectionStart-1)+e.substring(s);"-"!==l&&!l.match(/^\s*(-|\+)?\d+\.$/)&&(l=""===l?null:l,this.notifyWhileValueChanging(l))}}keyBoardControl(t){const e=t.key;"ArrowUp"===e||"Up"===e?(t.preventDefault(),this.increaseValue()):"ArrowDown"===e||"Down"===e?(t.preventDefault(),this.decreaseValue()):"Enter"===e&&this.inputElement.nativeElement.blur()}registerBlurListener(){this.document.addEventListener("click",this.emitBlurEvent.bind(this),{capture:!0,once:!0})}emitBlurEvent(t){if(!this.disabled&&this.el.nativeElement!==t.target&&!this.el.nativeElement.contains(t.target)){const e=this.document.createEvent("Event");e.initEvent("blur",!1,!0),this.el.nativeElement.dispatchEvent(e),this.onTouchedCallback()}}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(u.K0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["d-input-number"]],viewQuery:function(t,e){if(1&t&&(n.Gf(b,7),n.Gf(f,7),n.Gf(m,7)),2&t){let i;n.iGM(i=n.CRH())&&(e.incButton=i.first),n.iGM(i=n.CRH())&&(e.decButton=i.first),n.iGM(i=n.CRH())&&(e.inputElement=i.first)}},inputs:{step:"step",disabled:"disabled",size:"size",decimalLimit:"decimalLimit",autoFocus:"autoFocus",allowEmpty:"allowEmpty",placeholder:"placeholder",maxLength:"maxLength",reg:"reg",min:"min",max:"max"},outputs:{afterValueChanged:"afterValueChanged",whileValueChanging:"whileValueChanging"},features:[n._Bn([C]),n.TTD],decls:14,vars:20,consts:[[1,"input-control-buttons",3,"ngClass"],[1,"input-control-button","input-control-inc",3,"ngClass"],["incButton",""],["width","1em","height","1em","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-svg-icon-arrow"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["d","M12.1464466,6.85355339 L8.35355339,10.6464466 C8.15829124,10.8417088 7.84170876,10.8417088 7.64644661,10.6464466 L3.85355339,6.85355339 C3.65829124,6.65829124 3.65829124,6.34170876 3.85355339,6.14644661 C3.94732158,6.05267842 4.07449854,6 4.20710678,6 L11.7928932,6 C12.0690356,6 12.2928932,6.22385763 12.2928932,6.5 C12.2928932,6.63260824 12.2402148,6.7597852 12.1464466,6.85355339 Z","fill-rule","nonzero"],[1,"input-control-button","input-control-dec",3,"ngClass"],["decButton",""],[1,"input-container",3,"ngClass"],[1,"input-box","devui-input",3,"ngClass","placeholder","keydown","input","blur","paste"],["inputElement",""]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"span",1,2),n.O4$(),n.TgZ(3,"svg",3)(4,"g",4),n._UZ(5,"path",5),n.qZA()()(),n.kcU(),n.TgZ(6,"span",6,7),n.O4$(),n.TgZ(8,"svg",3)(9,"g",4),n._UZ(10,"path",5),n.qZA()()()(),n.kcU(),n.TgZ(11,"div",8)(12,"input",9,10),n.NdJ("keydown",function(s){return e.handleKeyDown(s)})("input",function(s){return e.protectInput(s)})("blur",function(s){return e.ensureValueIsValid(s)})("paste",function(s){return e.protectInput(s)}),n.qZA()()),2&t&&(n.Q6J("ngClass",n.kEZ(7,v,e.disabled,"lg"===e.size,"sm"===e.size)),n.xp6(1),n.Q6J("ngClass",n.VKq(11,c,e.disabledInc)),n.xp6(5),n.Q6J("ngClass",n.VKq(13,c,e.disabledDec)),n.xp6(5),n.Q6J("ngClass",n.WLB(15,_,"lg"===e.size,"sm"===e.size)),n.xp6(1),n.Q6J("ngClass",n.VKq(18,c,e.disabled))("placeholder",e.placeholder),n.uIk("readonly",e.disabled?"":null))},dependencies:[u.mk],styles:[".devui-font-size-base[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size, 12px)}.devui-font-base[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size, 12px);font-weight:400;line-height:1.5}.devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:18px;font-size:var(--devui-font-size-modal-title, 18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-size:18px;font-size:var(--devui-font-size-modal-title, 18px);font-weight:700;line-height:1.5}.devui-font-size-page-title[_ngcontent-%COMP%]{font-size:16px;font-size:var(--devui-font-size-page-title, 16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-size:16px;font-size:var(--devui-font-size-page-title, 16px);font-weight:700;line-height:1.5}.devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:14px;font-size:var(--devui-font-size-card-title, 14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-size:14px;font-size:var(--devui-font-size-card-title, 14px);font-weight:700;line-height:1.5}[_nghost-%COMP%]{display:inline-block;position:relative;width:80px}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]:hover   .input-box[_ngcontent-%COMP%]:not(.disabled){border:1px solid #9b9fa8;border:1px solid var(--devui-form-control-line-hover, #9b9fa8);padding-right:24px}[_nghost-%COMP%]:hover   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){border-color:#9b9fa8;border-color:var(--devui-form-control-line-hover, #9b9fa8)}[_nghost-%COMP%]:hover   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){display:flex}[_nghost-%COMP%]:focus-within   .input-box[_ngcontent-%COMP%]:not(.disabled){border:1px solid #5e7ce0;border:1px solid var(--devui-form-control-line-active, #5e7ce0);padding-right:24px}[_nghost-%COMP%]:focus-within   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){border-color:#5e7ce0;border-color:var(--devui-form-control-line-active, #5e7ce0)}[_nghost-%COMP%]:focus-within   .input-control-buttons[_ngcontent-%COMP%]:not(.disabled){display:flex}[_nghost-%COMP%]   .input-box[_ngcontent-%COMP%]{box-sizing:border-box;padding:4px 8px;font-size:12px;font-size:var(--devui-font-size, 12px);vertical-align:middle;border-radius:2px;border-radius:var(--devui-border-radius, 2px);outline:none;width:100%;line-height:20px;height:28px;border-width:1px;border-style:solid}[_nghost-%COMP%]   .input-box[_ngcontent-%COMP%]:not(.disabled){background-color:#fff;background-color:var(--devui-base-bg, #ffffff);border-color:#d7d8da;border-color:var(--devui-line, #d7d8da);color:#252b3a;color:var(--devui-text, #252b3a)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]{display:none;position:absolute;right:0;width:22px;height:100%;flex-direction:column;justify-content:center;align-items:center;border:1px solid transparent;border-left-color:#d7d8da;border-left-color:var(--devui-line, #d7d8da);box-sizing:border-box;line-height:100%;border-radius:0 2px 2px 0;border-radius:0 var(--devui-border-radius, 2px) var(--devui-border-radius, 2px) 0}[_nghost-%COMP%]   .input-control-buttons.disabled[_ngcontent-%COMP%]{border-left-color:#dfe1e6;border-left-color:var(--devui-disabled-line, #dfe1e6)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box;height:50%;line-height:50%;border-width:0 1px;transition:transform .3s cubic-bezier(.645,.045,.355,1);transition:transform var(--devui-animation-duration-slow, .3s) var(--devui-animation-ease-in-out-smooth, cubic-bezier(.645, .045, .355, 1));display:flex;justify-content:center;align-items:center;background-color:#fff;background-color:var(--devui-base-bg, #ffffff)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button.input-control-inc[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;top:2px;transform:rotate(180deg)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button.input-control-dec[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;bottom:2px}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#575d6c;fill:var(--devui-text-weak, #575d6c)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]:not(.disabled){cursor:pointer}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button[_ngcontent-%COMP%]:not(.disabled):hover > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#252b3a;fill:var(--devui-icon-fill-active-hover, #252b3a)}[_nghost-%COMP%]   .input-control-buttons[_ngcontent-%COMP%]   .input-control-button.disabled[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#cfd0d3;fill:var(--devui-disabled-text, #cfd0d3)}.devui-input-number-lg[_ngcontent-%COMP%] > .input-box[_ngcontent-%COMP%]{font-size:14px;font-size:var(--devui-font-size-lg, 14px);line-height:24px;height:46px}  .devui-input-number-lg.input-control-buttons .input-control-button .devui-svg-icon-arrow{width:16px;height:16px}.devui-input-number-sm[_ngcontent-%COMP%] > .input-box[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size-sm, 12px);line-height:18px;height:26px}.devui-input-number-sm[_ngcontent-%COMP%]     .input-control-buttons .input-control-button:first-child .devui-svg-icon-arrow{width:14px;height:14px}.devui-input-number-sm[_ngcontent-%COMP%]     .input-control-buttons .input-control-button:last-child .devui-svg-icon-arrow{width:13px;height:13px;left:0}.input-container[_ngcontent-%COMP%]{line-height:100%}"]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,d.u5]}),o})()}}]);