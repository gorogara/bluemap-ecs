(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Ne="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",je="/vite.svg";function Ze(s){let e=0;const t=i=>{e=i,s.innerHTML=`count is ${e}`};s.addEventListener("click",()=>{t(e+1),console.log("Hello Vite!")}),t(0)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,le=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),de=new WeakMap;let Ce=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(le&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&de.set(t,e))}return e}toString(){return this.cssText}};const V=s=>new Ce(typeof s=="string"?s:s+"",void 0,ce),w=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new Ce(t,s,ce)},Re=(s,e)=>{if(le)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=z.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},ue=le?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return V(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ze,defineProperty:Ie,getOwnPropertyDescriptor:We,getOwnPropertyNames:qe,getOwnPropertySymbols:Je,getPrototypeOf:Fe}=Object,A=globalThis,fe=A.trustedTypes,Ke=fe?fe.emptyScript:"",ie=A.reactiveElementPolyfillSupport,T=(s,e)=>s,I={toAttribute(s,e){switch(e){case Boolean:s=s?Ke:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},pe=(s,e)=>!ze(s,e),ve={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ie(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=We(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const p=r==null?void 0:r.call(this);o.call(this,n),this.requestUpdate(e,p,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,i=[...qe(t),...Je(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ue(r))}else e!==void 0&&t.push(ue(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:I).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),p=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:I;this._$Em=r,this[r]=p.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??pe)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[T("elementProperties")]=new Map,S[T("finalized")]=new Map,ie==null||ie({ReactiveElement:S}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,W=U.trustedTypes,ge=W?W.createPolicy("lit-html",{createHTML:s=>s}):void 0,xe="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Ae="?"+x,Ye=`<${Ae}>`,O=document,D=()=>O.createComment(""),N=s=>s===null||typeof s!="object"&&typeof s!="function",he=Array.isArray,Ge=s=>he(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",se=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,me=/>/g,P=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,$e=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Be=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),c=Be(1),m=Be(2),E=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ye=new WeakMap,B=O.createTreeWalker(O,129);function Oe(s,e){if(!he(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const Qe=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=k;for(let p=0;p<t;p++){const a=s[p];let f,b,h=-1,y=0;for(;y<a.length&&(n.lastIndex=y,b=n.exec(a),b!==null);)y=n.lastIndex,n===k?b[1]==="!--"?n=be:b[1]!==void 0?n=me:b[2]!==void 0?(Pe.test(b[2])&&(r=RegExp("</"+b[2],"g")),n=P):b[3]!==void 0&&(n=P):n===P?b[0]===">"?(n=r??k,h=-1):b[1]===void 0?h=-2:(h=n.lastIndex-b[2].length,f=b[1],n=b[3]===void 0?P:b[3]==='"'?$e:we):n===$e||n===we?n=P:n===be||n===me?n=k:(n=P,r=void 0);const C=n===P&&s[p+1].startsWith("/>")?" ":"";o+=n===k?a+Ye:h>=0?(i.push(f),a.slice(0,h)+xe+a.slice(h)+x+C):a+x+(h===-2?p:C)}return[Oe(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class j{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const p=e.length-1,a=this.parts,[f,b]=Qe(e,t);if(this.el=j.createElement(f,i),B.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=B.nextNode())!==null&&a.length<p;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(xe)){const y=b[n++],C=r.getAttribute(h).split(x),R=/([.?@])?(.*)/.exec(y);a.push({type:1,index:o,name:R[2],strings:C,ctor:R[1]==="."?et:R[1]==="?"?tt:R[1]==="@"?rt:te}),r.removeAttribute(h)}else h.startsWith(x)&&(a.push({type:6,index:o}),r.removeAttribute(h));if(Pe.test(r.tagName)){const h=r.textContent.split(x),y=h.length-1;if(y>0){r.textContent=W?W.emptyScript:"";for(let C=0;C<y;C++)r.append(h[C],D()),B.nextNode(),a.push({type:2,index:++o});r.append(h[y],D())}}}else if(r.nodeType===8)if(r.data===Ae)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(x,h+1))!==-1;)a.push({type:7,index:o}),h+=x.length-1}o++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function H(s,e,t=s,i){var n,p;if(e===E)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=N(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((p=r==null?void 0:r._$AO)==null||p.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=H(s,r._$AS(s,e.values),r,i)),e}class Xe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??O).importNode(t,!0);B.currentNode=r;let o=B.nextNode(),n=0,p=0,a=i[0];for(;a!==void 0;){if(n===a.index){let f;a.type===2?f=new Z(o,o.nextSibling,this,e):a.type===1?f=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(f=new it(o,this,e)),this._$AV.push(f),a=i[++p]}n!==(a==null?void 0:a.index)&&(o=B.nextNode(),n++)}return B.currentNode=O,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),N(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ge(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=j.createElement(Oe(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new Xe(r,this),p=n.u(this.options);n.p(t),this.T(p),this._$AH=n}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new j(e)),t}k(e){he(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new Z(this.O(D()),this.O(D()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=H(this,e,t,0),n=!N(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const p=e;let a,f;for(e=o[0],a=0;a<o.length-1;a++)f=H(this,p[i+a],t,a),f===E&&(f=this._$AH[a]),n||(n=!N(f)||f!==this._$AH[a]),f===v?e=v:e!==v&&(e+=(f??"")+o[a+1]),this._$AH[a]=f}n&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class et extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class tt extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class rt extends te{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=H(this,e,t,0)??v)===E)return;const i=this._$AH,r=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class it{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const oe=U.litHtmlPolyfillSupport;oe==null||oe(j,Z),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.1");const st=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Z(e.insertBefore(D(),o),o,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}};var _e;g._$litElement$=!0,g.finalized=!0,(_e=globalThis.litElementHydrateSupport)==null||_e.call(globalThis,{LitElement:g});const ne=globalThis.litElementPolyfillSupport;ne==null||ne({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:pe},nt=(s=ot,e,t)=>{const{kind:i,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(p){const a=e.get.call(this);e.set.call(this,p),this.requestUpdate(n,a,s)},init(p){return p!==void 0&&this.P(n,void 0,s),p}}}if(i==="setter"){const{name:n}=t;return function(p){const a=this[n];e.call(this,p),this.requestUpdate(n,a,s)}}throw Error("Unsupported decorator location: "+i)};function l(s){return(e,t)=>typeof t=="object"?nt(s,e,t):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lt=s=>(...e)=>({_$litDirective$:s,values:e});class ct{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=lt(class extends ct{constructor(s){var e;if(super(s),s.type!==at.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var i,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const t=s.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(n?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return E}}),pt=w`* {
  box-sizing: border-box;
}

.wrapper {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper:not(.inactive) {
    background: var(--container-global-color, #fcfcfc);
    box-shadow: var(--shadow-raised);
  }

.wrapper.inactive {
    padding-left: 8px;
  }

.group {
  display: flex;
  align-items: center;
  
}

.group.left > * {
    margin-right: 8px;
    margin-left: 8px;
  }

.group.right {
    justify-content: flex-end;
    flex-grow: 1;
  }

.settings .group.left > * {
    margin-right: 0;
    margin-left: 0;
  }

.group.left .menu-button {
    margin-right: 0;
    margin-left: 0;
  }

.group.left .menu-button.wide {
      margin-left: 8px;
      margin-right: 8px;
    }

::slotted([slot="alerts"]) {
  flex-grow: 1;
}

.title {
  color: var(--element-active-color, #1a1a1a);

  /* UI/Body */

  font-family: 'Noto Sans';

  font-size: 16px;

  font-style: normal;

  font-weight: 370;

  line-height: 24px;

  /* 150% */

  text-decoration: none;
}

.settings .group.left .title  {
  margin-left: 16px;
  margin-right: 16px;
}

.page-name {
  color: var(--element-active-color, #1a1a1a);

  /* UI/Body-Active */

  font-family: Noto Sans;

  font-size: 16px;

  font-style: normal;

  font-weight: 650;

  line-height: 24px;

  /* 150% */
}

.left-more-button{
  display: none;
}
`,ht=w`.wrapper {
  padding: 0;
  background: transparent;
  height: 48px;
  width: 48px;
  appearance: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .visible-wrapper {
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.wrapper.corner-left {
    justify-content: flex-end;
  }
.wrapper.corner-left .visible-wrapper {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
.wrapper.corner-right {
    justify-content: flex-start;
  }
.wrapper.corner-right .visible-wrapper {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
.wrapper.size-regular .visible-wrapper {
    height: 32px;
    width: 32px;
  }
.wrapper.size-large .visible-wrapper {
    height: 48px;
    width: 48px;
  }
.wrapper .icon {
    height: 24px;
    width: 24px;
  }
.wrapper.variant-normal {
    color: var(--on-normal-neutral-color);
  }
.wrapper.variant-normal {
  cursor: pointer;
}
.wrapper.variant-normal:focus {
  outline: none;
}
.wrapper.variant-normal.activated .visible-wrapper {
  border-color: var(--normal-activated-border-color);
  background-color: var(--normal-activated-background-color);
}
.wrapper.variant-normal .visible-wrapper {
  border-color: var(--normal-enabled-border-color);
  background-color: var(--normal-enabled-background-color);
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}
.wrapper.variant-normal:focus-visible .visible-wrapper {
  outline-color: hsla(211, 100%, 44%, 0.3);
  outline-width: 4px;
  outline-style: solid;
}
.wrapper.variant-normal:hover .visible-wrapper {
  border-color: var(--normal-hover-border-color);
  background-color: var(--normal-hover-background-color);
}
.wrapper.variant-normal:active .visible-wrapper {
  border-color: var(--normal-pressed-border-color);
  background-color: var(--normal-pressed-background-color);
}
.wrapper.variant-normal:disabled .visible-wrapper {
  border-color: var(--normal-disabled-border-color);
  background-color: var(--normal-disabled-background-color);
  cursor: not-allowed;
  color: var(--on-normal-disabled-color);
}
.wrapper.variant-normal.active-color {
      color: var(--on-normal-active-color);
    }
.wrapper.variant-flat {
    color: var(--on-flat-neutral-color);
  }
.wrapper.variant-flat {
  cursor: pointer;
}
.wrapper.variant-flat:focus {
  outline: none;
}
.wrapper.variant-flat.activated .visible-wrapper {
  border-color: var(--flat-activated-border-color);
  background-color: var(--flat-activated-background-color);
}
.wrapper.variant-flat .visible-wrapper {
  border-color: var(--flat-enabled-border-color);
  background-color: var(--flat-enabled-background-color);
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}
.wrapper.variant-flat:focus-visible .visible-wrapper {
  outline-color: hsla(211, 100%, 44%, 0.3);
  outline-width: 4px;
  outline-style: solid;
}
.wrapper.variant-flat:hover .visible-wrapper {
  border-color: var(--flat-hover-border-color);
  background-color: var(--flat-hover-background-color);
}
.wrapper.variant-flat:active .visible-wrapper {
  border-color: var(--flat-pressed-border-color);
  background-color: var(--flat-pressed-background-color);
}
.wrapper.variant-flat:disabled .visible-wrapper {
  border-color: var(--flat-disabled-border-color);
  background-color: var(--flat-disabled-background-color);
  cursor: not-allowed;
  color: var(--on-flat-disabled-color);
}
.wrapper.variant-flat.active-color {
      color: var(--on-flat-active-color);
    }
.wrapper.variant-raised {
    color: var(--on-raised-active-color);
  }
.wrapper.variant-raised {
  cursor: pointer;
}
.wrapper.variant-raised:focus {
  outline: none;
}
.wrapper.variant-raised.activated .visible-wrapper {
  border-color: var(--raised-activated-border-color);
  background-color: var(--raised-activated-background-color);
}
.wrapper.variant-raised .visible-wrapper {
  border-color: var(--raised-enabled-border-color);
  background-color: var(--raised-enabled-background-color);
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}
.wrapper.variant-raised:focus-visible .visible-wrapper {
  outline-color: hsla(211, 100%, 44%, 0.3);
  outline-width: 4px;
  outline-style: solid;
}
.wrapper.variant-raised:hover .visible-wrapper {
  border-color: var(--raised-hover-border-color);
  background-color: var(--raised-hover-background-color);
}
.wrapper.variant-raised:active .visible-wrapper {
  border-color: var(--raised-pressed-border-color);
  background-color: var(--raised-pressed-background-color);
}
.wrapper.variant-raised:disabled .visible-wrapper {
  border-color: var(--raised-disabled-border-color);
  background-color: var(--raised-disabled-background-color);
  cursor: not-allowed;
  color: var(--on-raised-disabled-color);
}
.wrapper.variant-raised.active-color {
      color: var(--on-raised-active-color);
    }
`;var dt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,L=(s,e,t,i)=>{for(var r=i>1?void 0:i?ut(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&dt(e,t,r),r};let _=class extends g{constructor(){super(...arguments),this.variant="normal",this.size="regular",this.activated=!1,this.cornerLeft=!1,this.cornerRight=!1,this.activeColor=!1}render(){return c`
      <button
        class=${Ee({wrapper:!0,["variant-"+this.variant]:!0,["size-"+this.size]:!0,activated:this.activated,"corner-left":this.cornerLeft,"corner-right":this.cornerRight,"active-color":this.activeColor})}
      >
        <div class="visible-wrapper">
          <div class="icon">
            <slot></slot>
          </div>
        </div>
      </button>
    `}};_.styles=V(ht);L([l({type:String})],_.prototype,"variant",2);L([l({type:String})],_.prototype,"size",2);L([l({type:Boolean})],_.prototype,"activated",2);L([l({type:Boolean})],_.prototype,"cornerLeft",2);L([l({type:Boolean})],_.prototype,"cornerRight",2);L([l({type:Boolean})],_.prototype,"activeColor",2);_=L([$("obc-icon-button")],_);const ft=w`:host {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
}

.clock {
  color: var(--element-active-color, #1a1a1a);
  text-align: center;

  font-family: 'Noto Sans';

  font-size: 1rem;

  font-style: normal;

  font-weight: 570;

  line-height: 1.5rem;

  /* 150% */
}

.blink {
  display: none;
}

@keyframes ticks {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.ticks {
  animation: ticks 1s linear infinite;
  width: 7px;
  text-align: center;
  padding: 0 2px;
  position: relative;
  top: -0.08em;
}

.blink .ticks {
    display: block;
    width: 16px;
    padding: 0;
  }

.date {
  color: var(--element-active-color, #1a1a1a);
  text-align: center;

  /* UI/Body */

  font-family: 'Noto Sans';

  font-size: 16px;

  font-style: normal;

  font-weight: 370;

  line-height: 24px;

  /* 150% */

  text-decoration: none;
}`;var vt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,re=(s,e,t,i)=>{for(var r=i>1?void 0:i?gt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&vt(e,t,r),r};const bt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let M=class extends g{constructor(){super(...arguments),this.date="2021-01-01T11:11:11.111Z",this.showDate=!1,this.blinkOnlyBreakpointPx=0}render(){const s=new Date(this.date),e=s.getHours(),t=s.getMinutes(),i=e<10?`0${e}`:`${e}`,r=t<10?`0${t}`:`${t}`,o=s.getDate(),n=bt[s.getMonth()],p=`${o}. ${n}`;return c`
      <style>
        @media (max-width: ${this.blinkOnlyBreakpointPx}px) {
          .clock {
            display: none;
          }
          .clock.blink {
            display: block;
          }

          :host {
            padding: 0 !important;
          }
        }
      </style>
      <div class="clock">
        ${i}<span class="ticks">:</span>${r}
      </div>
      <div class="clock blink">
        <span class="ticks">:</span>
      </div>
      ${this.showDate?c`<div class="date">${p}</div>`:null}
    `}};M.styles=V(ft);re([l({type:String})],M.prototype,"date",2);re([l({type:Boolean})],M.prototype,"showDate",2);re([l({type:Number})],M.prototype,"blinkOnlyBreakpointPx",2);M=re([$("obc-clock")],M);const mt=w`:host {
    width: 1px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 1px;
    background: var(--border-divider-color, rgba(0, 0, 0, 0.08));
}`;var wt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,yt=(s,e,t,i)=>{for(var r=i>1?void 0:i?$t(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&wt(e,t,r),r};let ae=class extends g{render(){return c``}};ae.styles=V(mt);ae=yt([$("obc-divider")],ae);const _t=w`ol {
    padding: 4px;
    margin: 0;
    list-style-type: none;
    display: flex;
}

li {
    color: var(--on-flat-neutral-color, rgba(0, 0, 0, 0.90));
    /* UI/Body */
    font-family: 'Noto Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 370;
    line-height: 24px;
    /* 150% */
    text-decoration: none;
    display: flex;
}

li .label {
        color: var(--on-flat-active-color, rgba(0, 0, 0, 0.90));
    }

li:last-of-type .label {
        /* UI/Body-Active */
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 650;
        line-height: 24px;
        /* 150% */
    }

.divider {
    display: block;
    width: 24px;
    height: 24px;
}`;var Ct=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Le=(s,e,t,i)=>{for(var r=i>1?void 0:i?xt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Ct(e,t,r),r};let q=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.59L13.17 12L8.58997 7.41Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.59L13.17 12L8.58997 7.41Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};q.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;Le([l({type:Boolean})],q.prototype,"useCssColor",2);q=Le([$("obi-02-chevron-right")],q);var At=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Se=(s,e,t,i)=>{for(var r=i>1?void 0:i?Pt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&At(e,t,r),r};let J=class extends g{constructor(){super(...arguments),this.items=[]}render(){return c`
      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol>
          ${this.items.map((s,e)=>c`
              <li>
                ${e>0?c`<span class="icon">
                      <obi-02-chevron-right class="divider">
                      </obi-02-chevron-right>
                    </span>`:""}
                <span class="label">${s.label}</span>
              </li>
            `)}
        </ol>
      </nav>
    `}};J.styles=V(_t);Se([l({attribute:!1})],J.prototype,"items",2);J=Se([$("obc-breadcrumb")],J);var Bt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,He=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ot(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Bt(e,t,r),r};let F=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13H21V11H3V13Z" fill="currentColor"/>
<path d="M3 18H21V16H3V18Z" fill="currentColor"/>
<path d="M3 6V8H21V6H3Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13H21V11H3V13Z" style="fill: var(--element-active-color)"/>
<path d="M3 18H21V16H3V18Z" style="fill: var(--element-active-color)"/>
<path d="M3 6V8H21V6H3Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};F.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;He([l({type:Boolean})],F.prototype,"useCssColor",2);F=He([$("obi-01-menu")],F);var Et=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Me=(s,e,t,i)=>{for(var r=i>1?void 0:i?Lt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Et(e,t,r),r};let K=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};K.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;Me([l({type:Boolean})],K.prototype,"useCssColor",2);K=Me([$("obi-01-close")],K);var St=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Ve=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ht(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&St(e,t,r),r};let Y=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.83 11H20V13H7.83L13.41 18.59L12 20L4 12L12 4L13.42 5.41L7.83 11Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.83 11H20V13H7.83L13.41 18.59L12 20L4 12L12 4L13.42 5.41L7.83 11Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};Y.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;Ve([l({type:Boolean})],Y.prototype,"useCssColor",2);Y=Ve([$("obi-02-arrow-back")],Y);var Mt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,ke=(s,e,t,i)=>{for(var r=i>1?void 0:i?Vt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Mt(e,t,r),r};let G=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};G.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;ke([l({type:Boolean})],G.prototype,"useCssColor",2);G=ke([$("obi-02-arrow-forward")],G);var kt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Te=(s,e,t,i)=>{for(var r=i>1?void 0:i?Tt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&kt(e,t,r),r};let Q=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099L23.31 11.9999L20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099ZM14.5 6.54995C13.74 6.19995 12.89 5.99995 12 5.99995C8.69 5.99995 6 8.68995 6 12C6 15.31 8.69 18 12 18C12.89 18 13.74 17.8 14.5 17.45C12.44 16.5 11 14.42 11 12C11 9.57995 12.44 7.49995 14.5 6.54995Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099L23.31 11.9999L20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099ZM14.5 6.54995C13.74 6.19995 12.89 5.99995 12 5.99995C8.69 5.99995 6 8.68995 6 12C6 15.31 8.69 18 12 18C12.89 18 13.74 17.8 14.5 17.45C12.44 16.5 11 14.42 11 12C11 9.57995 12.44 7.49995 14.5 6.54995Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};Q.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;Te([l({type:Boolean})],Q.prototype,"useCssColor",2);Q=Te([$("obi-04-dimming")],Q);var Ut=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Ue=(s,e,t,i)=>{for(var r=i>1?void 0:i?Dt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Ut(e,t,r),r};let X=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};X.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;Ue([l({type:Boolean})],X.prototype,"useCssColor",2);X=Ue([$("obi-01-apps")],X);var Nt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,De=(s,e,t,i)=>{for(var r=i>1?void 0:i?jt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Nt(e,t,r),r};let ee=class extends g{constructor(){super(...arguments),this.useCssColor=!1,this.icon=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6Z" fill="currentColor"/>
<path d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z" fill="currentColor"/>
<path d="M14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18Z" fill="currentColor"/>
</svg>
`,this.iconCss=m`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6Z" style="fill: var(--element-active-color)"/>
<path d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z" style="fill: var(--element-active-color)"/>
<path d="M14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18Z" style="fill: var(--element-active-color)"/>
</svg>
`}render(){return c`
      <div class="wrapper">${this.useCssColor?this.iconCss:this.icon}</div>
    `}};ee.styles=w`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;De([l({type:Boolean})],ee.prototype,"useCssColor",2);ee=De([$("obi-01-more-vertical")],ee);var Zt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,u=(s,e,t,i)=>{for(var r=i>1?void 0:i?Rt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Zt(e,t,r),r};let d=class extends g{constructor(){super(...arguments),this.appTitle="App",this.pageName="Page",this.date="2021-01-01T11:11:11.111Z",this.menuButtonActivated=!1,this.dimmingButtonActivated=!1,this.appsButtonActivated=!1,this.leftMoreButtonActivated=!1,this.wideMenuButton=!1,this.showAppsButton=!1,this.showDimmingButton=!1,this.showClock=!1,this.showDate=!1,this.inactive=!1,this.appButtonBreakpointPx=500,this.dimmingButtonBreakpointPx=500,this.appTitleBreakpointPx=500,this.clockMinimizeBreakpointPx=300,this.settings=!1,this.breadcrumbItems=[]}menuButtonClicked(){this.dispatchEvent(new CustomEvent("menu-button-clicked"))}dimmingButtonClicked(){this.dispatchEvent(new CustomEvent("dimming-button-clicked"))}appsButtonClicked(){this.dispatchEvent(new CustomEvent("apps-button-clicked"))}leftMoreButtonClicked(){this.dispatchEvent(new CustomEvent("left-more-button-clicked"))}render(){const s=[];this.settings?(s.push(c`<div class="menu-button">
          <obc-icon-button
            variant="flat"
            @click=${()=>this.dispatchEvent(new CustomEvent("close"))}
          >
            <obi-01-close></obi-01-close>
          </obc-icon-button>
        </div>`),s.push(c`<obc-divider></obc-divider>`),s.push(c`<obc-icon-button
          variant="flat"
          cornerLeft
          @click=${()=>this.dispatchEvent(new CustomEvent("back"))}
        >
          <obi-02-arrow-back></obi-02-arrow-back>
        </obc-icon-button>`),s.push(c`<obc-icon-button
          variant="flat"
          cornerRight
          @click=${()=>this.dispatchEvent(new CustomEvent("forward"))}
        >
          <obi-02-arrow-forward></obi-02-arrow-forward>
        </obc-icon-button>`),s.push(c`<obc-divider></obc-divider>`),s.push(c`<div class="title">${this.appTitle}</div>`),s.push(c`<obc-breadcrumb .items=${this.breadcrumbItems}></obc-breadcrumb>`)):(this.inactive||s.push(c`<div class="menu-button ${this.wideMenuButton?"wide":null}">
            <obc-icon-button
              variant="flat"
              @click=${this.menuButtonClicked}
              ?activated=${this.menuButtonActivated}
            >
              <obi-01-menu></obi-01-menu>
            </obc-icon-button>
          </div>`),s.push(c`<div class="title">${this.appTitle}</div>`),s.push(c`<div class="page-name">${this.pageName}</div>`));const e=Math.max(this.appButtonBreakpointPx,this.dimmingButtonBreakpointPx);return c`
      <style>
        @media (max-width: ${e}px) {
          .left-more-button {
            display: revert !important;
          }

          .group.left > * {
            margin-right: 4px;
            margin-left: 4px;
          }
        }

        @media (max-width: ${this.appButtonBreakpointPx}px) {
          .apps-button {
            display: none;
          }
        }

        @media (max-width: ${this.dimmingButtonBreakpointPx}px) {
          .dimming-button {
            display: none;
          }
        }

        @media (max-width: ${this.appTitleBreakpointPx}px) {
          .title {
            display: none;
          }
        }
      </style>
      <nav
        class=${Ee({wrapper:!0,inactive:this.inactive,settings:this.settings})}
      >
        <div class="left group">${s}</div>
        <div class="right group">
          ${this.showClock?c`<obc-clock
                .date=${this.date}
                .blinkOnlyBreakpointPx=${this.clockMinimizeBreakpointPx}
                .showDate=${this.showDate}
              ></obc-clock>`:null}
          <slot name="alerts"></slot>
          ${this.showDimmingButton&&!this.inactive?c`<obc-icon-button
                class="dimming-button"
                variant="flat"
                @click=${this.dimmingButtonClicked}
                ?activated=${this.dimmingButtonActivated}
              >
                <obi-04-dimming></obi-04-dimming>
              </obc-icon-button>`:null}
          ${this.showAppsButton&&!this.inactive?c`<obc-icon-button
                class="apps-button"
                variant="flat"
                @click=${this.appsButtonClicked}
                ?activated=${this.appsButtonActivated}
              >
                <obi-01-apps></obi-01-apps>
              </obc-icon-button>`:null}
          ${this.inactive?null:c`<obc-icon-button
                class="left-more-button"
                variant="flat"
                @click=${this.leftMoreButtonClicked}
                ?activated=${this.leftMoreButtonActivated}
              >
                <obi-01-more-vertical></obi-01-more-vertical>
              </obc-icon-button>`}
        </div>
      </nav>
    `}};d.styles=V(pt);u([l({type:String})],d.prototype,"appTitle",2);u([l({type:String})],d.prototype,"pageName",2);u([l({type:String})],d.prototype,"date",2);u([l({type:Boolean})],d.prototype,"menuButtonActivated",2);u([l({type:Boolean})],d.prototype,"dimmingButtonActivated",2);u([l({type:Boolean})],d.prototype,"appsButtonActivated",2);u([l({type:Boolean})],d.prototype,"leftMoreButtonActivated",2);u([l({type:Boolean})],d.prototype,"wideMenuButton",2);u([l({type:Boolean})],d.prototype,"showAppsButton",2);u([l({type:Boolean})],d.prototype,"showDimmingButton",2);u([l({type:Boolean})],d.prototype,"showClock",2);u([l({type:Boolean})],d.prototype,"showDate",2);u([l({type:Boolean})],d.prototype,"inactive",2);u([l({type:Number})],d.prototype,"appButtonBreakpointPx",2);u([l({type:Number})],d.prototype,"dimmingButtonBreakpointPx",2);u([l({type:Number})],d.prototype,"appTitleBreakpointPx",2);u([l({type:Number})],d.prototype,"clockMinimizeBreakpointPx",2);u([l({type:Boolean})],d.prototype,"settings",2);u([l({type:Array})],d.prototype,"breadcrumbItems",2);d=u([$("obc-top-bar")],d);document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${je}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${Ne}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;Ze(document.querySelector("#counter"));
