(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8764],{79742:function(G,M){"use strict";M.byteLength=u,M.toByteArray=_,M.fromByteArray=D;for(var F=[],p=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",x=0,U=S.length;x<U;++x)F[x]=S[x],p[S.charCodeAt(x)]=x;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function f(h){var c=h.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=h.indexOf("=");w===-1&&(w=c);var v=w===c?0:4-w%4;return[w,v]}function u(h){var c=f(h),w=c[0],v=c[1];return(w+v)*3/4-v}function R(h,c,w){return(c+w)*3/4-w}function _(h){var c,w=f(h),v=w[0],T=w[1],g=new d(R(h,v,T)),k=0,b=T>0?v-4:v,m;for(m=0;m<b;m+=4)c=p[h.charCodeAt(m)]<<18|p[h.charCodeAt(m+1)]<<12|p[h.charCodeAt(m+2)]<<6|p[h.charCodeAt(m+3)],g[k++]=c>>16&255,g[k++]=c>>8&255,g[k++]=c&255;return T===2&&(c=p[h.charCodeAt(m)]<<2|p[h.charCodeAt(m+1)]>>4,g[k++]=c&255),T===1&&(c=p[h.charCodeAt(m)]<<10|p[h.charCodeAt(m+1)]<<4|p[h.charCodeAt(m+2)]>>2,g[k++]=c>>8&255,g[k++]=c&255),g}function B(h){return F[h>>18&63]+F[h>>12&63]+F[h>>6&63]+F[h&63]}function A(h,c,w){for(var v,T=[],g=c;g<w;g+=3)v=(h[g]<<16&16711680)+(h[g+1]<<8&65280)+(h[g+2]&255),T.push(B(v));return T.join("")}function D(h){for(var c,w=h.length,v=w%3,T=[],g=16383,k=0,b=w-v;k<b;k+=g)T.push(A(h,k,k+g>b?b:k+g));return v===1?(c=h[w-1],T.push(F[c>>2]+F[c<<4&63]+"==")):v===2&&(c=(h[w-2]<<8)+h[w-1],T.push(F[c>>10]+F[c>>4&63]+F[c<<2&63]+"=")),T.join("")}},48764:function(G,M,F){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var p=F(79742),d=F(80645),S=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;M.Buffer=u,M.SlowBuffer=g,M.INSPECT_MAX_BYTES=50;var x=2147483647;M.kMaxLength=x,u.TYPED_ARRAY_SUPPORT=U(),!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function U(){try{var i=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(i,r),i.foo()===42}catch(t){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function f(i){if(i>x)throw new RangeError('The value "'+i+'" is invalid for option "size"');var r=new Uint8Array(i);return Object.setPrototypeOf(r,u.prototype),r}function u(i,r,t){if(typeof i=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return A(i)}return R(i,r,t)}u.poolSize=8192;function R(i,r,t){if(typeof i=="string")return D(i,r);if(ArrayBuffer.isView(i))return c(i);if(i==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i);if(N(i,ArrayBuffer)||i&&N(i.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(i,SharedArrayBuffer)||i&&N(i.buffer,SharedArrayBuffer)))return w(i,r,t);if(typeof i=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=i.valueOf&&i.valueOf();if(n!=null&&n!==i)return u.from(n,r,t);var e=v(i);if(e)return e;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof i[Symbol.toPrimitive]=="function")return u.from(i[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof i)}u.from=function(i,r,t){return R(i,r,t)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function _(i){if(typeof i!="number")throw new TypeError('"size" argument must be of type number');if(i<0)throw new RangeError('The value "'+i+'" is invalid for option "size"')}function B(i,r,t){return _(i),i<=0?f(i):r!==void 0?typeof t=="string"?f(i).fill(r,t):f(i).fill(r):f(i)}u.alloc=function(i,r,t){return B(i,r,t)};function A(i){return _(i),f(i<0?0:T(i)|0)}u.allocUnsafe=function(i){return A(i)},u.allocUnsafeSlow=function(i){return A(i)};function D(i,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=k(i,r)|0,n=f(t),e=n.write(i,r);return e!==t&&(n=n.slice(0,e)),n}function h(i){for(var r=i.length<0?0:T(i.length)|0,t=f(r),n=0;n<r;n+=1)t[n]=i[n]&255;return t}function c(i){if(N(i,Uint8Array)){var r=new Uint8Array(i);return w(r.buffer,r.byteOffset,r.byteLength)}return h(i)}function w(i,r,t){if(r<0||i.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(i.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&t===void 0?n=new Uint8Array(i):t===void 0?n=new Uint8Array(i,r):n=new Uint8Array(i,r,t),Object.setPrototypeOf(n,u.prototype),n}function v(i){if(u.isBuffer(i)){var r=T(i.length)|0,t=f(r);return t.length===0||i.copy(t,0,0,r),t}if(i.length!==void 0)return typeof i.length!="number"||X(i.length)?f(0):h(i);if(i.type==="Buffer"&&Array.isArray(i.data))return h(i.data)}function T(i){if(i>=x)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+x.toString(16)+" bytes");return i|0}function g(i){return+i!=i&&(i=0),u.alloc(+i)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,t){if(N(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),N(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(r)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;for(var n=r.length,e=t.length,o=0,a=Math.min(n,e);o<a;++o)if(r[o]!==t[o]){n=r[o],e=t[o];break}return n<e?-1:e<n?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var n;if(t===void 0)for(t=0,n=0;n<r.length;++n)t+=r[n].length;var e=u.allocUnsafe(t),o=0;for(n=0;n<r.length;++n){var a=r[n];if(N(a,Uint8Array))o+a.length>e.length?u.from(a).copy(e,o):Uint8Array.prototype.set.call(e,a,o);else if(u.isBuffer(a))a.copy(e,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=a.length}return e};function k(i,r){if(u.isBuffer(i))return i.length;if(ArrayBuffer.isView(i)||N(i,ArrayBuffer))return i.byteLength;if(typeof i!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof i);var t=i.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;for(var e=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return H(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Q(i).length;default:if(e)return n?-1:H(i).length;r=(""+r).toLowerCase(),e=!0}}u.byteLength=k;function b(i,r,t){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(i||(i="utf8");;)switch(i){case"hex":return hr(this,r,t);case"utf8":case"utf-8":return V(this,r,t);case"ascii":return or(this,r,t);case"latin1":case"binary":return ar(this,r,t);case"base64":return er(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fr(this,r,t);default:if(n)throw new TypeError("Unknown encoding: "+i);i=(i+"").toLowerCase(),n=!0}}u.prototype._isBuffer=!0;function m(i,r,t){var n=i[r];i[r]=i[t],i[t]=n}u.prototype.swap16=function(){var r=this.length;if(r%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<r;t+=2)m(this,t,t+1);return this},u.prototype.swap32=function(){var r=this.length;if(r%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<r;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},u.prototype.swap64=function(){var r=this.length;if(r%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<r;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},u.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?V(this,0,r):b.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){var r="",t=M.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},S&&(u.prototype[S]=u.prototype.inspect),u.prototype.compare=function(r,t,n,e,o){if(N(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),n===void 0&&(n=r?r.length:0),e===void 0&&(e=0),o===void 0&&(o=this.length),t<0||n>r.length||e<0||o>this.length)throw new RangeError("out of range index");if(e>=o&&t>=n)return 0;if(e>=o)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,e>>>=0,o>>>=0,this===r)return 0;for(var a=o-e,l=n-t,s=Math.min(a,l),y=this.slice(e,o),C=r.slice(t,n),E=0;E<s;++E)if(y[E]!==C[E]){a=y[E],l=C[E];break}return a<l?-1:l<a?1:0};function z(i,r,t,n,e){if(i.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,X(t)&&(t=e?0:i.length-1),t<0&&(t=i.length+t),t>=i.length){if(e)return-1;t=i.length-1}else if(t<0)if(e)t=0;else return-1;if(typeof r=="string"&&(r=u.from(r,n)),u.isBuffer(r))return r.length===0?-1:J(i,r,t,n,e);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(i,r,t):Uint8Array.prototype.lastIndexOf.call(i,r,t):J(i,[r],t,n,e);throw new TypeError("val must be string, number or Buffer")}function J(i,r,t,n,e){var o=1,a=i.length,l=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(i.length<2||r.length<2)return-1;o=2,a/=2,l/=2,t/=2}function s($,j){return o===1?$[j]:$.readUInt16BE(j*o)}var y;if(e){var C=-1;for(y=t;y<a;y++)if(s(i,y)===s(r,C===-1?0:y-C)){if(C===-1&&(C=y),y-C+1===l)return C*o}else C!==-1&&(y-=y-C),C=-1}else for(t+l>a&&(t=a-l),y=t;y>=0;y--){for(var E=!0,Y=0;Y<l;Y++)if(s(i,y+Y)!==s(r,Y)){E=!1;break}if(E)return y}return-1}u.prototype.includes=function(r,t,n){return this.indexOf(r,t,n)!==-1},u.prototype.indexOf=function(r,t,n){return z(this,r,t,n,!0)},u.prototype.lastIndexOf=function(r,t,n){return z(this,r,t,n,!1)};function P(i,r,t,n){t=Number(t)||0;var e=i.length-t;n?(n=Number(n),n>e&&(n=e)):n=e;var o=r.length;n>o/2&&(n=o/2);for(var a=0;a<n;++a){var l=parseInt(r.substr(a*2,2),16);if(X(l))return a;i[t+a]=l}return a}function rr(i,r,t,n){return W(H(r,i.length-t),i,t,n)}function tr(i,r,t,n){return W(lr(r),i,t,n)}function ir(i,r,t,n){return W(Q(r),i,t,n)}function nr(i,r,t,n){return W(wr(r,i.length-t),i,t,n)}u.prototype.write=function(r,t,n,e){if(t===void 0)e="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")e=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,e===void 0&&(e="utf8")):(e=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-t;if((n===void 0||n>o)&&(n=o),r.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var a=!1;;)switch(e){case"hex":return P(this,r,t,n);case"utf8":case"utf-8":return rr(this,r,t,n);case"ascii":case"latin1":case"binary":return tr(this,r,t,n);case"base64":return ir(this,r,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return nr(this,r,t,n);default:if(a)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),a=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function er(i,r,t){return r===0&&t===i.length?p.fromByteArray(i):p.fromByteArray(i.slice(r,t))}function V(i,r,t){t=Math.min(i.length,t);for(var n=[],e=r;e<t;){var o=i[e],a=null,l=o>239?4:o>223?3:o>191?2:1;if(e+l<=t){var s,y,C,E;switch(l){case 1:o<128&&(a=o);break;case 2:s=i[e+1],(s&192)==128&&(E=(o&31)<<6|s&63,E>127&&(a=E));break;case 3:s=i[e+1],y=i[e+2],(s&192)==128&&(y&192)==128&&(E=(o&15)<<12|(s&63)<<6|y&63,E>2047&&(E<55296||E>57343)&&(a=E));break;case 4:s=i[e+1],y=i[e+2],C=i[e+3],(s&192)==128&&(y&192)==128&&(C&192)==128&&(E=(o&15)<<18|(s&63)<<12|(y&63)<<6|C&63,E>65535&&E<1114112&&(a=E))}}a===null?(a=65533,l=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),e+=l}return ur(n)}var K=4096;function ur(i){var r=i.length;if(r<=K)return String.fromCharCode.apply(String,i);for(var t="",n=0;n<r;)t+=String.fromCharCode.apply(String,i.slice(n,n+=K));return t}function or(i,r,t){var n="";t=Math.min(i.length,t);for(var e=r;e<t;++e)n+=String.fromCharCode(i[e]&127);return n}function ar(i,r,t){var n="";t=Math.min(i.length,t);for(var e=r;e<t;++e)n+=String.fromCharCode(i[e]);return n}function hr(i,r,t){var n=i.length;(!r||r<0)&&(r=0),(!t||t<0||t>n)&&(t=n);for(var e="",o=r;o<t;++o)e+=sr[i[o]];return e}function fr(i,r,t){for(var n=i.slice(r,t),e="",o=0;o<n.length-1;o+=2)e+=String.fromCharCode(n[o]+n[o+1]*256);return e}u.prototype.slice=function(r,t){var n=this.length;r=~~r,t=t===void 0?n:~~t,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<r&&(t=r);var e=this.subarray(r,t);return Object.setPrototypeOf(e,u.prototype),e};function I(i,r,t){if(i%1!=0||i<0)throw new RangeError("offset is not uint");if(i+r>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);for(var e=this[r],o=1,a=0;++a<t&&(o*=256);)e+=this[r+a]*o;return e},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);for(var e=this[r+--t],o=1;t>0&&(o*=256);)e+=this[r+--t]*o;return e},u.prototype.readUint8=u.prototype.readUInt8=function(r,t){return r=r>>>0,t||I(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||I(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||I(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||I(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||I(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);for(var e=this[r],o=1,a=0;++a<t&&(o*=256);)e+=this[r+a]*o;return o*=128,e>=o&&(e-=Math.pow(2,8*t)),e},u.prototype.readIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||I(r,t,this.length);for(var e=t,o=1,a=this[r+--e];e>0&&(o*=256);)a+=this[r+--e]*o;return o*=128,a>=o&&(a-=Math.pow(2,8*t)),a},u.prototype.readInt8=function(r,t){return r=r>>>0,t||I(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,t){r=r>>>0,t||I(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n},u.prototype.readInt16BE=function(r,t){r=r>>>0,t||I(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n},u.prototype.readInt32LE=function(r,t){return r=r>>>0,t||I(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,t){return r=r>>>0,t||I(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readFloatLE=function(r,t){return r=r>>>0,t||I(r,4,this.length),d.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,t){return r=r>>>0,t||I(r,4,this.length),d.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||I(r,8,this.length),d.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||I(r,8,this.length),d.read(this,r,!1,52,8)};function L(i,r,t,n,e,o){if(!u.isBuffer(i))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<o)throw new RangeError('"value" argument is out of bounds');if(t+n>i.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){var o=Math.pow(2,8*n)-1;L(this,r,t,n,o,0)}var a=1,l=0;for(this[t]=r&255;++l<n&&(a*=256);)this[t+l]=r/a&255;return t+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,t,n,e){if(r=+r,t=t>>>0,n=n>>>0,!e){var o=Math.pow(2,8*n)-1;L(this,r,t,n,o,0)}var a=n-1,l=1;for(this[t+a]=r&255;--a>=0&&(l*=256);)this[t+a]=r/l&255;return t+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,1,255,0),this[t]=r&255,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},u.prototype.writeIntLE=function(r,t,n,e){if(r=+r,t=t>>>0,!e){var o=Math.pow(2,8*n-1);L(this,r,t,n,o-1,-o)}var a=0,l=1,s=0;for(this[t]=r&255;++a<n&&(l*=256);)r<0&&s===0&&this[t+a-1]!==0&&(s=1),this[t+a]=(r/l>>0)-s&255;return t+n},u.prototype.writeIntBE=function(r,t,n,e){if(r=+r,t=t>>>0,!e){var o=Math.pow(2,8*n-1);L(this,r,t,n,o-1,-o)}var a=n-1,l=1,s=0;for(this[t+a]=r&255;--a>=0&&(l*=256);)r<0&&s===0&&this[t+a+1]!==0&&(s=1),this[t+a]=(r/l>>0)-s&255;return t+n},u.prototype.writeInt8=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},u.prototype.writeInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},u.prototype.writeInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},u.prototype.writeInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},u.prototype.writeInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||L(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function O(i,r,t,n,e,o){if(t+n>i.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Z(i,r,t,n,e){return r=+r,t=t>>>0,e||O(i,r,t,4,34028234663852886e22,-34028234663852886e22),d.write(i,r,t,n,23,4),t+4}u.prototype.writeFloatLE=function(r,t,n){return Z(this,r,t,!0,n)},u.prototype.writeFloatBE=function(r,t,n){return Z(this,r,t,!1,n)};function q(i,r,t,n,e){return r=+r,t=t>>>0,e||O(i,r,t,8,17976931348623157e292,-17976931348623157e292),d.write(i,r,t,n,52,8),t+8}u.prototype.writeDoubleLE=function(r,t,n){return q(this,r,t,!0,n)},u.prototype.writeDoubleBE=function(r,t,n){return q(this,r,t,!1,n)},u.prototype.copy=function(r,t,n,e){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!e&&e!==0&&(e=this.length),t>=r.length&&(t=r.length),t||(t=0),e>0&&e<n&&(e=n),e===n||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-t<e-n&&(e=r.length-t+n);var o=e-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,e):Uint8Array.prototype.set.call(r,this.subarray(n,e),t),o},u.prototype.fill=function(r,t,n,e){if(typeof r=="string"){if(typeof t=="string"?(e=t,t=0,n=this.length):typeof n=="string"&&(e=n,n=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(r.length===1){var o=r.charCodeAt(0);(e==="utf8"&&o<128||e==="latin1")&&(r=o)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var a;if(typeof r=="number")for(a=t;a<n;++a)this[a]=r;else{var l=u.isBuffer(r)?r:u.from(r,e),s=l.length;if(s===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<n-t;++a)this[a+t]=l[a%s]}return this};var pr=/[^+/0-9A-Za-z-_]/g;function cr(i){if(i=i.split("=")[0],i=i.trim().replace(pr,""),i.length<2)return"";for(;i.length%4!=0;)i=i+"=";return i}function H(i,r){r=r||Infinity;for(var t,n=i.length,e=null,o=[],a=0;a<n;++a){if(t=i.charCodeAt(a),t>55295&&t<57344){if(!e){if(t>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}e=t;continue}if(t<56320){(r-=3)>-1&&o.push(239,191,189),e=t;continue}t=(e-55296<<10|t-56320)+65536}else e&&(r-=3)>-1&&o.push(239,191,189);if(e=null,t<128){if((r-=1)<0)break;o.push(t)}else if(t<2048){if((r-=2)<0)break;o.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;o.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;o.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return o}function lr(i){for(var r=[],t=0;t<i.length;++t)r.push(i.charCodeAt(t)&255);return r}function wr(i,r){for(var t,n,e,o=[],a=0;a<i.length&&!((r-=2)<0);++a)t=i.charCodeAt(a),n=t>>8,e=t%256,o.push(e),o.push(n);return o}function Q(i){return p.toByteArray(cr(i))}function W(i,r,t,n){for(var e=0;e<n&&!(e+t>=r.length||e>=i.length);++e)r[e+t]=i[e];return e}function N(i,r){return i instanceof r||i!=null&&i.constructor!=null&&i.constructor.name!=null&&i.constructor.name===r.name}function X(i){return i!==i}var sr=function(){for(var i="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var n=t*16,e=0;e<16;++e)r[n+e]=i[t]+i[e];return r}()},80645:function(G,M){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */M.read=function(F,p,d,S,x){var U,f,u=x*8-S-1,R=(1<<u)-1,_=R>>1,B=-7,A=d?x-1:0,D=d?-1:1,h=F[p+A];for(A+=D,U=h&(1<<-B)-1,h>>=-B,B+=u;B>0;U=U*256+F[p+A],A+=D,B-=8);for(f=U&(1<<-B)-1,U>>=-B,B+=S;B>0;f=f*256+F[p+A],A+=D,B-=8);if(U===0)U=1-_;else{if(U===R)return f?NaN:(h?-1:1)*Infinity;f=f+Math.pow(2,S),U=U-_}return(h?-1:1)*f*Math.pow(2,U-S)},M.write=function(F,p,d,S,x,U){var f,u,R,_=U*8-x-1,B=(1<<_)-1,A=B>>1,D=x===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=S?0:U-1,c=S?1:-1,w=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===Infinity?(u=isNaN(p)?1:0,f=B):(f=Math.floor(Math.log(p)/Math.LN2),p*(R=Math.pow(2,-f))<1&&(f--,R*=2),f+A>=1?p+=D/R:p+=D*Math.pow(2,1-A),p*R>=2&&(f++,R/=2),f+A>=B?(u=0,f=B):f+A>=1?(u=(p*R-1)*Math.pow(2,x),f=f+A):(u=p*Math.pow(2,A-1)*Math.pow(2,x),f=0));x>=8;F[d+h]=u&255,h+=c,u/=256,x-=8);for(f=f<<x|u,_+=x;_>0;F[d+h]=f&255,h+=c,f/=256,_-=8);F[d+h-c]|=w*128}}}]);
