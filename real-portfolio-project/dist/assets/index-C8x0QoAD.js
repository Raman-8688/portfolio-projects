(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Nu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var is={exports:{}},ol={},os={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),Cu=Symbol.for("react.portal"),bu=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Pu=Symbol.for("react.provider"),Mu=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),_u=Symbol.for("react.memo"),Au=Symbol.for("react.lazy"),Jo=Symbol.iterator;function Ru(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,cs={};function cn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||as}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function us(){}us.prototype=cn.prototype;function Wi(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||as}var Gi=Wi.prototype=new us;Gi.constructor=Wi;ss(Gi,cn.prototype);Gi.isPureReactComponent=!0;var Yo=Array.isArray,ds=Object.prototype.hasOwnProperty,qi={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ds.call(t,r)&&!ps.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var s=Array(c),d=0;d<c;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)l[r]===void 0&&(l[r]=c[r]);return{$$typeof:Zn,type:e,key:i,ref:a,props:l,_owner:qi.current}}function Iu(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Du(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ko=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Du(""+e.key):t.toString(36)}function jr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zn:case Cu:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+El(a,0):r,Yo(l)?(n="",e!=null&&(n=e.replace(Ko,"$&/")+"/"),jr(l,t,n,"",function(d){return d})):l!=null&&(Ji(l)&&(l=Iu(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ko,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Yo(e))for(var c=0;c<e.length;c++){i=e[c];var s=r+El(i,c);a+=jr(i,t,n,s,l)}else if(s=Ru(e),typeof s=="function")for(e=s.call(e),c=0;!(i=e.next()).done;)i=i.value,s=r+El(i,c++),a+=jr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function or(e,t,n){if(e==null)return e;var r=[],l=0;return jr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Ou(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Nr={transition:null},Fu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:qi};function ms(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=cn;A.Fragment=bu;A.Profiler=zu;A.PureComponent=Wi;A.StrictMode=Eu;A.Suspense=Lu;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fu;A.act=ms;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)ds.call(t,s)&&!ps.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&c!==void 0?c[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){c=Array(s);for(var d=0;d<s;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:Zn,type:e.type,key:l,ref:i,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:Mu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pu,_context:e},e.Consumer=e};A.createElement=fs;A.createFactory=function(e){var t=fs.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Tu,render:e}};A.isValidElement=Ji;A.lazy=function(e){return{$$typeof:Au,_payload:{_status:-1,_result:e},_init:Ou}};A.memo=function(e,t){return{$$typeof:_u,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};A.unstable_act=ms;A.useCallback=function(e,t){return de.current.useCallback(e,t)};A.useContext=function(e){return de.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return de.current.useDeferredValue(e)};A.useEffect=function(e,t){return de.current.useEffect(e,t)};A.useId=function(){return de.current.useId()};A.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return de.current.useMemo(e,t)};A.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};A.useRef=function(e){return de.current.useRef(e)};A.useState=function(e){return de.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return de.current.useTransition()};A.version="18.3.1";os.exports=A;var T=os.exports;const Hu=Nu(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=T,Uu=Symbol.for("react.element"),$u=Symbol.for("react.fragment"),Vu=Object.prototype.hasOwnProperty,Qu=Bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wu={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Vu.call(t,r)&&!Wu.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Uu,type:e,key:i,ref:a,props:l,_owner:Qu.current}}ol.Fragment=$u;ol.jsx=hs;ol.jsxs=hs;is.exports=ol;var o=is.exports,Zl={},gs={exports:{}},Se={},vs={exports:{}},xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var _=N.length;N.push(P);e:for(;0<_;){var q=_-1>>>1,Z=N[q];if(0<l(Z,P))N[q]=P,N[_]=Z,_=q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],_=N.pop();if(_!==P){N[0]=_;e:for(var q=0,Z=N.length,lr=Z>>>1;q<lr;){var wt=2*(q+1)-1,bl=N[wt],kt=wt+1,ir=N[kt];if(0>l(bl,_))kt<Z&&0>l(ir,bl)?(N[q]=ir,N[kt]=_,q=kt):(N[q]=bl,N[wt]=_,q=wt);else if(kt<Z&&0>l(ir,_))N[q]=ir,N[kt]=_,q=kt;else break e}}return P}function l(N,P){var _=N.sortIndex-P.sortIndex;return _!==0?_:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var s=[],d=[],h=1,g=null,m=3,w=!1,k=!1,v=!1,z=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(d)}}function x(N){if(v=!1,f(N),!k)if(n(s)!==null)k=!0,Nl(j);else{var P=n(d);P!==null&&Cl(x,P.startTime-N)}}function j(N,P){k=!1,v&&(v=!1,p(E),E=-1),w=!0;var _=m;try{for(f(P),g=n(s);g!==null&&(!(g.expirationTime>P)||N&&!Me());){var q=g.callback;if(typeof q=="function"){g.callback=null,m=g.priorityLevel;var Z=q(g.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(s)&&r(s),f(P)}else r(s);g=n(s)}if(g!==null)var lr=!0;else{var wt=n(d);wt!==null&&Cl(x,wt.startTime-P),lr=!1}return lr}finally{g=null,m=_,w=!1}}var C=!1,b=null,E=-1,G=5,R=-1;function Me(){return!(e.unstable_now()-R<G)}function pn(){if(b!==null){var N=e.unstable_now();R=N;var P=!0;try{P=b(!0,N)}finally{P?fn():(C=!1,b=null)}}else C=!1}var fn;if(typeof u=="function")fn=function(){u(pn)};else if(typeof MessageChannel<"u"){var qo=new MessageChannel,ju=qo.port2;qo.port1.onmessage=pn,fn=function(){ju.postMessage(null)}}else fn=function(){z(pn,0)};function Nl(N){b=N,C||(C=!0,fn())}function Cl(N,P){E=z(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Nl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var _=m;m=P;try{return N()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var _=m;m=N;try{return P()}finally{m=_}},e.unstable_scheduleCallback=function(N,P,_){var q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?q+_:q):_=q,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,N={id:h++,callback:P,priorityLevel:N,startTime:_,expirationTime:Z,sortIndex:-1},_>q?(N.sortIndex=_,t(d,N),n(s)===null&&N===n(d)&&(v?(p(E),E=-1):v=!0,Cl(x,_-q))):(N.sortIndex=Z,t(s,N),k||w||(k=!0,Nl(j))),N},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(N){var P=m;return function(){var _=m;m=P;try{return N.apply(this,arguments)}finally{m=_}}}})(xs);vs.exports=xs;var Gu=vs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=T,ke=Gu;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ys=new Set,Rn={};function At(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(Rn[e]=t,e=0;e<t.length;e++)ys.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=Object.prototype.hasOwnProperty,Ju=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Zo={};function Yu(e){return ei.call(Zo,e)?!0:ei.call(Xo,e)?!1:Ju.test(e)?Zo[e]=!0:(Xo[e]=!0,!1)}function Ku(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xu(e,t,n,r){if(t===null||typeof t>"u"||Ku(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yi,Ki);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yi,Ki);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yi,Ki);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xu(t,n,l,r)&&(n=null),r||l===null?Yu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ti=Symbol.for("react.profiler"),ws=Symbol.for("react.provider"),ks=Symbol.for("react.context"),eo=Symbol.for("react.forward_ref"),ni=Symbol.for("react.suspense"),ri=Symbol.for("react.suspense_list"),to=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ss=Symbol.for("react.offscreen"),ea=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,zl;function Sn(e){if(zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zl=t&&t[1]||""}return`
`+zl+e}var Pl=!1;function Ml(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,c=i.length-1;1<=a&&0<=c&&l[a]!==i[c];)c--;for(;1<=a&&0<=c;a--,c--)if(l[a]!==i[c]){if(a!==1||c!==1)do if(a--,c--,0>c||l[a]!==i[c]){var s=`
`+l[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=c);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Zu(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Dt:return"Portal";case ti:return"Profiler";case Zi:return"StrictMode";case ni:return"Suspense";case ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ks:return(e.displayName||"Context")+".Consumer";case ws:return(e._context.displayName||"Context")+".Provider";case eo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case to:return t=e.displayName||null,t!==null?t:li(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return li(e(t))}catch{}}return null}function ed(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return li(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function td(e){var t=js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=td(e))}function Ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ta(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cs(e,t){t=t.checked,t!=null&&Xi(e,"checked",t,!1)}function oi(e,t){Cs(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function si(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(jn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function bs(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function la(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Es(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Es(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,zs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nd=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(e){nd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bn[t]=bn[e]})});function Ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bn.hasOwnProperty(e)&&bn[e]?(""+t).trim():t+"px"}function Ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var rd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,Yt=null,Kt=null;function ia(e){if(e=nr(e)){if(typeof fi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=dl(t),fi(e.stateNode,e.type,t))}}function Ts(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function Ls(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,ia(e),t)for(e=0;e<t.length;e++)ia(t[e])}}function _s(e,t){return e(t)}function As(){}var Tl=!1;function Rs(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return _s(e,t,n)}finally{Tl=!1,(Yt!==null||Kt!==null)&&(As(),Ls())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var mi=!1;if(qe)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){mi=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{mi=!1}function ld(e,t,n,r,l,i,a,c,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var En=!1,Ir=null,Dr=!1,hi=null,id={onError:function(e){En=!0,Ir=e}};function od(e,t,n,r,l,i,a,c,s){En=!1,Ir=null,ld.apply(id,arguments)}function ad(e,t,n,r,l,i,a,c,s){if(od.apply(this,arguments),En){if(En){var d=Ir;En=!1,Ir=null}else throw Error(y(198));Dr||(Dr=!0,hi=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Is(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oa(e){if(Rt(e)!==e)throw Error(y(188))}function sd(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return oa(l),e;if(i===r)return oa(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,c=l.child;c;){if(c===n){a=!0,n=l,r=i;break}if(c===r){a=!0,r=l,n=i;break}c=c.sibling}if(!a){for(c=i.child;c;){if(c===n){a=!0,n=i,r=l;break}if(c===r){a=!0,r=i,n=l;break}c=c.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ds(e){return e=sd(e),e!==null?Os(e):null}function Os(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Os(e);if(t!==null)return t;e=e.sibling}return null}var Fs=ke.unstable_scheduleCallback,aa=ke.unstable_cancelCallback,cd=ke.unstable_shouldYield,ud=ke.unstable_requestPaint,J=ke.unstable_now,dd=ke.unstable_getCurrentPriorityLevel,ro=ke.unstable_ImmediatePriority,Hs=ke.unstable_UserBlockingPriority,Or=ke.unstable_NormalPriority,pd=ke.unstable_LowPriority,Bs=ke.unstable_IdlePriority,al=null,Be=null;function fd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:gd,md=Math.log,hd=Math.LN2;function gd(e){return e>>>=0,e===0?32:31-(md(e)/hd|0)|0}var ur=64,dr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~l;c!==0?r=Nn(c):(i&=a,i!==0&&(r=Nn(i)))}else a=n&~l,a!==0?r=Nn(a):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Re(i),c=1<<a,s=l[a];s===-1?(!(c&n)||c&r)&&(l[a]=vd(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}}function gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Us(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function $s(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,io,Qs,Ws,Gs,vi=!1,pr=[],at=null,st=null,ct=null,On=new Map,Fn=new Map,rt=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function gn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=nr(t),t!==null&&io(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function kd(e,t,n,r,l){switch(t){case"focusin":return at=gn(at,e,t,n,r,l),!0;case"dragenter":return st=gn(st,e,t,n,r,l),!0;case"mouseover":return ct=gn(ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,gn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Fn.set(i,gn(Fn.get(i)||null,e,t,n,r,l)),!0}return!1}function qs(e){var t=Nt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Is(n),t!==null){e.blockedOn=t,Gs(e.priority,function(){Qs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=nr(n),t!==null&&io(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Cr(e)&&n.delete(t)}function Sd(){vi=!1,at!==null&&Cr(at)&&(at=null),st!==null&&Cr(st)&&(st=null),ct!==null&&Cr(ct)&&(ct=null),On.forEach(ca),Fn.forEach(ca)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Sd)))}function Hn(e){function t(l){return vn(l,e)}if(0<pr.length){vn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&vn(at,e),st!==null&&vn(st,e),ct!==null&&vn(ct,e),On.forEach(t),Fn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)qs(n),n.blockedOn===null&&rt.shift()}var Xt=Ze.ReactCurrentBatchConfig,Hr=!0;function jd(e,t,n,r){var l=O,i=Xt.transition;Xt.transition=null;try{O=1,oo(e,t,n,r)}finally{O=l,Xt.transition=i}}function Nd(e,t,n,r){var l=O,i=Xt.transition;Xt.transition=null;try{O=4,oo(e,t,n,r)}finally{O=l,Xt.transition=i}}function oo(e,t,n,r){if(Hr){var l=xi(e,t,n,r);if(l===null)Ul(e,t,r,Br,n),sa(e,r);else if(kd(l,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<wd.indexOf(e)){for(;l!==null;){var i=nr(l);if(i!==null&&Vs(i),i=xi(e,t,n,r),i===null&&Ul(e,t,r,Br,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Br=null;function xi(e,t,n,r){if(Br=null,e=no(r),e=Nt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Is(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dd()){case ro:return 1;case Hs:return 4;case Or:case pd:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var it=null,ao=null,br=null;function Ys(){if(br)return br;var e,t=ao,n=t.length,r,l="value"in it?it.value:it.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return br=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function ua(){return!1}function je(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fr:ua,this.isPropagationStopped=ua,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=je(un),tr=Q({},un,{view:0,detail:0}),Cd=je(tr),_l,Al,xn,sl=Q({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(_l=e.screenX-xn.screenX,Al=e.screenY-xn.screenY):Al=_l=0,xn=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),da=je(sl),bd=Q({},sl,{dataTransfer:0}),Ed=je(bd),zd=Q({},tr,{relatedTarget:0}),Rl=je(zd),Pd=Q({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=je(Pd),Td=Q({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ld=je(Td),_d=Q({},un,{data:0}),pa=je(_d),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Id[e])?!!t[e]:!1}function co(){return Dd}var Od=Q({},tr,{key:function(e){if(e.key){var t=Ad[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=je(Od),Hd=Q({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fa=je(Hd),Bd=Q({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Ud=je(Bd),$d=Q({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=je($d),Qd=Q({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=je(Qd),Gd=[9,13,27,32],uo=qe&&"CompositionEvent"in window,zn=null;qe&&"documentMode"in document&&(zn=document.documentMode);var qd=qe&&"TextEvent"in window&&!zn,Ks=qe&&(!uo||zn&&8<zn&&11>=zn),ma=" ",ha=!1;function Xs(e,t){switch(e){case"keyup":return Gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Jd(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(ha=!0,ma);case"textInput":return e=t.data,e===ma&&ha?null:e;default:return null}}function Yd(e,t){if(Ft)return e==="compositionend"||!uo&&Xs(e,t)?(e=Ys(),br=ao=it=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kd[e.type]:t==="textarea"}function ec(e,t,n,r){Ts(r),t=Ur(t,"onChange"),0<t.length&&(n=new so("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Bn=null;function Xd(e){dc(e,0)}function cl(e){var t=Ut(e);if(Ns(t))return e}function Zd(e,t){if(e==="change")return t}var tc=!1;if(qe){var Il;if(qe){var Dl="oninput"in document;if(!Dl){var va=document.createElement("div");va.setAttribute("oninput","return;"),Dl=typeof va.oninput=="function"}Il=Dl}else Il=!1;tc=Il&&(!document.documentMode||9<document.documentMode)}function xa(){Pn&&(Pn.detachEvent("onpropertychange",nc),Bn=Pn=null)}function nc(e){if(e.propertyName==="value"&&cl(Bn)){var t=[];ec(t,Bn,e,no(e)),Rs(Xd,t)}}function ep(e,t,n){e==="focusin"?(xa(),Pn=t,Bn=n,Pn.attachEvent("onpropertychange",nc)):e==="focusout"&&xa()}function tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Bn)}function np(e,t){if(e==="click")return cl(t)}function rp(e,t){if(e==="input"||e==="change")return cl(t)}function lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:lp;function Un(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ei.call(t,l)||!De(e[l],t[l]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wa(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ip(e){var t=lc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rc(n.ownerDocument.documentElement,n)){if(r!==null&&po(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=wa(n,i);var a=wa(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var op=qe&&"documentMode"in document&&11>=document.documentMode,Ht=null,yi=null,Mn=null,wi=!1;function ka(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||Ht==null||Ht!==Rr(r)||(r=Ht,"selectionStart"in r&&po(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Un(Mn,r)||(Mn=r,r=Ur(yi,"onSelect"),0<r.length&&(t=new so("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Ol={},ic={};qe&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function ul(e){if(Ol[e])return Ol[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ic)return Ol[e]=t[n];return e}var oc=ul("animationend"),ac=ul("animationiteration"),sc=ul("animationstart"),cc=ul("transitionend"),uc=new Map,Sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){uc.set(e,t),At(t,[e])}for(var Fl=0;Fl<Sa.length;Fl++){var Hl=Sa[Fl],ap=Hl.toLowerCase(),sp=Hl[0].toUpperCase()+Hl.slice(1);vt(ap,"on"+sp)}vt(oc,"onAnimationEnd");vt(ac,"onAnimationIteration");vt(sc,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(cc,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function ja(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ad(r,t,void 0,e),e.currentTarget=null}function dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],s=c.instance,d=c.currentTarget;if(c=c.listener,s!==i&&l.isPropagationStopped())break e;ja(l,c,d),i=s}else for(a=0;a<r.length;a++){if(c=r[a],s=c.instance,d=c.currentTarget,c=c.listener,s!==i&&l.isPropagationStopped())break e;ja(l,c,d),i=s}}}if(Dr)throw e=hi,Dr=!1,hi=null,e}function H(e,t){var n=t[Ci];n===void 0&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(pc(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),pc(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[hr]){e[hr]=!0,ys.forEach(function(n){n!=="selectionchange"&&(cp.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,Bl("selectionchange",!1,t))}}function pc(e,t,n,r){switch(Js(t)){case 1:var l=jd;break;case 4:l=Nd;break;default:l=oo}n=l.bind(null,t,n,e),l=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;a=a.return}for(;c!==null;){if(a=Nt(c),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}c=c.parentNode}}r=r.return}Rs(function(){var d=i,h=no(n),g=[];e:{var m=uc.get(e);if(m!==void 0){var w=so,k=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":w=Fd;break;case"focusin":k="focus",w=Rl;break;case"focusout":k="blur",w=Rl;break;case"beforeblur":case"afterblur":w=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ud;break;case oc:case ac:case sc:w=Md;break;case cc:w=Vd;break;case"scroll":w=Cd;break;case"wheel":w=Wd;break;case"copy":case"cut":case"paste":w=Ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=fa}var v=(t&4)!==0,z=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var u=d,f;u!==null;){f=u;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Dn(u,p),x!=null&&v.push(Vn(u,x,f)))),z)break;u=u.return}0<v.length&&(m=new w(m,k,null,n,h),g.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==pi&&(k=n.relatedTarget||n.fromElement)&&(Nt(k)||k[Je]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?Nt(k):null,k!==null&&(z=Rt(k),k!==z||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(v=da,x="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=fa,x="onPointerLeave",p="onPointerEnter",u="pointer"),z=w==null?m:Ut(w),f=k==null?m:Ut(k),m=new v(x,u+"leave",w,n,h),m.target=z,m.relatedTarget=f,x=null,Nt(h)===d&&(v=new v(p,u+"enter",k,n,h),v.target=f,v.relatedTarget=z,x=v),z=x,w&&k)t:{for(v=w,p=k,u=0,f=v;f;f=It(f))u++;for(f=0,x=p;x;x=It(x))f++;for(;0<u-f;)v=It(v),u--;for(;0<f-u;)p=It(p),f--;for(;u--;){if(v===p||p!==null&&v===p.alternate)break t;v=It(v),p=It(p)}v=null}else v=null;w!==null&&Na(g,m,w,v,!1),k!==null&&z!==null&&Na(g,z,k,v,!0)}}e:{if(m=d?Ut(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=Zd;else if(ga(m))if(tc)j=rp;else{j=tp;var C=ep}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=np);if(j&&(j=j(e,d))){ec(g,j,n,h);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ai(m,"number",m.value)}switch(C=d?Ut(d):window,e){case"focusin":(ga(C)||C.contentEditable==="true")&&(Ht=C,yi=d,Mn=null);break;case"focusout":Mn=yi=Ht=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,ka(g,n,h);break;case"selectionchange":if(op)break;case"keydown":case"keyup":ka(g,n,h)}var b;if(uo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ft?Xs(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ks&&n.locale!=="ko"&&(Ft||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ft&&(b=Ys()):(it=h,ao="value"in it?it.value:it.textContent,Ft=!0)),C=Ur(d,E),0<C.length&&(E=new pa(E,e,null,n,h),g.push({event:E,listeners:C}),b?E.data=b:(b=Zs(n),b!==null&&(E.data=b)))),(b=qd?Jd(e,n):Yd(e,n))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(h=new pa("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=b))}dc(g,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Vn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Vn(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Na(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var c=n,s=c.alternate,d=c.stateNode;if(s!==null&&s===r)break;c.tag===5&&d!==null&&(c=d,l?(s=Dn(n,i),s!=null&&a.unshift(Vn(n,s,c))):l||(s=Dn(n,i),s!=null&&a.push(Vn(n,s,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var up=/\r\n?/g,dp=/\u0000|\uFFFD/g;function Ca(e){return(typeof e=="string"?e:""+e).replace(up,`
`).replace(dp,"")}function gr(e,t,n){if(t=Ca(t),Ca(e)!==t&&n)throw Error(y(425))}function $r(){}var ki=null,Si=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,pp=typeof clearTimeout=="function"?clearTimeout:void 0,ba=typeof Promise=="function"?Promise:void 0,fp=typeof queueMicrotask=="function"?queueMicrotask:typeof ba<"u"?function(e){return ba.resolve(null).then(e).catch(mp)}:Ni;function mp(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ea(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),He="__reactFiber$"+dn,Qn="__reactProps$"+dn,Je="__reactContainer$"+dn,Ci="__reactEvents$"+dn,hp="__reactListeners$"+dn,gp="__reactHandles$"+dn;function Nt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ea(e);e!==null;){if(n=e[He])return n;e=Ea(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[He]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function dl(e){return e[Qn]||null}var bi=[],$t=-1;function xt(e){return{current:e}}function B(e){0>$t||(e.current=bi[$t],bi[$t]=null,$t--)}function F(e,t){$t++,bi[$t]=e.current,e.current=t}var gt={},se=xt(gt),he=xt(!1),Pt=gt;function nn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function Vr(){B(he),B(se)}function za(e,t,n){if(se.current!==gt)throw Error(y(168));F(se,t),F(he,n)}function fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,ed(e)||"Unknown",l));return Q({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=se.current,F(se,e),F(he,he.current),!0}function Pa(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=fc(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,B(he),B(se),F(se,e)):B(he),F(he,n)}var Ve=null,pl=!1,Vl=!1;function mc(e){Ve===null?Ve=[e]:Ve.push(e)}function vp(e){pl=!0,mc(e)}function yt(){if(!Vl&&Ve!==null){Vl=!0;var e=0,t=O;try{var n=Ve;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,pl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Fs(ro,yt),l}finally{O=t,Vl=!1}}return null}var Vt=[],Qt=0,Wr=null,Gr=0,Ne=[],Ce=0,Mt=null,Qe=1,We="";function St(e,t){Vt[Qt++]=Gr,Vt[Qt++]=Wr,Wr=e,Gr=t}function hc(e,t,n){Ne[Ce++]=Qe,Ne[Ce++]=We,Ne[Ce++]=Mt,Mt=e;var r=Qe;e=We;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var i=32-Re(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Qe=1<<32-Re(t)+l|n<<l|r,We=i+e}else Qe=1<<i|n<<l|r,We=e}function fo(e){e.return!==null&&(St(e,1),hc(e,1,0))}function mo(e){for(;e===Wr;)Wr=Vt[--Qt],Vt[Qt]=null,Gr=Vt[--Qt],Vt[Qt]=null;for(;e===Mt;)Mt=Ne[--Ce],Ne[Ce]=null,We=Ne[--Ce],Ne[Ce]=null,Qe=Ne[--Ce],Ne[Ce]=null}var we=null,ye=null,U=!1,Ae=null;function gc(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Qe,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(U){var t=ye;if(t){var n=t;if(!Ma(e,t)){if(Ei(e))throw Error(y(418));t=ut(n.nextSibling);var r=we;t&&Ma(e,t)?gc(r,n):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Ei(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function Ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function vr(e){if(e!==we)return!1;if(!U)return Ta(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=ye)){if(Ei(e))throw vc(),Error(y(418));for(;t;)gc(e,t),t=ut(t.nextSibling)}if(Ta(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ut(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=ye;e;)e=ut(e.nextSibling)}function rn(){ye=we=null,U=!1}function ho(e){Ae===null?Ae=[e]:Ae.push(e)}var xp=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var c=l.refs;a===null?delete c[i]:c[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function La(e){var t=e._init;return t(e._payload)}function xc(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function l(p,u){return p=mt(p,u),p.index=0,p.sibling=null,p}function i(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function c(p,u,f,x){return u===null||u.tag!==6?(u=Kl(f,p.mode,x),u.return=p,u):(u=l(u,f),u.return=p,u)}function s(p,u,f,x){var j=f.type;return j===Ot?h(p,u,f.props.children,x,f.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&La(j)===u.type)?(x=l(u,f.props),x.ref=yn(p,u,f),x.return=p,x):(x=Ar(f.type,f.key,f.props,null,p.mode,x),x.ref=yn(p,u,f),x.return=p,x)}function d(p,u,f,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Xl(f,p.mode,x),u.return=p,u):(u=l(u,f.children||[]),u.return=p,u)}function h(p,u,f,x,j){return u===null||u.tag!==7?(u=zt(f,p.mode,x,j),u.return=p,u):(u=l(u,f),u.return=p,u)}function g(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Kl(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ar:return f=Ar(u.type,u.key,u.props,null,p.mode,f),f.ref=yn(p,null,u),f.return=p,f;case Dt:return u=Xl(u,p.mode,f),u.return=p,u;case tt:var x=u._init;return g(p,x(u._payload),f)}if(jn(u)||mn(u))return u=zt(u,p.mode,f,null),u.return=p,u;xr(p,u)}return null}function m(p,u,f,x){var j=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:c(p,u,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:return f.key===j?s(p,u,f,x):null;case Dt:return f.key===j?d(p,u,f,x):null;case tt:return j=f._init,m(p,u,j(f._payload),x)}if(jn(f)||mn(f))return j!==null?null:h(p,u,f,x,null);xr(p,f)}return null}function w(p,u,f,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,c(u,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ar:return p=p.get(x.key===null?f:x.key)||null,s(u,p,x,j);case Dt:return p=p.get(x.key===null?f:x.key)||null,d(u,p,x,j);case tt:var C=x._init;return w(p,u,f,C(x._payload),j)}if(jn(x)||mn(x))return p=p.get(f)||null,h(u,p,x,j,null);xr(u,x)}return null}function k(p,u,f,x){for(var j=null,C=null,b=u,E=u=0,G=null;b!==null&&E<f.length;E++){b.index>E?(G=b,b=null):G=b.sibling;var R=m(p,b,f[E],x);if(R===null){b===null&&(b=G);break}e&&b&&R.alternate===null&&t(p,b),u=i(R,u,E),C===null?j=R:C.sibling=R,C=R,b=G}if(E===f.length)return n(p,b),U&&St(p,E),j;if(b===null){for(;E<f.length;E++)b=g(p,f[E],x),b!==null&&(u=i(b,u,E),C===null?j=b:C.sibling=b,C=b);return U&&St(p,E),j}for(b=r(p,b);E<f.length;E++)G=w(b,p,E,f[E],x),G!==null&&(e&&G.alternate!==null&&b.delete(G.key===null?E:G.key),u=i(G,u,E),C===null?j=G:C.sibling=G,C=G);return e&&b.forEach(function(Me){return t(p,Me)}),U&&St(p,E),j}function v(p,u,f,x){var j=mn(f);if(typeof j!="function")throw Error(y(150));if(f=j.call(f),f==null)throw Error(y(151));for(var C=j=null,b=u,E=u=0,G=null,R=f.next();b!==null&&!R.done;E++,R=f.next()){b.index>E?(G=b,b=null):G=b.sibling;var Me=m(p,b,R.value,x);if(Me===null){b===null&&(b=G);break}e&&b&&Me.alternate===null&&t(p,b),u=i(Me,u,E),C===null?j=Me:C.sibling=Me,C=Me,b=G}if(R.done)return n(p,b),U&&St(p,E),j;if(b===null){for(;!R.done;E++,R=f.next())R=g(p,R.value,x),R!==null&&(u=i(R,u,E),C===null?j=R:C.sibling=R,C=R);return U&&St(p,E),j}for(b=r(p,b);!R.done;E++,R=f.next())R=w(b,p,E,R.value,x),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?E:R.key),u=i(R,u,E),C===null?j=R:C.sibling=R,C=R);return e&&b.forEach(function(pn){return t(p,pn)}),U&&St(p,E),j}function z(p,u,f,x){if(typeof f=="object"&&f!==null&&f.type===Ot&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:e:{for(var j=f.key,C=u;C!==null;){if(C.key===j){if(j=f.type,j===Ot){if(C.tag===7){n(p,C.sibling),u=l(C,f.props.children),u.return=p,p=u;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&La(j)===C.type){n(p,C.sibling),u=l(C,f.props),u.ref=yn(p,C,f),u.return=p,p=u;break e}n(p,C);break}else t(p,C);C=C.sibling}f.type===Ot?(u=zt(f.props.children,p.mode,x,f.key),u.return=p,p=u):(x=Ar(f.type,f.key,f.props,null,p.mode,x),x.ref=yn(p,u,f),x.return=p,p=x)}return a(p);case Dt:e:{for(C=f.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=l(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Xl(f,p.mode,x),u.return=p,p=u}return a(p);case tt:return C=f._init,z(p,u,C(f._payload),x)}if(jn(f))return k(p,u,f,x);if(mn(f))return v(p,u,f,x);xr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=l(u,f),u.return=p,p=u):(n(p,u),u=Kl(f,p.mode,x),u.return=p,p=u),a(p)):n(p,u)}return z}var ln=xc(!0),yc=xc(!1),qr=xt(null),Jr=null,Wt=null,go=null;function vo(){go=Wt=Jr=null}function xo(e){var t=qr.current;B(qr),e._currentValue=t}function Pi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Jr=e,go=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(go!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Jr===null)throw Error(y(308));Wt=e,Jr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Ct=null;function yo(e){Ct===null?Ct=[e]:Ct.push(e)}function wc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lo(e,n)}}function _a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;nt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var s=c,d=s.next;s.next=null,a===null?i=d:a.next=d,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==a&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;a=0,h=d=s=null,c=i;do{var m=c.lane,w=c.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var k=e,v=c;switch(m=t,w=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=Q({},g,m);break e;case 2:nt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[c]:m.push(c))}else w={eventTime:w,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=w,s=g):h=h.next=w,a|=m;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;m=c,c=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(s=g),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Lt|=a,e.lanes=a,e.memoizedState=g}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var rr={},Ue=xt(rr),Wn=xt(rr),Gn=xt(rr);function bt(e){if(e===rr)throw Error(y(174));return e}function ko(e,t){switch(F(Gn,t),F(Wn,e),F(Ue,rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}B(Ue),F(Ue,t)}function on(){B(Ue),B(Wn),B(Gn)}function Sc(e){bt(Gn.current);var t=bt(Ue.current),n=ci(t,e.type);t!==n&&(F(Wn,e),F(Ue,n))}function So(e){Wn.current===e&&(B(Ue),B(Wn))}var $=xt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function jo(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Pr=Ze.ReactCurrentDispatcher,Wl=Ze.ReactCurrentBatchConfig,Tt=0,V=null,K=null,ee=null,Xr=!1,Tn=!1,qn=0,yp=0;function ie(){throw Error(y(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,l,i){if(Tt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?jp:Np,e=n(r,l),Tn){i=0;do{if(Tn=!1,qn=0,25<=i)throw Error(y(301));i+=1,ee=K=null,t.updateQueue=null,Pr.current=Cp,e=n(r,l)}while(Tn)}if(Pr.current=Zr,t=K!==null&&K.next!==null,Tt=0,ee=K=V=null,Xr=!1,t)throw Error(y(300));return e}function bo(){var e=qn!==0;return qn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Pe(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function Jn(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var c=a=null,s=null,d=i;do{var h=d.lane;if((Tt&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(c=s=g,a=r):s=s.next=g,V.lanes|=h,Lt|=h}d=d.next}while(d!==null&&d!==i);s===null?a=r:s.next=c,De(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Lt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);De(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function jc(){}function Nc(e,t){var n=V,r=Pe(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,Eo(Ec.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Yn(9,bc.bind(null,n,r,l,t),void 0,null),te===null)throw Error(y(349));Tt&30||Cc(n,t,l)}return l}function Cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bc(e,t,n,r){t.value=n,t.getSnapshot=r,zc(t)&&Pc(e)}function Ec(e,t,n){return n(function(){zc(t)&&Pc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Pc(e){var t=Ye(e,1);t!==null&&Ie(t,e,1,-1)}function Ra(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Sp.bind(null,V,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mc(){return Pe().memoizedState}function Mr(e,t,n,r){var l=Fe();V.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(K!==null){var a=K.memoizedState;if(i=a.destroy,r!==null&&No(r,a.deps)){l.memoizedState=Yn(t,n,i,r);return}}V.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function Ia(e,t){return Mr(8390656,8,e,t)}function Eo(e,t){return fl(2048,8,e,t)}function Tc(e,t){return fl(4,2,e,t)}function Lc(e,t){return fl(4,4,e,t)}function _c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,_c.bind(null,t,e),n)}function zo(){}function Rc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ic(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dc(e,t,n){return Tt&21?(De(n,t)||(n=Us(),V.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function wp(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{O=n,Wl.transition=r}}function Oc(){return Pe().memoizedState}function kp(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Hc(t,n);else if(n=wc(e,t,n,r),n!==null){var l=ue();Ie(n,e,r,l),Bc(n,t,r)}}function Sp(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Hc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,c=i(a,n);if(l.hasEagerState=!0,l.eagerState=c,De(c,a)){var s=t.interleaved;s===null?(l.next=l,yo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=wc(e,t,l,r),n!==null&&(l=ue(),Ie(n,e,r,l),Bc(n,t,r))}}function Fc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Hc(e,t){Tn=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lo(e,n)}}var Zr={readContext:ze,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},jp={readContext:ze,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Ia,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mr(4194308,4,_c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ra,useDebugValue:zo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ra(!1),t=e[0];return e=wp.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Fe();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),te===null)throw Error(y(349));Tt&30||Cc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ia(Ec.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,bc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=te.identifierPrefix;if(U){var n=We,r=Qe;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Np={readContext:ze,useCallback:Rc,useContext:ze,useEffect:Eo,useImperativeHandle:Ac,useInsertionEffect:Tc,useLayoutEffect:Lc,useMemo:Ic,useReducer:Gl,useRef:Mc,useState:function(){return Gl(Jn)},useDebugValue:zo,useDeferredValue:function(e){var t=Pe();return Dc(t,K.memoizedState,e)},useTransition:function(){var e=Gl(Jn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Nc,useId:Oc,unstable_isNewReconciler:!1},Cp={readContext:ze,useCallback:Rc,useContext:ze,useEffect:Eo,useImperativeHandle:Ac,useInsertionEffect:Tc,useLayoutEffect:Lc,useMemo:Ic,useReducer:ql,useRef:Mc,useState:function(){return ql(Jn)},useDebugValue:zo,useDeferredValue:function(e){var t=Pe();return K===null?t.memoizedState=e:Dc(t,K.memoizedState,e)},useTransition:function(){var e=ql(Jn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Nc,useId:Oc,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Ge(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Ie(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Ge(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Ie(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Ie(t,e,r,n),zr(t,e,r))}};function Da(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function Uc(e,t,n){var r=!1,l=gt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=ge(t)?Pt:se.current,r=t.contextTypes,i=(r=r!=null)?nn(e,l):gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},wo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=ge(t)?Pt:se.current,l.context=nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Zu(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bp=typeof WeakMap=="function"?WeakMap:Map;function $c(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Ui=r),Li(e,t)},n}function Vc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Hp.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ba(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Ep=Ze.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?yc(t,null,n,r):ln(t,e.child,n,r)}function Ua(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=Co(e,t,n,r,i,l),n=bo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(U&&n&&fo(t),t.flags|=1,ce(e,t,r,l),t.child)}function $a(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Io(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qc(e,t,i,r,l)):(e=Ar(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(a,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return _i(e,t,n,r,l)}function Wc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(qt,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(qt,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(qt,xe),xe|=r;return ce(e,t,l,n),t.child}function Gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _i(e,t,n,r,l){var i=ge(n)?Pt:se.current;return i=nn(t,i),Zt(t,l),n=Co(e,t,n,r,i,l),r=bo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(U&&r&&fo(t),t.flags|=1,ce(e,t,n,l),t.child)}function Va(e,t,n,r,l){if(ge(n)){var i=!0;Qr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)Tr(e,t),Uc(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=ge(n)?Pt:se.current,d=nn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||s!==d)&&Oa(t,a,r,d),nt=!1;var m=t.memoizedState;a.state=m,Yr(t,r,a,l),s=t.memoizedState,c!==r||m!==s||he.current||nt?(typeof h=="function"&&(Mi(t,n,h,r),s=t.memoizedState),(c=nt||Da(t,n,c,r,m,s,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,kc(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Le(t.type,c),a.props=d,g=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=ge(n)?Pt:se.current,s=nn(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==g||m!==s)&&Oa(t,a,r,s),nt=!1,m=t.memoizedState,a.state=m,Yr(t,r,a,l);var k=t.memoizedState;c!==g||m!==k||he.current||nt?(typeof w=="function"&&(Mi(t,n,w,r),k=t.memoizedState),(d=nt||Da(t,n,d,r,m,k,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,i,l)}function Ai(e,t,n,r,l,i){Gc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Pa(t,n,!1),Ke(e,t,i);r=t.stateNode,Ep.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ln(t,e.child,null,i),t.child=ln(t,null,c,i)):ce(e,t,c,i),t.memoizedState=r.state,l&&Pa(t,n,!0),t.child}function qc(e){var t=e.stateNode;t.pendingContext?za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&za(e,t.context,!1),ko(e,t.containerInfo)}function Qa(e,t,n,r,l){return rn(),ho(l),t.flags|=256,ce(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jc(e,t,n){var r=t.pendingProps,l=$.current,i=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F($,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=vl(a,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Ri,e):Po(t,a));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return zp(e,t,a,r,c,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,c=l.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?i=mt(c,i):(i=zt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ii(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Po(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&ho(r),ln(t,e.child,null,n),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zp(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(y(422))),yr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),i=zt(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ln(t,e.child,null,a),t.child.memoizedState=Ii(a),t.memoizedState=Ri,i);if(!(t.mode&1))return yr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(y(419)),r=Jl(i,r,void 0),yr(e,t,a,r)}if(c=(a&e.childLanes)!==0,me||c){if(r=te,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Ie(r,e,l,-1))}return Ro(),r=Jl(Error(y(421))),yr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Bp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ut(l.nextSibling),we=t,U=!0,Ae=null,e!==null&&(Ne[Ce++]=Qe,Ne[Ce++]=We,Ne[Ce++]=Mt,Qe=e.id,We=e.overflow,Mt=t),t=Po(t,r.children),t.flags|=4096,t)}function Wa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pi(e.return,t,n)}function Yl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Yc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wa(e,n,t);else if(e.tag===19)Wa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t,n){switch(t.tag){case 3:qc(t),rn();break;case 5:Sc(t);break;case 1:ge(t.type)&&Qr(t);break;case 4:ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Jc(e,t,n):(F($,$.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);F($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Wc(e,t,n)}return Ke(e,t,n)}var Kc,Di,Xc,Zc;Kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Di=function(){};Xc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Ue.current);var i=null;switch(n){case"input":l=ii(e,l),r=ii(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=si(e,l),r=si(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}ui(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var c=l[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(c=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==c&&(s!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&c[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,c=c?c.__html:void 0,s!=null&&c!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&H("scroll",e),i||c===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mp(e,t,n){var r=t.pendingProps;switch(mo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&Vr(),oe(t),null;case 3:return r=t.stateNode,on(),B(he),B(se),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Qi(Ae),Ae=null))),Di(e,t),oe(t),null;case 5:So(t);var l=bt(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Xc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return oe(t),null}if(e=bt(Ue.current),vr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[He]=t,r[Qn]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)H(Cn[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ta(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ra(r,i),H("invalid",r)}ui(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&gr(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&gr(r.textContent,c,e),l=["children",""+c]):Rn.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":sr(r),na(r,i,!0);break;case"textarea":sr(r),la(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Es(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[Qn]=r,Kc(e,t,!1,!1),t.stateNode=e;e:{switch(a=di(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)H(Cn[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":ta(e,r),l=ii(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":ra(e,r),l=si(e,r),H("invalid",e);break;default:l=r}ui(n,l),c=l;for(i in c)if(c.hasOwnProperty(i)){var s=c[i];i==="style"?Ms(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&zs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&In(e,s):typeof s=="number"&&In(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&Xi(e,i,s,a))}switch(n){case"input":sr(e),na(e,r,!1);break;case"textarea":sr(e),la(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=bt(Gn.current),bt(Ue.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return oe(t),null;case 13:if(B($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))vc(),rn(),t.flags|=98560,i=!1;else if(i=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[He]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Ae!==null&&(Qi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?X===0&&(X=3):Ro())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return on(),Di(e,t),e===null&&$n(t.stateNode.containerInfo),oe(t),null;case 10:return xo(t.type._context),oe(t),null;case 17:return ge(t.type)&&Vr(),oe(t),null;case 19:if(B($),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)wn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Kr(e),a!==null){for(t.flags|=128,wn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>sn&&(t.flags|=128,r=!0,wn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!U)return oe(t),null}else 2*J()-i.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,wn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=$.current,F($,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Tp(e,t){switch(mo(t),t.tag){case 1:return ge(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),B(he),B(se),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(B($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B($),null;case 4:return on(),null;case 10:return xo(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var wr=!1,ae=!1,Lp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Oi(e,t,n){try{n()}catch(r){W(e,t,r)}}var Ga=!1;function _p(e,t){if(ki=Hr,e=lc(),po(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,c=-1,s=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(c=a+l),g!==i||r!==0&&g.nodeType!==3||(s=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++d===l&&(c=a),m===i&&++h===r&&(s=a),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=c===-1||s===-1?null:{start:c,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},Hr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,z=k.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Le(t.type,v),z);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(x){W(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Ga,Ga=!1,k}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Oi(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Qn],delete t[Ci],delete t[hp],delete t[gp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var ne=null,_e=!1;function et(e,t,n){for(n=n.child;n!==null;)nu(e,t,n),n=n.sibling}function nu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:ae||Gt(n,t);case 6:var r=ne,l=_e;ne=null,et(e,t,n),ne=r,_e=l,ne!==null&&(_e?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(_e?(e=ne,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Hn(e)):$l(ne,n.stateNode));break;case 4:r=ne,l=_e,ne=n.stateNode.containerInfo,_e=!0,et(e,t,n),ne=r,_e=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Oi(n,t,a),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!ae&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){W(n,t,c)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,et(e,t,n),ae=r):et(e,t,n);break;default:et(e,t,n)}}function Ja(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lp),t.forEach(function(r){var l=Up.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:ne=c.stateNode,_e=!1;break e;case 3:ne=c.stateNode.containerInfo,_e=!0;break e;case 4:ne=c.stateNode.containerInfo,_e=!0;break e}c=c.return}if(ne===null)throw Error(y(160));nu(i,a,l),ne=null,_e=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){W(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Oe(e),r&4){try{Ln(3,e,e.return),hl(3,e)}catch(v){W(e,e.return,v)}try{Ln(5,e,e.return)}catch(v){W(e,e.return,v)}}break;case 1:Te(t,e),Oe(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Te(t,e),Oe(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(v){W(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,c=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Cs(l,i),di(c,a);var d=di(c,i);for(a=0;a<s.length;a+=2){var h=s[a],g=s[a+1];h==="style"?Ms(l,g):h==="dangerouslySetInnerHTML"?zs(l,g):h==="children"?In(l,g):Xi(l,h,g,d)}switch(c){case"input":oi(l,i);break;case"textarea":bs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Jt(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Jt(l,!!i.multiple,i.defaultValue,!0):Jt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qn]=i}catch(v){W(e,e.return,v)}}break;case 6:if(Te(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){W(e,e.return,v)}}break;case 3:if(Te(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(v){W(e,e.return,v)}break;case 4:Te(t,e),Oe(e);break;case 13:Te(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Lo=J())),r&4&&Ja(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||h,Te(t,e),ae=d):Te(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(g=S=h;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:Ln(4,m,m.return);break;case 1:Gt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){W(r,n,v)}}break;case 5:Gt(m,m.return);break;case 22:if(m.memoizedState!==null){Ka(g);continue}}w!==null?(w.return=m,S=w):Ka(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=g.stateNode,s=g.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,c.style.display=Ps("display",a))}catch(v){W(e,e.return,v)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(v){W(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Te(t,e),Oe(e),r&4&&Ja(e);break;case 21:break;default:Te(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=qa(e);Bi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,c=qa(e);Hi(e,c,a);break;default:throw Error(y(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,n){S=e,lu(e)}function lu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||wr;if(!a){var c=l.alternate,s=c!==null&&c.memoizedState!==null||ae;c=wr;var d=ae;if(wr=a,(ae=s)&&!d)for(S=l;S!==null;)a=S,s=a.child,a.tag===22&&a.memoizedState!==null?Xa(l):s!==null?(s.return=a,S=s):Xa(l);for(;i!==null;)S=i,lu(i),i=i.sibling;S=l,wr=c,ae=d}Ya(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ya(e)}}function Ya(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Aa(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||t.flags&512&&Fi(t)}catch(m){W(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ka(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Xa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(s){W(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){W(t,l,s)}}var i=t.return;try{Fi(t)}catch(s){W(t,i,s)}break;case 5:var a=t.return;try{Fi(t)}catch(s){W(t,a,s)}}}catch(s){W(t,t.return,s)}if(t===e){S=null;break}var c=t.sibling;if(c!==null){c.return=t.return,S=c;break}S=t.return}}var Rp=Math.ceil,el=Ze.ReactCurrentDispatcher,Mo=Ze.ReactCurrentOwner,Ee=Ze.ReactCurrentBatchConfig,I=0,te=null,Y=null,re=0,xe=0,qt=xt(0),X=0,Kn=null,Lt=0,gl=0,To=0,_n=null,fe=null,Lo=0,sn=1/0,$e=null,tl=!1,Ui=null,pt=null,kr=!1,ot=null,nl=0,An=0,$i=null,Lr=-1,_r=0;function ue(){return I&6?J():Lr!==-1?Lr:Lr=J()}function ft(e){return e.mode&1?I&2&&re!==0?re&-re:xp.transition!==null?(_r===0&&(_r=Us()),_r):(e=O,e!==0||(e=window.event,e=e===void 0?16:Js(e.type)),e):1}function Ie(e,t,n,r){if(50<An)throw An=0,$i=null,Error(y(185));er(e,n,r),(!(I&2)||e!==te)&&(e===te&&(!(I&2)&&(gl|=n),X===4&&lt(e,re)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(sn=J()+500,pl&&yt()))}function ve(e,t){var n=e.callbackNode;xd(e,t);var r=Fr(e,e===te?re:0);if(r===0)n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aa(n),t===1)e.tag===0?vp(Za.bind(null,e)):mc(Za.bind(null,e)),fp(function(){!(I&6)&&yt()}),n=null;else{switch($s(r)){case 1:n=ro;break;case 4:n=Hs;break;case 16:n=Or;break;case 536870912:n=Bs;break;default:n=Or}n=pu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Lr=-1,_r=0,I&6)throw Error(y(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=Fr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var l=I;I|=2;var i=au();(te!==e||re!==t)&&($e=null,sn=J()+500,Et(e,t));do try{Op();break}catch(c){ou(e,c)}while(!0);vo(),el.current=i,I=l,Y!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(l=gi(e),l!==0&&(r=l,t=Vi(e,l))),t===1)throw n=Kn,Et(e,0),lt(e,r),ve(e,J()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Ip(l)&&(t=rl(e,r),t===2&&(i=gi(e),i!==0&&(r=i,t=Vi(e,i))),t===1))throw n=Kn,Et(e,0),lt(e,r),ve(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:jt(e,fe,$e);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Lo+500-J(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ni(jt.bind(null,e,fe,$e),t);break}jt(e,fe,$e);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Re(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rp(r/1960))-r,10<r){e.timeoutHandle=Ni(jt.bind(null,e,fe,$e),r);break}jt(e,fe,$e);break;case 5:jt(e,fe,$e);break;default:throw Error(y(329))}}}return ve(e,J()),e.callbackNode===n?iu.bind(null,e):null}function Vi(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=rl(e,t),e!==2&&(t=fe,fe=n,t!==null&&Qi(t)),e}function Qi(e){fe===null?fe=e:fe.push.apply(fe,e)}function Ip(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~To,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Za(e){if(I&6)throw Error(y(327));en();var t=Fr(e,0);if(!(t&1))return ve(e,J()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=gi(e);r!==0&&(t=r,n=Vi(e,r))}if(n===1)throw n=Kn,Et(e,0),lt(e,t),ve(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,fe,$e),ve(e,J()),null}function _o(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(sn=J()+500,pl&&yt())}}function _t(e){ot!==null&&ot.tag===0&&!(I&6)&&en();var t=I;I|=1;var n=Ee.transition,r=O;try{if(Ee.transition=null,O=1,e)return e()}finally{O=r,Ee.transition=n,I=t,!(I&6)&&yt()}}function Ao(){xe=qt.current,B(qt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pp(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(mo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:on(),B(he),B(se),jo();break;case 5:So(r);break;case 4:on();break;case 13:B($);break;case 19:B($);break;case 10:xo(r.type._context);break;case 22:case 23:Ao()}n=n.return}if(te=e,Y=e=mt(e.current,null),re=xe=t,X=0,Kn=null,To=gl=Lt=0,fe=_n=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Ct=null}return e}function ou(e,t){do{var n=Y;try{if(vo(),Pr.current=Zr,Xr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(Tt=0,ee=K=V=null,Tn=!1,qn=0,Mo.current=null,n===null||n.return===null){X=1,Kn=t,Y=null;break}e:{var i=e,a=n.return,c=n,s=t;if(t=re,c.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=c,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ha(a);if(w!==null){w.flags&=-257,Ba(w,a,c,i,t),w.mode&1&&Fa(i,d,t),t=w,s=d;var k=t.updateQueue;if(k===null){var v=new Set;v.add(s),t.updateQueue=v}else k.add(s);break e}else{if(!(t&1)){Fa(i,d,t),Ro();break e}s=Error(y(426))}}else if(U&&c.mode&1){var z=Ha(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ba(z,a,c,i,t),ho(an(s,c));break e}}i=s=an(s,c),X!==4&&(X=2),_n===null?_n=[i]:_n.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=$c(i,s,t);_a(i,p);break e;case 1:c=s;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Vc(i,c,t);_a(i,x);break e}}i=i.return}while(i!==null)}cu(n)}catch(j){t=j,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function au(){var e=el.current;return el.current=Zr,e===null?Zr:e}function Ro(){(X===0||X===3||X===2)&&(X=4),te===null||!(Lt&268435455)&&!(gl&268435455)||lt(te,re)}function rl(e,t){var n=I;I|=2;var r=au();(te!==e||re!==t)&&($e=null,Et(e,t));do try{Dp();break}catch(l){ou(e,l)}while(!0);if(vo(),I=n,el.current=r,Y!==null)throw Error(y(261));return te=null,re=0,X}function Dp(){for(;Y!==null;)su(Y)}function Op(){for(;Y!==null&&!cd();)su(Y)}function su(e){var t=du(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?cu(e):Y=t,Mo.current=null}function cu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Mp(n,t,xe),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function jt(e,t,n){var r=O,l=Ee.transition;try{Ee.transition=null,O=1,Fp(e,t,n,r)}finally{Ee.transition=l,O=r}return null}function Fp(e,t,n,r){do en();while(ot!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yd(e,i),e===te&&(Y=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,pu(Or,function(){return en(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var a=O;O=1;var c=I;I|=4,Mo.current=null,_p(e,n),ru(n,e),ip(Si),Hr=!!ki,Si=ki=null,e.current=n,Ap(n),ud(),I=c,O=a,Ee.transition=i}else e.current=n;if(kr&&(kr=!1,ot=e,nl=l),i=e.pendingLanes,i===0&&(pt=null),fd(n.stateNode),ve(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(tl)throw tl=!1,e=Ui,Ui=null,e;return nl&1&&e.tag!==0&&en(),i=e.pendingLanes,i&1?e===$i?An++:(An=0,$i=e):An=0,yt(),null}function en(){if(ot!==null){var e=$s(nl),t=Ee.transition,n=O;try{if(Ee.transition=null,O=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,nl=0,I&6)throw Error(y(331));var l=I;for(I|=4,S=e.current;S!==null;){var i=S,a=i.child;if(S.flags&16){var c=i.deletions;if(c!==null){for(var s=0;s<c.length;s++){var d=c[s];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Ln(8,h,i)}var g=h.child;if(g!==null)g.return=h,S=g;else for(;S!==null;){h=S;var m=h.sibling,w=h.return;if(eu(h),h===d){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var k=i.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var z=v.sibling;v.sibling=null,v=z}while(v!==null)}}S=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,S=a;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,S=p;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){a=S;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,S=f;else e:for(a=u;S!==null;){if(c=S,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:hl(9,c)}}catch(j){W(c,c.return,j)}if(c===a){S=null;break e}var x=c.sibling;if(x!==null){x.return=c.return,S=x;break e}S=c.return}}if(I=l,yt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{O=n,Ee.transition=t}}return!1}function es(e,t,n){t=an(n,t),t=$c(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(er(e,1,t),ve(e,t))}function W(e,t,n){if(e.tag===3)es(e,e,n);else for(;t!==null;){if(t.tag===3){es(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=an(n,e),e=Vc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(er(t,1,e),ve(t,e));break}}t=t.return}}function Hp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>J()-Lo?Et(e,0):To|=n),ve(e,t)}function uu(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(er(e,t,n),ve(e,n))}function Bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uu(e,n)}function Up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),uu(e,n)}var du;du=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Pp(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&hc(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var l=nn(t,se.current);Zt(t,n),l=Co(null,t,r,e,l,n);var i=bo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,Qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,wo(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Ai(null,t,r,!0,i,n)):(t.tag=0,U&&i&&fo(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Vp(r),e=Le(r,e),l){case 0:t=_i(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=$a(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Va(e,t,r,l,n);case 3:e:{if(qc(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,kc(e,t),Yr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=an(Error(y(423)),t),t=Qa(e,t,r,n,l);break e}else if(r!==l){l=an(Error(y(424)),t),t=Qa(e,t,r,n,l);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),we=t,U=!0,Ae=null,n=yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===l){t=Ke(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Sc(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,ji(r,l)?a=null:i!==null&&ji(r,i)&&(t.flags|=32),Gc(e,t),ce(e,t,a,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Jc(e,t,n);case 4:return ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ua(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,F(qr,r._currentValue),r._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===l.children&&!he.current){t=Ke(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){a=i.child;for(var s=c.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ge(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Pi(i.return,n,t),c.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(y(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Pi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=ze(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),$a(e,t,r,l,n);case 15:return Qc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Tr(e,t),t.tag=1,ge(r)?(e=!0,Qr(t)):e=!1,Zt(t,n),Uc(t,r,l),Ti(t,r,l,n),Ai(null,t,r,!0,e,n);case 19:return Yc(e,t,n);case 22:return Wc(e,t,n)}throw Error(y(156,t.tag))};function pu(e,t){return Fs(e,t)}function $p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new $p(e,t,n,r)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vp(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eo)return 11;if(e===to)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Io(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ot:return zt(n.children,l,i,t);case Zi:a=8,l|=8;break;case ti:return e=be(12,n,t,l|2),e.elementType=ti,e.lanes=i,e;case ni:return e=be(13,n,t,l),e.elementType=ni,e.lanes=i,e;case ri:return e=be(19,n,t,l),e.elementType=ri,e.lanes=i,e;case Ss:return vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ws:a=10;break e;case ks:a=9;break e;case eo:a=11;break e;case to:a=14;break e;case tt:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=be(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=be(22,e,r,t),e.elementType=Ss,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,r,l,i,a,c,s){return e=new Qp(e,t,n,c,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wo(i),e}function Wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fu(e){if(!e)return gt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ge(n))return fc(e,n,t)}return t}function mu(e,t,n,r,l,i,a,c,s){return e=Do(n,r,!0,e,l,i,a,c,s),e.context=fu(null),n=e.current,r=ue(),l=ft(n),i=Ge(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,er(e,l,r),ve(e,r),e}function xl(e,t,n,r){var l=t.current,i=ue(),a=ft(l);return n=fu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,a),e!==null&&(Ie(e,l,a,i),zr(e,l,a)),a}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ts(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oo(e,t){ts(e,t),(e=e.alternate)&&ts(e,t)}function Gp(){return null}var hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}yl.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));xl(e,t,null,null)};yl.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){xl(null,e,null,null)}),t[Je]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ws();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&qs(e)}};function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ns(){}function qp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=ll(a);i.call(d)}}var a=mu(t,r,e,0,null,!1,!1,"",ns);return e._reactRootContainer=a,e[Je]=a.current,$n(e.nodeType===8?e.parentNode:e),_t(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var d=ll(s);c.call(d)}}var s=Do(e,0,!1,null,null,!1,!1,"",ns);return e._reactRootContainer=s,e[Je]=s.current,$n(e.nodeType===8?e.parentNode:e),_t(function(){xl(t,s,n,r)}),s}function kl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var c=l;l=function(){var s=ll(a);c.call(s)}}xl(t,a,e,l)}else a=qp(n,t,e,l,r);return ll(a)}Vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(lo(t,n|1),ve(t,J()),!(I&6)&&(sn=J()+500,yt()))}break;case 13:_t(function(){var r=Ye(e,1);if(r!==null){var l=ue();Ie(r,e,1,l)}}),Oo(e,1)}};io=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Ie(t,e,134217728,n)}Oo(e,134217728)}};Qs=function(e){if(e.tag===13){var t=ft(e),n=Ye(e,t);if(n!==null){var r=ue();Ie(n,e,t,r)}Oo(e,t)}};Ws=function(){return O};Gs=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};fi=function(e,t,n){switch(t){case"input":if(oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(y(90));Ns(r),oi(r,l)}}}break;case"textarea":bs(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};_s=_o;As=_t;var Jp={usingClientEntryPoint:!1,Events:[nr,Ut,dl,Ts,Ls,_o]},kn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ds(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{al=Sr.inject(Yp),Be=Sr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ho(t))throw Error(y(200));return Wp(e,t,null,n)};Se.createRoot=function(e,t){if(!Ho(e))throw Error(y(299));var n=!1,r="",l=hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,$n(e.nodeType===8?e.parentNode:e),new Fo(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ds(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return _t(e)};Se.hydrate=function(e,t,n){if(!wl(t))throw Error(y(200));return kl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Ho(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=hu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=mu(t,null,e,1,n??null,l,!1,i,a),e[Je]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new yl(t)};Se.render=function(e,t,n){if(!wl(t))throw Error(y(200));return kl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!wl(e))throw Error(y(40));return e._reactRootContainer?(_t(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=_o;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return kl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function gu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gu)}catch(e){console.error(e)}}gu(),gs.exports=Se;var Kp=gs.exports,rs=Kp;Zl.createRoot=rs.createRoot,Zl.hydrateRoot=rs.hydrateRoot;const Xp=()=>{const e=T.useRef(null);return T.useEffect(()=>{const t=e.current;if(!t)return;const n=t.getContext("2d");let r,l=t.width=window.innerWidth,i=t.height=window.innerHeight;const a=[],c=Math.min(Math.floor(l/18),75),s={x:null,y:null,radius:140};class d{constructor(){this.x=Math.random()*l,this.y=Math.random()*i,this.vx=(Math.random()-.5)*.8,this.vy=(Math.random()-.5)*.8,this.radius=Math.random()*2+1,this.baseAlpha=Math.random()*.4+.2}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>l)&&(this.vx*=-1),(this.y<0||this.y>i)&&(this.vy*=-1),s.x!==null&&s.y!==null){const z=s.x-this.x,p=s.y-this.y,u=Math.sqrt(z*z+p*p);if(u<s.radius){const f=(s.radius-u)/s.radius;this.x-=z/u*f*3,this.y-=p/u*f*3}}}draw(){n.beginPath(),n.arc(this.x,this.y,this.radius,0,Math.PI*2),n.fillStyle=`rgba(59, 130, 246, ${this.baseAlpha})`,n.fill()}}for(let v=0;v<c;v++)a.push(new d);const h=()=>{for(let v=0;v<a.length;v++)for(let z=v+1;z<a.length;z++){const p=a[v].x-a[z].x,u=a[v].y-a[z].y,f=Math.sqrt(p*p+u*u);if(f<120){const x=(1-f/120)*.22;n.beginPath(),n.moveTo(a[v].x,a[v].y),n.lineTo(a[z].x,a[z].y),n.strokeStyle=`rgba(139, 92, 246, ${x})`,n.lineWidth=.8,n.stroke()}}},g=()=>{n.clearRect(0,0,l,i),a.forEach(v=>{v.update(),v.draw()}),h(),r=requestAnimationFrame(g)};g();const m=()=>{l=t.width=window.innerWidth,i=t.height=window.innerHeight},w=v=>{s.x=v.clientX,s.y=v.clientY},k=()=>{s.x=null,s.y=null};return window.addEventListener("resize",m),window.addEventListener("mousemove",w),window.addEventListener("mouseleave",k),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",w),window.removeEventListener("mouseleave",k),cancelAnimationFrame(r)}},[]),o.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.6}})};class Zp{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}}playHover(){if(!this.muted)try{if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(420,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(840,this.ctx.currentTime+.05),n.gain.setValueAtTime(.015,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.05)}catch{}}playClick(){if(!this.muted)try{if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(580,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(290,this.ctx.currentTime+.08),n.gain.setValueAtTime(.04,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.08)}catch{}}playSuccess(){if(!this.muted)try{if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime;[523.25,659.25,783.99].forEach((n,r)=>{const l=this.ctx.createOscillator(),i=this.ctx.createGain();l.frequency.setValueAtTime(n,t+r*.06),i.gain.setValueAtTime(.03,t+r*.06),i.gain.exponentialRampToValueAtTime(.001,t+r*.06+.12),l.connect(i),i.connect(this.ctx.destination),l.start(t+r*.06),l.stop(t+r*.06+.12)})}catch{}}toggleMute(){return this.muted=!this.muted,this.muted}}const D=new Zp;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ef={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),L=(e,t)=>{const n=T.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:s,...d},h)=>T.createElement("svg",{ref:h,...ef,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${tf(e)}`,c].join(" "),...d},[...t.map(([g,m])=>T.createElement(g,m)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=L("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=L("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=L("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=L("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=L("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=L("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=L("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=L("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=L("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=L("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=L("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=L("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=L("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=L("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=L("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=L("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=L("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=L("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=L("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=L("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=L("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=L("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=L("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=L("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=L("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=L("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=L("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=L("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=L("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=L("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Cf=({activeSection:e,onNavigate:t,onOpenMncModal:n,onOpenTerminal:r,onOpenResumeModal:l,isDark:i,onToggleTheme:a})=>{const[c,s]=T.useState(0),[d,h]=T.useState(!1),[g,m]=T.useState(D.muted);T.useEffect(()=>{const v=()=>{const z=document.documentElement.scrollHeight-window.innerHeight,p=window.scrollY;s(p/z*100),h(p>40)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const w=()=>{const v=D.toggleMute();m(v)},k=[{id:"home",label:"Home",icon:ls},{id:"about",label:"About",icon:ls},{id:"skills",label:"Skills",icon:cf},{id:"experience",label:"Experience",icon:xu},{id:"architecture",label:"Architecture",icon:Vo},{id:"projects",label:"Projects",icon:yu},{id:"devops",label:"Terminal",icon:Su},{id:"contact",label:"Contact",icon:Wo}];return o.jsxs("header",{className:`navbar-header ${d?"scrolled":""}`,children:[o.jsx("div",{className:"scroll-progress-bar",style:{width:`${c}%`}}),o.jsxs("div",{className:"navbar-container",children:[o.jsxs("div",{className:"navbar-brand",onClick:()=>t("home"),children:[o.jsx("div",{className:"brand-icon",children:o.jsx(jl,{size:20,className:"icon-pulse"})}),o.jsxs("span",{className:"brand-name",children:["Raman",o.jsx("span",{className:"accent-dot",children:".dev"})]}),o.jsx("span",{className:"badge-mnc",children:"MNC Ready"})]}),o.jsx("nav",{className:"navbar-links",children:k.map(v=>{const z=v.icon,p=e===v.id;return o.jsxs("button",{className:`nav-item ${p?"active":""}`,onClick:()=>{D.playClick(),t(v.id)},children:[o.jsx(z,{size:14}),o.jsx("span",{children:v.label})]},v.id)})}),o.jsxs("div",{className:"navbar-actions",children:[o.jsxs("button",{className:"action-pill btn-mnc",onClick:()=>{D.playClick(),n()},title:"MNC Technical Interview Prep Cheat Sheet",children:[o.jsx(Bo,{size:16}),o.jsx("span",{className:"pill-text",children:"MNC Q&A"})]}),o.jsxs("button",{className:"action-pill btn-resume",onClick:()=>{D.playClick(),l()},title:"View ATS Resume",children:[o.jsx($o,{size:16}),o.jsx("span",{className:"pill-text",children:"ATS Resume"})]}),o.jsx("button",{className:"icon-circle-btn",onClick:w,title:g?"Unmute Web Audio":"Mute Web Audio",children:g?o.jsx(Nf,{size:16}):o.jsx(jf,{size:16})}),o.jsx("button",{className:"icon-circle-btn",onClick:()=>{D.playClick(),a()},title:"Toggle Light/Dark Theme",children:i?o.jsx(Sf,{size:16}):o.jsx(hf,{size:16})})]})]}),o.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;
        }

        .navbar-header.scrolled {
          background: color-mix(in srgb, var(--card-bg) 85%, transparent);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .scroll-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--theme-color), #a855f7, #ec4899);
          transition: width 0.1s ease-out;
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--theme-color), #8b5cf6);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .accent-dot {
          color: var(--theme-color);
        }

        .badge-mnc {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 6px;
          background: color-mix(in srgb, var(--card-bg) 60%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 30px;
          padding: 4px 8px;
          backdrop-filter: blur(12px);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s, background 0.2s;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--text-primary);
          background: color-mix(in srgb, var(--theme-color) 15%, transparent);
        }

        .nav-item.active {
          color: var(--theme-color);
          font-weight: 700;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .action-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-mnc {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
          color: #a78bfa;
          border: 1px solid rgba(139, 92, 246, 0.4);
        }

        .btn-mnc:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .btn-resume {
          background: color-mix(in srgb, var(--theme-color) 15%, transparent);
          color: var(--theme-color);
          border: 1px solid color-mix(in srgb, var(--theme-color) 35%, transparent);
        }

        .btn-resume:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px color-mix(in srgb, var(--theme-color) 30%, transparent);
        }

        .icon-circle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s, border-color 0.2s;
        }

        .icon-circle-btn:hover {
          color: var(--theme-color);
          border-color: var(--theme-color);
        }

        @media (max-width: 992px) {
          .navbar-links {
            display: none;
          }
          .pill-text {
            display: none;
          }
        }
      `})]})},Xe=({children:e,className:t="",style:n={},maxTilt:r=12,...l})=>{const i=T.useRef(null),[a,c]=T.useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),s=g=>{if(!i.current)return;const m=i.current.getBoundingClientRect(),w=g.clientX-m.left,k=g.clientY-m.top,v=m.width/2,z=m.height/2,p=(k-z)/z*-r,u=(w-v)/v*r;c(`perspective(1000px) rotateX(${p.toFixed(2)}deg) rotateY(${u.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`)},d=()=>{D.playHover()},h=()=>{c("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")};return o.jsx("div",{ref:i,className:`tilt-card-wrapper ${t}`,onMouseMove:s,onMouseEnter:d,onMouseLeave:h,style:{transform:a,transition:"transform 0.15s ease-out, box-shadow 0.25s ease-out",transformStyle:"preserve-3d",...n},...l,children:e})},M={personal:{name:"Ramanjaneyulu Boya",shortName:"Raman",titles:["Java Full Stack Developer","Microservices Architecture Specialist","Angular + Spring Boot Engineer","PostgreSQL Multitenancy Developer"],email:"ramanms8688@gmail.com",phone:"+91 8688505451",location:"Kurnool, Andhra Pradesh, India",github:"https://github.com/Raman-8688",linkedin:"https://linkedin.com/in/b-ramanjaneyulu-155021258",heroSub:"Full Stack Engineer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot 3.x</strong>, <strong>Angular 19</strong>, and <strong>Multi-Tenant PostgreSQL Systems</strong> — delivering real production software for enterprise clients."},achievements:[{icon:"fas fa-train",value:"Live Client",label:"Hyderabad Metro AMS",color:"#8b5cf6"},{icon:"fas fa-layer-group",value:"10+",label:"Microservices Mesh",color:"#3b82f6"},{icon:"fas fa-database",value:"3 Engines",label:"Postgres · MSSQL · MySQL",color:"#10b981"},{icon:"fas fa-robot",value:"AI Powered",label:"Hugging Face Translation",color:"#ec4899"}],about:{intro:"I am a <strong>Java Full Stack & Microservices Developer</strong> with 1 year of production experience engineering scalable enterprise solutions. My expertise ranges from deploying <strong>live asset tracking for Hyderabad Metro Rail</strong> to constructing <strong>dynamic schema-per-tenant multi-tenant SaaS platforms</strong> at Winfocus Solutions.",points:[{icon:"fas fa-train",title:"Hyderabad Metro Asset Management System (AMS)",text:"Engineered inventory tracking screens, MSSQL stored procedures, database indexes & synonyms, and decoupled microservices for high-volume transit infrastructure assets."},{icon:"fas fa-capsules",title:"Multi-Tenant Pharma SaaS Platform",text:"Built PostgreSQL dynamic schema-per-tenant isolation using custom Hibernate resolvers, Spring Cloud Gateway, and Eureka Discovery Server."},{icon:"fas fa-language",title:"Multilanguage AI Converter Tool",text:"Created an automated internal developer tool that scans Angular codebases, leverages Hugging Face AI for multi-locale translation, and generates SQL migration scripts."},{icon:"fas fa-shield-halved",title:"Enterprise Security & Resilience",text:"Configured Spring Security, JWT authentication, OAuth2 role-based access control, global exception handlers, and API Gateway route guards."}],infoCards:[{label:"Experience",value:"1 Year (Java Full Stack)",icon:"fas fa-briefcase",color:"#8b5cf6"},{label:"Current Employer",value:"Winfocus Solutions Pvt Ltd",icon:"fas fa-building",color:"#3b82f6"},{label:"Education",value:"Newtons Inst. of Engineering",icon:"fas fa-graduation-cap",color:"#10b981"},{label:"Merit Award",value:"JSpiders Exam Scholarship",icon:"fas fa-award",color:"#f59e0b"}]},experiences:[{company:"Winfocus Solutions Pvt Ltd",role:"Full Stack Developer",period:"Jun 2025 – Present",location:"Andhra Pradesh, India",type:"Full-Time",color:"#00bcd4",badge:"Current Role",description:"Lead developer on production multi-tenant Pharma SaaS platform and internal AI translation developer tooling.",achievements:["Built <strong>Multi-Tenant Pharma Management Platform</strong> — separate Spring Boot microservices (Inventory, Billing, User Management, Reports) with PostgreSQL dynamic schema-per-tenant isolation.","Implemented <strong>Dynamic Multilanguage UI</strong> in Angular — all labels, table headers, form inputs, and buttons switch dynamically at runtime based on DB tenant language settings.","Engineered <strong>Multilanguage Converter Tool</strong> — accepts Angular ZIP files, parses HTML/TS templates, integrates Hugging Face AI for batch translation, and outputs CSV + SQL INSERT statements.","Configured <strong>Spring Cloud API Gateway + Eureka Server + Spring Security JWT</strong> for centralized routing and granular role-based access control (RBAC).","Deployed containerized applications using <strong>Docker & Kubernetes</strong> on enterprise VMs."],tech:["Angular 19","Java 17","Spring Boot","Microservices","PostgreSQL","Eureka","Spring Cloud Gateway","Docker","Kubernetes","Hugging Face AI","Git"]},{company:"AMS — Asset Management System (Hyderabad Metro Rail)",role:"Full Stack Developer",period:"2024",location:"Hyderabad, India",type:"Live Client Project",color:"#8b5cf6",badge:"Production Client",description:"Enterprise transit asset tracking platform deployed live across Hyderabad Metro Rail stations and operational hubs.",achievements:["Developed interactive <strong>Angular Inventory Screens</strong> for station asset tracking across locations, categories, layout group types, and sub-groups.","Authored high-performance <strong>MSSQL Stored Procedures</strong> for complex batch queries, location audits, and historical logging.","Created database **Indexes & Synonyms** to optimize cross-schema query execution speed by over 45%.","Built decoupled microservices (Auth Service, Admin Service, Asset Register Service) connected via Spring API Gateway and a shared Common DTO Library."],tech:["Angular","Java","Spring Boot","MSSQL","Stored Procedures","Indexes & Synonyms","API Gateway","Git"]},{company:"JSpiders Training Institute",role:"Java Full Stack Specialist Trainee",period:"Jun 2024 – Jan 2025",location:"Bangalore, India",type:"Advanced Certification",color:"#10b981",badge:"Scholarship Recipient",description:"Rigorous 6-month hands-on training in Core/Advanced Java, Data Structures, Spring Boot, Hibernate, Angular, and SQL.",achievements:["Awarded <strong>JSpiders Merit Scholarship</strong> for top percentile scoring in Java & SQL technical evaluations.","Constructed 15+ full-stack mini projects demonstrating clean code patterns, MVC architecture, and REST API design."],tech:["Java 17","Spring Boot","Hibernate","SQL","Angular","OOP","Data Structures"]}],skills:[{category:"Backend & Microservices",icon:"fas fa-server",color:"#6db33f",items:[{name:"Java 17 / 21",level:92,tag:"Core & Enterprise"},{name:"Spring Boot 3.x",level:90,tag:"REST & MVC"},{name:"Microservices Mesh",level:88,tag:"Eureka & Gateway"},{name:"Spring Security & JWT",level:85,tag:"OAuth2 & RBAC"},{name:"Spring Data JPA / Hibernate",level:88,tag:"ORM & Querying"}]},{category:"Frontend Development",icon:"fab fa-angular",color:"#dd0031",items:[{name:"Angular 19 / 18",level:90,tag:"Standalone & Signals"},{name:"TypeScript & JavaScript",level:88,tag:"ES6+ & Async"},{name:"RxJS & Reactive Forms",level:85,tag:"State Management"},{name:"HTML5 / Modern CSS3",level:92,tag:"Glassmorphism & Flex"},{name:"React.js Basics",level:80,tag:"Hooks & Components"}]},{category:"Databases & Multitenancy",icon:"fas fa-database",color:"#4169E1",items:[{name:"PostgreSQL (Multitenancy)",level:88,tag:"Schema-per-Tenant"},{name:"MSSQL Enterprise",level:85,tag:"Stored Procs & Synonyms"},{name:"MySQL Database",level:86,tag:"Indexing & Tuning"},{name:"SQL Query Optimization",level:90,tag:"Execution Plans"}]},{category:"DevOps, Cloud & AI",icon:"fas fa-cloud-upload-alt",color:"#2496ED",items:[{name:"Docker Containerization",level:82,tag:"Dockerfiles & Compose"},{name:"Kubernetes (K8s)",level:78,tag:"Pods & Services"},{name:"Git & SVN Version Control",level:90,tag:"Branching & Merging"},{name:"Hugging Face AI API",level:84,tag:"Batch AI Translation"},{name:"Linux / Bash Scripting",level:80,tag:"CLI & Automation"}]}],projects:[{id:"hyderabad-metro-ams",title:"Hyderabad Metro Asset Management System (AMS)",category:"Client Enterprise Project",subtitle:"Live transit asset tracking deployed for Hyderabad Metro Rail stations.",badge:"Live Client Deployment",color:"#8b5cf6",image:"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",highlights:["Live Client Project actively used across Hyderabad Metro Rail stations.","Built Angular inventory screens with location-based, category-based, and group-based filtering.","Authored custom MSSQL Stored Procedures for audit tracking and rapid query execution.","Configured non-clustered database indexes and synonyms for cross-service database access.","Spring Cloud API Gateway integration for Auth, Admin, and Asset Register microservices."],techSpecs:{frontend:"Angular 19, Reactive Forms, SCSS Grid",backend:"Java 17, Spring Boot 3, Microservices Architecture",database:"MSSQL Enterprise (Stored Procedures, Indexing, Synonyms)",security:"Spring Security, JWT Token Validation, Gateway Route Guards",deployment:"Spring Cloud Gateway, Shared Common Library, Client VM Server"},codeSnippet:`// Spring Cloud API Gateway Route Config
@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("asset-service", r -> r.path("/api/v1/assets/**")
                .filters(f -> f.filter(new JwtAuthenticationFilter()))
                .uri("lb://ASSET-REGISTER-SERVICE"))
            .build();
    }
}`},{id:"winfocus-pharma-multitenant",title:"Multi-Tenant Pharma SaaS Platform",category:"Microservices & Multitenancy",subtitle:"Dynamic PostgreSQL schema-per-tenant pharmaceutical enterprise platform.",badge:"Enterprise SaaS",color:"#00bcd4",image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",highlights:["Dynamic PostgreSQL schema-per-tenant data isolation using Hibernate custom connection providers.","Database-driven dynamic multilanguage UI — switchable per user preference at runtime.","Centralized Netflix Eureka service discovery & Spring Cloud API Gateway.","Role-based access control (RBAC) with JWT auth across Inventory, Billing, and User Management services.","Docker containerized deployment with Kubernetes pod management."],techSpecs:{frontend:"Angular 19, Dynamic Multilanguage Pipes, RxJS Signal State",backend:"Java 17, Spring Boot, Netflix Eureka, Spring Cloud Gateway",database:"PostgreSQL (Dynamic Schema-per-Tenant Routing)",security:"Spring Security, OAuth2, JWT Refresh Tokens",devops:"Docker, Kubernetes, Git, SVN, Nginx"},codeSnippet:`// Dynamic PostgreSQL Schema Resolver
@Component
public class HeaderTenantResolver implements CurrentTenantIdentifierResolver {
    @Override
    public String resolveCurrentTenantIdentifier() {
        RequestAttributes attribs = RequestContextHolder.getRequestAttributes();
        if (attribs instanceof ServletRequestAttributes) {
            HttpServletRequest request = ((ServletRequestAttributes) attribs).getRequest();
            String tenantId = request.getHeader("X-Tenant-ID");
            return tenantId != null ? tenantId : "public";
        }
        return "public";
    }
}`},{id:"multilanguage-ai-converter",title:"Multilanguage AI Converter Tool",category:"Internal AI Tooling",subtitle:"Automated developer tool parsing Angular projects and translating static labels via AI.",badge:"Internal Developer Tool",color:"#ec4899",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",highlights:["Accepts Angular ZIP packages and parses HTML/TS templates for static text strings.","Integrates Hugging Face AI Translation API for batch localization into multiple languages.",'Auto-converts plain text into Angular dynamic translation pipes (`{{ "key" | translate }}`).',"Generates CSV translation matrices and production SQL `INSERT` scripts for immediate database import."],techSpecs:{frontend:"Angular 19, File Reader API, Progress Stream",backend:"Spring Boot REST Engine, AST Template Parser",aiIntegration:"Hugging Face Neural Translation API",output:"Dynamic SQL Migration Scripts, Localized CSV Tables"},codeSnippet:`// Hugging Face AI Translation API Client
@Service
public class AiTranslationService {
    @Value("\${huggingface.api.url}")
    private String apiUrl;
    
    public String translateText(String sourceText, String targetLang) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        Map<String, Object> body = Map.of("inputs", sourceText, "parameters", Map.of("target_lang", targetLang));
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, new HttpEntity<>(body, headers), String.class);
        return parseTranslatedResponse(response.getBody());
    }
}`}],mncPrepQnA:[{id:"q1",category:"System Architecture & Multitenancy",question:"How do you handle multi-tenancy with PostgreSQL in a Spring Boot microservice?",answer:"In enterprise SaaS applications, we implement **Schema-per-Tenant isolation**. We implement `CurrentTenantIdentifierResolver` to pull the `X-Tenant-ID` from the incoming HTTP request header validated by the API Gateway. Then, a `MultiTenantConnectionProvider` acquires a DB connection and issues `SET search_path TO tenant_schema`. This guarantees zero data leakage between enterprise tenants without needing separate database server hardware."},{id:"q2",category:"Database Optimization",question:"How did you optimize MSSQL database queries for the Hyderabad Metro AMS project?",answer:"For high-volume asset tracking, we replaced standard ORM entity scans with **MSSQL Stored Procedures** for complex multi-table joins and batch inserts. We created **non-clustered indexes** on heavily searched fields like `StationID` and `AssetCategoryID`. Furthermore, we created **Database Synonyms** to allow fast cross-schema references between the Auth, Admin, and Asset Register service schemas."},{id:"q3",category:"Microservices Resilience",question:"What is the role of Spring Cloud API Gateway and Eureka Service Discovery?",answer:"Netflix Eureka acts as a dynamic service registry where every microservice instance auto-registers its IP and port on startup. Spring Cloud Gateway acts as a reverse proxy single entry point. It fetches instance locations from Eureka, performs client-side load balancing via Spring Cloud LoadBalancer, validates incoming JWT tokens, and routes traffic securely."},{id:"q4",category:"Frontend Performance",question:"How do Angular Signals and OnPush Change Detection improve application speed?",answer:"Angular 19 Signals provide fine-grained reactivity. Unlike traditional zone.js change detection which re-evaluates the entire component tree on any event, Signals directly notify only the specific DOM nodes bound to that signal. Combining Signals with `ChangeDetectionStrategy.OnPush` eliminates unnecessary re-renders, reducing CPU overhead and keeping frame rates at a smooth 60fps."},{id:"q5",category:"Security & Auth",question:"How is JWT authentication structured across multiple microservices?",answer:"The client authenticates against the Auth Service, which verifies credentials and signs a JWT containing user roles, tenant ID, and expiration timestamp. On subsequent requests, the API Gateway intercepts the request, validates the RSA signature of the JWT, extracts user claims, and injects clean user headers (`X-User-Id`, `X-User-Roles`, `X-Tenant-Id`) downstream to inner microservices."}],atsResume:{summary:"Java Full Stack & Microservices Developer with 1 year of hands-on production experience engineering enterprise systems for live client environments (Hyderabad Metro Rail Asset Management System) and multi-tenant SaaS platforms (Winfocus Solutions). Specializing in Java 17, Spring Boot 3, Microservices Mesh (Netflix Eureka, Spring Cloud Gateway), Angular 19, PostgreSQL multitenancy schema routing, and MSSQL database performance tuning.",skillsCategorized:[{category:"Backend & Microservices",items:"Java 17/21, Spring Boot 3.x, REST APIs, Netflix Eureka, Spring Cloud API Gateway, Spring Security, JWT, OAuth2, Spring Data JPA, Hibernate"},{category:"Frontend Development",items:"Angular 19/18, TypeScript, RxJS, Signals, Reactive Forms, Dynamic Multilanguage Pipes, HTML5, Modern CSS3, SCSS, React.js"},{category:"Databases & Multitenancy",items:"PostgreSQL (Dynamic Schema-per-Tenant Isolation), MSSQL Enterprise (Stored Procedures, Indexing, Synonyms), MySQL"},{category:"DevOps, Cloud & AI",items:"Docker Containerization, Kubernetes Pod Management, Hugging Face AI API, Git, SVN, Linux/Bash Scripting, CI/CD Pipelines"}],experience:[{company:"Winfocus Solutions Pvt Ltd",role:"Full Stack Developer",period:"Jun 2025 – Present",location:"Andhra Pradesh, India",bullets:["Engineered multi-tenant Pharma SaaS microservices platform using Spring Boot 3 and PostgreSQL dynamic schema-per-tenant data isolation.","Developed dynamic database-driven multilanguage UI in Angular 19 — button labels, form fields, and placeholders switch switchable per user locale at runtime.","Created standalone internal Multilanguage AI Converter Tool accepting Angular project ZIPs, parsing templates, and integrating Hugging Face AI for batch translation.","Configured Spring Cloud API Gateway, Eureka Discovery Server, and Spring Security JWT role-based access control (RBAC) across decoupled services.","Containerized application microservices using Docker and deployed across Kubernetes pods on enterprise virtual machines."]},{company:"Hyderabad Metro Rail — Asset Management System (AMS)",role:"Full Stack Developer (Client Project)",period:"2024",location:"Hyderabad, India",bullets:["Developed live station asset tracking inventory screens in Angular used actively across Hyderabad Metro Rail stations and operational centers.","Authored high-volume MSSQL Stored Procedures for complex batch queries, location audits, and historical asset tracking logs.","Optimized cross-schema database query performance by over 45% by constructing non-clustered indexes and MSSQL database synonyms.","Built decoupled microservices (Auth, Admin, Asset Register) connected via Spring Cloud API Gateway with shared common DTO libraries."]}],education:"Bachelor of Technology (B.Tech) — Newtons Institute of Engineering (JSpiders Exam Scholarship Awardee)",certifications:"Java Full Stack Developer Specialist Certification — JSpiders Training Institute, Bangalore (Merit Scholarship Winner)"}},bf="/assets/navi_blue-Ce65_mrO.png",Ef=({onNavigate:e,onOpenMncModal:t,onOpenTerminal:n,onOpenResumeModal:r})=>{const[l,i]=T.useState(0),[a,c]=T.useState(""),[s,d]=T.useState(!1),h=M.personal.titles;return T.useEffect(()=>{const g=h[l];let m=s?40:80;!s&&a===g?m=2200:s&&a===""&&(d(!1),i(k=>(k+1)%h.length),m=400);const w=setTimeout(()=>{!s&&a!==g?c(g.substring(0,a.length+1)):s&&a!==""?c(g.substring(0,a.length-1)):!s&&a===g&&d(!0)},m);return()=>clearTimeout(w)},[a,s,l,h]),o.jsxs("section",{id:"home",className:"hero-section",children:[o.jsx("div",{className:"hero-glow orb-1"}),o.jsx("div",{className:"hero-glow orb-2"}),o.jsxs("div",{className:"section-container hero-container",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx(wf,{size:14,className:"icon-sparkle"}),o.jsx("span",{children:"Available for Enterprise MNC Opportunities"})]}),o.jsxs("h1",{className:"hero-name",children:["Hi, I'm ",o.jsx("br",{}),o.jsx("span",{className:"gradient-text",children:M.personal.name})]}),o.jsxs("div",{className:"typewriter-box",children:[o.jsx("span",{className:"tw-text",children:a}),o.jsx("span",{className:"tw-cursor",children:"|"})]}),o.jsx("p",{className:"hero-sub",dangerouslySetInnerHTML:{__html:M.personal.heroSub}}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("button",{className:"btn-primary",onClick:()=>{D.playClick(),e("projects")},children:[o.jsx(yu,{size:18}),o.jsx("span",{children:"Explore Live Projects"}),o.jsx(vu,{size:16})]}),o.jsxs("button",{className:"btn-secondary btn-highlight",onClick:()=>{D.playClick(),t()},children:[o.jsx(Bo,{size:18,className:"icon-purple"}),o.jsx("span",{children:"MNC Interview Q&A"})]}),o.jsxs("button",{className:"btn-secondary",onClick:()=>{D.playClick(),n()},children:[o.jsx(Su,{size:18}),o.jsx("span",{children:"DevOps Terminal"})]})]}),o.jsxs("div",{className:"social-links-bar",children:[o.jsx("a",{href:M.personal.github,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"GitHub Profile",children:o.jsx(Xn,{size:18})}),o.jsx("a",{href:M.personal.linkedin,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"LinkedIn Profile",children:o.jsx(Qo,{size:18})}),o.jsx("button",{className:"social-icon-btn",onClick:()=>{D.playClick(),r()},title:"View ATS Resume",children:o.jsx($o,{size:18})}),o.jsx("span",{className:"social-line"}),o.jsxs("span",{className:"location-tag",children:["📍 ",M.personal.location]})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsx(Xe,{className:"profile-tilt-card",children:o.jsxs("div",{className:"profile-card-inner",children:[o.jsxs("div",{className:"profile-image-wrap",children:[o.jsx("img",{src:bf,alt:M.personal.name,className:"profile-img"}),o.jsx("div",{className:"profile-overlay-gradient"})]}),o.jsxs("div",{className:"profile-card-info",children:[o.jsxs("div",{className:"profile-role-badge",children:[o.jsx(ku,{size:16}),o.jsx("span",{children:"1 Year Production Experience"})]}),o.jsx("h3",{children:M.personal.name}),o.jsx("p",{children:"Full Stack Engineer @ Winfocus Solutions"}),o.jsxs("div",{className:"tech-pills",children:[o.jsx("span",{children:"Spring Boot 3"}),o.jsx("span",{children:"Angular 19"}),o.jsx("span",{children:"PostgreSQL"}),o.jsx("span",{children:"Docker"})]})]})]})})})]}),o.jsxs("div",{className:"scroll-hint-btn",onClick:()=>{D.playClick(),e("about")},children:[o.jsx(lf,{size:22,className:"bounce"}),o.jsx("span",{children:"Scroll to Explore"})]}),o.jsx("style",{children:`
        .hero-section {
          min-height: 100vh;
          padding-top: 130px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }
        .orb-1 {
          width: 450px;
          height: 450px;
          top: 10%;
          left: -5%;
          background: rgba(59, 130, 246, 0.18);
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          bottom: 10%;
          right: -5%;
          background: rgba(139, 92, 246, 0.15);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 30px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: var(--theme-color);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .icon-sparkle {
          color: #ec4899;
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: 52px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .typewriter-box {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 700;
          color: var(--theme-color);
          margin-bottom: 20px;
          min-height: 32px;
        }

        .tw-cursor {
          animation: blink 0.8s infinite;
          margin-left: 4px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-sub {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 36px;
        }

        .btn-highlight {
          border-color: rgba(139, 92, 246, 0.4);
          color: #a78bfa;
        }

        .icon-purple {
          color: #a78bfa;
        }

        .social-links-bar {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, color 0.2s, border-color 0.2s;
        }

        .social-icon-btn:hover {
          transform: translateY(-3px);
          color: var(--theme-color);
          border-color: var(--theme-color);
        }

        .social-line {
          width: 30px;
          height: 1px;
          background: var(--border-color);
        }

        .location-tag {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .profile-card-inner {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .profile-image-wrap {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }

        .profile-card-inner:hover .profile-img {
          transform: scale(1.05);
        }

        .profile-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--card-bg), transparent 60%);
        }

        .profile-card-info {
          padding: 24px;
        }

        .profile-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          padding: 4px 12px;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .profile-card-info h3 {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .profile-card-info p {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-pills span {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--theme-color) 12%, transparent);
          color: var(--theme-color);
        }

        .scroll-hint-btn {
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 600;
          transition: color 0.2s;
        }

        .scroll-hint-btn:hover {
          color: var(--theme-color);
        }

        .bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-name {
            font-size: 40px;
          }
        }
      `})]})},zf=()=>o.jsxs("section",{id:"about",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Executive Profile"}),o.jsxs("h2",{className:"section-title",children:["About ",o.jsx("span",{className:"accent-text",children:"My Engineering Journey"})]}),o.jsx("p",{className:"section-sub",children:"1 Year of Production Full Stack Experience delivering high-availability client solutions."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"stats-grid",children:M.achievements.map((e,t)=>o.jsxs(Xe,{className:"stat-card",children:[o.jsx("div",{className:"stat-icon-wrap",style:{color:e.color,background:`${e.color}15`},children:o.jsx("i",{className:e.icon})}),o.jsx("div",{className:"stat-value",children:e.value}),o.jsx("div",{className:"stat-label",children:e.label})]},t))}),o.jsxs("div",{className:"about-main-grid",children:[o.jsxs("div",{className:"about-bio-box glass-card",children:[o.jsx("h3",{className:"bio-title",children:"Full Stack Developer & Systems Engineer"}),o.jsx("p",{className:"bio-intro",dangerouslySetInnerHTML:{__html:M.about.intro}}),o.jsx("div",{className:"points-list",children:M.about.points.map((e,t)=>o.jsxs("div",{className:"point-item",children:[o.jsx("div",{className:"point-icon",children:o.jsx(Sl,{size:18})}),o.jsxs("div",{children:[o.jsx("h4",{className:"point-title",children:e.title}),o.jsx("p",{className:"point-text",children:e.text})]})]},t))})]}),o.jsxs("div",{className:"info-cards-column",children:[M.about.infoCards.map((e,t)=>o.jsxs(Xe,{className:"info-card glass-card",children:[o.jsxs("div",{className:"info-card-header",children:[o.jsx("div",{className:"info-icon",style:{color:e.color,background:`${e.color}15`},children:o.jsx("i",{className:e.icon})}),o.jsx("span",{className:"info-label",children:e.label})]}),o.jsx("div",{className:"info-val",children:e.value})]},t)),o.jsx("div",{className:"scholarship-banner glass-card",children:o.jsxs("div",{className:"banner-badge",children:[o.jsx(nf,{size:20,className:"icon-gold"}),o.jsxs("div",{children:[o.jsx("h4",{children:"JSpiders Exam Scholarship Awardee"}),o.jsx("p",{children:"Top percentile scorer in Java Full Stack evaluation in Bangalore."})]})]})})]})]})]}),o.jsx("style",{children:`
        .accent-text {
          background: linear-gradient(135deg, var(--theme-color), #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
        }

        .stat-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 14px;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
        }

        .bio-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .bio-intro {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .points-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .point-item {
          display: flex;
          gap: 14px;
        }

        .point-icon {
          color: var(--theme-color);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .point-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .point-text {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .info-cards-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          padding: 20px 24px;
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .info-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .info-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-val {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .scholarship-banner {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 20px 24px;
        }

        .banner-badge {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .icon-gold {
          color: #f59e0b;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .banner-badge h4 {
          font-size: 15px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .banner-badge p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),Pf=()=>{const[e,t]=T.useState("All"),n=["All",...M.skills.map(l=>l.category)],r=e==="All"?M.skills:M.skills.filter(l=>l.category===e);return o.jsxs("section",{id:"skills",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Technical Competencies"}),o.jsxs("h2",{className:"section-title",children:["Full Stack ",o.jsx("span",{className:"accent-text",children:"Skills Matrix"})]}),o.jsx("p",{className:"section-sub",children:"Mastery across modern Java microservice ecosystems, frontends, and cloud databases."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"skill-tabs",children:n.map((l,i)=>o.jsx("button",{className:`skill-tab ${e===l?"active":""}`,onClick:()=>{D.playClick(),t(l)},children:l},i))}),o.jsx("div",{className:"skills-group-grid",children:r.map((l,i)=>o.jsxs(Xe,{className:"skill-group-card glass-card",children:[o.jsxs("div",{className:"group-header",children:[o.jsx("div",{className:"group-icon",style:{color:l.color,background:`${l.color}15`},children:o.jsx("i",{className:l.icon})}),o.jsx("h3",{children:l.category})]}),o.jsx("div",{className:"skill-items-list",children:l.items.map((a,c)=>o.jsxs("div",{className:"skill-item",children:[o.jsxs("div",{className:"skill-meta",children:[o.jsx("span",{className:"skill-name",children:a.name}),o.jsx("span",{className:"skill-tag",children:a.tag})]}),o.jsx("div",{className:"skill-progress-bar",children:o.jsx("div",{className:"skill-progress-fill",style:{width:`${a.level}%`,background:`linear-gradient(90deg, ${l.color}, #a855f7)`}})})]},c))})]},i))})]}),o.jsx("style",{children:`
        .skill-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
        }

        .skill-tab {
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .skill-tab:hover, .skill-tab.active {
          color: #ffffff;
          background: var(--theme-color);
          border-color: var(--theme-color);
          box-shadow: 0 4px 15px color-mix(in srgb, var(--theme-color) 40%, transparent);
        }

        .skills-group-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .skill-group-card {
          padding: 32px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .group-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .group-header h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .skill-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-tag {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .skill-progress-bar {
          height: 6px;
          background: color-mix(in srgb, var(--text-secondary) 15%, transparent);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease-out;
        }
      `})]})},Mf=()=>o.jsxs("section",{id:"experience",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Career History"}),o.jsxs("h2",{className:"section-title",children:["Production ",o.jsx("span",{className:"accent-text",children:"Experience Timeline"})]}),o.jsx("p",{className:"section-sub",children:"Real-world track record building live systems for clients and SaaS products."}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"timeline-container",children:[o.jsx("div",{className:"timeline-line"}),M.experiences.map((e,t)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-dot-wrap",children:o.jsx("div",{className:"timeline-dot",style:{background:e.color},children:o.jsx(xu,{size:16,color:"#fff"})})}),o.jsxs(Xe,{className:"timeline-content glass-card",children:[o.jsxs("div",{className:"exp-badge-bar",children:[o.jsx("span",{className:"exp-badge",style:{background:`${e.color}15`,color:e.color,borderColor:`${e.color}30`},children:e.badge}),o.jsxs("div",{className:"exp-period",children:[o.jsx(rf,{size:13}),o.jsx("span",{children:e.period})]})]}),o.jsx("h3",{className:"exp-company",children:e.company}),o.jsxs("div",{className:"exp-role-row",children:[o.jsx("span",{className:"exp-role",children:e.role}),o.jsxs("span",{className:"exp-location",children:[o.jsx(wu,{size:12})," ",e.location]})]}),o.jsx("p",{className:"exp-desc",children:e.description}),o.jsx("div",{className:"exp-achievements",children:e.achievements.map((n,r)=>o.jsxs("div",{className:"achievement-bullet",children:[o.jsx(Sl,{size:16,className:"bullet-icon",style:{color:e.color}}),o.jsx("span",{dangerouslySetInnerHTML:{__html:n}})]},r))}),o.jsx("div",{className:"exp-tech-tags",children:e.tech.map((n,r)=>o.jsx("span",{className:"tech-tag",children:n},r))})]})]},t))]})]}),o.jsx("style",{children:`
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-line {
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 24px;
          width: 3px;
          background: linear-gradient(180deg, var(--theme-color), #8b5cf6, #10b981);
          border-radius: 2px;
        }

        .timeline-item {
          display: flex;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .timeline-dot-wrap {
          flex-shrink: 0;
        }

        .timeline-dot {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .timeline-content {
          flex-grow: 1;
          padding: 32px;
        }

        .exp-badge-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .exp-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 12px;
          border-radius: 12px;
          border: 1px solid transparent;
        }

        .exp-period {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .exp-company {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .exp-role-row {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .exp-role {
          font-weight: 700;
          color: var(--theme-color);
        }

        .exp-location {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .exp-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .exp-achievements {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .achievement-bullet {
          display: flex;
          gap: 12px;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .bullet-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--text-secondary) 12%, transparent);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 19px;
          }
          .timeline-dot {
            width: 40px;
            height: 40px;
          }
          .timeline-item {
            gap: 16px;
          }
        }
      `})]}),Tf=()=>{const[e,t]=T.useState(0),n=[{id:"angular-ui",title:"Angular 19 Frontend",role:"Client App & Dynamic UI",icon:"fab fa-angular",color:"#dd0031",details:"Built with Angular 19 Standalone Components, Signal State Management, Dynamic Multilanguage Pipes, and Reactive Forms. Intercepts HTTP requests to inject JWT Auth Headers and Tenant Context headers."},{id:"api-gateway",title:"Spring Cloud API Gateway",role:"Routing & Security",icon:"fas fa-network-wired",color:"#8b5cf6",details:"Centralized edge gateway performing CORS configuration, Global Exception Handling, JWT token validation, rate limiting, and dynamic load-balanced request forwarding to microservice instances."},{id:"eureka-discovery",title:"Netflix Eureka Server",role:"Service Discovery Mesh",icon:"fas fa-satellite-dish",color:"#10b981",details:"High-availability service registry where Auth, Asset Register, Inventory, Billing, and Report microservices dynamically register IP ports on boot for seamless service-to-service communication."},{id:"microservices",title:"Spring Boot 3 Microservices",role:"Core Business Logic Mesh",icon:"fas fa-cubes",color:"#3b82f6",details:"Decoupled Spring Boot microservices incorporating Spring Data JPA, Spring Security RBAC, shared DTO common libraries, REST API controllers, and resilient fallback patterns."},{id:"multi-db",title:"PostgreSQL & MSSQL Databases",role:"Persistence & Multitenancy",icon:"fas fa-database",color:"#f59e0b",details:"PostgreSQL dynamic Schema-per-Tenant isolation for Winfocus Pharma SaaS, alongside MSSQL enterprise databases equipped with Stored Procedures, Non-Clustered Indexes, and Synonyms for Hyderabad Metro AMS."},{id:"devops-k8s",title:"Docker & Kubernetes (K8s)",role:"Container Pipeline",icon:"fab fa-docker",color:"#00bcd4",details:"Containerized Docker microservice images orchestrated across Kubernetes pods with rolling updates, environment secret injection, and automated health checks."}],r=n[e];return o.jsxs("section",{id:"architecture",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"System Design"}),o.jsxs("h2",{className:"section-title",children:["Enterprise ",o.jsx("span",{className:"accent-text",children:"Microservices Topology"})]}),o.jsx("p",{className:"section-sub",children:"Production architecture flow — click any node to explore implementation specifications."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"arch-diagram-wrapper glass-card",children:o.jsxs("svg",{className:"arch-svg",viewBox:"0 0 1060 220",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"lineGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:"#dd0031",stopOpacity:"0.8"}),o.jsx("stop",{offset:"50%",stopColor:"#8b5cf6",stopOpacity:"0.8"}),o.jsx("stop",{offset:"100%",stopColor:"#3b82f6",stopOpacity:"0.8"})]})}),o.jsx("line",{x1:"160",y1:"110",x2:"220",y2:"110",stroke:"url(#lineGrad)",strokeWidth:"2.5",strokeDasharray:"6 4"}),o.jsx("line",{x1:"370",y1:"110",x2:"430",y2:"110",stroke:"url(#lineGrad)",strokeWidth:"2.5",strokeDasharray:"6 4"}),o.jsx("line",{x1:"580",y1:"110",x2:"640",y2:"110",stroke:"url(#lineGrad)",strokeWidth:"2.5",strokeDasharray:"6 4"}),o.jsx("line",{x1:"790",y1:"110",x2:"850",y2:"110",stroke:"url(#lineGrad)",strokeWidth:"2.5",strokeDasharray:"6 4"}),o.jsx("circle",{r:"5",fill:"#38bdf8",children:o.jsx("animateMotion",{path:"M 160,110 L 850,110",dur:"4s",repeatCount:"indefinite"})}),n.slice(0,5).map((l,i)=>{const a=20+i*210,c=e===i;return o.jsxs("g",{className:"svg-node-group",onClick:()=>{D.playClick(),t(i)},style:{cursor:"pointer"},children:[o.jsx("rect",{x:a,y:"45",width:"140",height:"130",rx:"18",fill:c?`${l.color}25`:"var(--card-bg)",stroke:c?l.color:"var(--border-color)",strokeWidth:c?"2.5":"1",className:"svg-node-rect"}),o.jsx("circle",{cx:a+70,cy:"85",r:"22",fill:`${l.color}20`,stroke:l.color,strokeWidth:"1.5"}),o.jsx("text",{x:a+70,y:130,textAnchor:"middle",fill:"var(--text-primary)",fontSize:"12",fontWeight:"700",fontFamily:"var(--font-display)",children:l.title.split(" ")[0]}),o.jsx("text",{x:a+70,y:148,textAnchor:"middle",fill:"var(--text-secondary)",fontSize:"10",fontWeight:"500",children:l.role.split("&")[0]})]},l.id)})]})}),o.jsxs(Xe,{className:"node-inspector-panel glass-card",children:[o.jsxs("div",{className:"inspector-header",children:[o.jsx("div",{className:"inspector-icon",style:{color:r.color,background:`${r.color}20`},children:o.jsx("i",{className:r.icon})}),o.jsxs("div",{children:[o.jsx("span",{className:"inspector-badge",style:{color:r.color},children:"Node Component Details"}),o.jsx("h3",{children:r.title})]})]}),o.jsx("p",{className:"inspector-desc",children:r.details}),o.jsxs("div",{className:"inspector-meta-row",children:[o.jsxs("div",{className:"meta-pill",children:[o.jsx(ku,{size:14,className:"icon-green"}),o.jsx("span",{children:"Production Validated"})]}),o.jsxs("div",{className:"meta-pill",children:[o.jsx(Vo,{size:14,className:"icon-purple"}),o.jsx("span",{children:r.role})]})]})]})]}),o.jsx("style",{children:`
        .arch-diagram-wrapper {
          padding: 20px;
          margin-bottom: 28px;
          overflow-x: auto;
        }

        .arch-svg {
          width: 100%;
          min-width: 900px;
          height: auto;
        }

        .svg-node-rect {
          transition: all 0.3s ease;
        }

        .svg-node-group:hover .svg-node-rect {
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4));
        }

        .node-inspector-panel {
          padding: 32px;
        }

        .inspector-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .inspector-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .inspector-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .inspector-header h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
        }

        .inspector-desc {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .inspector-meta-row {
          display: flex;
          gap: 16px;
        }

        .meta-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
        }

        .icon-green { color: #10b981; }
        .icon-purple { color: #8b5cf6; }
      `})]})},Lf=({onOpenProjectModal:e})=>o.jsxs("section",{id:"projects",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Featured Portfolio"}),o.jsxs("h2",{className:"section-title",children:["Production ",o.jsx("span",{className:"accent-text",children:"Enterprise Projects"})]}),o.jsx("p",{className:"section-sub",children:"Live client infrastructure and SaaS platforms built with Microservices & Angular."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"projects-grid",children:M.projects.map(t=>o.jsxs(Xe,{className:"project-card glass-card",children:[o.jsxs("div",{className:"project-img-container",children:[o.jsx("img",{src:t.image,alt:t.title,className:"project-cover-img"}),o.jsx("div",{className:"project-badge-overlay",style:{background:t.color},children:t.badge})]}),o.jsxs("div",{className:"project-body",children:[o.jsx("span",{className:"project-category",children:t.category}),o.jsx("h3",{className:"project-title",children:t.title}),o.jsx("p",{className:"project-subtitle",children:t.subtitle}),o.jsx("div",{className:"project-highlights",children:t.highlights.slice(0,3).map((n,r)=>o.jsxs("div",{className:"hl-item",children:[o.jsx(Sl,{size:15,style:{color:t.color}}),o.jsx("span",{children:n})]},r))}),o.jsx("div",{className:"project-card-footer",children:o.jsxs("button",{className:"btn-primary btn-deep-dive",style:{background:`linear-gradient(135deg, ${t.color}, #8b5cf6)`},onClick:()=>{D.playClick(),e(t)},children:[o.jsx(jl,{size:16}),o.jsx("span",{children:"Deep-Dive & Code"}),o.jsx(vu,{size:14})]})})]})]},t.id))})]}),o.jsx("style",{children:`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 32px;
        }

        .project-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-img-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-cover-img {
          transform: scale(1.06);
        }

        .project-badge-overlay {
          position: absolute;
          top: 16px;
          right: 16px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .project-body {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-category {
          font-size: 11px;
          font-weight: 800;
          color: var(--theme-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .project-subtitle {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .hl-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .hl-item svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .project-card-footer {
          margin-top: auto;
        }

        .btn-deep-dive {
          width: 100%;
          justify-content: center;
        }
      `})]}),_f=({onOpenMncModal:e,onOpenResumeModal:t})=>{const[n,r]=T.useState(""),[l,i]=T.useState([{type:"sys",text:'Raman DevOS v2.4 Terminal [Type "help" to view available commands]'},{type:"sys",text:"System status: HEALTHY (PostgreSQL Multitenant Active · Spring Cloud Gateway UP)"}]),a=T.useRef(null);T.useEffect(()=>{var s;(s=a.current)==null||s.scrollIntoView({behavior:"smooth"})},[l]);const c=s=>{s.preventDefault();const d=n.trim().toLowerCase();if(!d)return;D.playClick();const h=[...l,{type:"user",text:`$ ${n}`}];switch(d){case"help":h.push({type:"out",text:`Available Terminal Commands:
  • help          : Show this command menu
  • skills        : List core Java, Spring Boot & Angular skills
  • architecture  : Show microservices topology summary
  • projects      : List production projects (Hyderabad Metro AMS, Winfocus Pharma)
  • experience    : Show employment summary
  • curl /health  : Test microservice health endpoint
  • docker-compose: Simulate container deployment pipeline
  • export-resume : Open ATS Resume preview modal
  • mnc-prep      : Open MNC Interview Cheat Sheet modal
  • clear         : Clear terminal console output`});break;case"skills":h.push({type:"out",text:`Backend  : Java 17, Spring Boot 3.x, Microservices, Eureka, Gateway, Spring Security
Frontend : Angular 19, TypeScript, Signals, RxJS, Glass UI
Database : PostgreSQL (Multitenancy), MSSQL (Stored Procs, Indexes), MySQL
DevOps   : Docker, Kubernetes, Linux/Bash, SVN, Git`});break;case"architecture":h.push({type:"out",text:"[TOPOLOGY]: Angular UI (Client) ➔ Spring Cloud Gateway (Port 8080) ➔ Eureka Registry ➔ Auth/Asset/Pharma Microservices ➔ PostgreSQL (Schema-per-Tenant) + MSSQL"});break;case"projects":h.push({type:"out",text:`1. Hyderabad Metro AMS (Client Live) - MSSQL Stored Procs & Microservices
2. Multi-Tenant Pharma SaaS (Winfocus) - PostgreSQL Schema Routing & Dynamic Language UI
3. Multilanguage AI Converter Tool - Hugging Face AI API Batch Translation`});break;case"experience":h.push({type:"out",text:`• Winfocus Solutions Pvt Ltd (Jun 2025 – Present) | Full Stack Developer
• Hyderabad Metro Rail AMS Project (2024) | Full Stack Developer
• JSpiders Training Institute (Jun 2024 – Jan 2025) | Merit Scholarship Recipient`});break;case"curl /health":h.push({type:"out",text:`HTTP/1.1 200 OK
{
  "status": "UP",
  "components": {
    "eureka": { "status": "UP" },
    "dbPostgres": { "status": "UP", "activeSchemas": 12 },
    "dbMSSQL": { "status": "UP" },
    "gateway": { "status": "UP", "routes": 8 }
  }
}`});break;case"docker-compose":h.push({type:"out",text:`[DOCKER]: Deploying containers...
✔ Container eureka-server       Started (Port 8761)
✔ Container api-gateway         Started (Port 8080)
✔ Container auth-service        Started (Port 8081)
✔ Container asset-ams-service   Started (Port 8082)
✔ Container pharma-inventory    Started (Port 8083)
✔ Container angular-frontend    Started (Port 80)`});break;case"export-resume":t(),h.push({type:"out",text:"Opening ATS Resume Preview Modal..."});break;case"mnc-prep":e(),h.push({type:"out",text:"Opening MNC Technical Interview Cheat Sheet Modal..."});break;case"clear":i([]),r("");return;default:h.push({type:"err",text:`bash: command not found: ${d}. Type "help" for a list of valid commands.`});break}i(h),r("")};return o.jsxs("section",{id:"devops",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"DevOps & Interactive CLI"}),o.jsxs("h2",{className:"section-title",children:["Interactive ",o.jsx("span",{className:"accent-text",children:"DevOps Terminal Simulator"})]}),o.jsx("p",{className:"section-sub",children:"Type Linux & CLI commands below to inspect project systems, health checks, and pipelines."}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"terminal-window glass-card",children:[o.jsxs("div",{className:"terminal-topbar",children:[o.jsxs("div",{className:"terminal-dots",children:[o.jsx("span",{className:"dot dot-red"}),o.jsx("span",{className:"dot dot-yellow"}),o.jsx("span",{className:"dot dot-green"})]}),o.jsx("div",{className:"terminal-title",children:"bash - raman@devos-production:~"}),o.jsx("div",{className:"terminal-quick-help",children:'Type "help"'})]}),o.jsxs("div",{className:"terminal-body",children:[l.map((s,d)=>o.jsx("div",{className:`terminal-line line-${s.type}`,children:s.text},d)),o.jsxs("form",{onSubmit:c,className:"terminal-form",children:[o.jsx("span",{className:"prompt-symbol",children:"raman@devos:~$"}),o.jsx("input",{type:"text",className:"terminal-input",value:n,onChange:s=>r(s.target.value),placeholder:"type a command e.g. help, skills, curl /health...",autoComplete:"off"}),o.jsx("button",{type:"submit",className:"terminal-submit-btn",title:"Run command",children:o.jsx(sf,{size:16})})]}),o.jsx("div",{ref:a})]})]})]}),o.jsx("style",{children:`
        .terminal-window {
          max-width: 960px;
          margin: 0 auto;
          padding: 0;
          overflow: hidden;
          background: #090d16;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .terminal-topbar {
          background: #0f172a;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .terminal-quick-help {
          font-size: 11px;
          color: var(--theme-color);
          font-weight: 700;
        }

        .terminal-body {
          padding: 24px;
          font-family: var(--font-mono);
          font-size: 13.5px;
          line-height: 1.6;
          max-height: 420px;
          overflow-y: auto;
        }

        .terminal-line {
          margin-bottom: 8px;
          white-space: pre-wrap;
        }

        .line-sys { color: #38bdf8; }
        .line-user { color: #f1f5f9; font-weight: 700; }
        .line-out { color: #a78bfa; }
        .line-err { color: #f87171; }

        .terminal-form {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
        }

        .prompt-symbol {
          color: #10b981;
          font-weight: 700;
        }

        .terminal-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 14px;
        }

        .terminal-submit-btn {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .terminal-submit-btn:hover {
          color: var(--theme-color);
        }
      `})]})},Af=()=>o.jsxs("section",{id:"github",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Open Source & Metrics"}),o.jsxs("h2",{className:"section-title",children:["GitHub ",o.jsx("span",{className:"accent-text",children:"Activity & Stats"})]}),o.jsx("p",{className:"section-sub",children:"Live repository metrics and open-source software contributions."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"github-content-grid",children:o.jsxs(Xe,{className:"github-card glass-card",children:[o.jsxs("div",{className:"github-card-header",children:[o.jsx("div",{className:"gh-avatar-wrap",children:o.jsx(Xn,{size:28})}),o.jsxs("div",{children:[o.jsxs("h3",{children:[M.personal.shortName,"'s GitHub Ecosystem"]}),o.jsxs("a",{href:M.personal.github,target:"_blank",rel:"noreferrer",className:"gh-link",children:["github.com/Raman-8688 ",o.jsx(df,{size:12})]})]})]}),o.jsxs("div",{className:"gh-metrics-row",children:[o.jsxs("div",{className:"gh-metric-box",children:[o.jsx(pf,{size:20,className:"icon-blue"}),o.jsx("div",{className:"gh-val",children:"500+"}),o.jsx("div",{className:"gh-lbl",children:"Commits Pushed"})]}),o.jsxs("div",{className:"gh-metric-box",children:[o.jsx(kf,{size:20,className:"icon-yellow"}),o.jsx("div",{className:"gh-val",children:"Production"}),o.jsx("div",{className:"gh-lbl",children:"Client Repos"})]}),o.jsxs("div",{className:"gh-metric-box",children:[o.jsx(ff,{size:20,className:"icon-purple"}),o.jsx("div",{className:"gh-val",children:"Clean"}),o.jsx("div",{className:"gh-lbl",children:"Git/SVN Workflows"})]})]}),o.jsxs("div",{className:"gh-banner",children:[o.jsx("p",{children:"Active code repositories showcasing Java 17 Microservices, Angular 19 Standalone components, and AI Converter tooling."}),o.jsxs("a",{href:M.personal.github,target:"_blank",rel:"noreferrer",className:"btn-primary",children:[o.jsx(Xn,{size:16}),o.jsx("span",{children:"Visit GitHub Profile"})]})]})]})})]}),o.jsx("style",{children:`
        .github-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }

        .github-card-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 32px;
        }

        .gh-avatar-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--theme-color), #8b5cf6);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .github-card-header h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
        }

        .gh-link {
          font-size: 13px;
          color: var(--theme-color);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
        }

        .gh-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .gh-metric-box {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
        }

        .icon-blue { color: #3b82f6; }
        .icon-yellow { color: #f59e0b; }
        .icon-purple { color: #8b5cf6; }

        .gh-val {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          margin: 8px 0 2px;
        }

        .gh-lbl {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .gh-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: color-mix(in srgb, var(--theme-color) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--theme-color) 20%, transparent);
          border-radius: 16px;
          padding: 24px;
        }

        .gh-banner p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .gh-metrics-row {
            grid-template-columns: 1fr;
          }
          .gh-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]}),Rf=()=>{const[e,t]=T.useState(!1),[n,r]=T.useState({name:"",email:"",subject:"",message:""}),[l,i]=T.useState(!1),a=()=>{navigator.clipboard.writeText(M.personal.email),D.playSuccess(),t(!0),setTimeout(()=>t(!1),2500)},c=s=>{s.preventDefault(),D.playSuccess(),i(!0),r({name:"",email:"",subject:"",message:""}),setTimeout(()=>i(!1),5e3)};return o.jsxs("section",{id:"contact",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Let's Connect"}),o.jsxs("h2",{className:"section-title",children:["Get In ",o.jsx("span",{className:"accent-text",children:"Touch"})]}),o.jsx("p",{className:"section-sub",children:"Open for Java Full Stack Developer, Microservices Engineer & MNC opportunities."}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"contact-grid",children:[o.jsx("div",{className:"contact-info-col",children:o.jsxs(Xe,{className:"contact-card glass-card",children:[o.jsx("h3",{children:"Contact Details"}),o.jsx("p",{className:"contact-intro",children:"Feel free to reach out directly via email, phone, or LinkedIn for technical discussions and MNC interview scheduling."}),o.jsxs("div",{className:"contact-items-list",children:[o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:o.jsx(Wo,{size:18})}),o.jsxs("div",{className:"contact-meta",children:[o.jsx("span",{className:"meta-lbl",children:"Email Address"}),o.jsx("a",{href:`mailto:${M.personal.email}`,className:"meta-val",children:M.personal.email})]}),o.jsx("button",{className:"copy-btn",onClick:a,title:"Copy Email",children:e?o.jsx(il,{size:16,className:"icon-green"}):o.jsx(Uo,{size:16})})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:o.jsx(gf,{size:18})}),o.jsxs("div",{className:"contact-meta",children:[o.jsx("span",{className:"meta-lbl",children:"Phone Number"}),o.jsx("a",{href:`tel:${M.personal.phone}`,className:"meta-val",children:M.personal.phone})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:o.jsx(wu,{size:18})}),o.jsxs("div",{className:"contact-meta",children:[o.jsx("span",{className:"meta-lbl",children:"Current Location"}),o.jsx("span",{className:"meta-val",children:M.personal.location})]})]})]}),o.jsxs("div",{className:"contact-socials-row",children:[o.jsxs("a",{href:M.personal.github,target:"_blank",rel:"noreferrer",className:"social-pill",children:[o.jsx(Xn,{size:16})," ",o.jsx("span",{children:"GitHub"})]}),o.jsxs("a",{href:M.personal.linkedin,target:"_blank",rel:"noreferrer",className:"social-pill",children:[o.jsx(Qo,{size:16})," ",o.jsx("span",{children:"LinkedIn"})]})]})]})}),o.jsx("div",{className:"contact-form-col",children:o.jsxs("form",{onSubmit:c,className:"contact-form glass-card",children:[o.jsx("h3",{children:"Send a Message"}),l&&o.jsxs("div",{className:"form-success-banner",children:[o.jsx(il,{size:18})," Thank you! Your message has been sent successfully."]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Your Name"}),o.jsx("input",{type:"text",required:!0,value:n.name,onChange:s=>r({...n,name:s.target.value}),placeholder:"e.g. Technical Recruiter / Interviewer"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Your Email"}),o.jsx("input",{type:"email",required:!0,value:n.email,onChange:s=>r({...n,email:s.target.value}),placeholder:"e.g. recruiter@company.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Subject"}),o.jsx("input",{type:"text",required:!0,value:n.subject,onChange:s=>r({...n,subject:s.target.value}),placeholder:"e.g. Full Stack Developer Position"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Message"}),o.jsx("textarea",{rows:"4",required:!0,value:n.message,onChange:s=>r({...n,message:s.target.value}),placeholder:"Hi Raman, we reviewed your microservices portfolio..."})]}),o.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",children:[o.jsx(yf,{size:16}),o.jsx("span",{children:"Send Message"})]})]})})]})]}),o.jsx("style",{children:`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
        }

        .contact-card, .contact-form {
          padding: 36px;
        }

        .contact-card h3, .contact-form h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .contact-intro {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .contact-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 16px 20px;
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--theme-color) 15%, transparent);
          color: var(--theme-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-meta {
          flex-grow: 1;
        }

        .meta-lbl {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
        }

        .meta-val {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .copy-btn {
          color: var(--text-secondary);
          padding: 6px;
          transition: color 0.2s;
        }

        .copy-btn:hover {
          color: var(--theme-color);
        }

        .contact-socials-row {
          display: flex;
          gap: 12px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: border-color 0.2s, color 0.2s;
        }

        .social-pill:hover {
          border-color: var(--theme-color);
          color: var(--theme-color);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: color-mix(in srgb, var(--card-bg) 90%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--theme-color);
        }

        .form-success-banner {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},If=({isOpen:e,onClose:t})=>{const[n,r]=T.useState("All"),[l,i]=T.useState("");if(!e)return null;const a=["All",...new Set(M.mncPrepQnA.map(s=>s.category))],c=M.mncPrepQnA.filter(s=>{const d=n==="All"||s.category===n,h=s.question.toLowerCase().includes(l.toLowerCase())||s.answer.toLowerCase().includes(l.toLowerCase());return d&&h});return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content mnc-modal-box",onClick:s=>s.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:t,children:o.jsx(Go,{size:20})}),o.jsxs("div",{className:"mnc-modal-header",children:[o.jsx("div",{className:"mnc-icon-badge",children:o.jsx(Bo,{size:24})}),o.jsxs("div",{children:[o.jsx("h2",{children:"MNC Technical Interview Cheat Sheet"}),o.jsx("p",{children:"System Architecture Decisions, Multitenancy Routing, MSSQL Tuning & Microservices Resilience"})]})]}),o.jsxs("div",{className:"mnc-filter-bar",children:[o.jsxs("div",{className:"mnc-search-box",children:[o.jsx(xf,{size:16,className:"search-icon"}),o.jsx("input",{type:"text",placeholder:"Search interview Q&A...",value:l,onChange:s=>i(s.target.value)})]}),o.jsx("div",{className:"mnc-cat-pills",children:a.map((s,d)=>o.jsx("button",{className:`cat-pill ${n===s?"active":""}`,onClick:()=>{D.playClick(),r(s)},children:s},d))})]}),o.jsx("div",{className:"mnc-qna-list",children:c.length===0?o.jsx("div",{className:"empty-search",children:"No interview questions match your search."}):c.map(s=>o.jsxs("div",{className:"qna-card",children:[o.jsx("div",{className:"qna-cat-badge",children:s.category}),o.jsxs("h3",{className:"qna-question",children:[o.jsx(of,{size:18,className:"q-icon"}),s.question]}),o.jsx("div",{className:"qna-answer",dangerouslySetInnerHTML:{__html:s.answer}})]},s.id))})]}),o.jsx("style",{children:`
        .mnc-modal-box {
          max-width: 920px;
          padding: 40px;
        }

        .mnc-modal-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
        }

        .mnc-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.4);
          color: #a78bfa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mnc-modal-header h2 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
        }

        .mnc-modal-header p {
          font-size: 13.5px;
          color: var(--text-secondary);
        }

        .mnc-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .mnc-search-box {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        }

        .mnc-search-box input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14px;
          outline: none;
        }

        .mnc-cat-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cat-pill {
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 16px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.2s;
        }

        .cat-pill.active, .cat-pill:hover {
          color: #ffffff;
          background: #8b5cf6;
          border-color: #8b5cf6;
        }

        .mnc-qna-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 520px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .qna-card {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 24px;
        }

        .qna-cat-badge {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--theme-color);
          margin-bottom: 8px;
        }

        .qna-question {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .q-icon {
          color: #8b5cf6;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .qna-answer {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding-left: 26px;
        }

        .empty-search {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
          font-size: 14px;
        }
      `})]})},Df=({project:e,onClose:t})=>{const[n,r]=T.useState(!1);if(!e)return null;const l=()=>{e.codeSnippet&&(navigator.clipboard.writeText(e.codeSnippet),D.playSuccess(),r(!0),setTimeout(()=>r(!1),2500))};return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content project-modal-box",onClick:i=>i.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:t,children:o.jsx(Go,{size:20})}),o.jsxs("div",{className:"proj-modal-header",children:[o.jsx("div",{className:"proj-modal-badge",style:{background:e.color},children:e.badge}),o.jsx("h2",{children:e.title}),o.jsx("p",{children:e.subtitle})]}),o.jsxs("div",{className:"tech-specs-box glass-card",children:[o.jsxs("h3",{children:[o.jsx(Vo,{size:18})," Architectural Specifications"]}),o.jsx("div",{className:"specs-grid",children:Object.entries(e.techSpecs||{}).map(([i,a])=>o.jsxs("div",{className:"spec-row",children:[o.jsxs("span",{className:"spec-key",children:[i.toUpperCase(),":"]}),o.jsx("span",{className:"spec-val",children:a})]},i))})]}),o.jsxs("div",{className:"proj-features-section",children:[o.jsx("h3",{children:"Key System Achievements"}),o.jsx("div",{className:"proj-features-list",children:e.highlights.map((i,a)=>o.jsxs("div",{className:"feature-item",children:[o.jsx(Sl,{size:18,style:{color:e.color}}),o.jsx("span",{children:i})]},a))})]}),e.codeSnippet&&o.jsxs("div",{className:"code-snippet-box",children:[o.jsxs("div",{className:"code-header",children:[o.jsxs("span",{className:"code-title",children:[o.jsx(jl,{size:16})," Technical Code Highlight"]}),o.jsxs("button",{className:"copy-code-btn",onClick:l,children:[n?o.jsx(il,{size:14,className:"icon-green"}):o.jsx(Uo,{size:14}),o.jsx("span",{children:n?"Copied":"Copy Code"})]})]}),o.jsx("pre",{className:"code-content",children:o.jsx("code",{children:e.codeSnippet})})]})]}),o.jsx("style",{children:`
        .project-modal-box {
          max-width: 900px;
          padding: 40px;
        }

        .proj-modal-badge {
          display: inline-block;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 14px;
          border-radius: 12px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .proj-modal-header h2 {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .proj-modal-header p {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }

        .tech-specs-box {
          padding: 24px;
          margin-bottom: 28px;
        }

        .tech-specs-box h3 {
          font-size: 16px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: var(--theme-color);
        }

        .specs-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 12px;
          font-size: 13.5px;
        }

        .spec-key {
          font-weight: 800;
          color: var(--text-secondary);
          font-size: 11px;
          letter-spacing: 0.5px;
        }

        .spec-val {
          color: var(--text-primary);
          font-weight: 600;
        }

        .proj-features-section {
          margin-bottom: 28px;
        }

        .proj-features-section h3 {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .proj-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .feature-item svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .code-snippet-box {
          background: #090d16;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: #0f172a;
          border-bottom: 1px solid var(--border-color);
        }

        .code-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .copy-code-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .copy-code-btn:hover {
          color: var(--theme-color);
        }

        .code-content {
          padding: 20px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: #a78bfa;
          overflow-x: auto;
          line-height: 1.6;
        }
      `})]})},Of=({isOpen:e,onClose:t})=>{var c;const[n,r]=T.useState(!1);if(!e)return null;const l=()=>{D.playClick(),window.print()},i=()=>{navigator.clipboard.writeText(M.atsResume.summary),D.playSuccess(),r(!0),setTimeout(()=>r(!1),2500)},a=M.atsResume;return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content resume-modal-box",onClick:s=>s.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn no-print",onClick:t,children:o.jsx(Go,{size:20})}),o.jsxs("div",{className:"resume-actions-bar no-print",children:[o.jsxs("div",{className:"resume-modal-title",children:[o.jsx($o,{size:20,className:"icon-purple"}),o.jsx("span",{children:"MNC ATS Resume Preview (1-Page Formatted)"})]}),o.jsxs("div",{className:"btn-group",children:[o.jsxs("button",{className:"btn-secondary",onClick:i,children:[n?o.jsx(il,{size:14,className:"icon-green"}):o.jsx(Uo,{size:14}),o.jsx("span",{children:n?"Copied":"Copy Summary"})]}),o.jsxs("a",{href:"/resume.pdf",download:"Ramanjaneyulu_Boya_Resume.pdf",className:"btn-secondary btn-download-pdf",onClick:()=>D.playClick(),children:[o.jsx(uf,{size:14}),o.jsx("span",{children:"Download PDF"})]}),o.jsxs("button",{className:"btn-primary",onClick:l,children:[o.jsx(vf,{size:14}),o.jsx("span",{children:"Print 1-Page PDF"})]})]})]}),o.jsx("div",{className:"resume-scroll-container",children:o.jsxs("div",{className:"ats-paper",id:"printable-resume",children:[o.jsxs("div",{className:"paper-header",children:[o.jsx("h1",{className:"paper-name",children:M.personal.name}),o.jsx("div",{className:"paper-subtitle",children:"Java Full Stack & Microservices Developer | 1 Year Exp"}),o.jsxs("div",{className:"paper-contact-line",children:[o.jsx("span",{children:M.personal.email})," •",o.jsx("span",{children:M.personal.phone})," •",o.jsx("span",{children:M.personal.location})," •",o.jsx("span",{children:"github.com/Raman-8688"})," •",o.jsx("span",{children:"linkedin.com/in/b-ramanjaneyulu-155021258"})]})]}),o.jsx("div",{className:"paper-divider"}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"PROFESSIONAL SUMMARY"}),o.jsx("p",{className:"summary-text",children:a.summary})]}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"TECHNICAL SKILLS MATRIX"}),o.jsx("div",{className:"skills-grid-ats",children:(c=a.skillsCategorized)==null?void 0:c.map((s,d)=>o.jsxs("div",{className:"skill-cat-row",children:[o.jsxs("span",{className:"sk-cat-name",children:[s.category,":"]}),o.jsx("span",{className:"sk-cat-items",children:s.items})]},d))})]}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"PRODUCTION EXPERIENCE"}),a.experience.map((s,d)=>o.jsxs("div",{className:"exp-block",children:[o.jsxs("div",{className:"exp-head-row",children:[o.jsxs("div",{children:[o.jsx("span",{className:"exp-title-text",children:s.role})," — ",o.jsx("span",{className:"exp-company-text",children:s.company})]}),o.jsxs("div",{className:"exp-right-meta",children:[o.jsx("span",{className:"exp-period-text",children:s.period})," | ",o.jsx("span",{className:"exp-loc-text",children:s.location})]})]}),o.jsx("ul",{className:"exp-bullets",children:s.bullets.map((h,g)=>o.jsx("li",{children:h},g))})]},d))]}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"EDUCATION & CERTIFICATIONS"}),o.jsxs("div",{className:"edu-block",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Education:"})," ",a.education]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Certifications:"})," ",a.certifications]})]})]})]})})]}),o.jsx("style",{children:`
        .resume-modal-box {
          max-width: 940px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          padding: 28px 36px;
        }

        .resume-actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .resume-modal-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 800;
        }

        .btn-group {
          display: flex;
          gap: 8px;
        }

        .btn-download-pdf {
          color: var(--theme-color) !important;
          border-color: color-mix(in srgb, var(--theme-color) 40%, transparent) !important;
        }

        /* Scrollable container inside modal */
        .resume-scroll-container {
          overflow-y: auto;
          flex-grow: 1;
          padding-right: 8px;
        }

        .resume-scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .resume-scroll-container::-webkit-scrollbar-thumb {
          background: var(--theme-color);
          border-radius: 6px;
        }

        /* ATS Paper Container */
        .ats-paper {
          background: #ffffff;
          color: #0f172a;
          border-radius: 12px;
          padding: 36px 42px;
          font-family: 'Inter', 'DM Sans', sans-serif;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          line-height: 1.5;
        }

        .paper-header {
          text-align: center;
          margin-bottom: 12px;
        }

        .paper-name {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          margin-bottom: 3px;
        }

        .paper-subtitle {
          font-size: 13.5px;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 6px;
        }

        .paper-contact-line {
          font-size: 11.5px;
          color: #475569;
          font-weight: 500;
        }

        .paper-divider {
          height: 1.5px;
          background: #cbd5e1;
          margin: 12px 0 16px;
        }

        .paper-section {
          margin-bottom: 16px;
        }

        .section-head {
          font-size: 12px;
          font-weight: 800;
          color: #1e293b;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-bottom: 1.5px solid #cbd5e1;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }

        .summary-text {
          font-size: 12.5px;
          color: #334155;
          line-height: 1.5;
        }

        .skills-grid-ats {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
        }

        .skill-cat-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 10px;
        }

        .sk-cat-name {
          font-weight: 700;
          color: #0f172a;
        }

        .sk-cat-items {
          color: #334155;
        }

        .exp-block {
          margin-bottom: 14px;
        }

        .exp-head-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          margin-bottom: 4px;
        }

        .exp-title-text {
          font-weight: 800;
          color: #0f172a;
        }

        .exp-company-text {
          font-weight: 700;
          color: #2563eb;
        }

        .exp-right-meta {
          font-size: 11.5px;
          color: #64748b;
          font-weight: 600;
        }

        .exp-bullets {
          padding-left: 20px;
          margin: 0;
        }

        .exp-bullets li {
          font-size: 12px;
          color: #334155;
          line-height: 1.5;
          margin-bottom: 3px;
        }

        .edu-block {
          font-size: 12px;
          color: #334155;
          line-height: 1.6;
        }

        /* ── PERFECT FULL-LENGTH 1-PAGE PRINT MEDIA STYLES ───── */
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm 12mm;
          }

          /* Suppress all non-printable page elements */
          .no-print,
          .navbar-header,
          .modal-overlay > *:not(.modal-content),
          .modal-close-btn,
          .resume-actions-bar,
          .scroll-top-btn,
          footer,
          section,
          canvas {
            display: none !important;
          }

          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }

          .modal-overlay {
            position: static !important;
            background: transparent !important;
            padding: 0 !important;
            backdrop-filter: none !important;
          }

          .modal-content {
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            animation: none !important;
            max-height: none !important;
            overflow: visible !important;
          }

          .resume-scroll-container {
            overflow: visible !important;
            padding: 0 !important;
          }

          .ats-paper {
            padding: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            color: #000000 !important;
          }

          .paper-name {
            font-size: 22pt !important;
            color: #000000 !important;
          }

          .paper-subtitle {
            font-size: 11pt !important;
            color: #1d4ed8 !important;
          }

          .paper-contact-line {
            font-size: 9.5pt !important;
          }

          .section-head {
            font-size: 10pt !important;
            border-bottom: 1px solid #94a3b8 !important;
            margin-bottom: 5px !important;
          }

          .summary-text, .sk-cat-name, .sk-cat-items, .edu-block p, .exp-bullets li {
            font-size: 9.8pt !important;
            line-height: 1.4 !important;
          }

          .exp-title-text, .exp-company-text {
            font-size: 10.5pt !important;
          }

          .exp-right-meta {
            font-size: 9.5pt !important;
          }
        }
      `})]})},Ff=()=>{const[e,t]=T.useState(0),[n,r]=T.useState(!1);T.useEffect(()=>{const a=()=>{const c=document.documentElement.scrollHeight-window.innerHeight,s=window.scrollY,d=Math.min(100,Math.max(0,Math.round(s/c*100)));t(d),r(s>250)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const l=()=>{D.playClick(),window.scrollTo({top:0,behavior:"smooth"})};if(!n)return null;const i=125.6-125.6*e/100;return o.jsxs("button",{className:"scroll-top-btn",onClick:l,title:`Back to top (${e}%)`,children:[o.jsxs("svg",{className:"progress-ring",width:"48",height:"48",children:[o.jsx("circle",{className:"progress-ring-bg",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"3",fill:"transparent",r:"20",cx:"24",cy:"24"}),o.jsx("circle",{className:"progress-ring-circle",stroke:"var(--theme-color)",strokeWidth:"3",strokeDasharray:"125.6",strokeDashoffset:i,strokeLinecap:"round",fill:"transparent",r:"20",cx:"24",cy:"24"})]}),o.jsx(af,{size:18,className:"scroll-top-icon"}),o.jsx("style",{children:`
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          z-index: 900;
          background: color-mix(in srgb, var(--card-bg) 85%, transparent);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s, border-color 0.2s;
        }

        .scroll-top-btn:hover {
          transform: translateY(-4px);
          border-color: var(--theme-color);
          color: var(--theme-color);
        }

        .progress-ring {
          position: absolute;
          transform: rotate(-90deg);
        }

        .progress-ring-circle {
          transition: stroke-dashoffset 0.15s ease-out;
        }

        .scroll-top-icon {
          position: relative;
          z-index: 2;
        }
      `})]})},Hf=({onNavigate:e})=>o.jsxs("footer",{className:"footer-section",children:[o.jsxs("div",{className:"section-container footer-container",children:[o.jsxs("div",{className:"footer-top",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("div",{className:"brand-icon",children:o.jsx(jl,{size:20})}),o.jsx("h3",{children:M.personal.name}),o.jsx("p",{children:"Java Full Stack Developer | Spring Boot & Microservices Specialist"})]}),o.jsxs("div",{className:"footer-nav",children:[o.jsx("button",{onClick:()=>{D.playClick(),e("home")},children:"Home"}),o.jsx("button",{onClick:()=>{D.playClick(),e("about")},children:"About"}),o.jsx("button",{onClick:()=>{D.playClick(),e("skills")},children:"Skills"}),o.jsx("button",{onClick:()=>{D.playClick(),e("experience")},children:"Experience"}),o.jsx("button",{onClick:()=>{D.playClick(),e("architecture")},children:"Architecture"}),o.jsx("button",{onClick:()=>{D.playClick(),e("projects")},children:"Projects"}),o.jsx("button",{onClick:()=>{D.playClick(),e("contact")},children:"Contact"})]}),o.jsxs("div",{className:"footer-socials",children:[o.jsx("a",{href:M.personal.github,target:"_blank",rel:"noreferrer",title:"GitHub",children:o.jsx(Xn,{size:18})}),o.jsx("a",{href:M.personal.linkedin,target:"_blank",rel:"noreferrer",title:"LinkedIn",children:o.jsx(Qo,{size:18})}),o.jsx("a",{href:`mailto:${M.personal.email}`,title:"Email",children:o.jsx(Wo,{size:18})})]})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," ",M.personal.name,". All Rights Reserved."]}),o.jsxs("p",{className:"footer-mnc-tag",children:["Engineered with ",o.jsx(mf,{size:14,className:"icon-red"})," for MNC Interview Preparation."]})]})]}),o.jsx("style",{children:`
        .footer-section {
          padding: 60px 24px 30px;
          border-top: 1px solid var(--border-color);
          position: relative;
          z-index: 2;
        }

        .footer-container {
          padding: 40px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-brand h3 {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
        }

        .footer-brand p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-nav button {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .footer-nav button:hover {
          color: var(--theme-color);
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: color 0.2s, border-color 0.2s;
        }

        .footer-socials a:hover {
          color: var(--theme-color);
          border-color: var(--theme-color);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-size: 13px;
          color: var(--text-secondary);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-mnc-tag {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .icon-red { color: #ef4444; }

        @media (max-width: 768px) {
          .footer-top, .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]});function Bf(){const[e,t]=T.useState("home"),[n,r]=T.useState(!0),[l,i]=T.useState(!1),[a,c]=T.useState(!1),[s,d]=T.useState(null);T.useEffect(()=>{n?document.documentElement.classList.remove("light-theme"):document.documentElement.classList.add("light-theme")},[n]),T.useEffect(()=>{const g=["home","about","skills","experience","architecture","projects","devops","github","contact"],m=new IntersectionObserver(w=>{w.forEach(k=>{k.isIntersecting&&t(k.target.id)})},{threshold:.25,rootMargin:"-70px 0px -30% 0px"});return g.forEach(w=>{const k=document.getElementById(w);k&&m.observe(k)}),()=>m.disconnect()},[]);const h=g=>{t(g);const m=document.getElementById(g);if(m){const v=m.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:v,behavior:"smooth"})}};return o.jsxs("div",{className:"app-root",children:[o.jsx(Xp,{}),o.jsx(Cf,{activeSection:e,onNavigate:h,onOpenMncModal:()=>i(!0),onOpenTerminal:()=>h("devops"),onOpenResumeModal:()=>c(!0),isDark:n,onToggleTheme:()=>r(!n)}),o.jsxs("main",{children:[o.jsx(Ef,{onNavigate:h,onOpenMncModal:()=>i(!0),onOpenTerminal:()=>h("devops"),onOpenResumeModal:()=>c(!0)}),o.jsx(zf,{}),o.jsx(Pf,{}),o.jsx(Mf,{}),o.jsx(Tf,{}),o.jsx(Lf,{onOpenProjectModal:g=>d(g)}),o.jsx(_f,{onOpenMncModal:()=>i(!0),onOpenResumeModal:()=>c(!0)}),o.jsx(Af,{}),o.jsx(Rf,{})]}),o.jsx(Hf,{onNavigate:h}),o.jsx(Ff,{}),o.jsx(If,{isOpen:l,onClose:()=>i(!1)}),o.jsx(Df,{project:s,onClose:()=>d(null)}),o.jsx(Of,{isOpen:a,onClose:()=>c(!1)})]})}Zl.createRoot(document.getElementById("root")).render(o.jsx(Hu.StrictMode,{children:o.jsx(Bf,{})}));
