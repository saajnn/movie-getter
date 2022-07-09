import{C as wr,i as Ar,j as Pr,aL as Er,l as We,f as xr,u as $r,s as ir,r as oe,p as Ge,g as de,z as Fr}from"./index.095942f3.js";import{t as Ir,e as Rr}from"./Tooltip.89046c0b.js";import{g as Nr}from"./base.358617d7.js";const Cr=wr({name:"Ellipsis",common:Ar,peers:{Tooltip:Ir}});var Tr=Cr,Mr=Pr("ellipsis",{overflow:"hidden"},[Er("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),We("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),We("cursor-pointer",`
 cursor: pointer;
 `)]);function ze(r){return`${r}-ellipsis--line-clamp`}function He(r,e){return`${r}-ellipsis--cursor-${e}`}const Dr=Object.assign(Object.assign({},ir.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}});var Tn=xr({name:"Ellipsis",inheritAttrs:!1,props:Dr,setup(r,{slots:e,attrs:t}){const{mergedClsPrefixRef:n}=$r(r),o=ir("Ellipsis","-ellipsis",Mr,Tr,r,n),a=oe(null),i=oe(null),l=oe(null),f=oe(!1),c=Ge(()=>{const{lineClamp:u}=r,{value:g}=f;return u!==void 0?{textOverflow:"","-webkit-line-clamp":g?"":u}:{textOverflow:g?"":"ellipsis","-webkit-line-clamp":""}});function p(){let u=!1;const{value:g}=f;if(g)return!0;const{value:h}=a;if(h){const{lineClamp:A}=r;if(v(h),A!==void 0)u=h.scrollHeight<=h.offsetHeight;else{const{value:F}=i;F&&(u=F.getBoundingClientRect().width<=h.getBoundingClientRect().width)}m(h,u)}return u}const d=Ge(()=>r.expandTrigger==="click"?()=>{var u;const{value:g}=f;g&&((u=l.value)===null||u===void 0||u.setShow(!1)),f.value=!g}:void 0),s=()=>de("span",Object.assign({},Fr(t,{class:[`${n.value}-ellipsis`,r.lineClamp!==void 0?ze(n.value):void 0,r.expandTrigger==="click"?He(n.value,"pointer"):void 0],style:c.value}),{ref:"triggerRef",onClick:d.value,onMouseenter:r.expandTrigger==="click"?p:void 0}),r.lineClamp?e:de("span",{ref:"triggerInnerRef"},e));function v(u){if(!u)return;const g=c.value,h=ze(n.value);r.lineClamp!==void 0?S(u,h,"add"):S(u,h,"remove");for(const A in g)u.style[A]!==g[A]&&(u.style[A]=g[A])}function m(u,g){const h=He(n.value,"pointer");r.expandTrigger==="click"&&!g?S(u,h,"add"):S(u,h,"remove")}function S(u,g,h){h==="add"?u.classList.contains(g)||u.classList.add(g):u.classList.contains(g)&&u.classList.remove(g)}return{mergedTheme:o,triggerRef:a,triggerInnerRef:i,tooltipRef:l,handleClick:d,renderTrigger:s,getTooltipDisabled:p}},render(){var r;const{tooltip:e,renderTrigger:t,$slots:n}=this;if(e){const{mergedTheme:o}=this;return de(Rr,Object.assign({ref:"tooltipRef",placement:"top"},e,{getDisabled:this.getTooltipDisabled,theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip}),{trigger:t,default:(r=n.tooltip)!==null&&r!==void 0?r:n.default})}else return t()}}),Br=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var i=Object.getOwnPropertyDescriptor(e,t);if(i.value!==o||i.enumerable!==!0)return!1}return!0},Qe=typeof Symbol!="undefined"&&Symbol,_r=Br,Lr=function(){return typeof Qe!="function"||typeof Symbol!="function"||typeof Qe("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:_r()},kr="Function.prototype.bind called on incompatible ",ve=Array.prototype.slice,Ur=Object.prototype.toString,Wr="[object Function]",Gr=function(e){var t=this;if(typeof t!="function"||Ur.call(t)!==Wr)throw new TypeError(kr+t);for(var n=ve.call(arguments,1),o,a=function(){if(this instanceof o){var p=t.apply(this,n.concat(ve.call(arguments)));return Object(p)===p?p:this}else return t.apply(e,n.concat(ve.call(arguments)))},i=Math.max(0,t.length-n.length),l=[],f=0;f<i;f++)l.push("$"+f);if(o=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var c=function(){};c.prototype=t.prototype,o.prototype=new c,c.prototype=null}return o},zr=Gr,Ce=Function.prototype.bind||zr,Hr=Ce,Qr=Hr.call(Function.call,Object.prototype.hasOwnProperty),y,V=SyntaxError,lr=Function,H=TypeError,me=function(r){try{return lr('"use strict"; return ('+r+").constructor;")()}catch{}},k=Object.getOwnPropertyDescriptor;if(k)try{k({},"")}catch{k=null}var ge=function(){throw new H},Vr=k?function(){try{return arguments.callee,ge}catch{try{return k(arguments,"callee").get}catch{return ge}}}():ge,G=Lr(),N=Object.getPrototypeOf||function(r){return r.__proto__},z={},qr=typeof Uint8Array=="undefined"?y:N(Uint8Array),Q={"%AggregateError%":typeof AggregateError=="undefined"?y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?y:ArrayBuffer,"%ArrayIteratorPrototype%":G?N([][Symbol.iterator]()):y,"%AsyncFromSyncIteratorPrototype%":y,"%AsyncFunction%":z,"%AsyncGenerator%":z,"%AsyncGeneratorFunction%":z,"%AsyncIteratorPrototype%":z,"%Atomics%":typeof Atomics=="undefined"?y:Atomics,"%BigInt%":typeof BigInt=="undefined"?y:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?y:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?y:FinalizationRegistry,"%Function%":lr,"%GeneratorFunction%":z,"%Int8Array%":typeof Int8Array=="undefined"?y:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?y:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":G?N(N([][Symbol.iterator]())):y,"%JSON%":typeof JSON=="object"?JSON:y,"%Map%":typeof Map=="undefined"?y:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!G?y:N(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?y:Promise,"%Proxy%":typeof Proxy=="undefined"?y:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?y:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!G?y:N(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":G?N(""[Symbol.iterator]()):y,"%Symbol%":G?Symbol:y,"%SyntaxError%":V,"%ThrowTypeError%":Vr,"%TypedArray%":qr,"%TypeError%":H,"%Uint8Array%":typeof Uint8Array=="undefined"?y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?y:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?y:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?y:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?y:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?y:WeakSet},jr=function r(e){var t;if(e==="%AsyncFunction%")t=me("async function () {}");else if(e==="%GeneratorFunction%")t=me("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=me("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&(t=N(o.prototype))}return Q[e]=t,t},Ve={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},re=Ce,ce=Qr,Jr=re.call(Function.call,Array.prototype.concat),Kr=re.call(Function.apply,Array.prototype.splice),qe=re.call(Function.call,String.prototype.replace),ue=re.call(Function.call,String.prototype.slice),Yr=re.call(Function.call,RegExp.prototype.exec),Xr=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Zr=/\\(\\)?/g,et=function(e){var t=ue(e,0,1),n=ue(e,-1);if(t==="%"&&n!=="%")throw new V("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new V("invalid intrinsic syntax, expected opening `%`");var o=[];return qe(e,Xr,function(a,i,l,f){o[o.length]=l?qe(f,Zr,"$1"):i||a}),o},rt=function(e,t){var n=e,o;if(ce(Ve,n)&&(o=Ve[n],n="%"+o[0]+"%"),ce(Q,n)){var a=Q[n];if(a===z&&(a=jr(n)),typeof a=="undefined"&&!t)throw new H("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new V("intrinsic "+e+" does not exist!")},Te=function(e,t){if(typeof e!="string"||e.length===0)throw new H("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new H('"allowMissing" argument must be a boolean');if(Yr(/^%?[^%]*%?$/g,e)===null)throw new V("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=et(e),o=n.length>0?n[0]:"",a=rt("%"+o+"%",t),i=a.name,l=a.value,f=!1,c=a.alias;c&&(o=c[0],Kr(n,Jr([0,1],c)));for(var p=1,d=!0;p<n.length;p+=1){var s=n[p],v=ue(s,0,1),m=ue(s,-1);if((v==='"'||v==="'"||v==="`"||m==='"'||m==="'"||m==="`")&&v!==m)throw new V("property names with quotes must have matching quotes");if((s==="constructor"||!d)&&(f=!0),o+="."+s,i="%"+o+"%",ce(Q,i))l=Q[i];else if(l!=null){if(!(s in l)){if(!t)throw new H("base intrinsic for "+e+" exists, but the property is not available.");return}if(k&&p+1>=n.length){var S=k(l,s);d=!!S,d&&"get"in S&&!("originalValue"in S.get)?l=S.get:l=l[s]}else d=ce(l,s),l=l[s];d&&!f&&(Q[i]=l)}}return l},fr={exports:{}};(function(r){var e=Ce,t=Te,n=t("%Function.prototype.apply%"),o=t("%Function.prototype.call%"),a=t("%Reflect.apply%",!0)||e.call(o,n),i=t("%Object.getOwnPropertyDescriptor%",!0),l=t("%Object.defineProperty%",!0),f=t("%Math.max%");if(l)try{l({},"a",{value:1})}catch{l=null}r.exports=function(d){var s=a(e,o,arguments);if(i&&l){var v=i(s,"length");v.configurable&&l(s,"length",{value:1+f(0,d.length-(arguments.length-1))})}return s};var c=function(){return a(e,n,arguments)};l?l(r.exports,"apply",{value:c}):r.exports.apply=c})(fr);var cr=Te,ur=fr.exports,tt=ur(cr("String.prototype.indexOf")),nt=function(e,t){var n=cr(e,!!t);return typeof n=="function"&&tt(e,".prototype.")>-1?ur(n):n},at={},ot=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),it=Nr(ot),Me=typeof Map=="function"&&Map.prototype,he=Object.getOwnPropertyDescriptor&&Me?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,pe=Me&&he&&typeof he.get=="function"?he.get:null,lt=Me&&Map.prototype.forEach,De=typeof Set=="function"&&Set.prototype,Se=Object.getOwnPropertyDescriptor&&De?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,se=De&&Se&&typeof Se.get=="function"?Se.get:null,ft=De&&Set.prototype.forEach,ct=typeof WeakMap=="function"&&WeakMap.prototype,X=ct?WeakMap.prototype.has:null,ut=typeof WeakSet=="function"&&WeakSet.prototype,Z=ut?WeakSet.prototype.has:null,pt=typeof WeakRef=="function"&&WeakRef.prototype,je=pt?WeakRef.prototype.deref:null,st=Boolean.prototype.valueOf,yt=Object.prototype.toString,dt=Function.prototype.toString,vt=String.prototype.match,Be=String.prototype.slice,T=String.prototype.replace,mt=String.prototype.toUpperCase,Je=String.prototype.toLowerCase,pr=RegExp.prototype.test,Ke=Array.prototype.concat,$=Array.prototype.join,gt=Array.prototype.slice,Ye=Math.floor,Ee=typeof BigInt=="function"?BigInt.prototype.valueOf:null,be=Object.getOwnPropertySymbols,xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,q=typeof Symbol=="function"&&typeof Symbol.iterator=="object",w=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===q?"object":"symbol")?Symbol.toStringTag:null,sr=Object.prototype.propertyIsEnumerable,Xe=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function Ze(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||pr.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-Ye(-r):Ye(r);if(n!==r){var o=String(n),a=Be.call(e,o.length+1);return T.call(o,t,"$&_")+"."+T.call(T.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return T.call(e,t,"$&_")}var $e=it,er=$e.custom,rr=dr(er)?er:null,ht=function r(e,t,n,o){var a=t||{};if(C(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(C(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=C(a,"customInspect")?a.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(C(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(C(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var l=a.numericSeparator;if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return mr(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var f=String(e);return l?Ze(e,f):f}if(typeof e=="bigint"){var c=String(e)+"n";return l?Ze(e,c):c}var p=typeof a.depth=="undefined"?5:a.depth;if(typeof n=="undefined"&&(n=0),n>=p&&p>0&&typeof e=="object")return Fe(e)?"[Array]":"[Object]";var d=Bt(a,n);if(typeof o=="undefined")o=[];else if(vr(o,e)>=0)return"[Circular]";function s(E,P,ne){if(P&&(o=gt.call(o),o.push(P)),ne){var ae={depth:a.depth};return C(a,"quoteStyle")&&(ae.quoteStyle=a.quoteStyle),r(E,ae,n+1,o)}return r(E,a,n+1,o)}if(typeof e=="function"&&!tr(e)){var v=$t(e),m=ie(e,s);return"[Function"+(v?": "+v:" (anonymous)")+"]"+(m.length>0?" { "+$.call(m,", ")+" }":"")}if(dr(e)){var S=q?T.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):xe.call(e);return typeof e=="object"&&!q?Y(S):S}if(Tt(e)){for(var u="<"+Je.call(String(e.nodeName)),g=e.attributes||[],h=0;h<g.length;h++)u+=" "+g[h].name+"="+yr(St(g[h].value),"double",a);return u+=">",e.childNodes&&e.childNodes.length&&(u+="..."),u+="</"+Je.call(String(e.nodeName))+">",u}if(Fe(e)){if(e.length===0)return"[]";var A=ie(e,s);return d&&!Dt(A)?"["+Ie(A,d)+"]":"[ "+$.call(A,", ")+" ]"}if(Ot(e)){var F=ie(e,s);return!("cause"in Error.prototype)&&"cause"in e&&!sr.call(e,"cause")?"{ ["+String(e)+"] "+$.call(Ke.call("[cause]: "+s(e.cause),F),", ")+" }":F.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+$.call(F,", ")+" }"}if(typeof e=="object"&&i){if(rr&&typeof e[rr]=="function"&&$e)return $e(e,{depth:p-n});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Ft(e)){var K=[];return lt.call(e,function(E,P){K.push(s(P,e,!0)+" => "+s(E,e))}),nr("Map",pe.call(e),K,d)}if(Nt(e)){var U=[];return ft.call(e,function(E){U.push(s(E,e))}),nr("Set",se.call(e),U,d)}if(It(e))return Oe("WeakMap");if(Ct(e))return Oe("WeakSet");if(Rt(e))return Oe("WeakRef");if(At(e))return Y(s(Number(e)));if(Et(e))return Y(s(Ee.call(e)));if(Pt(e))return Y(st.call(e));if(wt(e))return Y(s(String(e)));if(!bt(e)&&!tr(e)){var W=ie(e,s),D=Xe?Xe(e)===Object.prototype:e instanceof Object||e.constructor===Object,B=e instanceof Object?"":"null prototype",R=!D&&w&&Object(e)===e&&w in e?Be.call(M(e),8,-1):B?"Object":"",te=D||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",_=te+(R||B?"["+$.call(Ke.call([],R||[],B||[]),": ")+"] ":"");return W.length===0?_+"{}":d?_+"{"+Ie(W,d)+"}":_+"{ "+$.call(W,", ")+" }"}return String(e)};function yr(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function St(r){return T.call(String(r),/"/g,"&quot;")}function Fe(r){return M(r)==="[object Array]"&&(!w||!(typeof r=="object"&&w in r))}function bt(r){return M(r)==="[object Date]"&&(!w||!(typeof r=="object"&&w in r))}function tr(r){return M(r)==="[object RegExp]"&&(!w||!(typeof r=="object"&&w in r))}function Ot(r){return M(r)==="[object Error]"&&(!w||!(typeof r=="object"&&w in r))}function wt(r){return M(r)==="[object String]"&&(!w||!(typeof r=="object"&&w in r))}function At(r){return M(r)==="[object Number]"&&(!w||!(typeof r=="object"&&w in r))}function Pt(r){return M(r)==="[object Boolean]"&&(!w||!(typeof r=="object"&&w in r))}function dr(r){if(q)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!xe)return!1;try{return xe.call(r),!0}catch{}return!1}function Et(r){if(!r||typeof r!="object"||!Ee)return!1;try{return Ee.call(r),!0}catch{}return!1}var xt=Object.prototype.hasOwnProperty||function(r){return r in this};function C(r,e){return xt.call(r,e)}function M(r){return yt.call(r)}function $t(r){if(r.name)return r.name;var e=vt.call(dt.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function vr(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function Ft(r){if(!pe||!r||typeof r!="object")return!1;try{pe.call(r);try{se.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function It(r){if(!X||!r||typeof r!="object")return!1;try{X.call(r,X);try{Z.call(r,Z)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function Rt(r){if(!je||!r||typeof r!="object")return!1;try{return je.call(r),!0}catch{}return!1}function Nt(r){if(!se||!r||typeof r!="object")return!1;try{se.call(r);try{pe.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function Ct(r){if(!Z||!r||typeof r!="object")return!1;try{Z.call(r,Z);try{X.call(r,X)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function Tt(r){return!r||typeof r!="object"?!1:typeof HTMLElement!="undefined"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function mr(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return mr(Be.call(r,0,e.maxStringLength),e)+n}var o=T.call(T.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Mt);return yr(o,"single",e)}function Mt(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+mt.call(e.toString(16))}function Y(r){return"Object("+r+")"}function Oe(r){return r+" { ? }"}function nr(r,e,t,n){var o=n?Ie(t,n):$.call(t,", ");return r+" ("+e+") {"+o+"}"}function Dt(r){for(var e=0;e<r.length;e++)if(vr(r[e],`
`)>=0)return!1;return!0}function Bt(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=$.call(Array(r.indent+1)," ");else return null;return{base:t,prev:$.call(Array(e+1),t)}}function Ie(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+$.call(r,","+t)+`
`+e.prev}function ie(r,e){var t=Fe(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=C(r,o)?e(r[o],r):""}var a=typeof be=="function"?be(r):[],i;if(q){i={};for(var l=0;l<a.length;l++)i["$"+a[l]]=a[l]}for(var f in r)!C(r,f)||t&&String(Number(f))===f&&f<r.length||q&&i["$"+f]instanceof Symbol||(pr.call(/[^\w$]/,f)?n.push(e(f,r)+": "+e(r[f],r)):n.push(f+": "+e(r[f],r)));if(typeof be=="function")for(var c=0;c<a.length;c++)sr.call(r,a[c])&&n.push("["+e(a[c])+"]: "+e(r[a[c]],r));return n}var _e=Te,J=nt,_t=ht,Lt=_e("%TypeError%"),le=_e("%WeakMap%",!0),fe=_e("%Map%",!0),kt=J("WeakMap.prototype.get",!0),Ut=J("WeakMap.prototype.set",!0),Wt=J("WeakMap.prototype.has",!0),Gt=J("Map.prototype.get",!0),zt=J("Map.prototype.set",!0),Ht=J("Map.prototype.has",!0),Le=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},Qt=function(r,e){var t=Le(r,e);return t&&t.value},Vt=function(r,e,t){var n=Le(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},qt=function(r,e){return!!Le(r,e)},jt=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new Lt("Side channel does not contain "+_t(a))},get:function(a){if(le&&a&&(typeof a=="object"||typeof a=="function")){if(e)return kt(e,a)}else if(fe){if(t)return Gt(t,a)}else if(n)return Qt(n,a)},has:function(a){if(le&&a&&(typeof a=="object"||typeof a=="function")){if(e)return Wt(e,a)}else if(fe){if(t)return Ht(t,a)}else if(n)return qt(n,a);return!1},set:function(a,i){le&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new le),Ut(e,a,i)):fe?(t||(t=new fe),zt(t,a,i)):(n||(n={key:{},next:null}),Vt(n,a,i))}};return o},Jt=String.prototype.replace,Kt=/%20/g,we={RFC1738:"RFC1738",RFC3986:"RFC3986"},ke={default:we.RFC3986,formatters:{RFC1738:function(r){return Jt.call(r,Kt,"+")},RFC3986:function(r){return String(r)}},RFC1738:we.RFC1738,RFC3986:we.RFC3986},Yt=ke,Ae=Object.prototype.hasOwnProperty,L=Array.isArray,x=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),Xt=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(L(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]!="undefined"&&o.push(n[a]);t.obj[t.prop]=o}}},gr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]!="undefined"&&(n[o]=e[o]);return n},Zt=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(L(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Ae.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return L(e)&&!L(t)&&(o=gr(e,n)),L(e)&&L(t)?(t.forEach(function(a,i){if(Ae.call(e,i)){var l=e[i];l&&typeof l=="object"&&a&&typeof a=="object"?e[i]=r(l,a,n):e.push(a)}else e[i]=a}),e):Object.keys(t).reduce(function(a,i){var l=t[i];return Ae.call(a,i)?a[i]=r(a[i],l,n):a[i]=l,a},o)},en=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},rn=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},tn=function(e,t,n,o,a){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),n==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(p){return"%26%23"+parseInt(p.slice(2),16)+"%3B"});for(var l="",f=0;f<i.length;++f){var c=i.charCodeAt(f);if(c===45||c===46||c===95||c===126||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||a===Yt.RFC1738&&(c===40||c===41)){l+=i.charAt(f);continue}if(c<128){l=l+x[c];continue}if(c<2048){l=l+(x[192|c>>6]+x[128|c&63]);continue}if(c<55296||c>=57344){l=l+(x[224|c>>12]+x[128|c>>6&63]+x[128|c&63]);continue}f+=1,c=65536+((c&1023)<<10|i.charCodeAt(f)&1023),l+=x[240|c>>18]+x[128|c>>12&63]+x[128|c>>6&63]+x[128|c&63]}return l},nn=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],l=Object.keys(i),f=0;f<l.length;++f){var c=l[f],p=i[c];typeof p=="object"&&p!==null&&n.indexOf(p)===-1&&(t.push({obj:i,prop:c}),n.push(p))}return Xt(t),e},an=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},on=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},ln=function(e,t){return[].concat(e,t)},fn=function(e,t){if(L(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},hr={arrayToObject:gr,assign:en,combine:ln,compact:nn,decode:rn,encode:tn,isBuffer:on,isRegExp:an,maybeMap:fn,merge:Zt},Sr=jt,Re=hr,ee=ke,cn=Object.prototype.hasOwnProperty,ar={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},I=Array.isArray,un=String.prototype.split,pn=Array.prototype.push,br=function(r,e){pn.apply(r,I(e)?e:[e])},sn=Date.prototype.toISOString,or=ee.default,O={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Re.encode,encodeValuesOnly:!1,format:or,formatter:ee.formatters[or],indices:!1,serializeDate:function(e){return sn.call(e)},skipNulls:!1,strictNullHandling:!1},yn=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Pe={},dn=function r(e,t,n,o,a,i,l,f,c,p,d,s,v,m,S){for(var u=e,g=S,h=0,A=!1;(g=g.get(Pe))!==void 0&&!A;){var F=g.get(e);if(h+=1,typeof F!="undefined"){if(F===h)throw new RangeError("Cyclic object value");A=!0}typeof g.get(Pe)=="undefined"&&(h=0)}if(typeof l=="function"?u=l(t,u):u instanceof Date?u=p(u):n==="comma"&&I(u)&&(u=Re.maybeMap(u,function(ye){return ye instanceof Date?p(ye):ye})),u===null){if(o)return i&&!v?i(t,O.encoder,m,"key",d):t;u=""}if(yn(u)||Re.isBuffer(u)){if(i){var K=v?t:i(t,O.encoder,m,"key",d);if(n==="comma"&&v){for(var U=un.call(String(u),","),W="",D=0;D<U.length;++D)W+=(D===0?"":",")+s(i(U[D],O.encoder,m,"value",d));return[s(K)+(I(u)&&U.length===1?"[]":"")+"="+W]}return[s(K)+"="+s(i(u,O.encoder,m,"value",d))]}return[s(t)+"="+s(String(u))]}var B=[];if(typeof u=="undefined")return B;var R;if(n==="comma"&&I(u))R=[{value:u.length>0?u.join(",")||null:void 0}];else if(I(l))R=l;else{var te=Object.keys(u);R=f?te.sort(f):te}for(var _=n==="comma"&&I(u)&&u.length===1?t+"[]":t,E=0;E<R.length;++E){var P=R[E],ne=typeof P=="object"&&typeof P.value!="undefined"?P.value:u[P];if(!(a&&ne===null)){var ae=I(u)?typeof n=="function"?n(_,P):_:_+(c?"."+P:"["+P+"]");S.set(e,h);var Ue=Sr();Ue.set(Pe,S),br(B,r(ne,ae,n,o,a,i,l,f,c,p,d,s,v,m,Ue))}}return B},vn=function(e){if(!e)return O;if(e.encoder!==null&&typeof e.encoder!="undefined"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||O.charset;if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=ee.default;if(typeof e.format!="undefined"){if(!cn.call(ee.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=ee.formatters[n],a=O.filter;return(typeof e.filter=="function"||I(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:O.addQueryPrefix,allowDots:typeof e.allowDots=="undefined"?O.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:O.charsetSentinel,delimiter:typeof e.delimiter=="undefined"?O.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:O.encode,encoder:typeof e.encoder=="function"?e.encoder:O.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:O.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:O.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:O.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:O.strictNullHandling}},mn=function(r,e){var t=r,n=vn(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):I(n.filter)&&(a=n.filter,o=a);var i=[];if(typeof t!="object"||t===null)return"";var l;e&&e.arrayFormat in ar?l=e.arrayFormat:e&&"indices"in e?l=e.indices?"indices":"repeat":l="indices";var f=ar[l];o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var c=Sr(),p=0;p<o.length;++p){var d=o[p];n.skipNulls&&t[d]===null||br(i,dn(t[d],d,f,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,c))}var s=i.join(n.delimiter),v=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),s.length>0?v+s:""},j=hr,Ne=Object.prototype.hasOwnProperty,gn=Array.isArray,b={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:j.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},hn=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},Or=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},Sn="utf8=%26%2310003%3B",bn="utf8=%E2%9C%93",On=function(e,t){var n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,a),l=-1,f,c=t.charset;if(t.charsetSentinel)for(f=0;f<i.length;++f)i[f].indexOf("utf8=")===0&&(i[f]===bn?c="utf-8":i[f]===Sn&&(c="iso-8859-1"),l=f,f=i.length);for(f=0;f<i.length;++f)if(f!==l){var p=i[f],d=p.indexOf("]="),s=d===-1?p.indexOf("="):d+1,v,m;s===-1?(v=t.decoder(p,b.decoder,c,"key"),m=t.strictNullHandling?null:""):(v=t.decoder(p.slice(0,s),b.decoder,c,"key"),m=j.maybeMap(Or(p.slice(s+1),t),function(S){return t.decoder(S,b.decoder,c,"value")})),m&&t.interpretNumericEntities&&c==="iso-8859-1"&&(m=hn(m)),p.indexOf("[]=")>-1&&(m=gn(m)?[m]:m),Ne.call(n,v)?n[v]=j.combine(n[v],m):n[v]=m}return n},wn=function(r,e,t,n){for(var o=n?e:Or(e,t),a=r.length-1;a>=0;--a){var i,l=r[a];if(l==="[]"&&t.parseArrays)i=[].concat(o);else{i=t.plainObjects?Object.create(null):{};var f=l.charAt(0)==="["&&l.charAt(l.length-1)==="]"?l.slice(1,-1):l,c=parseInt(f,10);!t.parseArrays&&f===""?i={0:o}:!isNaN(c)&&l!==f&&String(c)===f&&c>=0&&t.parseArrays&&c<=t.arrayLimit?(i=[],i[c]=o):f!=="__proto__"&&(i[f]=o)}o=i}return o},An=function(e,t,n,o){if(!!e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,l=/(\[[^[\]]*])/g,f=n.depth>0&&i.exec(a),c=f?a.slice(0,f.index):a,p=[];if(c){if(!n.plainObjects&&Ne.call(Object.prototype,c)&&!n.allowPrototypes)return;p.push(c)}for(var d=0;n.depth>0&&(f=l.exec(a))!==null&&d<n.depth;){if(d+=1,!n.plainObjects&&Ne.call(Object.prototype,f[1].slice(1,-1))&&!n.allowPrototypes)return;p.push(f[1])}return f&&p.push("["+a.slice(f.index)+"]"),wn(p,t,n,o)}},Pn=function(e){if(!e)return b;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset=="undefined"?b.charset:e.charset;return{allowDots:typeof e.allowDots=="undefined"?b.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:b.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:b.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:b.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:b.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:b.comma,decoder:typeof e.decoder=="function"?e.decoder:b.decoder,delimiter:typeof e.delimiter=="string"||j.isRegExp(e.delimiter)?e.delimiter:b.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:b.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:b.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:b.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:b.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:b.strictNullHandling}},En=function(r,e){var t=Pn(e);if(r===""||r===null||typeof r=="undefined")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?On(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var l=a[i],f=An(l,n[l],t,typeof r=="string");o=j.merge(o,f,t)}return t.allowSparse===!0?o:j.compact(o)},xn=mn,$n=En,Fn=ke,In={formats:Fn,parse:$n,stringify:xn};async function Mn(r,e,t){const o=await(await fetch(r,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:In.stringify(e)})).json();return t.value=o,o}export{Mn as G,Tn as _};
