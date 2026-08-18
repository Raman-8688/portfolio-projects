(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function bu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},ai={},os={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),Cu=Symbol.for("react.portal"),Eu=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),Mu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Iu=Symbol.for("react.memo"),_u=Symbol.for("react.lazy"),Ko=Symbol.iterator;function Ru(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,cs={};function cn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||as}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function us(){}us.prototype=cn.prototype;function Ql(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||as}var Gl=Ql.prototype=new us;Gl.constructor=Ql;ss(Gl,cn.prototype);Gl.isPureReactComponent=!0;var qo=Array.isArray,ds=Object.prototype.hasOwnProperty,Jl={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)ds.call(t,r)&&!ps.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var s=Array(c),d=0;d<c;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:Xn,type:e,key:l,ref:a,props:i,_owner:Jl.current}}function Du(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function Ou(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yo=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ou(""+e.key):t.toString(36)}function Nr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xn:case Cu:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ei(a,0):r,qo(i)?(n="",e!=null&&(n=e.replace(Yo,"$&/")+"/"),Nr(i,t,n,"",function(d){return d})):i!=null&&(Kl(i)&&(i=Du(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Yo,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",qo(e))for(var c=0;c<e.length;c++){l=e[c];var s=r+Ei(l,c);a+=Nr(l,t,n,s,i)}else if(s=Ru(e),typeof s=="function")for(e=s.call(e),c=0;!(l=e.next()).done;)l=l.value,s=r+Ei(l,c++),a+=Nr(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ar(e,t,n){if(e==null)return e;var r=[],i=0;return Nr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Fu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},br={transition:null},Hu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:br,ReactCurrentOwner:Jl};function ms(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:ar,forEach:function(e,t,n){ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ar(e,function(){t++}),t},toArray:function(e){return ar(e,function(t){return t})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=cn;_.Fragment=Eu;_.Profiler=Pu;_.PureComponent=Ql;_.StrictMode=zu;_.Suspense=Lu;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hu;_.act=ms;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)ds.call(t,s)&&!ps.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&c!==void 0?c[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){c=Array(s);for(var d=0;d<s;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:Xn,type:e.type,key:i,ref:l,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:Au,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mu,_context:e},e.Consumer=e};_.createElement=fs;_.createFactory=function(e){var t=fs.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Tu,render:e}};_.isValidElement=Kl;_.lazy=function(e){return{$$typeof:_u,_payload:{_status:-1,_result:e},_init:Fu}};_.memo=function(e,t){return{$$typeof:Iu,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};_.unstable_act=ms;_.useCallback=function(e,t){return de.current.useCallback(e,t)};_.useContext=function(e){return de.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return de.current.useDeferredValue(e)};_.useEffect=function(e,t){return de.current.useEffect(e,t)};_.useId=function(){return de.current.useId()};_.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return de.current.useMemo(e,t)};_.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};_.useRef=function(e){return de.current.useRef(e)};_.useState=function(e){return de.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return de.current.useTransition()};_.version="18.3.1";os.exports=_;var M=os.exports;const Uu=bu(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=M,Wu=Symbol.for("react.element"),Vu=Symbol.for("react.fragment"),$u=Object.prototype.hasOwnProperty,Qu=Bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gu={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$u.call(t,r)&&!Gu.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Wu,type:e,key:l,ref:a,props:i,_owner:Qu.current}}ai.Fragment=Vu;ai.jsx=hs;ai.jsxs=hs;ls.exports=ai;var o=ls.exports,Zi={},gs={exports:{}},Se={},xs={exports:{}},vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,A){var L=N.length;N.push(A);e:for(;0<L;){var J=L-1>>>1,Z=N[J];if(0<i(Z,A))N[J]=A,N[L]=Z,L=J;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],L=N.pop();if(L!==A){N[0]=L;e:for(var J=0,Z=N.length,lr=Z>>>1;J<lr;){var kt=2*(J+1)-1,Ci=N[kt],wt=kt+1,or=N[wt];if(0>i(Ci,L))wt<Z&&0>i(or,Ci)?(N[J]=or,N[wt]=L,J=wt):(N[J]=Ci,N[kt]=L,J=kt);else if(wt<Z&&0>i(or,L))N[J]=or,N[wt]=L,J=wt;else break e}}return A}function i(N,A){var L=N.sortIndex-A.sortIndex;return L!==0?L:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var s=[],d=[],h=1,g=null,m=3,k=!1,w=!1,x=!1,z=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var A=n(d);A!==null;){if(A.callback===null)r(d);else if(A.startTime<=N)r(d),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(d)}}function v(N){if(x=!1,f(N),!w)if(n(s)!==null)w=!0,Ni(j);else{var A=n(d);A!==null&&bi(v,A.startTime-N)}}function j(N,A){w=!1,x&&(x=!1,p(E),E=-1),k=!0;var L=m;try{for(f(A),g=n(s);g!==null&&(!(g.expirationTime>A)||N&&!Me());){var J=g.callback;if(typeof J=="function"){g.callback=null,m=g.priorityLevel;var Z=J(g.expirationTime<=A);A=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(s)&&r(s),f(A)}else r(s);g=n(s)}if(g!==null)var lr=!0;else{var kt=n(d);kt!==null&&bi(v,kt.startTime-A),lr=!1}return lr}finally{g=null,m=L,k=!1}}var b=!1,C=null,E=-1,G=5,R=-1;function Me(){return!(e.unstable_now()-R<G)}function pn(){if(C!==null){var N=e.unstable_now();R=N;var A=!0;try{A=C(!0,N)}finally{A?fn():(b=!1,C=null)}}else b=!1}var fn;if(typeof u=="function")fn=function(){u(pn)};else if(typeof MessageChannel<"u"){var Jo=new MessageChannel,Nu=Jo.port2;Jo.port1.onmessage=pn,fn=function(){Nu.postMessage(null)}}else fn=function(){z(pn,0)};function Ni(N){C=N,b||(b=!0,fn())}function bi(N,A){E=z(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Ni(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var L=m;m=A;try{return N()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=m;m=N;try{return A()}finally{m=L}},e.unstable_scheduleCallback=function(N,A,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,N={id:h++,callback:A,priorityLevel:N,startTime:L,expirationTime:Z,sortIndex:-1},L>J?(N.sortIndex=L,t(d,N),n(s)===null&&N===n(d)&&(x?(p(E),E=-1):x=!0,bi(v,L-J))):(N.sortIndex=Z,t(s,N),w||k||(w=!0,Ni(j))),N},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(N){var A=m;return function(){var L=m;m=A;try{return N.apply(this,arguments)}finally{m=L}}}})(vs);xs.exports=vs;var Ju=xs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=M,we=Ju;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ys=new Set,_n={};function It(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(_n[e]=t,e=0;e<t.length;e++)ys.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),el=Object.prototype.hasOwnProperty,qu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Zo={};function Yu(e){return el.call(Zo,e)?!0:el.call(Xo,e)?!1:qu.test(e)?Zo[e]=!0:(Xo[e]=!0,!1)}function Xu(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zu(e,t,n,r){if(t===null||typeof t>"u"||Xu(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ql,Yl);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ql,Yl);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ql,Yl);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zu(t,n,i,r)&&(n=null),r||i===null?Yu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),tl=Symbol.for("react.profiler"),ks=Symbol.for("react.provider"),ws=Symbol.for("react.context"),eo=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),rl=Symbol.for("react.suspense_list"),to=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ss=Symbol.for("react.offscreen"),ea=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,zi;function Sn(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Pi=!1;function Mi(e,t){if(!e||Pi)return"";Pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,c=l.length-1;1<=a&&0<=c&&i[a]!==l[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==l[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==l[c]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=c);break}}}finally{Pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function ed(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Dt:return"Portal";case tl:return"Profiler";case Zl:return"StrictMode";case nl:return"Suspense";case rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ws:return(e.displayName||"Context")+".Consumer";case ks:return(e._context.displayName||"Context")+".Provider";case eo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case to:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function td(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nd(e){var t=js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=nd(e))}function Ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ta(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bs(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function ol(e,t){bs(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?al(e,t.type,n):t.hasOwnProperty("defaultValue")&&al(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function al(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(jn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function Cs(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Es(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Es(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,zs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rd=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var id=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(id[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,qt=null,Yt=null;function la(e){if(e=tr(e)){if(typeof fl!="function")throw Error(y(280));var t=e.stateNode;t&&(t=pi(t),fl(e.stateNode,e.type,t))}}function As(e){qt?Yt?Yt.push(e):Yt=[e]:qt=e}function Ts(){if(qt){var e=qt,t=Yt;if(Yt=qt=null,la(e),t)for(e=0;e<t.length;e++)la(t[e])}}function Ls(e,t){return e(t)}function Is(){}var Ai=!1;function _s(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return Ls(e,t,n)}finally{Ai=!1,(qt!==null||Yt!==null)&&(Is(),Ts())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ml=!1;if(Ke)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){ml=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{ml=!1}function ld(e,t,n,r,i,l,a,c,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var En=!1,Dr=null,Or=!1,hl=null,od={onError:function(e){En=!0,Dr=e}};function ad(e,t,n,r,i,l,a,c,s){En=!1,Dr=null,ld.apply(od,arguments)}function sd(e,t,n,r,i,l,a,c,s){if(ad.apply(this,arguments),En){if(En){var d=Dr;En=!1,Dr=null}else throw Error(y(198));Or||(Or=!0,hl=d)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oa(e){if(_t(e)!==e)throw Error(y(188))}function cd(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return oa(i),e;if(l===r)return oa(i),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=l;break}if(c===r){a=!0,r=i,n=l;break}c=c.sibling}if(!a){for(c=l.child;c;){if(c===n){a=!0,n=l,r=i;break}if(c===r){a=!0,r=l,n=i;break}c=c.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ds(e){return e=cd(e),e!==null?Os(e):null}function Os(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Os(e);if(t!==null)return t;e=e.sibling}return null}var Fs=we.unstable_scheduleCallback,aa=we.unstable_cancelCallback,ud=we.unstable_shouldYield,dd=we.unstable_requestPaint,K=we.unstable_now,pd=we.unstable_getCurrentPriorityLevel,ro=we.unstable_ImmediatePriority,Hs=we.unstable_UserBlockingPriority,Fr=we.unstable_NormalPriority,fd=we.unstable_LowPriority,Us=we.unstable_IdlePriority,si=null,Ue=null;function md(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:xd,hd=Math.log,gd=Math.LN2;function xd(e){return e>>>=0,e===0?32:31-(hd(e)/gd|0)|0}var dr=64,pr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=Nn(c):(l&=a,l!==0&&(r=Nn(l)))}else a=n&~i,a!==0?r=Nn(a):l!==0&&(r=Nn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),i=1<<n,r|=e[n],t&=~i;return r}function vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-_e(l),c=1<<a,s=i[a];s===-1?(!(c&n)||c&r)&&(i[a]=vd(c,t)):s<=t&&(e.expiredLanes|=c),l&=~c}}function gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function Ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_e(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function io(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Ws(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,lo,$s,Qs,Gs,xl=!1,fr=[],at=null,st=null,ct=null,On=new Map,Fn=new Map,rt=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function gn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=tr(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sd(e,t,n,r,i){switch(t){case"focusin":return at=gn(at,e,t,n,r,i),!0;case"dragenter":return st=gn(st,e,t,n,r,i),!0;case"mouseover":return ct=gn(ct,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return On.set(l,gn(On.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Fn.set(l,gn(Fn.get(l)||null,e,t,n,r,i)),!0}return!1}function Js(e){var t=Nt(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=Rs(n),t!==null){e.blockedOn=t,Gs(e.priority,function(){$s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=tr(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Cr(e)&&n.delete(t)}function jd(){xl=!1,at!==null&&Cr(at)&&(at=null),st!==null&&Cr(st)&&(st=null),ct!==null&&Cr(ct)&&(ct=null),On.forEach(ca),Fn.forEach(ca)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,jd)))}function Hn(e){function t(i){return xn(i,e)}if(0<fr.length){xn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&xn(at,e),st!==null&&xn(st,e),ct!==null&&xn(ct,e),On.forEach(t),Fn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Js(n),n.blockedOn===null&&rt.shift()}var Xt=Ze.ReactCurrentBatchConfig,Ur=!0;function Nd(e,t,n,r){var i=O,l=Xt.transition;Xt.transition=null;try{O=1,oo(e,t,n,r)}finally{O=i,Xt.transition=l}}function bd(e,t,n,r){var i=O,l=Xt.transition;Xt.transition=null;try{O=4,oo(e,t,n,r)}finally{O=i,Xt.transition=l}}function oo(e,t,n,r){if(Ur){var i=vl(e,t,n,r);if(i===null)Bi(e,t,r,Br,n),sa(e,r);else if(Sd(i,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<wd.indexOf(e)){for(;i!==null;){var l=tr(i);if(l!==null&&Vs(l),l=vl(e,t,n,r),l===null&&Bi(e,t,r,Br,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Br=null;function vl(e,t,n,r){if(Br=null,e=no(r),e=Nt(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pd()){case ro:return 1;case Hs:return 4;case Fr:case fd:return 16;case Us:return 536870912;default:return 16}default:return 16}}var lt=null,ao=null,Er=null;function qs(){if(Er)return Er;var e,t=ao,n=t.length,r,i="value"in lt?lt.value:lt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Er=i.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function ua(){return!1}function je(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mr:ua,this.isPropagationStopped=ua,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=je(un),er=$({},un,{view:0,detail:0}),Cd=je(er),Li,Ii,vn,ci=$({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Li=e.screenX-vn.screenX,Ii=e.screenY-vn.screenY):Ii=Li=0,vn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),da=je(ci),Ed=$({},ci,{dataTransfer:0}),zd=je(Ed),Pd=$({},er,{relatedTarget:0}),_i=je(Pd),Md=$({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Ad=je(Md),Td=$({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ld=je(Td),Id=$({},un,{data:0}),pa=je(Id),_d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dd[e])?!!t[e]:!1}function co(){return Od}var Fd=$({},er,{key:function(e){if(e.key){var t=_d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hd=je(Fd),Ud=$({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fa=je(Ud),Bd=$({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Wd=je(Bd),Vd=$({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=je(Vd),Qd=$({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gd=je(Qd),Jd=[9,13,27,32],uo=Ke&&"CompositionEvent"in window,zn=null;Ke&&"documentMode"in document&&(zn=document.documentMode);var Kd=Ke&&"TextEvent"in window&&!zn,Ys=Ke&&(!uo||zn&&8<zn&&11>=zn),ma=" ",ha=!1;function Xs(e,t){switch(e){case"keyup":return Jd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function qd(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(ha=!0,ma);case"textInput":return e=t.data,e===ma&&ha?null:e;default:return null}}function Yd(e,t){if(Ft)return e==="compositionend"||!uo&&Xs(e,t)?(e=qs(),Er=ao=lt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ys&&t.locale!=="ko"?null:t.data;default:return null}}var Xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xd[e.type]:t==="textarea"}function ec(e,t,n,r){As(r),t=Wr(t,"onChange"),0<t.length&&(n=new so("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function Zd(e){dc(e,0)}function ui(e){var t=Bt(e);if(Ns(t))return e}function ep(e,t){if(e==="change")return t}var tc=!1;if(Ke){var Ri;if(Ke){var Di="oninput"in document;if(!Di){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),Di=typeof xa.oninput=="function"}Ri=Di}else Ri=!1;tc=Ri&&(!document.documentMode||9<document.documentMode)}function va(){Pn&&(Pn.detachEvent("onpropertychange",nc),Un=Pn=null)}function nc(e){if(e.propertyName==="value"&&ui(Un)){var t=[];ec(t,Un,e,no(e)),_s(Zd,t)}}function tp(e,t,n){e==="focusin"?(va(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",nc)):e==="focusout"&&va()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(Un)}function rp(e,t){if(e==="click")return ui(t)}function ip(e,t){if(e==="input"||e==="change")return ui(t)}function lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:lp;function Bn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!el.call(t,i)||!De(e[i],t[i]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ka(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function op(e){var t=ic(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rc(n.ownerDocument.documentElement,n)){if(r!==null&&po(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ka(n,l);var a=ka(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=Ke&&"documentMode"in document&&11>=document.documentMode,Ht=null,yl=null,Mn=null,kl=!1;function wa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||Ht==null||Ht!==Rr(r)||(r=Ht,"selectionStart"in r&&po(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Bn(Mn,r)||(Mn=r,r=Wr(yl,"onSelect"),0<r.length&&(t=new so("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Oi={},lc={};Ke&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function di(e){if(Oi[e])return Oi[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return Oi[e]=t[n];return e}var oc=di("animationend"),ac=di("animationiteration"),sc=di("animationstart"),cc=di("transitionend"),uc=new Map,Sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){uc.set(e,t),It(t,[e])}for(var Fi=0;Fi<Sa.length;Fi++){var Hi=Sa[Fi],sp=Hi.toLowerCase(),cp=Hi[0].toUpperCase()+Hi.slice(1);xt(sp,"on"+cp)}xt(oc,"onAnimationEnd");xt(ac,"onAnimationIteration");xt(sc,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(cc,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function ja(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sd(r,t,void 0,e),e.currentTarget=null}function dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],s=c.instance,d=c.currentTarget;if(c=c.listener,s!==l&&i.isPropagationStopped())break e;ja(i,c,d),l=s}else for(a=0;a<r.length;a++){if(c=r[a],s=c.instance,d=c.currentTarget,c=c.listener,s!==l&&i.isPropagationStopped())break e;ja(i,c,d),l=s}}}if(Or)throw e=hl,Or=!1,hl=null,e}function H(e,t){var n=t[bl];n===void 0&&(n=t[bl]=new Set);var r=e+"__bubble";n.has(r)||(pc(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),pc(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[gr]){e[gr]=!0,ys.forEach(function(n){n!=="selectionchange"&&(up.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Ui("selectionchange",!1,t))}}function pc(e,t,n,r){switch(Ks(t)){case 1:var i=Nd;break;case 4:i=bd;break;default:i=oo}n=i.bind(null,t,n,e),i=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Nt(c),a===null)return;if(s=a.tag,s===5||s===6){r=l=a;continue e}c=c.parentNode}}r=r.return}_s(function(){var d=l,h=no(n),g=[];e:{var m=uc.get(e);if(m!==void 0){var k=so,w=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":k=Hd;break;case"focusin":w="focus",k=_i;break;case"focusout":w="blur",k=_i;break;case"beforeblur":case"afterblur":k=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Wd;break;case oc:case ac:case sc:k=Ad;break;case cc:k=$d;break;case"scroll":k=Cd;break;case"wheel":k=Gd;break;case"copy":case"cut":case"paste":k=Ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=fa}var x=(t&4)!==0,z=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var u=d,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Dn(u,p),v!=null&&x.push(Vn(u,v,f)))),z)break;u=u.return}0<x.length&&(m=new k(m,w,null,n,h),g.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==pl&&(w=n.relatedTarget||n.fromElement)&&(Nt(w)||w[qe]))break e;if((k||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=d,w=w?Nt(w):null,w!==null&&(z=_t(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=d),k!==w)){if(x=da,v="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=fa,v="onPointerLeave",p="onPointerEnter",u="pointer"),z=k==null?m:Bt(k),f=w==null?m:Bt(w),m=new x(v,u+"leave",k,n,h),m.target=z,m.relatedTarget=f,v=null,Nt(h)===d&&(x=new x(p,u+"enter",w,n,h),x.target=f,x.relatedTarget=z,v=x),z=v,k&&w)t:{for(x=k,p=w,u=0,f=x;f;f=Rt(f))u++;for(f=0,v=p;v;v=Rt(v))f++;for(;0<u-f;)x=Rt(x),u--;for(;0<f-u;)p=Rt(p),f--;for(;u--;){if(x===p||p!==null&&x===p.alternate)break t;x=Rt(x),p=Rt(p)}x=null}else x=null;k!==null&&Na(g,m,k,x,!1),w!==null&&z!==null&&Na(g,z,w,x,!0)}}e:{if(m=d?Bt(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var j=ep;else if(ga(m))if(tc)j=ip;else{j=np;var b=tp}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=rp);if(j&&(j=j(e,d))){ec(g,j,n,h);break e}b&&b(e,m,d),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&al(m,"number",m.value)}switch(b=d?Bt(d):window,e){case"focusin":(ga(b)||b.contentEditable==="true")&&(Ht=b,yl=d,Mn=null);break;case"focusout":Mn=yl=Ht=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,wa(g,n,h);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":wa(g,n,h)}var C;if(uo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ft?Xs(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ys&&n.locale!=="ko"&&(Ft||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ft&&(C=qs()):(lt=h,ao="value"in lt?lt.value:lt.textContent,Ft=!0)),b=Wr(d,E),0<b.length&&(E=new pa(E,e,null,n,h),g.push({event:E,listeners:b}),C?E.data=C:(C=Zs(n),C!==null&&(E.data=C)))),(C=Kd?qd(e,n):Yd(e,n))&&(d=Wr(d,"onBeforeInput"),0<d.length&&(h=new pa("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=C))}dc(g,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Dn(e,n),l!=null&&r.unshift(Vn(e,l,i)),l=Dn(e,t),l!=null&&r.push(Vn(e,l,i))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Na(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var c=n,s=c.alternate,d=c.stateNode;if(s!==null&&s===r)break;c.tag===5&&d!==null&&(c=d,i?(s=Dn(n,l),s!=null&&a.unshift(Vn(n,s,c))):i||(s=Dn(n,l),s!=null&&a.push(Vn(n,s,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var dp=/\r\n?/g,pp=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(pp,"")}function xr(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(y(425))}function Vr(){}var wl=null,Sl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,fp=typeof clearTimeout=="function"?clearTimeout:void 0,Ca=typeof Promise=="function"?Promise:void 0,mp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ca<"u"?function(e){return Ca.resolve(null).then(e).catch(hp)}:Nl;function hp(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ea(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),He="__reactFiber$"+dn,$n="__reactProps$"+dn,qe="__reactContainer$"+dn,bl="__reactEvents$"+dn,gp="__reactListeners$"+dn,xp="__reactHandles$"+dn;function Nt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ea(e);e!==null;){if(n=e[He])return n;e=Ea(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[He]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function pi(e){return e[$n]||null}var Cl=[],Wt=-1;function vt(e){return{current:e}}function U(e){0>Wt||(e.current=Cl[Wt],Cl[Wt]=null,Wt--)}function F(e,t){Wt++,Cl[Wt]=e.current,e.current=t}var gt={},se=vt(gt),he=vt(!1),Pt=gt;function nn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function $r(){U(he),U(se)}function za(e,t,n){if(se.current!==gt)throw Error(y(168));F(se,t),F(he,n)}function fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,td(e)||"Unknown",i));return $({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=se.current,F(se,e),F(he,he.current),!0}function Pa(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=fc(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,U(he),U(se),F(se,e)):U(he),F(he,n)}var $e=null,fi=!1,Vi=!1;function mc(e){$e===null?$e=[e]:$e.push(e)}function vp(e){fi=!0,mc(e)}function yt(){if(!Vi&&$e!==null){Vi=!0;var e=0,t=O;try{var n=$e;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,fi=!1}catch(i){throw $e!==null&&($e=$e.slice(e+1)),Fs(ro,yt),i}finally{O=t,Vi=!1}}return null}var Vt=[],$t=0,Gr=null,Jr=0,Ne=[],be=0,Mt=null,Qe=1,Ge="";function St(e,t){Vt[$t++]=Jr,Vt[$t++]=Gr,Gr=e,Jr=t}function hc(e,t,n){Ne[be++]=Qe,Ne[be++]=Ge,Ne[be++]=Mt,Mt=e;var r=Qe;e=Ge;var i=32-_e(r)-1;r&=~(1<<i),n+=1;var l=32-_e(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qe=1<<32-_e(t)+i|n<<i|r,Ge=l+e}else Qe=1<<l|n<<i|r,Ge=e}function fo(e){e.return!==null&&(St(e,1),hc(e,1,0))}function mo(e){for(;e===Gr;)Gr=Vt[--$t],Vt[$t]=null,Jr=Vt[--$t],Vt[$t]=null;for(;e===Mt;)Mt=Ne[--be],Ne[be]=null,Ge=Ne[--be],Ne[be]=null,Qe=Ne[--be],Ne[be]=null}var ke=null,ye=null,B=!1,Ie=null;function gc(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Qe,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,ye=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zl(e){if(B){var t=ye;if(t){var n=t;if(!Ma(e,t)){if(El(e))throw Error(y(418));t=ut(n.nextSibling);var r=ke;t&&Ma(e,t)?gc(r,n):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(El(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function vr(e){if(e!==ke)return!1;if(!B)return Aa(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=ye)){if(El(e))throw xc(),Error(y(418));for(;t;)gc(e,t),t=ut(t.nextSibling)}if(Aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ke?ut(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=ye;e;)e=ut(e.nextSibling)}function rn(){ye=ke=null,B=!1}function ho(e){Ie===null?Ie=[e]:Ie.push(e)}var yp=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var c=i.refs;a===null?delete c[l]:c[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ta(e){var t=e._init;return t(e._payload)}function vc(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=mt(p,u),p.index=0,p.sibling=null,p}function l(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function c(p,u,f,v){return u===null||u.tag!==6?(u=Yi(f,p.mode,v),u.return=p,u):(u=i(u,f),u.return=p,u)}function s(p,u,f,v){var j=f.type;return j===Ot?h(p,u,f.props.children,v,f.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Ta(j)===u.type)?(v=i(u,f.props),v.ref=yn(p,u,f),v.return=p,v):(v=_r(f.type,f.key,f.props,null,p.mode,v),v.ref=yn(p,u,f),v.return=p,v)}function d(p,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Xi(f,p.mode,v),u.return=p,u):(u=i(u,f.children||[]),u.return=p,u)}function h(p,u,f,v,j){return u===null||u.tag!==7?(u=zt(f,p.mode,v,j),u.return=p,u):(u=i(u,f),u.return=p,u)}function g(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Yi(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case sr:return f=_r(u.type,u.key,u.props,null,p.mode,f),f.ref=yn(p,null,u),f.return=p,f;case Dt:return u=Xi(u,p.mode,f),u.return=p,u;case tt:var v=u._init;return g(p,v(u._payload),f)}if(jn(u)||mn(u))return u=zt(u,p.mode,f,null),u.return=p,u;yr(p,u)}return null}function m(p,u,f,v){var j=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:c(p,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:return f.key===j?s(p,u,f,v):null;case Dt:return f.key===j?d(p,u,f,v):null;case tt:return j=f._init,m(p,u,j(f._payload),v)}if(jn(f)||mn(f))return j!==null?null:h(p,u,f,v,null);yr(p,f)}return null}function k(p,u,f,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,c(u,p,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sr:return p=p.get(v.key===null?f:v.key)||null,s(u,p,v,j);case Dt:return p=p.get(v.key===null?f:v.key)||null,d(u,p,v,j);case tt:var b=v._init;return k(p,u,f,b(v._payload),j)}if(jn(v)||mn(v))return p=p.get(f)||null,h(u,p,v,j,null);yr(u,v)}return null}function w(p,u,f,v){for(var j=null,b=null,C=u,E=u=0,G=null;C!==null&&E<f.length;E++){C.index>E?(G=C,C=null):G=C.sibling;var R=m(p,C,f[E],v);if(R===null){C===null&&(C=G);break}e&&C&&R.alternate===null&&t(p,C),u=l(R,u,E),b===null?j=R:b.sibling=R,b=R,C=G}if(E===f.length)return n(p,C),B&&St(p,E),j;if(C===null){for(;E<f.length;E++)C=g(p,f[E],v),C!==null&&(u=l(C,u,E),b===null?j=C:b.sibling=C,b=C);return B&&St(p,E),j}for(C=r(p,C);E<f.length;E++)G=k(C,p,E,f[E],v),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?E:G.key),u=l(G,u,E),b===null?j=G:b.sibling=G,b=G);return e&&C.forEach(function(Me){return t(p,Me)}),B&&St(p,E),j}function x(p,u,f,v){var j=mn(f);if(typeof j!="function")throw Error(y(150));if(f=j.call(f),f==null)throw Error(y(151));for(var b=j=null,C=u,E=u=0,G=null,R=f.next();C!==null&&!R.done;E++,R=f.next()){C.index>E?(G=C,C=null):G=C.sibling;var Me=m(p,C,R.value,v);if(Me===null){C===null&&(C=G);break}e&&C&&Me.alternate===null&&t(p,C),u=l(Me,u,E),b===null?j=Me:b.sibling=Me,b=Me,C=G}if(R.done)return n(p,C),B&&St(p,E),j;if(C===null){for(;!R.done;E++,R=f.next())R=g(p,R.value,v),R!==null&&(u=l(R,u,E),b===null?j=R:b.sibling=R,b=R);return B&&St(p,E),j}for(C=r(p,C);!R.done;E++,R=f.next())R=k(C,p,E,R.value,v),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?E:R.key),u=l(R,u,E),b===null?j=R:b.sibling=R,b=R);return e&&C.forEach(function(pn){return t(p,pn)}),B&&St(p,E),j}function z(p,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Ot&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:e:{for(var j=f.key,b=u;b!==null;){if(b.key===j){if(j=f.type,j===Ot){if(b.tag===7){n(p,b.sibling),u=i(b,f.props.children),u.return=p,p=u;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Ta(j)===b.type){n(p,b.sibling),u=i(b,f.props),u.ref=yn(p,b,f),u.return=p,p=u;break e}n(p,b);break}else t(p,b);b=b.sibling}f.type===Ot?(u=zt(f.props.children,p.mode,v,f.key),u.return=p,p=u):(v=_r(f.type,f.key,f.props,null,p.mode,v),v.ref=yn(p,u,f),v.return=p,p=v)}return a(p);case Dt:e:{for(b=f.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=i(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Xi(f,p.mode,v),u.return=p,p=u}return a(p);case tt:return b=f._init,z(p,u,b(f._payload),v)}if(jn(f))return w(p,u,f,v);if(mn(f))return x(p,u,f,v);yr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,f),u.return=p,p=u):(n(p,u),u=Yi(f,p.mode,v),u.return=p,p=u),a(p)):n(p,u)}return z}var ln=vc(!0),yc=vc(!1),Kr=vt(null),qr=null,Qt=null,go=null;function xo(){go=Qt=qr=null}function vo(e){var t=Kr.current;U(Kr),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){qr=e,go=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(go!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(qr===null)throw Error(y(308));Qt=e,qr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var bt=null;function yo(e){bt===null?bt=[e]:bt.push(e)}function kc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ye(e,n)}return i=r.interleaved,i===null?(t.next=t,yo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ye(e,n)}function Pr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,io(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var i=e.updateQueue;nt=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var s=c,d=s.next;s.next=null,a===null?l=d:a.next=d,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==a&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=s))}if(l!==null){var g=i.baseState;a=0,h=d=s=null,c=l;do{var m=c.lane,k=c.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:k,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,x=c;switch(m=t,k=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){g=w.call(k,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,m=typeof w=="function"?w.call(k,g,m):w,m==null)break e;g=$({},g,m);break e;case 2:nt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[c]:m.push(c))}else k={eventTime:k,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=k,s=g):h=h.next=k,a|=m;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;m=c,c=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(s=g),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Tt|=a,e.lanes=a,e.memoizedState=g}}function Ia(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var nr={},Be=vt(nr),Qn=vt(nr),Gn=vt(nr);function Ct(e){if(e===nr)throw Error(y(174));return e}function wo(e,t){switch(F(Gn,t),F(Qn,e),F(Be,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}U(Be),F(Be,t)}function on(){U(Be),U(Qn),U(Gn)}function Sc(e){Ct(Gn.current);var t=Ct(Be.current),n=cl(t,e.type);t!==n&&(F(Qn,e),F(Be,n))}function So(e){Qn.current===e&&(U(Be),U(Qn))}var W=vt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function jo(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Mr=Ze.ReactCurrentDispatcher,Qi=Ze.ReactCurrentBatchConfig,At=0,V=null,Y=null,ee=null,Zr=!1,An=!1,Jn=0,kp=0;function le(){throw Error(y(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,l){if(At=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?Np:bp,e=n(r,i),An){l=0;do{if(An=!1,Jn=0,25<=l)throw Error(y(301));l+=1,ee=Y=null,t.updateQueue=null,Mr.current=Cp,e=n(r,i)}while(An)}if(Mr.current=ei,t=Y!==null&&Y.next!==null,At=0,ee=Y=V=null,Zr=!1,t)throw Error(y(300));return e}function Co(){var e=Jn!==0;return Jn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Pe(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function Kn(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var c=a=null,s=null,d=l;do{var h=d.lane;if((At&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(c=s=g,a=r):s=s.next=g,V.lanes|=h,Tt|=h}d=d.next}while(d!==null&&d!==l);s===null?a=r:s.next=c,De(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,V.lanes|=l,Tt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);De(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function jc(){}function Nc(e,t){var n=V,r=Pe(),i=t(),l=!De(r.memoizedState,i);if(l&&(r.memoizedState=i,me=!0),r=r.queue,Eo(Ec.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,qn(9,Cc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(y(349));At&30||bc(n,t,i)}return i}function bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cc(e,t,n,r){t.value=n,t.getSnapshot=r,zc(t)&&Pc(e)}function Ec(e,t,n){return n(function(){zc(t)&&Pc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Pc(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function _a(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=jp.bind(null,V,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mc(){return Pe().memoizedState}function Ar(e,t,n,r){var i=Fe();V.flags|=e,i.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function mi(e,t,n,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(Y!==null){var a=Y.memoizedState;if(l=a.destroy,r!==null&&No(r,a.deps)){i.memoizedState=qn(t,n,l,r);return}}V.flags|=e,i.memoizedState=qn(1|t,n,l,r)}function Ra(e,t){return Ar(8390656,8,e,t)}function Eo(e,t){return mi(2048,8,e,t)}function Ac(e,t){return mi(4,2,e,t)}function Tc(e,t){return mi(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,n){return n=n!=null?n.concat([e]):null,mi(4,4,Lc.bind(null,t,e),n)}function zo(){}function _c(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dc(e,t,n){return At&21?(De(n,t)||(n=Bs(),V.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function wp(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{O=n,Qi.transition=r}}function Oc(){return Pe().memoizedState}function Sp(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Hc(t,n);else if(n=kc(e,t,n,r),n!==null){var i=ue();Re(n,e,r,i),Uc(n,t,r)}}function jp(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Hc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,c=l(a,n);if(i.hasEagerState=!0,i.eagerState=c,De(c,a)){var s=t.interleaved;s===null?(i.next=i,yo(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=kc(e,t,i,r),n!==null&&(i=ue(),Re(n,e,r,i),Uc(n,t,r))}}function Fc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Hc(e,t){An=Zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,io(e,n)}}var ei={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Np={readContext:ze,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:_a,useDebugValue:zo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=_a(!1),t=e[0];return e=wp.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=Fe();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),te===null)throw Error(y(349));At&30||bc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ra(Ec.bind(null,r,l,e),[e]),r.flags|=2048,qn(9,Cc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Fe(),t=te.identifierPrefix;if(B){var n=Ge,r=Qe;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bp={readContext:ze,useCallback:_c,useContext:ze,useEffect:Eo,useImperativeHandle:Ic,useInsertionEffect:Ac,useLayoutEffect:Tc,useMemo:Rc,useReducer:Gi,useRef:Mc,useState:function(){return Gi(Kn)},useDebugValue:zo,useDeferredValue:function(e){var t=Pe();return Dc(t,Y.memoizedState,e)},useTransition:function(){var e=Gi(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Nc,useId:Oc,unstable_isNewReconciler:!1},Cp={readContext:ze,useCallback:_c,useContext:ze,useEffect:Eo,useImperativeHandle:Ic,useInsertionEffect:Ac,useLayoutEffect:Tc,useMemo:Rc,useReducer:Ji,useRef:Mc,useState:function(){return Ji(Kn)},useDebugValue:zo,useDeferredValue:function(e){var t=Pe();return Y===null?t.memoizedState=e:Dc(t,Y.memoizedState,e)},useTransition:function(){var e=Ji(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Nc,useId:Oc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ft(e),l=Je(r,i);l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,i),t!==null&&(Re(t,e,i,r),Pr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ft(e),l=Je(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=dt(e,l,i),t!==null&&(Re(t,e,i,r),Pr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),i=Je(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Re(t,e,r,n),Pr(t,e,r))}};function Da(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,r)||!Bn(i,l):!0}function Bc(e,t,n){var r=!1,i=gt,l=t.contextType;return typeof l=="object"&&l!==null?l=ze(l):(i=ge(t)?Pt:se.current,r=t.contextTypes,l=(r=r!=null)?nn(e,i):gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function Al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ko(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ze(l):(l=ge(t)?Pt:se.current,i.context=nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ml(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hi.enqueueReplaceState(i,i.state,null),Yr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=ed(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ep=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ni||(ni=!0,Bl=r),Tl(e,t)},n}function Vc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Tl(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ep;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Up.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ua(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var zp=Ze.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?yc(t,null,n,r):ln(t,e.child,n,r)}function Ba(e,t,n,r,i){n=n.render;var l=t.ref;return Zt(t,i),r=bo(e,t,n,r,l,i),n=Co(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(B&&n&&fo(t),t.flags|=1,ce(e,t,r,i),t.child)}function Wa(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ro(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$c(e,t,l,r,i)):(e=_r(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(a,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $c(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Bn(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Ll(e,t,n,r,i)}function Qc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Jt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Jt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,F(Jt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,F(Jt,ve),ve|=r;return ce(e,t,i,n),t.child}function Gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,i){var l=ge(n)?Pt:se.current;return l=nn(t,l),Zt(t,i),n=bo(e,t,n,r,l,i),r=Co(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(B&&r&&fo(t),t.flags|=1,ce(e,t,n,i),t.child)}function Va(e,t,n,r,i){if(ge(n)){var l=!0;Qr(t)}else l=!1;if(Zt(t,i),t.stateNode===null)Tr(e,t),Bc(t,n,r),Al(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=ge(n)?Pt:se.current,d=nn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||s!==d)&&Oa(t,a,r,d),nt=!1;var m=t.memoizedState;a.state=m,Yr(t,r,a,i),s=t.memoizedState,c!==r||m!==s||he.current||nt?(typeof h=="function"&&(Ml(t,n,h,r),s=t.memoizedState),(c=nt||Da(t,n,c,r,m,s,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wc(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Te(t.type,c),a.props=d,g=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=ge(n)?Pt:se.current,s=nn(t,s));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==g||m!==s)&&Oa(t,a,r,s),nt=!1,m=t.memoizedState,a.state=m,Yr(t,r,a,i);var w=t.memoizedState;c!==g||m!==w||he.current||nt?(typeof k=="function"&&(Ml(t,n,k,r),w=t.memoizedState),(d=nt||Da(t,n,d,r,m,w,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,l,i)}function Il(e,t,n,r,i,l){Gc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Pa(t,n,!1),Xe(e,t,l);r=t.stateNode,zp.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ln(t,e.child,null,l),t.child=ln(t,null,c,l)):ce(e,t,c,l),t.memoizedState=r.state,i&&Pa(t,n,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&za(e,t.context,!1),wo(e,t.containerInfo)}function $a(e,t,n,r,i){return rn(),ho(i),t.flags|=256,ce(e,t,n,r),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){var r=t.pendingProps,i=W.current,l=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(W,i&1),e===null)return zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=vi(a,r,0,null),e=zt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Rl(n),t.memoizedState=_l,e):Po(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Pp(e,t,a,r,c,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,c=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?l=mt(c,l):(l=zt(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Rl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=_l,r}return l=e.child,e=l.sibling,r=mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Po(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&ho(r),ln(t,e.child,null,n),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pp(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(y(422))),kr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=vi({mode:"visible",children:r.children},i,0,null),l=zt(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&ln(t,e.child,null,a),t.child.memoizedState=Rl(a),t.memoizedState=_l,l);if(!(t.mode&1))return kr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(y(419)),r=Ki(l,r,void 0),kr(e,t,a,r)}if(c=(a&e.childLanes)!==0,me||c){if(r=te,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Re(r,e,i,-1))}return _o(),r=Ki(Error(y(421))),kr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Bp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ye=ut(i.nextSibling),ke=t,B=!0,Ie=null,e!==null&&(Ne[be++]=Qe,Ne[be++]=Ge,Ne[be++]=Mt,Qe=e.id,Ge=e.overflow,Mt=t),t=Po(t,r.children),t.flags|=4096,t)}function Qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function qi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function qc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qa(e,n,t);else if(e.tag===19)Qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qi(t,!0,n,null,l);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mp(e,t,n){switch(t.tag){case 3:Jc(t),rn();break;case 5:Sc(t);break;case 1:ge(t.type)&&Qr(t);break;case 4:wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(Kr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Kc(e,t,n):(F(W,W.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,n)}return Xe(e,t,n)}var Yc,Dl,Xc,Zc;Yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Xc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ct(Be.current);var l=null;switch(n){case"input":i=ll(e,i),r=ll(e,r),l=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":i=sl(e,i),r=sl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}ul(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_n.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var s=r[d];if(c=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==c&&(s!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&c[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(l||(l=[]),l.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,c=c?c.__html:void 0,s!=null&&c!==s&&(l=l||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_n.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&H("scroll",e),l||c===s||(l=[])):(l=l||[]).push(d,s))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ap(e,t,n){var r=t.pendingProps;switch(mo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&$r(),oe(t),null;case 3:return r=t.stateNode,on(),U(he),U(se),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&($l(Ie),Ie=null))),Dl(e,t),oe(t),null;case 5:So(t);var i=Ct(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Xc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return oe(t),null}if(e=Ct(Be.current),vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[He]=t,r[$n]=l,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<bn.length;i++)H(bn[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ta(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":ra(r,l),H("invalid",r)}ul(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&xr(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&xr(r.textContent,c,e),i=["children",""+c]):_n.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":cr(r),na(r,l,!0);break;case"textarea":cr(r),ia(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Es(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[$n]=r,Yc(e,t,!1,!1),t.stateNode=e;e:{switch(a=dl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<bn.length;i++)H(bn[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":ta(e,r),i=ll(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),H("invalid",e);break;case"textarea":ra(e,r),i=sl(e,r),H("invalid",e);break;default:i=r}ul(n,i),c=i;for(l in c)if(c.hasOwnProperty(l)){var s=c[l];l==="style"?Ms(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&zs(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rn(e,s):typeof s=="number"&&Rn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_n.hasOwnProperty(l)?s!=null&&l==="onScroll"&&H("scroll",e):s!=null&&Xl(e,l,s,a))}switch(n){case"input":cr(e),na(e,r,!1);break;case"textarea":cr(e),ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Gn.current),Ct(Be.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return oe(t),null;case 13:if(U(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&t.mode&1&&!(t.flags&128))xc(),rn(),t.flags|=98560,l=!1;else if(l=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[He]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else Ie!==null&&($l(Ie),Ie=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?X===0&&(X=3):_o())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return on(),Dl(e,t),e===null&&Wn(t.stateNode.containerInfo),oe(t),null;case 10:return vo(t.type._context),oe(t),null;case 17:return ge(t.type)&&$r(),oe(t),null;case 19:if(U(W),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)kn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Xr(e),a!==null){for(t.flags|=128,kn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>sn&&(t.flags|=128,r=!0,kn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!B)return oe(t),null}else 2*K()-l.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,kn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=W.current,F(W,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Tp(e,t){switch(mo(t),t.tag){case 1:return ge(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),U(he),U(se),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(U(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(W),null;case 4:return on(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var wr=!1,ae=!1,Lp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ol(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Ga=!1;function Ip(e,t){if(wl=Ur,e=ic(),po(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,c=-1,s=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(c=a+i),g!==l||r!==0&&g.nodeType!==3||(s=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(k=g.firstChild)!==null;)m=g,g=k;for(;;){if(g===e)break t;if(m===n&&++d===i&&(c=a),m===l&&++h===r&&(s=a),(k=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=k}n=c===-1||s===-1?null:{start:c,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sl={focusedElem:e,selectionRange:n},Ur=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,z=w.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Te(t.type,x),z);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ga,Ga=!1,w}function Tn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ol(t,n,l)}i=i.next}while(i!==r)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[$n],delete t[bl],delete t[gp],delete t[xp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function Ja(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}var ne=null,Le=!1;function et(e,t,n){for(n=n.child;n!==null;)nu(e,t,n),n=n.sibling}function nu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(si,n)}catch{}switch(n.tag){case 5:ae||Gt(n,t);case 6:var r=ne,i=Le;ne=null,et(e,t,n),ne=r,Le=i,ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Le?(e=ne,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Hn(e)):Wi(ne,n.stateNode));break;case 4:r=ne,i=Le,ne=n.stateNode.containerInfo,Le=!0,et(e,t,n),ne=r,Le=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Ol(n,t,a),i=i.next}while(i!==r)}et(e,t,n);break;case 1:if(!ae&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Q(n,t,c)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,et(e,t,n),ae=r):et(e,t,n);break;default:et(e,t,n)}}function Ka(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lp),t.forEach(function(r){var i=Wp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:ne=c.stateNode,Le=!1;break e;case 3:ne=c.stateNode.containerInfo,Le=!0;break e;case 4:ne=c.stateNode.containerInfo,Le=!0;break e}c=c.return}if(ne===null)throw Error(y(160));nu(l,a,i),ne=null,Le=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){Q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Oe(e),r&4){try{Tn(3,e,e.return),gi(3,e)}catch(x){Q(e,e.return,x)}try{Tn(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Ae(t,e),Oe(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Ae(t,e),Oe(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var i=e.stateNode;try{Rn(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,c=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&bs(i,l),dl(c,a);var d=dl(c,l);for(a=0;a<s.length;a+=2){var h=s[a],g=s[a+1];h==="style"?Ms(i,g):h==="dangerouslySetInnerHTML"?zs(i,g):h==="children"?Rn(i,g):Xl(i,h,g,d)}switch(c){case"input":ol(i,l);break;case"textarea":Cs(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?Kt(i,!!l.multiple,k,!1):m!==!!l.multiple&&(l.defaultValue!=null?Kt(i,!!l.multiple,l.defaultValue,!0):Kt(i,!!l.multiple,l.multiple?[]:"",!1))}i[$n]=l}catch(x){Q(e,e.return,x)}}break;case 6:if(Ae(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){Q(e,e.return,x)}}break;case 3:if(Ae(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Ae(t,e),Oe(e);break;case 13:Ae(t,e),Oe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(To=K())),r&4&&Ka(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||h,Ae(t,e),ae=d):Ae(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(g=S=h;S!==null;){switch(m=S,k=m.child,m.tag){case 0:case 11:case 14:case 15:Tn(4,m,m.return);break;case 1:Gt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Gt(m,m.return);break;case 22:if(m.memoizedState!==null){Ya(g);continue}}k!==null?(k.return=m,S=k):Ya(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{i=g.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=g.stateNode,s=g.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,c.style.display=Ps("display",a))}catch(x){Q(e,e.return,x)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){Q(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ae(t,e),Oe(e),r&4&&Ka(e);break;case 21:break;default:Ae(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rn(i,""),r.flags&=-33);var l=Ja(e);Ul(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=Ja(e);Hl(e,c,a);break;default:throw Error(y(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e,t,n){S=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wr;if(!a){var c=i.alternate,s=c!==null&&c.memoizedState!==null||ae;c=wr;var d=ae;if(wr=a,(ae=s)&&!d)for(S=i;S!==null;)a=S,s=a.child,a.tag===22&&a.memoizedState!==null?Xa(i):s!==null?(s.return=a,S=s):Xa(i);for(;l!==null;)S=l,iu(l),l=l.sibling;S=i,wr=c,ae=d}qa(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,S=l):qa(e)}}function qa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||gi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ia(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ia(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||t.flags&512&&Fl(t)}catch(m){Q(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ya(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Xa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gi(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Q(t,i,s)}}var l=t.return;try{Fl(t)}catch(s){Q(t,l,s)}break;case 5:var a=t.return;try{Fl(t)}catch(s){Q(t,a,s)}}}catch(s){Q(t,t.return,s)}if(t===e){S=null;break}var c=t.sibling;if(c!==null){c.return=t.return,S=c;break}S=t.return}}var Rp=Math.ceil,ti=Ze.ReactCurrentDispatcher,Mo=Ze.ReactCurrentOwner,Ee=Ze.ReactCurrentBatchConfig,D=0,te=null,q=null,re=0,ve=0,Jt=vt(0),X=0,Yn=null,Tt=0,xi=0,Ao=0,Ln=null,fe=null,To=0,sn=1/0,Ve=null,ni=!1,Bl=null,pt=null,Sr=!1,ot=null,ri=0,In=0,Wl=null,Lr=-1,Ir=0;function ue(){return D&6?K():Lr!==-1?Lr:Lr=K()}function ft(e){return e.mode&1?D&2&&re!==0?re&-re:yp.transition!==null?(Ir===0&&(Ir=Bs()),Ir):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ks(e.type)),e):1}function Re(e,t,n,r){if(50<In)throw In=0,Wl=null,Error(y(185));Zn(e,n,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(xi|=n),X===4&&it(e,re)),xe(e,r),n===1&&D===0&&!(t.mode&1)&&(sn=K()+500,fi&&yt()))}function xe(e,t){var n=e.callbackNode;yd(e,t);var r=Hr(e,e===te?re:0);if(r===0)n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aa(n),t===1)e.tag===0?vp(Za.bind(null,e)):mc(Za.bind(null,e)),mp(function(){!(D&6)&&yt()}),n=null;else{switch(Ws(r)){case 1:n=ro;break;case 4:n=Hs;break;case 16:n=Fr;break;case 536870912:n=Us;break;default:n=Fr}n=pu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(Lr=-1,Ir=0,D&6)throw Error(y(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=Hr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ii(e,r);else{t=r;var i=D;D|=2;var l=au();(te!==e||re!==t)&&(Ve=null,sn=K()+500,Et(e,t));do try{Fp();break}catch(c){ou(e,c)}while(!0);xo(),ti.current=l,D=i,q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=gl(e),i!==0&&(r=i,t=Vl(e,i))),t===1)throw n=Yn,Et(e,0),it(e,r),xe(e,K()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dp(i)&&(t=ii(e,r),t===2&&(l=gl(e),l!==0&&(r=l,t=Vl(e,l))),t===1))throw n=Yn,Et(e,0),it(e,r),xe(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:jt(e,fe,Ve);break;case 3:if(it(e,r),(r&130023424)===r&&(t=To+500-K(),10<t)){if(Hr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(jt.bind(null,e,fe,Ve),t);break}jt(e,fe,Ve);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_e(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rp(r/1960))-r,10<r){e.timeoutHandle=Nl(jt.bind(null,e,fe,Ve),r);break}jt(e,fe,Ve);break;case 5:jt(e,fe,Ve);break;default:throw Error(y(329))}}}return xe(e,K()),e.callbackNode===n?lu.bind(null,e):null}function Vl(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=ii(e,t),e!==2&&(t=fe,fe=n,t!==null&&$l(t)),e}function $l(e){fe===null?fe=e:fe.push.apply(fe,e)}function Dp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ao,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function Za(e){if(D&6)throw Error(y(327));en();var t=Hr(e,0);if(!(t&1))return xe(e,K()),null;var n=ii(e,t);if(e.tag!==0&&n===2){var r=gl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Yn,Et(e,0),it(e,t),xe(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,fe,Ve),xe(e,K()),null}function Lo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(sn=K()+500,fi&&yt())}}function Lt(e){ot!==null&&ot.tag===0&&!(D&6)&&en();var t=D;D|=1;var n=Ee.transition,r=O;try{if(Ee.transition=null,O=1,e)return e()}finally{O=r,Ee.transition=n,D=t,!(D&6)&&yt()}}function Io(){ve=Jt.current,U(Jt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(mo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:on(),U(he),U(se),jo();break;case 5:So(r);break;case 4:on();break;case 13:U(W);break;case 19:U(W);break;case 10:vo(r.type._context);break;case 22:case 23:Io()}n=n.return}if(te=e,q=e=mt(e.current,null),re=ve=t,X=0,Yn=null,Ao=xi=Tt=0,fe=Ln=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}bt=null}return e}function ou(e,t){do{var n=q;try{if(xo(),Mr.current=ei,Zr){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zr=!1}if(At=0,ee=Y=V=null,An=!1,Jn=0,Mo.current=null,n===null||n.return===null){X=1,Yn=t,q=null;break}e:{var l=e,a=n.return,c=n,s=t;if(t=re,c.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=c,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=Ha(a);if(k!==null){k.flags&=-257,Ua(k,a,c,l,t),k.mode&1&&Fa(l,d,t),t=k,s=d;var w=t.updateQueue;if(w===null){var x=new Set;x.add(s),t.updateQueue=x}else w.add(s);break e}else{if(!(t&1)){Fa(l,d,t),_o();break e}s=Error(y(426))}}else if(B&&c.mode&1){var z=Ha(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ua(z,a,c,l,t),ho(an(s,c));break e}}l=s=an(s,c),X!==4&&(X=2),Ln===null?Ln=[l]:Ln.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Wc(l,s,t);La(l,p);break e;case 1:c=s;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Vc(l,c,t);La(l,v);break e}}l=l.return}while(l!==null)}cu(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function au(){var e=ti.current;return ti.current=ei,e===null?ei:e}function _o(){(X===0||X===3||X===2)&&(X=4),te===null||!(Tt&268435455)&&!(xi&268435455)||it(te,re)}function ii(e,t){var n=D;D|=2;var r=au();(te!==e||re!==t)&&(Ve=null,Et(e,t));do try{Op();break}catch(i){ou(e,i)}while(!0);if(xo(),D=n,ti.current=r,q!==null)throw Error(y(261));return te=null,re=0,X}function Op(){for(;q!==null;)su(q)}function Fp(){for(;q!==null&&!ud();)su(q)}function su(e){var t=du(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?cu(e):q=t,Mo.current=null}function cu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=Ap(n,t,ve),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function jt(e,t,n){var r=O,i=Ee.transition;try{Ee.transition=null,O=1,Hp(e,t,n,r)}finally{Ee.transition=i,O=r}return null}function Hp(e,t,n,r){do en();while(ot!==null);if(D&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(kd(e,l),e===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sr||(Sr=!0,pu(Fr,function(){return en(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var a=O;O=1;var c=D;D|=4,Mo.current=null,Ip(e,n),ru(n,e),op(Sl),Ur=!!wl,Sl=wl=null,e.current=n,_p(n),dd(),D=c,O=a,Ee.transition=l}else e.current=n;if(Sr&&(Sr=!1,ot=e,ri=i),l=e.pendingLanes,l===0&&(pt=null),md(n.stateNode),xe(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ni)throw ni=!1,e=Bl,Bl=null,e;return ri&1&&e.tag!==0&&en(),l=e.pendingLanes,l&1?e===Wl?In++:(In=0,Wl=e):In=0,yt(),null}function en(){if(ot!==null){var e=Ws(ri),t=Ee.transition,n=O;try{if(Ee.transition=null,O=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ri=0,D&6)throw Error(y(331));var i=D;for(D|=4,S=e.current;S!==null;){var l=S,a=l.child;if(S.flags&16){var c=l.deletions;if(c!==null){for(var s=0;s<c.length;s++){var d=c[s];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Tn(8,h,l)}var g=h.child;if(g!==null)g.return=h,S=g;else for(;S!==null;){h=S;var m=h.sibling,k=h.return;if(eu(h),h===d){S=null;break}if(m!==null){m.return=k,S=m;break}S=k}}}var w=l.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var z=x.sibling;x.sibling=null,x=z}while(x!==null)}}S=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,S=a;else e:for(;S!==null;){if(l=S,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Tn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,S=p;break e}S=l.return}}var u=e.current;for(S=u;S!==null;){a=S;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,S=f;else e:for(a=u;S!==null;){if(c=S,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:gi(9,c)}}catch(j){Q(c,c.return,j)}if(c===a){S=null;break e}var v=c.sibling;if(v!==null){v.return=c.return,S=v;break e}S=c.return}}if(D=i,yt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(si,e)}catch{}r=!0}return r}finally{O=n,Ee.transition=t}}return!1}function es(e,t,n){t=an(n,t),t=Wc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(Zn(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)es(e,e,n);else for(;t!==null;){if(t.tag===3){es(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=an(n,e),e=Vc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(Zn(t,1,e),xe(t,e));break}}t=t.return}}function Up(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>K()-To?Et(e,0):Ao|=n),xe(e,t)}function uu(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(Zn(e,t,n),xe(e,n))}function Bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uu(e,n)}function Wp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),uu(e,n)}var du;du=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Mp(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&hc(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var i=nn(t,se.current);Zt(t,n),i=bo(null,t,r,e,i,n);var l=Co();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,Qr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ko(t),i.updater=hi,t.stateNode=i,i._reactInternals=t,Al(t,r,e,n),t=Il(null,t,r,!0,l,n)):(t.tag=0,B&&l&&fo(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$p(r),e=Te(r,e),i){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=Ba(null,t,r,e,n);break e;case 14:t=Wa(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ll(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Va(e,t,r,i,n);case 3:e:{if(Jc(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,i=l.element,wc(e,t),Yr(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=an(Error(y(423)),t),t=$a(e,t,r,n,i);break e}else if(r!==i){i=an(Error(y(424)),t),t=$a(e,t,r,n,i);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),ke=t,B=!0,Ie=null,n=yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===i){t=Xe(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Sc(t),e===null&&zl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,jl(r,i)?a=null:l!==null&&jl(r,l)&&(t.flags|=32),Gc(e,t),ce(e,t,a,n),t.child;case 6:return e===null&&zl(t),null;case 13:return Kc(e,t,n);case 4:return wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ba(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,F(Kr,r._currentValue),r._currentValue=a,l!==null)if(De(l.value,a)){if(l.children===i.children&&!he.current){t=Xe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){a=l.child;for(var s=c.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Je(-1,n&-n),s.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Pl(l.return,n,t),c.lanes|=n;break}s=s.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(y(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Pl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zt(t,n),i=ze(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Te(r,t.pendingProps),i=Te(r.type,i),Wa(e,t,r,i,n);case 15:return $c(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Tr(e,t),t.tag=1,ge(r)?(e=!0,Qr(t)):e=!1,Zt(t,n),Bc(t,r,i),Al(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return qc(e,t,n);case 22:return Qc(e,t,n)}throw Error(y(156,t.tag))};function pu(e,t){return Fs(e,t)}function Vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Vp(e,t,n,r)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $p(e){if(typeof e=="function")return Ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===eo)return 11;if(e===to)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _r(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")Ro(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ot:return zt(n.children,i,l,t);case Zl:a=8,i|=8;break;case tl:return e=Ce(12,n,t,i|2),e.elementType=tl,e.lanes=l,e;case nl:return e=Ce(13,n,t,i),e.elementType=nl,e.lanes=l,e;case rl:return e=Ce(19,n,t,i),e.elementType=rl,e.lanes=l,e;case Ss:return vi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ks:a=10;break e;case ws:a=9;break e;case eo:a=11;break e;case to:a=14;break e;case tt:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function zt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Ss,e.lanes=n,e.stateNode={isHidden:!1},e}function Yi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Xi(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,r,i,l,a,c,s){return e=new Qp(e,t,n,c,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ce(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(l),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fu(e){if(!e)return gt;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ge(n))return fc(e,n,t)}return t}function mu(e,t,n,r,i,l,a,c,s){return e=Do(n,r,!0,e,i,l,a,c,s),e.context=fu(null),n=e.current,r=ue(),i=ft(n),l=Je(r,i),l.callback=t??null,dt(n,l,i),e.current.lanes=i,Zn(e,i,r),xe(e,r),e}function yi(e,t,n,r){var i=t.current,l=ue(),a=ft(i);return n=fu(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,a),e!==null&&(Re(e,i,a,l),Pr(e,i,a)),a}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ts(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oo(e,t){ts(e,t),(e=e.alternate)&&ts(e,t)}function Jp(){return null}var hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}ki.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));yi(e,t,null,null)};ki.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){yi(null,e,null,null)}),t[qe]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Js(e)}};function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ns(){}function Kp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=li(a);l.call(d)}}var a=mu(t,r,e,0,null,!1,!1,"",ns);return e._reactRootContainer=a,e[qe]=a.current,Wn(e.nodeType===8?e.parentNode:e),Lt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var d=li(s);c.call(d)}}var s=Do(e,0,!1,null,null,!1,!1,"",ns);return e._reactRootContainer=s,e[qe]=s.current,Wn(e.nodeType===8?e.parentNode:e),Lt(function(){yi(t,s,n,r)}),s}function Si(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var c=i;i=function(){var s=li(a);c.call(s)}}yi(t,a,e,i)}else a=Kp(n,t,e,i,r);return li(a)}Vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(io(t,n|1),xe(t,K()),!(D&6)&&(sn=K()+500,yt()))}break;case 13:Lt(function(){var r=Ye(e,1);if(r!==null){var i=ue();Re(r,e,1,i)}}),Oo(e,1)}};lo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}Oo(e,134217728)}};$s=function(e){if(e.tag===13){var t=ft(e),n=Ye(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}Oo(e,t)}};Qs=function(){return O};Gs=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};fl=function(e,t,n){switch(t){case"input":if(ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pi(r);if(!i)throw Error(y(90));Ns(r),ol(r,i)}}}break;case"textarea":Cs(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ls=Lo;Is=Lt;var qp={usingClientEntryPoint:!1,Events:[tr,Bt,pi,As,Ts,Lo]},wn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ds(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{si=jr.inject(Yp),Ue=jr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ho(t))throw Error(y(200));return Gp(e,t,null,n)};Se.createRoot=function(e,t){if(!Ho(e))throw Error(y(299));var n=!1,r="",i=hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,r,i),e[qe]=t.current,Wn(e.nodeType===8?e.parentNode:e),new Fo(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ds(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Lt(e)};Se.hydrate=function(e,t,n){if(!wi(t))throw Error(y(200));return Si(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Ho(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=hu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=mu(t,null,e,1,n??null,i,!1,l,a),e[qe]=t.current,Wn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ki(t)};Se.render=function(e,t,n){if(!wi(t))throw Error(y(200));return Si(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!wi(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Se.unstable_batchedUpdates=Lo;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Si(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function gu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gu)}catch(e){console.error(e)}}gu(),gs.exports=Se;var Xp=gs.exports,rs=Xp;Zi.createRoot=rs.createRoot,Zi.hydrateRoot=rs.hydrateRoot;const Zp=()=>{const e=M.useRef(null);return M.useEffect(()=>{const t=e.current;if(!t)return;const n=t.getContext("2d");let r,i=t.width=window.innerWidth,l=t.height=window.innerHeight;const a=[],c=Math.min(Math.floor(i/18),75),s={x:null,y:null,radius:140};class d{constructor(){this.x=Math.random()*i,this.y=Math.random()*l,this.vx=(Math.random()-.5)*.8,this.vy=(Math.random()-.5)*.8,this.radius=Math.random()*2+1,this.baseAlpha=Math.random()*.4+.2}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>i)&&(this.vx*=-1),(this.y<0||this.y>l)&&(this.vy*=-1),s.x!==null&&s.y!==null){const z=s.x-this.x,p=s.y-this.y,u=Math.sqrt(z*z+p*p);if(u<s.radius){const f=(s.radius-u)/s.radius;this.x-=z/u*f*3,this.y-=p/u*f*3}}}draw(){n.beginPath(),n.arc(this.x,this.y,this.radius,0,Math.PI*2),n.fillStyle=`rgba(59, 130, 246, ${this.baseAlpha})`,n.fill()}}for(let x=0;x<c;x++)a.push(new d);const h=()=>{for(let x=0;x<a.length;x++)for(let z=x+1;z<a.length;z++){const p=a[x].x-a[z].x,u=a[x].y-a[z].y,f=Math.sqrt(p*p+u*u);if(f<120){const v=(1-f/120)*.22;n.beginPath(),n.moveTo(a[x].x,a[x].y),n.lineTo(a[z].x,a[z].y),n.strokeStyle=`rgba(139, 92, 246, ${v})`,n.lineWidth=.8,n.stroke()}}},g=()=>{n.clearRect(0,0,i,l),a.forEach(x=>{x.update(),x.draw()}),h(),r=requestAnimationFrame(g)};g();const m=()=>{i=t.width=window.innerWidth,l=t.height=window.innerHeight},k=x=>{s.x=x.clientX,s.y=x.clientY},w=()=>{s.x=null,s.y=null};return window.addEventListener("resize",m),window.addEventListener("mousemove",k),window.addEventListener("mouseleave",w),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",k),window.removeEventListener("mouseleave",w),cancelAnimationFrame(r)}},[]),o.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.6}})};class ef{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}}playHover(){if(!this.muted)try{if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(420,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(840,this.ctx.currentTime+.05),n.gain.setValueAtTime(.015,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.05)}catch{}}playClick(){if(!this.muted)try{if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(580,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(290,this.ctx.currentTime+.08),n.gain.setValueAtTime(.04,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.08)}catch{}}playSuccess(){if(!this.muted)try{if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime;[523.25,659.25,783.99].forEach((n,r)=>{const i=this.ctx.createOscillator(),l=this.ctx.createGain();i.frequency.setValueAtTime(n,t+r*.06),l.gain.setValueAtTime(.03,t+r*.06),l.gain.exponentialRampToValueAtTime(.001,t+r*.06+.12),i.connect(l),l.connect(this.ctx.destination),i.start(t+r*.06),i.stop(t+r*.06+.12)})}catch{}}toggleMute(){return this.muted=!this.muted,this.muted}}const I=new ef;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),T=(e,t)=>{const n=M.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:c="",children:s,...d},h)=>M.createElement("svg",{ref:h,...tf,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:["lucide",`lucide-${nf(e)}`,c].join(" "),...d},[...t.map(([g,m])=>M.createElement(g,m)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=T("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=T("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=T("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=T("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=T("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=T("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=T("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=T("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=T("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=T("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=T("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=T("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=T("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=T("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=T("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=T("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=T("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=T("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=T("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=T("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=T("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=T("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=T("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=T("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=T("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=T("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=T("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=T("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=T("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=T("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=T("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=T("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=T("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=T("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=T("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),bf=({activeSection:e,onNavigate:t,onOpenMncModal:n,onOpenTerminal:r,onOpenResumeModal:i,isDark:l,onToggleTheme:a})=>{const[c,s]=M.useState(0),[d,h]=M.useState(!1),[g,m]=M.useState(I.muted);M.useEffect(()=>{const x=()=>{const z=document.documentElement.scrollHeight-window.innerHeight,p=window.scrollY;s(p/z*100),h(p>40)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const k=()=>{const x=I.toggleMute();m(x)},w=[{id:"home",label:"Home",icon:is},{id:"about",label:"About",icon:is},{id:"skills",label:"Skills",icon:df},{id:"experience",label:"Experience",icon:vu},{id:"architecture",label:"Architecture",icon:Vo},{id:"projects",label:"Projects",icon:yu},{id:"devops",label:"Terminal",icon:Su},{id:"contact",label:"Contact",icon:Qo}];return o.jsxs("header",{className:`navbar-header ${d?"scrolled":""}`,children:[o.jsx("div",{className:"scroll-progress-bar",style:{width:`${c}%`}}),o.jsxs("div",{className:"navbar-container",children:[o.jsxs("div",{className:"navbar-brand",onClick:()=>t("home"),children:[o.jsx("div",{className:"brand-icon",children:o.jsx(ji,{size:20,className:"icon-pulse"})}),o.jsxs("span",{className:"brand-name",children:["Raman",o.jsx("span",{className:"accent-dot",children:".dev"})]}),o.jsx("span",{className:"badge-mnc",children:"MNC Ready"})]}),o.jsx("nav",{className:"navbar-links",children:w.map(x=>{const z=x.icon,p=e===x.id;return o.jsxs("button",{className:`nav-item ${p?"active":""}`,onClick:()=>{I.playClick(),t(x.id)},children:[o.jsx(z,{size:14}),o.jsx("span",{children:x.label})]},x.id)})}),o.jsxs("div",{className:"navbar-actions",children:[o.jsxs("button",{className:"action-pill btn-mnc",onClick:()=>{I.playClick(),n()},title:"MNC Technical Interview Prep Cheat Sheet",children:[o.jsx(Uo,{size:16}),o.jsx("span",{className:"pill-text",children:"MNC Q&A"})]}),o.jsxs("button",{className:"action-pill btn-resume",onClick:()=>{I.playClick(),i()},title:"View ATS Resume",children:[o.jsx(Wo,{size:16}),o.jsx("span",{className:"pill-text",children:"ATS Resume"})]}),o.jsx("button",{className:"icon-circle-btn",onClick:k,title:g?"Unmute Web Audio":"Mute Web Audio",children:g?o.jsx(jf,{size:16}):o.jsx(Sf,{size:16})}),o.jsx("button",{className:"icon-circle-btn",onClick:()=>{I.playClick(),a()},title:"Toggle Light/Dark Theme",children:l?o.jsx(wf,{size:16}):o.jsx(hf,{size:16})})]})]}),o.jsx("style",{children:`
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
      `})]})},We=({children:e,className:t="",style:n={},maxTilt:r=12,...i})=>{const l=M.useRef(null),[a,c]=M.useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),s=g=>{if(!l.current)return;const m=l.current.getBoundingClientRect(),k=g.clientX-m.left,w=g.clientY-m.top,x=m.width/2,z=m.height/2,p=(w-z)/z*-r,u=(k-x)/x*r;c(`perspective(1000px) rotateX(${p.toFixed(2)}deg) rotateY(${u.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`)},d=()=>{I.playHover()},h=()=>{c("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")};return o.jsx("div",{ref:l,className:`tilt-card-wrapper ${t}`,onMouseMove:s,onMouseEnter:d,onMouseLeave:h,style:{transform:a,transition:"transform 0.15s ease-out, box-shadow 0.25s ease-out",transformStyle:"preserve-3d",...n},...i,children:e})},Cf="/assets/secure_ai_preview-CQYoIQs2.png",P={personal:{name:"Ramanjaneyulu Boya",titles:["Java Full Stack Developer","Microservices Architecture Specialist","Angular + Spring Boot Engineer","PostgreSQL Multitenancy & AI Developer"],email:"ramanms8688@gmail.com",phone:"+91 8688505451",location:"Kurnool, Andhra Pradesh, India",github:"https://github.com/Raman-8688",linkedin:"https://linkedin.com/in/b-ramanjaneyulu-155021258",heroSub:"Full Stack Engineer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot 3.x</strong>, <strong>Angular 19</strong>, <strong>PostgreSQL Multitenancy</strong>, and <strong>AI Integration</strong> — delivering real production software for enterprise clients."},achievements:[{icon:"fas fa-train",value:"Live Client",label:"Hyderabad Metro AMS",color:"#8b5cf6"},{icon:"fas fa-layer-group",value:"10+",label:"Microservices Mesh",color:"#3b82f6"},{icon:"fas fa-database",value:"3 Engines",label:"Postgres · MSSQL · MySQL",color:"#10b981"},{icon:"fas fa-robot",value:"AI Integrated",label:"NVIDIA AI & Hugging Face",color:"#ec4899"}],about:{intro:"I am a <strong>Java Full Stack & Microservices Developer</strong> with 1 year of production experience engineering enterprise systems. My expertise ranges from deploying <strong>live asset tracking for Hyderabad Metro Rail</strong> to constructing <strong>dynamic schema-per-tenant SaaS platforms</strong> and <strong>AI-integrated microservices</strong>.",points:[{icon:"fas fa-train",title:"Hyderabad Metro Asset Management System (AMS)",text:"Engineered inventory tracking screens, MSSQL stored procedures, database indexes & synonyms, and decoupled microservices for high-volume transit infrastructure assets."},{icon:"fas fa-capsules",title:"Multi-Tenant Pharma SaaS Platform",text:"Built PostgreSQL dynamic schema-per-tenant isolation using custom Hibernate resolvers, Spring Cloud Gateway, and Eureka Discovery Server."},{icon:"fas fa-brain",title:"NexusCore ERP Work Hub (Nexus 360)",text:"Constructed an enterprise ERP microservices ecosystem (Auth, Employee, Department, Notification) integrated with NVIDIA AI Models for automated workflow intelligence."},{icon:"fas fa-shield-halved",title:"Secure AI Assistant (Deployed Live Monolith)",text:"Built and deployed a full-stack Security & AI assistant featuring Angular 19, Spring Boot, Spring Security, JWT, Google & GitHub OAuth2 login, voice input, and real-time AI streaming."}],infoCards:[{label:"Experience",value:"1 Year (Java Full Stack)",icon:"fas fa-briefcase",color:"#8b5cf6"},{label:"Current Employer",value:"Winfocus Solutions Pvt Ltd",icon:"fas fa-building",color:"#3b82f6"},{label:"Education",value:"Newtons Inst. of Engineering",icon:"fas fa-graduation-cap",color:"#10b981"},{label:"Merit Award",value:"JSpiders Exam Scholarship",icon:"fas fa-award",color:"#f59e0b"}]},experiences:[{company:"Winfocus Solutions Pvt Ltd",role:"Full Stack Developer",period:"Jun 2025 – Present",location:"Andhra Pradesh, India",type:"Full-Time",color:"#00bcd4",badge:"Current Role",description:"Lead developer on production multi-tenant Pharma SaaS platform and internal AI translation developer tooling.",achievements:["Built <strong>Multi-Tenant Pharma Management Platform</strong> — separate Spring Boot microservices (Inventory, Billing, User Management, Reports) with PostgreSQL dynamic schema-per-tenant isolation.","Implemented <strong>Dynamic Multilanguage UI</strong> in Angular — all labels, table headers, form inputs, and buttons switch dynamically at runtime based on DB tenant language settings.","Engineered <strong>Multilanguage Converter Tool</strong> — accepts Angular ZIP files, parses HTML/TS templates, integrates Hugging Face AI for batch translation, and outputs CSV + SQL INSERT statements.","Configured <strong>Spring Cloud API Gateway + Eureka Server + Spring Security JWT</strong> for centralized routing and granular role-based access control (RBAC).","Deployed containerized applications using <strong>Docker & Kubernetes</strong> on enterprise VMs."],tech:["Angular 19","Java 17","Spring Boot","Microservices","PostgreSQL","Eureka","Spring Cloud Gateway","Docker","Kubernetes","Hugging Face AI","Git"]},{company:"AMS — Asset Management System (Hyderabad Metro Rail)",role:"Full Stack Developer",period:"2024",location:"Hyderabad, India",type:"Live Client Project",color:"#8b5cf6",badge:"Production Client",description:"Enterprise transit asset tracking platform deployed live across Hyderabad Metro Rail stations and operational hubs.",achievements:["Developed interactive <strong>Angular Inventory Screens</strong> for station asset tracking across locations, categories, layout group types, and sub-groups.","Authored high-performance <strong>MSSQL Stored Procedures</strong> for complex batch queries, location audits, and historical logging.","Created database <strong>Indexes & Synonyms</strong> to optimize cross-schema query execution speed by over 45%.","Built decoupled microservices (Auth Service, Admin Service, Asset Register Service) connected via Spring API Gateway and a shared Common DTO Library."],tech:["Angular","Java","Spring Boot","MSSQL","Stored Procedures","Indexes & Synonyms","API Gateway","Git"]},{company:"JSpiders Training Institute",role:"Java Full Stack Specialist Trainee",period:"Jun 2024 – Jan 2025",location:"Bangalore, India",type:"Advanced Certification",color:"#10b981",badge:"Scholarship Recipient",description:"Rigorous 6-month hands-on training in Core/Advanced Java, Data Structures, Spring Boot, Hibernate, Angular, and SQL.",achievements:["Awarded <strong>JSpiders Merit Scholarship</strong> for top percentile scoring in Java & SQL technical evaluations.","Constructed 15+ full-stack mini projects demonstrating clean code patterns, MVC architecture, and REST API design."],tech:["Java 17","Spring Boot","Hibernate","SQL","Angular","OOP","Data Structures"]}],skills:[{category:"Backend & Microservices",icon:"fas fa-server",color:"#6db33f",items:[{name:"Java 17 / 21",tag:"Core & Enterprise",badge:"Expert"},{name:"Spring Boot 3.x",tag:"REST & MVC",badge:"Production"},{name:"Microservices Mesh",tag:"Eureka & Gateway",badge:"Enterprise"},{name:"Spring Security & JWT",tag:"OAuth2 & RBAC",badge:"Security"},{name:"Spring Data JPA / Hibernate",tag:"ORM & Querying",badge:"Core"}]},{category:"Frontend Engineering",icon:"fab fa-angular",color:"#dd0031",items:[{name:"Angular 19 / 18",tag:"Standalone & Signals",badge:"Production"},{name:"TypeScript & JavaScript",tag:"ES6+ & Async",badge:"Expert"},{name:"RxJS & Reactive Forms",tag:"State Management",badge:"Advanced"},{name:"HTML5 / Modern CSS3",tag:"Glassmorphism & Flex",badge:"UI/UX"},{name:"React.js",tag:"Hooks & Components",badge:"Modern"}]},{category:"Databases & Multitenancy",icon:"fas fa-database",color:"#4169E1",items:[{name:"PostgreSQL (Multitenancy)",tag:"Schema-per-Tenant",badge:"Enterprise"},{name:"MSSQL Enterprise",tag:"Stored Procs & Synonyms",badge:"Production"},{name:"MySQL Database",tag:"Indexing & Tuning",badge:"Advanced"},{name:"SQL Query Optimization",tag:"Execution Plans",badge:"Tuning"}]},{category:"DevOps, Cloud & AI",icon:"fas fa-cloud-upload-alt",color:"#2496ED",items:[{name:"Docker Containerization",tag:"Dockerfiles & Compose",badge:"DevOps"},{name:"Kubernetes (K8s)",tag:"Pods & Services",badge:"Cloud"},{name:"NVIDIA AI & Hugging Face",tag:"AI Models Integration",badge:"AI/ML"},{name:"Git & SVN Version Control",tag:"Branching & Merging",badge:"Workflow"},{name:"Linux / Bash Scripting",tag:"CLI & Automation",badge:"System"}]}],projects:[{id:"hyderabad-metro-ams",title:"Hyderabad Metro Asset Management System (AMS)",category:"Live Client Projects",subtitle:"Live transit asset tracking deployed for Hyderabad Metro Rail stations.",badge:"Live Client Deployment",color:"#8b5cf6",image:"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",githubUrl:"https://github.com/Raman-8688",liveUrl:null,highlights:["Live Client Project actively used across Hyderabad Metro Rail stations.","Built Angular inventory screens with location-based, category-based, and group-based filtering.","Authored custom MSSQL Stored Procedures for audit tracking and rapid query execution.","Configured non-clustered database indexes and synonyms for cross-service database access.","Spring Cloud API Gateway integration for Auth, Admin, and Asset Register microservices."],techSpecs:{frontend:"Angular 19, Reactive Forms, SCSS Grid",backend:"Java 17, Spring Boot 3, Microservices Architecture",database:"MSSQL Enterprise (Stored Procedures, Indexing, Synonyms)",security:"Spring Security, JWT Token Validation, Gateway Route Guards",deployment:"Spring Cloud Gateway, Shared Common Library, Client VM Server"},codeSnippet:`// Spring Cloud API Gateway Route Config (Hyderabad Metro AMS)
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
}`},{id:"winfocus-pharma-multitenant",title:"Multi-Tenant Pharma SaaS Platform",category:"Live Client Projects",subtitle:"Dynamic PostgreSQL schema-per-tenant pharmaceutical enterprise platform.",badge:"Live Production SaaS",color:"#00bcd4",image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",githubUrl:"https://github.com/Raman-8688",liveUrl:null,highlights:["Dynamic PostgreSQL schema-per-tenant data isolation using Hibernate custom connection providers.","Database-driven dynamic multilanguage UI — switchable per user preference at runtime.","Centralized Netflix Eureka service discovery & Spring Cloud API Gateway.","Role-based access control (RBAC) with JWT auth across Inventory, Billing, and User Management services.","Docker containerized deployment with Kubernetes pod management."],techSpecs:{frontend:"Angular 19, Dynamic Multilanguage Pipes, RxJS Signal State",backend:"Java 17, Spring Boot, Netflix Eureka, Spring Cloud Gateway",database:"PostgreSQL (Dynamic Schema-per-Tenant Routing)",security:"Spring Security, OAuth2, JWT Refresh Tokens",devops:"Docker, Kubernetes, Git, SVN, Nginx"},codeSnippet:`// Dynamic PostgreSQL Schema Resolver (Pharma SaaS)
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
}`},{id:"enterprise-oms",title:"Enterprise Order Management System (OMS)",category:"Full-Stack Microservices",subtitle:"High-throughput event-driven microservices order processing pipeline.",badge:"Microservices Mesh",color:"#3b82f6",image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",githubUrl:"https://github.com/Raman-8688/enterprise-order-management-system",liveUrl:null,highlights:["Built decoupled Order Service, Inventory Service, and Payment Service with Spring Boot 3.","Integrated Spring Cloud API Gateway for rate limiting and central routing.","Used Netflix Eureka Server for dynamic service registration and client-side load balancing.","Implemented event-driven messaging with Kafka for async order fulfillment status updates.","Containerized all microservices with Docker Compose for seamless environment provisioning."],techSpecs:{backend:"Java 17, Spring Boot 3, Spring Cloud Gateway, Eureka",messaging:"Apache Kafka Event Bus, Asynchronous Processing",database:"PostgreSQL, Spring Data JPA, Liquibase Migrations",security:"Spring Security, JWT Token Claims Verification",container:"Docker, Docker Compose, Health Check Actuators"},codeSnippet:`// Kafka Order Event Publisher (Enterprise OMS)
@Service
public class OrderEventProducer {
    private final KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;

    public void publishOrderCreated(OrderCreatedEvent event) {
        kafkaTemplate.send("order-created-topic", event.getOrderId(), event);
    }
}`},{id:"nexuscore-erp-workhub",title:"NexusCore ERP Work Hub (Nexus 360)",category:"Full-Stack Microservices",subtitle:"Enterprise ERP microservices ecosystem integrated with NVIDIA AI models.",badge:"Microservices + NVIDIA AI",color:"#10b981",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",githubUrl:"https://github.com/Raman-8688/NexusCore-ERP-Work-Hub",liveUrl:null,highlights:["Enterprise microservices hub featuring Auth, Employee, Department, and Notification services.","Integrated NVIDIA AI Models for automated workflow analysis and smart task dispatch.","Built unified Angular dashboard with real-time employee activity and department analytics.","Configured Spring Cloud API Gateway with global exception handlers and JWT auth.","Designed database schemas with relational constraints and optimized index structures."],techSpecs:{frontend:"Angular 19, TypeScript, RxJS Event Streams, Charting",backend:"Java 17, Spring Boot, Spring Security, JWT, Eureka",aiIntegration:"NVIDIA AI API Models Integration",database:"PostgreSQL & MySQL Multi-Database Connectors",devops:"Docker Containers, Git Workflow, CI/CD Pipeline"},codeSnippet:`// NVIDIA AI Integration Service (NexusCore ERP)
@Service
public class NvidiaAiIntegrationService {
    @Value("\${nvidia.ai.api.key}")
    private String apiKey;

    public AiAnalysisResponse analyzeWorkflow(WorkflowPayload payload) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        HttpEntity<WorkflowPayload> entity = new HttpEntity<>(payload, headers);
        return restTemplate.postForObject("https://api.nvidia.com/v1/ai/analyze", entity, AiAnalysisResponse.class);
    }
}`},{id:"secure-ai-assistant",title:"Secure AI Assistant",category:"AI & Deployed Apps",subtitle:"Full-Stack Security & AI Assistant with OAuth2, voice input, and streaming responses.",badge:"Live Deployed App",color:"#10b981",image:Cf,githubUrl:"https://github.com/Raman-8688",liveUrl:"https://secure-ai-assistant-roan.vercel.app/login",highlights:["Deployed live at https://secure-ai-assistant-roan.vercel.app/login.","Built with Angular 19 frontend and Spring Boot backend monolith architecture.","Supports OAuth2 Login with Google & GitHub alongside standard JWT Email/Password auth.","Features real-time AI responses, chat history persistence, voice input speech recognition, and theme toggling."],techSpecs:{frontend:"Angular 19, TypeScript, Voice Speech API, Glass UI",backend:"Spring Boot, Spring Security, OAuth2 Client, JWT",deployment:"Live Deployed on Vercel & Cloud App Hosting",aiEngine:"Real-time Streaming AI API Responses"},codeSnippet:`// OAuth2 Security Configuration (Secure AI Assistant)
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(CsrfConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**", "/oauth2/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2.defaultSuccessUrl("/chat"));
        return http.build();
    }
}`}],mncPrepQnA:[{id:"q1",category:"System Architecture & Multitenancy",question:"How do you handle multi-tenancy with PostgreSQL in a Spring Boot microservice?",answer:"In enterprise SaaS applications, we implement **Schema-per-Tenant isolation**. We implement `CurrentTenantIdentifierResolver` to pull the `X-Tenant-ID` from the incoming HTTP request header validated by the API Gateway. Then, a `MultiTenantConnectionProvider` acquires a DB connection and issues `SET search_path TO tenant_schema`. This guarantees zero data leakage between enterprise tenants without needing separate database server hardware."},{id:"q2",category:"AI Models Integration",question:"How did you integrate NVIDIA AI Models in NexusCore ERP Work Hub?",answer:"We created an asynchronous AI Service layer in Spring Boot that authenticates with NVIDIA AI APIs via bearer tokens. Incoming workflow metrics are serialized into structured JSON payloads, dispatched to NVIDIA AI endpoints, and parsed into actionable employee productivity insights displayed on the Angular dashboard."},{id:"q3",category:"Database Optimization",question:"How did you optimize MSSQL database queries for the Hyderabad Metro AMS project?",answer:"For high-volume asset tracking, we replaced standard ORM entity scans with **MSSQL Stored Procedures** for complex multi-table joins and batch inserts. We created **non-clustered indexes** on heavily searched fields like `StationID` and `AssetCategoryID`. Furthermore, we created **Database Synonyms** to allow fast cross-schema references between the Auth, Admin, and Asset Register service schemas."},{id:"q4",category:"Microservices Resilience",question:"What is the role of Spring Cloud API Gateway and Eureka Service Discovery?",answer:"Netflix Eureka acts as a dynamic service registry where every microservice instance auto-registers its IP and port on startup. Spring Cloud Gateway acts as a reverse proxy single entry point. It fetches instance locations from Eureka, performs client-side load balancing via Spring Cloud LoadBalancer, validates incoming JWT tokens, and routes traffic securely."},{id:"q5",category:"Security & Auth",question:"How does Secure AI Assistant handle Google & GitHub OAuth2 alongside JWT?",answer:"The application configures Spring Security `oauth2Login()`. When a user signs in via Google or GitHub, Spring Security processes the authorization code code-exchange, verifies the OAuth2 token claims, creates or fetches the user in PostgreSQL, and issues a custom JWT token back to the Angular 19 frontend for session state management."}],atsResume:{summary:"Java Full Stack & Microservices Developer with 1 year of hands-on production experience engineering enterprise systems for live client environments (Hyderabad Metro Rail Asset Management System) and multi-tenant SaaS platforms (Winfocus Solutions). Specializing in Java 17, Spring Boot 3, Microservices Mesh (Netflix Eureka, Spring Cloud Gateway), Angular 19, PostgreSQL multitenancy schema routing, and MSSQL database performance tuning.",skillsCategorized:[{category:"Backend & Microservices",items:"Java 17/21, Spring Boot 3.x, REST APIs, Netflix Eureka, Spring Cloud API Gateway, Spring Security, JWT, OAuth2, Spring Data JPA, Hibernate"},{category:"Frontend Development",items:"Angular 19/18, TypeScript, RxJS, Signals, Reactive Forms, Dynamic Multilanguage Pipes, HTML5, Modern CSS3, SCSS, React.js"},{category:"Databases & Multitenancy",items:"PostgreSQL (Dynamic Schema-per-Tenant Isolation), MSSQL Enterprise (Stored Procedures, Indexing, Synonyms), MySQL"},{category:"DevOps, Cloud & AI",items:"Docker Containerization, Kubernetes Pod Management, NVIDIA AI, Hugging Face AI API, Git, SVN, Linux/Bash Scripting, CI/CD Pipelines"}],experience:[{company:"Winfocus Solutions Pvt Ltd",role:"Full Stack Developer",period:"Jun 2025 – Present",location:"Andhra Pradesh, India",bullets:["Engineered multi-tenant Pharma SaaS microservices platform using Spring Boot 3 and PostgreSQL dynamic schema-per-tenant data isolation.","Developed dynamic database-driven multilanguage UI in Angular 19 — button labels, form fields, and placeholders switch switchable per user locale at runtime.","Created standalone internal Multilanguage AI Converter Tool accepting Angular project ZIPs, parsing templates, and integrating Hugging Face AI for batch translation.","Configured Spring Cloud API Gateway, Eureka Discovery Server, and Spring Security JWT role-based access control (RBAC) across decoupled services.","Containerized application microservices using Docker and deployed across Kubernetes pods on enterprise virtual machines."]},{company:"Hyderabad Metro Rail — Asset Management System (AMS)",role:"Full Stack Developer (Client Project)",period:"2024",location:"Hyderabad, India",bullets:["Developed live station asset tracking inventory screens in Angular used actively across Hyderabad Metro Rail stations and operational centers.","Authored high-volume MSSQL Stored Procedures for complex batch queries, location audits, and historical asset tracking logs.","Optimized cross-schema database query performance by over 45% by constructing non-clustered indexes and MSSQL database synonyms.","Built decoupled microservices (Auth, Admin, Asset Register) connected via Spring Cloud API Gateway with shared common DTO libraries."]}],education:"Bachelor of Technology (B.Tech) — Newtons Institute of Engineering (JSpiders Exam Scholarship Awardee)",certifications:"Java Full Stack Developer Specialist Certification — JSpiders Training Institute, Bangalore (Merit Scholarship Winner)"}},ju="/assets/navi_blue-Ce65_mrO.png",Ef=({onNavigate:e,onOpenMncModal:t,onOpenTerminal:n,onOpenResumeModal:r})=>{const[i,l]=M.useState(0),[a,c]=M.useState(""),[s,d]=M.useState(!1),h=P.personal.titles;return M.useEffect(()=>{const g=h[i];let m=s?40:80;!s&&a===g?m=2200:s&&a===""&&(d(!1),l(w=>(w+1)%h.length),m=400);const k=setTimeout(()=>{!s&&a!==g?c(g.substring(0,a.length+1)):s&&a!==""?c(g.substring(0,a.length-1)):!s&&a===g&&d(!0)},m);return()=>clearTimeout(k)},[a,s,i,h]),o.jsxs("section",{id:"home",className:"hero-section",children:[o.jsx("div",{className:"hero-glow orb-1"}),o.jsx("div",{className:"hero-glow orb-2"}),o.jsxs("div",{className:"section-container hero-container",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx(kf,{size:14,className:"icon-sparkle"}),o.jsx("span",{children:"Available for Enterprise MNC Opportunities"})]}),o.jsxs("h1",{className:"hero-name",children:["Hi, I'm ",o.jsx("br",{}),o.jsx("span",{className:"gradient-text",children:P.personal.name})]}),o.jsxs("div",{className:"typewriter-box",children:[o.jsx("span",{className:"tw-text",children:a}),o.jsx("span",{className:"tw-cursor",children:"|"})]}),o.jsx("p",{className:"hero-sub",dangerouslySetInnerHTML:{__html:P.personal.heroSub}}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("button",{className:"btn-primary",onClick:()=>{I.playClick(),e("projects")},children:[o.jsx(yu,{size:18}),o.jsx("span",{children:"Explore Live Projects"}),o.jsx(xu,{size:16})]}),o.jsxs("button",{className:"btn-secondary btn-highlight",onClick:()=>{I.playClick(),t()},children:[o.jsx(Uo,{size:18,className:"icon-purple"}),o.jsx("span",{children:"MNC Interview Q&A"})]}),o.jsxs("button",{className:"btn-secondary",onClick:()=>{I.playClick(),n()},children:[o.jsx(Su,{size:18}),o.jsx("span",{children:"DevOps Terminal"})]})]}),o.jsxs("div",{className:"social-links-bar",children:[o.jsx("a",{href:P.personal.github,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"GitHub Profile",children:o.jsx(ir,{size:18})}),o.jsx("a",{href:P.personal.linkedin,target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"LinkedIn Profile",children:o.jsx($o,{size:18})}),o.jsx("button",{className:"social-icon-btn",onClick:()=>{I.playClick(),r()},title:"View ATS Resume",children:o.jsx(Wo,{size:18})}),o.jsx("span",{className:"social-line"}),o.jsxs("span",{className:"location-tag",children:["📍 ",P.personal.location]})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsx(We,{className:"profile-tilt-card",children:o.jsxs("div",{className:"profile-card-inner",children:[o.jsxs("div",{className:"profile-image-wrap",children:[o.jsx("img",{src:ju,alt:P.personal.name,className:"profile-img"}),o.jsx("div",{className:"profile-overlay-gradient"})]}),o.jsxs("div",{className:"profile-card-info",children:[o.jsxs("div",{className:"profile-role-badge",children:[o.jsx(wu,{size:16}),o.jsx("span",{children:"1 Year Production Experience"})]}),o.jsx("h3",{children:P.personal.name}),o.jsx("p",{children:"Full Stack Engineer @ Winfocus Solutions"}),o.jsxs("div",{className:"tech-pills",children:[o.jsx("span",{children:"Spring Boot 3"}),o.jsx("span",{children:"Angular 19"}),o.jsx("span",{children:"PostgreSQL"}),o.jsx("span",{children:"Docker"})]})]})]})})})]}),o.jsxs("div",{className:"scroll-hint-btn",onClick:()=>{I.playClick(),e("about")},children:[o.jsx(af,{size:22,className:"bounce"}),o.jsx("span",{children:"Scroll to Explore"})]}),o.jsx("style",{children:`
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
      `})]})},zf=()=>o.jsxs("section",{id:"about",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Executive Profile"}),o.jsxs("h2",{className:"section-title",children:["About ",o.jsx("span",{className:"accent-text",children:"My Engineering Journey"})]}),o.jsx("p",{className:"section-sub",children:"1 Year of Production Full Stack Experience delivering high-availability client solutions."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"stats-grid",children:P.achievements.map((e,t)=>o.jsxs(We,{className:"stat-card",children:[o.jsx("div",{className:"stat-icon-wrap",style:{color:e.color,background:`${e.color}15`},children:o.jsx("i",{className:e.icon})}),o.jsx("div",{className:"stat-value",children:e.value}),o.jsx("div",{className:"stat-label",children:e.label})]},t))}),o.jsxs("div",{className:"about-main-grid",children:[o.jsxs("div",{className:"about-bio-box glass-card",children:[o.jsx("h3",{className:"bio-title",children:"Full Stack Developer & Systems Engineer"}),o.jsx("p",{className:"bio-intro",dangerouslySetInnerHTML:{__html:P.about.intro}}),o.jsx("div",{className:"points-list",children:P.about.points.map((e,t)=>o.jsxs("div",{className:"point-item",children:[o.jsx("div",{className:"point-icon",children:o.jsx(rr,{size:18})}),o.jsxs("div",{children:[o.jsx("h4",{className:"point-title",children:e.title}),o.jsx("p",{className:"point-text",children:e.text})]})]},t))})]}),o.jsxs("div",{className:"info-cards-column",children:[P.about.infoCards.map((e,t)=>o.jsxs(We,{className:"info-card glass-card",children:[o.jsxs("div",{className:"info-card-header",children:[o.jsx("div",{className:"info-icon",style:{color:e.color,background:`${e.color}15`},children:o.jsx("i",{className:e.icon})}),o.jsx("span",{className:"info-label",children:e.label})]}),o.jsx("div",{className:"info-val",children:e.value})]},t)),o.jsx("div",{className:"scholarship-banner glass-card",children:o.jsxs("div",{className:"banner-badge",children:[o.jsx(lf,{size:20,className:"icon-gold"}),o.jsxs("div",{children:[o.jsx("h4",{children:"JSpiders Exam Scholarship Awardee"}),o.jsx("p",{children:"Top percentile scorer in Java Full Stack evaluation in Bangalore."})]})]})})]})]})]}),o.jsx("style",{children:`
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
      `})]}),Pf=()=>{const[e,t]=M.useState("All"),n=["All",...P.skills.map(i=>i.category)],r=e==="All"?P.skills:P.skills.filter(i=>i.category===e);return o.jsxs("section",{id:"skills",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Technical Competencies"}),o.jsxs("h2",{className:"section-title",children:["Full Stack ",o.jsx("span",{className:"accent-text",children:"Skills Matrix"})]}),o.jsx("p",{className:"section-sub",children:"Production expertise across modern Java microservice ecosystems, frontends, and cloud databases."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"skill-tabs",children:n.map((i,l)=>o.jsx("button",{className:`skill-tab ${e===i?"active":""}`,onClick:()=>{I.playClick(),t(i)},children:i},l))}),o.jsx("div",{className:"skills-group-grid",children:r.map((i,l)=>o.jsxs(We,{className:"skill-group-card glass-card",children:[o.jsxs("div",{className:"group-header",children:[o.jsx("div",{className:"group-icon",style:{color:i.color,background:`${i.color}15`},children:o.jsx("i",{className:i.icon})}),o.jsx("h3",{children:i.category})]}),o.jsx("div",{className:"skill-items-grid",children:i.items.map((a,c)=>o.jsxs("div",{className:"skill-pill-card",children:[o.jsxs("div",{className:"pill-top",children:[o.jsx(rr,{size:16,style:{color:i.color},className:"pill-check"}),o.jsx("span",{className:"skill-name",children:a.name})]}),o.jsxs("div",{className:"pill-meta",children:[o.jsx("span",{className:"skill-tag-sub",children:a.tag}),o.jsx("span",{className:"skill-badge-level",style:{background:`${i.color}20`,color:i.color},children:a.badge})]})]},c))})]},l))})]}),o.jsx("style",{children:`
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
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .skill-group-card {
          padding: 32px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
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

        .skill-items-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-pill-card {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 12px 16px;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
        }

        .skill-pill-card:hover {
          border-color: var(--theme-color);
          transform: translateX(4px);
          background: color-mix(in srgb, var(--theme-color) 8%, transparent);
        }

        .pill-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .pill-check {
          flex-shrink: 0;
        }

        .skill-name {
          font-size: 14.5px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .pill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 26px;
        }

        .skill-tag-sub {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .skill-badge-level {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 2px 8px;
          border-radius: 8px;
        }
      `})]})},Mf=()=>o.jsxs("section",{id:"experience",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Career History"}),o.jsxs("h2",{className:"section-title",children:["Production ",o.jsx("span",{className:"accent-text",children:"Experience Timeline"})]}),o.jsx("p",{className:"section-sub",children:"Real-world track record building live systems for clients and SaaS products."}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"timeline-container",children:[o.jsx("div",{className:"timeline-line"}),P.experiences.map((e,t)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-dot-wrap",children:o.jsx("div",{className:"timeline-dot",style:{background:e.color},children:o.jsx(vu,{size:16,color:"#fff"})})}),o.jsxs(We,{className:"timeline-content glass-card",children:[o.jsxs("div",{className:"exp-badge-bar",children:[o.jsx("span",{className:"exp-badge",style:{background:`${e.color}15`,color:e.color,borderColor:`${e.color}30`},children:e.badge}),o.jsxs("div",{className:"exp-period",children:[o.jsx(of,{size:13}),o.jsx("span",{children:e.period})]})]}),o.jsx("h3",{className:"exp-company",children:e.company}),o.jsxs("div",{className:"exp-role-row",children:[o.jsx("span",{className:"exp-role",children:e.role}),o.jsxs("span",{className:"exp-location",children:[o.jsx(ku,{size:12})," ",e.location]})]}),o.jsx("p",{className:"exp-desc",children:e.description}),o.jsx("div",{className:"exp-achievements",children:e.achievements.map((n,r)=>o.jsxs("div",{className:"achievement-bullet",children:[o.jsx(rr,{size:16,className:"bullet-icon",style:{color:e.color}}),o.jsx("span",{dangerouslySetInnerHTML:{__html:n}})]},r))}),o.jsx("div",{className:"exp-tech-tags",children:e.tech.map((n,r)=>o.jsx("span",{className:"tech-tag",children:n},r))})]})]},t))]})]}),o.jsx("style",{children:`
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
      `})]}),Af=()=>{const[e,t]=M.useState(0),r=[{id:"angular-ui",title:"Angular UI",sub:"Client App",category:"FRONTEND",color:"#dd0031",details:"Built with Angular 19 Standalone Components, Signal State Management, Dynamic Multilanguage Pipes, and Reactive Forms. Intercepts HTTP requests to inject JWT Auth Headers and Tenant Context headers."},{id:"api-gateway",title:"API Gateway",sub:"Spring Cloud Gateway",category:"ROUTING",color:"#8b5cf6",details:"Centralized edge gateway performing CORS configuration, Global Exception Handling, JWT token validation, rate limiting, and dynamic load-balanced request forwarding to microservice instances."},{id:"microservices",title:"Microservices",sub:"Spring Boot + Eureka",category:"BACKEND",color:"#10b981",details:"Decoupled Spring Boot microservices (Auth, Employee, Department, Notification, Order, Inventory) incorporating Spring Data JPA, Spring Security RBAC, NVIDIA AI integration, and Eureka discovery."},{id:"postgres-db",title:"PostgreSQL",sub:"Multi-tenant Schema",category:"DATA LAYER",color:"#3b82f6",details:"PostgreSQL dynamic Schema-per-Tenant isolation for Winfocus Pharma SaaS, alongside MSSQL enterprise databases equipped with Stored Procedures, Non-Clustered Indexes, and Synonyms for Hyderabad Metro AMS."},{id:"docker-k8s",title:"Docker / K8s",sub:"Orchestration",category:"CONTAINERS",color:"#0284c7",details:"Containerized Docker microservice images orchestrated across Kubernetes pods with rolling updates, environment secret injection, and automated health checks."}][e];return o.jsxs("section",{id:"architecture",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"System Design"}),o.jsxs("h2",{className:"section-title",children:["Enterprise ",o.jsx("span",{className:"accent-text",children:"Architecture"})]}),o.jsx("p",{className:"section-sub",children:"Production microservice topology — click any node to explore implementation details"}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"arch-diagram-wrapper glass-card",children:[o.jsxs("svg",{className:"arch-svg",viewBox:"0 0 1020 220",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"flowLineGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:"#dd0031",stopOpacity:"0.8"}),o.jsx("stop",{offset:"35%",stopColor:"#8b5cf6",stopOpacity:"0.8"}),o.jsx("stop",{offset:"70%",stopColor:"#10b981",stopOpacity:"0.8"}),o.jsx("stop",{offset:"100%",stopColor:"#3b82f6",stopOpacity:"0.8"})]})}),o.jsx("path",{d:"M 880 50 Q 880 18 510 18 Q 300 18 290 50",fill:"none",stroke:"rgba(240, 80, 50, 0.4)",strokeWidth:"1.5",strokeDasharray:"4 4"}),o.jsx("text",{x:"510",y:"14",fill:"rgba(240,80,50,0.7)",fontSize:"9.5",fontFamily:"monospace","text-anchor":"middle",children:"CI/CD deploy trigger"}),o.jsx("line",{x1:"165",y1:"110",x2:"215",y2:"110",stroke:"url(#flowLineGrad)",strokeWidth:"2",strokeDasharray:"5 3"}),o.jsx("text",{x:"190",y:"104",fill:"rgba(167,139,250,0.7)",fontSize:"8.5",fontFamily:"monospace","text-anchor":"middle",children:"HTTP"}),o.jsx("line",{x1:"365",y1:"110",x2:"415",y2:"110",stroke:"url(#flowLineGrad)",strokeWidth:"2",strokeDasharray:"5 3"}),o.jsx("text",{x:"390",y:"104",fill:"rgba(167,139,250,0.7)",fontSize:"8.5",fontFamily:"monospace","text-anchor":"middle",children:"JWT"}),o.jsx("line",{x1:"565",y1:"110",x2:"615",y2:"110",stroke:"url(#flowLineGrad)",strokeWidth:"2",strokeDasharray:"5 3"}),o.jsx("line",{x1:"765",y1:"110",x2:"815",y2:"110",stroke:"url(#flowLineGrad)",strokeWidth:"2",strokeDasharray:"5 3"}),o.jsx("circle",{r:"4.5",fill:"#38bdf8",children:o.jsx("animateMotion",{path:"M 165,110 L 815,110",dur:"4s",repeatCount:"indefinite"})}),o.jsxs("g",{className:"svg-node-group",onClick:()=>{I.playClick(),t(0)},style:{cursor:"pointer"},children:[o.jsx("rect",{x:"20",y:"50",width:"145",height:"120",rx:"14",fill:e===0?"rgba(221,0,49,0.18)":"rgba(221,0,49,0.06)",stroke:e===0?"#dd0031":"rgba(221,0,49,0.4)",strokeWidth:e===0?"2":"1"}),o.jsx("circle",{cx:"92.5",cy:"85",r:"18",fill:"rgba(221,0,49,0.15)",stroke:"#dd0031",strokeWidth:"1"}),o.jsx("text",{x:"92.5",y:"118",textAnchor:"middle",fill:"#dd0031",fontSize:"8",fontWeight:"800",fontFamily:"monospace",letterSpacing:"0.8",children:"FRONTEND"}),o.jsx("text",{x:"92.5",y:"136",textAnchor:"middle",fill:"#f1f5f9",fontSize:"13",fontWeight:"800",fontFamily:"var(--font-display)",children:"Angular UI"}),o.jsx("text",{x:"92.5",y:"152",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontWeight:"500",children:"Client App"})]}),o.jsxs("g",{className:"svg-node-group",onClick:()=>{I.playClick(),t(1)},style:{cursor:"pointer"},children:[o.jsx("rect",{x:"220",y:"50",width:"145",height:"120",rx:"14",fill:e===1?"rgba(139,92,246,0.18)":"rgba(139,92,246,0.06)",stroke:e===1?"#8b5cf6":"rgba(139,92,246,0.4)",strokeWidth:e===1?"2":"1"}),o.jsx("circle",{cx:"292.5",cy:"85",r:"18",fill:"rgba(139,92,246,0.15)",stroke:"#8b5cf6",strokeWidth:"1"}),o.jsx("text",{x:"292.5",y:"118",textAnchor:"middle",fill:"#a78bfa",fontSize:"8",fontWeight:"800",fontFamily:"monospace",letterSpacing:"0.8",children:"ROUTING"}),o.jsx("text",{x:"292.5",y:"136",textAnchor:"middle",fill:"#f1f5f9",fontSize:"13",fontWeight:"800",fontFamily:"var(--font-display)",children:"API Gateway"}),o.jsx("text",{x:"292.5",y:"152",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontWeight:"500",children:"Spring Cloud Gateway"})]}),o.jsxs("g",{className:"svg-node-group",onClick:()=>{I.playClick(),t(2)},style:{cursor:"pointer"},children:[o.jsx("rect",{x:"420",y:"50",width:"145",height:"120",rx:"14",fill:e===2?"rgba(16,185,129,0.18)":"rgba(16,185,129,0.06)",stroke:e===2?"#10b981":"rgba(16,185,129,0.4)",strokeWidth:e===2?"2":"1"}),o.jsx("circle",{cx:"492.5",cy:"85",r:"18",fill:"rgba(16,185,129,0.15)",stroke:"#10b981",strokeWidth:"1"}),o.jsx("text",{x:"492.5",y:"118",textAnchor:"middle",fill:"#10b981",fontSize:"8",fontWeight:"800",fontFamily:"monospace",letterSpacing:"0.8",children:"BACKEND"}),o.jsx("text",{x:"492.5",y:"136",textAnchor:"middle",fill:"#f1f5f9",fontSize:"13",fontWeight:"800",fontFamily:"var(--font-display)",children:"Microservices"}),o.jsx("text",{x:"492.5",y:"152",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontWeight:"500",children:"Spring Boot + Eureka"})]}),o.jsxs("g",{className:"svg-node-group",onClick:()=>{I.playClick(),t(3)},style:{cursor:"pointer"},children:[o.jsx("rect",{x:"620",y:"50",width:"145",height:"120",rx:"14",fill:e===3?"rgba(59,130,246,0.18)":"rgba(59,130,246,0.06)",stroke:e===3?"#3b82f6":"rgba(59,130,246,0.4)",strokeWidth:e===3?"2":"1"}),o.jsx("circle",{cx:"692.5",cy:"85",r:"18",fill:"rgba(59,130,246,0.15)",stroke:"#3b82f6",strokeWidth:"1"}),o.jsx("text",{x:"692.5",y:"118",textAnchor:"middle",fill:"#3b82f6",fontSize:"8",fontWeight:"800",fontFamily:"monospace",letterSpacing:"0.8",children:"DATA LAYER"}),o.jsx("text",{x:"692.5",y:"136",textAnchor:"middle",fill:"#f1f5f9",fontSize:"13",fontWeight:"800",fontFamily:"var(--font-display)",children:"PostgreSQL"}),o.jsx("text",{x:"692.5",y:"152",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontWeight:"500",children:"Multi-tenant Schema"})]}),o.jsxs("g",{className:"svg-node-group",onClick:()=>{I.playClick(),t(4)},style:{cursor:"pointer"},children:[o.jsx("rect",{x:"820",y:"50",width:"145",height:"120",rx:"14",fill:e===4?"rgba(2,132,199,0.18)":"rgba(2,132,199,0.06)",stroke:e===4?"#0284c7":"rgba(2,132,199,0.4)",strokeWidth:e===4?"2":"1"}),o.jsx("circle",{cx:"892.5",cy:"85",r:"18",fill:"rgba(2,132,199,0.15)",stroke:"#0284c7",strokeWidth:"1"}),o.jsx("text",{x:"892.5",y:"118",textAnchor:"middle",fill:"#38bdf8",fontSize:"8",fontWeight:"800",fontFamily:"monospace",letterSpacing:"0.8",children:"CONTAINERS"}),o.jsx("text",{x:"892.5",y:"136",textAnchor:"middle",fill:"#f1f5f9",fontSize:"13",fontWeight:"800",fontFamily:"var(--font-display)",children:"Docker / K8s"}),o.jsx("text",{x:"892.5",y:"152",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontWeight:"500",children:"Orchestration"})]})]}),o.jsx("div",{className:"diagram-click-hint",children:o.jsx("span",{children:"👆 Click any node to explore its implementation details"})})]}),o.jsxs(We,{className:"node-inspector-panel glass-card",children:[o.jsxs("div",{className:"inspector-header",children:[o.jsx("div",{className:"inspector-icon",style:{color:r.color,background:`${r.color}20`},children:o.jsx(Nf,{size:24})}),o.jsxs("div",{children:[o.jsxs("span",{className:"inspector-badge",style:{color:r.color},children:[r.category," COMPONENT"]}),o.jsxs("h3",{children:[r.title," — ",r.sub]})]})]}),o.jsx("p",{className:"inspector-desc",children:r.details}),o.jsxs("div",{className:"inspector-meta-row",children:[o.jsxs("div",{className:"meta-pill",children:[o.jsx(wu,{size:14,className:"icon-green"}),o.jsx("span",{children:"Production Validated"})]}),o.jsxs("div",{className:"meta-pill",children:[o.jsx(Vo,{size:14,className:"icon-purple"}),o.jsx("span",{children:r.category})]})]})]})]}),o.jsx("style",{children:`
        .arch-diagram-wrapper {
          padding: 24px;
          margin-bottom: 28px;
          overflow-x: auto;
        }

        .arch-svg {
          width: 100%;
          min-width: 900px;
          height: auto;
        }

        .diagram-click-hint {
          text-align: center;
          margin-top: 12px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
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
        }

        .inspector-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .inspector-header h3 {
          font-family: var(--font-display);
          font-size: 20px;
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
      `})]})},Tf=({onOpenProjectModal:e})=>{const[t,n]=M.useState("All"),r=["All","Live Client Projects","Full-Stack Microservices","AI & Deployed Apps"],i=t==="All"?P.projects:P.projects.filter(l=>l.category===t);return o.jsxs("section",{id:"projects",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Featured Portfolio"}),o.jsxs("h2",{className:"section-title",children:["Production & ",o.jsx("span",{className:"accent-text",children:"GitHub Projects"})]}),o.jsx("p",{className:"section-sub",children:"Live client infrastructure, multi-tenant SaaS platforms, and AI-integrated microservices."}),o.jsx("div",{className:"title-line"})]}),o.jsx("div",{className:"project-tabs",children:r.map((l,a)=>o.jsx("button",{className:`project-tab ${t===l?"active":""}`,onClick:()=>{I.playClick(),n(l)},children:l},a))}),o.jsx("div",{className:"projects-grid",children:i.map(l=>o.jsxs(We,{className:"project-card glass-card",children:[o.jsxs("div",{className:"project-img-container",children:[o.jsx("img",{src:l.image,alt:l.title,className:"project-cover-img"}),o.jsx("div",{className:"project-badge-overlay",style:{background:l.color},children:l.badge})]}),o.jsxs("div",{className:"project-body",children:[o.jsx("span",{className:"project-category",children:l.category}),o.jsx("h3",{className:"project-title",children:l.title}),o.jsx("p",{className:"project-subtitle",children:l.subtitle}),o.jsx("div",{className:"project-highlights",children:l.highlights.slice(0,3).map((a,c)=>o.jsxs("div",{className:"hl-item",children:[o.jsx(rr,{size:15,style:{color:l.color}}),o.jsx("span",{children:a})]},c))}),o.jsxs("div",{className:"project-card-footer",children:[o.jsxs("div",{className:"proj-links-row",children:[l.liveUrl&&o.jsxs("a",{href:l.liveUrl,target:"_blank",rel:"noreferrer",className:"proj-btn btn-live",onClick:()=>I.playClick(),title:"Open Live Application",children:[o.jsx(ff,{size:15}),o.jsx("span",{children:"Live Demo"})]}),l.githubUrl&&o.jsxs("a",{href:l.githubUrl,target:"_blank",rel:"noreferrer",className:"proj-btn btn-github",onClick:()=>I.playClick(),title:"View GitHub Repository",children:[o.jsx(ir,{size:15}),o.jsx("span",{children:"GitHub"})]})]}),o.jsxs("button",{className:"btn-primary btn-deep-dive",style:{background:`linear-gradient(135deg, ${l.color}, #8b5cf6)`},onClick:()=>{I.playClick(),e(l)},children:[o.jsx(ji,{size:16}),o.jsx("span",{children:"Deep-Dive & Code"}),o.jsx(xu,{size:14})]})]})]})]},l.id))})]}),o.jsx("style",{children:`
        .project-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
        }

        .project-tab {
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .project-tab:hover, .project-tab.active {
          color: #ffffff;
          background: var(--theme-color);
          border-color: var(--theme-color);
          box-shadow: 0 4px 15px color-mix(in srgb, var(--theme-color) 40%, transparent);
        }

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
          height: 210px;
          overflow: hidden;
          background: #0f172a;
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
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .proj-links-row {
          display: flex;
          gap: 10px;
        }

        .proj-btn {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 700;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }

        .btn-live {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .btn-live:hover {
          background: rgba(16, 185, 129, 0.25);
          transform: translateY(-2px);
        }

        .btn-github {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-github:hover {
          border-color: var(--theme-color);
          color: var(--theme-color);
          transform: translateY(-2px);
        }

        .btn-deep-dive {
          width: 100%;
          justify-content: center;
        }
      `})]})},Lf=({onOpenMncModal:e,onOpenResumeModal:t})=>{const[n,r]=M.useState(""),[i,l]=M.useState([{type:"sys",text:'Raman DevOS v2.4 Terminal [Type "help" to view available commands]'},{type:"sys",text:"System status: HEALTHY (PostgreSQL Multitenant Active · Spring Cloud Gateway UP)"}]),a=M.useRef(null);M.useEffect(()=>{var s;(s=a.current)==null||s.scrollIntoView({behavior:"smooth"})},[i]);const c=s=>{s.preventDefault();const d=n.trim().toLowerCase();if(!d)return;I.playClick();const h=[...i,{type:"user",text:`$ ${n}`}];switch(d){case"help":h.push({type:"out",text:`Available Terminal Commands:
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
✔ Container angular-frontend    Started (Port 80)`});break;case"export-resume":t(),h.push({type:"out",text:"Opening ATS Resume Preview Modal..."});break;case"mnc-prep":e(),h.push({type:"out",text:"Opening MNC Technical Interview Cheat Sheet Modal..."});break;case"clear":l([]),r("");return;default:h.push({type:"err",text:`bash: command not found: ${d}. Type "help" for a list of valid commands.`});break}l(h),r("")};return o.jsxs("section",{id:"devops",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"DevOps & Interactive CLI"}),o.jsxs("h2",{className:"section-title",children:["Interactive ",o.jsx("span",{className:"accent-text",children:"DevOps Terminal Simulator"})]}),o.jsx("p",{className:"section-sub",children:"Type Linux & CLI commands below to inspect project systems, health checks, and pipelines."}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"terminal-window glass-card",children:[o.jsxs("div",{className:"terminal-topbar",children:[o.jsxs("div",{className:"terminal-dots",children:[o.jsx("span",{className:"dot dot-red"}),o.jsx("span",{className:"dot dot-yellow"}),o.jsx("span",{className:"dot dot-green"})]}),o.jsx("div",{className:"terminal-title",children:"bash - raman@devos-production:~"}),o.jsx("div",{className:"terminal-quick-help",children:'Type "help"'})]}),o.jsxs("div",{className:"terminal-body",children:[i.map((s,d)=>o.jsx("div",{className:`terminal-line line-${s.type}`,children:s.text},d)),o.jsxs("form",{onSubmit:c,className:"terminal-form",children:[o.jsx("span",{className:"prompt-symbol",children:"raman@devos:~$"}),o.jsx("input",{type:"text",className:"terminal-input",value:n,onChange:s=>r(s.target.value),placeholder:"type a command e.g. help, skills, curl /health...",autoComplete:"off"}),o.jsx("button",{type:"submit",className:"terminal-submit-btn",title:"Run command",children:o.jsx(uf,{size:16})})]}),o.jsx("div",{ref:a})]})]})]}),o.jsx("style",{children:`
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
      `})]})},If=()=>{const e=[[3,4,2,4,3],[2,3,4,1,4],[4,2,3,4,3],[1,4,2,3,4],[3,3,4,4,2],[4,2,3,4,4],[2,4,4,3,1]],t=n=>{switch(n){case 4:return"lvl-4";case 3:return"lvl-3";case 2:return"lvl-2";default:return"lvl-1"}};return o.jsxs("section",{id:"github",className:"section-wrapper section-alt",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Open Source Presence"}),o.jsxs("h2",{className:"section-title",children:["Developer ",o.jsx("span",{className:"accent-text",children:"Activity"})]}),o.jsx("p",{className:"section-sub",children:"Real-time open source statistics and core repository highlights"}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"github-main-grid",children:[o.jsxs(We,{className:"gh-profile-card glass-card",children:[o.jsxs("div",{className:"gh-avatar-row",children:[o.jsx("img",{src:ju,alt:P.personal.name,className:"gh-user-avatar"}),o.jsxs("div",{children:[o.jsx("h3",{className:"gh-user-name",children:P.personal.name}),o.jsx("span",{className:"gh-user-handle",children:"@Raman-8688"})]})]}),o.jsxs("div",{className:"gh-stats-row",children:[o.jsxs("div",{className:"stat-box",children:[o.jsx("div",{className:"stat-num",children:"11"}),o.jsx("div",{className:"stat-lbl",children:"REPOS"})]}),o.jsxs("div",{className:"stat-box",children:[o.jsx("div",{className:"stat-num",children:"1"}),o.jsx("div",{className:"stat-lbl",children:"FOLLOWERS"})]}),o.jsxs("div",{className:"stat-box",children:[o.jsx("div",{className:"stat-num",children:"200+"}),o.jsx("div",{className:"stat-lbl",children:"COMMITS"})]})]}),o.jsxs("a",{href:P.personal.github,target:"_blank",rel:"noreferrer",className:"btn-primary btn-github-full",children:[o.jsx(ir,{size:18}),o.jsx("span",{children:"View GitHub Profile"})]})]}),o.jsxs(We,{className:"gh-activity-card glass-card",children:[o.jsxs("div",{className:"activity-card-header",children:[o.jsxs("div",{className:"act-title",children:[o.jsx(rf,{size:18,className:"icon-blue"}),o.jsx("span",{children:"Contribution Activity"})]}),o.jsxs("div",{className:"act-badge",children:[o.jsx("span",{className:"live-dot"}),o.jsx("span",{children:"Live Syncing"})]})]}),o.jsxs("div",{className:"heatmap-container",children:[o.jsx("div",{className:"heatmap-grid",children:e.map((n,r)=>o.jsx("div",{className:"heatmap-col",children:n.map((i,l)=>o.jsx("div",{className:`heatmap-cell ${t(i)}`},l))},r))}),o.jsxs("div",{className:"heatmap-legend",children:[o.jsx("span",{children:"Less"}),o.jsx("span",{className:"cell-sample lvl-1"}),o.jsx("span",{className:"cell-sample lvl-2"}),o.jsx("span",{className:"cell-sample lvl-3"}),o.jsx("span",{className:"cell-sample lvl-4"}),o.jsx("span",{children:"More"})]})]}),o.jsxs("div",{className:"workflow-tags-row",children:[o.jsx("span",{className:"tag-pill",children:"⏱ Daily commits"}),o.jsx("span",{className:"tag-pill",children:"</> Java & TypeScript"}),o.jsx("span",{className:"tag-pill",children:"🔀 Feature branch workflow"}),o.jsx("span",{className:"tag-pill",children:"🤖 AI projects"})]})]})]})]}),o.jsx("style",{children:`
        .github-main-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 28px;
          max-width: 1060px;
          margin: 0 auto;
        }

        .gh-profile-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .gh-avatar-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .gh-user-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--theme-color);
        }

        .gh-user-name {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        .gh-user-handle {
          font-size: 13px;
          color: var(--theme-color);
          font-weight: 600;
        }

        .gh-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .stat-box {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 14px 10px;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stat-lbl {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.5px;
        }

        .btn-github-full {
          width: 100%;
          justify-content: center;
          padding: 12px;
          background: #3b82f6;
          border-radius: 14px;
        }

        .gh-activity-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .activity-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .act-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 800;
        }

        .act-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #10b981;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        .heatmap-container {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 24px;
        }

        .heatmap-grid {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .heatmap-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .heatmap-cell {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          transition: transform 0.2s;
        }

        .heatmap-cell:hover {
          transform: scale(1.2);
        }

        .lvl-1 { background: rgba(59, 130, 246, 0.2); }
        .lvl-2 { background: rgba(59, 130, 246, 0.45); }
        .lvl-3 { background: rgba(59, 130, 246, 0.75); }
        .lvl-4 { background: #3b82f6; }

        .heatmap-legend {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
          font-size: 11px;
          color: var(--text-secondary);
        }

        .cell-sample {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }

        .workflow-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-pill {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--text-secondary);
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          padding: 5px 12px;
          border-radius: 20px;
        }

        @media (max-width: 992px) {
          .github-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},_f=()=>{const[e,t]=M.useState(!1),[n,r]=M.useState({name:"",email:"",subject:"",message:""}),[i,l]=M.useState(!1),a=()=>{navigator.clipboard.writeText(P.personal.email),I.playSuccess(),t(!0),setTimeout(()=>t(!1),2500)},c=s=>{s.preventDefault(),I.playSuccess(),l(!0),r({name:"",email:"",subject:"",message:""}),setTimeout(()=>l(!1),5e3)};return o.jsxs("section",{id:"contact",className:"section-wrapper",children:[o.jsxs("div",{className:"section-container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-tag",children:"Let's Connect"}),o.jsxs("h2",{className:"section-title",children:["Get In ",o.jsx("span",{className:"accent-text",children:"Touch"})]}),o.jsx("p",{className:"section-sub",children:"Open for Java Full Stack Developer, Microservices Engineer & MNC opportunities."}),o.jsx("div",{className:"title-line"})]}),o.jsxs("div",{className:"contact-grid",children:[o.jsx("div",{className:"contact-info-col",children:o.jsxs(We,{className:"contact-card glass-card",children:[o.jsx("h3",{children:"Contact Details"}),o.jsx("p",{className:"contact-intro",children:"Feel free to reach out directly via email, phone, or LinkedIn for technical discussions and MNC interview scheduling."}),o.jsxs("div",{className:"contact-items-list",children:[o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:o.jsx(Qo,{size:18})}),o.jsxs("div",{className:"contact-meta",children:[o.jsx("span",{className:"meta-lbl",children:"Email Address"}),o.jsx("a",{href:`mailto:${P.personal.email}`,className:"meta-val",children:P.personal.email})]}),o.jsx("button",{className:"copy-btn",onClick:a,title:"Copy Email",children:e?o.jsx(oi,{size:16,className:"icon-green"}):o.jsx(Bo,{size:16})})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:o.jsx(gf,{size:18})}),o.jsxs("div",{className:"contact-meta",children:[o.jsx("span",{className:"meta-lbl",children:"Phone Number"}),o.jsx("a",{href:`tel:${P.personal.phone}`,className:"meta-val",children:P.personal.phone})]})]}),o.jsxs("div",{className:"contact-item",children:[o.jsx("div",{className:"contact-icon",children:o.jsx(ku,{size:18})}),o.jsxs("div",{className:"contact-meta",children:[o.jsx("span",{className:"meta-lbl",children:"Current Location"}),o.jsx("span",{className:"meta-val",children:P.personal.location})]})]})]}),o.jsxs("div",{className:"contact-socials-row",children:[o.jsxs("a",{href:P.personal.github,target:"_blank",rel:"noreferrer",className:"social-pill",children:[o.jsx(ir,{size:16})," ",o.jsx("span",{children:"GitHub"})]}),o.jsxs("a",{href:P.personal.linkedin,target:"_blank",rel:"noreferrer",className:"social-pill",children:[o.jsx($o,{size:16})," ",o.jsx("span",{children:"LinkedIn"})]})]})]})}),o.jsx("div",{className:"contact-form-col",children:o.jsxs("form",{onSubmit:c,className:"contact-form glass-card",children:[o.jsx("h3",{children:"Send a Message"}),i&&o.jsxs("div",{className:"form-success-banner",children:[o.jsx(oi,{size:18})," Thank you! Your message has been sent successfully."]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Your Name"}),o.jsx("input",{type:"text",required:!0,value:n.name,onChange:s=>r({...n,name:s.target.value}),placeholder:"e.g. Technical Recruiter / Interviewer"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Your Email"}),o.jsx("input",{type:"email",required:!0,value:n.email,onChange:s=>r({...n,email:s.target.value}),placeholder:"e.g. recruiter@company.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Subject"}),o.jsx("input",{type:"text",required:!0,value:n.subject,onChange:s=>r({...n,subject:s.target.value}),placeholder:"e.g. Full Stack Developer Position"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Message"}),o.jsx("textarea",{rows:"4",required:!0,value:n.message,onChange:s=>r({...n,message:s.target.value}),placeholder:"Hi Raman, we reviewed your microservices portfolio..."})]}),o.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",children:[o.jsx(yf,{size:16}),o.jsx("span",{children:"Send Message"})]})]})})]})]}),o.jsx("style",{children:`
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
      `})]})},Rf=({isOpen:e,onClose:t})=>{const[n,r]=M.useState("All"),[i,l]=M.useState("");if(!e)return null;const a=["All",...new Set(P.mncPrepQnA.map(s=>s.category))],c=P.mncPrepQnA.filter(s=>{const d=n==="All"||s.category===n,h=s.question.toLowerCase().includes(i.toLowerCase())||s.answer.toLowerCase().includes(i.toLowerCase());return d&&h});return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content mnc-modal-box",onClick:s=>s.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:t,children:o.jsx(Go,{size:20})}),o.jsxs("div",{className:"mnc-modal-header",children:[o.jsx("div",{className:"mnc-icon-badge",children:o.jsx(Uo,{size:24})}),o.jsxs("div",{children:[o.jsx("h2",{children:"MNC Technical Interview Cheat Sheet"}),o.jsx("p",{children:"System Architecture Decisions, Multitenancy Routing, MSSQL Tuning & Microservices Resilience"})]})]}),o.jsxs("div",{className:"mnc-filter-bar",children:[o.jsxs("div",{className:"mnc-search-box",children:[o.jsx(vf,{size:16,className:"search-icon"}),o.jsx("input",{type:"text",placeholder:"Search interview Q&A...",value:i,onChange:s=>l(s.target.value)})]}),o.jsx("div",{className:"mnc-cat-pills",children:a.map((s,d)=>o.jsx("button",{className:`cat-pill ${n===s?"active":""}`,onClick:()=>{I.playClick(),r(s)},children:s},d))})]}),o.jsx("div",{className:"mnc-qna-list",children:c.length===0?o.jsx("div",{className:"empty-search",children:"No interview questions match your search."}):c.map(s=>o.jsxs("div",{className:"qna-card",children:[o.jsx("div",{className:"qna-cat-badge",children:s.category}),o.jsxs("h3",{className:"qna-question",children:[o.jsx(sf,{size:18,className:"q-icon"}),s.question]}),o.jsx("div",{className:"qna-answer",dangerouslySetInnerHTML:{__html:s.answer}})]},s.id))})]}),o.jsx("style",{children:`
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
      `})]})},Df=({project:e,onClose:t})=>{const[n,r]=M.useState(!1);if(!e)return null;const i=()=>{e.codeSnippet&&(navigator.clipboard.writeText(e.codeSnippet),I.playSuccess(),r(!0),setTimeout(()=>r(!1),2500))};return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content project-modal-box",onClick:l=>l.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn",onClick:t,children:o.jsx(Go,{size:20})}),o.jsxs("div",{className:"proj-modal-header",children:[o.jsx("div",{className:"proj-modal-badge",style:{background:e.color},children:e.badge}),o.jsx("h2",{children:e.title}),o.jsx("p",{children:e.subtitle})]}),o.jsxs("div",{className:"tech-specs-box glass-card",children:[o.jsxs("h3",{children:[o.jsx(Vo,{size:18})," Architectural Specifications"]}),o.jsx("div",{className:"specs-grid",children:Object.entries(e.techSpecs||{}).map(([l,a])=>o.jsxs("div",{className:"spec-row",children:[o.jsxs("span",{className:"spec-key",children:[l.toUpperCase(),":"]}),o.jsx("span",{className:"spec-val",children:a})]},l))})]}),o.jsxs("div",{className:"proj-features-section",children:[o.jsx("h3",{children:"Key System Achievements"}),o.jsx("div",{className:"proj-features-list",children:e.highlights.map((l,a)=>o.jsxs("div",{className:"feature-item",children:[o.jsx(rr,{size:18,style:{color:e.color}}),o.jsx("span",{children:l})]},a))})]}),e.codeSnippet&&o.jsxs("div",{className:"code-snippet-box",children:[o.jsxs("div",{className:"code-header",children:[o.jsxs("span",{className:"code-title",children:[o.jsx(ji,{size:16})," Technical Code Highlight"]}),o.jsxs("button",{className:"copy-code-btn",onClick:i,children:[n?o.jsx(oi,{size:14,className:"icon-green"}):o.jsx(Bo,{size:14}),o.jsx("span",{children:n?"Copied":"Copy Code"})]})]}),o.jsx("pre",{className:"code-content",children:o.jsx("code",{children:e.codeSnippet})})]})]}),o.jsx("style",{children:`
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
      `})]})},Of=({isOpen:e,onClose:t})=>{var c;const[n,r]=M.useState(!1);if(!e)return null;const i=()=>{I.playClick(),window.print()},l=()=>{navigator.clipboard.writeText(P.atsResume.summary),I.playSuccess(),r(!0),setTimeout(()=>r(!1),2500)},a=P.atsResume;return o.jsxs("div",{className:"modal-overlay",onClick:t,children:[o.jsxs("div",{className:"modal-content resume-modal-box",onClick:s=>s.stopPropagation(),children:[o.jsx("button",{className:"modal-close-btn no-print",onClick:t,children:o.jsx(Go,{size:20})}),o.jsxs("div",{className:"resume-actions-bar no-print",children:[o.jsxs("div",{className:"resume-modal-title",children:[o.jsx(Wo,{size:20,className:"icon-purple"}),o.jsx("span",{children:"MNC ATS Resume Preview (1-Page Formatted)"})]}),o.jsxs("div",{className:"btn-group",children:[o.jsxs("button",{className:"btn-secondary",onClick:l,children:[n?o.jsx(oi,{size:14,className:"icon-green"}):o.jsx(Bo,{size:14}),o.jsx("span",{children:n?"Copied":"Copy Summary"})]}),o.jsxs("a",{href:"/resume.pdf",download:"Ramanjaneyulu_Boya_Resume.pdf",className:"btn-secondary btn-download-pdf",onClick:()=>I.playClick(),children:[o.jsx(pf,{size:14}),o.jsx("span",{children:"Download PDF"})]}),o.jsxs("button",{className:"btn-primary",onClick:i,children:[o.jsx(xf,{size:14}),o.jsx("span",{children:"Print 1-Page PDF"})]})]})]}),o.jsx("div",{className:"resume-scroll-container",children:o.jsxs("div",{className:"ats-paper",id:"printable-resume",children:[o.jsxs("div",{className:"paper-header",children:[o.jsx("h1",{className:"paper-name",children:P.personal.name}),o.jsx("div",{className:"paper-subtitle",children:"Java Full Stack & Microservices Developer | 1 Year Exp"}),o.jsxs("div",{className:"paper-contact-line",children:[o.jsx("span",{children:P.personal.email})," •",o.jsx("span",{children:P.personal.phone})," •",o.jsx("span",{children:P.personal.location})," •",o.jsx("span",{children:"github.com/Raman-8688"})," •",o.jsx("span",{children:"linkedin.com/in/b-ramanjaneyulu-155021258"})]})]}),o.jsx("div",{className:"paper-divider"}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"PROFESSIONAL SUMMARY"}),o.jsx("p",{className:"summary-text",children:a.summary})]}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"TECHNICAL SKILLS MATRIX"}),o.jsx("div",{className:"skills-grid-ats",children:(c=a.skillsCategorized)==null?void 0:c.map((s,d)=>o.jsxs("div",{className:"skill-cat-row",children:[o.jsxs("span",{className:"sk-cat-name",children:[s.category,":"]}),o.jsx("span",{className:"sk-cat-items",children:s.items})]},d))})]}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"PRODUCTION EXPERIENCE"}),a.experience.map((s,d)=>o.jsxs("div",{className:"exp-block",children:[o.jsxs("div",{className:"exp-head-row",children:[o.jsxs("div",{children:[o.jsx("span",{className:"exp-title-text",children:s.role})," — ",o.jsx("span",{className:"exp-company-text",children:s.company})]}),o.jsxs("div",{className:"exp-right-meta",children:[o.jsx("span",{className:"exp-period-text",children:s.period})," | ",o.jsx("span",{className:"exp-loc-text",children:s.location})]})]}),o.jsx("ul",{className:"exp-bullets",children:s.bullets.map((h,g)=>o.jsx("li",{children:h},g))})]},d))]}),o.jsxs("div",{className:"paper-section",children:[o.jsx("h2",{className:"section-head",children:"EDUCATION & CERTIFICATIONS"}),o.jsxs("div",{className:"edu-block",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Education:"})," ",a.education]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Certifications:"})," ",a.certifications]})]})]})]})})]}),o.jsx("style",{children:`
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
      `})]})},Ff=()=>{const[e,t]=M.useState(0),[n,r]=M.useState(!1);M.useEffect(()=>{const a=()=>{const c=document.documentElement.scrollHeight-window.innerHeight,s=window.scrollY,d=Math.min(100,Math.max(0,Math.round(s/c*100)));t(d),r(s>250)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const i=()=>{I.playClick(),window.scrollTo({top:0,behavior:"smooth"})};if(!n)return null;const l=125.6-125.6*e/100;return o.jsxs("button",{className:"scroll-top-btn",onClick:i,title:`Back to top (${e}%)`,children:[o.jsxs("svg",{className:"progress-ring",width:"48",height:"48",children:[o.jsx("circle",{className:"progress-ring-bg",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"3",fill:"transparent",r:"20",cx:"24",cy:"24"}),o.jsx("circle",{className:"progress-ring-circle",stroke:"var(--theme-color)",strokeWidth:"3",strokeDasharray:"125.6",strokeDashoffset:l,strokeLinecap:"round",fill:"transparent",r:"20",cx:"24",cy:"24"})]}),o.jsx(cf,{size:18,className:"scroll-top-icon"}),o.jsx("style",{children:`
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
      `})]})},Hf=({onNavigate:e})=>o.jsxs("footer",{className:"footer-section",children:[o.jsxs("div",{className:"section-container footer-container",children:[o.jsxs("div",{className:"footer-top",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx("div",{className:"brand-icon",children:o.jsx(ji,{size:20})}),o.jsx("h3",{children:P.personal.name}),o.jsx("p",{children:"Java Full Stack Developer | Spring Boot & Microservices Specialist"})]}),o.jsxs("div",{className:"footer-nav",children:[o.jsx("button",{onClick:()=>{I.playClick(),e("home")},children:"Home"}),o.jsx("button",{onClick:()=>{I.playClick(),e("about")},children:"About"}),o.jsx("button",{onClick:()=>{I.playClick(),e("skills")},children:"Skills"}),o.jsx("button",{onClick:()=>{I.playClick(),e("experience")},children:"Experience"}),o.jsx("button",{onClick:()=>{I.playClick(),e("architecture")},children:"Architecture"}),o.jsx("button",{onClick:()=>{I.playClick(),e("projects")},children:"Projects"}),o.jsx("button",{onClick:()=>{I.playClick(),e("contact")},children:"Contact"})]}),o.jsxs("div",{className:"footer-socials",children:[o.jsx("a",{href:P.personal.github,target:"_blank",rel:"noreferrer",title:"GitHub",children:o.jsx(ir,{size:18})}),o.jsx("a",{href:P.personal.linkedin,target:"_blank",rel:"noreferrer",title:"LinkedIn",children:o.jsx($o,{size:18})}),o.jsx("a",{href:`mailto:${P.personal.email}`,title:"Email",children:o.jsx(Qo,{size:18})})]})]}),o.jsxs("div",{className:"footer-bottom",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," ",P.personal.name,". All Rights Reserved."]}),o.jsxs("p",{className:"footer-mnc-tag",children:["Engineered with ",o.jsx(mf,{size:14,className:"icon-red"})," for MNC Interview Preparation."]})]})]}),o.jsx("style",{children:`
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
      `})]});function Uf(){const[e,t]=M.useState("home"),[n,r]=M.useState(!0),[i,l]=M.useState(!1),[a,c]=M.useState(!1),[s,d]=M.useState(null);M.useEffect(()=>{n?document.documentElement.classList.remove("light-theme"):document.documentElement.classList.add("light-theme")},[n]),M.useEffect(()=>{const g=["home","about","skills","experience","architecture","projects","devops","github","contact"],m=new IntersectionObserver(k=>{k.forEach(w=>{w.isIntersecting&&t(w.target.id)})},{threshold:.25,rootMargin:"-70px 0px -30% 0px"});return g.forEach(k=>{const w=document.getElementById(k);w&&m.observe(w)}),()=>m.disconnect()},[]);const h=g=>{t(g);const m=document.getElementById(g);if(m){const x=m.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:x,behavior:"smooth"})}};return o.jsxs("div",{className:"app-root",children:[o.jsx(Zp,{}),o.jsx(bf,{activeSection:e,onNavigate:h,onOpenMncModal:()=>l(!0),onOpenTerminal:()=>h("devops"),onOpenResumeModal:()=>c(!0),isDark:n,onToggleTheme:()=>r(!n)}),o.jsxs("main",{children:[o.jsx(Ef,{onNavigate:h,onOpenMncModal:()=>l(!0),onOpenTerminal:()=>h("devops"),onOpenResumeModal:()=>c(!0)}),o.jsx(zf,{}),o.jsx(Pf,{}),o.jsx(Mf,{}),o.jsx(Af,{}),o.jsx(Tf,{onOpenProjectModal:g=>d(g)}),o.jsx(Lf,{onOpenMncModal:()=>l(!0),onOpenResumeModal:()=>c(!0)}),o.jsx(If,{}),o.jsx(_f,{})]}),o.jsx(Hf,{onNavigate:h}),o.jsx(Ff,{}),o.jsx(Rf,{isOpen:i,onClose:()=>l(!1)}),o.jsx(Df,{project:s,onClose:()=>d(null)}),o.jsx(Of,{isOpen:a,onClose:()=>c(!1)})]})}Zi.createRoot(document.getElementById("root")).render(o.jsx(Uu.StrictMode,{children:o.jsx(Uf,{})}));
