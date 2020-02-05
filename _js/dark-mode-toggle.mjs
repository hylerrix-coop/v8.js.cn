// @license © 2019 Google LLC. Licensed under the Apache License, Version 2.0.
const e=document;const i=localStorage;const t="prefers-color-scheme";const s="media";const o="light";const a="dark";const n="no-preference";const r=`(${t}:${a})`;const h=`(${t}:${o}),(${t}:${n})`;const l="link[rel=stylesheet]";const c="remember";const d="legend";const b="toggle";const m="switch";const u="appearance";const g="permanent";const p="mode";const k="colorschemechange";const f="permanentcolorscheme";const v="all";const $="not all";const L="dark-mode-toggle";const x="https://googlechromelabs.github.io/dark-mode-toggle/demo/";const y=(e,i,t=i)=>{Object.defineProperty(e,t,{enumerable:true,get(){const e=this.getAttribute(i);return e===null?"":e},set(e){this.setAttribute(i,e)}})};const w=(e,i,t=i)=>{Object.defineProperty(e,t,{enumerable:true,get(){return this.hasAttribute(i)},set(e){if(e){this.setAttribute(i,"")}else{this.removeAttribute(i)}}})};const C=e.createElement("template");C.innerHTML=`<style>*,::after,::before{box-sizing:border-box}:host{contain:content;display:block}:host([hidden]){display:none}form{background-color:var(--${L}-background-color,transparent);color:var(--${L}-color,inherit);padding:0}fieldset{border:none;margin:0;padding-block:.25rem;padding-inline:.25rem}legend{font:var(--${L}-legend-font,inherit);padding:0}input,label{cursor:pointer}label{padding:.15rem;white-space:nowrap}input{opacity:0;position:absolute;pointer-events:none}input:focus+label{outline:#e59700 auto 2px;outline:-webkit-focus-ring-color auto 5px}label::before{content:"";display:inline-block;background-size:var(--${L}-icon-size,1rem);background-repeat:no-repeat;height:var(--${L}-icon-size,1rem);width:var(--${L}-icon-size,1rem);vertical-align:middle;margin-inline-end:.5rem}#lightLabel::before{background-image:var(--${L}-light-icon, url("${x}sun.png"))}#darkLabel::before{filter:var(--${L}-icon-filter, none);background-image:var(--${L}-dark-icon, url("${x}moon.png"))}#checkboxLabel::before{background-image:var(--${L}-checkbox-icon,none)}#permanentLabel::before{background-image:var(--${L}-remember-icon-unchecked, url("${x}unchecked.svg"))}#checkboxLabel,#darkLabel,#lightLabel{font:var(--${L}-label-font,inherit)}#checkboxLabel:empty,#darkLabel:empty,#lightLabel:empty{font-size:0;padding:0}#permanentLabel{font:var(--${L}-remember-font,inherit)}input:checked+#permanentLabel::before{background-image:var(--${L}-remember-icon-checked, url("${x}checked.svg"))}input:checked+#darkLabel,input:checked+#lightLabel{background-color:var(--${L}-active-mode-background-color,transparent)}input:checked+#darkLabel::before,input:checked+#lightLabel::before{background-color:var(--${L}-active-mode-background-color,transparent)}input:checked+#checkboxLabel::before{filter:var(--${L}-icon-filter, none)}input:checked+#checkboxLabel+aside #permanentLabel::before{filter:var(--${L}-remember-filter, invert(100%))}aside{visibility:hidden;margin-block-start:.15rem}#checkboxLabel:focus-visible~aside,#darkLabel:focus-visible~aside,#lightLabel:focus-visible~aside{visibility:visible;transition:visibility 0s}aside #permanentLabel:empty{display:none}@media (hover:hover){aside{transition:visibility 3s}aside:hover{visibility:visible}#checkboxLabel:hover~aside,#darkLabel:hover~aside,#lightLabel:hover~aside{visibility:visible;transition:visibility 0s}}</style><form><fieldset><legend></legend><input id=lightRadio type=radio name=mode><label for=lightRadio id=lightLabel></label><input id=darkRadio type=radio name=mode><label for=darkRadio id=darkLabel></label><input id=darkCheckbox type=checkbox><label for=darkCheckbox id=checkboxLabel></label><aside><input id=permanentCheckbox type=checkbox><label for=permanentCheckbox id=permanentLabel></label></aside></fieldset></form>`;export class DarkModeToggle extends HTMLElement{static get observedAttributes(){return[p,u,g,d,o,a,c]}constructor(){super();y(this,p);y(this,u);y(this,d);y(this,o);y(this,a);y(this,c);w(this,g);this.i=null;this.t=null;e.addEventListener(k,e=>{this.mode=e.detail.colorScheme;this.s();this.o()});e.addEventListener(f,e=>{this.permanent=e.detail.permanent;this.h.checked=this.permanent});this.l()}l(){const c=this.attachShadow({mode:"closed"});c.appendChild(C.content.cloneNode(true));this.i=e.querySelectorAll(`${l}[${s}*=${t}][${s}*="${a}"]`);this.t=e.querySelectorAll(`${l}[${s}*=${t}][${s}*="${o}"],${l}[${s}*=${t}][${s}*="${n}"]`);this.m=c.querySelector("#lightRadio");this.u=c.querySelector("#lightLabel");this.g=c.querySelector("#darkRadio");this.p=c.querySelector("#darkLabel");this.k=c.querySelector("#darkCheckbox");this.v=c.querySelector("#checkboxLabel");this.$=c.querySelector("legend");this.L=c.querySelector("aside");this.h=c.querySelector("#permanentCheckbox");this.C=c.querySelector("#permanentLabel");const d=matchMedia(r).media!==$;if(d){matchMedia(r).addListener(({matches:e})=>{this.mode=e?a:o;this.M(k,{colorScheme:this.mode})})}const m=i.getItem(L);if(m&&[a,o].includes(m)){this.mode=m;this.h.checked=true;this.permanent=true}else if(d){this.mode=matchMedia(h).matches?o:a}if(!this.mode){this.mode=o}if(this.permanent&&!m){i.setItem(L,this.mode)}if(!this.appearance){this.appearance=b}this.R();this.s();this.o();[this.m,this.g].forEach(e=>{e.addEventListener("change",()=>{this.mode=this.m.checked?o:a;this.o();this.M(k,{colorScheme:this.mode})})});this.k.addEventListener("change",()=>{this.mode=this.k.checked?a:o;this.s();this.M(k,{colorScheme:this.mode})});this.h.addEventListener("change",()=>{this.permanent=this.h.checked;this.M(f,{permanent:this.permanent})});this._();this.M(k,{colorScheme:this.mode});this.M(f,{permanent:this.permanent})}attributeChangedCallback(e,t,s){if(e===p){if(![o,a].includes(s)){throw new RangeError(`Allowed values: "${o}" and "${a}".`)}if(matchMedia("(hover:none)").matches&&this.remember){this.A()}if(this.permanent){i.setItem(L,this.mode)}this.s();this.o();this._()}else if(e===u){if(![b,m].includes(s)){throw new RangeError(`Allowed values: "${b}" and "${m}".`)}this.R()}else if(e===g){if(this.permanent){i.setItem(L,this.mode)}else{i.removeItem(L)}this.h.checked=this.permanent}else if(e===d){this.$.textContent=s}else if(e===c){this.C.textContent=s}else if(e===o){this.u.textContent=s;if(this.mode===o){this.v.textContent=s}}else if(e===a){this.p.textContent=s;if(this.mode===a){this.v.textContent=s}}}M(e,i){this.dispatchEvent(new CustomEvent(e,{bubbles:true,composed:true,detail:i}))}R(){const e=this.appearance===b;this.m.hidden=e;this.u.hidden=e;this.g.hidden=e;this.p.hidden=e;this.k.hidden=!e;this.v.hidden=!e}s(){if(this.mode===o){this.m.checked=true}else{this.g.checked=true}}o(){if(this.mode===o){this.v.style.setProperty(`--${L}-checkbox-icon`,`var(--${L}-light-icon,url("${x}moon.png"))`);this.v.textContent=this.light;this.k.checked=false}else{this.v.style.setProperty(`--${L}-checkbox-icon`,`var(--${L}-dark-icon,url("${x}sun.png"))`);this.v.textContent=this.dark;this.k.checked=true}}_(){if(this.mode===o){this.t.forEach(e=>{e.media=v;e.disabled=false});this.i.forEach(e=>{e.media=$;e.disabled=true})}else{this.i.forEach(e=>{e.media=v;e.disabled=false});this.t.forEach(e=>{e.media=$;e.disabled=true})}}A(){this.L.style.visibility="visible";setTimeout(()=>{this.L.style.visibility="hidden"},3e3)}}customElements.define(L,DarkModeToggle);