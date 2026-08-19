var iy=Object.defineProperty;var sy=(e,t,n)=>t in e?iy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ro=(e,t,n)=>sy(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kp={exports:{}},fo={},Tp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),ay=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),cy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),py=Symbol.for("react.forward_ref"),hy=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),Lc=Symbol.iterator;function yy(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cp=Object.assign,Pp={};function gr(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||Ep}gr.prototype.isReactComponent={};gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jp(){}jp.prototype=gr.prototype;function eu(e,t,n){this.props=e,this.context=t,this.refs=Pp,this.updater=n||Ep}var tu=eu.prototype=new jp;tu.constructor=eu;Cp(tu,gr.prototype);tu.isPureReactComponent=!0;var Ic=Array.isArray,Np=Object.prototype.hasOwnProperty,nu={current:null},Mp={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Np.call(t,r)&&!Mp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ti,type:e,key:s,ref:o,props:i,_owner:nu.current}}function vy(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dc=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xy(""+e.key):t.toString(36)}function is(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ti:case ay:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+_o(o,0):r,Ic(i)?(n="",e!=null&&(n=e.replace(Dc,"$&/")+"/"),is(i,t,n,"",function(u){return u})):i!=null&&(ru(i)&&(i=vy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ic(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+_o(s,a);o+=is(s,t,n,l,i)}else if(l=yy(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+_o(s,a++),o+=is(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return is(e,r,"","",function(s){return t.call(n,s,i++)}),r}function wy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},ss={transition:null},Sy={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:ss,ReactCurrentOwner:nu};function Lp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=gr;K.Fragment=ly;K.Profiler=cy;K.PureComponent=eu;K.StrictMode=uy;K.Suspense=hy;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;K.act=Lp;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Np.call(t,l)&&!Mp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ti,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:fy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dy,_context:e},e.Consumer=e};K.createElement=Ap;K.createFactory=function(e){var t=Ap.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:py,render:e}};K.isValidElement=ru;K.lazy=function(e){return{$$typeof:gy,_payload:{_status:-1,_result:e},_init:wy}};K.memo=function(e,t){return{$$typeof:my,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};K.unstable_act=Lp;K.useCallback=function(e,t){return _e.current.useCallback(e,t)};K.useContext=function(e){return _e.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};K.useEffect=function(e,t){return _e.current.useEffect(e,t)};K.useId=function(){return _e.current.useId()};K.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return _e.current.useMemo(e,t)};K.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};K.useRef=function(e){return _e.current.useRef(e)};K.useState=function(e){return _e.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return _e.current.useTransition()};K.version="18.3.1";Tp.exports=K;var j=Tp.exports;const ae=oy(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=j,ky=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),Ey=Object.prototype.hasOwnProperty,Cy=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Py={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ey.call(t,r)&&!Py.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ky,type:e,key:s,ref:o,props:i,_owner:Cy.current}}fo.Fragment=Ty;fo.jsx=Ip;fo.jsxs=Ip;kp.exports=fo;var f=kp.exports,Aa={},Dp={exports:{}},qe={},Vp={exports:{}},Rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,I){var A=M.length;M.push(I);e:for(;0<A;){var R=A-1>>>1,$=M[R];if(0<i($,I))M[R]=I,M[A]=$,A=R;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var I=M[0],A=M.pop();if(A!==I){M[0]=A;e:for(var R=0,$=M.length,O=$>>>1;R<O;){var U=2*(R+1)-1,q=M[U],ie=U+1,Ct=M[ie];if(0>i(q,A))ie<$&&0>i(Ct,q)?(M[R]=Ct,M[ie]=A,R=ie):(M[R]=q,M[U]=A,R=U);else if(ie<$&&0>i(Ct,A))M[R]=Ct,M[ie]=A,R=ie;else break e}}return I}function i(M,I){var A=M.sortIndex-I.sortIndex;return A!==0?A:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,p=3,v=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=M)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function w(M){if(x=!1,m(M),!y)if(n(l)!==null)y=!0,W(S);else{var I=n(u);I!==null&&H(w,I.startTime-M)}}function S(M,I){y=!1,x&&(x=!1,g(k),k=-1),v=!0;var A=p;try{for(m(I),d=n(l);d!==null&&(!(d.expirationTime>I)||M&&!D());){var R=d.callback;if(typeof R=="function"){d.callback=null,p=d.priorityLevel;var $=R(d.expirationTime<=I);I=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),m(I)}else r(l);d=n(l)}if(d!==null)var O=!0;else{var U=n(u);U!==null&&H(w,U.startTime-I),O=!1}return O}finally{d=null,p=A,v=!1}}var T=!1,C=null,k=-1,E=5,P=-1;function D(){return!(e.unstable_now()-P<E)}function F(){if(C!==null){var M=e.unstable_now();P=M;var I=!0;try{I=C(!0,M)}finally{I?N():(T=!1,C=null)}}else T=!1}var N;if(typeof h=="function")N=function(){h(F)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,_=L.port2;L.port1.onmessage=F,N=function(){_.postMessage(null)}}else N=function(){b(F,0)};function W(M){C=M,T||(T=!0,N())}function H(M,I){k=b(function(){M(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,W(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var A=p;p=I;try{return M()}finally{p=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var A=p;p=M;try{return I()}finally{p=A}},e.unstable_scheduleCallback=function(M,I,A){var R=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?R+A:R):A=R,M){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=A+$,M={id:c++,callback:I,priorityLevel:M,startTime:A,expirationTime:$,sortIndex:-1},A>R?(M.sortIndex=A,t(u,M),n(l)===null&&M===n(u)&&(x?(g(k),k=-1):x=!0,H(w,A-R))):(M.sortIndex=$,t(l,M),y||v||(y=!0,W(S))),M},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(M){var I=p;return function(){var A=p;p=I;try{return M.apply(this,arguments)}finally{p=A}}}})(Rp);Vp.exports=Rp;var jy=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=j,Xe=jy;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _p=new Set,ti={};function An(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(ti[e]=t,e=0;e<t.length;e++)_p.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,My=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vc={},Rc={};function Ay(e){return La.call(Rc,e)?!0:La.call(Vc,e)?!1:My.test(e)?Rc[e]=!0:(Vc[e]=!0,!1)}function Ly(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Iy(e,t,n,r){if(t===null||typeof t>"u"||Ly(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(iu,su);Pe[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(iu,su);Pe[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(iu,su);Pe[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ou(e,t,n,r){var i=Pe.hasOwnProperty(t)?Pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Iy(t,n,i,r)&&(n=null),r||i===null?Ay(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ri=Symbol.for("react.element"),_n=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),zp=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Va=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Fp=Symbol.for("react.offscreen"),_c=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Oo;function Dr(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var zo=!1;function Fo(e,t){if(!e||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function Dy(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Fo(e.type,!1),e;case 11:return e=Fo(e.type.render,!1),e;case 1:return e=Fo(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case _n:return"Portal";case Ia:return"Profiler";case au:return"StrictMode";case Da:return"Suspense";case Va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zp:return(e.displayName||"Context")+".Consumer";case Op:return(e._context.displayName||"Context")+".Provider";case lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uu:return t=e.displayName||null,t!==null?t:Ra(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return Ra(e(t))}catch{}}return null}function Vy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(t);case 8:return t===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ry(e){var t=Bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=Ry(e))}function $p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _a(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&ou(e,"checked",t,!1)}function Oa(e,t){Wp(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?za(e,t.type,n):t.hasOwnProperty("defaultValue")&&za(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function za(e,t,n){(t!=="number"||Ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Vr(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function Hp(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Up(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Up(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,Gp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_y=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(e){_y.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zr[t]=zr[e]})});function Yp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zr.hasOwnProperty(e)&&zr[e]?(""+t).trim():t+"px"}function Kp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Oy=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(e,t){if(t){if(Oy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Jn=null,er=null;function $c(e){if(e=Pi(e)){if(typeof Ua!="function")throw Error(V(280));var t=e.stateNode;t&&(t=yo(t),Ua(e.stateNode,e.type,t))}}function Xp(e){Jn?er?er.push(e):er=[e]:Jn=e}function qp(){if(Jn){var e=Jn,t=er;if(er=Jn=null,$c(e),t)for(e=0;e<t.length;e++)$c(t[e])}}function Qp(e,t){return e(t)}function Zp(){}var Bo=!1;function Jp(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Qp(e,t,n)}finally{Bo=!1,(Jn!==null||er!==null)&&(Zp(),qp())}}function ri(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Ga=!1;if(It)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Ga=!1}function zy(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fr=!1,js=null,Ns=!1,Ya=null,Fy={onError:function(e){Fr=!0,js=e}};function By(e,t,n,r,i,s,o,a,l){Fr=!1,js=null,zy.apply(Fy,arguments)}function $y(e,t,n,r,i,s,o,a,l){if(By.apply(this,arguments),Fr){if(Fr){var u=js;Fr=!1,js=null}else throw Error(V(198));Ns||(Ns=!0,Ya=u)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Ln(e)!==e)throw Error(V(188))}function Wy(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wc(i),e;if(s===r)return Wc(i),t;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function th(e){return e=Wy(e),e!==null?nh(e):null}function nh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nh(e);if(t!==null)return t;e=e.sibling}return null}var rh=Xe.unstable_scheduleCallback,Hc=Xe.unstable_cancelCallback,Hy=Xe.unstable_shouldYield,Uy=Xe.unstable_requestPaint,he=Xe.unstable_now,Gy=Xe.unstable_getCurrentPriorityLevel,du=Xe.unstable_ImmediatePriority,ih=Xe.unstable_UserBlockingPriority,Ms=Xe.unstable_NormalPriority,Yy=Xe.unstable_LowPriority,sh=Xe.unstable_IdlePriority,po=null,bt=null;function Ky(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Qy,Xy=Math.log,qy=Math.LN2;function Qy(e){return e>>>=0,e===0?32:31-(Xy(e)/qy|0)|0}var zi=64,Fi=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Rr(a):(s&=o,s!==0&&(r=Rr(s)))}else o=n&~i,o!==0?r=Rr(o):s!==0&&(r=Rr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Zy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ft(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zy(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oh(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function $o(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function ev(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function ah(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lh,pu,uh,ch,dh,Xa=!1,Bi=[],qt=null,Qt=null,Zt=null,ii=new Map,si=new Map,Ht=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function Cr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nv(e,t,n,r,i){switch(t){case"focusin":return qt=Cr(qt,e,t,n,r,i),!0;case"dragenter":return Qt=Cr(Qt,e,t,n,r,i),!0;case"mouseover":return Zt=Cr(Zt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ii.set(s,Cr(ii.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,si.set(s,Cr(si.get(s)||null,e,t,n,r,i)),!0}return!1}function fh(e){var t=yn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=eh(n),t!==null){e.blockedOn=t,dh(e.priority,function(){uh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return t=Pi(n),t!==null&&pu(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){os(e)&&n.delete(t)}function rv(){Xa=!1,qt!==null&&os(qt)&&(qt=null),Qt!==null&&os(Qt)&&(Qt=null),Zt!==null&&os(Zt)&&(Zt=null),ii.forEach(Gc),si.forEach(Gc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xa||(Xa=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,rv)))}function oi(e){function t(i){return Pr(i,e)}if(0<Bi.length){Pr(Bi[0],e);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Pr(qt,e),Qt!==null&&Pr(Qt,e),Zt!==null&&Pr(Zt,e),ii.forEach(t),si.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)fh(n),n.blockedOn===null&&Ht.shift()}var tr=Ot.ReactCurrentBatchConfig,Ls=!0;function iv(e,t,n,r){var i=Q,s=tr.transition;tr.transition=null;try{Q=1,hu(e,t,n,r)}finally{Q=i,tr.transition=s}}function sv(e,t,n,r){var i=Q,s=tr.transition;tr.transition=null;try{Q=4,hu(e,t,n,r)}finally{Q=i,tr.transition=s}}function hu(e,t,n,r){if(Ls){var i=qa(e,t,n,r);if(i===null)Zo(e,t,r,Is,n),Uc(e,r);else if(nv(i,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<tv.indexOf(e)){for(;i!==null;){var s=Pi(i);if(s!==null&&lh(s),s=qa(e,t,n,r),s===null&&Zo(e,t,r,Is,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var Is=null;function qa(e,t,n,r){if(Is=null,e=cu(r),e=yn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Is=e,null}function ph(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gy()){case du:return 1;case ih:return 4;case Ms:case Yy:return 16;case sh:return 536870912;default:return 16}default:return 16}}var Gt=null,mu=null,as=null;function hh(){if(as)return as;var e,t=mu,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return as=i.slice(e,1<r?1-r:void 0)}function ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Yc(){return!1}function Qe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$i:Yc,this.isPropagationStopped=Yc,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=Qe(yr),Ci=ce({},yr,{view:0,detail:0}),ov=Qe(Ci),Wo,Ho,jr,ho=ce({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Wo=e.screenX-jr.screenX,Ho=e.screenY-jr.screenY):Ho=Wo=0,jr=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),Kc=Qe(ho),av=ce({},ho,{dataTransfer:0}),lv=Qe(av),uv=ce({},Ci,{relatedTarget:0}),Uo=Qe(uv),cv=ce({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=Qe(cv),fv=ce({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pv=Qe(fv),hv=ce({},yr,{data:0}),Xc=Qe(hv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yv[e])?!!t[e]:!1}function yu(){return vv}var xv=ce({},Ci,{key:function(e){if(e.key){var t=mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=Qe(xv),Sv=ce({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=Qe(Sv),bv=ce({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),kv=Qe(bv),Tv=ce({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Qe(Tv),Cv=ce({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Qe(Cv),jv=[9,13,27,32],vu=It&&"CompositionEvent"in window,Br=null;It&&"documentMode"in document&&(Br=document.documentMode);var Nv=It&&"TextEvent"in window&&!Br,mh=It&&(!vu||Br&&8<Br&&11>=Br),Qc=" ",Zc=!1;function gh(e,t){switch(e){case"keyup":return jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Mv(e,t){switch(e){case"compositionend":return yh(t);case"keypress":return t.which!==32?null:(Zc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Zc?null:e;default:return null}}function Av(e,t){if(zn)return e==="compositionend"||!vu&&gh(e,t)?(e=hh(),as=mu=Gt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mh&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function vh(e,t,n,r){Xp(r),t=Ds(t,"onChange"),0<t.length&&(n=new gu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,ai=null;function Iv(e){Nh(e,0)}function mo(e){var t=$n(e);if($p(t))return e}function Dv(e,t){if(e==="change")return t}var xh=!1;if(It){var Go;if(It){var Yo="oninput"in document;if(!Yo){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Yo=typeof ed.oninput=="function"}Go=Yo}else Go=!1;xh=Go&&(!document.documentMode||9<document.documentMode)}function td(){$r&&($r.detachEvent("onpropertychange",wh),ai=$r=null)}function wh(e){if(e.propertyName==="value"&&mo(ai)){var t=[];vh(t,ai,e,cu(e)),Jp(Iv,t)}}function Vv(e,t,n){e==="focusin"?(td(),$r=t,ai=n,$r.attachEvent("onpropertychange",wh)):e==="focusout"&&td()}function Rv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(ai)}function _v(e,t){if(e==="click")return mo(t)}function Ov(e,t){if(e==="input"||e==="change")return mo(t)}function zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:zv;function li(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!La.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function Sh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bh(){for(var e=window,t=Ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ps(e.document)}return t}function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fv(e){var t=bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sh(n.ownerDocument.documentElement,n)){if(r!==null&&xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=rd(n,s);var o=rd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bv=It&&"documentMode"in document&&11>=document.documentMode,Fn=null,Qa=null,Wr=null,Za=!1;function id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||Fn==null||Fn!==Ps(r)||(r=Fn,"selectionStart"in r&&xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&li(Wr,r)||(Wr=r,r=Ds(Qa,"onSelect"),0<r.length&&(t=new gu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Ko={},kh={};It&&(kh=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function go(e){if(Ko[e])return Ko[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kh)return Ko[e]=t[n];return e}var Th=go("animationend"),Eh=go("animationiteration"),Ch=go("animationstart"),Ph=go("transitionend"),jh=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){jh.set(e,t),An(t,[e])}for(var Xo=0;Xo<sd.length;Xo++){var qo=sd[Xo],$v=qo.toLowerCase(),Wv=qo[0].toUpperCase()+qo.slice(1);un($v,"on"+Wv)}un(Th,"onAnimationEnd");un(Eh,"onAnimationIteration");un(Ch,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Ph,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function od(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$y(r,t,void 0,e),e.currentTarget=null}function Nh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;od(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;od(i,a,u),s=l}}}if(Ns)throw e=Ya,Ns=!1,Ya=null,e}function ne(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Mh(t,e,2,!1),n.add(r))}function Qo(e,t,n){var r=0;t&&(r|=4),Mh(n,e,r,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Hi]){e[Hi]=!0,_p.forEach(function(n){n!=="selectionchange"&&(Hv.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Qo("selectionchange",!1,t))}}function Mh(e,t,n,r){switch(ph(t)){case 1:var i=iv;break;case 4:i=sv;break;default:i=hu}n=i.bind(null,t,n,e),i=void 0,!Ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jp(function(){var u=s,c=cu(n),d=[];e:{var p=jh.get(e);if(p!==void 0){var v=gu,y=e;switch(e){case"keypress":if(ls(n)===0)break e;case"keydown":case"keyup":v=wv;break;case"focusin":y="focus",v=Uo;break;case"focusout":y="blur",v=Uo;break;case"beforeblur":case"afterblur":v=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kv;break;case Th:case Eh:case Ch:v=dv;break;case Ph:v=Ev;break;case"scroll":v=ov;break;case"wheel":v=Pv;break;case"copy":case"cut":case"paste":v=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qc}var x=(t&4)!==0,b=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=ri(h,g),w!=null&&x.push(ci(h,w,m)))),b)break;h=h.return}0<x.length&&(p=new v(p,y,null,n,c),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ha&&(y=n.relatedTarget||n.fromElement)&&(yn(y)||y[Dt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?yn(y):null,y!==null&&(b=Ln(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Kc,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=qc,w="onPointerLeave",g="onPointerEnter",h="pointer"),b=v==null?p:$n(v),m=y==null?p:$n(y),p=new x(w,h+"leave",v,n,c),p.target=b,p.relatedTarget=m,w=null,yn(c)===u&&(x=new x(g,h+"enter",y,n,c),x.target=m,x.relatedTarget=b,w=x),b=w,v&&y)t:{for(x=v,g=y,h=0,m=x;m;m=In(m))h++;for(m=0,w=g;w;w=In(w))m++;for(;0<h-m;)x=In(x),h--;for(;0<m-h;)g=In(g),m--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=In(x),g=In(g)}x=null}else x=null;v!==null&&ad(d,p,v,x,!1),y!==null&&b!==null&&ad(d,b,y,x,!0)}}e:{if(p=u?$n(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=Dv;else if(Jc(p))if(xh)S=Ov;else{S=Rv;var T=Vv}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=_v);if(S&&(S=S(e,u))){vh(d,S,n,c);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&za(p,"number",p.value)}switch(T=u?$n(u):window,e){case"focusin":(Jc(T)||T.contentEditable==="true")&&(Fn=T,Qa=u,Wr=null);break;case"focusout":Wr=Qa=Fn=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,id(d,n,c);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":id(d,n,c)}var C;if(vu)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else zn?gh(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(mh&&n.locale!=="ko"&&(zn||k!=="onCompositionStart"?k==="onCompositionEnd"&&zn&&(C=hh()):(Gt=c,mu="value"in Gt?Gt.value:Gt.textContent,zn=!0)),T=Ds(u,k),0<T.length&&(k=new Xc(k,e,null,n,c),d.push({event:k,listeners:T}),C?k.data=C:(C=yh(n),C!==null&&(k.data=C)))),(C=Nv?Mv(e,n):Av(e,n))&&(u=Ds(u,"onBeforeInput"),0<u.length&&(c=new Xc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Nh(d,t)})}function ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ri(e,n),s!=null&&r.unshift(ci(e,s,i)),s=ri(e,t),s!=null&&r.push(ci(e,s,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ad(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ri(n,s),l!=null&&o.unshift(ci(n,l,a))):i||(l=ri(n,s),l!=null&&o.push(ci(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Uv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(Uv,`
`).replace(Gv,"")}function Ui(e,t,n){if(t=ld(t),ld(e)!==t&&n)throw Error(V(425))}function Vs(){}var Ja=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(Xv)}:nl;function Xv(e){setTimeout(function(){throw e})}function Jo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oi(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),wt="__reactFiber$"+vr,di="__reactProps$"+vr,Dt="__reactContainer$"+vr,rl="__reactEvents$"+vr,qv="__reactListeners$"+vr,Qv="__reactHandles$"+vr;function yn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[wt])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[wt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function yo(e){return e[di]||null}var il=[],Wn=-1;function cn(e){return{current:e}}function re(e){0>Wn||(e.current=il[Wn],il[Wn]=null,Wn--)}function te(e,t){Wn++,il[Wn]=e.current,e.current=t}var on={},Ae=cn(on),Be=cn(!1),Cn=on;function or(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Rs(){re(Be),re(Ae)}function dd(e,t,n){if(Ae.current!==on)throw Error(V(168));te(Ae,t),te(Be,n)}function Ah(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,Vy(e)||"Unknown",i));return ce({},n,r)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Cn=Ae.current,te(Ae,e),te(Be,Be.current),!0}function fd(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Ah(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,re(Be),re(Ae),te(Ae,e)):re(Be),te(Be,n)}var Nt=null,vo=!1,ea=!1;function Lh(e){Nt===null?Nt=[e]:Nt.push(e)}function Zv(e){vo=!0,Lh(e)}function dn(){if(!ea&&Nt!==null){ea=!0;var e=0,t=Q;try{var n=Nt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,vo=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),rh(du,dn),i}finally{Q=t,ea=!1}}return null}var Hn=[],Un=0,Os=null,zs=0,Ze=[],Je=0,Pn=null,Mt=1,At="";function hn(e,t){Hn[Un++]=zs,Hn[Un++]=Os,Os=e,zs=t}function Ih(e,t,n){Ze[Je++]=Mt,Ze[Je++]=At,Ze[Je++]=Pn,Pn=e;var r=Mt;e=At;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-ft(t)+i|n<<i|r,At=s+e}else Mt=1<<s|n<<i|r,At=e}function wu(e){e.return!==null&&(hn(e,1),Ih(e,1,0))}function Su(e){for(;e===Os;)Os=Hn[--Un],Hn[Un]=null,zs=Hn[--Un],Hn[Un]=null;for(;e===Pn;)Pn=Ze[--Je],Ze[Je]=null,At=Ze[--Je],Ze[Je]=null,Mt=Ze[--Je],Ze[Je]=null}var Ke=null,Ye=null,se=!1,dt=null;function Dh(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Mt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ye=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(se){var t=Ye;if(t){var n=t;if(!pd(e,t)){if(sl(e))throw Error(V(418));t=Jt(n.nextSibling);var r=Ke;t&&pd(e,t)?Dh(r,n):(e.flags=e.flags&-4097|2,se=!1,Ke=e)}}else{if(sl(e))throw Error(V(418));e.flags=e.flags&-4097|2,se=!1,Ke=e}}}function hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Gi(e){if(e!==Ke)return!1;if(!se)return hd(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Ye)){if(sl(e))throw Vh(),Error(V(418));for(;t;)Dh(e,t),t=Jt(t.nextSibling)}if(hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ke?Jt(e.stateNode.nextSibling):null;return!0}function Vh(){for(var e=Ye;e;)e=Jt(e.nextSibling)}function ar(){Ye=Ke=null,se=!1}function bu(e){dt===null?dt=[e]:dt.push(e)}var Jv=Ot.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function Rh(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=rn(g,h),g.index=0,g.sibling=null,g}function s(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,w){return h===null||h.tag!==6?(h=aa(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var S=m.type;return S===On?c(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$t&&md(S)===h.type)?(w=i(h,m.props),w.ref=Nr(g,h,m),w.return=g,w):(w=ms(m.type,m.key,m.props,null,g.mode,w),w.ref=Nr(g,h,m),w.return=g,w)}function u(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=la(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function c(g,h,m,w,S){return h===null||h.tag!==7?(h=kn(m,g.mode,w,S),h.return=g,h):(h=i(h,m),h.return=g,h)}function d(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=aa(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ri:return m=ms(h.type,h.key,h.props,null,g.mode,m),m.ref=Nr(g,null,h),m.return=g,m;case _n:return h=la(h,g.mode,m),h.return=g,h;case $t:var w=h._init;return d(g,w(h._payload),m)}if(Vr(h)||Tr(h))return h=kn(h,g.mode,m,null),h.return=g,h;Yi(g,h)}return null}function p(g,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ri:return m.key===S?l(g,h,m,w):null;case _n:return m.key===S?u(g,h,m,w):null;case $t:return S=m._init,p(g,h,S(m._payload),w)}if(Vr(m)||Tr(m))return S!==null?null:c(g,h,m,w,null);Yi(g,m)}return null}function v(g,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(h,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ri:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,S);case _n:return g=g.get(w.key===null?m:w.key)||null,u(h,g,w,S);case $t:var T=w._init;return v(g,h,m,T(w._payload),S)}if(Vr(w)||Tr(w))return g=g.get(m)||null,c(h,g,w,S,null);Yi(h,w)}return null}function y(g,h,m,w){for(var S=null,T=null,C=h,k=h=0,E=null;C!==null&&k<m.length;k++){C.index>k?(E=C,C=null):E=C.sibling;var P=p(g,C,m[k],w);if(P===null){C===null&&(C=E);break}e&&C&&P.alternate===null&&t(g,C),h=s(P,h,k),T===null?S=P:T.sibling=P,T=P,C=E}if(k===m.length)return n(g,C),se&&hn(g,k),S;if(C===null){for(;k<m.length;k++)C=d(g,m[k],w),C!==null&&(h=s(C,h,k),T===null?S=C:T.sibling=C,T=C);return se&&hn(g,k),S}for(C=r(g,C);k<m.length;k++)E=v(C,g,k,m[k],w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?k:E.key),h=s(E,h,k),T===null?S=E:T.sibling=E,T=E);return e&&C.forEach(function(D){return t(g,D)}),se&&hn(g,k),S}function x(g,h,m,w){var S=Tr(m);if(typeof S!="function")throw Error(V(150));if(m=S.call(m),m==null)throw Error(V(151));for(var T=S=null,C=h,k=h=0,E=null,P=m.next();C!==null&&!P.done;k++,P=m.next()){C.index>k?(E=C,C=null):E=C.sibling;var D=p(g,C,P.value,w);if(D===null){C===null&&(C=E);break}e&&C&&D.alternate===null&&t(g,C),h=s(D,h,k),T===null?S=D:T.sibling=D,T=D,C=E}if(P.done)return n(g,C),se&&hn(g,k),S;if(C===null){for(;!P.done;k++,P=m.next())P=d(g,P.value,w),P!==null&&(h=s(P,h,k),T===null?S=P:T.sibling=P,T=P);return se&&hn(g,k),S}for(C=r(g,C);!P.done;k++,P=m.next())P=v(C,g,k,P.value,w),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?k:P.key),h=s(P,h,k),T===null?S=P:T.sibling=P,T=P);return e&&C.forEach(function(F){return t(g,F)}),se&&hn(g,k),S}function b(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===On&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ri:e:{for(var S=m.key,T=h;T!==null;){if(T.key===S){if(S=m.type,S===On){if(T.tag===7){n(g,T.sibling),h=i(T,m.props.children),h.return=g,g=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$t&&md(S)===T.type){n(g,T.sibling),h=i(T,m.props),h.ref=Nr(g,T,m),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}m.type===On?(h=kn(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=ms(m.type,m.key,m.props,null,g.mode,w),w.ref=Nr(g,h,m),w.return=g,g=w)}return o(g);case _n:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=la(m,g.mode,w),h.return=g,g=h}return o(g);case $t:return T=m._init,b(g,h,T(m._payload),w)}if(Vr(m))return y(g,h,m,w);if(Tr(m))return x(g,h,m,w);Yi(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=aa(m,g.mode,w),h.return=g,g=h),o(g)):n(g,h)}return b}var lr=Rh(!0),_h=Rh(!1),Fs=cn(null),Bs=null,Gn=null,ku=null;function Tu(){ku=Gn=Bs=null}function Eu(e){var t=Fs.current;re(Fs),e._currentValue=t}function al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Bs=e,ku=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(Bs===null)throw Error(V(308));Gn=e,Bs.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var vn=null;function Cu(e){vn===null?vn=[e]:vn.push(e)}function Oh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Cu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}function gd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $s(e,t,n,r){var i=e.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=ce({},d,p);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=d}}function yd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var ji={},kt=cn(ji),fi=cn(ji),pi=cn(ji);function xn(e){if(e===ji)throw Error(V(174));return e}function ju(e,t){switch(te(pi,t),te(fi,e),te(kt,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ba(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ba(t,e)}re(kt),te(kt,t)}function ur(){re(kt),re(fi),re(pi)}function Fh(e){xn(pi.current);var t=xn(kt.current),n=Ba(t,e.type);t!==n&&(te(fi,e),te(kt,n))}function Nu(e){fi.current===e&&(re(kt),re(fi))}var le=cn(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ta=[];function Mu(){for(var e=0;e<ta.length;e++)ta[e]._workInProgressVersionPrimary=null;ta.length=0}var cs=Ot.ReactCurrentDispatcher,na=Ot.ReactCurrentBatchConfig,jn=0,ue=null,ve=null,be=null,Hs=!1,Hr=!1,hi=0,ex=0;function je(){throw Error(V(321))}function Au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,i,s){if(jn=s,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cs.current=e===null||e.memoizedState===null?ix:sx,e=n(r,i),Hr){s=0;do{if(Hr=!1,hi=0,25<=s)throw Error(V(301));s+=1,be=ve=null,t.updateQueue=null,cs.current=ox,e=n(r,i)}while(Hr)}if(cs.current=Us,t=ve!==null&&ve.next!==null,jn=0,be=ve=ue=null,Hs=!1,t)throw Error(V(300));return e}function Iu(){var e=hi!==0;return hi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ue.memoizedState=be=e:be=be.next=e,be}function st(){if(ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=be===null?ue.memoizedState:be.next;if(t!==null)be=t,ve=e;else{if(e===null)throw Error(V(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},be===null?ue.memoizedState=be=e:be=be.next=e}return be}function mi(e,t){return typeof t=="function"?t(e):t}function ra(e){var t=st(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((jn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ue.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,mt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ue.lanes|=s,Nn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ia(e){var t=st(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);mt(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Bh(){}function $h(e,t){var n=ue,r=st(),i=t(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Du(Uh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,gi(9,Hh.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(V(349));jn&30||Wh(n,t,i)}return i}function Wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hh(e,t,n,r){t.value=n,t.getSnapshot=r,Gh(t)&&Yh(e)}function Uh(e,t,n){return n(function(){Gh(t)&&Yh(e)})}function Gh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Yh(e){var t=Vt(e,1);t!==null&&pt(t,e,1,-1)}function vd(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=rx.bind(null,ue,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kh(){return st().memoizedState}function ds(e,t,n,r){var i=yt();ue.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function xo(e,t,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&Au(r,o.deps)){i.memoizedState=gi(t,n,s,r);return}}ue.flags|=e,i.memoizedState=gi(1|t,n,s,r)}function xd(e,t){return ds(8390656,8,e,t)}function Du(e,t){return xo(2048,8,e,t)}function Xh(e,t){return xo(4,2,e,t)}function qh(e,t){return xo(4,4,e,t)}function Qh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zh(e,t,n){return n=n!=null?n.concat([e]):null,xo(4,4,Qh.bind(null,t,e),n)}function Vu(){}function Jh(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function em(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tm(e,t,n){return jn&21?(mt(n,t)||(n=oh(),ue.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function tx(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=na.transition;na.transition={};try{e(!1),t()}finally{Q=n,na.transition=r}}function nm(){return st().memoizedState}function nx(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rm(e))im(t,n);else if(n=Oh(e,t,n,r),n!==null){var i=Re();pt(n,e,r,i),sm(n,t,r)}}function rx(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rm(e))im(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mt(a,o)){var l=t.interleaved;l===null?(i.next=i,Cu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Oh(e,t,i,r),n!==null&&(i=Re(),pt(n,e,r,i),sm(n,t,r))}}function rm(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function im(e,t){Hr=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}var Us={readContext:it,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},ix={readContext:it,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:xd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,Qh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nx.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Vu,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=tx.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=yt();if(se){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),ke===null)throw Error(V(349));jn&30||Wh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xd(Uh.bind(null,r,s,e),[e]),r.flags|=2048,gi(9,Hh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=yt(),t=ke.identifierPrefix;if(se){var n=At,r=Mt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ex++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sx={readContext:it,useCallback:Jh,useContext:it,useEffect:Du,useImperativeHandle:Zh,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:em,useReducer:ra,useRef:Kh,useState:function(){return ra(mi)},useDebugValue:Vu,useDeferredValue:function(e){var t=st();return tm(t,ve.memoizedState,e)},useTransition:function(){var e=ra(mi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:$h,useId:nm,unstable_isNewReconciler:!1},ox={readContext:it,useCallback:Jh,useContext:it,useEffect:Du,useImperativeHandle:Zh,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:em,useReducer:ia,useRef:Kh,useState:function(){return ia(mi)},useDebugValue:Vu,useDeferredValue:function(e){var t=st();return ve===null?t.memoizedState=e:tm(t,ve.memoizedState,e)},useTransition:function(){var e=ia(mi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:$h,useId:nm,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wo={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=nn(e),s=Lt(r,i);s.payload=t,n!=null&&(s.callback=n),t=en(e,s,i),t!==null&&(pt(t,e,i,r),us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=nn(e),s=Lt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=en(e,s,i),t!==null&&(pt(t,e,i,r),us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=nn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(pt(t,e,r,n),us(t,e,r))}};function wd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!li(n,r)||!li(i,s):!0}function om(e,t,n){var r=!1,i=on,s=t.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=$e(t)?Cn:Ae.current,r=t.contextTypes,s=(r=r!=null)?or(e,i):on),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wo.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Pu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=$e(t)?Cn:Ae.current,i.context=or(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ll(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wo.enqueueReplaceState(i,i.state,null),$s(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=Dy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function am(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ys||(Ys=!0,wl=r),cl(e,t)},n}function lm(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function bd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ax;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sx.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Td(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var lx=Ot.ReactCurrentOwner,Fe=!1;function Le(e,t,n,r){t.child=e===null?_h(t,null,n,r):lr(t,e.child,n,r)}function Ed(e,t,n,r,i){n=n.render;var s=t.ref;return nr(t,i),r=Lu(e,t,n,r,s,i),n=Iu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(se&&n&&wu(t),t.flags|=1,Le(e,t,r,i),t.child)}function Cd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,um(e,t,s,r,i)):(e=ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(o,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=rn(s,r),e.ref=t.ref,e.return=t,t.child=e}function um(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(li(s,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return dl(e,t,n,r,i)}function cm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Kn,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Kn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Kn,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,te(Kn,Ue),Ue|=r;return Le(e,t,i,n),t.child}function dm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,i){var s=$e(n)?Cn:Ae.current;return s=or(t,s),nr(t,i),n=Lu(e,t,n,r,s,i),r=Iu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(se&&r&&wu(t),t.flags|=1,Le(e,t,n,i),t.child)}function Pd(e,t,n,r,i){if($e(n)){var s=!0;_s(t)}else s=!1;if(nr(t,i),t.stateNode===null)fs(e,t),om(t,n,r),ul(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=$e(n)?Cn:Ae.current,u=or(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sd(t,o,r,u),Wt=!1;var p=t.memoizedState;o.state=p,$s(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Be.current||Wt?(typeof c=="function"&&(ll(t,n,c,r),l=t.memoizedState),(a=Wt||wd(t,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=$e(n)?Cn:Ae.current,l=or(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Sd(t,o,r,l),Wt=!1,p=t.memoizedState,o.state=p,$s(t,r,o,i);var y=t.memoizedState;a!==d||p!==y||Be.current||Wt?(typeof v=="function"&&(ll(t,n,v,r),y=t.memoizedState),(u=Wt||wd(t,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,s,i)}function fl(e,t,n,r,i,s){dm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&fd(t,n,!1),Rt(e,t,s);r=t.stateNode,lx.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=lr(t,e.child,null,s),t.child=lr(t,null,a,s)):Le(e,t,a,s),t.memoizedState=r.state,i&&fd(t,n,!0),t.child}function fm(e){var t=e.stateNode;t.pendingContext?dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dd(e,t.context,!1),ju(e,t.containerInfo)}function jd(e,t,n,r,i){return ar(),bu(i),t.flags|=256,Le(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pm(e,t,n){var r=t.pendingProps,i=le.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(le,i&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ko(o,r,0,null),e=kn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hl(n),t.memoizedState=pl,e):Ru(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ux(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=kn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?hl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return s=e.child,e=s.sibling,r=rn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ru(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&bu(r),lr(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ux(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=sa(Error(V(422))),Ki(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ko({mode:"visible",children:r.children},i,0,null),s=kn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&lr(t,e.child,null,o),t.child.memoizedState=hl(o),t.memoizedState=pl,s);if(!(t.mode&1))return Ki(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(V(419)),r=sa(s,r,void 0),Ki(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fe||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(e,i),pt(r,e,i,-1))}return $u(),r=sa(Error(V(421))),Ki(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bx.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ye=Jt(i.nextSibling),Ke=t,se=!0,dt=null,e!==null&&(Ze[Je++]=Mt,Ze[Je++]=At,Ze[Je++]=Pn,Mt=e.id,At=e.overflow,Pn=t),t=Ru(t,r.children),t.flags|=4096,t)}function Nd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),al(e.return,t,n)}function oa(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Le(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,n,t);else if(e.tag===19)Nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ws(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oa(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ws(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oa(t,!0,n,null,s);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cx(e,t,n){switch(t.tag){case 3:fm(t),ar();break;case 5:Fh(t);break;case 1:$e(t.type)&&_s(t);break;case 4:ju(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Fs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?pm(e,t,n):(te(le,le.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,cm(e,t,n)}return Rt(e,t,n)}var mm,ml,gm,ym;mm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(kt.current);var s=null;switch(n){case"input":i=_a(e,i),r=_a(e,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=Fa(e,i),r=Fa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vs)}$a(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ti.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ti.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dx(e,t,n){var r=t.pendingProps;switch(Su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return $e(t.type)&&Rs(),Ne(t),null;case 3:return r=t.stateNode,ur(),re(Be),re(Ae),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(kl(dt),dt=null))),ml(e,t),Ne(t),null;case 5:Nu(t);var i=xn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ne(t),null}if(e=xn(kt.current),Gi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[wt]=t,r[di]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<_r.length;i++)ne(_r[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Oc(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Fc(r,s),ne("invalid",r)}$a(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ui(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ui(r.textContent,a,e),i=["children",""+a]):ti.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":_i(r),zc(r,s,!0);break;case"textarea":_i(r),Bc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Up(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[wt]=t,e[di]=r,mm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wa(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<_r.length;i++)ne(_r[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Oc(e,r),i=_a(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Fc(e,r),i=Fa(e,r),ne("invalid",e);break;default:i=r}$a(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ni(e,l):typeof l=="number"&&ni(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ti.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",e):l!=null&&ou(e,s,l,o))}switch(n){case"input":_i(e),zc(e,r,!1);break;case"textarea":_i(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Zn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=xn(pi.current),xn(kt.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(s=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:Ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ui(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ne(t),null;case 13:if(re(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ye!==null&&t.mode&1&&!(t.flags&128))Vh(),ar(),t.flags|=98560,s=!1;else if(s=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(V(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[wt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else dt!==null&&(kl(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?xe===0&&(xe=3):$u())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return ur(),ml(e,t),e===null&&ui(t.stateNode.containerInfo),Ne(t),null;case 10:return Eu(t.type._context),Ne(t),null;case 17:return $e(t.type)&&Rs(),Ne(t),null;case 19:if(re(le),s=t.memoizedState,s===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Mr(s,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ws(e),o!==null){for(t.flags|=128,Mr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}s.tail!==null&&he()>dr&&(t.flags|=128,r=!0,Mr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ws(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Ne(t),null}else 2*he()-s.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=he(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function fx(e,t){switch(Su(t),t.tag){case 1:return $e(t.type)&&Rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),re(Be),re(Ae),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nu(t),null;case 13:if(re(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(le),null;case 4:return ur(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var Xi=!1,Me=!1,px=typeof WeakSet=="function"?WeakSet:Set,z=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function gl(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Md=!1;function hx(e,t){if(Ja=Ls,e=bh(),xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},Ls=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:ut(t.type,x),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Md,Md=!1,y}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&gl(t,n,s)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[di],delete t[rl],delete t[qv],delete t[Qv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xm(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vs));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var Te=null,ct=!1;function Ft(e,t,n){for(n=n.child;n!==null;)wm(e,t,n),n=n.sibling}function wm(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(po,n)}catch{}switch(n.tag){case 5:Me||Yn(n,t);case 6:var r=Te,i=ct;Te=null,Ft(e,t,n),Te=r,ct=i,Te!==null&&(ct?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(ct?(e=Te,n=n.stateNode,e.nodeType===8?Jo(e.parentNode,n):e.nodeType===1&&Jo(e,n),oi(e)):Jo(Te,n.stateNode));break;case 4:r=Te,i=ct,Te=n.stateNode.containerInfo,ct=!0,Ft(e,t,n),Te=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gl(n,t,o),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!Me&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Ft(e,t,n),Me=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new px),t.forEach(function(r){var i=kx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,ct=!1;break e;case 3:Te=a.stateNode.containerInfo,ct=!0;break e;case 4:Te=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(Te===null)throw Error(V(160));wm(s,o,i),Te=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sm(t,e),t=t.sibling}function Sm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),gt(e),r&4){try{Ur(3,e,e.return),So(3,e)}catch(x){fe(e,e.return,x)}try{Ur(5,e,e.return)}catch(x){fe(e,e.return,x)}}break;case 1:ot(t,e),gt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(ot(t,e),gt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(x){fe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wp(i,s),Wa(a,o);var u=Wa(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Kp(i,d):c==="dangerouslySetInnerHTML"?Gp(i,d):c==="children"?ni(i,d):ou(i,c,d,u)}switch(a){case"input":Oa(i,s);break;case"textarea":Hp(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Zn(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Zn(i,!!s.multiple,s.defaultValue,!0):Zn(i,!!s.multiple,s.multiple?[]:"",!1))}i[di]=s}catch(x){fe(e,e.return,x)}}break;case 6:if(ot(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){fe(e,e.return,x)}}break;case 3:if(ot(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(x){fe(e,e.return,x)}break;case 4:ot(t,e),gt(e);break;case 13:ot(t,e),gt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zu=he())),r&4&&Ld(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||c,ot(t,e),Me=u):ot(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(p=z,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ur(4,p,p.return);break;case 1:Yn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){fe(r,n,x)}}break;case 5:Yn(p,p.return);break;case 22:if(p.memoizedState!==null){Dd(d);continue}}v!==null?(v.return=p,z=v):Dd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yp("display",o))}catch(x){fe(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){fe(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ot(t,e),gt(e),r&4&&Ld(e);break;case 21:break;default:ot(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xm(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var s=Ad(e);xl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ad(e);vl(e,a,o);break;default:throw Error(V(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mx(e,t,n){z=e,bm(e)}function bm(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Me;a=Xi;var u=Me;if(Xi=o,(Me=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?Vd(i):l!==null?(l.return=o,z=l):Vd(i);for(;s!==null;)z=s,bm(s),s=s.sibling;z=i,Xi=a,Me=u}Id(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Id(e)}}function Id(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&yd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&oi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Me||t.flags&512&&yl(t)}catch(p){fe(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Dd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Vd(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var s=t.return;try{yl(t)}catch(l){fe(t,s,l)}break;case 5:var o=t.return;try{yl(t)}catch(l){fe(t,o,l)}}}catch(l){fe(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var gx=Math.ceil,Gs=Ot.ReactCurrentDispatcher,_u=Ot.ReactCurrentOwner,nt=Ot.ReactCurrentBatchConfig,X=0,ke=null,ye=null,Ce=0,Ue=0,Kn=cn(0),xe=0,yi=null,Nn=0,bo=0,Ou=0,Gr=null,ze=null,zu=0,dr=1/0,jt=null,Ys=!1,wl=null,tn=null,qi=!1,Yt=null,Ks=0,Yr=0,Sl=null,ps=-1,hs=0;function Re(){return X&6?he():ps!==-1?ps:ps=he()}function nn(e){return e.mode&1?X&2&&Ce!==0?Ce&-Ce:Jv.transition!==null?(hs===0&&(hs=oh()),hs):(e=Q,e!==0||(e=window.event,e=e===void 0?16:ph(e.type)),e):1}function pt(e,t,n,r){if(50<Yr)throw Yr=0,Sl=null,Error(V(185));Ei(e,n,r),(!(X&2)||e!==ke)&&(e===ke&&(!(X&2)&&(bo|=n),xe===4&&Ut(e,Ce)),We(e,r),n===1&&X===0&&!(t.mode&1)&&(dr=he()+500,vo&&dn()))}function We(e,t){var n=e.callbackNode;Jy(e,t);var r=As(e,e===ke?Ce:0);if(r===0)n!==null&&Hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hc(n),t===1)e.tag===0?Zv(Rd.bind(null,e)):Lh(Rd.bind(null,e)),Kv(function(){!(X&6)&&dn()}),n=null;else{switch(ah(r)){case 1:n=du;break;case 4:n=ih;break;case 16:n=Ms;break;case 536870912:n=sh;break;default:n=Ms}n=Mm(n,km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function km(e,t){if(ps=-1,hs=0,X&6)throw Error(V(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=As(e,e===ke?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xs(e,r);else{t=r;var i=X;X|=2;var s=Em();(ke!==e||Ce!==t)&&(jt=null,dr=he()+500,bn(e,t));do try{xx();break}catch(a){Tm(e,a)}while(!0);Tu(),Gs.current=s,X=i,ye!==null?t=0:(ke=null,Ce=0,t=xe)}if(t!==0){if(t===2&&(i=Ka(e),i!==0&&(r=i,t=bl(e,i))),t===1)throw n=yi,bn(e,0),Ut(e,r),We(e,he()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!yx(i)&&(t=Xs(e,r),t===2&&(s=Ka(e),s!==0&&(r=s,t=bl(e,s))),t===1))throw n=yi,bn(e,0),Ut(e,r),We(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:mn(e,ze,jt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=zu+500-he(),10<t)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(mn.bind(null,e,ze,jt),t);break}mn(e,ze,jt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ft(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gx(r/1960))-r,10<r){e.timeoutHandle=nl(mn.bind(null,e,ze,jt),r);break}mn(e,ze,jt);break;case 5:mn(e,ze,jt);break;default:throw Error(V(329))}}}return We(e,he()),e.callbackNode===n?km.bind(null,e):null}function bl(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=Xs(e,t),e!==2&&(t=ze,ze=n,t!==null&&kl(t)),e}function kl(e){ze===null?ze=e:ze.push.apply(ze,e)}function yx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Ou,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Rd(e){if(X&6)throw Error(V(327));rr();var t=As(e,0);if(!(t&1))return We(e,he()),null;var n=Xs(e,t);if(e.tag!==0&&n===2){var r=Ka(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=yi,bn(e,0),Ut(e,t),We(e,he()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,ze,jt),We(e,he()),null}function Fu(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(dr=he()+500,vo&&dn())}}function Mn(e){Yt!==null&&Yt.tag===0&&!(X&6)&&rr();var t=X;X|=1;var n=nt.transition,r=Q;try{if(nt.transition=null,Q=1,e)return e()}finally{Q=r,nt.transition=n,X=t,!(X&6)&&dn()}}function Bu(){Ue=Kn.current,re(Kn)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yv(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rs();break;case 3:ur(),re(Be),re(Ae),Mu();break;case 5:Nu(r);break;case 4:ur();break;case 13:re(le);break;case 19:re(le);break;case 10:Eu(r.type._context);break;case 22:case 23:Bu()}n=n.return}if(ke=e,ye=e=rn(e.current,null),Ce=Ue=t,xe=0,yi=null,Ou=bo=Nn=0,ze=Gr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vn=null}return e}function Tm(e,t){do{var n=ye;try{if(Tu(),cs.current=Us,Hs){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hs=!1}if(jn=0,be=ve=ue=null,Hr=!1,hi=0,_u.current=null,n===null||n.return===null){xe=1,yi=t,ye=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=kd(o);if(v!==null){v.flags&=-257,Td(v,o,a,s,t),v.mode&1&&bd(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){bd(s,u,t),$u();break e}l=Error(V(426))}}else if(se&&a.mode&1){var b=kd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Td(b,o,a,s,t),bu(cr(l,a));break e}}s=l=cr(l,a),xe!==4&&(xe=2),Gr===null?Gr=[s]:Gr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=am(s,l,t);gd(s,g);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tn===null||!tn.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=lm(s,a,t);gd(s,w);break e}}s=s.return}while(s!==null)}Pm(n)}catch(S){t=S,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function Em(){var e=Gs.current;return Gs.current=Us,e===null?Us:e}function $u(){(xe===0||xe===3||xe===2)&&(xe=4),ke===null||!(Nn&268435455)&&!(bo&268435455)||Ut(ke,Ce)}function Xs(e,t){var n=X;X|=2;var r=Em();(ke!==e||Ce!==t)&&(jt=null,bn(e,t));do try{vx();break}catch(i){Tm(e,i)}while(!0);if(Tu(),X=n,Gs.current=r,ye!==null)throw Error(V(261));return ke=null,Ce=0,xe}function vx(){for(;ye!==null;)Cm(ye)}function xx(){for(;ye!==null&&!Hy();)Cm(ye)}function Cm(e){var t=Nm(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Pm(e):ye=t,_u.current=null}function Pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fx(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ye=null;return}}else if(n=dx(n,t,Ue),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);xe===0&&(xe=5)}function mn(e,t,n){var r=Q,i=nt.transition;try{nt.transition=null,Q=1,wx(e,t,n,r)}finally{nt.transition=i,Q=r}return null}function wx(e,t,n,r){do rr();while(Yt!==null);if(X&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ev(e,s),e===ke&&(ye=ke=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qi||(qi=!0,Mm(Ms,function(){return rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nt.transition,nt.transition=null;var o=Q;Q=1;var a=X;X|=4,_u.current=null,hx(e,n),Sm(n,e),Fv(el),Ls=!!Ja,el=Ja=null,e.current=n,mx(n),Uy(),X=a,Q=o,nt.transition=s}else e.current=n;if(qi&&(qi=!1,Yt=e,Ks=i),s=e.pendingLanes,s===0&&(tn=null),Ky(n.stateNode),We(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ys)throw Ys=!1,e=wl,wl=null,e;return Ks&1&&e.tag!==0&&rr(),s=e.pendingLanes,s&1?e===Sl?Yr++:(Yr=0,Sl=e):Yr=0,dn(),null}function rr(){if(Yt!==null){var e=ah(Ks),t=nt.transition,n=Q;try{if(nt.transition=null,Q=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Ks=0,X&6)throw Error(V(331));var i=X;for(X|=4,z=e.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Ur(8,c,s)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var p=c.sibling,v=c.return;if(vm(c),c===u){z=null;break}if(p!==null){p.return=v,z=p;break}z=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ur(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,z=g;break e}z=s.return}}var h=e.current;for(z=h;z!==null;){o=z;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,z=m;else e:for(o=h;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:So(9,a)}}catch(S){fe(a,a.return,S)}if(a===o){z=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,z=w;break e}z=a.return}}if(X=i,dn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(po,e)}catch{}r=!0}return r}finally{Q=n,nt.transition=t}}return!1}function _d(e,t,n){t=cr(n,t),t=am(e,t,1),e=en(e,t,1),t=Re(),e!==null&&(Ei(e,1,t),We(e,t))}function fe(e,t,n){if(e.tag===3)_d(e,e,n);else for(;t!==null;){if(t.tag===3){_d(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=cr(n,e),e=lm(t,e,1),t=en(t,e,1),e=Re(),t!==null&&(Ei(t,1,e),We(t,e));break}}t=t.return}}function Sx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ce&n)===n&&(xe===4||xe===3&&(Ce&130023424)===Ce&&500>he()-zu?bn(e,0):Ou|=n),We(e,t)}function jm(e,t){t===0&&(e.mode&1?(t=Fi,Fi<<=1,!(Fi&130023424)&&(Fi=4194304)):t=1);var n=Re();e=Vt(e,t),e!==null&&(Ei(e,t,n),We(e,n))}function bx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jm(e,n)}function kx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),jm(e,n)}var Nm;Nm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,cx(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,se&&t.flags&1048576&&Ih(t,zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fs(e,t),e=t.pendingProps;var i=or(t,Ae.current);nr(t,n),i=Lu(null,t,r,e,i,n);var s=Iu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(s=!0,_s(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pu(t),i.updater=wo,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,s,n)):(t.tag=0,se&&s&&wu(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ex(r),e=ut(r,e),i){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Pd(null,t,r,e,n);break e;case 11:t=Ed(null,t,r,e,n);break e;case 14:t=Cd(null,t,r,ut(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Pd(e,t,r,i,n);case 3:e:{if(fm(t),e===null)throw Error(V(387));r=t.pendingProps,s=t.memoizedState,i=s.element,zh(e,t),$s(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=cr(Error(V(423)),t),t=jd(e,t,r,n,i);break e}else if(r!==i){i=cr(Error(V(424)),t),t=jd(e,t,r,n,i);break e}else for(Ye=Jt(t.stateNode.containerInfo.firstChild),Ke=t,se=!0,dt=null,n=_h(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Rt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Fh(t),e===null&&ol(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,tl(r,i)?o=null:s!==null&&tl(r,s)&&(t.flags|=32),dm(e,t),Le(e,t,o,n),t.child;case 6:return e===null&&ol(t),null;case 13:return pm(e,t,n);case 4:return ju(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ed(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,te(Fs,r._currentValue),r._currentValue=o,s!==null)if(mt(s.value,o)){if(s.children===i.children&&!Be.current){t=Rt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Lt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),al(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(V(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),al(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nr(t,n),i=it(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Cd(e,t,r,i,n);case 15:return um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),fs(e,t),t.tag=1,$e(r)?(e=!0,_s(t)):e=!1,nr(t,n),om(t,r,i),ul(t,r,i,n),fl(null,t,r,!0,e,n);case 19:return hm(e,t,n);case 22:return cm(e,t,n)}throw Error(V(156,t.tag))};function Mm(e,t){return rh(e,t)}function Tx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new Tx(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ex(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lu)return 11;if(e===uu)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ms(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Wu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case On:return kn(n.children,i,s,t);case au:o=8,i|=8;break;case Ia:return e=et(12,n,t,i|2),e.elementType=Ia,e.lanes=s,e;case Da:return e=et(13,n,t,i),e.elementType=Da,e.lanes=s,e;case Va:return e=et(19,n,t,i),e.elementType=Va,e.lanes=s,e;case Fp:return ko(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Op:o=10;break e;case zp:o=9;break e;case lu:o=11;break e;case uu:o=14;break e;case $t:o=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=et(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function kn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=et(22,e,r,t),e.elementType=Fp,e.lanes=n,e.stateNode={isHidden:!1},e}function aa(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function la(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$o(0),this.expirationTimes=$o(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,i,s,o,a,l){return e=new Cx(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=et(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(s),e}function Px(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Am(e){if(!e)return on;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if($e(n))return Ah(e,n,t)}return t}function Lm(e,t,n,r,i,s,o,a,l){return e=Hu(n,r,!0,e,i,s,o,a,l),e.context=Am(null),n=e.current,r=Re(),i=nn(n),s=Lt(r,i),s.callback=t??null,en(n,s,i),e.current.lanes=i,Ei(e,i,r),We(e,r),e}function To(e,t,n,r){var i=t.current,s=Re(),o=nn(i);return n=Am(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,o),e!==null&&(pt(e,i,o,s),us(e,i,o)),o}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uu(e,t){Od(e,t),(e=e.alternate)&&Od(e,t)}function jx(){return null}var Im=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}Eo.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));To(e,t,null,null)};Eo.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){To(null,e,null,null)}),t[Dt]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ch();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&fh(e)}};function Yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zd(){}function Nx(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=qs(o);s.call(u)}}var o=Lm(t,r,e,0,null,!1,!1,"",zd);return e._reactRootContainer=o,e[Dt]=o.current,ui(e.nodeType===8?e.parentNode:e),Mn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qs(l);a.call(u)}}var l=Hu(e,0,!1,null,null,!1,!1,"",zd);return e._reactRootContainer=l,e[Dt]=l.current,ui(e.nodeType===8?e.parentNode:e),Mn(function(){To(t,l,n,r)}),l}function Po(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=qs(o);a.call(l)}}To(t,o,e,i)}else o=Nx(n,t,e,i,r);return qs(o)}lh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(fu(t,n|1),We(t,he()),!(X&6)&&(dr=he()+500,dn()))}break;case 13:Mn(function(){var r=Vt(e,1);if(r!==null){var i=Re();pt(r,e,1,i)}}),Uu(e,1)}};pu=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Re();pt(t,e,134217728,n)}Uu(e,134217728)}};uh=function(e){if(e.tag===13){var t=nn(e),n=Vt(e,t);if(n!==null){var r=Re();pt(n,e,t,r)}Uu(e,t)}};ch=function(){return Q};dh=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ua=function(e,t,n){switch(t){case"input":if(Oa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yo(r);if(!i)throw Error(V(90));$p(r),Oa(r,i)}}}break;case"textarea":Hp(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Qp=Fu;Zp=Mn;var Mx={usingClientEntryPoint:!1,Events:[Pi,$n,yo,Xp,qp,Fu]},Ar={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=th(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{po=Qi.inject(Ax),bt=Qi}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(t))throw Error(V(200));return Px(e,t,null,n)};qe.createRoot=function(e,t){if(!Yu(e))throw Error(V(299));var n=!1,r="",i=Im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,ui(e.nodeType===8?e.parentNode:e),new Gu(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=th(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Mn(e)};qe.hydrate=function(e,t,n){if(!Co(t))throw Error(V(200));return Po(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Yu(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lm(t,null,e,1,n??null,i,!1,s,o),e[Dt]=t.current,ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};qe.render=function(e,t,n){if(!Co(t))throw Error(V(200));return Po(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Co(e))throw Error(V(40));return e._reactRootContainer?(Mn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};qe.unstable_batchedUpdates=Fu;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Po(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Dp.exports=qe;var Vm=Dp.exports,Fd=Vm;Aa.createRoot=Fd.createRoot,Aa.hydrateRoot=Fd.hydrateRoot;const Ku=j.createContext({});function Ni(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const Lx=typeof window<"u",jo=Lx?j.useLayoutEffect:j.useEffect,No=j.createContext(null);function Xu(e,t){e.indexOf(t)===-1&&e.push(t)}function fr(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Et=(e,t,n)=>n>t?t:n<e?e:n;let qu=()=>{};const an={},Rm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),_m=e=>typeof e=="object"&&e!==null,Om=e=>/^0[^.\s]+$/u.test(e);function zm(e){let t;return()=>(t===void 0&&(t=e()),t)}const rt=e=>e,Mi=(...e)=>e.reduce((t,n)=>r=>n(t(r))),pr=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class Qu{constructor(){this.subscriptions=[]}add(t){return Xu(this.subscriptions,t),()=>fr(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const He=e=>e*1e3,tt=e=>e/1e3,Fm=(e,t)=>t?e*(1e3/t):0,Ix=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e},Bm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Dx=1e-7,Vx=12;function Rx(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Bm(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>Dx&&++a<Vx);return o}function Ai(e,t,n,r){if(e===t&&n===r)return rt;const i=s=>Rx(s,0,1,e,n);return s=>s===0||s===1?s:Bm(i(s),t,r)}const $m=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Zu=e=>t=>1-e(1-t),Wm=Ai(.33,1.53,.69,.99),Ju=Zu(Wm),Hm=$m(Ju),Um=e=>e>=1?1:(e*=2)<1?.5*Ju(e):.5*(2-Math.pow(2,-10*(e-1))),ec=e=>1-Math.sin(Math.acos(e)),Gm=Zu(ec),Ym=$m(ec),_x=Ai(.42,0,1,1),Ox=Ai(0,0,.58,1),Km=Ai(.42,0,.58,1),Xm=e=>Array.isArray(e)&&typeof e[0]!="number";function qm(e,t){return Xm(e)?e[Ix(0,e.length,t)]:e}const Qm=e=>Array.isArray(e)&&typeof e[0]=="number",zx={linear:rt,easeIn:_x,easeInOut:Km,easeOut:Ox,circIn:ec,circInOut:Ym,circOut:Gm,backIn:Ju,backInOut:Hm,backOut:Wm,anticipate:Um},Fx=e=>typeof e=="string",Bd=e=>{if(Qm(e)){qu(e.length===4);const[t,n,r,i]=e;return Ai(t,n,r,i)}else if(Fx(e))return zx[e];return e},Zi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Bx(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),e()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const v=d&&r?t:n;return c&&s.add(u),v.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0;const c=t;t=n,n=c,t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const $x=40;function Zm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Zi.reduce((m,w)=>(m[w]=Bx(s),m),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:c,update:d,preRender:p,render:v,postRender:y}=o,x=()=>{const m=an.useManualTiming,w=m?i.timestamp:performance.now();n=!1,m||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,$x),1)),i.timestamp=w,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),p.process(i),v.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},b=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Zi.reduce((m,w)=>{const S=o[w];return m[w]=(T,C=!1,k=!1)=>(n||b(),S.schedule(T,C,k)),m},{}),cancel:m=>{for(let w=0;w<Zi.length;w++)o[Zi[w]].cancel(m)},state:i,steps:o}}const{schedule:ee,cancel:_t,state:Ee,steps:ua}=Zm(typeof requestAnimationFrame<"u"?requestAnimationFrame:rt,!0);let gs;function Wx(){gs=void 0}const De={now:()=>(gs===void 0&&De.set(Ee.isProcessing||an.useManualTiming?Ee.timestamp:performance.now()),gs),set:e=>{gs=e,queueMicrotask(Wx)}},Jm=e=>t=>typeof t=="string"&&t.startsWith(e),eg=Jm("--"),Hx=Jm("var(--"),tc=e=>Hx(e)?Ux.test(e.split("/*")[0].trim()):!1,Ux=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $d(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const xr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},vi={...xr,transform:e=>Et(0,1,e)},Ji={...xr,default:1},Kr=e=>Math.round(e*1e5)/1e5,nc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Gx(e){return e==null}const Yx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rc=(e,t)=>n=>!!(typeof n=="string"&&Yx.test(n)&&n.startsWith(e)||t&&!Gx(n)&&Object.prototype.hasOwnProperty.call(n,t)),tg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(nc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Kx=e=>Et(0,255,e),ca={...xr,transform:e=>Math.round(Kx(e))},wn={test:rc("rgb","red"),parse:tg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ca.transform(e)+", "+ca.transform(t)+", "+ca.transform(n)+", "+Kr(vi.transform(r))+")"};function Xx(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Tl={test:rc("#"),parse:Xx,transform:wn.transform},Li=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Pt=Li("deg"),Tt=Li("%"),B=Li("px"),qx=Li("vh"),Qx=Li("vw"),Wd={...Tt,parse:e=>Tt.parse(e)/100,transform:e=>Tt.transform(e*100)},Xn={test:rc("hsl","hue"),parse:tg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Tt.transform(Kr(t))+", "+Tt.transform(Kr(n))+", "+Kr(vi.transform(r))+")"},ge={test:e=>wn.test(e)||Tl.test(e)||Xn.test(e),parse:e=>wn.test(e)?wn.parse(e):Xn.test(e)?Xn.parse(e):Tl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?wn.transform(e):Xn.transform(e),getAnimatableNone:e=>{const t=ge.parse(e);return t.alpha=0,ge.transform(t)}},Zx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Jx(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(nc))==null?void 0:t.length)||0)+(((n=e.match(Zx))==null?void 0:n.length)||0)>0}const ng="number",rg="color",e1="var",t1="var(",Hd="${}",n1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hr(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(n1,l=>(ge.test(l)?(r.color.push(s),i.push(rg),n.push(ge.parse(l))):l.startsWith(t1)?(r.var.push(s),i.push(e1),n.push(l)):(r.number.push(s),i.push(ng),n.push(parseFloat(l))),++s,Hd)).split(Hd);return{values:n,split:a,indexes:r,types:i}}function r1(e){return hr(e).values}function ig({split:e,types:t}){const n=e.length;return r=>{let i="";for(let s=0;s<n;s++)if(i+=e[s],r[s]!==void 0){const o=t[s];o===ng?i+=Kr(r[s]):o===rg?i+=ge.transform(r[s]):i+=r[s]}return i}}function i1(e){return ig(hr(e))}const s1=e=>typeof e=="number"?0:ge.test(e)?ge.getAnimatableNone(e):e,o1=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:s1(e);function a1(e){const t=hr(e);return ig(t)(t.values.map((r,i)=>o1(r,t.split[i])))}const ht={test:Jx,parse:r1,createTransformer:i1,getAnimatableNone:a1};function da(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function l1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=da(l,a,e+1/3),s=da(l,a,e),o=da(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Qs(e,t){return n=>n>0?t:e}const J=(e,t,n)=>e+(t-e)*n,fa=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},u1=[Tl,wn,Xn],c1=e=>u1.find(t=>t.test(e));function Ud(e){const t=c1(e);if(!t)return!1;let n=t.parse(e);return t===Xn&&(n=l1(n)),n}const Gd=(e,t)=>{const n=Ud(e),r=Ud(t);if(!n||!r)return Qs(e,t);const i={...n};return s=>(i.red=fa(n.red,r.red,s),i.green=fa(n.green,r.green,s),i.blue=fa(n.blue,r.blue,s),i.alpha=J(n.alpha,r.alpha,s),wn.transform(i))},El=new Set(["none","hidden"]);function d1(e,t){return El.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function f1(e,t){return n=>J(e,t,n)}function ic(e){return typeof e=="number"?f1:typeof e=="string"?tc(e)?Qs:ge.test(e)?Gd:m1:Array.isArray(e)?sg:typeof e=="object"?ge.test(e)?Gd:p1:Qs}function sg(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>ic(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function p1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ic(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function h1(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const m1=(e,t)=>{const n=ht.createTransformer(t),r=hr(e),i=hr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?El.has(e)&&!i.values.length||El.has(t)&&!r.values.length?d1(e,t):Mi(sg(h1(r,i),i.values),n):Qs(e,t)};function og(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?J(e,t,n):ic(e)(e,t)}const g1=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>ee.update(t,n),stop:()=>_t(t),now:()=>Ee.isProcessing?Ee.timestamp:De.now()}},ag=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Zs=2e4;function sc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Zs;)t+=n,r=e.next(t);return t>=Zs?1/0:t}function lg(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(sc(r),Zs);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:tt(i)}}const de={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Cl(e,t){return e*Math.sqrt(1-t*t)}const y1=12;function v1(e,t,n){let r=n;for(let i=1;i<y1;i++)r=r-e(r)/t(r);return r}const pa=.001;function x1({duration:e=de.duration,bounce:t=de.bounce,velocity:n=de.velocity,mass:r=de.mass}){let i,s,o=1-t;o=Et(de.minDamping,de.maxDamping,o),e=Et(de.minDuration,de.maxDuration,tt(e)),o<1?(i=u=>{const c=u*o,d=c*e,p=c-n,v=Cl(u,o),y=Math.exp(-d);return pa-p/v*y},s=u=>{const d=u*o*e,p=d*n+n,v=Math.pow(o,2)*Math.pow(u,2)*e,y=Math.exp(-d),x=Cl(Math.pow(u,2),o);return(-i(u)+pa>0?-1:1)*((p-v)*y)/x}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-pa+c*d},s=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=v1(i,s,a);if(e=He(e),isNaN(l))return{stiffness:de.stiffness,damping:de.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const w1=["duration","bounce"],S1=["stiffness","damping","mass"];function Yd(e,t){return t.some(n=>e[n]!==void 0)}function b1(e){let t={velocity:de.velocity,stiffness:de.stiffness,damping:de.damping,mass:de.mass,isResolvedFromDuration:!1,...e};if(!Yd(e,S1)&&Yd(e,w1))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Et(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:de.mass,stiffness:i,damping:s}}else{const n=x1({...e,velocity:0});t={...t,...n,mass:de.mass},t.isResolvedFromDuration=!0}return t}function xi(e=de.visualDuration,t=de.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:p,isResolvedFromDuration:v}=b1({...n,velocity:-tt(n.velocity||0)}),y=p||0,x=u/(2*Math.sqrt(l*c)),b=o-s,g=tt(Math.sqrt(l/c)),h=Math.abs(b)<5;r||(r=h?de.restSpeed.granular:de.restSpeed.default),i||(i=h?de.restDelta.granular:de.restDelta.default);let m,w,S,T,C,k;if(x<1)S=Cl(g,x),T=(y+x*g*b)/S,m=P=>{const D=Math.exp(-x*g*P);return o-D*(T*Math.sin(S*P)+b*Math.cos(S*P))},C=x*g*T+b*S,k=x*g*b-T*S,w=P=>Math.exp(-x*g*P)*(C*Math.sin(S*P)+k*Math.cos(S*P));else if(x===1){m=D=>o-Math.exp(-g*D)*(b+(y+g*b)*D);const P=y+g*b;w=D=>Math.exp(-g*D)*(g*P*D-y)}else{const P=g*Math.sqrt(x*x-1);m=L=>{const _=Math.exp(-x*g*L),W=Math.min(P*L,300);return o-_*((y+x*g*b)*Math.sinh(W)+P*b*Math.cosh(W))/P};const D=(y+x*g*b)/P,F=x*g*D-b*P,N=x*g*b-D*P;w=L=>{const _=Math.exp(-x*g*L),W=Math.min(P*L,300);return _*(F*Math.sinh(W)+N*Math.cosh(W))}}const E={calculatedDuration:v&&d||null,velocity:P=>He(w(P)),next:P=>{if(!v&&x<1){const F=Math.exp(-x*g*P),N=Math.sin(S*P),L=Math.cos(S*P),_=o-F*(T*N+b*L),W=He(F*(C*N+k*L));return a.done=Math.abs(W)<=r&&Math.abs(o-_)<=i,a.value=a.done?o:_,a}const D=m(P);if(v)a.done=P>=d;else{const F=He(w(P));a.done=Math.abs(F)<=r&&Math.abs(o-D)<=i}return a.value=a.done?o:D,a},toString:()=>{const P=Math.min(sc(E),Zs),D=ag(F=>E.next(P*F).value,P,30);return P+"ms "+D},toTransition:()=>{}};return E}xi.applyToOptions=e=>{const t=lg(e,100,xi);return e.ease=t.ease,e.duration=He(t.duration),e.type="keyframes",e};const k1=5;function ug(e,t,n){const r=Math.max(t-k1,0);return Fm(n-e(r),t-r)}function Pl({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],p={done:!1,value:d},v=k=>a!==void 0&&k<a||l!==void 0&&k>l,y=k=>a===void 0?l:l===void 0||Math.abs(a-k)<Math.abs(l-k)?a:l;let x=n*t;const b=d+x,g=o===void 0?b:o(b);g!==b&&(x=g-d);const h=k=>-x*Math.exp(-k/r),m=k=>g+h(k),w=k=>{const E=h(k),P=m(k);p.done=Math.abs(E)<=u,p.value=p.done?g:P};let S,T;const C=k=>{v(p.value)&&(S=k,T=xi({keyframes:[p.value,y(p.value)],velocity:ug(m,k,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:k=>{let E=!1;return!T&&S===void 0&&(E=!0,w(k),C(k)),S!==void 0&&k>=S?T.next(k-S):(!E&&w(k),p)}}}function T1(e,t,n){const r=[],i=n||an.mix||og,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||rt:t;a=Mi(l,a)}r.push(a)}return r}function cg(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(qu(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=T1(t,r,i),l=a.length,u=c=>{if(o&&c<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const p=pr(e[d],e[d+1],c);return a[d](p)};return n?c=>u(Et(e[0],e[s-1],c)):u}function dg(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=pr(0,t,r);e.push(J(n,1,i))}}function fg(e){const t=[0];return dg(t,e.length-1),t}function E1(e,t){return e.map(n=>n*t)}function C1(e,t){return e.map(()=>t||Km).splice(0,e.length-1)}function Xr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Xm(r)?r.map(Bd):Bd(r),s={done:!1,value:t[0]},o=E1(n&&n.length===t.length?n:fg(t),e),a=cg(o,t,{ease:Array.isArray(i)?i:C1(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const P1=e=>e!==null;function Mo(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(P1),a=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const j1={decay:Pl,inertia:Pl,tween:Xr,keyframes:Xr,spring:xi};function pg(e){typeof e.type=="string"&&(e.type=j1[e.type])}class oc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const N1=e=>e/100;class Js extends oc{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==De.now()&&this.tick(De.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;pg(t);const{type:n=Xr,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const l=n||Xr;l!==Xr&&typeof a[0]!="number"&&(this.mixKeyframes=Mi(N1,og(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=sc(u));const{calculatedDuration:c}=u;this.calculatedDuration=c,this.resolvedDuration=c+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:c,repeat:d,repeatType:p,repeatDelay:v,type:y,onUpdate:x,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let m=this.currentTime,w=r;if(d){const k=Math.min(this.currentTime,i)/a;let E=Math.floor(k),P=k%1;!P&&k>=1&&(P=1),P===1&&E--,E=Math.min(E,d+1),!!(E%2)&&(p==="reverse"?(P=1-P,v&&(P-=v/a)):p==="mirror"&&(w=o)),m=Et(0,1,P)*a}let S;h?(this.delayState.value=c[0],S=this.delayState):S=w.next(m),s&&!h&&(S.value=s(S.value));let{done:T}=S;!h&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&y!==Pl&&(S.value=Mo(c,this.options,b,this.speed)),x&&x(S.value),C&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return tt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+tt(t)}get time(){return tt(this.currentTime)}set time(t){t=He(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return ug(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(De.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=tt(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=g1,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(De.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function M1(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Sn=e=>e*180/Math.PI,jl=e=>{const t=Sn(Math.atan2(e[1],e[0]));return Nl(t)},A1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:jl,rotateZ:jl,skewX:e=>Sn(Math.atan(e[1])),skewY:e=>Sn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Nl=e=>(e=e%360,e<0&&(e+=360),e),Kd=jl,Xd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),qd=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),L1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xd,scaleY:qd,scale:e=>(Xd(e)+qd(e))/2,rotateX:e=>Nl(Sn(Math.atan2(e[6],e[5]))),rotateY:e=>Nl(Sn(Math.atan2(-e[2],e[0]))),rotateZ:Kd,rotate:Kd,skewX:e=>Sn(Math.atan(e[4])),skewY:e=>Sn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ml(e){return e.includes("scale")?1:0}function Al(e,t){if(!e||e==="none")return Ml(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=L1,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=A1,i=a}if(!i)return Ml(t);const s=r[t],o=i[1].split(",").map(D1);return typeof s=="function"?s(o):o[s]}const I1=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Al(n,t)};function D1(e){return parseFloat(e.trim())}const wr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sr=new Set([...wr,"pathRotation"]),Qd=e=>e===xr||e===B,V1=new Set(["x","y","z"]),R1=wr.filter(e=>!V1.has(e));function _1(e){const t=[];return R1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Kt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Al(t,"x"),y:(e,{transform:t})=>Al(t,"y")};Kt.translateX=Kt.x;Kt.translateY=Kt.y;const Tn=new Set;let Ll=!1,Il=!1,Dl=!1;function hg(){if(Il){const e=Array.from(Tn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=_1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Il=!1,Ll=!1,Tn.forEach(e=>e.complete(Dl)),Tn.clear()}function mg(){Tn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Il=!0)})}function O1(){Dl=!0,mg(),hg(),Dl=!1}class ac{constructor(t,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Tn.add(this),Ll||(Ll=!0,ee.read(mg),ee.resolveKeyframes(hg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}M1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Tn.delete(this)}cancel(){this.state==="scheduled"&&(Tn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const z1=e=>e.startsWith("--");function gg(e,t,n){z1(t)?e.style.setProperty(t,n):e.style[t]=n}const F1={};function yg(e,t){const n=zm(e);return()=>F1[t]??n()}const B1=yg(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),vg=yg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Or=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Zd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Or([0,.65,.55,1]),circOut:Or([.55,0,1,.45]),backIn:Or([.31,.01,.66,-.59]),backOut:Or([.33,1.53,.69,.99])};function xg(e,t){if(e)return typeof e=="function"?vg()?ag(e,t):"ease-out":Qm(e)?Or(e):Array.isArray(e)?e.map(n=>xg(n,t)||Zd.easeOut):Zd[e]}function $1(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const c={[t]:n};l&&(c.offset=l);const d=xg(a,i);Array.isArray(d)&&(c.easing=d);const p={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(c,p)}function lc(e){return typeof e=="function"&&"applyToOptions"in e}function W1({type:e,...t}){return lc(e)&&vg()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class wg extends oc{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,qu(typeof t.type!="string");const u=W1(t);this.animation=$1(n,r,i,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const c=Mo(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(c),gg(n,r,c),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return tt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+tt(t)}get time(){return tt(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=He(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&B1()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),rt):i(this)}}const Sg={anticipate:Um,backInOut:Hm,circInOut:Ym};function H1(e){return e in Sg}function U1(e){typeof e.ease=="string"&&H1(e.ease)&&(e.ease=Sg[e.ease])}const ha=10;class G1 extends wg{constructor(t){U1(t),pg(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Js({...o,autoplay:!1}),l=Math.max(ha,De.now()-this.startTime),u=Et(0,ha,l-ha),c=a.sample(l).value,{name:d}=this.options;s&&d&&gg(s,d,c),n.setWithVelocity(a.sample(Math.max(0,l-u)).value,c,u),a.stop()}}const Jd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ht.test(e)||e==="0")&&!e.startsWith("url("));function Y1(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function K1(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Jd(i,t),a=Jd(s,t);return!o||!a?!1:Y1(e)||(n==="spring"||lc(n))&&r}function Vl(e){e.duration=0,e.type="keyframes"}const bg=new Set(["opacity","clipPath","filter","transform"]),X1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function q1(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&X1.test(e[t]))return!0;return!1}const Q1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Z1=zm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function J1(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:o,keyframes:a}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=t.owner.getProps();return Z1()&&n&&(bg.has(n)||Q1.has(n)&&q1(a))&&(n!=="transform"||!c)&&!u&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const ew=40;class tw extends oc{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:c,...d}){var y;super(),this.stop=()=>{var x,b;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=De.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:c,...d},v=(c==null?void 0:c.KeyframeResolver)||ac;this.keyframeResolver=new v(a,(x,b,g)=>this.onKeyframesResolved(x,b,p,!g),l,u,c),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){var g,h;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:c}=r;this.resolvedAt=De.now();let d=!0;K1(t,s,o,a)||(d=!1,(an.instantAnimations||!l)&&(c==null||c(Mo(t,r,n))),t[0]=t[t.length-1],Vl(r),r.repeat=0);const v={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>ew?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=d&&!u&&J1(v),x=(h=(g=v.motionValue)==null?void 0:g.owner)==null?void 0:h.current;let b;if(y)try{b=new G1({...v,element:x})}catch{b=new Js(v)}else b=new Js(v);b.finished.then(()=>{this.notifyFinished()}).catch(rt),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),O1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}class nw{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t){const n=this.animations.map(r=>r.attachTimeline(t));return()=>{n.forEach((r,i)=>{r&&r(),this.animations[i].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return ef(this.animations,"duration")}get iterationDuration(){return ef(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function ef(e,t){let n=0;for(let r=0;r<e.length;r++){const i=e[r][t];i!==null&&i>n&&(n=i)}return n}class rw extends nw{then(t,n){return this.finished.finally(t).then(()=>{})}}function kg(e,t,n,r=0,i=1){const s=Array.from(e).sort((u,c)=>u.sortNodePosition(c)).indexOf(t),o=e.size,a=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:a-s*r}const tf=30,iw=e=>!isNaN(parseFloat(e)),qr={current:void 0};class sw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=De.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=De.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=iw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Qu);const r=this.events[t].add(n);return t==="change"?()=>{r(),ee.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return qr.current&&qr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=De.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>tf)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,tf);return Fm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ln(e,t){return new sw(e,t)}function Tg(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function uc(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Tg(n,e):n}const ow={type:"spring",stiffness:500,damping:25,restSpeed:10},aw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),lw={type:"keyframes",duration:.8},uw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},cw=(e,{keyframes:t})=>t.length>2?lw:Sr.has(e)?e.startsWith("scale")?aw(t[1]):ow:uw,dw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function fw(e){for(const t in e)if(!dw.has(t))return!0;return!1}const cc=(e,t,n,r={},i,s)=>o=>{const a=uc(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-He(l);const c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};fw(a)||Object.assign(c,cw(e,c)),c.duration&&(c.duration=He(c.duration)),c.repeatDelay&&(c.repeatDelay=He(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(Vl(c),c.delay===0&&(d=!0)),(an.instantAnimations||an.skipAnimations||i!=null&&i.shouldSkipAnimations||a.skipAnimations)&&(d=!0,Vl(c),c.delay=0),c.allowFlatten=!a.type&&!a.ease,d&&!s&&t.get()!==void 0){const p=Mo(c.keyframes,a);if(p!==void 0){ee.update(()=>{c.onUpdate(p),c.onComplete()});return}}return a.isSync?new Js(c):new tw(c)},pw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hw(e){const t=pw.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Eg(e,t,n=1){const[r,i]=hw(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Rm(o)?parseFloat(o):o}return tc(i)?Eg(i,t,n+1):i}function nf(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function dc(e,t,n,r){if(typeof t=="function"){const[i,s]=nf(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=nf(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function En(e,t,n){const r=e.getProps();return dc(r,t,n!==void 0?n:r.custom,e)}const Cg=new Set(["width","height","top","left","right","bottom",...wr]),Rl=e=>Array.isArray(e);function mw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ln(n))}function gw(e){return Rl(e)?e[e.length-1]||0:e}function yw(e,t){const n=En(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=gw(s[o]);mw(e,o,a)}}const we=e=>!!(e&&e.getVelocity);function vw(e){return!!(we(e)&&e.add)}function _l(e,t){const n=e.getValue("willChange");if(vw(n))return n.add(t);if(!n&&an.WillChange){const r=new an.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function fc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const xw="framerAppearId",Pg="data-"+fc(xw);function jg(e){return e.props[Pg]}function ww({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function pc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s,transitionEnd:o,...a}=t;const l=e.getDefaultTransition();s=s?Tg(s,l):l;const u=s==null?void 0:s.reduceMotion,c=s==null?void 0:s.skipAnimations;r&&(s=r);const d=[],p=i&&e.animationState&&e.animationState.getState()[i],v=s==null?void 0:s.path;v&&v.animateVisualElement(e,a,s,n,d);for(const y in a){const x=e.getValue(y,e.latestValues[y]??null),b=a[y];if(b===void 0||p&&ww(p,y))continue;const g={delay:n,...uc(s||{},y)};c&&(g.skipAnimations=!0);const h=x.get();if(h!==void 0&&!x.isAnimating()&&!Array.isArray(b)&&b===h&&!g.velocity){ee.update(()=>x.set(b));continue}let m=!1;if(window.MotionHandoffAnimation){const T=jg(e);if(T){const C=window.MotionHandoffAnimation(T,y,ee);C!==null&&(g.startTime=C,m=!0)}}_l(e,y);const w=u??e.shouldReduceMotion;x.start(cc(y,x,b,w&&Cg.has(y)?{type:!1}:g,e,m));const S=x.animation;S&&d.push(S)}if(o){const y=()=>ee.update(()=>{o&&yw(e,o)});d.length?Promise.all(d).then(y):y()}return d}function Ol(e,t,n={}){var l;const r=En(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(pc(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:p}=i;return Sw(e,t,u,c,d,p,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,c]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function Sw(e,t,n=0,r=0,i=0,s=1,o){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(Ol(l,t,{...o,delay:n+(typeof r=="function"?0:r)+kg(e.variantChildren,l,r,i,s)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function bw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Ol(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Ol(e,t,n);else{const i=typeof t=="function"?En(e,t,n.custom):t;r=Promise.all(pc(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const kw={test:e=>e==="auto",parse:e=>e},Ng=e=>t=>t.test(e),Mg=[xr,B,Tt,Pt,Qx,qx,kw],rf=e=>Mg.find(Ng(e));function Tw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Om(e):!0}const Ew=new Set(["brightness","contrast","saturate","opacity"]);function Cw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(nc)||[];if(!r)return e;const i=n.replace(r,"");let s=Ew.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Pw=/\b([a-z-]*)\(.*?\)/gu,zl={...ht,getAnimatableNone:e=>{const t=e.match(Pw);return t?t.map(Cw).join(" "):e}},Fl={...ht,getAnimatableNone:e=>{const t=ht.parse(e);return ht.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},sf={...xr,transform:Math.round},jw={rotate:Pt,pathRotation:Pt,rotateX:Pt,rotateY:Pt,rotateZ:Pt,scale:Ji,scaleX:Ji,scaleY:Ji,scaleZ:Ji,skew:Pt,skewX:Pt,skewY:Pt,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:vi,originX:Wd,originY:Wd,originZ:B},eo={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,...jw,zIndex:sf,fillOpacity:vi,strokeOpacity:vi,numOctaves:sf},Nw={...eo,color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:zl,WebkitFilter:zl,mask:Fl,WebkitMask:Fl},Ag=e=>Nw[e],Mw=new Set([zl,Fl]);function Lg(e,t){let n=Ag(e);return Mw.has(n)||(n=ht),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Aw=new Set(["auto","none","0"]);function Lw(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Aw.has(s)&&hr(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Lg(n,i)}class Iw extends ac{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let d=t[c];if(typeof d=="string"&&(d=d.trim(),tc(d))){const p=Eg(d,n.current);p!==void 0&&(t[c]=p),c===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!Cg.has(r)||t.length!==2)return;const[i,s]=t,o=rf(i),a=rf(s),l=$d(i),u=$d(s);if(l!==u&&Kt[r]){this.needsMeasurement=!0;return}if(o!==a)if(Qd(o)&&Qd(a))for(let c=0;c<t.length;c++){const d=t[c];typeof d=="string"&&(t[c]=parseFloat(d))}else Kt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Tw(t[i]))&&r.push(i);r.length&&Lw(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=Kt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const hc=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function mc(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;t&&(r=t.current);const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Bl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function ys(e){return _m(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:gc}=Zm(queueMicrotask,!1),lt={x:!1,y:!1};function Ig(){return lt.x||lt.y}function Dw(e){return e==="x"||e==="y"?lt[e]?null:(lt[e]=!0,()=>{lt[e]=!1}):lt.x||lt.y?null:(lt.x=lt.y=!0,()=>{lt.x=lt.y=!1})}function Dg(e,t){const n=mc(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Vw(e){return!(e.pointerType==="touch"||Ig())}function Rw(e,t,n={}){const[r,i,s]=Dg(e,n);return r.forEach(o=>{let a=!1,l=!1,u;const c=()=>{o.removeEventListener("pointerleave",y)},d=b=>{u&&(u(b),u=void 0),c()},p=b=>{a=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),l&&(l=!1,d(b))},v=()=>{a=!0,window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",p,i)},y=b=>{if(b.pointerType!=="touch"){if(a){l=!0;return}d(b)}},x=b=>{if(!Vw(b))return;l=!1;const g=t(o,b);typeof g=="function"&&(u=g,o.addEventListener("pointerleave",y,i))};o.addEventListener("pointerenter",x,i),o.addEventListener("pointerdown",v,i)}),s}const Vg=(e,t)=>t?e===t?!0:Vg(e,t.parentElement):!1,yc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,_w=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ow(e){return _w.has(e.tagName)||e.isContentEditable===!0}const zw=new Set(["INPUT","SELECT","TEXTAREA"]);function Fw(e){return zw.has(e.tagName)||e.isContentEditable===!0}const vs=new WeakSet;function of(e){return t=>{t.key==="Enter"&&e(t)}}function ma(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Bw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=of(()=>{if(vs.has(n))return;ma(n,"down");const i=of(()=>{ma(n,"up")}),s=()=>ma(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function af(e){return yc(e)&&!Ig()}const lf=new WeakSet;function $w(e,t,n={}){const[r,i,s]=Dg(e,n),o=a=>{const l=a.currentTarget;if(!af(a)||lf.has(a))return;vs.add(l),n.stopPropagation&&lf.add(a);const u=t(l,a),c={...i,capture:!0},d=(y,x)=>{window.removeEventListener("pointerup",p,c),window.removeEventListener("pointercancel",v,c),vs.has(l)&&vs.delete(l),af(y)&&typeof u=="function"&&u(y,{success:x})},p=y=>{d(y,l===window||l===document||n.useGlobalTarget||Vg(l,y.target))},v=y=>{d(y,!1)};window.addEventListener("pointerup",p,c),window.addEventListener("pointercancel",v,c)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),ys(a)&&(a.addEventListener("focus",u=>Bw(u,i)),!Ow(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Ao(e){return _m(e)&&"ownerSVGElement"in e}const xs=new WeakMap;let Bt;const Rg=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:Ao(r)&&"getBBox"in r?r.getBBox()[t]:r[n],Ww=Rg("inline","width","offsetWidth"),Hw=Rg("block","height","offsetHeight");function Uw({target:e,borderBoxSize:t}){var n;(n=xs.get(e))==null||n.forEach(r=>{r(e,{get width(){return Ww(e,t)},get height(){return Hw(e,t)}})})}function Gw(e){e.forEach(Uw)}function Yw(){typeof ResizeObserver>"u"||(Bt=new ResizeObserver(Gw))}function Kw(e,t){Bt||Yw();const n=mc(e);return n.forEach(r=>{let i=xs.get(r);i||(i=new Set,xs.set(r,i)),i.add(t),Bt==null||Bt.observe(r)}),()=>{n.forEach(r=>{const i=xs.get(r);i==null||i.delete(t),i!=null&&i.size||Bt==null||Bt.unobserve(r)})}}const ws=new Set;let qn;function Xw(){qn=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ws.forEach(t=>t(e))},window.addEventListener("resize",qn)}function qw(e){return ws.add(e),qn||Xw(),()=>{ws.delete(e),!ws.size&&typeof qn=="function"&&(window.removeEventListener("resize",qn),qn=void 0)}}function uf(e,t){return typeof e=="function"?qw(e):Kw(e,t)}function _g(e){return Ao(e)&&e.tagName==="svg"}function Qw(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],o=e[3+n],a=cg(i,s,o);return t?a(r):a}const Zw=[...Mg,ge,ht],Jw=e=>Zw.find(Ng(e)),cf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qn=()=>({x:cf(),y:cf()}),df=()=>({min:0,max:0}),me=()=>({x:df(),y:df()}),wi=new WeakMap;function Lo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Si(e){return typeof e=="string"||Array.isArray(e)}const vc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xc=["initial",...vc];function Io(e){return Lo(e.animate)||xc.some(t=>Si(e[t]))}function Og(e){return!!(Io(e)||e.variants)}function eS(e,t,n){for(const r in t){const i=t[r],s=n[r];if(we(i))e.addValue(r,i);else if(we(s))e.addValue(r,ln(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ln(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const $l={current:null},zg={current:!1},tS=typeof window<"u";function nS(){if(zg.current=!0,!!tS)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>$l.current=e.matches;e.addEventListener("change",t),t()}else $l.current=!1}const ff=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let to={};function Fg(e){to=e}function rS(){return to}class Bg{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ac,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=De.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,ee.render(this.render,!1,!0))};const{latestValues:u,renderState:c}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Io(n),this.isVariantNode=Og(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const v in p){const y=p[v];u[v]!==void 0&&we(y)&&y.set(u[v])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,wi.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(zg.current||nS(),this.shouldReduceMotion=$l.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),_t(this.notifyUpdate),_t(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&bg.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:u,duration:c}=n.accelerate,d=new wg({element:this.current,name:t,keyframes:a,times:l,ease:u,duration:He(c)}),p=o(d);this.valueSubscriptions.set(t,()=>{p(),d.cancel()});return}const r=Sr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&ee.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in to){const n=to[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<ff.length;r++){const i=ff[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=eS(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ln(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Rm(r)||Om(r))?r=parseFloat(r):!Jw(r)&&ht.test(n)&&(r=Lg(t,n)),this.setBaseTarget(t,we(r)?r.get():r)),we(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=dc(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!we(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Qu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){gc.render(this.render)}}class $g extends Bg{constructor(){super(...arguments),this.KeyframeResolver=Iw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class fn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Wg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function iS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function sS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ga(e){return e===void 0||e===1}function Wl({scale:e,scaleX:t,scaleY:n}){return!ga(e)||!ga(t)||!ga(n)}function gn(e){return Wl(e)||Hg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Hg(e){return pf(e.x)||pf(e.y)}function pf(e){return e&&e!=="0%"}function no(e,t,n){const r=e-n,i=t*r;return n+i}function hf(e,t,n,r,i){return i!==void 0&&(e=no(e,i,r)),no(e,n,r)+t}function Hl(e,t=0,n=1,r,i){e.min=hf(e.min,t,n,r,i),e.max=hf(e.max,t,n,r,i)}function Ug(e,{x:t,y:n}){Hl(e.x,t.translate,t.scale,t.originPoint),Hl(e.y,n.translate,n.scale,n.originPoint)}const mf=.999999999999,gf=1.0000000000001;function oS(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(xt(e.x,-s.scroll.offset.x),xt(e.y,-s.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ug(e,o)),r&&gn(s.latestValues)&&Ss(e,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}t.x<gf&&t.x>mf&&(t.x=1),t.y<gf&&t.y>mf&&(t.y=1)}function xt(e,t){e.min+=t,e.max+=t}function yf(e,t,n,r,i=.5){const s=J(e.min,e.max,i);Hl(e,t,n,s,r)}function vf(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Ss(e,t,n){const r=n??e;yf(e.x,vf(t.x,r.x),t.scaleX,t.scale,t.originX),yf(e.y,vf(t.y,r.y),t.scaleY,t.scale,t.originY)}function Gg(e,t){return Wg(sS(e.getBoundingClientRect(),t))}function aS(e,t,n){const r=Gg(e,n),{scroll:i}=t;return i&&(xt(r.x,i.offset.x),xt(r.y,i.offset.y)),r}const lS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uS=wr.length;function cS(e,t,n){let r="",i=!0;for(let o=0;o<uS;o++){const a=wr[o],l=e[a];if(l===void 0)continue;let u=!0;if(typeof l=="number")u=l===(a.startsWith("scale")?1:0);else{const c=parseFloat(l);u=a.startsWith("scale")?c===1:c===0}if(!u||n){const c=Bl(l,eo[a]);if(!u){i=!1;const d=lS[a]||a;r+=`${d}(${c}) `}n&&(t[a]=c)}}const s=e.pathRotation;return s&&(i=!1,r+=`rotate(${Bl(s,eo.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function wc(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(Sr.has(l)){o=!0;continue}else if(eg(l)){i[l]=u;continue}else{const c=Bl(u,eo[l]);l.startsWith("origin")?(a=!0,s[l]=c):r[l]=c}}if(t.transform||(o||n?r.transform=cS(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;r.transformOrigin=`${l} ${u} ${c}`}}function Yg(e,{style:t,vars:n},r,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function xf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Lr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(B.test(e))e=parseFloat(e);else return e;const n=xf(e,t.target.x),r=xf(e,t.target.y);return`${n}% ${r}%`}},dS={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=ht.parse(e);if(i.length>5)return r;const s=ht.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=J(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}},Ul={borderRadius:{...Lr,applyTo:[...hc]},borderTopLeftRadius:Lr,borderTopRightRadius:Lr,borderBottomLeftRadius:Lr,borderBottomRightRadius:Lr,boxShadow:dS};function Kg(e,{layout:t,layoutId:n}){return Sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ul[e]||e==="opacity")}function Sc(e,t,n){var o;const r=e.style,i=t==null?void 0:t.style,s={};if(!r)return s;for(const a in r)(we(r[a])||i&&we(i[a])||Kg(a,e)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function fS(e){return window.getComputedStyle(e)}class Xg extends $g{constructor(){super(...arguments),this.type="html",this.renderInstance=Yg}readValueFromInstance(t,n){var r;if(Sr.has(n))return(r=this.projection)!=null&&r.isProjecting?Ml(n):I1(t,n);{const i=fS(t),s=(eg(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Gg(t,n)}build(t,n,r){wc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Sc(t,n,r)}}function pS(e,t){return e in t}class hS extends Bg{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,n){if(pS(n,t)){const r=t[n];if(typeof r=="string"||typeof r=="number")return r}}getBaseTargetFromProps(){}removeValueFromRenderState(t,n){delete n.output[t]}measureInstanceViewportBox(){return me()}build(t,n){Object.assign(t.output,n)}renderInstance(t,{output:n}){Object.assign(t,n)}sortInstanceNodePosition(){return 0}}const mS={offset:"stroke-dashoffset",array:"stroke-dasharray"},gS={offset:"strokeDashoffset",array:"strokeDasharray"};function yS(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?mS:gS;e[s.offset]=`${-r}`,e[s.array]=`${t} ${n}`}const vS=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,u,c){if(wc(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:p}=e;d.transform&&(p.transform=d.transform,delete d.transform),(p.transform||d.transformOrigin)&&(p.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),p.transform&&(p.transformBox=(c==null?void 0:c.transformBox)??"fill-box",delete d.transformBox);for(const v of vS)d[v]!==void 0&&(p[v]=d[v],delete d[v]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&yS(d,i,s,o,!1)}const Qg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Zg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function xS(e,t,n,r){Yg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Qg.has(i)?i:fc(i),t.attrs[i])}function Jg(e,t,n){const r=Sc(e,t,n);for(const i in e)if(we(e[i])||we(t[i])){const s=wr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}class e0 extends $g{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=me}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Sr.has(n)){const r=Ag(n);return r&&r.default||0}return n=Qg.has(n)?n:fc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Jg(t,n,r)}build(t,n,r){qg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){xS(t,n,r,i)}mount(t){this.isSVGTag=Zg(t.tagName),super.mount(t)}}const wS=xc.length;function t0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?t0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<wS;n++){const r=xc[n],i=e.props[r];(Si(i)||i===!1)&&(t[r]=i)}return t}function n0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const SS=[...vc].reverse(),bS=vc.length;function kS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>bw(e,n,r)))}function TS(e){let t=kS(e),n=wf(),r=!0,i=!1;const s=u=>(c,d)=>{var v;const p=En(e,d,u==="exit"?(v=e.presenceContext)==null?void 0:v.custom:void 0);if(p){const{transition:y,transitionEnd:x,...b}=p;c={...c,...b,...x}}return c};function o(u){t=u(e)}function a(u){const{props:c}=e,d=t0(e.parent)||{},p=[],v=new Set;let y={},x=1/0;for(let g=0;g<bS;g++){const h=SS[g],m=n[h],w=c[h]!==void 0?c[h]:d[h],S=Si(w),T=h===u?m.isActive:null;T===!1&&(x=g);let C=w===d[h]&&w!==c[h]&&S;if(C&&(r||i)&&e.manuallyAnimateOnMount&&(C=!1),m.protectedKeys={...y},!m.isActive&&T===null||!w&&!m.prevProp||Lo(w)||typeof w=="boolean")continue;if(h==="exit"&&m.isActive&&T!==!0){m.prevResolvedValues&&(y={...y,...m.prevResolvedValues});continue}const k=ES(m.prevProp,w);let E=k||h===u&&m.isActive&&!C&&S||g>x&&S,P=!1;const D=Array.isArray(w)?w:[w];let F=D.reduce(s(h),{});T===!1&&(F={});const{prevResolvedValues:N={}}=m,L={...N,...F},_=M=>{E=!0,v.has(M)&&(P=!0,v.delete(M)),m.needsAnimating[M]=!0;const I=e.getValue(M);I&&(I.liveStyle=!1)};for(const M in L){const I=F[M],A=N[M];if(y.hasOwnProperty(M))continue;let R=!1;Rl(I)&&Rl(A)?R=!n0(I,A)||k:R=I!==A,R?I!=null?_(M):v.add(M):I!==void 0&&v.has(M)?_(M):m.protectedKeys[M]=!0}m.prevProp=w,m.prevResolvedValues=F,m.isActive&&(y={...y,...F}),(r||i)&&e.blockInitialAnimation&&(E=!1);const W=C&&k;E&&(!W||P)&&p.push(...D.map(M=>{const I={type:h};if(typeof M=="string"&&(r||i)&&!W&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,R=En(A,M);if(A.enteringChildren&&R){const{delayChildren:$}=R.transition||{};I.delay=kg(A.enteringChildren,e,$)}}return{animation:M,options:I}}))}if(v.size){const g={};if(typeof c.initial!="boolean"){const h=En(e,Array.isArray(c.initial)?c.initial[0]:c.initial);h&&h.transition&&(g.transition=h.transition)}v.forEach(h=>{const m=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),g[h]=m??null}),p.push({animation:g})}let b=!!p.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,i=!1,b?t(p):Promise.resolve()}function l(u,c){var p;if(n[u].isActive===c)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(v=>{var y;return(y=v.animationState)==null?void 0:y.setActive(u,c)}),n[u].isActive=c;const d=a(u);for(const v in n)n[v].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=wf(),i=!0}}}function ES(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!n0(t,e):!1}function pn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wf(){return{animate:pn(!0),whileInView:pn(),whileHover:pn(),whileTap:pn(),whileDrag:pn(),whileFocus:pn(),exit:pn()}}function Gl(e,t){e.min=t.min,e.max=t.max}function at(e,t){Gl(e.x,t.x),Gl(e.y,t.y)}function Sf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const r0=1e-4,CS=1-r0,PS=1+r0,i0=.01,jS=0-i0,NS=0+i0;function Ve(e){return e.max-e.min}function MS(e,t,n){return Math.abs(e-t)<=n}function bf(e,t,n,r=.5){e.origin=r,e.originPoint=J(t.min,t.max,e.origin),e.scale=Ve(n)/Ve(t),e.translate=J(n.min,n.max,e.origin)-e.originPoint,(e.scale>=CS&&e.scale<=PS||isNaN(e.scale))&&(e.scale=1),(e.translate>=jS&&e.translate<=NS||isNaN(e.translate))&&(e.translate=0)}function Qr(e,t,n,r){bf(e.x,t.x,n.x,r?r.originX:void 0),bf(e.y,t.y,n.y,r?r.originY:void 0)}function kf(e,t,n,r=0){const i=r?J(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+Ve(t)}function AS(e,t,n,r){kf(e.x,t.x,n.x,r==null?void 0:r.x),kf(e.y,t.y,n.y,r==null?void 0:r.y)}function Tf(e,t,n,r=0){const i=r?J(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Ve(t)}function ro(e,t,n,r){Tf(e.x,t.x,n.x,r==null?void 0:r.x),Tf(e.y,t.y,n.y,r==null?void 0:r.y)}function Ef(e,t,n,r,i){return e-=t,e=no(e,1/n,r),i!==void 0&&(e=no(e,1/i,r)),e}function LS(e,t=0,n=1,r=.5,i,s=e,o=e){if(Tt.test(t)&&(t=parseFloat(t),t=J(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=J(s.min,s.max,r);e===s&&(a-=t),e.min=Ef(e.min,t,n,a,i),e.max=Ef(e.max,t,n,a,i)}function Cf(e,t,[n,r,i],s,o){LS(e,t[n],t[r],t[i],t.scale,s,o)}const IS=["x","scaleX","originX"],DS=["y","scaleY","originY"];function Pf(e,t,n,r){Cf(e.x,t,IS,n?n.x:void 0,r?r.x:void 0),Cf(e.y,t,DS,n?n.y:void 0,r?r.y:void 0)}function jf(e){return e.translate===0&&e.scale===1}function s0(e){return jf(e.x)&&jf(e.y)}function Nf(e,t){return e.min===t.min&&e.max===t.max}function VS(e,t){return Nf(e.x,t.x)&&Nf(e.y,t.y)}function Mf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function o0(e,t){return Mf(e.x,t.x)&&Mf(e.y,t.y)}function Af(e){return Ve(e.x)/Ve(e.y)}function Lf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function vt(e){return[e("x"),e("y")]}function RS(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,pathRotation:d,rotateX:p,rotateY:v,skewX:y,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),v&&(r+=`rotateY(${v}deg) `),y&&(r+=`skewX(${y}deg) `),x&&(r+=`skewY(${x}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const _S=hc.length,If=e=>typeof e=="string"?parseFloat(e):e,Df=e=>typeof e=="number"||B.test(e);function OS(e,t,n,r,i,s){i?(e.opacity=J(0,n.opacity??1,zS(r)),e.opacityExit=J(t.opacity??1,0,FS(r))):s&&(e.opacity=J(t.opacity??1,n.opacity??1,r));for(let o=0;o<_S;o++){const a=hc[o];let l=Vf(t,a),u=Vf(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Df(l)===Df(u)?(e[a]=Math.max(J(If(l),If(u),r),0),(Tt.test(u)||Tt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=J(t.rotate||0,n.rotate||0,r))}function Vf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const zS=a0(0,.5,Gm),FS=a0(.5,.95,rt);function a0(e,t,n){return r=>r<e?0:r>t?1:n(pr(e,t,r))}function l0(e,t,n){const r=we(e)?e:ln(e);return r.start(cc("",r,t,n)),r.animation}function bi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const BS=(e,t)=>e.depth-t.depth;class $S{constructor(){this.children=[],this.isDirty=!1}add(t){Xu(this.children,t),this.isDirty=!0}remove(t){fr(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(BS),this.isDirty=!1,this.children.forEach(t)}}function WS(e,t){const n=De.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(_t(r),e(s-t))};return ee.setup(r,!0),()=>_t(r)}function bs(e){return we(e)?e.get():e}class HS{constructor(){this.members=[]}add(t){Xu(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(fr(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(fr(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:s}=r.options,{layoutDependency:o}=t.options;(s===void 0||s!==o)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,s,o;(r=(n=t.options).onExitComplete)==null||r.call(n),(o=(i=t.resumingFrom)==null?void 0:(s=i.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const ks={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ya=["","X","Y","Z"],US=1e3;let GS=0;function va(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function u0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=jg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ee,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&u0(r)}function c0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=GS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(XS),this.nodes.forEach(t2),this.nodes.forEach(n2),this.nodes.forEach(qS)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new $S)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Qu),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ao(o)&&!_g(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let c,d=0;const p=()=>this.root.updateBlockedByResize=!1;ee.read(()=>{d=window.innerWidth}),e(o,()=>{const v=window.innerWidth;v!==d&&(d=v,this.root.updateBlockedByResize=!0,c&&c(),c=WS(p,250),ks.hasAnimatedSinceResize&&(ks.hasAnimatedSinceResize=!1,this.nodes.forEach(Of)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||a2,{onLayoutAnimationStart:x,onLayoutAnimationComplete:b}=u.getProps(),g=!this.targetLayout||!o0(this.targetLayout,v),h=!d&&p;if(this.options.layoutRoot||this.resumeFrom||h||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const m={...uc(y,"layout"),onPlay:x,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(m.delay=0,m.type=!1),this.startAnimation(m),this.setAnimationOrigin(c,h,m.path)}else d||Of(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(r2),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&u0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(ZS),this.nodes.forEach(Rf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_f);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(JS),this.nodes.forEach(e2),this.nodes.forEach(YS),this.nodes.forEach(KS)):this.nodes.forEach(_f),this.clearAllSnapshots();const a=De.now();Ee.delta=Et(0,1e3/60,a-Ee.timestamp),Ee.timestamp=a,Ee.isProcessing=!0,ua.update.process(Ee),ua.preRender.process(Ee),ua.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,gc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(QS),this.sharedNodes.forEach(i2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ve(this.snapshot.measuredBox.x)&&!Ve(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=me()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!s0(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||gn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),l2(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return me();const a=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(u2))){const{scroll:c}=this.root;c&&(xt(a.x,c.offset.x),xt(a.y,c.offset.y))}return a}removeElementScroll(o){var l;const a=me();if(at(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:p}=c;c!==this.root&&d&&p.layoutScroll&&(d.wasRoot&&at(a,o),xt(a.x,d.offset.x),xt(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var c,d;const u=l||me();at(u,o);for(let p=0;p<this.path.length;p++){const v=this.path[p];!a&&v.options.layoutScroll&&v.scroll&&v!==v.root&&(xt(u.x,-v.scroll.offset.x),xt(u.y,-v.scroll.offset.y)),gn(v.latestValues)&&Ss(u,v.latestValues,(c=v.layout)==null?void 0:c.layoutBox)}return gn(this.latestValues)&&Ss(u,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),u}removeTransform(o){var l;const a=me();at(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!gn(c.latestValues))continue;let d;c.instance&&(Wl(c.latestValues)&&c.updateSnapshot(),d=me(),at(d,c.measurePageBox())),Pf(a,c.latestValues,(l=c.snapshot)==null?void 0:l.layoutBox,d)}return gn(this.latestValues)&&Pf(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var v;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:c,layoutId:d}=this.options;if(!this.layout||!(c||d))return;this.resolvedRelativeTargetAt=Ee.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),AS(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):at(this.target,this.layout.layoutBox),Ug(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Wl(this.parent.latestValues)||Hg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),ro(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),at(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(l=!1),l)return;const{layout:u,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||c))return;at(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;oS(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=me());const{target:v}=o;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sf(this.prevProjectionDelta.x,this.projectionDelta.x),Sf(this.prevProjectionDelta.y,this.projectionDelta.y)),Qr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Lf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qn(),this.projectionDelta=Qn(),this.projectionDeltaWithTransform=Qn()}setAnimationOrigin(o,a=!1,l){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},p=Qn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const v=me(),y=u?u.source:void 0,x=this.layout?this.layout.source:void 0,b=y!==x,g=this.getStack(),h=!g||g.members.length<=1,m=!!(b&&!h&&this.options.crossfade===!0&&!this.path.some(o2));this.animationProgress=0;let w;const S=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=T=>{const C=T/1e3,k=S==null?void 0:S(C);k?(p.x.translate=k.x,p.x.scale=J(o.x.scale,1,C),p.x.origin=o.x.origin,p.x.originPoint=o.x.originPoint,p.y.translate=k.y,p.y.scale=J(o.y.scale,1,C),p.y.origin=o.y.origin,p.y.originPoint=o.y.originPoint):(zf(p.x,o.x,C),zf(p.y,o.y,C)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ro(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),s2(this.relativeTarget,this.relativeTargetOrigin,v,C),w&&VS(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=me()),at(w,this.relativeTarget)),b&&(this.animationValues=d,OS(d,c,this.latestValues,C,m,h)),k&&k.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=k.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(_t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ee.update(()=>{ks.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ln(0)),this.motionValue.jump(0,!1),this.currentAnimation=l0(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),o.onUpdate&&o.onUpdate(c)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(US),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&d0(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||me();const d=Ve(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=Ve(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}at(a,l),Ss(a,c),Qr(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new HS),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&va("z",o,u,this.animationValues);for(let c=0;c<ya.length;c++)va(`rotate${ya[c]}`,o,u,this.animationValues),va(`skew${ya[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=bs(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=bs(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!gn(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const c=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=RS(this.projectionDeltaWithTransform,this.treeScale,c);l&&(d=l(c,d)),o.transform=d;const{x:p,y:v}=this.projectionDelta;o.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,u.animationValues?o.opacity=u===this?c.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:o.opacity=u===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const y in Ul){if(c[y]===void 0)continue;const{correct:x,applyTo:b,isCSSVariable:g}=Ul[y],h=d==="none"?c[y]:x(c[y],u);if(b){const m=b.length;for(let w=0;w<m;w++)o[b[w]]=h}else g?this.options.visualElement.renderState.vars[y]=h:o[y]=h}this.options.layoutId&&(o.pointerEvents=u===this?bs(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Rf),this.root.sharedNodes.clear()}}}function YS(e){e.updateLayout()}function KS(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;if(s==="size")vt(d=>{const p=o?t.measuredBox[d]:t.layoutBox[d],v=Ve(p);p.min=r[d].min,p.max=p.min+v});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Gl(o?t.measuredBox[d]:t.layoutBox[d],r[d])}else d0(s,t.layoutBox,r)&&vt(d=>{const p=o?t.measuredBox[d]:t.layoutBox[d],v=Ve(r[d]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+v)});const a=Qn();Qr(a,r,t.layoutBox);const l=Qn();o?Qr(l,e.applyTransform(i,!0),t.measuredBox):Qr(l,r,t.layoutBox);const u=!s0(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:v}=d;if(p&&v){const y=e.options.layoutAnchor||void 0,x=me();ro(x,t.layoutBox,p.layoutBox,y);const b=me();ro(b,r,v.layoutBox,y),o0(x,b)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=x,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function XS(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function QS(e){e.clearSnapshot()}function Rf(e){e.clearMeasurements()}function ZS(e){e.isLayoutDirty=!0,e.updateLayout()}function _f(e){e.isLayoutDirty=!1}function JS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function e2(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Of(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function t2(e){e.resolveTargetDelta()}function n2(e){e.calcProjection()}function r2(e){e.resetSkewAndRotation()}function i2(e){e.removeLeadSnapshot()}function zf(e,t,n){e.translate=J(t.translate,0,n),e.scale=J(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ff(e,t,n,r){e.min=J(t.min,n.min,r),e.max=J(t.max,n.max,r)}function s2(e,t,n,r){Ff(e.x,t.x,n.x,r),Ff(e.y,t.y,n.y,r)}function o2(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const a2={duration:.45,ease:[.4,0,.1,1]},Bf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),$f=Bf("applewebkit/")&&!Bf("chrome/")?Math.round:rt;function Wf(e){e.min=$f(e.min),e.max=$f(e.max)}function l2(e){Wf(e.x),Wf(e.y)}function d0(e,t,n){return e==="position"||e==="preserve-aspect"&&!MS(Af(t),Af(n),.2)}function u2(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const c2=c0({attachResizeListener:(e,t)=>bi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),xa={current:void 0},f0=c0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!xa.current){const e=new c2({});e.mount(window),e.setOptions({layoutScroll:!0}),xa.current=e}return xa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Do=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Hf(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function d2(...e){return t=>{let n=!1;const r=e.map(i=>{const s=Hf(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Hf(e[i],null)}}}}function f2(...e){return j.useCallback(d2(...e),e)}class p2 extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(ys(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=ys(r)&&r.offsetWidth||0,s=ys(r)&&r.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function h2({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:s}){var p;const o=j.useId(),a=j.useRef(null),l=j.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=j.useContext(Do),c=((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref),d=f2(a,c);return j.useInsertionEffect(()=>{const{width:v,height:y,top:x,left:b,right:g,bottom:h,direction:m}=l.current;if(t||s===!1||!a.current||!v||!y)return;const w=m==="rtl",S=n==="left"?w?`right: ${g}`:`left: ${b}`:w?`left: ${b}`:`right: ${g}`,T=r==="bottom"?`bottom: ${h}`:`top: ${x}`;a.current.dataset.motionPopId=o;const C=document.createElement("style");u&&(C.nonce=u);const k=i??document.head;return k.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${y}px !important;
            ${S}px !important;
            ${T}px !important;
          }
        `),()=>{var E;(E=a.current)==null||E.removeAttribute("data-motion-pop-id"),k.contains(C)&&k.removeChild(C)}},[t]),f.jsx(p2,{isPresent:t,childRef:a,sizeRef:l,pop:s,children:s===!1?e:j.cloneElement(e,{ref:d})})}const m2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:u})=>{const c=Ni(g2),d=j.useId(),p=j.useRef(n),v=j.useRef(r);jo(()=>{p.current=n,v.current=r});let y=!0,x=j.useMemo(()=>(y=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:b=>{c.set(b,!0);for(const g of c.values())if(!g)return;r&&r()},register:b=>(c.set(b,!1),()=>{var g;c.delete(b),!p.current&&!c.size&&((g=v.current)==null||g.call(v))})}),[n,c,r]);return s&&y&&(x={...x}),j.useMemo(()=>{c.forEach((b,g)=>c.set(g,!1))},[n]),j.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),e=f.jsx(h2,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:u,children:e}),f.jsx(No.Provider,{value:x,children:e})};function g2(){return new Map}function p0(e=!0){const t=j.useContext(No);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=j.useId();j.useEffect(()=>{if(e)return i(s)},[e]);const o=j.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const es=e=>e.key||"";function Uf(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const io=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:u})=>{const[c,d]=p0(o),p=j.useMemo(()=>Uf(e),[e]),v=o&&!c?[]:p.map(es),y=j.useRef(!0),x=j.useRef(p),b=Ni(()=>new Map),g=j.useRef(new Set),[h,m]=j.useState(p),[w,S]=j.useState(p);jo(()=>{y.current=!1,x.current=p;for(let k=0;k<w.length;k++){const E=es(w[k]);v.includes(E)?(b.delete(E),g.current.delete(E)):b.get(E)!==!0&&b.set(E,!1)}},[w,v.length,v.join("-")]);const T=[];if(p!==h){let k=[...p];for(let E=0;E<w.length;E++){const P=w[E],D=es(P);v.includes(D)||(k.splice(E,0,P),T.push(P))}return s==="wait"&&T.length&&(k=T),S(Uf(k)),m(p),null}const{forceRender:C}=j.useContext(Ku);return f.jsx(f.Fragment,{children:w.map(k=>{const E=es(k),P=o&&!c?!1:p===w||v.includes(E),D=()=>{if(g.current.has(E))return;if(b.has(E))g.current.add(E),b.set(E,!0);else return;let F=!0;b.forEach(N=>{N||(F=!1)}),F&&(C==null||C(),S(x.current),o&&(d==null||d()),r&&r())};return f.jsx(m2,{isPresent:P,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,root:u,onExitComplete:P?void 0:D,anchorX:a,anchorY:l,children:k},E)})})},h0=j.createContext({strict:!1}),Gf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Yf=!1;function y2(){if(Yf)return;const e={};for(const t in Gf)e[t]={isEnabled:n=>Gf[t].some(r=>!!n[r])};Fg(e),Yf=!0}function m0(){return y2(),rS()}function v2(e){const t=m0();for(const n in e)t[n]={...t[n],...e[n]};Fg(t)}const x2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function so(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||x2.has(e)}let g0=e=>!so(e);function w2(e){typeof e=="function"&&(g0=t=>t.startsWith("on")?!so(t):e(t))}try{w2(require("@emotion/is-prop-valid").default)}catch{}function S2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||we(e[i])||(g0(i)||n===!0&&so(i)||!t&&!so(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Vo=j.createContext({});function b2(e,t){if(Io(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Si(n)?n:void 0,animate:Si(r)?r:void 0}}return e.inherit!==!1?t:{}}function k2(e){const{initial:t,animate:n}=b2(e,j.useContext(Vo));return j.useMemo(()=>({initial:t,animate:n}),[Kf(t),Kf(n)])}function Kf(e){return Array.isArray(e)?e.join(" "):e}const bc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function y0(e,t,n){for(const r in t)!we(t[r])&&!Kg(r,n)&&(e[r]=t[r])}function T2({transformTemplate:e},t){return j.useMemo(()=>{const n=bc();return wc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function E2(e,t){const n=e.style||{},r={};return y0(r,n,e),Object.assign(r,T2(e,t)),r}function C2(e,t){const n={},r=E2(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const v0=()=>({...bc(),attrs:{}});function P2(e,t,n,r){const i=j.useMemo(()=>{const s=v0();return qg(s,t,Zg(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};y0(s,e.style,e),i.style={...s,...i.style}}return i}const j2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kc(e){return typeof e!="string"||e.includes("-")?!1:!!(j2.indexOf(e)>-1||/[A-Z]/u.test(e))}function N2(e,t,n,{latestValues:r},i,s=!1,o){const l=(o??kc(e)?P2:C2)(t,r,i,e),u=S2(t,typeof e=="string",s),c=e!==j.Fragment?{...u,...l,ref:n}:{},{children:d}=t,p=j.useMemo(()=>we(d)?d.get():d,[d]);return j.createElement(e,{...c,children:p})}function M2({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:A2(n,r,i,e),renderState:t()}}function A2(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=bs(s[p]);let{initial:o,animate:a}=e;const l=Io(e),u=Og(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Lo(d)){const p=Array.isArray(d)?d:[d];for(let v=0;v<p.length;v++){const y=dc(e,p[v]);if(y){const{transitionEnd:x,transition:b,...g}=y;for(const h in g){let m=g[h];if(Array.isArray(m)){const w=c?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in x)i[h]=x[h]}}}return i}const x0=e=>(t,n)=>{const r=j.useContext(Vo),i=j.useContext(No),s=()=>M2(e,t,r,i);return n?s():Ni(s)},L2=x0({scrapeMotionValuesFromProps:Sc,createRenderState:bc}),I2=x0({scrapeMotionValuesFromProps:Jg,createRenderState:v0}),D2=Symbol.for("motionComponentSymbol");function V2(e,t,n){const r=j.useRef(n);j.useInsertionEffect(()=>{r.current=n});const i=j.useRef(null);return j.useCallback(s=>{var a;s&&((a=e.onMount)==null||a.call(e,s)),t&&(s?t.mount(s):t.unmount());const o=r.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s)},[t])}const w0=j.createContext({});function Rn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function R2(e,t,n,r,i,s){var m,w;const{visualElement:o}=j.useContext(Vo),a=j.useContext(h0),l=j.useContext(No),u=j.useContext(Do),c=u.reducedMotion,d=u.skipAnimations,p=j.useRef(null),v=j.useRef(!1);r=r||a.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,skipAnimations:d,isSVG:s}),v.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const y=p.current,x=j.useContext(w0);y&&!y.projection&&i&&(y.type==="html"||y.type==="svg")&&_2(p.current,n,i,x);const b=j.useRef(!1);j.useInsertionEffect(()=>{y&&b.current&&y.update(n,l)});const g=n[Pg],h=j.useRef(!!g&&typeof window<"u"&&!((m=window.MotionHandoffIsComplete)!=null&&m.call(window,g))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,g)));return jo(()=>{v.current=!0,y&&(b.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),h.current&&y.animationState&&y.animationState.animateChanges())}),j.useEffect(()=>{y&&(!h.current&&y.animationState&&y.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)==null||S.call(window,g)}),h.current=!1),y.enteringChildren=void 0)}),y}function _2(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutAnchor:c,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:S0(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Rn(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:u,layoutAnchor:c})}function S0(e){if(e)return e.options.allowProjection!==!1?e.projection:S0(e.parent)}function wa(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&v2(r);const s=n?n==="svg":kc(e),o=s?I2:L2;function a(u,c){let d;const p={...j.useContext(Do),...u,layoutId:O2(u)},{isStatic:v}=p,y=k2(u),x=o(u,v);if(!v&&typeof window<"u"){z2();const b=F2(p);d=b.MeasureLayout,y.visualElement=R2(e,x,p,i,b.ProjectionNode,s)}return f.jsxs(Vo.Provider,{value:y,children:[d&&y.visualElement?f.jsx(d,{visualElement:y.visualElement,...p}):null,N2(e,u,V2(x,y.visualElement,c),x,v,t,s)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=j.forwardRef(a);return l[D2]=e,l}function O2({layoutId:e}){const t=j.useContext(Ku).id;return t&&e!==void 0?t+"-"+e:e}function z2(e,t){j.useContext(h0).strict}function F2(e){const t=m0(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function B2(e,t){if(typeof Proxy>"u")return wa;const n=new Map,r=(s,o)=>wa(s,o,e,t),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,wa(o,void 0,e,t)),n.get(o))})}const $2=(e,t)=>t.isSVG??kc(e)?new e0(t):new Xg(t,{allowProjection:e!==j.Fragment});class W2 extends fn{constructor(t){super(t),t.animationState||(t.animationState=TS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let H2=0;class U2 extends fn{constructor(){super(...arguments),this.id=H2++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const l=En(this.node,o,a);if(l){const{transition:u,transitionEnd:c,...d}=l;for(const p in d)(s=this.node.getValue(p))==null||s.jump(d[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const G2={animation:{Feature:W2},exit:{Feature:U2}};function Ii(e){return{point:{x:e.pageX,y:e.pageY}}}const Y2=e=>t=>yc(t)&&e(t,Ii(t));function Zr(e,t,n,r){return bi(e,t,Y2(n),r)}const b0=({current:e})=>e?e.ownerDocument.defaultView:null,Xf=(e,t)=>Math.abs(e-t);function K2(e,t){const n=Xf(e.x,t.x),r=Xf(e.y,t.y);return Math.sqrt(n**2+r**2)}const qf=new Set(["auto","scroll"]);class k0{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ts(this.lastRawMoveEventInfo,this.transformPagePoint));const y=Sa(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,b=K2(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!b)return;const{point:g}=y,{timestamp:h}=Ee;this.history.push({...g,timestamp:h});const{onStart:m,onMove:w}=this.handlers;x||(m&&m(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=ts(x,this.transformPagePoint),ee.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:b,onSessionEnd:g,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Sa(y.type==="pointercancel"?this.lastMoveEventInfo:ts(x,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,m),g&&g(y,m)},!yc(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const l=Ii(t),u=ts(l,this.transformPagePoint),{point:c}=u,{timestamp:d}=Ee;this.history=[{...c,timestamp:d}];const{onSessionStart:p}=n;p&&p(t,Sa(u,this.history));const v={passive:!0,capture:!0};this.removeListeners=Mi(Zr(this.contextWindow,"pointermove",this.handlePointerMove,v),Zr(this.contextWindow,"pointerup",this.handlePointerUp,v),Zr(this.contextWindow,"pointercancel",this.handlePointerUp,v)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(qf.has(r.overflowX)||qf.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),ee.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),_t(this.updatePoint)}}function ts(e,t){return t?{point:t(e.point)}:e}function Qf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sa({point:e},t){return{point:e,delta:Qf(e,T0(t)),offset:Qf(e,X2(t)),velocity:q2(t,.1)}}function X2(e){return e[0]}function T0(e){return e[e.length-1]}function q2(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=T0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>He(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>He(t)*2&&(r=e[1]);const s=tt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Q2(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?J(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?J(n,e,r.max):Math.min(e,n)),e}function Zf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Z2(e,{top:t,left:n,bottom:r,right:i}){return{x:Zf(e.x,n,i),y:Zf(e.y,t,r)}}function Jf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function J2(e,t){return{x:Jf(e.x,t.x),y:Jf(e.y,t.y)}}function eb(e,t){let n=.5;const r=Ve(e),i=Ve(t);return i>r?n=pr(t.min,t.max-r,e.min):r>i&&(n=pr(e.min,e.max-i,t.min)),Et(0,1,n)}function tb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Yl=.35;function nb(e=Yl){return e===!1?e=0:e===!0&&(e=Yl),{x:ep(e,"left","right"),y:ep(e,"top","bottom")}}function ep(e,t,n){return{min:tp(e,t),max:tp(e,n)}}function tp(e,t){return typeof e=="number"?e:e[t]||0}const rb=new WeakMap;class ib{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(Ii(d).point),this.stopAnimation()},o=(d,p)=>{const{drag:v,dragPropagation:y,onDragStart:x}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Dw(v),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),vt(g=>{let h=this.getAxisMotionValue(g).get()||0;if(Tt.test(h)){const{projection:m}=this.visualElement;if(m&&m.layout){const w=m.layout.layoutBox[g];w&&(h=Ve(w)*(parseFloat(h)/100))}}this.originPoint[g]=h}),x&&ee.update(()=>x(d,p),!1,!0),_l(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(d,p)=>{this.latestPointerEvent=d,this.latestPanInfo=p;const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:x,onDrag:b}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:g}=p;if(y&&this.currentDirection===null){this.currentDirection=ob(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,g),this.updateAxis("y",p.point,g),this.visualElement.render(),b&&ee.update(()=>b(d,p),!1,!0)},l=(d,p)=>{this.latestPointerEvent=d,this.latestPanInfo=p,this.stop(d,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new k0(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:r,contextWindow:b0(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ee.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ns(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=Q2(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&Rn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=Z2(r.layoutBox,t):this.constraints=!1,this.elastic=nb(n),i!==this.constraints&&!Rn(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&vt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=tb(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Rn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const s=aS(r,i.root,this.visualElement.getTransformPagePoint());let o=J2(i.layout.layoutBox,s);if(n){const a=n(iS(o));this.hasMutatedConstraints=!!a,a&&(o=Wg(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=vt(c=>{if(!ns(c,n,this.currentDirection))return;let d=l&&l[c]||{};(o===!0||o===c)&&(d={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return _l(this.visualElement,t),r.start(cc(t,r,0,n,this.visualElement,!1))}stopAnimation(){vt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){vt(n=>{const{drag:r}=this.getProps();if(!ns(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],l=s.get()||0;s.set(t[n]-J(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Rn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};vt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=eb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),vt(o=>{if(!ns(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(J(l,u,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;rb.set(this.visualElement,this);const t=this.visualElement.current,n=Zr(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps(),p=u.target,v=p!==t&&Fw(p);c&&d&&!v&&this.start(u)});let r;const i=()=>{const{dragConstraints:u}=this.getProps();Rn(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=sb(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ee.read(i);const a=bi(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(vt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=u[d].translate,p.set(p.get()+u[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Yl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function np(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function sb(e,t,n){const r=uf(e,np(n)),i=uf(t,np(n));return()=>{r(),i()}}function ns(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ob(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class ab extends fn{constructor(t){super(t),this.removeGroupControls=rt,this.removeListeners=rt,this.controls=new ib(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||rt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ba=e=>(t,n)=>{e&&ee.update(()=>e(t,n),!1,!0)};class lb extends fn{constructor(){super(...arguments),this.removePointerDownListener=rt}onPointerDown(t){this.session=new k0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:b0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:ba(t),onStart:ba(n),onMove:ba(r),onEnd:(s,o)=>{delete this.session,i&&ee.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Zr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ka=!1;class ub extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),ka&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ks.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),ka=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||ee.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),gc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;ka=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function E0(e){const[t,n]=p0(),r=j.useContext(Ku);return f.jsx(ub,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(w0),isPresent:t,safeToRemove:n})}const cb={pan:{Feature:lb},drag:{Feature:ab,ProjectionNode:f0,MeasureLayout:E0}};function rp(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ee.postRender(()=>s(t,Ii(t)))}class db extends fn{mount(){const{current:t}=this.node;t&&(this.unmount=Rw(t,(n,r)=>(rp(this.node,r,"Start"),i=>rp(this.node,i,"End"))))}unmount(){}}class fb extends fn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Mi(bi(this.node.current,"focus",()=>this.onFocus()),bi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ip(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ee.postRender(()=>s(t,Ii(t)))}class pb extends fn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=$w(t,(i,s)=>(ip(this.node,s,"Start"),(o,{success:a})=>ip(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Kl=new WeakMap,Ta=new WeakMap,hb=e=>{const t=Kl.get(e.target);t&&t(e)},mb=e=>{e.forEach(hb)};function gb({root:e,...t}){const n=e||document;Ta.has(n)||Ta.set(n,{});const r=Ta.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(mb,{root:e,...t})),r[i]}function yb(e,t,n){const r=gb(t);return Kl.set(e,n),r.observe(e),()=>{Kl.delete(e),r.unobserve(e)}}const vb={some:0,all:1};class xb extends fn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:vb[i]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),v=c?d:p;v&&v(u)};this.stopObserver=yb(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(wb(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function wb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Sb={inView:{Feature:xb},tap:{Feature:pb},focus:{Feature:fb},hover:{Feature:db}},bb={layout:{ProjectionNode:f0,MeasureLayout:E0}},kb={...G2,...Sb,...cb,...bb},G=B2(kb,$2);function C0(e){const t=Ni(()=>ln(e)),{isStatic:n}=j.useContext(Do);if(n){const[,r]=j.useState(e);j.useEffect(()=>t.on("change",r),[])}return t}function P0(e,t){const n=C0(t()),r=()=>n.set(t());return r(),jo(()=>{const i=()=>ee.preRender(r,!1,!0),s=e.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),_t(r)}}),n}function Tb(e){qr.current=[],e();const t=P0(qr.current,e);return qr.current=void 0,t}function Eb(e,t,n,r){if(typeof e=="function")return Tb(e);const s=typeof t=="function"?t:Qw(t,n,r),o=Array.isArray(e)?sp(e,s):sp([e],([l])=>s(l)),a=Array.isArray(e)?void 0:e.accelerate;return a&&!a.isTransformed&&typeof t!="function"&&Array.isArray(n)&&(r==null?void 0:r.clamp)!==!1&&(o.accelerate={...a,times:t,keyframes:n,isTransformed:!0}),o}function sp(e,t){const n=Ni(()=>[]);return P0(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Tc(e){return typeof e=="object"&&!Array.isArray(e)}function j0(e,t,n,r){return e==null?[]:typeof e=="string"&&Tc(t)?mc(e,n,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(i=>i!=null):[e]}function Cb(e,t,n){return e*(t+1)+n*t}function op(e,t,n,r){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:t.startsWith("<")?Math.max(0,n+parseFloat(t.slice(1))):r.get(t)??e}function Pb(e,t,n){for(let r=0;r<e.length;r++){const i=e[r];i.at>t&&i.at<n&&(fr(e,i),r--)}}function jb(e,t,n,r,i,s){Pb(e,i,s);for(let o=0;o<t.length;o++)e.push({value:t[o],at:J(i,s,r[o]),easing:qm(n,o)})}function Nb(e,t,n=0){const r=t+1+t*n;for(let i=0;i<e.length;i++)e[i]=e[i]/r}function Mb(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Ab="easeInOut",Lb=20;function Ib(e,{defaultTransition:t={},...n}={},r,i){const s=t.duration||.3,o=new Map,a=new Map,l={},u=new Map;let c=0,d=0,p=0;for(let v=0;v<e.length;v++){const y=e[v];if(typeof y=="string"){u.set(y,d);continue}else if(!Array.isArray(y)){u.set(y.name,op(d,y.at,c,u));continue}let[x,b,g={}]=y;g.at!==void 0&&(d=op(d,g.at,c,u));let h=0;const m=(w,S,T,C=0,k=0)=>{const E=Db(w),{delay:P=0,times:D=fg(E),type:F=t.type||"keyframes",repeat:N,repeatType:L,repeatDelay:_=0,...W}=S;let{ease:H=t.ease||"easeOut",duration:M}=S;const I=typeof P=="function"?P(C,k):P,A=E.length,R=lc(F)?F:i==null?void 0:i[F||"keyframes"];if(A<=2&&R){let q=100;if(A===2&&_b(E)){const br=E[1]-E[0];q=Math.abs(br)}const ie={...t,...W};M!==void 0&&(ie.duration=He(M));const Ct=lg(ie,q,R);H=Ct.ease,M=Ct.duration}M??(M=s);const $=d+I;D.length===1&&D[0]===0&&(D[1]=1);const O=D.length-E.length;if(O>0&&dg(D,O),E.length===1&&E.unshift(null),N&&N<Lb){const q=M>0?_/M:0;M=Cb(M,N,_);const ie=[...E],Ct=[...D];H=Array.isArray(H)?[...H]:[H];const br=[...H],Cc=L==="reverse"||L==="mirror";let Pc=ie,jc=br;Cc&&(Pc=[...ie].reverse(),L==="reverse"&&(jc=[...br].reverse().map(zt=>typeof zt=="function"?Zu(zt):zt)));for(let zt=0;zt<N;zt++){const Nc=Cc&&zt%2===0,Mc=Nc?Pc:ie,ry=Nc?jc:br,Ac=(zt+1)*(1+q);q>0&&(E.push(E[E.length-1]),D.push(Ac),H.push("linear")),E.push(...Mc);for(let kr=0;kr<Mc.length;kr++)D.push(Ct[kr]+Ac),H.push(kr===0?"linear":qm(ry,kr-1))}Nb(D,N,q)}const U=$+M;jb(T,E,H,D,$,U),h=Math.max(I+M,h),p=Math.max(U,p)};if(we(x)){const w=ap(x,a);m(b,g,lp("default",w))}else{const w=j0(x,b,r,l),S=w.length;for(let T=0;T<S;T++){b=b,g=g;const C=w[T],k=ap(C,a);for(const E in b)m(b[E],Vb(g,E),lp(E,k),T,S)}}c=d,d+=h}return a.forEach((v,y)=>{for(const x in v){const b=v[x];b.sort(Mb);const g=[],h=[],m=[];for(let C=0;C<b.length;C++){const{at:k,value:E,easing:P}=b[C];g.push(E),h.push(pr(0,p,k)),m.push(P||"easeOut")}h[0]!==0&&(h.unshift(0),g.unshift(g[0]),m.unshift(Ab)),h[h.length-1]!==1&&(h.push(1),g.push(null)),o.has(y)||o.set(y,{keyframes:{},transition:{}});const w=o.get(y);w.keyframes[x]=g;const{type:S,...T}=t;w.transition[x]={...T,duration:p,ease:m,times:h,...n}}}),o}function ap(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function lp(e,t){return t[e]||(t[e]=[]),t[e]}function Db(e){return Array.isArray(e)?e:[e]}function Vb(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Rb=e=>typeof e=="number",_b=e=>e.every(Rb);function Ob(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Ao(e)&&!_g(e)?new e0(t):new Xg(t);n.mount(e),wi.set(e,n)}function zb(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new hS(t);n.mount(e),wi.set(e,n)}function Fb(e,t){return we(e)||typeof e=="number"||typeof e=="string"&&!Tc(t)}function N0(e,t,n,r){const i=[];if(Fb(e,t))i.push(l0(e,Tc(t)&&t.default||t,n&&(n.default||n)));else{if(e==null)return i;const s=j0(e,t,r),o=s.length;for(let a=0;a<o;a++){const l=s[a],u=l instanceof Element?Ob:zb;wi.has(l)||u(l);const c=wi.get(l),d={...n};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(a,o)),i.push(...pc(c,{...t,transition:d},{}))}}return i}function Bb(e,t,n){const r=[],i=e.map(o=>{if(Array.isArray(o)&&typeof o[0]=="function"){const a=o[0],l=ln(0);return l.on("change",a),o.length===1?[l,[0,1]]:o.length===2?[l,[0,1],o[1]]:[l,o[1],o[2]]}return o});return Ib(i,t,n,{spring:xi}).forEach(({keyframes:o,transition:a},l)=>{r.push(...N0(l,o,a))}),r}function $b(e){return Array.isArray(e)&&e.some(Array.isArray)}function Wb(e={}){const{scope:t,reduceMotion:n,skipAnimations:r}=e;function i(s,o,a){let l=[],u;const c={};if(n!==void 0&&(c.reduceMotion=n),r!==void 0&&(c.skipAnimations=r),$b(s)){const{onComplete:p,...v}=o||{};typeof p=="function"&&(u=p),l=Bb(s,{...c,...v},t)}else{const{onComplete:p,...v}=a||{};typeof p=="function"&&(u=p),l=N0(s,o,{...c,...v},t)}const d=new rw(l);return u&&d.finished.then(u),t&&(t.animations.push(d),d.finished.then(()=>{fr(t.animations,d)})),d}return i}const Hb=Wb(),Ub=[{width:110,type:"green"},{width:75,type:"light"},{width:145,type:"green"},{width:85,type:"white"},{width:120,type:"dark"},{width:95,type:"green"}];function Gb({onComplete:e}){const[t,n]=ae.useState(!0);return ae.useEffect(()=>{document.body.style.overflow="hidden";const r=setTimeout(()=>{n(!1),setTimeout(()=>{document.body.style.overflow="",e==null||e()},650)},4700);return()=>{clearTimeout(r),document.body.style.overflow=""}},[e]),typeof document>"u"?null:Vm.createPortal(f.jsx(io,{children:t&&f.jsxs(G.div,{className:"eb-preloader-screen",style:{position:"fixed",inset:0,width:"100vw",height:"100vh",minWidth:"100vw",minHeight:"100vh",backgroundColor:"#F6F7F1",zIndex:2147483647,overflow:"hidden"},initial:{opacity:1},exit:{opacity:0,transition:{duration:.65,ease:[.76,0,.24,1]}},children:[f.jsx("div",{className:"eb-bg-glow eb-bg-glow-left"}),f.jsx("div",{className:"eb-bg-glow eb-bg-glow-right"}),f.jsxs(G.div,{className:"eb-loading-text",initial:{opacity:0,y:-12},animate:{opacity:1,y:0},transition:{duration:.55},children:["EDITING",f.jsx("span",{children:"..."})]}),f.jsxs("div",{className:"eb-stage",children:[f.jsx(G.div,{className:"eb-logo-wrapper",initial:{opacity:0,scale:.65,y:25},animate:{opacity:1,scale:1,y:0},transition:{duration:.9,ease:[.22,1,.36,1]},children:f.jsx("img",{src:"/images/logo.png",alt:"Editor Bhai",className:"eb-logo"})}),f.jsx(G.div,{className:"eb-editor-area",initial:{opacity:0,y:30,scale:.94},animate:{opacity:1,y:0,scale:1},transition:{delay:.55,duration:.75,ease:[.22,1,.36,1]},children:f.jsxs("div",{className:"eb-timeline",children:[f.jsx("div",{className:"eb-ruler",children:Array.from({length:25}).map((r,i)=>f.jsx("span",{},i))}),f.jsxs("div",{className:"eb-track",children:[Ub.map((r,i)=>f.jsx(G.div,{className:`eb-clip eb-clip-${r.type}`,style:{width:r.width},initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{delay:.8+i*.1,duration:.42,ease:[.22,1,.36,1]},children:f.jsx("span",{className:"eb-clip-inner"})},i)),f.jsxs(G.div,{className:"eb-playhead",initial:{left:"5%"},animate:{left:["5%","27%","49%","71%","94%"]},transition:{delay:1.15,duration:2,ease:"linear"},children:[f.jsx("div",{className:"eb-playhead-marker"}),f.jsx("div",{className:"eb-playhead-line"}),f.jsx("div",{className:"eb-playhead-dot"})]}),f.jsx(G.span,{className:"eb-cut cut-one",initial:{opacity:0,scaleY:0},animate:{opacity:1,scaleY:1},transition:{delay:1.55,duration:.25}}),f.jsx(G.span,{className:"eb-cut cut-two",initial:{opacity:0,scaleY:0},animate:{opacity:1,scaleY:1},transition:{delay:1.9,duration:.25}}),f.jsx(G.span,{className:"eb-cut cut-three",initial:{opacity:0,scaleY:0},animate:{opacity:1,scaleY:1},transition:{delay:2.2,duration:.25}})]}),f.jsx("div",{className:"eb-waveform",children:Array.from({length:85}).map((r,i)=>f.jsx(G.span,{initial:{height:4},animate:{height:`${7+i*17%20}px`},transition:{delay:1+i*.008,duration:.3}},i))})]})}),f.jsxs(G.div,{className:"eb-branding",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{delay:2.8,duration:.7,ease:[.22,1,.36,1]},children:[f.jsxs("div",{className:"eb-brand-name",children:["EDITOR ",f.jsx("span",{children:"BHAI"})]}),f.jsxs("div",{className:"eb-tagline",children:[f.jsx("i",{}),"WE EDIT STORIES THAT CONNECT",f.jsx("i",{})]})]})]}),f.jsx("div",{className:"eb-particles",children:Array.from({length:26}).map((r,i)=>f.jsx(G.span,{initial:{opacity:0,x:i%2===0?-(150+i*8):150+i*8,y:(i-13)*12,scale:.5},animate:{opacity:[0,.8,0],x:0,y:0,scale:[.5,1,0]},transition:{delay:2.65+i*.025,duration:.8,ease:"easeInOut"}},i))}),f.jsx(G.div,{className:"eb-transition-line",initial:{scaleX:0},animate:{scaleX:1},transition:{delay:4.05,duration:.55,ease:[.76,0,.24,1]}})]})}),document.body)}/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=e=>{const t=Kb(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ea={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},qb=j.createContext({}),Qb=()=>j.useContext(qb),Zb=j.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>{const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d=!1,color:p="currentColor",className:v=""}=Qb()??{},y=r??d?Number(n??c)*24/Number(t??u):n??c;return j.createElement("svg",{ref:l,...Ea,width:t??u??Ea.width,height:t??u??Ea.height,stroke:e??p,strokeWidth:y,className:M0("lucide",v,i),...!s&&!Xb(a)&&{"aria-hidden":"true"},...a},[...o.map(([x,b])=>j.createElement(x,b)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,t)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(Zb,{ref:s,iconNode:t,className:M0(`lucide-${Yb(up(e))}`,`lucide-${e}`,r),...i}));return n.displayName=up(e),n};/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],oo=Z("arrow-right",Jb);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],tk=Z("arrow-up-right",ek);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],rk=Z("award",nk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],A0=Z("calendar-check-2",ik);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ok=Z("camera",sk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],lk=Z("chevron-left",ak);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ck=Z("chevron-right",uk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],L0=Z("circle-check",dk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],pk=Z("code-xml",fk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mk=Z("earth",hk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yk=Z("external-link",gk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],xk=Z("film",vk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],I0=Z("globe",wk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],bk=Z("image",Sk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Tk=Z("mail",kk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xl=Z("map-pin",Ek);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Pk=Z("menu",Ck);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],mr=Z("message-circle",jk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Mk=Z("palette",Nk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ql=Z("phone",Ak);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],D0=Z("play",Lk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Dk=Z("sparkles",Ik);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Rk=Z("target",Vk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],V0=Z("trending-up",_k);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],zk=Z("trophy",Ok);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],R0=Z("user-check",Fk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],$k=Z("users",Bk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_0=Z("x",Wk);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],O0=Z("zap",Hk),oe={name:"Editor Bhai",realName:"Abhishek Gupta",title:" Leading global marketing agency",locations:["France","Canada","Oman","Noida","Bangalore","Mumbai"],whatsappLink:"https://wa.me/918840824774",linkedinLink:"https://www.linkedin.com/in/abhishek-gupta5m/?skipRedirect=true",phoneLink:"tel:+918840824774",email:"abisek951951@gmail.com",googleFormUrl:"https://forms.gle/Buw2szqpsUAwmz3t7"},Uk=[{id:1,image:"/images/hero-1.jpeg"},{id:2,image:"/images/hero-5.jpeg"},{id:3,image:"/images/hero-3.jpeg"},{id:4,image:"/images/hero-6.jpeg"}],Gk=[{title:"Video Editing",desc:"Retention-first cuts for reels, long-form and podcasts.",icon:"film"},{title:"Motion Graphics",desc:"Kinetic titles, lower-thirds and animated brand elements.",icon:"sparkles"},{title:"Color Grading",desc:"Cinematic tone and consistency across every upload.",icon:"palette"},{title:"Thumbnail Design",desc:"High-CTR thumbnails built to stop the scroll.",icon:"image"},{title:"Shoot",desc:"On-location shoots planned and directed end to end.",icon:"camera"},{title:"Digital Marketing",desc:"Growth strategy tuned for creators and spiritual brands.",icon:"trend"},{title:"Web Development",desc:"Fast, modern portfolio and landing sites for creators.",icon:"code"},{title:"SEO",desc:"Positioning, voice and visual identity that stick.",icon:"target"}],cp=["J&C","ॐ नमः शिवाय","Yash Yoga","J&C Language School","Parakh Om Bhatt","Amit Bhadana","Abhishek Kar","Vishal B Malkan","Abhishek Singh","Sri Sri Ravi Shankar","Renuka Goswami","Ramesh bhai Oza"],Ts=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Clients",href:"#clients"},{label:"Testimonials",href:"#testimonials"},{label:"Contact",href:"#contact"}];function Yk(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[i,s]=j.useState("#home");j.useEffect(()=>{const a=()=>t(window.scrollY>30);return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),j.useEffect(()=>{const a=Ts.map(u=>document.querySelector(u.href)).filter(Boolean);if(!a.length)return;const l=new IntersectionObserver(u=>{u.forEach(c=>{c.isIntersecting&&s(`#${c.target.id}`)})},{rootMargin:"-45% 0px -45% 0px"});return a.forEach(u=>l.observe(u)),()=>l.disconnect()},[]);const o=a=>{var l;r(!1),(l=document.querySelector(a))==null||l.scrollIntoView({behavior:"smooth"})};return f.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e?"bg-white/85 backdrop-blur-xl border-b border-gray-100 shadow-lg":"bg-transparent"}`,children:[f.jsxs("nav",{className:"max-w-7xl mx-auto h-[74px] px-6 lg:px-10 flex items-center justify-between",children:[f.jsxs("a",{href:"#home",onClick:a=>{a.preventDefault(),o("#home")},className:"font-display font-black text-2xl tracking-tight",children:[f.jsx("span",{className:"text-charcoal",children:"EDITOR"})," ",f.jsx("span",{className:"text-mint-500",children:"BHAI"})]}),f.jsx("ul",{className:"hidden lg:flex items-center gap-8",children:Ts.map(a=>f.jsxs("li",{className:"relative",children:[f.jsx("a",{href:a.href,onClick:l=>{l.preventDefault(),o(a.href)},className:`text-[15px] font-medium transition-colors duration-300 ${i===a.href?"text-mint-600":"text-charcoal-light hover:text-charcoal"}`,children:a.label}),i===a.href&&f.jsx(G.span,{layoutId:"navbar-indicator",className:"absolute left-0 right-0 -bottom-2 h-[3px] rounded-full bg-mint-500",transition:{type:"spring",stiffness:450,damping:35}})]},a.href))}),f.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[f.jsxs("a",{href:oe.googleFormUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-mint-600 hover:scale-105",children:["Let's Talk",f.jsx(oo,{className:"w-4 h-4"})]}),f.jsxs("a",{href:oe.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 border border-mint-300 text-mint-700 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-mint-500 hover:text-white hover:border-mint-500",children:[f.jsx(mr,{className:"w-4 h-4"}),"WhatsApp"]}),f.jsxs("a",{href:oe.phoneLink,className:"inline-flex items-center gap-2 border border-gray-300 text-charcoal px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-charcoal hover:text-white",children:[f.jsx(ql,{className:"w-4 h-4"}),"Call"]})]}),f.jsx("button",{onClick:()=>r(!n),className:"lg:hidden w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center",children:n?f.jsx(_0,{size:22}):f.jsx(Pk,{size:22})})]}),f.jsx(io,{children:n&&f.jsx(G.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.25},className:"lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg",children:f.jsxs("ul",{className:"py-5",children:[Ts.map(a=>f.jsx("li",{children:f.jsx("a",{href:a.href,onClick:l=>{l.preventDefault(),o(a.href)},className:`block px-6 py-3 transition-colors ${i===a.href?"text-mint-600 font-semibold":"text-charcoal hover:text-mint-600"}`,children:a.label})},a.href)),f.jsxs("div",{className:"px-6 pt-5 space-y-3",children:[f.jsxs("a",{href:oe.googleFormUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!1),className:"flex items-center justify-center gap-2 bg-charcoal text-white py-3 rounded-full font-semibold hover:bg-mint-600 transition-all duration-300",children:["Let's Talk",f.jsx(oo,{className:"w-4 h-4"})]}),f.jsxs("a",{href:oe.whatsappLink,target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!1),className:"flex items-center justify-center gap-2 border border-mint-300 text-mint-700 py-3 rounded-full font-semibold hover:bg-mint-500 hover:text-white hover:border-mint-500 transition-all duration-300",children:[f.jsx(mr,{className:"w-4 h-4"}),"WhatsApp"]}),f.jsxs("a",{href:oe.phoneLink,onClick:()=>r(!1),className:"flex items-center justify-center gap-2 border border-gray-300 text-charcoal py-3 rounded-full font-semibold hover:bg-charcoal hover:text-white transition-all duration-300",children:[f.jsx(ql,{className:"w-4 h-4"}),"Call"]})]})]})})})]})}function Y({children:e,delay:t=0,y:n=28,duration:r=.6,className:i="",as:s="div",...o}){const a=G[s]||G.div;return f.jsx(a,{initial:{opacity:0,y:n},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:r,delay:t,ease:[.22,1,.36,1]},className:i,...o,children:e})}function Kk(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function Xk(e){Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function z0(e,t=0){return setTimeout(e,t)}function ao(){return Date.now()}function qk(e){return window.getComputedStyle(e,null)}function Qk(e,t="x"){const n=qk(e),r=n.transform||n.webkitTransform;if(!r||r==="none")return 0;const i=new DOMMatrixReadOnly(r);return t==="x"?i.m41:i.m42}function rs(e){return typeof e=="object"&&e!==null&&e.constructor===Object&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Zk(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement?!0:!!e&&typeof e=="object"&&(e.nodeType===1||e.nodeType===11)}function Ge(e,...t){const n=Object(e);for(let r=0;r<t.length;r+=1){const i=t[r];if(i==null||Zk(i))continue;const s=i,o=Object.keys(Object(s)).filter(a=>a!=="__proto__"&&a!=="constructor"&&a!=="prototype");for(const a of o){const l=Object.getOwnPropertyDescriptor(s,a);if(!l||!l.enumerable)continue;const u=s[a];rs(n[a])&&rs(u)?u.__swiper__?n[a]=u:Ge(n[a],u):!rs(n[a])&&rs(u)?(n[a]={},u.__swiper__?n[a]=u:Ge(n[a],u)):n[a]=u}}return n}function Dn(e,t,n){e.style.setProperty(t,n)}function St(e,t=""){const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function Jk(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}return!1}function eT(e,t){let n=t.contains(e);return!n&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||(n=Jk(e,t))),n}function lo(e){try{console.warn(e)}catch{}}function uo(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Kk(t)),n}function tT(e,t){const n=[];let r=e.previousElementSibling;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.previousElementSibling;return n}function nT(e,t){const n=[];let r=e.nextElementSibling;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.nextElementSibling;return n}function Xt(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}function co(e){if(!(!e||!e.parentNode))return[...e.parentNode.children].indexOf(e)}function F0(e,t){const n=[];let r=e.parentElement;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.parentElement;return n}function Ql(e,t,n){{const r=window.getComputedStyle(e,null);return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}}function Se(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ki(e,t=""){const n=globalThis.trustedTypes;typeof n<"u"?e.innerHTML=n.createPolicy("html",{createHTML:r=>r}).createHTML(t):e.innerHTML=t}const B0=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function pe(e){if(typeof e!="object"||e===null)return!1;const t=e;return!!t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function ir(e,t){const n=["__proto__","constructor","prototype"],r=e,i=t;return Object.keys(i).filter(s=>n.indexOf(s)<0).forEach(s=>{const o=i[s],a=r[s];typeof a>"u"?r[s]=o:pe(o)&&pe(a)&&Object.keys(o).length>0?o.__swiper__?r[s]=o:ir(a,o):r[s]=o}),e}function $0(e={}){const t=e.navigation;return t?t===!0?!0:typeof t.nextEl>"u"&&typeof t.prevEl>"u":!1}function W0(e={}){const t=e.pagination;return t?t===!0?!0:typeof t.el>"u":!1}function H0(e={}){const t=e.scrollbar;return t?t===!0?!0:typeof t.el>"u":!1}function U0(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function rT(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function iT(e){var M,I;let{nextEl:t,prevEl:n,scrollbarEl:r,paginationEl:i}=e;const{swiper:s,slides:o,passedParams:a,changedParams:l}=e,u=l.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:c,pagination:d,navigation:p,scrollbar:v,virtual:y,thumbs:x}=s,b=a,g=c;let h,m,w,S,T,C,k,E;const P=b.thumbs,D=g.thumbs;l.includes("thumbs")&&pe(P)&&P.swiper&&!P.swiper.destroyed&&pe(D)&&(!D.swiper||D.swiper.destroyed)&&(h=!0);const F=b.controller,N=g.controller;l.includes("controller")&&pe(F)&&F.control&&pe(N)&&!N.control&&(m=!0);const L=b.pagination;l.includes("pagination")&&pe(L)&&(L.el||i)&&(g.pagination||g.pagination===!1)&&d&&!d.el&&(w=!0);const _=b.scrollbar;l.includes("scrollbar")&&pe(_)&&(_.el||r)&&(g.scrollbar||g.scrollbar===!1)&&v&&!v.el&&(S=!0);const W=b.navigation;l.includes("navigation")&&pe(W)&&(W.prevEl||n)&&(W.nextEl||t)&&(g.navigation||g.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(T=!0);const H=A=>{var U,q,ie;const R=s[A];if(!R)return;R.destroy();const $=g[A],O=pe($)?$:void 0;A==="navigation"?(s.isElement&&((U=R.prevEl)==null||U.remove(),(q=R.nextEl)==null||q.remove()),O&&(O.prevEl=void 0,O.nextEl=void 0),R.prevEl=void 0,R.nextEl=void 0):(s.isElement&&((ie=R.el)==null||ie.remove()),O&&(O.el=void 0),R.el=void 0)};if(l.includes("loop")&&s.isElement&&(c.loop&&!a.loop?C=!0:!c.loop&&a.loop?k=!0:E=!0),u.forEach(A=>{const R=g[A],$=b[A];pe(R)&&pe($)?(Object.assign(R,$),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in $&&!$.enabled&&H(A)):($===!0||$===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?$===!1&&H(A):g[A]=$}),u.includes("controller")&&!m&&s.controller&&s.controller.control&&pe(N)&&N.control&&(s.controller.control=N.control),l.includes("children")&&o&&y&&((M=c.virtual)!=null&&M.enabled)?(y.slides=o,y.update(!0)):l.includes("virtual")&&y&&((I=c.virtual)!=null&&I.enabled)&&(o&&(y.slides=o),y.update(!0)),l.includes("children")&&o&&c.loop&&(E=!0),h&&x&&x.init()&&x.update(!0),m&&s.controller&&pe(N)&&(s.controller.control=N.control),w&&d){if(s.isElement&&(!i||typeof i=="string")){const R=document.createElement("div");R.classList.add("swiper-pagination"),R.part.add("pagination"),s.el.appendChild(R),i=R}const A=g.pagination;i&&pe(A)&&(A.el=i),d.init(),d.render(),d.update()}if(S&&v){if(s.isElement&&(!r||typeof r=="string")){const R=document.createElement("div");R.classList.add("swiper-scrollbar"),R.part.add("scrollbar"),s.el.appendChild(R),r=R}const A=g.scrollbar;r&&pe(A)&&(A.el=r),v.init(),v.updateSize(),v.setTranslate()}if(T&&p){if(s.isElement){if(!t||typeof t=="string"){const R=document.createElement("div");R.classList.add("swiper-button-next"),ki(R,p.arrowSvg),R.part.add("button-next"),s.el.appendChild(R),t=R}if(!n||typeof n=="string"){const R=document.createElement("div");R.classList.add("swiper-button-prev"),ki(R,p.arrowSvg),R.part.add("button-prev"),s.el.appendChild(R),n=R}}const A=g.navigation;t&&pe(A)&&(A.nextEl=t),n&&pe(A)&&(A.prevEl=n),p.init(),p.update()}l.includes("allowSlideNext")&&(s.allowSlideNext=b.allowSlideNext),l.includes("allowSlidePrev")&&(s.allowSlidePrev=b.allowSlidePrev),l.includes("direction")&&s.changeDirection(b.direction,!1),(C||E)&&s.loopDestroy(),(k||E)&&s.loopCreate(),s.update()}let Ca;function sT(){return typeof window>"u"?{touch:!1}:{touch:"ontouchstart"in window||navigator.maxTouchPoints>0}}function G0(){return Ca||(Ca=sT()),Ca}let Pa;function oT({userAgent:e}={}){if(typeof window>"u")return{ios:!1,android:!1};const t=G0(),n=navigator.platform,r=e||navigator.userAgent,i={ios:!1,android:!1},s=/(Android);?[\s/]+([\d.]+)?/.test(r),o=/(iPhone\sOS|iOS|iPod)/.test(r),a=/iPad/.test(r),l=n==="MacIntel"&&t.touch&&navigator.maxTouchPoints>1,u=a||l;return s&&!(n==="Win32")&&(i.os="android",i.android=!0),(u||o)&&(i.os="ios",i.ios=!0),i}function Y0(e={}){return Pa||(Pa=oT(e)),Pa}let ja;function aT(){if(typeof window>"u")return{isSafari:!1,isWebView:!1,need3dFix:!1};const e=Y0(),t=navigator.userAgent,n=t.toLowerCase(),r=n.includes("safari")&&!n.includes("chrome")&&!n.includes("android"),i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t),s=r||i&&e.ios;return{isSafari:r,isWebView:i,need3dFix:s}}function K0(){return ja||(ja=aT()),ja}const Es=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{if(r.shadowRoot){const s=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`);s&&!s.lazyPreloaderManaged&&s.remove()}})),i&&!i.lazyPreloaderManaged&&i.remove()}},Na=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Zl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&(e.params.grid.rows??1)>1){const o=i,a=[o-t];a.push(...Array.from({length:t}).map((l,u)=>o+r+u)),e.slides.forEach((l,u)=>{l.column!==void 0&&a.includes(l.column)&&Na(e,u)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=s+t;o+=1){const a=(o%n+n)%n;(a<i||a>s)&&Na(e,a)}else for(let o=Math.max(i-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&(o>s||o<i)&&Na(e,o)};function lT(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=t==="window"?window.innerHeight:n.clientHeight,s=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const a=parseFloat(o.substr(1));return{value:i*a,point:o}}return{value:o,point:o}});s.sort((o,a)=>parseInt(String(o.value),10)-parseInt(String(a.value),10));for(let o=0;o<s.length;o+=1){const{point:a,value:l}=s[o];t==="window"?window.matchMedia(`(min-width: ${l}px)`).matches&&(r=a):l<=n.clientWidth&&(r=a)}return r||"max"}const dp=(e,t)=>!!(e.grid&&t.grid&&t.grid.rows>1);function uT(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",a=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:document.querySelector(r.breakpointsBase),l=e.getBreakpoint(s,o,a);if(!l||e.currentBreakpoint===l)return;const u=s,d=(l in u?u[l]:void 0)||e.originalParams,p=dp(e,r),v=dp(e,d),y=e.params.grabCursor,x=d.grabCursor,b=r.enabled;p&&!v?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&v&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),y&&!x?e.unsetGrabCursor():!y&&x&&e.setGrabCursor();const g=(C,k)=>C[k];["navigation","pagination","scrollbar"].forEach(C=>{var N,L;const k=g(d,C);if(typeof k>"u")return;const E=g(r,C),P=typeof E=="object"&&E!==null&&E.enabled,D=typeof k=="object"&&k!==null&&k.enabled,F=e[C];P&&!D&&((N=F==null?void 0:F.disable)==null||N.call(F)),!P&&D&&((L=F==null?void 0:F.enable)==null||L.call(F))});const h=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||h),w=r.loop;h&&n&&e.changeDirection(),Ge(e.params,d);const S=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),b&&!S?e.disable():!b&&S&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&T?(e.loopCreate(t),e.updateSlides()):w&&!T&&e.loopDestroy()),e.emit("breakpoint",d)}var cT={setBreakpoint:uT,getBreakpoint:lT};function dT(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var fT={checkOverflow:dT};function pT(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function hT(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=pT(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function mT(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var gT={addClasses:hT,removeClasses:mT};const Ec={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};var yT={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=function(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)};return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0]))n=e[0],r=e.slice(1,e.length),i=t;else{const o=e[0];n=o.events,r=o.data??[],i=o.context||t}return r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(a=>{a.apply(i,[o,...r])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(a=>{a.apply(i,r)})}),t}};function vT(e){const t=this;t.destroyed||t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function xT(){const e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}function wT(e){const t=this;t.destroyed||(Es(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update())}function ST(){var l;const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&((l=e.params.virtual)==null?void 0:l.enabled);e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;if((t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a){const u=o?e.virtual.slides.length:e.slides.length;e.slideTo(u-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);if(e.autoplay&&e.autoplay.running&&e.autoplay.paused){const u=e.autoplay;clearTimeout(u.resizeTimeout),u.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)}e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function bT(){const e=this;if(e.destroyed)return;const{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function kT(e){var w;const t=this;if(t.destroyed)return;const n=t.touchEventsData;let r=e.originalEvent??e;if(r.type==="touchend"||r.type==="touchcancel"){const T=[...r.changedTouches].find(C=>C.identifier===n.touchId);if(!T||T.identifier!==n.touchId)return}else if(n.touchId!==null||r.pointerId!==n.pointerId)return;if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:o,rtlTranslate:a,slidesGrid:l,enabled:u}=t;if(!u||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=ao(),d=c-n.touchStartTime;if(t.allowClick){const S=r.path??(r.composedPath&&r.composedPath());t.updateClickedSlide(S&&S[0],S),t.emit("tap click",r),d<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=ao(),z0(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(s.followFinger?p=a?t.translate:-t.translate:p=-(n.currentTranslate??0),s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const v=p>=-t.maxTranslate()&&!t.params.loop;let y=0,x=t.slidesSizesGrid[0];for(let S=0;S<l.length;S+=S<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=S<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof l[S+T]<"u"?(v||p>=l[S]&&p<l[S+T])&&(y=S,x=l[S+T]-l[S]):(v||p>=l[S])&&(y=S,x=l[l.length-1]-l[l.length-2])}let b=null,g=null;s.rewind&&(t.isBeginning?g=(w=s.virtual)!=null&&w.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(b=0));const h=(p-l[y])/x,m=y<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(d>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?b:y+m):t.slideTo(y)),t.swipeDirection==="prev"&&(h>1-s.longSwipesRatio?t.slideTo(y+m):g!==null&&h<0&&Math.abs(h)>s.longSwipesRatio?t.slideTo(g):t.slideTo(y))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+m):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(b!==null?b:y+m),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:y))}}function TT(e){const t=this;if(t.destroyed)return;const n=t.touchEventsData,{params:r,touches:i,rtlTranslate:s,enabled:o}=t;if(!o||!r.simulateTouch&&e.pointerType==="mouse")return;const a=e,l=a.originalEvent??a;if(l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let u;if(l.type==="touchmove"){const C=[...l.changedTouches].find(k=>k.identifier===n.touchId);if(!C||C.identifier!==n.touchId)return;u=C}else u=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const c=u.pageX,d=u.pageY;if(l.preventedByNestedSwiper){i.startX=c,i.startY=d;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(i,{startX:c,startY:d,currentX:c,currentY:d}),n.touchStartTime=ao());return}if(r.touchReleaseOnEdges&&!r.loop)if(t.isVertical()){if(d<i.startY&&t.translate<=t.maxTranslate()||d>i.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(s&&(c>i.startX&&-t.translate<=t.maxTranslate()||c<i.startX&&-t.translate>=t.minTranslate()))return;if(!s&&(c<i.startX&&t.translate<=t.maxTranslate()||c>i.startX&&t.translate>=t.minTranslate()))return}if(document.activeElement&&document.activeElement.matches(n.focusableElements)&&document.activeElement!==l.target&&l.pointerType!=="mouse"&&document.activeElement.blur(),document.activeElement&&l.target===document.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=c,i.currentY=d;const p=i.currentX-i.startX,v=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(p**2+v**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let T;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?n.isScrolling=!1:p*p+v*v>=25&&(T=Math.atan2(Math.abs(v),Math.abs(p))*180/Math.PI,n.isScrolling=t.isHorizontal()?T>r.touchAngle:90-T>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let y=t.isHorizontal()?p:v,x=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;r.oneWayMovement&&(y=Math.abs(y)*(s?1:-1),x=Math.abs(x)*(s?1:-1)),i.diff=y,y*=r.touchRatio,s&&(y=-y,x=-x);const b=t.touchesDirection;t.swipeDirection=y>0?"prev":"next",t.touchesDirection=x>0?"prev":"next";const g=t.params.loop&&!r.cssMode,h=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(g&&h&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&b!==t.touchesDirection&&g&&h&&Math.abs(y)>=1){Object.assign(i,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0;const m=n.startTranslate??0;n.currentTranslate=y+m;let w=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),y>0?(g&&h&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(w=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+m+y)**S))):y<0&&(g&&h&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(String(r.slidesPerView))))}),n.currentTranslate<t.maxTranslate()&&(w=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-m-y)**S))),w&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&(n.currentTranslate??0)<m&&(n.currentTranslate=m),!t.allowSlidePrev&&t.swipeDirection==="prev"&&(n.currentTranslate??0)>m&&(n.currentTranslate=m),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=m),r.threshold>0)if(Math.abs(y)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,n.currentTranslate=n.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate??0))}function ET(e,t){function n(r){if(!r||r===document||r===window)return null;let i=r;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(e);if(!s&&!i.getRootNode)return null;const o=i.getRootNode();return s||n(o.host)}return n(t)}function fp(e,t,n){const{params:r}=e,i=r.edgeSwipeDetection,s=r.edgeSwipeThreshold;return i&&(n<=s||n>=window.innerWidth-s)?i==="prevent"?(t.preventDefault(),!0):!1:!0}function CT(e){const t=this;if(t.destroyed)return;const n=e.originalEvent??e,r=t.touchEventsData;if(n.type==="pointerdown"){const h=n;if(r.pointerId!==null&&r.pointerId!==h.pointerId)return;r.pointerId=h.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){fp(t,n,n.targetTouches[0].pageX);return}const{params:i,touches:s,enabled:o}=t;if(!o||!i.simulateTouch&&n.pointerType==="mouse"||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let a=n.target;if(i.touchEventsTarget==="wrapper"&&!eT(a,t.wrapperEl))return;const l=n;if(typeof l.which=="number"&&l.which===3||typeof l.button=="number"&&l.button>0||r.isTouched&&r.isMoved)return;const u=!!i.noSwipingClass&&i.noSwipingClass!=="",c=n.composedPath?n.composedPath():n.path;u&&n.target&&n.target.shadowRoot&&c&&(a=c[0]);const d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(i.noSwiping&&(p?ET(d,a):a.closest(d))){t.allowClick=!0;return}if(i.swipeHandler&&typeof i.swipeHandler=="string"&&!a.closest(i.swipeHandler))return;const v=n;s.currentX=v.pageX,s.currentY=v.pageY;const y=s.currentX,x=s.currentY;if(!fp(t,n,y))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=y,s.startY=x,r.touchStartTime=ao(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(r.allowThresholdMove=!1);let b=!0;a.matches(r.focusableElements)&&(b=!1,a.nodeName==="SELECT"&&(r.isTouched=!1)),document.activeElement&&document.activeElement.matches(r.focusableElements)&&document.activeElement!==a&&(v.pointerType==="mouse"||v.pointerType!=="mouse"&&!a.matches(r.focusableElements))&&document.activeElement.blur();const g=b&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||g)&&!a.isContentEditable&&n.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",n)}const X0=(e,t)=>{const{params:n,el:r,wrapperEl:i,device:s}=e,o=!!n.nested,a=t==="on"?"addEventListener":"removeEventListener",l=t;if(!r||typeof r=="string")return;document[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),r[a]("touchstart",e.onTouchStart,{passive:!1}),r[a]("pointerdown",e.onTouchStart,{passive:!1}),document[a]("touchmove",e.onTouchMove,{passive:!1,capture:o}),document[a]("pointermove",e.onTouchMove,{passive:!1,capture:o}),document[a]("touchend",e.onTouchEnd,{passive:!0}),document[a]("pointerup",e.onTouchEnd,{passive:!0}),document[a]("pointercancel",e.onTouchEnd,{passive:!0}),document[a]("touchcancel",e.onTouchEnd,{passive:!0}),document[a]("pointerout",e.onTouchEnd,{passive:!0}),document[a]("pointerleave",e.onTouchEnd,{passive:!0}),document[a]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[a]("click",e.onClick,!0),n.cssMode&&i[a]("scroll",e.onScroll);const u=c=>{e[l](c,ST,!0)};n.updateOnWindowResize?u(s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate"):u("observerUpdate"),r[a]("load",e.onLoad,{capture:!0})};function PT(){const e=this,{params:t}=e;e.onTouchStart=CT.bind(e),e.onTouchMove=TT.bind(e),e.onTouchEnd=kT.bind(e),e.onDocumentTouchStart=xT.bind(e),t.cssMode&&(e.onScroll=bT.bind(e)),e.onClick=vT.bind(e),e.onLoad=wT.bind(e),X0(e,"on")}function jT(){X0(this,"off")}var NT={attachEvents:PT,detachEvents:jT};function MT(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function AT(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var LT={setGrabCursor:MT,unsetGrabCursor:AT};function IT(e,t){var v;const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&((v=n.params.virtual)!=null&&v.enabled))return;const s=()=>{St(i,`.${r.slideClass}, swiper-slide`).forEach((x,b)=>{x.setAttribute("data-swiper-slide-index",String(b))})},o=()=>{const y=St(i,`.${r.slideBlankClass}`);y.forEach(x=>{x.remove()}),y.length>0&&(n.recalcSlides(),n.updateSlides())},a=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||a)&&o();const l=r.slidesPerGroup*(a?r.grid.rows:1),u=n.slides.length%l!==0,c=a&&n.slides.length%r.grid.rows!==0,d=y=>{for(let x=0;x<y;x+=1){const b=n.isElement?uo("swiper-slide",[r.slideBlankClass]):uo("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(b)}};if(u){if(r.loopAddBlankSlides){const y=l-n.slides.length%l;d(y),n.recalcSlides(),n.updateSlides()}else lo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(c){if(r.loopAddBlankSlides){const y=r.grid.rows-n.slides.length%r.grid.rows;d(y),n.recalcSlides(),n.updateSlides()}else lo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();const p=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function DT(){var i;const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&((i=e.params.virtual)!=null&&i.enabled))return;e.recalcSlides();const r=[];e.slides.forEach(s=>{const o=s,a=typeof o.swiperSlideIndex>"u"?Number(s.getAttribute("data-swiper-slide-index")):o.swiperSlideIndex;r[a]=s}),e.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),r.forEach(s=>{n.append(s)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}function VT(e={}){var R,$;const{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,initial:o,byController:a,byMousewheel:l}=e;let u=s;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:p,allowSlideNext:v,slidesEl:y,params:x}=c,{centeredSlides:b,slidesOffsetBefore:g,slidesOffsetAfter:h,initialSlide:m}=x,w=b||!!g||!!h;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&((R=x.virtual)!=null&&R.enabled)){if(n){const O=c.virtual.slides.length,U=c.virtual.slidesBefore??0;!w&&c.snapIndex===0?c.slideTo(O,0,!1,!0):w&&c.snapIndex<x.slidesPerView?c.slideTo(O+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(U,0,!1,!0)}c.allowSlidePrev=p,c.allowSlideNext=v,c.emit("loopFix");return}let S=x.slidesPerView;S==="auto"?S=c.slidesPerViewDynamic():(S=Math.ceil(parseFloat(String(x.slidesPerView))),w&&S%2===0&&(S=S+1));const T=x.slidesPerGroupAuto?S:x.slidesPerGroup;let C=w?Math.max(T,Math.ceil(S/2)):T;C%T!==0&&(C+=T-C%T),C+=x.loopAdditionalSlides,c.loopedSlides=C;const k=c.grid&&x.grid&&x.grid.rows>1;d.length<S+C||c.params.effect==="cards"&&d.length<S+C*2?lo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&x.grid.fill==="row"&&lo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],P=[],D=k?Math.ceil(d.length/x.grid.rows):d.length,F=o&&D-m<S&&!w;let N=F?m:c.activeIndex;typeof u>"u"?u=c.getSlideIndex(d.find(O=>O.classList.contains(x.slideActiveClass))):N=u;const L=r==="next"||!r,_=r==="prev"||!r;let W=0,H=0;const I=(k?d[u].column??0:u)+(w&&typeof i>"u"?-S/2+.5:0);if(I<C){W=Math.max(C-I,T);for(let O=0;O<C-I;O+=1){const U=O-Math.floor(O/D)*D;if(k){const q=D-U-1;for(let ie=d.length-1;ie>=0;ie-=1)d[ie].column===q&&E.push(ie)}else E.push(D-U-1)}}else if(I+S>D-C){H=Math.max(I-(D-C*2),T),F&&(H=Math.max(H,S-D+m+1));for(let O=0;O<H;O+=1){const U=O-Math.floor(O/D)*D;k?d.forEach((q,ie)=>{q.column===U&&P.push(ie)}):P.push(U)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<S+C*2&&(P.includes(u)&&P.splice(P.indexOf(u),1),E.includes(u)&&E.splice(E.indexOf(u),1)),_&&E.forEach(O=>{const U=d[O];U.swiperLoopMoveDOM=!0,y.prepend(U),U.swiperLoopMoveDOM=!1}),L&&P.forEach(O=>{const U=d[O];U.swiperLoopMoveDOM=!0,y.append(U),U.swiperLoopMoveDOM=!1}),c.recalcSlides(),x.slidesPerView==="auto"?c.updateSlides():k&&(E.length>0&&_||P.length>0&&L)&&c.slides.forEach((O,U)=>{c.grid.updateSlide(U,O,c.slides)}),x.watchSlidesProgress&&c.updateSlidesOffset(),n){if(E.length>0&&_){if(typeof t>"u"){const O=c.slidesGrid[N],q=c.slidesGrid[N+W]-O;l?c.setTranslate(c.translate-q):(c.slideTo(N+Math.ceil(W),0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-q,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-q))}else if(i){const O=k?E.length/x.grid.rows:E.length;c.slideTo(c.activeIndex+O,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(P.length>0&&L)if(typeof t>"u"){const O=c.slidesGrid[N],q=c.slidesGrid[N-H]-O;l?c.setTranslate(c.translate-q):(c.slideTo(N-H,0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-q,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-q))}else{const O=k?P.length/x.grid.rows:P.length;c.slideTo(c.activeIndex-O,0,!1,!0)}}c.allowSlidePrev=p,c.allowSlideNext=v;const A=($=c.controller)==null?void 0:$.control;if(A&&!a){const O={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:u,byController:!0};Array.isArray(A)?A.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...O,slideTo:U.params.slidesPerView===x.slidesPerView?n:!1})}):A instanceof c.constructor&&A.params.loop&&A.loopFix({...O,slideTo:A.params.slidesPerView===x.slidesPerView?n:!1})}c.emit("loopFix")}var RT={loopCreate:IT,loopFix:VT,loopDestroy:DT};function _T(e,t){return function(r={}){const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ge(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Ge(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ge(t,r)}}const OT=({swiper:e,extendParams:t,on:n})=>{const r=[],i=(a,l={})=>{const u=window.MutationObserver||window.WebkitMutationObserver;if(!u)return;const c=new u(d=>{if(e.__preventObserver__)return;if(d.length===1){e.emit("observerUpdate",d[0]);return}const p=function(){e.emit("observerUpdate",d[0])};window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,0)});c.observe(a,{attributes:typeof l.attributes>"u"?!0:l.attributes,childList:e.isElement||(typeof l.childList>"u"?!0:l.childList),characterData:typeof l.characterData>"u"?!0:l.characterData}),r.push(c)},s=()=>{if(e.params.observer){if(e.params.observeParents){const a=F0(e.hostEl);for(let l=0;l<a.length;l+=1)i(a[l])}i(e.hostEl,{childList:e.params.observeSlideChildren}),i(e.wrapperEl,{attributes:!1})}},o=()=>{r.forEach(a=>{a.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",s),n("destroy",o)},zT=({swiper:e,on:t,emit:n})=>{let r=null,i=null;const s=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(u=>{i=window.requestAnimationFrame(()=>{const{width:c,height:d}=e;let p=c,v=d;u.forEach(({contentBoxSize:y,contentRect:x,target:b})=>{if(b&&b!==e.el)return;const g=Array.isArray(y)?y[0]:y;p=x?x.width:g.inlineSize,v=x?x.height:g.blockSize}),(p!==c||v!==d)&&s()})}),r.observe(e.el))},a=()=>{i&&window.cancelAnimationFrame(i),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},l=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof window.ResizeObserver<"u"){o();return}window.addEventListener("resize",s),window.addEventListener("orientationchange",l)}),t("destroy",()=>{a(),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",l)})};function FT(e,t=!0,n){var c;const r=this,{enabled:i,params:s,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,u=r.virtual&&((c=s.virtual)==null?void 0:c.enabled);if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function BT(e,t=!0,n){var h,m;const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&((h=i.virtual)==null?void 0:h.enabled);if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=a?r.translate:-r.translate;function p(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const v=p(d),y=s.map(w=>p(w)),x=i.freeMode&&i.freeMode.enabled;let b=s[y.indexOf(v)-1];if(typeof b>"u"&&(i.cssMode||x)){let w;s.forEach((S,T)=>{v>=S&&(w=T)}),typeof w<"u"&&(b=x?s[w]:s[w>0?w-1:w])}let g=0;if(typeof b<"u"&&(g=o.indexOf(b),g<0&&(g=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&r.isBeginning){const w=(m=r.params.virtual)!=null&&m.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(w,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,e,t,n)}),!0;return r.slideTo(g,e,t,n)}function $T(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function WT(e=0,t,n=!0,r,i){var C;typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:p,wrapperEl:v,enabled:y}=s;if(!y&&!r&&!i||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=s.params.speed);const x=Math.min(s.params.slidesPerGroupSkip,o);let b=x+Math.floor((o-x)/s.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const g=-l[b];if(a.normalizeSlideIndex)for(let k=0;k<u.length;k+=1){const E=-Math.floor(g*100),P=Math.floor(u[k]*100),D=Math.floor(u[k+1]*100);typeof u[k+1]<"u"?E>=P&&E<D-(D-P)/2?o=k:E>=P&&E<D&&(o=k+1):E>=P&&(o=k)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&(p?g>s.translate&&g>s.minTranslate():g<s.translate&&g<s.minTranslate())||!s.allowSlidePrev&&g>s.translate&&g>s.maxTranslate()&&(d||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(g);let h;o>d?h="next":o<d?h="prev":h="reset";const m=s.virtual&&((C=s.params.virtual)==null?void 0:C.enabled);if(!(m&&i)&&(p&&-g===s.translate||!p&&g===s.translate))return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(g),h!=="reset"&&(s.transitionStart(n,h),s.transitionEnd(n,h)),!1;if(a.cssMode){const k=s.isHorizontal(),E=p?g:-g;return t===0?(m&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),m&&!s._cssModeVirtualInitialSet&&(s.params.initialSlide??0)>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[k?"scrollLeft":"scrollTop"]=E})):v[k?"scrollLeft":"scrollTop"]=E,m&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})):v.scrollTo({[k?"left":"top"]:E,behavior:"smooth"}),!0}const T=K0().isSafari;return m&&!i&&T&&s.isElement&&s.virtual.update(!1,!1,o),s.setTransition(t),s.setTranslate(g),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,h),t===0?s.transitionEnd(n,h):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,h))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function HT(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n,clickedSlide:r,clickedIndex:i}=e;if(r===void 0||i===void 0)return;const s=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(i),a;const l=e.isElement?"swiper-slide":`.${t.slideClass}`,u=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(r.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(a):o>(u?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),o=e.getSlideIndex(St(n,`${l}[data-swiper-slide-index="${a}"]`)[0]),z0(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}function UT(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function GT(e=0,t,n=!0,r){var a;typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&((a=i.params.virtual)!=null&&a.enabled))o=o+(i.virtual.slidesBefore??0);else{let l;if(s){const b=o*i.params.grid.rows,g=i.slides.find(h=>Number(h.getAttribute("data-swiper-slide-index"))===b);l=(g==null?void 0:g.column)??0}else l=i.getSlideIndexByData(o);const u=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:p}=i.params,v=c||!!d||!!p;let y;i.params.slidesPerView==="auto"?y=i.slidesPerViewDynamic():(y=Math.ceil(parseFloat(String(i.params.slidesPerView))),v&&y%2===0&&(y=y+1));let x=u-l<y;if(v&&(x=x||l<Math.ceil(y/2)),r&&v&&i.params.slidesPerView!=="auto"&&!s&&(x=!1),x){const b=v?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:b,slideTo:!0,activeSlideIndex:b==="next"?l+1:l-u+1,slideRealIndex:b==="next"?i.realIndex:void 0})}if(s){const b=o*i.params.grid.rows,g=i.slides.find(h=>Number(h.getAttribute("data-swiper-slide-index"))===b);o=(g==null?void 0:g.column)??0}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}var YT={slideTo:WT,slideToLoop:GT,slideNext:FT,slidePrev:BT,slideReset:$T,slideToClosest:UT,slideToClickedSlide:HT};function KT(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function q0({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;o||(i>s?o="next":i<s?o="prev":o="reset"),e.emit(`transition${r}`),t&&o==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==s&&(e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function XT(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),q0({swiper:n,runCallbacks:e,direction:t,step:"End"}))}function qT(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),q0({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}var QT={setTransition:KT,transitionStart:qT,transitionEnd:XT};function ZT(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Qk(s,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function JT(){return-this.snapGrid[this.snapGrid.length-1]}function eE(){return-this.snapGrid[0]}function tE(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function nE(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,s.updateProgress(c),o.cssMode){const d=s.isHorizontal();return t===0?a[d?"scrollLeft":"scrollTop"]=-c:a.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"}),!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var rE={getTranslate:ZT,setTranslate:tE,minTranslate:eE,maxTranslate:JT,translateTo:nE};function iE(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function sE(e){var v,y;const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l=e,u;const c=x=>{const b=t.virtual.slides;let g=x-(t.virtual.slidesBefore??0);return g<0&&(g=b.length+g),g>=b.length&&(g-=b.length),g};if(typeof l>"u"&&(l=iE(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const x=Math.min(i.slidesPerGroupSkip,l);u=x+Math.floor((l-x)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===s&&!t.params.loop){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===s&&t.params.loop&&t.virtual&&((v=t.params.virtual)!=null&&v.enabled)){t.realIndex=c(l);return}const d=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&((y=i.virtual)!=null&&y.enabled))i.loop?p=c(l):p=l;else if(d){const x=t.slides.find(g=>g.column===l);let b=parseInt(x.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(x),0)),p=Math.floor(b/i.grid.rows)}else if(t.slides[l]){const x=t.slides[l].getAttribute("data-swiper-slide-index");x?p=parseInt(x,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:p,previousIndex:s,activeIndex:l}),t.initialized&&Zl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function oE(e){var a;const t=this,n=[],r=t.virtual&&((a=t.params.virtual)==null?void 0:a.enabled);let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!r)break;const u=o(l);u&&n.push(u)}else{const l=o(t.activeIndex);l&&n.push(l)}for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const l=n[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function aE(e,t){var a;const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,o;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){s=!0,o=l;break}}if(i&&s)n.clickedSlide=i,n.virtual&&((a=n.params.virtual)!=null&&a.enabled)?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}function lE(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o}=t,a=t.progressLoop;const l=s,u=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;s=c||i<=0,o=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[c],v=t.slidesGrid[d],y=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=p?a=(x-p)/y:a=(x+y-v)/y,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(l&&!s||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function uE(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Xt(r,"padding-left")||"0",10)-parseInt(Xt(r,"padding-right")||"0",10),n=n-parseInt(Xt(r,"padding-top")||"0",10)-parseInt(Xt(r,"padding-bottom")||"0",10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function cE(){var D,F;const e=this;function t(N,L){return parseFloat(N.getPropertyValue(e.getDirectionLabel(L))||"0")}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:s,wrongRTL:o}=e,a=!!(e.virtual&&((D=n.virtual)!=null&&D.enabled)),l=a?e.virtual.slides.length:e.slides.length,u=St(i,`.${e.params.slideClass}, swiper-slide`),c=a?e.virtual.slides.length:u.length;let d=[];const p=[],v=[],y=N=>typeof N=="function"?N.call(e):N,x=y(n.slidesOffsetBefore),b=y(n.slidesOffsetAfter),g=e.snapGrid.length,h=e.slidesGrid.length,m=e.size-x-b;let w=n.spaceBetween,S=-x,T=0,C=0;if(typeof m>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*m:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w-x-b,u.forEach(N=>{s?N.style.marginLeft="":N.style.marginRight="",N.style.marginBottom="",N.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Dn(r,"--swiper-centered-offset-before",""),Dn(r,"--swiper-centered-offset-after","")),n.cssMode&&(Dn(r,"--swiper-slides-offset-before",`${x}px`),Dn(r,"--swiper-slides-offset-after",`${b}px`));const k=n.grid&&n.grid.rows>1&&e.grid;k?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E=0;const P=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(N=>{const L=n.breakpoints[N];return typeof(L==null?void 0:L.slidesPerView)<"u"}).length>0;for(let N=0;N<c;N+=1){E=0;const L=u[N];if(!(L&&(k&&e.grid.updateSlide(N,L,u),Xt(L,"display")==="none"))){if(a&&n.slidesPerView==="auto")(F=n.virtual)!=null&&F.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&L&&(n.roundLengths&&(E=Math.floor(E)),L.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){P&&(L.style[e.getDirectionLabel("width")]="");const _=getComputedStyle(L),W=L.style.transform,H=L.style.webkitTransform;if(W&&(L.style.transform="none"),H&&(L.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?Ql(L,"width"):Ql(L,"height");else{const M=t(_,"width"),I=t(_,"padding-left"),A=t(_,"padding-right"),R=t(_,"margin-left"),$=t(_,"margin-right"),O=_.getPropertyValue("box-sizing");if(O&&O==="border-box")E=M+R+$;else{const{clientWidth:U,offsetWidth:q}=L;E=M+I+A+R+$+(q-U)}}W&&(L.style.transform=W),H&&(L.style.webkitTransform=H),n.roundLengths&&(E=Math.floor(E))}else E=(m-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),L&&(L.style[e.getDirectionLabel("width")]=`${E}px`);L&&(L.swiperSlideSize=E),v.push(E),n.centeredSlides?(S=S+E/2+T/2+w,T===0&&N!==0&&(S=S-m/2-w),N===0&&(S=S-m/2-w),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),C%n.slidesPerGroup===0&&d.push(S),p.push(S)):(n.roundLengths&&(S=Math.floor(S)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&d.push(S),p.push(S),S=S+E+w),e.virtualSize+=E+w,T=E,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+b,s&&o&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+w}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+w}px`),k&&e.grid.updateWrapperSize(E,d),!n.centeredSlides){const N=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,L=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||N);let _=d.length;if(L){let H;if(n.slidesPerView==="auto"){H=1;let M=0;for(let I=v.length-1;I>=0&&(M+=v[I]+(I<v.length-1?w:0),M<=m);I-=1)H=v.length-I}else H=Math.floor(n.slidesPerView);_=Math.max(c-H,0)}const W=[];for(let H=0;H<d.length;H+=1){let M=d[H];n.roundLengths&&(M=Math.floor(M)),L?H<=_&&W.push(M):d[H]<=e.virtualSize-m&&W.push(M)}d=W,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&(L||d.push(e.virtualSize-m))}if(a&&n.loop){const N=v[0]+w,L=e.virtual.slidesBefore??0,_=e.virtual.slidesAfter??0,W=L+_;if(n.slidesPerGroup>1){const H=Math.ceil(W/n.slidesPerGroup),M=N*n.slidesPerGroup;for(let I=0;I<H;I+=1)d.push(d[d.length-1]+M)}for(let H=0;H<W;H+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+N),p.push(p[p.length-1]+N),e.virtualSize+=N}if(d.length===0&&(d=[0]),w!==0){const N=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");u.filter((L,_)=>!n.cssMode||n.loop?!0:_!==u.length-1).forEach(L=>{L.style[N]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let N=0;v.forEach(_=>{N+=_+(w||0)}),N-=w;const L=N>m?N-m:0;d=d.map(_=>_<=0?-x:_>L?L+b:_)}if(n.centerInsufficientSlides){let N=0;if(v.forEach(L=>{N+=L+(w||0)}),N-=w,N<m){const L=(m-N)/2;d.forEach((_,W)=>{d[W]=_-L}),p.forEach((_,W)=>{p[W]=_+L})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:p,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Dn(r,"--swiper-centered-offset-before",`${-d[0]}px`),Dn(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const N=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(_=>_+N),e.slidesGrid=e.slidesGrid.map(_=>_+L)}if(c!==l&&e.emit("slidesLengthChange"),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const N=`${n.containerModifierClass}backface-hidden`,L=e.el.classList.contains(N);c<=n.maxBackfaceHiddenSlides?L||e.el.classList.add(N):L&&e.el.classList.remove(N)}}const Ma=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function dE(){var d;const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=!!(e.virtual&&((d=n.virtual)!=null&&d.enabled)),o=e.grid&&n.grid&&n.grid.rows>1,a=p=>St(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,c;if(s)if(n.loop){const p=e.virtual.slides;let v=i-(e.virtual.slidesBefore??0);v<0&&(v=p.length+v),v>=p.length&&(v-=p.length),l=a(`[data-swiper-slide-index="${v}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=t.find(p=>p.column===i),c=t.find(p=>p.column===i+1),u=t.find(p=>p.column===i-1)):l=t[i];l&&(o||(c=nT(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=tT(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Ma(p,p===l,n.slideActiveClass),Ma(p,p===c,n.slideNextClass),Ma(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}function fE(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const pp=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function pE(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const u=r[l];let c=u.swiperSlideOffset??0;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset??0);const d=u.swiperSlideSize??0,p=(o+(n.centeredSlides?t.minTranslate():0)-c)/(d+a),v=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(d+a),y=-(o-c),x=y+t.slidesSizesGrid[l],b=y>=0&&y<=t.size-t.slidesSizesGrid[l],g=y>=0&&y<t.size-1||x>1&&x<=t.size||y<=0&&x>=t.size;g&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l)),pp(u,g,n.slideVisibleClass),pp(u,b,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-v:v}}var hE={updateSize:uE,updateSlides:cE,updateAutoHeight:oE,updateSlidesOffset:fE,updateSlidesProgress:pE,updateProgress:lE,updateSlidesClasses:dE,updateActiveIndex:sE,updateClickedSlide:aE};const mE={eventsEmitter:yT,update:hE,translate:rE,transition:QT,slide:YT,loop:RT,grabCursor:LT,events:NT,breakpoints:cT,checkOverflow:fT,classes:gT},Jl={};var Ie;let Di=(Ie=class{constructor(...t){let n,r;if(t.length===1&&t[0]!==null&&typeof t[0]=="object"&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Ge({},r),n&&!r.el&&(r.el=n),r.el&&typeof r.el=="string"&&typeof document<"u"&&document.querySelectorAll(r.el).length>1){const a=[];return document.querySelectorAll(r.el).forEach(l=>{const u=Ge({},r,{el:l});a.push(new Ie(u))}),a}const i=this;i.__swiper__=!0,i.support=G0(),i.device=Y0({userAgent:r.userAgent??void 0}),i.browser=K0(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__||[]],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(a=>{const l=a;typeof l=="function"&&i.modules.indexOf(l)<0&&i.modules.push(l)});const s={};i.modules.forEach(a=>{a({params:r,swiper:i,extendParams:_T(r,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const o=Ge({},Ec,s);if(i.params=Ge({},o,Jl,r),i.originalParams=Ge({},i.params),i.passedParams=Ge({},r),i.params&&i.params.on){const a=i.params.on;Object.keys(a).forEach(l=>{const u=a[l];u&&i.on(l,u)})}return i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}isHorizontal(){return this.params.direction==="horizontal"}isVertical(){return this.params.direction==="vertical"}cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=St(n,`.${r.slideClass}, swiper-slide`),s=co(i[0]);return co(t)-(s??0)}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>Number(n.getAttribute("data-swiper-slide-index"))===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const{slidesEl:t,params:n}=this;this.slides=St(t,`.${n.slideClass}, swiper-slide`)}enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"))}setProgress(t,n){t=Math.min(Math.max(t,0),1);const r=this.minTranslate(),s=(this.maxTranslate()-r)*t+r;this.translateTo(s,typeof n>"u"?0:n),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){if(!this.params._emitClasses||!this.el)return;const t=this.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(this.params.containerModifierClass)===0);this.emit("_containerClasses",t.join(" "))}getSlideClasses(t){return this.destroyed?"":t.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(this.params.slideClass)===0).join(" ")}emitSlidesClasses(){if(!this.params._emitClasses||!this.el)return;const t=[];this.slides.forEach(n=>{const r=this.getSlideClasses(n);t.push({slideEl:n,classNames:r}),this.emit("_slideClass",n,r)}),this.emit("_slideClasses",t)}slidesPerViewDynamic(t="current",n=!1){const{params:r,slides:i,slidesGrid:s,slidesSizesGrid:o,size:a,activeIndex:l}=this;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(!a)return u;if(r.centeredSlides){let c=i[l]?Math.ceil(i[l].swiperSlideSize??0):0,d=!1;for(let p=l+1;p<i.length;p+=1)i[p]&&!d&&(c+=Math.ceil(i[p].swiperSlideSize??0),u+=1,c>a&&(d=!0));for(let p=l-1;p>=0;p-=1)i[p]&&!d&&(c+=i[p].swiperSlideSize??0,u+=1,c>a&&(d=!0))}else if(t==="current")for(let c=l+1;c<i.length;c+=1)(n?s[c]+o[c]-s[l]<a:s[c]-s[l]<a)&&(u+=1);else for(let c=l-1;c>=0;c-=1)s[l]-s[c]<a&&(u+=1);return u}update(){var o,a;const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&Es(t,l)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const l=t.rtlTranslate?t.translate*-1:t.translate,u=Math.min(Math.max(l,t.maxTranslate()),t.minTranslate());t.setTranslate(u),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if((o=r.freeMode)!=null&&o.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const l=t.virtual&&((a=r.virtual)!=null&&a.enabled)?t.virtual.slides.length:t.slides.length;s=t.slideTo(l-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;if(typeof document>"u")return!1;const r=t??n.params.el;let i=null;if(typeof r=="string"?i=document.querySelector(r):r instanceof HTMLElement&&(i=r),!i)return!1;i.swiper=n;const s=i.parentNode;s&&s.host&&s.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=i&&i.shadowRoot?i.shadowRoot.querySelector(o()):St(i,o())[0];!l&&n.params.createElements&&(l=uo("div",n.params.wrapperClass),i.append(l),St(i,`.${n.params.slideClass}`).forEach(c=>{l.append(c)}));const u=n.isElement?i.parentNode.host:null;return Object.assign(n,{el:i,wrapperEl:l,slidesEl:n.isElement&&!u.slideSlots?u:l,hostEl:n.isElement?u:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Xt(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Xt(i,"direction")==="rtl"),wrongRTL:Xt(l,"display")==="-webkit-box"}),!0}init(t){var s;const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&((s=n.params.virtual)!=null&&s.enabled)?n.slideTo((n.params.initialSlide??0)+(n.virtual.slidesBefore??0),0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Es(n,o):o.addEventListener("load",a=>{Es(n,a.target)})}),Zl(n),n.initialized=!0,Zl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Xk(r)),r.destroyed=!0),null}static extendDefaults(t){Ge(Jl,t)}static installModule(t){Ie.prototype.__modules__||(Ie.prototype.__modules__=[]);const n=Ie.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Ie.installModule(n)),Ie):(Ie.installModule(t),Ie)}},Ro(Ie,"extendedDefaults"),Ro(Ie,"defaults"),Ie);Object.defineProperty(Di,"extendedDefaults",{get(){return Jl}});Object.defineProperty(Di,"defaults",{get(){return Ec}});const hp=mE,gE=Di.prototype;Object.keys(hp).forEach(e=>{const t=hp[e];Object.keys(t).forEach(n=>{gE[n]=t[n]})});Di.use([zT,OT]);function yE(e,t,n,r,i){const s=[];if(!t)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return B0.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t){const u=e[l],c=t[l];if(pe(u)&&pe(c)){const d=Object.keys(u),p=Object.keys(c);d.length!==p.length?o(l):(d.forEach(v=>{u[v]!==c[v]&&o(l)}),p.forEach(v=>{u[v]!==c[v]&&o(l)}))}else u!==c&&o(l)}}),s}function vE(e={},t=!0){const n={on:{}},r={},i={};ir(n,Ec),n._emitClasses=!0,n.init=!1;const s={},o=B0.map(l=>l.replace(/_/,"")),a={...e};return Object.keys(a).forEach(l=>{const u=e[l];if(!(typeof u>"u"))if(o.indexOf(l)>=0)pe(u)?(n[l]={},i[l]={},ir(n[l],u),ir(i[l],u)):(n[l]=u,i[l]=u);else if(l.search(/on[A-Z]/)===0&&typeof u=="function"){const c=`${l[2].toLowerCase()}${l.substring(3)}`,d=u;t?r[c]=d:n.on[c]=d}else s[l]=u}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function xE(e,t){const{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:a}=e;if($0(t)&&r&&i){const l=a.params.navigation,u=a.originalParams.navigation;l.nextEl=r,u.nextEl=r,l.prevEl=i,u.prevEl=i}W0(t)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),H0(t)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}const wE=e=>{var t,n;!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&((n=(t=e.parallax).setTranslate)==null||n.call(t)))},mp=j.createContext(null),SE=j.createContext(null);function Jr(e){return typeof e=="object"&&e!==null&&"type"in e&&"props"in e}function Q0(e){if(!Jr(e))return!1;const{type:t}=e;if(typeof t!="function"&&typeof t!="object")return!1;const n=t.displayName;return!!n&&n.includes("SwiperSlide")}function Z0(e){const t=[];return ae.Children.toArray(e).forEach(n=>{Q0(n)?t.push(n):Jr(n)&&n.props&&n.props.children&&Z0(n.props.children).forEach(r=>t.push(r))}),t}function bE(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ae.Children.toArray(e).forEach(r=>{if(Q0(r))t.push(r);else if(Jr(r)&&r.props&&r.props.slot&&r.props.slot in n)n[r.props.slot].push(r);else if(Jr(r)&&r.props&&r.props.children){const i=Z0(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else Jr(r)&&n["container-end"].push(r)}),{slides:t,slots:n}}function ei(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}function kE(e,t,n){if(!n||!e)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d-=t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let c=a;c<l;c+=1)if(c>=s&&c<=o){const d=t[r(c)];d&&u.push(d)}return u.map((c,d)=>{const p=c.props.virtualIndex;return ae.cloneElement(c,{swiper:e,style:i,key:p||c.key||`slide-${d}`})})}const J0=j.forwardRef(function(t,n){const{className:r,tag:i="div",wrapperTag:s="div",children:o,onSwiper:a,...l}=t??{};let u=!1;const[c,d]=j.useState("swiper"),[p,v]=j.useState(null),[y,x]=j.useState(!1),b=j.useRef(!1),g=j.useRef(null),h=j.useRef(null),m=j.useRef(null),w=j.useRef(null),S=j.useRef(null),T=j.useRef(null),C=j.useRef(null),k=j.useRef(null),{params:E,passedParams:P,rest:D,events:F}=vE(l),{slides:N,slots:L}=bE(o),_=()=>{x(!y)};Object.assign(E.on,{_containerClasses($,O){d(O)}});const W=()=>{var U;Object.assign(E.on,F),u=!0;const $={...E};delete $.wrapperClass,h.current=new Di($);const O=h.current;if(O.virtual&&((U=O.params.virtual)!=null&&U.enabled)){O.virtual.slides=N;const q={cache:!1,slides:N,renderExternal:v,renderExternalUpdate:!1};ir(O.params.virtual,q),O.originalParams.virtual&&ir(O.originalParams.virtual,q)}};g.current||W(),h.current&&h.current.on("_beforeBreakpoint",_);const H=()=>{u||!F||!h.current||Object.keys(F).forEach($=>{h.current.on($,F[$])})},M=()=>{!F||!h.current||Object.keys(F).forEach($=>{h.current.off($,F[$])})};j.useEffect(()=>()=>{h.current&&h.current.off("_beforeBreakpoint",_)}),j.useEffect(()=>{!b.current&&h.current&&(h.current.emitSlidesClasses(),b.current=!0)}),ei(()=>{if(n&&(typeof n=="function"?n(g.current):n.current=g.current),!!g.current)return h.current&&h.current.destroyed&&W(),xE({el:g.current,nextEl:S.current,prevEl:T.current,paginationEl:C.current,scrollbarEl:k.current,swiper:h.current},E),a&&h.current&&!h.current.destroyed&&a(h.current),()=>{h.current&&!h.current.destroyed&&h.current.destroy(!0,!1)}},[]),ei(()=>{H();const $=yE(P,m.current,N,w.current,O=>O.key);return m.current=P,w.current=N,$.length&&h.current&&!h.current.destroyed&&iT({swiper:h.current,slides:N,passedParams:P,changedParams:$,nextEl:S.current,prevEl:T.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{M()}}),ei(()=>{wE(h.current)},[p]);function I(){return E.virtual?kE(h.current,N,p):N.map(($,O)=>ae.cloneElement($,{swiper:h.current,swiperSlideIndex:O}))}const A=i,R=s;return ae.createElement(A,{ref:g,className:U0(`${c}${r?` ${r}`:""}`),...D},ae.createElement(SE.Provider,{value:h.current},L["container-start"],ae.createElement(R,{className:rT(E.wrapperClass)},L["wrapper-start"],I(),L["wrapper-end"]),$0(E)&&ae.createElement(ae.Fragment,null,ae.createElement("div",{ref:T,className:"swiper-button-prev"}),ae.createElement("div",{ref:S,className:"swiper-button-next"})),H0(E)&&ae.createElement("div",{ref:k,className:"swiper-scrollbar"}),W0(E)&&ae.createElement("div",{ref:C,className:"swiper-pagination"}),L["container-end"]))});J0.displayName="Swiper";const ey=j.forwardRef(function(t,n){const{tag:r="div",children:i,className:s="",swiper:o,zoom:a,lazy:l,virtualIndex:u,swiperSlideIndex:c,...d}=t,p=j.useRef(null),[v,y]=j.useState("swiper-slide"),[x,b]=j.useState(!1);function g(C,k,E){k===p.current&&y(E)}ei(()=>{if(typeof c<"u"&&p.current&&(p.current.swiperSlideIndex=c),n&&(typeof n=="function"?n(p.current):n.current=p.current),!(!p.current||!o)){if(o.destroyed){v!=="swiper-slide"&&y("swiper-slide");return}return o.on("_slideClass",g),()=>{o&&o.off("_slideClass",g)}}}),ei(()=>{o&&p.current&&!o.destroyed&&y(o.getSlideClasses(p.current))},[o]);const h={isActive:v.indexOf("swiper-slide-active")>=0,isVisible:v.indexOf("swiper-slide-visible")>=0,isFullyVisible:v.indexOf("swiper-slide-fully-visible")>=0,isPrev:v.indexOf("swiper-slide-prev")>=0,isNext:v.indexOf("swiper-slide-next")>=0},m=()=>typeof i=="function"?i(h):i,w=()=>{b(!0)},S=C=>{C&&(C.lazyPreloaderManaged=!0)},T=r;return ae.createElement(T,{ref:p,className:U0(`${v}${s?` ${s}`:""}`),"data-swiper-slide-index":u,onLoad:w,...d},a&&ae.createElement(mp.Provider,{value:h},ae.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},m(),l&&!x&&ae.createElement("div",{className:"swiper-lazy-preloader",ref:S}))),!a&&ae.createElement(mp.Provider,{value:h},m(),l&&!x&&ae.createElement("div",{className:"swiper-lazy-preloader",ref:S})))});ey.displayName="SwiperSlide";function ty(e,t,n,r){const i=n??{},s=t??{};return e.params.createElements&&Object.keys(r).forEach(o=>{if(!i[o]&&i.auto===!0){let a=St(e.el,`.${r[o]}`)[0];a||(a=uo("div",r[o]),a.className=r[o],e.el.append(a)),i[o]=a,s[o]=a}}),i}const gp='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>',TE=({swiper:e,extendParams:t,on:n,emit:r})=>{t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:gp};function i(){return e.params.navigation}function s(y){let x;return y&&typeof y=="string"&&e.isElement&&(x=e.el.querySelector(y)||e.hostEl.querySelector(y),x)?x:(y&&(typeof y=="string"&&(x=[...document.querySelectorAll(y)]),e.params.uniqueNavElements&&typeof y=="string"&&x&&x.length>1&&e.el.querySelectorAll(y).length===1?x=e.el.querySelector(y):x&&x.length===1&&(x=x[0])),y&&!x?y:x)}function o(y,x){const b=i();Se(y).forEach(h=>{h&&(h.classList[x?"add":"remove"](...b.disabledClass.split(" ")),h.tagName==="BUTTON"&&(h.disabled=x),e.params.watchOverflow&&e.enabled&&h.classList[e.isLocked?"add":"remove"](b.lockClass))})}function a(){const{nextEl:y,prevEl:x}=e.navigation;if(e.params.loop){o(x,!1),o(y,!1);return}o(x,e.isBeginning&&!e.params.rewind),o(y,e.isEnd&&!e.params.rewind)}function l(y){y.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function u(y){y.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){e.params.navigation=ty(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"});const y=i();if(!(y.nextEl||y.prevEl))return;const x=s(y.nextEl),b=s(y.prevEl);Object.assign(e.navigation,{nextEl:x,prevEl:b});const g=Se(x),h=Se(b),m=(w,S)=>{if(w){if(y.addIcons&&w.matches(".swiper-button-next,.swiper-button-prev")&&!w.querySelector("svg")){const T=document.createElement("div");ki(T,gp);const C=T.querySelector("svg");C&&w.appendChild(C),T.remove()}w.addEventListener("click",S==="next"?u:l)}!e.enabled&&w&&w.classList.add(...y.lockClass.split(" "))};g.forEach(w=>m(w,"next")),h.forEach(w=>m(w,"prev"))}function d(){const y=i(),{nextEl:x,prevEl:b}=e.navigation,g=Se(x),h=Se(b),m=(w,S)=>{w.removeEventListener("click",S==="next"?u:l),w.classList.remove(...y.disabledClass.split(" "))};g.forEach(w=>m(w,"next")),h.forEach(w=>m(w,"prev"))}n("init",()=>{i().enabled===!1?v():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{const y=i(),{nextEl:x,prevEl:b}=e.navigation,g=Se(x),h=Se(b);if(e.enabled){a();return}[...g,...h].filter(m=>!!m).forEach(m=>m.classList.add(y.lockClass))}),n("click",(y,x)=>{const b=i(),{nextEl:g,prevEl:h}=e.navigation,m=Se(g),w=Se(h),S=x.target;let T=w.includes(S)||m.includes(S);if(e.isElement&&!T){const C=x.composedPath?x.composedPath():[];C.length&&(T=C.find(k=>m.includes(k)||w.includes(k)))}if(b.hideOnClick&&!T){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===S||e.pagination.el.contains(S)))return;let C;m.length?C=m[0].classList.contains(b.hiddenClass):w.length&&(C=w[0].classList.contains(b.hiddenClass)),r(C===!0?"navigationShow":"navigationHide"),[...m,...w].filter(k=>!!k).forEach(k=>k.classList.toggle(b.hiddenClass))}});const p=()=>{const y=i();e.el.classList.remove(...y.navigationDisabledClass.split(" ")),c(),a()},v=()=>{const y=i();e.el.classList.add(...y.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:p,disable:v,update:a,init:c,destroy:d})};function Ir(e=""){return`.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}const EE=e=>{var t;return!!e.virtual&&!!((t=e.params.virtual)!=null&&t.enabled)},CE=e=>{var t;return!!((t=e.params.freeMode)!=null&&t.enabled)},yp=e=>{var n;if(EE(e))return e.virtual.slides.length;const t=(n=e.params.grid)==null?void 0:n.rows;return e.grid&&t&&t>1?e.slides.length/Math.ceil(t):e.slides.length},PE=({swiper:e,extendParams:t,on:n,emit:r})=>{const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let s,o=0;function a(){return e.params.pagination}function l(){return!a().el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(h,m){const{bulletActiveClass:w}=a();if(!h)return;let S=h[`${m==="prev"?"previous":"next"}ElementSibling`];S&&(S.classList.add(`${w}-${m}`),S=S[`${m==="prev"?"previous":"next"}ElementSibling`],S&&S.classList.add(`${w}-${m}-${m}`))}function c(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function d(h){const w=h.target.closest(Ir(a().bulletClass));if(!w)return;h.preventDefault();const S=(co(w)??0)*(e.params.slidesPerGroup??1);if(e.params.loop){if(e.realIndex===S)return;const T=c(e.realIndex,S,e.slides.length);T==="next"?e.slideNext():T==="previous"?e.slidePrev():e.slideToLoop(S)}else e.slideTo(S)}function p(){const h=e.rtl,m=a();if(l())return;const w=Se(e.pagination.el);let S,T;const C=yp(e),k=e.params.loop?Math.ceil(C/(e.params.slidesPerGroup??1)):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,S=(e.params.slidesPerGroup??1)>1?Math.floor(e.realIndex/(e.params.slidesPerGroup??1)):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let P=0,D=0,F=0;if(m.dynamicBullets){s=Ql(E[0],e.isHorizontal()?"width":"height");const N=e.isHorizontal()?"width":"height";w.forEach(L=>{L.style[N]=`${(s??0)*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&T!==void 0&&(o+=S-(T||0),o>m.dynamicMainBullets-1?o=m.dynamicMainBullets-1:o<0&&(o=0)),P=Math.max(S-o,0),D=P+(Math.min(E.length,m.dynamicMainBullets)-1),F=(D+P)/2}if(E.forEach(N=>{const L=["","-next","-next-next","-prev","-prev-prev","-main"].map(_=>`${m.bulletActiveClass}${_}`).flatMap(_=>typeof _=="string"&&_.includes(" ")?_.split(" "):[_]);N.classList.remove(...L)}),w.length>1)E.forEach(N=>{const L=co(N);L===S?N.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&N.setAttribute("part","bullet"),m.dynamicBullets&&L!==void 0&&(L>=P&&L<=D&&N.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),L===P&&u(N,"prev"),L===D&&u(N,"next"))});else{const N=E[S];if(N&&N.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&E.forEach((L,_)=>{L.setAttribute("part",_===S?"bullet-active":"bullet")}),m.dynamicBullets){const L=E[P],_=E[D];for(let W=P;W<=D;W+=1)E[W]&&E[W].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(L,"prev"),u(_,"next")}}if(m.dynamicBullets){const N=Math.min(E.length,m.dynamicMainBullets+4),L=((s??0)*N-(s??0))/2-F*(s??0),_=h?"right":"left",W=e.isHorizontal()?_:"top";E.forEach(H=>{H.style[W]=`${L}px`})}}w.forEach((E,P)=>{if(m.type==="fraction"&&(E.querySelectorAll(Ir(m.currentClass)).forEach(D=>{D.textContent=String(m.formatFractionCurrent(S+1))}),E.querySelectorAll(Ir(m.totalClass)).forEach(D=>{D.textContent=String(m.formatFractionTotal(k))})),m.type==="progressbar"){let D;m.progressbarOpposite?D=e.isHorizontal()?"vertical":"horizontal":D=e.isHorizontal()?"horizontal":"vertical";const F=(S+1)/k;let N=1,L=1;D==="horizontal"?N=F:L=F,E.querySelectorAll(Ir(m.progressbarFillClass)).forEach(_=>{_.style.transform=`translate3d(0,0,0) scaleX(${N}) scaleY(${L})`,_.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(ki(E,m.renderCustom(e,S+1,k)),P===0&&r("paginationRender",E)):(P===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=a();if(l())return;const m=yp(e),w=Se(e.pagination.el);let S="";if(h.type==="bullets"){let T=e.params.loop?Math.ceil(m/(e.params.slidesPerGroup??1)):e.snapGrid.length;e.params.freeMode&&CE(e)&&T>m&&(T=m);for(let C=0;C<T;C+=1)h.renderBullet?S+=h.renderBullet.call(e,C,h.bulletClass):S+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(T=>{h.type!=="custom"&&ki(T,S||""),h.type==="bullets"&&e.pagination.bullets.push(...Array.from(T.querySelectorAll(Ir(h.bulletClass))))}),h.type!=="custom"&&r("paginationRender",w[0])}function y(){e.params.pagination=ty(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=a();if(!h.el)return;let m;if(typeof h.el=="string"&&e.isElement&&(m=e.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!m||Array.isArray(m)&&m.length===0)return;if(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(h.el)],m.length>1)){const S=m.find(T=>F0(T,".swiper")[0]===e.el);S&&(m=S)}Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),Se(m).forEach(S=>{h.type==="bullets"&&h.clickable&&S.classList.add(...(h.clickableClass||"").split(" ")),S.classList.add(h.modifierClass+h.type),S.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(S.classList.add(`${h.modifierClass}${h.type}-dynamic`),o=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&S.classList.add(h.progressbarOppositeClass),h.clickable&&S.addEventListener("click",d),e.enabled||S.classList.add(h.lockClass)})}function x(){const h=a();if(l())return;const m=e.pagination.el;m&&Se(m).forEach(S=>{S.classList.remove(h.hiddenClass),S.classList.remove(h.modifierClass+h.type),S.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(S.classList.remove(...(h.clickableClass||"").split(" ")),S.removeEventListener("click",d))}),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=a();Se(e.pagination.el).forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),n("init",()=>{a().enabled===!1?g():(y(),v(),p())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),n("snapIndexChange",()=>{p()}),n("snapGridLengthChange",()=>{v(),p()}),n("destroy",()=>{x()}),n("enable disable",()=>{const{el:h}=e.pagination;if(h){const m=a();Se(h).forEach(S=>S.classList[e.enabled?"remove":"add"](m.lockClass))}}),n("lock unlock",()=>{p()}),n("click",(h,m)=>{const w=m.target,S=Se(e.pagination.el),T=a();if(T.el&&T.hideOnClick&&S&&S.length>0&&!w.classList.contains(T.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const C=S[0].classList.contains(T.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(T.hiddenClass))}});const b=()=>{const h=a();e.el.classList.remove(h.paginationDisabledClass);const{el:m}=e.pagination;m&&Se(m).forEach(S=>S.classList.remove(h.paginationDisabledClass)),y(),v(),p()},g=()=>{const h=a();e.el.classList.add(h.paginationDisabledClass);const{el:m}=e.pagination;m&&Se(m).forEach(S=>S.classList.add(h.paginationDisabledClass)),x()};Object.assign(e.pagination,{enable:b,disable:g,render:v,update:p,init:y,destroy:x})},jE=({swiper:e,extendParams:t,on:n,emit:r,params:i})=>{e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){return e.params.autoplay}const o=typeof i.autoplay=="object"&&i.autoplay&&typeof i.autoplay.delay=="number"?i.autoplay.delay:3e3;let a,l,u=o,c=o,d=0,p=new Date().getTime(),v=!1,y=!1,x=!1,b,g=!1,h=!1;function m(I){if(!e||e.destroyed||!e.wrapperEl||I.target!==e.wrapperEl)return;e.wrapperEl.removeEventListener("transitionend",m);const A=I.detail;h||A&&A.bySwiperTouchMove||D()}const w=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(c=d,v=!1);const I=e.autoplay.paused?d:p+c-new Date().getTime();e.autoplay.timeLeft=I,r("autoplayTimeLeft",I,I/u),l=requestAnimationFrame(()=>{w()})},S=()=>{var $;let I;const A=!!(($=e.params.virtual)!=null&&$.enabled);if(e.virtual&&A?I=e.slides.find(O=>O.classList.contains("swiper-slide-active")):I=e.slides[e.activeIndex],!I)return;const R=I.getAttribute("data-swiper-autoplay");if(R!=null)return parseInt(R,10)},T=()=>{let I=s().delay;const A=S();return typeof A=="number"&&!Number.isNaN(A)&&A>0&&(I=A),I},C=I=>{if(e.destroyed||!e.autoplay.running)return 0;l!==void 0&&cancelAnimationFrame(l),w();let A=I;typeof A>"u"&&(A=T(),u=A,c=A),d=A;const R=e.params.speed,$=()=>{if(!e||e.destroyed)return;const O=s();O.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(R,!0,!0),r("autoplay")):O.stopOnLastSlide||(e.slideTo(e.slides.length-1,R,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(R,!0,!0),r("autoplay")):O.stopOnLastSlide||(e.slideTo(0,R,!0,!0),r("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{C()}))};return A>0?(a!==void 0&&clearTimeout(a),a=setTimeout(()=>{$()},A)):requestAnimationFrame(()=>{$()}),A},k=()=>(p=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart"),!0),E=()=>(e.autoplay.running=!1,a!==void 0&&clearTimeout(a),l!==void 0&&cancelAnimationFrame(l),r("autoplayStop"),!0),P=(I,A)=>{if(e.destroyed||!e.autoplay.running)return;a!==void 0&&clearTimeout(a),I||(g=!0);const R=()=>{r("autoplayPause"),s().waitForTransition?e.wrapperEl.addEventListener("transitionend",m):D()};if(e.autoplay.paused=!0,A){R();return}d=(d||s().delay)-(new Date().getTime()-p),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),R())},D=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),g?(g=!1,C(d)):C(),e.autoplay.paused=!1,r("autoplayResume"))},F=()=>{e.destroyed||!e.autoplay.running||(document.visibilityState==="hidden"&&(g=!0,P(!0)),document.visibilityState==="visible"&&D())},N=I=>{I.pointerType==="mouse"&&(g=!0,h=!0,!(e.animating||e.autoplay.paused)&&P(!0))},L=I=>{I.pointerType==="mouse"&&(h=!1,e.autoplay.paused&&D())},_=()=>{s().pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",N),e.el.addEventListener("pointerleave",L))},W=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",N),e.el.removeEventListener("pointerleave",L))},H=()=>{document.addEventListener("visibilitychange",F)},M=()=>{document.removeEventListener("visibilitychange",F)};n("init",()=>{s().enabled&&(_(),H(),k())}),n("destroy",()=>{W(),M(),e.autoplay.running&&E()}),n("_freeModeStaticRelease",()=>{(x||g)&&D()}),n("_freeModeNoMomentumRelease",()=>{s().disableOnInteraction?E():P(!0,!0)}),n("beforeTransitionStart",(I,A,R)=>{e.destroyed||!e.autoplay.running||(R||!s().disableOnInteraction?P(!0,!0):E())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(s().disableOnInteraction){E();return}y=!0,x=!1,g=!1,b=setTimeout(()=>{g=!0,x=!0,P(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(b!==void 0&&clearTimeout(b),a!==void 0&&clearTimeout(a),s().disableOnInteraction){x=!1,y=!1;return}x&&e.params.cssMode&&D(),x=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(d=T(),u=T())}),Object.assign(e.autoplay,{start:k,stop:E,pause:P,resume:D})},NE=[{value:"150",suffix:"+",icon:$k,label:"Clients Served"},{value:"1.5",suffix:"B+",icon:D0,label:"Views Generated"},{value:"500",suffix:"+",icon:L0,label:"Projects Delivered"},{value:"50",suffix:"+",icon:V0,label:"Channels Built From Zero to Millions"},{value:"40",suffix:"+",icon:rk,label:"YouTube Silver Buttons"},{value:"5",suffix:"",icon:zk,label:"YouTube Gold Buttons"},{value:"5",suffix:"B+",icon:I0,label:"Reach Across All Platforms"}],ME=["/images/stats-1.png","/images/stats-2.png","/images/stats-3.png","/images/stats-4.png","/images/stats-5.png","/images/stats-6.png","/images/stats-7.png"],AE=({value:e,suffix:t,delay:n=0})=>{const r=C0(0),i=Eb(r,s=>Number.isInteger(parseFloat(e))?Math.floor(s):s.toFixed(1));return j.useEffect(()=>{const s=Hb(r,parseFloat(e),{duration:1.8,delay:n/1e3,ease:"easeOut"});return()=>s.stop()},[e,n,r]),f.jsxs(G.span,{initial:{opacity:0,scale:.4,y:15},whileInView:{opacity:1,scale:[.4,1.3,.9,1],y:[15,-8,3,0]},viewport:{once:!0},transition:{duration:.8,delay:n/1e3,ease:"easeOut"},className:"inline-block",children:[f.jsx(G.span,{children:i}),f.jsx("span",{className:"text-sm sm:text-lg",children:t})]})};function LE(){return f.jsxs("section",{id:"home",className:`\r
        relative\r
        overflow-hidden\r
        bg-[#F6F7F1]\r
        pt-20\r
        sm:pt-24\r
        lg:pt-16\r
        pb-10\r
        sm:pb-14\r
        lg:pb-16\r
      `,children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-mint-50 via-[#F6F7F1] to-[#F6F7F1]"}),f.jsx("div",{className:`\r
          absolute\r
          top-0\r
          right-0\r
          w-[180px]\r
          h-[180px]\r
          sm:w-[320px]\r
          sm:h-[320px]\r
          lg:w-[450px]\r
          lg:h-[450px]\r
          rounded-full\r
          bg-mint-100\r
          blur-[90px]\r
          opacity-40\r
        `,"aria-hidden":"true"}),f.jsxs("div",{className:`\r
          relative\r
          max-w-7xl\r
          mx-auto\r
          px-4\r
          sm:px-8\r
          lg:px-10\r
        `,children:[f.jsxs("div",{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-2\r
            gap-9\r
            sm:gap-12\r
            lg:gap-14\r
            xl:gap-20\r
            items-center\r
          `,children:[f.jsxs("div",{className:`\r
              w-full\r
              max-w-2xl\r
              mx-auto\r
              lg:mx-0\r
              text-center\r
              lg:text-left\r
              min-w-0\r
            `,children:[f.jsx(Y,{children:f.jsx("span",{className:`\r
                  inline-block\r
                  text-mint-600\r
                  font-semibold\r
                  tracking-wide\r
                  uppercase\r
                  text-xs\r
                  sm:text-sm\r
                  lg:text-base\r
                `,children:"We are"})}),f.jsx(Y,{delay:.1,children:f.jsxs("div",{className:`\r
                  mt-2\r
                  flex\r
                  items-center\r
                  justify-center\r
                  lg:justify-start\r
                  gap-2\r
                  sm:gap-4\r
                  md:gap-5\r
                  lg:gap-6\r
                  xl:gap-8\r
                  w-full\r
                `,children:[f.jsxs("h1",{className:`\r
                    font-display\r
                    font-black\r
                    uppercase\r
                    leading-[0.86]\r
                    tracking-tight\r
                    text-charcoal\r
                    text-[42px]\r
                    min-[390px]:text-[46px]\r
                    min-[430px]:text-[50px]\r
                    sm:text-6xl\r
                    md:text-7xl\r
                    lg:text-[72px]\r
                    xl:text-[86px]\r
                    text-left\r
                    shrink-0\r
                  `,children:["Editor",f.jsx("br",{}),"Bhai"]}),f.jsx(G.video,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,animate:{scale:[1,1.035,1]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},className:`\r
                    self-center\r
                    w-[78px]\r
                    h-[78px]\r
                    min-[390px]:w-[88px]\r
                    min-[390px]:h-[88px]\r
                    min-[430px]:w-[98px]\r
                    min-[430px]:h-[98px]\r
                    sm:w-[125px]\r
                    sm:h-[125px]\r
                    md:w-[155px]\r
                    md:h-[155px]\r
                    lg:w-[185px]\r
                    lg:h-[185px]\r
                    xl:w-[225px]\r
                    xl:h-[225px]\r
                    shrink-0\r
                    object-contain\r
                    pointer-events-none\r
                    z-20\r
                  `,children:f.jsx("source",{src:"/images/herOo.mp4",type:"video/mp4"})})]})}),f.jsx(Y,{delay:.18,children:f.jsx("p",{className:`\r
                  mt-4\r
                  sm:mt-5\r
                  text-base\r
                  sm:text-xl\r
                  font-semibold\r
                  text-mint-700\r
                `,children:oe.title})}),f.jsx(Y,{delay:.26,children:f.jsx("p",{className:`\r
                  mt-4\r
                  sm:mt-5\r
                  text-sm\r
                  sm:text-lg\r
                  leading-6\r
                  sm:leading-8\r
                  text-charcoal-light\r
                  max-w-xl\r
                  mx-auto\r
                  lg:mx-0\r
                `,children:"We've worked with top astrologers, creators, brands, and podcasters turning raw footage into scroll-stopping content that skyrockets watch time, maximizes audience retention, and builds a powerful online presence."})}),f.jsx(Y,{delay:.3,children:f.jsxs("div",{className:`\r
                  mt-5\r
                  flex\r
                  flex-col\r
                  gap-2.5\r
                  text-left\r
                `,children:[f.jsxs("div",{className:`\r
                    flex\r
                    flex-wrap\r
                    items-center\r
                    gap-1.5\r
                    sm:gap-2\r
                    justify-center\r
                    lg:justify-start\r
                  `,children:[f.jsxs("span",{className:`\r
                      flex\r
                      items-center\r
                      gap-1.5\r
                      text-[9px]\r
                      sm:text-xs\r
                      font-bold\r
                      text-charcoal\r
                      uppercase\r
                      tracking-wide\r
                      mr-1\r
                    `,children:[f.jsx(I0,{className:`\r
                        w-3\r
                        h-3\r
                        sm:w-3.5\r
                        sm:h-3.5\r
                        text-mint-600\r
                      `}),"International Clientele:"]}),["France","Canada","Oman","Abu Dhabi","Dubai"].map(e=>f.jsx("span",{className:`\r
                        px-2\r
                        sm:px-2.5\r
                        py-1\r
                        rounded-full\r
                        text-[9px]\r
                        sm:text-[11px]\r
                        font-semibold\r
                        bg-mint-50\r
                        text-mint-700\r
                        border\r
                        border-mint-200\r
                        whitespace-nowrap\r
                      `,children:e},e))]}),f.jsxs("div",{className:`\r
                    flex\r
                    flex-wrap\r
                    items-center\r
                    gap-1.5\r
                    sm:gap-2\r
                    justify-center\r
                    lg:justify-start\r
                  `,children:[f.jsxs("span",{className:`\r
                      flex\r
                      items-center\r
                      gap-1.5\r
                      text-[9px]\r
                      sm:text-xs\r
                      font-bold\r
                      text-charcoal\r
                      uppercase\r
                      tracking-wide\r
                      mr-1\r
                    `,children:[f.jsx(Xl,{className:`\r
                        w-3\r
                        h-3\r
                        sm:w-3.5\r
                        sm:h-3.5\r
                        text-mint-600\r
                      `}),"India:"]}),["Noida","Bangalore","Mumbai","West Bengal"].map(e=>f.jsx("span",{className:`\r
                        px-2\r
                        sm:px-2.5\r
                        py-1\r
                        rounded-full\r
                        text-[9px]\r
                        sm:text-[11px]\r
                        font-semibold\r
                        bg-gray-50\r
                        text-charcoal-light\r
                        border\r
                        border-gray-200\r
                        whitespace-nowrap\r
                      `,children:e},e))]})]})}),f.jsx(Y,{delay:.34,children:f.jsxs("div",{className:`\r
                  mt-7\r
                  sm:mt-9\r
                  flex\r
                  flex-col\r
                  sm:flex-row\r
                  gap-3\r
                  sm:gap-4\r
                  items-stretch\r
                  sm:items-center\r
                  justify-center\r
                  lg:justify-start\r
                `,children:[f.jsxs("a",{href:oe.whatsappLink,target:"_blank",rel:"noopener noreferrer",className:`\r
                    group\r
                    relative\r
                    w-full\r
                    sm:w-auto\r
                    inline-flex\r
                    items-center\r
                    justify-center\r
                    gap-3\r
                    bg-charcoal\r
                    text-white\r
                    font-semibold\r
                    px-5\r
                    sm:px-6\r
                    py-3\r
                    sm:py-3.5\r
                    rounded-full\r
                    overflow-hidden\r
                    shadow-lg\r
                    hover:shadow-[0_12px_30px_-10px_rgba(16,21,15,0.45)]\r
                    transition-all\r
                    duration-300\r
                    text-sm\r
                    sm:text-base\r
                  `,children:[f.jsx("span",{className:`\r
                      absolute\r
                      inset-0\r
                      bg-mint-600\r
                      translate-y-full\r
                      group-hover:translate-y-0\r
                      transition-transform\r
                      duration-300\r
                    `}),f.jsx("span",{className:`\r
                      relative\r
                      z-10\r
                      flex\r
                      items-center\r
                      justify-center\r
                      w-7\r
                      h-7\r
                      rounded-full\r
                      bg-white/10\r
                      group-hover:bg-white/20\r
                      transition-colors\r
                    `,children:f.jsx(mr,{className:`\r
                        w-4\r
                        h-4\r
                        sm:w-[18px]\r
                        sm:h-[18px]\r
                      `})}),f.jsx("span",{className:"relative z-10",children:"Chat on WhatsApp"}),f.jsx(oo,{className:`\r
                      relative\r
                      z-10\r
                      w-4\r
                      h-4\r
                      sm:w-5\r
                      sm:h-5\r
                      transition-transform\r
                      duration-300\r
                      group-hover:translate-x-1\r
                    `})]}),f.jsxs("a",{href:"https://abisek951.portfolial.com/",target:"_blank",rel:"noopener noreferrer",className:`\r
                    group\r
                    relative\r
                    w-full\r
                    sm:w-auto\r
                    inline-flex\r
                    items-center\r
                    justify-center\r
                    gap-3\r
                    bg-white/70\r
                    backdrop-blur-sm\r
                    border\r
                    border-gray-300\r
                    text-charcoal\r
                    px-5\r
                    sm:px-6\r
                    py-3\r
                    sm:py-3.5\r
                    rounded-full\r
                    font-semibold\r
                    hover:border-mint-500\r
                    hover:text-mint-700\r
                    hover:shadow-[0_12px_30px_-12px_rgba(16,21,15,0.25)]\r
                    transition-all\r
                    duration-300\r
                    text-sm\r
                    sm:text-base\r
                  `,children:[f.jsx("span",{className:`\r
                      flex\r
                      items-center\r
                      justify-center\r
                      w-7\r
                      h-7\r
                      rounded-full\r
                      bg-mint-50\r
                      text-mint-600\r
                      group-hover:bg-mint-600\r
                      group-hover:text-white\r
                      transition-all\r
                      duration-300\r
                    `,children:f.jsx(yk,{className:`\r
                        w-3.5\r
                        h-3.5\r
                        sm:w-4\r
                        sm:h-4\r
                        transition-transform\r
                        duration-300\r
                        group-hover:rotate-12\r
                      `})}),f.jsx("span",{children:"View Portfolio"}),f.jsx(oo,{className:`\r
                      w-4\r
                      h-4\r
                      transition-transform\r
                      duration-300\r
                      group-hover:translate-x-1\r
                    `})]})]})})]}),f.jsx(G.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8},className:`\r
              relative\r
              w-full\r
              max-w-md\r
              sm:max-w-lg\r
              md:max-w-xl\r
              lg:max-w-none\r
              mx-auto\r
              min-w-0\r
            `,children:f.jsxs("div",{className:`\r
                relative\r
                w-full\r
                mx-auto\r
              `,children:[f.jsx(J0,{modules:[TE,PE,jE],slidesPerView:1,loop:!0,speed:700,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{prevEl:".hero-prev",nextEl:".hero-next"},pagination:{clickable:!0,dynamicBullets:!0},className:`\r
                  rounded-2xl\r
                  sm:rounded-[28px]\r
                  overflow-hidden\r
                `,children:Uk.map(e=>f.jsx(ey,{children:f.jsxs("div",{className:`\r
                        relative\r
                        w-full\r
                        aspect-[16/10]\r
                        sm:aspect-[16/9]\r
                        overflow-hidden\r
                        rounded-2xl\r
                        sm:rounded-[28px]\r
                        shadow-xl\r
                        bg-gray-100\r
                      `,children:[f.jsx("img",{src:e.image,alt:e.title,loading:"lazy",className:`\r
                          absolute\r
                          inset-0\r
                          w-full\r
                          h-full\r
                          object-cover\r
                          transition-transform\r
                          duration-700\r
                          hover:scale-105\r
                        `}),f.jsx("div",{className:`\r
                          absolute\r
                          inset-0\r
                          bg-gradient-to-t\r
                          from-black/70\r
                          via-black/20\r
                          to-transparent\r
                        `}),f.jsxs("div",{className:`\r
                          absolute\r
                          bottom-3\r
                          left-3\r
                          right-12\r
                          sm:bottom-6\r
                          sm:left-6\r
                          sm:right-16\r
                          text-white\r
                          text-left\r
                        `,children:[f.jsx("h3",{className:`\r
                            text-sm\r
                            sm:text-2xl\r
                            lg:text-3xl\r
                            font-bold\r
                            leading-tight\r
                          `,children:e.title}),f.jsx("p",{className:`\r
                            mt-1\r
                            text-[10px]\r
                            sm:text-sm\r
                            lg:text-base\r
                            text-white/90\r
                            line-clamp-2\r
                          `,children:e.subtitle})]})]})},e.id))}),f.jsx("button",{"aria-label":"Previous slide",className:`\r
                  hero-prev\r
                  absolute\r
                  left-2\r
                  sm:left-4\r
                  top-1/2\r
                  -translate-y-1/2\r
                  z-20\r
                  w-8\r
                  h-8\r
                  sm:w-12\r
                  sm:h-12\r
                  rounded-full\r
                  bg-white/90\r
                  backdrop-blur\r
                  shadow-lg\r
                  flex\r
                  items-center\r
                  justify-center\r
                  hover:bg-mint-500\r
                  hover:text-white\r
                  transition\r
                `,children:f.jsx(lk,{size:18,className:"sm:w-5 sm:h-5"})}),f.jsx("button",{"aria-label":"Next slide",className:`\r
                  hero-next\r
                  absolute\r
                  right-2\r
                  sm:right-4\r
                  top-1/2\r
                  -translate-y-1/2\r
                  z-20\r
                  w-8\r
                  h-8\r
                  sm:w-12\r
                  sm:h-12\r
                  rounded-full\r
                  bg-white/90\r
                  backdrop-blur\r
                  shadow-lg\r
                  flex\r
                  items-center\r
                  justify-center\r
                  hover:bg-mint-500\r
                  hover:text-white\r
                  transition\r
                `,children:f.jsx(ck,{size:18,className:"sm:w-5 sm:h-5"})})]})})]}),f.jsx(Y,{delay:.42,children:f.jsx(G.div,{className:`\r
              mt-10\r
              sm:mt-14\r
              lg:mt-16\r
              grid\r
              grid-cols-2\r
              sm:grid-cols-3\r
              lg:grid-cols-4\r
              xl:grid-cols-7\r
              gap-3\r
              sm:gap-4\r
              lg:gap-5\r
              w-full\r
            `,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.25},variants:{hidden:{},visible:{transition:{staggerChildren:.12}}},children:NE.map((e,t)=>f.jsxs(G.div,{variants:{hidden:{opacity:0,y:50,scale:.8,rotate:t%2===0?-6:6},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{type:"spring",stiffness:120,damping:12}}},whileHover:{y:-8,scale:1.04,transition:{type:"spring",stiffness:300,damping:15}},whileTap:{scale:.96},className:`\r
                  relative\r
                  bg-white\r
                  border\r
                  border-gray-200\r
                  rounded-2xl\r
                  p-3\r
                  sm:p-4\r
                  lg:p-5\r
                  w-full\r
                  min-w-0\r
                  overflow-hidden\r
                  hover:shadow-[0_20px_40px_-22px_rgba(16,21,15,0.25)]\r
                  hover:border-mint-500\r
                  transition-all\r
                  duration-300\r
                  group\r
                  text-center\r
                  sm:text-left\r
                `,children:[f.jsx(G.div,{className:`\r
                    absolute\r
                    -right-3\r
                    -bottom-3\r
                    w-10\r
                    h-10\r
                    sm:w-12\r
                    sm:h-12\r
                    rounded-xl\r
                    rotate-[20deg]\r
                    bg-mint-50\r
                  `,initial:{scale:0,opacity:0},whileInView:{scale:[0,1.3,.9,1],opacity:[0,.4,.7,1]},viewport:{once:!0},transition:{duration:1,delay:.35+t*.12}}),f.jsxs(G.div,{className:`\r
                    relative\r
                    w-12\r
                    h-12\r
                    sm:w-16\r
                    sm:h-16\r
                    lg:w-20\r
                    lg:h-20\r
                    xl:w-24\r
                    xl:h-24\r
                    rounded-full\r
                    flex\r
                    items-center\r
                    justify-center\r
                    mb-3\r
                    z-10\r
                    shadow-sm\r
                    mx-auto\r
                    sm:mx-0\r
                  `,initial:{scale:0,rotate:-180,opacity:0},whileInView:{scale:[0,1.2,.9,1],rotate:[-180,20,-10,0],opacity:1},viewport:{once:!0},transition:{duration:.9,delay:.45+t*.12,type:"spring",stiffness:180},whileHover:{rotate:360,scale:1.1},children:[f.jsx("img",{src:ME[t],alt:e.label,className:`\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      rounded-full\r
                    `}),f.jsx(G.span,{className:`\r
                      absolute\r
                      right-0\r
                      bottom-0\r
                      w-2\r
                      h-2\r
                      sm:w-2.5\r
                      sm:h-2.5\r
                      rounded-full\r
                      bg-white\r
                      border\r
                      border-gray-200\r
                    `,animate:{scale:[1,1.4,1]},transition:{duration:1.5,repeat:1/0,delay:t*.2}})]}),f.jsx(G.div,{className:`\r
                    relative\r
                    z-10\r
                    font-display\r
                    font-semibold\r
                    text-xl\r
                    sm:text-2xl\r
                    lg:text-3xl\r
                    leading-none\r
                    text-charcoal\r
                    whitespace-nowrap\r
                  `,children:f.jsx(AE,{value:e.value,suffix:e.suffix,delay:t*150})}),f.jsx(G.div,{className:`\r
                    relative\r
                    z-10\r
                    text-[8px]\r
                    sm:text-[10px]\r
                    lg:text-[11px]\r
                    font-bold\r
                    tracking-widest\r
                    uppercase\r
                    text-charcoal-light\r
                    mt-1.5\r
                    leading-snug\r
                    min-h-[26px]\r
                  `,initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.7+t*.12},children:e.label}),f.jsx(G.div,{className:`\r
                    absolute\r
                    inset-0\r
                    pointer-events-none\r
                    bg-gradient-to-r\r
                    from-transparent\r
                    via-white/40\r
                    to-transparent\r
                    -translate-x-full\r
                  `,whileInView:{x:["-100%","200%"]},viewport:{once:!0},transition:{duration:1.2,delay:1+t*.15}})]},t))})})]})]})}const Vn=[{name:"Astro Arun Pandit",category:"Astrology · India",image:"/images/arun-pandit.png"},{name:"Astrotalk",category:"Astrology Platform",image:"/images/astrotalk.png"},{name:"Astro Anand Sharma",category:"Astrology",image:"/images/anand-sharma.jpeg"},{name:"Jaya Kishori",category:"Spiritual · India",image:"/images/jaya-kishori.png"},{name:"Devi Chitralekha",category:"Spiritual · Kathavachak",image:"/images/devi-chitralekha.jpeg"},{name:"Pundrik Goswami",category:"Spiritual · Kathavachak",image:"/images/pundrik-goswami.jpeg"},{name:"Indresh Upadhyay",category:"Spiritual · Kathavachak",image:"/images/indresh-upadhyay.jpeg"},{name:"Astro Ankit Sharma",category:"Astrology",image:"/images/astro-ankit-sharma.jpg"},{name:"Awara Musafir",category:"Podcast · India",image:"/images/awara-musafir.png"},{name:"The Ravya Sharda Show",category:"Podcast / Talk Show",image:"/images/ravya-sharda.jpeg"},{name:"Akshat Gupta",category:"Author / Spiritual",image:"/images/akshat-gupta.jpg"},{name:"Abhishek Kar",category:"Content Creator",image:"/images/abhishek-kar.webp"},{name:"Amit Bhadana",category:"Comedy / YouTuber",image:"/images/amit-bhadana.jpeg"},{name:"Sadguru Shri Riteswar Maharaj",category:"Spiritual Guru",image:"/images/sadguru-riteshwar.jpeg"},{name:"Shri Shri Ravi Shankar",category:"Spiritual Guru",image:"/images/sri-ravi-shankar.jpg"},{name:"Rasraj Ji Maharaj",category:"Spiritual Guru",image:"/images/rasrak-maharaj.jpeg"}];function IE({name:e}){const t=e.split(" ").map(n=>n[0]).slice(0,2).join("");return f.jsx("span",{className:"cp-fphoto-fallback",children:t})}function DE(){const[e,t]=j.useState(0),n=j.useRef(null),r=j.useRef([]),i=j.useRef(null),s=j.useCallback(u=>{t((u%Vn.length+Vn.length)%Vn.length)},[]),o=j.useCallback(()=>{clearInterval(i.current),i.current=setInterval(()=>{t(u=>(u+1)%Vn.length)},4e3)},[]);j.useEffect(()=>(o(),()=>clearInterval(i.current)),[o]);const a=j.useCallback(()=>{const u=n.current,c=r.current[0];if(!u||!c)return;const d=u.parentElement.clientWidth,p=c.offsetWidth+24,v=d/2-p/2-e*p;u.style.transform=`translateX(${v}px)`},[e]);j.useLayoutEffect(()=>(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[a]);const l=u=>{s(e+u),o()};return f.jsxs("section",{id:"clients",className:"cp-section",children:[f.jsx("style",{children:`
        /* ============================================================
           ROOT
        ============================================================ */

        .cp-section {
          --ink: #10150F;
          --ink-soft: #3C453D;
          --paper: #F6F7F1;
          --paper-raised: #FFFFFF;
          --line: #DDE2D6;
          --green: #1C6B44;
          --green-deep: #123F29;
          --green-tint: #E4EEE3;

          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(28,107,68,.07),
              transparent 34%
            ),
            var(--paper);

          color: var(--ink);

          padding: 100px 32px 80px;

          font-family: Inter, sans-serif;

          -webkit-font-smoothing: antialiased;
        }

        .cp-section::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;

          background: rgba(28,107,68,.08);

          filter: blur(80px);

          pointer-events: none;
        }

        .cp-wrap {
          position: relative;
          z-index: 1;

          max-width: 1180px;
          margin: 0 auto;
        }


        /* ============================================================
           EYEBROW
        ============================================================ */

        .cp-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: .18em;

          text-transform: uppercase;

          color: var(--green);

          margin-bottom: 22px;
        }

        .cp-eyebrow::before,
        .cp-eyebrow::after {
          content: "";

          width: 34px;
          height: 2px;

          border-radius: 999px;

          background: var(--green);

          display: block;

          opacity: .7;
        }


        /* ============================================================
           HEADER
        ============================================================ */

        .cp-header-row {
          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          gap: 22px;

          margin: 0 auto 62px;

          max-width: 760px;
        }

        .cp-h1 {
          font-family: var(--font-display), sans-serif;

          font-weight: 800;

          font-size: clamp(42px, 5vw, 64px);

          line-height: 1.02;

          letter-spacing: -.045em;

          color: var(--ink);

          position: relative;

          margin: 0;
        }

        .cp-h1 em {
          font-style: normal;

          color: var(--green);

          font-weight: 800;

          position: relative;

          display: inline-block;
        }

        .cp-h1 em::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: -6px;

          height: 3px;

          border-radius: 999px;

          background: var(--green);

          opacity: .25;
        }

        .cp-lede {
          font-size: 16px;

          line-height: 1.7;

          color: var(--ink-soft);

          max-width: 48ch;

          margin: 0 auto;
        }


        /* ============================================================
           CAROUSEL LABEL
        ============================================================ */

        .cp-carousel-label {
          font-size: 11px;

          font-weight: 800;

          letter-spacing: .16em;

          text-transform: uppercase;

          color: var(--ink-soft);

          text-align: center;

          margin-bottom: 22px;
        }


        /* ============================================================
           CAROUSEL
        ============================================================ */

        .cp-carousel-outer {
          position: relative;

          overflow: hidden;

          padding: 22px 0 48px;
        }

        .cp-carousel-track {
          display: flex;

          gap: 24px;

          transition:
            transform .65s cubic-bezier(.65,0,.35,1);

          will-change: transform;
        }


        /* ============================================================
           CLIENT CARD
        ============================================================ */

        .cp-fcard {
          position: relative;

          flex: 0 0 250px;

          background: rgba(255,255,255,.78);

          border: 1px solid rgba(221,226,214,.9);

          border-radius: 24px;

          padding: 30px 22px 26px;

          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;

          gap: 13px;

          transform:
            scale(.86)
            translateY(8px);

          opacity: .48;

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          transition:
            transform .6s cubic-bezier(.65,0,.35,1),
            opacity .6s ease,
            box-shadow .6s ease,
            border-color .6s ease,
            background .6s ease;
        }

        .cp-fcard::before {
          content: "";

          position: absolute;

          inset: 0;

          border-radius: inherit;

          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(255,255,255,.7) 50%,
              transparent 80%
            );

          opacity: 0;

          pointer-events: none;
        }

        .cp-fcard.active {
          transform:
            scale(1)
            translateY(-8px);

          opacity: 1;

          background: #fff;

          border-color: rgba(28,107,68,.45);

          box-shadow:
            0 30px 70px -28px rgba(16,21,15,.35),
            0 0 0 1px rgba(28,107,68,.08),
            0 0 40px rgba(28,107,68,.08);
        }

        .cp-fcard.active::before {
          opacity: 1;

          animation:
            cp-shine 3s ease-in-out infinite;
        }

        @keyframes cp-shine {
          0%,
          100% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(100%);
          }
        }


        /* ============================================================
           PROFILE PHOTO
        ============================================================ */

        .cp-fphoto {
          width: 92px;
          height: 92px;

          border-radius: 50%;

          overflow: hidden;

          border: 4px solid #fff;

          outline: 2px solid var(--green-tint);

          box-shadow:
            0 10px 28px rgba(16,21,15,.12),
            0 0 0 6px rgba(28,107,68,.05);

          transition:
            transform .5s ease,
            box-shadow .5s ease;
        }

        .cp-fcard.active .cp-fphoto {
          transform: scale(1.06);

          box-shadow:
            0 14px 32px rgba(16,21,15,.16),
            0 0 0 7px rgba(28,107,68,.08);
        }

        .cp-fphoto img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .cp-fphoto-fallback {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            linear-gradient(
              145deg,
              var(--green-deep),
              var(--green)
            );

          color: #fff;

          font-family: var(--font-display), sans-serif;

          font-weight: 700;

          font-size: 19px;
        }


        /* ============================================================
           CLIENT TEXT
        ============================================================ */

        .cp-fname {
          font-family: var(--font-display), sans-serif;

          font-size: 19px;

          font-weight: 700;

          color: var(--ink);

          line-height: 1.25;

          letter-spacing: -.02em;

          max-width: 210px;
        }

        .cp-fcat {
          font-size: 12px;

          font-weight: 500;

          color: var(--ink-soft);

          line-height: 1.4;
        }


        /* ============================================================
           NAVIGATION
        ============================================================ */

        .cp-carousel-nav {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 20px;

          margin-top: 8px;
        }

        .cp-cbtn {
          width: 44px;
          height: 44px;

          border-radius: 50%;

          border: 1px solid var(--line);

          background: #fff;

          color: var(--ink);

          cursor: pointer;

          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 20px;

          box-shadow:
            0 8px 22px rgba(16,21,15,.06);

          transition:
            transform .25s ease,
            background .25s ease,
            color .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .cp-cbtn:hover {
          background: var(--green);

          color: #fff;

          border-color: var(--green);

          transform: translateY(-2px);

          box-shadow:
            0 12px 25px rgba(28,107,68,.22);
        }

        .cp-dots {
          display: flex;

          gap: 8px;

          flex-wrap: wrap;

          max-width: 180px;

          justify-content: center;
        }

        .cp-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--line);

          cursor: pointer;

          border: none;

          padding: 0;

          transition:
            background .2s ease,
            transform .2s ease,
            width .2s ease;
        }

        .cp-dot.active {
          width: 20px;

          border-radius: 999px;

          background: var(--green);

          transform: scale(1.05);
        }


        /* ============================================================
           ALSO TRUSTED
        ============================================================ */

        .cp-also-wrap {
          margin-top: 88px;

          padding-top: 44px;

          border-top:
            1px solid rgba(221,226,214,.8);
        }

        .cp-also-label {
          font-size: 11px;

          font-weight: 800;

          letter-spacing: .16em;

          text-transform: uppercase;

          color: var(--ink-soft);

          text-align: center;

          margin-bottom: 30px;
        }

        .cp-marquee-mask {
          position: relative;

          overflow: hidden;

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 8%,
              #000 92%,
              transparent
            );

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 8%,
              #000 92%,
              transparent
            );
        }

        .cp-marquee-track {
          display: flex;

          gap: 20px;

          width: max-content;

          animation:
            cp-scroll 28s linear infinite;
        }

        .cp-marquee-mask:hover
        .cp-marquee-track {
          animation-play-state: paused;
        }

        @keyframes cp-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .cp-schip {
          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 8px;

          width: 104px;

          flex: 0 0 auto;
        }

        .cp-scircle {
          width: 72px;
          height: 72px;

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              var(--green-deep),
              var(--green)
            );

          color: #fff;

          display: flex;

          align-items: center;
          justify-content: center;

          font-family:
            var(--font-display),
            sans-serif;

          font-weight: 700;

          font-size: 16px;

          border:
            3px solid rgba(255,255,255,.8);

          box-shadow:
            0 10px 25px rgba(18,63,41,.14);

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .cp-schip:hover .cp-scircle {
          transform:
            translateY(-5px)
            scale(1.05);

          box-shadow:
            0 16px 30px rgba(18,63,41,.2);
        }

        .cp-scircle.alt {
          background: #fff;

          color: var(--ink);

          border-color: var(--line);
        }

        .cp-sname {
          font-size: 11.5px;

          font-weight: 600;

          color: var(--ink-soft);

          text-align: center;

          line-height: 1.3;
        }


        /* ============================================================
           MOBILE
        ============================================================ */

        @media (max-width: 768px) {
          .cp-section {
            padding:
              76px 18px 64px;
          }

          .cp-header-row {
            margin-bottom: 48px;
          }

          .cp-h1 {
            font-size: clamp(36px, 10vw, 48px);

            letter-spacing: -.04em;
          }

          .cp-lede {
            font-size: 15px;

            max-width: 38ch;
          }

          .cp-carousel-outer {
            padding:
              18px 0 42px;
          }

          .cp-fcard {
            flex: 0 0 220px;

            padding:
              26px 18px 24px;
          }

          .cp-fphoto {
            width: 82px;
            height: 82px;
          }

          .cp-also-wrap {
            margin-top: 68px;
          }
        }


        /* ============================================================
           SMALL PHONES
        ============================================================ */

        @media (max-width: 480px) {
          .cp-section {
            padding:
              64px 14px 56px;
          }

          .cp-eyebrow {
            font-size: 10px;
          }

          .cp-eyebrow::before,
          .cp-eyebrow::after {
            width: 24px;
          }

          .cp-h1 {
            font-size: 35px;

            line-height: 1.04;
          }

          .cp-lede {
            font-size: 14px;

            line-height: 1.65;
          }

          .cp-carousel-label {
            margin-bottom: 14px;
          }

          .cp-fcard {
            flex: 0 0 200px;

            border-radius: 22px;

            padding:
              24px 16px 22px;
          }

          .cp-fphoto {
            width: 76px;
            height: 76px;
          }

          .cp-fname {
            font-size: 17px;
          }

          .cp-cbtn {
            width: 40px;
            height: 40px;
          }

          .cp-also-wrap {
            margin-top: 58px;

            padding-top: 34px;
          }
        }

      `}),f.jsxs("div",{className:"cp-wrap",children:[f.jsx("div",{className:"cp-eyebrow",children:"Clients"}),f.jsxs("div",{className:"cp-header-row",children:[f.jsxs("h2",{className:"cp-h1 font-display",children:["Backed by the creators",f.jsx("br",{}),"India already ",f.jsx("em",{children:"trusts."})]}),f.jsx("p",{className:"cp-lede",children:"A few of the channels and brands whose weekly content runs through Editor Bhai's edit desk."})]}),f.jsx("div",{className:"cp-carousel-label",children:"Main Clients"}),f.jsx("div",{className:"cp-carousel-outer",children:f.jsx("div",{className:"cp-carousel-track",ref:n,children:Vn.map((u,c)=>f.jsxs("div",{ref:d=>r.current[c]=d,className:`cp-fcard${c===e?" active":""}`,children:[f.jsx("div",{className:"cp-fphoto",children:u.image?f.jsx("img",{src:u.image,alt:u.name,loading:"lazy"}):f.jsx(IE,{name:u.name})}),f.jsx("div",{className:"cp-fname",children:u.name}),f.jsx("div",{className:"cp-fcat",children:u.category})]},u.name))})}),f.jsxs("div",{className:"cp-carousel-nav",children:[f.jsx("button",{className:"cp-cbtn","aria-label":"Previous client",onClick:()=>l(-1),children:"‹"}),f.jsx("div",{className:"cp-dots",children:Vn.map((u,c)=>f.jsx("button",{"aria-label":`Go to client ${c+1}`,className:`cp-dot${c===e?" active":""}`,onClick:()=>{s(c),o()}},c))}),f.jsx("button",{className:"cp-cbtn","aria-label":"Next client",onClick:()=>l(1),children:"›"})]}),f.jsxs("div",{className:"cp-also-wrap",children:[f.jsx("div",{className:"cp-also-label",children:"Also Trusted By"}),f.jsx("div",{className:"cp-marquee-mask",children:f.jsx("div",{className:"cp-marquee-track",children:[...cp,...cp].map((u,c)=>{const d=u.split(" ").map(p=>p[0]).slice(0,2).join("");return f.jsxs("div",{className:"cp-schip",children:[f.jsx("div",{className:`cp-scircle${c%2===1?" alt":""}`,children:d}),f.jsx("div",{className:"cp-sname",children:u})]},`${u}-${c}`)})})})]})]})]})}const vp=[{quote:"I was posting randomly with no real plan. Editor Bhai turned one shoot into a week of content and it finally started compounding.",name:"Rohan Malhotra",role:"Fitness Coach & YouTuber",img:15},{quote:"I had content going out but no positioning behind it. They helped me turn raw footage into something aligned with my brand.",name:"Priya Nair",role:"UGC Creator & Agency Owner",img:47},{quote:"The biggest shift was distribution. Same effort on my end, but everything now goes out consistently across every platform.",name:"Aarav Chopra",role:"Podcast Host",img:33},{quote:"As an astrologer, my content needed a very specific tone. This is the first team that actually got that right from day one.",name:"Meera Iyer",role:"Astrologer & Spiritual Coach",img:45},{quote:"We went from sporadic uploads to a proper content system. Watch time and inbound leads both moved in the same quarter.",name:"Kabir Singh",role:"Real Estate Business Owner",img:22},{quote:"Editing was never the bottleneck for me, planning was. Having one team handle both took that weight off completely.",name:"Ananya Rao",role:"Freelance Business Coach",img:60}],VE=[{name:"Rohan Malhotra",role:"Fitness Coach",duration:"1:24",gradient:"linear-gradient(155deg,#2F7D4F,#1F5C39)"},{name:"Priya Nair",role:"UGC Creator",duration:"0:58",gradient:"linear-gradient(155deg,#3D8F5C,#1F5C39)"},{name:"Aarav Chopra",role:"Podcast Host",duration:"2:10",gradient:"linear-gradient(155deg,#1F5C39,#0F3B24)"},{name:"Meera Iyer",role:"Astrologer",duration:"1:47",gradient:"linear-gradient(155deg,#4F9E6C,#286B48)"}];function RE(){return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        /* ============================================================
           SHARED SECTION
        ============================================================ */

        .tst-section,
        .vtc-section {
          --ink: #10150F;
          --ink-soft: #3C453D;
          --paper: #F6F7F1;
          --paper-raised: #FFFFFF;
          --line: #DDE2D6;
          --green: #1C6B44;
          --green-deep: #123F29;
          --green-tint: #E4EEE3;

          position: relative;

          padding: 100px 0 90px;

          font-family: Inter, sans-serif;

          -webkit-font-smoothing: antialiased;

          overflow: hidden;
        }


        /* ============================================================
           BACKGROUND
        ============================================================ */

        .tst-section {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(28,107,68,.07),
              transparent 36%
            ),
            var(--paper);

          border-top: 1px solid var(--line);
        }

        .vtc-section {
          background:
            linear-gradient(
              180deg,
              var(--paper) 0%,
              #F1F4EC 100%
            );
        }

        .tst-section::before,
        .vtc-section::before {
          content: "";

          position: absolute;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          background: rgba(28,107,68,.07);

          filter: blur(90px);

          pointer-events: none;
        }

        .tst-section::before {
          top: -250px;
          right: -100px;
        }

        .vtc-section::before {
          bottom: -250px;
          left: -100px;
        }


        /* ============================================================
           WRAPPER
        ============================================================ */

        .tst-wrap,
        .vtc-wrap {
          position: relative;

          z-index: 1;

          max-width: 1180px;

          margin: 0 auto;

          padding: 0 32px;
        }


        /* ============================================================
           EYEBROW
        ============================================================ */

        .tst-eyebrow,
        .vtc-eyebrow {
          display: flex;

          align-items: center;

          gap: 10px;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: .18em;

          text-transform: uppercase;

          color: var(--green);

          margin-bottom: 22px;
        }

        .tst-eyebrow::before,
        .vtc-eyebrow::before {
          content: "";

          width: 34px;

          height: 2px;

          border-radius: 999px;

          background: var(--green);

          display: inline-block;

          opacity: .75;
        }


        /* ============================================================
           HEADINGS
        ============================================================ */

        .tst-head,
        .vtc-head {
          max-width: 720px;
        }

        .tst-head h2,
        .vtc-head h2 {
          font-family: var(--font-display), sans-serif;

          font-weight: 800;

          font-size: clamp(40px, 5vw, 58px);

          line-height: 1.04;

          letter-spacing: -.045em;

          color: var(--ink);

          margin: 0;
        }

        .tst-head h2 .light {
          color: var(--green);

          font-weight: 800;

          position: relative;
        }

        .tst-head h2 .light::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: -5px;

          height: 3px;

          border-radius: 999px;

          background: var(--green);

          opacity: .22;
        }

        .tst-sub,
        .vtc-sub {
          color: var(--ink-soft);

          font-size: 15px;

          line-height: 1.7;

          margin-top: 16px;

          max-width: 52ch;
        }


        /* ============================================================
           TESTIMONIAL MARQUEE
        ============================================================ */

        .tst-marquee {
          margin-top: 58px;

          position: relative;

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 7%,
              #000 93%,
              transparent
            );

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 7%,
              #000 93%,
              transparent
            );
        }

        .tst-track {
          display: flex;

          gap: 22px;

          width: max-content;

          animation:
            tst-scroll 48s linear infinite;
        }

        .tst-marquee:hover .tst-track {
          animation-play-state: paused;
        }

        @keyframes tst-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }


        /* ============================================================
           TESTIMONIAL CARD
        ============================================================ */

        .tst-card {
          position: relative;

          width: 350px;

          min-height: 260px;

          flex: none;

          display: flex;

          flex-direction: column;

          padding: 30px 28px 26px;

          border-radius: 24px;

          border: 1px solid rgba(221,226,214,.95);

          background: rgba(255,255,255,.72);

          backdrop-filter: blur(12px);

          -webkit-backdrop-filter: blur(12px);

          box-shadow:
            0 15px 40px rgba(16,21,15,.045);

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease,
            background .35s ease;
        }

        .tst-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 28px;
          right: 28px;

          height: 3px;

          border-radius: 0 0 999px 999px;

          background: var(--green);

          opacity: .12;

          transition: opacity .3s ease;
        }

        .tst-card:hover {
          transform: translateY(-8px);

          background: #fff;

          border-color:
            rgba(28,107,68,.35);

          box-shadow:
            0 28px 55px -25px rgba(16,21,15,.24),
            0 0 30px rgba(28,107,68,.06);
        }

        .tst-card:hover::before {
          opacity: .6;
        }


        /* ============================================================
           QUOTE
        ============================================================ */

        .tst-quote {
          position: relative;

          font-size: 14px;

          line-height: 1.75;

          color: var(--ink);

          font-style: italic;

          flex: 1;

          margin: 0;

          padding-top: 5px;
        }

        .tst-quote::before {
          content: "\\201C";

          display: block;

          font-family:
            var(--font-display),
            sans-serif;

          font-size: 48px;

          font-style: normal;

          font-weight: 800;

          line-height: .6;

          color: var(--green);

          margin-bottom: 12px;
        }

        .tst-quote::after {
          content: "\\201D";

          color: var(--green);

          font-style: normal;

          margin-left: 2px;
        }


        /* ============================================================
           DIVIDER
        ============================================================ */

        .tst-divider {
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              var(--line),
              transparent
            );

          margin: 24px 0 19px;
        }


        /* ============================================================
           PERSON
        ============================================================ */

        .tst-person {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .tst-avatar {
          width: 46px;
          height: 46px;

          flex: none;

          border-radius: 50%;

          overflow: hidden;

          border: 2px solid #fff;

          outline: 2px solid var(--green-tint);

          box-shadow:
            0 6px 18px rgba(16,21,15,.1);
        }

        .tst-avatar img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .tst-name {
          font-family:
            var(--font-display),
            sans-serif;

          font-size: 14px;

          font-weight: 700;

          color: var(--ink);

          letter-spacing: -.01em;
        }

        .tst-role {
          font-size: 11.5px;

          color: var(--ink-soft);

          margin-top: 2px;
        }


        /* ============================================================
           VIDEO SECTION
        ============================================================ */

        .vtc-head {
          max-width: 680px;
        }

        .vtc-grid {
          margin-top: 52px;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 20px;
        }


        /* ============================================================
           VIDEO CARD
        ============================================================ */

        .vtc-card {
          position: relative;

          border-radius: 24px;

          overflow: hidden;

          aspect-ratio: 9 / 13;

          cursor: pointer;

          background: var(--green-deep);

          box-shadow:
            0 20px 42px rgba(16,21,15,.12);

          border: 1px solid rgba(255,255,255,.5);

          transition:
            transform .4s cubic-bezier(.34,1.56,.64,1),
            box-shadow .4s ease;
        }

        .vtc-card:hover {
          transform:
            translateY(-8px)
            scale(1.015);

          box-shadow:
            0 30px 55px rgba(16,21,15,.2);
        }


        /* ============================================================
           VIDEO THUMBNAIL
        ============================================================ */

        .vtc-thumb {
          position: absolute;

          inset: 0;

          background-size: cover;

          background-position: center;

          transition:
            transform .6s ease;
        }

        .vtc-card:hover .vtc-thumb {
          transform: scale(1.07);
        }

        .vtc-card::before {
          content: "";

          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              180deg,
              rgba(16,21,15,.08) 0%,
              rgba(16,21,15,.02) 35%,
              rgba(16,21,15,.82) 100%
            );
        }


        /* ============================================================
           VIDEO DURATION
        ============================================================ */

        .vtc-duration {
          position: absolute;

          top: 14px;

          right: 14px;

          z-index: 3;

          background:
            rgba(16,21,15,.55);

          backdrop-filter: blur(8px);

          color: #fff;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: .03em;

          padding: 5px 9px;

          border-radius: 999px;

          border:
            1px solid rgba(255,255,255,.15);
        }


        /* ============================================================
           PLAY BUTTON
        ============================================================ */

        .vtc-play {
          position: absolute;

          top: 50%;
          left: 50%;

          transform:
            translate(-50%, -50%);

          z-index: 3;

          width: 62px;
          height: 62px;

          border-radius: 50%;

          background:
            rgba(255,255,255,.94);

          display: flex;

          align-items: center;
          justify-content: center;

          box-shadow:
            0 12px 30px rgba(16,21,15,.18);

          transition:
            transform .35s cubic-bezier(.34,1.56,.64,1),
            background .25s ease,
            box-shadow .25s ease;
        }

        .vtc-card:hover .vtc-play {
          transform:
            translate(-50%, -50%)
            scale(1.14);

          background: #fff;

          box-shadow:
            0 18px 38px rgba(16,21,15,.24);
        }

        .vtc-play svg {
          width: 21px;
          height: 21px;

          fill: var(--green-deep);

          margin-left: 3px;
        }


        /* ============================================================
           VIDEO INFO
        ============================================================ */

        .vtc-info {
          position: absolute;

          left: 18px;
          right: 18px;

          bottom: 16px;

          z-index: 3;
        }

        .vtc-name {
          color: #fff;

          font-family:
            var(--font-display),
            sans-serif;

          font-size: 15px;

          font-weight: 700;

          letter-spacing: -.01em;
        }

        .vtc-role {
          color:
            rgba(255,255,255,.78);

          font-size: 11.5px;

          margin-top: 3px;
        }


        /* ============================================================
           RESPONSIVE
        ============================================================ */

        @media (max-width: 980px) {
          .vtc-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .tst-section,
          .vtc-section {
            padding: 82px 0 74px;
          }
        }


        @media (max-width: 640px) {
          .tst-wrap,
          .vtc-wrap {
            padding: 0 18px;
          }

          .tst-section,
          .vtc-section {
            padding: 72px 0 64px;
          }

          .tst-head h2,
          .vtc-head h2 {
            font-size: 36px;

            line-height: 1.06;
          }

          .tst-sub,
          .vtc-sub {
            font-size: 14px;

            line-height: 1.65;
          }

          .tst-marquee {
            margin-top: 44px;
          }

          .tst-card {
            width: 290px;

            min-height: 245px;

            padding:
              26px 22px 24px;

            border-radius: 22px;
          }

          .vtc-grid {
            grid-template-columns:
              repeat(2, 1fr);

            gap: 12px;

            margin-top: 40px;
          }

          .vtc-card {
            border-radius: 20px;
          }

          .vtc-play {
            width: 52px;
            height: 52px;
          }

          .vtc-play svg {
            width: 18px;
            height: 18px;
          }

          .vtc-info {
            left: 13px;
            right: 13px;
            bottom: 12px;
          }

          .vtc-name {
            font-size: 13px;
          }

          .vtc-role {
            font-size: 10.5px;
          }
        }


        @media (max-width: 420px) {
          .tst-head h2,
          .vtc-head h2 {
            font-size: 32px;
          }

          .tst-card {
            width: 275px;
          }

          .vtc-grid {
            gap: 10px;
          }

          .vtc-card {
            border-radius: 18px;
          }

          .vtc-duration {
            top: 10px;
            right: 10px;

            font-size: 9px;

            padding: 4px 7px;
          }
        }
      `}),f.jsx("section",{id:"proof",className:"tst-section",children:f.jsxs("div",{className:"tst-wrap",children:[f.jsx(Y,{children:f.jsxs("div",{className:"tst-head",children:[f.jsx("div",{className:"tst-eyebrow",children:"Proof"}),f.jsxs("h2",{className:"font-display",children:["Client"," ",f.jsx("span",{className:"light",children:"Testimonials"})]}),f.jsx("p",{className:"tst-sub",children:"Real feedback from creators, coaches and business owners who rebuilt their content system with Editor Bhai."})]})}),f.jsx("div",{className:"tst-marquee",children:f.jsx("div",{className:"tst-track",children:[...vp,...vp].map((e,t)=>f.jsxs("div",{className:"tst-card",children:[f.jsx("p",{className:"tst-quote",children:e.quote}),f.jsx("div",{className:"tst-divider"}),f.jsxs("div",{className:"tst-person",children:[f.jsx("div",{className:"tst-avatar",children:f.jsx("img",{src:`https://i.pravatar.cc/100?img=${e.img}`,alt:e.name,loading:"lazy"})}),f.jsxs("div",{children:[f.jsx("div",{className:"tst-name",children:e.name}),f.jsx("div",{className:"tst-role",children:e.role})]})]})]},`${e.name}-${t}`))})})]})}),f.jsx("section",{id:"video-proof",className:"vtc-section",children:f.jsxs("div",{className:"vtc-wrap",children:[f.jsx(Y,{children:f.jsxs("div",{className:"vtc-head",children:[f.jsx("div",{className:"vtc-eyebrow",children:"Watch & Believe"}),f.jsx("h2",{className:"font-display",children:"Hear it straight from them."}),f.jsx("p",{className:"vtc-sub",children:"A few clients on camera, talking about what changed after working with us."})]})}),f.jsx("div",{className:"vtc-grid",children:VE.map((e,t)=>f.jsxs("div",{className:"vtc-card",children:[f.jsx("div",{className:"vtc-thumb",style:{background:e.gradient}}),f.jsx("div",{className:"vtc-duration",children:e.duration}),f.jsx("div",{className:"vtc-play",children:f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M8 5v14l11-7z"})})}),f.jsxs("div",{className:"vtc-info",children:[f.jsx("div",{className:"vtc-name",children:e.name}),f.jsx("div",{className:"vtc-role",children:e.role})]})]},`${e.name}-${t}`))})]})})]})}const _E={film:xk,sparkles:Dk,palette:Mk,image:bk,camera:ok,trend:V0,code:pk,target:Rk},xp=["/images/video-editing.png","/images/motion-graphics.png","/images/color-grading.png","/images/thumbnail-design.png","/images/shoot.png","/images/digital-marketing.png","/images/web-development.png","/images/seo.png"];function OE(){return f.jsxs("section",{id:"services",className:"relative py-14 md:py-20 bg-white overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 rounded-full bg-mint-100 blur-3xl translate-x-1/3 -translate-y-1/3","aria-hidden":"true"}),f.jsx("div",{className:"absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]","aria-hidden":"true"}),f.jsxs("div",{className:"relative max-w-7xl mx-auto px-5 md:px-8",children:[f.jsxs("div",{className:"flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28",children:[f.jsxs(Y,{className:"flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-4",children:[f.jsx("span",{className:"w-6 h-px bg-mint-500"}),"What We Do",f.jsx("span",{className:"w-6 h-px bg-mint-500"})]}),f.jsx(Y,{delay:.06,children:f.jsxs("h2",{className:"font-display font-black text-charcoal leading-tight text-4xl lg:text-5xl mb-6",children:["We help creators ",f.jsx("br",{}),f.jsx("span",{className:"text-mint-600",children:"stand out"})," and grow"]})}),f.jsx(Y,{delay:.12,children:f.jsx("p",{className:"text-charcoal-light text-lg leading-relaxed",children:"Editor Bhai works with creators, astrologers and podcasters to sharpen their visual presence, build content systems that compound, and turn raw footage into results. From strategy to delivery, we handle every step."})})]}),f.jsxs("div",{className:"flex flex-col items-center text-center mb-10",children:[f.jsxs(Y,{className:"flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3",children:[f.jsx("span",{className:"w-6 h-px bg-mint-500"}),"Capabilities",f.jsx("span",{className:"w-6 h-px bg-mint-500"})]}),f.jsx(Y,{delay:.06,children:f.jsxs("h2",{className:"font-display font-bold text-3xl md:text-4xl text-charcoal",children:["Our ",f.jsx("span",{className:"text-mint-600",children:"Toolkit"})]})})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Gk.map((e,t)=>{const n=_E[e.icon],r=xp[t%xp.length];return f.jsx(Y,{delay:t%6*.07,children:f.jsxs(G.div,{whileHover:{rotate:t%2===0?.5:-.5,scale:1.01,y:-6},transition:{type:"spring",stiffness:300,damping:20},className:"group relative h-[340px] sm:h-[380px] flex flex-col justify-end overflow-hidden rounded-2xl border border-mint-100 shadow-sm hover:shadow-xl hover:shadow-mint-200/60 transition-shadow duration-500 bg-mint-900",children:[f.jsx("div",{className:"absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90",style:{backgroundImage:`url('${r}')`}}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-mint-950 via-mint-900/60 to-transparent z-10 transition-all duration-500 group-hover:via-mint-900/40"}),n&&f.jsx(n,{className:"absolute -right-6 -top-6 w-40 h-40 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 z-10 mix-blend-overlay",strokeWidth:1.2}),f.jsx("span",{className:"absolute top-6 left-7 text-4xl font-display font-black text-white/30 z-20 group-hover:text-white/50 transition-colors drop-shadow-md",children:String(t+1).padStart(2,"0")}),n&&f.jsx("div",{className:"absolute top-6 right-6 z-20 w-10 h-10 rounded-xl bg-mint-500/80 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-mint-400 transition-colors duration-300 shadow-lg",children:f.jsx(n,{className:"w-5 h-5",strokeWidth:1.7})}),f.jsxs("div",{className:"relative z-20 p-7 transform translate-y-3 group-hover:translate-y-0 transition-transform",children:[f.jsx("h3",{className:"font-display text-2xl font-bold uppercase tracking-tight text-white mb-2 leading-none drop-shadow-md",children:e.title}),f.jsxs("p",{className:"text-mint-50 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 drop-shadow-sm",children:[e.desc,f.jsx(tk,{className:"w-4 h-4 shrink-0"})]})]})]})},e.title)})})]})]})}const zE=[{name:oe.realName,role:`Founder · ${oe.name}`,blurb:`Leads editing, strategy and client relationships day to day, working across ${oe.locations.join(", ")}.`,image:"/images/founder.jpeg"},{name:"Rakhi Pandey",role:"Co-Founder",blurb:"Growth Head",image:"/images/co-founder.jpeg"}],wp=[{name:"Gauri",role:"Video Editor"},{name:"Sunny Pal",role:"Video Editor"},{name:"Mahendra",role:"Video Editor"},{name:"Sheetal Pandey",role:"Web Development"},{name:"Saumya Mishra",role:"Social Media Manager"},{name:"Kunal",role:"Social Media Manager"},{name:"Diwakar Bhardwaj",role:"Graphic Designer"},{name:"Sanjana Singh",role:"Video Editor"},{name:"Saurabh Gupta",role:"Graphic Designer"},{name:"Muskan Sharma",role:"Researcher & Script Writer"},{name:"Prachi",role:"Researcher & Script Writer"}],Sp=["bg-mint-500","bg-mint-600","bg-emerald-600","bg-teal-600","bg-mint-700"];function FE(e){return e.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}function BE(){return f.jsxs("section",{id:"about",className:"relative py-20 lg:py-28 bg-white overflow-hidden",children:[f.jsx("div",{className:"absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-mint-100 blur-[140px] opacity-40","aria-hidden":"true"}),f.jsxs("div",{className:"relative max-w-7xl mx-auto px-6 lg:px-10",children:[f.jsx(Y,{children:f.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[f.jsx("span",{className:"w-10 h-[2px] bg-mint-500"}),f.jsx("span",{className:"uppercase tracking-[0.25em] text-sm font-semibold text-mint-600",children:"Leadership"})]})}),f.jsx(Y,{delay:.06,children:f.jsx("h2",{className:"font-display font-black text-charcoal leading-tight text-3xl lg:text-4xl",children:"Meet the Founders"})}),f.jsx(Y,{delay:.1,children:f.jsx("p",{className:"mt-4 text-charcoal-light leading-7 text-base max-w-xl",children:"The people steering Editor Bhai's editing, strategy and client relationships day to day."})}),f.jsx("div",{className:"grid sm:grid-cols-2 gap-6 mt-10",children:zE.map((e,t)=>f.jsx(Y,{delay:.12+t*.08,children:f.jsxs(G.div,{whileHover:{y:-4},transition:{duration:.25},className:"flex items-center gap-5 rounded-2xl border border-mint-100 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300",children:[f.jsx("div",{className:"w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shrink-0 shadow-md border border-mint-100",children:e.image?f.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover"}):f.jsx("div",{className:"w-full h-full bg-mint-50 flex items-center justify-center font-display font-bold text-mint-700 text-xl",children:e.name.split(" ").map(n=>n[0]).join("").slice(0,2)})}),f.jsxs("div",{children:[f.jsx("p",{className:"font-display font-bold text-lg text-charcoal",children:e.name}),f.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-mint-600 mt-1",children:e.role}),f.jsx("p",{className:"mt-2 text-sm text-charcoal-soft leading-6",children:e.blurb})]})]})},e.name))}),f.jsx(Y,{delay:.05,className:"mt-16 lg:mt-20",children:f.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[f.jsx("span",{className:"w-10 h-[2px] bg-mint-500"}),f.jsx("span",{className:"uppercase tracking-[0.25em] text-sm font-semibold text-mint-600",children:"The People"})]})}),f.jsx(Y,{delay:.06,children:f.jsx("h2",{className:"font-display font-black text-charcoal leading-tight text-4xl lg:text-5xl",children:"Meet the Team"})}),f.jsx(Y,{delay:.12,children:f.jsx("p",{className:"mt-5 text-charcoal-light leading-8 text-lg max-w-2xl",children:"Eleven specialists across editing, design, web and content — the crew behind every video that ships."})}),f.jsx(Y,{delay:.18,children:f.jsxs("div",{className:"inline-flex items-center gap-2 mt-6 bg-mint-100 text-mint-700 text-sm font-semibold px-4 py-2 rounded-full",children:[f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-mint-500"}),wp.length," team members"]})}),f.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 mt-10",children:wp.map((e,t)=>f.jsx(Y,{delay:.1+t%6*.05,children:f.jsxs(G.div,{whileHover:{y:-4},transition:{duration:.25},className:"h-full rounded-2xl border border-mint-100 bg-white p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300",children:[f.jsx("span",{className:`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl text-white font-display font-bold text-base ${Sp[t%Sp.length]}`,children:FE(e.name)}),f.jsx("p",{className:"font-semibold text-charcoal text-sm leading-snug",children:e.name}),f.jsx("p",{className:"mt-1 text-xs text-charcoal-soft leading-snug",children:e.role})]})},e.name))})]})]})}function Cs(e=.15){const t=j.useRef(null),[n,r]=j.useState(!1);return j.useEffect(()=>{const i=t.current;if(!i)return;if(!("IntersectionObserver"in window)){r(!0);return}const s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(r(!0),s.unobserve(a.target))})},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}const $E=f.jsx("svg",{viewBox:"0 0 24 24",children:f.jsx("path",{d:"M5 12l5 5L19 7"})}),WE=[{key:"basic",kicker:"Foundation",name:"Basic Plan",tagline:"For creators who want consistent, professional content without hiring in-house.",priceAmt:"Custom pricing",priceNote:"tailored to your channel",sections:[{label:"What you get",items:["4 long-form videos every month, published every Saturday","30 YouTube Shorts, cut for retention","30 Reels for Instagram & Facebook","Every long video cross-posted to Facebook","8 social posts, plus a thumbnail for your Saturday upload","Monthly content calendar, planned in advance"]},{label:"Your dedicated team",team:!0,items:["Social Media Manager & Researcher","1 Video Editor","1 Graphic Designer"]}],cta:"Get a proposal",foot:"No lock-in — scale up whenever you're ready."},{key:"pro",popular:!0,kicker:"Growth",name:"Pro Plan",tagline:"For channels ready to post twice a week and turn output into real momentum.",priceAmt:"Custom pricing",priceNote:"tailored to your channel",sections:[{label:"Everything in Basic, plus",items:["8 long-form videos every month — every Wednesday & Saturday","30 YouTube Shorts","30 Reels for Instagram & Facebook","All 8 long videos cross-posted to Facebook","16 social posts, plus a thumbnail for your Saturday upload","Dedicated scriptwriter on every video","Priority turnaround on every deliverable"]},{label:"Your dedicated team",team:!0,items:["Social Media Manager & Researcher","1 Writer","2 Video Editors","1 Graphic Designer"]}],cta:"Get a proposal",foot:"Our most-booked plan for scaling channels."},{key:"custom",custom:!0,kicker:"Signature",name:"Custom Plan",tagline:"For brands and creators with a specific vision — you set the scope, we build the team around it.",priceAmt:"Quoted after a call",priceNote:"priced to exactly what you need",sections:[{label:"You choose",items:["Upload volume & frequency — as light or aggressive as you need","Which platforms we manage: YouTube, Instagram, Facebook, LinkedIn & more","Full social media handling, from captions to community replies","A digital marketing strategy built around your growth goals","A dedicated account manager as your single point of contact","Team size that scales up or down with your workload"]}],chips:["SEO","On-location shoots","Web development","PR & press outreach","Podcast editing","Paid ad creatives"],cta:"Build my plan",foot:"Start with a 20-minute scoping call — no obligation."}],HE=[{title:"1. Discovery",desc:"Understand your channel, audience and goals.",icon:f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),f.jsx("line",{x1:"20",y1:"20",x2:"15.5",y2:"15.5"})]})},{title:"2. Research & Strategy",desc:"Competitor scan, trends and content pillars for your niche.",icon:f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("path",{d:"M3 17l6-6 4 4 8-8"}),f.jsx("path",{d:"M15 7h6v6"})]})},{title:"3. Planning",desc:"Content calendar, scripts and delivery schedule locked in.",icon:f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("rect",{x:"5",y:"4",width:"14",height:"17",rx:"2"}),f.jsx("path",{d:"M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z"}),f.jsx("path",{d:"M8.5 13l2 2 4-4"})]})},{title:"4. Editing & Design",desc:"Cut, grade and design with weekly check-ins.",icon:f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("circle",{cx:"6.5",cy:"6.5",r:"2"}),f.jsx("circle",{cx:"6.5",cy:"18",r:"2"}),f.jsx("path",{d:"M20 4L8.5 15.5"}),f.jsx("path",{d:"M20 20L8.5 8.5"})]})},{title:"5. Review",desc:"You approve every deliverable before it ships.",icon:f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("path",{d:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]})},{title:"6. Delivery",desc:"Polished, ready-to-publish files, on time.",icon:f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("path",{d:"M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10z"}),f.jsx("circle",{cx:"12",cy:"9",r:"2"}),f.jsx("path",{d:"M12 17v4"})]})}];function UE({plan:e,index:t}){const[n,r]=Cs(),i=`pln-card${e.popular?" popular":""}${e.custom?" custom":""}${r?" in-view":""}`;return f.jsxs("div",{ref:n,className:i,style:{transitionDelay:`${(t+1)*.12}s`},children:[e.popular&&f.jsxs("div",{className:"pln-badge",children:[f.jsx("span",{className:"spark"})," Most popular"]}),e.custom&&f.jsxs("div",{className:"pln-badge alt",children:[f.jsx("span",{className:"spark"})," Build your own"]}),f.jsx("div",{className:"pln-kicker",children:e.kicker}),f.jsx("div",{className:"pln-name",children:e.name}),f.jsx("p",{className:"pln-tagline",children:e.tagline}),f.jsxs("div",{className:"pln-price",children:[f.jsx("span",{className:"amt",children:e.priceAmt}),f.jsx("span",{className:"note",children:e.priceNote})]}),e.sections.map(s=>f.jsxs("div",{children:[f.jsx("div",{className:"pln-section-label",children:s.label}),f.jsx("ul",{className:"pln-list",children:s.items.map((o,a)=>f.jsxs("li",{className:s.team?"team":"",style:{transitionDelay:`${.55+a*.05}s`},children:[!s.team&&f.jsx("span",{className:"tick",children:$E}),o]},o))})]},s.label)),e.chips&&f.jsx("div",{className:"pln-chips",children:e.chips.map((s,o)=>f.jsx("span",{className:"pln-chip",style:{transitionDelay:`${.6+o*.04}s`},children:s},s))}),f.jsx("a",{href:oe.googleFormUrl,target:"_blank",rel:"noopener noreferrer",className:"pln-cta",children:e.cta}),f.jsx("div",{className:"pln-foot",children:e.foot})]})}function GE(){const[e,t]=Cs(),[n,r]=Cs(.2),[i,s]=Cs(.2);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .pln-section, .prc-section{
          --cream:#FAF9F4;
          --panel:#FFFFFF;
          --ink:#15181C;
          --muted:#6B7178;
          --green:#2F7D4F;
          --green-dark:#1F5C39;
          --green-soft:#E7F2EB;
          --line:#E7E4DA;
          font-family:'Inter',sans-serif;
          -webkit-font-smoothing:antialiased;
        }
        .pln-wrap, .prc-wrap{max-width:1160px;margin:0 auto;padding:0 32px;}
        .pln-eyebrow, .prc-eyebrow{
          display:flex;align-items:center;gap:10px;
          font-family:'Space Grotesk',sans-serif;
          font-size:13px;font-weight:600;letter-spacing:.16em;
          color:var(--green);text-transform:uppercase;margin-bottom:18px;
        }
        .pln-eyebrow::before, .prc-eyebrow::before{content:"";width:28px;height:2px;background:var(--green);display:inline-block;}

        /* ---------- PLANS ---------- */
        .pln-section{
          background:linear-gradient(180deg,var(--cream) 0%,#F2F5EF 100%);
          position:relative;overflow:hidden;padding:100px 0 120px;
        }
        .pln-section::before{
          content:"";position:absolute;top:-180px;right:-160px;width:480px;height:480px;
          border-radius:50%;background:radial-gradient(circle,rgba(47,125,79,.14),transparent 70%);
          pointer-events:none;animation:pln-float-blob 9s ease-in-out infinite;
        }
        .pln-section::after{
          content:"";position:absolute;bottom:-200px;left:-140px;width:420px;height:420px;
          border-radius:50%;background:radial-gradient(circle,rgba(47,125,79,.10),transparent 70%);
          pointer-events:none;animation:pln-float-blob 11s ease-in-out infinite reverse;
        }
        @keyframes pln-float-blob{
          0%,100%{transform:translate(0,0) scale(1);}
          50%{transform:translate(-20px,26px) scale(1.08);}
        }
        .pln-wrap{position:relative;z-index:1;}

        .pln-head{max-width:660px;opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
        .pln-head.in-view{opacity:1;transform:translateY(0);}
        .pln-head h2{font-family:'Space Grotesk',sans-serif;font-size:42px;font-weight:700;line-height:1.16;letter-spacing:-.015em;margin:0;color:var(--ink);}
        .pln-head p{color:var(--muted);font-size:16px;line-height:1.7;margin:16px 0 0;max-width:560px;}

        .pln-grid{margin-top:54px;display:flex;flex-wrap:nowrap;gap:26px;align-items:stretch;}

        .pln-card{
          flex:1 1 0;min-width:0;
          background:var(--panel);border:1px solid var(--line);border-radius:24px;
          padding:38px 34px 34px;display:flex;flex-direction:column;
          position:relative;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s ease,
            opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1);
          box-shadow:0 18px 40px rgba(21,24,28,.05);
          opacity:0;transform:translateY(34px) scale(.97);
          color:var(--ink);
        }
        .pln-card.in-view{opacity:1;transform:translateY(0) scale(1);}
        .pln-card:hover{transform:translateY(-6px);box-shadow:0 26px 50px rgba(21,24,28,.10);}

        .pln-card.popular{
          background:linear-gradient(180deg,#FFFFFF 0%,var(--green-soft) 240%);
          border:2px solid var(--green);
          box-shadow:0 26px 54px rgba(47,125,79,.20);
        }
        @media (min-width:981px){
          .pln-card.popular.in-view{transform:translateY(-10px) scale(1);}
        }
        .pln-card.popular:hover{transform:translateY(-14px);box-shadow:0 32px 60px rgba(47,125,79,.26);}
        .pln-card.popular.in-view{animation:pln-breathe 3.6s ease-in-out .8s infinite;}
        @keyframes pln-breathe{
          0%,100%{box-shadow:0 26px 54px rgba(47,125,79,.20);}
          50%{box-shadow:0 30px 64px rgba(47,125,79,.34);}
        }
        .pln-card.popular:hover{animation-play-state:paused;}

        .pln-card.custom{
          border:1.5px dashed #B9C7BC;
          background:linear-gradient(180deg,#FFFFFF 0%,#FBFBF8 100%);
        }

        .pln-badge{
          position:absolute;top:-14px;left:34px;
          display:inline-flex;align-items:center;gap:6px;
          background:var(--green);color:#fff;font-family:'Space Grotesk',sans-serif;
          font-size:12px;font-weight:700;letter-spacing:.04em;
          padding:7px 16px;border-radius:999px;
          box-shadow:0 8px 16px rgba(47,125,79,.30);
          opacity:0;transform:translateY(6px) scale(.9);
          transition:opacity .4s ease .5s,transform .4s cubic-bezier(.34,1.56,.64,1) .5s;
        }
        .pln-card.in-view .pln-badge{opacity:1;transform:translateY(0) scale(1);}
        .pln-badge.alt{background:var(--ink);}
        .pln-badge .spark{width:6px;height:6px;border-radius:50%;background:#fff;display:inline-block;animation:pln-badge-pulse 1.7s ease-in-out infinite;}
        @keyframes pln-badge-pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.7);}}

        .pln-kicker{font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--green);}
        .pln-name{font-family:'Space Grotesk',sans-serif;font-size:27px;font-weight:700;margin-top:6px;}
        .pln-tagline{color:var(--muted);font-size:14px;line-height:1.6;margin-top:8px;min-height:40px;}

        .pln-price{display:flex;align-items:baseline;gap:8px;margin-top:22px;padding-top:22px;border-top:1px solid var(--line);}
        .pln-price .amt{font-family:'Space Grotesk',sans-serif;font-size:15px;font-weight:600;color:var(--ink);}
        .pln-price .note{font-size:12.5px;color:var(--muted);}

        .pln-section-label{font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink);margin-top:24px;}

        .pln-list{list-style:none;margin:14px 0 0;padding:0;flex:1;}
        .pln-list li{
          display:flex;align-items:flex-start;gap:10px;
          font-size:14px;line-height:1.55;color:var(--ink);padding:7px 0;
          opacity:0;transform:translateX(-8px);
          transition:opacity .4s ease,transform .4s ease;
        }
        .pln-card.in-view .pln-list li{opacity:1;transform:translateX(0);}
        .pln-list li .tick{
          flex:none;width:18px;height:18px;border-radius:50%;background:var(--green-soft);
          display:flex;align-items:center;justify-content:center;margin-top:1px;
          transform:scale(0);transition:transform .3s cubic-bezier(.34,1.56,.64,1);
        }
        .pln-card.in-view .pln-list li .tick{transform:scale(1);}
        .pln-list li .tick svg{width:11px;height:11px;stroke:var(--green-dark);stroke-width:3;fill:none;}
        .pln-list li.team{color:var(--muted);}

        .pln-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
        .pln-chip{
          font-size:11.5px;font-weight:600;color:var(--green-dark);background:var(--green-soft);
          padding:6px 12px;border-radius:999px;
          opacity:0;transform:scale(.85);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);
        }
        .pln-card.in-view .pln-chip{opacity:1;transform:scale(1);}

        .pln-cta{
          margin-top:28px;display:block;width:100%;text-align:center;
          padding:15px 20px;border-radius:999px;text-decoration:none;
          font-family:'Space Grotesk',sans-serif;font-size:14.5px;font-weight:700;
          background:var(--ink);color:#fff;border:none;cursor:pointer;
          transition:transform .2s ease,background .2s ease,box-shadow .2s ease;
        }
        .pln-cta:hover{transform:translateY(-2px);background:var(--green-dark);}
        .pln-card.popular .pln-cta{background:var(--green);box-shadow:0 12px 24px rgba(47,125,79,.30);}
        .pln-card.popular .pln-cta:hover{background:var(--green-dark);}
        .pln-card.custom .pln-cta{background:transparent;color:var(--ink);border:1.5px solid var(--ink);}
        .pln-card.custom .pln-cta:hover{background:var(--ink);color:#fff;}

        .pln-foot{margin-top:12px;font-size:11.5px;color:var(--muted);text-align:center;}

        .pln-note{margin-top:40px;display:flex;align-items:center;gap:10px;font-size:13.5px;color:var(--muted);justify-content:center;}
        .pln-note .dot{width:6px;height:6px;border-radius:50%;background:var(--green);display:inline-block;}

        @media (max-width:980px){
          .pln-grid{flex-wrap:wrap;}
          .pln-card{flex:1 1 100%;}
          .pln-card.popular{transform:none;}
          .pln-card.popular:hover{transform:translateY(-6px);}
          .pln-head h2{font-size:32px;}
        }
        @media (max-width:480px){
          .pln-wrap{padding:0 20px;}
          .pln-card{padding:30px 24px 28px;}
        }

        /* ---------- PROCESS ---------- */
        .prc-section{background:var(--panel);border-top:1px solid var(--line);padding:100px 0 110px;}
        .prc-head{max-width:640px;opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
        .prc-head.in-view{opacity:1;transform:translateY(0);}
        .prc-head h2{font-family:'Space Grotesk',sans-serif;font-size:38px;font-weight:700;line-height:1.18;letter-spacing:-.015em;margin:0;color:var(--ink);}
        .prc-head p{color:var(--muted);font-size:15.5px;line-height:1.7;margin:16px 0 0;max-width:520px;}

        .prc-row{position:relative;margin-top:64px;display:flex;flex-wrap:nowrap;gap:8px;}
        .prc-step{flex:1 1 0;min-width:0;}
        .prc-line{
          position:absolute;top:32px;left:calc(100%/12);right:calc(100%/12);height:2px;
          background:linear-gradient(90deg,var(--green) 0%,var(--green-dark) 100%);
          transform-origin:left center;transform:scaleX(0);
          transition:transform 1.3s cubic-bezier(.2,.8,.2,1);z-index:0;
        }
        .prc-row.in-view .prc-line{transform:scaleX(1);}

        .prc-step{
          position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;
          text-align:center;padding:0 8px;
          opacity:0;transform:translateY(22px);
          transition:opacity .55s ease,transform .55s cubic-bezier(.2,.8,.2,1);
        }
        .prc-row.in-view .prc-step{opacity:1;transform:translateY(0);}

        .prc-icon{
          width:64px;height:64px;border-radius:17px;background:var(--ink);flex:none;
          display:flex;align-items:center;justify-content:center;margin-bottom:22px;
          box-shadow:0 12px 24px rgba(21,24,28,.20);
          transform:scale(0);transition:transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .prc-row.in-view .prc-icon{transform:scale(1);}
        .prc-icon svg{width:25px;height:25px;stroke:#fff;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;}

        .prc-step-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;color:var(--ink);}
        .prc-step-desc{color:var(--muted);font-size:13.5px;line-height:1.6;margin-top:7px;max-width:190px;}

        @media (max-width:980px){
          .prc-row{flex-wrap:wrap;row-gap:44px;}
          .prc-step{flex:1 1 30%;}
          .prc-line{display:none;}
          .prc-head h2{font-size:30px;}
        }
        @media (max-width:640px){
          .prc-row{flex-direction:column;row-gap:0;}
          .prc-step{flex:1 1 auto;flex-direction:row;text-align:left;align-items:flex-start;padding:22px 0;gap:18px;border-bottom:1px solid var(--line);}
          .prc-step:last-child{border-bottom:none;}
          .prc-icon{margin-bottom:0;}
          .prc-step-desc{max-width:none;}
        }
      `}),f.jsx("section",{className:"pln-section",id:"plans",children:f.jsxs("div",{className:"pln-wrap",children:[f.jsxs("div",{ref:e,className:`pln-head${t?" in-view":""}`,children:[f.jsx("div",{className:"pln-eyebrow",children:"Plans"}),f.jsx("h2",{children:"Three ways to work together."}),f.jsx("p",{children:"Every plan comes with a dedicated team, not a ticketing queue — from your first upload to a fully managed content engine. Pick a starting point below, or build one around exactly what your channel needs."})]}),f.jsx("div",{className:"pln-grid",children:WE.map((o,a)=>f.jsx(UE,{plan:o,index:a},o.key))}),f.jsxs("div",{className:"pln-note",children:[f.jsx("span",{className:"dot"})," All plans include a monthly performance review and full ownership of every asset we create for you."]})]})}),f.jsx("section",{className:"prc-section",id:"process",children:f.jsxs("div",{className:"prc-wrap",children:[f.jsxs("div",{ref:n,className:`prc-head${r?" in-view":""}`,children:[f.jsx("div",{className:"prc-eyebrow",children:"Process"}),f.jsx("h2",{children:"From first message to your next upload."}),f.jsx("p",{children:"Every plan runs on the same six-step system — so nothing gets missed between your first message and the moment your video goes live."})]}),f.jsxs("div",{ref:i,className:`prc-row${s?" in-view":""}`,children:[f.jsx("div",{className:"prc-line"}),HE.map(o=>f.jsxs("div",{className:"prc-step",children:[f.jsx("div",{className:"prc-icon",children:o.icon}),f.jsx("div",{className:"prc-step-title",children:o.title}),f.jsx("div",{className:"prc-step-desc",children:o.desc})]},o.title))]})]})})]})}function ny({className:e="w-5 h-5",strokeWidth:t=1.7}){return f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,className:e,children:[f.jsx("rect",{x:"3.5",y:"3.5",width:"17",height:"17",rx:"3.5",strokeLinejoin:"round"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 10.2v6M7.5 7.6v.02M11.2 16.2v-3.6c0-1.2.9-2 2-2s1.9.8 1.9 2v3.6M11.2 10.2v6"})]})}const YE=[{Icon:mr,label:"WhatsApp",href:oe.whatsappLink,primary:!0},{Icon:A0,label:"Book Consultation",href:oe.googleFormUrl,primary:!0},{Icon:ny,label:"LinkedIn",href:oe.linkedinLink,primary:!1},{Icon:ql,label:"Call",href:oe.phoneLink,primary:!1}],KE=[{Icon:O0,label:"48h turnaround"},{Icon:R0,label:"Dedicated editor"},{Icon:L0,label:"Free, no-obligation call"}],bp=[{flag:"🇮🇳",name:"India"},{flag:"🇨🇦",name:"Canada"},{flag:"🇫🇷",name:"France"},{flag:"🇴🇲",name:"Oman"},{flag:"🇦🇪",name:"UAE"}],XE=[{Icon:A0,label:"4K Exports",className:"top-[6%] -left-[8%]",delay:.5},{Icon:O0,label:"48h Turnaround",className:"bottom-[14%] -right-[9%]",delay:.68},{Icon:R0,label:"Dedicated Editor",className:"-bottom-[5%] left-[14%]",delay:.86}],qE=[{city:"Kolkata",region:"West Bengal"},{city:"Noida",region:"Delhi NCR"},{city:"Mumbai",region:"Maharashtra"},{city:"Bangalore",region:"Karnataka"}],QE=[{group:"North America",cities:[{city:"Toronto",region:"Canada"}]},{group:"Europe",cities:[{city:"Paris",region:"France"}]},{group:"Middle East",cities:[{city:"Muscat",region:"Oman"},{city:"Abu Dhabi",region:"UAE"}]}],ZE=[{label:"Toronto",sub:"Canada",left:"18%",top:"34%"},{label:"Paris",sub:"France",left:"46%",top:"30%"},{label:"Muscat",sub:"Oman",left:"60%",top:"48%"},{label:"Abu Dhabi",sub:"UAE",left:"58%",top:"52%"},{label:"India · 4 hubs",sub:"Kolkata, Noida, Mumbai, Bangalore",left:"68%",top:"46%",big:!0}],JE=[{value:"5",label:"Countries served"},{value:"8",label:"Cities"},{value:"1",label:"Shared process"}];function eC(){return f.jsxs("section",{id:"contact",className:"relative overflow-hidden bg-white",children:[f.jsx("div",{className:`
          absolute
          -top-24
          -right-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-mint-100/30
          blur-3xl
          pointer-events-none
        `,"aria-hidden":"true"}),f.jsx("div",{className:`
          absolute
          -bottom-24
          -left-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-mint-50/40
          blur-3xl
          pointer-events-none
        `,"aria-hidden":"true"}),f.jsx("div",{className:`
          relative
          max-w-6xl
          mx-auto
          px-4
          sm:px-5
          md:px-8
          pt-14
          sm:pt-16
          md:pt-24
          pb-14
          sm:pb-16
          md:pb-20
        `,children:f.jsxs("div",{className:`
            grid
            lg:grid-cols-[1.05fr_0.95fr]
            gap-10
            sm:gap-12
            lg:gap-14
            items-center
          `,children:[f.jsxs("div",{className:"min-w-0",children:[f.jsxs(Y,{className:`
                flex
                items-center
                gap-2
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-mint-600
                mb-3
                sm:mb-4
              `,children:[f.jsx("span",{className:"w-5 sm:w-6 h-px bg-mint-500"}),"Contact"]}),f.jsx(Y,{delay:.06,children:f.jsx("h2",{className:`
                  font-display
                  font-bold
                  text-[36px]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                  leading-[1.04]
                  tracking-[-0.035em]
                  text-charcoal
                  mb-4
                  max-w-[650px]
                `,children:"Let's Build Something Amazing"})}),f.jsx(Y,{delay:.12,children:f.jsx("p",{className:`
                  text-sm
                  sm:text-[15px]
                  md:text-base
                  text-charcoal-light
                  max-w-md
                  leading-relaxed
                  mb-6
                  sm:mb-7
                `,children:"Fill out a short form and get a free consultation with a custom proposal — no obligations."})}),f.jsx(Y,{delay:.16,className:`
                flex
                flex-col
                xs:flex-row
                sm:flex-wrap
                gap-3
                sm:gap-5
                mb-7
                sm:mb-8
              `,children:KE.map(({Icon:e,label:t})=>f.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2.5
                    min-w-0
                  `,children:[f.jsx("span",{className:`
                      w-8
                      h-8
                      rounded-[10px]
                      bg-mint-50
                      flex
                      items-center
                      justify-center
                      flex-none
                    `,children:f.jsx(e,{className:"w-4 h-4 text-mint-700",strokeWidth:2})}),f.jsx("span",{className:`
                      text-[12.5px]
                      sm:text-[13.5px]
                      font-semibold
                      text-charcoal
                    `,children:t})]},t))}),f.jsx(Y,{delay:.22,className:`
                flex
                flex-wrap
                items-center
                gap-2.5
                sm:gap-3
                mb-5
                sm:mb-6
              `,children:YE.map(({Icon:e,label:t,href:n,primary:r})=>f.jsxs(G.a,{href:n,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-3},whileTap:{scale:.98},transition:{duration:.2,ease:"easeOut"},className:`
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-display
                    font-semibold
                    text-[13px]
                    sm:text-[14.5px]
                    px-4
                    sm:px-6
                    py-3
                    sm:py-3.5
                    rounded-full
                    transition-all
                    duration-300
                    whitespace-nowrap
                    ${r?"bg-charcoal text-white shadow-[0_10px_24px_rgba(21,24,28,0.18)] hover:bg-charcoal/90":"bg-white border border-mint-100 text-charcoal hover:border-mint-300 hover:bg-mint-50/40"}
                  `,children:[f.jsx(e,{className:"w-4 h-4 flex-none"}),t]},t))}),f.jsx(Y,{delay:.28,children:f.jsxs("p",{className:`
                  text-[12.5px]
                  sm:text-sm
                  text-charcoal-soft
                  mb-7
                  sm:mb-8
                  break-words
                `,children:["Or email directly at"," ",f.jsx("a",{href:`mailto:${oe.email}`,className:`
                    text-mint-600
                    hover:text-mint-700
                    transition-colors
                    font-medium
                    break-all
                  `,children:oe.email})]})}),f.jsxs(Y,{delay:.34,className:`
                max-w-[460px]
                w-full
                overflow-hidden
                [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]
              `,children:[f.jsx("div",{className:`
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-charcoal-soft
                  mb-2.5
                `,children:"Trusted by clients in"}),f.jsx("div",{className:`
                  flex
                  gap-2
                  sm:gap-2.5
                  w-max
                  animate-[marquee_16s_linear_infinite]
                  hover:[animation-play-state:paused]
                `,children:[...bp,...bp].map(({flag:e,name:t},n)=>f.jsxs("span",{className:`
                        flex
                        items-center
                        gap-1.5
                        flex-none
                        bg-mint-50
                        border
                        border-mint-100
                        rounded-full
                        px-3
                        sm:px-3.5
                        py-1.5
                        text-[12px]
                        sm:text-[13px]
                        font-semibold
                        text-charcoal
                      `,children:[f.jsx("span",{className:"text-[14px] sm:text-[15px] leading-none",children:e}),t,f.jsx("span",{className:`
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-mint-500
                          animate-pulse
                        `})]},`${t}-${n}`))})]})]}),f.jsx(Y,{delay:.18,className:`
              relative
              w-full
              max-w-[620px]
              mx-auto
              lg:max-w-none
            `,children:f.jsxs("div",{className:`
                relative
                bg-gradient-to-br
                from-mint-50
                via-mint-50/40
                to-white
                border
                border-mint-100
                rounded-[24px]
                sm:rounded-[28px]
                shadow-[0_24px_60px_rgba(21,24,28,0.08)]
                p-3
                sm:p-5
                md:p-6
              `,children:[f.jsxs("div",{className:`
                  bg-charcoal
                  rounded-[18px]
                  sm:rounded-2xl
                  p-4
                  sm:p-5
                  pb-5
                  sm:pb-6
                  relative
                  overflow-hidden
                `,children:[f.jsxs("div",{className:"flex gap-1.5 mb-3 sm:mb-4",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-white/25"}),f.jsx("span",{className:"w-2 h-2 rounded-full bg-white/25"}),f.jsx("span",{className:"w-2 h-2 rounded-full bg-white/25"})]}),f.jsx(G.div,{animate:{boxShadow:["0 0 0 0 rgba(47,125,79,0.45)","0 0 0 18px rgba(47,125,79,0)","0 0 0 0 rgba(47,125,79,0)"]},transition:{duration:2.6,repeat:1/0,ease:"easeOut"},className:`
                    w-14
                    h-14
                    sm:w-16
                    sm:h-16
                    rounded-full
                    bg-mint-600
                    flex
                    items-center
                    justify-center
                    mx-auto
                    my-5
                    sm:my-6
                  `,children:f.jsx(D0,{className:`
                      w-4
                      h-4
                      sm:w-5
                      sm:h-5
                      text-white
                      ml-0.5
                    `,fill:"white"})}),f.jsx("div",{className:`
                    flex
                    items-end
                    gap-[3px]
                    h-8
                    sm:h-9
                    mx-1
                    sm:mx-1.5
                    mb-4
                  `,children:[40,70,35,90,55,75,30,65,45,80,38,60].map((e,t)=>f.jsx(G.span,{animate:{scaleY:[.35,1,.35]},transition:{duration:1.4,repeat:1/0,delay:t*.1,ease:"easeInOut"},style:{height:`${e}%`},className:`
                          flex-1
                          bg-mint-600/85
                          rounded-sm
                          origin-bottom
                        `},t))}),f.jsxs("div",{className:`
                    relative
                    bg-white/[0.08]
                    rounded-lg
                    h-1.5
                    sm:h-2
                    overflow-hidden
                  `,children:[f.jsx("span",{className:`
                      absolute
                      inset-y-0
                      left-0
                      w-[38%]
                      bg-mint-600
                      rounded-lg
                    `}),f.jsx(G.span,{animate:{left:["0%","82%","0%"]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},className:`
                      absolute
                      -top-[3px]
                      w-3
                      sm:w-3.5
                      h-3
                      sm:h-3.5
                      rounded-full
                      bg-white
                      shadow-[0_2px_6px_rgba(0,0,0,0.35)]
                    `})]})]}),XE.map(({Icon:e,label:t,className:n,delay:r})=>f.jsxs(G.div,{initial:{opacity:0,scale:.7},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:r,ease:[.34,1.56,.64,1]},className:`
                      hidden
                      md:flex
                      absolute
                      items-center
                      gap-2
                      bg-white
                      border
                      border-mint-100
                      rounded-full
                      pl-2.5
                      pr-3.5
                      py-2
                      shadow-[0_12px_26px_rgba(21,24,28,0.10)]
                      font-display
                      text-xs
                      font-bold
                      text-charcoal
                      ${n}
                    `,children:[f.jsx("span",{className:`
                        w-6
                        h-6
                        rounded-full
                        bg-mint-50
                        flex
                        items-center
                        justify-center
                        flex-none
                      `,children:f.jsx(e,{className:"w-3 h-3 text-mint-700",strokeWidth:2.2})}),t]},t))]})})]})}),f.jsxs("div",{className:`
          relative
          max-w-6xl
          mx-auto
          px-4
          sm:px-5
          md:px-8
          pb-14
          sm:pb-16
          md:pb-24
          pt-4
          border-t
          border-mint-100/60
        `,children:[f.jsxs("div",{className:"max-w-xl pt-10 sm:pt-12 md:pt-16",children:[f.jsxs(Y,{className:`
              flex
              items-center
              gap-2
              text-[10px]
              sm:text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-mint-600
              mb-3
              sm:mb-4
            `,children:[f.jsx("span",{className:"w-5 sm:w-6 h-px bg-mint-500"}),"Global Reach"]}),f.jsx(Y,{delay:.06,children:f.jsx("h3",{className:`
                font-display
                font-bold
                text-[32px]
                sm:text-4xl
                md:text-[40px]
                leading-[1.08]
                md:leading-[1.16]
                tracking-tight
                text-charcoal
              `,children:"One editor, clients across four time zones"})}),f.jsx(Y,{delay:.12,children:f.jsx("p",{className:`
                text-sm
                sm:text-[15px]
                text-charcoal-light
                leading-relaxed
                mt-4
                max-w-lg
              `,children:"From Kolkata to Toronto, every client gets the same process, turnaround, and direct line to me — wherever they're based."})})]}),f.jsxs("div",{className:`
            mt-9
            sm:mt-10
            md:mt-12
            grid
            lg:grid-cols-[1.55fr_1fr]
            gap-5
            sm:gap-6
            items-start
          `,children:[f.jsx(Y,{delay:.16,children:f.jsxs("div",{className:`
                relative
                bg-gradient-to-br
                from-mint-50
                via-mint-50/40
                to-white
                border
                border-mint-100
                rounded-2xl
                sm:rounded-3xl
                shadow-[0_20px_50px_rgba(21,24,28,0.06)]
                p-2.5
                sm:p-4
                pb-4
                sm:pb-6
              `,children:[f.jsxs("div",{className:`
                  relative
                  w-full
                  aspect-[784/459]
                  min-h-[230px]
                  sm:min-h-0
                  rounded-xl
                  sm:rounded-2xl
                  overflow-hidden
                  bg-mint-100/40
                `,children:[f.jsx("div",{className:`
                    absolute
                    inset-0
                    [background-image:radial-gradient(rgba(47,125,79,0.18)_1px,transparent_1px)]
                    [background-size:12px_12px]
                    sm:[background-size:16px_16px]
                  `}),ZE.map(e=>f.jsxs(G.div,{initial:{opacity:0,scale:0},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,ease:[.34,1.56,.64,1]},className:`
                      absolute
                      -translate-x-1/2
                      -translate-y-full
                    `,style:{left:e.left,top:e.top},children:[f.jsxs("span",{className:"relative flex items-center justify-center",children:[f.jsx(G.span,{animate:{scale:[1,3.5],opacity:[.5,0]},transition:{duration:2.2,repeat:1/0,ease:"easeOut"},className:`
                          absolute
                          w-2
                          h-2
                          sm:w-2.5
                          sm:h-2.5
                          rounded-full
                          bg-mint-600
                        `}),f.jsx("span",{className:`
                          w-2
                          h-2
                          sm:w-2.5
                          sm:h-2.5
                          rounded-full
                          bg-mint-700
                          ring-2
                          ring-white
                        `})]}),f.jsxs("div",{className:`
                        mt-1.5
                        sm:mt-2
                        bg-white
                        border
                        border-mint-100
                        rounded-lg
                        sm:rounded-xl
                        px-2
                        sm:px-3
                        py-1
                        sm:py-1.5
                        shadow-[0_8px_18px_rgba(21,24,28,0.08)]
                        whitespace-nowrap
                        ${e.big?"w-max":""}
                      `,children:[f.jsx("div",{className:`
                          text-[7px]
                          sm:text-[8.5px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-charcoal-soft
                        `,children:e.big?"National":"International"}),f.jsx("div",{className:`
                          font-display
                          text-[9px]
                          sm:text-[11.5px]
                          font-semibold
                          text-charcoal
                        `,children:e.label}),e.big&&f.jsx("div",{className:`
                            text-[8px]
                            sm:text-[10.5px]
                            text-charcoal-soft
                            mt-0.5
                            max-w-[150px]
                            sm:max-w-none
                            whitespace-normal
                            sm:whitespace-nowrap
                          `,children:e.sub})]})]},e.label))]}),f.jsxs("div",{className:`
                  flex
                  flex-col
                  sm:flex-row
                  sm:flex-wrap
                  items-start
                  sm:items-center
                  justify-between
                  gap-3
                  px-1
                  sm:px-2
                  pt-3
                  sm:pt-4
                  text-[10px]
                  sm:text-xs
                  text-charcoal-soft
                `,children:[f.jsx("span",{children:"Client locations, plotted as of 2026."}),f.jsxs("div",{className:`
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    sm:gap-4
                  `,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx("i",{className:`
                        w-2
                        h-2
                        rounded-full
                        bg-mint-600
                        inline-block
                      `}),"Where our clients are"]}),f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx("i",{className:`
                        w-2
                        h-2
                        rounded-full
                        bg-mint-200
                        inline-block
                      `}),"Rest of world"]})]})]})]})}),f.jsx(Y,{delay:.22,children:f.jsxs("div",{className:`
                bg-white
                border
                border-mint-100
                rounded-2xl
                sm:rounded-3xl
                shadow-[0_20px_50px_rgba(21,24,28,0.05)]
                p-5
                sm:p-6
                md:p-7
              `,children:[f.jsxs("div",{children:[f.jsx("div",{className:`
                    text-[10px]
                    sm:text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-charcoal-soft
                    mb-2
                    sm:mb-2.5
                  `,children:"🇮🇳 National"}),f.jsx("ul",{children:qE.map(({city:e,region:t})=>f.jsxs("li",{className:`
                        flex
                        items-center
                        gap-2
                        sm:gap-2.5
                        text-[13px]
                        sm:text-[14.5px]
                        text-charcoal
                        py-2.5
                        border-b
                        border-mint-100
                        last:border-none
                      `,children:[f.jsx("span",{className:`
                          w-5
                          h-5
                          rounded-full
                          bg-mint-50
                          flex
                          items-center
                          justify-center
                          flex-none
                        `,children:f.jsx(Xl,{className:`
                            w-2.5
                            h-2.5
                            text-mint-700
                          `,strokeWidth:2})}),f.jsx("span",{className:"font-semibold",children:e}),f.jsx("span",{className:`
                          ml-auto
                          text-[10.5px]
                          sm:text-[12.5px]
                          text-charcoal-soft
                          text-right
                          pl-2
                        `,children:t})]},e))})]}),f.jsxs("div",{className:"mt-5",children:[f.jsxs("div",{className:`
                    text-[10px]
                    sm:text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-charcoal-soft
                    mb-2.5
                    flex
                    items-center
                    gap-1.5
                  `,children:[f.jsx(mk,{className:"w-3.5 h-3.5"}),"International"]}),QE.map(({group:e,cities:t})=>f.jsxs("div",{className:`
                        mt-3
                        sm:mt-3.5
                        first:mt-0
                      `,children:[f.jsx("div",{className:`
                          text-[10px]
                          sm:text-[11px]
                          font-semibold
                          uppercase
                          tracking-wide
                          text-charcoal-soft
                        `,children:e}),f.jsx("ul",{className:"mt-1",children:t.map(({city:n,region:r})=>f.jsxs("li",{className:`
                                flex
                                items-center
                                gap-2
                                sm:gap-2.5
                                text-[13px]
                                sm:text-[14.5px]
                                text-charcoal
                                py-2.5
                                border-b
                                border-mint-100
                                last:border-none
                              `,children:[f.jsx("span",{className:`
                                  w-5
                                  h-5
                                  rounded-full
                                  bg-mint-50
                                  flex
                                  items-center
                                  justify-center
                                  flex-none
                                `,children:f.jsx(Xl,{className:`
                                    w-2.5
                                    h-2.5
                                    text-mint-700
                                  `,strokeWidth:2})}),f.jsx("span",{className:"font-semibold",children:n}),f.jsx("span",{className:`
                                  ml-auto
                                  text-[10.5px]
                                  sm:text-[12.5px]
                                  text-charcoal-soft
                                  text-right
                                  pl-2
                                `,children:r})]},n))})]},e))]}),f.jsx("div",{className:`
                  mt-5
                  sm:mt-6
                  pt-4
                  sm:pt-5
                  border-t
                  border-mint-100
                  grid
                  grid-cols-3
                  gap-3
                  sm:gap-6
                `,children:JE.map(({value:e,label:t})=>f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:`
                        font-display
                        text-lg
                        sm:text-xl
                        md:text-[22px]
                        font-bold
                        text-charcoal
                      `,children:e}),f.jsx("div",{className:`
                        text-[9.5px]
                        sm:text-[11.5px]
                        text-charcoal-soft
                        leading-tight
                        mt-0.5
                      `,children:t})]},t))})]})})]})]})]})}function tC(){const e=new Date().getFullYear();return f.jsx("footer",{className:"bg-white border-t border-mint-50 pt-16 pb-8",children:f.jsxs("div",{className:"max-w-6xl mx-auto px-5 md:px-8",children:[f.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 pb-12",children:[f.jsxs("a",{href:"#home",className:"font-display font-extrabold text-3xl text-charcoal hover:opacity-80 transition-opacity duration-300",children:[oe.name,f.jsx("span",{className:"text-mint-500",children:"."})]}),f.jsx("ul",{className:"flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium",children:Ts.map(t=>f.jsx("li",{children:f.jsx("a",{href:t.href,className:"text-charcoal-light hover:text-mint-600 transition-colors duration-300",children:t.label})},t.href))}),f.jsx("div",{className:"flex items-center gap-3",children:[{Icon:mr,href:oe.whatsappLink,label:"WhatsApp"},{Icon:ny,href:oe.linkedinLink,label:"LinkedIn"},{Icon:Tk,href:`mailto:${oe.email}`,label:"Email"}].map(({Icon:t,href:n,label:r})=>f.jsx(G.a,{href:n,target:r!=="Email"?"_blank":void 0,rel:r!=="Email"?"noopener noreferrer":void 0,"aria-label":r,whileHover:{y:-2},whileTap:{scale:.95},transition:{duration:.2,ease:"easeOut"},className:"w-10 h-10 rounded-full bg-white border border-mint-100 text-charcoal-light hover:border-mint-300 hover:text-mint-600 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.05)] flex items-center justify-center transition-colors duration-300",children:f.jsx(t,{className:"w-4.5 h-4.5"})},r))})]}),f.jsxs("div",{className:"border-t border-mint-50/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4",children:[f.jsxs("p",{className:"text-xs text-charcoal-soft font-medium tracking-wide",children:["© ",e," ",oe.name,". All rights reserved."]}),f.jsx("p",{className:"text-xs text-charcoal-soft/60",children:"Designed for creators."})]})]})})}function nC(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[i,s]=j.useState(0),[o,a]=j.useState(!1);j.useEffect(()=>{const u=setTimeout(()=>t(!0),3e3);return()=>clearTimeout(u)},[]),j.useEffect(()=>{if(!e||n)return;const u=setInterval(()=>s(c=>c+1),13e3);return()=>clearInterval(u)},[e,n]);const l=()=>{a(!0),setTimeout(()=>{a(!1)},500)};return f.jsx(io,{children:e&&!n&&f.jsx(G.div,{initial:{x:120,opacity:0},animate:{x:0,opacity:1,y:[0,-6,0],scale:i>0?[1,1.06,1]:1},exit:{x:120,opacity:0,transition:{duration:.25}},transition:{x:{type:"spring",stiffness:260,damping:24},opacity:{duration:.4},y:{duration:3.2,repeat:1/0,ease:"easeInOut"},scale:{duration:.6,ease:"easeInOut"}},whileHover:{scale:1.04},className:`
            fixed
            right-4
            top-1/2
            -translate-y-1/2
            md:right-6
            z-40
            w-[min(85vw,17rem)]
          `,children:f.jsxs("div",{className:`
              group
              relative
              glass
              border
              border-mint-300/70
              rounded-[20px]
              shadow-lg
              shadow-mint-200/50
              p-4
              pr-9
              transition-shadow
              duration-300
              hover:shadow-xl
              hover:shadow-mint-300/60
            `,children:[f.jsx("button",{onClick:()=>r(!0),"aria-label":"Dismiss",className:`
                absolute
                top-2.5
                right-2.5
                w-6
                h-6
                rounded-full
                flex
                items-center
                justify-center
                text-charcoal-soft
                hover:bg-mint-100
                hover:text-charcoal
                transition-colors
              `,children:f.jsx(_0,{className:"w-3.5 h-3.5"})}),f.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[f.jsx("span",{className:"text-base",children:"💬"}),f.jsx("p",{className:"font-display font-semibold text-charcoal text-sm",children:"Let's Talk!"})]}),f.jsx("p",{className:"text-xs text-charcoal-soft leading-relaxed mb-3",children:"Need a video editor? We're just one message away."}),f.jsxs("a",{href:oe.whatsappLink,target:"_blank",rel:"noopener noreferrer",onClick:l,className:`
                relative
                overflow-hidden
                flex
                items-center
                justify-center
                gap-2
                bg-mint-500
                hover:bg-mint-600
                text-white
                text-sm
                font-semibold
                px-4
                py-2.5
                rounded-full
                transition-colors
                duration-300
              `,children:[f.jsx(G.span,{animate:{scale:[1,1.2,1]},transition:{duration:1.8,repeat:1/0,ease:"easeInOut"},children:f.jsx(mr,{className:"w-4 h-4"})}),"Chat Now",f.jsx(io,{children:o&&f.jsx(G.span,{initial:{scale:0,opacity:.5},animate:{scale:3,opacity:0},exit:{opacity:0},transition:{duration:.5,ease:"easeOut"},className:`
                      absolute
                      inset-0
                      m-auto
                      w-10
                      h-10
                      rounded-full
                      bg-white/60
                      pointer-events-none
                    `})})]})]})},i)})}function rC(){const[e,t]=ae.useState(!0);return f.jsxs(f.Fragment,{children:[e&&f.jsx(Gb,{onComplete:()=>t(!1)}),f.jsxs("div",{className:"font-body text-charcoal",children:[f.jsx(Yk,{}),f.jsxs("main",{children:[f.jsx(LE,{}),f.jsx(DE,{}),f.jsx(RE,{}),f.jsx(OE,{}),f.jsx(BE,{}),f.jsx(GE,{}),f.jsx(eC,{})]}),f.jsx(tC,{}),f.jsx(nC,{})]})]})}Aa.createRoot(document.getElementById("root")).render(f.jsx(ae.StrictMode,{children:f.jsx(rC,{})}));
