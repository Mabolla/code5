#!/usr/bin/env node
/* eslint-disable */
//prettier-ignore
(()=>{var gje=Object.create;var tU=Object.defineProperty;var dje=Object.getOwnPropertyDescriptor;var mje=Object.getOwnPropertyNames;var yje=Object.getPrototypeOf,Eje=Object.prototype.hasOwnProperty;var Ie=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Ze=(e,t)=>()=>(e&&(t=e(e=0)),t);var G=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yt=(e,t)=>{for(var r in t)tU(e,r,{get:t[r],enumerable:!0})},Ije=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of mje(t))!Eje.call(e,a)&&a!==r&&tU(e,a,{get:()=>t[a],enumerable:!(s=dje(t,a))||s.enumerable});return e};var et=(e,t,r)=>(r=e!=null?gje(yje(e)):{},Ije(t||!e||!e.__esModule?tU(r,"default",{value:e,enumerable:!0}):r,e));var Ai={};Yt(Ai,{SAFE_TIME:()=>lX,S_IFDIR:()=>KP,S_IFLNK:()=>JP,S_IFMT:()=>_f,S_IFREG:()=>bB});var _f,KP,bB,JP,lX,cX=Ze(()=>{_f=61440,KP=16384,bB=32768,JP=40960,lX=456789e3});var or={};Yt(or,{EBADF:()=>Go,EBUSY:()=>Cje,EEXIST:()=>bje,EINVAL:()=>Bje,EISDIR:()=>Dje,ENOENT:()=>vje,ENOSYS:()=>wje,ENOTDIR:()=>Sje,ENOTEMPTY:()=>xje,EOPNOTSUPP:()=>kje,EROFS:()=>Pje,ERR_DIR_CLOSED:()=>rU});function wc(e,t){return Object.assign(new Error(`${e}: ${t}`),{code:e})}function Cje(e){return wc("EBUSY",e)}function wje(e,t){return wc("ENOSYS",`${e}, ${t}`)}function Bje(e){return wc("EINVAL",`invalid argument, ${e}`)}function Go(e){return wc("EBADF",`bad file descriptor, ${e}`)}function vje(e){return wc("ENOENT",`no such file or directory, ${e}`)}function Sje(e){return wc("ENOTDIR",`not a directory, ${e}`)}function Dje(e){return wc("EISDIR",`illegal operation on a directory, ${e}`)}function bje(e){return wc("EEXIST",`file already exists, ${e}`)}function Pje(e){return wc("EROFS",`read-only filesystem, ${e}`)}function xje(e){return wc("ENOTEMPTY",`directory not empty, ${e}`)}function kje(e){return wc("EOPNOTSUPP",`operation not supported, ${e}`)}function rU(){return wc("ERR_DIR_CLOSED","Directory handle was closed")}var zP=Ze(()=>{});var sl={};Yt(sl,{BigIntStatsEntry:()=>aE,DEFAULT_MODE:()=>sU,DirEntry:()=>nU,StatEntry:()=>oE,areStatsEqual:()=>oU,clearStats:()=>ZP,convertToBigIntStats:()=>Rje,makeDefaultStats:()=>uX,makeEmptyStats:()=>Qje});function uX(){return new oE}function Qje(){return ZP(uX())}function ZP(e){for(let t in e)if(Object.hasOwn(e,t)){let r=e[t];typeof r=="number"?e[t]=0:typeof r=="bigint"?e[t]=BigInt(0):iU.types.isDate(r)&&(e[t]=new Date(0))}return e}function Rje(e){let t=new aE;for(let r in e)if(Object.hasOwn(e,r)){let s=e[r];typeof s=="number"?t[r]=BigInt(Math.floor(s)):iU.types.isDate(s)&&(t[r]=new Date(s))}return t.atimeNs=t.atimeMs*BigInt(1e6)+BigInt(Math.floor(e.atimeMs%1*1e3))*BigInt(1e3),t.mtimeNs=t.mtimeMs*BigInt(1e6)+BigInt(Math.floor(e.mtimeMs%1*1e3))*BigInt(1e3),t.ctimeNs=t.ctimeMs*BigInt(1e6)+BigInt(Math.floor(e.ctimeMs%1*1e3))*BigInt(1e3),t.birthtimeNs=t.birthtimeMs*BigInt(1e6)+BigInt(Math.floor(e.birthtimeMs%1*1e3))*BigInt(1e3),t}function oU(e,t){if(e.atimeMs!==t.atimeMs||e.birthtimeMs!==t.birthtimeMs||e.blksize!==t.blksize||e.blocks!==t.blocks||e.ctimeMs!==t.ctimeMs||e.dev!==t.dev||e.gid!==t.gid||e.ino!==t.ino||e.isBlockDevice()!==t.isBlockDevice()||e.isCharacterDevice()!==t.isCharacterDevice()||e.isDirectory()!==t.isDirectory()||e.isFIFO()!==t.isFIFO()||e.isFile()!==t.isFile()||e.isSocket()!==t.isSocket()||e.isSymbolicLink()!==t.isSymbolicLink()||e.mode!==t.mode||e.mtimeMs!==t.mtimeMs||e.nlink!==t.nlink||e.rdev!==t.rdev||e.size!==t.size||e.uid!==t.uid)return!1;let r=e,s=t;return!(r.atimeNs!==s.atimeNs||r.mtimeNs!==s.mtimeNs||r.ctimeNs!==s.ctimeNs||r.birthtimeNs!==s.birthtimeNs)}var iU,sU,nU,oE,aE,aU=Ze(()=>{iU=et(Ie("util")),sU=33188,nU=class{constructor(){this.name="";this.path="";this.mode=0}isBlockDevice(){return!1}isCharacterDevice(){return!1}isDirectory(){return(this.mode&61440)===16384}isFIFO(){return!1}isFile(){return(this.mode&61440)===32768}isSocket(){return!1}isSymbolicLink(){return(this.mode&61440)===40960}},oE=class{constructor(){this.uid=0;this.gid=0;this.size=0;this.blksize=0;this.atimeMs=0;this.mtimeMs=0;this.ctimeMs=0;this.birthtimeMs=0;this.atime=new Date(0);this.mtime=new Date(0);this.ctime=new Date(0);this.birthtime=new Date(0);this.dev=0;this.ino=0;this.mode=sU;this.nlink=1;this.rdev=0;this.blocks=1}isBlockDevice(){return!1}isCharacterDevice(){return!1}isDirectory(){return(this.mode&61440)===16384}isFIFO(){return!1}isFile(){return(this.mode&61440)===32768}isSocket(){return!1}isSymbolicLink(){return(this.mode&61440)===40960}},aE=class{constructor(){this.uid=BigInt(0);this.gid=BigInt(0);this.size=BigInt(0);this.blksize=BigInt(0);this.atimeMs=BigInt(0);this.mtimeMs=BigInt(0);this.ctimeMs=BigInt(0);this.birthtimeMs=BigInt(0);this.atimeNs=BigInt(0);this.mtimeNs=BigInt(0);this.ctimeNs=BigInt(0);this.birthtimeNs=BigInt(0);this.atime=new Date(0);this.mtime=new Date(0);this.ctime=new Date(0);this.birthtime=new Date(0);this.dev=BigInt(0);this.ino=BigInt(0);this.mode=BigInt(sU);this.nlink=BigInt(1);this.rdev=BigInt(0);this.blocks=BigInt(1)}isBlockDevice(){return!1}isCharacterDevice(){return!1}isDirectory(){return(this.mode&BigInt(61440))===BigInt(16384)}isFIFO(){return!1}isFile(){return(this.mode&BigInt(61440))===BigInt(32768)}isSocket(){return!1}isSymbolicLink(){return(this.mode&BigInt(61440))===BigInt(40960)}}});function Lje(e){let t,r;if(t=e.match(Nje))e=t[1];else if(r=e.match(Oje))e=`\\\\${r[1]?".\\":""}${r[2]}`;else return e;return e.replace(/\//g,"\\")}function Mje(e){e=e.replace(/\\/g,"/");let t,r;return(t=e.match(Tje))?e=`/${t[1]}`:(r=e.match(Fje))&&(e=`/unc/${r[1]?".dot/":""}${r[2]}`),e}function XP(e,t){return e===fe?AX(t):lU(t)}var PB,vt,Er,fe,K,fX,Tje,Fje,Nje,Oje,lU,AX,ol=Ze(()=>{PB=et(Ie("path")),vt={root:"/",dot:".",parent:".."},Er={home:"~",nodeModules:"node_modules",manifest:"package.json",lockfile:"yarn.lock",virtual:"__virtual__",pnpJs:".pnp.js",pnpCjs:".pnp.cjs",pnpData:".pnp.data.json",pnpEsmLoader:".pnp.loader.mjs",rc:".yarnrc.yml",env:".env"},fe=Object.create(PB.default),K=Object.create(PB.default.posix);fe.cwd=()=>process.cwd();K.cwd=process.platform==="win32"?()=>lU(process.cwd()):process.cwd;process.platform==="win32"&&(K.resolve=(...e)=>e.length>0&&K.isAbsolute(e[0])?PB.default.posix.resolve(...e):PB.default.posix.resolve(K.cwd(),...e));fX=function(e,t,r){return t=e.normalize(t),r=e.normalize(r),t===r?".":(t.endsWith(e.sep)||(t=t+e.sep),r.startsWith(t)?r.slice(t.length):null)};fe.contains=(e,t)=>fX(fe,e,t);K.contains=(e,t)=>fX(K,e,t);Tje=/^([a-zA-Z]:.*)$/,Fje=/^\/\/(\.\/)?(.*)$/,Nje=/^\/([a-zA-Z]:.*)$/,Oje=/^\/unc\/(\.dot\/)?(.*)$/;lU=process.platform==="win32"?Mje:e=>e,AX=process.platform==="win32"?Lje:e=>e;fe.fromPortablePath=AX;fe.toPortablePath=lU});async function $P(e,t){let r="0123456789abcdef";await e.mkdirPromise(t.indexPath,{recursive:!0});let s=[];for(let a of r)for(let n of r)s.push(e.mkdirPromise(e.pathUtils.join(t.indexPath,`${a}${n}`),{recursive:!0}));return await Promise.all(s),t.indexPath}async function pX(e,t,r,s,a){let n=e.pathUtils.normalize(t),c=r.pathUtils.normalize(s),f=[],p=[],{atime:h,mtime:E}=a.stableTime?{atime:hd,mtime:hd}:await r.lstatPromise(c);await e.mkdirpPromise(e.pathUtils.dirname(t),{utimes:[h,E]}),await cU(f,p,e,n,r,c,{...a,didParentExist:!0});for(let C of f)await C();await Promise.all(p.map(C=>C()))}async function cU(e,t,r,s,a,n,c){let f=c.didParentExist?await hX(r,s):null,p=await a.lstatPromise(n),{atime:h,mtime:E}=c.stableTime?{atime:hd,mtime:hd}:p,C;switch(!0){case p.isDirectory():C=await _je(e,t,r,s,f,a,n,p,c);break;case p.isFile():C=await Gje(e,t,r,s,f,a,n,p,c);break;case p.isSymbolicLink():C=await qje(e,t,r,s,f,a,n,p,c);break;default:throw new Error(`Unsupported file type (${p.mode})`)}return(c.linkStrategy?.type!=="HardlinkFromIndex"||!p.isFile())&&((C||f?.mtime?.getTime()!==E.getTime()||f?.atime?.getTime()!==h.getTime())&&(t.push(()=>r.lutimesPromise(s,h,E)),C=!0),(f===null||(f.mode&511)!==(p.mode&511))&&(t.push(()=>r.chmodPromise(s,p.mode&511)),C=!0)),C}async function hX(e,t){try{return await e.lstatPromise(t)}catch{return null}}async function _je(e,t,r,s,a,n,c,f,p){if(a!==null&&!a.isDirectory())if(p.overwrite)e.push(async()=>r.removePromise(s)),a=null;else return!1;let h=!1;a===null&&(e.push(async()=>{try{await r.mkdirPromise(s,{mode:f.mode})}catch(S){if(S.code!=="EEXIST")throw S}}),h=!0);let E=await n.readdirPromise(c),C=p.didParentExist&&!a?{...p,didParentExist:!1}:p;if(p.stableSort)for(let S of E.sort())await cU(e,t,r,r.pathUtils.join(s,S),n,n.pathUtils.join(c,S),C)&&(h=!0);else(await Promise.all(E.map(async x=>{await cU(e,t,r,r.pathUtils.join(s,x),n,n.pathUtils.join(c,x),C)}))).some(x=>x)&&(h=!0);return h}async function Hje(e,t,r,s,a,n,c,f,p,h){let E=await n.checksumFilePromise(c,{algorithm:"sha1"}),C=420,S=f.mode&511,x=`${E}${S!==C?S.toString(8):""}`,I=r.pathUtils.join(h.indexPath,E.slice(0,2),`${x}.dat`),T;(ae=>(ae[ae.Lock=0]="Lock",ae[ae.Rename=1]="Rename"))(T||={});let O=1,U=await hX(r,I);if(a){let ie=U&&a.dev===U.dev&&a.ino===U.ino,ue=U?.mtimeMs!==Uje;if(ie&&ue&&h.autoRepair&&(O=0,U=null),!ie)if(p.overwrite)e.push(async()=>r.removePromise(s)),a=null;else return!1}let Y=!U&&O===1?`${I}.${Math.floor(Math.random()*4294967296).toString(16).padStart(8,"0")}`:null,te=!1;return e.push(async()=>{if(!U&&(O===0&&await r.lockPromise(I,async()=>{let ie=await n.readFilePromise(c);await r.writeFilePromise(I,ie)}),O===1&&Y)){let ie=await n.readFilePromise(c);await r.writeFilePromise(Y,ie);try{await r.linkPromise(Y,I)}catch(ue){if(ue.code==="EEXIST")te=!0,await r.unlinkPromise(Y);else throw ue}}a||await r.linkPromise(I,s)}),t.push(async()=>{U||(await r.lutimesPromise(I,hd,hd),S!==C&&await r.chmodPromise(I,S)),Y&&!te&&await r.unlinkPromise(Y)}),!1}async function jje(e,t,r,s,a,n,c,f,p){if(a!==null)if(p.overwrite)e.push(async()=>r.removePromise(s)),a=null;else return!1;return e.push(async()=>{let h=await n.readFilePromise(c);await r.writeFilePromise(s,h)}),!0}async function Gje(e,t,r,s,a,n,c,f,p){return p.linkStrategy?.type==="HardlinkFromIndex"?Hje(e,t,r,s,a,n,c,f,p,p.linkStrategy):jje(e,t,r,s,a,n,c,f,p)}async function qje(e,t,r,s,a,n,c,f,p){if(a!==null)if(p.overwrite)e.push(async()=>r.removePromise(s)),a=null;else return!1;return e.push(async()=>{await r.symlinkPromise(XP(r.pathUtils,await n.readlinkPromise(c)),s)}),!0}var hd,Uje,uU=Ze(()=>{ol();hd=new Date(456789e3*1e3),Uje=hd.getTime()});function ex(e,t,r,s){let a=()=>{let n=r.shift();if(typeof n>"u")return null;let c=e.pathUtils.join(t,n);return Object.assign(e.statSync(c),{name:n,path:void 0})};return new xB(t,a,s)}var xB,gX=Ze(()=>{zP();xB=class{constructor(t,r,s={}){this.path=t;this.nextDirent=r;this.opts=s;this.closed=!1}throwIfClosed(){if(this.closed)throw rU()}async*[Symbol.asyncIterator](){try{let t;for(;(t=await this.read())!==null;)yield t}finally{await this.close()}}read(t){let r=this.readSync();return typeof t<"u"?t(null,r):Promise.resolve(r)}readSync(){return this.throwIfClosed(),this.nextDirent()}close(t){return this.closeSync(),typeof t<"u"?t(null):Promise.resolve()}closeSync(){this.throwIfClosed(),this.opts.onClose?.(),this.closed=!0}}});function dX(e,t){if(e!==t)throw new Error(`Invalid StatWatcher status: expected '${t}', got '${e}'`)}var mX,tx,yX=Ze(()=>{mX=Ie("events");aU();tx=class e extends mX.EventEmitter{constructor(r,s,{bigint:a=!1}={}){super();this.status="ready";this.changeListeners=new Map;this.startTimeout=null;this.fakeFs=r,this.path=s,this.bigint=a,this.lastStats=this.stat()}static create(r,s,a){let n=new e(r,s,a);return n.start(),n}start(){dX(this.status,"ready"),this.status="running",this.startTimeout=setTimeout(()=>{this.startTimeout=null,this.fakeFs.existsSync(this.path)||this.emit("change",this.lastStats,this.lastStats)},3)}stop(){dX(this.status,"running"),this.status="stopped",this.startTimeout!==null&&(clearTimeout(this.startTimeout),this.startTimeout=null),this.emit("stop")}stat(){try{return this.fakeFs.statSync(this.path,{bigint:this.bigint})}catch{let r=this.bigint?new aE:new oE;return ZP(r)}}makeInterval(r){let s=setInterval(()=>{let a=this.stat(),n=this.lastStats;oU(a,n)||(this.lastStats=a,this.emit("change",a,n))},r.interval);return r.persistent?s:s.unref()}registerChangeListener(r,s){this.addListener("change",r),this.changeListeners.set(r,this.makeInterval(s))}unregisterChangeListener(r){this.removeListener("change",r);let s=this.changeListeners.get(r);typeof s<"u"&&clearInterval(s),this.changeListeners.delete(r)}unregisterAllChangeListeners(){for(let r of this.changeListeners.keys())this.unregisterChangeListener(r)}hasChangeListeners(){return this.changeListeners.size>0}ref(){for(let r of this.changeListeners.values())r.ref();return this}unref(){for(let r of this.changeListeners.values())r.unref();return this}}});function lE(e,t,r,s){let a,n,c,f;switch(typeof r){case"function":a=!1,n=!0,c=5007,f=r;break;default:({bigint:a=!1,persistent:n=!0,interval:c=5007}=r),f=s;break}let p=rx.get(e);typeof p>"u"&&rx.set(e,p=new Map);let h=p.get(t);return typeof h>"u"&&(h=tx.create(e,t,{bigint:a}),p.set(t,h)),h.registerChangeListener(f,{persistent:n,interval:c}),h}function gd(e,t,r){let s=rx.get(e);if(typeof s>"u")return;let a=s.get(t);typeof a>"u"||(typeof r>"u"?a.unregisterAllChangeListeners():a.unregisterChangeListener(r),a.hasChangeListeners()||(a.stop(),s.delete(t)))}function dd(e){let t=rx.get(e);if(!(typeof t>"u"))for(let r of t.keys())gd(e,r)}var rx,fU=Ze(()=>{yX();rx=new WeakMap});function Wje(e){let t=e.match(/\r?\n/g);if(t===null)return IX.EOL;let r=t.filter(a=>a===`\r
`).length,s=t.length-r;return r>s?`\r
`:`
`}function md(e,t){return t.replace(/\r?\n/g,Wje(e))}var EX,IX,yp,Hf,yd=Ze(()=>{EX=Ie("crypto"),IX=Ie("os");uU();ol();yp=class{constructor(t){this.pathUtils=t}async*genTraversePromise(t,{stableSort:r=!1}={}){let s=[t];for(;s.length>0;){let a=s.shift();if((await this.lstatPromise(a)).isDirectory()){let c=await this.readdirPromise(a);if(r)for(let f of c.sort())s.push(this.pathUtils.join(a,f));else throw new Error("Not supported")}else yield a}}async checksumFilePromise(t,{algorithm:r="sha512"}={}){let s=await this.openPromise(t,"r");try{let n=Buffer.allocUnsafeSlow(65536),c=(0,EX.createHash)(r),f=0;for(;(f=await this.readPromise(s,n,0,65536))!==0;)c.update(f===65536?n:n.slice(0,f));return c.digest("hex")}finally{await this.closePromise(s)}}async removePromise(t,{recursive:r=!0,maxRetries:s=5}={}){let a;try{a=await this.lstatPromise(t)}catch(n){if(n.code==="ENOENT")return;throw n}if(a.isDirectory()){if(r){let n=await this.readdirPromise(t);await Promise.all(n.map(c=>this.removePromise(this.pathUtils.resolve(t,c))))}for(let n=0;n<=s;n++)try{await this.rmdirPromise(t);break}catch(c){if(c.code!=="EBUSY"&&c.code!=="ENOTEMPTY")throw c;n<s&&await new Promise(f=>setTimeout(f,n*100))}}else await this.unlinkPromise(t)}removeSync(t,{recursive:r=!0}={}){let s;try{s=this.lstatSync(t)}catch(a){if(a.code==="ENOENT")return;throw a}if(s.isDirectory()){if(r)for(let a of this.readdirSync(t))this.removeSync(this.pathUtils.resolve(t,a));this.rmdirSync(t)}else this.unlinkSync(t)}async mkdirpPromise(t,{chmod:r,utimes:s}={}){if(t=this.resolve(t),t===this.pathUtils.dirname(t))return;let a=t.split(this.pathUtils.sep),n;for(let c=2;c<=a.length;++c){let f=a.slice(0,c).join(this.pathUtils.sep);if(!this.existsSync(f)){try{await this.mkdirPromise(f)}catch(p){if(p.code==="EEXIST")continue;throw p}if(n??=f,r!=null&&await this.chmodPromise(f,r),s!=null)await this.utimesPromise(f,s[0],s[1]);else{let p=await this.statPromise(this.pathUtils.dirname(f));await this.utimesPromise(f,p.atime,p.mtime)}}}return n}mkdirpSync(t,{chmod:r,utimes:s}={}){if(t=this.resolve(t),t===this.pathUtils.dirname(t))return;let a=t.split(this.pathUtils.sep),n;for(let c=2;c<=a.length;++c){let f=a.slice(0,c).join(this.pathUtils.sep);if(!this.existsSync(f)){try{this.mkdirSync(f)}catch(p){if(p.code==="EEXIST")continue;throw p}if(n??=f,r!=null&&this.chmodSync(f,r),s!=null)this.utimesSync(f,s[0],s[1]);else{let p=this.statSync(this.pathUtils.dirname(f));this.utimesSync(f,p.atime,p.mtime)}}}return n}async copyPromise(t,r,{baseFs:s=this,overwrite:a=!0,stableSort:n=!1,stableTime:c=!1,linkStrategy:f=null}={}){return await pX(this,t,s,r,{overwrite:a,stableSort:n,stableTime:c,linkStrategy:f})}copySync(t,r,{baseFs:s=this,overwrite:a=!0}={}){let n=s.lstatSync(r),c=this.existsSync(t);if(n.isDirectory()){this.mkdirpSync(t);let p=s.readdirSync(r);for(let h of p)this.copySync(this.pathUtils.join(t,h),s.pathUtils.join(r,h),{baseFs:s,overwrite:a})}else if(n.isFile()){if(!c||a){c&&this.removeSync(t);let p=s.readFileSync(r);this.writeFileSync(t,p)}}else if(n.isSymbolicLink()){if(!c||a){c&&this.removeSync(t);let p=s.readlinkSync(r);this.symlinkSync(XP(this.pathUtils,p),t)}}else throw new Error(`Unsupported file type (file: ${r}, mode: 0o${n.mode.toString(8).padStart(6,"0")})`);let f=n.mode&511;this.chmodSync(t,f)}async changeFilePromise(t,r,s={}){return Buffer.isBuffer(r)?this.changeFileBufferPromise(t,r,s):this.changeFileTextPromise(t,r,s)}async changeFileBufferPromise(t,r,{mode:s}={}){let a=Buffer.alloc(0);try{a=await this.readFilePromise(t)}catch{}Buffer.compare(a,r)!==0&&await this.writeFilePromise(t,r,{mode:s})}async changeFileTextPromise(t,r,{automaticNewlines:s,mode:a}={}){let n="";try{n=await this.readFilePromise(t,"utf8")}catch{}let c=s?md(n,r):r;n!==c&&await this.writeFilePromise(t,c,{mode:a})}changeFileSync(t,r,s={}){return Buffer.isBuffer(r)?this.changeFileBufferSync(t,r,s):this.changeFileTextSync(t,r,s)}changeFileBufferSync(t,r,{mode:s}={}){let a=Buffer.alloc(0);try{a=this.readFileSync(t)}catch{}Buffer.compare(a,r)!==0&&this.writeFileSync(t,r,{mode:s})}changeFileTextSync(t,r,{automaticNewlines:s=!1,mode:a}={}){let n="";try{n=this.readFileSync(t,"utf8")}catch{}let c=s?md(n,r):r;n!==c&&this.writeFileSync(t,c,{mode:a})}async movePromise(t,r){try{await this.renamePromise(t,r)}catch(s){if(s.code==="EXDEV")await this.copyPromise(r,t),await this.removePromise(t);else throw s}}moveSync(t,r){try{this.renameSync(t,r)}catch(s){if(s.code==="EXDEV")this.copySync(r,t),this.removeSync(t);else throw s}}async lockPromise(t,r){let s=`${t}.flock`,a=1e3/60,n=Date.now(),c=null,f=async()=>{let p;try{[p]=await this.readJsonPromise(s)}catch{return Date.now()-n<500}try{return process.kill(p,0),!0}catch{return!1}};for(;c===null;)try{c=await this.openPromise(s,"wx")}catch(p){if(p.code==="EEXIST"){if(!await f())try{await this.unlinkPromise(s);continue}catch{}if(Date.now()-n<60*1e3)await new Promise(h=>setTimeout(h,a));else throw new Error(`Couldn't acquire a lock in a reasonable time (via ${s})`)}else throw p}await this.writePromise(c,JSON.stringify([process.pid]));try{return await r()}finally{try{await this.closePromise(c),await this.unlinkPromise(s)}catch{}}}async readJsonPromise(t){let r=await this.readFilePromise(t,"utf8");try{return JSON.parse(r)}catch(s){throw s.message+=` (in ${t})`,s}}readJsonSync(t){let r=this.readFileSync(t,"utf8");try{return JSON.parse(r)}catch(s){throw s.message+=` (in ${t})`,s}}async writeJsonPromise(t,r,{compact:s=!1}={}){let a=s?0:2;return await this.writeFilePromise(t,`${JSON.stringify(r,null,a)}
`)}writeJsonSync(t,r,{compact:s=!1}={}){let a=s?0:2;return this.writeFileSync(t,`${JSON.stringify(r,null,a)}
`)}async preserveTimePromise(t,r){let s=await this.lstatPromise(t),a=await r();typeof a<"u"&&(t=a),await this.lutimesPromise(t,s.atime,s.mtime)}async preserveTimeSync(t,r){let s=this.lstatSync(t),a=r();typeof a<"u"&&(t=a),this.lutimesSync(t,s.atime,s.mtime)}},Hf=class extends yp{constructor(){super(K)}}});var Gs,Ep=Ze(()=>{yd();Gs=class extends yp{getExtractHint(t){return this.baseFs.getExtractHint(t)}resolve(t){return this.mapFromBase(this.baseFs.resolve(this.mapToBase(t)))}getRealPath(){return this.mapFromBase(this.baseFs.getRealPath())}async openPromise(t,r,s){return this.baseFs.openPromise(this.mapToBase(t),r,s)}openSync(t,r,s){return this.baseFs.openSync(this.mapToBase(t),r,s)}async opendirPromise(t,r){return Object.assign(await this.baseFs.opendirPromise(this.mapToBase(t),r),{path:t})}opendirSync(t,r){return Object.assign(this.baseFs.opendirSync(this.mapToBase(t),r),{path:t})}async readPromise(t,r,s,a,n){return await this.baseFs.readPromise(t,r,s,a,n)}readSync(t,r,s,a,n){return this.baseFs.readSync(t,r,s,a,n)}async writePromise(t,r,s,a,n){return typeof r=="string"?await this.baseFs.writePromise(t,r,s):await this.baseFs.writePromise(t,r,s,a,n)}writeSync(t,r,s,a,n){return typeof r=="string"?this.baseFs.writeSync(t,r,s):this.baseFs.writeSync(t,r,s,a,n)}async closePromise(t){return this.baseFs.closePromise(t)}closeSync(t){this.baseFs.closeSync(t)}createReadStream(t,r){return this.baseFs.createReadStream(t!==null?this.mapToBase(t):t,r)}createWriteStream(t,r){return this.baseFs.createWriteStream(t!==null?this.mapToBase(t):t,r)}async realpathPromise(t){return this.mapFromBase(await this.baseFs.realpathPromise(this.mapToBase(t)))}realpathSync(t){return this.mapFromBase(this.baseFs.realpathSync(this.mapToBase(t)))}async existsPromise(t){return this.baseFs.existsPromise(this.mapToBase(t))}existsSync(t){return this.baseFs.existsSync(this.mapToBase(t))}accessSync(t,r){return this.baseFs.accessSync(this.mapToBase(t),r)}async accessPromise(t,r){return this.baseFs.accessPromise(this.mapToBase(t),r)}async statPromise(t,r){return this.baseFs.statPromise(this.mapToBase(t),r)}statSync(t,r){return this.baseFs.statSync(this.mapToBase(t),r)}async fstatPromise(t,r){return this.baseFs.fstatPromise(t,r)}fstatSync(t,r){return this.baseFs.fstatSync(t,r)}lstatPromise(t,r){return this.baseFs.lstatPromise(this.mapToBase(t),r)}lstatSync(t,r){return this.baseFs.lstatSync(this.mapToBase(t),r)}async fchmodPromise(t,r){return this.baseFs.fchmodPromise(t,r)}fchmodSync(t,r){return this.baseFs.fchmodSync(t,r)}async chmodPromise(t,r){return this.baseFs.chmodPromise(this.mapToBase(t),r)}chmodSync(t,r){return this.baseFs.chmodSync(this.mapToBase(t),r)}async fchownPromise(t,r,s){return this.baseFs.fchownPromise(t,r,s)}fchownSync(t,r,s){return this.baseFs.fchownSync(t,r,s)}async chownPromise(t,r,s){return this.baseFs.chownPromise(this.mapToBase(t),r,s)}chownSync(t,r,s){return this.baseFs.chownSync(this.mapToBase(t),r,s)}async renamePromise(t,r){return this.baseFs.renamePromise(this.mapToBase(t),this.mapToBase(r))}renameSync(t,r){return this.baseFs.renameSync(this.mapToBase(t),this.mapToBase(r))}async copyFilePromise(t,r,s=0){return this.baseFs.copyFilePromise(this.mapToBase(t),this.mapToBase(r),s)}copyFileSync(t,r,s=0){return this.baseFs.copyFileSync(this.mapToBase(t),this.mapToBase(r),s)}async appendFilePromise(t,r,s){return this.baseFs.appendFilePromise(this.fsMapToBase(t),r,s)}appendFileSync(t,r,s){return this.baseFs.appendFileSync(this.fsMapToBase(t),r,s)}async writeFilePromise(t,r,s){return this.baseFs.writeFilePromise(this.fsMapToBase(t),r,s)}writeFileSync(t,r,s){return this.baseFs.writeFileSync(this.fsMapToBase(t),r,s)}async unlinkPromise(t){return this.baseFs.unlinkPromise(this.mapToBase(t))}unlinkSync(t){return this.baseFs.unlinkSync(this.mapToBase(t))}async utimesPromise(t,r,s){return this.baseFs.utimesPromise(this.mapToBase(t),r,s)}utimesSync(t,r,s){return this.baseFs.utimesSync(this.mapToBase(t),r,s)}async lutimesPromise(t,r,s){return this.baseFs.lutimesPromise(this.mapToBase(t),r,s)}lutimesSync(t,r,s){return this.baseFs.lutimesSync(this.mapToBase(t),r,s)}async mkdirPromise(t,r){return this.baseFs.mkdirPromise(this.mapToBase(t),r)}mkdirSync(t,r){return this.baseFs.mkdirSync(this.mapToBase(t),r)}async rmdirPromise(t,r){return this.baseFs.rmdirPromise(this.mapToBase(t),r)}rmdirSync(t,r){return this.baseFs.rmdirSync(this.mapToBase(t),r)}async rmPromise(t,r){return this.baseFs.rmPromise(this.mapToBase(t),r)}rmSync(t,r){return this.baseFs.rmSync(this.mapToBase(t),r)}async linkPromise(t,r){return this.baseFs.linkPromise(this.mapToBase(t),this.mapToBase(r))}linkSync(t,r){return this.baseFs.linkSync(this.mapToBase(t),this.mapToBase(r))}async symlinkPromise(t,r,s){let a=this.mapToBase(r);if(this.pathUtils.isAbsolute(t))return this.baseFs.symlinkPromise(this.mapToBase(t),a,s);let n=this.mapToBase(this.pathUtils.join(this.pathUtils.dirname(r),t)),c=this.baseFs.pathUtils.relative(this.baseFs.pathUtils.dirname(a),n);return this.baseFs.symlinkPromise(c,a,s)}symlinkSync(t,r,s){let a=this.mapToBase(r);if(this.pathUtils.isAbsolute(t))return this.baseFs.symlinkSync(this.mapToBase(t),a,s);let n=this.mapToBase(this.pathUtils.join(this.pathUtils.dirname(r),t)),c=this.baseFs.pathUtils.relative(this.baseFs.pathUtils.dirname(a),n);return this.baseFs.symlinkSync(c,a,s)}async readFilePromise(t,r){return this.baseFs.readFilePromise(this.fsMapToBase(t),r)}readFileSync(t,r){return this.baseFs.readFileSync(this.fsMapToBase(t),r)}readdirPromise(t,r){return this.baseFs.readdirPromise(this.mapToBase(t),r)}readdirSync(t,r){return this.baseFs.readdirSync(this.mapToBase(t),r)}async readlinkPromise(t){return this.mapFromBase(await this.baseFs.readlinkPromise(this.mapToBase(t)))}readlinkSync(t){return this.mapFromBase(this.baseFs.readlinkSync(this.mapToBase(t)))}async truncatePromise(t,r){return this.baseFs.truncatePromise(this.mapToBase(t),r)}truncateSync(t,r){return this.baseFs.truncateSync(this.mapToBase(t),r)}async ftruncatePromise(t,r){return this.baseFs.ftruncatePromise(t,r)}ftruncateSync(t,r){return this.baseFs.ftruncateSync(t,r)}watch(t,r,s){return this.baseFs.watch(this.mapToBase(t),r,s)}watchFile(t,r,s){return this.baseFs.watchFile(this.mapToBase(t),r,s)}unwatchFile(t,r){return this.baseFs.unwatchFile(this.mapToBase(t),r)}fsMapToBase(t){return typeof t=="number"?t:this.mapToBase(t)}}});var jf,CX=Ze(()=>{Ep();jf=class extends Gs{constructor(t,{baseFs:r,pathUtils:s}){super(s),this.target=t,this.baseFs=r}getRealPath(){return this.target}getBaseFs(){return this.baseFs}mapFromBase(t){return t}mapToBase(t){return t}}});function wX(e){let t=e;return typeof e.path=="string"&&(t.path=fe.toPortablePath(e.path)),t}var BX,Yn,Ed=Ze(()=>{BX=et(Ie("fs"));yd();ol();Yn=class extends Hf{constructor(t=BX.default){super(),this.realFs=t}getExtractHint(){return!1}getRealPath(){return vt.root}resolve(t){return K.resolve(t)}async openPromise(t,r,s){return await new Promise((a,n)=>{this.realFs.open(fe.fromPortablePath(t),r,s,this.makeCallback(a,n))})}openSync(t,r,s){return this.realFs.openSync(fe.fromPortablePath(t),r,s)}async opendirPromise(t,r){return await new Promise((s,a)=>{typeof r<"u"?this.realFs.opendir(fe.fromPortablePath(t),r,this.makeCallback(s,a)):this.realFs.opendir(fe.fromPortablePath(t),this.makeCallback(s,a))}).then(s=>{let a=s;return Object.defineProperty(a,"path",{value:t,configurable:!0,writable:!0}),a})}opendirSync(t,r){let a=typeof r<"u"?this.realFs.opendirSync(fe.fromPortablePath(t),r):this.realFs.opendirSync(fe.fromPortablePath(t));return Object.defineProperty(a,"path",{value:t,configurable:!0,writable:!0}),a}async readPromise(t,r,s=0,a=0,n=-1){return await new Promise((c,f)=>{this.realFs.read(t,r,s,a,n,(p,h)=>{p?f(p):c(h)})})}readSync(t,r,s,a,n){return this.realFs.readSync(t,r,s,a,n)}async writePromise(t,r,s,a,n){return await new Promise((c,f)=>typeof r=="string"?this.realFs.write(t,r,s,this.makeCallback(c,f)):this.realFs.write(t,r,s,a,n,this.makeCallback(c,f)))}writeSync(t,r,s,a,n){return typeof r=="string"?this.realFs.writeSync(t,r,s):this.realFs.writeSync(t,r,s,a,n)}async closePromise(t){await new Promise((r,s)=>{this.realFs.close(t,this.makeCallback(r,s))})}closeSync(t){this.realFs.closeSync(t)}createReadStream(t,r){let s=t!==null?fe.fromPortablePath(t):t;return this.realFs.createReadStream(s,r)}createWriteStream(t,r){let s=t!==null?fe.fromPortablePath(t):t;return this.realFs.createWriteStream(s,r)}async realpathPromise(t){return await new Promise((r,s)=>{this.realFs.realpath(fe.fromPortablePath(t),{},this.makeCallback(r,s))}).then(r=>fe.toPortablePath(r))}realpathSync(t){return fe.toPortablePath(this.realFs.realpathSync(fe.fromPortablePath(t),{}))}async existsPromise(t){return await new Promise(r=>{this.realFs.exists(fe.fromPortablePath(t),r)})}accessSync(t,r){return this.realFs.accessSync(fe.fromPortablePath(t),r)}async accessPromise(t,r){return await new Promise((s,a)=>{this.realFs.access(fe.fromPortablePath(t),r,this.makeCallback(s,a))})}existsSync(t){return this.realFs.existsSync(fe.fromPortablePath(t))}async statPromise(t,r){return await new Promise((s,a)=>{r?this.realFs.stat(fe.fromPortablePath(t),r,this.makeCallback(s,a)):this.realFs.stat(fe.fromPortablePath(t),this.makeCallback(s,a))})}statSync(t,r){return r?this.realFs.statSync(fe.fromPortablePath(t),r):this.realFs.statSync(fe.fromPortablePath(t))}async fstatPromise(t,r){return await new Promise((s,a)=>{r?this.realFs.fstat(t,r,this.makeCallback(s,a)):this.realFs.fstat(t,this.makeCallback(s,a))})}fstatSync(t,r){return r?this.realFs.fstatSync(t,r):this.realFs.fstatSync(t)}async lstatPromise(t,r){return await new Promise((s,a)=>{r?this.realFs.lstat(fe.fromPortablePath(t),r,this.makeCallback(s,a)):this.realFs.lstat(fe.fromPortablePath(t),this.makeCallback(s,a))})}lstatSync(t,r){return r?this.realFs.lstatSync(fe.fromPortablePath(t),r):this.realFs.lstatSync(fe.fromPortablePath(t))}async fchmodPromise(t,r){return await new Promise((s,a)=>{this.realFs.fchmod(t,r,this.makeCallback(s,a))})}fchmodSync(t,r){return this.realFs.fchmodSync(t,r)}async chmodPromise(t,r){return await new Promise((s,a)=>{this.realFs.chmod(fe.fromPortablePath(t),r,this.makeCallback(s,a))})}chmodSync(t,r){return this.realFs.chmodSync(fe.fromPortablePath(t),r)}async fchownPromise(t,r,s){return await new Promise((a,n)=>{this.realFs.fchown(t,r,s,this.makeCallback(a,n))})}fchownSync(t,r,s){return this.realFs.fchownSync(t,r,s)}async chownPromise(t,r,s){return await new Promise((a,n)=>{this.realFs.chown(fe.fromPortablePath(t),r,s,this.makeCallback(a,n))})}chownSync(t,r,s){return this.realFs.chownSync(fe.fromPortablePath(t),r,s)}async renamePromise(t,r){return await new Promise((s,a)=>{this.realFs.rename(fe.fromPortablePath(t),fe.fromPortablePath(r),this.makeCallback(s,a))})}renameSync(t,r){return this.realFs.renameSync(fe.fromPortablePath(t),fe.fromPortablePath(r))}async copyFilePromise(t,r,s=0){return await new Promise((a,n)=>{this.realFs.copyFile(fe.fromPortablePath(t),fe.fromPortablePath(r),s,this.makeCallback(a,n))})}copyFileSync(t,r,s=0){return this.realFs.copyFileSync(fe.fromPortablePath(t),fe.fromPortablePath(r),s)}async appendFilePromise(t,r,s){return await new Promise((a,n)=>{let c=typeof t=="string"?fe.fromPortablePath(t):t;s?this.realFs.appendFile(c,r,s,this.makeCallback(a,n)):this.realFs.appendFile(c,r,this.makeCallback(a,n))})}appendFileSync(t,r,s){let a=typeof t=="string"?fe.fromPortablePath(t):t;s?this.realFs.appendFileSync(a,r,s):this.realFs.appendFileSync(a,r)}async writeFilePromise(t,r,s){return await new Promise((a,n)=>{let c=typeof t=="string"?fe.fromPortablePath(t):t;s?this.realFs.writeFile(c,r,s,this.makeCallback(a,n)):this.realFs.writeFile(c,r,this.makeCallback(a,n))})}writeFileSync(t,r,s){let a=typeof t=="string"?fe.fromPortablePath(t):t;s?this.realFs.writeFileSync(a,r,s):this.realFs.writeFileSync(a,r)}async unlinkPromise(t){return await new Promise((r,s)=>{this.realFs.unlink(fe.fromPortablePath(t),this.makeCallback(r,s))})}unlinkSync(t){return this.realFs.unlinkSync(fe.fromPortablePath(t))}async utimesPromise(t,r,s){return await new Promise((a,n)=>{this.realFs.utimes(fe.fromPortablePath(t),r,s,this.makeCallback(a,n))})}utimesSync(t,r,s){this.realFs.utimesSync(fe.fromPortablePath(t),r,s)}async lutimesPromise(t,r,s){return await new Promise((a,n)=>{this.realFs.lutimes(fe.fromPortablePath(t),r,s,this.makeCallback(a,n))})}lutimesSync(t,r,s){this.realFs.lutimesSync(fe.fromPortablePath(t),r,s)}async mkdirPromise(t,r){return await new Promise((s,a)=>{this.realFs.mkdir(fe.fromPortablePath(t),r,this.makeCallback(s,a))})}mkdirSync(t,r){return this.realFs.mkdirSync(fe.fromPortablePath(t),r)}async rmdirPromise(t,r){return await new Promise((s,a)=>{r?this.realFs.rmdir(fe.fromPortablePath(t),r,this.makeCallback(s,a)):this.realFs.rmdir(fe.fromPortablePath(t),this.makeCallback(s,a))})}rmdirSync(t,r){return this.realFs.rmdirSync(fe.fromPortablePath(t),r)}async rmPromise(t,r){return await new Promise((s,a)=>{r?this.realFs.rm(fe.fromPortablePath(t),r,this.makeCallback(s,a)):this.realFs.rm(fe.fromPortablePath(t),this.makeCallback(s,a))})}rmSync(t,r){return this.realFs.rmSync(fe.fromPortablePath(t),r)}async linkPromise(t,r){return await new Promise((s,a)=>{this.realFs.link(fe.fromPortablePath(t),fe.fromPortablePath(r),this.makeCallback(s,a))})}linkSync(t,r){return this.realFs.linkSync(fe.fromPortablePath(t),fe.fromPortablePath(r))}async symlinkPromise(t,r,s){return await new Promise((a,n)=>{this.realFs.symlink(fe.fromPortablePath(t.replace(/\/+$/,"")),fe.fromPortablePath(r),s,this.makeCallback(a,n))})}symlinkSync(t,r,s){return this.realFs.symlinkSync(fe.fromPortablePath(t.replace(/\/+$/,"")),fe.fromPortablePath(r),s)}async readFilePromise(t,r){return await new Promise((s,a)=>{let n=typeof t=="string"?fe.fromPortablePath(t):t;this.realFs.readFile(n,r,this.makeCallback(s,a))})}readFileSync(t,r){let s=typeof t=="string"?fe.fromPortablePath(t):t;return this.realFs.readFileSync(s,r)}async readdirPromise(t,r){return await new Promise((s,a)=>{r?r.recursive&&process.platform==="win32"?r.withFileTypes?this.realFs.readdir(fe.fromPortablePath(t),r,this.makeCallback(n=>s(n.map(wX)),a)):this.realFs.readdir(fe.fromPortablePath(t),r,this.makeCallback(n=>s(n.map(fe.toPortablePath)),a)):this.realFs.readdir(fe.fromPortablePath(t),r,this.makeCallback(s,a)):this.realFs.readdir(fe.fromPortablePath(t),this.makeCallback(s,a))})}readdirSync(t,r){return r?r.recursive&&process.platform==="win32"?r.withFileTypes?this.realFs.readdirSync(fe.fromPortablePath(t),r).map(wX):this.realFs.readdirSync(fe.fromPortablePath(t),r).map(fe.toPortablePath):this.realFs.readdirSync(fe.fromPortablePath(t),r):this.realFs.readdirSync(fe.fromPortablePath(t))}async readlinkPromise(t){return await new Promise((r,s)=>{this.realFs.readlink(fe.fromPortablePath(t),this.makeCallback(r,s))}).then(r=>fe.toPortablePath(r))}readlinkSync(t){return fe.toPortablePath(this.realFs.readlinkSync(fe.fromPortablePath(t)))}async truncatePromise(t,r){return await new Promise((s,a)=>{this.realFs.truncate(fe.fromPortablePath(t),r,this.makeCallback(s,a))})}truncateSync(t,r){return this.realFs.truncateSync(fe.fromPortablePath(t),r)}async ftruncatePromise(t,r){return await new Promise((s,a)=>{this.realFs.ftruncate(t,r,this.makeCallback(s,a))})}ftruncateSync(t,r){return this.realFs.ftruncateSync(t,r)}watch(t,r,s){return this.realFs.watch(fe.fromPortablePath(t),r,s)}watchFile(t,r,s){return this.realFs.watchFile(fe.fromPortablePath(t),r,s)}unwatchFile(t,r){return this.realFs.unwatchFile(fe.fromPortablePath(t),r)}makeCallback(t,r){return(s,a)=>{s?r(s):t(a)}}}});var bn,vX=Ze(()=>{Ed();Ep();ol();bn=class extends Gs{constructor(t,{baseFs:r=new Yn}={}){super(K),this.target=this.pathUtils.normalize(t),this.baseFs=r}getRealPath(){return this.pathUtils.resolve(this.baseFs.getRealPath(),this.target)}resolve(t){return this.pathUtils.isAbsolute(t)?K.normalize(t):this.baseFs.resolve(K.join(this.target,t))}mapFromBase(t){return t}mapToBase(t){return this.pathUtils.isAbsolute(t)?t:this.pathUtils.join(this.target,t)}}});var SX,Gf,DX=Ze(()=>{Ed();Ep();ol();SX=vt.root,Gf=class extends Gs{constructor(t,{baseFs:r=new Yn}={}){super(K),this.target=this.pathUtils.resolve(vt.root,t),this.baseFs=r}getRealPath(){return this.pathUtils.resolve(this.baseFs.getRealPath(),this.pathUtils.relative(vt.root,this.target))}getTarget(){return this.target}getBaseFs(){return this.baseFs}mapToBase(t){let r=this.pathUtils.normalize(t);if(this.pathUtils.isAbsolute(t))return this.pathUtils.resolve(this.target,this.pathUtils.relative(SX,t));if(r.match(/^\.\.\/?/))throw new Error(`Resolving this path (${t}) would escape the jail`);return this.pathUtils.resolve(this.target,t)}mapFromBase(t){return this.pathUtils.resolve(SX,this.pathUtils.relative(this.target,t))}}});var cE,bX=Ze(()=>{Ep();cE=class extends Gs{constructor(r,s){super(s);this.instance=null;this.factory=r}get baseFs(){return this.instance||(this.instance=this.factory()),this.instance}set baseFs(r){this.instance=r}mapFromBase(r){return r}mapToBase(r){return r}}});var Id,al,Xh,PX=Ze(()=>{Id=Ie("fs");yd();Ed();fU();zP();ol();al=4278190080,Xh=class extends Hf{constructor({baseFs:r=new Yn,filter:s=null,magicByte:a=42,maxOpenFiles:n=1/0,useCache:c=!0,maxAge:f=5e3,typeCheck:p=Id.constants.S_IFREG,getMountPoint:h,factoryPromise:E,factorySync:C}){if(Math.floor(a)!==a||!(a>1&&a<=127))throw new Error("The magic byte must be set to a round value between 1 and 127 included");super();this.fdMap=new Map;this.nextFd=3;this.isMount=new Set;this.notMount=new Set;this.realPaths=new Map;this.limitOpenFilesTimeout=null;this.baseFs=r,this.mountInstances=c?new Map:null,this.factoryPromise=E,this.factorySync=C,this.filter=s,this.getMountPoint=h,this.magic=a<<24,this.maxAge=f,this.maxOpenFiles=n,this.typeCheck=p}getExtractHint(r){return this.baseFs.getExtractHint(r)}getRealPath(){return this.baseFs.getRealPath()}saveAndClose(){if(dd(this),this.mountInstances)for(let[r,{childFs:s}]of this.mountInstances.entries())s.saveAndClose?.(),this.mountInstances.delete(r)}discardAndClose(){if(dd(this),this.mountInstances)for(let[r,{childFs:s}]of this.mountInstances.entries())s.discardAndClose?.(),this.mountInstances.delete(r)}resolve(r){return this.baseFs.resolve(r)}remapFd(r,s){let a=this.nextFd++|this.magic;return this.fdMap.set(a,[r,s]),a}async openPromise(r,s,a){return await this.makeCallPromise(r,async()=>await this.baseFs.openPromise(r,s,a),async(n,{subPath:c})=>this.remapFd(n,await n.openPromise(c,s,a)))}openSync(r,s,a){return this.makeCallSync(r,()=>this.baseFs.openSync(r,s,a),(n,{subPath:c})=>this.remapFd(n,n.openSync(c,s,a)))}async opendirPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.opendirPromise(r,s),async(a,{subPath:n})=>await a.opendirPromise(n,s),{requireSubpath:!1})}opendirSync(r,s){return this.makeCallSync(r,()=>this.baseFs.opendirSync(r,s),(a,{subPath:n})=>a.opendirSync(n,s),{requireSubpath:!1})}async readPromise(r,s,a,n,c){if((r&al)!==this.magic)return await this.baseFs.readPromise(r,s,a,n,c);let f=this.fdMap.get(r);if(typeof f>"u")throw Go("read");let[p,h]=f;return await p.readPromise(h,s,a,n,c)}readSync(r,s,a,n,c){if((r&al)!==this.magic)return this.baseFs.readSync(r,s,a,n,c);let f=this.fdMap.get(r);if(typeof f>"u")throw Go("readSync");let[p,h]=f;return p.readSync(h,s,a,n,c)}async writePromise(r,s,a,n,c){if((r&al)!==this.magic)return typeof s=="string"?await this.baseFs.writePromise(r,s,a):await this.baseFs.writePromise(r,s,a,n,c);let f=this.fdMap.get(r);if(typeof f>"u")throw Go("write");let[p,h]=f;return typeof s=="string"?await p.writePromise(h,s,a):await p.writePromise(h,s,a,n,c)}writeSync(r,s,a,n,c){if((r&al)!==this.magic)return typeof s=="string"?this.baseFs.writeSync(r,s,a):this.baseFs.writeSync(r,s,a,n,c);let f=this.fdMap.get(r);if(typeof f>"u")throw Go("writeSync");let[p,h]=f;return typeof s=="string"?p.writeSync(h,s,a):p.writeSync(h,s,a,n,c)}async closePromise(r){if((r&al)!==this.magic)return await this.baseFs.closePromise(r);let s=this.fdMap.get(r);if(typeof s>"u")throw Go("close");this.fdMap.delete(r);let[a,n]=s;return await a.closePromise(n)}closeSync(r){if((r&al)!==this.magic)return this.baseFs.closeSync(r);let s=this.fdMap.get(r);if(typeof s>"u")throw Go("closeSync");this.fdMap.delete(r);let[a,n]=s;return a.closeSync(n)}createReadStream(r,s){return r===null?this.baseFs.createReadStream(r,s):this.makeCallSync(r,()=>this.baseFs.createReadStream(r,s),(a,{archivePath:n,subPath:c})=>{let f=a.createReadStream(c,s);return f.path=fe.fromPortablePath(this.pathUtils.join(n,c)),f})}createWriteStream(r,s){return r===null?this.baseFs.createWriteStream(r,s):this.makeCallSync(r,()=>this.baseFs.createWriteStream(r,s),(a,{subPath:n})=>a.createWriteStream(n,s))}async realpathPromise(r){return await this.makeCallPromise(r,async()=>await this.baseFs.realpathPromise(r),async(s,{archivePath:a,subPath:n})=>{let c=this.realPaths.get(a);return typeof c>"u"&&(c=await this.baseFs.realpathPromise(a),this.realPaths.set(a,c)),this.pathUtils.join(c,this.pathUtils.relative(vt.root,await s.realpathPromise(n)))})}realpathSync(r){return this.makeCallSync(r,()=>this.baseFs.realpathSync(r),(s,{archivePath:a,subPath:n})=>{let c=this.realPaths.get(a);return typeof c>"u"&&(c=this.baseFs.realpathSync(a),this.realPaths.set(a,c)),this.pathUtils.join(c,this.pathUtils.relative(vt.root,s.realpathSync(n)))})}async existsPromise(r){return await this.makeCallPromise(r,async()=>await this.baseFs.existsPromise(r),async(s,{subPath:a})=>await s.existsPromise(a))}existsSync(r){return this.makeCallSync(r,()=>this.baseFs.existsSync(r),(s,{subPath:a})=>s.existsSync(a))}async accessPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.accessPromise(r,s),async(a,{subPath:n})=>await a.accessPromise(n,s))}accessSync(r,s){return this.makeCallSync(r,()=>this.baseFs.accessSync(r,s),(a,{subPath:n})=>a.accessSync(n,s))}async statPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.statPromise(r,s),async(a,{subPath:n})=>await a.statPromise(n,s))}statSync(r,s){return this.makeCallSync(r,()=>this.baseFs.statSync(r,s),(a,{subPath:n})=>a.statSync(n,s))}async fstatPromise(r,s){if((r&al)!==this.magic)return this.baseFs.fstatPromise(r,s);let a=this.fdMap.get(r);if(typeof a>"u")throw Go("fstat");let[n,c]=a;return n.fstatPromise(c,s)}fstatSync(r,s){if((r&al)!==this.magic)return this.baseFs.fstatSync(r,s);let a=this.fdMap.get(r);if(typeof a>"u")throw Go("fstatSync");let[n,c]=a;return n.fstatSync(c,s)}async lstatPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.lstatPromise(r,s),async(a,{subPath:n})=>await a.lstatPromise(n,s))}lstatSync(r,s){return this.makeCallSync(r,()=>this.baseFs.lstatSync(r,s),(a,{subPath:n})=>a.lstatSync(n,s))}async fchmodPromise(r,s){if((r&al)!==this.magic)return this.baseFs.fchmodPromise(r,s);let a=this.fdMap.get(r);if(typeof a>"u")throw Go("fchmod");let[n,c]=a;return n.fchmodPromise(c,s)}fchmodSync(r,s){if((r&al)!==this.magic)return this.baseFs.fchmodSync(r,s);let a=this.fdMap.get(r);if(typeof a>"u")throw Go("fchmodSync");let[n,c]=a;return n.fchmodSync(c,s)}async chmodPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.chmodPromise(r,s),async(a,{subPath:n})=>await a.chmodPromise(n,s))}chmodSync(r,s){return this.makeCallSync(r,()=>this.baseFs.chmodSync(r,s),(a,{subPath:n})=>a.chmodSync(n,s))}async fchownPromise(r,s,a){if((r&al)!==this.magic)return this.baseFs.fchownPromise(r,s,a);let n=this.fdMap.get(r);if(typeof n>"u")throw Go("fchown");let[c,f]=n;return c.fchownPromise(f,s,a)}fchownSync(r,s,a){if((r&al)!==this.magic)return this.baseFs.fchownSync(r,s,a);let n=this.fdMap.get(r);if(typeof n>"u")throw Go("fchownSync");let[c,f]=n;return c.fchownSync(f,s,a)}async chownPromise(r,s,a){return await this.makeCallPromise(r,async()=>await this.baseFs.chownPromise(r,s,a),async(n,{subPath:c})=>await n.chownPromise(c,s,a))}chownSync(r,s,a){return this.makeCallSync(r,()=>this.baseFs.chownSync(r,s,a),(n,{subPath:c})=>n.chownSync(c,s,a))}async renamePromise(r,s){return await this.makeCallPromise(r,async()=>await this.makeCallPromise(s,async()=>await this.baseFs.renamePromise(r,s),async()=>{throw Object.assign(new Error("EEXDEV: cross-device link not permitted"),{code:"EEXDEV"})}),async(a,{subPath:n})=>await this.makeCallPromise(s,async()=>{throw Object.assign(new Error("EEXDEV: cross-device link not permitted"),{code:"EEXDEV"})},async(c,{subPath:f})=>{if(a!==c)throw Object.assign(new Error("EEXDEV: cross-device link not permitted"),{code:"EEXDEV"});return await a.renamePromise(n,f)}))}renameSync(r,s){return this.makeCallSync(r,()=>this.makeCallSync(s,()=>this.baseFs.renameSync(r,s),()=>{throw Object.assign(new Error("EEXDEV: cross-device link not permitted"),{code:"EEXDEV"})}),(a,{subPath:n})=>this.makeCallSync(s,()=>{throw Object.assign(new Error("EEXDEV: cross-device link not permitted"),{code:"EEXDEV"})},(c,{subPath:f})=>{if(a!==c)throw Object.assign(new Error("EEXDEV: cross-device link not permitted"),{code:"EEXDEV"});return a.renameSync(n,f)}))}async copyFilePromise(r,s,a=0){let n=async(c,f,p,h)=>{if(a&Id.constants.COPYFILE_FICLONE_FORCE)throw Object.assign(new Error(`EXDEV: cross-device clone not permitted, copyfile '${f}' -> ${h}'`),{code:"EXDEV"});if(a&Id.constants.COPYFILE_EXCL&&await this.existsPromise(f))throw Object.assign(new Error(`EEXIST: file already exists, copyfile '${f}' -> '${h}'`),{code:"EEXIST"});let E;try{E=await c.readFilePromise(f)}catch{throw Object.assign(new Error(`EINVAL: invalid argument, copyfile '${f}' -> '${h}'`),{code:"EINVAL"})}await p.writeFilePromise(h,E)};return await this.makeCallPromise(r,async()=>await this.makeCallPromise(s,async()=>await this.baseFs.copyFilePromise(r,s,a),async(c,{subPath:f})=>await n(this.baseFs,r,c,f)),async(c,{subPath:f})=>await this.makeCallPromise(s,async()=>await n(c,f,this.baseFs,s),async(p,{subPath:h})=>c!==p?await n(c,f,p,h):await c.copyFilePromise(f,h,a)))}copyFileSync(r,s,a=0){let n=(c,f,p,h)=>{if(a&Id.constants.COPYFILE_FICLONE_FORCE)throw Object.assign(new Error(`EXDEV: cross-device clone not permitted, copyfile '${f}' -> ${h}'`),{code:"EXDEV"});if(a&Id.constants.COPYFILE_EXCL&&this.existsSync(f))throw Object.assign(new Error(`EEXIST: file already exists, copyfile '${f}' -> '${h}'`),{code:"EEXIST"});let E;try{E=c.readFileSync(f)}catch{throw Object.assign(new Error(`EINVAL: invalid argument, copyfile '${f}' -> '${h}'`),{code:"EINVAL"})}p.writeFileSync(h,E)};return this.makeCallSync(r,()=>this.makeCallSync(s,()=>this.baseFs.copyFileSync(r,s,a),(c,{subPath:f})=>n(this.baseFs,r,c,f)),(c,{subPath:f})=>this.makeCallSync(s,()=>n(c,f,this.baseFs,s),(p,{subPath:h})=>c!==p?n(c,f,p,h):c.copyFileSync(f,h,a)))}async appendFilePromise(r,s,a){return await this.makeCallPromise(r,async()=>await this.baseFs.appendFilePromise(r,s,a),async(n,{subPath:c})=>await n.appendFilePromise(c,s,a))}appendFileSync(r,s,a){return this.makeCallSync(r,()=>this.baseFs.appendFileSync(r,s,a),(n,{subPath:c})=>n.appendFileSync(c,s,a))}async writeFilePromise(r,s,a){return await this.makeCallPromise(r,async()=>await this.baseFs.writeFilePromise(r,s,a),async(n,{subPath:c})=>await n.writeFilePromise(c,s,a))}writeFileSync(r,s,a){return this.makeCallSync(r,()=>this.baseFs.writeFileSync(r,s,a),(n,{subPath:c})=>n.writeFileSync(c,s,a))}async unlinkPromise(r){return await this.makeCallPromise(r,async()=>await this.baseFs.unlinkPromise(r),async(s,{subPath:a})=>await s.unlinkPromise(a))}unlinkSync(r){return this.makeCallSync(r,()=>this.baseFs.unlinkSync(r),(s,{subPath:a})=>s.unlinkSync(a))}async utimesPromise(r,s,a){return await this.makeCallPromise(r,async()=>await this.baseFs.utimesPromise(r,s,a),async(n,{subPath:c})=>await n.utimesPromise(c,s,a))}utimesSync(r,s,a){return this.makeCallSync(r,()=>this.baseFs.utimesSync(r,s,a),(n,{subPath:c})=>n.utimesSync(c,s,a))}async lutimesPromise(r,s,a){return await this.makeCallPromise(r,async()=>await this.baseFs.lutimesPromise(r,s,a),async(n,{subPath:c})=>await n.lutimesPromise(c,s,a))}lutimesSync(r,s,a){return this.makeCallSync(r,()=>this.baseFs.lutimesSync(r,s,a),(n,{subPath:c})=>n.lutimesSync(c,s,a))}async mkdirPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.mkdirPromise(r,s),async(a,{subPath:n})=>await a.mkdirPromise(n,s))}mkdirSync(r,s){return this.makeCallSync(r,()=>this.baseFs.mkdirSync(r,s),(a,{subPath:n})=>a.mkdirSync(n,s))}async rmdirPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.rmdirPromise(r,s),async(a,{subPath:n})=>await a.rmdirPromise(n,s))}rmdirSync(r,s){return this.makeCallSync(r,()=>this.baseFs.rmdirSync(r,s),(a,{subPath:n})=>a.rmdirSync(n,s))}async rmPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.rmPromise(r,s),async(a,{subPath:n})=>await a.rmPromise(n,s))}rmSync(r,s){return this.makeCallSync(r,()=>this.baseFs.rmSync(r,s),(a,{subPath:n})=>a.rmSync(n,s))}async linkPromise(r,s){return await this.makeCallPromise(s,async()=>await this.baseFs.linkPromise(r,s),async(a,{subPath:n})=>await a.linkPromise(r,n))}linkSync(r,s){return this.makeCallSync(s,()=>this.baseFs.linkSync(r,s),(a,{subPath:n})=>a.linkSync(r,n))}async symlinkPromise(r,s,a){return await this.makeCallPromise(s,async()=>await this.baseFs.symlinkPromise(r,s,a),async(n,{subPath:c})=>await n.symlinkPromise(r,c))}symlinkSync(r,s,a){return this.makeCallSync(s,()=>this.baseFs.symlinkSync(r,s,a),(n,{subPath:c})=>n.symlinkSync(r,c))}async readFilePromise(r,s){return this.makeCallPromise(r,async()=>await this.baseFs.readFilePromise(r,s),async(a,{subPath:n})=>await a.readFilePromise(n,s))}readFileSync(r,s){return this.makeCallSync(r,()=>this.baseFs.readFileSync(r,s),(a,{subPath:n})=>a.readFileSync(n,s))}async readdirPromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.readdirPromise(r,s),async(a,{subPath:n})=>await a.readdirPromise(n,s),{requireSubpath:!1})}readdirSync(r,s){return this.makeCallSync(r,()=>this.baseFs.readdirSync(r,s),(a,{subPath:n})=>a.readdirSync(n,s),{requireSubpath:!1})}async readlinkPromise(r){return await this.makeCallPromise(r,async()=>await this.baseFs.readlinkPromise(r),async(s,{subPath:a})=>await s.readlinkPromise(a))}readlinkSync(r){return this.makeCallSync(r,()=>this.baseFs.readlinkSync(r),(s,{subPath:a})=>s.readlinkSync(a))}async truncatePromise(r,s){return await this.makeCallPromise(r,async()=>await this.baseFs.truncatePromise(r,s),async(a,{subPath:n})=>await a.truncatePromise(n,s))}truncateSync(r,s){return this.makeCallSync(r,()=>this.baseFs.truncateSync(r,s),(a,{subPath:n})=>a.truncateSync(n,s))}async ftruncatePromise(r,s){if((r&al)!==this.magic)return this.baseFs.ftruncatePromise(r,s);let a=this.fdMap.get(r);if(typeof a>"u")throw Go("ftruncate");let[n,c]=a;return n.ftruncatePromise(c,s)}ftruncateSync(r,s){if((r&al)!==this.magic)return this.baseFs.ftruncateSync(r,s);let a=this.fdMap.get(r);if(typeof a>"u")throw Go("ftruncateSync");let[n,c]=a;return n.ftruncateSync(c,s)}watch(r,s,a){return this.makeCallSync(r,()=>this.baseFs.watch(r,s,a),(n,{subPath:c})=>n.watch(c,s,a))}watchFile(r,s,a){return this.makeCallSync(r,()=>this.baseFs.watchFile(r,s,a),()=>lE(this,r,s,a))}unwatchFile(r,s){return this.makeCallSync(r,()=>this.baseFs.unwatchFile(r,s),()=>gd(this,r,s))}async makeCallPromise(r,s,a,{requireSubpath:n=!0}={}){if(typeof r!="string")return await s();let c=this.resolve(r),f=this.findMount(c);return f?n&&f.subPath==="/"?await s():await this.getMountPromise(f.archivePath,async p=>await a(p,f)):await s()}makeCallSync(r,s,a,{requireSubpath:n=!0}={}){if(typeof r!="string")return s();let c=this.resolve(r),f=this.findMount(c);return!f||n&&f.subPath==="/"?s():this.getMountSync(f.archivePath,p=>a(p,f))}findMount(r){if(this.filter&&!this.filter.test(r))return null;let s="";for(;;){let a=r.substring(s.length),n=this.getMountPoint(a,s);if(!n)return null;if(s=this.pathUtils.join(s,n),!this.isMount.has(s)){if(this.notMount.has(s))continue;try{if(this.typeCheck!==null&&(this.baseFs.statSync(s).mode&Id.constants.S_IFMT)!==this.typeCheck){this.notMount.add(s);continue}}catch{return null}this.isMount.add(s)}return{archivePath:s,subPath:this.pathUtils.join(vt.root,r.substring(s.length))}}}limitOpenFiles(r){if(this.mountInstances===null)return;let s=Date.now(),a=s+this.maxAge,n=r===null?0:this.mountInstances.size-r;for(let[c,{childFs:f,expiresAt:p,refCount:h}]of this.mountInstances.entries())if(!(h!==0||f.hasOpenFileHandles?.())){if(s>=p){f.saveAndClose?.(),this.mountInstances.delete(c),n-=1;continue}else if(r===null||n<=0){a=p;break}f.saveAndClose?.(),this.mountInstances.delete(c),n-=1}this.limitOpenFilesTimeout===null&&(r===null&&this.mountInstances.size>0||r!==null)&&isFinite(a)&&(this.limitOpenFilesTimeout=setTimeout(()=>{this.limitOpenFilesTimeout=null,this.limitOpenFiles(null)},a-s).unref())}async getMountPromise(r,s){if(this.mountInstances){let a=this.mountInstances.get(r);if(!a){let n=await this.factoryPromise(this.baseFs,r);a=this.mountInstances.get(r),a||(a={childFs:n(),expiresAt:0,refCount:0})}this.mountInstances.delete(r),this.limitOpenFiles(this.maxOpenFiles-1),this.mountInstances.set(r,a),a.expiresAt=Date.now()+this.maxAge,a.refCount+=1;try{return await s(a.childFs)}finally{a.refCount-=1}}else{let a=(await this.factoryPromise(this.baseFs,r))();try{return await s(a)}finally{a.saveAndClose?.()}}}getMountSync(r,s){if(this.mountInstances){let a=this.mountInstances.get(r);return a||(a={childFs:this.factorySync(this.baseFs,r),expiresAt:0,refCount:0}),this.mountInstances.delete(r),this.limitOpenFiles(this.maxOpenFiles-1),this.mountInstances.set(r,a),a.expiresAt=Date.now()+this.maxAge,s(a.childFs)}else{let a=this.factorySync(this.baseFs,r);try{return s(a)}finally{a.saveAndClose?.()}}}}});var er,nx,xX=Ze(()=>{yd();ol();er=()=>Object.assign(new Error("ENOSYS: unsupported filesystem access"),{code:"ENOSYS"}),nx=class e extends yp{static{this.instance=new e}constructor(){super(K)}getExtractHint(){throw er()}getRealPath(){throw er()}resolve(){throw er()}async openPromise(){throw er()}openSync(){throw er()}async opendirPromise(){throw er()}opendirSync(){throw er()}async readPromise(){throw er()}readSync(){throw er()}async writePromise(){throw er()}writeSync(){throw er()}async closePromise(){throw er()}closeSync(){throw er()}createWriteStream(){throw er()}createReadStream(){throw er()}async realpathPromise(){throw er()}realpathSync(){throw er()}async readdirPromise(){throw er()}readdirSync(){throw er()}async existsPromise(t){throw er()}existsSync(t){throw er()}async accessPromise(){throw er()}accessSync(){throw er()}async statPromise(){throw er()}statSync(){throw er()}async fstatPromise(t){throw er()}fstatSync(t){throw er()}async lstatPromise(t){throw er()}lstatSync(t){throw er()}async fchmodPromise(){throw er()}fchmodSync(){throw er()}async chmodPromise(){throw er()}chmodSync(){throw er()}async fchownPromise(){throw er()}fchownSync(){throw er()}async chownPromise(){throw er()}chownSync(){throw er()}async mkdirPromise(){throw er()}mkdirSync(){throw er()}async rmdirPromise(){throw er()}rmdirSync(){throw er()}async rmPromise(){throw er()}rmSync(){throw er()}async linkPromise(){throw er()}linkSync(){throw er()}async symlinkPromise(){throw er()}symlinkSync(){throw er()}async renamePromise(){throw er()}renameSync(){throw er()}async copyFilePromise(){throw er()}copyFileSync(){throw er()}async appendFilePromise(){throw er()}appendFileSync(){throw er()}async writeFilePromise(){throw er()}writeFileSync(){throw er()}async unlinkPromise(){throw er()}unlinkSync(){throw er()}async utimesPromise(){throw er()}utimesSync(){throw er()}async lutimesPromise(){throw er()}lutimesSync(){throw er()}async readFilePromise(){throw er()}readFileSync(){throw er()}async readlinkPromise(){throw er()}readlinkSync(){throw er()}async truncatePromise(){throw er()}truncateSync(){throw er()}async ftruncatePromise(t,r){throw er()}ftruncateSync(t,r){throw er()}watch(){throw er()}watchFile(){throw er()}unwatchFile(){throw er()}}});var $h,kX=Ze(()=>{Ep();ol();$h=class extends Gs{constructor(t){super(fe),this.baseFs=t}mapFromBase(t){return fe.fromPortablePath(t)}mapToBase(t){return fe.toPortablePath(t)}}});var Vje,AU,Yje,mo,QX=Ze(()=>{Ed();Ep();ol();Vje=/^[0-9]+$/,AU=/^(\/(?:[^/]+\/)*?(?:\$\$virtual|__virtual__))((?:\/((?:[^/]+-)?[a-f0-9]+)(?:\/([^/]+))?)?((?:\/.*)?))$/,Yje=/^([^/]+-)?[a-f0-9]+$/,mo=class e extends Gs{static makeVirtualPath(t,r,s){if(K.basename(t)!=="__virtual__")throw new Error('Assertion failed: Virtual folders must be named "__virtual__"');if(!K.basename(r).match(Yje))throw new Error("Assertion failed: Virtual components must be ended by an hexadecimal hash");let n=K.relative(K.dirname(t),s).split("/"),c=0;for(;c<n.length&&n[c]==="..";)c+=1;let f=n.slice(c);return K.join(t,r,String(c),...f)}static resolveVirtual(t){let r=t.match(AU);if(!r||!r[3]&&r[5])return t;let s=K.dirname(r[1]);if(!r[3]||!r[4])return s;if(!Vje.test(r[4]))return t;let n=Number(r[4]),c="../".repeat(n),f=r[5]||".";return e.resolveVirtual(K.join(s,c,f))}constructor({baseFs:t=new Yn}={}){super(K),this.baseFs=t}getExtractHint(t){return this.baseFs.getExtractHint(t)}getRealPath(){return this.baseFs.getRealPath()}realpathSync(t){let r=t.match(AU);if(!r)return this.baseFs.realpathSync(t);if(!r[5])return t;let s=this.baseFs.realpathSync(this.mapToBase(t));return e.makeVirtualPath(r[1],r[3],s)}async realpathPromise(t){let r=t.match(AU);if(!r)return await this.baseFs.realpathPromise(t);if(!r[5])return t;let s=await this.baseFs.realpathPromise(this.mapToBase(t));return e.makeVirtualPath(r[1],r[3],s)}mapToBase(t){if(t==="")return t;if(this.pathUtils.isAbsolute(t))return e.resolveVirtual(t);let r=e.resolveVirtual(this.baseFs.resolve(vt.dot)),s=e.resolveVirtual(this.baseFs.resolve(t));return K.relative(r,s)||vt.dot}mapFromBase(t){return t}}});function Kje(e,t){return typeof pU.default.isUtf8<"u"?pU.default.isUtf8(e):Buffer.byteLength(t)===e.byteLength}var pU,RX,TX,ix,FX=Ze(()=>{pU=et(Ie("buffer")),RX=Ie("url"),TX=Ie("util");Ep();ol();ix=class extends Gs{constructor(t){super(fe),this.baseFs=t}mapFromBase(t){return t}mapToBase(t){if(typeof t=="string")return t;if(t instanceof URL)return(0,RX.fileURLToPath)(t);if(Buffer.isBuffer(t)){let r=t.toString();if(!Kje(t,r))throw new Error("Non-utf8 buffers are not supported at the moment. Please upvote the following issue if you encounter this error: https://github.com/yarnpkg/berry/issues/4942");return r}throw new Error(`Unsupported path type: ${(0,TX.inspect)(t)}`)}}});var UX,qo,Ip,e0,sx,ox,uE,Qu,Ru,NX,OX,LX,MX,kB,_X=Ze(()=>{UX=Ie("readline"),qo=Symbol("kBaseFs"),Ip=Symbol("kFd"),e0=Symbol("kClosePromise"),sx=Symbol("kCloseResolve"),ox=Symbol("kCloseReject"),uE=Symbol("kRefs"),Qu=Symbol("kRef"),Ru=Symbol("kUnref"),kB=class{constructor(t,r){this[MX]=1;this[LX]=void 0;this[OX]=void 0;this[NX]=void 0;this[qo]=r,this[Ip]=t}get fd(){return this[Ip]}async appendFile(t,r){try{this[Qu](this.appendFile);let s=(typeof r=="string"?r:r?.encoding)??void 0;return await this[qo].appendFilePromise(this.fd,t,s?{encoding:s}:void 0)}finally{this[Ru]()}}async chown(t,r){try{return this[Qu](this.chown),await this[qo].fchownPromise(this.fd,t,r)}finally{this[Ru]()}}async chmod(t){try{return this[Qu](this.chmod),await this[qo].fchmodPromise(this.fd,t)}finally{this[Ru]()}}createReadStream(t){return this[qo].createReadStream(null,{...t,fd:this.fd})}createWriteStream(t){return this[qo].createWriteStream(null,{...t,fd:this.fd})}datasync(){throw new Error("Method not implemented.")}sync(){throw new Error("Method not implemented.")}async read(t,r,s,a){try{this[Qu](this.read);let n,c;return ArrayBuffer.isView(t)?typeof r=="object"&&r!==null?(n=t,c=r?.offset??0,s=r?.length??n.byteLength-c,a=r?.position??null):(n=t,c=r??0,s??=0):(n=t?.buffer??Buffer.alloc(16384),c=t?.offset??0,s=t?.length??n.byteLength-c,a=t?.position??null),s===0?{bytesRead:s,buffer:n}:{bytesRead:await this[qo].readPromise(this.fd,Buffer.isBuffer(n)?n:Buffer.from(n.buffer,n.byteOffset,n.byteLength),c,s,a),buffer:n}}finally{this[Ru]()}}async readFile(t){try{this[Qu](this.readFile);let r=(typeof t=="string"?t:t?.encoding)??void 0;return await this[qo].readFilePromise(this.fd,r)}finally{this[Ru]()}}readLines(t){return(0,UX.createInterface)({input:this.createReadStream(t),crlfDelay:1/0})}async stat(t){try{return this[Qu](this.stat),await this[qo].fstatPromise(this.fd,t)}finally{this[Ru]()}}async truncate(t){try{return this[Qu](this.truncate),await this[qo].ftruncatePromise(this.fd,t)}finally{this[Ru]()}}utimes(t,r){throw new Error("Method not implemented.")}async writeFile(t,r){try{this[Qu](this.writeFile);let s=(typeof r=="string"?r:r?.encoding)??void 0;await this[qo].writeFilePromise(this.fd,t,s)}finally{this[Ru]()}}async write(...t){try{if(this[Qu](this.write),ArrayBuffer.isView(t[0])){let[r,s,a,n]=t;return{bytesWritten:await this[qo].writePromise(this.fd,r,s??void 0,a??void 0,n??void 0),buffer:r}}else{let[r,s,a]=t;return{bytesWritten:await this[qo].writePromise(this.fd,r,s,a),buffer:r}}}finally{this[Ru]()}}async writev(t,r){try{this[Qu](this.writev);let s=0;if(typeof r<"u")for(let a of t){let n=await this.write(a,void 0,void 0,r);s+=n.bytesWritten,r+=n.bytesWritten}else for(let a of t){let n=await this.write(a);s+=n.bytesWritten}return{buffers:t,bytesWritten:s}}finally{this[Ru]()}}readv(t,r){throw new Error("Method not implemented.")}close(){if(this[Ip]===-1)return Promise.resolve();if(this[e0])return this[e0];if(this[uE]--,this[uE]===0){let t=this[Ip];this[Ip]=-1,this[e0]=this[qo].closePromise(t).finally(()=>{this[e0]=void 0})}else this[e0]=new Promise((t,r)=>{this[sx]=t,this[ox]=r}).finally(()=>{this[e0]=void 0,this[ox]=void 0,this[sx]=void 0});return this[e0]}[(qo,Ip,MX=uE,LX=e0,OX=sx,NX=ox,Qu)](t){if(this[Ip]===-1){let r=new Error("file closed");throw r.code="EBADF",r.syscall=t.name,r}this[uE]++}[Ru](){if(this[uE]--,this[uE]===0){let t=this[Ip];this[Ip]=-1,this[qo].closePromise(t).then(this[sx],this[ox])}}}});function QB(e,t){t=new ix(t);let r=(s,a,n)=>{let c=s[a];s[a]=n,typeof c?.[fE.promisify.custom]<"u"&&(n[fE.promisify.custom]=c[fE.promisify.custom])};{r(e,"exists",(s,...a)=>{let c=typeof a[a.length-1]=="function"?a.pop():()=>{};process.nextTick(()=>{t.existsPromise(s).then(f=>{c(f)},()=>{c(!1)})})}),r(e,"read",(...s)=>{let[a,n,c,f,p,h]=s;if(s.length<=3){let E={};s.length<3?h=s[1]:(E=s[1],h=s[2]),{buffer:n=Buffer.alloc(16384),offset:c=0,length:f=n.byteLength,position:p}=E}if(c==null&&(c=0),f|=0,f===0){process.nextTick(()=>{h(null,0,n)});return}p==null&&(p=-1),process.nextTick(()=>{t.readPromise(a,n,c,f,p).then(E=>{h(null,E,n)},E=>{h(E,0,n)})})});for(let s of HX){let a=s.replace(/Promise$/,"");if(typeof e[a]>"u")continue;let n=t[s];if(typeof n>"u")continue;r(e,a,(...f)=>{let h=typeof f[f.length-1]=="function"?f.pop():()=>{};process.nextTick(()=>{n.apply(t,f).then(E=>{h(null,E)},E=>{h(E)})})})}e.realpath.native=e.realpath}{r(e,"existsSync",s=>{try{return t.existsSync(s)}catch{return!1}}),r(e,"readSync",(...s)=>{let[a,n,c,f,p]=s;return s.length<=3&&({offset:c=0,length:f=n.byteLength,position:p}=s[2]||{}),c==null&&(c=0),f|=0,f===0?0:(p==null&&(p=-1),t.readSync(a,n,c,f,p))});for(let s of Jje){let a=s;if(typeof e[a]>"u")continue;let n=t[s];typeof n>"u"||r(e,a,n.bind(t))}e.realpathSync.native=e.realpathSync}{let s=e.promises;for(let a of HX){let n=a.replace(/Promise$/,"");if(typeof s[n]>"u")continue;let c=t[a];typeof c>"u"||a!=="open"&&r(s,n,(f,...p)=>f instanceof kB?f[n].apply(f,p):c.call(t,f,...p))}r(s,"open",async(...a)=>{let n=await t.openPromise(...a);return new kB(n,t)})}e.read[fE.promisify.custom]=async(s,a,...n)=>({bytesRead:await t.readPromise(s,a,...n),buffer:a}),e.write[fE.promisify.custom]=async(s,a,...n)=>({bytesWritten:await t.writePromise(s,a,...n),buffer:a})}function ax(e,t){let r=Object.create(e);return QB(r,t),r}var fE,Jje,HX,jX=Ze(()=>{fE=Ie("util");FX();_X();Jje=new Set(["accessSync","appendFileSync","createReadStream","createWriteStream","chmodSync","fchmodSync","chownSync","fchownSync","closeSync","copyFileSync","linkSync","lstatSync","fstatSync","lutimesSync","mkdirSync","openSync","opendirSync","readlinkSync","readFileSync","readdirSync","readlinkSync","realpathSync","renameSync","rmdirSync","rmSync","statSync","symlinkSync","truncateSync","ftruncateSync","unlinkSync","unwatchFile","utimesSync","watch","watchFile","writeFileSync","writeSync"]),HX=new Set(["accessPromise","appendFilePromise","fchmodPromise","chmodPromise","fchownPromise","chownPromise","closePromise","copyFilePromise","linkPromise","fstatPromise","lstatPromise","lutimesPromise","mkdirPromise","openPromise","opendirPromise","readdirPromise","realpathPromise","readFilePromise","readdirPromise","readlinkPromise","renamePromise","rmdirPromise","rmPromise","statPromise","symlinkPromise","truncatePromise","ftruncatePromise","unlinkPromise","utimesPromise","writeFilePromise","writeSync"])});function GX(e){let t=Math.ceil(Math.random()*4294967296).toString(16).padStart(8,"0");return`${e}${t}`}function qX(){if(hU)return hU;let e=fe.toPortablePath(WX.default.tmpdir()),t=le.realpathSync(e);return process.once("exit",()=>{le.rmtempSync()}),hU={tmpdir:e,realTmpdir:t}}var WX,Tu,hU,le,VX=Ze(()=>{WX=et(Ie("os"));Ed();ol();Tu=new Set,hU=null;le=Object.assign(new Yn,{detachTemp(e){Tu.delete(e)},mktempSync(e){let{tmpdir:t,realTmpdir:r}=qX();for(;;){let s=GX("xfs-");try{this.mkdirSync(K.join(t,s))}catch(n){if(n.code==="EEXIST")continue;throw n}let a=K.join(r,s);if(Tu.add(a),typeof e>"u")return a;try{return e(a)}finally{if(Tu.has(a)){Tu.delete(a);try{this.removeSync(a)}catch{}}}}},async mktempPromise(e){let{tmpdir:t,realTmpdir:r}=qX();for(;;){let s=GX("xfs-");try{await this.mkdirPromise(K.join(t,s))}catch(n){if(n.code==="EEXIST")continue;throw n}let a=K.join(r,s);if(Tu.add(a),typeof e>"u")return a;try{return await e(a)}finally{if(Tu.has(a)){Tu.delete(a);try{await this.removePromise(a)}catch{}}}}},async rmtempPromise(){await Promise.all(Array.from(Tu.values()).map(async e=>{try{await le.removePromise(e,{maxRetries:0}),Tu.delete(e)}catch{}}))},rmtempSync(){for(let e of Tu)try{le.removeSync(e),Tu.delete(e)}catch{}}})});var RB={};Yt(RB,{AliasFS:()=>jf,BasePortableFakeFS:()=>Hf,CustomDir:()=>xB,CwdFS:()=>bn,FakeFS:()=>yp,Filename:()=>Er,JailFS:()=>Gf,LazyFS:()=>cE,MountFS:()=>Xh,NoFS:()=>nx,NodeFS:()=>Yn,PortablePath:()=>vt,PosixFS:()=>$h,ProxiedFS:()=>Gs,VirtualFS:()=>mo,constants:()=>Ai,errors:()=>or,extendFs:()=>ax,normalizeLineEndings:()=>md,npath:()=>fe,opendir:()=>ex,patchFs:()=>QB,ppath:()=>K,setupCopyIndex:()=>$P,statUtils:()=>sl,unwatchAllFiles:()=>dd,unwatchFile:()=>gd,watchFile:()=>lE,xfs:()=>le});var Dt=Ze(()=>{cX();zP();aU();uU();gX();fU();yd();ol();ol();CX();yd();vX();DX();bX();PX();xX();Ed();kX();Ep();QX();jX();VX()});var ZX=G((_bt,zX)=>{zX.exports=JX;JX.sync=Zje;var YX=Ie("fs");function zje(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var s=0;s<r.length;s++){var a=r[s].toLowerCase();if(a&&e.substr(-a.length).toLowerCase()===a)return!0}return!1}function KX(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:zje(t,r)}function JX(e,t,r){YX.stat(e,function(s,a){r(s,s?!1:KX(a,e,t))})}function Zje(e,t){return KX(YX.statSync(e),e,t)}});var r$=G((Hbt,t$)=>{t$.exports=$X;$X.sync=Xje;var XX=Ie("fs");function $X(e,t,r){XX.stat(e,function(s,a){r(s,s?!1:e$(a,t))})}function Xje(e,t){return e$(XX.statSync(e),t)}function e$(e,t){return e.isFile()&&$je(e,t)}function $je(e,t){var r=e.mode,s=e.uid,a=e.gid,n=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),c=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),f=parseInt("100",8),p=parseInt("010",8),h=parseInt("001",8),E=f|p,C=r&h||r&p&&a===c||r&f&&s===n||r&E&&n===0;return C}});var i$=G((Gbt,n$)=>{var jbt=Ie("fs"),lx;process.platform==="win32"||global.TESTING_WINDOWS?lx=ZX():lx=r$();n$.exports=gU;gU.sync=e6e;function gU(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(s,a){gU(e,t||{},function(n,c){n?a(n):s(c)})})}lx(e,t||{},function(s,a){s&&(s.code==="EACCES"||t&&t.ignoreErrors)&&(s=null,a=!1),r(s,a)})}function e6e(e,t){try{return lx.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var f$=G((qbt,u$)=>{var AE=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",s$=Ie("path"),t6e=AE?";":":",o$=i$(),a$=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),l$=(e,t)=>{let r=t.colon||t6e,s=e.match(/\//)||AE&&e.match(/\\/)?[""]:[...AE?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],a=AE?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",n=AE?a.split(r):[""];return AE&&e.indexOf(".")!==-1&&n[0]!==""&&n.unshift(""),{pathEnv:s,pathExt:n,pathExtExe:a}},c$=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:s,pathExt:a,pathExtExe:n}=l$(e,t),c=[],f=h=>new Promise((E,C)=>{if(h===s.length)return t.all&&c.length?E(c):C(a$(e));let S=s[h],x=/^".*"$/.test(S)?S.slice(1,-1):S,I=s$.join(x,e),T=!x&&/^\.[\\\/]/.test(e)?e.slice(0,2)+I:I;E(p(T,h,0))}),p=(h,E,C)=>new Promise((S,x)=>{if(C===a.length)return S(f(E+1));let I=a[C];o$(h+I,{pathExt:n},(T,O)=>{if(!T&&O)if(t.all)c.push(h+I);else return S(h+I);return S(p(h,E,C+1))})});return r?f(0).then(h=>r(null,h),r):f(0)},r6e=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:s,pathExtExe:a}=l$(e,t),n=[];for(let c=0;c<r.length;c++){let f=r[c],p=/^".*"$/.test(f)?f.slice(1,-1):f,h=s$.join(p,e),E=!p&&/^\.[\\\/]/.test(e)?e.slice(0,2)+h:h;for(let C=0;C<s.length;C++){let S=E+s[C];try{if(o$.sync(S,{pathExt:a}))if(t.all)n.push(S);else return S}catch{}}}if(t.all&&n.length)return n;if(t.nothrow)return null;throw a$(e)};u$.exports=c$;c$.sync=r6e});var p$=G((Wbt,dU)=>{"use strict";var A$=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(s=>s.toUpperCase()==="PATH")||"Path"};dU.exports=A$;dU.exports.default=A$});var m$=G((Vbt,d$)=>{"use strict";var h$=Ie("path"),n6e=f$(),i6e=p$();function g$(e,t){let r=e.options.env||process.env,s=process.cwd(),a=e.options.cwd!=null,n=a&&process.chdir!==void 0&&!process.chdir.disabled;if(n)try{process.chdir(e.options.cwd)}catch{}let c;try{c=n6e.sync(e.command,{path:r[i6e({env:r})],pathExt:t?h$.delimiter:void 0})}catch{}finally{n&&process.chdir(s)}return c&&(c=h$.resolve(a?e.options.cwd:"",c)),c}function s6e(e){return g$(e)||g$(e,!0)}d$.exports=s6e});var y$=G((Ybt,yU)=>{"use strict";var mU=/([()\][%!^"`<>&|;, *?])/g;function o6e(e){return e=e.replace(mU,"^$1"),e}function a6e(e,t){return e=`${e}`,e=e.replace(/(?=(\\+?)?)\1"/g,'$1$1\\"'),e=e.replace(/(?=(\\+?)?)\1$/,"$1$1"),e=`"${e}"`,e=e.replace(mU,"^$1"),t&&(e=e.replace(mU,"^$1")),e}yU.exports.command=o6e;yU.exports.argument=a6e});var I$=G((Kbt,E$)=>{"use strict";E$.exports=/^#!(.*)/});var w$=G((Jbt,C$)=>{"use strict";var l6e=I$();C$.exports=(e="")=>{let t=e.match(l6e);if(!t)return null;let[r,s]=t[0].replace(/#! ?/,"").split(" "),a=r.split("/").pop();return a==="env"?s:s?`${a} ${s}`:a}});var v$=G((zbt,B$)=>{"use strict";var EU=Ie("fs"),c6e=w$();function u6e(e){let r=Buffer.alloc(150),s;try{s=EU.openSync(e,"r"),EU.readSync(s,r,0,150,0),EU.closeSync(s)}catch{}return c6e(r.toString())}B$.exports=u6e});var P$=G((Zbt,b$)=>{"use strict";var f6e=Ie("path"),S$=m$(),D$=y$(),A6e=v$(),p6e=process.platform==="win32",h6e=/\.(?:com|exe)$/i,g6e=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function d6e(e){e.file=S$(e);let t=e.file&&A6e(e.file);return t?(e.args.unshift(e.file),e.command=t,S$(e)):e.file}function m6e(e){if(!p6e)return e;let t=d6e(e),r=!h6e.test(t);if(e.options.forceShell||r){let s=g6e.test(t);e.command=f6e.normalize(e.command),e.command=D$.command(e.command),e.args=e.args.map(n=>D$.argument(n,s));let a=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${a}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function y6e(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let s={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?s:m6e(s)}b$.exports=y6e});var Q$=G((Xbt,k$)=>{"use strict";var IU=process.platform==="win32";function CU(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function E6e(e,t){if(!IU)return;let r=e.emit;e.emit=function(s,a){if(s==="exit"){let n=x$(a,t);if(n)return r.call(e,"error",n)}return r.apply(e,arguments)}}function x$(e,t){return IU&&e===1&&!t.file?CU(t.original,"spawn"):null}function I6e(e,t){return IU&&e===1&&!t.file?CU(t.original,"spawnSync"):null}k$.exports={hookChildProcess:E6e,verifyENOENT:x$,verifyENOENTSync:I6e,notFoundError:CU}});var vU=G(($bt,pE)=>{"use strict";var R$=Ie("child_process"),wU=P$(),BU=Q$();function T$(e,t,r){let s=wU(e,t,r),a=R$.spawn(s.command,s.args,s.options);return BU.hookChildProcess(a,s),a}function C6e(e,t,r){let s=wU(e,t,r),a=R$.spawnSync(s.command,s.args,s.options);return a.error=a.error||BU.verifyENOENTSync(a.status,s),a}pE.exports=T$;pE.exports.spawn=T$;pE.exports.sync=C6e;pE.exports._parse=wU;pE.exports._enoent=BU});var N$=G((ePt,F$)=>{"use strict";function w6e(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function Cd(e,t,r,s){this.message=e,this.expected=t,this.found=r,this.location=s,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Cd)}w6e(Cd,Error);Cd.buildMessage=function(e,t){var r={literal:function(h){return'"'+a(h.text)+'"'},class:function(h){var E="",C;for(C=0;C<h.parts.length;C++)E+=h.parts[C]instanceof Array?n(h.parts[C][0])+"-"+n(h.parts[C][1]):n(h.parts[C]);return"["+(h.inverted?"^":"")+E+"]"},any:function(h){return"any character"},end:function(h){return"end of input"},other:function(h){return h.description}};function s(h){return h.charCodeAt(0).toString(16).toUpperCase()}function a(h){return h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function n(h){return h.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function c(h){return r[h.type](h)}function f(h){var E=new Array(h.length),C,S;for(C=0;C<h.length;C++)E[C]=c(h[C]);if(E.sort(),E.length>0){for(C=1,S=1;C<E.length;C++)E[C-1]!==E[C]&&(E[S]=E[C],S++);E.length=S}switch(E.length){case 1:return E[0];case 2:return E[0]+" or "+E[1];default:return E.slice(0,-1).join(", ")+", or "+E[E.length-1]}}function p(h){return h?'"'+a(h)+'"':"end of input"}return"Expected "+f(e)+" but "+p(t)+" found."};function B6e(e,t){t=t!==void 0?t:{};var r={},s={Start:Za},a=Za,n=function(N){return N||[]},c=function(N,J,re){return[{command:N,type:J}].concat(re||[])},f=function(N,J){return[{command:N,type:J||";"}]},p=function(N){return N},h=";",E=ur(";",!1),C="&",S=ur("&",!1),x=function(N,J){return J?{chain:N,then:J}:{chain:N}},I=function(N,J){return{type:N,line:J}},T="&&",O=ur("&&",!1),U="||",Y=ur("||",!1),te=function(N,J){return J?{...N,then:J}:N},ie=function(N,J){return{type:N,chain:J}},ue="|&",ae=ur("|&",!1),de="|",Ae=ur("|",!1),Ce="=",Ee=ur("=",!1),g=function(N,J){return{name:N,args:[J]}},Se=function(N){return{name:N,args:[]}},Be="(",me=ur("(",!1),ce=")",X=ur(")",!1),De=function(N,J){return{type:"subshell",subshell:N,args:J}},Qe="{",it=ur("{",!1),_="}",tt=ur("}",!1),Ne=function(N,J){return{type:"group",group:N,args:J}},ke=function(N,J){return{type:"command",args:J,envs:N}},be=function(N){return{type:"envs",envs:N}},je=function(N){return N},Re=function(N){return N},ct=/^[0-9]/,Me=zi([["0","9"]],!1,!1),P=function(N,J,re){return{type:"redirection",subtype:J,fd:N!==null?parseInt(N):null,args:[re]}},w=">>",b=ur(">>",!1),y=">&",F=ur(">&",!1),z=">",Z=ur(">",!1),$="<<<",se=ur("<<<",!1),xe="<&",Fe=ur("<&",!1),ut="<",Ct=ur("<",!1),qt=function(N){return{type:"argument",segments:[].concat(...N)}},ir=function(N){return N},Pt="$'",dn=ur("$'",!1),Pr="'",Ir=ur("'",!1),Or=function(N){return[{type:"text",text:N}]},on='""',li=ur('""',!1),So=function(){return{type:"text",text:""}},ns='"',so=ur('"',!1),Do=function(N){return N},ji=function(N){return{type:"arithmetic",arithmetic:N,quoted:!0}},oo=function(N){return{type:"shell",shell:N,quoted:!0}},bo=function(N){return{type:"variable",...N,quoted:!0}},RA=function(N){return{type:"text",text:N}},hf=function(N){return{type:"arithmetic",arithmetic:N,quoted:!1}},hh=function(N){return{type:"shell",shell:N,quoted:!1}},gh=function(N){return{type:"variable",...N,quoted:!1}},ao=function(N){return{type:"glob",pattern:N}},Gn=/^[^']/,Ns=zi(["'"],!0,!1),lo=function(N){return N.join("")},iu=/^[^$"]/,su=zi(["$",'"'],!0,!1),ou=`\\
`,TA=ur(`\\
`,!1),FA=function(){return""},ua="\\",fa=ur("\\",!1),NA=/^[\\$"`]/,gr=zi(["\\","$",'"',"`"],!1,!1),Po=function(N){return N},Ue="\\a",au=ur("\\a",!1),Cr=function(){return"a"},gf="\\b",OA=ur("\\b",!1),LA=function(){return"\b"},lu=/^[Ee]/,cu=zi(["E","e"],!1,!1),ac=function(){return"\x1B"},we="\\f",Nt=ur("\\f",!1),lc=function(){return"\f"},Oi="\\n",co=ur("\\n",!1),Tt=function(){return`
`},Qn="\\r",Aa=ur("\\r",!1),Gi=function(){return"\r"},Li="\\t",ja=ur("\\t",!1),mn=function(){return"	"},Zn="\\v",uu=ur("\\v",!1),dh=function(){return"\v"},Ga=/^[\\'"?]/,qa=zi(["\\","'",'"',"?"],!1,!1),Wa=function(N){return String.fromCharCode(parseInt(N,16))},$e="\\x",Va=ur("\\x",!1),df="\\u",cc=ur("\\u",!1),vn="\\U",pa=ur("\\U",!1),MA=function(N){return String.fromCodePoint(parseInt(N,16))},UA=/^[0-7]/,ha=zi([["0","7"]],!1,!1),xl=/^[0-9a-fA-f]/,Mt=zi([["0","9"],["a","f"],["A","f"]],!1,!1),Rn=If(),ga="{}",Ya=ur("{}",!1),is=function(){return"{}"},uc="-",fu=ur("-",!1),fc="+",Ka=ur("+",!1),Mi=".",Bs=ur(".",!1),kl=function(N,J,re){return{type:"number",value:(N==="-"?-1:1)*parseFloat(J.join("")+"."+re.join(""))}},mf=function(N,J){return{type:"number",value:(N==="-"?-1:1)*parseInt(J.join(""))}},Ac=function(N){return{type:"variable",...N}},Bi=function(N){return{type:"variable",name:N}},Tn=function(N){return N},pc="*",Je=ur("*",!1),ot="/",St=ur("/",!1),lr=function(N,J,re){return{type:J==="*"?"multiplication":"division",right:re}},ee=function(N,J){return J.reduce((re,ge)=>({left:re,...ge}),N)},ye=function(N,J,re){return{type:J==="+"?"addition":"subtraction",right:re}},Oe="$((",mt=ur("$((",!1),Et="))",bt=ur("))",!1),tr=function(N){return N},pn="$(",ci=ur("$(",!1),qi=function(N){return N},Fn="${",Ja=ur("${",!1),Iy=":-",q1=ur(":-",!1),xo=function(N,J){return{name:N,defaultValue:J}},Cy=":-}",mh=ur(":-}",!1),W1=function(N){return{name:N,defaultValue:[]}},ko=":+",yh=ur(":+",!1),Eh=function(N,J){return{name:N,alternativeValue:J}},Au=":+}",Ih=ur(":+}",!1),Rg=function(N){return{name:N,alternativeValue:[]}},Tg=function(N){return{name:N}},Fg="$",wy=ur("$",!1),yf=function(N){return t.isGlobPattern(N)},Qo=function(N){return N},Ql=/^[a-zA-Z0-9_]/,Ch=zi([["a","z"],["A","Z"],["0","9"],"_"],!1,!1),Ng=function(){return Dy()},Rl=/^[$@*?#a-zA-Z0-9_\-]/,Tl=zi(["$","@","*","?","#",["a","z"],["A","Z"],["0","9"],"_","-"],!1,!1),By=/^[()}<>$|&; \t"']/,_A=zi(["(",")","}","<",">","$","|","&",";"," ","	",'"',"'"],!1,!1),vy=/^[<>&; \t"']/,Sy=zi(["<",">","&",";"," ","	",'"',"'"],!1,!1),HA=/^[ \t]/,jA=zi([" ","	"],!1,!1),W=0,xt=0,GA=[{line:1,column:1}],Ro=0,Ef=[],yt=0,pu;if("startRule"in t){if(!(t.startRule in s))throw new Error(`Can't start parsing from rule "`+t.startRule+'".');a=s[t.startRule]}function Dy(){return e.substring(xt,W)}function Og(){return Cf(xt,W)}function V1(N,J){throw J=J!==void 0?J:Cf(xt,W),qA([Lg(N)],e.substring(xt,W),J)}function wh(N,J){throw J=J!==void 0?J:Cf(xt,W),mi(N,J)}function ur(N,J){return{type:"literal",text:N,ignoreCase:J}}function zi(N,J,re){return{type:"class",parts:N,inverted:J,ignoreCase:re}}function If(){return{type:"any"}}function za(){return{type:"end"}}function Lg(N){return{type:"other",description:N}}function hu(N){var J=GA[N],re;if(J)return J;for(re=N-1;!GA[re];)re--;for(J=GA[re],J={line:J.line,column:J.column};re<N;)e.charCodeAt(re)===10?(J.line++,J.column=1):J.column++,re++;return GA[N]=J,J}function Cf(N,J){var re=hu(N),ge=hu(J);return{start:{offset:N,line:re.line,column:re.column},end:{offset:J,line:ge.line,column:ge.column}}}function wt(N){W<Ro||(W>Ro&&(Ro=W,Ef=[]),Ef.push(N))}function mi(N,J){return new Cd(N,null,null,J)}function qA(N,J,re){return new Cd(Cd.buildMessage(N,J),N,J,re)}function Za(){var N,J,re;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();return J!==r?(re=da(),re===r&&(re=null),re!==r?(xt=N,J=n(re),N=J):(W=N,N=r)):(W=N,N=r),N}function da(){var N,J,re,ge,Ke;if(N=W,J=Bh(),J!==r){for(re=[],ge=kt();ge!==r;)re.push(ge),ge=kt();re!==r?(ge=Mg(),ge!==r?(Ke=Xa(),Ke===r&&(Ke=null),Ke!==r?(xt=N,J=c(J,ge,Ke),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r)}else W=N,N=r;if(N===r)if(N=W,J=Bh(),J!==r){for(re=[],ge=kt();ge!==r;)re.push(ge),ge=kt();re!==r?(ge=Mg(),ge===r&&(ge=null),ge!==r?(xt=N,J=f(J,ge),N=J):(W=N,N=r)):(W=N,N=r)}else W=N,N=r;return N}function Xa(){var N,J,re,ge,Ke;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r)if(re=da(),re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();ge!==r?(xt=N,J=p(re),N=J):(W=N,N=r)}else W=N,N=r;else W=N,N=r;return N}function Mg(){var N;return e.charCodeAt(W)===59?(N=h,W++):(N=r,yt===0&&wt(E)),N===r&&(e.charCodeAt(W)===38?(N=C,W++):(N=r,yt===0&&wt(S))),N}function Bh(){var N,J,re;return N=W,J=WA(),J!==r?(re=Ug(),re===r&&(re=null),re!==r?(xt=N,J=x(J,re),N=J):(W=N,N=r)):(W=N,N=r),N}function Ug(){var N,J,re,ge,Ke,pt,dr;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r)if(re=by(),re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();if(ge!==r)if(Ke=Bh(),Ke!==r){for(pt=[],dr=kt();dr!==r;)pt.push(dr),dr=kt();pt!==r?(xt=N,J=I(re,Ke),N=J):(W=N,N=r)}else W=N,N=r;else W=N,N=r}else W=N,N=r;else W=N,N=r;return N}function by(){var N;return e.substr(W,2)===T?(N=T,W+=2):(N=r,yt===0&&wt(O)),N===r&&(e.substr(W,2)===U?(N=U,W+=2):(N=r,yt===0&&wt(Y))),N}function WA(){var N,J,re;return N=W,J=wf(),J!==r?(re=_g(),re===r&&(re=null),re!==r?(xt=N,J=te(J,re),N=J):(W=N,N=r)):(W=N,N=r),N}function _g(){var N,J,re,ge,Ke,pt,dr;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r)if(re=gu(),re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();if(ge!==r)if(Ke=WA(),Ke!==r){for(pt=[],dr=kt();dr!==r;)pt.push(dr),dr=kt();pt!==r?(xt=N,J=ie(re,Ke),N=J):(W=N,N=r)}else W=N,N=r;else W=N,N=r}else W=N,N=r;else W=N,N=r;return N}function gu(){var N;return e.substr(W,2)===ue?(N=ue,W+=2):(N=r,yt===0&&wt(ae)),N===r&&(e.charCodeAt(W)===124?(N=de,W++):(N=r,yt===0&&wt(Ae))),N}function du(){var N,J,re,ge,Ke,pt;if(N=W,J=Dh(),J!==r)if(e.charCodeAt(W)===61?(re=Ce,W++):(re=r,yt===0&&wt(Ee)),re!==r)if(ge=VA(),ge!==r){for(Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();Ke!==r?(xt=N,J=g(J,ge),N=J):(W=N,N=r)}else W=N,N=r;else W=N,N=r;else W=N,N=r;if(N===r)if(N=W,J=Dh(),J!==r)if(e.charCodeAt(W)===61?(re=Ce,W++):(re=r,yt===0&&wt(Ee)),re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();ge!==r?(xt=N,J=Se(J),N=J):(W=N,N=r)}else W=N,N=r;else W=N,N=r;return N}function wf(){var N,J,re,ge,Ke,pt,dr,vr,_n,yi,vs;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r)if(e.charCodeAt(W)===40?(re=Be,W++):(re=r,yt===0&&wt(me)),re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();if(ge!==r)if(Ke=da(),Ke!==r){for(pt=[],dr=kt();dr!==r;)pt.push(dr),dr=kt();if(pt!==r)if(e.charCodeAt(W)===41?(dr=ce,W++):(dr=r,yt===0&&wt(X)),dr!==r){for(vr=[],_n=kt();_n!==r;)vr.push(_n),_n=kt();if(vr!==r){for(_n=[],yi=qn();yi!==r;)_n.push(yi),yi=qn();if(_n!==r){for(yi=[],vs=kt();vs!==r;)yi.push(vs),vs=kt();yi!==r?(xt=N,J=De(Ke,_n),N=J):(W=N,N=r)}else W=N,N=r}else W=N,N=r}else W=N,N=r;else W=N,N=r}else W=N,N=r;else W=N,N=r}else W=N,N=r;else W=N,N=r;if(N===r){for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r)if(e.charCodeAt(W)===123?(re=Qe,W++):(re=r,yt===0&&wt(it)),re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();if(ge!==r)if(Ke=da(),Ke!==r){for(pt=[],dr=kt();dr!==r;)pt.push(dr),dr=kt();if(pt!==r)if(e.charCodeAt(W)===125?(dr=_,W++):(dr=r,yt===0&&wt(tt)),dr!==r){for(vr=[],_n=kt();_n!==r;)vr.push(_n),_n=kt();if(vr!==r){for(_n=[],yi=qn();yi!==r;)_n.push(yi),yi=qn();if(_n!==r){for(yi=[],vs=kt();vs!==r;)yi.push(vs),vs=kt();yi!==r?(xt=N,J=Ne(Ke,_n),N=J):(W=N,N=r)}else W=N,N=r}else W=N,N=r}else W=N,N=r;else W=N,N=r}else W=N,N=r;else W=N,N=r}else W=N,N=r;else W=N,N=r;if(N===r){for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r){for(re=[],ge=du();ge!==r;)re.push(ge),ge=du();if(re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();if(ge!==r){if(Ke=[],pt=mu(),pt!==r)for(;pt!==r;)Ke.push(pt),pt=mu();else Ke=r;if(Ke!==r){for(pt=[],dr=kt();dr!==r;)pt.push(dr),dr=kt();pt!==r?(xt=N,J=ke(re,Ke),N=J):(W=N,N=r)}else W=N,N=r}else W=N,N=r}else W=N,N=r}else W=N,N=r;if(N===r){for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r){if(re=[],ge=du(),ge!==r)for(;ge!==r;)re.push(ge),ge=du();else re=r;if(re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();ge!==r?(xt=N,J=be(re),N=J):(W=N,N=r)}else W=N,N=r}else W=N,N=r}}}return N}function Os(){var N,J,re,ge,Ke;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r){if(re=[],ge=Pi(),ge!==r)for(;ge!==r;)re.push(ge),ge=Pi();else re=r;if(re!==r){for(ge=[],Ke=kt();Ke!==r;)ge.push(Ke),Ke=kt();ge!==r?(xt=N,J=je(re),N=J):(W=N,N=r)}else W=N,N=r}else W=N,N=r;return N}function mu(){var N,J,re;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();if(J!==r?(re=qn(),re!==r?(xt=N,J=Re(re),N=J):(W=N,N=r)):(W=N,N=r),N===r){for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();J!==r?(re=Pi(),re!==r?(xt=N,J=Re(re),N=J):(W=N,N=r)):(W=N,N=r)}return N}function qn(){var N,J,re,ge,Ke;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();return J!==r?(ct.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Me)),re===r&&(re=null),re!==r?(ge=ss(),ge!==r?(Ke=Pi(),Ke!==r?(xt=N,J=P(re,ge,Ke),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N}function ss(){var N;return e.substr(W,2)===w?(N=w,W+=2):(N=r,yt===0&&wt(b)),N===r&&(e.substr(W,2)===y?(N=y,W+=2):(N=r,yt===0&&wt(F)),N===r&&(e.charCodeAt(W)===62?(N=z,W++):(N=r,yt===0&&wt(Z)),N===r&&(e.substr(W,3)===$?(N=$,W+=3):(N=r,yt===0&&wt(se)),N===r&&(e.substr(W,2)===xe?(N=xe,W+=2):(N=r,yt===0&&wt(Fe)),N===r&&(e.charCodeAt(W)===60?(N=ut,W++):(N=r,yt===0&&wt(Ct))))))),N}function Pi(){var N,J,re;for(N=W,J=[],re=kt();re!==r;)J.push(re),re=kt();return J!==r?(re=VA(),re!==r?(xt=N,J=Re(re),N=J):(W=N,N=r)):(W=N,N=r),N}function VA(){var N,J,re;if(N=W,J=[],re=Bf(),re!==r)for(;re!==r;)J.push(re),re=Bf();else J=r;return J!==r&&(xt=N,J=qt(J)),N=J,N}function Bf(){var N,J;return N=W,J=yn(),J!==r&&(xt=N,J=ir(J)),N=J,N===r&&(N=W,J=Hg(),J!==r&&(xt=N,J=ir(J)),N=J,N===r&&(N=W,J=jg(),J!==r&&(xt=N,J=ir(J)),N=J,N===r&&(N=W,J=os(),J!==r&&(xt=N,J=ir(J)),N=J))),N}function yn(){var N,J,re,ge;return N=W,e.substr(W,2)===Pt?(J=Pt,W+=2):(J=r,yt===0&&wt(dn)),J!==r?(re=En(),re!==r?(e.charCodeAt(W)===39?(ge=Pr,W++):(ge=r,yt===0&&wt(Ir)),ge!==r?(xt=N,J=Or(re),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N}function Hg(){var N,J,re,ge;return N=W,e.charCodeAt(W)===39?(J=Pr,W++):(J=r,yt===0&&wt(Ir)),J!==r?(re=vf(),re!==r?(e.charCodeAt(W)===39?(ge=Pr,W++):(ge=r,yt===0&&wt(Ir)),ge!==r?(xt=N,J=Or(re),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N}function jg(){var N,J,re,ge;if(N=W,e.substr(W,2)===on?(J=on,W+=2):(J=r,yt===0&&wt(li)),J!==r&&(xt=N,J=So()),N=J,N===r)if(N=W,e.charCodeAt(W)===34?(J=ns,W++):(J=r,yt===0&&wt(so)),J!==r){for(re=[],ge=Fl();ge!==r;)re.push(ge),ge=Fl();re!==r?(e.charCodeAt(W)===34?(ge=ns,W++):(ge=r,yt===0&&wt(so)),ge!==r?(xt=N,J=Do(re),N=J):(W=N,N=r)):(W=N,N=r)}else W=N,N=r;return N}function os(){var N,J,re;if(N=W,J=[],re=To(),re!==r)for(;re!==r;)J.push(re),re=To();else J=r;return J!==r&&(xt=N,J=Do(J)),N=J,N}function Fl(){var N,J;return N=W,J=Xr(),J!==r&&(xt=N,J=ji(J)),N=J,N===r&&(N=W,J=Sh(),J!==r&&(xt=N,J=oo(J)),N=J,N===r&&(N=W,J=KA(),J!==r&&(xt=N,J=bo(J)),N=J,N===r&&(N=W,J=Sf(),J!==r&&(xt=N,J=RA(J)),N=J))),N}function To(){var N,J;return N=W,J=Xr(),J!==r&&(xt=N,J=hf(J)),N=J,N===r&&(N=W,J=Sh(),J!==r&&(xt=N,J=hh(J)),N=J,N===r&&(N=W,J=KA(),J!==r&&(xt=N,J=gh(J)),N=J,N===r&&(N=W,J=Py(),J!==r&&(xt=N,J=ao(J)),N=J,N===r&&(N=W,J=vh(),J!==r&&(xt=N,J=RA(J)),N=J)))),N}function vf(){var N,J,re;for(N=W,J=[],Gn.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Ns));re!==r;)J.push(re),Gn.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Ns));return J!==r&&(xt=N,J=lo(J)),N=J,N}function Sf(){var N,J,re;if(N=W,J=[],re=Nl(),re===r&&(iu.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(su))),re!==r)for(;re!==r;)J.push(re),re=Nl(),re===r&&(iu.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(su)));else J=r;return J!==r&&(xt=N,J=lo(J)),N=J,N}function Nl(){var N,J,re;return N=W,e.substr(W,2)===ou?(J=ou,W+=2):(J=r,yt===0&&wt(TA)),J!==r&&(xt=N,J=FA()),N=J,N===r&&(N=W,e.charCodeAt(W)===92?(J=ua,W++):(J=r,yt===0&&wt(fa)),J!==r?(NA.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(gr)),re!==r?(xt=N,J=Po(re),N=J):(W=N,N=r)):(W=N,N=r)),N}function En(){var N,J,re;for(N=W,J=[],re=Fo(),re===r&&(Gn.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Ns)));re!==r;)J.push(re),re=Fo(),re===r&&(Gn.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Ns)));return J!==r&&(xt=N,J=lo(J)),N=J,N}function Fo(){var N,J,re;return N=W,e.substr(W,2)===Ue?(J=Ue,W+=2):(J=r,yt===0&&wt(au)),J!==r&&(xt=N,J=Cr()),N=J,N===r&&(N=W,e.substr(W,2)===gf?(J=gf,W+=2):(J=r,yt===0&&wt(OA)),J!==r&&(xt=N,J=LA()),N=J,N===r&&(N=W,e.charCodeAt(W)===92?(J=ua,W++):(J=r,yt===0&&wt(fa)),J!==r?(lu.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(cu)),re!==r?(xt=N,J=ac(),N=J):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===we?(J=we,W+=2):(J=r,yt===0&&wt(Nt)),J!==r&&(xt=N,J=lc()),N=J,N===r&&(N=W,e.substr(W,2)===Oi?(J=Oi,W+=2):(J=r,yt===0&&wt(co)),J!==r&&(xt=N,J=Tt()),N=J,N===r&&(N=W,e.substr(W,2)===Qn?(J=Qn,W+=2):(J=r,yt===0&&wt(Aa)),J!==r&&(xt=N,J=Gi()),N=J,N===r&&(N=W,e.substr(W,2)===Li?(J=Li,W+=2):(J=r,yt===0&&wt(ja)),J!==r&&(xt=N,J=mn()),N=J,N===r&&(N=W,e.substr(W,2)===Zn?(J=Zn,W+=2):(J=r,yt===0&&wt(uu)),J!==r&&(xt=N,J=dh()),N=J,N===r&&(N=W,e.charCodeAt(W)===92?(J=ua,W++):(J=r,yt===0&&wt(fa)),J!==r?(Ga.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(qa)),re!==r?(xt=N,J=Po(re),N=J):(W=N,N=r)):(W=N,N=r),N===r&&(N=yu()))))))))),N}function yu(){var N,J,re,ge,Ke,pt,dr,vr,_n,yi,vs,JA;return N=W,e.charCodeAt(W)===92?(J=ua,W++):(J=r,yt===0&&wt(fa)),J!==r?(re=ma(),re!==r?(xt=N,J=Wa(re),N=J):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===$e?(J=$e,W+=2):(J=r,yt===0&&wt(Va)),J!==r?(re=W,ge=W,Ke=ma(),Ke!==r?(pt=Ls(),pt!==r?(Ke=[Ke,pt],ge=Ke):(W=ge,ge=r)):(W=ge,ge=r),ge===r&&(ge=ma()),ge!==r?re=e.substring(re,W):re=ge,re!==r?(xt=N,J=Wa(re),N=J):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===df?(J=df,W+=2):(J=r,yt===0&&wt(cc)),J!==r?(re=W,ge=W,Ke=Ls(),Ke!==r?(pt=Ls(),pt!==r?(dr=Ls(),dr!==r?(vr=Ls(),vr!==r?(Ke=[Ke,pt,dr,vr],ge=Ke):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r),ge!==r?re=e.substring(re,W):re=ge,re!==r?(xt=N,J=Wa(re),N=J):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===vn?(J=vn,W+=2):(J=r,yt===0&&wt(pa)),J!==r?(re=W,ge=W,Ke=Ls(),Ke!==r?(pt=Ls(),pt!==r?(dr=Ls(),dr!==r?(vr=Ls(),vr!==r?(_n=Ls(),_n!==r?(yi=Ls(),yi!==r?(vs=Ls(),vs!==r?(JA=Ls(),JA!==r?(Ke=[Ke,pt,dr,vr,_n,yi,vs,JA],ge=Ke):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r)):(W=ge,ge=r),ge!==r?re=e.substring(re,W):re=ge,re!==r?(xt=N,J=MA(re),N=J):(W=N,N=r)):(W=N,N=r)))),N}function ma(){var N;return UA.test(e.charAt(W))?(N=e.charAt(W),W++):(N=r,yt===0&&wt(ha)),N}function Ls(){var N;return xl.test(e.charAt(W))?(N=e.charAt(W),W++):(N=r,yt===0&&wt(Mt)),N}function vh(){var N,J,re,ge,Ke;if(N=W,J=[],re=W,e.charCodeAt(W)===92?(ge=ua,W++):(ge=r,yt===0&&wt(fa)),ge!==r?(e.length>W?(Ke=e.charAt(W),W++):(Ke=r,yt===0&&wt(Rn)),Ke!==r?(xt=re,ge=Po(Ke),re=ge):(W=re,re=r)):(W=re,re=r),re===r&&(re=W,e.substr(W,2)===ga?(ge=ga,W+=2):(ge=r,yt===0&&wt(Ya)),ge!==r&&(xt=re,ge=is()),re=ge,re===r&&(re=W,ge=W,yt++,Ke=xy(),yt--,Ke===r?ge=void 0:(W=ge,ge=r),ge!==r?(e.length>W?(Ke=e.charAt(W),W++):(Ke=r,yt===0&&wt(Rn)),Ke!==r?(xt=re,ge=Po(Ke),re=ge):(W=re,re=r)):(W=re,re=r))),re!==r)for(;re!==r;)J.push(re),re=W,e.charCodeAt(W)===92?(ge=ua,W++):(ge=r,yt===0&&wt(fa)),ge!==r?(e.length>W?(Ke=e.charAt(W),W++):(Ke=r,yt===0&&wt(Rn)),Ke!==r?(xt=re,ge=Po(Ke),re=ge):(W=re,re=r)):(W=re,re=r),re===r&&(re=W,e.substr(W,2)===ga?(ge=ga,W+=2):(ge=r,yt===0&&wt(Ya)),ge!==r&&(xt=re,ge=is()),re=ge,re===r&&(re=W,ge=W,yt++,Ke=xy(),yt--,Ke===r?ge=void 0:(W=ge,ge=r),ge!==r?(e.length>W?(Ke=e.charAt(W),W++):(Ke=r,yt===0&&wt(Rn)),Ke!==r?(xt=re,ge=Po(Ke),re=ge):(W=re,re=r)):(W=re,re=r)));else J=r;return J!==r&&(xt=N,J=lo(J)),N=J,N}function YA(){var N,J,re,ge,Ke,pt;if(N=W,e.charCodeAt(W)===45?(J=uc,W++):(J=r,yt===0&&wt(fu)),J===r&&(e.charCodeAt(W)===43?(J=fc,W++):(J=r,yt===0&&wt(Ka))),J===r&&(J=null),J!==r){if(re=[],ct.test(e.charAt(W))?(ge=e.charAt(W),W++):(ge=r,yt===0&&wt(Me)),ge!==r)for(;ge!==r;)re.push(ge),ct.test(e.charAt(W))?(ge=e.charAt(W),W++):(ge=r,yt===0&&wt(Me));else re=r;if(re!==r)if(e.charCodeAt(W)===46?(ge=Mi,W++):(ge=r,yt===0&&wt(Bs)),ge!==r){if(Ke=[],ct.test(e.charAt(W))?(pt=e.charAt(W),W++):(pt=r,yt===0&&wt(Me)),pt!==r)for(;pt!==r;)Ke.push(pt),ct.test(e.charAt(W))?(pt=e.charAt(W),W++):(pt=r,yt===0&&wt(Me));else Ke=r;Ke!==r?(xt=N,J=kl(J,re,Ke),N=J):(W=N,N=r)}else W=N,N=r;else W=N,N=r}else W=N,N=r;if(N===r){if(N=W,e.charCodeAt(W)===45?(J=uc,W++):(J=r,yt===0&&wt(fu)),J===r&&(e.charCodeAt(W)===43?(J=fc,W++):(J=r,yt===0&&wt(Ka))),J===r&&(J=null),J!==r){if(re=[],ct.test(e.charAt(W))?(ge=e.charAt(W),W++):(ge=r,yt===0&&wt(Me)),ge!==r)for(;ge!==r;)re.push(ge),ct.test(e.charAt(W))?(ge=e.charAt(W),W++):(ge=r,yt===0&&wt(Me));else re=r;re!==r?(xt=N,J=mf(J,re),N=J):(W=N,N=r)}else W=N,N=r;if(N===r&&(N=W,J=KA(),J!==r&&(xt=N,J=Ac(J)),N=J,N===r&&(N=W,J=hc(),J!==r&&(xt=N,J=Bi(J)),N=J,N===r)))if(N=W,e.charCodeAt(W)===40?(J=Be,W++):(J=r,yt===0&&wt(me)),J!==r){for(re=[],ge=kt();ge!==r;)re.push(ge),ge=kt();if(re!==r)if(ge=uo(),ge!==r){for(Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();Ke!==r?(e.charCodeAt(W)===41?(pt=ce,W++):(pt=r,yt===0&&wt(X)),pt!==r?(xt=N,J=Tn(ge),N=J):(W=N,N=r)):(W=N,N=r)}else W=N,N=r;else W=N,N=r}else W=N,N=r}return N}function Df(){var N,J,re,ge,Ke,pt,dr,vr;if(N=W,J=YA(),J!==r){for(re=[],ge=W,Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();if(Ke!==r)if(e.charCodeAt(W)===42?(pt=pc,W++):(pt=r,yt===0&&wt(Je)),pt===r&&(e.charCodeAt(W)===47?(pt=ot,W++):(pt=r,yt===0&&wt(St))),pt!==r){for(dr=[],vr=kt();vr!==r;)dr.push(vr),vr=kt();dr!==r?(vr=YA(),vr!==r?(xt=ge,Ke=lr(J,pt,vr),ge=Ke):(W=ge,ge=r)):(W=ge,ge=r)}else W=ge,ge=r;else W=ge,ge=r;for(;ge!==r;){for(re.push(ge),ge=W,Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();if(Ke!==r)if(e.charCodeAt(W)===42?(pt=pc,W++):(pt=r,yt===0&&wt(Je)),pt===r&&(e.charCodeAt(W)===47?(pt=ot,W++):(pt=r,yt===0&&wt(St))),pt!==r){for(dr=[],vr=kt();vr!==r;)dr.push(vr),vr=kt();dr!==r?(vr=YA(),vr!==r?(xt=ge,Ke=lr(J,pt,vr),ge=Ke):(W=ge,ge=r)):(W=ge,ge=r)}else W=ge,ge=r;else W=ge,ge=r}re!==r?(xt=N,J=ee(J,re),N=J):(W=N,N=r)}else W=N,N=r;return N}function uo(){var N,J,re,ge,Ke,pt,dr,vr;if(N=W,J=Df(),J!==r){for(re=[],ge=W,Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();if(Ke!==r)if(e.charCodeAt(W)===43?(pt=fc,W++):(pt=r,yt===0&&wt(Ka)),pt===r&&(e.charCodeAt(W)===45?(pt=uc,W++):(pt=r,yt===0&&wt(fu))),pt!==r){for(dr=[],vr=kt();vr!==r;)dr.push(vr),vr=kt();dr!==r?(vr=Df(),vr!==r?(xt=ge,Ke=ye(J,pt,vr),ge=Ke):(W=ge,ge=r)):(W=ge,ge=r)}else W=ge,ge=r;else W=ge,ge=r;for(;ge!==r;){for(re.push(ge),ge=W,Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();if(Ke!==r)if(e.charCodeAt(W)===43?(pt=fc,W++):(pt=r,yt===0&&wt(Ka)),pt===r&&(e.charCodeAt(W)===45?(pt=uc,W++):(pt=r,yt===0&&wt(fu))),pt!==r){for(dr=[],vr=kt();vr!==r;)dr.push(vr),vr=kt();dr!==r?(vr=Df(),vr!==r?(xt=ge,Ke=ye(J,pt,vr),ge=Ke):(W=ge,ge=r)):(W=ge,ge=r)}else W=ge,ge=r;else W=ge,ge=r}re!==r?(xt=N,J=ee(J,re),N=J):(W=N,N=r)}else W=N,N=r;return N}function Xr(){var N,J,re,ge,Ke,pt;if(N=W,e.substr(W,3)===Oe?(J=Oe,W+=3):(J=r,yt===0&&wt(mt)),J!==r){for(re=[],ge=kt();ge!==r;)re.push(ge),ge=kt();if(re!==r)if(ge=uo(),ge!==r){for(Ke=[],pt=kt();pt!==r;)Ke.push(pt),pt=kt();Ke!==r?(e.substr(W,2)===Et?(pt=Et,W+=2):(pt=r,yt===0&&wt(bt)),pt!==r?(xt=N,J=tr(ge),N=J):(W=N,N=r)):(W=N,N=r)}else W=N,N=r;else W=N,N=r}else W=N,N=r;return N}function Sh(){var N,J,re,ge;return N=W,e.substr(W,2)===pn?(J=pn,W+=2):(J=r,yt===0&&wt(ci)),J!==r?(re=da(),re!==r?(e.charCodeAt(W)===41?(ge=ce,W++):(ge=r,yt===0&&wt(X)),ge!==r?(xt=N,J=qi(re),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N}function KA(){var N,J,re,ge,Ke,pt;return N=W,e.substr(W,2)===Fn?(J=Fn,W+=2):(J=r,yt===0&&wt(Ja)),J!==r?(re=hc(),re!==r?(e.substr(W,2)===Iy?(ge=Iy,W+=2):(ge=r,yt===0&&wt(q1)),ge!==r?(Ke=Os(),Ke!==r?(e.charCodeAt(W)===125?(pt=_,W++):(pt=r,yt===0&&wt(tt)),pt!==r?(xt=N,J=xo(re,Ke),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===Fn?(J=Fn,W+=2):(J=r,yt===0&&wt(Ja)),J!==r?(re=hc(),re!==r?(e.substr(W,3)===Cy?(ge=Cy,W+=3):(ge=r,yt===0&&wt(mh)),ge!==r?(xt=N,J=W1(re),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===Fn?(J=Fn,W+=2):(J=r,yt===0&&wt(Ja)),J!==r?(re=hc(),re!==r?(e.substr(W,2)===ko?(ge=ko,W+=2):(ge=r,yt===0&&wt(yh)),ge!==r?(Ke=Os(),Ke!==r?(e.charCodeAt(W)===125?(pt=_,W++):(pt=r,yt===0&&wt(tt)),pt!==r?(xt=N,J=Eh(re,Ke),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===Fn?(J=Fn,W+=2):(J=r,yt===0&&wt(Ja)),J!==r?(re=hc(),re!==r?(e.substr(W,3)===Au?(ge=Au,W+=3):(ge=r,yt===0&&wt(Ih)),ge!==r?(xt=N,J=Rg(re),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.substr(W,2)===Fn?(J=Fn,W+=2):(J=r,yt===0&&wt(Ja)),J!==r?(re=hc(),re!==r?(e.charCodeAt(W)===125?(ge=_,W++):(ge=r,yt===0&&wt(tt)),ge!==r?(xt=N,J=Tg(re),N=J):(W=N,N=r)):(W=N,N=r)):(W=N,N=r),N===r&&(N=W,e.charCodeAt(W)===36?(J=Fg,W++):(J=r,yt===0&&wt(wy)),J!==r?(re=hc(),re!==r?(xt=N,J=Tg(re),N=J):(W=N,N=r)):(W=N,N=r)))))),N}function Py(){var N,J,re;return N=W,J=Gg(),J!==r?(xt=W,re=yf(J),re?re=void 0:re=r,re!==r?(xt=N,J=Qo(J),N=J):(W=N,N=r)):(W=N,N=r),N}function Gg(){var N,J,re,ge,Ke;if(N=W,J=[],re=W,ge=W,yt++,Ke=bh(),yt--,Ke===r?ge=void 0:(W=ge,ge=r),ge!==r?(e.length>W?(Ke=e.charAt(W),W++):(Ke=r,yt===0&&wt(Rn)),Ke!==r?(xt=re,ge=Po(Ke),re=ge):(W=re,re=r)):(W=re,re=r),re!==r)for(;re!==r;)J.push(re),re=W,ge=W,yt++,Ke=bh(),yt--,Ke===r?ge=void 0:(W=ge,ge=r),ge!==r?(e.length>W?(Ke=e.charAt(W),W++):(Ke=r,yt===0&&wt(Rn)),Ke!==r?(xt=re,ge=Po(Ke),re=ge):(W=re,re=r)):(W=re,re=r);else J=r;return J!==r&&(xt=N,J=lo(J)),N=J,N}function Dh(){var N,J,re;if(N=W,J=[],Ql.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Ch)),re!==r)for(;re!==r;)J.push(re),Ql.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Ch));else J=r;return J!==r&&(xt=N,J=Ng()),N=J,N}function hc(){var N,J,re;if(N=W,J=[],Rl.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Tl)),re!==r)for(;re!==r;)J.push(re),Rl.test(e.charAt(W))?(re=e.charAt(W),W++):(re=r,yt===0&&wt(Tl));else J=r;return J!==r&&(xt=N,J=Ng()),N=J,N}function xy(){var N;return By.test(e.charAt(W))?(N=e.charAt(W),W++):(N=r,yt===0&&wt(_A)),N}function bh(){var N;return vy.test(e.charAt(W))?(N=e.charAt(W),W++):(N=r,yt===0&&wt(Sy)),N}function kt(){var N,J;if(N=[],HA.test(e.charAt(W))?(J=e.charAt(W),W++):(J=r,yt===0&&wt(jA)),J!==r)for(;J!==r;)N.push(J),HA.test(e.charAt(W))?(J=e.charAt(W),W++):(J=r,yt===0&&wt(jA));else N=r;return N}if(pu=a(),pu!==r&&W===e.length)return pu;throw pu!==r&&W<e.length&&wt(za()),qA(Ef,Ro<e.length?e.charAt(Ro):null,Ro<e.length?Cf(Ro,Ro+1):Cf(Ro,Ro))}F$.exports={SyntaxError:Cd,parse:B6e}});function ux(e,t={isGlobPattern:()=>!1}){try{return(0,O$.parse)(e,t)}catch(r){throw r.location&&(r.message=r.message.replace(/(\.)?$/,` (line ${r.location.start.line}, column ${r.location.start.column})$1`)),r}}function hE(e,{endSemicolon:t=!1}={}){return e.map(({command:r,type:s},a)=>`${fx(r)}${s===";"?a!==e.length-1||t?";":"":" &"}`).join(" ")}function fx(e){return`${gE(e.chain)}${e.then?` ${SU(e.then)}`:""}`}function SU(e){return`${e.type} ${fx(e.line)}`}function gE(e){return`${bU(e)}${e.then?` ${DU(e.then)}`:""}`}function DU(e){return`${e.type} ${gE(e.chain)}`}function bU(e){switch(e.type){case"command":return`${e.envs.length>0?`${e.envs.map(t=>cx(t)).join(" ")} `:""}${e.args.map(t=>PU(t)).join(" ")}`;case"subshell":return`(${hE(e.subshell)})${e.args.length>0?` ${e.args.map(t=>TB(t)).join(" ")}`:""}`;case"group":return`{ ${hE(e.group,{endSemicolon:!0})} }${e.args.length>0?` ${e.args.map(t=>TB(t)).join(" ")}`:""}`;case"envs":return e.envs.map(t=>cx(t)).join(" ");default:throw new Error(`Unsupported command type:  "${e.type}"`)}}function cx(e){return`${e.name}=${e.args[0]?wd(e.args[0]):""}`}function PU(e){switch(e.type){case"redirection":return TB(e);case"argument":return wd(e);default:throw new Error(`Unsupported argument type: "${e.type}"`)}}function TB(e){return`${e.subtype} ${e.args.map(t=>wd(t)).join(" ")}`}function wd(e){return e.segments.map(t=>xU(t)).join("")}function xU(e){let t=(s,a)=>a?`"${s}"`:s,r=s=>s===""?"''":s.match(/[()}<>$|&;"'\n\t ]/)?s.match(/['\t\p{C}]/u)?s.match(/'/)?`"${s.replace(/["$\t\p{C}]/u,S6e)}"`:`$'${s.replace(/[\t\p{C}]/u,M$)}'`:`'${s}'`:s;switch(e.type){case"text":return r(e.text);case"glob":return e.pattern;case"shell":return t(`$(${hE(e.shell)})`,e.quoted);case"variable":return t(typeof e.defaultValue>"u"?typeof e.alternativeValue>"u"?`\${${e.name}}`:e.alternativeValue.length===0?`\${${e.name}:+}`:`\${${e.name}:+${e.alternativeValue.map(s=>wd(s)).join(" ")}}`:e.defaultValue.length===0?`\${${e.name}:-}`:`\${${e.name}:-${e.defaultValue.map(s=>wd(s)).join(" ")}}`,e.quoted);case"arithmetic":return`$(( ${Ax(e.arithmetic)} ))`;default:throw new Error(`Unsupported argument segment type: "${e.type}"`)}}function Ax(e){let t=a=>{switch(a){case"addition":return"+";case"subtraction":return"-";case"multiplication":return"*";case"division":return"/";default:throw new Error(`Can't extract operator from arithmetic expression of type "${a}"`)}},r=(a,n)=>n?`( ${a} )`:a,s=a=>r(Ax(a),!["number","variable"].includes(a.type));switch(e.type){case"number":return String(e.value);case"variable":return e.name;default:return`${s(e.left)} ${t(e.type)} ${s(e.right)}`}}var O$,L$,v6e,M$,S6e,U$=Ze(()=>{O$=et(N$());L$=new Map([["\f","\\f"],[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\v","\\v"],["\0","\\0"]]),v6e=new Map([["\\","\\\\"],["$","\\$"],['"','\\"'],...Array.from(L$,([e,t])=>[e,`"$'${t}'"`])]),M$=e=>L$.get(e)??`\\x${e.charCodeAt(0).toString(16).padStart(2,"0")}`,S6e=e=>v6e.get(e)??`"$'${M$(e)}'"`});var H$=G((hPt,_$)=>{"use strict";function D6e(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function Bd(e,t,r,s){this.message=e,this.expected=t,this.found=r,this.location=s,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Bd)}D6e(Bd,Error);Bd.buildMessage=function(e,t){var r={literal:function(h){return'"'+a(h.text)+'"'},class:function(h){var E="",C;for(C=0;C<h.parts.length;C++)E+=h.parts[C]instanceof Array?n(h.parts[C][0])+"-"+n(h.parts[C][1]):n(h.parts[C]);return"["+(h.inverted?"^":"")+E+"]"},any:function(h){return"any character"},end:function(h){return"end of input"},other:function(h){return h.description}};function s(h){return h.charCodeAt(0).toString(16).toUpperCase()}function a(h){return h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function n(h){return h.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function c(h){return r[h.type](h)}function f(h){var E=new Array(h.length),C,S;for(C=0;C<h.length;C++)E[C]=c(h[C]);if(E.sort(),E.length>0){for(C=1,S=1;C<E.length;C++)E[C-1]!==E[C]&&(E[S]=E[C],S++);E.length=S}switch(E.length){case 1:return E[0];case 2:return E[0]+" or "+E[1];default:return E.slice(0,-1).join(", ")+", or "+E[E.length-1]}}function p(h){return h?'"'+a(h)+'"':"end of input"}return"Expected "+f(e)+" but "+p(t)+" found."};function b6e(e,t){t=t!==void 0?t:{};var r={},s={resolution:ke},a=ke,n="/",c=Be("/",!1),f=function(Me,P){return{from:Me,descriptor:P}},p=function(Me){return{descriptor:Me}},h="@",E=Be("@",!1),C=function(Me,P){return{fullName:Me,description:P}},S=function(Me){return{fullName:Me}},x=function(){return Ce()},I=/^[^\/@]/,T=me(["/","@"],!0,!1),O=/^[^\/]/,U=me(["/"],!0,!1),Y=0,te=0,ie=[{line:1,column:1}],ue=0,ae=[],de=0,Ae;if("startRule"in t){if(!(t.startRule in s))throw new Error(`Can't start parsing from rule "`+t.startRule+'".');a=s[t.startRule]}function Ce(){return e.substring(te,Y)}function Ee(){return it(te,Y)}function g(Me,P){throw P=P!==void 0?P:it(te,Y),Ne([De(Me)],e.substring(te,Y),P)}function Se(Me,P){throw P=P!==void 0?P:it(te,Y),tt(Me,P)}function Be(Me,P){return{type:"literal",text:Me,ignoreCase:P}}function me(Me,P,w){return{type:"class",parts:Me,inverted:P,ignoreCase:w}}function ce(){return{type:"any"}}function X(){return{type:"end"}}function De(Me){return{type:"other",description:Me}}function Qe(Me){var P=ie[Me],w;if(P)return P;for(w=Me-1;!ie[w];)w--;for(P=ie[w],P={line:P.line,column:P.column};w<Me;)e.charCodeAt(w)===10?(P.line++,P.column=1):P.column++,w++;return ie[Me]=P,P}function it(Me,P){var w=Qe(Me),b=Qe(P);return{start:{offset:Me,line:w.line,column:w.column},end:{offset:P,line:b.line,column:b.column}}}function _(Me){Y<ue||(Y>ue&&(ue=Y,ae=[]),ae.push(Me))}function tt(Me,P){return new Bd(Me,null,null,P)}function Ne(Me,P,w){return new Bd(Bd.buildMessage(Me,P),Me,P,w)}function ke(){var Me,P,w,b;return Me=Y,P=be(),P!==r?(e.charCodeAt(Y)===47?(w=n,Y++):(w=r,de===0&&_(c)),w!==r?(b=be(),b!==r?(te=Me,P=f(P,b),Me=P):(Y=Me,Me=r)):(Y=Me,Me=r)):(Y=Me,Me=r),Me===r&&(Me=Y,P=be(),P!==r&&(te=Me,P=p(P)),Me=P),Me}function be(){var Me,P,w,b;return Me=Y,P=je(),P!==r?(e.charCodeAt(Y)===64?(w=h,Y++):(w=r,de===0&&_(E)),w!==r?(b=ct(),b!==r?(te=Me,P=C(P,b),Me=P):(Y=Me,Me=r)):(Y=Me,Me=r)):(Y=Me,Me=r),Me===r&&(Me=Y,P=je(),P!==r&&(te=Me,P=S(P)),Me=P),Me}function je(){var Me,P,w,b,y;return Me=Y,e.charCodeAt(Y)===64?(P=h,Y++):(P=r,de===0&&_(E)),P!==r?(w=Re(),w!==r?(e.charCodeAt(Y)===47?(b=n,Y++):(b=r,de===0&&_(c)),b!==r?(y=Re(),y!==r?(te=Me,P=x(),Me=P):(Y=Me,Me=r)):(Y=Me,Me=r)):(Y=Me,Me=r)):(Y=Me,Me=r),Me===r&&(Me=Y,P=Re(),P!==r&&(te=Me,P=x()),Me=P),Me}function Re(){var Me,P,w;if(Me=Y,P=[],I.test(e.charAt(Y))?(w=e.charAt(Y),Y++):(w=r,de===0&&_(T)),w!==r)for(;w!==r;)P.push(w),I.test(e.charAt(Y))?(w=e.charAt(Y),Y++):(w=r,de===0&&_(T));else P=r;return P!==r&&(te=Me,P=x()),Me=P,Me}function ct(){var Me,P,w;if(Me=Y,P=[],O.test(e.charAt(Y))?(w=e.charAt(Y),Y++):(w=r,de===0&&_(U)),w!==r)for(;w!==r;)P.push(w),O.test(e.charAt(Y))?(w=e.charAt(Y),Y++):(w=r,de===0&&_(U));else P=r;return P!==r&&(te=Me,P=x()),Me=P,Me}if(Ae=a(),Ae!==r&&Y===e.length)return Ae;throw Ae!==r&&Y<e.length&&_(X()),Ne(ae,ue<e.length?e.charAt(ue):null,ue<e.length?it(ue,ue+1):it(ue,ue))}_$.exports={SyntaxError:Bd,parse:b6e}});function px(e){let t=e.match(/^\*{1,2}\/(.*)/);if(t)throw new Error(`The override for '${e}' includes a glob pattern. Glob patterns have been removed since their behaviours don't match what you'd expect. Set the override to '${t[1]}' instead.`);try{return(0,j$.parse)(e)}catch(r){throw r.location&&(r.message=r.message.replace(/(\.)?$/,` (line ${r.location.start.line}, column ${r.location.start.column})$1`)),r}}function hx(e){let t="";return e.from&&(t+=e.from.fullName,e.from.description&&(t+=`@${e.from.description}`),t+="/"),t+=e.descriptor.fullName,e.descriptor.description&&(t+=`@${e.descriptor.description}`),t}var j$,G$=Ze(()=>{j$=et(H$())});var Sd=G((dPt,vd)=>{"use strict";function q$(e){return typeof e>"u"||e===null}function P6e(e){return typeof e=="object"&&e!==null}function x6e(e){return Array.isArray(e)?e:q$(e)?[]:[e]}function k6e(e,t){var r,s,a,n;if(t)for(n=Object.keys(t),r=0,s=n.length;r<s;r+=1)a=n[r],e[a]=t[a];return e}function Q6e(e,t){var r="",s;for(s=0;s<t;s+=1)r+=e;return r}function R6e(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}vd.exports.isNothing=q$;vd.exports.isObject=P6e;vd.exports.toArray=x6e;vd.exports.repeat=Q6e;vd.exports.isNegativeZero=R6e;vd.exports.extend=k6e});var dE=G((mPt,W$)=>{"use strict";function FB(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}FB.prototype=Object.create(Error.prototype);FB.prototype.constructor=FB;FB.prototype.toString=function(t){var r=this.name+": ";return r+=this.reason||"(unknown reason)",!t&&this.mark&&(r+=" "+this.mark.toString()),r};W$.exports=FB});var K$=G((yPt,Y$)=>{"use strict";var V$=Sd();function kU(e,t,r,s,a){this.name=e,this.buffer=t,this.position=r,this.line=s,this.column=a}kU.prototype.getSnippet=function(t,r){var s,a,n,c,f;if(!this.buffer)return null;for(t=t||4,r=r||75,s="",a=this.position;a>0&&`\0\r
\x85\u2028\u2029`.indexOf(this.buffer.charAt(a-1))===-1;)if(a-=1,this.position-a>r/2-1){s=" ... ",a+=5;break}for(n="",c=this.position;c<this.buffer.length&&`\0\r
\x85\u2028\u2029`.indexOf(this.buffer.charAt(c))===-1;)if(c+=1,c-this.position>r/2-1){n=" ... ",c-=5;break}return f=this.buffer.slice(a,c),V$.repeat(" ",t)+s+f+n+`
`+V$.repeat(" ",t+this.position-a+s.length)+"^"};kU.prototype.toString=function(t){var r,s="";return this.name&&(s+='in "'+this.name+'" '),s+="at line "+(this.line+1)+", column "+(this.column+1),t||(r=this.getSnippet(),r&&(s+=`:
`+r)),s};Y$.exports=kU});var Ps=G((EPt,z$)=>{"use strict";var J$=dE(),T6e=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],F6e=["scalar","sequence","mapping"];function N6e(e){var t={};return e!==null&&Object.keys(e).forEach(function(r){e[r].forEach(function(s){t[String(s)]=r})}),t}function O6e(e,t){if(t=t||{},Object.keys(t).forEach(function(r){if(T6e.indexOf(r)===-1)throw new J$('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(r){return r},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=N6e(t.styleAliases||null),F6e.indexOf(this.kind)===-1)throw new J$('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}z$.exports=O6e});var Dd=G((IPt,X$)=>{"use strict";var Z$=Sd(),gx=dE(),L6e=Ps();function QU(e,t,r){var s=[];return e.include.forEach(function(a){r=QU(a,t,r)}),e[t].forEach(function(a){r.forEach(function(n,c){n.tag===a.tag&&n.kind===a.kind&&s.push(c)}),r.push(a)}),r.filter(function(a,n){return s.indexOf(n)===-1})}function M6e(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},t,r;function s(a){e[a.kind][a.tag]=e.fallback[a.tag]=a}for(t=0,r=arguments.length;t<r;t+=1)arguments[t].forEach(s);return e}function mE(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(t){if(t.loadKind&&t.loadKind!=="scalar")throw new gx("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=QU(this,"implicit",[]),this.compiledExplicit=QU(this,"explicit",[]),this.compiledTypeMap=M6e(this.compiledImplicit,this.compiledExplicit)}mE.DEFAULT=null;mE.create=function(){var t,r;switch(arguments.length){case 1:t=mE.DEFAULT,r=arguments[0];break;case 2:t=arguments[0],r=arguments[1];break;default:throw new gx("Wrong number of arguments for Schema.create function")}if(t=Z$.toArray(t),r=Z$.toArray(r),!t.every(function(s){return s instanceof mE}))throw new gx("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!r.every(function(s){return s instanceof L6e}))throw new gx("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new mE({include:t,explicit:r})};X$.exports=mE});var eee=G((CPt,$$)=>{"use strict";var U6e=Ps();$$.exports=new U6e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}})});var ree=G((wPt,tee)=>{"use strict";var _6e=Ps();tee.exports=new _6e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}})});var iee=G((BPt,nee)=>{"use strict";var H6e=Ps();nee.exports=new H6e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}})});var dx=G((vPt,see)=>{"use strict";var j6e=Dd();see.exports=new j6e({explicit:[eee(),ree(),iee()]})});var aee=G((SPt,oee)=>{"use strict";var G6e=Ps();function q6e(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function W6e(){return null}function V6e(e){return e===null}oee.exports=new G6e("tag:yaml.org,2002:null",{kind:"scalar",resolve:q6e,construct:W6e,predicate:V6e,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})});var cee=G((DPt,lee)=>{"use strict";var Y6e=Ps();function K6e(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function J6e(e){return e==="true"||e==="True"||e==="TRUE"}function z6e(e){return Object.prototype.toString.call(e)==="[object Boolean]"}lee.exports=new Y6e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:K6e,construct:J6e,predicate:z6e,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})});var fee=G((bPt,uee)=>{"use strict";var Z6e=Sd(),X6e=Ps();function $6e(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function eGe(e){return 48<=e&&e<=55}function tGe(e){return 48<=e&&e<=57}function rGe(e){if(e===null)return!1;var t=e.length,r=0,s=!1,a;if(!t)return!1;if(a=e[r],(a==="-"||a==="+")&&(a=e[++r]),a==="0"){if(r+1===t)return!0;if(a=e[++r],a==="b"){for(r++;r<t;r++)if(a=e[r],a!=="_"){if(a!=="0"&&a!=="1")return!1;s=!0}return s&&a!=="_"}if(a==="x"){for(r++;r<t;r++)if(a=e[r],a!=="_"){if(!$6e(e.charCodeAt(r)))return!1;s=!0}return s&&a!=="_"}for(;r<t;r++)if(a=e[r],a!=="_"){if(!eGe(e.charCodeAt(r)))return!1;s=!0}return s&&a!=="_"}if(a==="_")return!1;for(;r<t;r++)if(a=e[r],a!=="_"){if(a===":")break;if(!tGe(e.charCodeAt(r)))return!1;s=!0}return!s||a==="_"?!1:a!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(r))}function nGe(e){var t=e,r=1,s,a,n=[];return t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(r=-1),t=t.slice(1),s=t[0]),t==="0"?0:s==="0"?t[1]==="b"?r*parseInt(t.slice(2),2):t[1]==="x"?r*parseInt(t,16):r*parseInt(t,8):t.indexOf(":")!==-1?(t.split(":").forEach(function(c){n.unshift(parseInt(c,10))}),t=0,a=1,n.forEach(function(c){t+=c*a,a*=60}),r*t):r*parseInt(t,10)}function iGe(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Z6e.isNegativeZero(e)}uee.exports=new X6e("tag:yaml.org,2002:int",{kind:"scalar",resolve:rGe,construct:nGe,predicate:iGe,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})});var hee=G((PPt,pee)=>{"use strict";var Aee=Sd(),sGe=Ps(),oGe=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function aGe(e){return!(e===null||!oGe.test(e)||e[e.length-1]==="_")}function lGe(e){var t,r,s,a;return t=e.replace(/_/g,"").toLowerCase(),r=t[0]==="-"?-1:1,a=[],"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:t.indexOf(":")>=0?(t.split(":").forEach(function(n){a.unshift(parseFloat(n,10))}),t=0,s=1,a.forEach(function(n){t+=n*s,s*=60}),r*t):r*parseFloat(t,10)}var cGe=/^[-+]?[0-9]+e/;function uGe(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Aee.isNegativeZero(e))return"-0.0";return r=e.toString(10),cGe.test(r)?r.replace("e",".e"):r}function fGe(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Aee.isNegativeZero(e))}pee.exports=new sGe("tag:yaml.org,2002:float",{kind:"scalar",resolve:aGe,construct:lGe,predicate:fGe,represent:uGe,defaultStyle:"lowercase"})});var RU=G((xPt,gee)=>{"use strict";var AGe=Dd();gee.exports=new AGe({include:[dx()],implicit:[aee(),cee(),fee(),hee()]})});var TU=G((kPt,dee)=>{"use strict";var pGe=Dd();dee.exports=new pGe({include:[RU()]})});var Iee=G((QPt,Eee)=>{"use strict";var hGe=Ps(),mee=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),yee=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function gGe(e){return e===null?!1:mee.exec(e)!==null||yee.exec(e)!==null}function dGe(e){var t,r,s,a,n,c,f,p=0,h=null,E,C,S;if(t=mee.exec(e),t===null&&(t=yee.exec(e)),t===null)throw new Error("Date resolve error");if(r=+t[1],s=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(r,s,a));if(n=+t[4],c=+t[5],f=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}return t[9]&&(E=+t[10],C=+(t[11]||0),h=(E*60+C)*6e4,t[9]==="-"&&(h=-h)),S=new Date(Date.UTC(r,s,a,n,c,f,p)),h&&S.setTime(S.getTime()-h),S}function mGe(e){return e.toISOString()}Eee.exports=new hGe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:gGe,construct:dGe,instanceOf:Date,represent:mGe})});var wee=G((RPt,Cee)=>{"use strict";var yGe=Ps();function EGe(e){return e==="<<"||e===null}Cee.exports=new yGe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:EGe})});var See=G((TPt,vee)=>{"use strict";var bd;try{Bee=Ie,bd=Bee("buffer").Buffer}catch{}var Bee,IGe=Ps(),FU=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function CGe(e){if(e===null)return!1;var t,r,s=0,a=e.length,n=FU;for(r=0;r<a;r++)if(t=n.indexOf(e.charAt(r)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function wGe(e){var t,r,s=e.replace(/[\r\n=]/g,""),a=s.length,n=FU,c=0,f=[];for(t=0;t<a;t++)t%4===0&&t&&(f.push(c>>16&255),f.push(c>>8&255),f.push(c&255)),c=c<<6|n.indexOf(s.charAt(t));return r=a%4*6,r===0?(f.push(c>>16&255),f.push(c>>8&255),f.push(c&255)):r===18?(f.push(c>>10&255),f.push(c>>2&255)):r===12&&f.push(c>>4&255),bd?bd.from?bd.from(f):new bd(f):f}function BGe(e){var t="",r=0,s,a,n=e.length,c=FU;for(s=0;s<n;s++)s%3===0&&s&&(t+=c[r>>18&63],t+=c[r>>12&63],t+=c[r>>6&63],t+=c[r&63]),r=(r<<8)+e[s];return a=n%3,a===0?(t+=c[r>>18&63],t+=c[r>>12&63],t+=c[r>>6&63],t+=c[r&63]):a===2?(t+=c[r>>10&63],t+=c[r>>4&63],t+=c[r<<2&63],t+=c[64]):a===1&&(t+=c[r>>2&63],t+=c[r<<4&63],t+=c[64],t+=c[64]),t}function vGe(e){return bd&&bd.isBuffer(e)}vee.exports=new IGe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:CGe,construct:wGe,predicate:vGe,represent:BGe})});var bee=G((NPt,Dee)=>{"use strict";var SGe=Ps(),DGe=Object.prototype.hasOwnProperty,bGe=Object.prototype.toString;function PGe(e){if(e===null)return!0;var t=[],r,s,a,n,c,f=e;for(r=0,s=f.length;r<s;r+=1){if(a=f[r],c=!1,bGe.call(a)!=="[object Object]")return!1;for(n in a)if(DGe.call(a,n))if(!c)c=!0;else return!1;if(!c)return!1;if(t.indexOf(n)===-1)t.push(n);else return!1}return!0}function xGe(e){return e!==null?e:[]}Dee.exports=new SGe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:PGe,construct:xGe})});var xee=G((OPt,Pee)=>{"use strict";var kGe=Ps(),QGe=Object.prototype.toString;function RGe(e){if(e===null)return!0;var t,r,s,a,n,c=e;for(n=new Array(c.length),t=0,r=c.length;t<r;t+=1){if(s=c[t],QGe.call(s)!=="[object Object]"||(a=Object.keys(s),a.length!==1))return!1;n[t]=[a[0],s[a[0]]]}return!0}function TGe(e){if(e===null)return[];var t,r,s,a,n,c=e;for(n=new Array(c.length),t=0,r=c.length;t<r;t+=1)s=c[t],a=Object.keys(s),n[t]=[a[0],s[a[0]]];return n}Pee.exports=new kGe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:RGe,construct:TGe})});var Qee=G((LPt,kee)=>{"use strict";var FGe=Ps(),NGe=Object.prototype.hasOwnProperty;function OGe(e){if(e===null)return!0;var t,r=e;for(t in r)if(NGe.call(r,t)&&r[t]!==null)return!1;return!0}function LGe(e){return e!==null?e:{}}kee.exports=new FGe("tag:yaml.org,2002:set",{kind:"mapping",resolve:OGe,construct:LGe})});var yE=G((MPt,Ree)=>{"use strict";var MGe=Dd();Ree.exports=new MGe({include:[TU()],implicit:[Iee(),wee()],explicit:[See(),bee(),xee(),Qee()]})});var Fee=G((UPt,Tee)=>{"use strict";var UGe=Ps();function _Ge(){return!0}function HGe(){}function jGe(){return""}function GGe(e){return typeof e>"u"}Tee.exports=new UGe("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:_Ge,construct:HGe,predicate:GGe,represent:jGe})});var Oee=G((_Pt,Nee)=>{"use strict";var qGe=Ps();function WGe(e){if(e===null||e.length===0)return!1;var t=e,r=/\/([gim]*)$/.exec(e),s="";return!(t[0]==="/"&&(r&&(s=r[1]),s.length>3||t[t.length-s.length-1]!=="/"))}function VGe(e){var t=e,r=/\/([gim]*)$/.exec(e),s="";return t[0]==="/"&&(r&&(s=r[1]),t=t.slice(1,t.length-s.length-1)),new RegExp(t,s)}function YGe(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}function KGe(e){return Object.prototype.toString.call(e)==="[object RegExp]"}Nee.exports=new qGe("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:WGe,construct:VGe,predicate:KGe,represent:YGe})});var Uee=G((HPt,Mee)=>{"use strict";var mx;try{Lee=Ie,mx=Lee("esprima")}catch{typeof window<"u"&&(mx=window.esprima)}var Lee,JGe=Ps();function zGe(e){if(e===null)return!1;try{var t="("+e+")",r=mx.parse(t,{range:!0});return!(r.type!=="Program"||r.body.length!==1||r.body[0].type!=="ExpressionStatement"||r.body[0].expression.type!=="ArrowFunctionExpression"&&r.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function ZGe(e){var t="("+e+")",r=mx.parse(t,{range:!0}),s=[],a;if(r.type!=="Program"||r.body.length!==1||r.body[0].type!=="ExpressionStatement"||r.body[0].expression.type!=="ArrowFunctionExpression"&&r.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return r.body[0].expression.params.forEach(function(n){s.push(n.name)}),a=r.body[0].expression.body.range,r.body[0].expression.body.type==="BlockStatement"?new Function(s,t.slice(a[0]+1,a[1]-1)):new Function(s,"return "+t.slice(a[0],a[1]))}function XGe(e){return e.toString()}function $Ge(e){return Object.prototype.toString.call(e)==="[object Function]"}Mee.exports=new JGe("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:zGe,construct:ZGe,predicate:$Ge,represent:XGe})});var NB=G((GPt,Hee)=>{"use strict";var _ee=Dd();Hee.exports=_ee.DEFAULT=new _ee({include:[yE()],explicit:[Fee(),Oee(),Uee()]})});var ote=G((qPt,OB)=>{"use strict";var Cp=Sd(),Kee=dE(),e5e=K$(),Jee=yE(),t5e=NB(),r0=Object.prototype.hasOwnProperty,yx=1,zee=2,Zee=3,Ex=4,NU=1,r5e=2,jee=3,n5e=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,i5e=/[\x85\u2028\u2029]/,s5e=/[,\[\]\{\}]/,Xee=/^(?:!|!!|![a-z\-]+!)$/i,$ee=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Gee(e){return Object.prototype.toString.call(e)}function qf(e){return e===10||e===13}function xd(e){return e===9||e===32}function ll(e){return e===9||e===32||e===10||e===13}function EE(e){return e===44||e===91||e===93||e===123||e===125}function o5e(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}function a5e(e){return e===120?2:e===117?4:e===85?8:0}function l5e(e){return 48<=e&&e<=57?e-48:-1}function qee(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function c5e(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var ete=new Array(256),tte=new Array(256);for(Pd=0;Pd<256;Pd++)ete[Pd]=qee(Pd)?1:0,tte[Pd]=qee(Pd);var Pd;function u5e(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||t5e,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function rte(e,t){return new Kee(t,new e5e(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function Tr(e,t){throw rte(e,t)}function Ix(e,t){e.onWarning&&e.onWarning.call(null,rte(e,t))}var Wee={YAML:function(t,r,s){var a,n,c;t.version!==null&&Tr(t,"duplication of %YAML directive"),s.length!==1&&Tr(t,"YAML directive accepts exactly one argument"),a=/^([0-9]+)\.([0-9]+)$/.exec(s[0]),a===null&&Tr(t,"ill-formed argument of the YAML directive"),n=parseInt(a[1],10),c=parseInt(a[2],10),n!==1&&Tr(t,"unacceptable YAML version of the document"),t.version=s[0],t.checkLineBreaks=c<2,c!==1&&c!==2&&Ix(t,"unsupported YAML version of the document")},TAG:function(t,r,s){var a,n;s.length!==2&&Tr(t,"TAG directive accepts exactly two arguments"),a=s[0],n=s[1],Xee.test(a)||Tr(t,"ill-formed tag handle (first argument) of the TAG directive"),r0.call(t.tagMap,a)&&Tr(t,'there is a previously declared suffix for "'+a+'" tag handle'),$ee.test(n)||Tr(t,"ill-formed tag prefix (second argument) of the TAG directive"),t.tagMap[a]=n}};function t0(e,t,r,s){var a,n,c,f;if(t<r){if(f=e.input.slice(t,r),s)for(a=0,n=f.length;a<n;a+=1)c=f.charCodeAt(a),c===9||32<=c&&c<=1114111||Tr(e,"expected valid JSON character");else n5e.test(f)&&Tr(e,"the stream contains non-printable characters");e.result+=f}}function Vee(e,t,r,s){var a,n,c,f;for(Cp.isObject(r)||Tr(e,"cannot merge mappings; the provided source object is unacceptable"),a=Object.keys(r),c=0,f=a.length;c<f;c+=1)n=a[c],r0.call(t,n)||(t[n]=r[n],s[n]=!0)}function IE(e,t,r,s,a,n,c,f){var p,h;if(Array.isArray(a))for(a=Array.prototype.slice.call(a),p=0,h=a.length;p<h;p+=1)Array.isArray(a[p])&&Tr(e,"nested arrays are not supported inside keys"),typeof a=="object"&&Gee(a[p])==="[object Object]"&&(a[p]="[object Object]");if(typeof a=="object"&&Gee(a)==="[object Object]"&&(a="[object Object]"),a=String(a),t===null&&(t={}),s==="tag:yaml.org,2002:merge")if(Array.isArray(n))for(p=0,h=n.length;p<h;p+=1)Vee(e,t,n[p],r);else Vee(e,t,n,r);else!e.json&&!r0.call(r,a)&&r0.call(t,a)&&(e.line=c||e.line,e.position=f||e.position,Tr(e,"duplicated mapping key")),t[a]=n,delete r[a];return t}function OU(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):Tr(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function ls(e,t,r){for(var s=0,a=e.input.charCodeAt(e.position);a!==0;){for(;xd(a);)a=e.input.charCodeAt(++e.position);if(t&&a===35)do a=e.input.charCodeAt(++e.position);while(a!==10&&a!==13&&a!==0);if(qf(a))for(OU(e),a=e.input.charCodeAt(e.position),s++,e.lineIndent=0;a===32;)e.lineIndent++,a=e.input.charCodeAt(++e.position);else break}return r!==-1&&s!==0&&e.lineIndent<r&&Ix(e,"deficient indentation"),s}function Cx(e){var t=e.position,r;return r=e.input.charCodeAt(t),!!((r===45||r===46)&&r===e.input.charCodeAt(t+1)&&r===e.input.charCodeAt(t+2)&&(t+=3,r=e.input.charCodeAt(t),r===0||ll(r)))}function LU(e,t){t===1?e.result+=" ":t>1&&(e.result+=Cp.repeat(`
`,t-1))}function f5e(e,t,r){var s,a,n,c,f,p,h,E,C=e.kind,S=e.result,x;if(x=e.input.charCodeAt(e.position),ll(x)||EE(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(a=e.input.charCodeAt(e.position+1),ll(a)||r&&EE(a)))return!1;for(e.kind="scalar",e.result="",n=c=e.position,f=!1;x!==0;){if(x===58){if(a=e.input.charCodeAt(e.position+1),ll(a)||r&&EE(a))break}else if(x===35){if(s=e.input.charCodeAt(e.position-1),ll(s))break}else{if(e.position===e.lineStart&&Cx(e)||r&&EE(x))break;if(qf(x))if(p=e.line,h=e.lineStart,E=e.lineIndent,ls(e,!1,-1),e.lineIndent>=t){f=!0,x=e.input.charCodeAt(e.position);continue}else{e.position=c,e.line=p,e.lineStart=h,e.lineIndent=E;break}}f&&(t0(e,n,c,!1),LU(e,e.line-p),n=c=e.position,f=!1),xd(x)||(c=e.position+1),x=e.input.charCodeAt(++e.position)}return t0(e,n,c,!1),e.result?!0:(e.kind=C,e.result=S,!1)}function A5e(e,t){var r,s,a;if(r=e.input.charCodeAt(e.position),r!==39)return!1;for(e.kind="scalar",e.result="",e.position++,s=a=e.position;(r=e.input.charCodeAt(e.position))!==0;)if(r===39)if(t0(e,s,e.position,!0),r=e.input.charCodeAt(++e.position),r===39)s=e.position,e.position++,a=e.position;else return!0;else qf(r)?(t0(e,s,a,!0),LU(e,ls(e,!1,t)),s=a=e.position):e.position===e.lineStart&&Cx(e)?Tr(e,"unexpected end of the document within a single quoted scalar"):(e.position++,a=e.position);Tr(e,"unexpected end of the stream within a single quoted scalar")}function p5e(e,t){var r,s,a,n,c,f;if(f=e.input.charCodeAt(e.position),f!==34)return!1;for(e.kind="scalar",e.result="",e.position++,r=s=e.position;(f=e.input.charCodeAt(e.position))!==0;){if(f===34)return t0(e,r,e.position,!0),e.position++,!0;if(f===92){if(t0(e,r,e.position,!0),f=e.input.charCodeAt(++e.position),qf(f))ls(e,!1,t);else if(f<256&&ete[f])e.result+=tte[f],e.position++;else if((c=a5e(f))>0){for(a=c,n=0;a>0;a--)f=e.input.charCodeAt(++e.position),(c=o5e(f))>=0?n=(n<<4)+c:Tr(e,"expected hexadecimal character");e.result+=c5e(n),e.position++}else Tr(e,"unknown escape sequence");r=s=e.position}else qf(f)?(t0(e,r,s,!0),LU(e,ls(e,!1,t)),r=s=e.position):e.position===e.lineStart&&Cx(e)?Tr(e,"unexpected end of the document within a double quoted scalar"):(e.position++,s=e.position)}Tr(e,"unexpected end of the stream within a double quoted scalar")}function h5e(e,t){var r=!0,s,a=e.tag,n,c=e.anchor,f,p,h,E,C,S={},x,I,T,O;if(O=e.input.charCodeAt(e.position),O===91)p=93,C=!1,n=[];else if(O===123)p=125,C=!0,n={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=n),O=e.input.charCodeAt(++e.position);O!==0;){if(ls(e,!0,t),O=e.input.charCodeAt(e.position),O===p)return e.position++,e.tag=a,e.anchor=c,e.kind=C?"mapping":"sequence",e.result=n,!0;r||Tr(e,"missed comma between flow collection entries"),I=x=T=null,h=E=!1,O===63&&(f=e.input.charCodeAt(e.position+1),ll(f)&&(h=E=!0,e.position++,ls(e,!0,t))),s=e.line,CE(e,t,yx,!1,!0),I=e.tag,x=e.result,ls(e,!0,t),O=e.input.charCodeAt(e.position),(E||e.line===s)&&O===58&&(h=!0,O=e.input.charCodeAt(++e.position),ls(e,!0,t),CE(e,t,yx,!1,!0),T=e.result),C?IE(e,n,S,I,x,T):h?n.push(IE(e,null,S,I,x,T)):n.push(x),ls(e,!0,t),O=e.input.charCodeAt(e.position),O===44?(r=!0,O=e.input.charCodeAt(++e.position)):r=!1}Tr(e,"unexpected end of the stream within a flow collection")}function g5e(e,t){var r,s,a=NU,n=!1,c=!1,f=t,p=0,h=!1,E,C;if(C=e.input.charCodeAt(e.position),C===124)s=!1;else if(C===62)s=!0;else return!1;for(e.kind="scalar",e.result="";C!==0;)if(C=e.input.charCodeAt(++e.position),C===43||C===45)NU===a?a=C===43?jee:r5e:Tr(e,"repeat of a chomping mode identifier");else if((E=l5e(C))>=0)E===0?Tr(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?Tr(e,"repeat of an indentation width identifier"):(f=t+E-1,c=!0);else break;if(xd(C)){do C=e.input.charCodeAt(++e.position);while(xd(C));if(C===35)do C=e.input.charCodeAt(++e.position);while(!qf(C)&&C!==0)}for(;C!==0;){for(OU(e),e.lineIndent=0,C=e.input.charCodeAt(e.position);(!c||e.lineIndent<f)&&C===32;)e.lineIndent++,C=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>f&&(f=e.lineIndent),qf(C)){p++;continue}if(e.lineIndent<f){a===jee?e.result+=Cp.repeat(`
`,n?1+p:p):a===NU&&n&&(e.result+=`
`);break}for(s?xd(C)?(h=!0,e.result+=Cp.repeat(`
`,n?1+p:p)):h?(h=!1,e.result+=Cp.repeat(`
`,p+1)):p===0?n&&(e.result+=" "):e.result+=Cp.repeat(`
`,p):e.result+=Cp.repeat(`
`,n?1+p:p),n=!0,c=!0,p=0,r=e.position;!qf(C)&&C!==0;)C=e.input.charCodeAt(++e.position);t0(e,r,e.position,!1)}return!0}function Yee(e,t){var r,s=e.tag,a=e.anchor,n=[],c,f=!1,p;for(e.anchor!==null&&(e.anchorMap[e.anchor]=n),p=e.input.charCodeAt(e.position);p!==0&&!(p!==45||(c=e.input.charCodeAt(e.position+1),!ll(c)));){if(f=!0,e.position++,ls(e,!0,-1)&&e.lineIndent<=t){n.push(null),p=e.input.charCodeAt(e.position);continue}if(r=e.line,CE(e,t,Zee,!1,!0),n.push(e.result),ls(e,!0,-1),p=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&p!==0)Tr(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return f?(e.tag=s,e.anchor=a,e.kind="sequence",e.result=n,!0):!1}function d5e(e,t,r){var s,a,n,c,f=e.tag,p=e.anchor,h={},E={},C=null,S=null,x=null,I=!1,T=!1,O;for(e.anchor!==null&&(e.anchorMap[e.anchor]=h),O=e.input.charCodeAt(e.position);O!==0;){if(s=e.input.charCodeAt(e.position+1),n=e.line,c=e.position,(O===63||O===58)&&ll(s))O===63?(I&&(IE(e,h,E,C,S,null),C=S=x=null),T=!0,I=!0,a=!0):I?(I=!1,a=!0):Tr(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,O=s;else if(CE(e,r,zee,!1,!0))if(e.line===n){for(O=e.input.charCodeAt(e.position);xd(O);)O=e.input.charCodeAt(++e.position);if(O===58)O=e.input.charCodeAt(++e.position),ll(O)||Tr(e,"a whitespace character is expected after the key-value separator within a block mapping"),I&&(IE(e,h,E,C,S,null),C=S=x=null),T=!0,I=!1,a=!1,C=e.tag,S=e.result;else if(T)Tr(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=f,e.anchor=p,!0}else if(T)Tr(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=f,e.anchor=p,!0;else break;if((e.line===n||e.lineIndent>t)&&(CE(e,t,Ex,!0,a)&&(I?S=e.result:x=e.result),I||(IE(e,h,E,C,S,x,n,c),C=S=x=null),ls(e,!0,-1),O=e.input.charCodeAt(e.position)),e.lineIndent>t&&O!==0)Tr(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return I&&IE(e,h,E,C,S,null),T&&(e.tag=f,e.anchor=p,e.kind="mapping",e.result=h),T}function m5e(e){var t,r=!1,s=!1,a,n,c;if(c=e.input.charCodeAt(e.position),c!==33)return!1;if(e.tag!==null&&Tr(e,"duplication of a tag property"),c=e.input.charCodeAt(++e.position),c===60?(r=!0,c=e.input.charCodeAt(++e.position)):c===33?(s=!0,a="!!",c=e.input.charCodeAt(++e.position)):a="!",t=e.position,r){do c=e.input.charCodeAt(++e.position);while(c!==0&&c!==62);e.position<e.length?(n=e.input.slice(t,e.position),c=e.input.charCodeAt(++e.position)):Tr(e,"unexpected end of the stream within a verbatim tag")}else{for(;c!==0&&!ll(c);)c===33&&(s?Tr(e,"tag suffix cannot contain exclamation marks"):(a=e.input.slice(t-1,e.position+1),Xee.test(a)||Tr(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),c=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),s5e.test(n)&&Tr(e,"tag suffix cannot contain flow indicator characters")}return n&&!$ee.test(n)&&Tr(e,"tag name cannot contain such characters: "+n),r?e.tag=n:r0.call(e.tagMap,a)?e.tag=e.tagMap[a]+n:a==="!"?e.tag="!"+n:a==="!!"?e.tag="tag:yaml.org,2002:"+n:Tr(e,'undeclared tag handle "'+a+'"'),!0}function y5e(e){var t,r;if(r=e.input.charCodeAt(e.position),r!==38)return!1;for(e.anchor!==null&&Tr(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!ll(r)&&!EE(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&Tr(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function E5e(e){var t,r,s;if(s=e.input.charCodeAt(e.position),s!==42)return!1;for(s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!ll(s)&&!EE(s);)s=e.input.charCodeAt(++e.position);return e.position===t&&Tr(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),r0.call(e.anchorMap,r)||Tr(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],ls(e,!0,-1),!0}function CE(e,t,r,s,a){var n,c,f,p=1,h=!1,E=!1,C,S,x,I,T;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,n=c=f=Ex===r||Zee===r,s&&ls(e,!0,-1)&&(h=!0,e.lineIndent>t?p=1:e.lineIndent===t?p=0:e.lineIndent<t&&(p=-1)),p===1)for(;m5e(e)||y5e(e);)ls(e,!0,-1)?(h=!0,f=n,e.lineIndent>t?p=1:e.lineIndent===t?p=0:e.lineIndent<t&&(p=-1)):f=!1;if(f&&(f=h||a),(p===1||Ex===r)&&(yx===r||zee===r?I=t:I=t+1,T=e.position-e.lineStart,p===1?f&&(Yee(e,T)||d5e(e,T,I))||h5e(e,I)?E=!0:(c&&g5e(e,I)||A5e(e,I)||p5e(e,I)?E=!0:E5e(e)?(E=!0,(e.tag!==null||e.anchor!==null)&&Tr(e,"alias node should not have any properties")):f5e(e,I,yx===r)&&(E=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):p===0&&(E=f&&Yee(e,T))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&Tr(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),C=0,S=e.implicitTypes.length;C<S;C+=1)if(x=e.implicitTypes[C],x.resolve(e.result)){e.result=x.construct(e.result),e.tag=x.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else r0.call(e.typeMap[e.kind||"fallback"],e.tag)?(x=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&x.kind!==e.kind&&Tr(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+x.kind+'", not "'+e.kind+'"'),x.resolve(e.result)?(e.result=x.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):Tr(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):Tr(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||E}function I5e(e){var t=e.position,r,s,a,n=!1,c;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(c=e.input.charCodeAt(e.position))!==0&&(ls(e,!0,-1),c=e.input.charCodeAt(e.position),!(e.lineIndent>0||c!==37));){for(n=!0,c=e.input.charCodeAt(++e.position),r=e.position;c!==0&&!ll(c);)c=e.input.charCodeAt(++e.position);for(s=e.input.slice(r,e.position),a=[],s.length<1&&Tr(e,"directive name must not be less than one character in length");c!==0;){for(;xd(c);)c=e.input.charCodeAt(++e.position);if(c===35){do c=e.input.charCodeAt(++e.position);while(c!==0&&!qf(c));break}if(qf(c))break;for(r=e.position;c!==0&&!ll(c);)c=e.input.charCodeAt(++e.position);a.push(e.input.slice(r,e.position))}c!==0&&OU(e),r0.call(Wee,s)?Wee[s](e,s,a):Ix(e,'unknown document directive "'+s+'"')}if(ls(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ls(e,!0,-1)):n&&Tr(e,"directives end mark is expected"),CE(e,e.lineIndent-1,Ex,!1,!0),ls(e,!0,-1),e.checkLineBreaks&&i5e.test(e.input.slice(t,e.position))&&Ix(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Cx(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ls(e,!0,-1));return}if(e.position<e.length-1)Tr(e,"end of the stream or a document separator is expected");else return}function nte(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new u5e(e,t),s=e.indexOf("\0");for(s!==-1&&(r.position=s,Tr(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)I5e(r);return r.documents}function ite(e,t,r){t!==null&&typeof t=="object"&&typeof r>"u"&&(r=t,t=null);var s=nte(e,r);if(typeof t!="function")return s;for(var a=0,n=s.length;a<n;a+=1)t(s[a])}function ste(e,t){var r=nte(e,t);if(r.length!==0){if(r.length===1)return r[0];throw new Kee("expected a single document in the stream, but found more")}}function C5e(e,t,r){return typeof t=="object"&&t!==null&&typeof r>"u"&&(r=t,t=null),ite(e,t,Cp.extend({schema:Jee},r))}function w5e(e,t){return ste(e,Cp.extend({schema:Jee},t))}OB.exports.loadAll=ite;OB.exports.load=ste;OB.exports.safeLoadAll=C5e;OB.exports.safeLoad=w5e});var xte=G((WPt,HU)=>{"use strict";var MB=Sd(),UB=dE(),B5e=NB(),v5e=yE(),hte=Object.prototype.toString,gte=Object.prototype.hasOwnProperty,S5e=9,LB=10,D5e=13,b5e=32,P5e=33,x5e=34,dte=35,k5e=37,Q5e=38,R5e=39,T5e=42,mte=44,F5e=45,yte=58,N5e=61,O5e=62,L5e=63,M5e=64,Ete=91,Ite=93,U5e=96,Cte=123,_5e=124,wte=125,Wo={};Wo[0]="\\0";Wo[7]="\\a";Wo[8]="\\b";Wo[9]="\\t";Wo[10]="\\n";Wo[11]="\\v";Wo[12]="\\f";Wo[13]="\\r";Wo[27]="\\e";Wo[34]='\\"';Wo[92]="\\\\";Wo[133]="\\N";Wo[160]="\\_";Wo[8232]="\\L";Wo[8233]="\\P";var H5e=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function j5e(e,t){var r,s,a,n,c,f,p;if(t===null)return{};for(r={},s=Object.keys(t),a=0,n=s.length;a<n;a+=1)c=s[a],f=String(t[c]),c.slice(0,2)==="!!"&&(c="tag:yaml.org,2002:"+c.slice(2)),p=e.compiledTypeMap.fallback[c],p&&gte.call(p.styleAliases,f)&&(f=p.styleAliases[f]),r[c]=f;return r}function ate(e){var t,r,s;if(t=e.toString(16).toUpperCase(),e<=255)r="x",s=2;else if(e<=65535)r="u",s=4;else if(e<=4294967295)r="U",s=8;else throw new UB("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+MB.repeat("0",s-t.length)+t}function G5e(e){this.schema=e.schema||B5e,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=MB.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=j5e(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function lte(e,t){for(var r=MB.repeat(" ",t),s=0,a=-1,n="",c,f=e.length;s<f;)a=e.indexOf(`
`,s),a===-1?(c=e.slice(s),s=f):(c=e.slice(s,a+1),s=a+1),c.length&&c!==`
`&&(n+=r),n+=c;return n}function MU(e,t){return`
`+MB.repeat(" ",e.indent*t)}function q5e(e,t){var r,s,a;for(r=0,s=e.implicitTypes.length;r<s;r+=1)if(a=e.implicitTypes[r],a.resolve(t))return!0;return!1}function _U(e){return e===b5e||e===S5e}function wE(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function W5e(e){return wE(e)&&!_U(e)&&e!==65279&&e!==D5e&&e!==LB}function cte(e,t){return wE(e)&&e!==65279&&e!==mte&&e!==Ete&&e!==Ite&&e!==Cte&&e!==wte&&e!==yte&&(e!==dte||t&&W5e(t))}function V5e(e){return wE(e)&&e!==65279&&!_U(e)&&e!==F5e&&e!==L5e&&e!==yte&&e!==mte&&e!==Ete&&e!==Ite&&e!==Cte&&e!==wte&&e!==dte&&e!==Q5e&&e!==T5e&&e!==P5e&&e!==_5e&&e!==N5e&&e!==O5e&&e!==R5e&&e!==x5e&&e!==k5e&&e!==M5e&&e!==U5e}function Bte(e){var t=/^\n* /;return t.test(e)}var vte=1,Ste=2,Dte=3,bte=4,wx=5;function Y5e(e,t,r,s,a){var n,c,f,p=!1,h=!1,E=s!==-1,C=-1,S=V5e(e.charCodeAt(0))&&!_U(e.charCodeAt(e.length-1));if(t)for(n=0;n<e.length;n++){if(c=e.charCodeAt(n),!wE(c))return wx;f=n>0?e.charCodeAt(n-1):null,S=S&&cte(c,f)}else{for(n=0;n<e.length;n++){if(c=e.charCodeAt(n),c===LB)p=!0,E&&(h=h||n-C-1>s&&e[C+1]!==" ",C=n);else if(!wE(c))return wx;f=n>0?e.charCodeAt(n-1):null,S=S&&cte(c,f)}h=h||E&&n-C-1>s&&e[C+1]!==" "}return!p&&!h?S&&!a(e)?vte:Ste:r>9&&Bte(e)?wx:h?bte:Dte}function K5e(e,t,r,s){e.dump=function(){if(t.length===0)return"''";if(!e.noCompatMode&&H5e.indexOf(t)!==-1)return"'"+t+"'";var a=e.indent*Math.max(1,r),n=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),c=s||e.flowLevel>-1&&r>=e.flowLevel;function f(p){return q5e(e,p)}switch(Y5e(t,c,e.indent,n,f)){case vte:return t;case Ste:return"'"+t.replace(/'/g,"''")+"'";case Dte:return"|"+ute(t,e.indent)+fte(lte(t,a));case bte:return">"+ute(t,e.indent)+fte(lte(J5e(t,n),a));case wx:return'"'+z5e(t,n)+'"';default:throw new UB("impossible error: invalid scalar style")}}()}function ute(e,t){var r=Bte(e)?String(t):"",s=e[e.length-1]===`
`,a=s&&(e[e.length-2]===`
`||e===`
`),n=a?"+":s?"":"-";return r+n+`
`}function fte(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function J5e(e,t){for(var r=/(\n+)([^\n]*)/g,s=function(){var h=e.indexOf(`
`);return h=h!==-1?h:e.length,r.lastIndex=h,Ate(e.slice(0,h),t)}(),a=e[0]===`
`||e[0]===" ",n,c;c=r.exec(e);){var f=c[1],p=c[2];n=p[0]===" ",s+=f+(!a&&!n&&p!==""?`
`:"")+Ate(p,t),a=n}return s}function Ate(e,t){if(e===""||e[0]===" ")return e;for(var r=/ [^ ]/g,s,a=0,n,c=0,f=0,p="";s=r.exec(e);)f=s.index,f-a>t&&(n=c>a?c:f,p+=`
`+e.slice(a,n),a=n+1),c=f;return p+=`
`,e.length-a>t&&c>a?p+=e.slice(a,c)+`
`+e.slice(c+1):p+=e.slice(a),p.slice(1)}function z5e(e){for(var t="",r,s,a,n=0;n<e.length;n++){if(r=e.charCodeAt(n),r>=55296&&r<=56319&&(s=e.charCodeAt(n+1),s>=56320&&s<=57343)){t+=ate((r-55296)*1024+s-56320+65536),n++;continue}a=Wo[r],t+=!a&&wE(r)?e[n]:a||ate(r)}return t}function Z5e(e,t,r){var s="",a=e.tag,n,c;for(n=0,c=r.length;n<c;n+=1)kd(e,t,r[n],!1,!1)&&(n!==0&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump);e.tag=a,e.dump="["+s+"]"}function X5e(e,t,r,s){var a="",n=e.tag,c,f;for(c=0,f=r.length;c<f;c+=1)kd(e,t+1,r[c],!0,!0)&&((!s||c!==0)&&(a+=MU(e,t)),e.dump&&LB===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump);e.tag=n,e.dump=a||"[]"}function $5e(e,t,r){var s="",a=e.tag,n=Object.keys(r),c,f,p,h,E;for(c=0,f=n.length;c<f;c+=1)E="",c!==0&&(E+=", "),e.condenseFlow&&(E+='"'),p=n[c],h=r[p],kd(e,t,p,!1,!1)&&(e.dump.length>1024&&(E+="? "),E+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),kd(e,t,h,!1,!1)&&(E+=e.dump,s+=E));e.tag=a,e.dump="{"+s+"}"}function eqe(e,t,r,s){var a="",n=e.tag,c=Object.keys(r),f,p,h,E,C,S;if(e.sortKeys===!0)c.sort();else if(typeof e.sortKeys=="function")c.sort(e.sortKeys);else if(e.sortKeys)throw new UB("sortKeys must be a boolean or a function");for(f=0,p=c.length;f<p;f+=1)S="",(!s||f!==0)&&(S+=MU(e,t)),h=c[f],E=r[h],kd(e,t+1,h,!0,!0,!0)&&(C=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,C&&(e.dump&&LB===e.dump.charCodeAt(0)?S+="?":S+="? "),S+=e.dump,C&&(S+=MU(e,t)),kd(e,t+1,E,!0,C)&&(e.dump&&LB===e.dump.charCodeAt(0)?S+=":":S+=": ",S+=e.dump,a+=S));e.tag=n,e.dump=a||"{}"}function pte(e,t,r){var s,a,n,c,f,p;for(a=r?e.explicitTypes:e.implicitTypes,n=0,c=a.length;n<c;n+=1)if(f=a[n],(f.instanceOf||f.predicate)&&(!f.instanceOf||typeof t=="object"&&t instanceof f.instanceOf)&&(!f.predicate||f.predicate(t))){if(e.tag=r?f.tag:"?",f.represent){if(p=e.styleMap[f.tag]||f.defaultStyle,hte.call(f.represent)==="[object Function]")s=f.represent(t,p);else if(gte.call(f.represent,p))s=f.represent[p](t,p);else throw new UB("!<"+f.tag+'> tag resolver accepts not "'+p+'" style');e.dump=s}return!0}return!1}function kd(e,t,r,s,a,n){e.tag=null,e.dump=r,pte(e,r,!1)||pte(e,r,!0);var c=hte.call(e.dump);s&&(s=e.flowLevel<0||e.flowLevel>t);var f=c==="[object Object]"||c==="[object Array]",p,h;if(f&&(p=e.duplicates.indexOf(r),h=p!==-1),(e.tag!==null&&e.tag!=="?"||h||e.indent!==2&&t>0)&&(a=!1),h&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(f&&h&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),c==="[object Object]")s&&Object.keys(e.dump).length!==0?(eqe(e,t,e.dump,a),h&&(e.dump="&ref_"+p+e.dump)):($5e(e,t,e.dump),h&&(e.dump="&ref_"+p+" "+e.dump));else if(c==="[object Array]"){var E=e.noArrayIndent&&t>0?t-1:t;s&&e.dump.length!==0?(X5e(e,E,e.dump,a),h&&(e.dump="&ref_"+p+e.dump)):(Z5e(e,E,e.dump),h&&(e.dump="&ref_"+p+" "+e.dump))}else if(c==="[object String]")e.tag!=="?"&&K5e(e,e.dump,t,n);else{if(e.skipInvalid)return!1;throw new UB("unacceptable kind of an object to dump "+c)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function tqe(e,t){var r=[],s=[],a,n;for(UU(e,r,s),a=0,n=s.length;a<n;a+=1)t.duplicates.push(r[s[a]]);t.usedDuplicates=new Array(n)}function UU(e,t,r){var s,a,n;if(e!==null&&typeof e=="object")if(a=t.indexOf(e),a!==-1)r.indexOf(a)===-1&&r.push(a);else if(t.push(e),Array.isArray(e))for(a=0,n=e.length;a<n;a+=1)UU(e[a],t,r);else for(s=Object.keys(e),a=0,n=s.length;a<n;a+=1)UU(e[s[a]],t,r)}function Pte(e,t){t=t||{};var r=new G5e(t);return r.noRefs||tqe(e,r),kd(r,0,e,!0,!0)?r.dump+`
`:""}function rqe(e,t){return Pte(e,MB.extend({schema:v5e},t))}HU.exports.dump=Pte;HU.exports.safeDump=rqe});var Qte=G((VPt,Wi)=>{"use strict";var Bx=ote(),kte=xte();function vx(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}Wi.exports.Type=Ps();Wi.exports.Schema=Dd();Wi.exports.FAILSAFE_SCHEMA=dx();Wi.exports.JSON_SCHEMA=RU();Wi.exports.CORE_SCHEMA=TU();Wi.exports.DEFAULT_SAFE_SCHEMA=yE();Wi.exports.DEFAULT_FULL_SCHEMA=NB();Wi.exports.load=Bx.load;Wi.exports.loadAll=Bx.loadAll;Wi.exports.safeLoad=Bx.safeLoad;Wi.exports.safeLoadAll=Bx.safeLoadAll;Wi.exports.dump=kte.dump;Wi.exports.safeDump=kte.safeDump;Wi.exports.YAMLException=dE();Wi.exports.MINIMAL_SCHEMA=dx();Wi.exports.SAFE_SCHEMA=yE();Wi.exports.DEFAULT_SCHEMA=NB();Wi.exports.scan=vx("scan");Wi.exports.parse=vx("parse");Wi.exports.compose=vx("compose");Wi.exports.addConstructor=vx("addConstructor")});var Tte=G((YPt,Rte)=>{"use strict";var nqe=Qte();Rte.exports=nqe});var Nte=G((KPt,Fte)=>{"use strict";function iqe(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function Qd(e,t,r,s){this.message=e,this.expected=t,this.found=r,this.location=s,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Qd)}iqe(Qd,Error);Qd.buildMessage=function(e,t){var r={literal:function(h){return'"'+a(h.text)+'"'},class:function(h){var E="",C;for(C=0;C<h.parts.length;C++)E+=h.parts[C]instanceof Array?n(h.parts[C][0])+"-"+n(h.parts[C][1]):n(h.parts[C]);return"["+(h.inverted?"^":"")+E+"]"},any:function(h){return"any character"},end:function(h){return"end of input"},other:function(h){return h.description}};function s(h){return h.charCodeAt(0).toString(16).toUpperCase()}function a(h){return h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function n(h){return h.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function c(h){return r[h.type](h)}function f(h){var E=new Array(h.length),C,S;for(C=0;C<h.length;C++)E[C]=c(h[C]);if(E.sort(),E.length>0){for(C=1,S=1;C<E.length;C++)E[C-1]!==E[C]&&(E[S]=E[C],S++);E.length=S}switch(E.length){case 1:return E[0];case 2:return E[0]+" or "+E[1];default:return E.slice(0,-1).join(", ")+", or "+E[E.length-1]}}function p(h){return h?'"'+a(h)+'"':"end of input"}return"Expected "+f(e)+" but "+p(t)+" found."};function sqe(e,t){t=t!==void 0?t:{};var r={},s={Start:cc},a=cc,n=function(ee){return[].concat(...ee)},c="-",f=mn("-",!1),p=function(ee){return ee},h=function(ee){return Object.assign({},...ee)},E="#",C=mn("#",!1),S=uu(),x=function(){return{}},I=":",T=mn(":",!1),O=function(ee,ye){return{[ee]:ye}},U=",",Y=mn(",",!1),te=function(ee,ye){return ye},ie=function(ee,ye,Oe){return Object.assign({},...[ee].concat(ye).map(mt=>({[mt]:Oe})))},ue=function(ee){return ee},ae=function(ee){return ee},de=Ga("correct indentation"),Ae=" ",Ce=mn(" ",!1),Ee=function(ee){return ee.length===lr*St},g=function(ee){return ee.length===(lr+1)*St},Se=function(){return lr++,!0},Be=function(){return lr--,!0},me=function(){return Aa()},ce=Ga("pseudostring"),X=/^[^\r\n\t ?:,\][{}#&*!|>'"%@`\-]/,De=Zn(["\r",`
`,"	"," ","?",":",",","]","[","{","}","#","&","*","!","|",">","'",'"',"%","@","`","-"],!0,!1),Qe=/^[^\r\n\t ,\][{}:#"']/,it=Zn(["\r",`
`,"	"," ",",","]","[","{","}",":","#",'"',"'"],!0,!1),_=function(){return Aa().replace(/^ *| *$/g,"")},tt="--",Ne=mn("--",!1),ke=/^[a-zA-Z\/0-9]/,be=Zn([["a","z"],["A","Z"],"/",["0","9"]],!1,!1),je=/^[^\r\n\t :,]/,Re=Zn(["\r",`
`,"	"," ",":",","],!0,!1),ct="null",Me=mn("null",!1),P=function(){return null},w="true",b=mn("true",!1),y=function(){return!0},F="false",z=mn("false",!1),Z=function(){return!1},$=Ga("string"),se='"',xe=mn('"',!1),Fe=function(){return""},ut=function(ee){return ee},Ct=function(ee){return ee.join("")},qt=/^[^"\\\0-\x1F\x7F]/,ir=Zn(['"',"\\",["\0",""],"\x7F"],!0,!1),Pt='\\"',dn=mn('\\"',!1),Pr=function(){return'"'},Ir="\\\\",Or=mn("\\\\",!1),on=function(){return"\\"},li="\\/",So=mn("\\/",!1),ns=function(){return"/"},so="\\b",Do=mn("\\b",!1),ji=function(){return"\b"},oo="\\f",bo=mn("\\f",!1),RA=function(){return"\f"},hf="\\n",hh=mn("\\n",!1),gh=function(){return`
`},ao="\\r",Gn=mn("\\r",!1),Ns=function(){return"\r"},lo="\\t",iu=mn("\\t",!1),su=function(){return"	"},ou="\\u",TA=mn("\\u",!1),FA=function(ee,ye,Oe,mt){return String.fromCharCode(parseInt(`0x${ee}${ye}${Oe}${mt}`))},ua=/^[0-9a-fA-F]/,fa=Zn([["0","9"],["a","f"],["A","F"]],!1,!1),NA=Ga("blank space"),gr=/^[ \t]/,Po=Zn([" ","	"],!1,!1),Ue=Ga("white space"),au=/^[ \t\n\r]/,Cr=Zn([" ","	",`
`,"\r"],!1,!1),gf=`\r
`,OA=mn(`\r
`,!1),LA=`
`,lu=mn(`
`,!1),cu="\r",ac=mn("\r",!1),we=0,Nt=0,lc=[{line:1,column:1}],Oi=0,co=[],Tt=0,Qn;if("startRule"in t){if(!(t.startRule in s))throw new Error(`Can't start parsing from rule "`+t.startRule+'".');a=s[t.startRule]}function Aa(){return e.substring(Nt,we)}function Gi(){return Wa(Nt,we)}function Li(ee,ye){throw ye=ye!==void 0?ye:Wa(Nt,we),df([Ga(ee)],e.substring(Nt,we),ye)}function ja(ee,ye){throw ye=ye!==void 0?ye:Wa(Nt,we),Va(ee,ye)}function mn(ee,ye){return{type:"literal",text:ee,ignoreCase:ye}}function Zn(ee,ye,Oe){return{type:"class",parts:ee,inverted:ye,ignoreCase:Oe}}function uu(){return{type:"any"}}function dh(){return{type:"end"}}function Ga(ee){return{type:"other",description:ee}}function qa(ee){var ye=lc[ee],Oe;if(ye)return ye;for(Oe=ee-1;!lc[Oe];)Oe--;for(ye=lc[Oe],ye={line:ye.line,column:ye.column};Oe<ee;)e.charCodeAt(Oe)===10?(ye.line++,ye.column=1):ye.column++,Oe++;return lc[ee]=ye,ye}function Wa(ee,ye){var Oe=qa(ee),mt=qa(ye);return{start:{offset:ee,line:Oe.line,column:Oe.column},end:{offset:ye,line:mt.line,column:mt.column}}}function $e(ee){we<Oi||(we>Oi&&(Oi=we,co=[]),co.push(ee))}function Va(ee,ye){return new Qd(ee,null,null,ye)}function df(ee,ye,Oe){return new Qd(Qd.buildMessage(ee,ye),ee,ye,Oe)}function cc(){var ee;return ee=MA(),ee}function vn(){var ee,ye,Oe;for(ee=we,ye=[],Oe=pa();Oe!==r;)ye.push(Oe),Oe=pa();return ye!==r&&(Nt=ee,ye=n(ye)),ee=ye,ee}function pa(){var ee,ye,Oe,mt,Et;return ee=we,ye=xl(),ye!==r?(e.charCodeAt(we)===45?(Oe=c,we++):(Oe=r,Tt===0&&$e(f)),Oe!==r?(mt=Tn(),mt!==r?(Et=ha(),Et!==r?(Nt=ee,ye=p(Et),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r),ee}function MA(){var ee,ye,Oe;for(ee=we,ye=[],Oe=UA();Oe!==r;)ye.push(Oe),Oe=UA();return ye!==r&&(Nt=ee,ye=h(ye)),ee=ye,ee}function UA(){var ee,ye,Oe,mt,Et,bt,tr,pn,ci;if(ee=we,ye=Tn(),ye===r&&(ye=null),ye!==r){if(Oe=we,e.charCodeAt(we)===35?(mt=E,we++):(mt=r,Tt===0&&$e(C)),mt!==r){if(Et=[],bt=we,tr=we,Tt++,pn=ot(),Tt--,pn===r?tr=void 0:(we=tr,tr=r),tr!==r?(e.length>we?(pn=e.charAt(we),we++):(pn=r,Tt===0&&$e(S)),pn!==r?(tr=[tr,pn],bt=tr):(we=bt,bt=r)):(we=bt,bt=r),bt!==r)for(;bt!==r;)Et.push(bt),bt=we,tr=we,Tt++,pn=ot(),Tt--,pn===r?tr=void 0:(we=tr,tr=r),tr!==r?(e.length>we?(pn=e.charAt(we),we++):(pn=r,Tt===0&&$e(S)),pn!==r?(tr=[tr,pn],bt=tr):(we=bt,bt=r)):(we=bt,bt=r);else Et=r;Et!==r?(mt=[mt,Et],Oe=mt):(we=Oe,Oe=r)}else we=Oe,Oe=r;if(Oe===r&&(Oe=null),Oe!==r){if(mt=[],Et=Je(),Et!==r)for(;Et!==r;)mt.push(Et),Et=Je();else mt=r;mt!==r?(Nt=ee,ye=x(),ee=ye):(we=ee,ee=r)}else we=ee,ee=r}else we=ee,ee=r;if(ee===r&&(ee=we,ye=xl(),ye!==r?(Oe=Ya(),Oe!==r?(mt=Tn(),mt===r&&(mt=null),mt!==r?(e.charCodeAt(we)===58?(Et=I,we++):(Et=r,Tt===0&&$e(T)),Et!==r?(bt=Tn(),bt===r&&(bt=null),bt!==r?(tr=ha(),tr!==r?(Nt=ee,ye=O(Oe,tr),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r),ee===r&&(ee=we,ye=xl(),ye!==r?(Oe=is(),Oe!==r?(mt=Tn(),mt===r&&(mt=null),mt!==r?(e.charCodeAt(we)===58?(Et=I,we++):(Et=r,Tt===0&&$e(T)),Et!==r?(bt=Tn(),bt===r&&(bt=null),bt!==r?(tr=ha(),tr!==r?(Nt=ee,ye=O(Oe,tr),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r),ee===r))){if(ee=we,ye=xl(),ye!==r)if(Oe=is(),Oe!==r)if(mt=Tn(),mt!==r)if(Et=fu(),Et!==r){if(bt=[],tr=Je(),tr!==r)for(;tr!==r;)bt.push(tr),tr=Je();else bt=r;bt!==r?(Nt=ee,ye=O(Oe,Et),ee=ye):(we=ee,ee=r)}else we=ee,ee=r;else we=ee,ee=r;else we=ee,ee=r;else we=ee,ee=r;if(ee===r)if(ee=we,ye=xl(),ye!==r)if(Oe=is(),Oe!==r){if(mt=[],Et=we,bt=Tn(),bt===r&&(bt=null),bt!==r?(e.charCodeAt(we)===44?(tr=U,we++):(tr=r,Tt===0&&$e(Y)),tr!==r?(pn=Tn(),pn===r&&(pn=null),pn!==r?(ci=is(),ci!==r?(Nt=Et,bt=te(Oe,ci),Et=bt):(we=Et,Et=r)):(we=Et,Et=r)):(we=Et,Et=r)):(we=Et,Et=r),Et!==r)for(;Et!==r;)mt.push(Et),Et=we,bt=Tn(),bt===r&&(bt=null),bt!==r?(e.charCodeAt(we)===44?(tr=U,we++):(tr=r,Tt===0&&$e(Y)),tr!==r?(pn=Tn(),pn===r&&(pn=null),pn!==r?(ci=is(),ci!==r?(Nt=Et,bt=te(Oe,ci),Et=bt):(we=Et,Et=r)):(we=Et,Et=r)):(we=Et,Et=r)):(we=Et,Et=r);else mt=r;mt!==r?(Et=Tn(),Et===r&&(Et=null),Et!==r?(e.charCodeAt(we)===58?(bt=I,we++):(bt=r,Tt===0&&$e(T)),bt!==r?(tr=Tn(),tr===r&&(tr=null),tr!==r?(pn=ha(),pn!==r?(Nt=ee,ye=ie(Oe,mt,pn),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)}else we=ee,ee=r;else we=ee,ee=r}return ee}function ha(){var ee,ye,Oe,mt,Et,bt,tr;if(ee=we,ye=we,Tt++,Oe=we,mt=ot(),mt!==r?(Et=Mt(),Et!==r?(e.charCodeAt(we)===45?(bt=c,we++):(bt=r,Tt===0&&$e(f)),bt!==r?(tr=Tn(),tr!==r?(mt=[mt,Et,bt,tr],Oe=mt):(we=Oe,Oe=r)):(we=Oe,Oe=r)):(we=Oe,Oe=r)):(we=Oe,Oe=r),Tt--,Oe!==r?(we=ye,ye=void 0):ye=r,ye!==r?(Oe=Je(),Oe!==r?(mt=Rn(),mt!==r?(Et=vn(),Et!==r?(bt=ga(),bt!==r?(Nt=ee,ye=ue(Et),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r),ee===r&&(ee=we,ye=ot(),ye!==r?(Oe=Rn(),Oe!==r?(mt=MA(),mt!==r?(Et=ga(),Et!==r?(Nt=ee,ye=ue(mt),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r),ee===r))if(ee=we,ye=uc(),ye!==r){if(Oe=[],mt=Je(),mt!==r)for(;mt!==r;)Oe.push(mt),mt=Je();else Oe=r;Oe!==r?(Nt=ee,ye=ae(ye),ee=ye):(we=ee,ee=r)}else we=ee,ee=r;return ee}function xl(){var ee,ye,Oe;for(Tt++,ee=we,ye=[],e.charCodeAt(we)===32?(Oe=Ae,we++):(Oe=r,Tt===0&&$e(Ce));Oe!==r;)ye.push(Oe),e.charCodeAt(we)===32?(Oe=Ae,we++):(Oe=r,Tt===0&&$e(Ce));return ye!==r?(Nt=we,Oe=Ee(ye),Oe?Oe=void 0:Oe=r,Oe!==r?(ye=[ye,Oe],ee=ye):(we=ee,ee=r)):(we=ee,ee=r),Tt--,ee===r&&(ye=r,Tt===0&&$e(de)),ee}function Mt(){var ee,ye,Oe;for(ee=we,ye=[],e.charCodeAt(we)===32?(Oe=Ae,we++):(Oe=r,Tt===0&&$e(Ce));Oe!==r;)ye.push(Oe),e.charCodeAt(we)===32?(Oe=Ae,we++):(Oe=r,Tt===0&&$e(Ce));return ye!==r?(Nt=we,Oe=g(ye),Oe?Oe=void 0:Oe=r,Oe!==r?(ye=[ye,Oe],ee=ye):(we=ee,ee=r)):(we=ee,ee=r),ee}function Rn(){var ee;return Nt=we,ee=Se(),ee?ee=void 0:ee=r,ee}function ga(){var ee;return Nt=we,ee=Be(),ee?ee=void 0:ee=r,ee}function Ya(){var ee;return ee=kl(),ee===r&&(ee=fc()),ee}function is(){var ee,ye,Oe;if(ee=kl(),ee===r){if(ee=we,ye=[],Oe=Ka(),Oe!==r)for(;Oe!==r;)ye.push(Oe),Oe=Ka();else ye=r;ye!==r&&(Nt=ee,ye=me()),ee=ye}return ee}function uc(){var ee;return ee=Mi(),ee===r&&(ee=Bs(),ee===r&&(ee=kl(),ee===r&&(ee=fc()))),ee}function fu(){var ee;return ee=Mi(),ee===r&&(ee=kl(),ee===r&&(ee=Ka())),ee}function fc(){var ee,ye,Oe,mt,Et,bt;if(Tt++,ee=we,X.test(e.charAt(we))?(ye=e.charAt(we),we++):(ye=r,Tt===0&&$e(De)),ye!==r){for(Oe=[],mt=we,Et=Tn(),Et===r&&(Et=null),Et!==r?(Qe.test(e.charAt(we))?(bt=e.charAt(we),we++):(bt=r,Tt===0&&$e(it)),bt!==r?(Et=[Et,bt],mt=Et):(we=mt,mt=r)):(we=mt,mt=r);mt!==r;)Oe.push(mt),mt=we,Et=Tn(),Et===r&&(Et=null),Et!==r?(Qe.test(e.charAt(we))?(bt=e.charAt(we),we++):(bt=r,Tt===0&&$e(it)),bt!==r?(Et=[Et,bt],mt=Et):(we=mt,mt=r)):(we=mt,mt=r);Oe!==r?(Nt=ee,ye=_(),ee=ye):(we=ee,ee=r)}else we=ee,ee=r;return Tt--,ee===r&&(ye=r,Tt===0&&$e(ce)),ee}function Ka(){var ee,ye,Oe,mt,Et;if(ee=we,e.substr(we,2)===tt?(ye=tt,we+=2):(ye=r,Tt===0&&$e(Ne)),ye===r&&(ye=null),ye!==r)if(ke.test(e.charAt(we))?(Oe=e.charAt(we),we++):(Oe=r,Tt===0&&$e(be)),Oe!==r){for(mt=[],je.test(e.charAt(we))?(Et=e.charAt(we),we++):(Et=r,Tt===0&&$e(Re));Et!==r;)mt.push(Et),je.test(e.charAt(we))?(Et=e.charAt(we),we++):(Et=r,Tt===0&&$e(Re));mt!==r?(Nt=ee,ye=_(),ee=ye):(we=ee,ee=r)}else we=ee,ee=r;else we=ee,ee=r;return ee}function Mi(){var ee,ye;return ee=we,e.substr(we,4)===ct?(ye=ct,we+=4):(ye=r,Tt===0&&$e(Me)),ye!==r&&(Nt=ee,ye=P()),ee=ye,ee}function Bs(){var ee,ye;return ee=we,e.substr(we,4)===w?(ye=w,we+=4):(ye=r,Tt===0&&$e(b)),ye!==r&&(Nt=ee,ye=y()),ee=ye,ee===r&&(ee=we,e.substr(we,5)===F?(ye=F,we+=5):(ye=r,Tt===0&&$e(z)),ye!==r&&(Nt=ee,ye=Z()),ee=ye),ee}function kl(){var ee,ye,Oe,mt;return Tt++,ee=we,e.charCodeAt(we)===34?(ye=se,we++):(ye=r,Tt===0&&$e(xe)),ye!==r?(e.charCodeAt(we)===34?(Oe=se,we++):(Oe=r,Tt===0&&$e(xe)),Oe!==r?(Nt=ee,ye=Fe(),ee=ye):(we=ee,ee=r)):(we=ee,ee=r),ee===r&&(ee=we,e.charCodeAt(we)===34?(ye=se,we++):(ye=r,Tt===0&&$e(xe)),ye!==r?(Oe=mf(),Oe!==r?(e.charCodeAt(we)===34?(mt=se,we++):(mt=r,Tt===0&&$e(xe)),mt!==r?(Nt=ee,ye=ut(Oe),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)),Tt--,ee===r&&(ye=r,Tt===0&&$e($)),ee}function mf(){var ee,ye,Oe;if(ee=we,ye=[],Oe=Ac(),Oe!==r)for(;Oe!==r;)ye.push(Oe),Oe=Ac();else ye=r;return ye!==r&&(Nt=ee,ye=Ct(ye)),ee=ye,ee}function Ac(){var ee,ye,Oe,mt,Et,bt;return qt.test(e.charAt(we))?(ee=e.charAt(we),we++):(ee=r,Tt===0&&$e(ir)),ee===r&&(ee=we,e.substr(we,2)===Pt?(ye=Pt,we+=2):(ye=r,Tt===0&&$e(dn)),ye!==r&&(Nt=ee,ye=Pr()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===Ir?(ye=Ir,we+=2):(ye=r,Tt===0&&$e(Or)),ye!==r&&(Nt=ee,ye=on()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===li?(ye=li,we+=2):(ye=r,Tt===0&&$e(So)),ye!==r&&(Nt=ee,ye=ns()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===so?(ye=so,we+=2):(ye=r,Tt===0&&$e(Do)),ye!==r&&(Nt=ee,ye=ji()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===oo?(ye=oo,we+=2):(ye=r,Tt===0&&$e(bo)),ye!==r&&(Nt=ee,ye=RA()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===hf?(ye=hf,we+=2):(ye=r,Tt===0&&$e(hh)),ye!==r&&(Nt=ee,ye=gh()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===ao?(ye=ao,we+=2):(ye=r,Tt===0&&$e(Gn)),ye!==r&&(Nt=ee,ye=Ns()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===lo?(ye=lo,we+=2):(ye=r,Tt===0&&$e(iu)),ye!==r&&(Nt=ee,ye=su()),ee=ye,ee===r&&(ee=we,e.substr(we,2)===ou?(ye=ou,we+=2):(ye=r,Tt===0&&$e(TA)),ye!==r?(Oe=Bi(),Oe!==r?(mt=Bi(),mt!==r?(Et=Bi(),Et!==r?(bt=Bi(),bt!==r?(Nt=ee,ye=FA(Oe,mt,Et,bt),ee=ye):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)):(we=ee,ee=r)))))))))),ee}function Bi(){var ee;return ua.test(e.charAt(we))?(ee=e.charAt(we),we++):(ee=r,Tt===0&&$e(fa)),ee}function Tn(){var ee,ye;if(Tt++,ee=[],gr.test(e.charAt(we))?(ye=e.charAt(we),we++):(ye=r,Tt===0&&$e(Po)),ye!==r)for(;ye!==r;)ee.push(ye),gr.test(e.charAt(we))?(ye=e.charAt(we),we++):(ye=r,Tt===0&&$e(Po));else ee=r;return Tt--,ee===r&&(ye=r,Tt===0&&$e(NA)),ee}function pc(){var ee,ye;if(Tt++,ee=[],au.test(e.charAt(we))?(ye=e.charAt(we),we++):(ye=r,Tt===0&&$e(Cr)),ye!==r)for(;ye!==r;)ee.push(ye),au.test(e.charAt(we))?(ye=e.charAt(we),we++):(ye=r,Tt===0&&$e(Cr));else ee=r;return Tt--,ee===r&&(ye=r,Tt===0&&$e(Ue)),ee}function Je(){var ee,ye,Oe,mt,Et,bt;if(ee=we,ye=ot(),ye!==r){for(Oe=[],mt=we,Et=Tn(),Et===r&&(Et=null),Et!==r?(bt=ot(),bt!==r?(Et=[Et,bt],mt=Et):(we=mt,mt=r)):(we=mt,mt=r);mt!==r;)Oe.push(mt),mt=we,Et=Tn(),Et===r&&(Et=null),Et!==r?(bt=ot(),bt!==r?(Et=[Et,bt],mt=Et):(we=mt,mt=r)):(we=mt,mt=r);Oe!==r?(ye=[ye,Oe],ee=ye):(we=ee,ee=r)}else we=ee,ee=r;return ee}function ot(){var ee;return e.substr(we,2)===gf?(ee=gf,we+=2):(ee=r,Tt===0&&$e(OA)),ee===r&&(e.charCodeAt(we)===10?(ee=LA,we++):(ee=r,Tt===0&&$e(lu)),ee===r&&(e.charCodeAt(we)===13?(ee=cu,we++):(ee=r,Tt===0&&$e(ac)))),ee}let St=2,lr=0;if(Qn=a(),Qn!==r&&we===e.length)return Qn;throw Qn!==r&&we<e.length&&$e(dh()),df(co,Oi<e.length?e.charAt(Oi):null,Oi<e.length?Wa(Oi,Oi+1):Wa(Oi,Oi))}Fte.exports={SyntaxError:Qd,parse:sqe}});function Lte(e){return e.match(oqe)?e:JSON.stringify(e)}function Ute(e){return typeof e>"u"?!0:typeof e=="object"&&e!==null&&!Array.isArray(e)?Object.keys(e).every(t=>Ute(e[t])):!1}function jU(e,t,r){if(e===null)return`null
`;if(typeof e=="number"||typeof e=="boolean")return`${e.toString()}
`;if(typeof e=="string")return`${Lte(e)}
`;if(Array.isArray(e)){if(e.length===0)return`[]
`;let s="  ".repeat(t);return`
${e.map(n=>`${s}- ${jU(n,t+1,!1)}`).join("")}`}if(typeof e=="object"&&e){let[s,a]=e instanceof Sx?[e.data,!1]:[e,!0],n="  ".repeat(t),c=Object.keys(s);a&&c.sort((p,h)=>{let E=Ote.indexOf(p),C=Ote.indexOf(h);return E===-1&&C===-1?p<h?-1:p>h?1:0:E!==-1&&C===-1?-1:E===-1&&C!==-1?1:E-C});let f=c.filter(p=>!Ute(s[p])).map((p,h)=>{let E=s[p],C=Lte(p),S=jU(E,t+1,!0),x=h>0||r?n:"",I=C.length>1024?`? ${C}
${x}:`:`${C}:`,T=S.startsWith(`
`)?S:` ${S}`;return`${x}${I}${T}`}).join(t===0?`
`:"")||`
`;return r?`
${f}`:`${f}`}throw new Error(`Unsupported value type (${e})`)}function cl(e){try{let t=jU(e,0,!1);return t!==`
`?t:""}catch(t){throw t.location&&(t.message=t.message.replace(/(\.)?$/,` (line ${t.location.start.line}, column ${t.location.start.column})$1`)),t}}function aqe(e){return e.endsWith(`
`)||(e+=`
`),(0,Mte.parse)(e)}function cqe(e){if(lqe.test(e))return aqe(e);let t=(0,Dx.safeLoad)(e,{schema:Dx.FAILSAFE_SCHEMA,json:!0});if(t==null)return{};if(typeof t!="object")throw new Error(`Expected an indexed object, got a ${typeof t} instead. Does your file follow Yaml's rules?`);if(Array.isArray(t))throw new Error("Expected an indexed object, got an array instead. Does your file follow Yaml's rules?");return t}function cs(e){return cqe(e)}var Dx,Mte,oqe,Ote,Sx,lqe,_te=Ze(()=>{Dx=et(Tte()),Mte=et(Nte()),oqe=/^(?![-?:,\][{}#&*!|>'"%@` \t\r\n]).([ \t]*(?![,\][{}:# \t\r\n]).)*$/,Ote=["__metadata","version","resolution","dependencies","peerDependencies","dependenciesMeta","peerDependenciesMeta","binaries"],Sx=class{constructor(t){this.data=t}};cl.PreserveOrdering=Sx;lqe=/^(#.*(\r?\n))*?#\s+yarn\s+lockfile\s+v1\r?\n/i});var _B={};Yt(_B,{parseResolution:()=>px,parseShell:()=>ux,parseSyml:()=>cs,stringifyArgument:()=>PU,stringifyArgumentSegment:()=>xU,stringifyArithmeticExpression:()=>Ax,stringifyCommand:()=>bU,stringifyCommandChain:()=>gE,stringifyCommandChainThen:()=>DU,stringifyCommandLine:()=>fx,stringifyCommandLineThen:()=>SU,stringifyEnvSegment:()=>cx,stringifyRedirectArgument:()=>TB,stringifyResolution:()=>hx,stringifyShell:()=>hE,stringifyShellLine:()=>hE,stringifySyml:()=>cl,stringifyValueArgument:()=>wd});var Bc=Ze(()=>{U$();G$();_te()});var jte=G(($Pt,GU)=>{"use strict";var uqe=e=>{let t=!1,r=!1,s=!1;for(let a=0;a<e.length;a++){let n=e[a];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,s=r,r=!0,a++):r&&s&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,a-1)+"-"+e.slice(a-1),s=r,r=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,s=r,r=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e},Hte=(e,t)=>{if(!(typeof e=="string"||Array.isArray(e)))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);let r=a=>t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;return Array.isArray(e)?e=e.map(a=>a.trim()).filter(a=>a.length).join("-"):e=e.trim(),e.length===0?"":e.length===1?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=uqe(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(a,n)=>n.toUpperCase()).replace(/\d+(\w|$)/g,a=>a.toUpperCase()),r(e))};GU.exports=Hte;GU.exports.default=Hte});var Gte=G((ext,fqe)=>{fqe.exports=[{name:"Agola CI",constant:"AGOLA",env:"AGOLA_GIT_REF",pr:"AGOLA_PULL_REQUEST_ID"},{name:"Appcircle",constant:"APPCIRCLE",env:"AC_APPCIRCLE"},{name:"AppVeyor",constant:"APPVEYOR",env:"APPVEYOR",pr:"APPVEYOR_PULL_REQUEST_NUMBER"},{name:"AWS CodeBuild",constant:"CODEBUILD",env:"CODEBUILD_BUILD_ARN"},{name:"Azure Pipelines",constant:"AZURE_PIPELINES",env:"TF_BUILD",pr:{BUILD_REASON:"PullRequest"}},{name:"Bamboo",constant:"BAMBOO",env:"bamboo_planKey"},{name:"Bitbucket Pipelines",constant:"BITBUCKET",env:"BITBUCKET_COMMIT",pr:"BITBUCKET_PR_ID"},{name:"Bitrise",constant:"BITRISE",env:"BITRISE_IO",pr:"BITRISE_PULL_REQUEST"},{name:"Buddy",constant:"BUDDY",env:"BUDDY_WORKSPACE_ID",pr:"BUDDY_EXECUTION_PULL_REQUEST_ID"},{name:"Buildkite",constant:"BUILDKITE",env:"BUILDKITE",pr:{env:"BUILDKITE_PULL_REQUEST",ne:"false"}},{name:"CircleCI",constant:"CIRCLE",env:"CIRCLECI",pr:"CIRCLE_PULL_REQUEST"},{name:"Cirrus CI",constant:"CIRRUS",env:"CIRRUS_CI",pr:"CIRRUS_PR"},{name:"Codefresh",constant:"CODEFRESH",env:"CF_BUILD_ID",pr:{any:["CF_PULL_REQUEST_NUMBER","CF_PULL_REQUEST_ID"]}},{name:"Codemagic",constant:"CODEMAGIC",env:"CM_BUILD_ID",pr:"CM_PULL_REQUEST"},{name:"Codeship",constant:"CODESHIP",env:{CI_NAME:"codeship"}},{name:"Drone",constant:"DRONE",env:"DRONE",pr:{DRONE_BUILD_EVENT:"pull_request"}},{name:"dsari",constant:"DSARI",env:"DSARI"},{name:"Earthly",constant:"EARTHLY",env:"EARTHLY_CI"},{name:"Expo Application Services",constant:"EAS",env:"EAS_BUILD"},{name:"Gerrit",constant:"GERRIT",env:"GERRIT_PROJECT"},{name:"Gitea Actions",constant:"GITEA_ACTIONS",env:"GITEA_ACTIONS"},{name:"GitHub Actions",constant:"GITHUB_ACTIONS",env:"GITHUB_ACTIONS",pr:{GITHUB_EVENT_NAME:"pull_request"}},{name:"GitLab CI",constant:"GITLAB",env:"GITLAB_CI",pr:"CI_MERGE_REQUEST_ID"},{name:"GoCD",constant:"GOCD",env:"GO_PIPELINE_LABEL"},{name:"Google Cloud Build",constant:"GOOGLE_CLOUD_BUILD",env:"BUILDER_OUTPUT"},{name:"Harness CI",constant:"HARNESS",env:"HARNESS_BUILD_ID"},{name:"Heroku",constant:"HEROKU",env:{env:"NODE",includes:"/app/.heroku/node/bin/node"}},{name:"Hudson",constant:"HUDSON",env:"HUDSON_URL"},{name:"Jenkins",constant:"JENKINS",env:["JENKINS_URL","BUILD_ID"],pr:{any:["ghprbPullId","CHANGE_ID"]}},{name:"LayerCI",constant:"LAYERCI",env:"LAYERCI",pr:"LAYERCI_PULL_REQUEST"},{name:"Magnum CI",constant:"MAGNUM",env:"MAGNUM"},{name:"Netlify CI",constant:"NETLIFY",env:"NETLIFY",pr:{env:"PULL_REQUEST",ne:"false"}},{name:"Nevercode",constant:"NEVERCODE",env:"NEVERCODE",pr:{env:"NEVERCODE_PULL_REQUEST",ne:"false"}},{name:"Prow",constant:"PROW",env:"PROW_JOB_ID"},{name:"ReleaseHub",constant:"RELEASEHUB",env:"RELEASE_BUILD_ID"},{name:"Render",constant:"RENDER",env:"RENDER",pr:{IS_PULL_REQUEST:"true"}},{name:"Sail CI",constant:"SAIL",env:"SAILCI",pr:"SAIL_PULL_REQUEST_NUMBER"},{name:"Screwdriver",constant:"SCREWDRIVER",env:"SCREWDRIVER",pr:{env:"SD_PULL_REQUEST",ne:"false"}},{name:"Semaphore",constant:"SEMAPHORE",env:"SEMAPHORE",pr:"PULL_REQUEST_NUMBER"},{name:"Sourcehut",constant:"SOURCEHUT",env:{CI_NAME:"sourcehut"}},{name:"Strider CD",constant:"STRIDER",env:"STRIDER"},{name:"TaskCluster",constant:"TASKCLUSTER",env:["TASK_ID","RUN_ID"]},{name:"TeamCity",constant:"TEAMCITY",env:"TEAMCITY_VERSION"},{name:"Travis CI",constant:"TRAVIS",env:"TRAVIS",pr:{env:"TRAVIS_PULL_REQUEST",ne:"false"}},{name:"Vela",constant:"VELA",env:"VELA",pr:{VELA_PULL_REQUEST:"1"}},{name:"Vercel",constant:"VERCEL",env:{any:["NOW_BUILDER","VERCEL"]},pr:"VERCEL_GIT_PULL_REQUEST_ID"},{name:"Visual Studio App Center",constant:"APPCENTER",env:"APPCENTER_BUILD_ID"},{name:"Woodpecker",constant:"WOODPECKER",env:{CI:"woodpecker"},pr:{CI_BUILD_EVENT:"pull_request"}},{name:"Xcode Cloud",constant:"XCODE_CLOUD",env:"CI_XCODE_PROJECT",pr:"CI_PULL_REQUEST_NUMBER"},{name:"Xcode Server",constant:"XCODE_SERVER",env:"XCS"}]});var Rd=G(ql=>{"use strict";var Wte=Gte(),xs=process.env;Object.defineProperty(ql,"_vendors",{value:Wte.map(function(e){return e.constant})});ql.name=null;ql.isPR=null;Wte.forEach(function(e){let r=(Array.isArray(e.env)?e.env:[e.env]).every(function(s){return qte(s)});if(ql[e.constant]=r,!!r)switch(ql.name=e.name,typeof e.pr){case"string":ql.isPR=!!xs[e.pr];break;case"object":"env"in e.pr?ql.isPR=e.pr.env in xs&&xs[e.pr.env]!==e.pr.ne:"any"in e.pr?ql.isPR=e.pr.any.some(function(s){return!!xs[s]}):ql.isPR=qte(e.pr);break;default:ql.isPR=null}});ql.isCI=!!(xs.CI!=="false"&&(xs.BUILD_ID||xs.BUILD_NUMBER||xs.CI||xs.CI_APP_ID||xs.CI_BUILD_ID||xs.CI_BUILD_NUMBER||xs.CI_NAME||xs.CONTINUOUS_INTEGRATION||xs.RUN_ID||ql.name));function qte(e){return typeof e=="string"?!!xs[e]:"env"in e?xs[e.env]&&xs[e.env].includes(e.includes):"any"in e?e.any.some(function(t){return!!xs[t]}):Object.keys(e).every(function(t){return xs[t]===e[t]})}});var ni,In,Td,qU,bx,Vte,WU,VU,Px=Ze(()=>{(function(e){e.StartOfInput="\0",e.EndOfInput="",e.EndOfPartialInput=""})(ni||(ni={}));(function(e){e[e.InitialNode=0]="InitialNode",e[e.SuccessNode=1]="SuccessNode",e[e.ErrorNode=2]="ErrorNode",e[e.CustomNode=3]="CustomNode"})(In||(In={}));Td=-1,qU=/^(-h|--help)(?:=([0-9]+))?$/,bx=/^(--[a-z]+(?:-[a-z]+)*|-[a-zA-Z]+)$/,Vte=/^-[a-zA-Z]{2,}$/,WU=/^([^=]+)=([\s\S]*)$/,VU=process.env.DEBUG_CLI==="1"});var st,BE,xx,YU,kx=Ze(()=>{Px();st=class extends Error{constructor(t){super(t),this.clipanion={type:"usage"},this.name="UsageError"}},BE=class extends Error{constructor(t,r){if(super(),this.input=t,this.candidates=r,this.clipanion={type:"none"},this.name="UnknownSyntaxError",this.candidates.length===0)this.message="Command not found, but we're not sure what's the alternative.";else if(this.candidates.every(s=>s.reason!==null&&s.reason===r[0].reason)){let[{reason:s}]=this.candidates;this.message=`${s}

${this.candidates.map(({usage:a})=>`$ ${a}`).join(`
`)}`}else if(this.candidates.length===1){let[{usage:s}]=this.candidates;this.message=`Command not found; did you mean:

$ ${s}
${YU(t)}`}else this.message=`Command not found; did you mean one of:

${this.candidates.map(({usage:s},a)=>`${`${a}.`.padStart(4)} ${s}`).join(`
`)}

${YU(t)}`}},xx=class extends Error{constructor(t,r){super(),this.input=t,this.usages=r,this.clipanion={type:"none"},this.name="AmbiguousSyntaxError",this.message=`Cannot find which to pick amongst the following alternatives:

${this.usages.map((s,a)=>`${`${a}.`.padStart(4)} ${s}`).join(`
`)}

${YU(t)}`}},YU=e=>`While running ${e.filter(t=>t!==ni.EndOfInput&&t!==ni.EndOfPartialInput).map(t=>{let r=JSON.stringify(t);return t.match(/\s/)||t.length===0||r!==`"${t}"`?r:t}).join(" ")}`});function Aqe(e){let t=e.split(`
`),r=t.filter(a=>a.match(/\S/)),s=r.length>0?r.reduce((a,n)=>Math.min(a,n.length-n.trimStart().length),Number.MAX_VALUE):0;return t.map(a=>a.slice(s).trimRight()).join(`
`)}function Vo(e,{format:t,paragraphs:r}){return e=e.replace(/\r\n?/g,`
`),e=Aqe(e),e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^(\s*)-([^\n]*?)\n+/gm,`$1-$2

`),e=e.replace(/\n(\n)?\n*/g,(s,a)=>a||" "),r&&(e=e.split(/\n/).map(s=>{let a=s.match(/^\s*[*-][\t ]+(.*)/);if(!a)return s.match(/(.{1,80})(?: |$)/g).join(`
`);let n=s.length-s.trimStart().length;return a[1].match(new RegExp(`(.{1,${78-n}})(?: |$)`,"g")).map((c,f)=>" ".repeat(n)+(f===0?"- ":"  ")+c).join(`
`)}).join(`

`)),e=e.replace(/(`+)((?:.|[\n])*?)\1/g,(s,a,n)=>t.code(a+n+a)),e=e.replace(/(\*\*)((?:.|[\n])*?)\1/g,(s,a,n)=>t.bold(a+n+a)),e?`${e}
`:""}var KU,Yte,Kte,JU=Ze(()=>{KU=Array(80).fill("\u2501");for(let e=0;e<=24;++e)KU[KU.length-e]=`\x1B[38;5;${232+e}m\u2501`;Yte={header:e=>`\x1B[1m\u2501\u2501\u2501 ${e}${e.length<75?` ${KU.slice(e.length+5).join("")}`:":"}\x1B[0m`,bold:e=>`\x1B[1m${e}\x1B[22m`,error:e=>`\x1B[31m\x1B[1m${e}\x1B[22m\x1B[39m`,code:e=>`\x1B[36m${e}\x1B[39m`},Kte={header:e=>e,bold:e=>e,error:e=>e,code:e=>e}});function wa(e){return{...e,[HB]:!0}}function Wf(e,t){return typeof e>"u"?[e,t]:typeof e=="object"&&e!==null&&!Array.isArray(e)?[void 0,e]:[e,t]}function Qx(e,{mergeName:t=!1}={}){let r=e.match(/^([^:]+): (.*)$/m);if(!r)return"validation failed";let[,s,a]=r;return t&&(a=a[0].toLowerCase()+a.slice(1)),a=s!=="."||!t?`${s.replace(/^\.(\[|$)/,"$1")}: ${a}`:`: ${a}`,a}function jB(e,t){return t.length===1?new st(`${e}${Qx(t[0],{mergeName:!0})}`):new st(`${e}:
${t.map(r=>`
- ${Qx(r)}`).join("")}`)}function Fd(e,t,r){if(typeof r>"u")return t;let s=[],a=[],n=f=>{let p=t;return t=f,n.bind(null,p)};if(!r(t,{errors:s,coercions:a,coercion:n}))throw jB(`Invalid value for ${e}`,s);for(let[,f]of a)f();return t}var HB,wp=Ze(()=>{kx();HB=Symbol("clipanion/isOption")});var Yo={};Yt(Yo,{KeyRelationship:()=>Vf,TypeAssertionError:()=>i0,applyCascade:()=>WB,as:()=>Qqe,assert:()=>Pqe,assertWithErrors:()=>xqe,cascade:()=>Nx,fn:()=>Rqe,hasAtLeastOneKey:()=>r_,hasExactLength:()=>$te,hasForbiddenKeys:()=>Zqe,hasKeyRelationship:()=>YB,hasMaxLength:()=>Fqe,hasMinLength:()=>Tqe,hasMutuallyExclusiveKeys:()=>Xqe,hasRequiredKeys:()=>zqe,hasUniqueItems:()=>Nqe,isArray:()=>Rx,isAtLeast:()=>e_,isAtMost:()=>Mqe,isBase64:()=>Vqe,isBoolean:()=>Iqe,isDate:()=>wqe,isDict:()=>Sqe,isEnum:()=>ks,isHexColor:()=>Wqe,isISO8601:()=>qqe,isInExclusiveRange:()=>_qe,isInInclusiveRange:()=>Uqe,isInstanceOf:()=>bqe,isInteger:()=>t_,isJSON:()=>Yqe,isLiteral:()=>zte,isLowerCase:()=>Hqe,isMap:()=>vqe,isNegative:()=>Oqe,isNullable:()=>Jqe,isNumber:()=>XU,isObject:()=>Zte,isOneOf:()=>$U,isOptional:()=>Kqe,isPartial:()=>Dqe,isPayload:()=>Cqe,isPositive:()=>Lqe,isRecord:()=>Fx,isSet:()=>Bqe,isString:()=>SE,isTuple:()=>Tx,isUUID4:()=>Gqe,isUnknown:()=>ZU,isUpperCase:()=>jqe,makeTrait:()=>Xte,makeValidator:()=>Wr,matchesRegExp:()=>qB,softAssert:()=>kqe});function ii(e){return e===null?"null":e===void 0?"undefined":e===""?"an empty string":typeof e=="symbol"?`<${e.toString()}>`:Array.isArray(e)?"an array":JSON.stringify(e)}function vE(e,t){if(e.length===0)return"nothing";if(e.length===1)return ii(e[0]);let r=e.slice(0,-1),s=e[e.length-1],a=e.length>2?`, ${t} `:` ${t} `;return`${r.map(n=>ii(n)).join(", ")}${a}${ii(s)}`}function n0(e,t){var r,s,a;return typeof t=="number"?`${(r=e?.p)!==null&&r!==void 0?r:"."}[${t}]`:pqe.test(t)?`${(s=e?.p)!==null&&s!==void 0?s:""}.${t}`:`${(a=e?.p)!==null&&a!==void 0?a:"."}[${JSON.stringify(t)}]`}function zU(e,t,r){return e===1?t:r}function mr({errors:e,p:t}={},r){return e?.push(`${t??"."}: ${r}`),!1}function yqe(e,t){return r=>{e[t]=r}}function Yf(e,t){return r=>{let s=e[t];return e[t]=r,Yf(e,t).bind(null,s)}}function GB(e,t,r){let s=()=>(e(r()),a),a=()=>(e(t),s);return s}function ZU(){return Wr({test:(e,t)=>!0})}function zte(e){return Wr({test:(t,r)=>t!==e?mr(r,`Expected ${ii(e)} (got ${ii(t)})`):!0})}function SE(){return Wr({test:(e,t)=>typeof e!="string"?mr(t,`Expected a string (got ${ii(e)})`):!0})}function ks(e){let t=Array.isArray(e)?e:Object.values(e),r=t.every(a=>typeof a=="string"||typeof a=="number"),s=new Set(t);return s.size===1?zte([...s][0]):Wr({test:(a,n)=>s.has(a)?!0:r?mr(n,`Expected one of ${vE(t,"or")} (got ${ii(a)})`):mr(n,`Expected a valid enumeration value (got ${ii(a)})`)})}function Iqe(){return Wr({test:(e,t)=>{var r;if(typeof e!="boolean"){if(typeof t?.coercions<"u"){if(typeof t?.coercion>"u")return mr(t,"Unbound coercion result");let s=Eqe.get(e);if(typeof s<"u")return t.coercions.push([(r=t.p)!==null&&r!==void 0?r:".",t.coercion.bind(null,s)]),!0}return mr(t,`Expected a boolean (got ${ii(e)})`)}return!0}})}function XU(){return Wr({test:(e,t)=>{var r;if(typeof e!="number"){if(typeof t?.coercions<"u"){if(typeof t?.coercion>"u")return mr(t,"Unbound coercion result");let s;if(typeof e=="string"){let a;try{a=JSON.parse(e)}catch{}if(typeof a=="number")if(JSON.stringify(a)===e)s=a;else return mr(t,`Received a number that can't be safely represented by the runtime (${e})`)}if(typeof s<"u")return t.coercions.push([(r=t.p)!==null&&r!==void 0?r:".",t.coercion.bind(null,s)]),!0}return mr(t,`Expected a number (got ${ii(e)})`)}return!0}})}function Cqe(e){return Wr({test:(t,r)=>{var s;if(typeof r?.coercions>"u")return mr(r,"The isPayload predicate can only be used with coercion enabled");if(typeof r.coercion>"u")return mr(r,"Unbound coercion result");if(typeof t!="string")return mr(r,`Expected a string (got ${ii(t)})`);let a;try{a=JSON.parse(t)}catch{return mr(r,`Expected a JSON string (got ${ii(t)})`)}let n={value:a};return e(a,Object.assign(Object.assign({},r),{coercion:Yf(n,"value")}))?(r.coercions.push([(s=r.p)!==null&&s!==void 0?s:".",r.coercion.bind(null,n.value)]),!0):!1}})}function wqe(){return Wr({test:(e,t)=>{var r;if(!(e instanceof Date)){if(typeof t?.coercions<"u"){if(typeof t?.coercion>"u")return mr(t,"Unbound coercion result");let s;if(typeof e=="string"&&Jte.test(e))s=new Date(e);else{let a;if(typeof e=="string"){let n;try{n=JSON.parse(e)}catch{}typeof n=="number"&&(a=n)}else typeof e=="number"&&(a=e);if(typeof a<"u")if(Number.isSafeInteger(a)||!Number.isSafeInteger(a*1e3))s=new Date(a*1e3);else return mr(t,`Received a timestamp that can't be safely represented by the runtime (${e})`)}if(typeof s<"u")return t.coercions.push([(r=t.p)!==null&&r!==void 0?r:".",t.coercion.bind(null,s)]),!0}return mr(t,`Expected a date (got ${ii(e)})`)}return!0}})}function Rx(e,{delimiter:t}={}){return Wr({test:(r,s)=>{var a;let n=r;if(typeof r=="string"&&typeof t<"u"&&typeof s?.coercions<"u"){if(typeof s?.coercion>"u")return mr(s,"Unbound coercion result");r=r.split(t)}if(!Array.isArray(r))return mr(s,`Expected an array (got ${ii(r)})`);let c=!0;for(let f=0,p=r.length;f<p&&(c=e(r[f],Object.assign(Object.assign({},s),{p:n0(s,f),coercion:Yf(r,f)}))&&c,!(!c&&s?.errors==null));++f);return r!==n&&s.coercions.push([(a=s.p)!==null&&a!==void 0?a:".",s.coercion.bind(null,r)]),c}})}function Bqe(e,{delimiter:t}={}){let r=Rx(e,{delimiter:t});return Wr({test:(s,a)=>{var n,c;if(Object.getPrototypeOf(s).toString()==="[object Set]")if(typeof a?.coercions<"u"){if(typeof a?.coercion>"u")return mr(a,"Unbound coercion result");let f=[...s],p=[...s];if(!r(p,Object.assign(Object.assign({},a),{coercion:void 0})))return!1;let h=()=>p.some((E,C)=>E!==f[C])?new Set(p):s;return a.coercions.push([(n=a.p)!==null&&n!==void 0?n:".",GB(a.coercion,s,h)]),!0}else{let f=!0;for(let p of s)if(f=e(p,Object.assign({},a))&&f,!f&&a?.errors==null)break;return f}if(typeof a?.coercions<"u"){if(typeof a?.coercion>"u")return mr(a,"Unbound coercion result");let f={value:s};return r(s,Object.assign(Object.assign({},a),{coercion:Yf(f,"value")}))?(a.coercions.push([(c=a.p)!==null&&c!==void 0?c:".",GB(a.coercion,s,()=>new Set(f.value))]),!0):!1}return mr(a,`Expected a set (got ${ii(s)})`)}})}function vqe(e,t){let r=Rx(Tx([e,t])),s=Fx(t,{keys:e});return Wr({test:(a,n)=>{var c,f,p;if(Object.getPrototypeOf(a).toString()==="[object Map]")if(typeof n?.coercions<"u"){if(typeof n?.coercion>"u")return mr(n,"Unbound coercion result");let h=[...a],E=[...a];if(!r(E,Object.assign(Object.assign({},n),{coercion:void 0})))return!1;let C=()=>E.some((S,x)=>S[0]!==h[x][0]||S[1]!==h[x][1])?new Map(E):a;return n.coercions.push([(c=n.p)!==null&&c!==void 0?c:".",GB(n.coercion,a,C)]),!0}else{let h=!0;for(let[E,C]of a)if(h=e(E,Object.assign({},n))&&h,!h&&n?.errors==null||(h=t(C,Object.assign(Object.assign({},n),{p:n0(n,E)}))&&h,!h&&n?.errors==null))break;return h}if(typeof n?.coercions<"u"){if(typeof n?.coercion>"u")return mr(n,"Unbound coercion result");let h={value:a};return Array.isArray(a)?r(a,Object.assign(Object.assign({},n),{coercion:void 0}))?(n.coercions.push([(f=n.p)!==null&&f!==void 0?f:".",GB(n.coercion,a,()=>new Map(h.value))]),!0):!1:s(a,Object.assign(Object.assign({},n),{coercion:Yf(h,"value")}))?(n.coercions.push([(p=n.p)!==null&&p!==void 0?p:".",GB(n.coercion,a,()=>new Map(Object.entries(h.value)))]),!0):!1}return mr(n,`Expected a map (got ${ii(a)})`)}})}function Tx(e,{delimiter:t}={}){let r=$te(e.length);return Wr({test:(s,a)=>{var n;if(typeof s=="string"&&typeof t<"u"&&typeof a?.coercions<"u"){if(typeof a?.coercion>"u")return mr(a,"Unbound coercion result");s=s.split(t),a.coercions.push([(n=a.p)!==null&&n!==void 0?n:".",a.coercion.bind(null,s)])}if(!Array.isArray(s))return mr(a,`Expected a tuple (got ${ii(s)})`);let c=r(s,Object.assign({},a));for(let f=0,p=s.length;f<p&&f<e.length&&(c=e[f](s[f],Object.assign(Object.assign({},a),{p:n0(a,f),coercion:Yf(s,f)}))&&c,!(!c&&a?.errors==null));++f);return c}})}function Fx(e,{keys:t=null}={}){let r=Rx(Tx([t??SE(),e]));return Wr({test:(s,a)=>{var n;if(Array.isArray(s)&&typeof a?.coercions<"u")return typeof a?.coercion>"u"?mr(a,"Unbound coercion result"):r(s,Object.assign(Object.assign({},a),{coercion:void 0}))?(s=Object.fromEntries(s),a.coercions.push([(n=a.p)!==null&&n!==void 0?n:".",a.coercion.bind(null,s)]),!0):!1;if(typeof s!="object"||s===null)return mr(a,`Expected an object (got ${ii(s)})`);let c=Object.keys(s),f=!0;for(let p=0,h=c.length;p<h&&(f||a?.errors!=null);++p){let E=c[p],C=s[E];if(E==="__proto__"||E==="constructor"){f=mr(Object.assign(Object.assign({},a),{p:n0(a,E)}),"Unsafe property name");continue}if(t!==null&&!t(E,a)){f=!1;continue}if(!e(C,Object.assign(Object.assign({},a),{p:n0(a,E),coercion:Yf(s,E)}))){f=!1;continue}}return f}})}function Sqe(e,t={}){return Fx(e,t)}function Zte(e,{extra:t=null}={}){let r=Object.keys(e),s=Wr({test:(a,n)=>{if(typeof a!="object"||a===null)return mr(n,`Expected an object (got ${ii(a)})`);let c=new Set([...r,...Object.keys(a)]),f={},p=!0;for(let h of c){if(h==="constructor"||h==="__proto__")p=mr(Object.assign(Object.assign({},n),{p:n0(n,h)}),"Unsafe property name");else{let E=Object.prototype.hasOwnProperty.call(e,h)?e[h]:void 0,C=Object.prototype.hasOwnProperty.call(a,h)?a[h]:void 0;typeof E<"u"?p=E(C,Object.assign(Object.assign({},n),{p:n0(n,h),coercion:Yf(a,h)}))&&p:t===null?p=mr(Object.assign(Object.assign({},n),{p:n0(n,h)}),`Extraneous property (got ${ii(C)})`):Object.defineProperty(f,h,{enumerable:!0,get:()=>C,set:yqe(a,h)})}if(!p&&n?.errors==null)break}return t!==null&&(p||n?.errors!=null)&&(p=t(f,n)&&p),p}});return Object.assign(s,{properties:e})}function Dqe(e){return Zte(e,{extra:Fx(ZU())})}function Xte(e){return()=>e}function Wr({test:e}){return Xte(e)()}function Pqe(e,t){if(!t(e))throw new i0}function xqe(e,t){let r=[];if(!t(e,{errors:r}))throw new i0({errors:r})}function kqe(e,t){}function Qqe(e,t,{coerce:r=!1,errors:s,throw:a}={}){let n=s?[]:void 0;if(!r){if(t(e,{errors:n}))return a?e:{value:e,errors:void 0};if(a)throw new i0({errors:n});return{value:void 0,errors:n??!0}}let c={value:e},f=Yf(c,"value"),p=[];if(!t(e,{errors:n,coercion:f,coercions:p})){if(a)throw new i0({errors:n});return{value:void 0,errors:n??!0}}for(let[,h]of p)h();return a?c.value:{value:c.value,errors:void 0}}function Rqe(e,t){let r=Tx(e);return(...s)=>{if(!r(s))throw new i0;return t(...s)}}function Tqe(e){return Wr({test:(t,r)=>t.length>=e?!0:mr(r,`Expected to have a length of at least ${e} elements (got ${t.length})`)})}function Fqe(e){return Wr({test:(t,r)=>t.length<=e?!0:mr(r,`Expected to have a length of at most ${e} elements (got ${t.length})`)})}function $te(e){return Wr({test:(t,r)=>t.length!==e?mr(r,`Expected to have a length of exactly ${e} elements (got ${t.length})`):!0})}function Nqe({map:e}={}){return Wr({test:(t,r)=>{let s=new Set,a=new Set;for(let n=0,c=t.length;n<c;++n){let f=t[n],p=typeof e<"u"?e(f):f;if(s.has(p)){if(a.has(p))continue;mr(r,`Expected to contain unique elements; got a duplicate with ${ii(t)}`),a.add(p)}else s.add(p)}return a.size===0}})}function Oqe(){return Wr({test:(e,t)=>e<=0?!0:mr(t,`Expected to be negative (got ${e})`)})}function Lqe(){return Wr({test:(e,t)=>e>=0?!0:mr(t,`Expected to be positive (got ${e})`)})}function e_(e){return Wr({test:(t,r)=>t>=e?!0:mr(r,`Expected to be at least ${e} (got ${t})`)})}function Mqe(e){return Wr({test:(t,r)=>t<=e?!0:mr(r,`Expected to be at most ${e} (got ${t})`)})}function Uqe(e,t){return Wr({test:(r,s)=>r>=e&&r<=t?!0:mr(s,`Expected to be in the [${e}; ${t}] range (got ${r})`)})}function _qe(e,t){return Wr({test:(r,s)=>r>=e&&r<t?!0:mr(s,`Expected to be in the [${e}; ${t}[ range (got ${r})`)})}function t_({unsafe:e=!1}={}){return Wr({test:(t,r)=>t!==Math.round(t)?mr(r,`Expected to be an integer (got ${t})`):!e&&!Number.isSafeInteger(t)?mr(r,`Expected to be a safe integer (got ${t})`):!0})}function qB(e){return Wr({test:(t,r)=>e.test(t)?!0:mr(r,`Expected to match the pattern ${e.toString()} (got ${ii(t)})`)})}function Hqe(){return Wr({test:(e,t)=>e!==e.toLowerCase()?mr(t,`Expected to be all-lowercase (got ${e})`):!0})}function jqe(){return Wr({test:(e,t)=>e!==e.toUpperCase()?mr(t,`Expected to be all-uppercase (got ${e})`):!0})}function Gqe(){return Wr({test:(e,t)=>mqe.test(e)?!0:mr(t,`Expected to be a valid UUID v4 (got ${ii(e)})`)})}function qqe(){return Wr({test:(e,t)=>Jte.test(e)?!0:mr(t,`Expected to be a valid ISO 8601 date string (got ${ii(e)})`)})}function Wqe({alpha:e=!1}){return Wr({test:(t,r)=>(e?hqe.test(t):gqe.test(t))?!0:mr(r,`Expected to be a valid hexadecimal color string (got ${ii(t)})`)})}function Vqe(){return Wr({test:(e,t)=>dqe.test(e)?!0:mr(t,`Expected to be a valid base 64 string (got ${ii(e)})`)})}function Yqe(e=ZU()){return Wr({test:(t,r)=>{let s;try{s=JSON.parse(t)}catch{return mr(r,`Expected to be a valid JSON string (got ${ii(t)})`)}return e(s,r)}})}function Nx(e,...t){let r=Array.isArray(t[0])?t[0]:t;return Wr({test:(s,a)=>{var n,c;let f={value:s},p=typeof a?.coercions<"u"?Yf(f,"value"):void 0,h=typeof a?.coercions<"u"?[]:void 0;if(!e(s,Object.assign(Object.assign({},a),{coercion:p,coercions:h})))return!1;let E=[];if(typeof h<"u")for(let[,C]of h)E.push(C());try{if(typeof a?.coercions<"u"){if(f.value!==s){if(typeof a?.coercion>"u")return mr(a,"Unbound coercion result");a.coercions.push([(n=a.p)!==null&&n!==void 0?n:".",a.coercion.bind(null,f.value)])}(c=a?.coercions)===null||c===void 0||c.push(...h)}return r.every(C=>C(f.value,a))}finally{for(let C of E)C()}}})}function WB(e,...t){let r=Array.isArray(t[0])?t[0]:t;return Nx(e,r)}function Kqe(e){return Wr({test:(t,r)=>typeof t>"u"?!0:e(t,r)})}function Jqe(e){return Wr({test:(t,r)=>t===null?!0:e(t,r)})}function zqe(e,t){var r;let s=new Set(e),a=VB[(r=t?.missingIf)!==null&&r!==void 0?r:"missing"];return Wr({test:(n,c)=>{let f=new Set(Object.keys(n)),p=[];for(let h of s)a(f,h,n)||p.push(h);return p.length>0?mr(c,`Missing required ${zU(p.length,"property","properties")} ${vE(p,"and")}`):!0}})}function r_(e,t){var r;let s=new Set(e),a=VB[(r=t?.missingIf)!==null&&r!==void 0?r:"missing"];return Wr({test:(n,c)=>Object.keys(n).some(h=>a(s,h,n))?!0:mr(c,`Missing at least one property from ${vE(Array.from(s),"or")}`)})}function Zqe(e,t){var r;let s=new Set(e),a=VB[(r=t?.missingIf)!==null&&r!==void 0?r:"missing"];return Wr({test:(n,c)=>{let f=new Set(Object.keys(n)),p=[];for(let h of s)a(f,h,n)&&p.push(h);return p.length>0?mr(c,`Forbidden ${zU(p.length,"property","properties")} ${vE(p,"and")}`):!0}})}function Xqe(e,t){var r;let s=new Set(e),a=VB[(r=t?.missingIf)!==null&&r!==void 0?r:"missing"];return Wr({test:(n,c)=>{let f=new Set(Object.keys(n)),p=[];for(let h of s)a(f,h,n)&&p.push(h);return p.length>1?mr(c,`Mutually exclusive properties ${vE(p,"and")}`):!0}})}function YB(e,t,r,s){var a,n;let c=new Set((a=s?.ignore)!==null&&a!==void 0?a:[]),f=VB[(n=s?.missingIf)!==null&&n!==void 0?n:"missing"],p=new Set(r),h=$qe[t],E=t===Vf.Forbids?"or":"and";return Wr({test:(C,S)=>{let x=new Set(Object.keys(C));if(!f(x,e,C)||c.has(C[e]))return!0;let I=[];for(let T of p)(f(x,T,C)&&!c.has(C[T]))!==h.expect&&I.push(T);return I.length>=1?mr(S,`Property "${e}" ${h.message} ${zU(I.length,"property","properties")} ${vE(I,E)}`):!0}})}var pqe,hqe,gqe,dqe,mqe,Jte,Eqe,bqe,$U,i0,VB,Vf,$qe,ul=Ze(()=>{pqe=/^[a-zA-Z_][a-zA-Z0-9_]*$/;hqe=/^#[0-9a-f]{6}$/i,gqe=/^#[0-9a-f]{6}([0-9a-f]{2})?$/i,dqe=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,mqe=/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/i,Jte=/^(?:[1-9]\d{3}(-?)(?:(?:0[1-9]|1[0-2])\1(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])\1(?:29|30)|(?:0[13578]|1[02])(?:\1)31|00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[0-5]))|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)(?:(-?)02(?:\2)29|-?366))T(?:[01]\d|2[0-3])(:?)[0-5]\d(?:\3[0-5]\d)?(?:Z|[+-][01]\d(?:\3[0-5]\d)?)$/;Eqe=new Map([["true",!0],["True",!0],["1",!0],[1,!0],["false",!1],["False",!1],["0",!1],[0,!1]]);bqe=e=>Wr({test:(t,r)=>t instanceof e?!0:mr(r,`Expected an instance of ${e.name} (got ${ii(t)})`)}),$U=(e,{exclusive:t=!1}={})=>Wr({test:(r,s)=>{var a,n,c;let f=[],p=typeof s?.errors<"u"?[]:void 0;for(let h=0,E=e.length;h<E;++h){let C=typeof s?.errors<"u"?[]:void 0,S=typeof s?.coercions<"u"?[]:void 0;if(e[h](r,Object.assign(Object.assign({},s),{errors:C,coercions:S,p:`${(a=s?.p)!==null&&a!==void 0?a:"."}#${h+1}`}))){if(f.push([`#${h+1}`,S]),!t)break}else p?.push(C[0])}if(f.length===1){let[,h]=f[0];return typeof h<"u"&&((n=s?.coercions)===null||n===void 0||n.push(...h)),!0}return f.length>1?mr(s,`Expected to match exactly a single predicate (matched ${f.join(", ")})`):(c=s?.errors)===null||c===void 0||c.push(...p),!1}});i0=class extends Error{constructor({errors:t}={}){let r="Type mismatch";if(t&&t.length>0){r+=`
`;for(let s of t)r+=`
- ${s}`}super(r)}};VB={missing:(e,t)=>e.has(t),undefined:(e,t,r)=>e.has(t)&&typeof r[t]<"u",nil:(e,t,r)=>e.has(t)&&r[t]!=null,falsy:(e,t,r)=>e.has(t)&&!!r[t]};(function(e){e.Forbids="Forbids",e.Requires="Requires"})(Vf||(Vf={}));$qe={[Vf.Forbids]:{expect:!1,message:"forbids using"},[Vf.Requires]:{expect:!0,message:"requires using"}}});var at,s0=Ze(()=>{wp();at=class{constructor(){this.help=!1}static Usage(t){return t}async catch(t){throw t}async validateAndExecute(){let r=this.constructor.schema;if(Array.isArray(r)){let{isDict:a,isUnknown:n,applyCascade:c}=await Promise.resolve().then(()=>(ul(),Yo)),f=c(a(n()),r),p=[],h=[];if(!f(this,{errors:p,coercions:h}))throw jB("Invalid option schema",p);for(let[,C]of h)C()}else if(r!=null)throw new Error("Invalid command schema");let s=await this.execute();return typeof s<"u"?s:0}};at.isOption=HB;at.Default=[]});function fl(e){VU&&console.log(e)}function tre(){let e={nodes:[]};for(let t=0;t<In.CustomNode;++t)e.nodes.push(Wl());return e}function e9e(e){let t=tre(),r=[],s=t.nodes.length;for(let a of e){r.push(s);for(let n=0;n<a.nodes.length;++n)nre(n)||t.nodes.push(l9e(a.nodes[n],s));s+=a.nodes.length-In.CustomNode+1}for(let a of r)DE(t,In.InitialNode,a);return t}function Fu(e,t){return e.nodes.push(t),e.nodes.length-1}function t9e(e){let t=new Set,r=s=>{if(t.has(s))return;t.add(s);let a=e.nodes[s];for(let c of Object.values(a.statics))for(let{to:f}of c)r(f);for(let[,{to:c}]of a.dynamics)r(c);for(let{to:c}of a.shortcuts)r(c);let n=new Set(a.shortcuts.map(({to:c})=>c));for(;a.shortcuts.length>0;){let{to:c}=a.shortcuts.shift(),f=e.nodes[c];for(let[p,h]of Object.entries(f.statics)){let E=Object.prototype.hasOwnProperty.call(a.statics,p)?a.statics[p]:a.statics[p]=[];for(let C of h)E.some(({to:S})=>C.to===S)||E.push(C)}for(let[p,h]of f.dynamics)a.dynamics.some(([E,{to:C}])=>p===E&&h.to===C)||a.dynamics.push([p,h]);for(let p of f.shortcuts)n.has(p.to)||(a.shortcuts.push(p),n.add(p.to))}};r(In.InitialNode)}function r9e(e,{prefix:t=""}={}){if(VU){fl(`${t}Nodes are:`);for(let r=0;r<e.nodes.length;++r)fl(`${t}  ${r}: ${JSON.stringify(e.nodes[r])}`)}}function n9e(e,t,r=!1){fl(`Running a vm on ${JSON.stringify(t)}`);let s=[{node:In.InitialNode,state:{candidateUsage:null,requiredOptions:[],errorMessage:null,ignoreOptions:!1,options:[],path:[],positionals:[],remainder:null,selectedIndex:null,partial:!1,tokens:[]}}];r9e(e,{prefix:"  "});let a=[ni.StartOfInput,...t];for(let n=0;n<a.length;++n){let c=a[n],f=c===ni.EndOfInput||c===ni.EndOfPartialInput,p=n-1;fl(`  Processing ${JSON.stringify(c)}`);let h=[];for(let{node:E,state:C}of s){fl(`    Current node is ${E}`);let S=e.nodes[E];if(E===In.ErrorNode){h.push({node:E,state:C});continue}console.assert(S.shortcuts.length===0,"Shortcuts should have been eliminated by now");let x=Object.prototype.hasOwnProperty.call(S.statics,c);if(!r||n<a.length-1||x)if(x){let I=S.statics[c];for(let{to:T,reducer:O}of I)h.push({node:T,state:typeof O<"u"?Ox(i_,O,C,c,p):C}),fl(`      Static transition to ${T} found`)}else fl("      No static transition found");else{let I=!1;for(let T of Object.keys(S.statics))if(T.startsWith(c)){if(c===T)for(let{to:O,reducer:U}of S.statics[T])h.push({node:O,state:typeof U<"u"?Ox(i_,U,C,c,p):C}),fl(`      Static transition to ${O} found`);else for(let{to:O}of S.statics[T])h.push({node:O,state:{...C,remainder:T.slice(c.length)}}),fl(`      Static transition to ${O} found (partial match)`);I=!0}I||fl("      No partial static transition found")}if(!f)for(let[I,{to:T,reducer:O}]of S.dynamics)Ox(c9e,I,C,c,p)&&(h.push({node:T,state:typeof O<"u"?Ox(i_,O,C,c,p):C}),fl(`      Dynamic transition to ${T} found (via ${I})`))}if(h.length===0&&f&&t.length===1)return[{node:In.InitialNode,state:ere}];if(h.length===0)throw new BE(t,s.filter(({node:E})=>E!==In.ErrorNode).map(({state:E})=>({usage:E.candidateUsage,reason:null})));if(h.every(({node:E})=>E===In.ErrorNode))throw new BE(t,h.map(({state:E})=>({usage:E.candidateUsage,reason:E.errorMessage})));s=s9e(h)}if(s.length>0){fl("  Results:");for(let n of s)fl(`    - ${n.node} -> ${JSON.stringify(n.state)}`)}else fl("  No results");return s}function i9e(e,t,{endToken:r=ni.EndOfInput}={}){let s=n9e(e,[...t,r]);return o9e(t,s.map(({state:a})=>a))}function s9e(e){let t=0;for(let{state:r}of e)r.path.length>t&&(t=r.path.length);return e.filter(({state:r})=>r.path.length===t)}function o9e(e,t){let r=t.filter(S=>S.selectedIndex!==null),s=r.filter(S=>!S.partial);if(s.length>0&&(r=s),r.length===0)throw new Error;let a=r.filter(S=>S.selectedIndex===Td||S.requiredOptions.every(x=>x.some(I=>S.options.find(T=>T.name===I))));if(a.length===0)throw new BE(e,r.map(S=>({usage:S.candidateUsage,reason:null})));let n=0;for(let S of a)S.path.length>n&&(n=S.path.length);let c=a.filter(S=>S.path.length===n),f=S=>S.positionals.filter(({extra:x})=>!x).length+S.options.length,p=c.map(S=>({state:S,positionalCount:f(S)})),h=0;for(let{positionalCount:S}of p)S>h&&(h=S);let E=p.filter(({positionalCount:S})=>S===h).map(({state:S})=>S),C=a9e(E);if(C.length>1)throw new xx(e,C.map(S=>S.candidateUsage));return C[0]}function a9e(e){let t=[],r=[];for(let s of e)s.selectedIndex===Td?r.push(s):t.push(s);return r.length>0&&t.push({...ere,path:rre(...r.map(s=>s.path)),options:r.reduce((s,a)=>s.concat(a.options),[])}),t}function rre(e,t,...r){return t===void 0?Array.from(e):rre(e.filter((s,a)=>s===t[a]),...r)}function Wl(){return{dynamics:[],shortcuts:[],statics:{}}}function nre(e){return e===In.SuccessNode||e===In.ErrorNode}function n_(e,t=0){return{to:nre(e.to)?e.to:e.to>=In.CustomNode?e.to+t-In.CustomNode+1:e.to+t,reducer:e.reducer}}function l9e(e,t=0){let r=Wl();for(let[s,a]of e.dynamics)r.dynamics.push([s,n_(a,t)]);for(let s of e.shortcuts)r.shortcuts.push(n_(s,t));for(let[s,a]of Object.entries(e.statics))r.statics[s]=a.map(n=>n_(n,t));return r}function qs(e,t,r,s,a){e.nodes[t].dynamics.push([r,{to:s,reducer:a}])}function DE(e,t,r,s){e.nodes[t].shortcuts.push({to:r,reducer:s})}function Ba(e,t,r,s,a){(Object.prototype.hasOwnProperty.call(e.nodes[t].statics,r)?e.nodes[t].statics[r]:e.nodes[t].statics[r]=[]).push({to:s,reducer:a})}function Ox(e,t,r,s,a){if(Array.isArray(t)){let[n,...c]=t;return e[n](r,s,a,...c)}else return e[t](r,s,a)}var ere,c9e,i_,Vl,s_,Lx,Mx=Ze(()=>{Px();kx();ere={candidateUsage:null,requiredOptions:[],errorMessage:null,ignoreOptions:!1,path:[],positionals:[],options:[],remainder:null,selectedIndex:Td,partial:!1,tokens:[]};c9e={always:()=>!0,isOptionLike:(e,t)=>!e.ignoreOptions&&t!=="-"&&t.startsWith("-"),isNotOptionLike:(e,t)=>e.ignoreOptions||t==="-"||!t.startsWith("-"),isOption:(e,t,r,s)=>!e.ignoreOptions&&t===s,isBatchOption:(e,t,r,s)=>!e.ignoreOptions&&Vte.test(t)&&[...t.slice(1)].every(a=>s.has(`-${a}`)),isBoundOption:(e,t,r,s,a)=>{let n=t.match(WU);return!e.ignoreOptions&&!!n&&bx.test(n[1])&&s.has(n[1])&&a.filter(c=>c.nameSet.includes(n[1])).every(c=>c.allowBinding)},isNegatedOption:(e,t,r,s)=>!e.ignoreOptions&&t===`--no-${s.slice(2)}`,isHelp:(e,t)=>!e.ignoreOptions&&qU.test(t),isUnsupportedOption:(e,t,r,s)=>!e.ignoreOptions&&t.startsWith("-")&&bx.test(t)&&!s.has(t),isInvalidOption:(e,t)=>!e.ignoreOptions&&t.startsWith("-")&&!bx.test(t)},i_={setCandidateState:(e,t,r,s)=>({...e,...s}),setSelectedIndex:(e,t,r,s)=>({...e,selectedIndex:s}),setPartialIndex:(e,t,r,s)=>({...e,selectedIndex:s,partial:!0}),pushBatch:(e,t,r,s)=>{let a=e.options.slice(),n=e.tokens.slice();for(let c=1;c<t.length;++c){let f=s.get(`-${t[c]}`),p=c===1?[0,2]:[c,c+1];a.push({name:f,value:!0}),n.push({segmentIndex:r,type:"option",option:f,slice:p})}return{...e,options:a,tokens:n}},pushBound:(e,t,r)=>{let[,s,a]=t.match(WU),n=e.options.concat({name:s,value:a}),c=e.tokens.concat([{segmentIndex:r,type:"option",slice:[0,s.length],option:s},{segmentIndex:r,type:"assign",slice:[s.length,s.length+1]},{segmentIndex:r,type:"value",slice:[s.length+1,s.length+a.length+1]}]);return{...e,options:n,tokens:c}},pushPath:(e,t,r)=>{let s=e.path.concat(t),a=e.tokens.concat({segmentIndex:r,type:"path"});return{...e,path:s,tokens:a}},pushPositional:(e,t,r)=>{let s=e.positionals.concat({value:t,extra:!1}),a=e.tokens.concat({segmentIndex:r,type:"positional"});return{...e,positionals:s,tokens:a}},pushExtra:(e,t,r)=>{let s=e.positionals.concat({value:t,extra:!0}),a=e.tokens.concat({segmentIndex:r,type:"positional"});return{...e,positionals:s,tokens:a}},pushExtraNoLimits:(e,t,r)=>{let s=e.positionals.concat({value:t,extra:Vl}),a=e.tokens.concat({segmentIndex:r,type:"positional"});return{...e,positionals:s,tokens:a}},pushTrue:(e,t,r,s)=>{let a=e.options.concat({name:s,value:!0}),n=e.tokens.concat({segmentIndex:r,type:"option",option:s});return{...e,options:a,tokens:n}},pushFalse:(e,t,r,s)=>{let a=e.options.concat({name:s,value:!1}),n=e.tokens.concat({segmentIndex:r,type:"option",option:s});return{...e,options:a,tokens:n}},pushUndefined:(e,t,r,s)=>{let a=e.options.concat({name:t,value:void 0}),n=e.tokens.concat({segmentIndex:r,type:"option",option:t});return{...e,options:a,tokens:n}},pushStringValue:(e,t,r)=>{var s;let a=e.options[e.options.length-1],n=e.options.slice(),c=e.tokens.concat({segmentIndex:r,type:"value"});return a.value=((s=a.value)!==null&&s!==void 0?s:[]).concat([t]),{...e,options:n,tokens:c}},setStringValue:(e,t,r)=>{let s=e.options[e.options.length-1],a=e.options.slice(),n=e.tokens.concat({segmentIndex:r,type:"value"});return s.value=t,{...e,options:a,tokens:n}},inhibateOptions:e=>({...e,ignoreOptions:!0}),useHelp:(e,t,r,s)=>{let[,,a]=t.match(qU);return typeof a<"u"?{...e,options:[{name:"-c",value:String(s)},{name:"-i",value:a}]}:{...e,options:[{name:"-c",value:String(s)}]}},setError:(e,t,r,s)=>t===ni.EndOfInput||t===ni.EndOfPartialInput?{...e,errorMessage:`${s}.`}:{...e,errorMessage:`${s} ("${t}").`},setOptionArityError:(e,t)=>{let r=e.options[e.options.length-1];return{...e,errorMessage:`Not enough arguments to option ${r.name}.`}}},Vl=Symbol(),s_=class{constructor(t,r){this.allOptionNames=new Map,this.arity={leading:[],trailing:[],extra:[],proxy:!1},this.options=[],this.paths=[],this.cliIndex=t,this.cliOpts=r}addPath(t){this.paths.push(t)}setArity({leading:t=this.arity.leading,trailing:r=this.arity.trailing,extra:s=this.arity.extra,proxy:a=this.arity.proxy}){Object.assign(this.arity,{leading:t,trailing:r,extra:s,proxy:a})}addPositional({name:t="arg",required:r=!0}={}){if(!r&&this.arity.extra===Vl)throw new Error("Optional parameters cannot be declared when using .rest() or .proxy()");if(!r&&this.arity.trailing.length>0)throw new Error("Optional parameters cannot be declared after the required trailing positional arguments");!r&&this.arity.extra!==Vl?this.arity.extra.push(t):this.arity.extra!==Vl&&this.arity.extra.length===0?this.arity.leading.push(t):this.arity.trailing.push(t)}addRest({name:t="arg",required:r=0}={}){if(this.arity.extra===Vl)throw new Error("Infinite lists cannot be declared multiple times in the same command");if(this.arity.trailing.length>0)throw new Error("Infinite lists cannot be declared after the required trailing positional arguments");for(let s=0;s<r;++s)this.addPositional({name:t});this.arity.extra=Vl}addProxy({required:t=0}={}){this.addRest({required:t}),this.arity.proxy=!0}addOption({names:t,description:r,arity:s=0,hidden:a=!1,required:n=!1,allowBinding:c=!0}){if(!c&&s>1)throw new Error("The arity cannot be higher than 1 when the option only supports the --arg=value syntax");if(!Number.isInteger(s))throw new Error(`The arity must be an integer, got ${s}`);if(s<0)throw new Error(`The arity must be positive, got ${s}`);let f=t.reduce((p,h)=>h.length>p.length?h:p,"");for(let p of t)this.allOptionNames.set(p,f);this.options.push({preferredName:f,nameSet:t,description:r,arity:s,hidden:a,required:n,allowBinding:c})}setContext(t){this.context=t}usage({detailed:t=!0,inlineOptions:r=!0}={}){let s=[this.cliOpts.binaryName],a=[];if(this.paths.length>0&&s.push(...this.paths[0]),t){for(let{preferredName:c,nameSet:f,arity:p,hidden:h,description:E,required:C}of this.options){if(h)continue;let S=[];for(let I=0;I<p;++I)S.push(` #${I}`);let x=`${f.join(",")}${S.join("")}`;!r&&E?a.push({preferredName:c,nameSet:f,definition:x,description:E,required:C}):s.push(C?`<${x}>`:`[${x}]`)}s.push(...this.arity.leading.map(c=>`<${c}>`)),this.arity.extra===Vl?s.push("..."):s.push(...this.arity.extra.map(c=>`[${c}]`)),s.push(...this.arity.trailing.map(c=>`<${c}>`))}return{usage:s.join(" "),options:a}}compile(){if(typeof this.context>"u")throw new Error("Assertion failed: No context attached");let t=tre(),r=In.InitialNode,s=this.usage().usage,a=this.options.filter(f=>f.required).map(f=>f.nameSet);r=Fu(t,Wl()),Ba(t,In.InitialNode,ni.StartOfInput,r,["setCandidateState",{candidateUsage:s,requiredOptions:a}]);let n=this.arity.proxy?"always":"isNotOptionLike",c=this.paths.length>0?this.paths:[[]];for(let f of c){let p=r;if(f.length>0){let S=Fu(t,Wl());DE(t,p,S),this.registerOptions(t,S),p=S}for(let S=0;S<f.length;++S){let x=Fu(t,Wl());Ba(t,p,f[S],x,"pushPath"),p=x}if(this.arity.leading.length>0||!this.arity.proxy){let S=Fu(t,Wl());qs(t,p,"isHelp",S,["useHelp",this.cliIndex]),qs(t,S,"always",S,"pushExtra"),Ba(t,S,ni.EndOfInput,In.SuccessNode,["setSelectedIndex",Td]),this.registerOptions(t,p)}this.arity.leading.length>0&&(Ba(t,p,ni.EndOfInput,In.ErrorNode,["setError","Not enough positional arguments"]),Ba(t,p,ni.EndOfPartialInput,In.SuccessNode,["setPartialIndex",this.cliIndex]));let h=p;for(let S=0;S<this.arity.leading.length;++S){let x=Fu(t,Wl());(!this.arity.proxy||S+1!==this.arity.leading.length)&&this.registerOptions(t,x),(this.arity.trailing.length>0||S+1!==this.arity.leading.length)&&(Ba(t,x,ni.EndOfInput,In.ErrorNode,["setError","Not enough positional arguments"]),Ba(t,x,ni.EndOfPartialInput,In.SuccessNode,["setPartialIndex",this.cliIndex])),qs(t,h,"isNotOptionLike",x,"pushPositional"),h=x}let E=h;if(this.arity.extra===Vl||this.arity.extra.length>0){let S=Fu(t,Wl());if(DE(t,h,S),this.arity.extra===Vl){let x=Fu(t,Wl());this.arity.proxy||this.registerOptions(t,x),qs(t,h,n,x,"pushExtraNoLimits"),qs(t,x,n,x,"pushExtraNoLimits"),DE(t,x,S)}else for(let x=0;x<this.arity.extra.length;++x){let I=Fu(t,Wl());(!this.arity.proxy||x>0)&&this.registerOptions(t,I),qs(t,E,n,I,"pushExtra"),DE(t,I,S),E=I}E=S}this.arity.trailing.length>0&&(Ba(t,E,ni.EndOfInput,In.ErrorNode,["setError","Not enough positional arguments"]),Ba(t,E,ni.EndOfPartialInput,In.SuccessNode,["setPartialIndex",this.cliIndex]));let C=E;for(let S=0;S<this.arity.trailing.length;++S){let x=Fu(t,Wl());this.arity.proxy||this.registerOptions(t,x),S+1<this.arity.trailing.length&&(Ba(t,x,ni.EndOfInput,In.ErrorNode,["setError","Not enough positional arguments"]),Ba(t,x,ni.EndOfPartialInput,In.SuccessNode,["setPartialIndex",this.cliIndex])),qs(t,C,"isNotOptionLike",x,"pushPositional"),C=x}qs(t,C,n,In.ErrorNode,["setError","Extraneous positional argument"]),Ba(t,C,ni.EndOfInput,In.SuccessNode,["setSelectedIndex",this.cliIndex]),Ba(t,C,ni.EndOfPartialInput,In.SuccessNode,["setSelectedIndex",this.cliIndex])}return{machine:t,context:this.context}}registerOptions(t,r){qs(t,r,["isOption","--"],r,"inhibateOptions"),qs(t,r,["isBatchOption",this.allOptionNames],r,["pushBatch",this.allOptionNames]),qs(t,r,["isBoundOption",this.allOptionNames,this.options],r,"pushBound"),qs(t,r,["isUnsupportedOption",this.allOptionNames],In.ErrorNode,["setError","Unsupported option name"]),qs(t,r,["isInvalidOption"],In.ErrorNode,["setError","Invalid option name"]);for(let s of this.options)if(s.arity===0)for(let a of s.nameSet)qs(t,r,["isOption",a],r,["pushTrue",s.preferredName]),a.startsWith("--")&&!a.startsWith("--no-")&&qs(t,r,["isNegatedOption",a],r,["pushFalse",s.preferredName]);else{let a=Fu(t,Wl());for(let n of s.nameSet)qs(t,r,["isOption",n],a,["pushUndefined",s.preferredName]);for(let n=0;n<s.arity;++n){let c=Fu(t,Wl());Ba(t,a,ni.EndOfInput,In.ErrorNode,"setOptionArityError"),Ba(t,a,ni.EndOfPartialInput,In.ErrorNode,"setOptionArityError"),qs(t,a,"isOptionLike",In.ErrorNode,"setOptionArityError");let f=s.arity===1?"setStringValue":"pushStringValue";qs(t,a,"isNotOptionLike",c,f),a=c}DE(t,a,r)}}},Lx=class e{constructor({binaryName:t="..."}={}){this.builders=[],this.opts={binaryName:t}}static build(t,r={}){return new e(r).commands(t).compile()}getBuilderByIndex(t){if(!(t>=0&&t<this.builders.length))throw new Error(`Assertion failed: Out-of-bound command index (${t})`);return this.builders[t]}commands(t){for(let r of t)r(this.command());return this}command(){let t=new s_(this.builders.length,this.opts);return this.builders.push(t),t}compile(){let t=[],r=[];for(let a of this.builders){let{machine:n,context:c}=a.compile();t.push(n),r.push(c)}let s=e9e(t);return t9e(s),{machine:s,contexts:r,process:(a,{partial:n}={})=>{let c=n?ni.EndOfPartialInput:ni.EndOfInput;return i9e(s,a,{endToken:c})}}}}});function sre(){return Ux.default&&"getColorDepth"in Ux.default.WriteStream.prototype?Ux.default.WriteStream.prototype.getColorDepth():process.env.FORCE_COLOR==="0"?1:process.env.FORCE_COLOR==="1"||typeof process.stdout<"u"&&process.stdout.isTTY?8:1}function ore(e){let t=ire;if(typeof t>"u"){if(e.stdout===process.stdout&&e.stderr===process.stderr)return null;let{AsyncLocalStorage:r}=Ie("async_hooks");t=ire=new r;let s=process.stdout._write;process.stdout._write=function(n,c,f){let p=t.getStore();return typeof p>"u"?s.call(this,n,c,f):p.stdout.write(n,c,f)};let a=process.stderr._write;process.stderr._write=function(n,c,f){let p=t.getStore();return typeof p>"u"?a.call(this,n,c,f):p.stderr.write(n,c,f)}}return r=>t.run(e,r)}var Ux,ire,are=Ze(()=>{Ux=et(Ie("tty"),1)});var _x,lre=Ze(()=>{s0();_x=class e extends at{constructor(t){super(),this.contexts=t,this.commands=[]}static from(t,r){let s=new e(r);s.path=t.path;for(let a of t.options)switch(a.name){case"-c":s.commands.push(Number(a.value));break;case"-i":s.index=Number(a.value);break}return s}async execute(){let t=this.commands;if(typeof this.index<"u"&&this.index>=0&&this.index<t.length&&(t=[t[this.index]]),t.length===0)this.context.stdout.write(this.cli.usage());else if(t.length===1)this.context.stdout.write(this.cli.usage(this.contexts[t[0]].commandClass,{detailed:!0}));else if(t.length>1){this.context.stdout.write(`Multiple commands match your selection:
`),this.context.stdout.write(`
`);let r=0;for(let s of this.commands)this.context.stdout.write(this.cli.usage(this.contexts[s].commandClass,{prefix:`${r++}. `.padStart(5)}));this.context.stdout.write(`
`),this.context.stdout.write(`Run again with -h=<index> to see the longer details of any of those commands.
`)}}}});async function fre(...e){let{resolvedOptions:t,resolvedCommandClasses:r,resolvedArgv:s,resolvedContext:a}=pre(e);return va.from(r,t).runExit(s,a)}async function Are(...e){let{resolvedOptions:t,resolvedCommandClasses:r,resolvedArgv:s,resolvedContext:a}=pre(e);return va.from(r,t).run(s,a)}function pre(e){let t,r,s,a;switch(typeof process<"u"&&typeof process.argv<"u"&&(s=process.argv.slice(2)),e.length){case 1:r=e[0];break;case 2:e[0]&&e[0].prototype instanceof at||Array.isArray(e[0])?(r=e[0],Array.isArray(e[1])?s=e[1]:a=e[1]):(t=e[0],r=e[1]);break;case 3:Array.isArray(e[2])?(t=e[0],r=e[1],s=e[2]):e[0]&&e[0].prototype instanceof at||Array.isArray(e[0])?(r=e[0],s=e[1],a=e[2]):(t=e[0],r=e[1],a=e[2]);break;default:t=e[0],r=e[1],s=e[2],a=e[3];break}if(typeof s>"u")throw new Error("The argv parameter must be provided when running Clipanion outside of a Node context");return{resolvedOptions:t,resolvedCommandClasses:r,resolvedArgv:s,resolvedContext:a}}function ure(e){return e()}var cre,va,hre=Ze(()=>{Px();Mx();JU();are();s0();lre();cre=Symbol("clipanion/errorCommand");va=class e{constructor({binaryLabel:t,binaryName:r="...",binaryVersion:s,enableCapture:a=!1,enableColors:n}={}){this.registrations=new Map,this.builder=new Lx({binaryName:r}),this.binaryLabel=t,this.binaryName=r,this.binaryVersion=s,this.enableCapture=a,this.enableColors=n}static from(t,r={}){let s=new e(r),a=Array.isArray(t)?t:[t];for(let n of a)s.register(n);return s}register(t){var r;let s=new Map,a=new t;for(let p in a){let h=a[p];typeof h=="object"&&h!==null&&h[at.isOption]&&s.set(p,h)}let n=this.builder.command(),c=n.cliIndex,f=(r=t.paths)!==null&&r!==void 0?r:a.paths;if(typeof f<"u")for(let p of f)n.addPath(p);this.registrations.set(t,{specs:s,builder:n,index:c});for(let[p,{definition:h}]of s.entries())h(n,p);n.setContext({commandClass:t})}process(t,r){let{input:s,context:a,partial:n}=typeof t=="object"&&Array.isArray(t)?{input:t,context:r}:t,{contexts:c,process:f}=this.builder.compile(),p=f(s,{partial:n}),h={...e.defaultContext,...a};switch(p.selectedIndex){case Td:{let E=_x.from(p,c);return E.context=h,E.tokens=p.tokens,E}default:{let{commandClass:E}=c[p.selectedIndex],C=this.registrations.get(E);if(typeof C>"u")throw new Error("Assertion failed: Expected the command class to have been registered.");let S=new E;S.context=h,S.tokens=p.tokens,S.path=p.path;try{for(let[x,{transformer:I}]of C.specs.entries())S[x]=I(C.builder,x,p,h);return S}catch(x){throw x[cre]=S,x}}break}}async run(t,r){var s,a;let n,c={...e.defaultContext,...r},f=(s=this.enableColors)!==null&&s!==void 0?s:c.colorDepth>1;if(!Array.isArray(t))n=t;else try{n=this.process(t,c)}catch(E){return c.stdout.write(this.error(E,{colored:f})),1}if(n.help)return c.stdout.write(this.usage(n,{colored:f,detailed:!0})),0;n.context=c,n.cli={binaryLabel:this.binaryLabel,binaryName:this.binaryName,binaryVersion:this.binaryVersion,enableCapture:this.enableCapture,enableColors:this.enableColors,definitions:()=>this.definitions(),definition:E=>this.definition(E),error:(E,C)=>this.error(E,C),format:E=>this.format(E),process:(E,C)=>this.process(E,{...c,...C}),run:(E,C)=>this.run(E,{...c,...C}),usage:(E,C)=>this.usage(E,C)};let p=this.enableCapture&&(a=ore(c))!==null&&a!==void 0?a:ure,h;try{h=await p(()=>n.validateAndExecute().catch(E=>n.catch(E).then(()=>0)))}catch(E){return c.stdout.write(this.error(E,{colored:f,command:n})),1}return h}async runExit(t,r){process.exitCode=await this.run(t,r)}definition(t,{colored:r=!1}={}){if(!t.usage)return null;let{usage:s}=this.getUsageByRegistration(t,{detailed:!1}),{usage:a,options:n}=this.getUsageByRegistration(t,{detailed:!0,inlineOptions:!1}),c=typeof t.usage.category<"u"?Vo(t.usage.category,{format:this.format(r),paragraphs:!1}):void 0,f=typeof t.usage.description<"u"?Vo(t.usage.description,{format:this.format(r),paragraphs:!1}):void 0,p=typeof t.usage.details<"u"?Vo(t.usage.details,{format:this.format(r),paragraphs:!0}):void 0,h=typeof t.usage.examples<"u"?t.usage.examples.map(([E,C])=>[Vo(E,{format:this.format(r),paragraphs:!1}),C.replace(/\$0/g,this.binaryName)]):void 0;return{path:s,usage:a,category:c,description:f,details:p,examples:h,options:n}}definitions({colored:t=!1}={}){let r=[];for(let s of this.registrations.keys()){let a=this.definition(s,{colored:t});a&&r.push(a)}return r}usage(t=null,{colored:r,detailed:s=!1,prefix:a="$ "}={}){var n;if(t===null){for(let p of this.registrations.keys()){let h=p.paths,E=typeof p.usage<"u";if(!h||h.length===0||h.length===1&&h[0].length===0||((n=h?.some(x=>x.length===0))!==null&&n!==void 0?n:!1))if(t){t=null;break}else t=p;else if(E){t=null;continue}}t&&(s=!0)}let c=t!==null&&t instanceof at?t.constructor:t,f="";if(c)if(s){let{description:p="",details:h="",examples:E=[]}=c.usage||{};p!==""&&(f+=Vo(p,{format:this.format(r),paragraphs:!1}).replace(/^./,x=>x.toUpperCase()),f+=`
`),(h!==""||E.length>0)&&(f+=`${this.format(r).header("Usage")}
`,f+=`
`);let{usage:C,options:S}=this.getUsageByRegistration(c,{inlineOptions:!1});if(f+=`${this.format(r).bold(a)}${C}
`,S.length>0){f+=`
`,f+=`${this.format(r).header("Options")}
`;let x=S.reduce((I,T)=>Math.max(I,T.definition.length),0);f+=`
`;for(let{definition:I,description:T}of S)f+=`  ${this.format(r).bold(I.padEnd(x))}    ${Vo(T,{format:this.format(r),paragraphs:!1})}`}if(h!==""&&(f+=`
`,f+=`${this.format(r).header("Details")}
`,f+=`
`,f+=Vo(h,{format:this.format(r),paragraphs:!0})),E.length>0){f+=`
`,f+=`${this.format(r).header("Examples")}
`;for(let[x,I]of E)f+=`
`,f+=Vo(x,{format:this.format(r),paragraphs:!1}),f+=`${I.replace(/^/m,`  ${this.format(r).bold(a)}`).replace(/\$0/g,this.binaryName)}
`}}else{let{usage:p}=this.getUsageByRegistration(c);f+=`${this.format(r).bold(a)}${p}
`}else{let p=new Map;for(let[S,{index:x}]of this.registrations.entries()){if(typeof S.usage>"u")continue;let I=typeof S.usage.category<"u"?Vo(S.usage.category,{format:this.format(r),paragraphs:!1}):null,T=p.get(I);typeof T>"u"&&p.set(I,T=[]);let{usage:O}=this.getUsageByIndex(x);T.push({commandClass:S,usage:O})}let h=Array.from(p.keys()).sort((S,x)=>S===null?-1:x===null?1:S.localeCompare(x,"en",{usage:"sort",caseFirst:"upper"})),E=typeof this.binaryLabel<"u",C=typeof this.binaryVersion<"u";E||C?(E&&C?f+=`${this.format(r).header(`${this.binaryLabel} - ${this.binaryVersion}`)}

`:E?f+=`${this.format(r).header(`${this.binaryLabel}`)}
`:f+=`${this.format(r).header(`${this.binaryVersion}`)}
`,f+=`  ${this.format(r).bold(a)}${this.binaryName} <command>
`):f+=`${this.format(r).bold(a)}${this.binaryName} <command>
`;for(let S of h){let x=p.get(S).slice().sort((T,O)=>T.usage.localeCompare(O.usage,"en",{usage:"sort",caseFirst:"upper"})),I=S!==null?S.trim():"General commands";f+=`
`,f+=`${this.format(r).header(`${I}`)}
`;for(let{commandClass:T,usage:O}of x){let U=T.usage.description||"undocumented";f+=`
`,f+=`  ${this.format(r).bold(O)}
`,f+=`    ${Vo(U,{format:this.format(r),paragraphs:!1})}`}}f+=`
`,f+=Vo("You can also print more details about any of these commands by calling them with the `-h,--help` flag right after the command name.",{format:this.format(r),paragraphs:!0})}return f}error(t,r){var s,{colored:a,command:n=(s=t[cre])!==null&&s!==void 0?s:null}=r===void 0?{}:r;(!t||typeof t!="object"||!("stack"in t))&&(t=new Error(`Execution failed with a non-error rejection (rejected value: ${JSON.stringify(t)})`));let c="",f=t.name.replace(/([a-z])([A-Z])/g,"$1 $2");f==="Error"&&(f="Internal Error"),c+=`${this.format(a).error(f)}: ${t.message}
`;let p=t.clipanion;return typeof p<"u"?p.type==="usage"&&(c+=`
`,c+=this.usage(n)):t.stack&&(c+=`${t.stack.replace(/^.*\n/,"")}
`),c}format(t){var r;return((r=t??this.enableColors)!==null&&r!==void 0?r:e.defaultContext.colorDepth>1)?Yte:Kte}getUsageByRegistration(t,r){let s=this.registrations.get(t);if(typeof s>"u")throw new Error("Assertion failed: Unregistered command");return this.getUsageByIndex(s.index,r)}getUsageByIndex(t,r){return this.builder.getBuilderByIndex(t).usage(r)}};va.defaultContext={env:process.env,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr,colorDepth:sre()}});var KB,gre=Ze(()=>{s0();KB=class extends at{async execute(){this.context.stdout.write(`${JSON.stringify(this.cli.definitions(),null,2)}
`)}};KB.paths=[["--clipanion=definitions"]]});var JB,dre=Ze(()=>{s0();JB=class extends at{async execute(){this.context.stdout.write(this.cli.usage())}};JB.paths=[["-h"],["--help"]]});function Hx(e={}){return wa({definition(t,r){var s;t.addProxy({name:(s=e.name)!==null&&s!==void 0?s:r,required:e.required})},transformer(t,r,s){return s.positionals.map(({value:a})=>a)}})}var o_=Ze(()=>{wp()});var zB,mre=Ze(()=>{s0();o_();zB=class extends at{constructor(){super(...arguments),this.args=Hx()}async execute(){this.context.stdout.write(`${JSON.stringify(this.cli.process(this.args).tokens,null,2)}
`)}};zB.paths=[["--clipanion=tokens"]]});var ZB,yre=Ze(()=>{s0();ZB=class extends at{async execute(){var t;this.context.stdout.write(`${(t=this.cli.binaryVersion)!==null&&t!==void 0?t:"<unknown>"}
`)}};ZB.paths=[["-v"],["--version"]]});var a_={};Yt(a_,{DefinitionsCommand:()=>KB,HelpCommand:()=>JB,TokensCommand:()=>zB,VersionCommand:()=>ZB});var Ere=Ze(()=>{gre();dre();mre();yre()});function Ire(e,t,r){let[s,a]=Wf(t,r??{}),{arity:n=1}=a,c=e.split(","),f=new Set(c);return wa({definition(p){p.addOption({names:c,arity:n,hidden:a?.hidden,description:a?.description,required:a.required})},transformer(p,h,E){let C,S=typeof s<"u"?[...s]:void 0;for(let{name:x,value:I}of E.options)f.has(x)&&(C=x,S=S??[],S.push(I));return typeof S<"u"?Fd(C??h,S,a.validator):S}})}var Cre=Ze(()=>{wp()});function wre(e,t,r){let[s,a]=Wf(t,r??{}),n=e.split(","),c=new Set(n);return wa({definition(f){f.addOption({names:n,allowBinding:!1,arity:0,hidden:a.hidden,description:a.description,required:a.required})},transformer(f,p,h){let E=s;for(let{name:C,value:S}of h.options)c.has(C)&&(E=S);return E}})}var Bre=Ze(()=>{wp()});function vre(e,t,r){let[s,a]=Wf(t,r??{}),n=e.split(","),c=new Set(n);return wa({definition(f){f.addOption({names:n,allowBinding:!1,arity:0,hidden:a.hidden,description:a.description,required:a.required})},transformer(f,p,h){let E=s;for(let{name:C,value:S}of h.options)c.has(C)&&(E??(E=0),S?E+=1:E=0);return E}})}var Sre=Ze(()=>{wp()});function Dre(e={}){return wa({definition(t,r){var s;t.addRest({name:(s=e.name)!==null&&s!==void 0?s:r,required:e.required})},transformer(t,r,s){let a=c=>{let f=s.positionals[c];return f.extra===Vl||f.extra===!1&&c<t.arity.leading.length},n=0;for(;n<s.positionals.length&&a(n);)n+=1;return s.positionals.splice(0,n).map(({value:c})=>c)}})}var bre=Ze(()=>{Mx();wp()});function u9e(e,t,r){let[s,a]=Wf(t,r??{}),{arity:n=1}=a,c=e.split(","),f=new Set(c);return wa({definition(p){p.addOption({names:c,arity:a.tolerateBoolean?0:n,hidden:a.hidden,description:a.description,required:a.required})},transformer(p,h,E,C){let S,x=s;typeof a.env<"u"&&C.env[a.env]&&(S=a.env,x=C.env[a.env]);for(let{name:I,value:T}of E.options)f.has(I)&&(S=I,x=T);return typeof x=="string"?Fd(S??h,x,a.validator):x}})}function f9e(e={}){let{required:t=!0}=e;return wa({definition(r,s){var a;r.addPositional({name:(a=e.name)!==null&&a!==void 0?a:s,required:e.required})},transformer(r,s,a){var n;for(let c=0;c<a.positionals.length;++c){if(a.positionals[c].extra===Vl||t&&a.positionals[c].extra===!0||!t&&a.positionals[c].extra===!1)continue;let[f]=a.positionals.splice(c,1);return Fd((n=e.name)!==null&&n!==void 0?n:s,f.value,e.validator)}}})}function Pre(e,...t){return typeof e=="string"?u9e(e,...t):f9e(e)}var xre=Ze(()=>{Mx();wp()});var he={};Yt(he,{Array:()=>Ire,Boolean:()=>wre,Counter:()=>vre,Proxy:()=>Hx,Rest:()=>Dre,String:()=>Pre,applyValidator:()=>Fd,cleanValidationError:()=>Qx,formatError:()=>jB,isOptionSymbol:()=>HB,makeCommandOption:()=>wa,rerouteArguments:()=>Wf});var kre=Ze(()=>{wp();o_();Cre();Bre();Sre();bre();xre()});var XB={};Yt(XB,{Builtins:()=>a_,Cli:()=>va,Command:()=>at,Option:()=>he,UsageError:()=>st,formatMarkdownish:()=>Vo,run:()=>Are,runExit:()=>fre});var Vt=Ze(()=>{kx();JU();s0();hre();Ere();kre()});var Qre=G((akt,A9e)=>{A9e.exports={name:"dotenv",version:"16.3.1",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},funding:"https://github.com/motdotla/dotenv?sponsor=1",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}}});var Nre=G((lkt,Bp)=>{var Rre=Ie("fs"),c_=Ie("path"),p9e=Ie("os"),h9e=Ie("crypto"),g9e=Qre(),u_=g9e.version,d9e=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function m9e(e){let t={},r=e.toString();r=r.replace(/\r\n?/mg,`
`);let s;for(;(s=d9e.exec(r))!=null;){let a=s[1],n=s[2]||"";n=n.trim();let c=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),c==='"'&&(n=n.replace(/\\n/g,`
`),n=n.replace(/\\r/g,"\r")),t[a]=n}return t}function y9e(e){let t=Fre(e),r=Ws.configDotenv({path:t});if(!r.parsed)throw new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);let s=Tre(e).split(","),a=s.length,n;for(let c=0;c<a;c++)try{let f=s[c].trim(),p=C9e(r,f);n=Ws.decrypt(p.ciphertext,p.key);break}catch(f){if(c+1>=a)throw f}return Ws.parse(n)}function E9e(e){console.log(`[dotenv@${u_}][INFO] ${e}`)}function I9e(e){console.log(`[dotenv@${u_}][WARN] ${e}`)}function l_(e){console.log(`[dotenv@${u_}][DEBUG] ${e}`)}function Tre(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function C9e(e,t){let r;try{r=new URL(t)}catch(f){throw f.code==="ERR_INVALID_URL"?new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=development"):f}let s=r.password;if(!s)throw new Error("INVALID_DOTENV_KEY: Missing key part");let a=r.searchParams.get("environment");if(!a)throw new Error("INVALID_DOTENV_KEY: Missing environment part");let n=`DOTENV_VAULT_${a.toUpperCase()}`,c=e.parsed[n];if(!c)throw new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${n} in your .env.vault file.`);return{ciphertext:c,key:s}}function Fre(e){let t=c_.resolve(process.cwd(),".env");return e&&e.path&&e.path.length>0&&(t=e.path),t.endsWith(".vault")?t:`${t}.vault`}function w9e(e){return e[0]==="~"?c_.join(p9e.homedir(),e.slice(1)):e}function B9e(e){E9e("Loading env from encrypted .env.vault");let t=Ws._parseVault(e),r=process.env;return e&&e.processEnv!=null&&(r=e.processEnv),Ws.populate(r,t,e),{parsed:t}}function v9e(e){let t=c_.resolve(process.cwd(),".env"),r="utf8",s=!!(e&&e.debug);e&&(e.path!=null&&(t=w9e(e.path)),e.encoding!=null&&(r=e.encoding));try{let a=Ws.parse(Rre.readFileSync(t,{encoding:r})),n=process.env;return e&&e.processEnv!=null&&(n=e.processEnv),Ws.populate(n,a,e),{parsed:a}}catch(a){return s&&l_(`Failed to load ${t} ${a.message}`),{error:a}}}function S9e(e){let t=Fre(e);return Tre(e).length===0?Ws.configDotenv(e):Rre.existsSync(t)?Ws._configVault(e):(I9e(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`),Ws.configDotenv(e))}function D9e(e,t){let r=Buffer.from(t.slice(-64),"hex"),s=Buffer.from(e,"base64"),a=s.slice(0,12),n=s.slice(-16);s=s.slice(12,-16);try{let c=h9e.createDecipheriv("aes-256-gcm",r,a);return c.setAuthTag(n),`${c.update(s)}${c.final()}`}catch(c){let f=c instanceof RangeError,p=c.message==="Invalid key length",h=c.message==="Unsupported state or unable to authenticate data";if(f||p){let E="INVALID_DOTENV_KEY: It must be 64 characters long (or more)";throw new Error(E)}else if(h){let E="DECRYPTION_FAILED: Please check your DOTENV_KEY";throw new Error(E)}else throw console.error("Error: ",c.code),console.error("Error: ",c.message),c}}function b9e(e,t,r={}){let s=!!(r&&r.debug),a=!!(r&&r.override);if(typeof t!="object")throw new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");for(let n of Object.keys(t))Object.prototype.hasOwnProperty.call(e,n)?(a===!0&&(e[n]=t[n]),s&&l_(a===!0?`"${n}" is already defined and WAS overwritten`:`"${n}" is already defined and was NOT overwritten`)):e[n]=t[n]}var Ws={configDotenv:v9e,_configVault:B9e,_parseVault:y9e,config:S9e,decrypt:D9e,parse:m9e,populate:b9e};Bp.exports.configDotenv=Ws.configDotenv;Bp.exports._configVault=Ws._configVault;Bp.exports._parseVault=Ws._parseVault;Bp.exports.config=Ws.config;Bp.exports.decrypt=Ws.decrypt;Bp.exports.parse=Ws.parse;Bp.exports.populate=Ws.populate;Bp.exports=Ws});var Lre=G((ckt,Ore)=>{"use strict";Ore.exports=(e,...t)=>new Promise(r=>{r(e(...t))})});var Nd=G((ukt,f_)=>{"use strict";var P9e=Lre(),Mre=e=>{if(e<1)throw new TypeError("Expected `concurrency` to be a number from 1 and up");let t=[],r=0,s=()=>{r--,t.length>0&&t.shift()()},a=(f,p,...h)=>{r++;let E=P9e(f,...h);p(E),E.then(s,s)},n=(f,p,...h)=>{r<e?a(f,p,...h):t.push(a.bind(null,f,p,...h))},c=(f,...p)=>new Promise(h=>n(f,h,...p));return Object.defineProperties(c,{activeCount:{get:()=>r},pendingCount:{get:()=>t.length}}),c};f_.exports=Mre;f_.exports.default=Mre});function Kf(e){return`YN${e.toString(10).padStart(4,"0")}`}function jx(e){let t=Number(e.slice(2));if(typeof Br[t]>"u")throw new Error(`Unknown message name: "${e}"`);return t}var Br,Gx=Ze(()=>{Br=(Ue=>(Ue[Ue.UNNAMED=0]="UNNAMED",Ue[Ue.EXCEPTION=1]="EXCEPTION",Ue[Ue.MISSING_PEER_DEPENDENCY=2]="MISSING_PEER_DEPENDENCY",Ue[Ue.CYCLIC_DEPENDENCIES=3]="CYCLIC_DEPENDENCIES",Ue[Ue.DISABLED_BUILD_SCRIPTS=4]="DISABLED_BUILD_SCRIPTS",Ue[Ue.BUILD_DISABLED=5]="BUILD_DISABLED",Ue[Ue.SOFT_LINK_BUILD=6]="SOFT_LINK_BUILD",Ue[Ue.MUST_BUILD=7]="MUST_BUILD",Ue[Ue.MUST_REBUILD=8]="MUST_REBUILD",Ue[Ue.BUILD_FAILED=9]="BUILD_FAILED",Ue[Ue.RESOLVER_NOT_FOUND=10]="RESOLVER_NOT_FOUND",Ue[Ue.FETCHER_NOT_FOUND=11]="FETCHER_NOT_FOUND",Ue[Ue.LINKER_NOT_FOUND=12]="LINKER_NOT_FOUND",Ue[Ue.FETCH_NOT_CACHED=13]="FETCH_NOT_CACHED",Ue[Ue.YARN_IMPORT_FAILED=14]="YARN_IMPORT_FAILED",Ue[Ue.REMOTE_INVALID=15]="REMOTE_INVALID",Ue[Ue.REMOTE_NOT_FOUND=16]="REMOTE_NOT_FOUND",Ue[Ue.RESOLUTION_PACK=17]="RESOLUTION_PACK",Ue[Ue.CACHE_CHECKSUM_MISMATCH=18]="CACHE_CHECKSUM_MISMATCH",Ue[Ue.UNUSED_CACHE_ENTRY=19]="UNUSED_CACHE_ENTRY",Ue[Ue.MISSING_LOCKFILE_ENTRY=20]="MISSING_LOCKFILE_ENTRY",Ue[Ue.WORKSPACE_NOT_FOUND=21]="WORKSPACE_NOT_FOUND",Ue[Ue.TOO_MANY_MATCHING_WORKSPACES=22]="TOO_MANY_MATCHING_WORKSPACES",Ue[Ue.CONSTRAINTS_MISSING_DEPENDENCY=23]="CONSTRAINTS_MISSING_DEPENDENCY",Ue[Ue.CONSTRAINTS_INCOMPATIBLE_DEPENDENCY=24]="CONSTRAINTS_INCOMPATIBLE_DEPENDENCY",Ue[Ue.CONSTRAINTS_EXTRANEOUS_DEPENDENCY=25]="CONSTRAINTS_EXTRANEOUS_DEPENDENCY",Ue[Ue.CONSTRAINTS_INVALID_DEPENDENCY=26]="CONSTRAINTS_INVALID_DEPENDENCY",Ue[Ue.CANT_SUGGEST_RESOLUTIONS=27]="CANT_SUGGEST_RESOLUTIONS",Ue[Ue.FROZEN_LOCKFILE_EXCEPTION=28]="FROZEN_LOCKFILE_EXCEPTION",Ue[Ue.CROSS_DRIVE_VIRTUAL_LOCAL=29]="CROSS_DRIVE_VIRTUAL_LOCAL",Ue[Ue.FETCH_FAILED=30]="FETCH_FAILED",Ue[Ue.DANGEROUS_NODE_MODULES=31]="DANGEROUS_NODE_MODULES",Ue[Ue.NODE_GYP_INJECTED=32]="NODE_GYP_INJECTED",Ue[Ue.AUTHENTICATION_NOT_FOUND=33]="AUTHENTICATION_NOT_FOUND",Ue[Ue.INVALID_CONFIGURATION_KEY=34]="INVALID_CONFIGURATION_KEY",Ue[Ue.NETWORK_ERROR=35]="NETWORK_ERROR",Ue[Ue.LIFECYCLE_SCRIPT=36]="LIFECYCLE_SCRIPT",Ue[Ue.CONSTRAINTS_MISSING_FIELD=37]="CONSTRAINTS_MISSING_FIELD",Ue[Ue.CONSTRAINTS_INCOMPATIBLE_FIELD=38]="CONSTRAINTS_INCOMPATIBLE_FIELD",Ue[Ue.CONSTRAINTS_EXTRANEOUS_FIELD=39]="CONSTRAINTS_EXTRANEOUS_FIELD",Ue[Ue.CONSTRAINTS_INVALID_FIELD=40]="CONSTRAINTS_INVALID_FIELD",Ue[Ue.AUTHENTICATION_INVALID=41]="AUTHENTICATION_INVALID",Ue[Ue.PROLOG_UNKNOWN_ERROR=42]="PROLOG_UNKNOWN_ERROR",Ue[Ue.PROLOG_SYNTAX_ERROR=43]="PROLOG_SYNTAX_ERROR",Ue[Ue.PROLOG_EXISTENCE_ERROR=44]="PROLOG_EXISTENCE_ERROR",Ue[Ue.STACK_OVERFLOW_RESOLUTION=45]="STACK_OVERFLOW_RESOLUTION",Ue[Ue.AUTOMERGE_FAILED_TO_PARSE=46]="AUTOMERGE_FAILED_TO_PARSE",Ue[Ue.AUTOMERGE_IMMUTABLE=47]="AUTOMERGE_IMMUTABLE",Ue[Ue.AUTOMERGE_SUCCESS=48]="AUTOMERGE_SUCCESS",Ue[Ue.AUTOMERGE_REQUIRED=49]="AUTOMERGE_REQUIRED",Ue[Ue.DEPRECATED_CLI_SETTINGS=50]="DEPRECATED_CLI_SETTINGS",Ue[Ue.PLUGIN_NAME_NOT_FOUND=51]="PLUGIN_NAME_NOT_FOUND",Ue[Ue.INVALID_PLUGIN_REFERENCE=52]="INVALID_PLUGIN_REFERENCE",Ue[Ue.CONSTRAINTS_AMBIGUITY=53]="CONSTRAINTS_AMBIGUITY",Ue[Ue.CACHE_OUTSIDE_PROJECT=54]="CACHE_OUTSIDE_PROJECT",Ue[Ue.IMMUTABLE_INSTALL=55]="IMMUTABLE_INSTALL",Ue[Ue.IMMUTABLE_CACHE=56]="IMMUTABLE_CACHE",Ue[Ue.INVALID_MANIFEST=57]="INVALID_MANIFEST",Ue[Ue.PACKAGE_PREPARATION_FAILED=58]="PACKAGE_PREPARATION_FAILED",Ue[Ue.INVALID_RANGE_PEER_DEPENDENCY=59]="INVALID_RANGE_PEER_DEPENDENCY",Ue[Ue.INCOMPATIBLE_PEER_DEPENDENCY=60]="INCOMPATIBLE_PEER_DEPENDENCY",Ue[Ue.DEPRECATED_PACKAGE=61]="DEPRECATED_PACKAGE",Ue[Ue.INCOMPATIBLE_OS=62]="INCOMPATIBLE_OS",Ue[Ue.INCOMPATIBLE_CPU=63]="INCOMPATIBLE_CPU",Ue[Ue.FROZEN_ARTIFACT_EXCEPTION=64]="FROZEN_ARTIFACT_EXCEPTION",Ue[Ue.TELEMETRY_NOTICE=65]="TELEMETRY_NOTICE",Ue[Ue.PATCH_HUNK_FAILED=66]="PATCH_HUNK_FAILED",Ue[Ue.INVALID_CONFIGURATION_VALUE=67]="INVALID_CONFIGURATION_VALUE",Ue[Ue.UNUSED_PACKAGE_EXTENSION=68]="UNUSED_PACKAGE_EXTENSION",Ue[Ue.REDUNDANT_PACKAGE_EXTENSION=69]="REDUNDANT_PACKAGE_EXTENSION",Ue[Ue.AUTO_NM_SUCCESS=70]="AUTO_NM_SUCCESS",Ue[Ue.NM_CANT_INSTALL_EXTERNAL_SOFT_LINK=71]="NM_CANT_INSTALL_EXTERNAL_SOFT_LINK",Ue[Ue.NM_PRESERVE_SYMLINKS_REQUIRED=72]="NM_PRESERVE_SYMLINKS_REQUIRED",Ue[Ue.UPDATE_LOCKFILE_ONLY_SKIP_LINK=73]="UPDATE_LOCKFILE_ONLY_SKIP_LINK",Ue[Ue.NM_HARDLINKS_MODE_DOWNGRADED=74]="NM_HARDLINKS_MODE_DOWNGRADED",Ue[Ue.PROLOG_INSTANTIATION_ERROR=75]="PROLOG_INSTANTIATION_ERROR",Ue[Ue.INCOMPATIBLE_ARCHITECTURE=76]="INCOMPATIBLE_ARCHITECTURE",Ue[Ue.GHOST_ARCHITECTURE=77]="GHOST_ARCHITECTURE",Ue[Ue.RESOLUTION_MISMATCH=78]="RESOLUTION_MISMATCH",Ue[Ue.PROLOG_LIMIT_EXCEEDED=79]="PROLOG_LIMIT_EXCEEDED",Ue[Ue.NETWORK_DISABLED=80]="NETWORK_DISABLED",Ue[Ue.NETWORK_UNSAFE_HTTP=81]="NETWORK_UNSAFE_HTTP",Ue[Ue.RESOLUTION_FAILED=82]="RESOLUTION_FAILED",Ue[Ue.AUTOMERGE_GIT_ERROR=83]="AUTOMERGE_GIT_ERROR",Ue[Ue.CONSTRAINTS_CHECK_FAILED=84]="CONSTRAINTS_CHECK_FAILED",Ue[Ue.UPDATED_RESOLUTION_RECORD=85]="UPDATED_RESOLUTION_RECORD",Ue[Ue.EXPLAIN_PEER_DEPENDENCIES_CTA=86]="EXPLAIN_PEER_DEPENDENCIES_CTA",Ue[Ue.MIGRATION_SUCCESS=87]="MIGRATION_SUCCESS",Ue[Ue.VERSION_NOTICE=88]="VERSION_NOTICE",Ue[Ue.TIPS_NOTICE=89]="TIPS_NOTICE",Ue[Ue.OFFLINE_MODE_ENABLED=90]="OFFLINE_MODE_ENABLED",Ue[Ue.INVALID_PROVENANCE_ENVIRONMENT=91]="INVALID_PROVENANCE_ENVIRONMENT",Ue))(Br||{})});var $B=G((Akt,Ure)=>{var x9e="2.0.0",k9e=Number.MAX_SAFE_INTEGER||9007199254740991,Q9e=16,R9e=250,T9e=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Ure.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Q9e,MAX_SAFE_BUILD_LENGTH:R9e,MAX_SAFE_INTEGER:k9e,RELEASE_TYPES:T9e,SEMVER_SPEC_VERSION:x9e,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var e2=G((pkt,_re)=>{var F9e=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};_re.exports=F9e});var bE=G((vp,Hre)=>{var{MAX_SAFE_COMPONENT_LENGTH:A_,MAX_SAFE_BUILD_LENGTH:N9e,MAX_LENGTH:O9e}=$B(),L9e=e2();vp=Hre.exports={};var M9e=vp.re=[],U9e=vp.safeRe=[],rr=vp.src=[],nr=vp.t={},_9e=0,p_="[a-zA-Z0-9-]",H9e=[["\\s",1],["\\d",O9e],[p_,N9e]],j9e=e=>{for(let[t,r]of H9e)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},Kr=(e,t,r)=>{let s=j9e(t),a=_9e++;L9e(e,a,t),nr[e]=a,rr[a]=t,M9e[a]=new RegExp(t,r?"g":void 0),U9e[a]=new RegExp(s,r?"g":void 0)};Kr("NUMERICIDENTIFIER","0|[1-9]\\d*");Kr("NUMERICIDENTIFIERLOOSE","\\d+");Kr("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p_}*`);Kr("MAINVERSION",`(${rr[nr.NUMERICIDENTIFIER]})\\.(${rr[nr.NUMERICIDENTIFIER]})\\.(${rr[nr.NUMERICIDENTIFIER]})`);Kr("MAINVERSIONLOOSE",`(${rr[nr.NUMERICIDENTIFIERLOOSE]})\\.(${rr[nr.NUMERICIDENTIFIERLOOSE]})\\.(${rr[nr.NUMERICIDENTIFIERLOOSE]})`);Kr("PRERELEASEIDENTIFIER",`(?:${rr[nr.NUMERICIDENTIFIER]}|${rr[nr.NONNUMERICIDENTIFIER]})`);Kr("PRERELEASEIDENTIFIERLOOSE",`(?:${rr[nr.NUMERICIDENTIFIERLOOSE]}|${rr[nr.NONNUMERICIDENTIFIER]})`);Kr("PRERELEASE",`(?:-(${rr[nr.PRERELEASEIDENTIFIER]}(?:\\.${rr[nr.PRERELEASEIDENTIFIER]})*))`);Kr("PRERELEASELOOSE",`(?:-?(${rr[nr.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${rr[nr.PRERELEASEIDENTIFIERLOOSE]})*))`);Kr("BUILDIDENTIFIER",`${p_}+`);Kr("BUILD",`(?:\\+(${rr[nr.BUILDIDENTIFIER]}(?:\\.${rr[nr.BUILDIDENTIFIER]})*))`);Kr("FULLPLAIN",`v?${rr[nr.MAINVERSION]}${rr[nr.PRERELEASE]}?${rr[nr.BUILD]}?`);Kr("FULL",`^${rr[nr.FULLPLAIN]}$`);Kr("LOOSEPLAIN",`[v=\\s]*${rr[nr.MAINVERSIONLOOSE]}${rr[nr.PRERELEASELOOSE]}?${rr[nr.BUILD]}?`);Kr("LOOSE",`^${rr[nr.LOOSEPLAIN]}$`);Kr("GTLT","((?:<|>)?=?)");Kr("XRANGEIDENTIFIERLOOSE",`${rr[nr.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);Kr("XRANGEIDENTIFIER",`${rr[nr.NUMERICIDENTIFIER]}|x|X|\\*`);Kr("XRANGEPLAIN",`[v=\\s]*(${rr[nr.XRANGEIDENTIFIER]})(?:\\.(${rr[nr.XRANGEIDENTIFIER]})(?:\\.(${rr[nr.XRANGEIDENTIFIER]})(?:${rr[nr.PRERELEASE]})?${rr[nr.BUILD]}?)?)?`);Kr("XRANGEPLAINLOOSE",`[v=\\s]*(${rr[nr.XRANGEIDENTIFIERLOOSE]})(?:\\.(${rr[nr.XRANGEIDENTIFIERLOOSE]})(?:\\.(${rr[nr.XRANGEIDENTIFIERLOOSE]})(?:${rr[nr.PRERELEASELOOSE]})?${rr[nr.BUILD]}?)?)?`);Kr("XRANGE",`^${rr[nr.GTLT]}\\s*${rr[nr.XRANGEPLAIN]}$`);Kr("XRANGELOOSE",`^${rr[nr.GTLT]}\\s*${rr[nr.XRANGEPLAINLOOSE]}$`);Kr("COERCEPLAIN",`(^|[^\\d])(\\d{1,${A_}})(?:\\.(\\d{1,${A_}}))?(?:\\.(\\d{1,${A_}}))?`);Kr("COERCE",`${rr[nr.COERCEPLAIN]}(?:$|[^\\d])`);Kr("COERCEFULL",rr[nr.COERCEPLAIN]+`(?:${rr[nr.PRERELEASE]})?(?:${rr[nr.BUILD]})?(?:$|[^\\d])`);Kr("COERCERTL",rr[nr.COERCE],!0);Kr("COERCERTLFULL",rr[nr.COERCEFULL],!0);Kr("LONETILDE","(?:~>?)");Kr("TILDETRIM",`(\\s*)${rr[nr.LONETILDE]}\\s+`,!0);vp.tildeTrimReplace="$1~";Kr("TILDE",`^${rr[nr.LONETILDE]}${rr[nr.XRANGEPLAIN]}$`);Kr("TILDELOOSE",`^${rr[nr.LONETILDE]}${rr[nr.XRANGEPLAINLOOSE]}$`);Kr("LONECARET","(?:\\^)");Kr("CARETTRIM",`(\\s*)${rr[nr.LONECARET]}\\s+`,!0);vp.caretTrimReplace="$1^";Kr("CARET",`^${rr[nr.LONECARET]}${rr[nr.XRANGEPLAIN]}$`);Kr("CARETLOOSE",`^${rr[nr.LONECARET]}${rr[nr.XRANGEPLAINLOOSE]}$`);Kr("COMPARATORLOOSE",`^${rr[nr.GTLT]}\\s*(${rr[nr.LOOSEPLAIN]})$|^$`);Kr("COMPARATOR",`^${rr[nr.GTLT]}\\s*(${rr[nr.FULLPLAIN]})$|^$`);Kr("COMPARATORTRIM",`(\\s*)${rr[nr.GTLT]}\\s*(${rr[nr.LOOSEPLAIN]}|${rr[nr.XRANGEPLAIN]})`,!0);vp.comparatorTrimReplace="$1$2$3";Kr("HYPHENRANGE",`^\\s*(${rr[nr.XRANGEPLAIN]})\\s+-\\s+(${rr[nr.XRANGEPLAIN]})\\s*$`);Kr("HYPHENRANGELOOSE",`^\\s*(${rr[nr.XRANGEPLAINLOOSE]})\\s+-\\s+(${rr[nr.XRANGEPLAINLOOSE]})\\s*$`);Kr("STAR","(<|>)?=?\\s*\\*");Kr("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");Kr("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var qx=G((hkt,jre)=>{var G9e=Object.freeze({loose:!0}),q9e=Object.freeze({}),W9e=e=>e?typeof e!="object"?G9e:e:q9e;jre.exports=W9e});var h_=G((gkt,Wre)=>{var Gre=/^[0-9]+$/,qre=(e,t)=>{let r=Gre.test(e),s=Gre.test(t);return r&&s&&(e=+e,t=+t),e===t?0:r&&!s?-1:s&&!r?1:e<t?-1:1},V9e=(e,t)=>qre(t,e);Wre.exports={compareIdentifiers:qre,rcompareIdentifiers:V9e}});var Ko=G((dkt,Jre)=>{var Wx=e2(),{MAX_LENGTH:Vre,MAX_SAFE_INTEGER:Vx}=$B(),{safeRe:Yre,t:Kre}=bE(),Y9e=qx(),{compareIdentifiers:PE}=h_(),g_=class e{constructor(t,r){if(r=Y9e(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Vre)throw new TypeError(`version is longer than ${Vre} characters`);Wx("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let s=t.trim().match(r.loose?Yre[Kre.LOOSE]:Yre[Kre.FULL]);if(!s)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>Vx||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Vx||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Vx||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){let n=+a;if(n>=0&&n<Vx)return n}return a}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Wx("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),PE(this.major,t.major)||PE(this.minor,t.minor)||PE(this.patch,t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let s=this.prerelease[r],a=t.prerelease[r];if(Wx("prerelease compare",r,s,a),s===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(s===void 0)return-1;if(s===a)continue;return PE(s,a)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let s=this.build[r],a=t.build[r];if(Wx("prerelease compare",r,s,a),s===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(s===void 0)return-1;if(s===a)continue;return PE(s,a)}while(++r)}inc(t,r,s){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,s);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,s);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,s),this.inc("pre",r,s);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,s),this.inc("pre",r,s);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let a=Number(s)?1:0;if(!r&&s===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let n=this.prerelease.length;for(;--n>=0;)typeof this.prerelease[n]=="number"&&(this.prerelease[n]++,n=-2);if(n===-1){if(r===this.prerelease.join(".")&&s===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let n=[r,a];s===!1&&(n=[r]),PE(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Jre.exports=g_});var Od=G((mkt,Zre)=>{var zre=Ko(),K9e=(e,t,r=!1)=>{if(e instanceof zre)return e;try{return new zre(e,t)}catch(s){if(!r)return null;throw s}};Zre.exports=K9e});var $re=G((ykt,Xre)=>{var J9e=Od(),z9e=(e,t)=>{let r=J9e(e,t);return r?r.version:null};Xre.exports=z9e});var tne=G((Ekt,ene)=>{var Z9e=Od(),X9e=(e,t)=>{let r=Z9e(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};ene.exports=X9e});var ine=G((Ikt,nne)=>{var rne=Ko(),$9e=(e,t,r,s,a)=>{typeof r=="string"&&(a=s,s=r,r=void 0);try{return new rne(e instanceof rne?e.version:e,r).inc(t,s,a).version}catch{return null}};nne.exports=$9e});var ane=G((Ckt,one)=>{var sne=Od(),eWe=(e,t)=>{let r=sne(e,null,!0),s=sne(t,null,!0),a=r.compare(s);if(a===0)return null;let n=a>0,c=n?r:s,f=n?s:r,p=!!c.prerelease.length;if(!!f.prerelease.length&&!p)return!f.patch&&!f.minor?"major":c.patch?"patch":c.minor?"minor":"major";let E=p?"pre":"";return r.major!==s.major?E+"major":r.minor!==s.minor?E+"minor":r.patch!==s.patch?E+"patch":"prerelease"};one.exports=eWe});var cne=G((wkt,lne)=>{var tWe=Ko(),rWe=(e,t)=>new tWe(e,t).major;lne.exports=rWe});var fne=G((Bkt,une)=>{var nWe=Ko(),iWe=(e,t)=>new nWe(e,t).minor;une.exports=iWe});var pne=G((vkt,Ane)=>{var sWe=Ko(),oWe=(e,t)=>new sWe(e,t).patch;Ane.exports=oWe});var gne=G((Skt,hne)=>{var aWe=Od(),lWe=(e,t)=>{let r=aWe(e,t);return r&&r.prerelease.length?r.prerelease:null};hne.exports=lWe});var vc=G((Dkt,mne)=>{var dne=Ko(),cWe=(e,t,r)=>new dne(e,r).compare(new dne(t,r));mne.exports=cWe});var Ene=G((bkt,yne)=>{var uWe=vc(),fWe=(e,t,r)=>uWe(t,e,r);yne.exports=fWe});var Cne=G((Pkt,Ine)=>{var AWe=vc(),pWe=(e,t)=>AWe(e,t,!0);Ine.exports=pWe});var Yx=G((xkt,Bne)=>{var wne=Ko(),hWe=(e,t,r)=>{let s=new wne(e,r),a=new wne(t,r);return s.compare(a)||s.compareBuild(a)};Bne.exports=hWe});var Sne=G((kkt,vne)=>{var gWe=Yx(),dWe=(e,t)=>e.sort((r,s)=>gWe(r,s,t));vne.exports=dWe});var bne=G((Qkt,Dne)=>{var mWe=Yx(),yWe=(e,t)=>e.sort((r,s)=>mWe(s,r,t));Dne.exports=yWe});var t2=G((Rkt,Pne)=>{var EWe=vc(),IWe=(e,t,r)=>EWe(e,t,r)>0;Pne.exports=IWe});var Kx=G((Tkt,xne)=>{var CWe=vc(),wWe=(e,t,r)=>CWe(e,t,r)<0;xne.exports=wWe});var d_=G((Fkt,kne)=>{var BWe=vc(),vWe=(e,t,r)=>BWe(e,t,r)===0;kne.exports=vWe});var m_=G((Nkt,Qne)=>{var SWe=vc(),DWe=(e,t,r)=>SWe(e,t,r)!==0;Qne.exports=DWe});var Jx=G((Okt,Rne)=>{var bWe=vc(),PWe=(e,t,r)=>bWe(e,t,r)>=0;Rne.exports=PWe});var zx=G((Lkt,Tne)=>{var xWe=vc(),kWe=(e,t,r)=>xWe(e,t,r)<=0;Tne.exports=kWe});var y_=G((Mkt,Fne)=>{var QWe=d_(),RWe=m_(),TWe=t2(),FWe=Jx(),NWe=Kx(),OWe=zx(),LWe=(e,t,r,s)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return QWe(e,r,s);case"!=":return RWe(e,r,s);case">":return TWe(e,r,s);case">=":return FWe(e,r,s);case"<":return NWe(e,r,s);case"<=":return OWe(e,r,s);default:throw new TypeError(`Invalid operator: ${t}`)}};Fne.exports=LWe});var One=G((Ukt,Nne)=>{var MWe=Ko(),UWe=Od(),{safeRe:Zx,t:Xx}=bE(),_We=(e,t)=>{if(e instanceof MWe)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let r=null;if(!t.rtl)r=e.match(t.includePrerelease?Zx[Xx.COERCEFULL]:Zx[Xx.COERCE]);else{let p=t.includePrerelease?Zx[Xx.COERCERTLFULL]:Zx[Xx.COERCERTL],h;for(;(h=p.exec(e))&&(!r||r.index+r[0].length!==e.length);)(!r||h.index+h[0].length!==r.index+r[0].length)&&(r=h),p.lastIndex=h.index+h[1].length+h[2].length;p.lastIndex=-1}if(r===null)return null;let s=r[2],a=r[3]||"0",n=r[4]||"0",c=t.includePrerelease&&r[5]?`-${r[5]}`:"",f=t.includePrerelease&&r[6]?`+${r[6]}`:"";return UWe(`${s}.${a}.${n}${c}${f}`,t)};Nne.exports=_We});var Mne=G((_kt,Lne)=>{"use strict";Lne.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let t=this.head;t;t=t.next)yield t.value}}});var _ne=G((Hkt,Une)=>{"use strict";Une.exports=On;On.Node=Ld;On.create=On;function On(e){var t=this;if(t instanceof On||(t=new On),t.tail=null,t.head=null,t.length=0,e&&typeof e.forEach=="function")e.forEach(function(a){t.push(a)});else if(arguments.length>0)for(var r=0,s=arguments.length;r<s;r++)t.push(arguments[r]);return t}On.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t};On.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}};On.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}};On.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)jWe(this,arguments[e]);return this.length};On.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)GWe(this,arguments[e]);return this.length};On.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}};On.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}};On.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,s=0;r!==null;s++)e.call(t,r.value,s,this),r=r.next};On.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,s=this.length-1;r!==null;s--)e.call(t,r.value,s,this),r=r.prev};On.prototype.get=function(e){for(var t=0,r=this.head;r!==null&&t<e;t++)r=r.next;if(t===e&&r!==null)return r.value};On.prototype.getReverse=function(e){for(var t=0,r=this.tail;r!==null&&t<e;t++)r=r.prev;if(t===e&&r!==null)return r.value};On.prototype.map=function(e,t){t=t||this;for(var r=new On,s=this.head;s!==null;)r.push(e.call(t,s.value,this)),s=s.next;return r};On.prototype.mapReverse=function(e,t){t=t||this;for(var r=new On,s=this.tail;s!==null;)r.push(e.call(t,s.value,this)),s=s.prev;return r};On.prototype.reduce=function(e,t){var r,s=this.head;if(arguments.length>1)r=t;else if(this.head)s=this.head.next,r=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var a=0;s!==null;a++)r=e(r,s.value,a),s=s.next;return r};On.prototype.reduceReverse=function(e,t){var r,s=this.tail;if(arguments.length>1)r=t;else if(this.tail)s=this.tail.prev,r=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var a=this.length-1;s!==null;a--)r=e(r,s.value,a),s=s.prev;return r};On.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;r!==null;t++)e[t]=r.value,r=r.next;return e};On.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;r!==null;t++)e[t]=r.value,r=r.prev;return e};On.prototype.slice=function(e,t){t=t||this.length,t<0&&(t+=this.length),e=e||0,e<0&&(e+=this.length);var r=new On;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var s=0,a=this.head;a!==null&&s<e;s++)a=a.next;for(;a!==null&&s<t;s++,a=a.next)r.push(a.value);return r};On.prototype.sliceReverse=function(e,t){t=t||this.length,t<0&&(t+=this.length),e=e||0,e<0&&(e+=this.length);var r=new On;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var s=this.length,a=this.tail;a!==null&&s>t;s--)a=a.prev;for(;a!==null&&s>e;s--,a=a.prev)r.push(a.value);return r};On.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var s=0,a=this.head;a!==null&&s<e;s++)a=a.next;for(var n=[],s=0;a&&s<t;s++)n.push(a.value),a=this.removeNode(a);a===null&&(a=this.tail),a!==this.head&&a!==this.tail&&(a=a.prev);for(var s=0;s<r.length;s++)a=HWe(this,a,r[s]);return n};On.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;r!==null;r=r.prev){var s=r.prev;r.prev=r.next,r.next=s}return this.head=t,this.tail=e,this};function HWe(e,t,r){var s=t===e.head?new Ld(r,null,t,e):new Ld(r,t,t.next,e);return s.next===null&&(e.tail=s),s.prev===null&&(e.head=s),e.length++,s}function jWe(e,t){e.tail=new Ld(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function GWe(e,t){e.head=new Ld(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function Ld(e,t,r,s){if(!(this instanceof Ld))return new Ld(e,t,r,s);this.list=s,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}try{Mne()(On)}catch{}});var Wne=G((jkt,qne)=>{"use strict";var qWe=_ne(),Md=Symbol("max"),Dp=Symbol("length"),xE=Symbol("lengthCalculator"),n2=Symbol("allowStale"),Ud=Symbol("maxAge"),Sp=Symbol("dispose"),Hne=Symbol("noDisposeOnSet"),Vs=Symbol("lruList"),Nu=Symbol("cache"),Gne=Symbol("updateAgeOnGet"),E_=()=>1,C_=class{constructor(t){if(typeof t=="number"&&(t={max:t}),t||(t={}),t.max&&(typeof t.max!="number"||t.max<0))throw new TypeError("max must be a non-negative number");let r=this[Md]=t.max||1/0,s=t.length||E_;if(this[xE]=typeof s!="function"?E_:s,this[n2]=t.stale||!1,t.maxAge&&typeof t.maxAge!="number")throw new TypeError("maxAge must be a number");this[Ud]=t.maxAge||0,this[Sp]=t.dispose,this[Hne]=t.noDisposeOnSet||!1,this[Gne]=t.updateAgeOnGet||!1,this.reset()}set max(t){if(typeof t!="number"||t<0)throw new TypeError("max must be a non-negative number");this[Md]=t||1/0,r2(this)}get max(){return this[Md]}set allowStale(t){this[n2]=!!t}get allowStale(){return this[n2]}set maxAge(t){if(typeof t!="number")throw new TypeError("maxAge must be a non-negative number");this[Ud]=t,r2(this)}get maxAge(){return this[Ud]}set lengthCalculator(t){typeof t!="function"&&(t=E_),t!==this[xE]&&(this[xE]=t,this[Dp]=0,this[Vs].forEach(r=>{r.length=this[xE](r.value,r.key),this[Dp]+=r.length})),r2(this)}get lengthCalculator(){return this[xE]}get length(){return this[Dp]}get itemCount(){return this[Vs].length}rforEach(t,r){r=r||this;for(let s=this[Vs].tail;s!==null;){let a=s.prev;jne(this,t,s,r),s=a}}forEach(t,r){r=r||this;for(let s=this[Vs].head;s!==null;){let a=s.next;jne(this,t,s,r),s=a}}keys(){return this[Vs].toArray().map(t=>t.key)}values(){return this[Vs].toArray().map(t=>t.value)}reset(){this[Sp]&&this[Vs]&&this[Vs].length&&this[Vs].forEach(t=>this[Sp](t.key,t.value)),this[Nu]=new Map,this[Vs]=new qWe,this[Dp]=0}dump(){return this[Vs].map(t=>$x(this,t)?!1:{k:t.key,v:t.value,e:t.now+(t.maxAge||0)}).toArray().filter(t=>t)}dumpLru(){return this[Vs]}set(t,r,s){if(s=s||this[Ud],s&&typeof s!="number")throw new TypeError("maxAge must be a number");let a=s?Date.now():0,n=this[xE](r,t);if(this[Nu].has(t)){if(n>this[Md])return kE(this,this[Nu].get(t)),!1;let p=this[Nu].get(t).value;return this[Sp]&&(this[Hne]||this[Sp](t,p.value)),p.now=a,p.maxAge=s,p.value=r,this[Dp]+=n-p.length,p.length=n,this.get(t),r2(this),!0}let c=new w_(t,r,n,a,s);return c.length>this[Md]?(this[Sp]&&this[Sp](t,r),!1):(this[Dp]+=c.length,this[Vs].unshift(c),this[Nu].set(t,this[Vs].head),r2(this),!0)}has(t){if(!this[Nu].has(t))return!1;let r=this[Nu].get(t).value;return!$x(this,r)}get(t){return I_(this,t,!0)}peek(t){return I_(this,t,!1)}pop(){let t=this[Vs].tail;return t?(kE(this,t),t.value):null}del(t){kE(this,this[Nu].get(t))}load(t){this.reset();let r=Date.now();for(let s=t.length-1;s>=0;s--){let a=t[s],n=a.e||0;if(n===0)this.set(a.k,a.v);else{let c=n-r;c>0&&this.set(a.k,a.v,c)}}}prune(){this[Nu].forEach((t,r)=>I_(this,r,!1))}},I_=(e,t,r)=>{let s=e[Nu].get(t);if(s){let a=s.value;if($x(e,a)){if(kE(e,s),!e[n2])return}else r&&(e[Gne]&&(s.value.now=Date.now()),e[Vs].unshiftNode(s));return a.value}},$x=(e,t)=>{if(!t||!t.maxAge&&!e[Ud])return!1;let r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[Ud]&&r>e[Ud]},r2=e=>{if(e[Dp]>e[Md])for(let t=e[Vs].tail;e[Dp]>e[Md]&&t!==null;){let r=t.prev;kE(e,t),t=r}},kE=(e,t)=>{if(t){let r=t.value;e[Sp]&&e[Sp](r.key,r.value),e[Dp]-=r.length,e[Nu].delete(r.key),e[Vs].removeNode(t)}},w_=class{constructor(t,r,s,a,n){this.key=t,this.value=r,this.length=s,this.now=a,this.maxAge=n||0}},jne=(e,t,r,s)=>{let a=r.value;$x(e,a)&&(kE(e,r),e[n2]||(a=void 0)),a&&t.call(s,a.value,a.key,e)};qne.exports=C_});var Sc=G((Gkt,Jne)=>{var B_=class e{constructor(t,r){if(r=VWe(r),t instanceof e)return t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease?t:new e(t.raw,r);if(t instanceof v_)return this.raw=t.value,this.set=[[t]],this.format(),this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=t.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(s=>this.parseRange(s.trim())).filter(s=>s.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let s=this.set[0];if(this.set=this.set.filter(a=>!Yne(a[0])),this.set.length===0)this.set=[s];else if(this.set.length>1){for(let a of this.set)if(a.length===1&&$We(a[0])){this.set=[a];break}}}this.format()}format(){return this.range=this.set.map(t=>t.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(t){let s=((this.options.includePrerelease&&ZWe)|(this.options.loose&&XWe))+":"+t,a=Vne.get(s);if(a)return a;let n=this.options.loose,c=n?Al[Sa.HYPHENRANGELOOSE]:Al[Sa.HYPHENRANGE];t=t.replace(c,cVe(this.options.includePrerelease)),Si("hyphen replace",t),t=t.replace(Al[Sa.COMPARATORTRIM],KWe),Si("comparator trim",t),t=t.replace(Al[Sa.TILDETRIM],JWe),Si("tilde trim",t),t=t.replace(Al[Sa.CARETTRIM],zWe),Si("caret trim",t);let f=t.split(" ").map(C=>eVe(C,this.options)).join(" ").split(/\s+/).map(C=>lVe(C,this.options));n&&(f=f.filter(C=>(Si("loose invalid filter",C,this.options),!!C.match(Al[Sa.COMPARATORLOOSE])))),Si("range list",f);let p=new Map,h=f.map(C=>new v_(C,this.options));for(let C of h){if(Yne(C))return[C];p.set(C.value,C)}p.size>1&&p.has("")&&p.delete("");let E=[...p.values()];return Vne.set(s,E),E}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(s=>Kne(s,r)&&t.set.some(a=>Kne(a,r)&&s.every(n=>a.every(c=>n.intersects(c,r)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new YWe(t,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(uVe(this.set[r],t,this.options))return!0;return!1}};Jne.exports=B_;var WWe=Wne(),Vne=new WWe({max:1e3}),VWe=qx(),v_=i2(),Si=e2(),YWe=Ko(),{safeRe:Al,t:Sa,comparatorTrimReplace:KWe,tildeTrimReplace:JWe,caretTrimReplace:zWe}=bE(),{FLAG_INCLUDE_PRERELEASE:ZWe,FLAG_LOOSE:XWe}=$B(),Yne=e=>e.value==="<0.0.0-0",$We=e=>e.value==="",Kne=(e,t)=>{let r=!0,s=e.slice(),a=s.pop();for(;r&&s.length;)r=s.every(n=>a.intersects(n,t)),a=s.pop();return r},eVe=(e,t)=>(Si("comp",e,t),e=nVe(e,t),Si("caret",e),e=tVe(e,t),Si("tildes",e),e=sVe(e,t),Si("xrange",e),e=aVe(e,t),Si("stars",e),e),Da=e=>!e||e.toLowerCase()==="x"||e==="*",tVe=(e,t)=>e.trim().split(/\s+/).map(r=>rVe(r,t)).join(" "),rVe=(e,t)=>{let r=t.loose?Al[Sa.TILDELOOSE]:Al[Sa.TILDE];return e.replace(r,(s,a,n,c,f)=>{Si("tilde",e,s,a,n,c,f);let p;return Da(a)?p="":Da(n)?p=`>=${a}.0.0 <${+a+1}.0.0-0`:Da(c)?p=`>=${a}.${n}.0 <${a}.${+n+1}.0-0`:f?(Si("replaceTilde pr",f),p=`>=${a}.${n}.${c}-${f} <${a}.${+n+1}.0-0`):p=`>=${a}.${n}.${c} <${a}.${+n+1}.0-0`,Si("tilde return",p),p})},nVe=(e,t)=>e.trim().split(/\s+/).map(r=>iVe(r,t)).join(" "),iVe=(e,t)=>{Si("caret",e,t);let r=t.loose?Al[Sa.CARETLOOSE]:Al[Sa.CARET],s=t.includePrerelease?"-0":"";return e.replace(r,(a,n,c,f,p)=>{Si("caret",e,a,n,c,f,p);let h;return Da(n)?h="":Da(c)?h=`>=${n}.0.0${s} <${+n+1}.0.0-0`:Da(f)?n==="0"?h=`>=${n}.${c}.0${s} <${n}.${+c+1}.0-0`:h=`>=${n}.${c}.0${s} <${+n+1}.0.0-0`:p?(Si("replaceCaret pr",p),n==="0"?c==="0"?h=`>=${n}.${c}.${f}-${p} <${n}.${c}.${+f+1}-0`:h=`>=${n}.${c}.${f}-${p} <${n}.${+c+1}.0-0`:h=`>=${n}.${c}.${f}-${p} <${+n+1}.0.0-0`):(Si("no pr"),n==="0"?c==="0"?h=`>=${n}.${c}.${f}${s} <${n}.${c}.${+f+1}-0`:h=`>=${n}.${c}.${f}${s} <${n}.${+c+1}.0-0`:h=`>=${n}.${c}.${f} <${+n+1}.0.0-0`),Si("caret return",h),h})},sVe=(e,t)=>(Si("replaceXRanges",e,t),e.split(/\s+/).map(r=>oVe(r,t)).join(" ")),oVe=(e,t)=>{e=e.trim();let r=t.loose?Al[Sa.XRANGELOOSE]:Al[Sa.XRANGE];return e.replace(r,(s,a,n,c,f,p)=>{Si("xRange",e,s,a,n,c,f,p);let h=Da(n),E=h||Da(c),C=E||Da(f),S=C;return a==="="&&S&&(a=""),p=t.includePrerelease?"-0":"",h?a===">"||a==="<"?s="<0.0.0-0":s="*":a&&S?(E&&(c=0),f=0,a===">"?(a=">=",E?(n=+n+1,c=0,f=0):(c=+c+1,f=0)):a==="<="&&(a="<",E?n=+n+1:c=+c+1),a==="<"&&(p="-0"),s=`${a+n}.${c}.${f}${p}`):E?s=`>=${n}.0.0${p} <${+n+1}.0.0-0`:C&&(s=`>=${n}.${c}.0${p} <${n}.${+c+1}.0-0`),Si("xRange return",s),s})},aVe=(e,t)=>(Si("replaceStars",e,t),e.trim().replace(Al[Sa.STAR],"")),lVe=(e,t)=>(Si("replaceGTE0",e,t),e.trim().replace(Al[t.includePrerelease?Sa.GTE0PRE:Sa.GTE0],"")),cVe=e=>(t,r,s,a,n,c,f,p,h,E,C,S,x)=>(Da(s)?r="":Da(a)?r=`>=${s}.0.0${e?"-0":""}`:Da(n)?r=`>=${s}.${a}.0${e?"-0":""}`:c?r=`>=${r}`:r=`>=${r}${e?"-0":""}`,Da(h)?p="":Da(E)?p=`<${+h+1}.0.0-0`:Da(C)?p=`<${h}.${+E+1}.0-0`:S?p=`<=${h}.${E}.${C}-${S}`:e?p=`<${h}.${E}.${+C+1}-0`:p=`<=${p}`,`${r} ${p}`.trim()),uVe=(e,t,r)=>{for(let s=0;s<e.length;s++)if(!e[s].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let s=0;s<e.length;s++)if(Si(e[s].semver),e[s].semver!==v_.ANY&&e[s].semver.prerelease.length>0){let a=e[s].semver;if(a.major===t.major&&a.minor===t.minor&&a.patch===t.patch)return!0}return!1}return!0}});var i2=G((qkt,tie)=>{var s2=Symbol("SemVer ANY"),b_=class e{static get ANY(){return s2}constructor(t,r){if(r=zne(r),t instanceof e){if(t.loose===!!r.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),D_("comparator",t,r),this.options=r,this.loose=!!r.loose,this.parse(t),this.semver===s2?this.value="":this.value=this.operator+this.semver.version,D_("comp",this)}parse(t){let r=this.options.loose?Zne[Xne.COMPARATORLOOSE]:Zne[Xne.COMPARATOR],s=t.match(r);if(!s)throw new TypeError(`Invalid comparator: ${t}`);this.operator=s[1]!==void 0?s[1]:"",this.operator==="="&&(this.operator=""),s[2]?this.semver=new $ne(s[2],this.options.loose):this.semver=s2}toString(){return this.value}test(t){if(D_("Comparator.test",t,this.options.loose),this.semver===s2||t===s2)return!0;if(typeof t=="string")try{t=new $ne(t,this.options)}catch{return!1}return S_(t,this.operator,this.semver,this.options)}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new eie(t.value,r).test(this.value):t.operator===""?t.value===""?!0:new eie(this.value,r).test(t.semver):(r=zne(r),r.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||S_(this.semver,"<",t.semver,r)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||S_(this.semver,">",t.semver,r)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};tie.exports=b_;var zne=qx(),{safeRe:Zne,t:Xne}=bE(),S_=y_(),D_=e2(),$ne=Ko(),eie=Sc()});var o2=G((Wkt,rie)=>{var fVe=Sc(),AVe=(e,t,r)=>{try{t=new fVe(t,r)}catch{return!1}return t.test(e)};rie.exports=AVe});var iie=G((Vkt,nie)=>{var pVe=Sc(),hVe=(e,t)=>new pVe(e,t).set.map(r=>r.map(s=>s.value).join(" ").trim().split(" "));nie.exports=hVe});var oie=G((Ykt,sie)=>{var gVe=Ko(),dVe=Sc(),mVe=(e,t,r)=>{let s=null,a=null,n=null;try{n=new dVe(t,r)}catch{return null}return e.forEach(c=>{n.test(c)&&(!s||a.compare(c)===-1)&&(s=c,a=new gVe(s,r))}),s};sie.exports=mVe});var lie=G((Kkt,aie)=>{var yVe=Ko(),EVe=Sc(),IVe=(e,t,r)=>{let s=null,a=null,n=null;try{n=new EVe(t,r)}catch{return null}return e.forEach(c=>{n.test(c)&&(!s||a.compare(c)===1)&&(s=c,a=new yVe(s,r))}),s};aie.exports=IVe});var fie=G((Jkt,uie)=>{var P_=Ko(),CVe=Sc(),cie=t2(),wVe=(e,t)=>{e=new CVe(e,t);let r=new P_("0.0.0");if(e.test(r)||(r=new P_("0.0.0-0"),e.test(r)))return r;r=null;for(let s=0;s<e.set.length;++s){let a=e.set[s],n=null;a.forEach(c=>{let f=new P_(c.semver.version);switch(c.operator){case">":f.prerelease.length===0?f.patch++:f.prerelease.push(0),f.raw=f.format();case"":case">=":(!n||cie(f,n))&&(n=f);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${c.operator}`)}}),n&&(!r||cie(r,n))&&(r=n)}return r&&e.test(r)?r:null};uie.exports=wVe});var pie=G((zkt,Aie)=>{var BVe=Sc(),vVe=(e,t)=>{try{return new BVe(e,t).range||"*"}catch{return null}};Aie.exports=vVe});var ek=G((Zkt,mie)=>{var SVe=Ko(),die=i2(),{ANY:DVe}=die,bVe=Sc(),PVe=o2(),hie=t2(),gie=Kx(),xVe=zx(),kVe=Jx(),QVe=(e,t,r,s)=>{e=new SVe(e,s),t=new bVe(t,s);let a,n,c,f,p;switch(r){case">":a=hie,n=xVe,c=gie,f=">",p=">=";break;case"<":a=gie,n=kVe,c=hie,f="<",p="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(PVe(e,t,s))return!1;for(let h=0;h<t.set.length;++h){let E=t.set[h],C=null,S=null;if(E.forEach(x=>{x.semver===DVe&&(x=new die(">=0.0.0")),C=C||x,S=S||x,a(x.semver,C.semver,s)?C=x:c(x.semver,S.semver,s)&&(S=x)}),C.operator===f||C.operator===p||(!S.operator||S.operator===f)&&n(e,S.semver))return!1;if(S.operator===p&&c(e,S.semver))return!1}return!0};mie.exports=QVe});var Eie=G((Xkt,yie)=>{var RVe=ek(),TVe=(e,t,r)=>RVe(e,t,">",r);yie.exports=TVe});var Cie=G(($kt,Iie)=>{var FVe=ek(),NVe=(e,t,r)=>FVe(e,t,"<",r);Iie.exports=NVe});var vie=G((eQt,Bie)=>{var wie=Sc(),OVe=(e,t,r)=>(e=new wie(e,r),t=new wie(t,r),e.intersects(t,r));Bie.exports=OVe});var Die=G((tQt,Sie)=>{var LVe=o2(),MVe=vc();Sie.exports=(e,t,r)=>{let s=[],a=null,n=null,c=e.sort((E,C)=>MVe(E,C,r));for(let E of c)LVe(E,t,r)?(n=E,a||(a=E)):(n&&s.push([a,n]),n=null,a=null);a&&s.push([a,null]);let f=[];for(let[E,C]of s)E===C?f.push(E):!C&&E===c[0]?f.push("*"):C?E===c[0]?f.push(`<=${C}`):f.push(`${E} - ${C}`):f.push(`>=${E}`);let p=f.join(" || "),h=typeof t.raw=="string"?t.raw:String(t);return p.length<h.length?p:t}});var Rie=G((rQt,Qie)=>{var bie=Sc(),k_=i2(),{ANY:x_}=k_,a2=o2(),Q_=vc(),UVe=(e,t,r={})=>{if(e===t)return!0;e=new bie(e,r),t=new bie(t,r);let s=!1;e:for(let a of e.set){for(let n of t.set){let c=HVe(a,n,r);if(s=s||c!==null,c)continue e}if(s)return!1}return!0},_Ve=[new k_(">=0.0.0-0")],Pie=[new k_(">=0.0.0")],HVe=(e,t,r)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===x_){if(t.length===1&&t[0].semver===x_)return!0;r.includePrerelease?e=_Ve:e=Pie}if(t.length===1&&t[0].semver===x_){if(r.includePrerelease)return!0;t=Pie}let s=new Set,a,n;for(let x of e)x.operator===">"||x.operator===">="?a=xie(a,x,r):x.operator==="<"||x.operator==="<="?n=kie(n,x,r):s.add(x.semver);if(s.size>1)return null;let c;if(a&&n){if(c=Q_(a.semver,n.semver,r),c>0)return null;if(c===0&&(a.operator!==">="||n.operator!=="<="))return null}for(let x of s){if(a&&!a2(x,String(a),r)||n&&!a2(x,String(n),r))return null;for(let I of t)if(!a2(x,String(I),r))return!1;return!0}let f,p,h,E,C=n&&!r.includePrerelease&&n.semver.prerelease.length?n.semver:!1,S=a&&!r.includePrerelease&&a.semver.prerelease.length?a.semver:!1;C&&C.prerelease.length===1&&n.operator==="<"&&C.prerelease[0]===0&&(C=!1);for(let x of t){if(E=E||x.operator===">"||x.operator===">=",h=h||x.operator==="<"||x.operator==="<=",a){if(S&&x.semver.prerelease&&x.semver.prerelease.length&&x.semver.major===S.major&&x.semver.minor===S.minor&&x.semver.patch===S.patch&&(S=!1),x.operator===">"||x.operator===">="){if(f=xie(a,x,r),f===x&&f!==a)return!1}else if(a.operator===">="&&!a2(a.semver,String(x),r))return!1}if(n){if(C&&x.semver.prerelease&&x.semver.prerelease.length&&x.semver.major===C.major&&x.semver.minor===C.minor&&x.semver.patch===C.patch&&(C=!1),x.operator==="<"||x.operator==="<="){if(p=kie(n,x,r),p===x&&p!==n)return!1}else if(n.operator==="<="&&!a2(n.semver,String(x),r))return!1}if(!x.operator&&(n||a)&&c!==0)return!1}return!(a&&h&&!n&&c!==0||n&&E&&!a&&c!==0||S||C)},xie=(e,t,r)=>{if(!e)return t;let s=Q_(e.semver,t.semver,r);return s>0?e:s<0||t.operator===">"&&e.operator===">="?t:e},kie=(e,t,r)=>{if(!e)return t;let s=Q_(e.semver,t.semver,r);return s<0?e:s>0||t.operator==="<"&&e.operator==="<="?t:e};Qie.exports=UVe});var pi=G((nQt,Nie)=>{var R_=bE(),Tie=$B(),jVe=Ko(),Fie=h_(),GVe=Od(),qVe=$re(),WVe=tne(),VVe=ine(),YVe=ane(),KVe=cne(),JVe=fne(),zVe=pne(),ZVe=gne(),XVe=vc(),$Ve=Ene(),eYe=Cne(),tYe=Yx(),rYe=Sne(),nYe=bne(),iYe=t2(),sYe=Kx(),oYe=d_(),aYe=m_(),lYe=Jx(),cYe=zx(),uYe=y_(),fYe=One(),AYe=i2(),pYe=Sc(),hYe=o2(),gYe=iie(),dYe=oie(),mYe=lie(),yYe=fie(),EYe=pie(),IYe=ek(),CYe=Eie(),wYe=Cie(),BYe=vie(),vYe=Die(),SYe=Rie();Nie.exports={parse:GVe,valid:qVe,clean:WVe,inc:VVe,diff:YVe,major:KVe,minor:JVe,patch:zVe,prerelease:ZVe,compare:XVe,rcompare:$Ve,compareLoose:eYe,compareBuild:tYe,sort:rYe,rsort:nYe,gt:iYe,lt:sYe,eq:oYe,neq:aYe,gte:lYe,lte:cYe,cmp:uYe,coerce:fYe,Comparator:AYe,Range:pYe,satisfies:hYe,toComparators:gYe,maxSatisfying:dYe,minSatisfying:mYe,minVersion:yYe,validRange:EYe,outside:IYe,gtr:CYe,ltr:wYe,intersects:BYe,simplifyRange:vYe,subset:SYe,SemVer:jVe,re:R_.re,src:R_.src,tokens:R_.t,SEMVER_SPEC_VERSION:Tie.SEMVER_SPEC_VERSION,RELEASE_TYPES:Tie.RELEASE_TYPES,compareIdentifiers:Fie.compareIdentifiers,rcompareIdentifiers:Fie.rcompareIdentifiers}});var Lie=G((iQt,Oie)=>{"use strict";function DYe(e,t){function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r}function _d(e,t,r,s){this.message=e,this.expected=t,this.found=r,this.location=s,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,_d)}DYe(_d,Error);_d.buildMessage=function(e,t){var r={literal:function(h){return'"'+a(h.text)+'"'},class:function(h){var E="",C;for(C=0;C<h.parts.length;C++)E+=h.parts[C]instanceof Array?n(h.parts[C][0])+"-"+n(h.parts[C][1]):n(h.parts[C]);return"["+(h.inverted?"^":"")+E+"]"},any:function(h){return"any character"},end:function(h){return"end of input"},other:function(h){return h.description}};function s(h){return h.charCodeAt(0).toString(16).toUpperCase()}function a(h){return h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function n(h){return h.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+s(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+s(E)})}function c(h){return r[h.type](h)}function f(h){var E=new Array(h.length),C,S;for(C=0;C<h.length;C++)E[C]=c(h[C]);if(E.sort(),E.length>0){for(C=1,S=1;C<E.length;C++)E[C-1]!==E[C]&&(E[S]=E[C],S++);E.length=S}switch(E.length){case 1:return E[0];case 2:return E[0]+" or "+E[1];default:return E.slice(0,-1).join(", ")+", or "+E[E.length-1]}}function p(h){return h?'"'+a(h)+'"':"end of input"}return"Expected "+f(e)+" but "+p(t)+" found."};function bYe(e,t){t=t!==void 0?t:{};var r={},s={Expression:y},a=y,n="|",c=Ne("|",!1),f="&",p=Ne("&",!1),h="^",E=Ne("^",!1),C=function($,se){return!!se.reduce((xe,Fe)=>{switch(Fe[1]){case"|":return xe|Fe[3];case"&":return xe&Fe[3];case"^":return xe^Fe[3]}},$)},S="!",x=Ne("!",!1),I=function($){return!$},T="(",O=Ne("(",!1),U=")",Y=Ne(")",!1),te=function($){return $},ie=/^[^ \t\n\r()!|&\^]/,ue=ke([" ","	",`
`,"\r","(",")","!","|","&","^"],!0,!1),ae=function($){return t.queryPattern.test($)},de=function($){return t.checkFn($)},Ae=Re("whitespace"),Ce=/^[ \t\n\r]/,Ee=ke([" ","	",`
`,"\r"],!1,!1),g=0,Se=0,Be=[{line:1,column:1}],me=0,ce=[],X=0,De;if("startRule"in t){if(!(t.startRule in s))throw new Error(`Can't start parsing from rule "`+t.startRule+'".');a=s[t.startRule]}function Qe(){return e.substring(Se,g)}function it(){return Me(Se,g)}function _($,se){throw se=se!==void 0?se:Me(Se,g),b([Re($)],e.substring(Se,g),se)}function tt($,se){throw se=se!==void 0?se:Me(Se,g),w($,se)}function Ne($,se){return{type:"literal",text:$,ignoreCase:se}}function ke($,se,xe){return{type:"class",parts:$,inverted:se,ignoreCase:xe}}function be(){return{type:"any"}}function je(){return{type:"end"}}function Re($){return{type:"other",description:$}}function ct($){var se=Be[$],xe;if(se)return se;for(xe=$-1;!Be[xe];)xe--;for(se=Be[xe],se={line:se.line,column:se.column};xe<$;)e.charCodeAt(xe)===10?(se.line++,se.column=1):se.column++,xe++;return Be[$]=se,se}function Me($,se){var xe=ct($),Fe=ct(se);return{start:{offset:$,line:xe.line,column:xe.column},end:{offset:se,line:Fe.line,column:Fe.column}}}function P($){g<me||(g>me&&(me=g,ce=[]),ce.push($))}function w($,se){return new _d($,null,null,se)}function b($,se,xe){return new _d(_d.buildMessage($,se),$,se,xe)}function y(){var $,se,xe,Fe,ut,Ct,qt,ir;if($=g,se=F(),se!==r){for(xe=[],Fe=g,ut=Z(),ut!==r?(e.charCodeAt(g)===124?(Ct=n,g++):(Ct=r,X===0&&P(c)),Ct===r&&(e.charCodeAt(g)===38?(Ct=f,g++):(Ct=r,X===0&&P(p)),Ct===r&&(e.charCodeAt(g)===94?(Ct=h,g++):(Ct=r,X===0&&P(E)))),Ct!==r?(qt=Z(),qt!==r?(ir=F(),ir!==r?(ut=[ut,Ct,qt,ir],Fe=ut):(g=Fe,Fe=r)):(g=Fe,Fe=r)):(g=Fe,Fe=r)):(g=Fe,Fe=r);Fe!==r;)xe.push(Fe),Fe=g,ut=Z(),ut!==r?(e.charCodeAt(g)===124?(Ct=n,g++):(Ct=r,X===0&&P(c)),Ct===r&&(e.charCodeAt(g)===38?(Ct=f,g++):(Ct=r,X===0&&P(p)),Ct===r&&(e.charCodeAt(g)===94?(Ct=h,g++):(Ct=r,X===0&&P(E)))),Ct!==r?(qt=Z(),qt!==r?(ir=F(),ir!==r?(ut=[ut,Ct,qt,ir],Fe=ut):(g=Fe,Fe=r)):(g=Fe,Fe=r)):(g=Fe,Fe=r)):(g=Fe,Fe=r);xe!==r?(Se=$,se=C(se,xe),$=se):(g=$,$=r)}else g=$,$=r;return $}function F(){var $,se,xe,Fe,ut,Ct;return $=g,e.charCodeAt(g)===33?(se=S,g++):(se=r,X===0&&P(x)),se!==r?(xe=F(),xe!==r?(Se=$,se=I(xe),$=se):(g=$,$=r)):(g=$,$=r),$===r&&($=g,e.charCodeAt(g)===40?(se=T,g++):(se=r,X===0&&P(O)),se!==r?(xe=Z(),xe!==r?(Fe=y(),Fe!==r?(ut=Z(),ut!==r?(e.charCodeAt(g)===41?(Ct=U,g++):(Ct=r,X===0&&P(Y)),Ct!==r?(Se=$,se=te(Fe),$=se):(g=$,$=r)):(g=$,$=r)):(g=$,$=r)):(g=$,$=r)):(g=$,$=r),$===r&&($=z())),$}function z(){var $,se,xe,Fe,ut;if($=g,se=Z(),se!==r){if(xe=g,Fe=[],ie.test(e.charAt(g))?(ut=e.charAt(g),g++):(ut=r,X===0&&P(ue)),ut!==r)for(;ut!==r;)Fe.push(ut),ie.test(e.charAt(g))?(ut=e.charAt(g),g++):(ut=r,X===0&&P(ue));else Fe=r;Fe!==r?xe=e.substring(xe,g):xe=Fe,xe!==r?(Se=g,Fe=ae(xe),Fe?Fe=void 0:Fe=r,Fe!==r?(Se=$,se=de(xe),$=se):(g=$,$=r)):(g=$,$=r)}else g=$,$=r;return $}function Z(){var $,se;for(X++,$=[],Ce.test(e.charAt(g))?(se=e.charAt(g),g++):(se=r,X===0&&P(Ee));se!==r;)$.push(se),Ce.test(e.charAt(g))?(se=e.charAt(g),g++):(se=r,X===0&&P(Ee));return X--,$===r&&(se=r,X===0&&P(Ae)),$}if(De=a(),De!==r&&g===e.length)return De;throw De!==r&&g<e.length&&P(je()),b(ce,me<e.length?e.charAt(me):null,me<e.length?Me(me,me+1):Me(me,me))}Oie.exports={SyntaxError:_d,parse:bYe}});var Mie=G(tk=>{var{parse:PYe}=Lie();tk.makeParser=(e=/[a-z]+/)=>(t,r)=>PYe(t,{queryPattern:e,checkFn:r});tk.parse=tk.makeParser()});var _ie=G((oQt,Uie)=>{"use strict";Uie.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var T_=G((aQt,jie)=>{var l2=_ie(),Hie={};for(let e of Object.keys(l2))Hie[l2[e]]=e;var hr={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};jie.exports=hr;for(let e of Object.keys(hr)){if(!("channels"in hr[e]))throw new Error("missing channels property: "+e);if(!("labels"in hr[e]))throw new Error("missing channel labels property: "+e);if(hr[e].labels.length!==hr[e].channels)throw new Error("channel and label counts mismatch: "+e);let{channels:t,labels:r}=hr[e];delete hr[e].channels,delete hr[e].labels,Object.defineProperty(hr[e],"channels",{value:t}),Object.defineProperty(hr[e],"labels",{value:r})}hr.rgb.hsl=function(e){let t=e[0]/255,r=e[1]/255,s=e[2]/255,a=Math.min(t,r,s),n=Math.max(t,r,s),c=n-a,f,p;n===a?f=0:t===n?f=(r-s)/c:r===n?f=2+(s-t)/c:s===n&&(f=4+(t-r)/c),f=Math.min(f*60,360),f<0&&(f+=360);let h=(a+n)/2;return n===a?p=0:h<=.5?p=c/(n+a):p=c/(2-n-a),[f,p*100,h*100]};hr.rgb.hsv=function(e){let t,r,s,a,n,c=e[0]/255,f=e[1]/255,p=e[2]/255,h=Math.max(c,f,p),E=h-Math.min(c,f,p),C=function(S){return(h-S)/6/E+1/2};return E===0?(a=0,n=0):(n=E/h,t=C(c),r=C(f),s=C(p),c===h?a=s-r:f===h?a=1/3+t-s:p===h&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[a*360,n*100,h*100]};hr.rgb.hwb=function(e){let t=e[0],r=e[1],s=e[2],a=hr.rgb.hsl(e)[0],n=1/255*Math.min(t,Math.min(r,s));return s=1-1/255*Math.max(t,Math.max(r,s)),[a,n*100,s*100]};hr.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,s=e[2]/255,a=Math.min(1-t,1-r,1-s),n=(1-t-a)/(1-a)||0,c=(1-r-a)/(1-a)||0,f=(1-s-a)/(1-a)||0;return[n*100,c*100,f*100,a*100]};function xYe(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}hr.rgb.keyword=function(e){let t=Hie[e];if(t)return t;let r=1/0,s;for(let a of Object.keys(l2)){let n=l2[a],c=xYe(e,n);c<r&&(r=c,s=a)}return s};hr.keyword.rgb=function(e){return l2[e]};hr.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,s=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92;let a=t*.4124+r*.3576+s*.1805,n=t*.2126+r*.7152+s*.0722,c=t*.0193+r*.1192+s*.9505;return[a*100,n*100,c*100]};hr.rgb.lab=function(e){let t=hr.rgb.xyz(e),r=t[0],s=t[1],a=t[2];r/=95.047,s/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;let n=116*s-16,c=500*(r-s),f=200*(s-a);return[n,c,f]};hr.hsl.rgb=function(e){let t=e[0]/360,r=e[1]/100,s=e[2]/100,a,n,c;if(r===0)return c=s*255,[c,c,c];s<.5?a=s*(1+r):a=s+r-s*r;let f=2*s-a,p=[0,0,0];for(let h=0;h<3;h++)n=t+1/3*-(h-1),n<0&&n++,n>1&&n--,6*n<1?c=f+(a-f)*6*n:2*n<1?c=a:3*n<2?c=f+(a-f)*(2/3-n)*6:c=f,p[h]=c*255;return p};hr.hsl.hsv=function(e){let t=e[0],r=e[1]/100,s=e[2]/100,a=r,n=Math.max(s,.01);s*=2,r*=s<=1?s:2-s,a*=n<=1?n:2-n;let c=(s+r)/2,f=s===0?2*a/(n+a):2*r/(s+r);return[t,f*100,c*100]};hr.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,s=e[2]/100,a=Math.floor(t)%6,n=t-Math.floor(t),c=255*s*(1-r),f=255*s*(1-r*n),p=255*s*(1-r*(1-n));switch(s*=255,a){case 0:return[s,p,c];case 1:return[f,s,c];case 2:return[c,s,p];case 3:return[c,f,s];case 4:return[p,c,s];case 5:return[s,c,f]}};hr.hsv.hsl=function(e){let t=e[0],r=e[1]/100,s=e[2]/100,a=Math.max(s,.01),n,c;c=(2-r)*s;let f=(2-r)*a;return n=r*a,n/=f<=1?f:2-f,n=n||0,c/=2,[t,n*100,c*100]};hr.hwb.rgb=function(e){let t=e[0]/360,r=e[1]/100,s=e[2]/100,a=r+s,n;a>1&&(r/=a,s/=a);let c=Math.floor(6*t),f=1-s;n=6*t-c,c&1&&(n=1-n);let p=r+n*(f-r),h,E,C;switch(c){default:case 6:case 0:h=f,E=p,C=r;break;case 1:h=p,E=f,C=r;break;case 2:h=r,E=f,C=p;break;case 3:h=r,E=p,C=f;break;case 4:h=p,E=r,C=f;break;case 5:h=f,E=r,C=p;break}return[h*255,E*255,C*255]};hr.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,s=e[2]/100,a=e[3]/100,n=1-Math.min(1,t*(1-a)+a),c=1-Math.min(1,r*(1-a)+a),f=1-Math.min(1,s*(1-a)+a);return[n*255,c*255,f*255]};hr.xyz.rgb=function(e){let t=e[0]/100,r=e[1]/100,s=e[2]/100,a,n,c;return a=t*3.2406+r*-1.5372+s*-.4986,n=t*-.9689+r*1.8758+s*.0415,c=t*.0557+r*-.204+s*1.057,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,n=n>.0031308?1.055*n**(1/2.4)-.055:n*12.92,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,a=Math.min(Math.max(0,a),1),n=Math.min(Math.max(0,n),1),c=Math.min(Math.max(0,c),1),[a*255,n*255,c*255]};hr.xyz.lab=function(e){let t=e[0],r=e[1],s=e[2];t/=95.047,r/=100,s/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;let a=116*r-16,n=500*(t-r),c=200*(r-s);return[a,n,c]};hr.lab.xyz=function(e){let t=e[0],r=e[1],s=e[2],a,n,c;n=(t+16)/116,a=r/500+n,c=n-s/200;let f=n**3,p=a**3,h=c**3;return n=f>.008856?f:(n-16/116)/7.787,a=p>.008856?p:(a-16/116)/7.787,c=h>.008856?h:(c-16/116)/7.787,a*=95.047,n*=100,c*=108.883,[a,n,c]};hr.lab.lch=function(e){let t=e[0],r=e[1],s=e[2],a;a=Math.atan2(s,r)*360/2/Math.PI,a<0&&(a+=360);let c=Math.sqrt(r*r+s*s);return[t,c,a]};hr.lch.lab=function(e){let t=e[0],r=e[1],a=e[2]/360*2*Math.PI,n=r*Math.cos(a),c=r*Math.sin(a);return[t,n,c]};hr.rgb.ansi16=function(e,t=null){let[r,s,a]=e,n=t===null?hr.rgb.hsv(e)[2]:t;if(n=Math.round(n/50),n===0)return 30;let c=30+(Math.round(a/255)<<2|Math.round(s/255)<<1|Math.round(r/255));return n===2&&(c+=60),c};hr.hsv.ansi16=function(e){return hr.rgb.ansi16(hr.hsv.rgb(e),e[2])};hr.rgb.ansi256=function(e){let t=e[0],r=e[1],s=e[2];return t===r&&r===s?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(s/255*5)};hr.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];let r=(~~(e>50)+1)*.5,s=(t&1)*r*255,a=(t>>1&1)*r*255,n=(t>>2&1)*r*255;return[s,a,n]};hr.ansi256.rgb=function(e){if(e>=232){let n=(e-232)*10+8;return[n,n,n]}e-=16;let t,r=Math.floor(e/36)/5*255,s=Math.floor((t=e%36)/6)/5*255,a=t%6/5*255;return[r,s,a]};hr.rgb.hex=function(e){let r=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(r.length)+r};hr.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];t[0].length===3&&(r=r.split("").map(f=>f+f).join(""));let s=parseInt(r,16),a=s>>16&255,n=s>>8&255,c=s&255;return[a,n,c]};hr.rgb.hcg=function(e){let t=e[0]/255,r=e[1]/255,s=e[2]/255,a=Math.max(Math.max(t,r),s),n=Math.min(Math.min(t,r),s),c=a-n,f,p;return c<1?f=n/(1-c):f=0,c<=0?p=0:a===t?p=(r-s)/c%6:a===r?p=2+(s-t)/c:p=4+(t-r)/c,p/=6,p%=1,[p*360,c*100,f*100]};hr.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,s=r<.5?2*t*r:2*t*(1-r),a=0;return s<1&&(a=(r-.5*s)/(1-s)),[e[0],s*100,a*100]};hr.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,s=t*r,a=0;return s<1&&(a=(r-s)/(1-s)),[e[0],s*100,a*100]};hr.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,s=e[2]/100;if(r===0)return[s*255,s*255,s*255];let a=[0,0,0],n=t%1*6,c=n%1,f=1-c,p=0;switch(Math.floor(n)){case 0:a[0]=1,a[1]=c,a[2]=0;break;case 1:a[0]=f,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=c;break;case 3:a[0]=0,a[1]=f,a[2]=1;break;case 4:a[0]=c,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=f}return p=(1-r)*s,[(r*a[0]+p)*255,(r*a[1]+p)*255,(r*a[2]+p)*255]};hr.hcg.hsv=function(e){let t=e[1]/100,r=e[2]/100,s=t+r*(1-t),a=0;return s>0&&(a=t/s),[e[0],a*100,s*100]};hr.hcg.hsl=function(e){let t=e[1]/100,s=e[2]/100*(1-t)+.5*t,a=0;return s>0&&s<.5?a=t/(2*s):s>=.5&&s<1&&(a=t/(2*(1-s))),[e[0],a*100,s*100]};hr.hcg.hwb=function(e){let t=e[1]/100,r=e[2]/100,s=t+r*(1-t);return[e[0],(s-t)*100,(1-s)*100]};hr.hwb.hcg=function(e){let t=e[1]/100,s=1-e[2]/100,a=s-t,n=0;return a<1&&(n=(s-a)/(1-a)),[e[0],a*100,n*100]};hr.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};hr.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};hr.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};hr.gray.hsl=function(e){return[0,0,e[0]]};hr.gray.hsv=hr.gray.hsl;hr.gray.hwb=function(e){return[0,100,e[0]]};hr.gray.cmyk=function(e){return[0,0,0,e[0]]};hr.gray.lab=function(e){return[e[0],0,0]};hr.gray.hex=function(e){let t=Math.round(e[0]/100*255)&255,s=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(s.length)+s};hr.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}});var qie=G((lQt,Gie)=>{var rk=T_();function kYe(){let e={},t=Object.keys(rk);for(let r=t.length,s=0;s<r;s++)e[t[s]]={distance:-1,parent:null};return e}function QYe(e){let t=kYe(),r=[e];for(t[e].distance=0;r.length;){let s=r.pop(),a=Object.keys(rk[s]);for(let n=a.length,c=0;c<n;c++){let f=a[c],p=t[f];p.distance===-1&&(p.distance=t[s].distance+1,p.parent=s,r.unshift(f))}}return t}function RYe(e,t){return function(r){return t(e(r))}}function TYe(e,t){let r=[t[e].parent,e],s=rk[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),s=RYe(rk[t[a].parent][a],s),a=t[a].parent;return s.conversion=r,s}Gie.exports=function(e){let t=QYe(e),r={},s=Object.keys(t);for(let a=s.length,n=0;n<a;n++){let c=s[n];t[c].parent!==null&&(r[c]=TYe(c,t))}return r}});var Vie=G((cQt,Wie)=>{var F_=T_(),FYe=qie(),QE={},NYe=Object.keys(F_);function OYe(e){let t=function(...r){let s=r[0];return s==null?s:(s.length>1&&(r=s),e(r))};return"conversion"in e&&(t.conversion=e.conversion),t}function LYe(e){let t=function(...r){let s=r[0];if(s==null)return s;s.length>1&&(r=s);let a=e(r);if(typeof a=="object")for(let n=a.length,c=0;c<n;c++)a[c]=Math.round(a[c]);return a};return"conversion"in e&&(t.conversion=e.conversion),t}NYe.forEach(e=>{QE[e]={},Object.defineProperty(QE[e],"channels",{value:F_[e].channels}),Object.defineProperty(QE[e],"labels",{value:F_[e].labels});let t=FYe(e);Object.keys(t).forEach(s=>{let a=t[s];QE[e][s]=LYe(a),QE[e][s].raw=OYe(a)})});Wie.exports=QE});var ik=G((uQt,Zie)=>{"use strict";var Yie=(e,t)=>(...r)=>`\x1B[${e(...r)+t}m`,Kie=(e,t)=>(...r)=>{let s=e(...r);return`\x1B[${38+t};5;${s}m`},Jie=(e,t)=>(...r)=>{let s=e(...r);return`\x1B[${38+t};2;${s[0]};${s[1]};${s[2]}m`},nk=e=>e,zie=(e,t,r)=>[e,t,r],RE=(e,t,r)=>{Object.defineProperty(e,t,{get:()=>{let s=r();return Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0}),s},enumerable:!0,configurable:!0})},N_,TE=(e,t,r,s)=>{N_===void 0&&(N_=Vie());let a=s?10:0,n={};for(let[c,f]of Object.entries(N_)){let p=c==="ansi16"?"ansi":c;c===t?n[p]=e(r,a):typeof f=="object"&&(n[p]=e(f[t],a))}return n};function MYe(){let e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright,t.bgColor.bgGray=t.bgColor.bgBlackBright,t.color.grey=t.color.blackBright,t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(let[r,s]of Object.entries(t)){for(let[a,n]of Object.entries(s))t[a]={open:`\x1B[${n[0]}m`,close:`\x1B[${n[1]}m`},s[a]=t[a],e.set(n[0],n[1]);Object.defineProperty(t,r,{value:s,enumerable:!1})}return Object.defineProperty(t,"codes",{value:e,enumerable:!1}),t.color.close="\x1B[39m",t.bgColor.close="\x1B[49m",RE(t.color,"ansi",()=>TE(Yie,"ansi16",nk,!1)),RE(t.color,"ansi256",()=>TE(Kie,"ansi256",nk,!1)),RE(t.color,"ansi16m",()=>TE(Jie,"rgb",zie,!1)),RE(t.bgColor,"ansi",()=>TE(Yie,"ansi16",nk,!0)),RE(t.bgColor,"ansi256",()=>TE(Kie,"ansi256",nk,!0)),RE(t.bgColor,"ansi16m",()=>TE(Jie,"rgb",zie,!0)),t}Object.defineProperty(Zie,"exports",{enumerable:!0,get:MYe})});var $ie=G((fQt,Xie)=>{"use strict";Xie.exports=(e,t=process.argv)=>{let r=e.startsWith("-")?"":e.length===1?"-":"--",s=t.indexOf(r+e),a=t.indexOf("--");return s!==-1&&(a===-1||s<a)}});var rse=G((AQt,tse)=>{"use strict";var UYe=Ie("os"),ese=Ie("tty"),Dc=$ie(),{env:Qs}=process,o0;Dc("no-color")||Dc("no-colors")||Dc("color=false")||Dc("color=never")?o0=0:(Dc("color")||Dc("colors")||Dc("color=true")||Dc("color=always"))&&(o0=1);"FORCE_COLOR"in Qs&&(Qs.FORCE_COLOR==="true"?o0=1:Qs.FORCE_COLOR==="false"?o0=0:o0=Qs.FORCE_COLOR.length===0?1:Math.min(parseInt(Qs.FORCE_COLOR,10),3));function O_(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function L_(e,t){if(o0===0)return 0;if(Dc("color=16m")||Dc("color=full")||Dc("color=truecolor"))return 3;if(Dc("color=256"))return 2;if(e&&!t&&o0===void 0)return 0;let r=o0||0;if(Qs.TERM==="dumb")return r;if(process.platform==="win32"){let s=UYe.release().split(".");return Number(s[0])>=10&&Number(s[2])>=10586?Number(s[2])>=14931?3:2:1}if("CI"in Qs)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(s=>s in Qs)||Qs.CI_NAME==="codeship"?1:r;if("TEAMCITY_VERSION"in Qs)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Qs.TEAMCITY_VERSION)?1:0;if("GITHUB_ACTIONS"in Qs)return 1;if(Qs.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in Qs){let s=parseInt((Qs.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(Qs.TERM_PROGRAM){case"iTerm.app":return s>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(Qs.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Qs.TERM)||"COLORTERM"in Qs?1:r}function _Ye(e){let t=L_(e,e&&e.isTTY);return O_(t)}tse.exports={supportsColor:_Ye,stdout:O_(L_(!0,ese.isatty(1))),stderr:O_(L_(!0,ese.isatty(2)))}});var ise=G((pQt,nse)=>{"use strict";var HYe=(e,t,r)=>{let s=e.indexOf(t);if(s===-1)return e;let a=t.length,n=0,c="";do c+=e.substr(n,s-n)+t+r,n=s+a,s=e.indexOf(t,n);while(s!==-1);return c+=e.substr(n),c},jYe=(e,t,r,s)=>{let a=0,n="";do{let c=e[s-1]==="\r";n+=e.substr(a,(c?s-1:s)-a)+t+(c?`\r
`:`
`)+r,a=s+1,s=e.indexOf(`
`,a)}while(s!==-1);return n+=e.substr(a),n};nse.exports={stringReplaceAll:HYe,stringEncaseCRLFWithFirstIndex:jYe}});var cse=G((hQt,lse)=>{"use strict";var GYe=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,sse=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,qYe=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,WYe=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,VYe=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1B"],["a","\x07"]]);function ase(e){let t=e[0]==="u",r=e[1]==="{";return t&&!r&&e.length===5||e[0]==="x"&&e.length===3?String.fromCharCode(parseInt(e.slice(1),16)):t&&r?String.fromCodePoint(parseInt(e.slice(2,-1),16)):VYe.get(e)||e}function YYe(e,t){let r=[],s=t.trim().split(/\s*,\s*/g),a;for(let n of s){let c=Number(n);if(!Number.isNaN(c))r.push(c);else if(a=n.match(qYe))r.push(a[2].replace(WYe,(f,p,h)=>p?ase(p):h));else throw new Error(`Invalid Chalk template style argument: ${n} (in style '${e}')`)}return r}function KYe(e){sse.lastIndex=0;let t=[],r;for(;(r=sse.exec(e))!==null;){let s=r[1];if(r[2]){let a=YYe(s,r[2]);t.push([s].concat(a))}else t.push([s])}return t}function ose(e,t){let r={};for(let a of t)for(let n of a.styles)r[n[0]]=a.inverse?null:n.slice(1);let s=e;for(let[a,n]of Object.entries(r))if(Array.isArray(n)){if(!(a in s))throw new Error(`Unknown Chalk style: ${a}`);s=n.length>0?s[a](...n):s[a]}return s}lse.exports=(e,t)=>{let r=[],s=[],a=[];if(t.replace(GYe,(n,c,f,p,h,E)=>{if(c)a.push(ase(c));else if(p){let C=a.join("");a=[],s.push(r.length===0?C:ose(e,r)(C)),r.push({inverse:f,styles:KYe(p)})}else if(h){if(r.length===0)throw new Error("Found extraneous } in Chalk template literal");s.push(ose(e,r)(a.join(""))),a=[],r.pop()}else a.push(E)}),s.push(a.join("")),r.length>0){let n=`Chalk template literal is missing ${r.length} closing bracket${r.length===1?"":"s"} (\`}\`)`;throw new Error(n)}return s.join("")}});var NE=G((gQt,gse)=>{"use strict";var c2=ik(),{stdout:U_,stderr:__}=rse(),{stringReplaceAll:JYe,stringEncaseCRLFWithFirstIndex:zYe}=ise(),{isArray:sk}=Array,fse=["ansi","ansi","ansi256","ansi16m"],FE=Object.create(null),ZYe=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let r=U_?U_.level:0;e.level=t.level===void 0?r:t.level},H_=class{constructor(t){return Ase(t)}},Ase=e=>{let t={};return ZYe(t,e),t.template=(...r)=>hse(t.template,...r),Object.setPrototypeOf(t,ok.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=H_,t.template};function ok(e){return Ase(e)}for(let[e,t]of Object.entries(c2))FE[e]={get(){let r=ak(this,j_(t.open,t.close,this._styler),this._isEmpty);return Object.defineProperty(this,e,{value:r}),r}};FE.visible={get(){let e=ak(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};var pse=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(let e of pse)FE[e]={get(){let{level:t}=this;return function(...r){let s=j_(c2.color[fse[t]][e](...r),c2.color.close,this._styler);return ak(this,s,this._isEmpty)}}};for(let e of pse){let t="bg"+e[0].toUpperCase()+e.slice(1);FE[t]={get(){let{level:r}=this;return function(...s){let a=j_(c2.bgColor[fse[r]][e](...s),c2.bgColor.close,this._styler);return ak(this,a,this._isEmpty)}}}}var XYe=Object.defineProperties(()=>{},{...FE,level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}}),j_=(e,t,r)=>{let s,a;return r===void 0?(s=e,a=t):(s=r.openAll+e,a=t+r.closeAll),{open:e,close:t,openAll:s,closeAll:a,parent:r}},ak=(e,t,r)=>{let s=(...a)=>sk(a[0])&&sk(a[0].raw)?use(s,hse(s,...a)):use(s,a.length===1?""+a[0]:a.join(" "));return Object.setPrototypeOf(s,XYe),s._generator=e,s._styler=t,s._isEmpty=r,s},use=(e,t)=>{if(e.level<=0||!t)return e._isEmpty?"":t;let r=e._styler;if(r===void 0)return t;let{openAll:s,closeAll:a}=r;if(t.indexOf("\x1B")!==-1)for(;r!==void 0;)t=JYe(t,r.close,r.open),r=r.parent;let n=t.indexOf(`
`);return n!==-1&&(t=zYe(t,a,s,n)),s+t+a},M_,hse=(e,...t)=>{let[r]=t;if(!sk(r)||!sk(r.raw))return t.join(" ");let s=t.slice(1),a=[r.raw[0]];for(let n=1;n<r.length;n++)a.push(String(s[n-1]).replace(/[{}\\]/g,"\\$&"),String(r.raw[n]));return M_===void 0&&(M_=cse()),M_(e,a.join(""))};Object.defineProperties(ok.prototype,FE);var lk=ok();lk.supportsColor=U_;lk.stderr=ok({level:__?__.level:0});lk.stderr.supportsColor=__;gse.exports=lk});var ck=G(bc=>{"use strict";bc.isInteger=e=>typeof e=="number"?Number.isInteger(e):typeof e=="string"&&e.trim()!==""?Number.isInteger(Number(e)):!1;bc.find=(e,t)=>e.nodes.find(r=>r.type===t);bc.exceedsLimit=(e,t,r=1,s)=>s===!1||!bc.isInteger(e)||!bc.isInteger(t)?!1:(Number(t)-Number(e))/Number(r)>=s;bc.escapeNode=(e,t=0,r)=>{let s=e.nodes[t];s&&(r&&s.type===r||s.type==="open"||s.type==="close")&&s.escaped!==!0&&(s.value="\\"+s.value,s.escaped=!0)};bc.encloseBrace=e=>e.type!=="brace"||e.commas>>0+e.ranges>>0?!1:(e.invalid=!0,!0);bc.isInvalidBrace=e=>e.type!=="brace"?!1:e.invalid===!0||e.dollar?!0:!(e.commas>>0+e.ranges>>0)||e.open!==!0||e.close!==!0?(e.invalid=!0,!0):!1;bc.isOpenOrClose=e=>e.type==="open"||e.type==="close"?!0:e.open===!0||e.close===!0;bc.reduce=e=>e.reduce((t,r)=>(r.type==="text"&&t.push(r.value),r.type==="range"&&(r.type="text"),t),[]);bc.flatten=(...e)=>{let t=[],r=s=>{for(let a=0;a<s.length;a++){let n=s[a];Array.isArray(n)?r(n,t):n!==void 0&&t.push(n)}return t};return r(e),t}});var uk=G((mQt,mse)=>{"use strict";var dse=ck();mse.exports=(e,t={})=>{let r=(s,a={})=>{let n=t.escapeInvalid&&dse.isInvalidBrace(a),c=s.invalid===!0&&t.escapeInvalid===!0,f="";if(s.value)return(n||c)&&dse.isOpenOrClose(s)?"\\"+s.value:s.value;if(s.value)return s.value;if(s.nodes)for(let p of s.nodes)f+=r(p);return f};return r(e)}});var Ese=G((yQt,yse)=>{"use strict";yse.exports=function(e){return typeof e=="number"?e-e===0:typeof e=="string"&&e.trim()!==""?Number.isFinite?Number.isFinite(+e):isFinite(+e):!1}});var Pse=G((EQt,bse)=>{"use strict";var Ise=Ese(),Hd=(e,t,r)=>{if(Ise(e)===!1)throw new TypeError("toRegexRange: expected the first argument to be a number");if(t===void 0||e===t)return String(e);if(Ise(t)===!1)throw new TypeError("toRegexRange: expected the second argument to be a number.");let s={relaxZeros:!0,...r};typeof s.strictZeros=="boolean"&&(s.relaxZeros=s.strictZeros===!1);let a=String(s.relaxZeros),n=String(s.shorthand),c=String(s.capture),f=String(s.wrap),p=e+":"+t+"="+a+n+c+f;if(Hd.cache.hasOwnProperty(p))return Hd.cache[p].result;let h=Math.min(e,t),E=Math.max(e,t);if(Math.abs(h-E)===1){let T=e+"|"+t;return s.capture?`(${T})`:s.wrap===!1?T:`(?:${T})`}let C=Dse(e)||Dse(t),S={min:e,max:t,a:h,b:E},x=[],I=[];if(C&&(S.isPadded=C,S.maxLen=String(S.max).length),h<0){let T=E<0?Math.abs(E):1;I=Cse(T,Math.abs(h),S,s),h=S.a=0}return E>=0&&(x=Cse(h,E,S,s)),S.negatives=I,S.positives=x,S.result=$Ye(I,x,s),s.capture===!0?S.result=`(${S.result})`:s.wrap!==!1&&x.length+I.length>1&&(S.result=`(?:${S.result})`),Hd.cache[p]=S,S.result};function $Ye(e,t,r){let s=G_(e,t,"-",!1,r)||[],a=G_(t,e,"",!1,r)||[],n=G_(e,t,"-?",!0,r)||[];return s.concat(n).concat(a).join("|")}function e7e(e,t){let r=1,s=1,a=Bse(e,r),n=new Set([t]);for(;e<=a&&a<=t;)n.add(a),r+=1,a=Bse(e,r);for(a=vse(t+1,s)-1;e<a&&a<=t;)n.add(a),s+=1,a=vse(t+1,s)-1;return n=[...n],n.sort(n7e),n}function t7e(e,t,r){if(e===t)return{pattern:e,count:[],digits:0};let s=r7e(e,t),a=s.length,n="",c=0;for(let f=0;f<a;f++){let[p,h]=s[f];p===h?n+=p:p!=="0"||h!=="9"?n+=i7e(p,h,r):c++}return c&&(n+=r.shorthand===!0?"\\d":"[0-9]"),{pattern:n,count:[c],digits:a}}function Cse(e,t,r,s){let a=e7e(e,t),n=[],c=e,f;for(let p=0;p<a.length;p++){let h=a[p],E=t7e(String(c),String(h),s),C="";if(!r.isPadded&&f&&f.pattern===E.pattern){f.count.length>1&&f.count.pop(),f.count.push(E.count[0]),f.string=f.pattern+Sse(f.count),c=h+1;continue}r.isPadded&&(C=s7e(h,r,s)),E.string=C+E.pattern+Sse(E.count),n.push(E),c=h+1,f=E}return n}function G_(e,t,r,s,a){let n=[];for(let c of e){let{string:f}=c;!s&&!wse(t,"string",f)&&n.push(r+f),s&&wse(t,"string",f)&&n.push(r+f)}return n}function r7e(e,t){let r=[];for(let s=0;s<e.length;s++)r.push([e[s],t[s]]);return r}function n7e(e,t){return e>t?1:t>e?-1:0}function wse(e,t,r){return e.some(s=>s[t]===r)}function Bse(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function vse(e,t){return e-e%Math.pow(10,t)}function Sse(e){let[t=0,r=""]=e;return r||t>1?`{${t+(r?","+r:"")}}`:""}function i7e(e,t,r){return`[${e}${t-e===1?"":"-"}${t}]`}function Dse(e){return/^-?(0+)\d/.test(e)}function s7e(e,t,r){if(!t.isPadded)return e;let s=Math.abs(t.maxLen-String(e).length),a=r.relaxZeros!==!1;switch(s){case 0:return"";case 1:return a?"0?":"0";case 2:return a?"0{0,2}":"00";default:return a?`0{0,${s}}`:`0{${s}}`}}Hd.cache={};Hd.clearCache=()=>Hd.cache={};bse.exports=Hd});var V_=G((IQt,Ose)=>{"use strict";var o7e=Ie("util"),Qse=Pse(),xse=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),a7e=e=>t=>e===!0?Number(t):String(t),q_=e=>typeof e=="number"||typeof e=="string"&&e!=="",u2=e=>Number.isInteger(+e),W_=e=>{let t=`${e}`,r=-1;if(t[0]==="-"&&(t=t.slice(1)),t==="0")return!1;for(;t[++r]==="0";);return r>0},l7e=(e,t,r)=>typeof e=="string"||typeof t=="string"?!0:r.stringify===!0,c7e=(e,t,r)=>{if(t>0){let s=e[0]==="-"?"-":"";s&&(e=e.slice(1)),e=s+e.padStart(s?t-1:t,"0")}return r===!1?String(e):e},kse=(e,t)=>{let r=e[0]==="-"?"-":"";for(r&&(e=e.slice(1),t--);e.length<t;)e="0"+e;return r?"-"+e:e},u7e=(e,t)=>{e.negatives.sort((c,f)=>c<f?-1:c>f?1:0),e.positives.sort((c,f)=>c<f?-1:c>f?1:0);let r=t.capture?"":"?:",s="",a="",n;return e.positives.length&&(s=e.positives.join("|")),e.negatives.length&&(a=`-(${r}${e.negatives.join("|")})`),s&&a?n=`${s}|${a}`:n=s||a,t.wrap?`(${r}${n})`:n},Rse=(e,t,r,s)=>{if(r)return Qse(e,t,{wrap:!1,...s});let a=String.fromCharCode(e);if(e===t)return a;let n=String.fromCharCode(t);return`[${a}-${n}]`},Tse=(e,t,r)=>{if(Array.isArray(e)){let s=r.wrap===!0,a=r.capture?"":"?:";return s?`(${a}${e.join("|")})`:e.join("|")}return Qse(e,t,r)},Fse=(...e)=>new RangeError("Invalid range arguments: "+o7e.inspect(...e)),Nse=(e,t,r)=>{if(r.strictRanges===!0)throw Fse([e,t]);return[]},f7e=(e,t)=>{if(t.strictRanges===!0)throw new TypeError(`Expected step "${e}" to be a number`);return[]},A7e=(e,t,r=1,s={})=>{let a=Number(e),n=Number(t);if(!Number.isInteger(a)||!Number.isInteger(n)){if(s.strictRanges===!0)throw Fse([e,t]);return[]}a===0&&(a=0),n===0&&(n=0);let c=a>n,f=String(e),p=String(t),h=String(r);r=Math.max(Math.abs(r),1);let E=W_(f)||W_(p)||W_(h),C=E?Math.max(f.length,p.length,h.length):0,S=E===!1&&l7e(e,t,s)===!1,x=s.transform||a7e(S);if(s.toRegex&&r===1)return Rse(kse(e,C),kse(t,C),!0,s);let I={negatives:[],positives:[]},T=Y=>I[Y<0?"negatives":"positives"].push(Math.abs(Y)),O=[],U=0;for(;c?a>=n:a<=n;)s.toRegex===!0&&r>1?T(a):O.push(c7e(x(a,U),C,S)),a=c?a-r:a+r,U++;return s.toRegex===!0?r>1?u7e(I,s):Tse(O,null,{wrap:!1,...s}):O},p7e=(e,t,r=1,s={})=>{if(!u2(e)&&e.length>1||!u2(t)&&t.length>1)return Nse(e,t,s);let a=s.transform||(S=>String.fromCharCode(S)),n=`${e}`.charCodeAt(0),c=`${t}`.charCodeAt(0),f=n>c,p=Math.min(n,c),h=Math.max(n,c);if(s.toRegex&&r===1)return Rse(p,h,!1,s);let E=[],C=0;for(;f?n>=c:n<=c;)E.push(a(n,C)),n=f?n-r:n+r,C++;return s.toRegex===!0?Tse(E,null,{wrap:!1,options:s}):E},fk=(e,t,r,s={})=>{if(t==null&&q_(e))return[e];if(!q_(e)||!q_(t))return Nse(e,t,s);if(typeof r=="function")return fk(e,t,1,{transform:r});if(xse(r))return fk(e,t,0,r);let a={...s};return a.capture===!0&&(a.wrap=!0),r=r||a.step||1,u2(r)?u2(e)&&u2(t)?A7e(e,t,r,a):p7e(e,t,Math.max(Math.abs(r),1),a):r!=null&&!xse(r)?f7e(r,a):fk(e,t,1,r)};Ose.exports=fk});var Use=G((CQt,Mse)=>{"use strict";var h7e=V_(),Lse=ck(),g7e=(e,t={})=>{let r=(s,a={})=>{let n=Lse.isInvalidBrace(a),c=s.invalid===!0&&t.escapeInvalid===!0,f=n===!0||c===!0,p=t.escapeInvalid===!0?"\\":"",h="";if(s.isOpen===!0||s.isClose===!0)return p+s.value;if(s.type==="open")return f?p+s.value:"(";if(s.type==="close")return f?p+s.value:")";if(s.type==="comma")return s.prev.type==="comma"?"":f?s.value:"|";if(s.value)return s.value;if(s.nodes&&s.ranges>0){let E=Lse.reduce(s.nodes),C=h7e(...E,{...t,wrap:!1,toRegex:!0});if(C.length!==0)return E.length>1&&C.length>1?`(${C})`:C}if(s.nodes)for(let E of s.nodes)h+=r(E,s);return h};return r(e)};Mse.exports=g7e});var jse=G((wQt,Hse)=>{"use strict";var d7e=V_(),_se=uk(),OE=ck(),jd=(e="",t="",r=!1)=>{let s=[];if(e=[].concat(e),t=[].concat(t),!t.length)return e;if(!e.length)return r?OE.flatten(t).map(a=>`{${a}}`):t;for(let a of e)if(Array.isArray(a))for(let n of a)s.push(jd(n,t,r));else for(let n of t)r===!0&&typeof n=="string"&&(n=`{${n}}`),s.push(Array.isArray(n)?jd(a,n,r):a+n);return OE.flatten(s)},m7e=(e,t={})=>{let r=t.rangeLimit===void 0?1e3:t.rangeLimit,s=(a,n={})=>{a.queue=[];let c=n,f=n.queue;for(;c.type!=="brace"&&c.type!=="root"&&c.parent;)c=c.parent,f=c.queue;if(a.invalid||a.dollar){f.push(jd(f.pop(),_se(a,t)));return}if(a.type==="brace"&&a.invalid!==!0&&a.nodes.length===2){f.push(jd(f.pop(),["{}"]));return}if(a.nodes&&a.ranges>0){let C=OE.reduce(a.nodes);if(OE.exceedsLimit(...C,t.step,r))throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");let S=d7e(...C,t);S.length===0&&(S=_se(a,t)),f.push(jd(f.pop(),S)),a.nodes=[];return}let p=OE.encloseBrace(a),h=a.queue,E=a;for(;E.type!=="brace"&&E.type!=="root"&&E.parent;)E=E.parent,h=E.queue;for(let C=0;C<a.nodes.length;C++){let S=a.nodes[C];if(S.type==="comma"&&a.type==="brace"){C===1&&h.push(""),h.push("");continue}if(S.type==="close"){f.push(jd(f.pop(),h,p));continue}if(S.value&&S.type!=="open"){h.push(jd(h.pop(),S.value));continue}S.nodes&&s(S,a)}return h};return OE.flatten(s(e))};Hse.exports=m7e});var qse=G((BQt,Gse)=>{"use strict";Gse.exports={MAX_LENGTH:1024*64,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:`
`,CHAR_NO_BREAK_SPACE:"\xA0",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"	",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\uFEFF"}});var Jse=G((vQt,Kse)=>{"use strict";var y7e=uk(),{MAX_LENGTH:Wse,CHAR_BACKSLASH:Y_,CHAR_BACKTICK:E7e,CHAR_COMMA:I7e,CHAR_DOT:C7e,CHAR_LEFT_PARENTHESES:w7e,CHAR_RIGHT_PARENTHESES:B7e,CHAR_LEFT_CURLY_BRACE:v7e,CHAR_RIGHT_CURLY_BRACE:S7e,CHAR_LEFT_SQUARE_BRACKET:Vse,CHAR_RIGHT_SQUARE_BRACKET:Yse,CHAR_DOUBLE_QUOTE:D7e,CHAR_SINGLE_QUOTE:b7e,CHAR_NO_BREAK_SPACE:P7e,CHAR_ZERO_WIDTH_NOBREAK_SPACE:x7e}=qse(),k7e=(e,t={})=>{if(typeof e!="string")throw new TypeError("Expected a string");let r=t||{},s=typeof r.maxLength=="number"?Math.min(Wse,r.maxLength):Wse;if(e.length>s)throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${s})`);let a={type:"root",input:e,nodes:[]},n=[a],c=a,f=a,p=0,h=e.length,E=0,C=0,S,x={},I=()=>e[E++],T=O=>{if(O.type==="text"&&f.type==="dot"&&(f.type="text"),f&&f.type==="text"&&O.type==="text"){f.value+=O.value;return}return c.nodes.push(O),O.parent=c,O.prev=f,f=O,O};for(T({type:"bos"});E<h;)if(c=n[n.length-1],S=I(),!(S===x7e||S===P7e)){if(S===Y_){T({type:"text",value:(t.keepEscaping?S:"")+I()});continue}if(S===Yse){T({type:"text",value:"\\"+S});continue}if(S===Vse){p++;let O=!0,U;for(;E<h&&(U=I());){if(S+=U,U===Vse){p++;continue}if(U===Y_){S+=I();continue}if(U===Yse&&(p--,p===0))break}T({type:"text",value:S});continue}if(S===w7e){c=T({type:"paren",nodes:[]}),n.push(c),T({type:"text",value:S});continue}if(S===B7e){if(c.type!=="paren"){T({type:"text",value:S});continue}c=n.pop(),T({type:"text",value:S}),c=n[n.length-1];continue}if(S===D7e||S===b7e||S===E7e){let O=S,U;for(t.keepQuotes!==!0&&(S="");E<h&&(U=I());){if(U===Y_){S+=U+I();continue}if(U===O){t.keepQuotes===!0&&(S+=U);break}S+=U}T({type:"text",value:S});continue}if(S===v7e){C++;let U={type:"brace",open:!0,close:!1,dollar:f.value&&f.value.slice(-1)==="$"||c.dollar===!0,depth:C,commas:0,ranges:0,nodes:[]};c=T(U),n.push(c),T({type:"open",value:S});continue}if(S===S7e){if(c.type!=="brace"){T({type:"text",value:S});continue}let O="close";c=n.pop(),c.close=!0,T({type:O,value:S}),C--,c=n[n.length-1];continue}if(S===I7e&&C>0){if(c.ranges>0){c.ranges=0;let O=c.nodes.shift();c.nodes=[O,{type:"text",value:y7e(c)}]}T({type:"comma",value:S}),c.commas++;continue}if(S===C7e&&C>0&&c.commas===0){let O=c.nodes;if(C===0||O.length===0){T({type:"text",value:S});continue}if(f.type==="dot"){if(c.range=[],f.value+=S,f.type="range",c.nodes.length!==3&&c.nodes.length!==5){c.invalid=!0,c.ranges=0,f.type="text";continue}c.ranges++,c.args=[];continue}if(f.type==="range"){O.pop();let U=O[O.length-1];U.value+=f.value+S,f=U,c.ranges--;continue}T({type:"dot",value:S});continue}T({type:"text",value:S})}do if(c=n.pop(),c.type!=="root"){c.nodes.forEach(Y=>{Y.nodes||(Y.type==="open"&&(Y.isOpen=!0),Y.type==="close"&&(Y.isClose=!0),Y.nodes||(Y.type="text"),Y.invalid=!0)});let O=n[n.length-1],U=O.nodes.indexOf(c);O.nodes.splice(U,1,...c.nodes)}while(n.length>0);return T({type:"eos"}),a};Kse.exports=k7e});var Xse=G((SQt,Zse)=>{"use strict";var zse=uk(),Q7e=Use(),R7e=jse(),T7e=Jse(),Yl=(e,t={})=>{let r=[];if(Array.isArray(e))for(let s of e){let a=Yl.create(s,t);Array.isArray(a)?r.push(...a):r.push(a)}else r=[].concat(Yl.create(e,t));return t&&t.expand===!0&&t.nodupes===!0&&(r=[...new Set(r)]),r};Yl.parse=(e,t={})=>T7e(e,t);Yl.stringify=(e,t={})=>zse(typeof e=="string"?Yl.parse(e,t):e,t);Yl.compile=(e,t={})=>(typeof e=="string"&&(e=Yl.parse(e,t)),Q7e(e,t));Yl.expand=(e,t={})=>{typeof e=="string"&&(e=Yl.parse(e,t));let r=R7e(e,t);return t.noempty===!0&&(r=r.filter(Boolean)),t.nodupes===!0&&(r=[...new Set(r)]),r};Yl.create=(e,t={})=>e===""||e.length<3?[e]:t.expand!==!0?Yl.compile(e,t):Yl.expand(e,t);Zse.exports=Yl});var f2=G((DQt,noe)=>{"use strict";var F7e=Ie("path"),Jf="\\\\/",$se=`[^${Jf}]`,bp="\\.",N7e="\\+",O7e="\\?",Ak="\\/",L7e="(?=.)",eoe="[^/]",K_=`(?:${Ak}|$)`,toe=`(?:^|${Ak})`,J_=`${bp}{1,2}${K_}`,M7e=`(?!${bp})`,U7e=`(?!${toe}${J_})`,_7e=`(?!${bp}{0,1}${K_})`,H7e=`(?!${J_})`,j7e=`[^.${Ak}]`,G7e=`${eoe}*?`,roe={DOT_LITERAL:bp,PLUS_LITERAL:N7e,QMARK_LITERAL:O7e,SLASH_LITERAL:Ak,ONE_CHAR:L7e,QMARK:eoe,END_ANCHOR:K_,DOTS_SLASH:J_,NO_DOT:M7e,NO_DOTS:U7e,NO_DOT_SLASH:_7e,NO_DOTS_SLASH:H7e,QMARK_NO_DOT:j7e,STAR:G7e,START_ANCHOR:toe},q7e={...roe,SLASH_LITERAL:`[${Jf}]`,QMARK:$se,STAR:`${$se}*?`,DOTS_SLASH:`${bp}{1,2}(?:[${Jf}]|$)`,NO_DOT:`(?!${bp})`,NO_DOTS:`(?!(?:^|[${Jf}])${bp}{1,2}(?:[${Jf}]|$))`,NO_DOT_SLASH:`(?!${bp}{0,1}(?:[${Jf}]|$))`,NO_DOTS_SLASH:`(?!${bp}{1,2}(?:[${Jf}]|$))`,QMARK_NO_DOT:`[^.${Jf}]`,START_ANCHOR:`(?:^|[${Jf}])`,END_ANCHOR:`(?:[${Jf}]|$)`},W7e={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};noe.exports={MAX_LENGTH:1024*64,POSIX_REGEX_SOURCE:W7e,REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:F7e.sep,extglobChars(e){return{"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}},globChars(e){return e===!0?q7e:roe}}});var A2=G(pl=>{"use strict";var V7e=Ie("path"),Y7e=process.platform==="win32",{REGEX_BACKSLASH:K7e,REGEX_REMOVE_BACKSLASH:J7e,REGEX_SPECIAL_CHARS:z7e,REGEX_SPECIAL_CHARS_GLOBAL:Z7e}=f2();pl.isObject=e=>e!==null&&typeof e=="object"&&!Array.isArray(e);pl.hasRegexChars=e=>z7e.test(e);pl.isRegexChar=e=>e.length===1&&pl.hasRegexChars(e);pl.escapeRegex=e=>e.replace(Z7e,"\\$1");pl.toPosixSlashes=e=>e.replace(K7e,"/");pl.removeBackslashes=e=>e.replace(J7e,t=>t==="\\"?"":t);pl.supportsLookbehinds=()=>{let e=process.version.slice(1).split(".").map(Number);return e.length===3&&e[0]>=9||e[0]===8&&e[1]>=10};pl.isWindows=e=>e&&typeof e.windows=="boolean"?e.windows:Y7e===!0||V7e.sep==="\\";pl.escapeLast=(e,t,r)=>{let s=e.lastIndexOf(t,r);return s===-1?e:e[s-1]==="\\"?pl.escapeLast(e,t,s-1):`${e.slice(0,s)}\\${e.slice(s)}`};pl.removePrefix=(e,t={})=>{let r=e;return r.startsWith("./")&&(r=r.slice(2),t.prefix="./"),r};pl.wrapOutput=(e,t={},r={})=>{let s=r.contains?"":"^",a=r.contains?"":"$",n=`${s}(?:${e})${a}`;return t.negated===!0&&(n=`(?:^(?!${n}).*$)`),n}});var foe=G((PQt,uoe)=>{"use strict";var ioe=A2(),{CHAR_ASTERISK:z_,CHAR_AT:X7e,CHAR_BACKWARD_SLASH:p2,CHAR_COMMA:$7e,CHAR_DOT:Z_,CHAR_EXCLAMATION_MARK:X_,CHAR_FORWARD_SLASH:coe,CHAR_LEFT_CURLY_BRACE:$_,CHAR_LEFT_PARENTHESES:e4,CHAR_LEFT_SQUARE_BRACKET:eKe,CHAR_PLUS:tKe,CHAR_QUESTION_MARK:soe,CHAR_RIGHT_CURLY_BRACE:rKe,CHAR_RIGHT_PARENTHESES:ooe,CHAR_RIGHT_SQUARE_BRACKET:nKe}=f2(),aoe=e=>e===coe||e===p2,loe=e=>{e.isPrefix!==!0&&(e.depth=e.isGlobstar?1/0:1)},iKe=(e,t)=>{let r=t||{},s=e.length-1,a=r.parts===!0||r.scanToEnd===!0,n=[],c=[],f=[],p=e,h=-1,E=0,C=0,S=!1,x=!1,I=!1,T=!1,O=!1,U=!1,Y=!1,te=!1,ie=!1,ue=!1,ae=0,de,Ae,Ce={value:"",depth:0,isGlob:!1},Ee=()=>h>=s,g=()=>p.charCodeAt(h+1),Se=()=>(de=Ae,p.charCodeAt(++h));for(;h<s;){Ae=Se();let De;if(Ae===p2){Y=Ce.backslashes=!0,Ae=Se(),Ae===$_&&(U=!0);continue}if(U===!0||Ae===$_){for(ae++;Ee()!==!0&&(Ae=Se());){if(Ae===p2){Y=Ce.backslashes=!0,Se();continue}if(Ae===$_){ae++;continue}if(U!==!0&&Ae===Z_&&(Ae=Se())===Z_){if(S=Ce.isBrace=!0,I=Ce.isGlob=!0,ue=!0,a===!0)continue;break}if(U!==!0&&Ae===$7e){if(S=Ce.isBrace=!0,I=Ce.isGlob=!0,ue=!0,a===!0)continue;break}if(Ae===rKe&&(ae--,ae===0)){U=!1,S=Ce.isBrace=!0,ue=!0;break}}if(a===!0)continue;break}if(Ae===coe){if(n.push(h),c.push(Ce),Ce={value:"",depth:0,isGlob:!1},ue===!0)continue;if(de===Z_&&h===E+1){E+=2;continue}C=h+1;continue}if(r.noext!==!0&&(Ae===tKe||Ae===X7e||Ae===z_||Ae===soe||Ae===X_)===!0&&g()===e4){if(I=Ce.isGlob=!0,T=Ce.isExtglob=!0,ue=!0,Ae===X_&&h===E&&(ie=!0),a===!0){for(;Ee()!==!0&&(Ae=Se());){if(Ae===p2){Y=Ce.backslashes=!0,Ae=Se();continue}if(Ae===ooe){I=Ce.isGlob=!0,ue=!0;break}}continue}break}if(Ae===z_){if(de===z_&&(O=Ce.isGlobstar=!0),I=Ce.isGlob=!0,ue=!0,a===!0)continue;break}if(Ae===soe){if(I=Ce.isGlob=!0,ue=!0,a===!0)continue;break}if(Ae===eKe){for(;Ee()!==!0&&(De=Se());){if(De===p2){Y=Ce.backslashes=!0,Se();continue}if(De===nKe){x=Ce.isBracket=!0,I=Ce.isGlob=!0,ue=!0;break}}if(a===!0)continue;break}if(r.nonegate!==!0&&Ae===X_&&h===E){te=Ce.negated=!0,E++;continue}if(r.noparen!==!0&&Ae===e4){if(I=Ce.isGlob=!0,a===!0){for(;Ee()!==!0&&(Ae=Se());){if(Ae===e4){Y=Ce.backslashes=!0,Ae=Se();continue}if(Ae===ooe){ue=!0;break}}continue}break}if(I===!0){if(ue=!0,a===!0)continue;break}}r.noext===!0&&(T=!1,I=!1);let Be=p,me="",ce="";E>0&&(me=p.slice(0,E),p=p.slice(E),C-=E),Be&&I===!0&&C>0?(Be=p.slice(0,C),ce=p.slice(C)):I===!0?(Be="",ce=p):Be=p,Be&&Be!==""&&Be!=="/"&&Be!==p&&aoe(Be.charCodeAt(Be.length-1))&&(Be=Be.slice(0,-1)),r.unescape===!0&&(ce&&(ce=ioe.removeBackslashes(ce)),Be&&Y===!0&&(Be=ioe.removeBackslashes(Be)));let X={prefix:me,input:e,start:E,base:Be,glob:ce,isBrace:S,isBracket:x,isGlob:I,isExtglob:T,isGlobstar:O,negated:te,negatedExtglob:ie};if(r.tokens===!0&&(X.maxDepth=0,aoe(Ae)||c.push(Ce),X.tokens=c),r.parts===!0||r.tokens===!0){let De;for(let Qe=0;Qe<n.length;Qe++){let it=De?De+1:E,_=n[Qe],tt=e.slice(it,_);r.tokens&&(Qe===0&&E!==0?(c[Qe].isPrefix=!0,c[Qe].value=me):c[Qe].value=tt,loe(c[Qe]),X.maxDepth+=c[Qe].depth),(Qe!==0||tt!=="")&&f.push(tt),De=_}if(De&&De+1<e.length){let Qe=e.slice(De+1);f.push(Qe),r.tokens&&(c[c.length-1].value=Qe,loe(c[c.length-1]),X.maxDepth+=c[c.length-1].depth)}X.slashes=n,X.parts=f}return X};uoe.exports=iKe});var hoe=G((xQt,poe)=>{"use strict";var pk=f2(),Kl=A2(),{MAX_LENGTH:hk,POSIX_REGEX_SOURCE:sKe,REGEX_NON_SPECIAL_CHARS:oKe,REGEX_SPECIAL_CHARS_BACKREF:aKe,REPLACEMENTS:Aoe}=pk,lKe=(e,t)=>{if(typeof t.expandRange=="function")return t.expandRange(...e,t);e.sort();let r=`[${e.join("-")}]`;try{new RegExp(r)}catch{return e.map(a=>Kl.escapeRegex(a)).join("..")}return r},LE=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,t4=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a string");e=Aoe[e]||e;let r={...t},s=typeof r.maxLength=="number"?Math.min(hk,r.maxLength):hk,a=e.length;if(a>s)throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${s}`);let n={type:"bos",value:"",output:r.prepend||""},c=[n],f=r.capture?"":"?:",p=Kl.isWindows(t),h=pk.globChars(p),E=pk.extglobChars(h),{DOT_LITERAL:C,PLUS_LITERAL:S,SLASH_LITERAL:x,ONE_CHAR:I,DOTS_SLASH:T,NO_DOT:O,NO_DOT_SLASH:U,NO_DOTS_SLASH:Y,QMARK:te,QMARK_NO_DOT:ie,STAR:ue,START_ANCHOR:ae}=h,de=P=>`(${f}(?:(?!${ae}${P.dot?T:C}).)*?)`,Ae=r.dot?"":O,Ce=r.dot?te:ie,Ee=r.bash===!0?de(r):ue;r.capture&&(Ee=`(${Ee})`),typeof r.noext=="boolean"&&(r.noextglob=r.noext);let g={input:e,index:-1,start:0,dot:r.dot===!0,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:c};e=Kl.removePrefix(e,g),a=e.length;let Se=[],Be=[],me=[],ce=n,X,De=()=>g.index===a-1,Qe=g.peek=(P=1)=>e[g.index+P],it=g.advance=()=>e[++g.index]||"",_=()=>e.slice(g.index+1),tt=(P="",w=0)=>{g.consumed+=P,g.index+=w},Ne=P=>{g.output+=P.output!=null?P.output:P.value,tt(P.value)},ke=()=>{let P=1;for(;Qe()==="!"&&(Qe(2)!=="("||Qe(3)==="?");)it(),g.start++,P++;return P%2===0?!1:(g.negated=!0,g.start++,!0)},be=P=>{g[P]++,me.push(P)},je=P=>{g[P]--,me.pop()},Re=P=>{if(ce.type==="globstar"){let w=g.braces>0&&(P.type==="comma"||P.type==="brace"),b=P.extglob===!0||Se.length&&(P.type==="pipe"||P.type==="paren");P.type!=="slash"&&P.type!=="paren"&&!w&&!b&&(g.output=g.output.slice(0,-ce.output.length),ce.type="star",ce.value="*",ce.output=Ee,g.output+=ce.output)}if(Se.length&&P.type!=="paren"&&(Se[Se.length-1].inner+=P.value),(P.value||P.output)&&Ne(P),ce&&ce.type==="text"&&P.type==="text"){ce.value+=P.value,ce.output=(ce.output||"")+P.value;return}P.prev=ce,c.push(P),ce=P},ct=(P,w)=>{let b={...E[w],conditions:1,inner:""};b.prev=ce,b.parens=g.parens,b.output=g.output;let y=(r.capture?"(":"")+b.open;be("parens"),Re({type:P,value:w,output:g.output?"":I}),Re({type:"paren",extglob:!0,value:it(),output:y}),Se.push(b)},Me=P=>{let w=P.close+(r.capture?")":""),b;if(P.type==="negate"){let y=Ee;if(P.inner&&P.inner.length>1&&P.inner.includes("/")&&(y=de(r)),(y!==Ee||De()||/^\)+$/.test(_()))&&(w=P.close=`)$))${y}`),P.inner.includes("*")&&(b=_())&&/^\.[^\\/.]+$/.test(b)){let F=t4(b,{...t,fastpaths:!1}).output;w=P.close=`)${F})${y})`}P.prev.type==="bos"&&(g.negatedExtglob=!0)}Re({type:"paren",extglob:!0,value:X,output:w}),je("parens")};if(r.fastpaths!==!1&&!/(^[*!]|[/()[\]{}"])/.test(e)){let P=!1,w=e.replace(aKe,(b,y,F,z,Z,$)=>z==="\\"?(P=!0,b):z==="?"?y?y+z+(Z?te.repeat(Z.length):""):$===0?Ce+(Z?te.repeat(Z.length):""):te.repeat(F.length):z==="."?C.repeat(F.length):z==="*"?y?y+z+(Z?Ee:""):Ee:y?b:`\\${b}`);return P===!0&&(r.unescape===!0?w=w.replace(/\\/g,""):w=w.replace(/\\+/g,b=>b.length%2===0?"\\\\":b?"\\":"")),w===e&&r.contains===!0?(g.output=e,g):(g.output=Kl.wrapOutput(w,g,t),g)}for(;!De();){if(X=it(),X==="\0")continue;if(X==="\\"){let b=Qe();if(b==="/"&&r.bash!==!0||b==="."||b===";")continue;if(!b){X+="\\",Re({type:"text",value:X});continue}let y=/^\\+/.exec(_()),F=0;if(y&&y[0].length>2&&(F=y[0].length,g.index+=F,F%2!==0&&(X+="\\")),r.unescape===!0?X=it():X+=it(),g.brackets===0){Re({type:"text",value:X});continue}}if(g.brackets>0&&(X!=="]"||ce.value==="["||ce.value==="[^")){if(r.posix!==!1&&X===":"){let b=ce.value.slice(1);if(b.includes("[")&&(ce.posix=!0,b.includes(":"))){let y=ce.value.lastIndexOf("["),F=ce.value.slice(0,y),z=ce.value.slice(y+2),Z=sKe[z];if(Z){ce.value=F+Z,g.backtrack=!0,it(),!n.output&&c.indexOf(ce)===1&&(n.output=I);continue}}}(X==="["&&Qe()!==":"||X==="-"&&Qe()==="]")&&(X=`\\${X}`),X==="]"&&(ce.value==="["||ce.value==="[^")&&(X=`\\${X}`),r.posix===!0&&X==="!"&&ce.value==="["&&(X="^"),ce.value+=X,Ne({value:X});continue}if(g.quotes===1&&X!=='"'){X=Kl.escapeRegex(X),ce.value+=X,Ne({value:X});continue}if(X==='"'){g.quotes=g.quotes===1?0:1,r.keepQuotes===!0&&Re({type:"text",value:X});continue}if(X==="("){be("parens"),Re({type:"paren",value:X});continue}if(X===")"){if(g.parens===0&&r.strictBrackets===!0)throw new SyntaxError(LE("opening","("));let b=Se[Se.length-1];if(b&&g.parens===b.parens+1){Me(Se.pop());continue}Re({type:"paren",value:X,output:g.parens?")":"\\)"}),je("parens");continue}if(X==="["){if(r.nobracket===!0||!_().includes("]")){if(r.nobracket!==!0&&r.strictBrackets===!0)throw new SyntaxError(LE("closing","]"));X=`\\${X}`}else be("brackets");Re({type:"bracket",value:X});continue}if(X==="]"){if(r.nobracket===!0||ce&&ce.type==="bracket"&&ce.value.length===1){Re({type:"text",value:X,output:`\\${X}`});continue}if(g.brackets===0){if(r.strictBrackets===!0)throw new SyntaxError(LE("opening","["));Re({type:"text",value:X,output:`\\${X}`});continue}je("brackets");let b=ce.value.slice(1);if(ce.posix!==!0&&b[0]==="^"&&!b.includes("/")&&(X=`/${X}`),ce.value+=X,Ne({value:X}),r.literalBrackets===!1||Kl.hasRegexChars(b))continue;let y=Kl.escapeRegex(ce.value);if(g.output=g.output.slice(0,-ce.value.length),r.literalBrackets===!0){g.output+=y,ce.value=y;continue}ce.value=`(${f}${y}|${ce.value})`,g.output+=ce.value;continue}if(X==="{"&&r.nobrace!==!0){be("braces");let b={type:"brace",value:X,output:"(",outputIndex:g.output.length,tokensIndex:g.tokens.length};Be.push(b),Re(b);continue}if(X==="}"){let b=Be[Be.length-1];if(r.nobrace===!0||!b){Re({type:"text",value:X,output:X});continue}let y=")";if(b.dots===!0){let F=c.slice(),z=[];for(let Z=F.length-1;Z>=0&&(c.pop(),F[Z].type!=="brace");Z--)F[Z].type!=="dots"&&z.unshift(F[Z].value);y=lKe(z,r),g.backtrack=!0}if(b.comma!==!0&&b.dots!==!0){let F=g.output.slice(0,b.outputIndex),z=g.tokens.slice(b.tokensIndex);b.value=b.output="\\{",X=y="\\}",g.output=F;for(let Z of z)g.output+=Z.output||Z.value}Re({type:"brace",value:X,output:y}),je("braces"),Be.pop();continue}if(X==="|"){Se.length>0&&Se[Se.length-1].conditions++,Re({type:"text",value:X});continue}if(X===","){let b=X,y=Be[Be.length-1];y&&me[me.length-1]==="braces"&&(y.comma=!0,b="|"),Re({type:"comma",value:X,output:b});continue}if(X==="/"){if(ce.type==="dot"&&g.index===g.start+1){g.start=g.index+1,g.consumed="",g.output="",c.pop(),ce=n;continue}Re({type:"slash",value:X,output:x});continue}if(X==="."){if(g.braces>0&&ce.type==="dot"){ce.value==="."&&(ce.output=C);let b=Be[Be.length-1];ce.type="dots",ce.output+=X,ce.value+=X,b.dots=!0;continue}if(g.braces+g.parens===0&&ce.type!=="bos"&&ce.type!=="slash"){Re({type:"text",value:X,output:C});continue}Re({type:"dot",value:X,output:C});continue}if(X==="?"){if(!(ce&&ce.value==="(")&&r.noextglob!==!0&&Qe()==="("&&Qe(2)!=="?"){ct("qmark",X);continue}if(ce&&ce.type==="paren"){let y=Qe(),F=X;if(y==="<"&&!Kl.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");(ce.value==="("&&!/[!=<:]/.test(y)||y==="<"&&!/<([!=]|\w+>)/.test(_()))&&(F=`\\${X}`),Re({type:"text",value:X,output:F});continue}if(r.dot!==!0&&(ce.type==="slash"||ce.type==="bos")){Re({type:"qmark",value:X,output:ie});continue}Re({type:"qmark",value:X,output:te});continue}if(X==="!"){if(r.noextglob!==!0&&Qe()==="("&&(Qe(2)!=="?"||!/[!=<:]/.test(Qe(3)))){ct("negate",X);continue}if(r.nonegate!==!0&&g.index===0){ke();continue}}if(X==="+"){if(r.noextglob!==!0&&Qe()==="("&&Qe(2)!=="?"){ct("plus",X);continue}if(ce&&ce.value==="("||r.regex===!1){Re({type:"plus",value:X,output:S});continue}if(ce&&(ce.type==="bracket"||ce.type==="paren"||ce.type==="brace")||g.parens>0){Re({type:"plus",value:X});continue}Re({type:"plus",value:S});continue}if(X==="@"){if(r.noextglob!==!0&&Qe()==="("&&Qe(2)!=="?"){Re({type:"at",extglob:!0,value:X,output:""});continue}Re({type:"text",value:X});continue}if(X!=="*"){(X==="$"||X==="^")&&(X=`\\${X}`);let b=oKe.exec(_());b&&(X+=b[0],g.index+=b[0].length),Re({type:"text",value:X});continue}if(ce&&(ce.type==="globstar"||ce.star===!0)){ce.type="star",ce.star=!0,ce.value+=X,ce.output=Ee,g.backtrack=!0,g.globstar=!0,tt(X);continue}let P=_();if(r.noextglob!==!0&&/^\([^?]/.test(P)){ct("star",X);continue}if(ce.type==="star"){if(r.noglobstar===!0){tt(X);continue}let b=ce.prev,y=b.prev,F=b.type==="slash"||b.type==="bos",z=y&&(y.type==="star"||y.type==="globstar");if(r.bash===!0&&(!F||P[0]&&P[0]!=="/")){Re({type:"star",value:X,output:""});continue}let Z=g.braces>0&&(b.type==="comma"||b.type==="brace"),$=Se.length&&(b.type==="pipe"||b.type==="paren");if(!F&&b.type!=="paren"&&!Z&&!$){Re({type:"star",value:X,output:""});continue}for(;P.slice(0,3)==="/**";){let se=e[g.index+4];if(se&&se!=="/")break;P=P.slice(3),tt("/**",3)}if(b.type==="bos"&&De()){ce.type="globstar",ce.value+=X,ce.output=de(r),g.output=ce.output,g.globstar=!0,tt(X);continue}if(b.type==="slash"&&b.prev.type!=="bos"&&!z&&De()){g.output=g.output.slice(0,-(b.output+ce.output).length),b.output=`(?:${b.output}`,ce.type="globstar",ce.output=de(r)+(r.strictSlashes?")":"|$)"),ce.value+=X,g.globstar=!0,g.output+=b.output+ce.output,tt(X);continue}if(b.type==="slash"&&b.prev.type!=="bos"&&P[0]==="/"){let se=P[1]!==void 0?"|$":"";g.output=g.output.slice(0,-(b.output+ce.output).length),b.output=`(?:${b.output}`,ce.type="globstar",ce.output=`${de(r)}${x}|${x}${se})`,ce.value+=X,g.output+=b.output+ce.output,g.globstar=!0,tt(X+it()),Re({type:"slash",value:"/",output:""});continue}if(b.type==="bos"&&P[0]==="/"){ce.type="globstar",ce.value+=X,ce.output=`(?:^|${x}|${de(r)}${x})`,g.output=ce.output,g.globstar=!0,tt(X+it()),Re({type:"slash",value:"/",output:""});continue}g.output=g.output.slice(0,-ce.output.length),ce.type="globstar",ce.output=de(r),ce.value+=X,g.output+=ce.output,g.globstar=!0,tt(X);continue}let w={type:"star",value:X,output:Ee};if(r.bash===!0){w.output=".*?",(ce.type==="bos"||ce.type==="slash")&&(w.output=Ae+w.output),Re(w);continue}if(ce&&(ce.type==="bracket"||ce.type==="paren")&&r.regex===!0){w.output=X,Re(w);continue}(g.index===g.start||ce.type==="slash"||ce.type==="dot")&&(ce.type==="dot"?(g.output+=U,ce.output+=U):r.dot===!0?(g.output+=Y,ce.output+=Y):(g.output+=Ae,ce.output+=Ae),Qe()!=="*"&&(g.output+=I,ce.output+=I)),Re(w)}for(;g.brackets>0;){if(r.strictBrackets===!0)throw new SyntaxError(LE("closing","]"));g.output=Kl.escapeLast(g.output,"["),je("brackets")}for(;g.parens>0;){if(r.strictBrackets===!0)throw new SyntaxError(LE("closing",")"));g.output=Kl.escapeLast(g.output,"("),je("parens")}for(;g.braces>0;){if(r.strictBrackets===!0)throw new SyntaxError(LE("closing","}"));g.output=Kl.escapeLast(g.output,"{"),je("braces")}if(r.strictSlashes!==!0&&(ce.type==="star"||ce.type==="bracket")&&Re({type:"maybe_slash",value:"",output:`${x}?`}),g.backtrack===!0){g.output="";for(let P of g.tokens)g.output+=P.output!=null?P.output:P.value,P.suffix&&(g.output+=P.suffix)}return g};t4.fastpaths=(e,t)=>{let r={...t},s=typeof r.maxLength=="number"?Math.min(hk,r.maxLength):hk,a=e.length;if(a>s)throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${s}`);e=Aoe[e]||e;let n=Kl.isWindows(t),{DOT_LITERAL:c,SLASH_LITERAL:f,ONE_CHAR:p,DOTS_SLASH:h,NO_DOT:E,NO_DOTS:C,NO_DOTS_SLASH:S,STAR:x,START_ANCHOR:I}=pk.globChars(n),T=r.dot?C:E,O=r.dot?S:E,U=r.capture?"":"?:",Y={negated:!1,prefix:""},te=r.bash===!0?".*?":x;r.capture&&(te=`(${te})`);let ie=Ae=>Ae.noglobstar===!0?te:`(${U}(?:(?!${I}${Ae.dot?h:c}).)*?)`,ue=Ae=>{switch(Ae){case"*":return`${T}${p}${te}`;case".*":return`${c}${p}${te}`;case"*.*":return`${T}${te}${c}${p}${te}`;case"*/*":return`${T}${te}${f}${p}${O}${te}`;case"**":return T+ie(r);case"**/*":return`(?:${T}${ie(r)}${f})?${O}${p}${te}`;case"**/*.*":return`(?:${T}${ie(r)}${f})?${O}${te}${c}${p}${te}`;case"**/.*":return`(?:${T}${ie(r)}${f})?${c}${p}${te}`;default:{let Ce=/^(.*?)\.(\w+)$/.exec(Ae);if(!Ce)return;let Ee=ue(Ce[1]);return Ee?Ee+c+Ce[2]:void 0}}},ae=Kl.removePrefix(e,Y),de=ue(ae);return de&&r.strictSlashes!==!0&&(de+=`${f}?`),de};poe.exports=t4});var doe=G((kQt,goe)=>{"use strict";var cKe=Ie("path"),uKe=foe(),r4=hoe(),n4=A2(),fKe=f2(),AKe=e=>e&&typeof e=="object"&&!Array.isArray(e),Xi=(e,t,r=!1)=>{if(Array.isArray(e)){let E=e.map(S=>Xi(S,t,r));return S=>{for(let x of E){let I=x(S);if(I)return I}return!1}}let s=AKe(e)&&e.tokens&&e.input;if(e===""||typeof e!="string"&&!s)throw new TypeError("Expected pattern to be a non-empty string");let a=t||{},n=n4.isWindows(t),c=s?Xi.compileRe(e,t):Xi.makeRe(e,t,!1,!0),f=c.state;delete c.state;let p=()=>!1;if(a.ignore){let E={...t,ignore:null,onMatch:null,onResult:null};p=Xi(a.ignore,E,r)}let h=(E,C=!1)=>{let{isMatch:S,match:x,output:I}=Xi.test(E,c,t,{glob:e,posix:n}),T={glob:e,state:f,regex:c,posix:n,input:E,output:I,match:x,isMatch:S};return typeof a.onResult=="function"&&a.onResult(T),S===!1?(T.isMatch=!1,C?T:!1):p(E)?(typeof a.onIgnore=="function"&&a.onIgnore(T),T.isMatch=!1,C?T:!1):(typeof a.onMatch=="function"&&a.onMatch(T),C?T:!0)};return r&&(h.state=f),h};Xi.test=(e,t,r,{glob:s,posix:a}={})=>{if(typeof e!="string")throw new TypeError("Expected input to be a string");if(e==="")return{isMatch:!1,output:""};let n=r||{},c=n.format||(a?n4.toPosixSlashes:null),f=e===s,p=f&&c?c(e):e;return f===!1&&(p=c?c(e):e,f=p===s),(f===!1||n.capture===!0)&&(n.matchBase===!0||n.basename===!0?f=Xi.matchBase(e,t,r,a):f=t.exec(p)),{isMatch:!!f,match:f,output:p}};Xi.matchBase=(e,t,r,s=n4.isWindows(r))=>(t instanceof RegExp?t:Xi.makeRe(t,r)).test(cKe.basename(e));Xi.isMatch=(e,t,r)=>Xi(t,r)(e);Xi.parse=(e,t)=>Array.isArray(e)?e.map(r=>Xi.parse(r,t)):r4(e,{...t,fastpaths:!1});Xi.scan=(e,t)=>uKe(e,t);Xi.compileRe=(e,t,r=!1,s=!1)=>{if(r===!0)return e.output;let a=t||{},n=a.contains?"":"^",c=a.contains?"":"$",f=`${n}(?:${e.output})${c}`;e&&e.negated===!0&&(f=`^(?!${f}).*$`);let p=Xi.toRegex(f,t);return s===!0&&(p.state=e),p};Xi.makeRe=(e,t={},r=!1,s=!1)=>{if(!e||typeof e!="string")throw new TypeError("Expected a non-empty string");let a={negated:!1,fastpaths:!0};return t.fastpaths!==!1&&(e[0]==="."||e[0]==="*")&&(a.output=r4.fastpaths(e,t)),a.output||(a=r4(e,t)),Xi.compileRe(a,t,r,s)};Xi.toRegex=(e,t)=>{try{let r=t||{};return new RegExp(e,r.flags||(r.nocase?"i":""))}catch(r){if(t&&t.debug===!0)throw r;return/$^/}};Xi.constants=fKe;goe.exports=Xi});var yoe=G((QQt,moe)=>{"use strict";moe.exports=doe()});var Jo=G((RQt,woe)=>{"use strict";var Ioe=Ie("util"),Coe=Xse(),zf=yoe(),i4=A2(),Eoe=e=>e===""||e==="./",xi=(e,t,r)=>{t=[].concat(t),e=[].concat(e);let s=new Set,a=new Set,n=new Set,c=0,f=E=>{n.add(E.output),r&&r.onResult&&r.onResult(E)};for(let E=0;E<t.length;E++){let C=zf(String(t[E]),{...r,onResult:f},!0),S=C.state.negated||C.state.negatedExtglob;S&&c++;for(let x of e){let I=C(x,!0);(S?!I.isMatch:I.isMatch)&&(S?s.add(I.output):(s.delete(I.output),a.add(I.output)))}}let h=(c===t.length?[...n]:[...a]).filter(E=>!s.has(E));if(r&&h.length===0){if(r.failglob===!0)throw new Error(`No matches found for "${t.join(", ")}"`);if(r.nonull===!0||r.nullglob===!0)return r.unescape?t.map(E=>E.replace(/\\/g,"")):t}return h};xi.match=xi;xi.matcher=(e,t)=>zf(e,t);xi.isMatch=(e,t,r)=>zf(t,r)(e);xi.any=xi.isMatch;xi.not=(e,t,r={})=>{t=[].concat(t).map(String);let s=new Set,a=[],n=f=>{r.onResult&&r.onResult(f),a.push(f.output)},c=new Set(xi(e,t,{...r,onResult:n}));for(let f of a)c.has(f)||s.add(f);return[...s]};xi.contains=(e,t,r)=>{if(typeof e!="string")throw new TypeError(`Expected a string: "${Ioe.inspect(e)}"`);if(Array.isArray(t))return t.some(s=>xi.contains(e,s,r));if(typeof t=="string"){if(Eoe(e)||Eoe(t))return!1;if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t))return!0}return xi.isMatch(e,t,{...r,contains:!0})};xi.matchKeys=(e,t,r)=>{if(!i4.isObject(e))throw new TypeError("Expected the first argument to be an object");let s=xi(Object.keys(e),t,r),a={};for(let n of s)a[n]=e[n];return a};xi.some=(e,t,r)=>{let s=[].concat(e);for(let a of[].concat(t)){let n=zf(String(a),r);if(s.some(c=>n(c)))return!0}return!1};xi.every=(e,t,r)=>{let s=[].concat(e);for(let a of[].concat(t)){let n=zf(String(a),r);if(!s.every(c=>n(c)))return!1}return!0};xi.all=(e,t,r)=>{if(typeof e!="string")throw new TypeError(`Expected a string: "${Ioe.inspect(e)}"`);return[].concat(t).every(s=>zf(s,r)(e))};xi.capture=(e,t,r)=>{let s=i4.isWindows(r),n=zf.makeRe(String(e),{...r,capture:!0}).exec(s?i4.toPosixSlashes(t):t);if(n)return n.slice(1).map(c=>c===void 0?"":c)};xi.makeRe=(...e)=>zf.makeRe(...e);xi.scan=(...e)=>zf.scan(...e);xi.parse=(e,t)=>{let r=[];for(let s of[].concat(e||[]))for(let a of Coe(String(s),t))r.push(zf.parse(a,t));return r};xi.braces=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a string");return t&&t.nobrace===!0||!/\{.*\}/.test(e)?[e]:Coe(e,t)};xi.braceExpand=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a string");return xi.braces(e,{...t,expand:!0})};woe.exports=xi});var voe=G((TQt,Boe)=>{"use strict";Boe.exports=({onlyFirst:e=!1}={})=>{let t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e?void 0:"g")}});var gk=G((FQt,Soe)=>{"use strict";var pKe=voe();Soe.exports=e=>typeof e=="string"?e.replace(pKe(),""):e});function Doe(e){return Number.isSafeInteger(e)&&e>=0}var boe=Ze(()=>{});function Poe(e){return e!=null&&typeof e!="function"&&Doe(e.length)}var xoe=Ze(()=>{boe()});function Pc(e){return e==="__proto__"}var h2=Ze(()=>{});function ME(e){switch(typeof e){case"number":case"symbol":return!1;case"string":return e.includes(".")||e.includes("[")||e.includes("]")}}var dk=Ze(()=>{});function UE(e){return typeof e=="string"||typeof e=="symbol"?e:Object.is(e?.valueOf?.(),-0)?"-0":String(e)}var mk=Ze(()=>{});function Ou(e){let t=[],r=e.length;if(r===0)return t;let s=0,a="",n="",c=!1;for(e.charCodeAt(0)===46&&(t.push(""),s++);s<r;){let f=e[s];n?f==="\\"&&s+1<r?(s++,a+=e[s]):f===n?n="":a+=f:c?f==='"'||f==="'"?n=f:f==="]"?(c=!1,t.push(a),a=""):a+=f:f==="["?(c=!0,a&&(t.push(a),a="")):f==="."?a&&(t.push(a),a=""):a+=f,s++}return a&&t.push(a),t}var _E=Ze(()=>{});function ba(e,t,r){if(e==null)return r;switch(typeof t){case"string":{if(Pc(t))return r;let s=e[t];return s===void 0?ME(t)?ba(e,Ou(t),r):r:s}case"number":case"symbol":{typeof t=="number"&&(t=UE(t));let s=e[t];return s===void 0?r:s}default:{if(Array.isArray(t))return hKe(e,t,r);if(Object.is(t?.valueOf(),-0)?t="-0":t=String(t),Pc(t))return r;let s=e[t];return s===void 0?r:s}}}function hKe(e,t,r){if(t.length===0)return r;let s=e;for(let a=0;a<t.length;a++){if(s==null||Pc(t[a]))return r;s=s[t[a]]}return s===void 0?r:s}var yk=Ze(()=>{h2();dk();mk();_E()});function s4(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var koe=Ze(()=>{});function HE(e){return e==null||typeof e!="object"&&typeof e!="function"}var Ek=Ze(()=>{});function Ik(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}var o4=Ze(()=>{});function Gd(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}var Ck=Ze(()=>{});function qd(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var wk=Ze(()=>{});var Bk,jE,GE,qE,Wd,vk,Sk,Dk,bk,Pk,Qoe,xk,WE,Roe,kk,Qk,Rk,Tk,Fk,Toe,Nk,Ok,Lk,Foe,Mk,Uk,_k=Ze(()=>{Bk="[object RegExp]",jE="[object String]",GE="[object Number]",qE="[object Boolean]",Wd="[object Arguments]",vk="[object Symbol]",Sk="[object Date]",Dk="[object Map]",bk="[object Set]",Pk="[object Array]",Qoe="[object Function]",xk="[object ArrayBuffer]",WE="[object Object]",Roe="[object Error]",kk="[object DataView]",Qk="[object Uint8Array]",Rk="[object Uint8ClampedArray]",Tk="[object Uint16Array]",Fk="[object Uint32Array]",Toe="[object BigUint64Array]",Nk="[object Int8Array]",Ok="[object Int16Array]",Lk="[object Int32Array]",Foe="[object BigInt64Array]",Mk="[object Float32Array]",Uk="[object Float64Array]"});function VE(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Hk=Ze(()=>{});function Noe(e,t){return l0(e,void 0,e,new Map,t)}function l0(e,t,r,s=new Map,a=void 0){let n=a?.(e,t,r,s);if(n!=null)return n;if(HE(e))return e;if(s.has(e))return s.get(e);if(Array.isArray(e)){let c=new Array(e.length);s.set(e,c);for(let f=0;f<e.length;f++)c[f]=l0(e[f],f,r,s,a);return Object.hasOwn(e,"index")&&(c.index=e.index),Object.hasOwn(e,"input")&&(c.input=e.input),c}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp){let c=new RegExp(e.source,e.flags);return c.lastIndex=e.lastIndex,c}if(e instanceof Map){let c=new Map;s.set(e,c);for(let[f,p]of e)c.set(f,l0(p,f,r,s,a));return c}if(e instanceof Set){let c=new Set;s.set(e,c);for(let f of e)c.add(l0(f,void 0,r,s,a));return c}if(typeof Buffer<"u"&&Buffer.isBuffer(e))return e.subarray();if(VE(e)){let c=new(Object.getPrototypeOf(e)).constructor(e.length);s.set(e,c);for(let f=0;f<e.length;f++)c[f]=l0(e[f],f,r,s,a);return c}if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer)return e.slice(0);if(e instanceof DataView){let c=new DataView(e.buffer.slice(0),e.byteOffset,e.byteLength);return s.set(e,c),a0(c,e,r,s,a),c}if(typeof File<"u"&&e instanceof File){let c=new File([e],e.name,{type:e.type});return s.set(e,c),a0(c,e,r,s,a),c}if(e instanceof Blob){let c=new Blob([e],{type:e.type});return s.set(e,c),a0(c,e,r,s,a),c}if(e instanceof Error){let c=new e.constructor;return s.set(e,c),c.message=e.message,c.name=e.name,c.stack=e.stack,c.cause=e.cause,a0(c,e,r,s,a),c}if(typeof e=="object"&&gKe(e)){let c=Object.create(Object.getPrototypeOf(e));return s.set(e,c),a0(c,e,r,s,a),c}return e}function a0(e,t,r=e,s,a){let n=[...Object.keys(t),...Gd(t)];for(let c=0;c<n.length;c++){let f=n[c],p=Object.getOwnPropertyDescriptor(e,f);(p==null||p.writable)&&(e[f]=l0(t[f],f,r,s,a))}}function gKe(e){switch(qd(e)){case Wd:case Pk:case xk:case kk:case qE:case Sk:case Mk:case Uk:case Nk:case Ok:case Lk:case Dk:case GE:case WE:case Bk:case bk:case jE:case vk:case Qk:case Rk:case Tk:case Fk:return!0;default:return!1}}var a4=Ze(()=>{Ck();wk();_k();Ek();Hk()});function Ooe(e){return l0(e,void 0,e,new Map,void 0)}var Loe=Ze(()=>{a4()});function Moe(e,t){return Noe(e,(r,s,a,n)=>{let c=t?.(r,s,a,n);if(c!=null)return c;if(typeof e=="object")switch(Object.prototype.toString.call(e)){case GE:case jE:case qE:{let f=new e.constructor(e?.valueOf());return a0(f,e),f}case Wd:{let f={};return a0(f,e),f.length=e.length,f[Symbol.iterator]=e[Symbol.iterator],f}default:return}})}var Uoe=Ze(()=>{a4();_k()});function c0(e){return Moe(e)}var l4=Ze(()=>{Uoe()});function jk(e,t=Number.MAX_SAFE_INTEGER){switch(typeof e){case"number":return Number.isInteger(e)&&e>=0&&e<t;case"symbol":return!1;case"string":return dKe.test(e)}}var dKe,c4=Ze(()=>{dKe=/^(?:0|[1-9]\d*)$/});function g2(e){return e!==null&&typeof e=="object"&&qd(e)==="[object Arguments]"}var u4=Ze(()=>{wk()});function d2(e,t){let r;if(Array.isArray(t)?r=t:typeof t=="string"&&ME(t)&&e?.[t]==null?r=Ou(t):r=[t],r.length===0)return!1;let s=e;for(let a=0;a<r.length;a++){let n=r[a];if((s==null||!Object.hasOwn(s,n))&&!((Array.isArray(s)||g2(s))&&jk(n)&&n<s.length))return!1;s=s[n]}return!0}var f4=Ze(()=>{dk();c4();u4();_E()});function A4(e){return typeof e=="object"&&e!==null}var _oe=Ze(()=>{});function Hoe(e){return typeof e=="symbol"||e instanceof Symbol}var joe=Ze(()=>{});function Goe(e,t){return Array.isArray(e)?!1:typeof e=="number"||typeof e=="boolean"||e==null||Hoe(e)?!0:typeof e=="string"&&(yKe.test(e)||!mKe.test(e))||t!=null&&Object.hasOwn(t,e)}var mKe,yKe,qoe=Ze(()=>{joe();mKe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yKe=/^\w*$/});function u0(e,t){if(e==null)return!0;switch(typeof t){case"symbol":case"number":case"object":{if(Array.isArray(t))return Woe(e,t);if(typeof t=="number"?t=UE(t):typeof t=="object"&&(Object.is(t?.valueOf(),-0)?t="-0":t=String(t)),Pc(t))return!1;if(e?.[t]===void 0)return!0;try{return delete e[t],!0}catch{return!1}}case"string":{if(e?.[t]===void 0&&ME(t))return Woe(e,Ou(t));if(Pc(t))return!1;try{return delete e[t],!0}catch{return!1}}}}function Woe(e,t){let r=ba(e,t.slice(0,-1),e),s=t[t.length-1];if(r?.[s]===void 0)return!0;if(Pc(s))return!1;try{return delete r[s],!0}catch{return!1}}var p4=Ze(()=>{yk();h2();dk();mk();_E()});function Voe(e){return e==null}var Yoe=Ze(()=>{});var Koe,Joe=Ze(()=>{o4();Koe=(e,t,r)=>{let s=e[t];(!(Object.hasOwn(e,t)&&Ik(s,r))||r===void 0&&!(t in e))&&(e[t]=r)}});function zoe(e,t,r,s){if(e==null&&!s4(e))return e;let a=Goe(t,e)?[t]:Array.isArray(t)?t:typeof t=="string"?Ou(t):[t],n=e;for(let c=0;c<a.length&&n!=null;c++){let f=UE(a[c]);if(Pc(f))continue;let p;if(c===a.length-1)p=r(n[f]);else{let h=n[f],E=s?.(h,f,e);p=E!==void 0?E:s4(h)?h:jk(a[c+1])?[]:{}}Koe(n,f,p),n=n[f]}return e}var Zoe=Ze(()=>{h2();Joe();c4();qoe();mk();koe();_E()});function Vd(e,t,r){return zoe(e,t,()=>r,()=>{})}var h4=Ze(()=>{Zoe()});function Xoe(e,t=0,r={}){typeof r!="object"&&(r={});let s=null,a=null,n=null,c=0,f=null,p,{leading:h=!1,trailing:E=!0,maxWait:C}=r,S="maxWait"in r,x=S?Math.max(Number(C)||0,t):0,I=ue=>(s!==null&&(p=e.apply(a,s)),s=a=null,c=ue,p),T=ue=>(c=ue,f=setTimeout(te,t),h&&s!==null?I(ue):p),O=ue=>(f=null,E&&s!==null?I(ue):p),U=ue=>{if(n===null)return!0;let ae=ue-n,de=ae>=t||ae<0,Ae=S&&ue-c>=x;return de||Ae},Y=ue=>{let ae=n===null?0:ue-n,de=t-ae,Ae=x-(ue-c);return S?Math.min(de,Ae):de},te=()=>{let ue=Date.now();if(U(ue))return O(ue);f=setTimeout(te,Y(ue))},ie=function(...ue){let ae=Date.now(),de=U(ae);if(s=ue,a=this,n=ae,de){if(f===null)return T(ae);if(S)return clearTimeout(f),f=setTimeout(te,t),I(ae)}return f===null&&(f=setTimeout(te,t)),p};return ie.cancel=()=>{f!==null&&clearTimeout(f),c=0,n=s=a=f=null},ie.flush=()=>f===null?p:O(Date.now()),ie}var $oe=Ze(()=>{});function g4(e,t=0,r={}){let{leading:s=!0,trailing:a=!0}=r;return Xoe(e,t,{leading:s,maxWait:t,trailing:a})}var eae=Ze(()=>{$oe()});function d4(e){if(e==null)return"";if(typeof e=="string")return e;if(Array.isArray(e))return e.map(d4).join(",");let t=String(e);return t==="0"&&Object.is(Number(e),-0)?"-0":t}var tae=Ze(()=>{});function m4(e){if(!e||typeof e!="object")return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype||Object.getPrototypeOf(t)===null?Object.prototype.toString.call(e)==="[object Object]":!1}var rae=Ze(()=>{});function nae(e,t,r){return m2(e,t,void 0,void 0,void 0,void 0,r)}function m2(e,t,r,s,a,n,c){let f=c(e,t,r,s,a,n);if(f!==void 0)return f;if(typeof e==typeof t)switch(typeof e){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return e===t;case"number":return e===t||Object.is(e,t);case"function":return e===t;case"object":return y2(e,t,n,c)}return y2(e,t,n,c)}function y2(e,t,r,s){if(Object.is(e,t))return!0;let a=qd(e),n=qd(t);if(a===Wd&&(a=WE),n===Wd&&(n=WE),a!==n)return!1;switch(a){case jE:return e.toString()===t.toString();case GE:{let p=e.valueOf(),h=t.valueOf();return Ik(p,h)}case qE:case Sk:case vk:return Object.is(e.valueOf(),t.valueOf());case Bk:return e.source===t.source&&e.flags===t.flags;case Qoe:return e===t}r=r??new Map;let c=r.get(e),f=r.get(t);if(c!=null&&f!=null)return c===t;r.set(e,t),r.set(t,e);try{switch(a){case Dk:{if(e.size!==t.size)return!1;for(let[p,h]of e.entries())if(!t.has(p)||!m2(h,t.get(p),p,e,t,r,s))return!1;return!0}case bk:{if(e.size!==t.size)return!1;let p=Array.from(e.values()),h=Array.from(t.values());for(let E=0;E<p.length;E++){let C=p[E],S=h.findIndex(x=>m2(C,x,void 0,e,t,r,s));if(S===-1)return!1;h.splice(S,1)}return!0}case Pk:case Qk:case Rk:case Tk:case Fk:case Toe:case Nk:case Ok:case Lk:case Foe:case Mk:case Uk:{if(typeof Buffer<"u"&&Buffer.isBuffer(e)!==Buffer.isBuffer(t)||e.length!==t.length)return!1;for(let p=0;p<e.length;p++)if(!m2(e[p],t[p],p,e,t,r,s))return!1;return!0}case xk:return e.byteLength!==t.byteLength?!1:y2(new Uint8Array(e),new Uint8Array(t),r,s);case kk:return e.byteLength!==t.byteLength||e.byteOffset!==t.byteOffset?!1:y2(new Uint8Array(e),new Uint8Array(t),r,s);case Roe:return e.name===t.name&&e.message===t.message;case WE:{if(!(y2(e.constructor,t.constructor,r,s)||m4(e)&&m4(t)))return!1;let h=[...Object.keys(e),...Gd(e)],E=[...Object.keys(t),...Gd(t)];if(h.length!==E.length)return!1;for(let C=0;C<h.length;C++){let S=h[C],x=e[S];if(!Object.hasOwn(t,S))return!1;let I=t[S];if(!m2(x,I,S,e,t,r,s))return!1}return!0}default:return!1}}finally{r.delete(e),r.delete(t)}}var iae=Ze(()=>{rae();Ck();wk();_k();o4()});function sae(){}var oae=Ze(()=>{});function y4(e,t){return nae(e,t,sae)}var aae=Ze(()=>{iae();oae()});function lae(e){return VE(e)}var cae=Ze(()=>{Hk()});function uae(e){if(typeof e!="object"||e==null)return!1;if(Object.getPrototypeOf(e)===null)return!0;if(Object.prototype.toString.call(e)!=="[object Object]"){let r=e[Symbol.toStringTag];return r==null||!Object.getOwnPropertyDescriptor(e,Symbol.toStringTag)?.writable?!1:e.toString()===`[object ${r}]`}let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var fae=Ze(()=>{});function Aae(e){if(HE(e))return e;if(Array.isArray(e)||VE(e)||e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer)return e.slice(0);let t=Object.getPrototypeOf(e),r=t.constructor;if(e instanceof Date||e instanceof Map||e instanceof Set)return new r(e);if(e instanceof RegExp){let s=new r(e);return s.lastIndex=e.lastIndex,s}if(e instanceof DataView)return new r(e.buffer.slice(0));if(e instanceof Error){let s=new r(e.message);return s.stack=e.stack,s.name=e.name,s.cause=e.cause,s}if(typeof File<"u"&&e instanceof File)return new r([e],e.name,{type:e.type,lastModified:e.lastModified});if(typeof e=="object"){let s=Object.create(t);return Object.assign(s,e)}return e}var pae=Ze(()=>{Ek();Hk()});function E4(e,...t){let r=t.slice(0,-1),s=t[t.length-1],a=e;for(let n=0;n<r.length;n++){let c=r[n];a=Gk(a,c,s,new Map)}return a}function Gk(e,t,r,s){if(HE(e)&&(e=Object(e)),t==null||typeof t!="object")return e;if(s.has(t))return Aae(s.get(t));if(s.set(t,e),Array.isArray(t)){t=t.slice();for(let n=0;n<t.length;n++)t[n]=t[n]??void 0}let a=[...Object.keys(t),...Gd(t)];for(let n=0;n<a.length;n++){let c=a[n];if(Pc(c))continue;let f=t[c],p=e[c];if(g2(f)&&(f={...f}),g2(p)&&(p={...p}),typeof Buffer<"u"&&Buffer.isBuffer(f)&&(f=c0(f)),Array.isArray(f))if(typeof p=="object"&&p!=null){let E=[],C=Reflect.ownKeys(p);for(let S=0;S<C.length;S++){let x=C[S];E[x]=p[x]}p=E}else p=[];let h=r(p,f,c,e,t,s);h!=null?e[c]=h:Array.isArray(f)||A4(p)&&A4(f)?e[c]=Gk(p,f,r,s):p==null&&uae(f)?e[c]=Gk({},f,r,s):p==null&&lae(f)?e[c]=c0(f):(p===void 0||f!==void 0)&&(e[c]=f)}return e}var hae=Ze(()=>{l4();h2();pae();Ek();Ck();u4();_oe();fae();cae()});function I4(e,...t){if(e==null)return{};let r=Ooe(e);for(let s=0;s<t.length;s++){let a=t[s];switch(typeof a){case"object":{Array.isArray(a)||(a=Array.from(a));for(let n=0;n<a.length;n++){let c=a[n];u0(r,c)}break}case"string":case"symbol":case"number":{u0(r,a);break}}}return r}var gae=Ze(()=>{p4();Loe()});function Yd(e,...t){if(Voe(e))return{};let r={};for(let s=0;s<t.length;s++){let a=t[s];switch(typeof a){case"object":{Array.isArray(a)||(Poe(a)?a=Array.from(a):a=[a]);break}case"string":case"symbol":case"number":{a=[a];break}}for(let n of a){let c=ba(e,n);c===void 0&&!d2(e,n)||(typeof n=="string"&&Object.hasOwn(e,n)?r[n]=c:Vd(r,n,c))}}return r}var dae=Ze(()=>{yk();f4();h4();xoe();Yoe()});function mae(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}var yae=Ze(()=>{});function E2(e){return mae(d4(e))}var Eae=Ze(()=>{yae();tae()});var Jl=Ze(()=>{eae();aae();l4();yk();f4();hae();gae();dae();h4();p4();Eae();_E()});var Ge={};Yt(Ge,{AsyncActions:()=>B4,BufferStream:()=>w4,CachingStrategy:()=>xae,DefaultStream:()=>v4,allSettledSafe:()=>Lu,assertNever:()=>b4,bufferStream:()=>KE,buildIgnorePattern:()=>SKe,convertMapsToIndexableObjects:()=>Wk,dynamicRequire:()=>xp,escapeRegExp:()=>IKe,getArrayWithDefault:()=>C2,getFactoryWithDefault:()=>Zl,getMapWithDefault:()=>P4,getSetWithDefault:()=>Pp,groupBy:()=>PKe,isIndexableObject:()=>C4,isPathLike:()=>DKe,isTaggedYarnVersion:()=>EKe,makeDeferred:()=>Dae,mapAndFilter:()=>zl,mapAndFind:()=>f0,mergeIntoTarget:()=>Qae,overrideType:()=>CKe,parseBoolean:()=>w2,parseDuration:()=>Yk,parseInt:()=>JE,parseOptionalBoolean:()=>kae,plural:()=>qk,prettifyAsyncErrors:()=>YE,prettifySyncErrors:()=>x4,releaseAfterUseAsync:()=>BKe,replaceEnvVariables:()=>Vk,sortMap:()=>Ys,toMerged:()=>bKe,tryParseOptionalBoolean:()=>k4,validateEnum:()=>wKe});function EKe(e){return!!(Bae.default.valid(e)&&e.match(/^[^-]+(-rc\.[0-9]+)?$/))}function qk(e,{one:t,more:r,zero:s=r}){return e===0?s:e===1?t:r}function IKe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function CKe(e){}function b4(e){throw new Error(`Assertion failed: Unexpected object '${e}'`)}function wKe(e,t){let r=Object.values(e);if(!r.includes(t))throw new st(`Invalid value for enumeration: ${JSON.stringify(t)} (expected one of ${r.map(s=>JSON.stringify(s)).join(", ")})`);return t}function zl(e,t){let r=[];for(let s of e){let a=t(s);a!==vae&&r.push(a)}return r}function f0(e,t){for(let r of e){let s=t(r);if(s!==Sae)return s}}function C4(e){return typeof e=="object"&&e!==null}async function Lu(e){let t=await Promise.allSettled(e),r=[];for(let s of t){if(s.status==="rejected")throw s.reason;r.push(s.value)}return r}function Wk(e){if(e instanceof Map&&(e=Object.fromEntries(e)),C4(e))for(let t of Object.keys(e)){let r=e[t];C4(r)&&(e[t]=Wk(r))}return e}function Zl(e,t,r){let s=e.get(t);return typeof s>"u"&&e.set(t,s=r()),s}function C2(e,t){let r=e.get(t);return typeof r>"u"&&e.set(t,r=[]),r}function Pp(e,t){let r=e.get(t);return typeof r>"u"&&e.set(t,r=new Set),r}function P4(e,t){let r=e.get(t);return typeof r>"u"&&e.set(t,r=new Map),r}async function BKe(e,t){if(t==null)return await e();try{return await e()}finally{await t()}}async function YE(e,t){try{return await e()}catch(r){throw r.message=t(r.message),r}}function x4(e,t){try{return e()}catch(r){throw r.message=t(r.message),r}}async function KE(e){return await new Promise((t,r)=>{let s=[];e.on("error",a=>{r(a)}),e.on("data",a=>{s.push(a)}),e.on("end",()=>{t(Buffer.concat(s))})})}function Dae(){let e,t;return{promise:new Promise((s,a)=>{e=s,t=a}),resolve:e,reject:t}}function bae(e){return I2(fe.fromPortablePath(e))}function Pae(path){let physicalPath=fe.fromPortablePath(path),currentCacheEntry=I2.cache[physicalPath];delete I2.cache[physicalPath];let result;try{result=bae(physicalPath);let freshCacheEntry=I2.cache[physicalPath],dynamicModule=eval("module"),freshCacheIndex=dynamicModule.children.indexOf(freshCacheEntry);freshCacheIndex!==-1&&dynamicModule.children.splice(freshCacheIndex,1)}finally{I2.cache[physicalPath]=currentCacheEntry}return result}function vKe(e){let t=Iae.get(e),r=le.statSync(e);if(t?.mtime===r.mtimeMs)return t.instance;let s=Pae(e);return Iae.set(e,{mtime:r.mtimeMs,instance:s}),s}function xp(e,{cachingStrategy:t=2}={}){switch(t){case 0:return Pae(e);case 1:return vKe(e);case 2:return bae(e);default:throw new Error("Unsupported caching strategy")}}function Ys(e,t){let r=Array.from(e);Array.isArray(t)||(t=[t]);let s=[];for(let n of t)s.push(r.map(c=>n(c)));let a=r.map((n,c)=>c);return a.sort((n,c)=>{for(let f of s){let p=f[n]<f[c]?-1:f[n]>f[c]?1:0;if(p!==0)return p}return 0}),a.map(n=>r[n])}function SKe(e){return e.length===0?null:e.map(t=>`(${Cae.default.makeRe(t,{windows:!1,dot:!0}).source})`).join("|")}function Vk(e,{env:t}){let r="",s=0,a=0,n=e.matchAll(/\\(?<escaped>[\\$}])|\$\{(?<variable>[a-zA-Z]\w*)(?<operator>:-|-|(?=\}))|(?<unknown>\$\{)|\}/g),c=()=>{let f=a;for(let{0:p,index:h,groups:{variable:E}={}}of n)if(E)a++;else if(p==="}"&&--a<f)return h+p.length;return e.length};for(let{0:f,index:p,groups:{escaped:h,variable:E,operator:C,unknown:S}={}}of n)if(r+=e.slice(s,p),s=p+f.length,h)r+=h;else if(E){let x=t[E];if(a++,C===""&&x!==void 0||C===":-"&&x!==void 0&&x!==""||C==="-"&&x!==void 0)r+=x,s=c();else if(C==="")throw new st(`Environment variable not found (${E})`)}else if(f==="}")a===0?r+=f:a--;else if(S)throw new st(`Invalid environment variable substitution syntax: ${e}`);if(a>0)throw new st(`Incomplete variable substitution in input: ${e}`);return r+e.slice(s)}function w2(e){switch(e){case"true":case"1":case 1:case!0:return!0;case"false":case"0":case 0:case!1:return!1;default:throw new Error(`Couldn't parse "${e}" as a boolean`)}}function kae(e){return typeof e>"u"?e:w2(e)}function k4(e){try{return kae(e)}catch{return null}}function DKe(e){return!!(fe.isAbsolute(e)||e.match(/^(\.{1,2}|~)\//))}function Qae(e,...t){let r=c=>({value:c}),s=r(e),a=t.map(c=>r(c)),{value:n}=E4(s,...a,(c,f)=>{if(Array.isArray(c)&&Array.isArray(f)){for(let p of f)c.find(h=>y4(h,p))||c.push(p);return c}});return n}function bKe(...e){return Qae({},...e)}function PKe(e,t){let r=Object.create(null);for(let s of e){let a=s[t];r[a]??=[],r[a].push(s)}return r}function JE(e){return typeof e=="string"?Number.parseInt(e,10):e}function Yk(e,t){let r=xKe.exec(e)?.groups;if(!r)throw new Error(`Couldn't parse "${e}" as a duration`);if(r.unit===void 0)return parseFloat(r.num);let s=S4[r.unit];if(!s)throw new Error(`Invalid duration unit "${r.unit}"`);return parseFloat(r.num)*s/S4[t]}var Cae,wae,Bae,D4,vae,Sae,w4,B4,v4,I2,Iae,xae,S4,xKe,xc=Ze(()=>{Dt();Vt();Jl();Cae=et(Jo()),wae=et(Nd()),Bae=et(pi()),D4=Ie("stream");vae=Symbol();zl.skip=vae;Sae=Symbol();f0.skip=Sae;w4=class extends D4.Transform{constructor(){super(...arguments);this.chunks=[]}_transform(r,s,a){if(s!=="buffer"||!Buffer.isBuffer(r))throw new Error("Assertion failed: BufferStream only accept buffers");this.chunks.push(r),a(null,null)}_flush(r){r(null,Buffer.concat(this.chunks))}};B4=class{constructor(t){this.deferred=new Map;this.promises=new Map;this.limit=(0,wae.default)(t)}set(t,r){let s=this.deferred.get(t);typeof s>"u"&&this.deferred.set(t,s=Dae());let a=this.limit(()=>r());return this.promises.set(t,a),a.then(()=>{this.promises.get(t)===a&&s.resolve()},n=>{this.promises.get(t)===a&&s.reject(n)}),s.promise}reduce(t,r){let s=this.promises.get(t)??Promise.resolve();this.set(t,()=>r(s))}async wait(){await Promise.all(this.promises.values())}},v4=class extends D4.Transform{constructor(r=Buffer.alloc(0)){super();this.active=!0;this.ifEmpty=r}_transform(r,s,a){if(s!=="buffer"||!Buffer.isBuffer(r))throw new Error("Assertion failed: DefaultStream only accept buffers");this.active=!1,a(null,r)}_flush(r){this.active&&this.ifEmpty.length>0?r(null,this.ifEmpty):r(null)}},I2=eval("require");Iae=new Map;xae=(s=>(s[s.NoCache=0]="NoCache",s[s.FsTime=1]="FsTime",s[s.Node=2]="Node",s))(xae||{});S4={ms:1,s:1e3,m:60*1e3,h:60*60*1e3,d:24*60*60*1e3,w:7*24*60*60*1e3},xKe=new RegExp(`^(?<num>\\d*\\.?\\d+)(?<unit>${Object.keys(S4).join("|")})?$`)});var zE,Q4,R4,Rae=Ze(()=>{zE=(r=>(r.HARD="HARD",r.SOFT="SOFT",r))(zE||{}),Q4=(s=>(s.Dependency="Dependency",s.PeerDependency="PeerDependency",s.PeerDependencyMeta="PeerDependencyMeta",s))(Q4||{}),R4=(s=>(s.Inactive="inactive",s.Redundant="redundant",s.Active="active",s))(R4||{})});var pe={};Yt(pe,{LogLevel:()=>$k,Style:()=>zk,Type:()=>gt,addLogFilterSupport:()=>S2,applyColor:()=>si,applyHyperlink:()=>XE,applyStyle:()=>Kd,json:()=>Jd,jsonOrPretty:()=>RKe,mark:()=>L4,pretty:()=>jt,prettyField:()=>Zf,prettyList:()=>O4,prettyTruncatedLocatorList:()=>Xk,stripAnsi:()=>ZE.default,supportsColor:()=>Zk,supportsHyperlinks:()=>N4,tuple:()=>Mu});function Tae(e){let t=["KiB","MiB","GiB","TiB"],r=t.length;for(;r>1&&e<1024**r;)r-=1;let s=1024**r;return`${Math.floor(e*100/s)/100} ${t[r-1]}`}function Kk(e,t){if(Array.isArray(t))return t.length===0?si(e,"[]",gt.CODE):si(e,"[ ",gt.CODE)+t.map(r=>Kk(e,r)).join(", ")+si(e," ]",gt.CODE);if(typeof t=="string")return si(e,JSON.stringify(t),gt.STRING);if(typeof t=="number")return si(e,JSON.stringify(t),gt.NUMBER);if(typeof t=="boolean")return si(e,JSON.stringify(t),gt.BOOLEAN);if(t===null)return si(e,"null",gt.NULL);if(typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype){let r=Object.entries(t);return r.length===0?si(e,"{}",gt.CODE):si(e,"{ ",gt.CODE)+r.map(([s,a])=>`${Kk(e,s)}: ${Kk(e,a)}`).join(", ")+si(e," }",gt.CODE)}if(typeof t>"u")return si(e,"undefined",gt.NULL);throw new Error("Assertion failed: The value doesn't seem to be a valid JSON object")}function Mu(e,t){return[t,e]}function Kd(e,t,r){return e.get("enableColors")&&r&2&&(t=v2.default.bold(t)),t}function si(e,t,r){if(!e.get("enableColors"))return t;let s=kKe.get(r);if(s===null)return t;let a=typeof s>"u"?r:F4.level>=3?s[0]:s[1],n=typeof a=="number"?T4.ansi256(a):a.startsWith("#")?T4.hex(a):T4[a];if(typeof n!="function")throw new Error(`Invalid format type ${a}`);return n(t)}function XE(e,t,r){return e.get("enableHyperlinks")?QKe?`\x1B]8;;${r}\x1B\\${t}\x1B]8;;\x1B\\`:`\x1B]8;;${r}\x07${t}\x1B]8;;\x07`:t}function jt(e,t,r){if(t===null)return si(e,"null",gt.NULL);if(Object.hasOwn(Jk,r))return Jk[r].pretty(e,t);if(typeof t!="string")throw new Error(`Assertion failed: Expected the value to be a string, got ${typeof t}`);return si(e,t,r)}function O4(e,t,r,{separator:s=", "}={}){return[...t].map(a=>jt(e,a,r)).join(s)}function Jd(e,t){if(e===null)return null;if(Object.hasOwn(Jk,t))return Jk[t].json(e);if(typeof e!="string")throw new Error(`Assertion failed: Expected the value to be a string, got ${typeof e}`);return e}function RKe(e,t,[r,s]){return e?Jd(r,s):jt(t,r,s)}function L4(e){return{Check:si(e,"\u2713","green"),Cross:si(e,"\u2718","red"),Question:si(e,"?","cyan")}}function Zf(e,{label:t,value:[r,s]}){return`${jt(e,t,gt.CODE)}: ${jt(e,r,s)}`}function Xk(e,t,r){let s=[],a=[...t],n=r;for(;a.length>0;){let h=a[0],E=`${Vr(e,h)}, `,C=M4(h).length+2;if(s.length>0&&n<C)break;s.push([E,C]),n-=C,a.shift()}if(a.length===0)return s.map(([h])=>h).join("").slice(0,-2);let c="X".repeat(a.length.toString().length),f=`and ${c} more.`,p=a.length;for(;s.length>1&&n<f.length;)n+=s[s.length-1][1],p+=1,s.pop();return[s.map(([h])=>h).join(""),f.replace(c,jt(e,p,gt.NUMBER))].join("")}function S2(e,{configuration:t}){let r=t.get("logFilters"),s=new Map,a=new Map,n=[];for(let C of r){let S=C.get("level");if(typeof S>"u")continue;let x=C.get("code");typeof x<"u"&&s.set(x,S);let I=C.get("text");typeof I<"u"&&a.set(I,S);let T=C.get("pattern");typeof T<"u"&&n.push([Fae.default.matcher(T,{contains:!0}),S])}n.reverse();let c=(C,S,x)=>{if(C===null||C===0)return x;let I=a.size>0||n.length>0?(0,ZE.default)(S):S;if(a.size>0){let T=a.get(I);if(typeof T<"u")return T??x}if(n.length>0){for(let[T,O]of n)if(T(I))return O??x}if(s.size>0){let T=s.get(Kf(C));if(typeof T<"u")return T??x}return x},f=e.reportInfo,p=e.reportWarning,h=e.reportError,E=function(C,S,x,I){switch(c(S,x,I)){case"info":f.call(C,S,x);break;case"warning":p.call(C,S??0,x);break;case"error":h.call(C,S??0,x);break}};e.reportInfo=function(...C){return E(this,...C,"info")},e.reportWarning=function(...C){return E(this,...C,"warning")},e.reportError=function(...C){return E(this,...C,"error")}}var v2,B2,Fae,ZE,gt,zk,F4,Zk,N4,T4,kKe,zo,Jk,QKe,$k,kc=Ze(()=>{Dt();v2=et(NE()),B2=et(Rd());Vt();Fae=et(Jo()),ZE=et(gk());Gx();Zo();gt={NO_HINT:"NO_HINT",ID:"ID",NULL:"NULL",SCOPE:"SCOPE",NAME:"NAME",RANGE:"RANGE",REFERENCE:"REFERENCE",NUMBER:"NUMBER",STRING:"STRING",BOOLEAN:"BOOLEAN",PATH:"PATH",URL:"URL",ADDED:"ADDED",REMOVED:"REMOVED",CODE:"CODE",INSPECT:"INSPECT",DURATION:"DURATION",SIZE:"SIZE",SIZE_DIFF:"SIZE_DIFF",IDENT:"IDENT",DESCRIPTOR:"DESCRIPTOR",LOCATOR:"LOCATOR",RESOLUTION:"RESOLUTION",DEPENDENT:"DEPENDENT",PACKAGE_EXTENSION:"PACKAGE_EXTENSION",SETTING:"SETTING",MARKDOWN:"MARKDOWN",MARKDOWN_INLINE:"MARKDOWN_INLINE"},zk=(t=>(t[t.BOLD=2]="BOLD",t))(zk||{}),F4=B2.default.GITHUB_ACTIONS?{level:2}:v2.default.supportsColor?{level:v2.default.supportsColor.level}:{level:0},Zk=F4.level!==0,N4=Zk&&!B2.default.GITHUB_ACTIONS&&!B2.default.CIRCLE&&!B2.default.GITLAB,T4=new v2.default.Instance(F4),kKe=new Map([[gt.NO_HINT,null],[gt.NULL,["#a853b5",129]],[gt.SCOPE,["#d75f00",166]],[gt.NAME,["#d7875f",173]],[gt.RANGE,["#00afaf",37]],[gt.REFERENCE,["#87afff",111]],[gt.NUMBER,["#ffd700",220]],[gt.STRING,["#b4bd68",32]],[gt.BOOLEAN,["#faa023",209]],[gt.PATH,["#d75fd7",170]],[gt.URL,["#d75fd7",170]],[gt.ADDED,["#5faf00",70]],[gt.REMOVED,["#ff3131",160]],[gt.CODE,["#87afff",111]],[gt.SIZE,["#ffd700",220]]]),zo=e=>e;Jk={[gt.ID]:zo({pretty:(e,t)=>typeof t=="number"?si(e,`${t}`,gt.NUMBER):si(e,t,gt.CODE),json:e=>e}),[gt.INSPECT]:zo({pretty:(e,t)=>Kk(e,t),json:e=>e}),[gt.NUMBER]:zo({pretty:(e,t)=>si(e,`${t}`,gt.NUMBER),json:e=>e}),[gt.IDENT]:zo({pretty:(e,t)=>$i(e,t),json:e=>fn(e)}),[gt.LOCATOR]:zo({pretty:(e,t)=>Vr(e,t),json:e=>gl(e)}),[gt.DESCRIPTOR]:zo({pretty:(e,t)=>oi(e,t),json:e=>hl(e)}),[gt.RESOLUTION]:zo({pretty:(e,{descriptor:t,locator:r})=>D2(e,t,r),json:({descriptor:e,locator:t})=>({descriptor:hl(e),locator:t!==null?gl(t):null})}),[gt.DEPENDENT]:zo({pretty:(e,{locator:t,descriptor:r})=>U4(e,t,r),json:({locator:e,descriptor:t})=>({locator:gl(e),descriptor:hl(t)})}),[gt.PACKAGE_EXTENSION]:zo({pretty:(e,t)=>{switch(t.type){case"Dependency":return`${$i(e,t.parentDescriptor)} \u27A4 ${si(e,"dependencies",gt.CODE)} \u27A4 ${$i(e,t.descriptor)}`;case"PeerDependency":return`${$i(e,t.parentDescriptor)} \u27A4 ${si(e,"peerDependencies",gt.CODE)} \u27A4 ${$i(e,t.descriptor)}`;case"PeerDependencyMeta":return`${$i(e,t.parentDescriptor)} \u27A4 ${si(e,"peerDependenciesMeta",gt.CODE)} \u27A4 ${$i(e,Pa(t.selector))} \u27A4 ${si(e,t.key,gt.CODE)}`;default:throw new Error(`Assertion failed: Unsupported package extension type: ${t.type}`)}},json:e=>{switch(e.type){case"Dependency":return`${fn(e.parentDescriptor)} > ${fn(e.descriptor)}`;case"PeerDependency":return`${fn(e.parentDescriptor)} >> ${fn(e.descriptor)}`;case"PeerDependencyMeta":return`${fn(e.parentDescriptor)} >> ${e.selector} / ${e.key}`;default:throw new Error(`Assertion failed: Unsupported package extension type: ${e.type}`)}}}),[gt.SETTING]:zo({pretty:(e,t)=>(e.get(t),XE(e,si(e,t,gt.CODE),`https://yarnpkg.com/configuration/yarnrc#${t}`)),json:e=>e}),[gt.DURATION]:zo({pretty:(e,t)=>{if(t>1e3*60){let r=Math.floor(t/1e3/60),s=Math.ceil((t-r*60*1e3)/1e3);return s===0?`${r}m`:`${r}m ${s}s`}else{let r=Math.floor(t/1e3),s=t-r*1e3;return s===0?`${r}s`:`${r}s ${s}ms`}},json:e=>e}),[gt.SIZE]:zo({pretty:(e,t)=>si(e,Tae(t),gt.NUMBER),json:e=>e}),[gt.SIZE_DIFF]:zo({pretty:(e,t)=>{let r=t>=0?"+":"-",s=r==="+"?gt.REMOVED:gt.ADDED;return si(e,`${r} ${Tae(Math.max(Math.abs(t),1))}`,s)},json:e=>e}),[gt.PATH]:zo({pretty:(e,t)=>si(e,fe.fromPortablePath(t),gt.PATH),json:e=>fe.fromPortablePath(e)}),[gt.MARKDOWN]:zo({pretty:(e,{text:t,format:r,paragraphs:s})=>Vo(t,{format:r,paragraphs:s}),json:({text:e})=>e}),[gt.MARKDOWN_INLINE]:zo({pretty:(e,t)=>(t=t.replace(/(`+)((?:.|[\n])*?)\1/g,(r,s,a)=>jt(e,s+a+s,gt.CODE)),t=t.replace(/(\*\*)((?:.|[\n])*?)\1/g,(r,s,a)=>Kd(e,a,2)),t),json:e=>e})};QKe=!!process.env.KONSOLE_VERSION;$k=(a=>(a.Error="error",a.Warning="warning",a.Info="info",a.Discard="discard",a))($k||{})});var Nae=G($E=>{"use strict";Object.defineProperty($E,"__esModule",{value:!0});$E.splitWhen=$E.flatten=void 0;function TKe(e){return e.reduce((t,r)=>[].concat(t,r),[])}$E.flatten=TKe;function FKe(e,t){let r=[[]],s=0;for(let a of e)t(a)?(s++,r[s]=[]):r[s].push(a);return r}$E.splitWhen=FKe});var Oae=G(eQ=>{"use strict";Object.defineProperty(eQ,"__esModule",{value:!0});eQ.isEnoentCodeError=void 0;function NKe(e){return e.code==="ENOENT"}eQ.isEnoentCodeError=NKe});var Lae=G(tQ=>{"use strict";Object.defineProperty(tQ,"__esModule",{value:!0});tQ.createDirentFromStats=void 0;var _4=class{constructor(t,r){this.name=t,this.isBlockDevice=r.isBlockDevice.bind(r),this.isCharacterDevice=r.isCharacterDevice.bind(r),this.isDirectory=r.isDirectory.bind(r),this.isFIFO=r.isFIFO.bind(r),this.isFile=r.isFile.bind(r),this.isSocket=r.isSocket.bind(r),this.isSymbolicLink=r.isSymbolicLink.bind(r)}};function OKe(e,t){return new _4(e,t)}tQ.createDirentFromStats=OKe});var Hae=G(us=>{"use strict";Object.defineProperty(us,"__esModule",{value:!0});us.convertPosixPathToPattern=us.convertWindowsPathToPattern=us.convertPathToPattern=us.escapePosixPath=us.escapeWindowsPath=us.escape=us.removeLeadingDotSegment=us.makeAbsolute=us.unixify=void 0;var LKe=Ie("os"),MKe=Ie("path"),Mae=LKe.platform()==="win32",UKe=2,_Ke=/(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g,HKe=/(\\?)([()[\]{}]|^!|[!+@](?=\())/g,jKe=/^\\\\([.?])/,GKe=/\\(?![!()+@[\]{}])/g;function qKe(e){return e.replace(/\\/g,"/")}us.unixify=qKe;function WKe(e,t){return MKe.resolve(e,t)}us.makeAbsolute=WKe;function VKe(e){if(e.charAt(0)==="."){let t=e.charAt(1);if(t==="/"||t==="\\")return e.slice(UKe)}return e}us.removeLeadingDotSegment=VKe;us.escape=Mae?H4:j4;function H4(e){return e.replace(HKe,"\\$2")}us.escapeWindowsPath=H4;function j4(e){return e.replace(_Ke,"\\$2")}us.escapePosixPath=j4;us.convertPathToPattern=Mae?Uae:_ae;function Uae(e){return H4(e).replace(jKe,"//$1").replace(GKe,"/")}us.convertWindowsPathToPattern=Uae;function _ae(e){return j4(e)}us.convertPosixPathToPattern=_ae});var Gae=G((lFt,jae)=>{jae.exports=function(t){if(typeof t!="string"||t==="")return!1;for(var r;r=/(\\).|([@?!+*]\(.*\))/g.exec(t);){if(r[2])return!0;t=t.slice(r.index+r[0].length)}return!1}});var Vae=G((cFt,Wae)=>{var YKe=Gae(),qae={"{":"}","(":")","[":"]"},KKe=function(e){if(e[0]==="!")return!0;for(var t=0,r=-2,s=-2,a=-2,n=-2,c=-2;t<e.length;){if(e[t]==="*"||e[t+1]==="?"&&/[\].+)]/.test(e[t])||s!==-1&&e[t]==="["&&e[t+1]!=="]"&&(s<t&&(s=e.indexOf("]",t)),s>t&&(c===-1||c>s||(c=e.indexOf("\\",t),c===-1||c>s)))||a!==-1&&e[t]==="{"&&e[t+1]!=="}"&&(a=e.indexOf("}",t),a>t&&(c=e.indexOf("\\",t),c===-1||c>a))||n!==-1&&e[t]==="("&&e[t+1]==="?"&&/[:!=]/.test(e[t+2])&&e[t+3]!==")"&&(n=e.indexOf(")",t),n>t&&(c=e.indexOf("\\",t),c===-1||c>n))||r!==-1&&e[t]==="("&&e[t+1]!=="|"&&(r<t&&(r=e.indexOf("|",t)),r!==-1&&e[r+1]!==")"&&(n=e.indexOf(")",r),n>r&&(c=e.indexOf("\\",r),c===-1||c>n))))return!0;if(e[t]==="\\"){var f=e[t+1];t+=2;var p=qae[f];if(p){var h=e.indexOf(p,t);h!==-1&&(t=h+1)}if(e[t]==="!")return!0}else t++}return!1},JKe=function(e){if(e[0]==="!")return!0;for(var t=0;t<e.length;){if(/[*?{}()[\]]/.test(e[t]))return!0;if(e[t]==="\\"){var r=e[t+1];t+=2;var s=qae[r];if(s){var a=e.indexOf(s,t);a!==-1&&(t=a+1)}if(e[t]==="!")return!0}else t++}return!1};Wae.exports=function(t,r){if(typeof t!="string"||t==="")return!1;if(YKe(t))return!0;var s=KKe;return r&&r.strict===!1&&(s=JKe),s(t)}});var Kae=G((uFt,Yae)=>{"use strict";var zKe=Vae(),ZKe=Ie("path").posix.dirname,XKe=Ie("os").platform()==="win32",G4="/",$Ke=/\\/g,eJe=/[\{\[].*[\}\]]$/,tJe=/(^|[^\\])([\{\[]|\([^\)]+$)/,rJe=/\\([\!\*\?\|\[\]\(\)\{\}])/g;Yae.exports=function(t,r){var s=Object.assign({flipBackslashes:!0},r);s.flipBackslashes&&XKe&&t.indexOf(G4)<0&&(t=t.replace($Ke,G4)),eJe.test(t)&&(t+=G4),t+="a";do t=ZKe(t);while(zKe(t)||tJe.test(t));return t.replace(rJe,"$1")}});var rle=G(jr=>{"use strict";Object.defineProperty(jr,"__esModule",{value:!0});jr.removeDuplicateSlashes=jr.matchAny=jr.convertPatternsToRe=jr.makeRe=jr.getPatternParts=jr.expandBraceExpansion=jr.expandPatternsWithBraceExpansion=jr.isAffectDepthOfReadingPattern=jr.endsWithSlashGlobStar=jr.hasGlobStar=jr.getBaseDirectory=jr.isPatternRelatedToParentDirectory=jr.getPatternsOutsideCurrentDirectory=jr.getPatternsInsideCurrentDirectory=jr.getPositivePatterns=jr.getNegativePatterns=jr.isPositivePattern=jr.isNegativePattern=jr.convertToNegativePattern=jr.convertToPositivePattern=jr.isDynamicPattern=jr.isStaticPattern=void 0;var nJe=Ie("path"),iJe=Kae(),q4=Jo(),Jae="**",sJe="\\",oJe=/[*?]|^!/,aJe=/\[[^[]*]/,lJe=/(?:^|[^!*+?@])\([^(]*\|[^|]*\)/,cJe=/[!*+?@]\([^(]*\)/,uJe=/,|\.\./,fJe=/(?!^)\/{2,}/g;function zae(e,t={}){return!Zae(e,t)}jr.isStaticPattern=zae;function Zae(e,t={}){return e===""?!1:!!(t.caseSensitiveMatch===!1||e.includes(sJe)||oJe.test(e)||aJe.test(e)||lJe.test(e)||t.extglob!==!1&&cJe.test(e)||t.braceExpansion!==!1&&AJe(e))}jr.isDynamicPattern=Zae;function AJe(e){let t=e.indexOf("{");if(t===-1)return!1;let r=e.indexOf("}",t+1);if(r===-1)return!1;let s=e.slice(t,r);return uJe.test(s)}function pJe(e){return rQ(e)?e.slice(1):e}jr.convertToPositivePattern=pJe;function hJe(e){return"!"+e}jr.convertToNegativePattern=hJe;function rQ(e){return e.startsWith("!")&&e[1]!=="("}jr.isNegativePattern=rQ;function Xae(e){return!rQ(e)}jr.isPositivePattern=Xae;function gJe(e){return e.filter(rQ)}jr.getNegativePatterns=gJe;function dJe(e){return e.filter(Xae)}jr.getPositivePatterns=dJe;function mJe(e){return e.filter(t=>!W4(t))}jr.getPatternsInsideCurrentDirectory=mJe;function yJe(e){return e.filter(W4)}jr.getPatternsOutsideCurrentDirectory=yJe;function W4(e){return e.startsWith("..")||e.startsWith("./..")}jr.isPatternRelatedToParentDirectory=W4;function EJe(e){return iJe(e,{flipBackslashes:!1})}jr.getBaseDirectory=EJe;function IJe(e){return e.includes(Jae)}jr.hasGlobStar=IJe;function $ae(e){return e.endsWith("/"+Jae)}jr.endsWithSlashGlobStar=$ae;function CJe(e){let t=nJe.basename(e);return $ae(e)||zae(t)}jr.isAffectDepthOfReadingPattern=CJe;function wJe(e){return e.reduce((t,r)=>t.concat(ele(r)),[])}jr.expandPatternsWithBraceExpansion=wJe;function ele(e){let t=q4.braces(e,{expand:!0,nodupes:!0,keepEscaping:!0});return t.sort((r,s)=>r.length-s.length),t.filter(r=>r!=="")}jr.expandBraceExpansion=ele;function BJe(e,t){let{parts:r}=q4.scan(e,Object.assign(Object.assign({},t),{parts:!0}));return r.length===0&&(r=[e]),r[0].startsWith("/")&&(r[0]=r[0].slice(1),r.unshift("")),r}jr.getPatternParts=BJe;function tle(e,t){return q4.makeRe(e,t)}jr.makeRe=tle;function vJe(e,t){return e.map(r=>tle(r,t))}jr.convertPatternsToRe=vJe;function SJe(e,t){return t.some(r=>r.test(e))}jr.matchAny=SJe;function DJe(e){return e.replace(fJe,"/")}jr.removeDuplicateSlashes=DJe});var ole=G((AFt,sle)=>{"use strict";var bJe=Ie("stream"),nle=bJe.PassThrough,PJe=Array.prototype.slice;sle.exports=xJe;function xJe(){let e=[],t=PJe.call(arguments),r=!1,s=t[t.length-1];s&&!Array.isArray(s)&&s.pipe==null?t.pop():s={};let a=s.end!==!1,n=s.pipeError===!0;s.objectMode==null&&(s.objectMode=!0),s.highWaterMark==null&&(s.highWaterMark=64*1024);let c=nle(s);function f(){for(let E=0,C=arguments.length;E<C;E++)e.push(ile(arguments[E],s));return p(),this}function p(){if(r)return;r=!0;let E=e.shift();if(!E){process.nextTick(h);return}Array.isArray(E)||(E=[E]);let C=E.length+1;function S(){--C>0||(r=!1,p())}function x(I){function T(){I.removeListener("merge2UnpipeEnd",T),I.removeListener("end",T),n&&I.removeListener("error",O),S()}function O(U){c.emit("error",U)}if(I._readableState.endEmitted)return S();I.on("merge2UnpipeEnd",T),I.on("end",T),n&&I.on("error",O),I.pipe(c,{end:!1}),I.resume()}for(let I=0;I<E.length;I++)x(E[I]);S()}function h(){r=!1,c.emit("queueDrain"),a&&c.end()}return c.setMaxListeners(0),c.add=f,c.on("unpipe",function(E){E.emit("merge2UnpipeEnd")}),t.length&&f.apply(null,t),c}function ile(e,t){if(Array.isArray(e))for(let r=0,s=e.length;r<s;r++)e[r]=ile(e[r],t);else{if(!e._readableState&&e.pipe&&(e=e.pipe(nle(t))),!e._readableState||!e.pause||!e.pipe)throw new Error("Only readable stream can be merged.");e.pause()}return e}});var lle=G(nQ=>{"use strict";Object.defineProperty(nQ,"__esModule",{value:!0});nQ.merge=void 0;var kJe=ole();function QJe(e){let t=kJe(e);return e.forEach(r=>{r.once("error",s=>t.emit("error",s))}),t.once("close",()=>ale(e)),t.once("end",()=>ale(e)),t}nQ.merge=QJe;function ale(e){e.forEach(t=>t.emit("close"))}});var cle=G(eI=>{"use strict";Object.defineProperty(eI,"__esModule",{value:!0});eI.isEmpty=eI.isString=void 0;function RJe(e){return typeof e=="string"}eI.isString=RJe;function TJe(e){return e===""}eI.isEmpty=TJe});var kp=G(Xo=>{"use strict";Object.defineProperty(Xo,"__esModule",{value:!0});Xo.string=Xo.stream=Xo.pattern=Xo.path=Xo.fs=Xo.errno=Xo.array=void 0;var FJe=Nae();Xo.array=FJe;var NJe=Oae();Xo.errno=NJe;var OJe=Lae();Xo.fs=OJe;var LJe=Hae();Xo.path=LJe;var MJe=rle();Xo.pattern=MJe;var UJe=lle();Xo.stream=UJe;var _Je=cle();Xo.string=_Je});var ple=G($o=>{"use strict";Object.defineProperty($o,"__esModule",{value:!0});$o.convertPatternGroupToTask=$o.convertPatternGroupsToTasks=$o.groupPatternsByBaseDirectory=$o.getNegativePatternsAsPositive=$o.getPositivePatterns=$o.convertPatternsToTasks=$o.generate=void 0;var Uu=kp();function HJe(e,t){let r=ule(e,t),s=ule(t.ignore,t),a=fle(r),n=Ale(r,s),c=a.filter(E=>Uu.pattern.isStaticPattern(E,t)),f=a.filter(E=>Uu.pattern.isDynamicPattern(E,t)),p=V4(c,n,!1),h=V4(f,n,!0);return p.concat(h)}$o.generate=HJe;function ule(e,t){let r=e;return t.braceExpansion&&(r=Uu.pattern.expandPatternsWithBraceExpansion(r)),t.baseNameMatch&&(r=r.map(s=>s.includes("/")?s:`**/${s}`)),r.map(s=>Uu.pattern.removeDuplicateSlashes(s))}function V4(e,t,r){let s=[],a=Uu.pattern.getPatternsOutsideCurrentDirectory(e),n=Uu.pattern.getPatternsInsideCurrentDirectory(e),c=Y4(a),f=Y4(n);return s.push(...K4(c,t,r)),"."in f?s.push(J4(".",n,t,r)):s.push(...K4(f,t,r)),s}$o.convertPatternsToTasks=V4;function fle(e){return Uu.pattern.getPositivePatterns(e)}$o.getPositivePatterns=fle;function Ale(e,t){return Uu.pattern.getNegativePatterns(e).concat(t).map(Uu.pattern.convertToPositivePattern)}$o.getNegativePatternsAsPositive=Ale;function Y4(e){let t={};return e.reduce((r,s)=>{let a=Uu.pattern.getBaseDirectory(s);return a in r?r[a].push(s):r[a]=[s],r},t)}$o.groupPatternsByBaseDirectory=Y4;function K4(e,t,r){return Object.keys(e).map(s=>J4(s,e[s],t,r))}$o.convertPatternGroupsToTasks=K4;function J4(e,t,r,s){return{dynamic:s,positive:t,negative:r,base:e,patterns:[].concat(t,r.map(Uu.pattern.convertToNegativePattern))}}$o.convertPatternGroupToTask=J4});var gle=G(iQ=>{"use strict";Object.defineProperty(iQ,"__esModule",{value:!0});iQ.read=void 0;function jJe(e,t,r){t.fs.lstat(e,(s,a)=>{if(s!==null){hle(r,s);return}if(!a.isSymbolicLink()||!t.followSymbolicLink){z4(r,a);return}t.fs.stat(e,(n,c)=>{if(n!==null){if(t.throwErrorOnBrokenSymbolicLink){hle(r,n);return}z4(r,a);return}t.markSymbolicLink&&(c.isSymbolicLink=()=>!0),z4(r,c)})})}iQ.read=jJe;function hle(e,t){e(t)}function z4(e,t){e(null,t)}});var dle=G(sQ=>{"use strict";Object.defineProperty(sQ,"__esModule",{value:!0});sQ.read=void 0;function GJe(e,t){let r=t.fs.lstatSync(e);if(!r.isSymbolicLink()||!t.followSymbolicLink)return r;try{let s=t.fs.statSync(e);return t.markSymbolicLink&&(s.isSymbolicLink=()=>!0),s}catch(s){if(!t.throwErrorOnBrokenSymbolicLink)return r;throw s}}sQ.read=GJe});var mle=G(A0=>{"use strict";Object.defineProperty(A0,"__esModule",{value:!0});A0.createFileSystemAdapter=A0.FILE_SYSTEM_ADAPTER=void 0;var oQ=Ie("fs");A0.FILE_SYSTEM_ADAPTER={lstat:oQ.lstat,stat:oQ.stat,lstatSync:oQ.lstatSync,statSync:oQ.statSync};function qJe(e){return e===void 0?A0.FILE_SYSTEM_ADAPTER:Object.assign(Object.assign({},A0.FILE_SYSTEM_ADAPTER),e)}A0.createFileSystemAdapter=qJe});var yle=G(X4=>{"use strict";Object.defineProperty(X4,"__esModule",{value:!0});var WJe=mle(),Z4=class{constructor(t={}){this._options=t,this.followSymbolicLink=this._getValue(this._options.followSymbolicLink,!0),this.fs=WJe.createFileSystemAdapter(this._options.fs),this.markSymbolicLink=this._getValue(this._options.markSymbolicLink,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!0)}_getValue(t,r){return t??r}};X4.default=Z4});var zd=G(p0=>{"use strict";Object.defineProperty(p0,"__esModule",{value:!0});p0.statSync=p0.stat=p0.Settings=void 0;var Ele=gle(),VJe=dle(),$4=yle();p0.Settings=$4.default;function YJe(e,t,r){if(typeof t=="function"){Ele.read(e,e3(),t);return}Ele.read(e,e3(t),r)}p0.stat=YJe;function KJe(e,t){let r=e3(t);return VJe.read(e,r)}p0.statSync=KJe;function e3(e={}){return e instanceof $4.default?e:new $4.default(e)}});var wle=G((wFt,Cle)=>{var Ile;Cle.exports=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:global):e=>(Ile||(Ile=Promise.resolve())).then(e).catch(t=>setTimeout(()=>{throw t},0))});var vle=G((BFt,Ble)=>{Ble.exports=zJe;var JJe=wle();function zJe(e,t){let r,s,a,n=!0;Array.isArray(e)?(r=[],s=e.length):(a=Object.keys(e),r={},s=a.length);function c(p){function h(){t&&t(p,r),t=null}n?JJe(h):h()}function f(p,h,E){r[p]=E,(--s===0||h)&&c(h)}s?a?a.forEach(function(p){e[p](function(h,E){f(p,h,E)})}):e.forEach(function(p,h){p(function(E,C){f(h,E,C)})}):c(null),n=!1}});var t3=G(lQ=>{"use strict";Object.defineProperty(lQ,"__esModule",{value:!0});lQ.IS_SUPPORT_READDIR_WITH_FILE_TYPES=void 0;var aQ=process.versions.node.split(".");if(aQ[0]===void 0||aQ[1]===void 0)throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);var Sle=Number.parseInt(aQ[0],10),ZJe=Number.parseInt(aQ[1],10),Dle=10,XJe=10,$Je=Sle>Dle,eze=Sle===Dle&&ZJe>=XJe;lQ.IS_SUPPORT_READDIR_WITH_FILE_TYPES=$Je||eze});var ble=G(cQ=>{"use strict";Object.defineProperty(cQ,"__esModule",{value:!0});cQ.createDirentFromStats=void 0;var r3=class{constructor(t,r){this.name=t,this.isBlockDevice=r.isBlockDevice.bind(r),this.isCharacterDevice=r.isCharacterDevice.bind(r),this.isDirectory=r.isDirectory.bind(r),this.isFIFO=r.isFIFO.bind(r),this.isFile=r.isFile.bind(r),this.isSocket=r.isSocket.bind(r),this.isSymbolicLink=r.isSymbolicLink.bind(r)}};function tze(e,t){return new r3(e,t)}cQ.createDirentFromStats=tze});var n3=G(uQ=>{"use strict";Object.defineProperty(uQ,"__esModule",{value:!0});uQ.fs=void 0;var rze=ble();uQ.fs=rze});var i3=G(fQ=>{"use strict";Object.defineProperty(fQ,"__esModule",{value:!0});fQ.joinPathSegments=void 0;function nze(e,t,r){return e.endsWith(r)?e+t:e+r+t}fQ.joinPathSegments=nze});var Tle=G(h0=>{"use strict";Object.defineProperty(h0,"__esModule",{value:!0});h0.readdir=h0.readdirWithFileTypes=h0.read=void 0;var ize=zd(),Ple=vle(),sze=t3(),xle=n3(),kle=i3();function oze(e,t,r){if(!t.stats&&sze.IS_SUPPORT_READDIR_WITH_FILE_TYPES){Qle(e,t,r);return}Rle(e,t,r)}h0.read=oze;function Qle(e,t,r){t.fs.readdir(e,{withFileTypes:!0},(s,a)=>{if(s!==null){AQ(r,s);return}let n=a.map(f=>({dirent:f,name:f.name,path:kle.joinPathSegments(e,f.name,t.pathSegmentSeparator)}));if(!t.followSymbolicLinks){s3(r,n);return}let c=n.map(f=>aze(f,t));Ple(c,(f,p)=>{if(f!==null){AQ(r,f);return}s3(r,p)})})}h0.readdirWithFileTypes=Qle;function aze(e,t){return r=>{if(!e.dirent.isSymbolicLink()){r(null,e);return}t.fs.stat(e.path,(s,a)=>{if(s!==null){if(t.throwErrorOnBrokenSymbolicLink){r(s);return}r(null,e);return}e.dirent=xle.fs.createDirentFromStats(e.name,a),r(null,e)})}}function Rle(e,t,r){t.fs.readdir(e,(s,a)=>{if(s!==null){AQ(r,s);return}let n=a.map(c=>{let f=kle.joinPathSegments(e,c,t.pathSegmentSeparator);return p=>{ize.stat(f,t.fsStatSettings,(h,E)=>{if(h!==null){p(h);return}let C={name:c,path:f,dirent:xle.fs.createDirentFromStats(c,E)};t.stats&&(C.stats=E),p(null,C)})}});Ple(n,(c,f)=>{if(c!==null){AQ(r,c);return}s3(r,f)})})}h0.readdir=Rle;function AQ(e,t){e(t)}function s3(e,t){e(null,t)}});var Mle=G(g0=>{"use strict";Object.defineProperty(g0,"__esModule",{value:!0});g0.readdir=g0.readdirWithFileTypes=g0.read=void 0;var lze=zd(),cze=t3(),Fle=n3(),Nle=i3();function uze(e,t){return!t.stats&&cze.IS_SUPPORT_READDIR_WITH_FILE_TYPES?Ole(e,t):Lle(e,t)}g0.read=uze;function Ole(e,t){return t.fs.readdirSync(e,{withFileTypes:!0}).map(s=>{let a={dirent:s,name:s.name,path:Nle.joinPathSegments(e,s.name,t.pathSegmentSeparator)};if(a.dirent.isSymbolicLink()&&t.followSymbolicLinks)try{let n=t.fs.statSync(a.path);a.dirent=Fle.fs.createDirentFromStats(a.name,n)}catch(n){if(t.throwErrorOnBrokenSymbolicLink)throw n}return a})}g0.readdirWithFileTypes=Ole;function Lle(e,t){return t.fs.readdirSync(e).map(s=>{let a=Nle.joinPathSegments(e,s,t.pathSegmentSeparator),n=lze.statSync(a,t.fsStatSettings),c={name:s,path:a,dirent:Fle.fs.createDirentFromStats(s,n)};return t.stats&&(c.stats=n),c})}g0.readdir=Lle});var Ule=G(d0=>{"use strict";Object.defineProperty(d0,"__esModule",{value:!0});d0.createFileSystemAdapter=d0.FILE_SYSTEM_ADAPTER=void 0;var tI=Ie("fs");d0.FILE_SYSTEM_ADAPTER={lstat:tI.lstat,stat:tI.stat,lstatSync:tI.lstatSync,statSync:tI.statSync,readdir:tI.readdir,readdirSync:tI.readdirSync};function fze(e){return e===void 0?d0.FILE_SYSTEM_ADAPTER:Object.assign(Object.assign({},d0.FILE_SYSTEM_ADAPTER),e)}d0.createFileSystemAdapter=fze});var _le=G(a3=>{"use strict";Object.defineProperty(a3,"__esModule",{value:!0});var Aze=Ie("path"),pze=zd(),hze=Ule(),o3=class{constructor(t={}){this._options=t,this.followSymbolicLinks=this._getValue(this._options.followSymbolicLinks,!1),this.fs=hze.createFileSystemAdapter(this._options.fs),this.pathSegmentSeparator=this._getValue(this._options.pathSegmentSeparator,Aze.sep),this.stats=this._getValue(this._options.stats,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!0),this.fsStatSettings=new pze.Settings({followSymbolicLink:this.followSymbolicLinks,fs:this.fs,throwErrorOnBrokenSymbolicLink:this.throwErrorOnBrokenSymbolicLink})}_getValue(t,r){return t??r}};a3.default=o3});var pQ=G(m0=>{"use strict";Object.defineProperty(m0,"__esModule",{value:!0});m0.Settings=m0.scandirSync=m0.scandir=void 0;var Hle=Tle(),gze=Mle(),l3=_le();m0.Settings=l3.default;function dze(e,t,r){if(typeof t=="function"){Hle.read(e,c3(),t);return}Hle.read(e,c3(t),r)}m0.scandir=dze;function mze(e,t){let r=c3(t);return gze.read(e,r)}m0.scandirSync=mze;function c3(e={}){return e instanceof l3.default?e:new l3.default(e)}});var Gle=G((TFt,jle)=>{"use strict";function yze(e){var t=new e,r=t;function s(){var n=t;return n.next?t=n.next:(t=new e,r=t),n.next=null,n}function a(n){r.next=n,r=n}return{get:s,release:a}}jle.exports=yze});var Wle=G((FFt,u3)=>{"use strict";var Eze=Gle();function qle(e,t,r){if(typeof e=="function"&&(r=t,t=e,e=null),!(r>=1))throw new Error("fastqueue concurrency must be equal to or greater than 1");var s=Eze(Ize),a=null,n=null,c=0,f=null,p={push:T,drain:Qc,saturated:Qc,pause:E,paused:!1,get concurrency(){return r},set concurrency(ue){if(!(ue>=1))throw new Error("fastqueue concurrency must be equal to or greater than 1");if(r=ue,!p.paused)for(;a&&c<r;)c++,U()},running:h,resume:x,idle:I,length:C,getQueue:S,unshift:O,empty:Qc,kill:Y,killAndDrain:te,error:ie};return p;function h(){return c}function E(){p.paused=!0}function C(){for(var ue=a,ae=0;ue;)ue=ue.next,ae++;return ae}function S(){for(var ue=a,ae=[];ue;)ae.push(ue.value),ue=ue.next;return ae}function x(){if(p.paused){if(p.paused=!1,a===null){c++,U();return}for(;a&&c<r;)c++,U()}}function I(){return c===0&&p.length()===0}function T(ue,ae){var de=s.get();de.context=e,de.release=U,de.value=ue,de.callback=ae||Qc,de.errorHandler=f,c>=r||p.paused?n?(n.next=de,n=de):(a=de,n=de,p.saturated()):(c++,t.call(e,de.value,de.worked))}function O(ue,ae){var de=s.get();de.context=e,de.release=U,de.value=ue,de.callback=ae||Qc,de.errorHandler=f,c>=r||p.paused?a?(de.next=a,a=de):(a=de,n=de,p.saturated()):(c++,t.call(e,de.value,de.worked))}function U(ue){ue&&s.release(ue);var ae=a;ae&&c<=r?p.paused?c--:(n===a&&(n=null),a=ae.next,ae.next=null,t.call(e,ae.value,ae.worked),n===null&&p.empty()):--c===0&&p.drain()}function Y(){a=null,n=null,p.drain=Qc}function te(){a=null,n=null,p.drain(),p.drain=Qc}function ie(ue){f=ue}}function Qc(){}function Ize(){this.value=null,this.callback=Qc,this.next=null,this.release=Qc,this.context=null,this.errorHandler=null;var e=this;this.worked=function(r,s){var a=e.callback,n=e.errorHandler,c=e.value;e.value=null,e.callback=Qc,e.errorHandler&&n(r,c),a.call(e.context,r,s),e.release(e)}}function Cze(e,t,r){typeof e=="function"&&(r=t,t=e,e=null);function s(E,C){t.call(this,E).then(function(S){C(null,S)},C)}var a=qle(e,s,r),n=a.push,c=a.unshift;return a.push=f,a.unshift=p,a.drained=h,a;function f(E){var C=new Promise(function(S,x){n(E,function(I,T){if(I){x(I);return}S(T)})});return C.catch(Qc),C}function p(E){var C=new Promise(function(S,x){c(E,function(I,T){if(I){x(I);return}S(T)})});return C.catch(Qc),C}function h(){if(a.idle())return new Promise(function(S){S()});var E=a.drain,C=new Promise(function(S){a.drain=function(){E(),S()}});return C}}u3.exports=qle;u3.exports.promise=Cze});var hQ=G(Xf=>{"use strict";Object.defineProperty(Xf,"__esModule",{value:!0});Xf.joinPathSegments=Xf.replacePathSegmentSeparator=Xf.isAppliedFilter=Xf.isFatalError=void 0;function wze(e,t){return e.errorFilter===null?!0:!e.errorFilter(t)}Xf.isFatalError=wze;function Bze(e,t){return e===null||e(t)}Xf.isAppliedFilter=Bze;function vze(e,t){return e.split(/[/\\]/).join(t)}Xf.replacePathSegmentSeparator=vze;function Sze(e,t,r){return e===""?t:e.endsWith(r)?e+t:e+r+t}Xf.joinPathSegments=Sze});var p3=G(A3=>{"use strict";Object.defineProperty(A3,"__esModule",{value:!0});var Dze=hQ(),f3=class{constructor(t,r){this._root=t,this._settings=r,this._root=Dze.replacePathSegmentSeparator(t,r.pathSegmentSeparator)}};A3.default=f3});var d3=G(g3=>{"use strict";Object.defineProperty(g3,"__esModule",{value:!0});var bze=Ie("events"),Pze=pQ(),xze=Wle(),gQ=hQ(),kze=p3(),h3=class extends kze.default{constructor(t,r){super(t,r),this._settings=r,this._scandir=Pze.scandir,this._emitter=new bze.EventEmitter,this._queue=xze(this._worker.bind(this),this._settings.concurrency),this._isFatalError=!1,this._isDestroyed=!1,this._queue.drain=()=>{this._isFatalError||this._emitter.emit("end")}}read(){return this._isFatalError=!1,this._isDestroyed=!1,setImmediate(()=>{this._pushToQueue(this._root,this._settings.basePath)}),this._emitter}get isDestroyed(){return this._isDestroyed}destroy(){if(this._isDestroyed)throw new Error("The reader is already destroyed");this._isDestroyed=!0,this._queue.killAndDrain()}onEntry(t){this._emitter.on("entry",t)}onError(t){this._emitter.once("error",t)}onEnd(t){this._emitter.once("end",t)}_pushToQueue(t,r){let s={directory:t,base:r};this._queue.push(s,a=>{a!==null&&this._handleError(a)})}_worker(t,r){this._scandir(t.directory,this._settings.fsScandirSettings,(s,a)=>{if(s!==null){r(s,void 0);return}for(let n of a)this._handleEntry(n,t.base);r(null,void 0)})}_handleError(t){this._isDestroyed||!gQ.isFatalError(this._settings,t)||(this._isFatalError=!0,this._isDestroyed=!0,this._emitter.emit("error",t))}_handleEntry(t,r){if(this._isDestroyed||this._isFatalError)return;let s=t.path;r!==void 0&&(t.path=gQ.joinPathSegments(r,t.name,this._settings.pathSegmentSeparator)),gQ.isAppliedFilter(this._settings.entryFilter,t)&&this._emitEntry(t),t.dirent.isDirectory()&&gQ.isAppliedFilter(this._settings.deepFilter,t)&&this._pushToQueue(s,r===void 0?void 0:t.path)}_emitEntry(t){this._emitter.emit("entry",t)}};g3.default=h3});var Vle=G(y3=>{"use strict";Object.defineProperty(y3,"__esModule",{value:!0});var Qze=d3(),m3=class{constructor(t,r){this._root=t,this._settings=r,this._reader=new Qze.default(this._root,this._settings),this._storage=[]}read(t){this._reader.onError(r=>{Rze(t,r)}),this._reader.onEntry(r=>{this._storage.push(r)}),this._reader.onEnd(()=>{Tze(t,this._storage)}),this._reader.read()}};y3.default=m3;function Rze(e,t){e(t)}function Tze(e,t){e(null,t)}});var Yle=G(I3=>{"use strict";Object.defineProperty(I3,"__esModule",{value:!0});var Fze=Ie("stream"),Nze=d3(),E3=class{constructor(t,r){this._root=t,this._settings=r,this._reader=new Nze.default(this._root,this._settings),this._stream=new Fze.Readable({objectMode:!0,read:()=>{},destroy:()=>{this._reader.isDestroyed||this._reader.destroy()}})}read(){return this._reader.onError(t=>{this._stream.emit("error",t)}),this._reader.onEntry(t=>{this._stream.push(t)}),this._reader.onEnd(()=>{this._stream.push(null)}),this._reader.read(),this._stream}};I3.default=E3});var Kle=G(w3=>{"use strict";Object.defineProperty(w3,"__esModule",{value:!0});var Oze=pQ(),dQ=hQ(),Lze=p3(),C3=class extends Lze.default{constructor(){super(...arguments),this._scandir=Oze.scandirSync,this._storage=[],this._queue=new Set}read(){return this._pushToQueue(this._root,this._settings.basePath),this._handleQueue(),this._storage}_pushToQueue(t,r){this._queue.add({directory:t,base:r})}_handleQueue(){for(let t of this._queue.values())this._handleDirectory(t.directory,t.base)}_handleDirectory(t,r){try{let s=this._scandir(t,this._settings.fsScandirSettings);for(let a of s)this._handleEntry(a,r)}catch(s){this._handleError(s)}}_handleError(t){if(dQ.isFatalError(this._settings,t))throw t}_handleEntry(t,r){let s=t.path;r!==void 0&&(t.path=dQ.joinPathSegments(r,t.name,this._settings.pathSegmentSeparator)),dQ.isAppliedFilter(this._settings.entryFilter,t)&&this._pushToStorage(t),t.dirent.isDirectory()&&dQ.isAppliedFilter(this._settings.deepFilter,t)&&this._pushToQueue(s,r===void 0?void 0:t.path)}_pushToStorage(t){this._storage.push(t)}};w3.default=C3});var Jle=G(v3=>{"use strict";Object.defineProperty(v3,"__esModule",{value:!0});var Mze=Kle(),B3=class{constructor(t,r){this._root=t,this._settings=r,this._reader=new Mze.default(this._root,this._settings)}read(){return this._reader.read()}};v3.default=B3});var zle=G(D3=>{"use strict";Object.defineProperty(D3,"__esModule",{value:!0});var Uze=Ie("path"),_ze=pQ(),S3=class{constructor(t={}){this._options=t,this.basePath=this._getValue(this._options.basePath,void 0),this.concurrency=this._getValue(this._options.concurrency,Number.POSITIVE_INFINITY),this.deepFilter=this._getValue(this._options.deepFilter,null),this.entryFilter=this._getValue(this._options.entryFilter,null),this.errorFilter=this._getValue(this._options.errorFilter,null),this.pathSegmentSeparator=this._getValue(this._options.pathSegmentSeparator,Uze.sep),this.fsScandirSettings=new _ze.Settings({followSymbolicLinks:this._options.followSymbolicLinks,fs:this._options.fs,pathSegmentSeparator:this._options.pathSegmentSeparator,stats:this._options.stats,throwErrorOnBrokenSymbolicLink:this._options.throwErrorOnBrokenSymbolicLink})}_getValue(t,r){return t??r}};D3.default=S3});var yQ=G($f=>{"use strict";Object.defineProperty($f,"__esModule",{value:!0});$f.Settings=$f.walkStream=$f.walkSync=$f.walk=void 0;var Zle=Vle(),Hze=Yle(),jze=Jle(),b3=zle();$f.Settings=b3.default;function Gze(e,t,r){if(typeof t=="function"){new Zle.default(e,mQ()).read(t);return}new Zle.default(e,mQ(t)).read(r)}$f.walk=Gze;function qze(e,t){let r=mQ(t);return new jze.default(e,r).read()}$f.walkSync=qze;function Wze(e,t){let r=mQ(t);return new Hze.default(e,r).read()}$f.walkStream=Wze;function mQ(e={}){return e instanceof b3.default?e:new b3.default(e)}});var EQ=G(x3=>{"use strict";Object.defineProperty(x3,"__esModule",{value:!0});var Vze=Ie("path"),Yze=zd(),Xle=kp(),P3=class{constructor(t){this._settings=t,this._fsStatSettings=new Yze.Settings({followSymbolicLink:this._settings.followSymbolicLinks,fs:this._settings.fs,throwErrorOnBrokenSymbolicLink:this._settings.followSymbolicLinks})}_getFullEntryPath(t){return Vze.resolve(this._settings.cwd,t)}_makeEntry(t,r){let s={name:r,path:r,dirent:Xle.fs.createDirentFromStats(r,t)};return this._settings.stats&&(s.stats=t),s}_isFatalError(t){return!Xle.errno.isEnoentCodeError(t)&&!this._settings.suppressErrors}};x3.default=P3});var R3=G(Q3=>{"use strict";Object.defineProperty(Q3,"__esModule",{value:!0});var Kze=Ie("stream"),Jze=zd(),zze=yQ(),Zze=EQ(),k3=class extends Zze.default{constructor(){super(...arguments),this._walkStream=zze.walkStream,this._stat=Jze.stat}dynamic(t,r){return this._walkStream(t,r)}static(t,r){let s=t.map(this._getFullEntryPath,this),a=new Kze.PassThrough({objectMode:!0});a._write=(n,c,f)=>this._getEntry(s[n],t[n],r).then(p=>{p!==null&&r.entryFilter(p)&&a.push(p),n===s.length-1&&a.end(),f()}).catch(f);for(let n=0;n<s.length;n++)a.write(n);return a}_getEntry(t,r,s){return this._getStat(t).then(a=>this._makeEntry(a,r)).catch(a=>{if(s.errorFilter(a))return null;throw a})}_getStat(t){return new Promise((r,s)=>{this._stat(t,this._fsStatSettings,(a,n)=>a===null?r(n):s(a))})}};Q3.default=k3});var $le=G(F3=>{"use strict";Object.defineProperty(F3,"__esModule",{value:!0});var Xze=yQ(),$ze=EQ(),eZe=R3(),T3=class extends $ze.default{constructor(){super(...arguments),this._walkAsync=Xze.walk,this._readerStream=new eZe.default(this._settings)}dynamic(t,r){return new Promise((s,a)=>{this._walkAsync(t,r,(n,c)=>{n===null?s(c):a(n)})})}async static(t,r){let s=[],a=this._readerStream.static(t,r);return new Promise((n,c)=>{a.once("error",c),a.on("data",f=>s.push(f)),a.once("end",()=>n(s))})}};F3.default=T3});var ÛÞzó~›Ê×¬¢h­µç]\›ˆLXš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆYÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]OX]ØZ]Jœ˜[™ÙKËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŠNÜ™]\›–Ú‹›XZÙSØØ]ÜŠJW_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]QÌ
œ˜[™ÙJNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠOžÚYŠ‹šY[\ÚOO]šY[\Ú
\™]\›ˆLNÛ]QÌ
‹œ™Y™\™[˜ÙJNÜ™]\›ˆJ‹œ™\ÈOO\œ™\ß‹™YZ\Úœ›ÝØÛÛOOH˜ÛÛ[Z]‰‰›‹™YZ\Úœ™\]Y\ÝOO\™YZ\Úœ™\]Y\Ý
_JKÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^ÚYŠ\‹™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]ÏX]ØZ]‹™™]ÚÜ[ÛœË™™]Ú\‹™™]Ú
‹™™]ÚÜ[ÛœÊKOX]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]]™š[™
Ëœ™Yš^]Ø˜\ÙQœÎœËœXÚØYÙQœßJKËœ™[X\ÙQœÊNÜ™]\›žË‹‹™\œÚ[ÛŽ˜K™\œÚ[ÛŸŒŒŒ‹[™ÝXYÙS˜[YN˜K›[™ÝXYÙS˜[Y_‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ’T‘‹ÛÛ™][ÛœÎ˜K™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
K™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜KœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜K™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜KœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜K˜š[Ÿ__NÝ˜\ˆ›Ý^ØÛÛ™šYÝ\˜][ÛŽžØÚ[™Ù\Ù]˜\ÙT™YœÎžÙ\ØÜš\[ÛŽˆ•H˜\ÙHÚ]™YœÈ]HÝ\œ™[PQ\ÈÛÛ\\™YYØZ[œÝÚ[ˆ]XÝ[™ÈÚ[™Ù\ËˆÝ\ÜÈÚ]œ˜[˜Ú\ËYÜË[™ÛÛ[Z]Ëˆ‹\Nˆ”Õ’S‘È‹\Ð\œ˜^NˆL\Ó[X›NˆLKY˜][–È›X\Ý\ˆ‹›ÜšYÚ[‹ÛX\Ý\ˆ‹\Ý™X[KÛX\Ý\ˆ‹›XZ[ˆ‹›ÜšYÚ[‹ÛXZ[ˆ‹\Ý™X[KÛXZ[ˆ—_KÚ[™Ù\Ù]YÛ›Ü™T]\›œÎžÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆÛØˆ]\›œÎÈš[\ÈX]Ú[™È[HÚ[™HYÛ›Ü™YÚ[ˆ™]Ú[™ÈHÚ[™ÙYš[\È‹\Nˆ”Õ’S‘È‹Y˜][–×K\Ð\œ˜^NˆLKÛÛ™PÛÛ˜Ý\œ™[˜ÞNžÙ\ØÜš\[ÛŽˆ“X^[X[[X™\ˆÙˆÛÛ˜Ý\œ™[ÛÛ™\È‹\Nˆ“•SP‘Tˆ‹Y˜][ŒŸ_K™]Ú\œÎ–Ý×K™\ÛÛ™\œÎ–Ü”×_NÝ˜\ˆÛÝZ›ÝÕ

NÝ˜\ˆÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœÚ[˜ÙOZK”Ýš[™Ê‹K\Ú[˜ÙH‹Ù\ØÜš\[ÛŽˆ“Û›H[˜ÛYHÛÜšÜÜXÙ\È]]™H™Y[ˆÚ[™ÙYÚ[˜ÙHHÜXÚYšYY™Y‹ˆ‹Û\˜]P›ÛÛX[ŽˆLJNÝ\Ëœ™XÝ\œÚ]™OZK›ÛÛX[Š‹T‹K\™XÝ\œÚ]™H‹LKÙ\ØÜš\[ÛŽˆ‘š[™XÚØYÙ\ÈšXH\[™[˜ÚY\ËÙ]‘\[™[˜ÚY\È[œÝXYÙˆ\Ú[™ÈHÛÜšÜÜXÙ\ÈšY[ŸJNÝ\Ë››Ôš]˜]OZK›ÛÛX[Š‹K[›Ë\š]˜]H‹Ù\ØÜš\[ÛŽˆ‘^ÛYHÛÜšÜÜXÙ\È]]™HHš]˜]HšY[Ù]ÈYHŸJNÝ\Ë™\˜›ÜÙOZK›ÛÛX[Š‹]‹K]™\˜›ÜÙH‹LKÙ\ØÜš\[ÛŽˆ[ÛÈ™]\›ˆHÜ›ÜÜËY\[™[˜ÚY\È™]ÙY[ˆÛÜšÜÜXÙ\ÈŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈÛÜšÜÜXÙ\È‹›\Ý—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ•ÛÜšÜÜXÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ›\Ý[]˜Z[X›HÛÜšÜÜXÙ\È‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[š[H\ÝÙˆ[ÛÜšÜÜXÙ\È[ˆH›Ú™XÝ——ˆHYˆK\Ú[˜ÙX\ÈÙ]X\›ˆÚ[Û›H\ÝÛÜšÜÜXÙ\È]]™H™Y[ˆ[ÙYšYYÚ[˜ÙHHÜXÚYšYY™Y‹ˆžHY˜][X\›ˆÚ[\ÙHH™YœÈÜXÚYšYYžHHÚ[™Ù\Ù]˜\ÙT™YœØÛÛ™šYÝ\˜][ÛˆÜ[Û‹——ˆHYˆT‹K\™XÝ\œÚ]™X\ÈÙ]X\›ˆÚ[š[™ÛÜšÜÜXÙ\ÈÈ[ˆHÛÛ[X[™ÛˆžH™XÝ\œÚ]™[H]˜[X][™È\[™[˜ÚY\Ø[™]‘\[™[˜ÚY\ØšY[Ë[œÝXYÙˆÛÚÚ[™È]HÛÜšÜÜXÙ\ØšY[Ë——ˆHYˆK[›Ë\š]˜]X\ÈÙ]X\›ˆÚ[›Ý\Ý[žHÛÜšÜÜXÙ\È]]™HHš]˜]XšY[Ù]ÈYX——ˆHYˆ›ÝH]‹K]™\˜›ÜÙX[™KZœÛÛ˜Ü[ÛœÈ\™HÙ]X\›ˆÚ[[ÛÈ™]\›ˆHÜ›ÜÜËY\[™[˜ÚY\È™]ÙY[ˆXXÚÛÜšÜÜXÙ\È
\ÙY[Ú[ˆ[ÝHÚ\ÚÈ]]ÛX]XØ[HÙ[™\˜]HXÚÈÈ˜^™[[\ÊK—ˆŸJ_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœßOX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹œÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÛ]Ï]\ËœÚ[˜ÙOØ]ØZ]ØK™™]ÚÚ[™ÙYÛÜšÜÜXÙ\ÊÜ™YŽ\ËœÚ[˜ÙK›Ú™XÝœßJNœËÛÜšÜÜXÙ\Ë[™]ÈÙ]
ÊNÚYŠ\Ëœ™XÝ\œÚ]™JY›ÜŠ]Ù–Ë‹‹˜×K›X\
Oš™Ù]™XÝ\œÚ]™UÛÜšÜÜXÙQ\[™[Ê
JJY›ÜŠ]Ùˆ
Y‹˜Y

NÙ›ÜŠ]ÙˆŠ^Û]ÛX[šY™\ÝšO\ÚYŠœš]˜]I‰\Ë››Ôš]˜]JXÛÛ[YNÛ]NÚYŠ\Ë™\˜›ÜÙJ^Û]Ï[™]ÈÙ]Ï[™]ÈÙ]Ù›ÜŠ]Ùˆ]š\™\[™[˜ÚY\ÊY›ÜŠ]ÒK[Ùˆ™Ù]›Ü”ØÛÜJ
J^Û]Ï\ËžUÛÜšÜÜXÙPžQ\ØÜš\ÜŠ
NÓÏOO[[ÜËÛÜšÜÜXÙ\ÐžRY[š\ÊJI‰”Ë˜Y

NË˜Y
Ê_QO^ÝÛÜšÜÜXÙQ\[™[˜ÚY\Î\œ˜^K™œ›ÛJÊK›X\
Ožœ™[]]™PÝÙ
KZ\ÛX]ÚYÛÜšÜÜXÙQ\[™[˜ÚY\Î\œ˜^K™œ›ÛJÊK›X\
Oš‹œÝš[™ÚYžQ\ØÜš\ÜŠ
J__[‹œ™\Ü[™›Ê[	Üœ™[]]™PÝÙX
K‹œ™\ÜœÛÛŠÛØØ][ÛŽœœ™[]]™PÝÙ˜[YNš›˜[YOÚ‹œÝš[™ÚYžRY[
›˜[YJN›[‹‹‘_J__JJK™^]ÛÙJ
__NÜYJ
NÜYJ
NÕ

NÝ˜\ˆÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËÛÜšÜÜXÙS˜[YOZK”Ýš[™Ê
NÝ\Ë˜ÛÛ[X[™˜[YOZK”Ýš[™Ê
NÝ\Ë˜\™ÜÏZK”›ÞJ
_\Ý]XÞÝ\Ëœ]ÏVÖÈÛÜšÜÜXÙH—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ•ÛÜšÜÜXÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœ[ˆHÛÛ[X[™Ú][ˆHÜXÚYšYYÛÜšÜÜXÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[[ˆHÚ]™[ˆÝX‹XÛÛ[X[™ÛˆHÚ[™ÛHÛÜšÜÜXÙK‚ˆ^[\\Î–ÖÈYHXÚØYÙHÈHÚ[™ÛHÛÜšÜÜXÙH‹žX\›ˆÛÜšÜÜXÙHÛÛ\Û™[ÈYQ™XXÝ—KÈ”[ˆZ[ØÜš\ÛˆHÚ[™ÛHÛÜšÜÜXÙH‹žX\›ˆÛÜšÜÜXÙHÛÛ\Û™[È[ˆZ[—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÛ]\ËÛÜšÜÜXÙ\ËÏ[™]ÈX\
‹›X\
O–Ú‹œÝš[™ÚYžRY[
˜[˜ÚÜ™YØØ]ÜŠKJJKXË™Ù]
\ËÛÜšÜÜXÙS˜[YJNÚYŠOO]›ÚY
^Û]P\œ˜^K™œ›ÛJËšÙ^\Ê
JKœÛÜ

NÝ›ÝÈ™]ÈÝ
ÛÜšÜÜXÙH	ÉÝ\ËÛÜšÜÜXÙS˜[Y_IÈ›Ý›Ý[™ˆY[ÝHYX[ˆ[žHÙˆH›ÛÝÚ[™Î‚ˆH	Üš›Ú[ŠˆH
_OØ
_\™]\›ˆ\Ë˜ÛKœ[ŠÝ\Ë˜ÛÛ[X[™˜[YK‹‹\Ë˜\™Ü×KØÝÙ™‹˜ÝÙJ__NÝ˜\ˆ[Ý^ØÛÛ™šYÝ\˜][ÛŽžÙ[˜X›R[[]]X›R[œÝ[ÎžÙ\ØÜš\[ÛŽˆ’YˆYH
HY˜][ÛˆÒJK™]™[ÈH[œÝ[ÛÛ[X[™œ›ÛH[ÙYžZ[™ÈHØÚÙš[H‹\Nˆ“ÓÓPSˆ‹Y˜][“Kš\ÐÒ_KY˜][Ù[]™\”˜[™ÙT™Yš^žÙ\ØÜš\[ÛŽˆ•HY˜][Ø]™H™Yš^ˆ	×‰Ë	ß‰ÈÜˆ	ÉÈ‹\Nˆ”Õ’S‘È‹˜[Y\Î–È—ˆ‹Ÿˆ‹ˆ—KY˜][ˆ—ˆŸK™Y™\”™]\ÙNžÙ\ØÜš\[ÛŽˆ’YˆYKX\›ˆYÚ[][\È™]\ÙHH[ÜÝÛÛ[[Ûˆ\[™[˜ÞH˜[™ÙH[ˆÝ\ˆÛÜšÜÜXÙ\Ëˆ‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL__KÛÛ[X[™Î–ÖK	KPËËËPËPËËPËÐËÐËPË’K’KËËËÐËËPËËËËÐËËPËPËÐËPËÐËËËÐËËËÐË×_KÛÝ\[ÝÝ˜\ˆO^ßNÖ]
KÙY˜][Š
OO’›ÝJNÜYJ
NÜYJ
NÝ˜\ˆOH˜Ø][ÙÎˆŽÝ˜\ˆOYOO™KœÝ\ÕÚ]
JK›ÝYOO™Kœ˜[™ÙKœÛXÙJK›[™Ý
_[YOYOO™OOO[[È™Y˜][Ø][ÙÈŽ˜Ø][ÙÈ‰Ù_H˜[ÝYOO™KœØÛÜOØ	ÙKœØÛÜ_KÉÙK›˜[Y_X™K›˜[YKOJK‹ÊOOžÛ]OU›Ý

KŽÚYŠOOO[[
[YK˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜Ø][ÙÈŠNÙ[ÙHž^Û]OYK˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜Ø][ÙÜÈŠNÑI‰ŠQK™Ù]
JJ_XØ]ÚÛ]›ÚYZYŠ[Ÿ‹œÚ^™OOOL
]›ÝÈ™]ÈÝ
‹	Ú‹œ™]Q\ØÜš\ÜŠK˜ÛÛ™šYÝ\˜][Û‹
_Nˆ	ÓYJJ_H›Ý›Ý[™Üˆ[\X
NÛ]ÏV[Ý

K[‹™Ù]
ÊNÚYŠYŠ]›ÝÈ™]ÈÝ
‹	Ú‹œ™]Q\ØÜš\ÜŠK˜ÛÛ™šYÝ\˜][Û‹
_Nˆ[žH›Ý›Ý[™[ˆ	ÓYJJ_X
NÛ]YK˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJ‹›XZÙQ\ØÜš\ÜŠŠJNÜ™]\›ˆ‹œÝ\ÜÑ\ØÜš\ÜŠÊOÜ‹˜š[™\ØÜš\ÜŠKÜ]™[ÛÜšÜÜXÙK˜[˜ÚÜ™YØØ]Ü‹ÊNœNÝ˜\ˆÛÝ^ØÛÛ™šYÝ\˜][ÛŽžØØ][ÙÎžÙ\ØÜš\[ÛŽˆ•HY˜][Ø][ÙÈÙˆXÚØYÙ\È‹\Nˆ“PT‹˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆ•HØ][ÙÈÙˆXÚØYÙ\È‹\Nˆ”Õ’S‘ÈŸ_KØ][ÙÜÎžÙ\ØÜš\[ÛŽˆ“˜[YYØ][ÙÜÈÙˆXÚØYÙ\È‹\Nˆ“PT‹˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆH˜[YYØ][ÙÈ‹\Nˆ“PT‹˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆ”XÚØYÙH™\œÚ[Ûˆ[ˆHØ][ÙÈ‹\Nˆ”Õ’S‘ÈŸ___KÛÚÜÎžØ™Y›Ü™UÛÜšÜÜXÙTXÚÚ[™ÎŠK
OOžÛ]YKœ›Ú™XÝÏ\‹˜ÛÛ™šYÝ\˜][Û‹›XZÙT™\ÛÛ™\Š
KO^Ü›Ú™XÝœ‹™\ÛÛ™\ŽœË™\Ü›™]ÈÚ_NÙ›ÜŠ]ˆÙˆ]˜[\[™[˜ÚY\Ê^Û]Ï]Û—NÚYŠÊY›ÜŠ]Ù‹[ÙˆØš™XÝ™[šY\ÊÊJ^ÚYŠ\[ÙˆOHœÝš[™ÈŸUJ
JXÛÛ[YNÛ]Z‹œ\œÙRY[
ŠKOZ‹›XZÙQ\ØÜš\ÜŠ
KÏQJ‹KËJKÜ›ÝØÛÛ”ËÛÝ\˜ÙNž\˜[\Î’KÙ[XÝÜŽ•OZ‹œ\œÙT˜[™ÙJ‹˜ÛÛ™\ÓX[šY™\Ý˜[™ÙJËœ˜[™ÙJJNÔÏOOYKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][›ÝØÛÛŠI‰ŠÏ[[
KÖÙ—OZ‹›XZÙT˜[™ÙJÜ›ÝØÛÛ”ËÛÝ\˜ÙNž\˜[\Î’KÙ[XÝÜŽ•J___K™YXÙQ\[™[˜ÞN˜\Þ[˜ÊK‹ËÜ™\ÛÛ™\Ž˜K™\ÛÛ™SÜ[ÛœÎ›ŸJOO•JKœ˜[™ÙJOÑJKKŠN™__K›ÝRÛÝÝ˜\ˆÍO^ßNÖ]
ÍKÙY˜][Š
OO–›ÝJNÜYJ
NÝ˜\ˆ]^ÛÜ[Û˜[ˆLKÍOVÖÈZ[Ú[™ÜÜËØ\ÜXÝ\˜][ÐŒ‹ŒH‹ÜY\‘\[™[˜ÚY\ÎžÝZ[Ú[™ÜÜÎˆ—Œ‹ŒŒˆŸ_WKÈZ[Ú[™ÜÜËÛ[™KXÛ[\Œ‹ŒH‹ÜY\‘\[™[˜ÚY\ÎžÝZ[Ú[™ÜÜÎˆ—Œ‹ŒŒˆŸ_WKÈ[[X[‹ÜÜÝÜÜË\\™ÙXÜÜÐËŒKŒÈËŒKŒËX[KŒ‹ÜY\‘\[™[˜ÚY\ÎžÜÜÝÜÜÎˆ—ŽŒŒŸ_WKÈØ[]™\œØÚY\™[‹ÜÝ™X[K]Ë[ØœÙ\˜X›PŒËŒH‹ÜY\‘\[™[˜ÚY\ÓY]NžÜžœÎ”]™[“ØœÙ\˜X›N”]_WKÈ˜[žK[ØœÙ\˜X›PKŒH‹ÜY\‘\[™[˜ÚY\ÓY]NžÜžœÎ”]™[“ØœÙ\˜X›N”]_WKÈL‹ØYÙ[KŒ‹Ù\[™[˜ÚY\ÎžÙXYÎˆŠˆŸ_WKÈ™XYÐŒ‹Œ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈœÝ\ÜËXÛÛÜˆŽ”]_WKÈ™ÛÝLH‹Ù\[™[˜ÚY\ÎžÈ\\ËÜ™\ÜÛœÙ[ZÙHŽˆ—ŒKŒŒ‹\\ËÚÙ^]ˆŽˆ—ŒËŒKŒHŸ_WKÈ˜ØXÚXX›K[ÛÚÝ\ŒKŒˆ‹Ù\[™[˜ÚY\ÎžÈ\\ËÚÙ^]ˆŽˆ—ŒËŒKŒHŸ_WKÈš[[šËY][ØY\
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÙÜ˜\[ˆ—ŒŒLËŒHŒMŒŒŸ_WKÈ\\ØÜš\[[™ÝXYÙK\Ù\™\
ˆ‹Ù\[™[˜ÚY\ÎžÈœØÛÙKZœÛÛœœÈŽˆ—KŒŒH‹œØÛÙK[[™ÝXYÙ\Ù\™\‹\›ÝØÛÛŽˆ—ŒËŒMKŒŸ_WKÈœÜÝÜÜË\Þ[^
ˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈœÜÝÜÜËZ[Ž”]œÜÝÜÜËZœÞŽ”]œÜÝÜÜË[\ÜÈŽ”]œÜÝÜÜË[X\šÙÝÛˆŽ”]œÜÝÜÜË\ØÜÜÈŽ”]_WKÈšœÜË\YÚ[‹\[K]˜[YKY[˜Ý[ÛLLŒKŒH‹Ù\[™[˜ÚY\ÎžÈ[žK]Ø\›š[™ÈŽˆ—ŒKŒŒˆŸ_WKÈš[šË\Ù[XÝZ[œ]ŒKŒ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆ—ŒM‹ŽŒˆŸ_WKÈ›XÙ[œÙK]ÙXœXÚË\YÚ[‹ŒËŒN‹ÜY\‘\[™[˜ÚY\ÓY]NžÝÙXœXÚÎ”]_WKÈœÛ›ÝÜXÚÐLËŒËŒ‹Ù\[™[˜ÚY\ÎžÈ››ÙKYÞ\Žˆ—ËŒKŒŸ_WKÈœ›ÛZ\ÙKZ[™›YÚ
ˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžØ›YXš\™”]_WKÈœ™XXÝÜÜÐ
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆŠˆŸ_WKÈœ™XXÝXÛÛÜL‹ŒNKŒ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆŠˆŸ_WKÈ™Ø]ØžK\YÚ[‹ZLN
ˆ‹Ù\[™[˜ÚY\ÎžÜ˜[YNˆ—ŒŒŒHŸ_WKÈ\Ù\˜YÙ[Œ‹ŒŒ‹Ù\[™[˜ÚY\ÎžÜ™\]Y\Ýˆ—Œ‹ŽŒ‹X[[\œÙ\ŽˆŒŒž‹Ù[]™\ŽˆKKžŸ_WKÈ\ÛÙÜ˜\[Ø\ÛË]ÛÛÐLKŒˆ‹ÜY\‘\[™[˜ÚY\ÎžÙÜ˜\[ˆ—ŒMŒ‹ŒHŒMKŒŒŸ_WKÈ›X]\šX[]X›PŒ‹ŒŒ‹Ù\[™[˜ÚY\ÎžÈ˜X™[Ü[[YHŽˆ—ËŒLKŒˆŸ_WKÈ˜X™[Ü\œÙ\
ˆ‹Ù\[™[˜ÚY\ÎžÈ˜X™[Ý\\ÈŽˆ—ËŽŒÈŸ_WKÈ™›ÜšË]ËXÚXÚÙ\‹]ÙXœXÚË\YÚ[M‹ŒË‹ÜY\‘\[™[˜ÚY\ÎžÙ\Û[ˆHˆ‹\\ØÜš\ˆH‹È‹ÙXœXÚÎˆH‹YK][\]KXÛÛ\[\ˆŽˆŠˆŸKY\‘\[™[˜ÚY\ÓY]NžÙ\Û[”]YK][\]KXÛÛ\[\ˆŽ”]_WKÈœ˜ËX[š[X]PLËŒKŒH‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆLM‹ŽKŒ‹œ™XXÝYÛHŽˆLM‹ŽKŒŸ_WKÈœ™XXÝX›ÛÝÝ˜\]X›L‹\YÚ[˜]Ü
ˆ‹Ù\[™[˜ÚY\ÎžØÛ\ÜÛ˜[Y\Îˆ—Œ‹Œ‹ˆŸ_WKÈœ™XXÝY˜YÙØX›PMŒÈ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆHM‹ŒËŒ‹œ™XXÝYÛHŽˆHM‹ŒËŒŸ_WKÈ˜\ÛË]\ØYXÛY[M‹ÜY\‘\[™[˜ÚY\ÎžÙÜ˜\[ˆŒMHMHŸ_WKÈœ™XXÝZ[œÝ[ÙX\˜ÚXÛÜ™PM‹ËŒ‹ÜY\‘\[™[˜ÚY\ÎžØ[ÛÛX\ÙX\˜ÚˆHËŒHHŸ_WKÈœ™XXÝZ[œÝ[ÙX\˜ÚYÛPM‹ËŒ‹Ù\[™[˜ÚY\ÎžÈœ™XXÝY˜\ÝXÛÛ\\™HŽˆ—ŒËŒŒŸ_WKÈÜÐËŒ‹ŒH‹ÜY\‘\[™[˜ÚY\ÎžØY™™\][ˆ—ŒŒH‹]‹N]˜[Y]HŽˆ—KŒŒˆŸKY\‘\[™[˜ÚY\ÓY]NžØY™™\][”]]‹N]˜[Y]HŽ”]_WKÈœ™XXÝ\Ü[Œ‹Œˆ‹ÜY\‘\[™[˜ÚY\ÎžÈœ™XXÝYÛHŽˆ—ŒMKŒŒLŒM‹ŒŒLŒMËŒŒLŸ_WKÈœ™XXÝ\ØÜš\ÐMŒŒH‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆŠˆŸ_WKÈ\ÝØY™PLKŒLŒH‹Ù\[™[˜ÚY\ÎžÈ˜X™[ÜYÚ[‹]˜[œÙ›Ü›KY›Ü‹[ÙˆŽˆ—ËŒL‹ŒH‹˜X™[Ü[[YHŽˆ—ËŒL‹HŸ_WKÈ\ÝØY™K[YØXÞKX\PMŒ‹Œ‹Ù\[™[˜ÚY\ÎžÈ\ÝØY™KZ[[Y\šXYŽˆ—ŒMËŒŒH‹œ™XYYš[K\™[]]™HŽˆ—ŒKŒ‹ŒŸ_WKÈÛÛÙÛKXÛÝYÙš\™\ÝÜ™PMŽKŒÈ‹Ù\[™[˜ÚY\ÎžÜ›ÝØYšœÎˆ—‹ŽˆŸ_WKÈ™Ø]ØžK\ÛÝ\˜ÙKX\\Ù\™\
ˆ‹Ù\[™[˜ÚY\ÎžÈ˜˜X™[\ÛYš[Žˆ—‹Œ‹ŒŸ_WKÈÙXœXÚËXÛKÜXÚØYÙK]][ÐLKŒŒKX[K‹Ù\[™[˜ÚY\ÎžÈ˜Ü›ÜÜË\Ü]ÛˆŽˆ—ËŒŒÈŸ_WKÈ™Ø]ØžK\™[X\šË\š\ÛZœÐËŒËŒŽ‹Ù\[™[˜ÚY\ÎžÛÙ\Úˆ—Ÿ_WKÈ™Ø]ØžK\YÚ[‹Y˜]šXÛÛ
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÝÙXœXÚÎˆŠˆŸ_WKÈ™Ø]ØžK\YÚ[‹\Ú\œM‹Œ[™^ŒÈ‹Ù\[™[˜ÚY\ÎžÙXYÎˆ—ŒËŒHŸ_WKÈ™Ø]ØžK\™XXÝ\›Ý]\‹\ØÜ›ÛMK‹Œ[™^Œ‹Ù\[™[˜ÚY\ÎžÈœ›Ü]\\ÈŽˆ—ŒMKËŒˆŸ_WKÈ™X˜\ÜËÙ›Ü›\Ð
ˆ‹Ù\[™[˜ÚY\ÎžÈÝ[Y\Þ\Ý[KÜÚÝ[Y›ÜØ\™\›ÜŽˆ—KŒŒŸKY\‘\[™[˜ÚY\ÎžÜ™XXÝˆ—ŒM‹ŽˆŸ_WKÈœ™X˜\ÜÐ
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆ—ŒM‹ŽˆŸ_WKÈ[Y\ÚYÛ‹Ü™XXÝ\ÛXÚÐLŒŽŒÈ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆLM‹ŒŒŸ_WKÈ›\]Œ‹È‹Ù\[™[˜ÚY\ÎžÙ\^YžNˆ—ŒKŒHŸ_WKÈYKXÛK\YÚ[‹]Y]YžPL‹ŒŒÈ‹Ù\[™[˜ÚY\ÎžÜÙ[]™\Žˆ—‹ŒËŒŸKY\‘\[™[˜ÚY\ÓY]NžÈœØ\ÜË[ØY\ˆŽ”]Y]YžK[ØY\ˆŽ”]_WKÈYKXÛK\YÚ[‹]Y]YžPL‹Œ‹Ù\[™[˜ÚY\ÎžÈ›[[ØY\ˆŽˆ—ŒËŒŒŸ_WKÈYKXÛK\YÚ[‹]Y]YžPL‹ŒÈ‹ÜY\‘\[™[˜ÚY\ÎžÝYNˆŠˆŸ_WKÈY]YžKØÛK\YÚ[‹]][ÐLŒ‹Ù\[™[˜ÚY\ÎžÜÙ[]™\Žˆ—‹ŒËŒŸKY\‘\[™[˜ÚY\ÓY]NžÈœØ\ÜË[ØY\ˆŽ”]_WKÈYKØÛK\YÚ[‹]\\ØÜš\MKŒŒX[KŒ‹Ù\[™[˜ÚY\ÎžÈ˜˜X™[[ØY\ˆŽˆ—ŽŒKŒŸ_WKÈYKØÛK\YÚ[‹]\\ØÜš\MKŒŒX™]KŒ‹Ù\[™[˜ÚY\ÎžÈ˜X™[ØÛÜ™HŽˆ—ËŒL‹ŒMˆŸKY\‘\[™[˜ÚY\ÎžÈYK][\]KXÛÛ\[\ˆŽˆ—Œ‹ŒŒŸKY\‘\[™[˜ÚY\ÓY]NžÈYK][\]KXÛÛ\[\ˆŽ”]_WKÈ˜ÛÜ™Ý˜KZ[ÜÐM‹ŒËŒ‹Ù\[™[˜ÚY\ÎžÝ[™\œØÛÜ™Nˆ—ŒKŽKŒˆŸ_WKÈ˜ÛÜ™Ý˜K[XLLŒŒH‹Ù\[™[˜ÚY\ÎžÝ[™\œØÛÜ™Nˆ—ŒKŽKŒˆŸ_WKÈ™Ú][›ÙKYœÐ
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÈšœËYÚ]Žˆ—ŒËŽŸKY\‘\[™[˜ÚY\ÓY]NžÈšœËYÚ]Ž”]_WKÈ˜ÛÛœÛÛY]PŒM‹Œ‹ÜY\‘\[™[˜ÚY\ÎžÛ]\ÝXÚNˆ—ŒËŒŒŸKY\‘\[™[˜ÚY\ÓY]NžÛ]\ÝXÚN”]_WKÈ˜ÛÛœÛÛY]PLŒM‹Œ‹ÜY\‘\[™[˜ÚY\ÎžÝ™[ØÚ]ZœÎˆ—Œ‹ŒŒH‹[ž[\]ZYˆ—ŒŒ‹ŒÍ‹›\]ZY[›ÙHŽˆ—ŒËŒŒH‹˜YNˆ—ŒKŒLKŒ‹[‹Z˜YHŽˆŠˆ‹\Ýˆ—ŒŒËŒ‹™\ÝœËZ[\œÈŽˆ—ŒKË‹™\ÝœË[[šÙY[ˆŽˆ—Œ‹ËH‹ÝÚYÎˆ—ŒKŒˆ‹œÝÚYË][\]\ÈŽˆ—Œ‹ŒŒÈ‹œ˜^›Ü‹]\Žˆ—ŒKŒËŒH‹]ˆLËˆ‹\][ÜŽˆ—ŒŒH‹ÚYÎˆ—ŒKŒMKŒˆ‹ZœÎˆ—ŒËŒKH‹XÛÎˆ—ŒKŒKŒ\˜ËLÈ‹˜^žŽˆ—ŒŒŒN‹œ]ˆŸŒKŒKŒ‹[[œÎˆ—Œ‹Œˆ‹[[]ˆ—ŒŒËŒÈ‹Ú\ÚÙ\œÎˆ—ŒŒ‹š[[XÛÙ™™YHŽˆ—ŒKŒMŒH‹šÙØ[‹šœÈŽˆ—ŒËŒŒˆ‹[\^YYˆLŒ‹ŒÈ‹[™X˜\œÎˆ—Ëˆ‹[™\œØÛÜ™Nˆ—ŒKŒLKŒ‹Ù\Úˆ—ŒMËŒŒ‹YÎˆ—ŒËŒŒ‹[‹\YÈŽˆŠˆ‹YZœÎˆ—ŒËŒH‹Ø[\Îˆ—ŒŒLŒH‹]\ÝXÚNˆ—ŒŒH‹\Ýˆ—ŒŒKŽ‹XÝˆ—ŒKŽH‹[ÝNˆ—ŒŒ‹Œ‹Ù™™YNˆ—ŒŒËˆ‹Ýˆ—ŒKŒKŒÈ‹˜œ˜XÚÙ]][\]HŽˆ—ŒKŒKH‹˜XÝ]™Nˆ—ŒKŒËŒLˆ‹[šXÚÜÎˆ—ŒËŒ‹Œˆ‹[[™Îˆ—ŒŒŽ‹˜˜X™[XÛÜ™HŽˆ—‹Œ‹ŒÈ‹]\ÎˆŸŒŒLH‹œ™XXÝYÛHŽˆ—ŒM‹ŒLËŒH‹™XXÝˆ—ŒM‹ŒLËŒH‹˜\˜Ë][\]\ÈŽˆ—ŒKŒÈ‹˜\Úˆ—ŒŒLËŒ‹ÛNˆ—Œ‹ŒŒ‹X\šÛÎˆ—ŒËŒM‹XXÝ\ˆ—Œ‹ŒŒ‹˜ÛÙ™™YK\ØÜš\Žˆ—ŒKŒL‹È‹Ü]Z\œ™[Nˆ—KŒKŒ‹Ú[™Îˆ—KŒŒˆŸKY\‘\[™[˜ÚY\ÓY]NžÝ™[ØÚ]ZœÎ”][ž[\]ZY”]›\]ZY[›ÙHŽ”]˜YN”][‹Z˜YHŽ”]\Ý”]™\ÝœËZ[\œÈŽ”]™\ÝœË[[šÙY[ˆŽ”]ÝÚYÎ”]œÝÚYË][\]\ÈŽ”]œ˜^›Ü‹]\Ž”]]”]\][ÜŽ”]ÚYÎ”]ZœÎ”]XÛÎ”]˜^žŽ”]œ]”][[œÎ”][[]”]Ú\ÚÙ\œÎ”]š[[XÛÙ™™YHŽ”]šÙØ[‹šœÈŽ”][\^YY”][™X˜\œÎ”][™\œØÛÜ™N”]Ù\Ú”]YÎ”][‹\YÈŽ”]YZœÎ”]Ø[\Î”]]\ÝXÚN”]\Ý”]XÝ”][ÝN”]Ù™™YN”]Ý”]˜œ˜XÚÙ]][\]HŽ”]˜XÝ]™N”][šXÚÜÎ”][[™Î”]˜˜X™[XÛÜ™HŽ”]]\Î”]œ™XXÝYÛHŽ”]™XXÝ”]˜\˜Ë][\]\ÈŽ”]˜\Ú”]ÛN”]X\šÛÎ”]XXÝ\”]˜ÛÙ™™YK\ØÜš\Ž”]Ü]Z\œ™[N”]Ú[™Î”]_WKÈYK[ØY\LM‹ŒËŒÈ‹ÜY\‘\[™[˜ÚY\ÎžÈYKØÛÛ\[\‹\Ù˜ÈŽˆ—ŒËŒŽ‹ÙXœXÚÎˆ—ŒKŒKŒŒLŸKY\‘\[™[˜ÚY\ÓY]NžÈYKØÛÛ\[\‹\Ù˜ÈŽ”]_WKÈYK[ØY\ŒM‹ËŒ‹ÜY\‘\[™[˜ÚY\ÎžÈYKØÛÛ\[\‹\Ù˜ÈŽˆ—ŒËŒŽ‹YNˆ—ŒËŒ‹ŒLÈŸKY\‘\[™[˜ÚY\ÓY]NžÈYKØÛÛ\[\‹\Ù˜ÈŽ”]YN”]_WKÈœØÜÜË\\œÙ\LKŒH‹Ù\[™[˜ÚY\ÎžÛÙ\Úˆ—ŒMËŒŒHŸ_WKÈœ]Y\žKX\ÝKŒH‹Ù\[™[˜ÚY\ÎžÛÙ\Úˆ—ŒMËŒŒHŸ_WKÈœ™Y^][šÐL‹ŒËŒ‹ÜY\‘\[™[˜ÚY\ÎžÜ™Y^ˆ—ŒŒŸ_WKÈœÚÞ\XÚÐLŒËŒˆ‹Ù\[™[˜ÚY\ÎžÝ\Žˆ—‹ŒKŒŸ_WKÈœXÛKÛY]][‹XØ[Ý[]Ü‹ŒŒ‹Ù\[™[˜ÚY\ÎžÈšœÛÛ‹\\œÙKY]™[‹X™]\‹Y\œ›ÜœÈŽˆ—Œ‹ŒËŒHŸ_WKÈ˜š[‹[[šÜÐ‹ŒËŒ‹Ù\[™[˜ÚY\ÎžÈ›ZÙ\œZ[™™\‹[ÝÛ™\ˆŽˆ—ŒKŒŒˆŸ_WKÈœ›Û\\YÚ[‹\ÛYš[[›ÙPLŽŒ‹ÜY\‘\[™[˜ÚY\ÎžÜ›Û\ˆ—ŒKŒŒŒŒ‹ŒŒŸ_WKÈœÛ›ÝÜXÚÐËŽˆ‹Ù\[™[˜ÚY\ÎžÈ›XYÚXË\Ýš[™ÈŽˆ—ŒŒKÈŸ_WKÈ™[K]ÙXœXÚË[ØY\
ˆ‹Ù\[™[˜ÚY\ÎžÝ[\ˆ—ŒŽKŸ_WKÈÚ[œÝÛ‹]˜[œÜÜMŒ‹Ù\[™[˜ÚY\ÎžÛÙÙ›Ü›Nˆ—Œ‹Œ‹ŒŸ_WKÈš™\Ý]YK\™\›ØÙ\ÜÛÜ
ˆ‹Ù\[™[˜ÚY\ÎžÈ˜X™[ØÛÜ™HŽˆËŽÈ‹˜X™[Ý[\]HŽˆËŽˆŸKY\‘\[™[˜ÚY\ÎžÜYÎˆ—Œ‹ŒŸKY\‘\[™[˜ÚY\ÓY]NžÜYÎ”]_WKÈœ™Y^\\œÚ\Ý
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆLMˆŸKY\‘\[™[˜ÚY\ÓY]NžÜ™XXÝ”]_WKÈœÛÙ][PLÈ‹Ù\[™[˜ÚY\ÎžÈ››ÙKYÞ\Žˆ—ŒËŽŒŸ_WKÈ˜˜X™[\YÚ[‹YÜ˜\[]YÐLËŒKŒ‹ÜY\‘\[™[˜ÚY\ÎžÙÜ˜\[ˆ—ŒMŒŒŒMKŒŒŸ_WKÈ^]ÜšYÚÝ\ÝLKŒMŒH‹Ù\[™[˜ÚY\ÎžÈš™\Ý[X]Ú\‹]][ÈŽˆ—Œ‹ŒˆŸ_WK‹‹–È˜˜X™[\YÚ[‹\™[[Ý™KYÜ˜\[\]Y\šY\ÐËŒMŒ[™^ŒH‹˜˜X™[\™\Ù]YØ]ØžK\XÚØYÙPKŒMŒ[™^ŒH‹˜Ü™X]KYØ]ØžPKŒMŒ[™^ŒH‹™Ø]ØžKXYZ[ŒŒ[™^ŒH‹™Ø]ØžKXÛPËŒMŒ[™^ŒH‹™Ø]ØžKXÛÜ™K]][Ð‹ŒMŒ[™^ŒH‹™Ø]ØžKY\ÚYÛ‹]ÚÙ[œÐËŒMŒ[™^ŒH‹™Ø]ØžK[YØXÞK\ÛYš[ÐKŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹X™[˜ÚX\šË\™\Ü[™ÐKŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹YÜ˜\[XÛÛ™šYÐŒŒËŒ[™^ŒH‹™Ø]ØžK\YÚ[‹Z[XYÙPKŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹[Y‹ŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹[™]YžKXÛ\ÐKŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹[›Ë\ÛÝ\˜Ù[X\ÐËŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹\YÙKXÜ™X]ÜËŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹\™XXÝKŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹\™[ØYY›ÛÐ‹ŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹\ØÚ[XK\Û˜\ÚÝ‹ŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹\Ý[]›Û‹ŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹\ÝX™›ÛËŒMŒ[™^ŒH‹™Ø]ØžK\YÚ[‹]][ÐKŒMŒ[™^ŒH‹™Ø]ØžK\™XÚ\\ÐŒKŒ[™^ŒH‹™Ø]ØžK\ÛÝ\˜ÙK\ÚÜYžPK‹Œ[™^ŒH‹™Ø]ØžK\ÛÝ\˜ÙK]ÚZÚ\YXPËŒMŒ[™^ŒH‹™Ø]ØžK]˜[œÙ›Ü›Y\‹\ØÜ™Y[œÚÝËŒMŒ[™^ŒH‹™Ø]ØžK]ÛÜšÙ\KŒ[™^ŒH—K›X\
OO–ÙKÙ\[™[˜ÚY\ÎžÈ˜X™[Ü[[YHŽˆ—ËŒMŽŸ_WJKÈ™Ø]ØžKXÛÜ™K]][Ð‹ŒMŒ[™^ŒH‹Ù\[™[˜ÚY\ÎžÙÛÝˆŽŒËŒˆŸ_WKÈ™Ø]ØžK\YÚ[‹YØ]ØžKXÛÝYLËŒKŒ[™^Œ‹Ù\[™[˜ÚY\ÎžÈ™Ø]ØžKXÛÜ™K]][ÈŽˆ—Œ‹ŒLËŒ[™^ŒŸ_WKÈ™Ø]ØžK\YÚ[‹YØ]ØžKXÛÝYLËŒ‹Œ[™^ŒH‹ÜY\‘\[™[˜ÚY\ÎžÝÙXœXÚÎˆŠˆŸ_WKÈ˜˜X™[\YÚ[‹\™[[Ý™KYÜ˜\[\]Y\šY\ÐLËŒMŒ[™^ŒH‹Ù\[™[˜ÚY\ÎžÈ™Ø]ØžKXÛÜ™K]][ÈŽˆ—Œ‹ŽŒ[™^ŒHŸ_WKÈ™Ø]ØžK\YÚ[‹[™]YžPËŒLËŒ[™^ŒH‹Ù\[™[˜ÚY\ÎžÈ™Ø]ØžKXÛÜ™K]][ÈŽˆ—Œ‹ŒLËŒ[™^ŒŸ_WKÈ˜Û\[š[Û‹]ŒËXÛÙ[[ÙLŒ‹Œ‹ÜY\‘\[™[˜ÚY\ÎžÚœØÛÙ\ÚYˆ—ŒŒLKŒŸ_WKÈœ™XXÝ[]™P
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÈœ™XXÝYÛHŽˆŠˆ‹™XXÝˆŠˆŸ_WKÈÙXœXÚÐŒH‹ÜY\‘\[™[˜ÚY\ÓY]NžÈÙXœXÚËXÛHŽ”]ÙXœXÚËXÛÛ[X[™Ž”]_WKÈÙXœXÚÐKŒŒX™]KŒŒÈ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈÙXœXÚËXÛHŽ”]_WKÈÙXœXÚËY]‹\Ù\™\ËŒLŒˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈÙXœXÚËXÛHŽ”]_WKÈØÝ\Ø]\\ËÜ™\ÜÛœÚ]™K[ØY\KKŒ‹ÜY\‘\[™[˜ÚY\ÓY]NžÜÚ\œ”]š[\”]_WKÈ™\Û[[[Ù[K]][Ð
ˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈ™\Û[Z[\Ü\™\ÛÛ™\‹[›ÙHŽ”]™\Û[Z[\Ü\™\ÛÛ™\‹]\\ØÜš\Ž”]™\Û[Z[\Ü\™\ÛÛ™\‹]ÙXœXÚÈŽ”]\\ØÜš\Y\Û[Ü\œÙ\ˆŽ”]_WKÈ™\Û[\YÚ[‹Z[\Ü
ˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈ\\ØÜš\Y\Û[Ü\œÙ\ˆŽ”]_WKÈ˜Üš]\œË]ÙXœXÚË\YÚ[ËŒŒˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈš[]ÙXœXÚË\YÚ[ˆŽ”]_WKÈ\œÙ\MKŒLŒ‹Ù\[™[˜ÚY\ÎžØXÛÜ›Žˆ—ŽKŒŸ_WKÈ˜˜X™[\™\Ù]\™XXÝX\LŒžLŒŒˆ‹Ù\[™[˜ÚY\ÎžÈ˜X™[ÜYÚ[‹\›ÜÜØ[\š]˜]K\›Ü\KZ[‹[Øš™XÝŽˆ—ËŒM‹ÈŸ_WKÈ™\Û[XÛÛ™šYË\™XXÝX\
ˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÝ\\ØÜš\”]_WKÈYKÙ\Û[XÛÛ™šYË]\\ØÜš\LKŒŒ‹ÜY\‘\[™[˜ÚY\ÓY]NžÝ\\ØÜš\”]_WKÈ[œYÚ[‹]YL‹\ØÜš\\Ù]\ŽKŒH‹ÜY\‘\[™[˜ÚY\ÎžÈYKØÛÛ\ÜÚ][Û‹X\HŽˆ—ŒKŒÈ‹YKÜ[[YKYÛHŽˆ—ŒËŒ‹ŒˆŸ_WKÈÞ\™\ÜËÜÛ˜\ÚÝ
ˆ‹Ù\[™[˜ÚY\ÎžÙXYÎˆ—ŒËŒ‹ÈŸ_WKÈ˜]]Ë\™[^PLŒMŒ‹ÜY\‘\[™[˜ÚY\ÎžÈœ™Y›XÝ[Y]Y]HŽˆ—ŒŒKŒLÈŸ_WKÈYK][\]KX˜X™[XÛÛ\[\KŒ‹Œ‹ÜY\‘\[™[˜ÚY\ÎžÈYK][\]KXÛÛ\[\ˆŽˆ—Œ‹‹ŒŸ_WKÈ\˜Ù[Ý˜[œÙ›Ü›Y\‹Z[XYÙP‹KŒ‹ÜY\‘\[™[˜ÚY\ÎžÈ\˜Ù[ØÛÜ™HŽˆŠˆŸ_WKÈ\˜Ù[Ý˜[œÙ›Ü›Y\‹ZœÐ‹KŒ‹ÜY\‘\[™[˜ÚY\ÎžÈ\˜Ù[ØÛÜ™HŽˆŠˆŸ_WKÈœ\˜Ù[
ˆ‹ÜY\‘\[™[˜ÚY\ÓY]NžÈ\˜Ù[ØÛÜ™HŽ”]_WKÈœ™XXÝ\ØÜš\Ð
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÙ\Û[ˆŠˆŸ_WKÈ™›ØÝ\Ë]˜\\™XXÝŽŒŒ‹Ù\[™[˜ÚY\ÎžÝX˜˜X›Nˆ—KŒËŒˆŸ_WKÈœ™XXÝ\›™LŒËÈ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆLM‹ŒËŒ‹œ™XXÝYÛHŽˆLM‹ŒËŒŸ_WKÈ˜ÛÛ›™XÝ[[Û™ÛÐKŒŒ‹ÜY\‘\[™[˜ÚY\ÎžÈ™^™\ÜË\Ù\ÜÚ[ÛˆŽˆ—ŒKŒMËŒHŸ_WKÈYKZLNH‹ÜY\‘\[™[˜ÚY\ÎžÝYNˆ—ŒˆŸ_WKÈYK\›Ý]\‹ÜY\‘\[™[˜ÚY\ÎžÝYNˆ—ŒˆŸ_WKÈ[šYšYYL‹Ù\[™[˜ÚY\ÎžÈ\\ËÝ[š\ÝŽˆ—Œ‹ŒŒŸ_WKÈœ™XXÝYÚ]X‹XLKŒËŒ‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆLM‹ŒËŒŸ_WKÈœ™XXÝY]‹]][Ð
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÝ\\ØÜš\ˆL‹È‹ÙXœXÚÎˆMŸKY\‘\[™[˜ÚY\ÓY]NžÝ\\ØÜš\”]_WKÈ\Þ[˜Ø\KÜ™XXÝXÛÛ\Û™[LKŒŒ[™^ŒÎH‹ÜY\‘\[™[˜ÚY\ÎžÜ™XXÝˆLM‹ŽŒ‹œ™XXÝYÛHŽˆLM‹ŽŒŸ_WKÈžÐ
ˆ‹ÜY\‘\[™[˜ÚY\ÎžÝÙXœXÚÎˆLKŒLKŒŸKY\‘\[™[˜ÚY\ÓY]NžÝÙXœXÚÎ”]_WKÈ˜˜X™[\YÚ[‹\™[[Ý™KYÜ˜\[\]Y\šY\ÐMŒŒŒ[™^Œ‹Ù\[™[˜ÚY\ÎžÈ˜X™[Ý\\ÈŽˆ—ËŒMKŸ_WKÈ™Ø]ØžK\YÚ[‹\YÙKXÜ™X]ÜMŒŒŒ[™^ŒH‹Ù\[™[˜ÚY\ÎžÈ™œËY^˜HŽˆ—ŒLŒKŒŸ_WKÈ™Ø]ØžK\YÚ[‹]][ÐLËŒMŒ[™^ŒH‹Ù\[™[˜ÚY\ÎžÙ˜\ÝNˆ—ŒKŒLËŒŸKY\‘\[™[˜ÚY\ÎžÙÜ˜\[ˆ—ŒMKŒŒŸ_WKÈ™Ø]ØžK\YÚ[‹[YËŒKŒ[™^ŒH‹Ù\[™[˜ÚY\ÎžÛZÙ\œˆ—ŒKŒŸ_WKÈ™Ø]ØžK\YÚ[‹[YŒˆ‹ÜY\‘\[™[˜ÚY\ÎžÙØ]ØžNˆ—ŒËŒŒ[™^Ÿ_WKÈ™™\MKŒ‹Œ‹ÜY\‘\[™[˜ÚY\ÎžÜXÛÛX]ÚˆŒ‹žŸKY\‘\[™[˜ÚY\ÓY]NžÜXÛÛX]Ú”]_WKÈ˜˜X™[\YÚ[‹]˜[œÙ›Ü›K]\\ØÜš\[Y]Y]PLŒËŒˆ‹ÜY\‘\[™[˜ÚY\ÎžÈ˜X™[ØÛÜ™HŽˆ—È‹˜X™[Ý˜]™\œÙHŽˆ—ÈŸKY\‘\[™[˜ÚY\ÓY]NžÈ˜X™[Ý˜]™\œÙHŽ”]_WKÈ™Ü˜\[XÛÛ\ÜÙPNKŒŒL‹ÜY\‘\[™[˜ÚY\ÎžÙÜ˜\[ˆ—ŒMŒ‹ŒŒMKŒŒŒM‹ŒŒŸ_WKÈš]K\YÚ[‹]Y]YžPLKŒŒˆ‹ÜY\‘\[™[˜ÚY\ÎžÝYNˆ—ŒËŒŒŸ_WKÈÙXœXÚË\YÚ[‹]Y]YžPL‹ŒŒH‹ÜY\‘\[™[˜ÚY\ÎžÝYNˆ—ŒËŒ‹ˆŸ_WKÈ™\Û[Z[\Ü\™\ÛÛ™\‹]š]P‹ŒŒH‹Ù\[™[˜ÚY\ÎžÙXYÎˆ—ŒË‹™\ÛÛ™Nˆ—ŒKŒŒ‹ŽŸ_WKÈ››Ý\ÝXÚÐŒËŒŒ‹Ù\[™[˜ÚY\ÎžØÜÜÝ\Nˆ—ŒËŒŒLŸ_WKÈ˜\ÝYžKÝ\K\›ÝšY\‹]\X›ÞKŒŒ‹ÜY\‘\[™[˜ÚY\ÎžÙ˜\ÝYžNˆ—KŒŒŸ_WKÈ˜\ÝYžKÝ\K\›ÝšY\‹]\X›ÞŒŒ‹ÜY\‘\[™[˜ÚY\ÎžÙ˜\ÝYžNˆ—ŒŒŸ_WWNÝ˜\ˆNÙ[˜Ý[ÛˆYJ
^Ü™]\›ˆ\[ÙˆOˆH‰‰ŠORYJž›XˆŠK˜œ›ÝQXÛÛ\™\ÜÔÞ[˜ÊY™™\‹™œ›ÛJ‘ÍÝÙPPžQ•šÌÕœÍÕY’M^ZÙÑSMÜ•ÍÕMÔÑÌ”Í]‘ÜÒ^™ŠÜËÛœMÑ]›Øž\Ü”XYÖUPR›Ý›X‘ZÐZÔœ\ÒRLÑÍUØ[]Z˜[ÙÑ‘ŒšQZšUTZÚ‘ÌUÌšÎRÚPÚÛLÌM™˜ÌÔÕÌ–SÑÜ™šÚÑN^ŒÐŒX]˜[]L^Þ’›]Ø[ÞÕœÛÞØÐŒ\\VÑT•\˜MÕÚŽ™ÝÕÙZ^\™XÎØYŒPP“LVSY˜™Ž’ŽR˜ÙV“ÚÙÛ]œ”TÎQ[ÞSX›V•T[PÑZ”ÝÕ[ÞSÊÑV”Z›ÙœŠËÛÐV•XÚÌ™[œ˜T‘
ÛÕÓ›[šŽŠÙÝÔÛÎ[[ZÜÍ–MÍTÜXÕÐMžŒŒ]VZÞ“]LÑUÚŠÒÌŒÔžT[ZQLÍKÜÎØÔÍÑÚÒÒÒÜJÞRT]ÑZT‘™šP\]YSXÑ‘œ“œÐRM™UÙSÎSRÛ”˜M[NU
ÓLŠÕŠÐZÑ”Õ›Û™ZPTT”ÙÕÑPR^Q›SØNQP™ÌŽ›\^]R™
ÛÙ\Í^\ÚÒLLÓÕžVL\”RT[Ý]•Ú]›ÒÔY•ÊÌ”NÞUTŒUÍT™]T‘ÚÒ‘LT‘YKÝ˜ÖLœ™Ì‘Í“L\‘™ŒœÚœNS[RLÊÊÍÑŒÊÍÓÑ’UÖÚš
ÛÍÓœŒš“˜šVXÔYTÌZLËÚ•‘™ÓÜLRÎŠÞÍNX‘LœJÍ˜VM\Tž”ÌÛÖ[Ó\Z[‘‘’Ú›YŒNÓ’ÑMRÚ•ÝÜ[–M“Q”]ÌUÍž[SÐSžPÖ›TZÌSTRSU•”U™ÑÍŒ˜PœQÊÊÖN[Ñš‹Ô••MÍRÓ”Ð›QÓÓÐ›[™œR’Ü‹ÛšU‘Ìž™œYP”œœ•ZÛœMMŒ”ÙÚ[RÛÖU›˜™\Y™]X]\QZL\ŒLÒ›QRTUšY•‘žQ\Ù[M\Í]‘\”UÒÚØ•R\Þœ\ÒRÒÍMÙKÒÜŠÛ™ÝQŠÍÎLRUÓRPÚÔN•ZYÜÎQ
ÕÊØÍ“›ÔÓ”•ZPÖ[T
Ò™›Ì›’ÐÒÝÎ\˜QYUÕLÝZS”“Íž˜ÞRÔ[ÖZ^ž“›šÙMØX–ÌÒL[Tž›YÑÌ•YNJÍÕÞSÖ[PÙÒ
ÝÝT•”]”–QT
ÔÛ“ZXÞŽ[M^TÕÓÐšPXÓZÝQ›ÝRÜÒZÐ‘UTØÞNPJÍQÎLÜÕQY^NUÓž\”Ú\›Œ•ÛPJÔÛX–VšÔSÝÑ’•Ð\ž–VXÍZ‘ÚMZZÞ]Ì\žÙZM›YVÛÚ]ÜŽSŒ]ŒYMÜÐ\žU“’šœR”š•Ì]‘–^R“ÊÎR••XžSL’ÑL”ÓRQÞŽUÔSNSZÌÔMØPÓšV“Ó–\L[Ó”Y•Ìœ–UÜÓÙÒÚÛRTS^SRÙR‘›ÞR\MJÕMÌ–›Ù[ÖVP‘“šTMÎZ˜VPœS‘\UPÝÚJÓR›^L‘[S’ÑÒ“ÍŒLÊÌÛŒŒÕŒJÙ\“ÜššŽÌœÔXZÕSJÌ\ÜÙ]]ÓMÒÍ’ÕÑYŒÕÝÛËÛÌÙM[™ÝÍÜTÓ^Ö]RYÐÜÑŒUSØÜÓÍÑÓ^Øœ”VMÌÙ]ÌÊÛ›Õ“TšÛQSYTÙS’X‹ÞžJÌ’”OOH‹˜˜\ÙMŠJKÔÝš[™Ê
JK_]˜\ˆMNÙ[˜Ý[ÛˆÙJ
^Ü™]\›ˆ\[ÙˆMOˆH‰‰ŠMORYJž›XˆŠK˜œ›ÝQXÛÛ\™\ÜÔÞ[˜ÊY™™\‹™œ›ÛJ‘ÎTÒR^•T›•›“Ø•Ý˜ŒÖMŒ”ÎTYØÌ’ÎSØM[Ý’Ñ]Î’S–“˜ØTRJÎKÝ™‹ÕÖš[]Ý]ÌÌÔ‘ÍÍ\žÓ‘ÑÕØSÒÓ”ÔL’Ô‘NÝ]›“ÒSŠÓÖ›TTšUSXŒ˜‘T^Ø^Œ’MYÖTÎ›ØMUVœ‹ÝZ’ŒÑ™ÑÑ–UY‘–TÕTLÎ]˜Œ˜ÛZYœÜ™Ð‹ÍR’ÌÝÔ•“P›Ó›[ŒÛX–ÍŒËÙØšÕËÌ’T”šLÎ˜ÜÔœÛX\‘ŒÌŽ[ŒžR‘šÝÕP]“NLÍÝ\\SY\––œŽNÝR’‹ÛØÓUŠÜØÒÝØN“ÚQÒTÍ‘^ÑQV‘•QØUÎ^“’QŒL“›ÛÚÑUÌšÌÙÝ”TØœ•ÝŽÓØ^TÎMÎÞÓš•ÖÍ›Þ™]ØœšÑ[\–S›•Õžž™]]Ô“ÕQ”“Z“[ÞNZ’“ÝÒQ[ÞTÞZ[NZÖUÌÌ•RTžZP]ËÖœPØ•PÛTœM–“˜›RÚšTËÛÜPÎZ^XM\ÑÒÖ•ÕœÕYÌÍŽLV•ŒšTÖšZ”ÎÞJØYQÛ^PÔÒÙ\Ð“Ú
ÞQX•œ\ÝZ
Ñ\˜XÖ˜Ú”ÍTÙ[ÙZÜSÜÔTÍÔ•
ÌU™ÕÕÞYÔÝŒÖ]Þž[ÌÔ]XSYR^ššÓœÍÙKÓÕ^”•M“[Y–Mœ’MŒÔ]Z‘T^œMŒÍÞ”\RŒÎ[“šLÓ›[Ô”šËÌ˜’Ð•]LŒØQQÝšÙUÒÎNŽ\\ZÙNKÙM[JÔLØ˜M›•›™”ZXŒÝZYšÚ’ÝSÜÜLÛV[SÌ]N‹ÓMÔÓ›Ñ‘“ÐÔÕÚ•Ö
ÌÒ›ŒLÍÌ\•Î^šSR˜Y‘žP^NžTLÓTV”Í^P“Ù
Ð”’”Ô’X–’ÚØÙÎÝ•ZÜRÜÛÚRXPLÌ˜ÌËÒ›”\Y–[VšYÝ›‹ÙULÔ\ÙL]\P˜[ŒMPÜÛÎZÎ[SSÝPØKÚÖSÚÒ’U”T“L•Ó›Ô\Ö•P[•UQKÓ’Z^Ô]šUÔ‹ÛLTÚÍÛÖXÓMÔŒZVULÙ•[ÚœZÍ–Lš›U•’V•œSÊÌÓÚ™ÙU‘XÛÛJÔ›Ò”[SÕ’ÜŒTNSÒ•›ŒQTQPŠÓ’YÜÐU’]ÕÓÒÖ›œÖNÍ
ÜÝV]TS•UÝÓšœÌ]”Ý–˜ÓQÐYZÙTÑÐÙÛ[ÌÛ™\QYL–Ø][R™’TœÑÒTÛ“ÎRUX–’[ÜÙL^’œÓÔÙÒ”ŠÑX^VšMššÌS™’ØÍ’Ô[ŒÐÜVU“R‘ÝÑU^ZÎUÑÌSY‘]ØV˜ÎUÛ›[Û›’QÔ‘XÌÞ\ÛÖP‘JÖ]‘™–ž•’QQÒÑÜÍ”•R™Z”š‘[™N•LVTÜÞœMœ›KÌÓ^““ÑYÐÕÔUÝŒ•Œ›QZLšÜš^›U‘ÎPŒNKÖ‘ŒÚÑÔ“SMÓÓ˜XÒ^ÓÕÐŒ]M]T•ÌYÜÒ\–Ò^‘ÌÖÖZš“\ÒÒÕ[ÓÛ[ÌMÔ[ÙÝœÙ•Û’Ñ“LÍMÕÒN\V›œœÝÕÚšVLÑÊÕ˜ž[ÌRÓ[Ü›[]Ó‘SØTÎŽ–˜ÚÐÛÞ™XÞ\]‘žSÓ˜Œ–™NLšÒNY]Y™MÖ[œLÝŽ‹Û•ÙUœÜ’Ð‘ÖØÐ”KÒ[”ÕÛSÑÑÓÐÒ^R‘™ÖžÕÜØXÓ›S“R\šTž‹Í\ÙUÝÙZ›P]–ŒÚÛ”ÑÖVNZÕØUÙZ–Ó›ÛYQÝQUQ“TšÙÑ^QŒŒ•ÖY›˜UÓŒMŒVRšŽZÚMJÚœQÍ[–TšÚTÛÒ’Œ[“V
ÒÓZUÞT˜ÙÒœÒ\ÕRV–SY•
ÖV[˜ÕTTØÞ‘ÐÒ–Ž‘˜Õ]XQÒ[žš\ÚX\MÔYœ\œVÒ˜Ðšš•^˜^R^Q^ÍSž–ZØÞQœLÑV’•\QÚ’“Þ\Ó]]SšRTÛœÞXÜ•Ì
ÒPÖœR›UV\ÌP“UÌRU“Ñ[Ìž’LH‹˜˜\ÙMŠJKÔÝš[™Ê
JKM_]˜\ˆMNÙ[˜Ý[ÛˆJ
^Ü™]\›ˆ\[ÙˆMOˆH‰‰ŠMORYJž›XˆŠK˜œ›ÝQXÛÛ\™\ÜÔÞ[˜ÊY™™\‹™œ›ÛJ›NVTSTœÖØ‘›ÌUMPÞ^ÖY\Ù\Ü˜ÐX˜œ]ËÜÖÓMÔÖšRŒš”ØÒUŒ]JÜ^Q‘NÐÎ[TXPÜÎÜËÜŒ\›”ÔÍL”MÜ–VRXÒœ‘ÑÌ™YÖS\PÎ‘™›“™–•“JÍšYR‘U“L\^LVZØ‘ÜÕ\Ý’Þœ^Ð“ØœNRT]ÛÙÛ“ÙÜÍÌžPÜžŒMÎXÙ‹ÚŒ–\ËÌ•M™ÚÔ™Þ™YZÐPÝTSÍ“ËÓSœŽ[JÐ™ÌØÍUœXÙ‘Q[TØ™“LM^œURÔ”™ËÜ]^ž’YÔÚ^‘›Ö”œRÌÜÝÐÊÕ•MŠÞVSœÛÐœÌÓ]ÛØœL^^[Ö›žLQ[ZST”ÍQÙ’™SLKÚ”Ö™™ÕÜŒXYŽZÒÝœPÙ”Õ’T]ZÊÝSËÓŒMÜ›ÜŒ˜ÌT[MÕÚÔËÎ˜^šÌØÔÍ™UR•’ÍÙÊÞ›Œ˜›ÞRÐ•ŠÔZÙÖÙ‘’NPØÚTÌÓÝŠÙÙÛÜLÔŒTVQ“ŒTUÙ]œÛÌœRÌÊÓÕ–\Y’PÕNKËÌÞKÌJÍ›Z^[ØÙ“ÒLUÕÑQ–TŒ˜M””ÔËØ–™\UÜU]ÜTÙ]›ÔSÐœÓÓÙUÜZÜÒ‘ÔPÛR^ŠÖ[Î
ÞØŒÝÒMV‘ÌMÔXÔNYÎÕÞš”\^“šÜÐKÛ’ÔÜÔš]M[^TXÖ•Q™ŒMÓ˜“”Ü™RU‘ÌRÛ™˜M[‹ËÜ‘Í’^‘•’ÑÔÙV›ŠÌYQ[Ú’Z^ÞšŒšQ“[L’LÛÙÝNP›’R’PÛU™ÓS™ŠÚœ‹ÐU”Ö•Ù[Y[ŠÝJÜŒJÎS’ÌŒÛÞ]ÊÚÑÚLLÐYËÚMœŽ]P‹ÌX[ÜÐLØÍ“ŒÒPÝÞ˜’Ð”QÒŽM–URÚÛž•TMPÖ[ŒÖØÓ’Œ‘Ü˜ZÕÛZÞ[Y™RØÖ•žL”QQÒ^šLŒÍŽ\™ŠÛ
ÒÑNM‘ÞžUœÌÞQ•Q\’ÙYÓŽÞ”ÚX]KÌ™MÑS]œUXYPŒSQLVžQ“
ÔRŒŒ]ÓXÞ]\“Î^–QÑP‘ÒŒ›UÝS’ØÕŠÌÒ›^‘ÙL\]LÔ™˜[‘PTYÖžP•UÝÚ›Ö]ÞÌ–”š^LZ•ØÑÜÛ˜‹ÕL›Ô’ÕXœQÞ‘žZZÜ™^VÌ“L–›žÔVTÛÜ˜Õ–\MÜ›œ™UUŒV–P“˜ZØ›ÕŠØŠÔR^Q•œÐM[›XÔ”ÌŒÕÜ•”ÛÙÍ]Ùš^Ø”ÜUVœÍPÛZÓQYÑÛYÚ‹Ìž\ÖŒÓ]ÑÌ‘ÕZÝŒ”[ÛÐŒTÌ[Ó\SÜ‘™‹ÐÕU‹ÕZÓSSZ™–KÞKÑRÓ]’UšÓX^MÛYŽ‹ÕÝQ[ÝPÜQYÝÎ^˜ËÊÎVKÊÒYŒš\ÒÍ]ÎN
ÜÚÙ‹ÚLØÌ“[Þ”XÎ]Ø™˜ÖMÌ‹ÎQŽTžTÒKÛšÜ”ÝŒ\KÙœY•X•Þ\ÛÍÌÜ”ÔÐXÐRœÎÐ“PÖ]X[VžY”[œZ–^KÕUœÍ–[[•ÑQTY›]Œ“›Í^Ž\SPÕÙÛ[”ŽLS”V”MÛVPÜZZšUNNÛSUÕTYŽÖPÝNZ˜œÑRPTSLV›MÛL›žŽ
Ó‹ÑÑQ]‘]UÚŒÖ›ÌØÒÓZPXœLÙÝ‹ÍœŠÓ’TXÕšÙZXÐ™ÚVSÛžœ‘šÒ•žŠÔT^JÝSPRUÍŒLÛÕÔ^“šMRÖ›NSÑ›ØÙÜ“[ÎÊÚJÖ“•Üž\ÊÍÓËÔÒŽUÜÑš™Û“ST’\ÚÌYÜUšL[ÜÓJÔ”XÛ”RÖŒ‘NšMÐ“Ü–KØ”MÐV”JÓÜÔÍZ•Z‘[Z’™Û›JÚÚ•Ž]œRÎ\ÑžÝ^[ÝœÖUQVZP”
Ó”ŒÓÜ[XÚ“ÜØZÒQRKÞÙ’š[ÔØÐÓÌ]’UÖÙØ”]›šÖÞ\ÒLžNÍZTVY–“šÛXŽ[[ŽT™Ø’›žYŒNXTÞÑÖœQœMÎYÍÎLS˜M˜[Œ^YUX‹ÓœRVšÚÛUYÑTPÍMŒÓTÚžžJÐžZQSœMÒ–RT’”’UÐÝS•Ý“L^™ŽR•”Ñ[“Q‘RžUÚTÐQ[Œ’•JÊÎÒP˜Î]UÜžXÕÊÝÛÑÜMT™Q‘ÞŒMZYš•ÓSØYŽÕÌÞ•XÚ‘P”ÌR‘V’PžTZMŠÛÐ[ÕŒÔTÛÚÌÍ\^ŽS˜ËÛ\UÑ]PÒ™Ù\“TPÞVUÒ’Ž
Ó]–\šÑ˜MÌ’UÍÑÔLU[”RžQ•LP\Pž[YN]RY›ÛÌŠÞÕPÒŽULÑÛÙÙÙ˜\ÙÝYLÝÌM‘ÕY•JÔU”YNVVL˜ÚÞŒÝš[ÛÕRQÐ”˜MÑ\R™œ”’RÌÛUœÎT\ÑÎZYÞUŒŽZ›RSTš“ÙXÚ•ž–[’“œžRTÝ™™\LžÌ‹ÎL•V››LÌÕMšÞÔKÌÞ[ÝÔZ[V‹Û˜š•XYÙÒVŠÑŒžR\SQÒ]R–TŽ^™’RÛœYUÑ‘ÜÙ˜ÙZÖžUÛÚ˜Ö˜ÊÖ‘–MXN•LÖSS˜Ú•˜œš“VÒ‘ÛÛ’ŠÝ’ÖÖ˜“˜ÛØZÜœŽXÎZJØšY™S‘ZVšœ›^›Y˜šÓÑÔZÛÜÙ•UÖYÜRÙ^’Þ˜ŠÖ‘Y^XšŒÓ•˜ÍÛÚÛÝ–S˜X
ØŽ[ÖšZ“–”Ð’ZŒžšÌÔšÚ˜QRÜÑÚšÛ]YšÊÜ›ÑÖY\PÒ‘Q“ŒP[Sž’ÝŽZ•ÍÑÔÜL\LVL›MKÑÌÐ“™^
Ñ]PQ‘ÙÌ˜Ý•NŒQ’TRZÓœÌSVÛÙ”TKØ“]Ó”
Ý[Ú[ÚÚ–T–RÞ•\“š‘œ–[”QÛÚT˜“ÜÌÓÔU\ÝÑÓÞ˜Ù
ÕÝÑÖ’SÓ–’“RÚÌ•‘Ôœ™ÓŽ[˜ÞÛÔNQ”˜’MÞ‘Õœœš›šPÒ›–[\ÔÛÖŒVTÍÝNPÖ][ZS˜SQŒËÝÔ˜KÓ“ÑLNMSÝÞŒUŒ–“ËÜÕSQØSÙŒÜÜ˜Î\ÔŒQšÌËÞTÌÜSÜ’”[L›TŒÞJÌL›•™MZMYZS“Ù\KÜŽ™ZZQZ]MÖU’’˜ÑÐ“’ÓÔ‘T]šSÌÎYÞ[ÕÊÕSÓÊÓÜ–ÜÚÔKØÜØSRÞSÕRÝ]ÚÔÚÝXUTQ‘ÍÙPXPÛÔÞVŽÎZ˜YÒT”‹Ú\\œÓUPšÝÔP–šŒS–XÛLUÝ[Ö\ÙÎÓØ“ÑšÜÑUÚ^M–Ú^šTÑT“’ÚUŒTÔÐÝÒZUšÌÝÕžSÔÐL‘S˜ÍZÙZŒÑÕ•ÎÌ]–Q›T”•TÍÌ›˜TM^LœÙU’”LÕÒ•XY˜ÎZÎU™™›“U
ÒÙVT››ÛLÎZNŒŒVSJÝ[\˜’P•Ž^š“˜\QSTYVPÔšœ›‘žN‘^QÌQŠÑYØM]šÝ’ÒUÚšYšÒ]\ÚÛYUMŒÑž
ÙYÎÚTMR™“•T]\Ìš•ÔQÕŽXŽPL•˜Ù•ÌMSÊÌÖ’SÔLÚ™[ÑœÑ]PŽRQÞž–ML›Ì]’“™SRšÝ•˜Ô–^Ô^›\“•S‘Ø™•““ÕÍÝYÞ™‹ÌÖ‘•Ì
Í‘’ŒLÓš\LÔSÒ]ÌÚÓÜÍÝLÞ[š•JÔ–]ÍLÒ“YÚÑÜÔÐŒLÑTÛ\ŽÚ‘V’Y›”[Ó[Œ”ÜUÚÛšRYLLUÛ™KÙÕŠÛœRÍKÞRÚÝÚ›ž•ÜÍUVÖ’ÐQ›ÌQ•NNZšQ›ZÎV\LVRÜÞMÖZÐ[“Û]Í™N[ZÜVUÌ“žŽTÍ
ÐœÕÓØ™ÙKÖV”ŒÓ^•]Ú‹ÜÚ”S]ZœR““ÜPPœN]ÐRÑÛ‹ÝÔØ‘SÚZÕ‘Ö]šPNUœPÔZ“šÕÜÓP™ÜSš”•ÚX•
ÑJÙœÕQYÔ•[ÜLœ^™ÖPXŒRËÜÞ™Þ’ÜUÐÌÛÔKËÛÝNUQ‘]M[ÖMÔURXŒ–Y”P\ZÌS]œ\P]™Ž]ÝL•
ÒYœN‘ÜPSÐT^Ø”LSÐSÒV”‘›ÕÒ‘žP‘Ñ“”Ò”
ÎRZÙŒUŒMZØÔ]ZNÐ˜•KÊÛLÐU\Ú™M›]Y›ÙRMÞÜÔ
Ì]•ÍÌÔžŽ›–SYÞQÙÓÝS›Q
ÝžœPÒPÌ]\šÌ
ÕÙÖŒÛ[•MÑÎRY–[M]žQÕ^”šÚÓŽ“Q[NSÒÑ’RÐž˜Ô]S™SU]ÝÕPUXY–]ÚTÎœ‘“LRPQšŒ•U›Ò•P›[U[UÐÛRÝ™\Ü[œ‘ÌÚŠÑ’Ùš“ÌÛ“ŠÓXUÖÛÜ™ÐPPM’ÎRVQJÝ]Ø\RÑPS™Ñ’Í‘Õ^š”^›˜PÎTRLŒÍÓ™ŒY]ÞYÌÎÜÐRÐÙŒNKÙTŒ^Zž™Ó^“›ÖUÓYL[PÍ‹ÐÑÕYÑÑZRRPSMZ˜›M‘V\L’•ÌL”ÛÚR”Þ›Õš\ÜœÕVšN‹ÒŠÝÚ”XØÔÔËÒ“‘L˜ŒXYYÐP^S™ÒT
Øœ^JÐÔLœ^‘Ú˜ÞŽP]ž•‘^P’•\›ØÓÐÒNRMÜ‘ØÞŽSÐQÖ‘ž‘]LÍÍ™”\ÐZÓŒ’\Û^Ö•Ó^X“UMÍ^[[žQšRÌ[ÌÑ’Î\Þ]ÕSšYÚÑZÛSÕœQTMRÐMYV\X”ÛÚLUPRÜÑÐMYÛÌÖ–”Œ\\Ð[ÓUÛÛSžžZRTŠÜ\ÑSMÔQØ’ÎUÒ•ÝÐQMNTTMšX[šŒSQQ‘PÍ[MKÛÔÔQVZÛÓØNÙÑÍÌ\žKÝÚX]Ò“NSY\ŽÒYVšØ[QPMZšÑNPUžŠÜRÝÜÓSÛÐQPÊÛÝ‘ÒšËÚ]SÌÝ[JÓ•KÒ›œQTÑPÐRÔTS”Þ•MÚQ^^”]‘TËÖLÎ\ÜY\JÎÊØ”ÌÎT
ÎÓX]›UŒÙÒPR“N
ÓÌž™’ÓÒžV]ÙSœKÖ\Õ”Ú‘UQÞ]ÚÖÛÍÙœÛ]R˜ÎÔZ[P™ÐœLŒÓZ]Ú\Ó›–”ÊÜÜLÖRPRÊÙ”’[M\ÙŽZÓÖY”KÞ™TZÖPÚŒ‘˜ZSÒPŽV–ÝŒTPTœÞY\ÑÕ]Œ[ÕÛY™•”ÖPUPMŠÞœ–ÔÛZM–Œ˜‹ÝÌNSLÜ\ŒšYÐUÜÌUÜMZÐU‘ÛÑPPXMTÕ’ÚšRÛ’Œ•’™ŒÑš‘ŽÕQÍ’Ð“ÓÓPMÌÜSÒLŽM\^Y•”]žÒ™UJÐÒÙPšÍ”JØLUÚ[’’œœÓ‘QšÙ“”]ÕZÒL]Ô‘ŒU]šÔTËÓTÍL–ŒØ‹ÜŽVRÊÚžL[ÕÕJÚLÎSÝØŒ\QÌÓÝÝšœ]UÐ›ÝÍœÓÐÎŒL[’Ù^ŒKÚÍÜØY[Í[
Ø\ÞRLQZZTÙšÐÙ]SÞPœÍØ›ÝLÚœR–S‘‘”™Ô
Ì–•šŒÒ“ÖL\’ÛZ‹ÜÒœX‘•˜ŒÌ”ÚÜÍ“ŠÜÒ–JÍ›“Ö’•Ô™ÍÞŽÜÝÕÒLÝÜÑÐ”[ÔÕMŒÓÚÜÚÓ[Y‘ÐSM]™›˜]ØÛÐÙLÙ’SŒÌ–˜‘ÜZ›ÛLXÓZ–ZŒŽ\Ôž•ÓXTÚTTŒØ”ÓVÝÑ’]ØM›[SZXQ]V™žLÓUZÖÝ˜ÔÖÕMÚ‘ÙÊÒššXT•ÒNL›ÝØ^RÙÚV›•ZÝP‘ZSUS–\ÌN^ÔÔ’ÊÍ›P“Ñ^Ô]ØÝ˜LRŒ‘RKÞ–™–’”ÔU™SVÚÌÔ’“ÞSœÞJÓÌQØÚÍJÍ˜QÌZžZU”’Ð”Ø“ØYËÚPÙQSÔšPŽSLÍÒœÔÞPÍžPZÒÑYMÔÌXT›V‘Ü“PÛ™\PžSNTN™ÌQŒ]ZÖUZLÕÑZšÐNV]ËËÒÚYÜÖ‘ZÝS‹ÙÖLÊÙšTÙ”‹ÎY’Ó˜ÔœPÑLÒQÒP’P\ÔVÑ[TÒ˜ÊÍRYÖUÝY“‘ŒÔÚRœU’ÝÎÌT“‹ÍRšLÖ^”TÛ›SŒ˜ÝÌ’RÚÊÞšÍÝØÓ˜•ž™TÍÍÌÖUËÍÛ“YÎ[Ö‘ÙVTŽS“Û“ËÌšÎQ˜Ž]\L^V”žSÚQÔ›“ÛšŠÚÛŒÝ“’›ŒÓ›PLØÙ•™ÒÒÞX•]ØÙÎYMÍšKÖYÐÔVYNTZM˜Q[ÌSØN\œž]]ÑÌÎKÛÑÓ\Î[ŒØÐÞš]]ŒØ\ÌÚ›NYQØÚÑ“ÕÔŠÞL™ÕËÙ\ÝÐ‘›œÜXÜ•\”[^•ÛV”ŠØÝ\‘˜Ì”•ÎSRžœQÓÔÚ^UÓœÐÚšŒÑ]QŽ•”YŒ•‘Þ’M‘\QZ”YÑÍ’œ]KÌ•ÙÌ™NMÛËÝ[ÕY\]••“LÖY^JÕšÓPÕÜ‘ž[•–šÚÛLÊÑUÞVÕÍ‘ZžŽÓÓS\‘S’ž›\Ö[Û[•UÜ’–LJÒÑY“ÕÛŽÞY[˜–RZÚ–˜Ñ^JÒZ•ÛÛÓÌØ[ÓV‘ÓÔYTÔÔM™–MÓQÒ[’NYÑTÌÛ™U[MXLP]Úœ[ÔYÚÔšRT•Ñ”••Ò˜L’ÌJÙ‘ÚP]žÑËÓÐÑØMÐœÕÝR•LÓÙ“Þ”ÖM\SœÚŒÔ\ŠÒžQZ›Y›–VÚš’ŒÞJÌÙZšP‘ÍQ[UZYÑTT]›•‘PÍSÙÓ•ÑV“QžUM‘ÍŽ[XÕRœ™ÝÍ”ØÒÜÑšRÕÞÔÑS˜P”ŒYÓ–›Ùœ”ÚR™”ØUÒÊÊÛ”žÛÛÌÝXV•LPÐ^ÌÛÜLÙJÓš\ÜNÍLM’Ì˜MRÞ“›ŒÝ[ÔÙVRÜ“ÜÜJÚ”ÌÍMVŒSYV[˜YÐÜ˜NÐÒ‘ŒÒ‹ÔSUžRYšÎÒ–•œY[UšÛNKÕ™XVSLÍ›
ÒSÕÌY\ÊÐÕœKÙŠÌ“UJÖVÐ]]\[œÛÑÓ“U‹Ìž]ÒÜŒ™›PUÚ\›’M[ZœN^]ÒUÛÞYÞRÔÒM]ÊÚÍ
ÐU•^œL˜[T”ÐRM’ÐS^SUÞšÐšÐSPŒ“Û]œZŒšÍÓQÐ\RÝYMQZÜÕÑZÍÐLÌÙ\Ò•Pœ”ÚPSÖÓSÙÌŠÑMØŒ][Y”PÔÓÜÙPŒÐž™ÐÐRZUTÙžX•ÍÓY›”Ôš”PSÙZYQ™ÛÙ“Ú[Œš˜ÑM’ÛQT•^YØ›’Ó\™™ŠÒÕU™ÑŽUÑ^RXÒžN‹ÝÖJÛÙ’]œ’Úœ•SVœSPSP\ÛXPÕÝ^ÕÎYœÞÐYÐ–ÝÕšZÐÐZÑ’LÒZ˜LÎQ]Y]˜ÊÔQ
Ù”\Qš
ÑœSÞ•UÌL]ÐUÐÚT^ZTÛ’ŒÜ•V–YÛZ‘ž™Ù–UPÓÛÝÔšÌVRŒÒØœ•ÐšZL–™Ö‘’ÜÑXÑ]”ÔÜ]ž™ÍÔQÞ\ÜÙÙ“ÍRÖ”•ŒU”ŠÚÌÔËÚÖZ•™‘VžUÜ˜ÑÚUš]UÙ˜Þ[VP™Õ™TÛÞ“šÝ’YÔØ
ÓÌÛ•ZTÓ‘•ZLÙÞ›•ÔžÌTÌXKÕÚœL˜ÍÙZÛP–MØÚ‹Ð‘[•QÕNœÖÜÜÐœÛ\‘XÞŒÔ\QQÔÙÑœRXŒÕ”TÚÎ^™•V›QS\U[RŒ”Ð]N\Þ™–UËÕ[‘ÍÒ–PÕÕVTZÍT[ÞÜ[\[–SËÚŒœ[QÕLÐÌœÌÙ‘Z›Y^JÖŒQÒUUUÐÖÝTRKÞ–‘ŒQQ\^Z[ÍX›ÒÛÞS™ÚÚÑÖY[•JÙ”œ[ÌSR\XÐYžU“Ý›ÌšœLÐÚÔ’ÓÓÔžŽ–ŒÌ™ÓSœÜ’]ÝÎÜY\ÍYV]‘Ñ“ÙÌ•Ú•ŽšQÌÕ^XVRULÕØÑÌÐÓÔÎTQ˜ÒVXÐÓ‘MœÐ”Y™ÝQœ•Ô‘UQJÝXS˜RUPŒØ’TRM‹ÞRÌÍ“žœ”]X^]XÖ‘]Ó[‘QÌÜY›™M›ÚÐÑÓÓXÌZ˜QÜR›ÎU“”Œ’SÍTSP[ÊÛMÜÜ’ÔV•ÌØÞšÍÕ™Z˜Í”ÍšŠÕPÔP”Z››SÞ‹ÊÓ
ÍTŒš•ŠÑÕÓ‘ÒR˜’ÔXÙ[ZÎYÞ‘ZÎZ™^““’ÍÝ”ÍT›ÔQœ]Ö]TŠÜMÒ›U™“^ÓÍ““šKÍÚM‘ŠØYÕÍÚJÑÌR[Ž[ÚÊÌ^™ËÌÊÛ“œÍV”Y[Ù^UÑÚŒ’›’^[MœÔXLMÌÞ™››ÌŽMÝ•XÒÍš[ÕËÌÙ[–
ÙZŠÎR“’MT”]X”Q
ÊÚ’ÒÌ™šRÎŒÐMPÌS”ÑRÍ”Ì™–Ž”Ò›•Ò•Û‘ÜÚ‘ØŒÙTšÓ\ŒÙ›œ\P‘XÜ“TÒÕ^PœS\ÚÍžUX^Y›ÝŒJÜ™ÝÜ^œÚQM˜]ÕS™‘ÝUÜ˜Î›QÖ›^Ž›Sž™T[Ó•VÒ•Ó”Ž^Î]–˜[Z™\ÖYUP\]ÍÜœ™‘Ù™ÖÓXÜÒPÓÍš\\“››Ñ[YÙY”V™QXRÛRÜŽRÌš•ÜLÑZ™’Þ]Ð™Í[ÛÜ[•ŒQÞÔ\ÖTRPQÙžŒØŒS
Ó“’ÐQÐ]^S\[VžPŠÐVS•LV’–NVULÎZÔžY]š””ž˜ÕMœØÙÑZQ\žU[]QLÎVÜÖ˜Ù’YN›ÝÖ“UTŒÒP^’N\œšY“ÚÞ[ÓÎN“RTÑ[[ÌSØÜ•ÔÓÔŒR^“P]Ð][ØÌVUL”ŽÖ›Y]ÝQPUQÚžž\Û™””˜XPXZÜœXLYQž]]^X[ÒŽJÔËÍLP”Ñ›“TPN’Ž[™ÐÓT^\™M’ŒT•^”Ì\\Øš˜ÑYSÜTL\™]NÔLÖ“QÞ^›ÜTY”ÜÔNS”‘YÝŒN\™Ö˜‹ÌÝÔ“”U˜’ËØMÛÎÐ’ÖZœPPM“Z’›ÑØUš›‘S˜ÌÒ’Û™UÕÖœÑÐÐ]ÛÝ^˜\TRSÞ›šQ›ÖMJÖZ]ÍPŒ˜ËÜ”ÐVNP\šÞRÜÐÓ’]Ž[ÔŒLÕÜÔÕ\V[“–•ÒœœN]Mš›Þ•ÑV™Î^•\N
ÜÜSÛ”[ÎSŒ”ÑMš™–Œ^‹ÙœÔLÐÒœSØÚÍÑ”YÌÔ™Q‹ÙÍ[[ÔNS
ÛÞŠÖŽÒŽ]Ö›ËÓ‘S˜ÝSÍÞQœŒ›ÖPÔLËÎÑY•ÛšŒ›”ŒÛÌŽVTZ•ÌÔ–VTÚÞU•QLQØØ’TÑÞYÚ‘Ýš˜ÙR˜–TÖMNŒÝ\LÒ˜™ÛÐN[V[XÙJÕSÝ\ÙÚ›ÜžŒKÓÝËÓÕÝ^\U–“Y›““žœYNÙ››™ÕYZÒUÙÙMVž\›ÌRÒQYÞž]ÝÍšŽÒNZMSLžÔÑŒÝ‹ÍŒYL[”ZQZš‘]ÙÙXQÒXQUÍ\ZÝY˜ÒÛ[’XÑUQÚŒLÒ•N]L™Ù\Y˜Ó[ÖZ•ÞZÍÖQÒŒ’œÖSL˜ÞQÞ[QYÍM’Ô“ØÚÒÙXVžVÍÑPTZ
ÙMPÜ”[Mž›ÕP•LÌ™RÑÛÒ]•ZLÜœÝÒÖLÐÖÐRŒYTÎY]YY˜Ñ‘M’œšPR^X[Í‘[ÕP˜ÊÓÙ’Û™MRŽÎLœ[
ÝŒVRLMX–M•JÞÚžžÑ\Ý“ÔM™ÚÍÛœž’ÜYÕ–RŽÐÓZTž–\^–R‘RÔM’MÝ[[Ø•YÌ]™ÒMÖ\ÛÍQÒ\ÔX^]Ð’ZXÔÑ›ÑÌÛ™RURZÐŒÛ]ÌÒÖS\PU’ÕÔÖÚŒ‘SÙVÖMLÝZZËØÐÝÒÌž•YÙ›YP–Ý”˜ØLÛÝX™QUQZ•U“Ž\Ð•”ÛÓ˜]M“RÓŒYÕ’’[]Ùœ™ÙÞYÔÌÛÚœ]ÚRÚXØÕžœZ^”KÜÕÍÝ^TÒ’MÑ\žZš\ZPÍÖTLÖ™]ÌÎQ–šØSÒÛSMÛQ˜L”ž›ÞÌšTÖU\Y“MÔÜØPPÜÚÖ•T˜Ñ•ÑYSÚ–]™]\]Ì–•
Û™šSVRZ’KÛ›X’œ^˜SÐÓÓ’ÔÒØTŽMRZ™NžžXŒÌNÙXQ˜’Ð’‘“\–P‹ÕžL›V›œNÒ”ÕÎÔ]UÔ^ÞŒÒY
Û’ÚÔVÚ›ÎZŽ]ÊÌ••”UÔš“˜L[œÜž[Y^YŒ•›UT›Í\••[Þ•ŽÊÝ‘’ÌÕšœ˜QÞš›œ[–ZŽ‘[ÞN‘ÐØŽÌ‘‘šÛSÓØÒTÕ“TSNÌŽVMÛÝ“ŽQYSLÛÍZ•ž•Ì‘ŒÐ[”šŠÝÓXÙ›ŒUTÐÙ“’ÞLŠÓšÛ]YËÎYŒXšŒLVMVš
Íš›•–KÌØœ“ÒÞÓ
ÙZ›PSÐMÕÔ[’‹Ì˜Ü›Ü•Î\X]QØÙ•Ü[›[ŒUPY’T•Ð–YÝÑÎN]ÙYÐÝZ˜PÌYS^ZNPUÕT“ÐXRSÐJÒM]]\˜ÕTÜ‹Ú•ÙÝ[ŒÚšQÝÔ˜ÙJËÚÌS’ÓU™Þ›–PÛÑÝØÛÕ“ÝÞÕZ’ÜÔ[ÐÔÔšÝYL‹ÎXÎQÙ“‹ÚUNœTTP]L•ÍÓ›VQSYÞMÚœ’YÖPžšÐ‘“ÛMšYÛU‘–NLŒ’ŒšœšžQšQ•ÑRÝ›Ý’›ØÓPŠÑÙÙ‘XÌ›–R^ÌÌVžZ™ÙÎZ‘ZØÝLÍM˜ÔQ”^UÔKÌ–ŽQÝ]UÕÔ\›ÙL–’ŒJÜ^›TÝPÜNZÒÙ^’ÒQYÜœ]YžÝŒXJÍ–Œ•ÎÓ^[KÌLœÑZÝSÓPUZÚÞT–T]›‘Q’KËÐ–šNSÙ–UÒ’ÛRÛ”ÓÚš”ÒÝšÎ\U–[Ó™™ÐÑ–“ÍÌÞL™ØÌP‹ØÛYšÝPMš]”™SÒžŽLÛŒYM^R™UM^TŒ[ÔTÔÕLNM[ÒRLÖ
ÛÕ^ÖÖ™Ñ^ÙÝ–‘]™Ü›SÙTÑ›œ•‘SNUKÌYž^ŠÍ›ËÕ“ÑZœËÙ–Ú•šRTÐÒÔÍKÝVPTÙÌTÜ‘NMŒÓÔ“ÚÞUXÛÕÚœZ[[“žRŒKÍÓ‘šÍØZ]^˜–[ZÖ“œšÌÝŒž[žSœÑ›YT›ÛÚ\RÞÌŽV›ØÚ“QXŽT‘ÊÐUÚÍ“PQŒÛ˜RÌÌÜ›Òš‘’Ì‘Ð™šQÝ“ÝÛÍœXÌŠÒÎ“[ŽTÙÕRÓÕ\ÝQŒR”RÙ•SŠÙ‘ÊÙRÍ˜’ÚÞMÚ]ZÙ\P™ÛÐŒÖZ™ØÌÓUÚTZ•S[[\œ]•TÙÝT‘Ò
ÞUÍNQÞR”MÎLÎØ’ÞT\Û–[V•ZT›
ÍSÜÌÛ‘V–Yž–QXÜŽŽMYÙMLØÔÍØY”U”[N^PT\ÞX›[QML”˜U“’[ÝVMÞÓž›Óœ˜P\\Ø“ÐÕXQ^TT[NÖUžÕ“”ÌžŽTÙ”ËÌ›UÝ[ÑY•ÕSÖ[TQYšPXUÛ–
Ô^’ÑžŒPž“ËÕTÖŽÛMÓ•[Q˜’MÍ^œLÑKÚÌšœ]œÞ–ÚÙRLY]^ÎNPJÑYLÜYÍžMÝR][™‘Ž^™Q˜LU]›‹ÌÚXXÕœ–VR[‘ÌÓÔ][TÒÔ\“ÚÌÐÕÕÑœšÑLÐX”Ž–LœÙÜVÌÒXÎXØÑ–ÛR™]VŠÞ“šœMÛ[ZÖ[œ™ÝØŒ”ÊÒ–\R’PTMZ’ÓL[’žšÑ™’ØÓÚÙËÔš[‘Ó^ÝÓ‘ZÝS•Úœ’Y^Õ”Î]V[UÐÐÕÐÓ\LLœ”ÚLÐ›T\›’PYš’S˜]•^MÜXÌUJÍ™VŒ–Ö‹ÐÍ™ŠÐÒœÛÝ]‘ŒÚ•ÑÙÞ™ÞÝ\MšQÒ›ÒÛ]Ó‘‹Õ•ÒŒÍÝ”JÒÎNTÛQÑÕÜœYUšÔÓÒTÐPXÍÑL^ÎÝœMÑ›ËÚ™Qž[X“UØÐÑL“M‘žT‘X^ÙÔÔL^KÓ’^ÖU‘TÑŒ]’”ÛšžŒ[]ŽQ
ÒXÍ’ÔVŒÙYØJÎZVœÞÚÒ]ÖQT™”ZP]ÚÖXšÙÝšž›ÝÙ‘ŒÖ]RÙÛ]ÚÑÍTY^]VŒULÜÑž™MÕ^R”M’“MQSÊÙ
ËÚÍ”^[–\ÔÓÐ›\œÌœ‘PÔÒÜÍTØœ›NZÙVžZÓÐ–MP›ZT”šÐÔ˜ÖQÎLRÌ”ž“ÑÐŒ]”PØÒ‹ËÎ]’KÒUÝZ[X]
ÒÓÓ]ÐÜXRZMÌÔ•ZÞÛU\ÍSÞŒ˜ÕXLŒS™ÓÜÞVQÚÍP]™‘X‘Í’ÜØ]•ŒŒ’•ÐÓÚQ”LÚÒ]\ËÞ^L˜\ÜÕÖZLžž^QULÌÖ“]ÓMÊÝžQ™U]YV\ZÒÖÚ›ÐœÌ“™ÐžV”Ì˜ÐLVœÍÌÛSËÌÔ\^Ö–‘•ÑŽÌÛÞMQT[“‹ÖTžÍP]ZMYž[T
Ø™ÞQÞ”Ö™TžØÔÛÖ’P]Q\•ÌœÒ˜]ÙTÓÌ“˜“ÙS™Õ[‘]ŒXÓT[MLYÐ™Ò–™Ü“ÛÝÓUš–‘ššNZÎPRPP’TÛUSÒÕŒÚ\–]ÐTPUÝR^]RÌÙŠÐÚŽTÓXÒËÒ^ÑÖ^ž•]XÐÔYVÓVXMRšQ^šžQØQÙ]•KÑ”Ì\S[ššÔ\]”X–
Ò™ÐÐS•LUVÞŽQSTŒMÎLYÞÖY“YŽQÞTÞÙ™ÞQÕÛTÍÒÞ\ÐÖ™RÚš’ÔŒ”V•ÕN”SœÑ‘]šR^–NS‹ÍPÜÌÝÕÚ›YÎVÕLZYPÌÜXÎS\ÞœZšÝ’šRÍÜ“SN\ST–š\–ZÝÒš›ØÝXRÚÎÓ•ÞURÌž\žZÑÑÓZœL™ÛÒX[œ•˜‘MÝTÐÛ˜ÞÜ‘SŽŽ
ÍÞ\ŠÌÍÒÔ˜“ÑR[ÕS“Ñ]S“ÖPVPY\VÌÓ‘”Ñ\–‘\ZÛÜÍÓœÑ]’™Ð™ÌÝ›žSÕ
ÝZ•ÕSÌÛËÒØ›ÓÑUËÖ”ž’ÖL’›U™Œ^^˜ÒžYLLÍÌRÝS”Œ–XŒXY›•›ÓPRY“^ÒÒ›S][Ý“\KÕ”ž‘
Ú\Xœ•˜\ŽU”ÖžÙ›“Vž^‘ÑŽQLÚ]QY™Q•Þ]ÙÍP^šÝÒÕžŒ“›ZZ™™ÌLÌÜÑØ•ÍRÑÔŒÌÕ•ÖY
ÛU‘\ZTL”Ð›ÚÙÓšXÑ“U•ÝŒ˜ÑUP–ØXSPŒ‘]Í\Ý˜MSÎŽ
ÖŠÌ’YSÓÛV–ÔžKÔžÞŒY[ÕØÒØÙ‘Þ‘”[]ÛÝMQžP]
ÒÛ^LØÜQ
Ô\ŠÛž^Ì™ÐÔSMT”“PZSZÚ[ÙÌÒËÖPØ\œžÜÑž”UP”SNÝÑPTU’œÐÒÓÜÎUYÕÐŒÔÌÛÒ
Ú‘\RÒžÚYÒ‘ŒÝYÍ›\ÛVS[RÝÖ–”“]ÖRÒLSÐXXÓN
ÐÍ^UØÑT•™YÕžÜØN™š™šT–“ZRP^]N™ÙÌ–ÝTÛËÔŽJÒÌ[ÑÚTÐYÚŒ›Ñ^L’•S˜YÒTYŠÕY•ÓÖUÔ˜\ÕÝ‹ÛÎ™ÐÙÝZ^ÝVÊÕUÙÝUÌšÙV\LÜÌÕSQXLØ‘–TÒÖ™›VUÕÑÙÔPRSQUÖŠÚÊÐ\ŠÝ™ÍTÖÓÑÔTœYœÌ’Ú›KÜÒ‹ÜSØTÙ]V[•šÕÑ›ÑXÑÍÙ›‘]”™[›Ò][M
ÑVPMÐ]T^R^ÐÕž\‹ÔÜÔVØ•^T
Ü‘Ò”–Zš™ËÝV‘ÙœÌ“MJØÙÑMJÙ“ÔÎÓÞ‘ÞVQL–]ÚQŒP•š
ÓYTUšÌXLÙ’›ÚÜ\•^]“ÓÜ›ÜX“M–ŠÛ“M’™QÜÑZ•™Ü[ÓŒ”Ù’ÌLÍQ^R•\N‘RVM[˜œÑZÛZ•”\[S“KÓ›X˜“ÝÓÊÜZZ‹ÓŒXœV\›UR]YÑ›‘RÖRš”’Õ–VÔžQÖTÊÔ”\ÍKÚ›Ì›ÝYÚRÕS˜˜œJÑ‹ÞžÞŒœÍ•”XÜQ™ÕÐšKÔ–Y–MQ[œÌžZZ‘SSM‘UšZ\ÑM‘ŽY”UÕ”Û›ÙŒLNYMÙX–ŽØ•QQÚ
ÊÌËÐ\V[U”“”ÚÓQšÓšSÙÞUV”ÐÑQZÌ™“šLÓÎÙšRÞÍ“YÝÙ™LÕU›ÙÌÑJÙÑ’VN‘RNÜŒÙŒšYÔÙ‘“TÜÜYÚÖÔ•ž”•Ñ‘ÒÕ’ÛY’˜[TžQØÒV˜Ý]QÌÕPÔ\’[Í]TËÔR”MÍYL^š™œÖ•U‘Ó“ÜUZÍMZSËÍÕŽ]R™Ñ^›Ó•SØÜ\Þ]TÓŽJÒUÊÍÜLÕÕÔÔŒÝÍVLZ’QÕ’ÔÔÝ[^RRYØÕŽS›ÚÛ•TšQTÒÕT‹ËÑ’XRYZRÓš“ÙPÜÕÎZÝJÜ[›ÎXNÙR’LQÒ–™˜Œ[”œUYžR•P•ÒÛ”ÒÑÞ‘QžT‘V›Ý›VU˜’œ^’KÔ•R]PX‘ÝÕÍÛ\Ñ‘ŒÒLXŒÜY˜ÜÚÊËÑÌÔ‘QŒÒ’žÖ–š–ÞÙQÝNRSÒÙ›ÌLZÍÌÞ•ÌÝ•ÐXÐQÑLÑJÚ›SV–UÛÝÚš\ŒØVMÎ”–š\”L]ŒJÑMÔÜÔU\‘‘ÞUSÔ›ÙÝÒÑ\YTXUšLÒSQLÖ’š”“[‘]PSÞQÝÒÞ™PŒTÖœÓÒÕØQÝUÜ\šÓJØŽTÞŠÛÑ\^ÞžQSL^SÕžZ‘ÜšÙÌšÛœ\›ÔL[T™ÌÛU™S’UNY[XÓ‘ÝÔ[Ñ™QR][•ÛVL“ZŽÔ“ØÒÍUÓÜÔM’’›ÐLPÐŽY”ÓŒÌÜØÕ™Õ“ŠÓ™ŒØÛSP”šœV›Ö–QÙ[YØ‹ÖÎÛ^U–™M™PRQŽ[•TP“”ŽT™Ž”ÕÚTTÒMÜQÎÔÝ’M•NÑVœR\ÖŒ‘ÛSRØ’XœMZQ[Ý’[”‘ÓÑVXÜSÍ™ÙPžœUÚ”ÜRŒÌPÕP‘\ÑNKÍÒšÜŒÐZÚÌÍ^–Ù[žŒUY•^‘‘]Mœ“‘–›œØ”\VœUMÑ\šÞ\”Ù–ÜTšYÜÊØJÌœÕ˜QQ‘Òš“ÞVLœJÙ’“–”Ò“ŽZQž‘œžPU\ÖÍŠÌÌYÖ^šÒM™TÑÙRJÑÔ’‘LLÌÝÙT›•]]“ÒLUÖÔ‹Ø[RÜ“ÍÐLÍÚ‘RÚLU“RSLÐ]–™ÝÞ\œ
ØÝÍÝÑšRÓŒÖŠÛÓ•ÔMÕQSÑ™ÑÍÙ]XÔ’’’LŒVSŒ]žPŒZTÒÝÕœ]QÑÌŒQ–’ÖSQY]ÓÔYÖRÑÚ”ÓŒÔžRÍZ^YZÚ˜TLÑÚžPÓTÍÒYQPÔÑÎP[ZKÐ[ž‘ÍÒÚ^“ÍÛ]^UZMÞ”ÑÝ’PPÒŒP–]ÝUšŽ’ÒPÖ‘ZÝPŒUœËÎKÖœ’ÕœRPÍQÛQÛ
ÌL”œœZÊÓ™VŽŒŒ•ÝÛ“^“Ô™RTZRU›[ÓRMÕŒÖ™LÓÔÔ™Ý[PR[š›ŒY’Ö•œZ›ËÛÓ”]
Õ]QMÙ^Óœ‘VN[ÙÚL\ž˜›[ËÔÜÑÒ”V˜ž–ØØSÒSJÑÒŽÖQÙÝX’žTLYÍ‘NLTÌÓ•ÜPKÑÒœQÜ^RÌÕŒšŽYÑXÕ“œ”ÒPÛÛŒÔÛ•ZÓŽÝœÙZÒ\š–šMYŒš–Õ‘L“ÕYÊÝÌMŒÝTŒÝ˜•ŠÑÝ\^\ÝÕ˜MUSÜ˜‘LUÓ˜–MPÑÔ•YšX‹ÜÞ™VšMÚJÚ[ÒKØÝÌ’\™“U›ÚÎTÎVÞZÛžÓÛ\NÌUŒT›T™Žœ‘’˜ÙÓÎMŒUTÙQœR[ÔÜœNPœ˜MŽ]Û]QŒZÊÝZÚÎPØÐ–L–ŒÙV“›ZžTTÔŒšÓY‘ÎZŠÜ‘™SUÐRÌØZÑ”ËÛËÕ˜›”šQÝÔËÜ•ÙMØÚÎL›šÎM›ÖPLØÖšÝQ–TØSKÕÙ‘]›ÝÖ]ÌÔ’UÓÝMÐŽURÚÜUÒYÙÛTšXXV[˜LYÒ›MMÑÐL”R[Z–•‘NZVRÍ\
ÝÌ™˜XÜ‹ÝÞŠÙXžZŽUÜžTÍ™œŽQÌÚ’Õ\TÝØŒ’ØKÝ›RÙVÌ˜QQ
Îš•ØZS[“QÑSSÓÔ\ÙQX\”XQ˜ÛUÙÞ\ÎÓÞQœ˜˜ÓÛÛŽRÕŠÝÓœMLÚÞžž’SÍØ•‘ÒYÓÍRPYÒ“ÊÍ”•X”Ó˜‘UÑQÒÍZZ
ÐÝNTXZ]“šËÑ›’]žL[XÜSÙZSÒU•X›ÐÙž›\–YPLœVÐŒÒÑÒÑ
Ô[QÐSŒU–U•]ŒŠÑÛSQMÞÚÌÙ^–”’Ú]NŒÖSšÓÞŒYÒU‘ÚžP““–ŒN[ÔÛVŒÍÑ˜š[ÕÒRSŒMŒÛ”TœÓŠÙUÑ“M™PÜÜ\”M[Œ\ÒØÓÐÓ”’X–V\ÞTP]‘[XMÛÚT[X‘PÜKÍËÛ•ŒÖZP[ÓSÛÔSŽ[UÍ˜•ØPSÙ’L•ŒÌLXLÍ™ÒÝ^TMMLSÐÖRRÖVYUMÕ\›“ÔÌMÕÜSÎPÐ[VKÖX[™ŽSÍÛUÖÍœZÌ™ZÝŽÒZÙÕUœÝÕÑš“ØVœNYšÚPÑœÖSNPLÑÑUZZ•V‘Ò‘“Ú•SÕÛÌÒQØMT•ÜÔ[ØÚšÔÔ’XÚT›[N\‘”‹ÜM[Î‘•˜QTÚÎV[\–Ô–”TN’ž’YÕL[‘RT›]–[ÌÚÕU’ÑÐÕœP[X]ÜÝ›N’–ŽÓÎÞXÓKÑ”MÝžÛÌRÎNTS••Ö‹Õ^]]UÛLYÓ›œÝÐ“VšZ›Ñ]X\š“R^ZL˜^ŒÌÛ‘›ÕLMÖÛMÑ”ÐUN[Þœ^žUÙÞœ•ÍRY˜\]’ŠÝ’
Í–\ÕMœžŒVYÝÙÝLJËÔÚVV\M\ZSÜÌN“Œ–Þ•“ÎQUÚQ–Ð]Z^›’]ÓÙÜœ‹ËÙŒ^š”MÕÙ‘
ØRÌÌØÜUÓÜŒÚÖ”Qž\œ””™RYY˜ž˜œ‹ÚN\Þ–›“ÚÕ™•‹Þ”ÜžÛUÜ‘T’’–ŒYTÝÎJÙ˜ž˜ÔÚ›™ÎRÙÒ\Œ–ÒPÖYÝTÜR’‘’YPM•˜ÌÞTÔ”ÌÓŒÜ™]ÞžLÕ•T”Ñ]P‘NT’Õ•š‘ÙXMS\žXÖQÊÕÓš›Ì•ÍTYÍ
ÌØ”LÚŒžVQLSTXQ^UÔUÚÐ™S‘‘ÛÞSÖTPÌÙÊÓ™V^ÞœÒ]–•›ÐœR’RØ–XÑUMTÜÍL‘Y˜QÑÝ\ÕYÍ‘ŒžKÚšÑÍš“ÌÍ’‘Ñ›S™ÙZM^œ›ÕUŽL“Ú]ÝTYÖ\“ÌËÜÝVLŽÜÛ‘ÑVPUÚUÛV›VL[ÔNTÍÌY^”˜ÕMR›Í–[RÝU•Õ˜”“VRÛ]]ÌRLÌÑQ\LT”L“ÙRÔ[ÎZ–UÒ”X’ŒÔÙŒ•ÓZ–Ž^T”ÚÛÌÑ™žRM“PÕÛ•XšS–YPÜœÊÖRR[ÔPJÒS]ÍÚ[‘ÜÝÞ”X”LšÔÙ˜Y™ZÑÝZÕšÐØÌRYŠÎÚÕÙXŽ^’œ›YTR\MZÛŒZTÒÍ[U’M\Í•ÒÛ’XŽÔ–RÕÛRRËÓU›SÌQÕRQ”ÖœšÓ\”MÞŽ\UÙSLJÒšÓÝÜœR]ÒÕ”PÜœ“ÙXTV•ŒÐÛŒ“•Úžœ]ÖX•\ÝSÙÐQÕ[ž–[ÜÍÝQÝÝÐž]Œœ]Í›ŠÝšTQÎÐ\‹ÛŠÜŽ
ÛÔT™NRU‘]Q”Z[Ñ
ÜÞ˜ÝœÕPš˜[š”–V–Œ\ÖLÜNUÍ”ÞQØMSRZÞP‘Y”™]Ý˜‘ÔÜQ›Ú’š”Ò›Z›TLÓÑ•Ó”Z•ÙÓÑY”“Ó]ÛM[ÌÛšÞšÐZÐÙŒÕTÌ•ÍÜTYR›ÔŽLRÜÔÜŽYÓÔÙÍÔÓXPJÝŒÖÔÕQÐN–š‘’ÞŠÙÌZÓ’Í™ÒNQÍÓÑPQRÒÓ–ŠÜ]›ÑØ•]LÔT]–ZZ“ÌP”ÌŒšÕZÑŠÒ””ÝVVUVPZš™ŠØÐÞ\\ÕR˜Þ“SLÍÌ^šYÒMÝXŒžÑÌš\VšÞ”ÝÖœ[U‹ÛÜ^T˜U•\Þ\•ÑØPŽ›Ù\ŒYMÓÙ\XÔÜ^X›ÙÙ“ÒVŒÕTVYÒ›Ø”ÒZÕÖUVšÚÐTÍÝ[ÎUØÐÓœS]Í”•ÍQ“VP›TXŽM›]QSÎRÓÙ^›Ø^QLÕQž‘šÎ^šKÐžSY–M\Ñ‹Ñ•žUJÚR’Ü˜PÛÒP‹ÒMÓ›™ŠÜQ“Í–”[Z’YXÑRÖTÚÍŒKÛ™ÓMÒSŽP˜V’Ù\]ÑÓœÓRÍÙTKÙÛ›ÞQÕ”˜ÔYÛÔÑÓP›ØÜÝ™ÖVZ›ÙÜ™ÍZSÊÌ•ÒÔÛ]‘Qš\ZMMÒPZœZÎTV“ÙšNYš˜]ÌÍ]™™Œ›‹ÌÒMYœÍTXUÕÝJÓ“‹Ð“ÍUUÙ›ÌÓÑÙ]YÍ›Ú”žš[”ÌÜZP’ÑXÑÝÌ‘Õ•’•Ü™ÒQ’\ÍRÔ\[ÜŽÛÊÜ[ËÒ
Ö\›PšÔYQÝÕ”žLžPÒÛ’ŠÛÔ\™Ö™TSPÜ]™Ô\
ÛVXÐÓž›Õ\M^‘UžšL[ÛZ\ÛSÍŒXMÝœX››ÙÔŒ‘ÞQPÑLÌLLS[ZÝÑ–]]˜ÖYLÙ˜–Q–ÔRÐ[ÓPÙŒœÌžØÝ\ÑŒXÔVÜšÌËÞšUÙØœ]\^QÒNÓÝÐU]Î”ËÓÞÝÑ™œÓŒPP•”]“ŠÒZMÎ[M^˜\•Ù››[ÍØPQ\TR“ØÕ•ÛQM•œ‘TQÐTÒZS^LTZÖŒ–”SšŒÌÎUR”SÞ•”RMÒÍÛšZŠÛÖÍÓÑÚZÚÞ‹ÕÝLÎKÞ^ÌËÕÔÙYÕÝÑSŒV™ÕRVÑÑŠÒ‹Ò›ž]šÌ
Ú]JÌÕ“œÐ\\ÑŒÓKÜÚÎ[ÞŒ˜šÙ”ÕÝZZœÍÖTŽZÙžTÖœØŒÒÖPÙŒL˜ÌMÌY–V]š^“œÐN]ÜÛœÞ’ZNQØQÕZ]ŠÕÍLÝœRÌ–YÖÕ”’Ô”XÙLÔPÐZŽ“‘•YÜ[›VŒTÌÝZÙÍ\MZ\ØÚÛS’UšÞZÚU”’–TÝQÐ’Ušœ’\Ì™ÐÛ\–LUËÜÌÖ^ÌÔËÎ™ÑÜQÌ‘]ÔŒ“Œ›Q]ØÓ
ÜÕ
Ô™Ö]ÔÛXÔÑœÕT”P˜‘QÙNQÜÍ˜UÌœÒNL•ØÐ]ÑXÙYPTQ’Ò\–ZŒŽ]ÒÛYNÓ\ŠÙ^Ø]
ÑÙPÜ˜ÍN[Ö‘’SÞ\Ò›\šÒX]YÍYÑLZÐPP]ÐTÒ‘šTRY[S]ÙÖ›“ÚQ•ÒQÐÑÓÓVš•Ô\RZÞŒÒ™Ø^M^^™]”–šÖ–LŽLŽZÍÚ[SÝ™UÕšŒÛÓÝ‘]™’PÎKÜÛÙÑRTÍLSUŒ›“œLY›™MS‹Ö]^’ÜÕ•LÔR”NÛTÖ‘œ™•ØÙ‹ÕÎSÛÊØÌ\‘ÖQ^Ž\“M•L\‘ŽM“MNYÎXÚÝ›œÐÜVZÔ˜Ð\Ð\\‘ÕV“RÖÖ”S“ÕÕ™US\˜^“ÌœÝÛ
ÓÞ˜T•TžÕQ^œ]]ÔÍQÞ’‘M[ÛYRYÐTXU›“Õ–NP”“YLÍYÌ\ÌÓ“ÝÙSMšÐLžYžŒ“ÛØŒÌRVÞXÜQ“šÜŠÚ’LSÐMTM[ÒœL•T™[T™NZÕR“˜[ÛÚ]ÛM‘ÖXÚÞMYÕÐ•™ÔÝPÜž–žž‘Ó\˜SP”ŒMU™QÍUÊÒ‘ÜMÒÚÚÑ›Ò“UNÜZU\SÐPÙÝTSÑÛ›P‘™ÔÙMÌÜŽ›–QP’™•Ð[Ì]ÖRšÖQÑ”šYÕL›ŒVSÒVRPÍ•›ÍLV™ÛÑÛ‘œÜ‘PRRPS–ZTPÙJÖ’ÚMÝŽ^ÌÍÒNMœZÒTÔœUY]“\ÛRUS™ÓX‘Ô“SU”\Y\šÒ[ÓÐ’]šÚÐ]ÓÓÛ“ŒÝ\Ô“YPžMÜÝÓÔ
ØœÜU‘ÛPÜÑÝÕÔXÐÚ˜›ÒUØœ[Í[QUËÝ^]›ZŠÖU[Yš[Þ™Ù]ÔÛP^™Ìœ]\PQÛNPÜÑ[ŠÓ^›ØP’šŒ\ÌYNœL”XŒ’MKÌ’Í\KÜŽSSKÝ•Ò›ÙM‹ÚÍÐRÌžŒÎLŽŒR“V–ÖšÒÓ•ž•\‘[ÌTPS\X‘ÎUÝØÎU–YT\Ð”ÒLœÙÑU”’ÍÊÑ•š•ZYÐ]JÜÐÒŽZ•X”]‘˜Ý˜ÜKÝLM\““ŒMŽMÍ–ŠÝ“MRÞ™‘“ÒT–›]ÌLLT\œ\ÒSÑ™™Ü^ŒPØÛÕMÜMŠÙ•ÐLžÛRÒ›ŒPšÚÌZŒÙU•ØL™ÑÐ[‘L”QÍ]LUÎÑ]Q“ÔÜÓØTÝSTNXÐMŽÚV•™Ù^SZZPÒQ\›ÍÐÐÍÑQÌRÚU›™\ØÙÍ
ÒÕÑ™ÌMTMÔÓœ˜’ÚÒ[ÙØRÖQ”‘Ø’Y˜ËÑTËÎS\–•Ø‘P•“Õ›Û“š›™ÒY•›ÙžÊÚËÔšÎT]^•Ñ’ÕšÓP™šŒ”˜TÚŽLZ[›ÛSQ”ÝÙR”JÐ™KØLPÜÍž•RZ“ž]‘šQL“•šURÑ’ÙY]ÓÔ•[^œÑ–’Õ”ÜžQ•SÚœZZÜ›ÜPÜU•‘\™ŽUYÐTQTMÖU‘ÜNž™QÌ–•ŠÞ™–ÕËÙÓPUÚËÌÑP™œ˜XYÍšÞ•–YUÌÜ“ÚÕÜÛTUÊÜMÌÍT^Y–šØ›ØÙQ]’^•ÓÎ[\TKÖ“Î^Ò™Z[œÖMÝœ
Ð‘ÑP™^ž˜”PPPœÜXSÌ”•ÐÜ]SÌÝ”[›MÕU–LÖ˜PŒ\ÞLV‹Ò]LR[XM\ÖRT][‘V]TLÛÕÑ]ÐPLÍØ•–YÕ^’˜Ò’ÜÛMZØLYSYÐÞTXYÐÐL•RÜÕÑ^Ñ™›“QQLS‘ÝÑ›^TÑ[ÙØ˜Ò^ÒŒ‹ÛÙNÜSYŠÕ[UV•˜Ô[•˜‘ÑTÍÛ›PPÛŠÍ“ÛÔÙ[•Ù’‘Ì]ÝÝ•Þ˜Ž
ØÌM™Ý•˜\ÓVXT’TPÌÙÔÊÞ[•R›[ÜÍTÝ\•SLÔÝÛ’Œ
ÚM’š›“P’ÊÌPÜMÒÌPPÐ]ZÑQRØQPQPPPT™ÛPR’•LÝ•™ŽT““M™™ÙPšXÍQ\ÞÜ]•ÌÝ‘ÌÎSÌ‹ÚŒÍ˜˜Q]Ü•Ð˜]œPÍVÊÓ
ÙPZL[‹Õœ“Ž
ÔÐÍÙ‹ÍÎRËÌXžQST˜ËÝJÐØMNÜ”ÞSŠÜNšÚŒÝœ˜Ö“Ð“V–š‘Z
ÍÑŒL˜Ñ’ÓÍMN]ÔÜÒUX’]’ÍKÝÙÓØÓ•NŒÞ“ÔÞL‹Ì“KÙÑQÚÓUÜÕU™ÊÌÕÍ]ÖÌQ›RY”STÝV™ZÝNÒ˜\ÔœœÑÔ”‘ÊÛÓLÛÓšLœÜÐÌ“ÓÑÑ‘Ð\QœÐRRL›ž‘Ž››ÐÜÙZ]Œ•–ZPÛÚ\Ó“ÐÌPšZÕZÜ[ÜÛ’œÖÜS˜QÕÐŒÑÛŒŒ^ÜÚÓYÝÜ’Ü[ÔX™ÓVÑŽ\‘ÒÜž’ØY[[ÌÚ
ÑQ[ŠÑSÑŽ^šÍÜ™ŒNYÒ’Ð“”˜ŒÑRÛÚP˜ÞLÌÜËÕJÜÊØMžNLœÝÖ”YÐZ‘\’Ô˜[XÐ‘žV“ÑÐLM]žLSZRŽSVY‘LØUSÐVŒQ]P›‘ZZRÍÓÑLSÝÛ‹Ý‘QÝÖ‘ÞŽVPÔ›ÝNYŽÔTÜ\ŠÝYÌŒŽŽXÕÊÖ’ÓTšQ]šT‘ÕQ[[•šÖT\ÒQÑÌ“LPÚ[Ó”]^TJÚÜVž^RYÙ™LTQ™Ñ™UÓ’ZM˜˜“RZ˜’ÌÛ‘••ÐÕœÐYÓÖ•••XZÐÌÒ^P[YMÕ›TV”QZÚZÚ[ÌSÚ˜URÒšÔÓMT–•LØÐ”\TÑ‘œRÒÚZRRX‹ÚšYNœ[YL›Ó›ÐR‘ÕÒÖXœÕÞUÎSÙ™ÍÝÙKÒ[QŽPÓKÖQ’NÚLLZMÝ™’ÖKÛ[Ø]ÔLÑœYÖœ“ÔYÜÛ‘LšUÞ›ÚÛUÒÞ›ÛÑQÐÚÌž˜[ØÌÓÔ‘L––ÖžRMÙ–Q[Õ\QUÕQ™ÔžŠÙžMÕZÙSVœ‹Í–ŒÖ‘SY™š”Ð]ÒQ’
Ì”][ŽSØŒ‹ÚŒ›™Ø™ŠÝ˜YMÌÛ]MXÑÞKØZÚÜ\ÑLKÕÑR]•XŒQŽÕÛžT”[UÛUÝ‘ÌYNÕ™ÑYÍ^Y
Õ’ÍS›ÚŒŒTN]LËØ]X]ÑT”Ú“‘œ•ÐQ•ŒÐR‘VR‘Ô^œQÒÚÞX•Y[]ZÔ[]•˜Ú˜ÙYšKÙÓÓÞ›ÜLRÐ•Ú’žL™S[LRU][Ö‘YMÑÓ\SÚXÚÙUœ™”š\NM]SÐXR]TÓ[VŒ’Z\M™LÔÜÊÒKÚ˜‘ÌÐZL™UL›VVP›ÓœÛÐSžÙ•ÝšÕZŒ”œÑÝR–[SÌPÍÑSÔÚMœTSKÛØšÎÚSÕÝUUÚ–P^PÒ^PMUÌÝTÒ’]ŒZ]ÜÒTÑÒ™ššÓVU]ÎRMÐÎPÒTQNÛUšÔØÌRTVQØTÌÛšÞ”’œÜVÛÓ”Ð‹ÝœUÚÓØQÕP[PNŽ’šQSKÓšJÔÓÑžLYÑPUÖ’[›ÐŒUšÐšÓÐœ™ŒŒÎXÖ‘Ì“‘™Z™PTš^ZQÜ›TNRØJÐTL^NS”•UÞ“‘˜ÑPM•Ñ]’Q
Þ[\•–NKÒ]Ó”‘VšZÑÙšÖÜÜÝÑÕUÚÍÝ›Î[ÚXÖTÔ]YT›SQPÞ™YU›ÙJÌ›ÔÌÕ^ZMÞÍÝ–S“™UŒÍQÒ‘]œUÐ]ÑšV”ÖVÙÕ\ZÐNQÛPY”ÓLØ–JÙUNQÎX•ŠÕSÎ–ÚYVÍ™›Z˜“”Ö]ÜÛQžSÕY’ÞÚUÝŽTSYÌÒÜÝR’ŒÍ™TKØ‘ÜVÛÝÚ™ÚšSŽ\Í‘ž˜Ó–Z]™]ÔÎ\Ò˜›Ž–ÔžÐÔÌRÝœ™^TN^ÙS›[R›ÜPœÚYŒš™›JÔU“˜SŒÜ–\šÕRÊÌœ‘ÓSÞÕ‹ÝÐÒŒÝÙÞVÓ›ÑÎ•\œžZRXÕQ›ÛMš‘LÖ”–‘™ŒTÚœY™Z”ŒŽ\ÕÔZL\Ù‘Ôž™Ð\RRÞ[™Ó˜‘–U˜RQÖ“]ÜšSÐÍ•’[R“š\–ŠÚ
Ð\^\[ÙŒÜÒ›Ž™ZÚÕRÝÍÔYPLQœ•TÕÓUÐNMVP’[ÝžSÖZ\“ŒÜÜ•Ü’Y›ŒMSØŽSØ˜˜”œ•ÙYÚÒœž“ÊÚÌÚZSÌÐVZYÒœ–ŒSXÒ“›”ÓUŽ™™PÑÑÒZS˜Ö”ZÍÔ’‘Mš”ÙY[ŽYÞÍLÚÙ–ÊÝÐRUPÖNP™›V[ZÓ•Í\SX›Õ’ÑXP™ÝšÛÝZMÓRÓ‘œY™ÝØ”ÙÌÖÓSSŒÛ•˜‘ÐPQ˜SÑZœÜ–Í‘š•Î]Sš^[Ô^PÛÍXØX“YÔMYVRÚSÚÜŒZÎT^œXÓÓ˜ÛÔ“[’šÑÒ›ÕS\M”Ý›\ØU”YTÌ^ŒÝÓYÖ[[Ñ“ÙšQ•›Ð›’T–ÍMœÙR“˜TÑTš™œMÒXÞÔ[Œ‘”Ø]QLœ’ÍRÚ[[PZTNRXÕÍN“U]ÍZUÔ›š›ÛLÝÐÖšÛÜPÒ[Í“US•Ì˜LÐÚÑ™™Ö•œ›M‘‘™Q]ŠÔ”–\YP“Úœ›ÝÚÍÌœÕÛÛ[XÒ™[Ô“‘šÛSÒÕRØ™JÌ–P\ÛÚLÚÙÖžXÑ–™•›T‘Í’Ð”“\ZQšQž^ŒÛTœÖM™Î]ÖSU\^]ÒØÎQÔÒÖMLTQ^ŽKÑS–ØTZ
ÙŽZ•ÕLÍÞš™]Q\•–X˜ÜXTZÑ”\XÙ”ÜÙ]ŽYZ–TÞYTÓÝXQÙ^žÔÔÙ\•SQÜN]SJÚÜT[”žËÝ™[RŒX•š‘Ûš\ŽQLN]ZÐÚÑ‘ÚÝÐYÒQLØ’XÒž\RQ[›Y“ZÌ–ÍÚÒÝÍ]ÐÓš[˜TŒ‘P[•ÛM[–[ÐPRYÑÒÓ™ÕXŒ˜VÓQPPYÐXÙÔZ]ŒPž\\“YÎSZ’ÐÓžY•Ö’Ø›ÖQPž–RÙ’ÖPU’”XœÜUÐQLÜ••–QÌZSÖØš^šØ\S’˜Ô•ž˜Ó‘PQ[QY‹Ì“ÑÛÝ“žŒYÝÓYÔ••M‘•Ù“šPPQŽ\Ìœ™ÜYÞ[ŒØ’•–QÑÜZÖ›UTZÓ^œP‘MÛQ•š™ÛŒQÕM’[”™‘Íš–MÙ’ÝS›ÑœÖ]ÔÍœÝÛ”ØŽÙZÓ^›JÊØ•ŒÍœ•ÑÐ™™[ØÖŒÌÚšVŒÜŽËÑÝœY[žY›•]“UÌ˜ØÐUYÌ™Õ›ÓRRÐ™]ÐÞ•Þ“ÑÜL–”\\Ô[L’[ÖLTÙ›‘‘ÜÑÐÝ‘ÔÕ’\XL›ZL››ÎJØRžÌžÕLPŒQÓ
ÔRšXPPQPRÓPJÑÒÜ”ÐRÑœÖ’–N[Ú™–––Ž‘ÛÛÞVT‘Ô]V‘L]››TšÙ•XMÌ^X’ŽYÌ]UÖKÍJÍ\ÒŒ”QÑQQÐÕÒY[™™ÑšÚÐ–\YÔØÔPŽLÍ[\ÑØÒÍÍÔ^™Ú–PSšž^ÑÚÊÐPPÖS”ÕÝÌ”TÓNL–“QR”Ñ™˜ØS›ÕYÕUÜŽ^M\ÝZXÙÖÙ–•Ú™[‘L‘™ÓÕVŒZ˜ÝÜZÐÞ‘Ü[Y’N›[Ö\M[‘L™Ì“Ò‘Ó]Øž‘LÐRÓŒSQ“ÑÊÌŒÍSÙÜÓÍXPšÊÜ–“•XÓ]ÙP›•ÚÔÝÝ‘ŒNSZÌØÎ][R™ÛP““–KÒM’ØÖU‘ZYŒŽ]M•ÜMœšTY[Ñ™ÛÕÌ–œÑZYÌPQPœYÓÛš™SPŒQÕP^\–‘]^YÎ[ÝÛÙÕÓYÐQV‘PÒNXR[Ð\PÐRÝÍÑÜPÛÝ\ÛÌ\ÜÕLžŠÞ]œ’ÒÍ•ØYÓPRÒÖXÞ\VUP‘ÝLYQ’TÖœÝšÝÌœS•NRÛLš™ÕS”Ô™XÛQÐN\TŒT”NXPQZ–RÝžMSÛVQY]šÝ•ŽMNPZ•TÛÓÔÍTœQÊÔœÚQQ–SÕNNSPYÔ›Ô–PNÜKÚPR•ÙRY’MŽQ’š™•ŒQÔÝU^M\ÝÌœ™ØÚÞ[LÝVœšŒ˜•’ÒV
Þ‘˜’™ÚL˜ÒÙRÖN]ÑU–VTJÙQÑÞ^•šÔŽKÒÕ]œšÌ”Í•“ÝRÖ›Z•Ò˜ØŽJÝ‘Þ›ŠÕ•ÒËÚÖÔÛÕ\LÖTŒ‘Õ”S\ÑQPSšMÓŽV“ÛÒÕJÑŽP“Û•[ŒQÛYÑÐZÖÐ“‘UÚPRPT]ÓZRSž•ÙZÎUÜZM\Ü˜‘PNUÛÜ“ÒLÒŒÔÍ]UÓLÛÔP]XSÒŠÛÚÌTØQÚ™ž\QÛNXL“U–˜KÎZLL]‘^MÝLRQS]ÒLÍ’YÙP‘Y^UÑÞÙÐ[Ð˜™Þ™ŠÊÍ•ÝØÌÕÌÓŒœšRÜšLZ\QØž[’
ËÖRP“™“Ì’’Ý›ÓV˜VœPÐÓÚ–’^ŒÖRÙ‘Ü‘’›ÐX‘œ]–T’V•Õ›ÓRTžLŒY™ØMS’YÒ“LÛVZÔQÓÍÓžÒœ™˜˜ÐÓšÙ’XUT™[T™ŒXSÌMœØ^ØÎM•Û‘‘™–ÛQ“Û[VTNP›žÓPQPYQÛ]Ý’V‹ÚÚÑÑÑØ‘ÞRÖS“PY[ÔTZŒ]ÚÐÙÑÒRÜ‘QÚSLÜMš]•’˜RZÝÙÓS‘™]ÐÐRÞ•LÞÔ‘™ÒVSNšŽÝž]”ÛšÍÕÚËÓŒÕšÝ–[Ý]™’ÝÍJÛÚÑ”ÒÜÓ™ŽUŒ™SYšÙV•ŽMœKÜ[LÌXÓØÑTØ•Ù˜ÖYÕ”ÖÖ›UÔ]ÓÖÓØÜ”Ó’ŒÚœÔÊÌJÐLØÎ\KÓRÚÓQœ™^ÎÞÕQUXLÔÔÍ]QÔZ’ÖØŒÕŒÛÕÎ\žUS›]RRTUŽV“”ŠÞQÚ“ÖP›[RN[JÛ™]ÔRÎ[•‘MÒÜÒ”’“\›ŽLÌÖ”S”ÊÊÔ–ÔXSYÜž[’Ó•›••QŒŽÌÒS––SÌÔÒÍV]Ø‘Ð\MØšÜ“N–ŽPP•]Ú‘˜Ñ˜Ì[ŽÜ\“Ì[N˜ÑTŠÝ“ÙLÐSPš[ŒRÍÍÚY\RžQÖŒ“LÑQÜ•–]\–ŒÛšÎLÜMÓÑÎÕ™SÒSÌ\[ÌR\Ü•Zœ]šÌTJÐÝØSZ
ÒÛNXÎRQ\ÌXÍ••˜Í˜ÛÕQ\ÝÚÓRÐ“P‘ÚÙØÙšMÍM“ÝM’^MTÎ
Û™Ú]ØN]ËÝÍÐ”YÒVLRÖÜS›‘Ñ–PÐ]’ÛÙœRÚ\Ö
ÓTPTS’ÐÚ‘Z’‘M”QËÜ™“ŽX™ÔËÖXUÐTSŽ[QPÙœT\ÐŠÜÎÜP•ÐÌšÍP[ÔŒS^N^œÝÚÜÔšM‘‘ÍSÖÒ’ŠÖ•JÍR[ÓŽS^ZS–“ÌLÒ\”MYËÝ][TR[PÖ’ËÓ[ÛVÊØ^ŒÎ‘ÑZ‘›PÒÝÛJÞUSœÔÊËÕ”
ØŒ–’ÜÕÚ™ÑQ‹ÊÐ‘–[VTMœÚ™ÑTZURXÜÝYÝY]YÛTÞŒSÔ[Œž“ŒZLRZÒRQÞŠÓ’[ÌMœ^žYÐ‘\\‘Z•™[\ÔM^YNÞU[“Ñ“LÑÙZZ–šJÛ™Ú^“L™šœ[RÜ]›ŠÔÛœ]ŠÑÌšÍQÚRÚØÑŒÕ‘Ù’ÛšÍÚÛÑZÕ›]PÛÍ“‹ÊÞ‘NXLÓÚÑÒLÙÑÞ’ÝYšÍÔÕÐQÐÚ”ÌLLÙ“Õž]X‘ÔÞŽÎU’
Ò‹ÕËÝÛX’LSÛÐÜÜÐ\TZšÓÔÎ\”šÌ‹Þ™ZÌ^›NMœMØQY•ÚËÚXÍÝ^ZžXR]MÓ^R˜L–]ŒTŠÙJÛÜQŠÍ[ŒR\–“Ô[Ñ]LUÚÐž•TÔÑVKÍXÎÌKÖšÚÜÒÕÚœšÍÕœÍœÙÌÒUSÑL“Ó’˜ÙV“\ÝÙ•R“Y›Ú^ZÒ™ŒÚ‘LŠÜÐVRVZššÌÔL™–’VÎRPT\ÐÓ^V›žÞ˜ŒYÜÑZQL‘ÕQSQÔÞT™–Ú•ÓÌ”TŒUV›R“˜]“LÒRLŠØÖž[Ðž^›
ÕÛYYP›ÑÕ•šRÑYÕÜM^”’›•NV’ZULÜXXÖÝX–›TUR^\žŒ”Ö‘˜VMÑÚÒÓVN\N\]–X\ÎXUÝšSS‘’ÊÜNXUKÙÒÎXÛY“[YÛR]’T[œÕKÚ[˜T•Y˜’[R‘Rœ‘‘ÖPÝÙY‹ÚŽÍNœÙÍØÔÚÖŒR‘ÕXÕÔŒŒ•ÕœÙŽNLÔÒÐ˜ÜU“˜T‘LšVQÕTœLššÜÚ›ÙLL˜š‘]ÌÌ™‘ÒžTÍšŽ^NSSÌ^XUÔZZÝRœ“ž™™Û^•žUÎT^•ÚšÍNŒÕšØ˜ÐÍ•ž[›QÑÓPVMZ••Ñ•ÚŒZÌØQÜÙÓÙ“ÒÒÌÍ‘U‹ÙÙÒY]ÛÑžœ›UÍÑØœYÝZž\V]SMÔ^RÙÝš”SÖÔ˜Œ›KÙœKÖ”ŒXYR’^ÔÕ[Íœ˜ÞL”Û\TMJËÑÛœRT’Ô[\[\Þ]žZÐÜÔUÒÚ›Y›^SM^]]ÓQžÙ’X‘Ø•M’™PNžQLQ–šÓ”]Yž•]šž•VœZÜ”˜Œ˜•Q“šUQ“ÚÐÚÞš”•œÌÊØT[Ž\ÊÙÌÕVÍ•QTÕØ˜ÓR‘ÞRžVVÕÜÚÍ–[œYÒÜ’ÕTQPÔ[[Óœ˜’ÔÜY’Ø”™ÌVšS“•œÛ˜ÍTU•Œ–”ZPÊÖÒÑ˜ÛÕ‘ÍÔžZ™YPÛ^^‹Ü\RUÒSÍÝŽÍ›Ì‘™ÑØÓÒÙÌœUSœÍ]ÕœVÜšXØYTÙÙÐX”SQL‹Ð›LX\šQÕSL•UÛVLUMÖÓVSÙÐQTÜ™[•LŒ\›ÝÛL“ÌÖŒ
Ù˜NS\
Õ‘–YS™“MÌÒœÕNLÍ™Ü–Œ››šQVX”Û’QÞ•ZPP˜PPÛYÊÚ™YPÐ‘˜X™ŒTTMÎUÓL˜SÍNÝQŒ]ÐÝUSVU™ÒZÌXœÔR›Z]NSTPPQŒUÓTÝY™”P•MÙ\ÚÐ]š”Û™]ÐPY]XS\U^Ì’]]Í\•‘XÌÛUœÍÔ^ÍN[Ö™ÙÚNÛÞœQÒšZS’ŒMÕZÝŒQšYRŒM˜ÍYÜÒNØÛTØ˜”‘˜šÜÛT™›ÛÍšLŒSXYZPS’ÙTZ˜Ò”Ý]ÑÙÐ•Q“›Uœœ
ÔÐ•ÞM^UZšÞXMÑ›’“PÐP]ÐXÖ•žRÚNÌYÞ[œMLR^SÞžQM›ÑœšP’ž˜ÙÖM™V“š““VXŽV‹Ú–]Ž]ÙœšQ‹ÑTRÙYÙÍ›Í’žXÖZLËÙÝ›˜œ]ÝÍœR‹ÚS^”UY[[ÞQÎKÛQÌÒØJÓ’˜
Ö‘Õ••Ö’T
ÌÕ™XSÜ\›ÙŒ”™Œ˜Ö’ÖQU]SÚZRP^“‘ÜØ’Mœ[’\ÜLÓ•Ž^ŠÔÍLÑ•MÜÌ™]\ŒœÒÚÌÛØÛTPÐUÝTT‘Ö™Õ[‘L\ÌÚ]ÑV‘MÔYŒ\œUTÞÓÚÒØÌ•QÕ•V”ÖŒ“R’YÌMR›”ØÝŠÝÔ˜ÎÑš™ÔY”šŠÊÝX˜Ú
Í\ÙÍ]ŽYÑ^SŒZÖ[UÖÍŒ’VP›ÙMÙ•RPLÐ–ÌÙSÙÍ[“T\R
Ú•\’YM\^‹ÌÚœ]UÑ“ÑÜÜ’ž‘ØÙ“‘ÓŽÍš‘]JÙÐPM]’[Q‘ÓPÞQ™ÕVÔYÙÔÝ›ÒPPRP’ZÜ“Z^YLÙÍ‘Z‘ÞYTSŒ˜™Z^Q’\ÓXÖZŒÚ]^TÊÞÚÖŒ™L[UÐX“ÒS™’Ô\^]’UÖÐÖÚÑLÚœ›•–Õ–ÕYKÝÕœ[ž™Ž•T’Ú[–YÚÌ[ÝÐPQÍÑž\›ÓŒPUÐ›\ÎÚ“QS“UÔÓR•‘ÍÜ’Ž[œ–UYZš›ÙÕRL\\ÕÑŒÐ’œY‘]ÐØÖRÊÌQRÚÚÕÜœY]Ñ]•SL–œ˜ÑQUÖQÚÓØ‘Ý]\UYœÑZÒÛZØŽZÔÖ[Û]TÛÓPXLÔœÖRUÜÍY[ÍÙYY˜ÊÔSšÕZ[RÓ’Lš[”VŠÍÔM[\Ö’˜–]ÔP[]MÐÛ›šR^
ÍÍ[Ò’Z‘Õ˜ÑJÓUTÓŒSR“˜ØZ˜ÐM[ÔQœ‘ŽŒ[›S™Ú[“Z›ULÚ^U›ÕÖ]™YÑ\ÝÌYÒP[PÔMR\“”Ñ˜MÕXÑÍZLÓ‘ÜŒX]Û˜ÖŒ™ØJÞM]ÛÙ”•ŒLZšÒ^™ØÎÌ]ÔžQÓÙ–Ž]ÝQŽZ˜\ÛÚY‘\[Úš\‘MX›ÕNPÜŒRÓ˜›Ó‘žRT–ÑÝ‘ÒU\“PPP\ŒŒL”ÓÐ”PP›ÜÒTŒ›^–XMŒÍÐ•ÔÛØ]›TÑT^ÝÝÝSKÍÙM‘ÐPPÒ\Õ–[žÖ”ÒVV›ŒPVPYQQSM›ÜRšŽXPMÔØÓœMÔ˜ZÞYVËÞYÍš“UQU]M˜KÌÜT”ÛZšÜ[YÕNJÚÔÝš]ÒØ]NZYM’”ž•›Û›R’Ú“P“™PÒXÑÑSTšXÓ‘Ô^KÔZÐRÐZR’–˜Z˜ÐLRZ\YÚÜMÐ•XÎÓ\Ü•™Ô”Ò–šTYÑÍÕX]TÐ[ÖRÖ”•TYÛÎRÌ’RÓÑÜÔ]T\]RšXMÓY™ÍÌÝ˜ž™ÛJØ[‹Üšš\šÚÙŽ”Ú^VN[Ù–žÖXRÎY^MRÒÒPYÑÜÕŽURÔÜÚÛŒTÊÚ›•L›^’ËÔ“Ø–MÎU’RŽXØÞYšMTT’ÙLØÕÒÕ‘ÚYÞ‹ÊÔMÝœYžšTÜ]ÌÐTQ’\ÙTÕšœÜÔZ”ÕœÞQž‘RÚ™ZÛ•ÜLÓXKÕ“SÚÛ’\L]™™‘ÚÙ––YŽV”šÞY]ZØ\œUŒÕMÙ›PžÜÞÔ”TÓÝTUÕPSPÛL•›M‘ÝÑYÓÒJÎ^œJÑ›MÝSÙPXÑÛÖ›KÌÖUÖŒÝKÙÙÜNXÍÔÜŽMÎÔÔÐÔM’ÐT‘›YT”ËÑÔV”ØÙ’URÐT”ÑÚÚ•S’”ÌŒŽL”VZLÑMU”ÐPPP’NUX••™ÖP\ÍÞZ“›ÓÔÑÛÒÑœÛ”ÒÓÛÝØÙPÜ[^UÍ”\Ñ[Ú\Ñ\ÞÓPSÕPUšÐ˜ÑXÝÖLÖM™ÎÍ]ŠÓÜŒ‘XV]œXQŒXÜŒšNYVKÚÎ˜^ŒÍÙ\YQÔ”TÓÍXšÞYÌÖ[šR“PMTÛÚ]ØZÛ™ÍPŒ‘QSÖœV–RR•ÝRMœÓØÙ[R[ÝÝ–\Y‹ÛÙ‘[‹Ò\‘ÚÐÊÚ’Þ“\ÒÑÍÌ›™UÛŽTÙÒS\Ö˜ŒÑ™•ÌÓ[Žš›PP^]ÖÝÒŒ]•^–Þ“]œÌLŽPZšU•Õ›Ò”XÙ™™•˜ZÍ–›ÙÛšÓ•”‘JÓZZ•R]Õ–ÕTZØPMKÕ–žÎ‘KÚÕÓÙšÙRZ[Y‘Ô[ØÓËÙŽQÔÙœN]ÔZ›”ÊÐ“žÍž™›QPSž˜Õ›ÒÐSÐRÑ•YXÒÒœŽ]’”™\YœÕ™S]˜Ž\Ì“Ð]TN]ÒURÓN’“ÕÔÎ\ÌÛJÑM–œÌUSÍKÙQ•PNN^œR‘RÍÜ‘”ØQŒÛÖQPŒŒR[ŽŠÚž“ÑØ\YVMÌÒUQ›NPÙÑNYÙS››TÑ›œÖ]ÔÌLÛ‘Œ“P’˜L”RÚÐÜYV˜ÑRT]\L^ÓRNÛJÞP›’V^ÍT]VMQ“‹Ý‹Û]Ò”šZ]Ü“ÓY\ÝLT]ÍÐ›ÜXÛšœÜ™šKÑžÔS•ØX‘˜ÖÕ•ÑÎ[–ËÑ”Ó\ÛŒQÑ•”˜ÛÚ”ÕÛÖ™ÙÓœÝÌÒÒSSÝ]PžV•LÙØ[ZL™šÕÍÐNXXš“”XXPZÖšÑÛT‘”ÒÍ‘ÓS]’Ñ‘•’ZËÖR]‹ÚV”[ÛÐÒQMÜ”Ô^™Œ‹ÜJÕÑÔ[Î\•LJÑ•ÛVÊÝQÐ^LÑ^SÚÛÐÍR›]TšQ\YÐÚ•œÚXY^ŽXÜÐ›•TUšÌÍ[\ÔÕÝÞSÜMÜÝ•ÕžU\VLÌÓÜMVRVMX]š˜š™T™ÛÔ–\“Ø’TXÞŒØÜÝT”ËÖLUÒËÍÜPMÝËÛXÜ]žŽMÔÚPVX’R‘šžÞ”M[VÍÑ™Û[Ñ’ÒÐŒQ””NKÜQ’Ž’žŒ‘[“ÓR“žÝU”ÚTMÛ™“ÔšÓØXRÒT˜RÑSMZØÙŽXYÒØLÍÎJÓÜS™ÌÛÔLÝÜ’PY]ÊÍ”S\PÚÊÌ]‘ÖÜÝËÝXŒ“šM^SžÎRÒØVSÕ^ÑRÖYZÕ[ÕMÙÙœ”ÖUÚP•TŽZ\LÚ‘Ô\Úš^ŠØT“Íš›šÞšŽ[ZÔœ^\˜P]QšÓ“”MV]QRUš]ZM‘Ìœ•’ÚS•ÓÛšY]TŒŒQ•š\•”“Þ›œSÔZ›XÛØšÔÓRÙ[ÚÝVŒ”TSŽSÓZÝX’”ÎRQØÐ–\œSÔ–ÙÑœSÚ]^XÝ“^SXØ]‘’Œ˜“ÒÐZÝSX•”ZÐ™Óž’Þ˜Õ\YØLYPQÓÜÜ^Ò™ÙÜRÛÊÑÖ”YÕY‘S“ÎS’Ò^VšÍ\”™\ÕTÌÓÚ™™›™PLRÞQ•Þ“]]–ŽÒLRÞMYZT”ÝYV’T˜ØÎMÌØŽM\]SÝ”ÍQÚ›ÜŒŠÔŒÛœœRÛ‘Ý•‘ÓÜ^YQQ
ÐšZÝÛÓÐÙ•‘ÖMÞLØÔ’ÚÎ’ÜLT‹ÔY’•ÝŒTšT˜˜ÍÜÑœUØLTVUÙÓUÒR]Z]ÓÛÐPPJÞ\’Ð‘œQ^ŠÜÜÑšœÌŒÝU]œ•Ñ˜Þ”^ÐUžÔØMÑ”^™YÐVPÜ™’XVM[Ó“žÑ•šYœ’Ú\™ÙÒÐÝÒ“›ÛÝÙ^‘RÜž\Ü•ÙÜSSZÚVÙMRš’ÛN]œ\UT^]Q[TÎXQ›œÚS[ÝÓMQNP’MÓÙÐ›ÐUXM“XÛ›ÌÍÍ‹Ó‹Ñ–R”ÑžLÕNTÍÔÍ‘]ÑVŒ™Z‘”Ó‘PØÜ[œËÐžMXÌ•šŒ
ÕPÚÖ˜˜™‹ÛQ[ÝTMÑÔœÚÙØLS\žœ\ÕÌŒZÓÜÓYÜV–žSÛ›]ÙP’ØMÞQÌ“ÜŒ^ØÕ\SÚÍÑ]“Ý••ŒØ•ZMÓ™[ÐRPY–Mž–›ÜÚSRMØž\Œ\ÎXÙKÕÖQÓ”Ü”Û’žSM]ÒYÐÔÎÒÚX–[Ö]ZL˜ÔR•ÍPÐ•ZÑ›][ÕÔÍœMQ›Yž^‘•ÊÌ™ÜTÌÓÌÚ’ÝLTÞM•\‘ÝØÕ”QLÔZÙÕÞ’YÛUÜÙÒœ™›Z›[ÛÑYÐL‘R“YÚÛÔ\PÓZSP™Ì^XÔ˜Ì“QÝ‘ÖU™[œÙ]N•˜YZÑSNÊÐQRSNNN]‘[Ú–“˜šZŽRQÍÌÚ\TMÖSVS•ÚÑPšYÜœœQŒÛÙœÌÌV”QÝ\Ì‘PSÚÜ”ÙÚ\žYÐQÜMØP–ŒS’ÍÛÔÊÍRŒžLQ\Ô•Î^‘ZÔ[Ô™ØÖP˜ÕÎ[”Ð™˜Q‹ÑL\YY‹ÛÛ•YMÒÔ‹ÍÝTŒÞžJÍÊÜTVXÌÙLMÜ[[S•Ú”PQP•[QÑž‘’œ–TTÌÕ™Ñ›Ó•šRYÑœ[ÝÜ•“ŠÑVŽ^
ÞNMLÕTÜšÓ
ÝTÍR”JÞZÐSP]ÑÚÒ’˜QÕÌ]Î
Ý–Y–œ™PRP^
ÜVž]UM‘XTÐœ[ÊÝMž\ÞX–ÌMœRŒRÞMÚ\Œ”•SV‹ÕLUÒÑZU
ÖQÚœS™žž‹ÚS˜Q™˜\”ÝÚš•R“›LYÐÐRÝØÕST^R”ÚSÐR]•ÓÌÌÜÛY“Ó
Ó]]QÒ–ŽZ˜^ÜSÝÑÑXUÒQÑ]ÕÚÛ‘‘Œ‘]›ÞZÕÐU–TRÌ•VYÌžPŽUÒPÖV“Ó–\ÒÔÖM‹ÔŒÚÎP’ÛÌXÓÍŒ›QMžP™VŒ“\ÐÑÙØ[ÓÑÝÌÕÌLTœLÐTYÌ’QÎÍPSÌÑSL]›’’ÌÐ\ÍŒÕ^MRœV\\ÞÌÜTÐYÐUÖNT\•Ü›Õš‘Ý[U^ÌÌÞLÌZ^›Ö˜Ž]ž“TYÞXœ^U•™SMÔ
Í‘ZŠÐÑš•ÑÌ]ÙŽQM”]•–]Ñ˜ÌÝLÍ•ÙRŒU™ZPP\R•L˜ÛœÛÑU‘ž•žž’›Ù•ÕÙÖš–“ÕÓ\T[ÙÐÚØÔ˜Ð]ÑL–ÚXXXP›Ü\N]ÔKÍšÝPÐYPT’ÜUÍ•ÒŒ’SÊÕR^•ÎSÍL›Ì”›’™T[˜YÍRšUÛRŒÚYœÒÛØÛRÕ^ZŠÝQTSÜ”SSSÙšÒ”•ÑÛœ[ÛØLŒÜUÑ–Mž•ÓÊÙQTÍ”ËÍTÕRš‘‘ÍÙØL™TX\ÞNÑPRÑX•\˜•LÑXœY–ŒQ\ÒÒšZP”^USZSPÜ–˜ÜœLÕØÞ”Ð“”S›ZÓV“’\ÚÚËÒ[š[ž“XÞŒž˜ÑËÞŒ”™Ø•Ü[ÎVÔÒ›ÙŒS”TÞXÓÕÔM”ÛÚÕPQQ™UŠØPÓKÐš[LTÝÓZ™ÖŒYU^[ÎRØŒXÚÌØÕÕVŽL\UŒZ‘”Ž^^ÐYÐQÜÝ^YÝ˜SÝ‘ØÜXÔÒœÕ˜Ð\žSP›ÚÔÞ
ÙÓÑœÙÚ‘\ÛÖ‘œšÍ
Ò\V‘ÜQ›ÒÑÌžRÌ›ÛÙSY^^‘SÒÒ]™ÒS›ŒY›Ó˜šœ™˜”ZÐX”ÙÝÛRÌVPÚUV‹ÕT•Ó›ÒÛÕ]ÐRÐÌÑÒŒÓÑMÍŒ’\™ÎTVYTPÞ‘Ð]NÓ‘RËÌ^YÕœPS‘ÑÙRLžUÜ[Úž’Z\U’]ÌŠÝÐÒÖSV”•ÒÔUPUÐ–ZŽÖR”ÜTX˜ÚV^XPT’ÒšPXÐœYÔÍÝÐTRPÒÚ^’‘œSMNVVYTPTTP•TQ™Ôžš”Y‘žÞYPÑMÍÛÕQÌZŠÎMVÊÞ“VØRÓY^ÚRÍÛXËÜZžV˜NRSÌ“•Œ[UQ“Q‘‘]ÑTSTSXXÑPÎNÝ]NTœÍÑÐ”Ñ–›“]™LYRØ›ÙUÖ]TN‘“Y˜VžM‹Ò›ÝMšYRŠÛÖØÜŒÕÓÜURM“ÞŽSØLM
ÌšÔZÓÑPRÞYÑÑš][ÌNSÔÊÎQÑœT\‘šŒÚÛ\ÌÎÌÝZLŠÙœ‘PÜ™^”^’Ü[X\\ŠÐ’]ÒPRUÚ™KÜ“QÐÒP™ÒÓT“YØ’R“Þ”ÑÖ›Ó]“SÒLÛYšPTQUŽÜÞ˜Ú”ÕQœÜMÒÌP’ÕœÔ‘QXÔXUÖYM“Rž›]œŽS›PÐL“•‘œÓ‘ÜÐMŒ[Ù™˜Ì”ÑÌÑ‘“ÛÒUÜÐ–XÎÒÕÖMMMMZ‘ÜÎRRÐ“˜ÙÖ’Ì–Í“ØZRšŒœ[ÞÑ]ÍŽÒÛZœTÜTU”˜PÑ[RÖ\ZRÔMÌÛQYT“PSŒÒ‘ÎNQÞ[›ØÜZ”Ñ•ÓšÓSQRšÞØÚQÔ[™ÙÛÍœPÛ˜Y›ÑSÓJËÔ’UÊÒ]ËÝM]œ^UšÜX[“Þ›ÎTU•˜™ž\ÐÔ”›VUPQPXPT“›ÚÕXŒ^VT’U–S™Ò“MŒQXÞJÖ[Ì–\^™Q™ÔŽ‘ŒŒœ\SŽQ^šÙÎZÞŒ›T‘‹ÓT’œRSœŠÚÓ˜ÕÔš]YÒÐÚUÕ‘ŒÞ“–VÍKÒÞ™“S˜MžÛÑNSPžŒŠÚÝ[”‘LLŠÑÞÑ•LQ\ÑZÒTÛ›ÌYš]Œ“”›šYXSZU‘P™ÝX’ŽPL™ŽPÓÜÍÝT˜VVUÞYÕXŒÖÐT•QÚ™Z›’ÍÔQQÙœÓž’LZÓÌYÔL–MVÔ•MSPÞ\˜ÜQM™TZÛÎUÕ\•ÚÜ“ÜÛLL’ÓŒÖŒ•ÔÕÓÖQYÛSÚMÜœÌÜ]ÌÓ“T
ÝÞ]MYÍZÔPRMLÖLÚLŒÚ”US™LÓSÓÝÝÜ”ÝÌš‘\R–]Ô’˜TÞšÛRMÙT’
Ñ^PQœŠÕÝL]
ÝÐÔÖÜËÜ‹ÓÓœM–Q”UÜ^Mœ\–UÜ”Õ]ÜÜPQšL˜TÙMUœMRQÑUœ˜šMYÖ”VPœÓTSPÞ[ÛSÙÑÙZœ–UMŒ^]QÑRœŒÖQ”Õ”^‘™”Y’ÐÍPLMÜÑÍ›•”XÚÙÙÛ™MMŠÐžXÐÑ]ÞÛ›™–Y˜Ñ[’ZÑÐ]Ú˜ÑÕSÍØSŒ‘Ö”YLP\MÙŠÜØQ“PRSÌQ“–P˜JÜÑÕPÜÑÑNXT^ž•MLÖÒTQVRUÍ
ÚVÔZÞT”ÚR‘R]ÍÙÓRÞSS‘ÜÚN^‘YMÊÓÕÒYUUM™ŽJËÍX•ÍÙ]ÑÒÒ–VX–PÚÑPÐ]ÛØQÚÞQ”ÕÔ”ÑPÍ]TU[“]ÙÙÒ•[Ñ‘ÕÚ”ŒÍÔU
ÝM‘ÐNPÑÝÐ–“ÖU^QYPRÞœ”QÙÔÐR[MŒNL\ÓšÑÍMÑMÛŽYØŒÞT›–Q›•–Œ™ÐŒÝÜœ]^‘ÌÖUÛÕ]Ð[Ð–S‘ÓŒÒÑ˜UNQ”\]SššÎ\‘ÎL^\^‹ÚÓÝÕ‘™ŒÔ˜˜šY”\ŒÜÔYÑZÒÍR“˜Ñš]LšQTÍMŽS”ÙžQÒÍR””ÐPPPZÙ[ÑœYÑ]Óž˜ÙÓZÓSPTÓÐ”MT‘šŒ–ŽPÍS”UÍÑPQTÞR^ÌÞÎQRURÞQÎQ‹Õ[‹Ì“ØŽ
ÜY™–˜™ÞœLNKÝšŒžÐØÙ“ÎMXž•”YUTœÍLÌPÕŠÙ”“PVR–Œœ\›\Ø–šÖS]ÝÒÔP˜QLX•Í[XÔœ”ÐžZQÝJÜœMÍT\ÌY™œPÐ›˜ÜÝÙ‘KÌV
ÊÌP™R[MÛL•UŒÎ[X’Ý•XL›[X“[ÌÜZ–[–UŒ\’˜šYÜV]™[Øœœ–QPPÓÍ’“Ž›Ü›TÜM‘–]•MNRÕ“LSœTžLÙ™LÛQMÞ’”^›V]Ô›ÑœU\ÚšTKÚN]’S]’ØÙ”R^š”Žš˜UL‘UUNV\Ñ–PÚÍØSUÒX›ÌÝÐP\™ÓÓY^ŒÙ”X’XÖ[[ÔMNÕVŒXÜÞ\[]•”U–P™ZÙ‘ÑÓÞLQ]ÐRXRMŒVžÛØTÐÛ[^X˜SÖLM›QÐ“Mž”
ØÊÔÍŒ•
ÒÛÙPÛÓZÞN™‘JÝÕ‹ÛÍÞŽÛÚÙ“’ÑšÌÙZÐ”ÙÑšX‘š•Zž›™ÞMœÑLÛÑ]Ð\QÒÙÚÌÑÙÙÙÑÖ”ØÕLÜÞZÓ“]“šPÐR™P™ÐÍYJÚÚÐ\“ÞSL]]URVœÐÞØX^ÒMÖSÛMžPNÌ[Y–TLÒ•]VRÔP›“ÒPšÚ“X\V
Ô™“Û‘Ñž\ÝÕ‹Í[“
Ü]ÓœL[]Ì\V^]ŒÓ“ÕPYÐ”]ÒNQ^–JÑ“Z‘M\Yž[Ž[Ö›\Ú˜\MÍPŒšÒÊÛÐÐPR[’ZœTL[›ZÛÜÝÜQÜÑÊÖTÎPY™RPÓÖ•Õ‘Î]šÔ[X[Q^XšSÝÒ“Ð››ÓÍžØÚÚPÐ•M‘\ÒÓ“[Z\ÍQ\Z^MX–UÐŒÞÜX”š˜TÖŒÑÕY\–^MÛR”^N]ÎØZŒ]ÛPRÙÔYœœÜY™MZÞÒÕ•[ÓÖÙÕÒ›]šŒ’ØQPPœÍÜPQ‘T”VXV™MÒÖMž™ZPÐŒÑLRž››Ý›žSÛÐX˜Ö™ŽQ^SÑÙÎ\[PPŒÜPŠÕ\ZÐYœÍVÖRÐÌÜPYÐJÑSÒRTÒ\XÕQÐ“]
ÌÑÚQÖœÙÜœRÖ[’ÜÜÊÕÍÑÕÙÚÐÞRUÛ–T\M•YÔÜÕUÔ••ÓÕS“›ËÐ\š˜\ÕšUÝœ˜ÛŒÑ\ÛÚÐP”˜[‘›ÌVQÞX›šŽÛÐšÚ•ŒZKÒ]‹Þ›\ÙQš–•Ð’]^˜ÔÑ‘ZšYÔQœ™š]Ò›^™NXÝV”“ÕÞQ™‹ÓQR˜™NUœšL‘QLÐP˜›ÔÓÖ”ÕÚP–\ÐYÎÐÞ\Ì”‘ÖÐT–ŒPVPQ“Þ\œ]˜ÙšRÚ]ÔÞ‘Ð]ÐMSPRÛÐPŽXÊÐÞSUÛYÓXšœÔÙØMÌ›Û’–’˜“Þ[ÍÙ’N]’ÑTÐRÖMÔX]LPÞ“VSÞUÛXTZPÔ–™UT”ÛMÔXÖKÕR[QœYMÔËÛUÔÑMÍÒŒØÍÔÛM›”P\XžZ‹Ù–[Þ^ÎUÍÍÖXPœÍœÑT•ÜÖPÕZÒÙPVÓYLÞ]žÐÔ”•ÛšQR^›ÔZŠÜ‘•\ŽÛPÕT]ÌQ•Û]ÚŽ™Ö˜Ü’ÍÙŒLXLÍ\ØMPÛœ‘œ\ÛÔ˜Õœ]ÎNÞÒ›ŽRÓ’ÌMU“ŒÛÑR^’ÍÛRUÝQÕÞU‘Ý]ÑÙ’NÝ‘RU“LœÑ›NYÐV’Þ“Ù’ÍÓœØU”YNŒž^RPT‘Y›•ž›œÚÊÍ”ÌÒM^YÙÎRPØQÎ]ÝJÛTŒ˜œ‘–’QXM’]R“XÌÑ\“™Ì™ÑÙ[Í“’›‘YÔS^^’žØŽSQRMÖ•ÌÝ[NUÞÚZžXÓ’L]LÕÙ[Þ[[˜ÐYÔÎYÒÐP]™Í››N˜NUšŽL‘]ÓM™–
ÔUŒ˜SÊÓž[P™›–NœPÎÕÚ–šÜÑÖ’‘ÑÔQÜ›“Þ^TS‘™^RÙÑRÛÕ[Ú“[œÜÒÍš™UÝÙTZŒXS[QÓœÑJÜÝÓž’ËÞYVYÊÒN•šÚ–
Ù–P[ØÓ“TX’]‘”ØKØTYÍ[“‘ÜÙ^ÒÝÜSØ›ÚMÙZTÚ”YLÕÞžLŒLÍXÕ^PXÑT›^X][˜”[Ñ]š•ÕØÛ›’ÎÊÛÚÐÙÑÐ[šŒ“›UÔNÕ˜“‘Ö–™˜”ZœØZÙÊÒS‘PLZYÌ™V“”–YPÚ\‘“ŒœÑÙSŒžšÕÐ”Øž•PLÚÎ™[‘U™YY
ÜXNœØRØŽUÙÑÐÔU’R[Ò[ÖMSžRÚ‘›’T^UMš“ÑRÑÍYYÜXQRPžÑÚŒVY˜›ÜR™”PP”ÐP‹Ù“–LÒ•Ìš™‘Î\]Ò™^ÝM‘L]MVžUXLÛÒ”Ó‘ÒØœÝ•V\ÐRQÜÕÜXÞ–KÑÓZTÒÔR]SÍÔZËÝ’’žÐÓØM”]ÐRž’™Í^]˜Ž]ÒMS]ÌP•MURÍQMÔÌØËÔQ[››‹Ð]Õ‘ÖR›M™ÐUQŽ^žŠÒÍ“LØÖ–˜ÑZ\ÒQÞ”UšÖœPQ–P™ÐR\]ÝÞ[Œš][L’NPPÔKÐŽÖ›Ù’ÜÓTT‘ÎMÎ]Pž”Tž˜Ñ[šLLÖU\ÛÊÕTÞÚÐYM˜ÍRÓ˜“Œ^šÜœÌÙYœÓ››”˜P–Q“XÌœVXÌXÙšÔRÕ‘›QMÙÜšÖTÓ•L•ÍšÑ\œÐÝÓRÛ”Ò“žQ’QšZÝ•˜–]ÕÕÊÖY™PÕ•PQ›Z‘ÌŽN‹Ô™[ÜR‘ÍÓÐQÖQÙTÙÝM™ÒPTÞTÐÑZYRÍ‘“ÓP™ÐVZ™YÐM˜‘Z^ÓšS“ÝÜÓTšØ]TRÞžXÞNš\‘ËÍžN]\S‘ÍÑÌMÞM’Û^MÌÍS‹Ý™Ü\LÐžSÝT
ÛMSËÒÜ’”SÑ]ÙLÜŒÓUÞ•šVÝ
ÓÞ]Ü›X^”PNLÑ™œ]Ö‘T‘TŒÑ‘ŒœœTÔ\ZÛNSÌ›šÜÍ’–Ì]^SŒÚÙœ–\Vž•Ì^Q›Í’”ÑSQÑQÐ’TÜ™–˜QÐ›Œ”š”JÓ›‘ÜÝ•œŒ\ËÕ]MšVYÔJÖXTQÓMÖ›•ÖN\UžPP]YPÒ–SÝMR›ŒÚ\ÖKÌQ˜ÖÖÔR‹ÚKÔ’Mœ™ŽPRV–VZÕ[ÝPÓŒ˜“PZÙÛØÕZT’–Ô•RŽZL
Ù’ÕÒY•T›ŽVÝRž\JÙ™Q^•’–ÝÍ˜ZTœ–S›ZXžZUÔLMš‘ÚÌ•ÍZ\Ò›œ’TÖÔ›ÖžSÜSÌL˜RZ”SÓNPÓ––”SUÝ˜ÛÖLSŠÌÓÊØÛ[”ÍÐÔ‘•ÕT–YSŒU]UKÝ\œÚØ“
Ó\ÊÞ\ÐÚ˜ÐRÞÓŒ]ÍQœR”V]”[ÖÌÚ™N•žTTTœ•ÐÜXKÝ‘™UÖÛ›“ÜÑ^‘U’YÔ^”TØPÍZÑ™œ™XÙ•[ÒÕËÛZÖL˜^Q“\ÔPž”•ÎYÍ[LÜYÕšŽKÚP–•ÐYŽTØÒšÜØÕ˜[[ÕÛV“Ò“QZSQÙÕÜÒÛU^QN[\ÚZ™ÚZ•“X^P\Õ•YQÎœÍÓ–\QRÙP’RZRœUÎ•ÖT‘M’Ù““[RÚÖœÍÌžÍÌSYLZ™•[JÝÒÒ’ž[ÕJÐP›XÌ’UÙUš™Õ–^]RZ
ÔÜ“^TNQTØÓÜÕPJØ•]ÒYÒÓØLÚ•ÔÕL‹ÌÐ\[ÜR\œ‘PLÛŒÔ^LÙVœ’P”ÕSP\V][YÙ\RKÖY]Ð’–Ì›\ššš›ÙZÑÒM“TÒÝ–XS‘”]›˜ÒÕJÙ[QÒQÜÐ’‘šÌYXUJÌÑÝKÞSŠÙÍÐ”œ^Œ•TZÔÖ”šž^‘LÕ“–”XÑœÞÒXP]‹Þ“ØœÍ˜TVZ’[”ÑÜ”[œ›ž]“Ù“ÖU\Z”]™[ÜJÜR›UŒÎYÞYÓŽ]S]“šÓ\ÍÐNT™X\ÕÔ˜“Õ[R‘Pœ[Üœ’Y\ÖLÍSZÙ‘šŽUÜ‘‘ÑÚÙ^YÍÒ™NL“ÕÌ]ÝÚQ[’UÑÝÒÚÔœT•“YÝ[Ó]KÖRÞV›žšÕV[ÞYœ]ÛP’˜œUÌ–‘LÝKÙ˜ŒšÓ]RÑÒ^ÑžQL“œNVLÑXÔ‘]UÖ‘‘ÚÊÊÚPÙÑNY\Ô\ÞM“ÚÝŒR’ÐÜ“RYœÜÓ‘Q[RXœYšZÍžSRÌÝŽQÖ^TZœŽZÑËÌ“MÌØMÎTÊÍ\S’\ŽZ[”ÜZœ“œSœ[ÔÓ™SVTÜÌÌÛÜÝÓÖÍÎRY\˜’R
Ö‘ÐÜMžSžUPNNR“œÙMÍ’Ù^[ØJÞ˜ŠØ›ž–Z™YMž‘šÞ™ŒÜY[Ò’ÍÝKÜÙQÍÐÊÞPÍ’ÚÚÓUJÐÌT“TÕY›PZQ–TTRST™X[Í›Ñ‘YRLÑZ™”™TYÚÎÛ™Û›ÔÖÐšŒUÌ›šÖ[]]QÑ‘
Û•’^][ÌYÜLÌZÌR\™ÑMÛ•N‘‘Ô–‘Ž[‘”ÞLÕ]’™ŒSÕÝÑœ’ZUÝLYÐ‘šŒ“’XÞQÎTT”‘Ý™ÑÕ\ÚQÝ\ÓÍÝQ’”M•ZÐ‘RXÊØVÓÕ˜NNJÕØ“Þ]ÔžVPÖ–MÞ–ZÌÛÚZ’MšŒÚÓÞ™’ŠÐ’ÔUÞ’ÒÒÑUYYÍÑQ^[Ô›”S’‘ÙÚ˜Ú[‘Úž–Z–PYÝÐXPœÒŒNÍ‘[–[ÍÌ
Û”NV›RRÔUŒÙÖPŽPÌVœÒÖ[ÜRÙVŽZÎ^“S™QÎXLP]ÒÒÓÛZZÍPÐVY^[˜Ž˜RÒšLÌYÍ™QYÕÝÛQÌ[ZÝXÑ”V[œV˜ØÖZÎŒ]™œT^ÓNQÒÚšÙÜÙÝÜ•^R™SÎQŒ[RŽSTUKÖ[ÕSØS–M]Ô\“ØMÑ›PÑUÞ›ÓNTXÕTÓÚQ––™ÔVÑÎ‘MœMÞZÚ]“ÓÞŽUÜ’’šZÞ]ÝÝÝ]šUžM[ÑŽÞUÝRMÎŽU^QšUÙ]ÚRL–ÕÕ’ÔÙ
Û•TÙÌ–›˜^Ž[KÜ’N[XÒ’Ð\ÝÑ›ÛÞ]V™ÛUR›ÑJÛ]Ö˜ÙÐ›VÛPÑULLŒØLNNÔÜM‘ÕÕSÕZ\TžÛÜÔØ˜”ÛÌÚJÚœÕU\”“ÔÓšÌŽ[ÞÜ“ÎNÛ›œ•ÚÍ•[Ü‘Ž”•–‘Í‹ÛÌ“Q]\’VRÒÛÖTœÛÊÞ–’LÛœÕÐ–ZJÙÐÙ[Œ’ÓÔØ•Q”SPÍTP›LÌQšYÑ‘S’SUQMZœÍMÑØ”LÒKÞŠÙØÍ]ŠÜV‘Ð•VNRP•LL›UQ•œŒ”\“˜[QX“š•ÐJÞ[šÞV]›ÓÖÌRRŒšP‹ÊÑžËÕLÓ–ž[PÝÓQÓMPPØÐ]”‘ÛÛM˜ÑL™RÚ\RU“ÝŒ•Û[ÔQ]ÌÜR’Ü‘
ÝLŠÌUSLLœ[œZ”žšZS”ÙY’ÔUÞ‘V^Y’ž‹ÓÙQÑŒNVŠÕU–›NVÑ™Y›ÞY”R’LÞÌŒŒV’ØÓ›VVÍ”RTÜ–œTÍ›U“ÚUYMZ”Ò‘LÍSÑšÌSÞœÙÛÚ˜]ZÌQTÒ[ÚV›™ÛÎ\™VVYŒÍÕ[SÙ’ÞÕÒPÐ™Œ•›USZ™˜ÛYUžR“ÖŠÒÖ‘ÔLY[ÛÕÜÓÖU›KÜUžÍœLŽ›ÙYÛÕM[M›žÕUQ\Ì›LÝ[VY›ÚU[Û”Œ•XV‘QÐ–T™œžœ˜RUÖ•Ö‘Ý]VQÑMÍYÛÝŽÐ]ÐPÍŽ\š“VÙMÜÔØÚÐÑMR”ÓÝZ\ÝÒÚØŽœTÓ™SØÚÔ”ÓY”
ÞZRZ^YX™^RÓ\UÜ˜T‘ÓžX[ŒTžNNR™‘S“ÒTMPÝUÕžPÖ“ŒŠÚÎR™]Þ–R’ÚÍÒÝšØŠÐËÕ”šÕÎSÙPÔ™V™[Xž[ÛSUMœPœœÔÐ›˜ÐŽÙÖÐ”Ñ]Ý[‘ŒÞŠÝÐ“Mœ]]PS“ÊÐš[’ÌÑUÞœPÔ‘Ð˜SSÐÔZZLÕ]PÍÒž™U\ZÐÕŒYÒLŒS•^•ÛLš˜ÑËÜTRRV]MR“Ø›’Z^KÙM”ÕØRÐÛž’ÔSLÜœP“œÙRZÑž[ÖZRÓ\[ÒLUT™SSÔÐÚÑYÛÑ]XÒÓVRØ”ÜUZŒQœ^ÒØMQœÎÚL‘–ŠÔU›‘T‘–˜”ÒÒS’Ð\YQÎY[“Ž™–”UÜÒÞ–‘‘X‹ÔÙ’–“Ùž[•XPL•ZžQÌÕQ\ÔÛÕT]–‘ÚÐ^^”ÛÝŽ^]Ò^Ž
ÓZUÍŽœØ”Ûž\Ü•[ÙÐ˜ÌÍRž[NYYÛÖ™ÕKÜ[TÓZŒÞšRUžQ›–”Ò^˜ÒÕ\PNZÚ^TØTZZÜÓÍ”Í›Ö‘“ÊÝšÔVÕÒ–
Ø\ÙœÖSÍÚÌŒÍ•YÞUžž]UÚ›“Ñ˜SÙÖZ^LŽÐ^NZÞ^XØÖUÊÝ™ÔÑÒYÝZQZ’˜ÎPÐœÞV™ÑÔV”SÐÌÜP^š–^’ÙLJÎ–]ØÍQTZ^ÛTÕ\•UœRŒKÞŽS[šKÑU“ÐLŽRJÙ’SšÝRTQQNRÜP”Ù›Z]‹ÔL™“ÓKÛžXÌ›ÙÌP“ÓQÔUÞœ‘ÚÓSQX‘ZÝÜUŠÕŽŒÞMYÝŠÛŒ›SNLÑÐP\TUœÕ™ÝÖR•ÒÔU[ÍY’ÒQŽ]Ò™TÕÙST‘™ÕU\“ÓÙ\Û–žUÛ™L˜ÌMLØ›’šYY•ÍÕ’KØLšœ‘ÒÞ^š”PËÙÍJÕM]“‘“ŠÓÎÊÙÓMÝY”QÙVŠÐSžPL“KÓÕSÑÑ”’™Í•›ÒÒU\TMV›\VT’U‘™ØÕ˜L]ÛP”MÒY™ŠÓÛÍ˜ÛœL^Z™ÔTÜR”Ø•]Ûœ‘“ÔXRLKÌQÒÔYTÓÌÐÐÕZTÞŒ“Y\Í˜YÛRYÌÎXL[šL›MÍ\Þ
ÑTÒSS^SSÑUÌžS^UUÜÜ•[™NRÌœZUPM–‘\ZÌœÌMÚÚÎÖž“ZNÒÕÐLÒ’RœÕ–•Û˜]ÞX^LÒV”žÙ\]ÖMÌQ^˜LY“Õ‘Ô’“Ù”QLXÐŠÜÒÓ’”Y[\TXLšš–SžU›‘ØM™–Ú™˜Ó“”Œ\˜ÜV›ŽSÐÖÓNS‘Ú”ÕØ–’\™\ÛQŒKÚSŽ‘ÕÛ]TRÒ˜Ü‘ÞV\X•P\ØÔTØÐQY^U‘ÐVQÜ]
Î^TÓ’“Ó‘›Œ•ÑŒÜÞ›ZUÓŽTŒ›ÑŒÝžŒVœÝUÙ^UY’NQ“[M\QÊÐÝÜŠÎÜV[LÑÕ•Ó[”[ÍÒÔÛœ[TÕ‹ÙLT’ÌÕÍ’ÌËÝšU“”\]Ò–šÜ”˜\Ü“˜LVSžÙÊÑÖ“PÓLÔ•\•]ÑÛÎ‘XQØÑÍÌ\Þ\ŽV“–ZÍÑ˜LÚM“’ÒMÑÞ›R]Õœ“[Z
ÖÔÑ’SÜ[“ÊÌV‘ÒÕÛRN\ZXN^[[ÒŒ•Rœ\[UÒ“–”ž”QV‘Ì”MYY^TÎÌQ”›”ØÕÕÊÖ“YUÖ\ŒU]XQPÒ\Ý\ŒÒÞXÔ˜
Ú•žTX–[žR’Þ’Ö•Ížš[Y”Í\T’XZÑMV“’PÙR‘TP”Í^ÙÝ›˜“ŒL‘Í˜“ÙÙž^N–[™ÍÕ[KÒY”Üœ[R]Q\ŽZÜ–œÜŽZ˜ÌÍÚ]šÝÝÕQY‘Õ]\ÝÍRŽNÙ•ÍSŒ]Þ”Ž˜•YÙÖ\NQÜVœYÒ‘SM[Q’ÙÒ–‘[ZQÐžUQœÓU[Þ^šÓ’SYÞ›TÕ‘]žP•“ÝJÜXXÑÚŠÝSPUÓMTUŽZÓUÙÊÑÚUÔL]›QÖKÍNJÞQUËÚU^Ý›™ÌVQ•RÒÝ\QžÛÕMÝ•MMÝYœ^S\Ö–Ö˜‘œTÕ–˜˜›ŽRKÓÔ“ÒÓ–[Ù‘Ø™ÛÌŽ“R˜\‘Ù™ÔYÍ“\–]N[ÚÕÜÌ’^“ÞQÌÙšV™UÎÍN^]Sš’”‘Œ”š‘L–ÝŒS[]š]Z”YTLØÜVLÒZÙŒR•M•]Z’[ÓMS‘VZMÔVSŠÚ]ŒSÓ™ÝØ]LÕ™\ØŒÎ\R]JÌÍNLY›NZ–KÒ]œÍY•’\YŽMNRŒR›’ËÔÞÖØYÍÍZÛœ›N[ÑQšÑY–“ÐÚÒžM”ž–JÛU[ËÓÒÑM“LÍœMÞQŽ[–™ŒV”TÚTMÚÓT‘[[‘YÐØMQNÕKÐœÕÒM\ÒÔ˜V\
ÝRÝÙPR›Ò’ÒœMÙ’ÓÑT[ZËÛÞS’QÒTÖXUÐMœÍœZ]ÙRÕ”UXÑ˜™™–Œ\ËÍÜ[ž]ÜLÜ•Þš\RRÞ]‘Û•Ò\[^”L[’ŠÕTÝ“•R^š”ZÜÚËÓžMÑ’Þ‘ÛP’ËØÌQšÙJÙÌÙÎÖ™••ÌÚÍØœÝ“Ú”P[šUÐPM]ÑSšPM™SÛ]X›Q^“Ø‘“JÛMžÍÝŒœ[“˜Ñ‹ÑRÖ•ÖUMMYÚ“ÐŒP™ÝÚQØÛÙ”ÞÒ™ÒL˜ÍÖ”ÕÐŽØRÒÒÍ’QÔ™ÙÛ]RÓXNZÙÎR–‘Q’ÜÐÊØ”PÌQÑRTÝÌ“M›Ø›”ÓØÕÚ]QšPYYÌQš\ÔVPT•TÛTÜQÖ™[XÙYËÜÌÜ•ÞœœÝÙQYœP•‘Ø˜P]šPÒÌTÖšÌÛR˜–›T[\Œ\QQšÓQÕÍÙ”’ÍÍÛUZ]^Ì[\ÙÛQŒLRÊÚÍÚ\M]“’š[YÊÓÓœXÎTŒ[TXÒÕÕYÌÞž˜™Ð‹ÑÚÌ’–“ÛØ“Õž‘S˜›”ÚNN“^\ÛY˜VÜ[˜›ÖQSÍMÎVÐPŒSÖNSØÌÞ•ÙÚÐÛÙQZRTÜRŠØUÓ›QKËÒ’ÚÐ•œ›YšR‘
ÕÜ]ZÑLQMÙSKÐ\ÌVÜÓÍÓ˜TÖŒLÛZœQÚÑœÔM]V‹ÍVÙŠÒÍÖŽ“[SÒŒÛÚÕM™–L˜Q™ËÓÞŒ˜ÖVUUËÖUÓZÝ™[ÒÞœVŽ[QV™šŽY
ÐÐ^’Y^NLSÌXMÙÌ[šÕÕ’’“ÎYœQZÒžY’ÐTQ‘ÐÍ]Ú•ÒÍŠÙ[“U–Õ“’ÍTÓÕÐQRNM™ÖSZÌPÒ™ÛRÜRÌY•ÐŽXÌšÜTšX‘PÑTÖ]ÝU™“]ØT[\RÚM‘ØÔUš”Ð˜›ÖQÌSÑ™Í^ÕUÞ’Ý”‹ÍUQ”]ž\•–PÓ•LÛÖ–•ÛžÐVRÎŽQš‘Ô’“ÌÜÒYÑLÐZQS•Ø™•^˜žLPJØVUÛ–Q]Ô^V™ÑŒYÎ^R˜LN”’ÊÚ[Yœ
Ô^‹ÞÍTQ•QØSÖ’œØVRS•P]™YM˜™QÕRÍ]ÎØÌŽÖY‘Û›ÍÒš^›PÚÑÝÙQŒØ^™ÐZÚQ‹ÓTYšÕYJÕ™MÕ•Ì^™ŠÞž™M[ÎY•žœYR[Ò˜^œ‹ÊÒŽÑšUPRÖÍÛ›LÎÚS‹Ì™SR^™‘ØÕÙž‘ZÝÎÐTÜRSTU^–ŠÙÑ\Ò“UUŒÍš]’™ÍY™ØÙÜÐÕ‹ÍÒQ’MÒ[Ù“MÖ‘L‘Œ[™™ZXÍLQ]ZÍQÚŠÕXYÚÛ˜ž•ÙšUSÑ\‘ÑÑ™ÝZÍM[S]YÜÛÎMÎÝ[’Y’NŒŒ[ŽUÙLVPU[ÓÙØÌŒÖQ”›]Z›ÔÊÓšX•]^[]\ÕNRXY”Ì^Ñ\Þ›[›MœŒMPÍVXÞQ‘ÌÒXÜÓÛSÎ^ÚTMÙTSÕÔŠÐÑžÒÔŽR–ÖPZØ\^”^L’–ÐRÑ•]ÛÜÒÚŽ[\ŠÐ’ÎM”YÒÔZ\ÐMÒPPŽPŒ[ÝÚÔ]]ÙÞLÝÙ”ÝÞ‘ÍœÐP›Þ•]SÖ•ÌSžZŠÖYL˜S[‹ÞT’˜Ô’–’”–Ý’Y’ŒUZœÍX[’ÌYQUÙ”š”ZLÞ‘ÚËÚÔ•ËÛ]ž‘•ÓÝUÙÖ•ÑMÙ•“U[UØš\šZ“Ô’žÖRØžÛÍ˜ŽŒ“ÝÎUÜLØ[ÑQ›^Ú[”œQZ‘\
Ñ”ŒÛSŒÎX˜Óž^œÕÛMÌÝÕUÙÝPšPPÙÊËÞU–œ’ÝŽ]Ø˜Ö\MXžŽÚœMÍR]›T“Ù‘ÕÕ”ÙÞTVR›Z•YÒVRYT[ÐÒMSTZÍ’ÓÌS›ÔÚXP‘Ú“œZÚZÒžÑÛœ™R›•ÓP”–“\ÑÍTŒ™ÓŠÔ–MšžYLœ]ZTÞPZÒœ]Œ™PPšÛ•U”YUSL’RPQœÜœÎŒ•TžžÜÔÓŒYÎSÙ•ÚÝNLÜÖLÍ›V]Ú[ÛÒÖMMØÜÌÌLØÌŠÑ›ÞÍ–ŒŠÔU›ÚTQ]ŒMÓ“V–ZKÖŒŒNZ\U˜˜RL–N–]ÛMLŒJÛPÙ›VV’ÒœS™N’ÐPSV^–ÒPÜMRÚUXSR^“’TV–YŒ–LŒ[NN[›RÕYÝÕX™ÑÓÌLÛ]••TSÒZÓ“ÎQ‘ÐLšR”ÔPÞXšPÖL™›ÚNM“ÔÜ›ÛZMT]“T’\[ÍÚÛ˜SÙRÐ›˜Þ™VšÕ[MMÐÜÑRYÛ•ÕR’žL˜\ÚÐVTÊÛ]‹ÞŒPPLÕÍ‹Ø^N]NXÌ]QÚÕÊÔU›”\XÖ–R^PUœŠÛ[ÒØNT•Ñ‘Û[ÞZQT[Ð•Û\Ð\›SV^ŒQ[^\˜ÝÕXÌŒ›^’ÒÎYPŒL‘Ñ‘œÛÑ›ÜØYÒØRÒÞŒ‹ÑÛšLÔRžPÊÔŽUÜÛÝÍ”ÌÑ”ÕÕÙV\NZÌÑV]ØÔV–œÑÖÔ™™žR\›LYšž[Z“Ø™•ÌÚ›LÎ“Õ‹ÜPÒÜSTSšXÛ•žTÙMÖÍ^˜\ÕÖKÓQ™ÔŒ]Ú”ÙÜÔÞYÛQÍÐÎUÐYSRNÚš[›Ûœ’“œœšÔÖ˜\ÐÑÔNŒ‹ÒLÖYZVÜ[–Y“V‘ÎÍÖ[•ÌÔ‘ÎQULÖÝY]X’˜X[]œÛŒZ™ÝšÐ“ŒÚÜNÕÊÑÝ“”M˜QUMØ”R‘PŒ]ZÒ\VUžRÕTVœÕÜ““ÖŒN\ÛR“S”ÛUTšZRÍÍÝÒÛ–]NVTQ•ÔÞØQR™Óž™Ó˜JÝ’ÐMÓÎRMSŒ”–MÙ]ÜØÙÍÑÑš\Ø’šM]›ÊÍŽÍ\Ú]]˜RTÝšÚ˜ž“ÛŒ\ÛSTÛ”žURÒÑœ›Y•“ÕÚUÛ™ÌÙZÒËÍUQ“L“ÙÕYÌÙÛ˜˜Ú[\Ú
ÞL”RšŒÛÐN•“ÛÛTUÎXÕœÞ™”›ÓÌ˜ÍSÐ“œ\Z]ÑV”ZV
Û›Ô\Þ
ÍÑ\ÕQ•\ÒÍ˜ÛÕ’ÍX›”UŒŒUÔ˜ÛÚ\[Zš”ÒÚÌ–RÞMÓ›UÚœÊÓP™KÞ”S‘˜‘ŠÌšÞLYÍ[Mš›XRPRYÑšSØ”LKÓ^KÌ•]\”ÍŒ^X\ÝÓ“˜•šÙNYÓTÞÓT›LQVXUÔŒÐTŽ]‘ÝŠÛ^PÔ•ÌÙVÔUŽM•Ü™JÑÖRÊÑRÌ\Þ’›L’›šVžŽÍXZRQYYÔ’UÜŒ\MÕ“Sš“Í–NÔLUØŽ\œÔ]ÒÙSÕXÐÑÍP[LÒÌœ\Í]“[šœÍÖ”•ZMÝÙÌÙ]L‹Ý›ZTÍ”KÜÌšLPÚžžØ[ÕRÞØÞUNSNL›MVÐQP\•ÐÎ’˜Û]›ŒP•^V›œNQX“‘VŽMØÑMÌXÑÊÜTV–‘LQVŒÜšÝTUÑPÙØÔŒ^ÕPQRÛZ–QšÐYÚØ”]ZÒMLÙV“ÓTL“‘UP[UÚ›ÔRSÛŒLÐÌÊËÒÌœŒÝžLMÑÑ›Ô]X‹Ö•ËÙ›ØÒTPØÍ›•SÐ]LØËØÌ’“œQT‘Ö“LMQZYÑÍN›N›Ñ›ÚœÒ“SKÞKÞ’RYÌÌLœÜ˜ÕÒ^^Õ‘ž[ŒZL‹Öžš–šÜ’VTÕRQ–›Ù™ÙZ•˜‘NÑ˜VKÓÍŒKÍJÒ\V•]Ù]QÜUÒÍ^ÔL\\ÛÒ\ÓÒZP–VÐPP”Y”ÔVQPQM‹ÎTSÞLR\]ÖSÍ™UÊÕP[ÌZšM•ÔMÕQ˜•‹Þ”›[ÓUÛœŒŒÜ‘Œ^YÓÍÌSVšRÎLÔ›ÍÓM˜ÑÙÎÍÕ\ÝÝÔ•Ú]M”Ð–QÒ]•ÙœÜJÛÓÓž”LÖšËÙ’žRSÙ^Y’›”Ôž
Û™ÜPZXÝŠÖY˜ÕLÙRÌ™ÐÐ]]‘ÝÝQÔL“šÔËÓXLš
Ò]Ø›NÔSžS–“NR™œ“\Ù^‹ÓTËÝžŒšMYÝÙÌÐÙÙ”›“ÚZXÙ‘XPÝÑ›™ÚLLÑRÎTšÌŒŒSRM•ÚÒšQ“Ñ™“ÛÑžœ–Ò“ÚZÑLMZÑRMÌÙYV›ŽYQ™ÌÔM™U™LN[˜ÚMKÙŽV™\ÝYÛžRY“Ù“ÛÛ•ÞÊÞÌUš[]\QÍKÙÜŠÔV\Ù’ÍÕœ‘ÓÕ›ÑVN\VX^UPÕÞTUULŒ›TÔÕÒXŽNL•‘Ñ”]ŽXÙUQœVMÓÒÔJÞRÜÚ[š“Ö‹ÙX^•ÙŒÎYÝ’ËÓV’Ü“ÚØÍÕP“™“ÛZž–SÛQÚTKÓÙ’RSŒ™Õ“
ÒÖ[’ËÖÔÎQ˜ž[PSMŒÔ”’\›ÌY^^QÚ^SÍTÛVNUŒPÌÓLÊÞÌLÐ›ÎYUL
ÓŒTÓÐSPÙ˜RÎYŽ^œ“”“Ù
ÕÌÕRŒM•X™›”\]‘SØR™LÕ•T–ÓÍ[ÝJÙž“žZÛŽM–’Ú˜TQ^ZžZØQÓÑÝÍÛÙ^P[^ŽMÌÓ]›YŒÑÎ
ÞXÍ›
Ñ•Í™ŽVYUÝ•]™UUZQ[MY˜ÛÛ‘”ÝœÒÕRÛØÒšœS•“ÍNKÝŒV“–QPRQ“Y‘ÑMÛÑÜ›ÔV‹ÔÌ’ŒU”\[ÚKÛ•ÞM”˜˜ÎMVQ\S–Ù[ØÝÒÑQTUœŒ
ÑZ]N]X•š•ÑšNLÚÒÎX•Ù]Ñ]ŒÔÒÓÑ“SPÐT‘ÒÖP“ØÑRŒ[QXÒÍÓ‘TÓNZÞ\”TL–ŽMTLYÍØP]Õ”•‘Y]’^™šÙ[ULÝÌ^YÍÛZMžÑœ‹Ý^˜^[Ü”TŠÜÓÒ˜S’LÖY™YPÕ
ÚÓÌ”SX’ZÙ‘XV–œžÖŒ•’”ÖŽ^Z“U–Z›ŒPšM^›SÝR›ÍÔÔL“ÜT›RÞŽÍÓÌŠÌÔŽS›TÝ\•Z]^Xž\ÝLÜÔLÖŒŒÞPŒVNNÙ–•ÜQÑÚ–UPÒŽPÜ™Ò]VQÕTR
Ý
ÞM›Ü]U“MÝÔ“RÙÌU™ÍÎ[YØÒÔÑ‘UÚÓËÛ›”UXLžXTÝÕ›N]Ü’Œ[ÎPÓÛœšM[ØT›ÝPÕX‘”ØÔZÐXš˜Ó”ÛUÕÚŒÛÖRšÌV”]’•‹Ö[ØYÒ““ÎØÜY’\]””ÔËÜLQ’^ÛÚŽžSNQËÌÜÙMR‘SÓ“RY“™“ŒÎZËÔØÚÍ[›”•[ÕÕÛÔ™ZMSÌRŒÒ‘ÎNYVQÕ\”Ž]ŽÚÙUMËÙQ]Ùž›Õœ^‘Óœ[]ÌÎM’UØZ˜ŒÞ™LÕKÜ“P•ÕÍ]ÖÝ”Ò›™PÍÝ[–ÝS
ÕÛÕŒTUÌ’›šZ\Rš™ÌPÛÓœ]–^šÑÐÚÖŒ’Ôž[ÒPQÞZ–žXTX’ÊÚÜRÐœÚÓššŽ\ÓRÔRS™šÍZQ‹ÓÌœÓNZLÚšŒ]M\Ð\™XÕ‘Ì•ÓØØš^TŒÐQÕVŽ˜\ÞMLØ”\šJÍQRRM“ÌÕÛÚœŒ^]”›Ž›ÍTœÜ]œQŽ^™Ñš^NL“U‘]Ú”ž^T•ZSÛNR•ŒÕRÔ™Xš›“ÌÓÎ]Ñ\ËÌÊÝUÓÌÕ”Ó›ÝÎN^”˜›LŒ•Œ•ŽÑÑUKÌÐÍÑR[œ”ÙÚÑÍ‘šSÍ›Ò\M›ÙYV“™ÍQœMÝ•KÓÛ›LÖ“’šVY]ÜMÌÜŒËÓ™ÞÍ›YžQMP^›‹Í–˜PQ’^ÑÙSØÜœ›TVUÔM™“ÓÎTL˜ZÒSÍÓ‘]]“žZZMšœ\[Þš”ÛZKØÜÑUÌSÒ]”L•’ÝL“YÎŽ’N]
ÖMV]M˜\Ø[UÛ‹ÒÝQRÐ™UŒÞÖKÕZÑJÌ”\ÒØP‘L[Ø“™ÙMY]ÒÒÌØY”XMÍÑ]š\Ò\ÔÙVŒŒZ–NNX]ÓÚžÛVœÔ
ÓÒUÛÚœSØZÑ˜ÍÔËÖŒÝXÑS”ÛÕMÕŠÝœ™ÓLžÐNÜ“”SP–LœZÖ‹ÑÌÙÒUÑÕ™ž•Û’YÑŒÔ^žÑÜžXÓ]LÒXÎ•ŽT\Þ“LSÑÐPR™œUSQž™Ý\ÌZ’ÜÜÍš”Pšž“\ÕÑ[^JÒ‹ÙÛ™ÙLÝŒKÖ™•ÙÍÝUPT^”Ø™•ÑQTÞ™ÍÑÔÙŒÙKÝÚÓ[QN•ÛY›\ÝX^Ù™^[ÍT•[ŒÔT•]‘Œ‘•ÙÓ]ØÜLÑ˜ÜYÖYVRU’]ÒJÜÐ˜ÐTTSš
Þ›LURZÛØ‘ÞR•Ø\XRÒšÜ‘ZQRš™‘Ì”ÑRL‘\œŒZœŒJÑÎJØQYTžÛÜ™ÙšTSU]YRZžÛÍÞ™ZZÖPRSÌZÍž“LXÙMU˜“ÝÖ™[YœQ[–^”ÖšÖTœ“MYœ™“ZSKÜJÊÌUÞ“Z““ÜMÍÑÝZÍQ”ÚÍÚ–ÝQœMšÍÓYÜ”™ÙZÌÐ““ŒYUÍM›\ÓZ‘“QLÔØÎZ”œYÒ–MÔÐUL™V“’Í’Œ\YÝÚ”SÜÚ[Ò\Qœ‘ÒšÒÝ‘Ø\›˜ÕÕÍ^SU]“ÜYVYÔžŽžŒØÔÙÙÖ^KÓYŽ^“žJÙ™TÚN^”MÎUÚÔ‘ÓÚM˜[•Þ˜•ŽKÞœÜÝÓPZÌKÔKÕ‘ŽNÒPÚL“^SQÖYšžVZœÞÝ[ÛÝM“ZMM[RPPSPÚŒ\Y^Ø“SQ•ÙÕTÖž‘YN™›ÙØÜ‘“ÔPP]””SÎ\QŠÌ\ÕÜŒš^PÌÚÍ]Sš
ÒÕ›ÔÍÙTR\MPÍ”’SSÔTÝÒÓ]ÌžM˜ÒŒ[Pœ˜–\“Q”YÝLÝKÚÞ˜QÕ™’TÞY•ÜÎ]MÝÒKÒUÜÞU“]Y”[ŒÝX]M™ØL^ÌQ‘V]V]ÔP^ÌL’TŒMšÕL“[MÍÝ
Ñ’ÚS˜šM]RÔ™Ø˜N[š–‘žšMÚRÍ]ÍÚÚS“œÍŒU\ÝÚÔ™šØž”ššÒMœYÍ•“[•ÛÞ]NSÊÑLPP[ÌSÛ–[LYQÝÚU”“RÝLÍ–‹ÓM”Î˜Ó”PÐRž•“ÙŒœSV’]›–”ÔÕÝ‘–Y[Ð”ŽV’PÌÊÞ\\^˜ÍœXÛÒ“–ŒSÑœÌ‘]ØV”ÖLÊÚÙÕMŒÔR^˜ÐŒ›šÖQ˜ž’UÖZZUÐ˜ÓÔÒÕÊÞÙÛYÔ›ÑXÖ
Ó’žRÍKÓžMLÝUQ]ØZÝ•–•[\Œ™ÌSÔÍ‹ÓÒØ‹Ó‹ÔTUÎ[’\XTÌÞÙSÞ“Ì–^[ŠÓÞ”“[Õ”ÒšÜ”ØÍQÒR‘ž™ÙÌœÖYUZÛÑÍ“V^Ø”’Œ^[˜ÞVŠÜÖÐL‘T[SRÐžV”[›žœšÔÞSSPÌSL•“ÒZØ›\’‘ÚšÑÓ^•QZU”Ô˜ÒÓÒVœ™–™ÎÜ]KÑ–YÙNJÑP‘‘QÙÎÔ””ZTÕÑœÖ“žÑVÓRT[•]Œ™‘ÚÚVPÐMNVPÞŠØTÊÑTSÙžÖYÓÙV™SJÜ›•–YYVYX“ŒÑžÖ[ÌÌSÒÔ]ÐSÑÚX^[ÙÕšNÝ“ÍNÌ“ŒŽY^ÙÎ
ÓÚžœÌÛ[‘V’šÓÍ“XNTMÛYœMKØ•ÓŒÛÑPYÒLÎRÐRÛÜ\VžTÑ[[‘L•ÌÝ•˜›‘Õ\XÙ‘ÒZÖ‘’Ì\ÌÚ^ZY–UPTÜš•Q™LØQ”PÓ”ÌÙ”TÕ“ÜPQÚT”M^M‘ØÒÐš\™•QSŽÍ\LÒÎLž”[”\•VÓPPØÔSYPÐU]ÞÔ‘[ZÞM[]Ð^šŒPXQÑPYÑÝP™–LÒØ˜ØÝPUTÜœNQÙÝÝ^YÕX™‘\œ]TÍœ˜Ö\›^[NÌ]•^˜ÐÓTÙœ“ZÌÍLÑV–Í–šŒ“Ö›ÎSRšVÛ–šXŒÜÝXÑÐÛXÕSZÒNŽQ™ŒÓËÍ[ÖZÛMÔÒŽS”ÌÕÐ™žS™YXÎ\žT‘šÞZ•žKÌQTØ\‹Ò’PÌÛÍ›ŽYØLŽR˜PNZYŒXPšËÜŠÕUÌÍR‹ÝPŒÕ–”’ZÙØÕ]”ÍZšU•ÍÜ”ÍšL˜ØÙ“S\]Üž’Ò™ÑUœÝ^VŒŽM^S\Y]TÑRÍ™•XZ™ÒMÌÌ›YÍÞ”œ˜”SÚÒÛÑÒPYÌUÑJÙÕSšRØÖØ\Î\QÑÛÐÖž™M“YÖSÑÑ[ÐQÊÖUV–Ž™SSÙÝM”UÝØYÎ›Ü–LT™QØTUSSËÜT[ÔQÎØÌ–šÚ]ÕšÓ›“•›ÐSÍÓÝÕQÒ››]Ó–Ö\“›Ò”ÐŒ‘L’Ú“]ÑXÛ•ÜÜ™PZ”YLYÚ[PÜZPÝM[\\•ZÊÍÝ›ÕZÔÐPPÛY“ŒÑYÛUÛ›ÙŒÕPØVŒ\ÕXÒŒžÕÑØÎ‘˜ÐÌÒž’MÝNTRQ’[]ÓX›œÜšŒLZÞÒœÍÕ]\ÙSU–XšYP˜Ô™ŒP™RMÝÑÜ™šÝÔ’Ô^MQÒMYÞØ™ÕÜ“ÞÓ‘œRžšÊÌUÑLRMRRQÐSXÒÜÚÚXÕÑ™ÒYÖ]“ÓœœPZÖQ”RTNPPÜÑŒÛ”ÚÝÞ›QÜYÜ”œÌÝKÝ”LÌŒÚ^’KØYÖŽPšÒÔÞ“ÞŒÜØPÛÍUÑÜPÖÞV]ÓQ”ŒÝ[]ÕÌÞY]
ÑÒÒÛ˜œÕ™ÝØÐ][M‹ÙZÍ™RL”™\ÒÑLÒ[MM˜[‘ÚQR›ŒœÜ]Õ“ÎQ]˜œ
ÙÒÍŠÌÑVÌ›Œ™][Ü\›“ÕÓ[KÚÜLÜÝ]PÓS˜QÜÚ–Tš•“œ]•Î]ZSUÜRÕÒKÛ^\šžÙYœ˜ZÎÙŒYÐÐLÌTÔÌœSÓŒUÖV[ÕMŽPØ’RÎ•RÜ’Þ’‘
ÖSÍÓÚÞL™Ø’LU‘˜ÚT’˜‘ÔÐYÌQ“Ø›ÔSXQÓ“ÑÕQÐLÐV“^^ÝÙŽÚÌ\™ÞŽY•™]Ñ•NÌÍÜ–žŒ™RLLÝPPQPØ]ZYÔÚ–QSÜ‘YM™^›‘ÔRYÝÞžLÒZÍJØÑÖP\’’SÓËÖœÑ–NSVÜÖšÜÓ]T’L’ÛT\ËÔUŒY^
ËÑ^\Ö“™š–Z[•ZÖRQ”TLX[UÑ‘ÖŒQÔ\X^›ÑÛÕŒÛQÓÜ^žZŒYÝœÚÊÞZÒ•]Ý‘“‘TšSRÛSÔÐP^PœZÔŽ]QÝ˜XÙVšœLÒ˜UP›“U›Ø›œÎ\ÜœÔÛÜL™žQÐÑ•ÛÝ”ŠÎ™Y–™M‹ÝÛÍ^YÑ’U“ZXÌÑPPS”ÚM•ÌÎVRÚÍÖÙÑ™ÔÞ•˜QØ™ÓTL›TQPV[Ò‹ÙÍÑÛ
Ñ]UœR“ÖÒUÖÖQQ–ŒTÝ‹ÜšÒU‘ÜÜØš’œNLÕ^^TÊÒÍRXÌ’RšS”‘XÕL›YØV’ÌLXÔLRQ‘ÓÒÓšŒ™™ÑÑšš]ØSQÒXšTÙÙÒÝX‘PV˜œ›ž•šLÛ•RÜMœRSÖšŽUŽÑÕÐ’TÙœÑRÙVZšÓ’šU”ÖSœMRR“S]“•ÛÒŒÑŒÑ•–P•Ì“]PLX–ÌŒYÑ•U•ž™‘‘ÒÜYKÜÜX•ËÐŒ˜RKÖJÑRPÜTPV‘KÒPÎTšTØSÛ™™MÒ•Ñ‘ÙÒÌTÓ\SÚSQUž™T˜Œ]ÐŠÓÜ™ÝTŽ›TÕ˜›XÕÓÐ\“ŽZØËÖ–KÙž[YÛÙØ™UTPXÓ^ŽR‘[‘ÔÝÑÐ]ÑY‘\]ÎQ•Ù›ÐÛQØÌV›ÛŽS\ÍY\Ž‘–VÕÛLZš•˜‘Þ[ÓMËÍÝY˜]™
ÊËËÙšY™JÔÓ\žQÜQN\Yœ‘ÐÜÌ]‘ØV‹ÒšŽT”‹ÚÕYPŒ›NPYÒ”•PRŒP–Ñ‘\Ú[LPÎ[ÔJÖœL“NÛZ™T›”Q]’’ÙØ’›ÛPRMÕ‘JÑTÒ]Ð˜Ì\ÝÖ–ZÔ›YTÝÓ‘ÎN–ÝY•QMÞ•ÛT\
ÌLÙÕYTÓZÍN]ÜL“Û‘ÙŒVRŒÒXNLÙ’LÑ”›\YZZÕXÙ“ÛÑRXŒœ•SYÐM
ÒL’•Ø[Ù‘ž–›ÜPÒœÒÚšÖ˜Í”ÍÕMÐLKÎ”^PšLRTSž[›M\U‘œV–S^ÓSÒÍØXÛ”ÌÝP“Ò]RR’ØÝRžŠÎYËÑ
ÒœØV[–›KÌÎKÚ‹Î•“M\X\“Ü’MÔV‘’ÛÍRPPÐQŠÞR™ÔÙÛ[\L‘ÑÍSÌ“ÛÛš™‘•TÞŠÎ™‘šYKÞŒQP˜œT‘TÒÝZRÓœ’R•ŒRP˜œPRV›ÚVSÔÒÒV‘“Û]RÚÓÝÜŒžXÝÛÍP\\ÐRQVU‹ÍÛUMÎÛÒUŠÑÔ‹ÐÔ‘TTSÚÐž]’LÚÙ•ÜMÞT]ÐN’ØÍÖœL˜]ÐÙS\ÐVÜšÒXÜNÌÕÓY•^™ÑXÌÛÌÑÑÌ›ÙÐÙU“ÛMÞ™ÚÌÛ^›R]L]VÝÓ˜MÍšØV’Üš‘ÙÕ’\ÙÙÓSÑÓÒÝQ^SM[MÝ˜KÔÊÌ“RX™SL™‹ÙÞÚKÚÓ\ÒÕÛÔÐX\ÍYTŒžRÍRØUÚMQLLÞ\ÞÙ‘PPQÐSÍQÕ‘ŒÛØMÕ’R\™QLV”ÒÒŽYÙLLš•ÛÛ™ÒÑÓÎ[“Õ›ÒÍÚ‹ÌÌ˜”›ŠÌÑ™‹Ö™ÎØÙÛÒ
ÌKÚŒUQMÝÒR˜ÕØY]ŒPÑ™RÖLÎQÒÍRSÒXÝ‘ÑQLÌYMÎPŒŽ\ØÕÐX’•XPSÚ]^”•ÜYÞ˜Ü™VšÛ]Î^šMžšÒXÚ]“–VPPRØLUœÒ›MÛYœX”ØÒÚšY”ÐÒ’ÙŽS
ÝTÜž[Ò™^ŽMMÕ‘YÙMÕÝÒZÚÍœX”YY”LŽ”[ÑS’œÚÛœÍ”QZÍ–UÝ‘ŒÞNQœž˜”•Ø’KÚ•MPNÚŒLPVÚQYÑŒÍVž^ÑQÔQ–XY]ÎSÐŒ’ÝÚ^P]Õž–]™Ó’–[Q”ÓYÌZ[™ŒNMŒÍ›ÎNNURÚ“^ŠÑœPV’ŒÑ^XÜSSZÑÝÕ[Q[”ÌÒÔÍÞZY–“MLZÒNPR[ÞUØÞ
Û“]˜Ü\˜”[TRž^M“Ù[Ôš“ÌÙŒÙ˜šVMÓÌ
Ñ˜ÝÑ’ÚZŒÙÙœ[P^™ÚÑSX[••–]\“N\ÐSVS˜QXÍUÓ’•ÖŒÒ˜L]˜]ÚÌSšUL˜ÌSŽÛ’UÛÑŠÕ”T‘ÔXœÛV™M˜ÕNTÚØ™ÚÚÕËÍÍŒ–’ÜÑTYŒ“]RSÕÕQŠÛ[^SšÑ
Ñ•
ÐØÑ’Úž’XÕÒQZ[Í’RœÞ^L‘L–Ñ]NÐ]Ø]ÚRÓ–YÓ•ÙÞMÕÙœÌÜÍœÔÚÓ’›šÚ•’XJÛ•\ÔžØ]XÝÌ“XÕ‘šÍR’žYQ]ÜÜÜ™Ð^NÚŠÑXÜÛJÝÖM‘›žŽ–RŽ˜ÓÒ]‘ÌPŒÙZSžMØMR]YPÍÕÍZYÕÌ–œÖUÕLžTYLš˜ÔMNÝ‘]RQS”–KÝÙ
ÙØYYUÖ]MÝ
ÒUÎ[\ÒËÝ‘MÛQš™ŠÚÌšÑÛXÒÑÊÖZÊÓžœÜÒTÙ”ÚÚÝNSÒÚŽX“PÐÍØÑ˜V•[UUMÐÔÕœN\UŽLPRTÚ\™RËÍ‘”SLÐÌ•]RMYLÌQœSÐ›Z\šœŒÞœÕŠÚÕUZ“Ö‘ÝQRRÑ\œXÓÙ™ØÐMŒMY[’[XRÑÑŠÝTTUÝÌ‘œÐLMÐPPRSÞR]V”QŽPS‘ÍZ“ÑÞ]LÑÎ[RÙÜ–U›PQQVRÕÒÝ‘RLXTU•‹ÚÌPP˜–Ì˜Œ”“ZÔ™N•RXÌYPÑ•ÍÞÜPYœÐ™“ÝÝZKÑÜ•Üž[™‘]U‘ÊÛU™UÕMÚ“’ÚZÐ^ZËÜ›^RÙ\^S›QÒTVÑÐÓÓš™›]‘ÞNZž[MMÌÜÔÕÚÔÕQX[QÍ^ÌÕ”Û“™ÓÖMÚÑSÐÞÖ^\Ì\“VRV”–R›ÌÛÍÙÞ•QÝ“ÑZTÞPYÒÍ
ÙŒÞÙÌ]MÌŒÑ–Z“‘ÐÓÙ[œÔÐ]ÜÛPÐÜ˜Ý“•TÜ^’Ý]JÚQŒÒÒÕPšØÝ–LšYQ–M•‘
Ì^Œ–YUš’ÓQÌÝKÝÝPKÝÞMÛ]ÛV››”ŒŠÍ™“ÔœœZ™Õ”˜QTPR•ÞYŒ\›LUÑ\ÒÊÖKÔS–˜™QJÜŒŠÜ[ÔÌÕ“ÚSšŒŒQŒÞØ]TŒSÒRÎVS”ÖP›Ž]ØP–LR‘ÜÞÐQUMÒÙÝÑÍ˜]ŽTÍÚUÌ‘ÒÕÞ‘šQ›\ÕÒY”œSLÓŠÐ^•N›Ž]R[]Ü\R•]ÒSRÌM›QÝÛš™Ì’ÜÚTÝ[ËÜQÛ^M^’SÒÛZRÚZLV\RÝ–NVšÜÌœÍS^˜N•ÔŒÕŽ\]ØÜ\T‘M›š”ÔÌPÓ[QNXUÔQÜ›ÙÔÑT–‘ÕÛÞ–‘œœÓVÖSÓRÕž^[“SÚÒVœÜØÜŒÛ\Þ›Õ’ÝÚV“Ø”[›Z’[˜›ŒÙ^Œ^[T]QÚÐPQYÕÝR“ÝXÞQSÝÜÑN”TM^]ŒÓÕ™ŠÌX\Ó^Ð[ÑÕšŒLYLL[LÚžŒÔ›–]NU[ÖÎQ•Ô‹Üœ]Óž^•šÛVV\ŒTTZ’ÜÓSPÞšÍV]^œS^VŒÖMPžœSRXž’SNLÑ›“ÙZ‘ÍPØž[TšSÖ–ZVL\Û[UR•˜ÜÜŒZÙ^P™ŒÖYL›Z[LYRÓÜ’’œ•ÚRÞTTÌ•V™LÊØÊÒTÍÙŒÌ•ÙŒ\•XÝÍZÞQÍ[ÕÎ\Q‘›[ÝÖ\œZM\ÒZVÝ•YÓZ]ÑP]Z˜ÚÑÞ\ÍX›ÒÔ]QÕ[ŒKÒ™“š–QœZYJØÕšœÑœšTÝÎ[“[šÝ]žQ^•š‹ÔÓ™ÓÌYÒ™V•ÍÒ\ŒUÍŒÞ”^ŒÜ]ÙÞNTXQ\]LY’UœÑÜšKÙM’ÓÒØY]ZLÛšMMQ^ž‘Í\ÍØÌÜ][PQÝ‘ÍÞËÐ•ÑØ•ŽÑ^’PÖ™ØQ•MÐÜ”’“]ÙŽMQ”ÑÔPÑTUÓÝPRUÐÝœÛ›žÌ”šœ[œVRÔÞœ^œXØ^\ŠÍÍ^•‘ŒX“Z•ÍÜUTÛÛš–ÍÒY“]XP\ÛYÜX’’[›NMŽ\ÌY[UMØYYM”M”ÔÛNÓ[™œ
Ó[]Ì›’ÑÝØ›Ü‘–™›Î[•ÌZUœZØÛZÕML‘ÜLØ[\ÚØÓ“Íž““ÎXÚšSYQÑÚÖŒSÖQMR^”Ö“ÐÌRU^TÒŽPSY‘›QÙPÓ•XYS˜Y•ZÕ–]ÚÓTLZÔÐØ‹Ó–[[Ø›[P”PPYÎRRœ˜Ý’UÞ–YSVVÚŒÛ\S‘ÊÐÕ^–]^\ZÚÙÞ“MUÜ“˜“ÒÓÚÍÐØÑUœJÍUXÑVŒU–’RœÒÜ]žMÌÌ]
Ú‹ÑžÍ›RS\T’Ô^XÝž
ËÝJÓÑY‘Ñ‹ËÒÍ“ÙVXŽÙÕXÎ\ÕLœ”[ÎY”ÎV]ŒPQÐRÔÌUÙÒ\X\•YM“”šžÑ[œQÑžžÚ”›ÝÚÌRUÎŽœ–TÌ\TTŒŽQÍ‘TMÝÓÙÖZÝÐSP™PZ’QÚ˜˜\SÔ™Ù–]ÊÝ\ÞÙ[ÌV”[Þ›V“VZÞNRTŒ™ÖÒV›˜TÕÕÞJÌšÑ™ÌRÛ˜SÊÜŽ˜‘Ý[Õ\LÑÙÒUYMÞÝœÒVÐ’•“ÎPP“[ÊØ’S]ÌšRÑYÞÍ’‘“]™’˜ÔÞ”ÚÛŽÍÓÌ–Ù’Í’“–ž”Œ•“š\›ÝÜTŒ
Õœ›ÔÖÙÝÎZŒ’ÑSšÚÐÒØÌÍÑ”ÞRÍM[ÖÍU’SQŒÓ–[ZÐÜ˜S–YÜÙ‘ÜÙØR“›Ñ•SÛÔ’Ü•šŽPÝZÓ•]Œ^‹Ò[œ›”ZÕ•XZÖ˜’ÛÚJÝÕÌ˜ÙXÕÛ–ŠÓT^ÖUØÌŒšX\•RÛ\QÒTMœÍÌÍÞN[Ö•ÔÔÍØ”ÌUP‘˜U‘œ\]SŽMÝY’ZÑ›™’ÜQRÙV•ÞÎ]ÔSTYUZšØP™]Y’ŒÞ˜’ÞPÑ˜^\X”ÜÕ\\ÌÝ\RY˜Ô›ÓYÝTÎÕPYÓÓÒÚZ•ÖÑÖ\ÓRØÝVšœMÍÛPSPÚ
Ò›ÎRÕS•ŒÜŠÖKÎNLØU[ÚUÚÞÜšÑŒÝžYŠÖQœÒÓ™]ÒÞ\œšM[SÍÝ^Y’JÙÝMN“ÔKÛŽYÊÜ‹Ö’Î“ÑQÓMZËÛŒ[Z’QÌ\ÝLMVX^U“ÝJÚ“QÔÔXL]Z•ÕÓT”“›ÚÞ]\YVSÓŒÚÒÐ–›˜œÐ˜Õ]ÖZYÍÊÝRØMÎÚÐT–ŒZ\R\S“Ú“YÌÓ[Ñ–’UŽ™ËÑ”ËÐÕQÒÞ”‹ÕPPPQLËÎ[ÛÍŽUŽ‘ÓXÙV]QÙÞÍËÑÚPPÓ]šÓLÌ]‘ÌŽM]“ÓÙš“ÞÚÒÖVU™R•’ÛÎR\UÌY\Þ˜”Ö]ÛÖÚ\PVVXÐÝÐULSL›LÙUSÛœŽSÍÌXÓ“ÜÝÊÑÝÐVSÕÛV‘˜žMRÐÑMRMŠÍ“›LYYÔÑÊÑTPMÍ“ÍšPUQÙŒÝY‘žS]UÝØÞJÕNS‘šœ–”]žSX^Y]ÌÑ^šÖ\ŠÐÑ›ŒMÌÝ“TUM›V–•ÌÐÎ^‘Œ\M–œÑ–ŒŒ[]N\ZQTPRÖ›YÝÑÒÑÌÍÓØLÜŒÔ
Õ[NRŽšÓ\Î^’UQMÒ–ŒZ•ž’ÑTÑ˜šÑ]›TÎ\
ÖŽ]]ÒØSÔœÜMÝ•“œŒL–ÜÔÖŒÓR“‹Ñ–U“ÙÖÌÚÐÙÖVžLÓÛÖLÝ^Q“XÛÕMQÙ’\“MÒTÚUžÍÜXJÎL‘Ó^YÜ›XØÌZÊËØÞ
ÐR›ËÓ]V›SÜ\ÕÛšÒÝ˜Ñ”Vž™˜Õ
ËÚÐ–PÛ‘ÓPÛÒL\ÖÞœ\ÕŒÒÔÖTQÌYÌÎMšÕ‘[Y]ž[œÑSRœÍ˜RR
ÐLÖSÔPš’Ò]Ö]Ü]ÚY’\ØÜVKÝž›
ØŒÒQ\ÔÒš“U™NKÙ•ÖQ^šSYQÞ]UŒÝ\‘LMNÊÒLÌ–Œ“•ØÌÐ’’MÛÌÙ]ÌTS[Ó[Ñ’[œÜ^œYKÓ›Í•Ò“]Ö˜ÓS
ÚÖÓÝÓT[]ÕMÊÜŒ
ÙQÔ”œÎJÚÝÞ’ÊÍKÜÕ‹ÓŽZŽNX‘ÎNSZ–˜ZÑ”ØÒ””Z’ÝÒ“VRÔÛMŒ^š•˜[Þ›šXÓÑÙZÕÜžLTŒRP]ÐXÐžœRÓÙÛ•šZÚ›SUžšM’ÑÎ“ÝP“Z“™Ý’[”V’™Ü›Ö•˜\ÌÙ™ÓÌÎÝQVYÓÌØ”^MÛÐŒ\ZLÜ^JØÖ“M]ZÔ\›“ÍÜQ“JÖLÔ‘”‘M“Z™P“]^ÜZZÜ”ËÜ“ÐØÝ™žÞSVŒM]ŽTÓÍÍÚT“TQPXN™““Z›ÝTœ™Ù[š
ÜYQœZÓŽMÐ“\Ò˜QÚN]šÛÝÌšÜœ”V“ÎSž•‘Ú]“‘Ì’NML”]œTQÛÍSZKÍSSÙ–™ÙLÓÞ‘ÞR”\žT[ÌMÙÖž•ÊÓTMX•ÒML•›R\ÊÑ›\ÞTS“™ÕÎTV\R•Ò^U™YL^ŽÝ–‘ÕU‘ÕšØÒÓSÓšVÔ’ÙÕ›L^˜ÔšQÐ\VMLU›“ÍÑ–PQZ\\Í™Ø]ÐÔ”N]•QÓ›œ\Õ˜Þ‹Ô‹Û]Ø‘œRQÌQÙNN˜Û–SNM
ÎT^L˜LZV‹ÚNV]T]Ü”RM’\]UšX‘ÑÓÙ•^‘žKÑÌØL‘Ð‘ÍÚÚYM^SÙ”žZœRžÛ’U‘ËÔ^–PÙž•QTMÍœÞYÑ™ÙNYËÍSÌÜXÐ’ÊÌÐQPRÐRM”Œ^ZQZÚRU^”ÑÜŒUSM”]ÞŽUœœÑÔQ˜ZÞZÒŒ˜–‘PŒÖR›L‘\Î]˜–UT’YÛP^Ì˜Ô\ÕžšÖQÙ”ÍLÐÝ‘[ž]Ñ’]”L\‘’^œXSÛQ™ÖRŒÑÛQ••’Z‘ÙÛ–ž\ÒJÕØÚÌPÔœ‘œVQ]KÕV\SÑÖY\ZœV•YÝ[[ÐRPÕ]KÑÙ”ÝLÒŠÙYXÚÊØÌ^žMTLÛ[SY•ÎT“P“•ÙMÔØ^ØÚPÔŒšÝN“šŽ\‹ÑÛËÔÒ™KËØ“XTÌŒÛÓÌR\Õ–•SÝRÑÞš[SÜÛÍZQ””žVÕÖPYÚLU‘’ÙÊÛM’ŠÜÍØÙ“Ò›œTÒÍT‘ÐP”Pž•ÝÑ“QZžTÖ™ÌM™JÍQÜ›šœ”Ýš›XÒÞÖ•ÝÑÙÊÑÔÑÖ“MNXŒQ\Õž[\Ò’TYœšÛÝULÎ•KÜRPÞZÌSYÕØÓÎL˜“›Ñ‘]Þ‹Ñ™™ÛMÖN^Y\›ÙXÝ[‹ÑÍ]ÎJÜU\ÞËÐ™›‹ÌKÙÓÙMYÙÜ•ÚNœPRØŒY“Ô^YÒMTÜÛSYZ–X•]XQÔQÌQžPV]ÍTØØÑQ•NN™™ÑÝØÕÔ\XTÛš’ÍÚÊÙUÑ™T
ÊÜÌÚÔM”ÍÜÔÔÝÖ“ÓQ–ZRJÙÔÓÔNV
Í˜ŒÖKØÐ™KÓššžÚSXŒ•’Y™ÍÛKÕÚÜ
Ù‘˜YZ\YVMÓÔ‘ÓÎ]Þ‹ÜZ]”[ÍMV]\Úž˜SÕÙŒÞXM˜[RÔŒÌÜšÛÎÖV‘““ÝLMÜ›SÜVšYÓUMP]–Y[ÎÒXÊÔžžP•ÍKÑÒÍ[YÜÚ’““’•RÝUÕ–•ÜÌVÛRSÑ˜–Qž–œUÚ•ÖM•[ÓS
ÔÒšXÛ
ÔLÚX“ÎÓÔ•Ø\Ž\PJÓNVSZ[ŠÝ‘œ“MÙÕÐŒXÐ™‘MÙÊÕQVÝ’L[ÊÝLÞ\ÔUV’ÌØ™ÐÓ“ÛÐPRL“–MÍœÕÝÝÙÖV˜T^RÐžSŒ]Ú”L[ÒžV”MÝÙÜLÑÐ]ÐSQ”™ÒÐ“ŠÌS˜ÖšÙ[SÙ\•\œY\TÞ’‘VŽ]ÒRTQÜÌÝRQQRMÌ“XÑ›\UŒ˜‘P“ÌUÒÚœÌVRYÙ]ÙÐŒ“–ZMœÑšQZUYØ‹ØY–YÑT^ÕœMÛ\ÌÞMÜ•VT–S‘œÞ˜ÕÛ^ÚV›ÛPQQÙœQÍÒËÊÍ™ZÚ™Ú™”Ž\LÕÝŽKÍUV”ŽV^ÙŒÐ˜ŠÓÍËÜÓŒMÙ˜“ÎXŒ
ÌÓ[›ŒÌLÝUÓÍÍ^UÌUÙ‘œ›””œUŠÔ^\‘Ú–]œÍZšÜœÔŒŒËÔ•VYŒÍ]•T“ÍŒ™•ÓÐU
ÙÍS•ÓUSMœ\•ÚÔJÚœÚÔÊÔRÍÔÍš•ÔœœRŽRSž–›Í^Yœ˜ÝØœ\ØTZZ–LÛ”RÍÜKÛšÒÐU\QVQËÜ^QÌNR–\˜ŠÚŒž–\ÙL\Ñž–š‘ÍNœNX‹Ö•LŽØN’ÕØZÝ
Í“QœÞTÙÖ‘ÍÓÚ”™“RÑ™ZÕXŒZÙÛšØ]UÓY˜–•^‹Ò–Í[žšZŠÖ‘Œ•U–ÍÛLÖSŒÕ]žZÝÖMÑM˜ÓØÒŽžÍŽTÒQKÛ
ÞžÜÕ”[œÝ›˜“N‘šZ\ž›ØœQÍÐÓ[ÙJÊÚØÒLÑŒ›Q›œÙMÝ’ÛMÕÒQPÑÌž[Ñ•••[PÕYÓ^\S]šØYÚVžQÐP™ÞœÜ]ÎNŒÕÞžž››’Œš”[[T^V
ÖL™YZY[”ŒNR•ÚÒ’TŒØœYŽÐUPŒŒQŒŽVQÎ\ÑÜZ˜™ÛÖRÛ“TVÓQT”šRšœL’LS›
Ú’ÐKÓSŒÌÞ“•ØÑØÕ[‘”JÚÐSÕÍZÜ•\žŠØÙZÒ‘ÔÓÌËÐRÕZ^]’ÌœNU[ÙÛ•ÚÓÓKÍŽ[šÙœÍJØSR[Ì–^“TÙV\˜ŒÖÖœÖ”LS]šUTÐXÑÚžNSÞšÑ˜RÎTNÜ™ZRÌŒ•ÌZØY“žQÙ•VÞSËÔÕ[œÖŠØÌQMÚY“™ËÎX”SMØÝ’Ð™™MN
Ü^N\œJÛJÞš\ØÐÓÖN›ÕÚÑÑ\ØÝUÐL]U’Í\žŒ\VU‘\M•ÎXÎÍÚNQÛÖTŽ]]–M”MØNUÐ”ŒÜ“œÞššSÝ™XPÓPPXËÚZ[ØY–™[N‘^œ•”ÛNQPÙVŠÒT•ËÖTÝžÕYNÔÙ\RÌÚT^KÑU‘–N[’œÛ›[RÔÛTÕY”‘ÕZ“Ò™MÓ]ÍØÚX‘’›ž‘ÍØ™LžRŒQRœÓÕœŒ‘^›žRYŒ•ÌKÙR^
Ñ™[œÑØŒ^‘ÍÐM’Ö\žU•ŽPÕTÝÜÍ’Ý“ÖœZSÚÝÚÓ’
ØŒMM•ÚQÙ]\QœÎPÑÌØÙSM]ÒÓÙÐÐQŽÕÚ\S^“UŒ’ÔÍLZÔ›•L[R•”ÜÑYÓÛ›™\™ÝÑP]œÎVŽLŠÚØL”ÔRÑUÕUÓÒ•™^^PÚSYÎMÔQÑÕ›”Ú“ŠÖLY˜ÕLUY›ÚÝSSÔÓÍœÕ]ØVTZØÖQÑÔš“RÙP˜˜Ò^ŒŒ–˜Ö]ÝXPÍÓ\\ÒÍœÐSTÜÓQRÚÚ\QÒœQÒR•“MšÍœ]\Ð“™œ^\•šÞœÒ]›ÜžÖ‹ÜY•KÎÕž•ÌURZL˜\–YMN‹ÕÐVPÝÙÝ[–\ÝÝRÞKÚQœ
Ø‘QÞUœ[ÙœÚTSÞœÛ•ÍÜ™ÜŽTX\Q‘ŒÐ˜•ZÔÜ•UMÔÝØ\ÚÜKËÖ‘L”™
Õ”Î“UÚ‹Ì\Ö”ÌÙ•SÑž˜‹ÙS\[ÜÒY’ZÖ\ÞÌ•PSÚÕ˜LP–™T›ÕPSÍ\Ò•šÜÛM™™Y’•Ì’Óž›ÍØ“”ÎRMÕÖ›Î[ÍÑ[ÙP˜Y˜‘›LÕÍPÐÓNP^Z–šUÙšÝÛQÌ‘X˜ÛÛŒØ”‘›Sž’ÒžœPÝTÊÛ]XÚ–™šKÍÕT
ÒYÌ–V›VÙLT•M˜TÞÐPQÞ˜ÝS™ØQÓÎMÒØL”ŒVU^ÜRV]ÐQÐÒÙ™ÕÐžÖTL”ÙSV”M\MÔRÜL^ŠÖ[š\PÍÛœ\ÔLÙ™]Ò–UXMšYÐœY\[SšÖZ‹Ñ^
ÙÕÒRÑÙšV]ÖP›‘šÎZQÜ\šTÛQÒØ˜QZØ•Î[Î\\ZZ–™RÌŒÙœVØ“]N[\RSÓžÖ“ÞVœSÚMÜŒŽ[ZÑ^[˜Ù^Z\’ÙTÙQUN›ZÝœÛÛRÎ
ÓNKÝÊÊÕÒ]“ÛØ\NŒÞPÙÕV]ÔŽÒÛJÛKÞQÒÐŠÛMQ’šYÒUKÛZÚSÔVžš]NVZÙÑÝ‹Î”R‘[ÙÍÖ•RÚŒšÞ“Í“ÖØÓÍÊÛšT\žRYYž\›[ÌÞÎ˜’ËÚÕ\™ÌÞKÝÎUT™’ÒL\ÑV”ÔYÕŒ\ÜÎ
ÙÒÑ‹˜˜\ÙMŠJKÔÝš[™Ê
JKM_]˜\ˆ™O[™]ÈX\
ÖÚ‹›XZÙRY[
[™œÙ]™[ÈŠKšY[\ÚYWKÚ‹›XZÙRY[
[œ™\ÛÛ™HŠKšY[\ÚÙWKÚ‹›XZÙRY[
[\\ØÜš\ŠKšY[\ÚWWJK›Ý^ÚÛÚÜÎžÜ™YÚ\Ý\”XÚØYÙQ^[œÚ[ÛœÎ˜\Þ[˜ÊK
OOžÙ›ÜŠ]Ü‹×[ÙˆÍJ]
‹œ\œÙQ\ØÜš\ÜŠ‹L
KÊ_KÙ]Z[[”]Ú˜\Þ[˜ÊK
OOžÛ]H˜ÛÛ\]ÈŽÚYŠ]œÝ\ÕÚ]
ŠJ\™]\›ŽÛ]ÏZ‹œ\œÙRY[
œÛXÙJ‹›[™Ý
JKOZ™K™Ù]
ËšY[\Ú
OËŠ
NÜ™]\›ˆ\[ÙˆOHØN›[K™YXÙQ\[™[˜ÞN˜\Þ[˜ÊK‹ÊOO\[Ùˆ™K™Ù]
KšY[\Ú
OˆHÙNš‹›XZÙQ\ØÜš\ÜŠK‹›XZÙT˜[™ÙJÜ›ÝØÛÛˆœ]Úˆ‹ÛÝ\˜ÙNš‹œÝš[™ÚYžQ\ØÜš\ÜŠJKÙ[XÝÜŽ˜Ü[Û˜[XZ[[ÛÛ\]ÉÚ‹œÝš[™ÚYžRY[
J_O˜\˜[\Î›[JJ__K›Ý^›ÝÝ˜\ˆœO^ßNÖ]
œKÐÛÛœÝ˜Z[ÐÚXÚÐÛÛ[X[™Š
OO‘ÐËÛÛœÝ˜Z[Ô]Y\žPÛÛ[X[™Š
OO’ËÛÛœÝ˜Z[ÔÛÝ\˜ÙPÛÛ[X[™Š
OOšËY˜][Š
OO™]JNÜYJ
NÜYJ
NÚTÊ
NÝ˜\ˆÏXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ëœ›Ú™XÝ]XÜ™X]Q[š\›Û›Y[

^Û][™]ÈÐÊÈ˜ÝÙ‹šY[—JK[™]ÈÐÊÈÛÜšÜÜXÙH‹\H‹šY[—JKÏ[™]ÈÐÊÈšY[—JKO^ÛX[šY™\Ý\]\Î›™]ÈX\™\ÜY\œ›ÜœÎ›™]ÈX\K[™]ÈX\Ï[™]ÈX\Ù›ÜŠ]ˆÙˆ\Ëœ›Ú™XÝœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
J^Û]P\œ˜^K™œ›ÛJ‹œY\‘\[™[˜ÚY\Ë˜[Y\Ê
KO–Ú‹œÝš[™ÚYžRY[

Kœ˜[™ÙWJNÛ‹œÙ]
‹›ØØ]Ü’\ÚÝÛÜšÜÜXÙN›[Y[š‹œÝš[™ÚYžRY[
ŠK™\œÚ[ÛŽ™‹™\œÚ[Û‹\[™[˜ÚY\Î›™]ÈX\Y\‘\[™[˜ÚY\Î›™]ÈX\
™š[\Š
ÚJOO™‹œY\‘\[™[˜ÚY\ÓY]K™Ù]

OË›Ü[Û˜[OOHL
JKÜ[Û˜[Y\‘\[™[˜ÚY\Î›™]ÈX\
™š[\Š
ÚJOO™‹œY\‘\[™[˜ÚY\ÓY]K™Ù]

OË›Ü[Û˜[OOHL
J_J_Y›ÜŠ]ˆÙˆ\Ëœ›Ú™XÝœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
J^Û][‹™Ù]
‹›ØØ]Ü’\Ú
NÜ™\[™[˜ÚY\Ï[™]ÈX\
\œ˜^K™œ›ÛJ‹™\[™[˜ÚY\Ë˜[Y\Ê
KOžÛ]O]\Ëœ›Ú™XÝœÝÜ™Y™\ÛÛ][ÛœË™Ù]
™\ØÜš\Ü’\Ú
NÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH™\ÛÛ][ÛˆÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]Ï[‹™Ù]
JNÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÜ™]\›–Ú‹œÝš[™ÚYžRY[

K×_JJK™\[™[˜ÚY\Ë™[]JšY[
_Y›ÜŠ]ˆÙˆ\Ëœ›Ú™XÝÛÜšÜÜXÙ\Ê^Û]Z‹œÝš[™ÚYžRY[
‹˜[˜ÚÜ™YØØ]ÜŠKY‹›X[šY™\Ý™^ÜÊßJKO[‹™Ù]
‹˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú
NÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]ÏJËØØ[\Ž•OUZK™Ù]Ø[\Š
_O^ßJOOžÛ]O[”Ê
KOQÙK™Ù]X\Ú]Y˜][
K›X[šY™\Ý\]\Ë‹˜ÝÙ
KYOQÙK™Ù]X\Ú]Y˜][
KJKYOQÙK™Ù]Ù]Ú]Y˜][
YKÊNÕHOO[[	‰YK˜Y
J_KÏUOÊ›ÚYØØ[\Ž•ZK™Ù]Ø[\Š
_JKUOžÑÙK™Ù]\œ˜^UÚ]Y˜][
Kœ™\ÜY\œ›ÜœË‹˜ÝÙ
Kœ\Ú

_KO]š[œÙ\
ØÝÙ™‹œ™[]]™PÝÙY[œX[šY™\ÝšÙÎ‘KÙ]Ë[œÙ]”Ë\œ›ÜŽžJNØËœÙ]
‹JNÙ›ÜŠ]Ùˆ]˜[\[™[˜ÚY\ÊY›ÜŠ]ÈÙˆ‹›X[šY™\ÝÕK˜[Y\Ê
J^Û]OZ‹œÝš[™ÚYžRY[
ÊKOJ
OOžÐÊÕWK›ÚYØØ[\Ž•ZK™Ù]Ø[\Š
_J_KO]YOOžÐÊÕWKYKØØ[\Ž•ZK™Ù]Ø[\Š
_J_KYO[[ÚYŠOOHœY\‘\[™[˜ÚY\È‰‰ŠOOH™\[™[˜ÚY\ÈŸY‹›X[šY™\Ý™]‘\[™[˜ÚY\Ëš\ÊËšY[\Ú
JJ^Û]YOY‹˜[˜ÚÜ™YXÚØYÙK™\[™[˜ÚY\Ë™Ù]
ËšY[\Ú
NÚYŠYJ^ÚYŠ\[ÙˆYOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\[™[˜ÞHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]YO]\Ëœ›Ú™XÝœÝÜ™Y™\ÛÛ][ÛœË™Ù]
YK™\ØÜš\Ü’\Ú
NÚYŠ\[ÙˆYOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH™\ÛÛ][ÛˆÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]O[‹™Ù]
YJNÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÚYOY__\‹š[œÙ\
ÝÛÜšÜÜXÙN’KY[•K˜[™ÙN“Ëœ˜[™ÙK\N•™\ÛÛ][ÛŽšYK\]NK[]N–K\œ›ÜŽžJ__Y›ÜŠ]ˆÙˆ\Ëœ›Ú™XÝœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
J^Û]]\Ëœ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠŠNÚYŠ\
XÛÛ[YNÛ]XË™Ù]

NÚYŠ\[ÙˆˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHÛÜšÜÜXÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]O[‹™Ù]
‹›ØØ]Ü’\Ú
NÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÑKÛÜšÜÜXÙOZ\™]\›žÝÛÜšÜÜXÙ\Î\[™[˜ÚY\Îœ‹XÚØYÙ\ÎœË™\Ý[˜__X\Þ[˜È›ØÙ\ÜÊ
^Û]]\Ë˜Ü™X]Q[š\›Û›Y[

K^ÖX\›ŽžÝÛÜšÜÜXÙN˜OOÛÜšÜÜXÙ\Ë™š[™
JVÌOÏÛ[ÛÜšÜÜXÙ\Î˜OOÛÜšÜÜXÙ\Ë™š[™
JK\[™[˜ÞN˜OO™\[™[˜ÚY\Ë™š[™
JVÌOÏÛ[\[™[˜ÚY\Î˜OO™\[™[˜ÚY\Ë™š[™
JKXÚØYÙN˜OOœXÚØYÙ\Ë™š[™
JVÌOÏÛ[XÚØYÙ\Î˜OOœXÚØYÙ\Ë™š[™
J__KÏX]ØZ]\Ëœ›Ú™XÝ›ØY\Ù\ÛÛ™šYÊ
NÜ™]\›ˆÏË˜ÛÛœÝ˜Z[ÏÊ]ØZ]Ë˜ÛÛœÝ˜Z[ÊŠKœ™\Ý[
N›[_NÜYJ
NÜYJ
NÕ

NÝ˜\ˆÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\Ëœ]Y\žOZK”Ýš[™Ê
_\Ý]XÞÝ\Ëœ]ÏVÖÈ˜ÛÛœÝ˜Z[È‹œ]Y\žH—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆÛÛœÝ˜Z[Ë\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœ]Y\žHHÛÛœÝ˜Z[È˜XÝ]X˜\ÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[Ý]][X]Ú\ÈÈHÚ]™[ˆ›ÛÙÈ]Y\žK‚ˆ^[\\Î–ÖÈ“\Ý[\[™[˜ÚY\È›ÝYÚÝ]HÛÜšÜÜXÙH‹žX\›ˆÛÛœÝ˜Z[È]Y\žH	ÝÛÜšÜÜXÙWÚ\×Ù\[™[˜ÞJË\[™[˜ÞS˜[YKËÊK‰È—W_J_X\Þ[˜È^XÝ]J
^Û]ÐÛÛœÝ˜Z[ÎœŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÊ
KTÊJKÏX]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝ˜_OX]ØZ]™š[™
Ë\Ë˜ÛÛ^˜ÝÙ
KX]ØZ]‹™š[™
JKÏ]\Ëœ]Y\žNÜ™]\›ˆË™[™ÕÚ]
‹ˆŠ_
ÏX	ØßK˜
K
]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœËœÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÙ›Üˆ]ØZ]
]Ùˆ‹œ]Y\žJÊJ^Û]OP\œ˜^K™œ›ÛJØš™XÝ™[šY\Ê
JKÏQK›[™ÝÏQKœ™YXÙJ
ÒWJOO“X]›X^
K›[™Ý
K
NÙ›ÜŠ]LÞÎÞ
ÊÊ^Û]ÒKOQVÞNÜœ™\Ü[™›Ê[	Ú]
Ê_IÒKœY[™
ËˆŠ_HH	Ü]

_X
_\œ™\ÜœÛÛŠ
__JJK™^]ÛÙJ
__NÙ[˜Ý[Ûˆ]
J^Ü™]\›ˆ\[ÙˆHOHœÝš[™ÈØ	Ù_X™K›X]Ú
×–ØK^KV—VØK^KVŒNW×JÉÊOÙN˜	ÉÙ_IØY[˜Ý[Ûˆ]
K
^Û]YOOOLÏYOOO]LNÜ™]\›ˆ‰‰œÏÈˆŽœÈ—LLÈŽœÏÈ—LLMŽˆ—LLˆŸ\YJ
NÕ

NÝ˜\ˆÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë™\˜›ÜÙOZK›ÛÛX[Š‹]‹K]™\˜›ÜÙH‹LKÙ\ØÜš\[ÛŽˆ[ÛÈš[H˜XÝ]X˜\ÙH]]ÛX]XØ[HÛÛ\[Yœ›ÛHHÛÜšÜÜXÙHX[šY™\ÝÈŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ˜ÛÛœÝ˜Z[È‹œÛÝ\˜ÙH—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆÛÛœÝ˜Z[Ë\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœš[HÛÝ\˜ÙHÛÙH›ÜˆHÛÛœÝ˜Z[È‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[š[H›ÛÙÈÛÝ\˜ÙHÛÙH\ÙYžHHÛÛœÝ˜Z[È[™Ú[™KˆY[™ÈH]‹K]™\˜›ÜÙX›YÈÚ[š[H
™[
ˆÛÝ\˜ÙHÛÙK[˜ÛY[™ÈH˜XÝ]X˜\ÙH]]ÛX]XØ[HÛÛ\[Yœ›ÛHHÛÜšÜÜXÙHX[šY™\ÝË—ˆ‹^[\\Î–ÖÈ”š[ÈHÛÝ\˜ÙHÛÙH‹žX\›ˆÛÛœÝ˜Z[ÈÛÝ\˜ÙH—KÈ”š[HÛÝ\˜ÙHÛÙH[™H˜XÝ]X˜\ÙH‹žX\›ˆÛÛœÝ˜Z[ÈÛÝ\˜ÙH]ˆ—W_J_X\Þ[˜È^XÝ]J
^Û]ÐÛÛœÝ˜Z[ÎœŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÊ
KTÊJKÏX]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝ˜_OX]ØZ]™š[™
Ë\Ë˜ÛÛ^˜ÝÙ
KX]ØZ]‹™š[™
JNÝ\Ë˜ÛÛ^œÝÝ]Üš]J\Ë™\˜›ÜÙOÛ‹™[ÛÝ\˜ÙN›‹œÛÝ\˜ÙJ__NÜYJ
NÜYJ
NÕ

NÚTÊ
NÝ˜\ˆÐÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë™š^ZK›ÛÛX[Š‹KYš^‹LKÙ\ØÜš\[ÛŽˆ][\È]]ÛX]XØ[Hš^[˜[XšYÝ[Ý\È\ÜÝY\Ë›ÛÝÚ[™ÈH][K\\ÜÈ›ØÙ\ÜÈŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ˜ÛÛœÝ˜Z[È—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆÛÛœÝ˜Z[Ë\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ˜ÚXÚÈ]H›Ú™XÝÛÛœÝ˜Z[È\™HY]‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[[ˆÛÛœÝ˜Z[ÈÛˆ[Ý\ˆ›Ú™XÝ[™[Z]\œ›ÜœÈ›ÜˆXXÚÛ™H]\È›Ý[™]\Û‰ÝY]ˆYˆ[žH\œ›Üˆ\È[Z]YH›ØÙ\ÜÈÚ[^]Ú]H›Û‹^™\›È^]ÛÙK‚‚ˆYˆHKYš^›YÈ\È\ÙYX\›ˆÚ[][\È]]ÛX]XØ[Hš^H\ÜÝY\ÈH™\Ý]Ø[‹›ÛÝÚ[™ÈH][K\\ÜÈ›ØÙ\ÜÈ
Ú]HX^[][HÙˆL]\˜][ÛœÊKˆÛÛYH[XšYÝ[Ý\È]\›œÈØ[››Ý™H]]Ùš^Y[ˆÚXÚØ\ÙH[ÝIÛ]™HÈX[X[HÜXÚYžHHšYÚ™\ÛÛ][Û‹‚‚ˆ›Üˆ[Ü™H[™›Ü›X][Ûˆ\ÈÈÝÈÈÜš]HÛÛœÝ˜Z[ËX\ÙHÛÛœÝ[Ý\ˆYXØ]YYÙHÛˆÝ\ˆÙXœÚ]NˆÎ‹ËÞX\›œÙË˜ÛÛKÙ™X]\™\ËØÛÛœÝ˜Z[Ë‚ˆ^[\\Î–ÖÈÚXÚÈ][ÛÛœÝ˜Z[È\™HØ]\ÙšYY‹žX\›ˆÛÛœÝ˜Z[È—KÈ]]Ùš^[[›Y]ÛÛœÝ˜Z[È‹žX\›ˆÛÛœÝ˜Z[ÈKYš^—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœßOX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]OX]ØZ]Ë›ØY\Ù\ÛÛ™šYÊ
KŽÚYŠOË˜ÛÛœÝ˜Z[Ê[[™]ÈÊÊNÙ[Ù^Û]ÐÛÛœÝ˜Z[ÎšOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÊ
KTÊJNÛX]ØZ]™š[™
Ê_[]ËHLKHLNÙ›ÜŠ]]\Ë™š^ÌLŒNÚŒËKZ
^Û]OX]ØZ]‹œ›ØÙ\ÜÊ
NÚYŠQJXœ™XZÎÛ]ØÚ[™ÙYÛÜšÜÜXÙ\ÎË™[XZ[š[™Ñ\œ›ÜœÎ”ßOZ•
ËKÙš^\Ë™š^JKV×NÙ›ÜŠ]ÒK[ÙˆÊ^Û]ÏRK›X[šY™\Ýš[™[ÒK›X[šY™\Ý[™]È]K›X[šY™\Ýš[™[SËK›X[šY™\Ý›ØY

Kœ\Ú
Kœ\œÚ\ÝX[šY™\Ý

J_ZYŠ]ØZ]›ÛZ\ÙK˜[

KJËœÚ^™OŒ	‰šŒJJ^ØÏQÙJËØÛÛ™šYÝ\˜][ÛŽœŸJKHLKHLÙ›ÜŠ]ËW[ÙˆÊY›ÜŠ]ÙˆJU™š^X›OÙHLœHL__ZYŠË˜Ú[™[‹›[™ÝOOL
\™]\›ˆÚYŠŠ^Û]\ØÜÙH\œ›ÜœÈØ[ˆ[™Hš^YžH[›š[™È	ÜKœ™]J‹žX\›ˆÛÛœÝ˜Z[ÈKYš^‹K•\KÓÑJ_X˜\œ›ÜœÈ™Yš^YžH	×LŽNIÈØ[ˆ™Hš^YžH[›š[™È	ÜKœ™]J‹žX\›ˆÛÛœÝ˜Z[ÈKYš^‹K•\KÓÑJ_XØ]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ][˜ÛYS˜[Y\ÎˆLK[˜ÛYQ›ÛÝ\ŽˆL_K\Þ[˜ÈOOžÑKœ™\Ü[™›Ê
KKœ™\ÜÙ\\˜]ÜŠ
_J_\™]\›ˆË˜Ú[™[QÙKœÛÜX\
Ë˜Ú[™[‹Oš˜[YVÌWJKœË™[Z]™YJËØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]œÛÛŽ\ËšœÛÛ‹Ù\\˜]ÜœÎŒ_JK__NÚTÊ
NÝ˜\ˆØ]^ØÛÛ™šYÝ\˜][ÛŽžÙ[˜X›PÛÛœÝ˜Z[ÐÚXÚÜÎžÙ\ØÜš\[ÛŽˆ’YˆYKÛÛœÝ˜Z[ÈÚ[[ˆ\š[™È[œÝ[È‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_KÛÛœÝ˜Z[Ô]žÙ\ØÜš\[ÛŽˆ•H]ÙˆHÛÛœÝ˜Z[Èš[Kˆ‹\NˆP”ÓÓUWÔU‹Y˜][ˆ‹‹ØÛÛœÝ˜Z[Ëœ›ÈŸ_KÛÛ[X[™Î–ÒËËÐ×KÛÚÜÎžØ\Þ[˜È˜[Y]T›Ú™XÝY\’[œÝ[
KÜ™\Ü\œ›ÜŽJ^ÚYŠYK˜ÛÛ™šYÝ\˜][Û‹™Ù]
™[˜X›PÛÛœÝ˜Z[ÐÚXÚÜÈŠJ\™]\›ŽÛ]X]ØZ]K›ØY\Ù\ÛÛ™šYÊ
KÎÚYŠË˜ÛÛœÝ˜Z[Ê\Ï[™]ÈÊJNÙ[Ù^Û]ÐÛÛœÝ˜Z[Î˜ßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÊ
KTÊJNÜÏX]ØZ]Ë™š[™
J_[]OX]ØZ]Ëœ›ØÙ\ÜÊ
NÚYŠXJ\™]\›ŽÛ]Ü™[XZ[š[™Ñ\œ›ÜœÎ›ŸOZ•
KJNÚYŠ‹œÚ^™HOOL
ZYŠK˜ÛÛ™šYÝ\˜][Û‹š\ÐÒJY›ÜŠ]ØË—[ÙˆŠY›ÜŠ]ÙˆŠ]
	ÜKœ™]JK˜ÛÛ™šYÝ\˜][Û‹Ë˜[˜ÚÜ™YØØ]Ü‹K•\K’QS•
_Nˆ	Ü^X
NÙ[ÙH
ÛÛœÝ˜Z[ÚXÚÈ˜Z[YÈ[ˆ	ÜKœ™]JK˜ÛÛ™šYÝ\˜][Û‹žX\›ˆÛÛœÝ˜Z[È‹K•\KÓÑJ_H›Üˆ[Ü™H]Z[Ø
___K]YØ]Ý˜\ˆ\O^ßNÖ]
\KÐÜ™X]PÛÛ[X[™Š
OOœPËÛÛ[X[™Š
OO•ÐËY˜][Š
OOžX]JNÜYJ
NÕ

NÝ˜\ˆPÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœÙÏZK”Ýš[™Ê‹\K\XÚØYÙH‹Ù\ØÜš\[ÛŽˆ•HXÚØYÙHÈ[ˆH›ÝšYYÛÛ[X[™œ›ÛHŸJNÝ\Ëœ]ZY]ZK›ÛÛX[Š‹\KK\]ZY]‹LKÙ\ØÜš\[ÛŽˆ“Û›H™\ÜÜš]XØ[\œ›ÜœÈ[œÝXYÙˆš[[™ÈH[[œÝ[ÙÜÈŸJNÝ\Ë˜ÛÛ[X[™ZK”Ýš[™Ê
NÝ\Ë˜\™ÜÏZK”›ÞJ
_\Ý]XÞÝ\Ëœ]ÏVÖÈ˜Ü™X]H—W_X\Þ[˜È^XÝ]J
^Û]V×NÝ\ËœÙÉ‰œ‹œ\Ú
‹K\XÚØYÙH‹\ËœÙÊK\Ëœ]ZY]	‰œ‹œ\Ú
‹K\]ZY]ŠNÛ]Ï]\Ë˜ÛÛ[X[™œ™\XÙJ×Š××JÊJ	
KË‰KØÜ™X]IˆŠKOZ‹œ\œÙQ\ØÜš\ÜŠÊKXK›˜[YK›X]Ú
×˜Ü™X]J_	
KÊOØN˜KœØÛÜOÚ‹›XZÙRY[
KœØÛÜKÜ™X]KIØK›˜[Y_X
Nš‹›XZÙRY[
[Ü™X]KIØK›˜[Y_X
KÏZ‹œÝš[™ÚYžRY[
ŠNÜ™]\›ˆKœ˜[™ÙHOOH[šÛ›ÝÛˆ‰‰ŠÊÏX	ØKœ˜[™Ù_X
K\Ë˜ÛKœ[ŠÈ™‹‹‹œ‹Ë‹‹\Ë˜\™Ü×J__NÜYJ
NÜYJ
NÑ

NÕ

NÝ˜\ˆÐÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœXÚØYÙ\ÏZK\œ˜^J‹\K\XÚØYÙH‹Ù\ØÜš\[ÛŽˆ•HXÚØYÙJÊHÈ[œÝ[™Y›Ü™H[›š[™ÈHÛÛ[X[™ŸJNÝ\Ëœ]ZY]ZK›ÛÛX[Š‹\KK\]ZY]‹LKÙ\ØÜš\[ÛŽˆ“Û›H™\ÜÜš]XØ[\œ›ÜœÈ[œÝXYÙˆš[[™ÈH[[œÝ[ÙÜÈŸJNÝ\Ë˜ÛÛ[X[™ZK”Ýš[™Ê
NÝ\Ë˜\™ÜÏZK”›ÞJ
_\Ý]XÞÝ\Ëœ]ÏVÖÈ™—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆœ[ˆHXÚØYÙH[ˆH[\Ü˜\žH[š\›Û›Y[‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[[œÝ[HXÚØYÙHÚ][ˆH[\Ü˜\žH[š\›Û›Y[[™[ˆ]Èš[˜\žHØÜš\Yˆ]ÛÛZ[œÈ[žKˆHš[˜\žHÚ[[ˆÚ][ˆHÝ\œ™[ÝÙ——ˆžHY˜][X\›ˆÚ[ÝÛ›ØYHXÚØYÙH˜[YYÛÛ[X[™]\ÈØ[ˆ™HÚ[™ÙY›ÝYÚH\ÙHÙˆH\K\XÚØYÙX›YÈÚXÚÚ[[œÝXÝX\›ˆÈÝ[[ˆHØ[YHÛÛ[X[™]œ›ÛHHY™™\™[XÚØYÙK——ˆ\Ú[™ÈX\›ˆ\ÈH™\XÙ[Y[ÙˆX\›ˆY\Û‰Ý™XÛÛ[Y[™Y\È]XZÙ\È[Ý\ˆ›Ú™XÝ›Û‹Y]\›Z[š\ÝXÈ
X\›ˆÙ\Û‰ÝÙY\˜XÚÈÙˆHXÚØYÙ\È[œÝ[Y›ÝYÚH™Z]\ˆZ\ˆ˜[YK›ÜˆZ\ˆ™\œÚ[ÛŠK—ˆ‹^[\\Î–ÖÈ•\ÙHÜ™X]K]š]HÈØØY™›ÛH™]Èš]H›Ú™XÝ‹žX\›ˆÜ™X]K]š]H—KÈ’[œÝ[][\HXÚØYÙ\È›ÜˆHÚ[™ÛHÛÛ[X[™‹X\›ˆ\\\ØÜš\\Ë[›ÙHË[›ÙHK]˜[œÜ[K[Û›HYH˜ÛÛœÛÛK›ÙÊ	Ú[ÈIÊH˜W_J_X\Þ[˜È^XÝ]J
^Ü™]\›ˆ™K[[Y]žO[[]ØZ]K›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈOžÛ]ÏRËš›Ú[Š‹IÜ›ØÙ\ÜËœYX
NØ]ØZ]K›ZÙ\”›ÛZ\ÙJÊK]ØZ]KÜš]Qš[T›ÛZ\ÙJËš›Ú[ŠËœXÚØYÙKšœÛÛˆŠKßB˜
K]ØZ]KÜš]Qš[T›ÛZ\ÙJËš›Ú[ŠËžX\›‹›ØÚÈŠKˆŠNÛ]ORËš›Ú[ŠË‹žX\›œ˜Ëž[[ŠKX]ØZ]™K™š[™›Ú™XÝÝÙ
\Ë˜ÛÛ^˜ÝÙ
K^Ù[˜X›QÛØ˜[ØXÚNˆJ]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ[ÜÝšXÝˆL_JJK™Ù]
™[˜X›QÛØ˜[ØXÚHŠK[˜X›U[[Y]žNˆLKÙÑš[\œÎ–ÞØÛÙN’ÙŠŽ
K]™[œK“ÙÓ]™[‘\ØØ\™W_K[ˆOO[[ÒËš›Ú[Š‹‹žX\›œ˜Ëž[[ŠN›[ÜOO[[	‰›K™^\ÝÔÞ[˜Ê
OÊ]ØZ]K˜ÛÜQš[T›ÛZ\ÙJJK]ØZ]™K\]PÛÛ™šYÝ\˜][ÛŠËÏOžÛ]OQÙKÓY\™ÙY
ËŠNÜ™]\›ˆ\œ˜^Kš\Ð\œ˜^JËœYÚ[œÊI‰ŠKœYÚ[œÏSËœYÚ[œË›X\
OOžÛ]O]\[ÙˆOOHœÝš[™ÈÖN–Kœ]YOY™Kš\ÐXœÛÛ]JJOÝN™™Kœ™\ÛÛ™J™K™œ›ÛTÜX›T]
ŠKJNÜ™]\›ˆ\[ÙˆOOHœÝš[™ÈÚYNžÜ]šYKÜXÎ–KœÜXß_JJK_JJN˜]ØZ]KÜš]RœÛÛ”›ÛZ\ÙJKŠNÛ]]\ËœXÚØYÙ\ÏÏÖÝ\Ë˜ÛÛ[X[™KOZ‹œ\œÙQ\ØÜš\ÜŠ\Ë˜ÛÛ[X[™
K›˜[YKÏX]ØZ]\Ë˜ÛKœ[ŠÈ˜Y‹‹KYš^Y‹‹KH‹‹‹šKØÝÙœË]ZY]\Ëœ]ZY]JNÚYŠÈOOL
\™]\›ˆÎÝ\Ëœ]ZY]\Ë˜ÛÛ^œÝÝ]Üš]J˜
NÛ]ÏX]ØZ]™K™š[™
Ë\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝžÛÜšÜÜXÙN’_OX]ØZ]™š[™
ËÊNÚYŠOOO[[
]›ÝÈ™]È\Š˜ÝÙÊNØ]ØZ]œ™\ÝÜ™R[œÝ[Ý]J
NÛ]X]ØZ]Û‹™Ù]ÛÜšÜÜXÙPXØÙ\ÜÚX›Pš[˜\šY\ÊJNÜ™]\›ˆš\ÊJOOOHLI‰•œÚ^™OOOLI‰\[Ùˆ\ËœXÚØYÙ\ÏˆH‰‰ŠOP\œ˜^K™œ›ÛJ
VÌVÌJK]ØZ]Û‹™^XÝ]UÛÜšÜÜXÙPXØÙ\ÜÚX›Pš[˜\žJKK\Ë˜\™ÜËÜXÚØYÙPXØÙ\ÜÚX›Pš[˜\šY\Î•ÝÙ\Ë˜ÛÛ^˜ÝÙÝ[Ž\Ë˜ÛÛ^œÝ[‹ÝÝ]\Ë˜ÛÛ^œÝÝ]Ý\œŽ\Ë˜ÛÛ^œÝ\œŸJ_J__NÝ˜\ˆX]^ØÛÛ[X[™Î–ÜPËÐ×_KX][X]Ý˜\ˆ\O^ßNÖ]
\KÑ^XÑ™]Ú\ŽŠ
OOTË^XÔ™\ÛÛ™\ŽŠ
OO™”ËY˜][Š
OOØ]^XÕ][ÎŠ
OO••JNÜYJ
NÜYJ
NÑ

NÝ˜\ˆPOH™^XÎˆŽÝ˜\ˆ•^ßNÖ]
•ÛØYÙ[™\˜]Ü‘š[NŠ
OO˜ÔËXZÙSØØ]ÜŽŠ
OO›ÜKXZÙTÜXÎŠ
OO™ÛYK\œÙTÜXÎŠ
OOœÜ_JNÜYJ
NÑ

NÙ[˜Ý[ÛˆÜJJ^Û]Ü\˜[\ÎÙ[XÝÜŽœŸOZ‹œ\œÙT˜[™ÙJJKÏY™KÔÜX›T]
ŠNÜ™]\›žÜ\™[ØØ]ÜŽ	‰\[Ùˆ›ØØ]ÜOHœÝš[™ÈÚ‹œ\œÙSØØ]ÜŠ›ØØ]ÜŠN›[]œß_Y[˜Ý[ÛˆÛYJÜ\™[ØØ]ÜŽ™K]Ù[™\˜]Ü’\Úœ‹›ÝØÛÛœßJ^Û]OYHOO[[ÞÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠJ_NžßK]\[ÙˆHÞÚ\ÚœŸNžßNÜ™]\›ˆ‹›XZÙT˜[™ÙJÜ›ÝØÛÛœËÛÝ\˜ÙNÙ[XÝÜŽ\˜[\ÎžË‹‹›‹‹‹˜__J_Y[˜Ý[ÛˆÜJKÜ\™[ØØ]ÜŽ]œ‹Ù[™\˜]Ü’\ÚœË›ÝØÛÛ˜_J^Ü™]\›ˆ‹›XZÙSØØ]ÜŠKÛYJÜ\™[ØØ]ÜŽ]œ‹Ù[™\˜]Ü’\ÚœË›ÝØÛÛ˜_JJ_X\Þ[˜È[˜Ý[ÛˆÔÊKŠ^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJKÜ›ÝØÛÛJKRËš\ÐXœÛÛ]JJOÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]™ÝØØ[]œ›ÛÝN˜]ØZ]‹™™]Ú\‹™™]Ú
ËŠKÏ[‹›ØØ[]ÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]’Ëœ™[]]™Jœ›ÛÝ‹›ØØ[]
_N›ŽÛˆOOXÉ‰›‹œ™[X\ÙQœÉ‰›‹œ™[X\ÙQœÊ
NÛ]XËœXÚØYÙQœËRËš›Ú[ŠËœ™Yš^]JNÜ™]\›ˆ]ØZ]‹œ™XYš[T›ÛZ\ÙJ]ŽŠ_]˜\ˆTÏXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
PJ_YÙ]ØØ[]
Š^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJœ™Y™\™[˜ÙKÜ›ÝØÛÛP_JNÚYŠËš\ÐXœÛÛ]JJJ\™]\›ˆNÛ]\‹™™]Ú\‹™Ù]ØØ[]
ËŠNÜ™]\›ˆOO[[Û[’Ëœ™\ÛÛ™J‹J_X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ
KØY\ŽŠ
OO\Ë™™]Úœ›ÛQ\ÚÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KØØ[]\Ë™Ù]ØØ[]
ŠKÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛQ\ÚÊŠ^Û]ÏX]ØZ]ÔÊœ™Y™\™[˜ÙKPKŠNÜ™]\›ˆK›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈOOžÛ]RËš›Ú[ŠK™Ù[™\˜]Ü‹šœÈŠNÜ™]\›ˆ]ØZ]KÜš]Qš[T›ÛZ\ÙJ‹ÊKK›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈÏOžÚYŠ]ØZ]\Ë™Ù[™\˜]TXÚØYÙJË‹ŠK[K™^\ÝÔÞ[˜ÊËš›Ú[ŠË˜Z[ŠJJ]›ÝÈ™]È\œ›ÜŠ•HØÜš\ÚÝ[]™HÙ[™\˜]YHZ[\™XÝÜžHŠNÜ™]\›ˆ]ØZ]Ë›XZÙP\˜Ú]™Qœ›ÛQ\™XÝÜžJËš›Ú[ŠË˜Z[ŠKÜ™Yš^]š‹™Ù]Y[™[™Ü”]

KÛÛ\™\ÜÚ[Û“]™[œ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜ÛÛ\™\ÜÚ[Û“]™[Š_J_J_J_X\Þ[˜ÈÙ[™\˜]TXÚØYÙJ‹ËJ^Ü™]\›ˆ]ØZ]K›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈOžÛ]ÏX]ØZ]Û‹›XZÙTØÜš\[ŠÜ›Ú™XÝ˜Kœ›Ú™XÝš[‘›Û\Ž›ŸJKRËš›Ú[Šœ[[YKšœÈŠNÜ™]\›ˆ]ØZ]K›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈOžÛ]RËš›Ú[Š˜Z[š[K›ÙÈŠKORËš›Ú[Š™Ù[™\˜]ÜˆŠKÏRËš›Ú[Š˜Z[ŠNØ]ØZ]K›ZÙ\”›ÛZ\ÙJJK]ØZ]K›ZÙ\”›ÛZ\ÙJÊNÛ]Ï^Ý[\\Ž™™K™œ›ÛTÜX›T]
JKZ[\Ž™™K™œ›ÛTÜX›T]
ÊKØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_NØ]ØZ]KÜš]Qš[T›ÛZ\ÙJ‹ˆËÈ^ÜÙH	Ó[Ù[IÈ\ÈHÛØ˜[˜\šXX›BˆØš™XÝ™Yš[™T›Ü\JÛØ˜[	Ó[Ù[IËÂˆÙ]ˆ

HOˆ™\]Z\™J	Û[Ù[IÊKˆÛÛ™šYÝ\˜X›NˆYKˆ[[Y\˜X›Nˆ˜[ÙKˆJNÂ‚ˆËÈ^ÜÙH›Û‹ZY[ˆZ[Z[ˆ[Ù[\È\ÈÛØ˜[˜\šXX›\Âˆ›Üˆ
ÛÛœÝ˜[YHÙˆ[Ù[K˜Z[[“[Ù[\Ë™š[\Š
˜[YJHOˆ˜[YHOOH	Û[Ù[IÈ	‰ˆ[˜[YKœÝ\ÕÚ]
	×ÉÊJJHÂˆØš™XÝ™Yš[™T›Ü\JÛØ˜[˜[YKÂˆÙ]ˆ

HOˆ™\]Z\™J˜[YJKˆÛÛ™šYÝ\˜X›NˆYKˆ[[Y\˜X›Nˆ˜[ÙKˆJNÂˆB‚ˆËÈ^ÜÙHH	Ù^XÑ[‰ÈÛØ˜[˜\šXX›BˆØš™XÝ™Yš[™T›Ü\JÛØ˜[	Ù^XÑ[‰ËÂˆ˜[YNˆÂˆ‹‹‰Ò”ÓÓ‹œÝš[™ÚYžJÊ_KˆKˆ[[Y\˜X›NˆYKˆJNÂˆ
NÛ]XË““ÑWÓÔSÓ”ßˆ‹OK×Ê‹K\™\]Z\™WÊ×Ê—œœ˜ÏÚœ×Ê‹ÙÎÞ^œ™\XÙJKˆŠKš[J
KË““ÑWÓÔSÓ”Ï^Û]ÜÝÝ]•Ý\œŽ“ßOXKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]ÝXœ›ØÙ\ÜÔÝ™X[\ÊÚXY\Ž˜È\Èš[HÛÛZ[œÈH™\Ý[ÙˆX\›ˆÙ[™\˜][™ÈHXÚØYÙH
	Ú‹œÝš[™ÚYžSØØ]ÜŠŠ_JB˜™Yš^š‹œ™]SØØ]ÜŠKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹ŠK™\Ü˜Kœ™\ÜJKØÛÙN•_OX]ØZ]\‹œ\]œ
›ØÙ\ÜË™^XÔ]È‹K\™\]Z\™H‹™K™œ›ÛTÜX›T]
ŠK™K™œ›ÛTÜX›T]
ÊK‹œÝš[™ÚYžRY[
ŠWKØÝÙ[Ž˜ËÝ[Ž›[ÝÝ]•Ý\œŽ“ßJNÚYŠHOOL
]›ÝÈK™]XÚ[\

K™]È\œ›ÜŠXÚØYÙHÙ[™\˜][Ûˆ˜Z[Y
^]ÛÙH	Õ_KÙÜÈØ[ˆ™H›Ý[™\™Nˆ	ÜKœ™]JKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹K•\K”U
_JX
_J_J__NÜYJ
NÜYJ
NÝ˜\ˆX]L‹”ÏXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆH]œ˜[™ÙKœÝ\ÕÚ]
PJ_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
PJ_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆL_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆ‹˜š[™\ØÜš\ÜŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_J_YÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^ÚYŠ\Ë™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]Ü]˜K\™[ØØ]ÜŽ›ŸO\ÜJœ˜[™ÙJNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\ØÜš\ÜˆÚÝ[]™H™Y[ˆ›Ý[™ŠNÛ]ÏX]ØZ]ÔÊ‹›XZÙT˜[™ÙJÜ›ÝØÛÛPKÛÝ\˜ÙN˜KÙ[XÝÜŽ˜K\˜[\ÎžÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ__JKPKË™™]ÚÜ[ÛœÊKS‹›XZÙR\Ú
	ÑX]XÊKœÛXÙJŠNÜ™]\›–ÛÜJÜ\™[ØØ]ÜŽ›‹]˜KÙ[™\˜]Ü’\Ú™‹›ÝØÛÛP_JW_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^ÚYŠ\‹™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]ÏX]ØZ]‹™™]ÚÜ[ÛœË™™]Ú\‹™™]Ú
‹™™]ÚÜ[ÛœÊKOX]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]]™š[™
Ëœ™Yš^]Ø˜\ÙQœÎœËœXÚØYÙQœßJKËœ™[X\ÙQœÊNÜ™]\›žË‹‹™\œÚ[ÛŽ˜K™\œÚ[ÛŸŒŒŒ‹[™ÝXYÙS˜[YN˜K›[™ÝXYÙS˜[Y_‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ’T‘‹ÛÛ™][ÛœÎ˜K™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
K™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜KœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜K™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜KœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜K˜š[Ÿ__NÝ˜\ˆX]^Ù™]Ú\œÎ–ÝT×K™\ÛÛ™\œÎ–Ù”×_KØ]RX]Ý˜\ˆÜO^ßNÖ]
ÜKÑš[Q™]Ú\ŽŠ
OO™ÔËš[T™\ÛÛ™\ŽŠ
OO™Ë\˜˜[š[Q™]Ú\ŽŠ
OO›TË\˜˜[š[T™\ÛÛ™\ŽŠ
OOžTËY˜][Š
OO˜]š[U][ÎŠ
OO”›_JNÜYJ
NÑ

NÝ˜\ˆÏK×ŠÎ–ØK^KV—N–××_žÌŸWÊKËTÏK×–××J—ŠÎ\—™ÞŸÞŠJÎŽŽ‹ŠŠOÉËÏH™š[NˆŽÝ˜\ˆ›O^ßNÖ]
›KÙ™]Ú\˜Ú]™Qœ›ÛSØØ]ÜŽŠ
OOšËXZÙP\˜Ú]™Qœ›ÛSØØ]ÜŽŠ
OO–UXZÙPY™™\‘œ›ÛSØØ]ÜŽŠ
OO›KXZÙSØØ]ÜŽŠ
OO–PËXZÙTÜXÎŠ
OO™YK\œÙTÜXÎŠ
OOœßJNÜYJ
NÑ

NÙ[˜Ý[ÛˆÊJ^Û]Ü\˜[\ÎÙ[XÝÜŽœŸOZ‹œ\œÙT˜[™ÙJJKÏY™KÔÜX›T]
ŠNÜ™]\›žÜ\™[ØØ]ÜŽ	‰\[Ùˆ›ØØ]ÜOHœÝš[™ÈÚ‹œ\œÙSØØ]ÜŠ›ØØ]ÜŠN›[]œß_Y[˜Ý[ÛˆYJÜ\™[ØØ]ÜŽ™K]\Úœ‹›ÝØÛÛœßJ^Û]OYHOO[[ÞÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠJ_NžßK]\[ÙˆHÞÚ\ÚœŸNžßNÜ™]\›ˆ‹›XZÙT˜[™ÙJÜ›ÝØÛÛœËÛÝ\˜ÙNÙ[XÝÜŽ\˜[\ÎžË‹‹›‹‹‹˜__J_Y[˜Ý[ÛˆPÊKÜ\™[ØØ]ÜŽ]œ‹\ÚœË›ÝØÛÛ˜_J^Ü™]\›ˆ‹›XZÙSØØ]ÜŠKYJÜ\™[ØØ]ÜŽ]œ‹\ÚœË›ÝØÛÛ˜_JJ_X\Þ[˜È[˜Ý[ÛˆÊK
^Û]Ü\™[ØØ]ÜŽœ‹]œßOZ‹œ\œÙQš[TÝ[T˜[™ÙJKœ™Y™\™[˜ÙKÜ›ÝØÛÛßJKORËš\ÐXœÛÛ]JÊOÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]™ÝØØ[]œ›ÛÝN˜]ØZ]™™]Ú\‹™™]Ú
‹
KXK›ØØ[]ÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]’Ëœ™[]]™Jœ›ÛÝK›ØØ[]
_N˜NØHOO[‰‰˜Kœ™[X\ÙQœÉ‰˜Kœ™[X\ÙQœÊ
NÛ]Ï[‹œXÚØYÙQœËRËš›Ú[Š‹œ™Yš^]ÊNÜ™]\›ˆ]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]Ëœ™XYš[T›ÛZ\ÙJŠK‹œ™[X\ÙQœÊ_X\Þ[˜È[˜Ý[ÛˆU
KÜ›ÝØÛÛ™]ÚÜ[ÛœÎœ‹[“Y[[ÜžNœÏHL_J^Û]Ü\™[ØØ]ÜŽ˜K]›ŸOZ‹œ\œÙQš[TÝ[T˜[™ÙJKœ™Y™\™[˜ÙKÜ›ÝØÛÛJKÏRËš\ÐXœÛÛ]JŠOÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]™ÝØØ[]œ›ÛÝN˜]ØZ]‹™™]Ú\‹™™]Ú
KŠKXË›ØØ[]ÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]’Ëœ™[]]™Jœ›ÛÝË›ØØ[]
_N˜ÎØÈOOY‰‰˜Ëœ™[X\ÙQœÉ‰˜Ëœ™[X\ÙQœÊ
NÛ]Y‹œXÚØYÙQœËRËš›Ú[Š‹œ™Yš^]ŠNÜ™]\›ˆ]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]Ë›XZÙP\˜Ú]™Qœ›ÛQ\™XÝÜžJØ˜\ÙQœÎœ™Yš^]š‹™Ù]Y[™[™Ü”]
JKÛÛ\™\ÜÚ[Û“]™[œ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜ÛÛ\™\ÜÚ[Û“]™[ŠK[“Y[[ÜžNœßJK‹œ™[X\ÙQœÊ_X\Þ[˜È[˜Ý[ÛˆJKÜ›ÝØÛÛ™]ÚÜ[ÛœÎœŸJ^Ü™]\›Š]ØZ]U
KÜ›ÝØÛÛ™]ÚÜ[ÛœÎœ‹[“Y[[ÜžNˆLJJK™Ù]Y™™\[™ÛÜÙJ
_]˜\ˆÔÏXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
Ê_YÙ]ØØ[]
Š^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJœ™Y™\™[˜ÙKÜ›ÝØÛÛßJNÚYŠËš\ÐXœÛÛ]JJJ\™]\›ˆNÛ]\‹™™]Ú\‹™Ù]ØØ[]
ËŠNÜ™]\›ˆOO[[Û[’Ëœ™\ÛÛ™J‹J_X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHH\ÚØ
KØY\ŽŠ
OO\Ë™™]Úœ›ÛQ\ÚÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KØØ[]\Ë™Ù]ØØ[]
ŠKÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛQ\ÚÊŠ^Ü™]\›ˆU
Ü›ÝØÛÛË™]ÚÜ[ÛœÎœŸJ__NÜYJ
NÜYJ
NÝ˜\ˆØ]L‹ÏXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆœ˜[™ÙK›X]Ú
ÊOÈLˆH]œ˜[™ÙKœÝ\ÕÚ]
Ê_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
Ê_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆL_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆË\Ý
œ˜[™ÙJI‰ŠZ‹›XZÙQ\ØÜš\ÜŠ	ÝßIÝœ˜[™Ù_X
JK‹˜š[™\ØÜš\ÜŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_J_YÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^ÚYŠ\Ë™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]Ü]˜K\™[ØØ]ÜŽ›ŸO\Êœ˜[™ÙJNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\ØÜš\ÜˆÚÝ[]™H™Y[ˆ›Ý[™ŠNÛ]ÏX]ØZ]J‹›XZÙSØØ]ÜŠ‹›XZÙT˜[™ÙJÜ›ÝØÛÛËÛÝ\˜ÙN˜KÙ[XÝÜŽ˜K\˜[\ÎžÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ__JJKÜ›ÝØÛÛË™]ÚÜ[ÛœÎœË™™]ÚÜ[ÛœßJKS‹›XZÙR\Ú
	ÝØ]XÊKœÛXÙJŠNÜ™]\›–ÖPÊÜ\™[ØØ]ÜŽ›‹]˜K\Ú™‹›ÝØÛÛßJW_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^ÚYŠ\‹™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]ÏX]ØZ]‹™™]ÚÜ[ÛœË™™]Ú\‹™™]Ú
‹™™]ÚÜ[ÛœÊKOX]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]]™š[™
Ëœ™Yš^]Ø˜\ÙQœÎœËœXÚØYÙQœßJKËœ™[X\ÙQœÊNÜ™]\›žË‹‹™\œÚ[ÛŽ˜K™\œÚ[ÛŸŒŒŒ‹[™ÝXYÙS˜[YN˜K›[™ÝXYÙS˜[Y_‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ’T‘‹ÛÛ™][ÛœÎ˜K™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
K™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜KœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜K™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜KœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜K˜š[Ÿ__NÜYJ
NÝ˜\ˆTÏXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆTË\Ý
œ™Y™\™[˜ÙJOÈH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
ÊNˆL_YÙ]ØØ[]
Š^Ü™]\›ˆ[X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHH\ÚØ
KØY\ŽŠ
OO\Ë™™]Úœ›ÛQ\ÚÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛQ\ÚÊŠ^Û]ÏX]ØZ]ÊŠNÜ™]\›ˆ]ØZ]Ë˜ÛÛ™\Öš\
ËØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÝš\ÛÛ\Û™[ÎŒ_J__NÜYJ
NÜYJ
NÜYJ
NÝ˜\ˆTÏXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆTË\Ý
œ˜[™ÙJOÈHJœ˜[™ÙKœÝ\ÕÚ]
Ê_Ë\Ý
œ˜[™ÙJJNˆL_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆTË\Ý
œ™Y™\™[˜ÙJOÈH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
ÊNˆL_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆL_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆË\Ý
œ˜[™ÙJI‰ŠZ‹›XZÙQ\ØÜš\ÜŠ	ÝßIÝœ˜[™Ù_X
JK‹˜š[™\ØÜš\ÜŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_J_YÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^ÚYŠ\Ë™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]Ü]˜K\™[ØØ]ÜŽ›ŸO\Êœ˜[™ÙJNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\ØÜš\ÜˆÚÝ[]™H™Y[ˆ›Ý[™ŠNÛ]ÏVPÊÜ\™[ØØ]ÜŽ›‹]˜K\Úˆˆ‹›ÝØÛÛßJKX]ØZ]ÊËË™™]ÚÜ[ÛœÊKS‹›XZÙR\Ú
ŠKœÛXÙJŠNÜ™]\›–ÖPÊÜ\™[ØØ]ÜŽ›‹]˜K\Úœ›ÝØÛÛßJW_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^ÚYŠ\‹™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]ÏX]ØZ]‹™™]ÚÜ[ÛœË™™]Ú\‹™™]Ú
‹™™]ÚÜ[ÛœÊKOX]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]]™š[™
Ëœ™Yš^]Ø˜\ÙQœÎœËœXÚØYÙQœßJKËœ™[X\ÙQœÊNÜ™]\›žË‹‹™\œÚ[ÛŽ˜K™\œÚ[ÛŸŒŒŒ‹[™ÝXYÙS˜[YN˜K›[™ÝXYÙS˜[Y_‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ’T‘‹ÛÛ™][ÛœÎ˜K™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
K™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜KœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜K™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜KœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜K˜š[Ÿ__NÝ˜\ˆ˜]^Ù™]Ú\œÎ–ÛTËÔ×K™\ÛÛ™\œÎ–ÞTË×_K˜]P˜]Ý˜\ˆ\O^ßNÖ]
\KÑÚ]X‘™]Ú\ŽŠ
OO‘TËY˜][Š
OO‘]Ú]X•][ÎŠ
OO’ÕJNÜYJ
NÑ

NÝ˜\ˆÕ^ßNÖ]
ÕÚ[˜[YÚ]X•\›Y\ÜØYÙNŠ
OO‘[YK\ÑÚ]X•\›Š
OO\K\œÙQÚ]X•\›Š
OO™œ_JNÝ˜\ˆ[YOY]
YJœ]Y\ž\Ýš[™ÈŠJK[YOVË×šÏÎ—×ÊÎŠ×‹×JÏÊP
OÙÚ]X‹˜ÛÛWÊ×‹È×JÊWÊ×‹È×JÊWÝ\˜˜[Ê×‹È×JÊJÎˆÊŠŠJOÉË×šÏÎ—×ÊÎŠ×‹×JÏÊP
OÙÚ]X‹˜ÛÛWÊ×‹È×JÊWÊ×‹È×JÏÊJÎ—™Ú]
OÊÎˆÊŠŠJOÉ×NÙ[˜Ý[Ûˆ\JJ^Ü™]\›ˆOÞ[YKœÛÛYJOˆHYK›X]Ú

JNˆL_Y[˜Ý[ÛˆœJJ^Û]Ù›ÜŠ]ˆÙˆ[YJZYŠYK›X]Ú
ŠK
Xœ™XZÎÚYŠ]
]›ÝÈ™]È\œ›ÜŠ[YJJJNÛ]Ë‹ËKH›X\Ý\ˆ—O]ØÛÛ[Z]˜ßO[[YK™Y˜][œ\œÙJŠNÜ™]\›ˆXß‹œ™\XÙJÖ×Ž—JŽ‹ËˆŠKØ]]œ‹\Ù\›˜[YNœË™\Û˜[YN˜K™YZ\Ú›Ÿ_Y[˜Ý[Ûˆ[YJJ^Ü™]\›˜[œ]Ø[››Ý™H\œÙY\ÈH˜[YÚ]XˆT“
	ÉÙ_IÊK˜]˜\ˆTÏXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆH]\Jœ™Y™\™[˜ÙJ_YÙ]ØØ[]
Š^Ü™]\›ˆ[X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHÚ]X˜
KØY\ŽŠ
OO\Ë™™]Úœ›ÛS™]ÛÜšÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛS™]ÛÜšÊŠ^Û]ÏX]ØZ]›‹™Ù]
\Ë™Ù]ØØ]Ü•\›
ŠKØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJNÜ™]\›ˆ]ØZ]K›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈOOžÛ][™]È›ŠJNØ]ØZ]Ë™^˜XÝ\˜Ú]™UÊË‹ÜÝš\ÛÛ\Û™[ÎŒ_JNÛ]ÏSØKœÜ]™\Õ\›
œ™Y™\™[˜ÙJKRËš›Ú[ŠKœXÚØYÙKÞˆŠNØ]ØZ]Û‹œ™\\™Q^\›˜[›Ú™XÝ
K‹ØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™\Üœ‹œ™\ÜÛÜšÜÜXÙN˜Ë™^˜KÛÜšÜÜXÙKØØ]ÜŽJNÛ]X]ØZ]Kœ™XYš[T›ÛZ\ÙJŠNÜ™]\›ˆ]ØZ]Ë˜ÛÛ™\Öš\
ØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÝš\ÛÛ\Û™[ÎŒ_J_J_YÙ]ØØ]Ü•\›
Š^Û]Ø]]œË\Ù\›˜[YN˜K™\Û˜[YN›‹™YZ\Ú˜ßOYœJœ™Y™\™[˜ÙJNÜ™]\›˜Î‹ËÉÜÏØ	ÜßPˆˆŸYÚ]X‹˜ÛÛKÉØ_KÉÛŸKØ\˜Ú]™KÉØßK\‹™Þ˜_NÝ˜\ˆØ]^ÚÛÚÜÎžØ\Þ[˜È™]ÚÜÝY™\ÜÚ]ÜžJKŠ^ÚYŠHOO[[
\™]\›ˆNÛ]Ï[™]ÈTÎÚYŠ\ËœÝ\ÜÊŠJ\™]\›ˆ[Ýž^Ü™]\›ˆ]ØZ]Ë™™]Ú
Š_XØ]ÚÜ™]\›ˆ[___K]TØ]Ý˜\ˆO^ßNÖ]
KÕ\˜˜[™]Ú\ŽŠ
OOÔË\˜˜[™\ÛÛ™\ŽŠ
OOÔËY˜][Š
OO”]JNÜYJ
NÙ[˜Ý[ÛˆTÊJ^Û]Ýž^Ý[™]ÈT“
J_XØ]ÚÜ™]\›ˆL_\™]\›ˆJœ›ÝØÛÛOOHšˆ‰‰œ›ÝØÛÛOOHšÎˆŸ]œ]˜[YK›X]Ú
Ê\—™ÞŸÞŸÖ×‹—JÊIÊJ_]˜\ˆÔÏXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆTÊœ™Y™\™[˜ÙJ_YÙ]ØØ[]
Š^Ü™]\›ˆ[X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHH™[[ÝHÙ\™\˜
KØY\ŽŠ
OO\Ë™™]Úœ›ÛS™]ÛÜšÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛS™]ÛÜšÊŠ^Û]ÏX]ØZ]›‹™Ù]
œ™Y™\™[˜ÙKØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJNÜ™]\›ˆ]ØZ]Ë˜ÛÛ™\Öš\
ËØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÝš\ÛÛ\Û™[ÎŒ_J__NÜYJ
NÜYJ
NÝ˜\ˆÔÏXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆTÊœ˜[™ÙJ_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆTÊœ™Y™\™[˜ÙJ_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆLXš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆYÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Ü™]\›–Ú‹˜ÛÛ™\\ØÜš\Ü•ÓØØ]ÜŠ
W_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^ÚYŠ\‹™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]ÏX]ØZ]‹™™]ÚÜ[ÛœË™™]Ú\‹™™]Ú
‹™™]ÚÜ[ÛœÊKOX]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]]™š[™
Ëœ™Yš^]Ø˜\ÙQœÎœËœXÚØYÙQœßJKËœ™[X\ÙQœÊNÜ™]\›žË‹‹™\œÚ[ÛŽ˜K™\œÚ[ÛŸŒŒŒ‹[™ÝXYÙS˜[YN˜K›[™ÝXYÙS˜[Y_‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ’T‘‹ÛÛ™][ÛœÎ˜K™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
K™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜KœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜K™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜KœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜K˜š[Ÿ__NÝ˜\ˆ˜]^Ù™]Ú\œÎ–ÐÔ×K™\ÛÛ™\œÎ–ÝÔ×_K]X˜]Ý˜\ˆO^ßNÖ]
KÒ[š]ÛÛ[X[™Š
OO’Ì[š][š]X[^™\ÛÛ[X[™Š
OO’ÐËY˜][Š
OOšØ]JNÕ

NÜYJ
NÜYJ
NÑ

NÕ

NÝ˜\ˆÌXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ëœš]˜]OZK›ÛÛX[Š‹\K\š]˜]H‹LKÙ\ØÜš\[ÛŽˆ’[š]X[^™HHš]˜]HXÚØYÙHŸJNÝ\ËÛÜšÜÜXÙOZK›ÛÛX[Š‹]ËK]ÛÜšÜÜXÙH‹LKÙ\ØÜš\[ÛŽˆ’[š]X[^™HHÛÜšÜÜXÙH›ÛÝÚ]HXÚØYÙ\ËØ\™XÝÜžHŸJNÝ\Ëš[œÝ[ZK”Ýš[™Ê‹ZKKZ[œÝ[‹LKÝÛ\˜]P›ÛÛX[ŽˆL\ØÜš\[ÛŽˆ’[š]X[^™HHXÚØYÙHÚ]HÜXÚYšXÈ[™H]Ú[™HØÚÙY[ˆH›Ú™XÝŸJNÝ\Ë›˜[YOZK”Ýš[™Ê‹[‹K[˜[YH‹Ù\ØÜš\[ÛŽˆ’[š]X[^™HHXÚØYÙHÚ]HÚ]™[ˆ˜[YHŸJNÝ\Ë\Ù]ŒZK›ÛÛX[Š‹Lˆ‹LKÚY[ŽˆLJNÝ\ËžY\ÏZK›ÛÛX[Š‹^KK^Y\È‹ÚY[ŽˆLJ_\Ý]XÞÝ\Ëœ]ÏVÖÈš[š]—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆ˜Ü™X]HH™]ÈXÚØYÙH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[Ù]\H™]ÈXÚØYÙH[ˆ[Ý\ˆØØ[\™XÝÜžK——ˆYˆH\K\š]˜]XÜˆ]ËK]ÛÜšÜÜXÙXÜ[ÛœÈ\™HÙ]HXÚØYÙHÚ[™Hš]˜]HžHY˜][——ˆYˆH]ËK]ÛÜšÜÜXÙXÜ[Ûˆ\ÈÙ]HXÚØYÙHÚ[™HÛÛ™šYÝ\™YÈXØÙ\HÙ]ÙˆÛÜšÜÜXÙ\È[ˆHXÚØYÙ\ËØ\™XÝÜžK——ˆYˆHZKKZ[œÝ[Ü[Ûˆ\ÈÚ]™[ˆH˜[YKX\›ˆÚ[š\œÝÝÛ›ØY]\Ú[™ÈX\›ˆÙ]™\œÚ[Û˜[™Û›H[ˆ›ÜØ\™H[š]Ø[ÈH™]ÛHÝÛ›ØYY[™KˆÚ]Ý]\™Ý[Y[ËHÝÛ›ØYY[™HÚ[™H]\Ý——ˆH[š]X[Ù][™ÜÈÙˆHX[šY™\ÝØ[ˆ™HÚ[™ÙYžH\Ú[™ÈH[š]ØÛÜX[™[š]šY[ØÛÛ™šYÝ\˜][Ûˆ˜[Y\ËˆY][Û˜[KX\›ˆÚ[Ù[™\˜]H[ˆY]ÜÛÛ™šYÈš[HÚÜÙH[\ÈØ[ˆ™H[\™YšXH[š]Y]ÜÛÛ™šYØ[™Ú[[š]X[^™HHÚ]™\ÜÚ]ÜžH[ˆHÝ\œ™[\™XÝÜžK—ˆ‹^[\\Î–ÖÈÜ™X]HH™]ÈXÚØYÙH[ˆHØØ[\™XÝÜžH‹žX\›ˆ[š]—KÈÜ™X]HH™]Èš]˜]HXÚØYÙH[ˆHØØ[\™XÝÜžH‹žX\›ˆ[š]\—KÈÜ™X]HH™]ÈXÚØYÙH[™ÝÜ™HHX\›ˆ™[X\ÙH[œÚYH‹žX\›ˆ[š]ZO[]\Ý—KÈÜ™X]HH™]Èš]˜]HXÚØYÙH[™Yš[™\È]\ÈHÛÜšÜÜXÙH›ÛÝ‹žX\›ˆ[š]]È—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÏ]\[Ùˆ\Ëš[œÝ[OHœÝš[™ÈÝ\Ëš[œÝ[\Ë\Ù]ŒŸ\Ëš[œÝ[OOHLÈ›]\ÝŽ›[Ü™]\›ˆÈOO[[Ø]ØZ]\Ë™^XÝ]T›ÞJ‹ÊN˜]ØZ]\Ë™^XÝ]T™YÝ[\ŠŠ_X\Þ[˜È^XÝ]T›ÞJ‹Ê^ÚYŠ‹œ›Ú™XÝÝÙOO[[	‰œ‹œ›Ú™XÝÝÙOO]\Ë˜ÛÛ^˜ÝÙ
]›ÝÈ™]ÈÝ
Ø[››Ý\ÙHHKZ[œÝ[›YÈœ›ÛHÚ][ˆH›Ú™XÝÝX™\™XÝÜžHŠNÛK™^\ÝÔÞ[˜Ê\Ë˜ÛÛ^˜ÝÙ
_]ØZ]K›ZÙ\”›ÛZ\ÙJ\Ë˜ÛÛ^˜ÝÙÜ™XÝ\œÚ]™NˆLJNÛ]ORËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ\‹›ØÚÙš[JNÛK™^\ÝÔÞ[˜ÊJ_]ØZ]KÜš]Qš[T›ÛZ\ÙJKˆŠNÛ]X]ØZ]\Ë˜ÛKœ[ŠÈœÙ]‹™\œÚ[Ûˆ‹×KÜ]ZY]ˆLJNÚYŠˆOOL
\™]\›ˆŽÛ]ÏV×NÜ™]\›ˆ\Ëœš]˜]I‰˜Ëœ\Ú
‹\ŠK\ËÛÜšÜÜXÙI‰˜Ëœ\Ú
‹]ÈŠK\Ë›˜[YI‰˜Ëœ\Ú
[IÝ\Ë›˜[Y_X
K\ËžY\É‰˜Ëœ\Ú
‹^HŠK]ØZ]K›ZÝ[\›ÛZ\ÙJ\Þ[˜ÈOžÛ]ØÛÙNœOX]ØZ]\‹œ\]œ
žX\›ˆ‹Èš[š]‹‹‹˜×KØÝÙ\Ë˜ÛÛ^˜ÝÙÝ[Ž\Ë˜ÛÛ^œÝ[‹ÝÝ]\Ë˜ÛÛ^œÝÝ]Ý\œŽ\Ë˜ÛÛ^œÝ\œ‹[Ž˜]ØZ]Û‹›XZÙTØÜš\[ŠØš[‘›Û\Ž™ŸJ_JNÜ™]\›ˆJ_X\Þ[˜È[š]X[^™J
^ßX\Þ[˜È^XÝ]T™YÝ[\ŠŠ^Û]Ï[[Ýž^ÜÏJ]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
JKœ›Ú™XÝXØ]ÚÜÏ[[[K™^\ÝÔÞ[˜Ê\Ë˜ÛÛ^˜ÝÙ
_]ØZ]K›ZÙ\”›ÛZ\ÙJ\Ë˜ÛÛ^˜ÝÙÜ™XÝ\œÚ]™NˆLJNÛ]OX]ØZ]]žQš[™
\Ë˜ÛÛ^˜ÝÙ
KXOÏÛ™]È]ÏSØš™XÝ™œ›ÛQ[šY\Ê‹™Ù]
š[š]šY[ÈŠK™[šY\Ê
JNÛ‹›ØY
ÊK‹›˜[YO[‹›˜[YOÏÚ‹›XZÙRY[
‹™Ù]
š[š]ØÛÜHŠK\Ë›˜[YOÏÒË˜˜\Ù[˜[YJ\Ë˜ÛÛ^˜ÝÙ
JK‹œXÚØYÙSX[˜YÙ\P[‰‰‘ÙKš\ÕYÙÙYX\›•™\œÚ[ÛŠ[ŠOØX\›	Ð[ŸX›[
XI‰\ËÛÜšÜÜXÙ_\Ëœš]˜]JI‰Š‹œš]˜]OHL
K\ËÛÜšÜÜXÙI‰›‹ÛÜšÜÜXÙQYš[š][ÛœË›[™ÝOOL	‰Š]ØZ]K›ZÙ\”›ÛZ\ÙJËš›Ú[Š\Ë˜ÛÛ^˜ÝÙœXÚØYÙ\ÈŠKÜ™XÝ\œÚ]™NˆLJK‹ÛÜšÜÜXÙQYš[š][ÛœÏVÞÜ]\›ŽˆœXÚØYÙ\ËÊˆŸWJNÛ]^ßNÛ‹™^ÜÊŠNÛ]RËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ]™š[S˜[YJNØ]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJ	Ò”ÓÓ‹œÝš[™ÚYžJ‹[Š_B˜Ø]]ÛX]XÓ™]Û[™\ÎˆLJNÛ]VÜKORËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ”‘PQQK›YŠNÚYŠK™^\ÝÔÞ[˜ÊJ_
]ØZ]KÜš]Qš[T›ÛZ\ÙJKÈ	Ú‹œÝš[™ÚYžRY[
‹›˜[YJ_B˜
Kœ\Ú
JJK\ßË˜ÝÙOO]\Ë˜ÛÛ^˜ÝÙ
^Û]ÏRËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ\‹›ØÚÙš[JNÛK™^\ÝÔÞ[˜ÊÊ_
]ØZ]KÜš]Qš[T›ÛZ\ÙJËˆŠKœ\Ú
ÊJNÛ]VÈ‹žX\›‹Êˆ‹ˆKžX\›‹Ü]Ú\È‹ˆKžX\›‹ÜYÚ[œÈ‹ˆKžX\›‹Ü™[X\Ù\È‹ˆKžX\›‹ÜÙÜÈ‹ˆKžX\›‹Ý™\œÚ[ÛœÈ‹ˆ‹ˆÈÚ]\ˆ[ÝH\ÙH”Üˆ›ÝH›ÙWÛ[Ù[\È›Û\ˆ\ÈÙ[ˆ\ÙYÈÝÜ™H‹ˆÈZ[\Y˜XÝÈ]ÚÝ[™HÚ]YÛ›Ü™Y‹››ÙWÛ[Ù[\È‹ˆ‹ˆÈÝØ\HÛÛ[Y[ÈÛˆH›ÛÝÚ[™È[™\ÈYˆ[ÝHÚ\ÚÈ\ÙH™\›ËZ[œÝ[È‹ˆÈ[ˆ]Ø\ÙKÛ‰Ý›Ü™Ù]È[ˆX\›ˆÛÛ™šYÈÙ][˜X›QÛØ˜[ØXÚH˜[ÙXH‹ˆÈØÝ[Y[][Ûˆ\™NˆÎ‹ËÞX\›œÙË˜ÛÛKÙ™X]\™\ËØØXÚ[™ÈÞ™\›ËZ[œÝ[È‹ˆ‹ˆÈKžX\›‹ØØXÚH‹‹œœŠˆ—K›X\
YOO˜	ÝY_B˜
Kš›Ú[ŠˆŠKORËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ‹™Ú]YÛ›Ü™HŠNÛK™^\ÝÔÞ[˜ÊJ_
]ØZ]KÜš]Qš[T›ÛZ\ÙJK
Kœ\Ú
JJNÛ]ÏVÈ‹ËžX\›‹ÊŠˆ[™ÝZ\Ý]™[™Ü™Y‹‹ËžX\›‹Ü™[X\Ù\ËÊˆš[˜\žH‹‹ËžX\›‹ÜYÚ[œËÊŠ‹Êˆš[˜\žH‹‹ËœœŠˆš[˜\žH[™ÝZ\ÝYÙ[™\˜]Y—K›X\
YOO˜	ÝY_B˜
Kš›Ú[ŠˆŠKORËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ‹™Ú]]šX]\ÈŠNÛK™^\ÝÔÞ[˜ÊJ_
]ØZ]KÜš]Qš[T›ÛZ\ÙJKÊKœ\Ú
JJNÛ]O^ÈŠˆŽžØÚ\œÙ]ˆ]‹N‹[™Ù“[™Nˆ›ˆ‹[™[Ú^™NŒ‹[™[Ý[NˆœÜXÙH‹[œÙ\š[˜[™]Û[™NˆL_NÑÙK›Y\™ÙR[Õ\™Ù]
K‹™Ù]
š[š]Y]ÜÛÛ™šYÈŠJNÛ]OX›ÛÝHYB˜Ù›ÜŠ]ÝYKYW[ÙˆØš™XÝ™[šY\ÊJJ^ÝJÏX–ÉÝY_WB˜Ù›ÜŠ]ÙKYW[ÙˆØš™XÝ™[šY\ÊYJJ^Û]ÙOYKœ™\XÙJÖÐKV—KÙËYOO˜ÉÑYKÓÝÙ\Ø\ÙJ
_X
NÝJÏX	ÐÙ_HH	ÐY_B˜_[]YORËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ‹™Y]Ü˜ÛÛ™šYÈŠNÛK™^\ÝÔÞ[˜ÊYJ_
]ØZ]KÜš]Qš[T›ÛZ\ÙJYKJKœ\Ú
YJJK]ØZ]\Ë˜ÛKœ[ŠÈš[œÝ[—KÜ]ZY]ˆLJK]ØZ]\Ëš[š]X[^™J
KK™^\ÝÔÞ[˜ÊËš›Ú[Š\Ë˜ÛÛ^˜ÝÙ‹™Ú]ŠJ_
]ØZ]\‹™^XÝœ
™Ú]‹Èš[š]—KØÝÙ\Ë˜ÛÛ^˜ÝÙJK]ØZ]\‹™^XÝœ
™Ú]‹È˜Y‹‹KH‹‹‹šKØÝÙ\Ë˜ÛÛ^˜ÝÙJK]ØZ]\‹™^XÝœ
™Ú]‹È˜ÛÛ[Z]‹‹KX[ÝËY[\H‹‹[H‹‘š\œÝÛÛ[Z]—KØÝÙ\Ë˜ÛÛ^˜ÝÙJJ___NÝ˜\ˆÐÏXÛ\ÜÈ^[™ÈÌØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ëš[š]X[^™\ZK”Ýš[™Ê
NÝ\Ë˜\™ÝZK”›ÞJ
_\Ý]XÞÝ\Ëœ]ÏVÖÈš[š]—W_X\Þ[˜È[š]X[^™J
^Ý\Ë˜ÛÛ^œÝÝ]Üš]J˜
K]ØZ]\Ë˜ÛKœ[ŠÈ™‹\Ëš[š]X[^™\‹‹‹\Ë˜\™Ý—KÜ]ZY]ˆLJ__NÝ˜\ˆ]^ØÛÛ™šYÝ\˜][ÛŽžÚ[š]ØÛÜNžÙ\ØÜš\[ÛŽˆ”ØÛÜH\ÙYÚ[ˆÜ™X][™ÈXÚØYÙ\ÈšXHH[š]ÛÛ[X[™‹\Nˆ”Õ’S‘È‹Y˜][›[K[š]šY[ÎžÙ\ØÜš\[ÛŽˆY][Û˜[šY[ÈÈÙ]Ú[ˆÜ™X][™ÈXÚØYÙ\ÈšXHH[š]ÛÛ[X[™‹\Nˆ“PT‹˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆˆ‹\NˆS–HŸ_K[š]Y]ÜÛÛ™šYÎžÙ\ØÜš\[ÛŽˆ‘^˜H[\ÈÈYš[™H[ˆHÙ[™\˜]ÜˆY]Ü˜ÛÛ™šYÈ‹\Nˆ“PT‹˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆˆ‹\NˆS–HŸ__KÛÛ[X[™Î–ÒÌÐ×_KØ]^]Ý˜\ˆ•Ï^ßNÖ]
•ËÔÙX\˜ÚÛÛ[X[™Š
OO]Ë\Ü˜YR[\˜XÝ]™PÛÛ[X[™Š
OOœËY˜][Š
OO—ÜJNÜYJ
NÝ˜\ˆÛYOY]
YJ›ÜÈŠJNÙ[˜Ý[ÛˆÊÜÝÝ]™_J^ÚYŠÛYK™Y˜][™[™X[›™\ÜÊ
OOOH‘HŠ]›ÝÈ™]È\œ›ÜŠ’[\˜XÝ]™HÛÛ[X[™ÈØ[››Ý™H\ÙYÛˆšYËY[™X[ˆÞ\Ý[\È™XØ]\ÙH[šÈ\[™ÈÛˆ[ÙØK[^[Ý]\™XZ[ÚXÚÛ›HÝ\ÜÈ]KY[™X[ˆ\˜Ú]XÝ\™\ÈŠNÚYŠYKš\ÕJ]›ÝÈ™]È\œ›ÜŠ’[\˜XÝ]™HÛÛ[X[™ÈØ[ˆÛ›H™H\ÙY[œÚYHHH[š\›Û›Y[Š_U

NÝ˜\ˆYOY]
œJ
JKO^Ø\Yˆ“ÑÓÓÑÌÕH‹\RÙ^Nˆ™™MÍ™YMXLNÌŽ™LÌ˜L™MLˆ‹[™^˜[YNˆ›œK\ÙX\˜ÚŸK˜ÝJYK™Y˜][
JK˜\YK˜\RÙ^JKš[š][™^
Kš[™^˜[YJKœOX\Þ[˜ÊKL
OO˜]ØZ]˜ÝœÙX\˜Ú
KØ[˜[]XÜÕYÜÎ–ÈžX\›‹\YÚ[‹Z[\˜XÝ]™K]ÛÛÈ—K]šX]\ÕÔ™]šY]™N–È›˜[YH‹™\œÚ[Ûˆ‹›ÝÛ™\ˆ‹œ™\ÜÚ]ÜžH‹š[X[‘ÝÛ›ØYÓ\ÝÌ^\È—KYÙN]Ô\”YÙNŒLJNÝ˜\ˆÑVÈœ™YÝ[\ˆ‹™]ˆ‹œY\ˆ—K]ÏXÛ\ÜÈ^[™È]ÜÝ]XÞÝ\Ëœ]ÏVÖÈœÙX\˜Ú—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ’[\˜XÝ]™HÛÛ[X[™È‹\ØÜš\[ÛŽˆ›Ü[ˆHÙX\˜Ú[\™˜XÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ü[œÈH[ØÜ™Y[ˆ\›Z[˜[[\™˜XÙHÚ\™H[ÝHØ[ˆÙX\˜Ú›Üˆ[™[œÝ[XÚØYÙ\Èœ›ÛHHœH™YÚ\ÝžK‚ˆ^[\\Î–ÖÈ“Ü[ˆHÙX\˜ÚÚ[™ÝÈ‹žX\›ˆÙX\˜Ú—W_J_X\Þ[˜È^XÝ]J
^ÒÊ\Ë˜ÛÛ^
NÛ]ÑÙ[NOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
KUÊJKÔØÜ›ÛX›R][\ÎœŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
K‘ŠJKÝ\ÙRÙ^\™\ÜÎœßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÊ
KÊJKÝ\ÙSZ[š\ÝÜ™N˜_OX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÕÊ
KÕÊJKÜ™[™\‘›Ü›N›ŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
KÑŠJKÙY˜][˜ßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
]ÙJ
JJKÐ›Þ™‹^œOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
ØÊ
JJKÙY˜][š\ÙQY™™XÝ‘K\ÙTÝ]NßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
ÛŠ
JJKÏX]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKJ
OOš˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆœ›ÝÈŸK˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆ‹ÚYK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK\ˆŠK‹È‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÝÛˆŠKˆÈ[Ý™H™]ÙY[ˆXÚØYÙ\ËˆŠJK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÜXÙOˆŠKˆÈÙ[XÝHXÚØYÙKˆŠJK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÜXÙOˆŠKˆYØZ[ˆÈÚ[™ÙHH\™Ù]ˆŠJJK˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
‹ÛX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK[\ˆŠKˆÈ[œÝ[HÙ[XÝYXÚØYÙ\ËˆŠJK˜Ü™X]Q[[Y[
‹ÛX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÝ›
ØÏˆŠKˆÈX›ÜˆŠJJJKOJ
OOš˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
‹ÝÚYŒM_K˜Ü™X]Q[[Y[
Ø›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸK“ÝÛ™\ˆŠJK˜Ü™X]Q[[Y[
‹ÝÚYŒL_K˜Ü™X]Q[[Y[
Ø›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸK•™\œÚ[ÛˆŠJK˜Ü™X]Q[[Y[
‹ÝÚYŒLK˜Ü™X]Q[[Y[
Ø›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸK‘ÝÛ›ØYÈŠJJKJ
OOš˜Ü™X]Q[[Y[
‹ÝÚYŒMßK˜Ü™X]Q[[Y[
Ø›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸK•\™Ù]ŠJKÏJÚ]YKXÝ]™NÙ_JOOžÛ]ÑYK×OXJYK›˜[YK[
NÜÊØXÝ]™NÙ_K
YKÙJOOžÚYŠÙK›˜[YHOOHœÜXÙHŠ\™]\›ŽÚYŠQYJ^ÙÊÑÌJNÜ™]\›Ÿ[]PÑš[™^ÙŠYJJÌNÖOOPÑ›[™ÝÙÊ[
N™ÊÑÖJ_KÑYK×JNÛ]ÙOZ‹œ\œÙRY[
YK›˜[YJK™OZ‹œ™]RY[
ËÙJNÜ™]\›ˆ˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
‹ÝÚY_K˜Ü™X]Q[[Y[
Ø›ÛˆLÜ˜\ˆÜ˜\ŸK™JJK˜Ü™X]Q[[Y[
‹ÝÚYŒMX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
Ø›ÛˆLÜ˜\ˆ[˜Ø]HŸKYK›ÝÛ™\‹›˜[YJJK˜Ü™X]Q[[Y[
‹ÝÚYŒLX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
Ú][XÎˆLÜ˜\ˆ[˜Ø]HŸKYK™\œÚ[ÛŠJK˜Ü™X]Q[[Y[
‹ÝÚYŒM‹X\™Ú[“YŒ_K˜Ü™X]Q[[Y[
[YKš[X[‘ÝÛ›ØYÓ\ÝÌ^\ÊJJ_KOJÛ˜[YNYKXÝ]™NÙ_JOOžÛ]ÑYWOXJYK[
KÏZ‹œ\œÙRY[
YJNÜ™]\›ˆ˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
‹ÝÚYßK˜Ü™X]Q[[Y[
Ø›ÛˆLKˆH‹‹œ™]RY[
ËÊJJKÑ›X\
ÙOOš˜Ü™X]Q[[Y[
‹ÚÙ^N”ÙKÚYŒMX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
[ˆ‹˜Ü™X]Q[[Y[
ØXÝ]™N‘YOOOTÙ_JKˆ‹˜Ü™X]Q[[Y[
Ø›ÛˆLKÙJJJJJ_KOJ
OOš˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
[”ÝÙ\™YžH[ÛÛXKˆŠJKYOX]ØZ]Š
Ý\ÙTÝX›Z]Y_JOOžÛ]ÙOXJ
NÐYJÙJNÛ]YOP\œ˜^K™œ›ÛJÙKšÙ^\Ê
JK™š[\ŠÏOÙK™Ù]
ÊHOO[[
KÙËÙWOPÊˆŠKÐ™KYWOPÊ
KØÙKOPÊ×JKOWÏOž×Ë›X]Ú
×Ê_ÙJÊ_KYOX\Þ[˜Ê
OOžÛYJ
NÛ]ÏX]ØZ]œJÊN×Ëœ]Y\žOOOYÉ‰–
Ëš]Ê_K]X\Þ[˜Ê
OOžÛ]ÏX]ØZ]œJË™JÌJN×Ëœ]Y\žOOOYÉ‰—ËœYÙKLOOOP™I‰ŠYJËœYÙJK
Ë‹‹˜ÙK‹‹—Ëš]×JJ_NÜ™]\›ˆJ

OOžÙÏÔYJ
N–
×J_KÙ×JK˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
[
K˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆœ›ÝÈ‹X\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
Ø›ÛˆLK”ÙX\˜ÚˆŠK˜Ü™X]Q[[Y[
‹ÝÚY_K˜Ü™X]Q[[Y[
ËÝ˜[YN™ËÛÚ[™ÙN‘KXÙZÛ\ŽˆšK™Kˆ˜X™[ÙXœXÚË™XXÝ‹‹ˆ‹ÚÝÐÝ\œÛÜŽˆL_JJK˜Ü™X]Q[[Y[
K[
JKÙK›[™ÝÚ˜Ü™X]Q[[Y[
‹Ü˜Y]\ÎŒ‹ÛÜˆLKÚ[™[Ž˜ÙK›X\
ÏOš˜Ü™X]Q[[Y[
ËÚÙ^N—Ë›˜[YK]—ËXÝ]™NˆL_JJKÚ[™XXÚ[™š]JNš˜Ü™X]Q[[Y[
ØÛÛÜŽˆ™Ü˜^HŸK”Ý\\[™Ë‹‹ˆŠK˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆœ›ÝÈ‹X\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
‹ÝÚY_K˜Ü™X]Q[[Y[
Ø›ÛˆLK”Ù[XÝYˆŠJK˜Ü™X]Q[[Y[
[
JKYK›[™ÝÑYK›X\
ÏOš˜Ü™X]Q[[Y[
KÚÙ^N—Ë˜[YN—ËXÝ]™NˆL_JJNš˜Ü™X]Q[[Y[
ØÛÛÜŽˆ™Ü˜^HŸK“›ÈÙ[XÝYXÚØYÙ\Ë‹‹ˆŠK˜Ü™X]Q[[Y[
K[
J_KßKÜÝ[Ž\Ë˜ÛÛ^œÝ[‹ÝÝ]\Ë˜ÛÛ^œÝÝ]Ý\œŽ\Ë˜ÛÛ^œÝ\œŸJNÚYŠ\[ÙˆYOˆHŠ\™]\›ˆNÛ]YOP\œ˜^K™œ›ÛJYKšÙ^\Ê
JK™š[\ŠYOOšYK™Ù]
YJOOOHœ™YÝ[\ˆŠKYOP\œ˜^K™œ›ÛJYKšÙ^\Ê
JK™š[\ŠYOOšYK™Ù]
YJOOOH™]ˆŠKOP\œ˜^K™œ›ÛJYKšÙ^\Ê
JK™š[\ŠYOOšYK™Ù]
YJOOOHœY\ˆŠNÜ™]\›ˆYK›[™Ý	‰˜]ØZ]\Ë˜ÛKœ[ŠÈ˜Y‹‹‹YWJKYK›[™Ý	‰˜]ØZ]\Ë˜ÛKœ[ŠÈ˜Y‹‹KY]ˆ‹‹‹˜YWJKI‰˜]ØZ]\Ë˜ÛKœ[ŠÈ˜Y‹‹K\Y\ˆ‹‹‹™WJK_NÜYJ
NÕ

NØÑÊ
NÝ˜\ˆÝÙOY]
J
JNÝ[

NÝ˜\ˆÙOK×Š
Î–×Ÿ—_OÊOÊJÌNWJÊJ–ÌNWJÊJ–ÌNWJÊJ
Î‹WÊÊOÊIÎÙ[˜Ý[ÛˆÙJK
^Ü™]\›ˆK›[™ÝŒÖÙKœÛXÙJ
WK˜ÛÛ˜Ø]
ÙJKœÛXÙJ
K
JN–×_]˜\ˆÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë›[ÙOZK”Ýš[™Ê‹K[[ÙH‹Ù\ØÜš\[ÛŽˆÚ[™ÙHÚ]\Y˜XÝÈ[œÝ[ÈÙ[™\˜]H‹˜[Y]ÜŽšÜÊ˜J_J_\Ý]XÞÝ\Ëœ]ÏVÖÈ\Ü˜YKZ[\˜XÝ]™H—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ’[\˜XÝ]™HÛÛ[X[™È‹\ØÜš\[ÛŽˆ›Ü[ˆH\Ü˜YH[\™˜XÙH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ü[œÈH[ØÜ™Y[ˆ\›Z[˜[[\™˜XÙHÚ\™H[ÝHØ[ˆÙYH[žHÝ]Ùˆ]HXÚØYÙ\È\ÙYžH[Ý\ˆ\XØ][Û‹Z\ˆÝ]\ÈÛÛ\\™YÈH]\Ý™\œÚ[ÛœÈ]˜Z[X›HÛˆH™[[ÝH™YÚ\ÝžK[™Ù[XÝXÚØYÙ\ÈÈ\Ü˜YK——ˆYˆHK[[ÙOO[ÙO˜Ü[Ûˆ\ÈÙ]X\›ˆÚ[Ú[™ÙHÚXÚ\Y˜XÝÈ\™HÙ[™\˜]YˆH[Ù\ÈÝ\œ™[HÝ\ÜY\™N——ˆHÚÚ\XZ[Ú[›Ý[ˆHZ[ØÜš\È][ˆ›ÝH]\È\ÈY™™\™[œ›ÛHÙ][™È[˜X›TØÜš\ØÈ˜[ÙH™XØ]\ÙHH]\ˆÚ[\ØX›HZ[ØÜš\Ë[™\ÈY™™XÝHÛÛ[ÙˆH\Y˜XÝÈÙ[™\˜]YÛˆ\ÚËÚ\™X\ÈH›Ü›Y\ˆÚ[\Ý\ØX›HHZ[Ý\H]›ÝHØÜš\È[\Ù[™\ËÚXÚ\ÝÛÛ‰Ý[‹——ˆH\]K[ØÚÙš[XÚ[ÚÚ\H[šÈÝ\[ÙÙ]\‹[™Û›H™]ÚXÚØYÙ\È]\™HZ\ÜÚ[™Èœ›ÛHHØÚÙš[H
Üˆ]]™H›È\ÜÛØÚX]YÚXÚÜÝ[\ÊKˆ\È[ÙH\È\XØ[H\ÙYžHÛÛÈZÙH™[›Ý˜]HÜˆ\[™X›ÝÈÙY\HØÚÙš[H\]ËY]HÚ]Ý][˜Ý\œš[™ÈH[[œÝ[ÛÜÝ—ˆ‹^[\\Î–ÖÈ“Ü[ˆH\Ü˜YHÚ[™ÝÈ‹žX\›ˆ\Ü˜YKZ[\˜XÝ]™H—W_J_X\Þ[˜È^XÝ]J
^ÒÊ\Ë˜ÛÛ^
NÛ]Ò][SÜ[ÛœÎœŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÙJ
KÝÙJJKÔYœßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠUÊ
KÝÙJJKÔØÜ›ÛX›R][\Î˜_OX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
K‘ŠJKÝ\ÙSZ[š\ÝÜ™N›‹\ÙSZ[š\ÝÜ™TÙ][˜ßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÕÊ
KÕÊJKÝ\ÙRÙ^\™\ÜÎ™ŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠÊ
KÊJKÜ™[™\‘›Ü›NœOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
KÑŠJKÐ›Þš^‘_OX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
ØÊ
JJKÙY˜][Ë\ÙPØ[˜XÚÎ”Ë\ÙQY™™XÝž\ÙT™YŽ’K\ÙTÝ]N•OX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
ÛŠ
JJKÏX]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝ•KÛÜšÜÜXÙN–_OX]ØZ]™š[™
Ë\Ë˜ÛÛ^˜ÝÙ
KOX]ØZ]œ‹™š[™
ÊNÚYŠVJ]›ÝÈ™]È\ŠK˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Kœ™\ÝÜ™R[œÝ[Ý]JÜ™\ÝÜ™T™\ÛÛ][ÛœÎˆL_JNÛ]YO]\Ë˜ÛÛ^œÝÝ]œ›ÝÜËNYOJJOOžÛ]YOZLJJK]HˆŽÙ›ÜŠ]ÈÙˆYJWË˜YYÚ]
Ï\Kœ™]JËË˜[YK™Ü™Y[ˆŠN—Ëœ™[[Ý™Y
]
ÏWË˜[YJNÜ™]\›ˆ]KYOJJOOžÚYŠOOQJ\™]\›ˆNÛ]YOZ‹œ\œÙT˜[™ÙJ
K]Z‹œ\œÙT˜[™ÙJJKÏTYKœÙ[XÝÜ‹›X]Ú
ÙJKZ]œÙ[XÝÜ‹›X]Ú
ÙJNÚYŠWß]
\™]\›ˆYJJNÛ]™OVÈ™Ü˜^H‹œ™Y‹žY[ÝÈ‹™Ü™Y[ˆ‹›XYÙ[H—KÙO[[™OHˆŽÙ›ÜŠ]™OLNÚ™O™K›[™ÝÊÊÚ™JZÙHOO[[ÖÚ™WHOO]Ú™WOÊÙOOO[[	‰ŠÙOS™VÚ™KLWJK™JÏ\Kœ™]JËÚ™WKÙJJN˜™JÏ]Ú™WNÜ™]\›ˆ™_KOX\Þ[˜ÊKYJOOžÛ]]X]ØZ]	K™™]Ú\ØÜš\Ü‘œ›ÛJYKÜ›Ú™XÝ•KØXÚNK™\Ù\™S[ÙYšY\Ž‘KÛÜšÜÜXÙN–_JNÜ™]\›ˆ]OO[[Ú]œ˜[™ÙN–œ˜[™Ù_KYOX\Þ[˜ÈOžÛ]OTÝÙK™Y˜][˜[Y
œ˜[™ÙJOØ‰Öœ˜[™Ù_X–œ˜[™ÙKÔYK]OX]ØZ]›ÛZ\ÙK˜[
ÙJœ˜[™ÙKJK˜Ø]Ú


OO›[
KJœ˜[™ÙK›]\ÝŠK˜Ø]Ú


OO›[
WJKÏVÞÝ˜[YN›[X™[–œ˜[™Ù_WNÜ™]\›ˆYI‰”YHOOVœ˜[™ÙO×Ëœ\Ú
Ý˜[YN”YKX™[˜YJœ˜[™ÙKYJ_JN—Ëœ\Ú
Ý˜[YN›[X™[ˆˆŸJK]	‰š]OOTYI‰š]OOVœ˜[™ÙO×Ëœ\Ú
Ý˜[YNš]X™[˜YJœ˜[™ÙK]
_JN—Ëœ\Ú
Ý˜[YN›[X™[ˆˆŸJKßKÙOJ
OOË˜Ü™X]Q[[Y[
Ù›^\™XÝ[ÛŽˆœ›ÝÈŸKË˜Ü™X]Q[[Y[
Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆ‹ÚY_KË˜Ü™X]Q[[Y[
ÛX\™Ú[“YŒ_KË˜Ü™X]Q[[Y[
K[”™\ÜÈ‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK\ˆŠK‹È‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÝÛˆŠKˆÈÙ[XÝXÚØYÙ\ËˆŠJKË˜Ü™X]Q[[Y[
ÛX\™Ú[“YŒ_KË˜Ü™X]Q[[Y[
K[”™\ÜÈ‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKYˆŠK‹È‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKšYÚˆŠKˆÈÙ[XÝ™\œÚ[ÛœËˆŠJKË˜Ü™X]Q[[Y[
ÛX\™Ú[“YŒ_KË˜Ü™X]Q[[Y[
K[”™\ÜÈ‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK˜ÈŠK‹È‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKœˆŠK‹È‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK›ŠKˆÈÙ[XÝ[‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK˜Ý\œ™[ŠK‹È‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKœ˜[™ÙHŠK‹È‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK›]\ÝŠK‹ˆŠJJKË˜Ü™X]Q[[Y[
Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸKË˜Ü™X]Q[[Y[
ÛX\™Ú[“YŒ_KË˜Ü™X]Q[[Y[
K[”™\ÜÈ‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK[\ˆŠKˆÈ[œÝ[ˆŠJKË˜Ü™X]Q[[Y[
ÛX\™Ú[“YŒ_KË˜Ü™X]Q[[Y[
K[”™\ÜÈ‹Ë˜Ü™X]Q[[Y[
KØ›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÝ›
ØÏˆŠKˆÈX›ÜˆŠJJJKYOJ
OOË˜Ü™X]Q[[Y[
Ù›^\™XÝ[ÛŽˆœ›ÝÈ‹Y[™ÕÜŒKY[™Ð›ÝÛNŒ_KË˜Ü™X]Q[[Y[
ÝÚYLKË˜Ü™X]Q[[Y[
KØ›ÛˆLKË˜Ü™X]Q[[Y[
KØÛÛÜŽˆ™Ü™Y[œšYÚŸKÈŠKˆXÚÈHXÚØYÙ\È[ÝHØ[È\Ü˜YKˆŠJKË˜Ü™X]Q[[Y[
ÝÚYŒMßKË˜Ü™X]Q[[Y[
KØ›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸKÝ\œ™[ŠJKË˜Ü™X]Q[[Y[
ÝÚYŒMßKË˜Ü™X]Q[[Y[
KØ›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸK”˜[™ÙHŠJKË˜Ü™X]Q[[Y[
ÝÚYŒMßKË˜Ü™X]Q[[Y[
KØ›ÛˆL[™\›[™NˆLÛÛÜŽˆ™Ü˜^HŸK“]\ÝŠJJKÏJØXÝ]™N–\ØÜš\ÜŽ‘KÝYÙÙ\Ý[ÛœÎ”Y_JOOžÛ]Ú]×O[ŠK™\ØÜš\Ü’\Ú[
KZ‹œÝš[™ÚYžRY[
JK™OSX]›X^
K]›[™Ý
NÜ™]\›ˆË˜Ü™X]Q[[Y[
Ë‘œ˜YÛY[[Ë˜Ü™X]Q[[Y[
[Ë˜Ü™X]Q[[Y[
ÝÚY_KË˜Ü™X]Q[[Y[
KØ›ÛˆLK‹œ™]RY[
ËJJKË˜Ü™X]Q[[Y[
ËØXÝ]™N–[™Ý“™_JJKË˜Ü™X]Q[[Y[
‹ØXÝ]™N–Ü[ÛœÎ”YK˜[YNš]ÚÙ]Ù\ŽˆLÛÚ[™ÙN—ËÚ^™\Î–ÌMËMËM×_JJJ_KÙOJÙ\[™[˜ÚY\Î–JOOžÛ]OXÊ
KÔYK]OU
›X\


OO›[
JKÏRJL
KX\Þ[˜ÈÙOOžÛ]™OX]ØZ]YJÙJNÜ™]\›ˆ™K™š[\Š™OOš™K›X™[OOHˆŠK›[™ÝLOÛ[žÙ\ØÜš\ÜŽšÙKÝYÙÙ\Ý[ÛœÎ˜™__NÞ


OOŠ
OOž×Ë˜Ý\œ™[HL_K×JK


OOžÛ]ÙOSX][˜ÊYJŒKÍJK™OVœÛXÙJÙJK™OVœÛXÙJÙJK™OQÙJ™KYJKÝX™K›X\

Kœ™YXÙJ\Þ[˜ÊYK
OOžØ]ØZ]YNÛ]ÏX]ØZ]ÝÈOO[[	‰—Ë˜Ý\œ™[	‰š]
OžÛ]OX‹™š[™[™^
OžOO[[
KVË‹‹˜—NÜ™]\›ˆ–ÞWO]ËŸJ_K›ÛZ\ÙKœ™\ÛÛ™J
JNÔ™Kœ™YXÙJ
YK
OO”›ÛZ\ÙK˜[
›X\
ÏO”›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO
ÊJJJK[Š\Þ[˜ÈÏOžÝÏ]Ë™š[\ŠO˜ˆOO[[
K]ØZ]YKË˜Ý\œ™[	‰š]
OžÛ]OX‹™š[™[™^
O‘OO[[
NÜ™]\›ˆ‹œÛXÙJJK˜ÛÛ˜Ø]
ÊK˜ÛÛ˜Ø]
‹œÛXÙJJÝË›[™Ý
J_J_JKÝ
K[Š

OOž×Ë˜Ý\œ™[	‰š]
YOO“YK™š[\ŠO”OO[[
J_J_K×JNÛ]™OTÊÙOOžÚYŠÙHOOH˜È‰‰šÙHOOHœˆ‰‰šÙHOOH›Š\™]\›ŽÛ]™OV×NÙ›ÜŠ]™HÙˆYJ^ÚYŠ™OOO[[
XÛÛ[YNÛ]™NÚÙOOOH˜ÈÔ™O[[šÙOOOHœˆÔ™OZ™KœÝYÙÙ\Ý[ÛœÖÌWK˜[YN”™OZ™KœÝYÙÙ\Ý[ÛœÖÌ—K˜[YOÏÚ™KœÝYÙÙ\Ý[ÛœÖÌWK˜[YK™Kœ\Ú
Ú™K™\ØÜš\Ü‹™\ØÜš\Ü’\Ú™WJ_QJ™J_KÔYKWJNÜ™]\›ˆŠØXÝ]™NˆLK™KÓ™WJKYK›[™ÝÐË˜Ü™X]Q[[Y[
KÜ˜Y]\ÎšYOŒKÚ[™[Ž”YK›X\

ÙK™JOOšÙHOO[[ÐË˜Ü™X]Q[[Y[
ËÚÙ^N˜™KXÝ]™NˆLK\ØÜš\ÜŽšÙK™\ØÜš\Ü‹ÝYÙÙ\Ý[ÛœÎšÙKœÝYÙÙ\Ý[ÛœßJNË˜Ü™X]Q[[Y[
KÚÙ^N˜™_K“ØY[™Ë‹‹ˆŠJ_JNË˜Ü™X]Q[[Y[
K[“›È\Ü˜Y\È›Ý[™Š_KYOX]ØZ]

Ý\ÙTÝX›Z]–JOOžÖ
Š
JNÛ]O[™]ÈX\Ù›ÜŠ]]ÙˆKÛÜšÜÜXÙ\ÊY›ÜŠ]ÈÙ–È™\[™[˜ÚY\È‹™]‘\[™[˜ÚY\È—JY›ÜŠ]Ùˆ]›X[šY™\Ý××K˜[Y\Ê
JUKžUÛÜšÜÜXÙPžQ\ØÜš\ÜŠ
OOO[[	‰Šœ˜[™ÙKœÝ\ÕÚ]
›[šÎˆŠ_KœÙ]
™\ØÜš\Ü’\Ú
JNÛ]YOQÙKœÛÜX\
K˜[Y\Ê
K]Oš‹œÝš[™ÚYžQ\ØÜš\ÜŠ]
JNÜ™]\›ˆË˜Ü™X]Q[[Y[
Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸKË˜Ü™X]Q[[Y[
ÙK[
KË˜Ü™X]Q[[Y[
YK[
KË˜Ü™X]Q[[Y[
ÙKÙ\[™[˜ÚY\Î”Y_JJ_KßKÜÝ[Ž\Ë˜ÛÛ^œÝ[‹ÝÝ]\Ë˜ÛÛ^œÝÝ]Ý\œŽ\Ë˜ÛÛ^œÝ\œŸJNÚYŠ\[ÙˆYOˆHŠ\™]\›ˆNÛ]ÙOHLNÙ›ÜŠ]ÙˆKÛÜšÜÜXÙ\ÊY›ÜŠ]HÙ–È™\[™[˜ÚY\È‹™]‘\[™[˜ÚY\È—J^Û]YOV›X[šY™\ÝÑWNÙ›ÜŠ]]ÙˆYK˜[Y\Ê
J^Û]Ï[YK™Ù]
]™\ØÜš\Ü’\Ú
NÝ\[ÙˆÏH‰‰—ÈOO[[	‰ŠYKœÙ]
]šY[\Ú‹›XZÙQ\ØÜš\ÜŠ]ÊJKÙOHL
__\™]\›ˆÙOØ]ØZ]Kš[œÝ[Ú]™]Ô™\Ü
Ü]ZY]\Ë˜ÛÛ^œ]ZY]ÝÝ]\Ë˜ÛÛ^œÝÝ]KØØXÚNK[ÙN\Ë›[Ù_JNŒ_NÝ˜\ˆ\^ØÛÛ[X[™Î–Ð]Ë×_KÜU\Ý˜\ˆÏ^ßNÖ]
ËÙY˜][Š
OOœ\JNÜYJ
NÝ˜\ˆ‘HšœÜŽˆŽÜYJ
NÜYJ
NÙ[˜Ý[ÛˆÊJ^Û]YKœ˜[™ÙKœÛXÙJ
NÚYŠœ‹˜[Y˜[™ÙJ
J\™]\›ˆ‹›XZÙQ\ØÜš\ÜŠKœN‰Ú‹œÝš[™ÚYžRY[
‹Ü˜\Y[[ÔØÛÜJKšœÜˆŠJ_P	ÝX
NÛ]Z‹žT\œÙQ\ØÜš\ÜŠL
NÚYŠˆOO[[
\™]\›ˆ‹›XZÙQ\ØÜš\ÜŠKœN‰Ú‹œÝš[™ÚYžRY[
‹Ü˜\Y[[ÔØÛÜJ‹šœÜˆŠJ_P	Ü‹œ˜[™Ù_X
NÝ›ÝÈ™]È\œ›ÜŠ[˜[Y˜[™ÙNˆ	ÙKœ˜[™Ù_X
_Y[˜Ý[ÛˆÝÊJ^Ü™]\›ˆ‹›XZÙSØØ]ÜŠ‹Ü˜\Y[[ÔØÛÜJKšœÜˆŠKœN‰ÙKœ™Y™\™[˜ÙKœÛXÙJ
_X
_Y[˜Ý[ÛˆUÊJ^Ü™]\›ˆ‹›XZÙSØØ]ÜŠ‹[Ü˜\Y[œ›ÛTØÛÜJKšœÜˆŠKœÜŽ‰ÙKœ™Y™\™[˜ÙKœÛXÙJ
_X
_]˜\ˆQXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆœ™Y™\™[˜ÙKœÝ\ÕÚ]
‘
_YÙ]ØØ[]
Š^Û]ÏYÝÊ
NÜ™]\›ˆ‹™™]Ú\‹™Ù]ØØ[]
ËŠ_Y™]Ú
Š^Û]ÏYÝÊ
NÜ™]\›ˆ‹™™]Ú\‹™™]Ú
ËŠ__NÝ˜\ˆQXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆH]œ˜[™ÙKœÝ\ÕÚ]
‘
_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
‘
_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Û]ÏYÝÊ
NÜ™]\›ˆ‹œ™\ÛÛ™\‹œÚÝ[\œÚ\Ý™\ÛÛ][ÛŠËŠ_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆYÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žÚ[›™\ŽšÊ
__X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]O\Ëœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJÊ
JNÜ™]\›Š]ØZ]Ëœ™\ÛÛ™\‹™Ù]Ø[™Y]\ÊK‹ÊJK›X\
ÏOUÊÊJ_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]XKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJÊ
JNÜ™]\›ˆKœ™\ÛÛ™\‹™Ù]Ø]\ÙžZ[™Ê‹‹ËJ_X\Þ[˜È™\ÛÛ™JŠ^Û]ÏYÝÊ
KOX]ØZ]‹œ™\ÛÛ™\‹œ™\ÛÛ™JËŠNÜ™]\›žË‹‹˜K‹‹UÊJ___NÝ˜\ˆVÈ™\[™[˜ÚY\È‹™]‘\[™[˜ÚY\È‹œY\‘\[™[˜ÚY\È—NÙ[˜Ý[Ûˆœ
K
^Ù›ÜŠ]ˆÙˆ
Y›ÜŠ]ÈÙˆK›X[šY™\Ý™Ù]›Ü”ØÛÜJŠK˜[Y\Ê
J^ÚYŠ\Ëœ˜[™ÙKœÝ\ÕÚ]
šœÜŽˆŠJXÛÛ[YNÛ]OZÊÊK\OOH™\[™[˜ÚY\ÈÚ‹›XZÙQ\ØÜš\ÜŠË[šÛ›ÝÛˆŠN›[Ï[ˆOO[[	‰™K›X[šY™\Ý™[œÝ\™Q\[™[˜ÞSY]JŠK›Ü[Û˜[È›Ü[Û˜[\[™[˜ÚY\ÈŽœŽÝØ×VÚ‹œÝš[™ÚYžRY[
ÊWOXKœ˜[™Ù__]˜\ˆÜ^ÚÛÚÜÎžØ™Y›Ü™UÛÜšÜÜXÙTXÚÚ[™ÎšœK™\ÛÛ™\œÎ–ÕQ—K™]Ú\œÎ–ÓQ—_K\QÜÝ˜\ˆÏ^ßNÖ]
ËÓ[šÑ™]Ú\ŽŠ
OO‘[šÔ™\ÛÛ™\ŽŠ
OO”ÑÜ[™]Ú\ŽŠ
OO‘Ü[™\ÛÛ™\ŽŠ
OO˜‘Y˜][Š
OO•œJNÜYJ
NÑ

NÝ˜\ˆZHœÜ[ˆ‹H›[šÎˆŽÝ˜\ˆ‘XÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]

_YÙ]ØØ[]
Š^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJœ™Y™\™[˜ÙKÜ›ÝØÛÛJNÚYŠËš\ÐXœÛÛ]JJJ\™]\›ˆNÛ]\‹™™]Ú\‹™Ù]ØØ[]
ËŠNÜ™]\›ˆOO[[Û[’Ëœ™\ÛÛ™J‹J_X\Þ[˜È™]Ú
Š^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJœ™Y™\™[˜ÙKÜ›ÝØÛÛJKRËš\ÐXœÛÛ]JJOÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]™ÝØØ[]œ›ÛÝN˜]ØZ]‹™™]Ú\‹™™]Ú
ËŠKÏ[‹›ØØ[]ÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]’Ëœ™[]]™Jœ›ÛÝ‹›ØØ[]
KØØ[]œ›ÛÝN›ŽÛˆOOXÉ‰›‹œ™[X\ÙQœÉ‰›‹œ™[X\ÙQœÊ
NÛ]XËœXÚØYÙQœËRËœ™\ÛÛ™JË›ØØ[]ÏØËœXÚØYÙQœË™Ù]™X[]

KËœ™Yš^]JNÜ™]\›ˆ‹›ØØ[]ÞÜXÚØYÙQœÎ›™]È›ŠØ˜\ÙQœÎ™ŸJK™[X\ÙQœÎ˜Ëœ™[X\ÙQœË™Yš^]™Ý\ØØ\™œ›ÛSÛÚÝ\ˆLØØ[]œNžÜXÚØYÙQœÎ›™]ÈÙŠØ˜\ÙQœÎ™ŸJK™[X\ÙQœÎ˜Ëœ™[X\ÙQœË™Yš^]™Ý\ØØ\™œ›ÛSÛÚÝ\ˆL__NÜYJ
NÑ

NÝ˜\ˆÑXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆH]œ˜[™ÙKœÝ\ÕÚ]

_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]

_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆL_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆ‹˜š[™\ØÜš\ÜŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_J_YÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]O]œ˜[™ÙKœÛXÙJ›[™Ý
NÜ™]\›–Ú‹›XZÙSØØ]ÜŠ	ÝIÙ™KÔÜX›T]
J_X
W_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^Ü™]\›žË‹‹™\œÚ[ÛŽˆŒŒŒ‹[™ÝXYÙS˜[YNœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ”ÓÑ•‹ÛÛ™][ÛœÎ›[\[™[˜ÚY\Î›™]ÈX\Y\‘\[™[˜ÚY\Î›™]ÈX\\[™[˜ÚY\ÓY]N›™]ÈX\Y\‘\[™[˜ÚY\ÓY]N›™]ÈX\š[Ž›™]ÈX\__NÜYJ
NÑ

NÝ˜\ˆXÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
Z
_YÙ]ØØ[]
Š^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJœ™Y™\™[˜ÙKÜ›ÝØÛÛ™ZJNÚYŠËš\ÐXœÛÛ]JJJ\™]\›ˆNÛ]\‹™™]Ú\‹™Ù]ØØ[]
ËŠNÜ™]\›ˆOO[[Û[’Ëœ™\ÛÛ™J‹J_X\Þ[˜È™]Ú
Š^Û]Ü\™[ØØ]ÜŽœË]˜_OZ‹œ\œÙQš[TÝ[T˜[™ÙJœ™Y™\™[˜ÙKÜ›ÝØÛÛ™ZJKRËš\ÐXœÛÛ]JJOÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]™ÝØØ[]œ›ÛÝN˜]ØZ]‹™™]Ú\‹™™]Ú
ËŠKÏ[‹›ØØ[]ÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]’Ëœ™[]]™Jœ›ÛÝ‹›ØØ[]
KØØ[]œ›ÛÝN›ŽÛˆOOXÉ‰›‹œ™[X\ÙQœÉ‰›‹œ™[X\ÙQœÊ
NÛ]XËœXÚØYÙQœËRËœ™\ÛÛ™JË›ØØ[]ÏØËœXÚØYÙQœË™Ù]™X[]

KËœ™Yš^]JNÜ™]\›ˆ‹›ØØ[]ÞÜXÚØYÙQœÎ›™]È›ŠØ˜\ÙQœÎ™ŸJK™[X\ÙQœÎ˜Ëœ™[X\ÙQœË™Yš^]™ÝØØ[]œNžÜXÚØYÙQœÎ›™]ÈÙŠØ˜\ÙQœÎ™ŸJK™[X\ÙQœÎ˜Ëœ™[X\ÙQœË™Yš^]™Ý__NÜYJ
NÜYJ
NÑ

NÝ˜\ˆ‘XÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆH]œ˜[™ÙKœÝ\ÕÚ]
Z
_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆH]œ™Y™\™[˜ÙKœÝ\ÕÚ]
Z
_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆL_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆ‹˜š[™\ØÜš\ÜŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_J_YÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]O]œ˜[™ÙKœÛXÙJZ›[™Ý
NÜ™]\›–Ú‹›XZÙSØØ]ÜŠ	ÙZIÙ™KÔÜX›T]
J_X
W_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^ÚYŠ\‹™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]ÏX]ØZ]‹™™]ÚÜ[ÛœË™™]Ú\‹™™]Ú
‹™™]ÚÜ[ÛœÊKOX]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]]™š[™
Ëœ™Yš^]Ø˜\ÙQœÎœËœXÚØYÙQœßJKËœ™[X\ÙQœÊNÜ™]\›žË‹‹™\œÚ[ÛŽ˜K™\œÚ[ÛŸŒŒŒ‹[™ÝXYÙS˜[YN˜K›[™ÝXYÙS˜[Y_‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y˜][[™ÝXYÙS˜[YHŠK[šÕ\Nˆ”ÓÑ•‹ÛÛ™][ÛœÎ˜K™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
K™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜KœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜K™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜KœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜K˜š[Ÿ__NÝ˜\ˆÜ^Ù™]Ú\œÎ–Ý‘K™\ÛÛ™\œÎ–ÔÑ‘_KœUÜÝ˜\ˆ•Ï^ßNÖ]
•ËÓ›ÙS[Ù[\Ó[šÙ\ŽŠ
OOš‘›ÙS[Ù[\Ó[ÙNŠ
OO–UËœÛÜÙS[šÙ\ŽŠ
OO‘ÑY˜][Š
OO˜ÌJNÑ

NÜYJ
NÑ

NÑ

NÝ˜\ˆÏJK
OO˜	Ù_P	ÝXÙOJK
OOžÛ]]š[™^ÙŠˆÈŠKÏ\LÝœÝXœÝš[™ÊŠÌJNÜ™]\›ˆÊKÊ_NÝ˜\ˆÙOJK^ßJOOžÛ]]™XYÓ]™[[X™\Š›ØÙ\ÜË™[‹““WÑP•Q×ÓU‘SLJKÏ]˜ÚXÚßNKO]šÚ\Ý[™Ó[Z]ß™]ÈX\^ØÚXÚÎœËXYÓ]™[œ‹Ú\Ý[™Ó[Z]Î˜K˜\ÝÛÚÝ\ÜÜÚX›NˆLKÎÛ‹™XYÓ]™[L	‰ŠÏQ]K››ÝÊ
JNÛ]I
KŠKHLKLÙÞÛ]O[UÊ‹Ù—K™]ÈÙ]
Ù‹›ØØ]Ü—JK™]ÈX\ŠNÜQK˜[›Ý\”›Ý[™™YYYKš\ÑÜ˜\Ú[™ÙY‹™˜\ÝÛÚÝ\ÜÜÚX›OHLK
Êß]Ú[J
NÚYŠ‹™XYÓ]™[L	‰˜ÛÛœÛÛK›ÙÊÚ\Ý[YNˆ	Ñ]K››ÝÊ
KXß[\Ë›Ý[™Îˆ	ÚX
K‹™XYÓ]™[LJ^Û]OT
ŠNÚYŠUÊ‹Ù—K™]ÈÙ]
Ù‹›ØØ]Ü—JK™]ÈX\ŠKš\ÑÜ˜\Ú[™ÙY
]›ÝÈ™]È\œ›ÜŠHÚ\Ý[™È™\Ý[\È›Ý\›Z[˜[™]ˆ™YN‚‰Ñ_K™^™YN‚‰Ô
Š_X
NÛ]ÏZÝÙJŠNÚYŠÊ]›ÝÈ™]È\œ›ÜŠ	ÔßKY\ˆÚ\Ý[™Èš[š\ÚY‚‰Ô
Š_X
_\™]\›ˆ‹™XYÓ]™[L‰‰˜ÛÛœÛÛK›ÙÊ
ŠJKZ
Š_K\YOOžÛ]YVÙK›[™ÝLWK[™]ÈX\Ï[™]ÈÙ]O[OžÚYŠ\Ëš\ÊŠJ^ÜË˜Y
ŠNÙ›ÜŠ]ÈÙˆ‹šÚ\ÝY\[™[˜ÚY\Ë˜[Y\Ê
J\‹œÙ]
Ë›˜[YKÊNÙ›ÜŠ]ÈÙˆ‹™\[™[˜ÚY\Ë˜[Y\Ê
J[‹œY\“˜[Y\Ëš\ÊË›˜[YJ_JÊ__NÜ™]\›ˆJ
KŸKÜYOOžÛ]YVÙK›[™ÝLWK[™]ÈX\Ï[™]ÈÙ]O[™]ÈÙ]JËŠOOžÚYŠËš\ÊÊJ\™]\›ŽÜË˜Y
ÊNÙ›ÜŠ]ÙˆËšÚ\ÝY\[™[˜ÚY\Ë˜[Y\Ê
JZYŠY‹š\Ê›˜[YJJ^Û]NÙ›ÜŠ]ÈÙˆJQOPË™\[™[˜ÚY\Ë™Ù]
›˜[YJKI‰œ‹œÙ]
K›˜[YKJ_[][™]ÈÙ]Ù›ÜŠ]ÙˆË™\[™[˜ÚY\Ë˜[Y\Ê
J\˜Y
›˜[YJNÙ›ÜŠ]ÙˆË™\[™[˜ÚY\Ë˜[Y\Ê
JXËœY\“˜[Y\Ëš\Ê›˜[YJ_Š
_NÜ™]\›ˆŠJKŸKÙOJK
OOžÚYŠ™XÛÝ\Y
\™]\›ˆÛ]Û˜[YNœ‹™Y™\™[˜Ù\ÎœËY[˜KØØ]ÜŽ›‹\[™[˜ÚY\Î˜ËÜšYÚ[˜[\[™[˜ÚY\Î™‹Ú\ÝY\[™[˜ÚY\ÎœY\“˜[Y\Îš™X\ÛÛœÎ‘K\ÒÚ\Ý›Ü™\ŽËÚ\Ýš[Üš]N”Ë\[™[˜ÞRÚ[™žÚ\ÝYœ›ÛN’KÚ\ÝYÎ•O]Ï^Û˜[YNœ‹™Y™\™[˜Ù\Î›™]ÈÙ]
ÊKY[˜KØØ]ÜŽ›‹\[™[˜ÚY\Î›™]ÈX\
ÊKÜšYÚ[˜[\[™[˜ÚY\Î›™]ÈX\
ŠKÚ\ÝY\[™[˜ÚY\Î›™]ÈX\

KY\“˜[Y\Î›™]ÈÙ]

K™X\ÛÛœÎ›™]ÈX\
JKXÛÝ\YˆL\ÒÚ\Ý›Ü™\ŽËÚ\Ýš[Üš]N”Ë\[™[˜ÞRÚ[™žÚ\ÝYœ›ÛN›™]ÈX\
JKÚ\ÝYÎ›™]ÈX\

_KOSË™\[™[˜ÚY\Ë™Ù]
ŠNÜ™]\›ˆI‰•KšY[OSËšY[	‰“Ë™\[™[˜ÚY\ËœÙ]
‹ÊKK™\[™[˜ÚY\ËœÙ]
Ë›˜[YKÊKßKœJK
OOžÛ][™]ÈX\
ÖÙK›˜[YKÙKšY[WWJNÙ›ÜŠ]HÙˆK™\[™[˜ÚY\Ë˜[Y\Ê
JYKœY\“˜[Y\Ëš\ÊK›˜[YJ_‹œÙ]
K›˜[YKØKšY[JNÛ]ÏP\œ˜^K™œ›ÛJšÙ^\Ê
JNÜËœÛÜ

KŠOOžÛ]Ï]™Ù]
JK]™Ù]
ŠNÚYŠ‹šÚ\Ýš[Üš]HOOXËšÚ\Ýš[Üš]J\™]\›ˆ‹šÚ\Ýš[Üš]KXËšÚ\Ýš[Üš]NÞÛ]XË™\[™[ËœÚ^™JØËœY\‘\[™[ËœÚ^™NÜ™]\›ˆ‹™\[™[ËœÚ^™JÙ‹œY\‘\[™[ËœÚ^™K\_JNÙ›ÜŠ]HÙˆÊ^Û]XKœÝXœÝš[™ÊKš[™^ÙŠ‹JJKÏXKœÝXœÝš[™Ê‹›[™Ý
ÌJNÚYŠYKœY\“˜[Y\Ëš\ÊŠJ^Û]\‹™Ù]
ŠNÙŸ
V×K‹œÙ]
‹ŠJK‹š[™^ÙŠÊO	‰™‹œ\Ú
Ê__\™]\›ˆŸKÕÏYOOžÛ][™]ÈÙ]JËO[™]ÈÙ]
OOžÚYŠXKš\ÊÊJ^ØK˜Y
ÊNÙ›ÜŠ]ˆÙˆËœY\“˜[Y\ÊZYŠYKœY\“˜[Y\Ëš\ÊŠJ^Û]ÏYK™\[™[˜ÚY\Ë™Ù]
ŠNØÉ‰ˆ]š\ÊÊI‰œŠËJ_]˜Y
Ê__NÙ›ÜŠ]ÈÙˆK™\[™[˜ÚY\Ë˜[Y\Ê
JYKœY\“˜[Y\Ëš\ÊË›˜[YJ_ŠÊNÜ™]\›ˆKUÏJK‹ËK[™]ÈÙ]
OOžÛ]Ï]Ý›[™ÝLWNÚYŠ‹š\ÊÊJ\™]\›žØ[›Ý\”›Ý[™™YYYˆLK\ÑÜ˜\Ú[™ÙYˆL_NÛ‹˜Y
ÊNÛ]]
ÊKRœ
ËŠKYOOXÏÛ™]ÈX\˜K™˜\ÝÛÚÝ\ÜÜÚX›OÖ\

N’Ü

KKÏHLKÏHLK[™]ÈX\
\œ˜^K™œ›ÛJ™[šY\Ê
JK›X\

Õ×JOO–ÕÖÌWJJKO[™]ÈX\ÙÞÛ]V
K‹ËKJNÕš\ÑÜ˜\Ú[™ÙY	‰ŠÏHL
K˜[›Ý\”›Ý[™™YYY	‰ŠÏHL
KOHLNÙ›ÜŠ]ÓËW[Ùˆ
UK›[™ÝŒI‰ˆXË™\[™[˜ÚY\Ëš\ÊÊI‰Š™[]JÊKKœÚY

KœÙ]
ËVÌJKOHL
_]Ú[JJNÙ›ÜŠ]ÙˆË™\[™[˜ÚY\Ë˜[Y\Ê
JZYŠXËœY\“˜[Y\Ëš\Ê›˜[YJI‰ˆ\‹š\Ê›ØØ]ÜŠJ^Ü‹˜Y
›ØØ]ÜŠNÛ]Ï[UÊKË‹‹K‹KJNÓËš\ÑÜ˜\Ú[™ÙY	‰ŠÏHL
KË˜[›Ý\”›Ý[™™YYY	‰ŠÏHL
K‹™[]J›ØØ]ÜŠ_\™]\›žØ[›Ý\”›Ý[™™YYYË\ÑÜ˜\Ú[™ÙY”ß_KœYOOžÙ›ÜŠ]Ý—[ÙˆK™\[™[˜ÚY\ÊZYŠYKœY\“˜[Y\Ëš\Ê
I‰œ‹šY[OOYKšY[
\™]\›ˆLÜ™]\›ˆL_KœJK‹ËK‹Ë‹ÛÝ]]™X\ÛÛŽœ˜\ÝÛÚÝ\ÜÜÚX›NšJOOžÛ]KÏ[[Ï[™]ÈÙ]Ü	‰ŠOX	Ð\œ˜^K™œ›ÛJ
K›X\
ÏO›ÊÊJKš›Ú[Š—LŒNLˆŠ_X
NÛ]\–Ü‹›[™ÝLWKHJËšY[OO^šY[
NÚYŠ	‰ˆU	‰ŠÏH‹HÙ[‹\™Y™\™[˜ÙHŠK	‰Š\Ë™\[™[˜ÞRÚ[™OOLK	‰ˆU	‰ŠÏH‹HÛÜšÜÜXÙHŠJK	‰œË™\[™[˜ÞRÚ[™OOL‰‰ŠH^œ
ÊK	‰ˆU	‰ŠÏH‹H^\›˜[ÛÙ[šÈÚ][šÚ\ÝY\[™[˜ÚY\ÈŠJK	‰ŠHYKœY\“˜[Y\Ëš\ÊË›˜[YJK	‰ˆU	‰ŠÏXHØ[››ÝÚYÝÈY\Žˆ	Ð›ÊK›ÜšYÚ[˜[\[™[˜ÚY\Ë™Ù]
Ë›˜[YJK›ØØ]ÜŠ_H]	Ñ_X
JK
^Û]ÏHLKOXK™Ù]
Ë›˜[YJNÚYŠÏHU_KšY[OO\ËšY[	‰ˆSÉ‰ŠÏXHš[YžNˆ	Ð›ÊK›ØØ]ÜŠ_H]	Ñ_X
KÊY›ÜŠ]O\‹›[™ÝLNÖOLNÖKKJ^Û]YO\–ÖWK™\[™[˜ÚY\Ë™Ù]
Ë›˜[YJNÚYŠYI‰šYKšY[OO\ËšY[
^ÓÏHLNÛ]YOY‹™Ù]

NÝY_
YO[™]ÈÙ]‹œÙ]
YJJKYK˜Y
Ë›˜[YJK	‰ŠÏXHš[YžH	Ð›ÊYK›ØØ]ÜŠ_H]	Ü‹œÛXÙJJK›X\
YOO›ÊYK›ØØ]ÜŠJKš›Ú[Š—LŒNLˆŠ_X
NØœ™XZß_USßZYŠ	‰Š[‹™Ù]
Ë›˜[YJOOO\ËšY[	‰ˆU	‰ŠÏXHš[YžNˆ	Ð›ÊË™Ù]
Ë›˜[YJVÌJ_H]	Ñ_X
JK
^Û]ÏHLO[™]ÈÙ]
ËœY\“˜[Y\ÊNÙ›ÜŠ]O\‹›[™ÝLNÖOLNÖKKJ^Û]O\–ÖWNÙ›ÜŠ]YHÙˆJ^ÚYŠKœY\“˜[Y\Ëš\ÊYJI‰K›ÜšYÚ[˜[\[™[˜ÚY\Ëš\ÊYJJXÛÛ[YNÛ]YO]K™\[™[˜ÚY\Ë™Ù]
YJNÝYI‰™K™\[™[˜ÚY\Ë™Ù]
YJHOO]YI‰ŠOOO\‹›[™ÝLOÔË˜Y
YJNŠÏ[[ÏHLK	‰ŠÏXHY\ˆ\[™[˜ÞH	Ð›ÊYK›ØØ]ÜŠ_Hœ›ÛH\™[	Ð›ÊK›ØØ]ÜŠ_HØ\È›ÝÚ\ÝYÈ	Ñ_X
JJKK™[]JYJ_ZYŠSÊXœ™XZßUSßZYŠ	‰ˆZ
Y›ÜŠ]ÈÙˆËšÚ\ÝY\[™[˜ÚY\Ë˜[Y\Ê
J^Û]OXK™Ù]
Ë›˜[YJ_K™\[™[˜ÚY\Ë™Ù]
Ë›˜[YJNÚYŠU_ËšY[OOUKšY[
^ÕHLK	‰ŠÏXH™]š[Ý\ÛHÚ\ÝY\[™[˜ÞHZ\ÛX]Ú™YYYˆ	Ð›ÊË›ØØ]ÜŠ_K]˜Z[X›Nˆ	Ð›ÊOË›ØØ]ÜŠ_X
NØœ™XZß_\™]\›ˆÈOO[[	‰”ËœÚ^™OŒÞÚ\ÒÚ\ÝX›NŒ‹\[™ÓÛŽ”Ë™X\ÛÛŽßNžÚ\ÒÚ\ÝX›N•ÌŒK™X\ÛÛŽß_KÑYOO˜	ÙK›˜[Y_P	ÙK›ØØ]ÜŸXJK‹ËK‹Ë‹
OOžÛ]]Ý›[™ÝLWKO[™]ÈÙ]ÏHLKÏHLKJKKKYKYJOOžÚYŠKš\ÊYJJ\™]\›ŽÛ]YOVË‹‹–KÑŠYJWKOVË‹‹KÑŠYJWKYO[™]ÈX\ÙO[™]ÈX\Ù›ÜŠ]YHÙˆÕÊYJJ^Û]ÙOVœ
‹Ú‹‹•KYWKYKËK‹‹ÛÝ]]™X\ÛÛŽœ™XYÓ]™[L‹˜\ÝÛÚÝ\ÜÜÚX›Nœ™˜\ÝÛÚÝ\ÜÜÚX›_JNÚYŠÙKœÙ]
YKÙJKÙKš\ÒÚ\ÝX›OOOLŠY›ÜŠ]ÙˆÙK™\[™ÓÛŠ^Û]OPYK™Ù]
›˜[YJ_™]ÈÙ]ÑK˜Y
YK›˜[YJKYKœÙ]
›˜[YKJ__[]YO[™]ÈÙ]ÏJYKÙK
OOžÚYŠQYKš\ÊYJJ^ÑYK˜Y
YJKÙKœÙ]
YKÚ\ÒÚ\ÝX›NŒK™X\ÛÛŽ–JNÙ›ÜŠ]HÙˆYK™Ù]
YK›˜[YJ_×JYÊYK™\[™[˜ÚY\Ë™Ù]
JKÙK™XYÓ]™[LØHY\ˆ\[™[˜ÞH	Ð›ÊYK›ØØ]ÜŠ_Hœ›ÛH\™[	Ð›ÊYK›ØØ]ÜŠ_HØ\È›ÝÚ\ÝYˆˆŠ__NÙ›ÜŠ]ÛYKÙW[ÙˆÙJXÙKš\ÒÚ\ÝX›OOOLI‰™ÊYKÙKÙKœ™X\ÛÛŠNÛ]ÙOHLNÙ›ÜŠ]YHÙˆÙKšÙ^\Ê
JZYŠQYKš\ÊYJJ^ÔÏHLÛ]ÙOXË™Ù]
YJNØÙI‰˜ÙKš\ÊYK›˜[YJI‰ŠÏHL
KÙOHLYK™\[™[˜ÚY\Ë™[]JYK›˜[YJKYKšÚ\ÝY\[™[˜ÚY\ËœÙ]
YK›˜[YKYJKYKœ™X\ÛÛœË™[]JYK›˜[YJNÛ]Z™\[™[˜ÚY\Ë™Ù]
YK›˜[YJNÚYŠ™XYÓ]™[LŠ^Û]OP\œ˜^K™œ›ÛJJK˜ÛÛ˜Ø]
ÚYK›ØØ]Ü—JK›X\
]O›Ê]
JKš›Ú[Š—LŒNLˆŠKYOZšÚ\ÝYœ›ÛK™Ù]
YK›˜[YJNÔY_
YOV×KšÚ\ÝYœ›ÛKœÙ]
YK›˜[YKYJJKYKœ\Ú
JKYKšÚ\ÝYËœÙ]
YK›˜[YK\œ˜^K™œ›ÛJ
K›X\
]O›Ê]›ØØ]ÜŠJKš›Ú[Š—LŒNLˆŠJ_ZYŠV
ZšY[OO[YKšY[	‰Š™\[™[˜ÚY\ËœÙ]
YK›˜[YKYJKYK˜Y
YJJNÙ[ÙH›ÜŠ]HÙˆYKœ™Y™\™[˜Ù\ÊVœ™Y™\™[˜Ù\Ë˜Y
J_ZYŠYK™\[™[˜ÞRÚ[™OOL‰‰”ÙI‰ŠÏHL
K˜ÚXÚÊ^Û]YOZÝÙJJNÚYŠYJ]›ÝÈ™]È\œ›ÜŠ	ÛY_KY\ˆÚ\Ý[™È\[™[˜ÚY\ÈÙˆ	ÖÚ‹‹•KYWK›X\
ÙOO›ÊÙK›ØØ]ÜŠJKš›Ú[Š—LŒNLˆŠ_N‚‰Ô
J_X
_[]™OYÕÊYJNÙ›ÜŠ]YHÙˆ™JZYŠYKš\ÊYJJ^Û]ÙOPÙK™Ù]
YJNÚYŠ
K™Ù]
YK›˜[YJOOO[YKšY[ZYKœ™X\ÛÛœËš\ÊYK›˜[YJJI‰˜ÙKš\ÒÚ\ÝX›HOOL	‰šYKœ™X\ÛÛœËœÙ]
YK›˜[YKÙKœ™X\ÛÛŠK[YKš\ÒÚ\Ý›Ü™\‰‰™Kš[™^ÙŠÑŠYJJO
^ÑK˜Y
YJNÛ]OTÙJYKYJNÞ
Ë‹‹•KYWKYKKK
KK™[]JYJ___KK[™]ÈÙ]
ÕÊ
JKÏP\œ˜^K™œ›ÛJ
K›X\
OO—ÑŠJJNÙÞÒOU[™]ÈÙ]Ù›ÜŠ]HÙˆJ^ÚYŠK›ØØ]ÜOOZ›ØØ]ÜŸKš\ÒÚ\Ý›Ü™\ŠXÛÛ[YNÛ]OTÙJJNÞ
×K\œ˜^K™œ›ÛJŠKËK
__]Ú[JœÚ^™OŒ
NÜ™]\›žØ[›Ý\”›Ý[™™YYYË\ÑÜ˜\Ú[™ÙY”ß_KÝÙOYOOžÛ]V×K[™]ÈÙ]Ï[™]ÈÙ]OJ‹ËŠOOžÚYŠ‹š\ÊŠ_
‹˜Y
ŠKËš\ÊŠJJ\™]\›ŽÛ][™]ÈX\
ÊNÙ›ÜŠ]Ùˆ‹™\[™[˜ÚY\Ë˜[Y\Ê
J[‹œY\“˜[Y\Ëš\Ê›˜[YJ_œÙ]
›˜[YK
NÙ›ÜŠ]Ùˆ‹›ÜšYÚ[˜[\[™[˜ÚY\Ë˜[Y\Ê
J^Û]O\™Ù]
›˜[YJKÏJ
OO˜	Ð\œ˜^K™œ›ÛJÊK˜ÛÛ˜Ø]
Û—JK›X\
ÏO›ÊË›ØØ]ÜŠJKš›Ú[Š—LŒNLˆŠ_XÚYŠ‹œY\“˜[Y\Ëš\Ê›˜[YJJ^Û]ÏXË™Ù]
›˜[YJNÊÈOOQ_TßËšY[OOZšY[
I‰œ\Ú
	ÐÊ
_HHœ›ÚÙ[ˆY\ˆ›ÛZ\ÙNˆ^XÝY	ÚšY[H]›Ý[™	ÔÉ‰”ËšY[X
_Y[Ù^Û]ÏY‹šÚ\ÝYœ›ÛK™Ù]
‹›˜[YJK[‹šÚ\ÝYË™Ù]
›˜[YJKOX	ÔÏØÚ\ÝYœ›ÛH	ÔËš›Ú[Š‹Š_XˆˆŸXX	ÞØÚ\ÝYÈ	ÞXˆˆŸXÏX	ÐÊ
_IÒ_XÑOÑKšY[OOZšY[	‰œ\Ú
	ÓßHHœ›ÚÙ[ˆ™\]Z\™H›ÛZ\ÙH›Üˆ	Ú›˜[Y_IÕNˆ^XÝY	ÚšY[K]›Ý[™ˆ	ÑKšY[X
Nœ\Ú
	ÓßHHœ›ÚÙ[ˆ™\]Z\™H›ÛZ\ÙNˆ›È™\]Z\™Y\[™[˜ÞH	Ú›˜[Y_IÕH›Ý[™
__\Ë˜Y
ŠNÙ›ÜŠ]Ùˆ‹™\[™[˜ÚY\Ë˜[Y\Ê
J[‹œY\“˜[Y\Ëš\Ê›˜[YJ_JŠNÜË™[]JŠ_NÜ™]\›ˆJKK™\[™[˜ÚY\ËJKš›Ú[Š˜
_K	JK
OOžÛ]ÚY[˜[YNœ‹˜[YNœË™Y™\™[˜ÙN˜KY\“˜[Y\Î›ŸOYKÏ^Û˜[YNœË™Y™\™[˜Ù\Î›™]ÈÙ]
ØWJKØØ]ÜŽ™Ê‹JKY[˜ÙJ‹JK\[™[˜ÚY\Î›™]ÈX\ÜšYÚ[˜[\[™[˜ÚY\Î›™]ÈX\Ú\ÝY\[™[˜ÚY\Î›™]ÈX\Y\“˜[Y\Î›™]ÈÙ]
ŠK™X\ÛÛœÎ›™]ÈX\XÛÝ\YˆL\ÒÚ\Ý›Ü™\ŽˆLÚ\Ýš[Üš]NŒ\[™[˜ÞRÚ[™ŒKÚ\ÝYœ›ÛN›™]ÈX\Ú\ÝYÎ›™]ÈX\K[™]ÈX\
ÖÙK×WJKJJOOžÛ]ÏY‹™Ù]

KÏHHPÎÚYŠPÊ^Û]Û˜[YNžY[˜[YN’K™Y™\™[˜ÙN•Y\“˜[Y\Î“ËÚ\Ýš[Üš]N•K\[™[˜ÞRÚ[™–_OZO]šÚ\Ý[™Ó[Z]Ë™Ù]
K›ØØ]ÜŠNÐÏ^Û˜[YNž™Y™\™[˜Ù\Î›™]ÈÙ]
ÕJKØØ]ÜŽ™ÊK
KY[˜ÙJK
K\[™[˜ÚY\Î›™]ÈX\ÜšYÚ[˜[\[™[˜ÚY\Î›™]ÈX\Ú\ÝY\[™[˜ÚY\Î›™]ÈX\Y\“˜[Y\Î›™]ÈÙ]
ÊK™X\ÛÛœÎ›™]ÈX\XÛÝ\YˆL\ÒÚ\Ý›Ü™\ŽOÝKš\Ê
NˆLKÚ\Ýš[Üš]N•_\[™[˜ÞRÚ[™–_Ú\ÝYœ›ÛN›™]ÈX\Ú\ÝYÎ›™]ÈX\K‹œÙ]
Ê_ZYŠK™\[™[˜ÚY\ËœÙ]
›˜[YKÊKK›ÜšYÚ[˜[\[™[˜ÚY\ËœÙ]
›˜[YKÊKÊ^Û][™]ÈÙ]OUOžÚYŠ^š\Ê
J^Þ˜Y

K™XÛÝ\YHLNÙ›ÜŠ]ÈÙˆ™\[™[˜ÚY\Ë˜[Y\Ê
JUœY\“˜[Y\Ëš\ÊË›˜[YJ_JÊ__NÒJÊ_Y[ÙH›ÜŠ]Ùˆ™\[™[˜ÚY\Ê\
Ê_NÙ›ÜŠ]ÙˆK™\[™[˜ÚY\Ê\
ÊNÜ™]\›ˆßKUÏYOO™KœÝXœÝš[™ÊKš[™^ÙŠ‹JJKZYOOžÛ]^Û˜[YN™K›˜[YKY[˜[YNžUÊK›ØØ]ÜŠK™Y™\™[˜Ù\Î›™]ÈÙ]
Kœ™Y™\™[˜Ù\ÊK\[™[˜ÚY\Î›™]ÈÙ]K[™]ÈÙ]
ÙWJKÏJK‹ÊOOžÛ]\‹š\ÊJKÚYŠOOXJ\XÎÙ[Ù^Û]Û˜[YNš™Y™\™[˜Ù\Î‘KØØ]ÜŽßOXNÜ^Û˜[YNšY[˜[YNžUÊÊK™Y™\™[˜Ù\Î‘K\[™[˜ÚY\Î›™]ÈÙ]_ZYŠË™\[™[˜ÚY\Ë˜Y

KYŠ^Ü‹˜Y
JNÙ›ÜŠ]ÙˆK™\[™[˜ÚY\Ë˜[Y\Ê
JXKœY\“˜[Y\Ëš\Ê›˜[YJ_ÊK
NÜ‹™[]JJ__NÙ›ÜŠ]HÙˆK™\[™[˜ÚY\Ë˜[Y\Ê
J\ÊKK
NÜ™]\›ˆKYOOžÛ][™]ÈX\[™]ÈÙ]
ÙWJKÏXÏO˜	ØË›˜[Y_P	ØËšY[XOXÏOžÛ]\ÊÊK]™Ù]
ŠNÜ™]\›ˆ
^Ù\[™[Î›™]ÈÙ]Y\‘\[™[Î›™]ÈÙ]Ú\Ýš[Üš]NŒKœÙ]
‹
JKKJËŠOOžÛ]HH\‹š\ÊŠNÚYŠJŠK™\[™[Ë˜Y
ËšY[
K\
^Ü‹˜Y
ŠNÙ›ÜŠ]HÙˆ‹™\[™[˜ÚY\Ë˜[Y\Ê
J^Û]ÏXJJNÐËšÚ\Ýš[Üš]OSX]›X^
ËšÚ\Ýš[Üš]KKšÚ\Ýš[Üš]JK‹œY\“˜[Y\Ëš\ÊK›˜[YJOÐËœY\‘\[™[Ë˜Y
‹šY[
N›Š‹J___NÙ›ÜŠ]ÈÙˆK™\[™[˜ÚY\Ë˜[Y\Ê
JYKœY\“˜[Y\Ëš\ÊË›˜[YJ_ŠKÊNÜ™]\›ˆK›ÏYOOžÚYŠYJ\™]\›ˆ››Û™HŽÛ]YKš[™^ÙŠ‹JKYKœÝXœÝš[™Ê
NÜ‹™[™ÕÚ]
‰ÜÜ›ÛÝ	ŠI‰ŠXÚ‰Ü‹œ™\XÙJ‰ÜÜ›ÛÝ	‹ˆŠ_X
NÛ]ÏYKœÝXœÝš[™Ê
ÌJNÚYŠÏOOHÛÜšÜÜXÙN‹ˆŠ\™]\›ˆ‹ˆŽÚYŠÊ^Û]OJËš[™^ÙŠˆÈŠOŒÜËœÜ]
ˆÈŠVÌWNœÊKœ™\XÙJ›œNˆ‹ˆŠNÜ™]\›ˆËœÝ\ÕÚ]
š\X[ŠI‰ŠXŽ‰ÜŸX
KKœÝ\ÕÚ]
ÛÜšÜÜXÙHŠI‰ŠXÎ‰ÜŸXOHˆŠK	ÜŸIØOØ	Ø_XˆˆŸXY[ÙH™]\›˜	ÜŸXNÝ˜\ˆYOOžÛ]LJK‹ÏHˆŠOOžÚYŠYM‹š\ÊJJ\™]\›ˆˆŽÝ
ÊÎÛ]P\œ˜^K™œ›ÛJK™\[™[˜ÚY\Ë˜[Y\Ê
JKœÛÜ

JOOš›˜[YOOOQK›˜[YOÌš›˜[YO‘K›˜[YOÌN‹LJKHˆŽÛ‹˜Y
JNÙ›ÜŠ]LÚ‹›[™ÝÚ
ÊÊ^Û]OY–ÚNÚYŠXKœY\“˜[Y\Ëš\ÊK›˜[YJI‰‘HOOXJ^Û]ÏXKœ™X\ÛÛœË™Ù]
K›˜[YJKÏ^UÊK›ØØ]ÜŠNÜ
ÏX	ØßIÚ‹›[™ÝLOÈ—LLP×LLŽˆ—LLMLLŸIÊ‹š\ÊJOÈˆŽˆˆŠJÊÈOOQK›˜[YOØN‰ÑK›˜[Y_N˜ˆˆŠJÐ›ÊK›ØØ]ÜŠJÊÏØ	ÐßXˆˆŠ_B˜
Ï\ŠK‹	ØßIÚ‹›[™ÝLOÈ—LLˆŽˆˆŸX
__\™]\›ˆ‹™[]JJKNÜ™]\›ˆŠK™]ÈÙ]
JÊYMØ•™YH\ÈÛÈ\™ÙK\ÙˆH™YH\È™Y[ˆ[œY˜ˆˆŠ_NÝ˜\ˆJÏOŠË•ÓÔ’ÔÔPÑTÏHÛÜšÜÜXÙ\È‹Ë‘TS‘SÒQTÏH™\[™[˜ÚY\È‹Ë““Ó‘OH››Û™H‹ÊJJßJK]ÙOH››ÙWÛ[Ù[\È‹YÏH‰ÜÜ›ÛÝ	ŽÝ˜\ˆÑJK
OOžÛ]ÜXÚØYÙU™YNœ‹Ú\Ý[™Ó[Z]ÎœË\œ›ÜœÎ˜K™\Ù\™TÞ[[[šÜÔ™\]Z\™Y›ŸO[š
K
KÏ[[ÚYŠK›[™ÝOOL
^Û]^ÙJ‹ÚÚ\Ý[™Ó[Z]ÎœßJNØÏ\Ú
K‹
_\™]\›žÝ™YN˜Ë\œ›ÜœÎ˜K™\Ù\™TÞ[[[šÜÔ™\]Z\™Y›Ÿ_KOYOO˜	ÙK›˜[Y_P	ÙKœ™Y™\™[˜Ù_XUÏYOOžÛ][™]ÈX\Ù›ÜŠ]Ü‹×[ÙˆK™[šY\Ê
JZYŠ\Ë™\“\Ý
^Û]O]™Ù]
Ë›ØØ]ÜŠNØ_
O^Ý\™Ù]œË\™Ù][šÕ\NœË›[šÕ\KØØ][ÛœÎ–×K[X\Ù\ÎœË˜[X\Ù\ßKœÙ]
Ë›ØØ]Ü‹JJKK›ØØ][ÛœËœ\Ú
Š_Y›ÜŠ]ˆÙˆ˜[Y\Ê
J\‹›ØØ][ÛœÏ\‹›ØØ][ÛœËœÛÜ

ËJOOžÛ]\ËœÜ]
Ë™[[Z]\ŠK›[™ÝÏXKœÜ]
Ë™[[Z]\ŠK›[™ÝÜ™]\›ˆOOO\ÏÌ›ˆOOXÏØË[Ž˜OœÏÌN‹L_JNÜ™]\›ˆKÙOJK
OOžÛ]Z‹š\Õš\X[ØØ]ÜŠJOÚ‹™]š\X[^™SØØ]ÜŠJN™KÏZ‹š\Õš\X[ØØ]ÜŠ
OÚ‹™]š\X[^™SØØ]ÜŠ
NÜ™]\›ˆ‹˜\™SØØ]ÜœÑ\]X[
‹Ê_KUÏJK‹ÊOOžÚYŠK›[šÕ\HOOH”ÓÑ•Š\™]\›ˆLNÛ]OY™KÔÜX›T]
‹œ™\ÛÛ™Uš\X[	‰œ™Y™\™[˜ÙI‰œ™Y™\™[˜ÙKœÝ\ÕÚ]
š\X[ˆŠOÜ‹œ™\ÛÛ™Uš\X[
KœXÚØYÙSØØ][ÛŠN™KœXÚØYÙSØØ][ÛŠNÜ™]\›ˆË˜ÛÛZ[œÊËJOOO[[KšYOOžÛ]YK™Ù]XÚØYÙR[™›Ü›X][ÛŠKÜ]™[
NÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÜ[]™[XÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÚYŠK™š[™XÚØYÙSØØ]ÜŠœXÚØYÙSØØ][ÛŠOOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÜ[]™[XÚØYÙHÈ]™HH\ÚXØ[ØØ]ÜˆŠNÛ]ÏY™KÔÜX›T]
œXÚØYÙSØØ][Û‹œÛXÙJLJJKO[™]ÈX\^ØÚ[™[Ž›™]ÈX\KÏYK™Ù]\[™[˜ÞU™YT›ÛÝÊ
K[™]ÈX\[™]ÈÙ]JË
OOžÛ]OZJÊNÚYŠš\ÊJJ\™]\›ŽÜ˜Y
JNÛ]YK™Ù]XÚØYÙR[™›Ü›X][ÛŠÊNÚYŠ
^Û]Ï^ÚJ
NˆˆŽÚYŠJÊHOOSÉ‰•›[šÕ\OOOH”ÓÑ•‰‰ˆTËœ™Y™\™[˜ÙKœÝ\ÕÚ]
›[šÎˆŠI‰ˆQUÊËKÊJ^Û]OUÙJËJNÊY‹™Ù]
J_Ëœ™Y™\™[˜ÙKœÝ\ÕÚ]
ÛÜšÜÜXÙNˆŠJI‰™‹œÙ]
KÊ_Y›ÜŠ]ÕKW[ÙˆœXÚØYÙQ\[™[˜ÚY\ÊVHOO[[	‰ŠœXÚØYÙTY\œËš\ÊJ_
K™Ù]ØØ]ÜŠKJKÊJ__NÙ›ÜŠ]ÈÙˆÊZ
Ë[
NÛ]O\ËœÜ]
ËœÙ\
NÙ›ÜŠ]ÈÙˆ‹˜[Y\Ê
J^Û]YK™Ù]XÚØYÙR[™›Ü›X][ÛŠÊKY™KÔÜX›T]
œXÚØYÙSØØ][Û‹œÛXÙJLJJKœÜ]
ËœÙ\
KœÛXÙJK›[™Ý
KÏ[ŽÙ›ÜŠ]HÙˆ
^Û]OSË˜Ú[™[‹™Ù]
JNÖ_
O^ØÚ[™[Ž›™]ÈX\KË˜Ú[™[‹œÙ]
KJJKÏV_SËÛÜšÜÜXÙSØØ]ÜTß[]ÏJË
OOžÚYŠËÛÜšÜÜXÙSØØ]ÜŠ^Û]OZJ
KXK™Ù]
JNÕ
[™]ÈÙ]KœÙ]
K
JK˜Y
ËÛÜšÜÜXÙSØØ]ÜŠ_Y›ÜŠ]HÙˆË˜Ú[™[‹˜[Y\Ê
JPÊKËÛÜšÜÜXÙSØØ]ÜŸ
_NÙ›ÜŠ]ÈÙˆ‹˜Ú[™[‹˜[Y\Ê
JPÊË‹ÛÜšÜÜXÙSØØ]ÜŠNÜ™]\›ˆ_KšJK
OOžÛ]V×KÏHLKO[™]ÈX\\š
JKÏYK™Ù]XÚØYÙR[™›Ü›X][ÛŠKÜ]™[
NÚYŠÏOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÜ[]™[XÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]YK™š[™XÚØYÙSØØ]ÜŠËœXÚØYÙSØØ][ÛŠNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÜ[]™[XÚØYÙHÈ]™HH\ÚXØ[ØØ]ÜˆŠNÛ]Y™KÔÜX›T]
ËœXÚØYÙSØØ][Û‹œÛXÙJLJJK^Û˜[YN™‹›˜[YKY[˜[YN™‹›˜[YK™Y™\™[˜ÙN™‹œ™Y™\™[˜ÙKY\“˜[Y\Î˜ËœXÚØYÙTY\œË\[™[˜ÚY\Î›™]ÈÙ]\[™[˜ÞRÚ[™Œ_KO[™]ÈX\ÏJJOO˜	ÚJJ_N‰ÞXÏJKËKKKYJOOžÛ]YOPÊ
KYOQK™Ù]
YJKOHHXYNÈYI‰•›˜[YOOOY‹›˜[YI‰•œ™Y™\™[˜ÙOOOY‹œ™Y™\™[˜ÙI‰ŠYOZKœÙ]
YK
JNÛ]YOQUÊKK
NÚYŠXYJ^Û]YOLÐYOÛYOLŽ’K›[šÕ\OOOH”ÓÑ•‰‰•›˜[YK™[™ÕÚ]
YÊI‰ŠYOLJKYO^Û˜[YNžY[˜[YN•›˜[YK™Y™\™[˜ÙN•œ™Y™\™[˜ÙK\[™[˜ÚY\Î›™]ÈÙ]Y\“˜[Y\Î›YOOOLOÛ™]ÈÙ]’KœXÚØYÙTY\œË\[™[˜ÞRÚ[™›Y_KKœÙ]
YKYJ_[]ÙNÚYŠYOÐÙOLŽ•K›[šÕ\OOOH”ÓÑ•ÐÙOLNÙOLYKšÚ\Ýš[Üš]OSX]›X^
YKšÚ\Ýš[Üš]_ÙJKYI‰ˆPYJ^Û]YOZJÛ˜[YN“ËšY[˜[YK™Y™\™[˜ÙN“Ëœ™Y™\™[˜Ù_JKÙOXK™Ù]
YJ_™]ÈÙ]ØKœÙ]
YKÙJKÙK˜Y
YK›˜[YJ_[]YO[™]ÈX\
KœXÚØYÙQ\[™[˜ÚY\ÊNÚYŠœ›Ú™XÝ
^Û]YO]œ›Ú™XÝÛÜšÜÜXÙ\ÐžPÝÙ™Ù]
™KÔÜX›T]
KœXÚØYÙSØØ][Û‹œÛXÙJLJJJNÚYŠYJ^Û]ÙO[™]ÈÙ]
Ë‹‹\œ˜^K™œ›ÛJYK›X[šY™\ÝœY\‘\[™[˜ÚY\Ë˜[Y\Ê
KOš‹œÝš[™ÚYžRY[

JK‹‹\œ˜^K™œ›ÛJYK›X[šY™\ÝœY\‘\[™[˜ÚY\ÓY]KšÙ^\Ê
JWJNÙ›ÜŠ]ÙˆÙJQYKš\Ê
_
YKœÙ]
K™Ù]

_[
KYKœY\“˜[Y\Ë˜Y

J__[]ÏZJÛ˜[YN•›˜[YKœ™\XÙJYËˆŠK™Y™\™[˜ÙN•œ™Y™\™[˜Ù_JKÙO[‹™Ù]
ÊNÚYŠÙJY›ÜŠ]YHÙˆÙJQYKœÙ]
	ÛYK›˜[Y_IÙYßXYKœ™Y™\™[˜ÙJNÊHOOU_K›[šÕ\HOOH”ÓÑ•ŸPYI‰Š]œÙ[”™Y™\™[˜Ù\ÐžPÝÙœÙ[”™Y™\™[˜Ù\ÐžPÝÙ™Ù]
JJJI‰“Ë™\[™[˜ÚY\Ë˜Y
YJNÛ]™OUOOY‰‰’K›[šÕ\OOOH”ÓÑ•‰‰ˆU›˜[YK™[™ÕÚ]
YÊI‰ˆPYNÚYŠYI‰ˆP™J^Û]YO[™]ÈX\Ù›ÜŠ]ØÙK[ÙˆYJZYŠOO[[
^Û]OYK™Ù]ØØ]ÜŠÙK
KYOYK™Ù]ØØ]ÜŠÙKœ™\XÙJYËˆŠK
K]YK™Ù]XÚØYÙR[™›Ü›X][ÛŠYJNÚYŠ]OO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]ÏQUÊ]KK
NÚYŠ˜[Y]Q^\›˜[ÛÙ[šÜÉ‰œ›Ú™XÝ	‰—Ê^Ú]œXÚØYÙQ\[™[˜ÚY\ËœÚ^™OŒ	‰ŠÏHL
NÙ›ÜŠ]Ú™K™W[Ùˆ]œXÚØYÙQ\[™[˜ÚY\ÊZYŠ™HOO[[
^Û]ÝZ‹œ\œÙSØØ]ÜŠ\œ˜^Kš\Ð\œ˜^J™JOØ	Ô™VÌ_P	Ô™VÌW_X˜	Ú™_P	Ô™_X
NÚYŠJÝ
HOOZJJJ^Û]YOQYK™Ù]
™JNÚYŠYJ^Û]Z‹œ\œÙSØØ]ÜŠ\œ˜^Kš\Ð\œ˜^JYJOØ	ÓYVÌ_P	ÓYVÌW_X˜	Ú™_P	ÓY_X
NÔÙJÝ
_‹œ\Ú
ÛY\ÜØYÙS˜[YNÌK^˜Ø[››Ý[šÈ	Ú‹œ™]RY[
œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹‹œ\œÙRY[
K›˜[YJJ_H[È	Ú‹œ™]SØØ]ÜŠœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹‹œ\œÙSØØ]ÜŠ	Õ›˜[Y_P	Õœ™Y™\™[˜Ù_X
J_H\[™[˜ÞH	Ú‹œ™]SØØ]ÜŠœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Ý
_HÛÛ™›XÝÈÚ]\™[\[™[˜ÞH	Ú‹œ™]SØØ]ÜŠœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_XJ_Y[Ù^Û][YK™Ù]
™JNÚYŠ
^Û]ÏT\™Ù]Z‹œ\œÙSØØ]ÜŠ\œ˜^Kš\Ð\œ˜^JÊOØ	ÝÖÌ_P	ÝÖÌW_X˜	Ú™_P	ÝßX
NÔÙJ‹Ý
_‹œ\Ú
ÛY\ÜØYÙS˜[YNÌK^˜Ø[››Ý[šÈ	Ú‹œ™]RY[
œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹‹œ\œÙRY[
K›˜[YJJ_H[È	Ú‹œ™]SØØ]ÜŠœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹‹œ\œÙSØØ]ÜŠ	Õ›˜[Y_P	Õœ™Y™\™[˜Ù_X
J_H\[™[˜ÞH	Ú‹œ™]SØØ]ÜŠœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Ý
_HÛÛ™›XÝÈÚ]\[™[˜ÞH	Ú‹œ™]SØØ]ÜŠœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Š_Hœ›ÛHÚX›[™ÈÜ[	Ú‹œ™]RY[
œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹‹œ\œÙRY[
œÜ[›˜[YJJ_XJ_Y[ÙHYKœÙ]
™KÝ\™Ù]˜Ýœ™Y™\™[˜ÙKÜ[‘_J____[]]šÚ\Ý[™Ó[Z]ÐžPÝÙË™Ù]
JK™OWÏÝN’Ëœ™[]]™J™KÔÜX›T]
]œXÚØYÙSØØ][ÛŠJ_™ÝÙO]šÚ\Ý[™Ó[Z]ÐžPÝÙË™Ù]
™JNÔÊÙK]KYKKYK™KOOH™\[™[˜ÚY\ÈŸÙOOOH™\[™[˜ÚY\ÈŸÙOOOHÛÜšÜÜXÙ\ÈŠ___NÜ™]\›ˆÊ‹›˜[YKË‹ËËœXÚØYÙQ\[™[˜ÚY\Ë™ÝLJKÜXÚØYÙU™YNšÚ\Ý[™Ó[Z]Î˜K\œ›ÜœÎœ‹™\Ù\™TÞ[[[šÜÔ™\]Z\™Yœß_NÙ[˜Ý[ÛˆÙJKŠ^Û]Ï\‹œ™\ÛÛ™Uš\X[	‰œ™Y™\™[˜ÙI‰œ™Y™\™[˜ÙKœÝ\ÕÚ]
š\X[ˆŠOÜ‹œ™\ÛÛ™Uš\X[
KœXÚØYÙSØØ][ÛŠN™KœXÚØYÙSØØ][ÛŽÜ™]\›ˆ™KÔÜX›T]
ßKœXÚØYÙSØØ][ÛŠ_Y[˜Ý[ÛˆZ
KŠ^Û]Ï]™Ù]ØØ]ÜŠK›˜[YKœ™\XÙJYËˆŠKKœ™Y™\™[˜ÙJKO]™Ù]XÚØYÙR[™›Ü›X][ÛŠÊNÚYŠOOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙHÈ™H™YÚ\Ý\™YŠNÜ™]\›ˆ‹œœYžQœÏÞÛ[šÕ\Nˆ”ÓÑ•‹\™Ù]™™KÔÜX›T]
KœXÚØYÙSØØ][ÛŠ_NžÛ[šÕ\N˜K›[šÕ\K\™Ù]•ÙJKK
__]˜\ˆÚJKŠOOžÛ]Ï[™]ÈX\OJKËÊOOžÛ]Û[šÕ\Nž\™Ù]’_OZZ
KKŠNÜ™]\›žÛØØ]ÜŽšJJK›ÙT]Ë\™Ù]’K[šÕ\Nž[X\Ù\Î”ß_KQOOžÛ]ÐË×OQKœÜ]
‹ÈŠNÜ™]\›ˆÏÞÜØÛÜNË˜[YN”ßNžÜØÛÜN›[˜[YNß_KÏ[™]ÈÙ]JKËÊOOžÚYŠËš\ÊJJ\™]\›ŽØË˜Y
JNÛ]P\œ˜^K™œ›ÛJKœ™Y™\™[˜Ù\ÊKœÛÜ

Kš›Ú[ŠˆÈŠNÙ›ÜŠ]HÙˆK™\[™[˜ÚY\Ê^Û]P\œ˜^K™œ›ÛJKœ™Y™\™[˜Ù\ÊKœÛÜ

Kš›Ú[ŠˆÈŠNÚYŠKšY[˜[YOOOQKšY[˜[YKœ™\XÙJYËˆŠI‰•OO^
XÛÛ[YNÛ]ÏP\œ˜^K™œ›ÛJKœ™Y™\™[˜Ù\ÊKœÛÜ

KO^Û˜[YN’KšY[˜[YK™Y™\™[˜ÙN“ÖÌ_KÛ˜[YN–KØÛÜN_O[ŠK›˜[YJKYO]OÖÝKWN–ÖWKYORËš›Ú[ŠË]ÙJKYORËš›Ú[ŠYK‹‹šYJKOX	ÔßKÉÕK›˜[Y_XYOXJKËËœÛXÙJJJKÙOHLNÚYŠYK›[šÕ\OOOH”ÓÑ•‰‰œ‹œ›Ú™XÝ
^Û]YO\‹œ›Ú™XÝÛÜšÜÜXÙ\ÐžPÝÙ™Ù]
YK\™Ù]œÛXÙJLJJNÐÙOHHJYI‰ˆQYK›X[šY™\Ý›˜[YJ_ZYŠRK›˜[YK™[™ÕÚ]
YÊI‰ˆPÙJ^Û]YO\Ë™Ù]
YJNÚYŠYJ^ÚYŠYK™\“\Ý
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ	ØY_HØ[››ÝY\™ÙH\ˆ›ÙHÚ]XYˆ›ÙX
NÞÛ]™OZ‹œ\œÙSØØ]ÜŠYK›ØØ]ÜŠKYOZ‹œ\œÙSØØ]ÜŠYK›ØØ]ÜŠNÚYŠYK›[šÕ\HOOPYK›[šÕ\J]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ	ØY_HØ[››ÝY\™ÙH›Ù\ÈÚ]Y™™\™[[šÈ\\È	ÑYK››ÙT]KÉÚ‹œÝš[™ÚYžSØØ]ÜŠ™J_H[™	ÔßKÉÚ‹œÝš[™ÚYžSØØ]ÜŠYJ_X
NÚYŠ™KšY[\ÚOO[YKšY[\Ú
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ	ØY_HØ[››ÝY\™ÙH›Ù\ÈÚ]Y™™\™[Y[È	ÑYK››ÙT]KÉÚ‹œÝš[™ÚYžSØØ]ÜŠ™J_H[™	ÔßKÜÉÚ‹œÝš[™ÚYžSØØ]ÜŠYJ_X
NÐYK˜[X\Ù\ÏVË‹‹YK˜[X\Ù\Ë‹‹‘YK˜[X\Ù\Ë‹œ\œÙSØØ]ÜŠYK›ØØ]ÜŠKœ™Y™\™[˜ÙW__\ËœÙ]
YKYJNÛ]ÏXYKœÜ]
‹ÈŠKÙOYËš[™^ÙŠ]ÙJNÙ›ÜŠ]™OYË›[™ÝLNÔÙOL	‰™O”ÙNÐ™KKJ^Û]YOY™KÔÜX›T]
ËœÛXÙJ™JKš›Ú[ŠËœÙ\
JKÙOYÖÐ™WK\Ë™Ù]
YJNÚYŠV
\ËœÙ]
YKÙ\“\Ý›™]ÈÙ]
ØÙWJ_JNÙ[ÙHYŠ™\“\Ý
^ÚYŠ™\“\Ýš\ÊÙJJXœ™XZÎÖ™\“\Ý˜Y
ÙJ___YŠKYK›[šÕ\OOOH”ÓÑ•ÐYK\™Ù]˜YKJ__KXJÛ˜[YN›˜[YK™Y™\™[˜ÙN\œ˜^K™œ›ÛJœ™Y™\™[˜Ù\ÊVÌ_Kˆ‹×JK\\™Ù]Ü™]\›ˆËœÙ]

KŠˆŠKßNÜYJ
NÜYJ
NÑ

NÑ

NÜJ
NÐ˜Ê
NÝ˜\ˆUÏ^ßNÖ]
UËÔœ[œÝ[\ŽŠ
OO•›Kœ[šÙ\ŽŠ
OO›™Ë[œYÐÛÛ[X[™Š
OO›]ËY˜][Š
OO“šÙ]œ]Š
OOšYËœÒ[œÝ[][ÎŠ
OO™Kœ][ÎŠ
OO’][ÝT]Y“™YYYŠ
OO›LY_JNÑ

NÝ˜\ˆYORYJ\›ŠNÜYJ
NÜYJ
NÑ

NÑ

NÝ˜\ˆÙO^ÑQUSžØÛÛ\ÙYˆLK™^žÈŠˆŽˆ‘QUSŸ_KÔÓU‘SžØÛÛ\ÙYˆLK™^žÙ˜[˜XÚÑ^Û\Ú[Û“\Ýˆ‘SPÒ×ÑVÓTÒSÓ—ÓTÕ‹XÚØYÙT™YÚ\ÝžQ]Nˆ”PÒÐQÑWÔ‘QÒTÕ–WÑUH‹ŠˆŽˆ‘QUSŸ_KSPÒ×ÑVÓTÒSÓ—ÓTÕžØÛÛ\ÙYˆLK™^žÈŠˆŽˆ‘SPÒ×ÑVÓTÒSÓ—ÑS•’QTÈŸ_KSPÒ×ÑVÓTÒSÓ—ÑS•’QTÎžØÛÛ\ÙYˆL™^žÈŠˆŽˆ‘SPÒ×ÑVÓTÒSÓ—ÑUHŸ_KSPÒ×ÑVÓTÒSÓ—ÑUNžØÛÛ\ÙYˆL™^žÈŠˆŽˆ‘QUSŸ_KPÒÐQÑWÔ‘QÒTÕ–WÑUNžØÛÛ\ÙYˆLK™^žÈŠˆŽˆ”PÒÐQÑWÔ‘QÒTÕ–WÑS•’QTÈŸ_KPÒÐQÑWÔ‘QÒTÕ–WÑS•’QTÎžØÛÛ\ÙYˆL™^žÈŠˆŽˆ”PÒÐQÑWÔÕÔ‘WÑUHŸ_KPÒÐQÑWÔÕÔ‘WÑUNžØÛÛ\ÙYˆLK™^žÈŠˆŽˆ”PÒÐQÑWÔÕÔ‘WÑS•’QTÈŸ_KPÒÐQÑWÔÕÔ‘WÑS•’QTÎžØÛÛ\ÙYˆL™^žÈŠˆŽˆ”PÒÐQÑWÒS‘“Ô“PUSÓ—ÑUHŸ_KPÒÐQÑWÒS‘“Ô“PUSÓ—ÑUNžØÛÛ\ÙYˆLK™^žÜXÚØYÙQ\[™[˜ÚY\Îˆ”PÒÐQÑWÑTS‘SÒQTÈ‹ŠˆŽˆ‘QUSŸ_KPÒÐQÑWÑTS‘SÒQTÎžØÛÛ\ÙYˆLK™^žÈŠˆŽˆ”PÒÐQÑWÑTS‘SÖHŸ_KPÒÐQÑWÑTS‘SÖNžØÛÛ\ÙYˆL™^žÈŠˆŽˆ‘QUSŸ__NÙ[˜Ý[ÛˆÚ
KŠ^Û]ÏHˆŽÜÊÏH–ÈŽÙ›ÜŠ]OLYK›[™ÝØOŽÊÊØJ\ÊÏRŠÝš[™ÊJKVØWKŠKœ™\XÙJ×ˆ
ËÙËˆŠKJÌO‰‰ŠÊÏH‹ŠNÜ™]\›ˆÊÏH—H‹ßY[˜Ý[ÛˆZ
KŠ^Û]ÏX	ÜŸHOHˆŽØJÏ\‹JÏXÂ˜Ù›ÜŠ]LÏYK›[™ÝÛÎÊÊÛŠXJÏ\ÊÒŠÝš[™ÊŠKVÛ—KÊKœ™\XÙJ×ˆ
ËËˆŠKŠÌOÉ‰ŠJÏH‹ŠKJÏX˜Ü™]\›ˆJÏ\‹JÏH—H‹_Y[˜Ý[Ûˆ
KŠ^Û]ÏSØš™XÝšÙ^\ÊJKOHˆŽØJÏHžÈŽÙ›ÜŠ]LÏ\Ë›[™ÝLÛÎÊÊÛŠ^Û]\ÖÛ—KYVÜNÝ\[ÙˆˆHŸ
ˆOOL	‰ŠJÏH‹ŠKJÏR”ÓÓ‹œÝš[™ÚYžJ
KJÏHŽˆ‹JÏRŠŠKœ™\XÙJ×ˆ
ËÙËˆŠKŠÏLJ_\™]\›ˆJÏHŸH‹_Y[˜Ý[ÛˆÚ
KŠ^Û]ÏSØš™XÝšÙ^\ÊJKOX	ÜŸHHˆŽÛŠÏ\‹ŠÏXÂ˜Û]ÏLÙ›ÜŠ]L\Ë›[™ÝÙÊÊÙŠ^Û]\ÖÙ—KOYVÚNÝ\[ÙˆOˆHŸ
ÈOOL	‰ŠŠÏH‹‹ŠÏX˜
KŠÏXKŠÏR”ÓÓ‹œÝš[™ÚYžJ
KŠÏHŽˆ‹ŠÏRŠKJKœ™\XÙJ×ˆ
ËÙËˆŠKÊÏLJ_\™]\›ˆÈOOL	‰ŠŠÏX˜
KŠÏ\‹ŠÏHŸH‹ŸY[˜Ý[ÛˆŠK‹Ê^Û]Û™^˜_OQÙVÜ—KXVÙW_VÈŠˆ—NÜ™]\›ˆÙJ‹Ê_Y[˜Ý[ÛˆÙJKŠ^Û]ØÛÛ\ÙYœßOQÙVÝNÜ™]\›ˆ\œ˜^Kš\Ð\œ˜^JJOÜÏÛÚ
KŠN˜Z
KŠN\[ÙˆOOH›Øš™XÝ‰‰™HOO[[ÜÏÛ
KŠN˜Ú
KŠN’”ÓÓ‹œÝš[™ÚYžJJ_Y[˜Ý[ÛˆÝÙJJ^Ü™]\›ˆÙJK•ÔÓU‘S‹ˆŠ_Y[˜Ý[ÛˆQ
K
^Û]P\œ˜^K™œ›ÛJJNÐ\œ˜^Kš\Ð\œ˜^J
_
VÝJNÛ]ÏV×NÙ›ÜŠ]ˆÙˆ
\Ëœ\Ú
‹›X\
ÏO›ŠÊJJNÛ]O\‹›X\

‹ÊOO˜ÊNÜ™]\›ˆKœÛÜ

‹ÊOOžÙ›ÜŠ]ˆÙˆÊ^Û]Y–Û—O–Ø×OËLN™–Û—O™–Ø×OÌNŒÚYŠOOL
\™]\›ˆ\™]\›ˆJKK›X\
Oœ–Û—J_Y[˜Ý[ÛˆZ
J^Û][™]ÈX\TQ
K™˜[˜XÚÑ^Û\Ú[Û“\Ý×KÊÛ˜[YNœË™Y™\™[˜ÙN˜_JOOœË
Û˜[YNœË™Y™\™[˜ÙN˜_JOO˜WJNÙ›ÜŠ]Û˜[YNœË™Y™\™[˜ÙN˜_[ÙˆŠ^Û]]™Ù]
ÊNÝ\[ÙˆˆH‰‰œÙ]
Ë[™]ÈÙ]
K‹˜Y
J_\™]\›ˆ\œ˜^K™œ›ÛJ
K›X\

ÜËWJOO–ÜË\œ˜^K™œ›ÛJJWJ_Y[˜Ý[Ûˆš
J^Ü™]\›ˆQ
K™˜[˜XÚÔÛÛ×K
ÝJOO
_Y[˜Ý[ÛˆZ
J^Û]V×KYK™\[™[˜ÞU™YT›ÛÝË™š[™
ÏO™KœXÚØYÙT™YÚ\ÝžK™Ù]
Ë›˜[YJOË™Ù]
Ëœ™Y™\™[˜ÙJOËœXÚØYÙSØØ][ÛOOH‹‹ÈŠNÙ›ÜŠ]ÜËW[ÙˆQ
KœXÚØYÙT™YÚ\ÝžK
Û—JOO›OO[[ÈŒŽ˜IÛŸX
J^ÚYŠÏOO[[
XÛÛ[YNÛ]V×NÝœ\Ú
ÜË—JNÙ›ÜŠ]ØËÜXÚØYÙSØØ][ÛŽ™‹XÚØYÙQ\[™[˜ÚY\ÎœXÚØYÙTY\œÎš[šÕ\N‘K\ØØ\™œ›ÛSÛÚÝ\ßW[ÙˆQ
K
Ô×JOO”ÏOO[[ÈŒŽ˜IÔßX
J^ÚYŠÏOO[[
XÛÛ[YNÛ]ÏV×NÜÈOO[[	‰˜ÈOO[[	‰ˆ\š\ÊÊI‰”Ëœ\Ú
ÜË×JNÙ›ÜŠ]ÕKW[Ùˆ
TËœ\Ú
ÕKWJNÛ]TQ
Ë
ÕWJOO•JKOZ	‰šœÚ^™OŒÐ\œ˜^K™œ›ÛJ
N›ÚYÏ^ÜXÚØYÙSØØ][ÛŽ™‹XÚØYÙQ\[™[˜ÚY\ÎžXÚØYÙTY\œÎ’K[šÕ\N‘K\ØØ\™œ›ÛSÛÚÝ\ß›ÚYNÛ‹œ\Ú
ØË×JK‰‰œÏOO\‹›˜[YI‰˜ÏOO\‹œ™Y™\™[˜ÙI‰[œÚY
Û[ÖÛ[×WWJ__\™]\›ˆY[˜Ý[Ûˆ‘
J^Ü™]\›ž××Ú[™›Î–È•\Èš[H\È]]ÛX]XØ[HÙ[™\˜]YˆÈ›ÝÝXÚ]Üˆš\ÚÈ‹ž[Ý\ˆ[ÙYšXØ][ÛœÈ™Z[™ÈÜÝˆ—K\[™[˜ÞU™YT›ÛÝÎ™K™\[™[˜ÞU™YT›ÛÝË[˜X›UÜ]™[˜[˜XÚÎ™K™[˜X›UÜ]™[˜[˜XÚßLKYÛ›Ü™T]\›‘]N™KšYÛ›Ü™T]\›Ÿ[œš\˜XÚÙ[™™Kœœš\˜XÚÙ[™˜[˜XÚÑ^Û\Ú[Û“\ÝZ
JK˜[˜XÚÔÛÛ™š
JKXÚØYÙT™YÚ\ÝžQ]NZ
J__]˜\ˆ]ÙOY]
]ÙJ
JNÙ[˜Ý[ÛˆÝÙJK
^Ü™]\›–ÙOØ	Ù_B˜ˆˆ‹Êˆ\Û[Y\ØX›H
‹Â˜ËÈË[›ØÚXÚÂ˜\ÙHÝšXÝŽÂ˜˜˜
]ÙK™Y˜][
J
WKš›Ú[ŠˆŠ_Y[˜Ý[Ûˆ
J^Ü™]\›ˆ”ÓÓ‹œÝš[™ÚYžJK[Š_Y[˜Ý[Ûˆ
J^Ü™]\›˜	ÉÙKœ™\XÙJ×ÙË—ŠKœ™\XÙJÉËÙË—	ÈŠKœ™\XÙJ×‹ÙË˜
_IØY[˜Ý[ÛˆÚ
J^Ü™]\›–ØÛÛœÝU×Ô•S•SQWÔÕUHB˜	Ú
ÝÙJJJ_NÂ‚˜[˜Ý[Ûˆ		ÑUTÔÕUJY˜]T[[YTÝ]K˜\ÙT]
HÂ˜™]\›ˆY˜]T[[YTÝ]J”ÓÓ‹œ\œÙJU×Ô•S•SQWÔÕUJKØ˜\ÙT]ˆ˜\ÙT]×Ù\›˜[Y_JNÂ˜B˜Kš›Ú[ŠˆŠ_Y[˜Ý[Ûˆ

^Ü™]\›–Ø[˜Ý[Ûˆ		ÑUTÔÕUJY˜]T[[YTÝ]K˜\ÙT]
HÂ˜ÛÛœÝœÈH™\]Z\™J	ÙœÉÊNÂ˜ÛÛœÝ]H™\]Z\™J	Ü]	ÊNÂ˜ÛÛœÝœ]Qš[\]H]œ™\ÛÛ™J×Ù\›˜[YK	Ò”ÓÓ‹œÝš[™ÚYžJ\‹œœ]J_JNÂ˜™]\›ˆY˜]T[[YTÝ]J”ÓÓ‹œ\œÙJœËœ™XYš[TÞ[˜Êœ]Qš[\]	Ý]Ž	ÊJKØ˜\ÙT]ˆ˜\ÙT]×Ù\›˜[Y_JNÂ˜B˜Kš›Ú[ŠˆŠ_Y[˜Ý[ÛˆÙJJ^Û]T‘
JKYÚ

NÜ™]\›ˆÝÙJKœÚX˜[™ËŠ_Y[˜Ý[ÛˆÙJJ^Û]T‘
JKY

KÏWÝÙJKœÚX˜[™ËŠNÜ™]\›žÙ]Qš[Nœ

KØY\‘š[Nœß_Q

NÙ[˜Ý[ÛˆÕÊKØ˜\ÙT]J^Û]Y™KÔÜX›T]

KÏRËœ™\ÛÛ™JŠKOYKšYÛ›Ü™T]\›‘]HOO[[Û™]È™YÑ^
KšYÛ›Ü™T]\›‘]JN›[[™]ÈX\Ï[™]ÈX\
KœXÚØYÙT™YÚ\ÝžQ]K›X\

ÐË×JOO–ÐË™]ÈX\
Ë›X\

ÞWJOOžÚYŠÏOO[[OJOO[[
J]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH˜[YH[™™Y™\™[˜ÙHÚÝ[™H[Üˆ™Z]\ˆÚÝ[ŠNÛ]RK™\ØØ\™œ›ÛSÛÚÝ\ÏÈLKÏ^Û˜[YNË™Y™\™[˜ÙNžKO[‹™Ù]
KœXÚØYÙSØØ][ÛŠNÕOÊK™\ØØ\™œ›ÛSÛÚÝ\UK™\ØØ\™œ›ÛSÛÚÝ\	‰•
K›ØØ]ÜSÊJN›‹œÙ]
KœXÚØYÙSØØ][Û‹ÛØØ]ÜŽ“Ë\ØØ\™œ›ÛSÛÚÝ\•JNÛ]O[[Ü™]\›–ÞÜXÚØYÙQ\[™[˜ÚY\Î›™]ÈX\
KœXÚØYÙQ\[™[˜ÚY\ÊKXÚØYÙTY\œÎ›™]ÈÙ]
KœXÚØYÙTY\œÊK[šÕ\N’K›[šÕ\K\ØØ\™œ›ÛSÛÚÝ\•Ù]XÚØYÙSØØ][ÛŠ
^Ü™]\›ˆ_
ORËš›Ú[ŠËKœXÚØYÙSØØ][ÛŠJ__W_JJWJJK[™]ÈX\
K™˜[˜XÚÑ^Û\Ú[Û“\Ý›X\

ÐË×JOO–ÐË™]ÈÙ]
ÊWJJK[™]ÈX\
K™˜[˜XÚÔÛÛ
KYK™\[™[˜ÞU™YT›ÛÝËOYK™[˜X›UÜ]™[˜[˜XÚÎÜ™]\›žØ˜\ÙT]œ‹\[™[˜ÞU™YT›ÛÝÎš[˜X›UÜ]™[˜[˜XÚÎ‘K˜[˜XÚÑ^Û\Ú[Û“\Ý™‹œš\˜XÚÙ[™™Kœœš\˜XÚÙ[™˜[˜XÚÔÛÛœYÛ›Ü™T]\›Ž˜KXÚØYÙSØØ]ÜœÐžSØØ][ÛœÎ›‹XÚØYÙT™YÚ\ÝžN˜ß_Q

NÑ

NÝ˜\ˆšRYJ›[Ù[HŠKÛORYJ\›ŠK•ÏRYJ][ŠNÝ˜\ˆØORYJ\›ŠNÝ˜\ˆÙOY]
YJ˜\ÜÙ\ŠJNÝ˜\ˆ•ÏP\œ˜^Kš\Ð\œ˜^KR”ÓÓ‹œÝš[™ÚYžK‘SØš™XÝ™Ù]ÝÛ”›Ü\S˜[Y\Ë[OJK
OO“Øš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
K
K•ÏJK
OO”™YÑ^œ›ÝÝ\K™^XË˜Ø[
K
KÕÏJK‹‹
OO”™YÑ^œ›ÝÝ\VÔÞ[X›Ûœ™\XÙWK˜\JK
KÏJK‹‹
OO”Ýš[™Ëœ›ÝÝ\K™[™ÕÚ]˜\JK
KÏJK‹‹
OO”Ýš[™Ëœ›ÝÝ\Kš[˜ÛY\Ë˜\JK
K•ÏJK‹‹
OO”Ýš[™Ëœ›ÝÝ\K›\Ý[™^Ù‹˜\JK
K‘JK‹‹
OO”Ýš[™Ëœ›ÝÝ\Kš[™^Ù‹˜\JK
KÝÙOJK‹‹
OO”Ýš[™Ëœ›ÝÝ\Kœ™\XÙK˜\JK
K™ÏJK‹‹
OO”Ýš[™Ëœ›ÝÝ\KœÛXÙK˜\JK
KÐOJK‹‹
OO”Ýš[™Ëœ›ÝÝ\KœÝ\ÕÚ]˜\JK
K]ÙOSX\ÝÙOR”ÓÓ‹œ\œÙNÙ[˜Ý[ÛˆÑ
KŠ^Ü™]\›ˆÛ\ÜÈ^[™ÈžØÛÛœÝXÝÜŠ‹‹œÊ^ÜÝ\\Š
‹‹œÊJK\Ë˜ÛÙOYK\Ë›˜[YOX	Ü‹›˜[Y_HÉÙ_WX__]˜\ˆ]ÙOSÑ
‘T”—ÔPÒÐQÑWÒSTÔ•Ó“ÕÑQ’S‘Q‹
KŠOO˜XÚØYÙH[\ÜÜXÚYšY\ˆ‰Ù_Hˆ\È›ÝYš[™Y	ÝØ[ˆXÚØYÙH	Ý\XÚØYÙKšœÛÛ˜ˆˆŸH[\ÜYœ›ÛH	ÜŸX\Q\œ›ÜŠKÏSÑ
‘T”—ÒS•SQÓSÑSWÔÔPÒQ’QTˆ‹
K]›ÚY
OO˜[˜[Y[Ù[H‰Ù_Hˆ	ÝIÜØ[\ÜYœ›ÛH	ÜŸXˆˆŸX\Q\œ›ÜŠKÝÙOSÑ
‘T”—ÒS•SQÔPÒÐQÑWÕT‘ÑU‹
K‹ÏHLKO]›ÚY
OOžÛ]]\[ÙˆOHœÝš[™È‰‰ˆ\É‰œ‹›[™Ý	‰ˆYÐJ‹‹‹ÈŠNÜ™]\›ˆOOH‹ˆÊ
ÙK™Y˜][
JÏOOHLJK[˜[Y™^ÜÈˆXZ[ˆ\™Ù]	Õ
Š_HYš[™Y[ˆHXÚØYÙHÛÛ™šYÈ	Ù_\XÚØYÙKšœÛÛ‰ØOØ[\ÜYœ›ÛH	Ø_XˆˆŸIÛÉÎÈ\™Ù]È]\ÝÝ\Ú]‹‹È‰ÎˆˆŸX
N˜[˜[Y‰ÜÏÈš[\ÜÈŽˆ™^ÜÈŸHˆ\™Ù]	Õ
Š_HYš[™Y›Üˆ	ÉÝIÈ[ˆHXÚØYÙHÛÛ™šYÈ	Ù_\XÚØYÙKšœÛÛ‰ØOØ[\ÜYœ›ÛH	Ø_XˆˆŸIÛÉÎÈ\™Ù]È]\ÝÝ\Ú]‹‹È‰ÎˆˆŸXK\œ›ÜŠKSÑ
‘T”—ÒS•SQÔPÒÐQÑWÐÓÓ‘’QÈ‹
KŠOO˜[˜[YXÚØYÙHÛÛ™šYÈ	Ù_IÝØÚ[H[\Ü[™È	ÝXˆˆŸIÜØˆ	ÜŸXˆˆŸX\œ›ÜŠKÙOSÑ
‘T”—ÔPÒÐQÑWÔUÓ“ÕÑVÔ•Q‹
K]›ÚY
OOOOH‹ˆØ›È™^ÜÈˆXZ[ˆYš[™Y[ˆ	Ù_\XÚØYÙKšœÛÛ‰ÜØ[\ÜYœ›ÛH	ÜŸXˆˆŸX˜XÚØYÙHÝXœ]	ÉÝIÈ\È›ÝYš[™YžH™^ÜÈˆ[ˆ	Ù_\XÚØYÙKšœÛÛ‰ÜØ[\ÜYœ›ÛH	ÜŸXˆˆŸX\œ›ÜŠNÝ˜\ˆÑRYJ\›ŠNÙ[˜Ý[ÛˆÙJK
^Û]SØš™XÝ˜Ü™X]J[
NÙ›ÜŠ]ÏLÜÏ›[™ÝÜÊÊÊ^Û]O]Ü×NÜ[JKJI‰Š–ØWOYVØWJ_\™]\›ˆŸ]˜\ˆ‘[™]È]ÙNÙ[˜Ý[ÛˆZ
K‹Ê^Û]OZ‘‹™Ù]
JNÚYŠHOO]›ÚY
\™]\›ˆNÛ]\ÊJNÚYŠOO]›ÚY
^Û]^ÜœÛÛ”]™K^\ÝÎˆLKXZ[Ž›ÚY˜[YN›ÚY\Nˆ››Û™H‹^ÜÎ›ÚY[\ÜÎ›ÚYNÜ™]\›ˆ‘‹œÙ]
K
K[]ÎÝž^ØÏUÝÙJŠ_XØ]Ú

^Ý›ÝÈ™]È
K
Ø‰ÝHˆœ›ÛHˆˆŠJÊÑ‹™š[UT“Ô]
JŸ
K›Y\ÜØYÙJ_[]Ú[\ÜÎ™‹XZ[Žœ˜[YNš\N‘_O^ÙJËÈš[\ÜÈ‹›XZ[ˆ‹›˜[YH‹\H—JKÏ\[JË™^ÜÈŠOØË™^ÜÎ›ÚYÊ\[ÙˆˆOH›Øš™XÝŸOO[[
I‰Š]›ÚY
K\[ÙˆOHœÝš[™È‰‰Š]›ÚY
K\[ÙˆOHœÝš[™È‰‰Š]›ÚY
KHOOH›[Ù[H‰‰‘HOOH˜ÛÛ[[ÛšœÈ‰‰ŠOH››Û™HŠNÛ]Ï^ÜœÛÛ”]™K^\ÝÎˆLXZ[Žœ˜[YNš\N‘K^ÜÎË[\ÜÎ™ŸNÜ™]\›ˆ‘‹œÙ]
KÊKßY[˜Ý[ÛˆÙJK
^Û][™]ÈT“
‹‹ÜXÚØYÙKšœÛÛˆ‹JNÙ›ÜŠÎÊ^Û]\‹œ]˜[YNÚYŠÊ‹››ÙWÛ[Ù[\ËÜXÚØYÙKšœÛÛˆŠJXœ™XZÎÛ]Ï[Z

Ñ‹™š[UT“Ô]
JŠKK›ÚY
NÚYŠË™^\ÝÊ\™]\›ˆÎÛ]\ŽÚYŠ[™]ÈT“
‹‹‹ÜXÚØYÙKšœÛÛˆ‹ŠK‹œ]˜[YOOOY‹œ]˜[YJXœ™XZß[]ÏJÑ‹™š[UT“Ô]
JŠKO^ÜœÛÛ”]œË^\ÝÎˆLKXZ[Ž›ÚY˜[YN›ÚY\Nˆ››Û™H‹^ÜÎ›ÚY[\ÜÎ›ÚYNÜ™]\›ˆ‘‹œÙ]
ËJK_Y[˜Ý[ÛˆZ
KŠ^Ý›ÝÈ™]È]ÙJK	‰ŠØK™š[UT“Ô]
J™]ÈT“
‹ˆ‹
JK
ØK™š[UT“Ô]
JŠJ_Y[˜Ý[ÛˆZ
K‹Ê^Û]OX™\]Y\Ý\È›ÝH˜[YÝXœ]›ÜˆH‰ÜÈš[\ÜÈŽˆ™^ÜÈŸHˆ™\ÛÛ][ÛˆÙˆ	ÊØK™š[UT“Ô]
J
_XÝ›ÝÈ™]ÈÊKKÉ‰ŠØK™š[UT“Ô]
JÊJ_Y[˜Ý[ÛˆQ
K‹ËJ^Ý›ÝÈ\[ÙˆOH›Øš™XÝ‰‰OO[[ÝU
[ˆŠNX	ÝX™]ÈÝÙJ
ØK™š[UT“Ô]
J™]ÈT“
‹ˆ‹ŠJKKËI‰ŠØK™š[UT“Ô]
JJJ_]˜\ˆÙOKÊŸÊJ
Ÿ	L™JJŸ	L™JOß
Ÿ	M™_	MJJß	M™Ÿ	MŠJ	M	M
J_	M_	MJJß	MYŠJ_	M™	M
Jß	M™Ÿ	MŠJ	M	M
J_	MÍ_	MMJJ	M˜ß	MÊJ_	M_	MJJß	MÌß	MLÊJJß	
KÚK	ÙOK×
‹ÙÎÙ[˜Ý[ÛˆZ
K‹ËK‹ËŠ^ÚYŠOOHˆ‰‰ˆ[‰‰™VÙK›[™ÝLWHOOH‹È‰‰“Q
‹KËËJKYÐJK‹‹ÈŠJ^ÚYŠÉ‰ˆYÐJK‹‹‹ÈŠI‰ˆYÐJK‹ÈŠJ^Û]ÏHLNÝž^Û™]ÈT“
JKÏHLXØ]ÚßZYŠPÊ\™]\›ˆÔÕÊ	ÙKK

OO
N™JÝSQ
‹KËËJ_]•ÊÙK™ÊKŠJHOO[[	‰“Q
‹KËËJNÛ][™]ÈT“
KÊK\œ]˜[YKO[™]ÈT“
‹ˆ‹ÊKœ]˜[YNÚYŠÐJJ_Q
‹KËËJKOOHˆŠ\™]\›ˆÚYŠ•ÊÙK
HOO[[
^Û]Ï[ÑÝÙJ‹Šˆ‹

OO
NœŠÝÑZ
ËËËJ_\™]\›ˆÛ™]ÈT“
ÕÊ	ÙKš™Y‹

OO
JN›™]ÈT“

_Y[˜Ý[ÛˆÚ
J^Û]JÙNÜ™]\›˜	ÝXOOYOÈLNL	‰ŽMMÌŽM_Y[˜Ý[ÛˆÊK‹ËK‹ËŠ^ÚYŠ\[ÙˆOHœÝš[™ÈŠ\™]\›ˆZ
‹ËKK‹ËŠNÚYŠ•Ê
J^ÚYŠ›[™ÝOOL
\™]\›ˆ[Û]Ù›ÜŠ]LÚ›[™ÝÚ
ÊÊ^Û]O]ÚKÎÝž^ÐÏYÊKK‹ËK‹ËŠ_XØ]Ú
Ê^ÚYŠTËË˜ÛÙOOOH‘T”—ÒS•SQÔPÒÐQÑWÕT‘ÑUŠXÛÛ[YNÝ›ÝÈßZYŠÈOO]›ÚY
^ÚYŠÏOO[[
^Ü[[ØÛÛ[Y_\™]\›ˆß_ZYŠO[[
\™]\›ˆÝ›ÝÈY[ÙHYŠ\[ÙˆOH›Øš™XÝ‰‰OO[[
^Û]Q‘

NÙ›ÜŠ]LÚ›[™ÝÚ
ÊÊ^Û]O\ÚNÚYŠÚ
JJ]›ÝÈ™]È

ØK™š[UT“Ô]
JJKK	È™^ÜÈˆØ[››ÝÛÛZ[ˆ[Y\šXÈ›Ü\HÙ^\Ë‰Ê_Y›ÜŠ]LÚ›[™ÝÚ
ÊÊ^Û]O\ÚNÚYŠOOOH™Y˜][Ÿ‹š\ÊJJ^Û]Ï]ÑWKÏYÊKË‹ËK‹ËŠNÚYŠÏOO]›ÚY
XÛÛ[YNÜ™]\›ˆß_\™]\›ŸY[ÙHYŠOO[[
\™]\›ˆ[ÓQ
ËKËJ_Y[˜Ý[ÛˆYJK
^Û]S‘
KŠˆŠKÏS‘
ŠˆŠKO\OOKLOÙK›[™ÝœŠÌK\ÏOOKLOÝ›[™ÝœÊÌNÜ™]\›ˆO›ËLN›˜_OOKLOÌNœÏOOKL_K›[™Ý›[™ÝËLN›[™Ý™K›[™ÝÌNŒY[˜Ý[ÛˆÚ
KŠ^ÚYŠ\[ÙˆOOHœÝš[™ÈŸ•ÊJJ\™]\›ˆLÚYŠ\[ÙˆHOH›Øš™XÝŸOOO[[
\™]\›ˆLNÛ]ÏQ‘
JKOHLKLÙ›ÜŠ]ÏLØÏË›[™ÝØÊÊÊ^Û]\ÖØ×KYOOHˆŸ–ÌHOOH‹ˆŽÚYŠŠÊÏOOL
XO\Ù[ÙHYŠHOO\
]›ÝÈ™]È

ØK™š[UT“Ô]
J
K‹™^ÜÈˆØ[››ÝÛÛZ[ˆÛÛYHÙ^\ÈÝ\[™ÈÚ]	Ë‰È[™ÛÛYH›ÝˆH^ÜÈØš™XÝ]\ÝZ]\ˆ™H[ˆØš™XÝÙˆXÚØYÙHÝXœ]Ù^\ÈÜˆ[ˆØš™XÝÙˆXZ[ˆ[žHÛÛ™][Ûˆ˜[YHÙ^\ÈÛ›K˜
_\™]\›ˆ_Y[˜Ý[ÛˆÊKŠ^Ý›ÝÈ™]ÈÙJ
ØK™š[UT“Ô]
J™]ÈT“
‹ˆ‹
JKK‰‰ŠØK™š[UT“Ô]
JŠJ_]˜\ˆLYO[™]ÈÙ]Ù[˜Ý[Ûˆš
KŠ^Û]ÏJØK™š[UT“Ô]
J
NÙLYKš\ÊÊÈŸŠÙJ_
LYK˜Y
ÊÈŸŠÙJK›ØÙ\ÜË™[Z]Ø\›š[™Ê\ÙHÙˆ\™XØ]Y˜Z[[™ÈÛ\Ú]\›ˆX\[™È‰Ù_Hˆ[ˆH™^ÜÈˆšY[[Ù[H™\ÛÛ][ÛˆÙˆHXÚØYÙH]	ÜßIÜØ[\ÜYœ›ÛH	ÊØK™š[UT“Ô]
JŠ_XˆˆŸKˆX\[™ÈÜXÚYšY\œÈ[™[™È[ˆ‹Èˆ\È›ÈÛ™Ù\ˆÝ\ÜY˜‘\™XØ][Û•Ø\›š[™È‹‘TMMHŠJ_Y[˜Ý[ÛˆŒYJÜXÚØYÙR”ÓÓ•\›™KXÚØYÙTÝXœ]^ÜÎœ‹˜\ÙNœËÛÛ™][ÛœÎ˜_J^ÚYŠÚ
‹KÊI‰Š^È‹ˆŽœŸJK[J‹
I‰ˆQÊŠˆŠI‰ˆ]Ê‹ÈŠJ^Û]\–ÝKYÊKˆ‹ËLKLKJNÜ™]\›ˆO[[	‰žÊKÊK[]Hˆ‹ËQ‘
ŠNÙ›ÜŠ]LÜ‹›[™ÝÜ
ÊÊ^Û]Y–ÜKOS‘
ŠˆŠNÚYŠHOOKLI‰™ÐJ™ÊJJJ^ÝÊ‹ÈŠI‰š
KÊNÛ]Ï\™ÊJÌJNÝ›[™ÝZ›[™Ý	‰ÊÊI‰YJ‹
OOOLI‰˜•ÊŠˆŠOOOQI‰ŠZÏ\™ÊK›[™ÝPË›[™Ý
J__ZYŠŠ^Û]\–Û—KYÊKË‹ËLLKJNÜ™]\›ˆO[[	‰žÊKÊK^ÊKÊ_Y[˜Ý[ÛˆŒYJÛ˜[YN™K˜\ÙNÛÛ™][ÛœÎœ‹™XYš[TÞ[˜Ñ›ŽœßJ^ÚYŠOOOHˆÈŸÐJKˆËÈŠ_ÊK‹ÈŠJ^Û]ÏHš\È›ÝH˜[Y[\›˜[[\ÜÈÜXÚYšY\ˆ˜[YHŽÝ›ÝÈ™]ÈÊKË
ØK™š[UT“Ô]
J
J_[]KVÙJÊNÚYŠ‹™^\ÝÊ^ØOJØKœ]Ñš[UT“
J‹œœÛÛ”]
NÛ]Ï[‹š[\ÜÎÚYŠÊZYŠ[JËJI‰ˆQÊKŠˆŠJ^Û]YÊKÖÙWKˆ‹KLKLŠNÚYŠˆO[[
\™]\›ˆŸY[Ù^Û]Hˆ‹Q‘
ÊNÙ›ÜŠ]OLÑO›[™ÝÑJÊÊ^Û]ÏZÑWKÏS‘
ËŠˆŠNÚYŠÈOOKLI‰™ÐJK™ÊËÊJJ^Û]\™ÊËÊÌJNÙK›[™ÝPË›[™Ý	‰ÊK
I‰YJ‹ÊOOOLI‰˜•ÊËŠˆŠOOOTÉ‰ŠPË\™ÊKËK›[™Ý^›[™Ý
J__ZYŠŠ^Û]OXÖÙ—KÏYÊKK‹LLŠNÚYŠÈO[[
\™]\›ˆß__^Z
KK
_Q

NÝ˜\ˆš[™]ÈÙ]
È•RSS—Ó“ÑWÔ‘TÓÓUSÓ—ÑRSQ‹“RTÔÒS‘×ÑTS‘SÖH‹“RTÔÒS‘×ÔQT—ÑTS‘SÖH‹”UPSQ’QQÔUÔ‘TÓÓUSÓ—ÑRSQ‹•S‘PÓT‘QÑTS‘SÖH—JNÙ[˜Ý[Ûˆ\ÊK^ßKÊ^ÜÏÏÏ]šš\ÊJOÈ“SÑSWÓ“ÕÑ“ÕS‘Ž™NÛ]O^ØÛÛ™šYÝ\˜X›NˆLÜš]X›NˆL[[Y\˜X›NˆL_NÜ™]\›ˆØš™XÝ™Yš[™T›Ü\Y\Ê™]È\œ›ÜŠ
KØÛÙNžË‹‹˜K˜[YNœßKœÛÙNžË‹‹˜K˜[YN™_K]NžË‹‹˜K˜[YNœŸ_J_Y[˜Ý[ÛˆYŠJ^Ü™]\›ˆ™K››Ü›X[^™J™K™œ›ÛTÜX›T]
JJ_]˜\ˆLYOY]
ÌYJ
JNÙ[˜Ý[ÛˆYJJ^Ü™]\›ˆÚ

KUÖÙW_]˜\ˆUÎÙ[˜Ý[ÛˆÚ

^ÔUß
UÏ^È‹KXÛÛ™][ÛœÈŽ–×K‹‹›ÌYJ

JK‹‹›ÌYJ›ØÙ\ÜË™^XÐ\™ÝŠ_J_Y[˜Ý[ÛˆÌYJJ^Ü™]\›ŠLYK™Y˜][
JÈ‹KXÛÛ™][ÛœÈŽ–ÔÝš[™×K‹PÈŽˆ‹KXÛÛ™][ÛœÈŸKØ\™ÝŽ™K\›Z\ÜÚ]™NˆLJ_Y[˜Ý[Ûˆ

^Û]OV×KXš
›ØÙ\ÜË™[‹““ÑWÓÔSÓ”ßˆ‹JNÜ™]\›ˆK›[™ÝY[˜Ý[Ûˆš
K
^Û]V×KÏHLKOHLÙ›ÜŠ]LÛK›[™ÝÊÊÛŠ^Û]ÏYVÛ—NÚYŠÏOOH—‰‰œÊ^ÚYŠŠÌOOOYK›[™Ý
\™]\›ˆœ\Ú
[˜[Y˜[YH›Üˆ“ÑWÓÔSÓ”È
[˜[Y\ØØ\JB˜
KŽØÏYVÊÊÛ—_Y[ÙHYŠÏOOHˆ‰‰ˆ\Ê^ØOHLØÛÛ[Y_Y[ÙHYŠÏOOIÈ‰Ê^ÜÏH\ÎØÛÛ[Y_XOÊ‹œ\Ú
ÊKOHLJNœ–Ü‹›[™ÝLWJÏXß\™]\›ˆÉ‰œ\Ú
[˜[Y˜[YH›Üˆ“ÑWÓÔSÓ”È
[\›Z[˜]YÝš[™ÊB˜
KŸQ

NÝ˜\–Ð›šO\›ØÙ\ÜË™\œÚ[ÛœË››ÙKœÜ]
‹ˆŠK›X\
OOœ\œÙR[
KL
JKÌYOP›ŒN_›OOLNI‰œšLŸ›OOLN	‰œšLLËÒP›OOLŒ	‰œšŸ›OOLNI‰œšLËRP›ŒN_›OOLNI‰œšM‹ÒP›LŒ_›OOLŒ	‰œšLL›OOLN	‰œšLNK’P›LŒ_›OOLŒ	‰œšLL›OOLN	‰œšLŒRP›LŒŽÙ[˜Ý[ÛˆLYJJ^ÚYŠ›ØÙ\ÜË™[‹•ÐUÒÔ‘TÔ•ÑTS‘SÒQTÉ‰œ›ØÙ\ÜËœÙ[™
ZYŠOYK›X\
O™™K™œ›ÛTÜX›T]
[Ëœ™\ÛÛ™Uš\X[
™KÔÜX›T]

JJJKÌYJ\›ØÙ\ÜËœÙ[™
ÈØ]Úœ™\]Z\™HŽ™_JNÙ[ÙH›ÜŠ]ÙˆJ\›ØÙ\ÜËœÙ[™
ÈØ]Úœ™\]Z\™HŽJ_Y[˜Ý[ÛˆÊK
^Û]S[X™\Š›ØÙ\ÜË™[‹””ÐSÐVT×ÕÐT“—ÓÓ—ÑSPÒÊOŒÏS[X™\Š›ØÙ\ÜË™[‹””ÑP•Q×ÓU‘S
KOK×ŠÈVØK^KV—N–××_žÌŸJÎ—ß	
JJ
Î››ÙNŠOÊÎ×‹×J×ÊOÖ×‹×JÊWÊŠŠŸ
IËK×ŠßžÌKŸJß	
JKËÏK×ÉËK×—žÌŸWËË^Û˜[YN›[™Y™\™[˜ÙN›[KV×KO[™]ÈÙ]ÚYŠK™[˜X›UÜ]™[˜[˜XÚÏOOHL	‰šœ\Ú

K˜ÛÛ\]Xš[]S[ÙHOOHLJY›ÜŠ]™HÙ–Èœ™XXÝ\ØÜš\È‹™Ø]ØžH—J^Û]ÙOYKœXÚØYÙT™YÚ\ÝžK™Ù]
™JNÚYŠÙJY›ÜŠ]™HÙˆÙKšÙ^\Ê
J^ÚYŠ™OOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™Y™\™[˜ÙHÚÝ[‰Ý™H[ŠNÚœ\Ú
Û˜[YN“™K™Y™\™[˜ÙN˜™_J__[]ÚYÛ›Ü™T]\›ŽËXÚØYÙT™YÚ\ÝžN”ËXÚØYÙSØØ]ÜœÐžSØØ][ÛœÎžOYNÙ[˜Ý[ÛˆJ™KÙJ^Ü™]\›žÙ›Ž“™K\™ÜÎšÙK\œ›ÜŽ›[™\Ý[›[_Y[˜Ý[Ûˆ
™J^Û]ÙO\›ØÙ\ÜËœÝ\œËš\ÐÛÛÜœÏËŠ
OÏÜ›ØÙ\ÜËœÝÝ]š\ÕK™OJÝYJOO˜P–ÉØÝ[IÓY_WP–ÌX™OS™K™\œ›ÜŽØÛÛœÛÛK™\œ›ÜŠ™OØ™JŒÌNÌH‹LÌMˆ	Ó™K™\œ›ÜË›Y\ÜØYÙKœ™\XÙJ×‹Š‹ÜËˆŠ_X
N˜™JŒÌÎÌH‹—LŒÐÈ™\ÛÛ][ÛˆŠJK™K˜\™ÜË›[™ÝŒ	‰˜ÛÛœÛÛK™\œ›ÜŠ
NÙ›ÜŠ]ÝÙˆ™K˜\™ÜÊXÛÛœÛÛK™\œ›ÜŠ	Ø™JŒÍÎÌH‹’[ˆLŒNLŠ_H	Ê•Ëš[œÜXÝ
JÝØÛÛÜœÎšÙKÛÛ\XÝˆLJ_X
NÓ™Kœ™\Ý[	‰ŠÛÛœÛÛK™\œ›ÜŠ
KÛÛœÛÛK™\œ›ÜŠ	Ø™JŒÍÎÌH‹“Ý]LŒNLˆŠ_H	Ê•Ëš[œÜXÝ
J™Kœ™\Ý[ØÛÛÜœÎšÙKÛÛ\XÝˆLJ_X
JNÛ]™O[™]È\œ›ÜŠ
KœÝXÚË›X]Ú
ÊÏWˆ
ÊX]Š‹ÙÛJOËœÛXÙJŠOÏÖ×NÚYŠ™K›[™ÝŒ
^ØÛÛœÛÛK™\œ›ÜŠ
NÙ›ÜŠ]ÝÙˆ™JXÛÛœÛÛK™\œ›ÜŠ	Ø™JŒÎÍNÌ‹Ý
_X
_XÛÛœÛÛK™\œ›ÜŠ
_Y[˜Ý[ÛˆÊ™KÙJ^ÚYŠ˜[ÝÑXYÏOOHLJ\™]\›ˆÙNÚYŠ[X™\‹š\Ñš[š]JÊJ^ÚYŠÏLŠ\™]\›Š‹‹˜™JOOžÛ]™ORJ™K™JNÝž^Ü™]\›ˆ™Kœ™\Ý[ZÙJ‹‹˜™J_XØ]Ú
™J^Ý›ÝÈ™K™\œ›ÜT™_Yš[˜[^Õ
™J__NÚYŠÏLJ\™]\›Š‹‹˜™JOOžÝž^Ü™]\›ˆÙJ‹‹˜™J_XØ]Ú
™J^Û]™ORJ™K™JNÝ›ÝÈ™K™\œ›ÜZ™K
™JK™___\™]\›ˆÙ_Y[˜Ý[ÛˆJ™J^Û]ÙOYÊ™JNÚYŠZÙJ]›ÝÈ\Ê’S•T“S‹ÛÝ[‰Ýš[™HX]Ú[™È[žH[ˆH\[™[˜ÞH™YH›ÜˆHÜXÚYšYY\™[
\È\È›Ø˜X›H[ˆ[\›˜[\œ›ÜŠHŠNÜ™]\›ˆÙ_Y[˜Ý[ÛˆJ™J^ÚYŠ™K›˜[YOOO[[
\™]\›ˆLÙ›ÜŠ]ÙHÙˆK™\[™[˜ÞU™YT›ÛÝÊZYŠÙK›˜[YOOOS™K›˜[YI‰šÙKœ™Y™\™[˜ÙOOOS™Kœ™Y™\™[˜ÙJ\™]\›ˆLÜ™]\›ˆL_[]O[™]ÈÙ]
È››ÙH‹œ™\]Z\™H‹‹‹›YJ‹KXÛÛ™][ÛœÈŠWJNÙ[˜Ý[ÛˆYJ™KÙO]K™J^Û]™O[YJËš›Ú[Š™Kš[\›˜[šœÈŠKÜ™\ÛÛ™RYÛ›Ü™YˆL[˜ÛYQ\ØØ\™œ›ÛSÛÚÝ\ˆLJNÚYŠ™OOO[[
]›ÝÈ\Ê’S•T“S‹HØØ]Üˆ]ÝÛœÈH‰Ó™_Hˆ]Ø[‰Ý™H›Ý[™[œÚYHH\[™[˜ÞH™YH
\È\È›Ø˜X›H[ˆ[\›˜[\œ›ÜŠX
NÛ]ÜXÚØYÙSØØ][ÛŽ”™_OUJ™JKÝRËš›Ú[Š™K\‹›X[šY™\Ý
NÚYŠ]™˜ZÙQœË™^\ÝÔÞ[˜ÊÝ
J\™]\›ˆ[Û]YOR”ÓÓ‹œ\œÙJ™˜ZÙQœËœ™XYš[TÞ[˜ÊÝ]ŽŠJNÚYŠYK™^ÜÏO[[
\™]\›ˆ[Û]RË˜ÛÛZ[œÊ™K™JNÚYŠOO[[
]›ÝÈ\Ê’S•T“S‹[œ]X[YšYY]Ù\Û‰ÝÛÛZ[ˆHXÚØYÙSØØ][Ûˆ
\È\È›Ø˜X›H[ˆ[\›˜[\œ›ÜŠHŠNÔOOH‹ˆ‰‰ˆY‹\Ý

I‰ŠX‹ÉÔX
NÝž^Û]Ï\ŒYJÜXÚØYÙR”ÓÓ•\›ŠÛKœ]Ñš[UT“
J™K™œ›ÛTÜX›T]
Ý
JKXÚØYÙTÝXœ]”^ÜÎ“YK™^ÜË˜\ÙN˜™OÊÛKœ]Ñš[UT“
J™K™œ›ÛTÜX›T]
™JJN›[ÛÛ™][ÛœÎšÙ_JNÜ™]\›ˆ™KÔÜX›T]

ÛK™š[UT“Ô]
JÊJ_XØ]Ú
Ê^Ý›ÝÈ\Ê‘VÔ•×Ô‘TÓÓUSÓ—ÑRSQ‹Ë›Y\ÜØYÙKÝ[œ]X[YšYY]YŠ™JKØØ]ÜŽš™KÙÒœÛÛŽ“YKÝXœ]YŠ
KÛÛ™][ÛœÎšÙ_KË˜ÛÙJ__Y[˜Ý[ÛˆYJ™KÙKÙ^[œÚ[ÛœÎ˜™_J^Û]™NÝž^ÚÙKœ\Ú
™JK™O]™˜ZÙQœËœÝ]Þ[˜Ê™J_XØ]ÚßZYŠ™I‰ˆZ™Kš\Ñ\™XÝÜžJ
J\™]\›ˆ™˜ZÙQœËœ™X[]Þ[˜Ê™JNÚYŠ™I‰š™Kš\Ñ\™XÝÜžJ
J^Û]™NÝž^Ô™OR”ÓÓ‹œ\œÙJ™˜ZÙQœËœ™XYš[TÞ[˜ÊËš›Ú[Š™K\‹›X[šY™\Ý
K]ŽŠJ_XØ]Úß[]ÝÚYŠ™I‰”™K›XZ[‰‰ŠÝRËœ™\ÛÛ™J™K™K›XZ[ŠJKÝ	‰˜ÝOOS™J^Û]YO]YJÝÙKÙ^[œÚ[ÛœÎ˜™_JNÚYŠYHOO[[
\™]\›ˆY__Y›ÜŠ]™OLÝX™K›[™ÝÔ™OÝÔ™JÊÊ^Û]YOX	Ó™_IØ™VÔ™W_XÚYŠÙKœ\Ú
YJK™˜ZÙQœË™^\ÝÔÞ[˜ÊYJJ\™]\›ˆY_ZYŠ™I‰š™Kš\Ñ\™XÝÜžJ
JY›ÜŠ]™OLÝX™K›[™ÝÔ™OÝÔ™JÊÊ^Û]YORË™›Ü›X]
Ù\Ž“™K˜[YNˆš[™^‹^˜™VÔ™W_JNÚYŠÙKœ\Ú
YJK™˜ZÙQœË™^\ÝÔÞ[˜ÊYJJ\™]\›ˆY_\™]\›ˆ[Y[˜Ý[ÛˆYJ™J^Û]ÙO[™]Èš“[Ù[J™K[
NÜ™]\›ˆÙK™š[[˜[YOS™KÙKœ]Ï[š“[Ù[K—Û›ÙS[Ù[T]Ê™JKÙ_Y[˜Ý[ÛˆJ™KÙJ^Ü™]\›ˆÙK™[™ÕÚ]
‹ÈŠI‰ŠÙORËš›Ú[ŠÙKš[\›˜[šœÈŠJKš“[Ù[K—Ü™\ÛÛ™Qš[[˜[YJ™K™œ›ÛTÜX›T]
™JKYJ™K™œ›ÛTÜX›T]
ÙJJKLKÜYÛœ^NˆL_J_Y[˜Ý[ÛˆYJ™J^ÚYŠÏOO[[
\™]\›ˆLNÛ]ÙORË˜ÛÛZ[œÊK˜˜\ÙT]™JNÜ™]\›ˆÙOOO[[ÈLNˆHPË\Ý
ÙKœ™\XÙJ×ÉËˆŠJ_[]ÙO^ÜÝŒË™\ÛÛ™Uš\X[ŒKÙ][ØØ]ÜœÎŒ_KYO\Ù[˜Ý[ÛˆÊÛ˜[YN“™K™Y™\™[˜ÙNšÙ_J^Û]™OTË™Ù]
™JNÚYŠX™J\™]\›ˆ[Û]™OX™K™Ù]
ÙJNÜ™]\›ˆ™_[Y[˜Ý[ÛˆÙJÛ˜[YN“™K™Y™\™[˜ÙNšÙ_J^Û]™OV×NÙ›ÜŠ]Ú™K™W[ÙˆÊZYŠ™HOO[[
Y›ÜŠ]ØÝYW[Ùˆ™JXÝOO[[YKœXÚØYÙQ\[™[˜ÚY\Ë™Ù]
™JHOOZÙ_™OOOS™I‰˜ÝOOZÙ_™Kœ\Ú
Û˜[YNš™K™Y™\™[˜ÙN˜ÝJNÜ™]\›ˆ™_Y[˜Ý[Ûˆ™J™KÙJ^Û]™O[™]ÈX\™O[™]ÈÙ]™OSYOOžÛ]R”ÓÓ‹œÝš[™ÚYžJYK›˜[YJNÚYŠ™Kš\Ê
J\™]\›ŽÚ™K˜Y

NÛ]ÏTÙJYJNÙ›ÜŠ]ˆÙˆÊZYŠJŠKœXÚØYÙTY\œËš\Ê™JJT™JŠNÙ[Ù^Û]X™K™Ù]
‹›˜[YJNÝ\[ÙˆˆH‰‰˜™KœÙ]
‹›˜[YK[™]ÈÙ]
K‹˜Y
‹œ™Y™\™[˜ÙJ__NÔ™JÙJNÛ]ÝV×NÙ›ÜŠ]YHÙ–Ë‹‹˜™KšÙ^\Ê
WKœÛÜ

JY›ÜŠ]Ù–Ë‹‹˜™K™Ù]
YJWKœÛÜ

JXÝœ\Ú
Û˜[YN“YK™Y™\™[˜ÙN”JNÜ™]\›ˆÝY[˜Ý[ÛˆYJ™KÜ™\ÛÛ™RYÛ›Ü™YšÙOHLK[˜ÛYQ\ØØ\™œ›ÛSÛÚÝ\˜™OHL_O^ßJ^ÚYŠYJ™JI‰ˆZÙJ\™]\›ˆ[Û]™ORËœ™[]]™JK˜˜\ÙT]™JNÚ™K›X]Ú
Š_
™OX‹ÉÚ™_X
K™K™[™ÕÚ]
‹ÈŠ_
™OX	Ú™_KØ
NÙÞÛ]™O^™Ù]
™JNÚYŠ\[Ùˆ™OˆHŸ™K™\ØØ\™œ›ÛSÛÚÝ\	‰ˆX™J^Ú™OZ™KœÝXœÝš[™Ê™K›\Ý[™^ÙŠ‹È‹™K›[™ÝLŠJÌJNØÛÛ[Y_\™]\›ˆ™K›ØØ]ÜŸ]Ú[J™HOOHˆŠNÜ™]\›ˆ[Y[˜Ý[ÛˆÙJ™J^Ýž^Ü™]\›ˆ™˜ZÙQœËœ™XYš[TÞ[˜Ê™KÔÜX›T]
™JK]ŽŠ_XØ]Ú
ÙJ^ÚYŠÙK˜ÛÙOOOH‘S“ÑS•Š\™]\›ŽÝ›ÝÈÙ__Y[˜Ý[Ûˆ
™KÙKØÛÛœÚY\Z[[œÎ˜™OHLO^ßJ^ÚYŠ™KœÝ\ÕÚ]
ˆÈŠJ]›ÝÈ™]È\œ›ÜŠœ™\ÛÛ™UÕ[œ]X[YšYYØ[ˆ›Ý[™Hš]˜]H[\ÜX\[™ÜÈŠNÚYŠ™OOOHœœ\HŠ\™]\›ˆ™KÔÜX›T]
œœ\T™\ÛÛ][ÛŠNÚYŠ™I‰Ššš\ÐZ[[ŠJ™JJ\™]\›ˆ[Û]™O]YŠ™JK™OZÙI‰YŠÙJNÚYŠÙI‰YJÙJI‰ŠRËš\ÐXœÛÛ]J™J_YJ™JOOO[[
J^Û]YJ™KÙJNÚYŠOOHLJ]›ÝÈ\Ê•RSS—Ó“ÑWÔ‘TÓÓUSÓ—ÑRSQ‹HZ[[ˆ›ÙH™\ÛÛ][Ûˆ[ÛÜš]HØ\È[˜X›HÈ™\ÛÛ™HH™\]Y\ÝY[Ù[H
]Y‰ÝÛÈ›ÝYÚHœ™\ÛÛ™\ˆ™XØ]\ÙHH\ÜÝY\ˆØ\È^XÚ][HYÛ›Ü™YžHH™YÙ^
B‚”™\]Z\™H™\]Y\Ýˆ‰Ú™_H‚”™\]Z\™YžNˆ	Ô™_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™_JNÜ™]\›ˆ™KÔÜX›T]

_[]ÝYOS™K›X]Ú
JNÚYŠYJ^ÚYŠZÙJ]›ÝÈ\ÊTWÑT”“Ôˆ‹•H™\ÛÛ™UÕ[œ]X[YšYY[˜Ý[Ûˆ]\Ý™HØ[YÚ]H˜[Y\ÜÝY\ˆÚ[ˆH]\Û‰ÝHZ[[ˆ›ÜˆXœÛÛ]H‹Ü™\]Y\Ýš™K\ÜÝY\Ž”™_JNÛ]Ë×OSYK[YJÙJNÚYŠXŠ^Û]™OYJ™KÙJNÚYŠ™OOOHLJ]›ÝÈ\Ê•RSS—Ó“ÑWÔ‘TÓÓUSÓ—ÑRSQ‹HZ[[ˆ›ÙH™\ÛÛ][Ûˆ[ÛÜš]HØ\È[˜X›HÈ™\ÛÛ™HH™\]Y\ÝY[Ù[H
]Y‰ÝÛÈ›ÝYÚHœ™\ÛÛ™\ˆ™XØ]\ÙHH\ÜÝY\ˆÙ\Û‰ÝÙY[HÈ™H\ÙˆHX\›‹[X[˜YÙY\[™[˜ÞH™YJK‚‚”™\]Z\™H]ˆ‰Ú™_H‚”™\]Z\™YžNˆ	Ô™_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™_JNÜ™]\›ˆ™KÔÜX›T]
™J_[]UJŠKœXÚØYÙQ\[™[˜ÚY\Ë™Ù]

K[[ÚYŠO[[	‰˜‹›˜[YHOO[[
^Û]™OYK™˜[˜XÚÑ^Û\Ú[Û“\Ý™Ù]
‹›˜[YJNÚYŠQ™_Q™Kš\Ê‹œ™Y™\™[˜ÙJJ^Ù›ÜŠ]ÝL]Z›[™ÝÐÝ]ÊÊÐÝ
^Û]UJÐÝJKœXÚØYÙQ\[™[˜ÚY\Ë™Ù]

NÚYŠO[[
^ÜÞT‘TØœ™XZß_ZYŠK™[˜X›UÜ]™[˜[˜XÚÉ‰‘O[[	‰žOO[[
^Û]ÝYK™˜[˜XÚÔÛÛ™Ù]

NÐÝO[[	‰ŠPÝ
___[][[ÚYŠOO[[
ZYŠJŠJV^\Ê“RTÔÒS‘×ÔQT—ÑTS‘SÖH‹[Ý\ˆ\XØ][ÛˆšYYÈXØÙ\ÜÈ	ÔH
HY\ˆ\[™[˜ÞJNÈ\È\Û‰Ý[ÝÙY\È\™H\È›È[˜Ù\ÝÜˆÈØ]\ÙžHH™\]Z\™[Y[ˆ\ÙHH]‘\[™[˜ÞHYˆ™YYY‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ô™_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\[™[˜ÞS˜[YN”JNÙ[Ù^Û]™OP™JŠNÑ™K™]™\žJ]O–J]
JOÖ^\Ê“RTÔÒS‘×ÔQT—ÑTS‘SÖH‹	Ø‹›˜[Y_HšYYÈXØÙ\ÜÈ	ÔH
HY\ˆ\[™[˜ÞJH]]\Û‰Ý›ÝšYYžH[Ý\ˆ\XØ][ÛŽÈ\ÈXZÙ\ÈH™\]Z\™HØ[[XšYÝ[Ý\È[™[œÛÝ[™‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ø‹›˜[Y_P	Ø‹œ™Y™\™[˜Ù_H
šXH	Ô™_JB‰Ñ™K›X\
]O˜[˜Ù\ÝÜˆœ™XZÚ[™ÈHÚZ[Žˆ	Ý]›˜[Y_P	Ý]œ™Y™\™[˜Ù_B˜
Kš›Ú[ŠˆŠ_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\ÜÝY\“ØØ]ÜŽ“Øš™XÝ˜\ÜÚYÛŠßKŠK\[™[˜ÞS˜[YN”œ›ÚÙ[[˜Ù\ÝÜœÎ‘™_JN–^\Ê“RTÔÒS‘×ÔQT—ÑTS‘SÖH‹	Ø‹›˜[Y_HšYYÈXØÙ\ÜÈ	ÔH
HY\ˆ\[™[˜ÞJH]]\Û‰Ý›ÝšYYžH]È[˜Ù\ÝÜœÎÈ\ÈXZÙ\ÈH™\]Z\™HØ[[XšYÝ[Ý\È[™[œÛÝ[™‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ø‹›˜[Y_P	Ø‹œ™Y™\™[˜Ù_H
šXH	Ô™_JB‚‰Ñ™K›X\
]O˜[˜Ù\ÝÜˆœ™XZÚ[™ÈHÚZ[Žˆ	Ý]›˜[Y_P	Ý]œ™Y™\™[˜Ù_B˜
Kš›Ú[ŠˆŠ_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\ÜÝY\“ØØ]ÜŽ“Øš™XÝ˜\ÜÚYÛŠßKŠK\[™[˜ÞS˜[YN”œ›ÚÙ[[˜Ù\ÝÜœÎ‘™_J_Y[ÙHOO]›ÚY	‰ŠX™I‰Ššš\ÐZ[[ŠJ™JOÖJŠOÖ^\Ê•S‘PÓT‘QÑTS‘SÖH‹[Ý\ˆ\XØ][ÛˆšYYÈXØÙ\ÜÈ	ÔKˆÚ[H\È[Ù[H\È\ÝX[H[\œ™]Y\ÈH›ÙHZ[[‹[Ý\ˆ™\ÛÛ™\ˆ\È[›š[™È[œÚYHH›Û‹S›ÙH™\ÛÛ][ÛˆÛÛ^Ú\™HÝXÚZ[[œÈ\™HYÛ›Ü™YˆÚ[˜ÙH	ÔH\Û‰ÝÝ\Ú\ÙHXÛ\™Y[ˆ[Ý\ˆ\[™[˜ÚY\Ë\ÈXZÙ\ÈH™\]Z\™HØ[[XšYÝ[Ý\È[™[œÛÝ[™‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ô™_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\[™[˜ÞS˜[YN”JN–^\Ê•S‘PÓT‘QÑTS‘SÖH‹	Ø‹›˜[Y_HšYYÈXØÙ\ÜÈ	ÔKˆÚ[H\È[Ù[H\È\ÝX[H[\œ™]Y\ÈH›ÙHZ[[‹[Ý\ˆ™\ÛÛ™\ˆ\È[›š[™È[œÚYHH›Û‹S›ÙH™\ÛÛ][ÛˆÛÛ^Ú\™HÝXÚZ[[œÈ\™HYÛ›Ü™YˆÚ[˜ÙH	ÔH\Û‰ÝÝ\Ú\ÙHXÛ\™Y[ˆ	Ø‹›˜[Y_IÜÈ\[™[˜ÚY\Ë\ÈXZÙ\ÈH™\]Z\™HØ[[XšYÝ[Ý\È[™[œÛÝ[™‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ô™_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\ÜÝY\“ØØ]ÜŽ“Øš™XÝ˜\ÜÚYÛŠßKŠK\[™[˜ÞS˜[YN”JN–JŠOÖ^\Ê•S‘PÓT‘QÑTS‘SÖH‹[Ý\ˆ\XØ][ÛˆšYYÈXØÙ\ÜÈ	ÔK]]\Û‰ÝXÛ\™Y[ˆ[Ý\ˆ\[™[˜ÚY\ÎÈ\ÈXZÙ\ÈH™\]Z\™HØ[[XšYÝ[Ý\È[™[œÛÝ[™‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ô™_B˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\[™[˜ÞS˜[YN”JN–^\Ê•S‘PÓT‘QÑTS‘SÖH‹	Ø‹›˜[Y_HšYYÈXØÙ\ÜÈ	ÔK]]\Û‰ÝXÛ\™Y[ˆ]È\[™[˜ÚY\ÎÈ\ÈXZÙ\ÈH™\]Z\™HØ[[XšYÝ[Ý\È[™[œÛÝ[™‚‚”™\]Z\™YXÚØYÙNˆ	ÔIÔOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ø‹›˜[Y_P	Ø‹œ™Y™\™[˜Ù_H
šXH	Ô™_JB˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\ÜÝY\“ØØ]ÜŽ“Øš™XÝ˜\ÜÚYÛŠßKŠK\[™[˜ÞS˜[YN”JJNÚYŠO[[
^ÚYŠOO[[OO[[
]›ÝÈŸ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝY[ˆ\œ›ÜˆÈ]™H™Y[ˆÙ]ŠNÑ^ŽÛ]™OV‹›Y\ÜØYÙKœ™\XÙJ×‹Š‹ÙËˆŠNÖ‹›Y\ÜØYÙOQ™KQKš\Ê™JI‰œÈOOL	‰ŠK˜Y
™JK›ØÙ\ÜË™[Z]Ø\›š[™ÊŠJ_[]	P\œ˜^Kš\Ð\œ˜^JŠOÞÛ˜[YN‘–ÌK™Y™\™[˜ÙN‘–ÌW_NžÛ˜[YN”™Y™\™[˜ÙN‘ŸKÙOUJ	
NÚYŠ\ÙKœXÚØYÙSØØ][ÛŠ]›ÝÈ\Ê“RTÔÒS‘×ÑTS‘SÖH‹H\[™[˜ÞHÙY[\È˜[Y]Y‰ÝÙ][œÝ[Y›ÜˆÛÛYH™X\ÛÛ‹ˆ\ÈZYÚ™HØ]\ÙYžHH\X[[œÝ[ÝXÚ\È]ˆœÈ›Ù‚‚”™\]Z\™YXÚØYÙNˆ	É›˜[Y_P	Éœ™Y™\™[˜Ù_IÉ›˜[YHOOZ™OØ
šXH‰Ú™_HŠXˆˆŸB”™\]Z\™YžNˆ	Ø‹›˜[Y_P	Ø‹œ™Y™\™[˜Ù_H
šXH	Ô™_JB˜Ü™\]Y\Ýš™K\ÜÝY\Ž”™K\[™[˜ÞSØØ]ÜŽ“Øš™XÝ˜\ÜÚYÛŠßK	
_JNÛ]O\ÙKœXÚØYÙSØØ][ÛŽÝÏØÝRËš›Ú[ŠKÊN˜Ý^_Y[ÙHYŠËš\ÐXœÛÛ]J™JJXÝRË››Ü›X[^™J™JNÙ[Ù^ÚYŠZÙJ]›ÝÈ\ÊTWÑT”“Ôˆ‹•H™\ÛÛ™UÕ[œ]X[YšYY[˜Ý[Ûˆ]\Ý™HØ[YÚ]H˜[Y\ÜÝY\ˆÚ[ˆH]\Û‰ÝHZ[[ˆ›ÜˆXœÛÛ]H‹Ü™\]Y\Ýš™K\ÜÝY\Ž”™_JNÛ]RËœ™\ÛÛ™JÙJNÚÙK›X]Ú
ÊOØÝRË››Ü›X[^™JËš›Ú[Š™JJN˜ÝRË››Ü›X[^™JËš›Ú[ŠË™\›˜[YJ
K™JJ_\™]\›ˆË››Ü›X[^™JÝ
_Y[˜Ý[ÛˆJ™KÙK™O]K™J^ÚYŠ‹\Ý
™JJ\™]\›ˆÙNÛ]™OZYJÙK™K™JNÜ™]\›ˆ™OÒË››Ü›X[^™J™JNšÙ_Y[˜Ý[ÛˆYJ™KÙ^[œÚ[ÛœÎšÙOSØš™XÝšÙ^\Êš“[Ù[K—Ù^[œÚ[ÛœÊ_O^ßJ^Û]™OV×K™O]YJ™K™KÙ^[œÚ[ÛœÎšÙ_JNÚYŠ™J\™]\›ˆË››Ü›X[^™J™JNÞÝLYJ™K›X\
YOO™™K™œ›ÛTÜX›T]
YJJJNÛ]™O]YŠ™JKÝ[YJ™JNÚYŠÝ
^Û]ÜXÚØYÙSØØ][ÛŽ“Y_OUJÝ
KHLÝž^Ý™˜ZÙQœË˜XØÙ\ÜÔÞ[˜ÊYJ_XØ]Ú
Ê^ÚYŠÏË˜ÛÙOOOH‘S“ÑS•ŠTHLNÙ[Ù^Û]JÏË›Y\ÜØYÙOÏÝÏÏÈ™[\H^Ù\[Ûˆ›ÝÛˆŠKœ™\XÙJ×–ÐKV—KËOOžKÓÝÙ\Ø\ÙJ
JNÝ›ÝÈ\Ê”UPSQ’QQÔUÔ‘TÓÓUSÓ—ÑRSQ‹™\]Z\™YXÚØYÙH^\ÝÈ]ÛÝ[›Ý™HXØÙ\ÜÙY
	ØŸJK‚‚“Z\ÜÚ[™ÈXÚØYÙNˆ	ØÝ›˜[Y_P	ØÝœ™Y™\™[˜Ù_B‘^XÝYXÚØYÙHØØ][ÛŽˆ	ÝYŠYJ_B˜Ý[œ]X[YšYY]”™K^[œÚ[ÛœÎšÙ_J__ZYŠT
^Û]ÏSYKš[˜ÛY\Ê‹Ý[œYÙÙYÈŠOÈ”™\]Z\™Y[œYÙÙYXÚØYÙHZ\ÜÚ[™Èœ›ÛH\ÚËˆ\ÈX^H\[ˆÚ[ˆÝÚ]Ú[™Èœ˜[˜Ú\ÈÚ]Ý][›š[™È[œÝ[È
[œYÙÙYXÚØYÙ\È]\Ý™H[HX]\šX[^™YÛˆ\ÚÈÈÛÜšÊKˆŽˆ”™\]Z\™YXÚØYÙHZ\ÜÚ[™Èœ›ÛH\ÚËˆYˆ[ÝHÙY\[Ý\ˆXÚØYÙ\È[œÚYH[Ý\ˆ™\ÜÚ]ÜžH[ˆ™\Ý\[™ÈH›ÙH›ØÙ\ÜÈX^H™H[›ÝYÚˆÝ\Ú\ÙKžHÈ[ˆ[ˆ[œÝ[š\œÝˆŽÝ›ÝÈ\Ê”UPSQ’QQÔUÔ‘TÓÓUSÓ—ÑRSQ‹	ÝßB‚“Z\ÜÚ[™ÈXÚØYÙNˆ	ØÝ›˜[Y_P	ØÝœ™Y™\™[˜Ù_B‘^XÝYXÚØYÙHØØ][ÛŽˆ	ÝYŠYJ_B˜Ý[œ]X[YšYY]”™K^[œÚ[ÛœÎšÙ_J__]›ÝÈ\Ê”UPSQ’QQÔUÔ‘TÓÓUSÓ—ÑRSQ‹]X[YšYY]™\ÛÛ][Ûˆ˜Z[YˆÙHÛÚÙY›ÜˆH›ÛÝÚ[™È]Ë]›Û™HÛÝ[™HXØÙ\ÜÙY‚‚”ÛÝ\˜ÙH]ˆ	Ô™_B‰Ø™K›X\
YOO˜›Ý›Ý[™ˆ	ÝYŠYJ_B˜
Kš›Ú[ŠˆŠ_XÝ[œ]X[YšYY]”™K^[œÚ[ÛœÎšÙ_J__Y[˜Ý[Ûˆ]
™KÙK™J^ÚYŠZÙJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[ˆ\ÜÝY\ˆ\È™\]Z\™YÈ™\ÛÛ™Hš]˜]H[\ÜX\[™ÜÈŠNÛ]™O[ŒYJÛ˜[YN“™K˜\ÙNŠÛKœ]Ñš[UT“
J™K™œ›ÛTÜX›T]
ÙJJKÛÛ™][ÛœÎ˜™K˜ÛÛ™][ÛœÏÏÝK™XYš[TÞ[˜Ñ›Ž˜Ù_JNÚYŠ™H[œÝ[˜Ù[ÙˆT“
\™]\›ˆYJ™KÔÜX›T]

ÛK™š[UT“Ô]
J™JJKÙ^[œÚ[ÛœÎ˜™K™^[œÚ[ÛœßJNÚYŠ™KœÝ\ÕÚ]
ˆÈŠJ]›ÝÈ™]È\œ›ÜŠ“X\[™Èœ›ÛHÛ™Hš]˜]H[\ÜÈ[›Ý\ˆ\Û‰Ý[ÝÙYŠNÜ™]\›ˆÊ™KÙK™J_Y[˜Ý[ÛˆÊ™KÙK™O^ßJ^Ýž^ÚYŠ™KœÝ\ÕÚ]
ˆÈŠJ\™]\›ˆ]
™KÙK™JNÛ]ØÛÛœÚY\Z[[œÎš™K^[œÚ[ÛœÎ”™KÛÛ™][ÛœÎ˜ÝOX™KYOV
™KÙKØÛÛœÚY\Z[[œÎš™_JNÚYŠ™OOOHœœ\HŠ\™]\›ˆYNÚYŠYOOO[[
\™]\›ˆ[Û]J
OOšÙHOO[[ÐYJÙJNˆLKÏJZ™_Jšš\ÐZ[[ŠJ™JJI‰ˆT

OÑJ™KYKÝÙJN“YNÜ™]\›ˆYJËÙ^[œÚ[ÛœÎ”™_J_XØ]Ú
™J^Ý›ÝÈØš™XÝš\ÓÝÛŠ™KœœÛÙHŠI‰“Øš™XÝ˜\ÜÚYÛŠ™K™]KÜ™\]Y\ÝYŠ™JK\ÜÝY\ŽšÙI‰YŠÙJ_JK™__Y[˜Ý[Ûˆ
™J^Û]ÙORË››Ü›X[^™J™JK™O[[Ëœ™\ÛÛ™Uš\X[
ÙJNÜ™]\›ˆ™HOOZÙOØ™N›[\™]\›žÕ‘T”ÒSÓ”ÎÙKÜ]™[‘YKÙ]ØØ]ÜŽŠ™KÙJOO\œ˜^Kš\Ð\œ˜^JÙJOÞÛ˜[YNšÙVÌK™Y™\™[˜ÙNšÙVÌW_NžÛ˜[YN“™K™Y™\™[˜ÙNšÙ_KÙ]\[™[˜ÞU™YT›ÛÝÎŠ
OO–Ë‹‹™K™\[™[˜ÞU™YT›ÛÝ×KÙ][ØØ]ÜœÊ
^Û]™OV×NÙ›ÜŠ]ÚÙK™W[ÙˆÊY›ÜŠ]™HÙˆ™KšÙ^\Ê
JZÙHOO[[	‰š™HOO[[	‰“™Kœ\Ú
Û˜[YNšÙK™Y™\™[˜ÙNš™_JNÜ™]\›ˆ™_KÙ]XÚØYÙR[™›Ü›X][ÛŽ“™OOžÛ]ÙOYÊ™JNÚYŠÙOOO[[
\™]\›ˆ[Û]™OY™K™œ›ÛTÜX›T]
ÙKœXÚØYÙSØØ][ÛŠNÜ™]\›žË‹‹šÙKXÚØYÙSØØ][ÛŽ˜™__Kš[™XÚØYÙSØØ]ÜŽ“™OO›YJ™KÔÜX›T]
™JJK™\ÛÛ™UÕ[œ]X[YšYY“Êœ™\ÛÛ™UÕ[œ]X[YšYY‹
™KÙK™JOOžÛ]™OZÙHOO[[Ù™KÔÜX›T]
ÙJN›[™OV
™KÔÜX›T]
™JK™K™JNÜ™]\›ˆ™OOO[[Û[™™K™œ›ÛTÜX›T]
™J_JK™\ÛÛ™U[œ]X[YšYY“Êœ™\ÛÛ™U[œ]X[YšYY‹
™KÙJOO™™K™œ›ÛTÜX›T]
YJ™KÔÜX›T]
™JKÙJJJK™\ÛÛ™T™\]Y\Ý“Êœ™\ÛÛ™T™\]Y\Ý‹
™KÙK™JOOžÛ]™OZÙHOO[[Ù™KÔÜX›T]
ÙJN›[™OWÊ™KÔÜX›T]
™JK™K™JNÜ™]\›ˆ™OOO[[Û[™™K™œ›ÛTÜX›T]
™J_JK™\ÛÛ™Uš\X[“Êœ™\ÛÛ™Uš\X[‹™OOžÛ]ÙO]
™KÔÜX›T]
™JJNÜ™]\›ˆÙHOO[[Ù™K™œ›ÛTÜX›T]
ÙJN›[J__Q

NÝ˜\ˆŒYOJKŠOOžÛ]ÏT‘
JKO]ÕÊËØ˜\ÙT]JKY™Kš›Ú[Š\‹œœÚœÊNÜ™]\›ˆÊKÙ˜ZÙQœÎœ‹œ\T™\ÛÛ][ÛŽ›ŸJ_NÝ˜\ˆ•ÏY]
YJ
JNÕ

NÝ˜\ˆO^ßNÖ]
KØÚXÚÓX[šY™\ÝÛÛ\]Xš[]NŠ
OOšYK^˜XÝZ[™\]Y\ÝŠ
OOœQ‹Ù]^˜XÝ[Š
OO“ÕË\Ðš[™[™ÑÞ\Š
OO“ßJNÜYJ
NÑ

NÙ[˜Ý[ÛˆYJJ^Ü™]\›ˆ‹š\ÔXÚØYÙPÛÛ\]X›JKZK™Ù]\˜Ú]XÝ\™TÙ]

J_Y[˜Ý[ÛˆQŠK‹ØÛÛ™šYÝ\˜][ÛŽœßJ^Û]OV×NÙ›ÜŠ]ˆÙ–Èœ™Z[œÝ[‹š[œÝ[‹œÜÝ[œÝ[—J]›X[šY™\ÝœØÜš\Ëš\ÊŠI‰˜Kœ\Ú
Ý\NŒØÜš\›ŸJNÜ™]\›ˆ]›X[šY™\ÝœØÜš\Ëš\Êš[œÝ[ŠI‰›Z\ØËš\Ðš[™[™ÑÞ\	‰˜Kœ\Ú
Ý\NŒKØÜš\ˆ››ÙKYÞ\™XZ[ŸJKK›[™ÝOOLÛ[™K›[šÕ\HOOH’T‘ÞÜÚÚ\YˆL^Z[Ž›O›‹œ™\ÜØ\›š[™ÓÛ˜ÙJ‹	Ú‹œ™]SØØ]ÜŠËJ_H\ÝÈZ[ØÜš\Ë]\È™Y™\™[˜ÙY›ÝYÚHÛÙ[šËˆÛÙ[šÜÈÛ‰ÝÝ\ÜZ[ØÜš\ËÛÈ^IÛ™HYÛ›Ü™Y˜
_Nœ‰‰œ‹˜Z[OOHLOÞÜÚÚ\YˆL^Z[Ž›O›‹œ™\Ü[™›ÓÛ˜ÙJK	Ú‹œ™]SØØ]ÜŠËJ_H\ÝÈZ[ØÜš\Ë]]ÈZ[\È™Y[ˆ^XÚ]H\ØX›Y›ÝYÚÛÛ™šYÝ\˜][Û‹˜
_Nˆ\Ë™Ù]
™[˜X›TØÜš\ÈŠI‰ˆ\‹˜Z[ÞÜÚÚ\YˆL^Z[Ž›O›‹œ™\ÜØ\›š[™ÓÛ˜ÙJ	Ú‹œ™]SØØ]ÜŠËJ_H\ÝÈZ[ØÜš\Ë][Z[ØÜš\È]™H™Y[ˆ\ØX›Y˜
_NšYJJOÞÜÚÚ\YˆLK\™XÝ]™\Î˜_NžÜÚÚ\YˆL^Z[Ž›O›‹œ™\ÜØ\›š[™ÓÛ˜ÙJÍ‹	Ú‹œ™]SØØ]ÜŠËJ_HH	ÕZK™Ù]\˜Ú]XÝ\™S˜[YJ
_H\˜Ú]XÝ\™H\È[˜ÛÛ\]X›HÚ]\ÈXÚØYÙKZ[ÚÚ\Y˜
__]˜\ˆ[™]ÈÙ]
È‹™^H‹‹˜š[ˆ‹‹š‹‹š‹‹š‹‹˜È‹‹˜ØÈ‹‹˜Ü‹‹š˜]˜H‹‹š˜\ˆ‹‹››ÙH—JNÙ[˜Ý[ÛˆÕÊJ^Ü™]\›ˆKœXÚØYÙQœË™Ù]^˜XÝ[
Ü™[]˜[^[œÚ[ÛœÎžJ_Y[˜Ý[ÛˆÊJ^Û]RËš›Ú[ŠKœ™Yš^]˜š[™[™Ë™Þ\ŠNÜ™]\›ˆKœXÚØYÙQœË™^\ÝÔÞ[˜Ê
_]˜\ˆ^ßNÖ]
ÙÙ][œYÙÙY]Š
OO—ÑJNÜYJ
NÑ

NÙ[˜Ý[ÛˆÑ
KØÛÛ™šYÝ\˜][ÛŽJ^Ü™]\›ˆËœ™\ÛÛ™J™Ù]
œœ[œYÙÙY›Û\ˆŠK‹œÛYÚYžSØØ]ÜŠJJ_]˜\ˆÚ[™]ÈÙ]
Ú‹›XZÙRY[
[›Ü[ˆŠKšY[\Ú‹›XZÙRY[
[›ÜˆŠKšY[\ÚJK™ÏXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë›[ÙOHœÝšXÝŽÝ\ËœœØXÚO[™]ÈX\YÙ]Ý\ÝÛQ]RÙ^J
^Ü™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÛ˜[YNˆ”œ[šÙ\ˆ‹™\œÚ[ÛŽŒŸJ_\Ý\ÜÔXÚØYÙJŠ^Ü™]\›ˆ\Ëš\Ñ[˜X›Y
Š_X\Þ[˜Èš[™XÚØYÙSØØ][ÛŠŠ^ÚYŠ]\Ëš\Ñ[˜X›Y
ŠJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH”[šÙ\ˆÈ™H[˜X›YŠNÛ]ÏZYÊ‹œ›Ú™XÝ
K˜ÚœÎÚYŠ[K™^\ÝÔÞ[˜ÊÊJ]›ÝÈ™]ÈÝ
H›Ú™XÝ[ˆ	ÜKœ™]J‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹	Ü‹œ›Ú™XÝ˜ÝÙKÜXÚØYÙKšœÛÛ˜K•\K”U
_HÙ\Û‰ÝÙY[HÈ]™H™Y[ˆ[œÝ[YH[›š[™È[ˆ[œÝ[\™HZYÚ[
NÛ]OQÙK™Ù]˜XÝÜžUÚ]Y˜][
\ËœœØXÚKË

OO‘ÙK™[˜[ZXÔ™\]Z\™JËØØXÚ[™ÔÝ˜]YÞN‘ÙKØXÚ[™ÔÝ˜]YÞK‘œÕ[Y_JJK^Û˜[YNš‹œÝš[™ÚYžRY[

K™Y™\™[˜ÙNœ™Y™\™[˜Ù_KÏXK™Ù]XÚØYÙR[™›Ü›X][ÛŠŠNÚYŠXÊ]›ÝÈ™]ÈÝ
ÛÝ[‰Ýš[™	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_H[ˆHÝ\œ™[H[œÝ[Y”X\H[›š[™È[ˆ[œÝ[ZYÚ[
NÜ™]\›ˆ™KÔÜX›T]
ËœXÚØYÙSØØ][ÛŠ_X\Þ[˜Èš[™XÚØYÙSØØ]ÜŠŠ^ÚYŠ]\Ëš\Ñ[˜X›Y
ŠJ\™]\›ˆ[Û]ÏZYÊ‹œ›Ú™XÝ
K˜ÚœÎÚYŠ[K™^\ÝÔÞ[˜ÊÊJ\™]\›ˆ[Û]QÙK™Ù]˜XÝÜžUÚ]Y˜][
\ËœœØXÚKË

OO‘ÙK™[˜[ZXÔ™\]Z\™JËØØXÚ[™ÔÝ˜]YÞN‘ÙKØXÚ[™ÔÝ˜]YÞK‘œÕ[Y_JJK™š[™XÚØYÙSØØ]ÜŠ™K™œ›ÛTÜX›T]

JNÜ™]\›ˆÚ‹›XZÙSØØ]ÜŠ‹œ\œÙRY[
‹›˜[YJK‹œ™Y™\™[˜ÙJN›[[XZÙR[œÝ[\Š
^Ü™]\›ˆ™]È›J
_Z\Ñ[˜X›Y

^Ü™]\›ˆJœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOHœœŸœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[ÙHŠHOO]\Ë›[ÙJ__K›OXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë›ÜÏ]Ý\Ë›[ÙOHœÝšXÝŽÝ\Ë˜\Þ[˜ÐXÝ[ÛœÏ[™]ÈÙK\Þ[˜ÐXÝ[ÛœÊL
NÝ\ËœXÚØYÙT™YÚ\ÝžO[™]ÈX\Ý\Ëš\X[[\]\Ï[™]ÈX\Ý\Ëš\ÑTÓSØY\”™\]Z\™YHLNÝ\Ë˜Ý\ÝÛQ]O^ÜÝÜ™N›™]ÈX\NÝ\Ë[œYÙÙY]Ï[™]ÈÙ]Ý\Ë›ÜÏ]X]XÚÝ\ÝÛQ]J
^Ý\Ë˜Ý\ÝÛQ]O]X\Þ[˜È[œÝ[XÚØYÙJ‹Ê^Û]OZ‹œÝš[™ÚYžRY[

K]œ™Y™\™[˜ÙKÏHH]\Ë›ÜËœ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠ
KZ‹š\Õš\X[ØØ]ÜŠ
K]œY\‘\[™[˜ÚY\ËœÚ^™OŒ	‰ˆY‹H\	‰ˆXËOH\	‰›[šÕ\HOOH”ÓÑ•‹ËÎÚYŠJ^Û]OYÚ‹™]š\X[^™SØØ]ÜŠ
NÐÏ]\Ë˜Ý\ÝÛQ]KœÝÜ™K™Ù]
K›ØØ]Ü’\Ú
K\[ÙˆÏˆH‰‰ŠÏX]ØZ]Z
ŠK›[šÕ\OOOH’T‘‰‰\Ë˜Ý\ÝÛQ]KœÝÜ™KœÙ]
K›ØØ]Ü’\ÚÊJKË›X[šY™\Ý\OOOH›[Ù[H‰‰Š\Ëš\ÑTÓSØY\”™\]Z\™YHL
KÏ]\Ë›ÜËœ›Ú™XÝ™Ù]\[™[˜ÞSY]JK™\œÚ[ÛŠ_[]ZÜQŠËËØÛÛ™šYÝ\˜][ÛŽ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJN›[OQOØ]ØZ]\Ë[œYÔXÚØYÙRY“™YYY
Ë‹ËÊNœ‹œXÚØYÙQœÎÚYŠËš\ÐXœÛÛ]J‹œ™Yš^]
J]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH™Yš^]
	Ü‹œ™Yš^]JHÈ™H™[]]™HÈH\™[
NÛ]RËœ™\ÛÛ™JK™Ù]™X[]

K‹œ™Yš^]
KÏSUÊ\Ë›ÜËœ›Ú™XÝ˜ÝÙ
KO[™]ÈX\O[™]ÈÙ]ÚYŠŠ^Ù›ÜŠ]HÙˆœY\‘\[™[˜ÚY\Ë˜[Y\Ê
JUKœÙ]
‹œÝš[™ÚYžRY[
JK[
KK˜Y
‹œÝš[™ÚYžRY[
JJNÚYŠXÊ^Û]OZ‹™]š\X[^™SØØ]ÜŠ
NÝ\Ëš\X[[\]\ËœÙ]
K›ØØ]Ü’\ÚÛØØ][ÛŽ“UÊ\Ë›ÜËœ›Ú™XÝ˜ÝÙ[Ëœ™\ÛÛ™Uš\X[

JKØØ]ÜŽ_J__\™]\›ˆÙK™Ù]X\Ú]Y˜][
\ËœXÚØYÙT™YÚ\ÝžKJKœÙ]
‹ÜXÚØYÙSØØ][ÛŽ“ËXÚØYÙQ\[™[˜ÚY\Î•KXÚØYÙTY\œÎ–K[šÕ\N›[šÕ\K\ØØ\™œ›ÛSÛÚÝ\œ‹™\ØØ\™œ›ÛSÛÚÝ\L_JKÜXÚØYÙSØØ][ÛŽ•Z[™\]Y\Ýž_X\Þ[˜È]XÚ[\›˜[\[™[˜ÚY\ÊŠ^Û]Ï]\Ë™Ù]XÚØYÙR[™›Ü›X][ÛŠ
NÙ›ÜŠ]ØK—[ÙˆŠ^Û]ÏZ‹˜\™RY[Ñ\]X[
KŠOÛ‹œ™Y™\™[˜ÙN–Ú‹œÝš[™ÚYžRY[
ŠK‹œ™Y™\™[˜ÙWNÜËœXÚØYÙQ\[™[˜ÚY\ËœÙ]
‹œÝš[™ÚYžRY[
JKÊ__X\Þ[˜È]XÚ^\›˜[\[™[ÊŠ^Ù›ÜŠ]ÈÙˆŠ]\Ë™Ù]\ÚÒ[™›Ü›X][ÛŠÊKœXÚØYÙQ\[™[˜ÚY\ËœÙ]
‹œÝš[™ÚYžRY[

Kœ™Y™\™[˜ÙJ_X\Þ[˜Èš[˜[^™R[œÝ[

^ÚYŠ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[ÙHŠHOO]\Ë›[ÙJ\™]\›ŽÛ]ZYÊ\Ë›ÜËœ›Ú™XÝ
NÚYŠ\Ëš\Ñ\ÛQ[˜X›Y

_]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ™\ÛSØY\ŠK\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOHœœŠ^Ø]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ˜ÚœÊK]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ™]JK]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ™\ÛSØY\ŠK]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[œYÙÙY›Û\ˆŠJNÜ™]\›ŸY›ÜŠ]ÛØØ]ÜŽËØØ][ÛŽ”ß[Ùˆ\Ëš\X[[\]\Ë˜[Y\Ê
JQÙK™Ù]X\Ú]Y˜][
\ËœXÚØYÙT™YÚ\ÝžK‹œÝš[™ÚYžRY[
ÊJKœÙ]
Ëœ™Y™\™[˜ÙKÜXÚØYÙSØØ][ÛŽ”ËXÚØYÙQ\[™[˜ÚY\Î›™]ÈX\XÚØYÙTY\œÎ›™]ÈÙ][šÕ\Nˆ”ÓÑ•‹\ØØ\™œ›ÛSÛÚÝ\ˆL_JNÛ]]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ˜[˜XÚÓ[ÙHŠKÏ]\Ë›ÜËœ›Ú™XÝÛÜšÜÜXÙ\Ë›X\

Ø[˜ÚÜ™YØØ]ÜŽßJOOŠÛ˜[YNš‹œÝš[™ÚYžRY[
ÊK™Y™\™[˜ÙNËœ™Y™\™[˜Ù_JJKO\ˆOOH››Û™H‹V×KÏ[™]ÈX\QÙK˜Z[YÛ›Ü™T]\›ŠÈ‹žX\›‹ÜÙÜËÊŠˆ‹‹‹\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœYÛ›Ü™T]\›œÈŠWJK]\ËœXÚØYÙT™YÚ\ÝžK]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœÚX˜[™ÈŠKO]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœš\˜XÚÙ[™ŠNÚYŠOOH™\[™[˜ÚY\Ë[Û›HŠY›ÜŠ]ÈÙˆ\Ë›ÜËœ›Ú™XÝœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
J]\Ë›ÜËœ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠÊI‰›‹œ\Ú
Û˜[YNš‹œÝš[™ÚYžRY[
ÊK™Y™\™[˜ÙNËœ™Y™\™[˜Ù_JNÜ™]\›ˆ]ØZ]\Ë˜\Þ[˜ÐXÝ[ÛœËØZ]

K]ØZ]\Ë™š[˜[^™R[œÝ[Ú]œ
Ù\[™[˜ÞU™YT›ÛÝÎœË[˜X›UÜ]™[˜[˜XÚÎ˜K˜[˜XÚÑ^Û\Ú[Û“\Ý›‹˜[˜XÚÔÛÛ˜ËYÛ›Ü™T]\›Ž™‹œš\˜XÚÙ[™‘KXÚØYÙT™YÚ\ÝžNœÚX˜[™ÎšJKØÝ\ÝÛQ]N\Ë˜Ý\ÝÛQ]__X\Þ[˜È˜[œÙ›Ü›TœÙ][™ÜÊ
^ßZ\Ñ\ÛQ[˜X›Y

^ÚYŠ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹œÛÝ\˜Ù\Ëš\Êœœ[˜X›Q\ÛSØY\ˆŠJ\™]\›ˆ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[˜X›Q\ÛSØY\ˆŠNÚYŠ\Ëš\ÑTÓSØY\”™\]Z\™Y
\™]\›ˆLÙ›ÜŠ]Ùˆ\Ë›ÜËœ›Ú™XÝÛÜšÜÜXÙ\ÊZYŠ›X[šY™\Ý\OOOH›[Ù[HŠ\™]\›ˆLÜ™]\›ˆL_X\Þ[˜Èš[˜[^™R[œÝ[Ú]œ

^Û]ZYÊ\Ë›ÜËœ›Ú™XÝ
KÏX]ØZ]\Ë›ØØ]S›ÙS[Ù[\ÊšYÛ›Ü™T]\›ŠNÚYŠË›[™ÝŒ
^Ý\Ë›ÜËœ™\Üœ™\ÜØ\›š[™ÊÌK“Û™HÜˆ[Ü™H›ÙWÛ[Ù[\È]™H™Y[ˆ]XÝY[™Ú[™H™[[Ý™Yˆ\ÈÜ\˜][ÛˆX^HZÙHÛÛYH[YKˆŠNÙ›ÜŠ]ˆÙˆÊX]ØZ]Kœ™[[Ý™T›ÛZ\ÙJŠ_ZYŠ]ØZ]\Ë˜[œÙ›Ü›TœÙ][™ÜÊ
K\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[˜X›R[›[š[™ÈŠJ^Û]RÙJ
NØ]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJ‹˜ÚœË‹Ø]]ÛX]XÓ™]Û[™\ÎˆL[ÙNLßJK]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ‹™]J_Y[Ù^Û]Ù]Qš[N›‹ØY\‘š[N˜ßOZÙJ
NØ]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJ‹˜ÚœËËØ]]ÛX]XÓ™]Û[™\ÎˆL[ÙNLßJK]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJ‹™]K‹Ø]]ÛX]XÓ™]Û[™\ÎˆL[ÙNŒJ_]\Ëš\Ñ\ÛQ[˜X›Y

I‰Š\Ë›ÜËœ™\Üœ™\ÜØ\›š[™Ê‘TÓHÝ\Ü›Üˆ”\Ù\ÈH^\š[Y[[ØY\ˆTH[™\È\™Y›Ü™H^\š[Y[[ŠK]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJ‹™\ÛSØY\‹
•Ë™Y˜][
J
KØ]]ÛX]XÓ™]Û[™\ÎˆL[ÙNŒJJNÛ]O]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[œYÙÙY›Û\ˆŠNÚYŠ\Ë[œYÙÙY]ËœÚ^™OOOL
X]ØZ]Kœ™[[Ý™T›ÛZ\ÙJJNÙ[ÙH›ÜŠ]ˆÙˆ]ØZ]Kœ™XY\”›ÛZ\ÙJJJ^Û]ÏRËœ™\ÛÛ™JKŠNÝ\Ë[œYÙÙY]Ëš\ÊÊ_]ØZ]Kœ™[[Ý™T›ÛZ\ÙJÊ__X\Þ[˜ÈØØ]S›ÙS[Ù[\Ê
^Û]V×KÏ]Û™]È™YÑ^

N›[Ù›ÜŠ]HÙˆ\Ë›ÜËœ›Ú™XÝÛÜšÜÜXÙ\Ê^Û]RËš›Ú[ŠK˜ÝÙ››ÙWÛ[Ù[\ÈŠNÚYŠÉ‰œË\Ý
Ëœ™[]]™J\Ë›ÜËœ›Ú™XÝ˜ÝÙK˜ÝÙ
J_[K™^\ÝÔÞ[˜ÊŠJXÛÛ[YNÛ]ÏX]ØZ]Kœ™XY\”›ÛZ\ÙJ‹ÝÚ]š[U\\ÎˆLJKXË™š[\ŠOˆ\š\Ñ\™XÝÜžJ
_›˜[YOOOH‹˜š[ˆŸ\›˜[YKœÝ\ÕÚ]
‹ˆŠJNÚYŠ‹›[™ÝOOXË›[™Ý
\‹œ\Ú
ŠNÙ[ÙH›ÜŠ]ÙˆŠ\‹œ\Ú
Ëš›Ú[Š‹›˜[YJJ_\™]\›ˆŸX\Þ[˜È[œYÔXÚØYÙRY“™YYY
‹ËKŠ^Ü™]\›ˆ\ËœÚÝ[™U[œYÙÙY
‹JOÝ\Ë[œYÔXÚØYÙJËŠNœËœXÚØYÙQœß\ÚÝ[™U[œYÙÙY
‹Ê^Ü™]\›ˆ\[ÙˆË[œYÙÙYHÜË[œYÙÙYšÚš\ÊšY[\Ú
_˜ÛÛ™][ÛœÈO[[ÈLœ‹›X[šY™\Ýœ™Y™\•[œYÙÙYOO[[Ü‹›X[šY™\Ýœ™Y™\•[œYÙÙYˆHJQŠ‹ËØÛÛ™šYÝ\˜][ÛŽ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJOËœÚÚ\YOOHL_‹›Z\ØË™^˜XÝ[
_X\Þ[˜È[œYÔXÚØYÙJ‹Ê^Û]OWÑ
ØÛÛ™šYÝ\˜][ÛŽ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJNÜ™]\›ˆ\Ë›ÜËœ›Ú™XÝ™\ØX›YØØ]ÜœËš\Ê›ØØ]Ü’\Ú
OÛ™]È™ŠKØ˜\ÙQœÎœ‹œXÚØYÙQœË]][Î’ßJNŠ\Ë[œYÙÙY]Ë˜Y
JKËšÛ™]Ú™\Ý[
\Ë˜\Þ[˜ÐXÝ[ÛœËœÙ]
›ØØ]Ü’\Ú\Þ[˜Ê
OOžÛ]RËš›Ú[ŠK‹œ™Yš^]‹œ™XYHŠNØ]ØZ]K™^\ÝÔ›ÛZ\ÙJŠ_
\Ë›ÜËœ›Ú™XÝœÝÜ™YZ[Ý]K™[]J›ØØ]Ü’\Ú
K]ØZ]K›ZÙ\”›ÛZ\ÙJKÜ™XÝ\œÚ]™NˆLJK]ØZ]K˜ÛÜT›ÛZ\ÙJK™ÝØ˜\ÙQœÎœ‹œXÚØYÙQœËÝ™\Üš]NˆL_JK]ØZ]KÜš]Qš[T›ÛZ\ÙJ‹ˆŠJ_JJK™]È›ŠJJ_YÙ]XÚØYÙR[™›Ü›X][ÛŠ
^Û]Z‹œÝš[™ÚYžRY[

KÏ]œ™Y™\™[˜ÙKO]\ËœXÚØYÙT™YÚ\ÝžK™Ù]
ŠNÚYŠXJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙH[™›Ü›X][ÛˆÝÜ™HÚÝ[]™H™Y[ˆ]˜Z[X›H
›Üˆ	Ú‹œ™]RY[
\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_JX
NÛ]XK™Ù]
ÊNÚYŠ[Š]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙH[™›Ü›X][ÛˆÚÝ[]™H™Y[ˆ]˜Z[X›H
›Üˆ	Ú‹œ™]SØØ]ÜŠ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_JX
NÜ™]\›ˆŸYÙ]\ÚÒ[™›Ü›X][ÛŠ
^Û]QÙK™Ù]X\Ú]Y˜][
\ËœXÚØYÙT™YÚ\ÝžK\ÚÈŠKÏSUÊ\Ë›ÜËœ›Ú™XÝ˜ÝÙ
NÜ™]\›ˆÙK™Ù]˜XÝÜžUÚ]Y˜][
‹Ë

OOŠÜXÚØYÙSØØ][ÛŽœËXÚØYÙQ\[™[˜ÚY\Î›™]ÈX\XÚØYÙTY\œÎ›™]ÈÙ][šÕ\Nˆ”ÓÑ•‹\ØØ\™œ›ÛSÛÚÝ\ˆL_JJ__NÙ[˜Ý[ÛˆUÊK
^Û]RËœ™[]]™JK
NÜ™]\›ˆ‹›X]Ú
×—žÌŸWËÊ_
X‹ÉÜŸX
K‹œ™\XÙJ×ÏÉË‹ÈŠ_X\Þ[˜È[˜Ý[ÛˆZ
J^Û]X]ØZ]]žQš[™
Kœ™Yš^]Ø˜\ÙQœÎ™KœXÚØYÙQœßJOÏÛ™]È][™]ÈÙ]
Èœ™Z[œÝ[‹š[œÝ[‹œÜÝ[œÝ[—JNÙ›ÜŠ]ÈÙˆœØÜš\ËšÙ^\Ê
J\‹š\ÊÊ_œØÜš\Ë™[]JÊNÜ™]\›žÛX[šY™\ÝžÜØÜš\ÎœØÜš\Ë™Y™\•[œYÙÙYœ™Y™\•[œYÙÙY\N\_KZ\ØÎžÙ^˜XÝ[“ÕÊJK\Ðš[™[™ÑÞ\“ÊJ___\YJ
NÜYJ
NÕ

NÝ˜\ˆÌYOY]
›Ê
JNÝ˜\ˆ]ÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë˜[ZK›ÛÛX[Š‹PKKX[‹LKÙ\ØÜš\[ÛŽˆ•[œYÈ\™XÝ\[™[˜ÚY\Èœ›ÛHH[\™H›Ú™XÝŸJNÝ\Ëœ™XÝ\œÚ]™OZK›ÛÛX[Š‹T‹K\™XÝ\œÚ]™H‹LKÙ\ØÜš\[ÛŽˆ•[œYÈ›Ý\™XÝ[™˜[œÚ]]™H\[™[˜ÚY\ÈŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\Ëœ]\›œÏZK”™\Ý

_\Ý]XÞÝ\Ëœ]ÏVÖÈ[œYÈ—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆ™›Ü˜ÙHH[œXÚÚ[™ÈÙˆH\ÝÙˆXÚØYÙ\È‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[YHÙ[XÝÜœÈX]Ú[™ÈHÜXÚYšYY]\›œÈÈH\ÝÙˆXÚØYÙ\È]]\Ý™H[œYÙÙYÚ[ˆ[œÝ[Y——ˆHXÚØYÙH™Z[™È[œYÙÙYYX[œÈ][œÝXYÙˆ™Z[™È™Y™\™[˜ÙY\™XÝH›ÝYÚ]È\˜Ú]™K]Ú[™H[œXÚÙY][œÝ[[YH[ˆH\™XÝÜžHÛÛ™šYÝ\™YšXHœ[œYÙÙY›Û\˜ˆ›ÝH][œXÚÚ[™ÈXÚØYÙ\È\ÈØ^H\ÈÙ[™\˜[H›Ý™XÛÛ[Y[™Y™XØ]\ÙH]	ÛXZÙH]\™\ˆÈÝÜ™H[Ý\ˆXÚØYÙ\ÈÚ][ˆH™\ÜÚ]ÜžKˆÝÙ]™\‹]	ÜÈHÛÛÙ\›ØXÚÈ]ZXÚÛH[™ØY™[HXYÈÛÛYHXÚØYÙ\Ë[™Ø[ˆ]™[ˆÛÛY][Y\È™H™\]Z\™Y\[™[™ÈÛˆHÛÛ^
›Üˆ^[\HÚ[ˆHXÚØYÙHÛÛZ[œÈÚ[ØÜš\ÊK——ˆ[›š[™ÈHÛÛ[X[™Ú[Ù]H\œÚ\Ý[›YÈ[œÚYH[Ý\ˆÜ[]™[XÚØYÙKšœÛÛ˜[ˆH\[™[˜ÚY\ÓY]XšY[ˆ\ÈÝXÚÈ[™È]ÈY™™XÝË[ÝIÛ™YYÈ™]™\HÚ[™Ù\ÈXYHÈHX[šY™\Ý[™[ˆX\›ˆ[œÝ[È\HH[ÙYšXØ][Û‹——ˆžHY˜][Û›H\™XÝ\[™[˜ÚY\Èœ›ÛHHÝ\œ™[ÛÜšÜÜXÙH\™HY™™XÝYˆYˆPKKX[\ÈÙ]\™XÝ\[™[˜ÚY\Èœ›ÛHH[\™H›Ú™XÝ\™HY™™XÝYˆ\Ú[™ÈHT‹K\™XÝ\œÚ]™X›YÈÚ[Y™™XÝ˜[œÚ]]™H\[™[˜ÚY\È\ÈÙ[\È\™XÝÛ™\Ë——ˆ\ÈÛÛ[X[™XØÙ\ÈÛØˆ]\›œÈ[œÚYHHØÛÜH[™˜[YHÛÛ\Û™[È
›ÝH˜[™ÙJKˆXZÙHÝ\™HÈ\ØØ\HH]\›œÈÈ™]™[[Ý\ˆÝÛˆÚ[œ›ÛHžZ[™ÈÈ^[™[K—ˆ‹^[\\Î–ÖÈ•[œYÈHÙ\Ú\[™[˜ÞHœ›ÛHHXÝ]™HÛÜšÜÜXÙH‹žX\›ˆ[œYÈÙ\Ú—KÈ•[œYÈ[[œÝ[˜Ù\ÈÙˆÙ\Ú™Y™\™[˜ÙYžH[žHÛÜšÜÜXÙH‹žX\›ˆ[œYÈÙ\ÚPH—KÈ•[œYÈ[[œÝ[˜Ù\ÈÙˆÙ\Ú™Y™\™[˜ÙYžHHXÝ]™HÛÜšÜÜXÙH[™]È\[™[˜ÚY\È‹žX\›ˆ[œYÈÙ\ÚTˆ—KÈ•[œYÈ[[œÝ[˜Ù\ÈÙˆÙ\Ú[ž]Ú\™H‹žX\›ˆ[œYÈÙ\ÚPTˆ—KÈ•[œYÈÛ™HÜXÚYšXÈ™\œÚ[ÛˆÙˆÙ\Ú‹žX\›ˆ[œYÈÙ\ÚKŒ‹ŒÈ—KÈ•[œYÈ[XÚØYÙ\ÈÚ]H˜X™[ØÛÜH‹žX\›ˆ[œYÈ	Ð˜X™[Ê‰È—KÈ•[œYÈ[XÚØYÙ\È
Û›H›Üˆ\Ý[™Ë›Ý™XÛÛ[Y[™Y
H‹žX\›ˆ[œYÈTˆ	Ê‰È—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KX]ØZ]œ‹™š[™
ŠNÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÚYŠ‹™Ù]
››ÙS[šÙ\ˆŠHOOHœœŠ]›ÝÈ™]ÈÝ
•\ÈÛÛ[X[™Ø[ˆÛ›H™H\ÙYYˆH›ÙS[šÙ\˜Ü[Ûˆ\ÈÙ]ÈœŠNØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]Ï[™]ÈÙ]
\Ëœ]\›œÊK]\Ëœ]\›œË›X\
OžÛ]OZ‹œ\œÙQ\ØÜš\ÜŠ
KRKœ˜[™ÙHOOH[šÛ›ÝÛˆÒNš‹›XZÙQ\ØÜš\ÜŠKŠˆŠNÚYŠQœ‹˜[Y˜[™ÙJœ˜[™ÙJJ]›ÝÈ™]ÈÝ
H˜[™ÙHÙˆH\ØÜš\Üˆ]\›œÈ]\Ý™HH˜[YÙ[]™\ˆ˜[™ÙH
	Ú‹œ™]Q\ØÜš\ÜŠ‹
_JX
NÜ™]\›ˆÏOžÛ]OZ‹œÝš[™ÚYžRY[
ÊNÜ™]\›ˆYÌYK™Y˜][š\ÓX]Ú
K‹œÝš[™ÚYžRY[

J_Ë™\œÚ[Û‰‰ˆQœ‹œØ]\ÙšY\ÕÚ]™\™[X\Ù\ÊË™\œÚ[Û‹œ˜[™ÙJOÈLNŠË™[]J
KL
__JKJ
OOžÛ]V×NÙ›ÜŠ]HÙˆËœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
JH\ËžUÛÜšÜÜXÙPžSØØ]ÜŠJI‰ˆZ‹š\Õš\X[ØØ]ÜŠJI‰™‹œÛÛYJO•
JJI‰žœ\Ú
JNÜ™]\›ˆK^OžÛ]O[™]ÈÙ]V×KÏJKJOOžÚYŠKš\ÊK›ØØ]Ü’\Ú
J\™]\›ŽÛ]OHH\ËžUÛÜšÜÜXÙPžSØØ]ÜŠJNÚYŠJOŒ	‰ˆ]\Ëœ™XÝ\œÚ]™I‰JI‰ŠK˜Y
K›ØØ]Ü’\Ú
K\ËžUÛÜšÜÜXÙPžSØØ]ÜŠJI‰™‹œÛÛYJYOOšYJJJI‰•œ\Ú
JKJOŒ	‰ˆ]\Ëœ™XÝ\œÚ]™JJJY›ÜŠ]YHÙˆK™\[™[˜ÚY\Ë˜[Y\Ê
J^Û]YO\ËœÝÜ™Y™\ÛÛ][ÛœË™Ù]
YK™\ØÜš\Ü’\Ú
NÚYŠ]YJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH™\ÛÛ][ÛˆÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]YO\ËœÝÜ™YXÚØYÙ\Ë™Ù]
YJNÚYŠXYJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÓÊYKJÌJ__NÙ›ÜŠ]HÙˆ
SÊK˜[˜ÚÜ™YXÚØYÙK
NÜ™]\›ˆKKÎÚYŠ\Ë˜[	‰\Ëœ™XÝ\œÚ]™OÊO\

KÏHH›Ú™XÝŠN\Ë˜[ÊOZ
ËÛÜšÜÜXÙ\ÊKÏH˜[žHÛÜšÜÜXÙHŠNŠOZ
ØWJKÏH\ÈÛÜšÜÜXÙHŠKËœÚ^™OŒJ]›ÝÈ™]ÈÝ
]\›œÈ	ÜKœ™]S\Ý
‹ËK•\KÓÑJ_HÛ‰ÝX]Ú[žHXÚØYÙ\È™Y™\™[˜ÙYžH	ÐßX
NÚYŠËœÚ^™OŒ
]›ÝÈ™]ÈÝ
]\›ˆ	ÜKœ™]S\Ý
‹ËK•\KÓÑJ_HÙ\Û‰ÝX]Ú[žHXÚØYÙ\È™Y™\™[˜ÙYžH	ÐßX
NÑOQÙKœÛÜX\
KOš‹œÝš[™ÚYžSØØ]ÜŠ
JNÛ]ÏX]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]œÛÛŽ\ËšœÛÛŸK\Þ[˜ÈOžÙ›ÜŠ]HÙˆJ^Û]RK™\œÚ[ÛÏÈ[šÛ›ÝÛˆ‹Ï\ËÜ]™[ÛÜšÜÜXÙK›X[šY™\Ý™[œÝ\™Q\[™[˜ÞSY]J‹›XZÙQ\ØÜš\ÜŠK
JNÓË[œYÙÙYHLœ™\Ü[™›ÊÚ[[œXÚÈ	Ú‹œ™]SØØ]ÜŠ‹J_HÈ	ÜKœ™]J‹Ñ
KØÛÛ™šYÝ\˜][ÛŽœŸJKK•\K”U
_X
Kœ™\ÜœÛÛŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠJK™\œÚ[ÛŽ•J_X]ØZ]ËÜ]™[ÛÜšÜÜXÙKœ\œÚ\ÝX[šY™\Ý

K\ËšœÛÛŸœ™\ÜÙ\\˜]ÜŠ
_JNÜ™]\›ˆËš\Ñ\œ›ÜœÊ
OÔË™^]ÛÙJ
N˜]ØZ]Ëš[œÝ[Ú]™]Ô™\Ü
ÚœÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]KØØXÚN›ŸJ__NÝ˜\ˆYÏYOOŠØÚœÎ’Ëš›Ú[ŠK˜ÝÙ\‹œœÚœÊK]N’Ëš›Ú[ŠK˜ÝÙ\‹œœ]JK\ÛSØY\Ž’Ëš›Ú[ŠK˜ÝÙ\‹œœ\ÛSØY\Š_JKLYOYOO‹×ËË\Ý
JOÒ”ÓÓ‹œÝš[™ÚYžJJN™NØ\Þ[˜È[˜Ý[Ûˆš
KŠ^Û]ÏK×Ê‹K\™\]Z\™WÊ×Ê—œœ˜ÏÚœ×Ê‹ÙËOK×Ê‹KY^\š[Y[[[ØY\—Ê×Ê—œœ›ØY\—›Zœ×Ê‹ËJ““ÑWÓÔSÓ”ÏÏÈˆŠKœ™\XÙJËˆŠKœ™\XÙJKˆŠKš[J
NÚYŠK˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOHœœŠ^Ý““ÑWÓÔSÓ”Ï[Ÿ›ÚYÜ™]\›Ÿ[]ÏZYÊJKXK\™\]Z\™H	ÛLYJ™K™œ›ÛTÜX›T]
Ë˜ÚœÊJ_XÛK™^\ÝÔÞ[˜ÊË™\ÛSØY\ŠI‰ŠX	ÙŸHKY^\š[Y[[[ØY\ˆ	ÊYKœ]Ñš[UT“
J™K™œ›ÛTÜX›T]
Ë™\ÛSØY\ŠJKš™YŸX
KK™^\ÝÔÞ[˜ÊË˜ÚœÊI‰Š““ÑWÓÔSÓ”Ï[Ø	ÙŸH	ÛŸX™Š_X\Þ[˜È[˜Ý[Ûˆ
K
^Û]ZYÊJNÝ
‹˜ÚœÊK
‹™]JK
‹™\ÛSØY\ŠK
K˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœ[œYÙÙY›Û\ˆŠJ_]˜\ˆš^ÚÛÚÜÎžÜÜ[]VX\›”]Î•Ù]\ØÜš\[š\›Û›Y[”šKÛÛ™šYÝ\˜][ÛŽžÛ›ÙS[šÙ\ŽžÙ\ØÜš\[ÛŽ‰ÕH[šÙ\ˆ\ÙY›Üˆ[œÝ[[™È›ÙHXÚØYÙ\ËÛ™HÙŽˆœœ‹œœH‹Üˆ››ÙK[[Ù[\È‰Ë\Nˆ”Õ’S‘È‹Y˜][ˆœœŸKZ[š^š\žÙ\ØÜš\[ÛŽˆ•Ú]\ˆX\›ˆÚÝ[\ÙHZ[š^š\È^˜XÝ\˜Ú]™\È‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_KÚ[“[šÕ\NžÙ\ØÜš\[ÛŽˆ•Ú]\ˆX\›ˆÚÝ[\ÙHÚ[™ÝÜÈ[˜Ý[ÛœÈÜˆÞ[[[šÜÈÚ[ˆÜ™X][™È[šÜÈÛˆÚ[™ÝÜËˆ‹\Nˆ”Õ’S‘È‹˜[Y\Î–Èš[˜Ý[ÛœÈ‹œÞ[[[šÜÈ—KY˜][ˆš[˜Ý[ÛœÈŸKœ[ÙNžÙ\ØÜš\[ÛŽˆ’Yˆ	ÜÝšXÝ	ËÙ[™\˜]\ÈÝ[™\™”X\ËˆYˆ	ÛÛÜÙIËY\™Ù\È[HÚ]H—ÛH™\ÛÛ][Û‹ˆ‹\Nˆ”Õ’S‘È‹Y˜][ˆœÝšXÝŸKœÚX˜[™ÎžÙ\ØÜš\[ÛŽˆ”Ýš[™ÈÈ™\[™ÈHÙ[™\˜]Y”ØÜš\‹\Nˆ”Õ’S‘È‹Y˜][ˆˆÈKÝ\Ü‹Øš[‹Ù[ˆ›ÙHŸKœYÛ›Ü™T]\›œÎžÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆÛØˆ]\›œÎÈš[\ÈX]Ú[™È[HÚ[\ÙHHÛ\ÜÚXÈ™\ÛÛ][Ûˆ‹\Nˆ”Õ’S‘È‹Y˜][–×K\Ð\œ˜^NˆLKœš\˜XÚÙ[™žÙ\ØÜš\[ÛŽˆ•Ú]\ˆÈ\ÙHH^\š[Y[[œÈ[\[Y[][Ûˆ›ÜˆHš\”È‹\Nˆ”Õ’S‘È‹˜[Y\Î–È›Xžš\‹šœÈ—KY˜][ˆ›Xžš\ŸKœ[˜X›Q\ÛSØY\ŽžÙ\ØÜš\[ÛŽˆ’YˆYKX\›ˆÚ[Ù[™\˜]H[ˆTÓHØY\ˆ
œœ›ØY\‹›ZœØ
KˆYˆ\È\È›Ý^XÚ]HÙ]X\›ˆšY\ÈÈ]]ÛX]XØ[H]XÝÚ]\ˆTÓHÝ\Ü\È™\]Z\™Yˆ‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_Kœ[˜X›R[›[š[™ÎžÙ\ØÜš\[ÛŽˆ’YˆYKH”]HÚ[™H[›[™Y[Û™ÈÚ]HÙ[™\˜]YØY\ˆ‹\Nˆ“ÓÓPSˆ‹Y˜][ˆLKœ˜[˜XÚÓ[ÙNžÙ\ØÜš\[ÛŽˆ’YˆYKHÙ[™\˜]Y”ØY\ˆÚ[›ÛÝÈHÜ[]™[˜[˜XÚÈ[H‹\Nˆ”Õ’S‘È‹Y˜][ˆ™\[™[˜ÚY\Ë[Û›HŸKœ[œYÙÙY›Û\ŽžÙ\ØÜš\[ÛŽˆ‘›Û\ˆÚ\™HH[œYÙÙYXÚØYÙ\È]\Ý™HÝÜ™Y‹\NˆP”ÓÓUWÔU‹Y˜][ˆ‹‹ËžX\›‹Ý[œYÙÙYŸ_K[šÙ\œÎ–Û™×KÛÛ[X[™Î–Û]×_KšQšÝ˜\ˆÌYOY]
ÌYJ
JNÕ

NÝ˜\ˆ•ÏY]
YJ˜Üž\ÈŠJKYOY]
YJ™œÈŠJKŒYOLKšOH››ÙWÛ[Ù[\È‹ÑH‹˜š[ˆ‹YOH‹žX\›‹\Ý]Kž[[‹LYLËUÏJÏOŠËÓTÔÒPÏH˜Û\ÜÚXÈ‹Ë’T‘S’Ô×ÓÐÐSHš\™[šÜË[ØØ[‹Ë’T‘S’Ô×ÑÓÐSHš\™[šÜËYÛØ˜[‹ÊJJUßßJK‘XÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ëš[œÝ[Ý]PØXÚO[™]ÈX\YÙ]Ý\ÝÛQ]RÙ^J
^Ü™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÛ˜[YNˆ“›ÙS[Ù[\Ó[šÙ\ˆ‹™\œÚ[ÛŽŒßJ_\Ý\ÜÔXÚØYÙJŠ^Ü™]\›ˆ\Ëš\Ñ[˜X›Y
Š_X\Þ[˜Èš[™XÚØYÙSØØ][ÛŠŠ^ÚYŠ]\Ëš\Ñ[˜X›Y
ŠJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH›ÙK[[Ù[\È[šÙ\ˆÈ™H[˜X›YŠNÛ]Ï\‹œ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠ
NÚYŠÊ\™]\›ˆË˜ÝÙÛ]OX]ØZ]ÙK™Ù]˜XÝÜžUÚ]Y˜][
\Ëš[œÝ[Ý]PØXÚK‹œ›Ú™XÝ˜ÝÙ\Þ[˜Ê
OO˜]ØZ]ÕÊ‹œ›Ú™XÝÝ[œ›Û[X\Ù\ÎˆLJJNÚYŠOOO[[
]›ÝÈ™]ÈÝ
ÛÝ[‰Ýš[™H›ÙWÛ[Ù[\ÈÝ]Hš[HH[›š[™È[ˆ[œÝ[ZYÚ[
š[™XÚØYÙSØØ][ÛŠHŠNÛ]XK›ØØ]Ü“X\™Ù]
‹œÝš[™ÚYžSØØ]ÜŠ
JNÚYŠ[Š^Û][™]ÈÝ
ÛÝ[‰Ýš[™	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_H[ˆHÝ\œ™[H[œÝ[Y›ÙWÛ[Ù[\ÈX\H[›š[™È[ˆ[œÝ[ZYÚ[
NÝ›ÝÈ˜ÛÙOH“ÐÐUÔ—Ó“ÕÒS”ÕSQ‹[]Ï[‹›ØØ][ÛœËœÛÜ


OOœœÜ]
ËœÙ\
K›[™ÝZœÜ]
ËœÙ\
K›[™Ý
KRËš›Ú[Š‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹œÝ\[™ÐÝÙšJNÜ™]\›ˆË™š[™
O’Ë˜ÛÛZ[œÊ‹
J_‹›ØØ][ÛœÖÌ_X\Þ[˜Èš[™XÚØYÙSØØ]ÜŠŠ^ÚYŠ]\Ëš\Ñ[˜X›Y
ŠJ\™]\›ˆ[Û]ÏX]ØZ]ÙK™Ù]˜XÝÜžUÚ]Y˜][
\Ëš[œÝ[Ý]PØXÚK‹œ›Ú™XÝ˜ÝÙ\Þ[˜Ê
OO˜]ØZ]ÕÊ‹œ›Ú™XÝÝ[œ›Û[X\Ù\ÎˆLJJNÚYŠÏOO[[
\™]\›ˆ[Û]ÛØØ][Û”›ÛÝ˜KÙYÛY[Î›ŸOU‘ŠËœ™\ÛÛ™J
KÜÚÚ\™Yš^œ‹œ›Ú™XÝ˜ÝÙJKÏ\Ë›ØØ][Û•™YK™Ù]
JNÚYŠXÊ\™]\›ˆ[Û]XË›ØØ]ÜŽÙ›ÜŠ]ÙˆŠ^ÚYŠÏXË˜Ú[™[‹™Ù]

KXÊXœ™XZÎÙXË›ØØ]ÜŸŸ\™]\›ˆ‹œ\œÙSØØ]ÜŠŠ_[XZÙR[œÝ[\Š
^Ü™]\›ˆ™]ÈUÊ
_Z\Ñ[˜X›Y

^Ü™]\›ˆœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠOOOH››ÙK[[Ù[\ÈŸ_KUÏXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë›ÜÏ]Ý\Ë›ØØ[ÝÜ™O[™]ÈX\Ý\Ëœ™X[ØØ]ÜÚXÚÜÝ[\Ï[™]ÈX\Ý\Ë˜Ý\ÝÛQ]O^ÜÝÜ™N›™]ÈX\_X]XÚÝ\ÝÛQ]J
^Ý\Ë˜Ý\ÝÛQ]O]X\Þ[˜È[œÝ[XÚØYÙJŠ^Û]ÏRËœ™\ÛÛ™J‹œXÚØYÙQœË™Ù]™X[]

K‹œ™Yš^]
KO]\Ë˜Ý\ÝÛQ]KœÝÜ™K™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆOˆH‰‰ŠOX]ØZ]	
ŠK›[šÕ\OOOH’T‘‰‰\Ë˜Ý\ÝÛQ]KœÝÜ™KœÙ]
›ØØ]Ü’\ÚJJKZ‹š\ÔXÚØYÙPÛÛ\]X›J\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]Ý\ÜY\˜Ú]XÝ\™\Ê
JJ\™]\›žÜXÚØYÙSØØ][ÛŽ›[Z[™\]Y\Ý›[NÛ][™]ÈX\Ï[™]ÈÙ]Û‹š\Ê‹œÝš[™ÚYžRY[

J_‹œÙ]
‹œÝš[™ÚYžRY[

Kœ™Y™\™[˜ÙJNÛ]]ÚYŠ‹š\Õš\X[ØØ]ÜŠ
J^ÙZ‹™]š\X[^™SØØ]ÜŠ
NÙ›ÜŠ]HÙˆœY\‘\[™[˜ÚY\Ë˜[Y\Ê
J[‹œÙ]
‹œÝš[™ÚYžRY[
JK[
KË˜Y
‹œÝš[™ÚYžRY[
JJ_[]^ÜXÚØYÙSØØ][ÛŽ˜	Ù™K™œ›ÛTÜX›T]
Ê_KØXÚØYÙQ\[™[˜ÚY\Î›‹XÚØYÙTY\œÎ˜Ë[šÕ\N›[šÕ\K\ØØ\™œ›ÛSÛÚÝ\œ‹™\ØØ\™œ›ÛSÛÚÝ\ÏÈL_NÝ\Ë›ØØ[ÝÜ™KœÙ]
›ØØ]Ü’\ÚÜÙÎÝ\ÝÛTXÚØYÙQ]N˜K\[™[˜ÞSY]N\Ë›ÜËœ›Ú™XÝ™Ù]\[™[˜ÞSY]J™\œÚ[ÛŠKœ›ÙNœJNÛ]\‹˜ÚXÚÜÝ[OÜ‹˜ÚXÚÜÝ[KœÝXœÝš[™Ê‹˜ÚXÚÜÝ[Kš[™^ÙŠ‹ÈŠJÌJN›[Ü™]\›ˆ\Ëœ™X[ØØ]ÜÚXÚÜÝ[\ËœÙ]
‹›ØØ]Ü’\Ú
KÜXÚØYÙSØØ][ÛŽœËZ[™\]Y\Ý›[_X\Þ[˜È]XÚ[\›˜[\[™[˜ÚY\ÊŠ^Û]Ï]\Ë›ØØ[ÝÜ™K™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝY[™›Ü›X][ÛˆØš™XÝÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÙ›ÜŠ]ØK—[ÙˆŠ^Û]ÏZ‹˜\™RY[Ñ\]X[
KŠOÛ‹œ™Y™\™[˜ÙN–Ú‹œÝš[™ÚYžRY[
ŠK‹œ™Y™\™[˜ÙWNÜËœœ›ÙKœXÚØYÙQ\[™[˜ÚY\ËœÙ]
‹œÝš[™ÚYžRY[
JKÊ__X\Þ[˜È]XÚ^\›˜[\[™[ÊŠ^Ý›ÝÈ™]È\œ›ÜŠ‘^\›˜[\[™[˜ÚY\È]™[‰Ý™Y[ˆ[\[Y[Y›ÜˆH›ÙK[[Ù[\È[šÙ\ˆŠ_X\Þ[˜Èš[˜[^™R[œÝ[

^ÚYŠ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOH››ÙK[[Ù[\ÈŠ\™]\›ŽÛ][™]È[ÊØ˜\ÙQœÎ›™]ÈJÛX^Ü[‘š[\ÎŽ™XYÛ›P\˜Ú]™\ÎˆLJ_JKX]ØZ]ÕÊ\Ë›ÜËœ›Ú™XÝ
KÏ]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››S[ÙHŠNÊOO[[ÈOO\‹››S[ÙJI‰Š\Ë›ÜËœ›Ú™XÝœÝÜ™YZ[Ý]K˜ÛX\Š
K^ÛØØ]Ü“X\›™]ÈX\š[”Þ[[[šÜÎ›™]ÈX\ØØ][Û•™YN›™]ÈX\›S[ÙNœË][YS\ÎŒJNÛ]O[™]ÈX\
\Ë›ÜËœ›Ú™XÝÛÜšÜÜXÙ\Ë›X\
ÏOžÛ]]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››RÚ\Ý[™Ó[Z]ÈŠNÝž^ÞQÙK˜[Y]Q[[JË›X[šY™\Ýš[œÝ[ÛÛ™šYÏËšÚ\Ý[™Ó[Z]ÏÏÞ
_XØ]ÚÛ]OZ‹œ™]UÛÜšÜÜXÙJ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹ÊNÝ\Ë›ÜËœ™\Üœ™\ÜØ\›š[™ÊMË	Ò_Nˆ[˜[Y	Ú[œÝ[ÛÛ™šYËšÚ\Ý[™Ó[Z]ÉÈ˜[YKˆ^XÝYÛ™HÙˆ	ÓØš™XÝ˜[Y\Ê
Kš›Ú[Š‹Š_K\Ú[™ÈY˜][ˆ‰ÞH˜
_\™]\›–ÔËœ™[]]™PÝÙ_JJK[™]ÈX\
\Ë›ÜËœ›Ú™XÝÛÜšÜÜXÙ\Ë›X\
ÏOžÛ]]\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››TÙ[”™Y™\™[˜Ù\ÈŠNÜ™]\›ˆTË›X[šY™\Ýš[œÝ[ÛÛ™šYÏËœÙ[”™Y™\™[˜Ù\ÏÏÞÔËœ™[]]™PÝÙ_JJKÏ^Õ‘T”ÒSÓ”ÎžÜÝŒ_KÜ]™[žÛ˜[YN›[™Y™\™[˜ÙN›[KÙ]ØØ]ÜŽŠË
OO\œ˜^Kš\Ð\œ˜^J
OÞÛ˜[YNžÌK™Y™\™[˜ÙNžÌW_NžÛ˜[YN”Ë™Y™\™[˜ÙNžKÙ]\[™[˜ÞU™YT›ÛÝÎŠ
OO\Ë›ÜËœ›Ú™XÝÛÜšÜÜXÙ\Ë›X\
ÏOžÛ]TË˜[˜ÚÜ™YØØ]ÜŽÜ™]\›žÛ˜[YNš‹œÝš[™ÚYžRY[

K™Y™\™[˜ÙNžœ™Y™\™[˜Ù__JKÙ]XÚØYÙR[™›Ü›X][ÛŽ”ÏOžÛ]TËœ™Y™\™[˜ÙOOO[[Ý\Ë›ÜËœ›Ú™XÝÜ]™[ÛÜšÜÜXÙK˜[˜ÚÜ™YØØ]ÜŽš‹›XZÙSØØ]ÜŠ‹œ\œÙRY[
Ë›˜[YJKËœ™Y™\™[˜ÙJKO]\Ë›ØØ[ÝÜ™K™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙH™Y™\™[˜ÙHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÜ™]\›ˆKœœ›Ù_Kš[™XÚØYÙSØØ]ÜŽ”ÏOžÛ]]\Ë›ÜËœ›Ú™XÝžUÛÜšÜÜXÙPžPÝÙ
™KÔÜX›T]
ÊJNÚYŠOO[[
^Û]O^˜[˜ÚÜ™YØØ]ÜŽÜ™]\›žÛ˜[YNš‹œÝš[™ÚYžRY[
JK™Y™\™[˜ÙN’Kœ™Y™\™[˜Ù__]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[š[\[Y[YŠ_K™\ÛÛ™UÕ[œ]X[YšYYŠ
OOžÝ›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[š[\[Y[YŠ_K™\ÛÛ™U[œ]X[YšYYŠ
OOžÝ›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[š[\[Y[YŠ_K™\ÛÛ™T™\]Y\ÝŠ
OOžÝ›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[š[\[Y[YŠ_K™\ÛÛ™Uš\X[”ÏO™™K™œ›ÛTÜX›T]
[Ëœ™\ÛÛ™Uš\X[
™KÔÜX›T]
ÊJJ_KÝ™YN™‹\œ›ÜœÎœ™\Ù\™TÞ[[[šÜÔ™\]Z\™YšOZÑ
ËÜœYžQœÎˆLK˜[Y]Q^\›˜[ÛÙ[šÜÎˆLÚ\Ý[™Ó[Z]ÐžPÝÙ˜K›Ú™XÝ\Ë›ÜËœ›Ú™XÝÙ[”™Y™\™[˜Ù\ÐžPÝÙ›ŸJNÚYŠYŠ^Ù›ÜŠ]ÛY\ÜØYÙS˜[YN”Ë^ž[Ùˆ
]\Ë›ÜËœ™\Üœ™\Ü\œ›ÜŠË
NÜ™]\›Ÿ[]ORUÊŠNØ]ØZ]Ì
‹KØ˜\ÙQœÎ›Ú™XÝ\Ë›ÜËœ›Ú™XÝ™\Ü\Ë›ÜËœ™\Ü™X[ØØ]ÜÚXÚÜÝ[\Î\Ëœ™X[ØØ]ÜÚXÚÜÝ[\ËØYX[šY™\Ý˜\Þ[˜ÈÏOžÛ]Z‹œ\œÙSØØ]ÜŠÊKO]\Ë›ØØ[ÝÜ™K™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÛÝÈ^\ÝŠNÜ™]\›ˆK˜Ý\ÝÛTXÚØYÙQ]K›X[šY™\Ý_JNÛ]ÏV×NÙ›ÜŠ]ÔË[ÙˆK™[šY\Ê
J^ÚYŠLYJÊJXÛÛ[YNÛ]OZ‹œ\œÙSØØ]ÜŠÊK]\Ë›ØØ[ÝÜ™K™Ù]
K›ØØ]Ü’\Ú
NÚYŠ\[ÙˆˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÛÝÈ^\ÝŠNÚYŠ\Ë›ÜËœ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠœÙÊJXÛÛ[YNÛ]ÏYK™^˜XÝZ[™\]Y\Ý
œÙË˜Ý\ÝÛTXÚØYÙQ]K™\[™[˜ÞSY]KØÛÛ™šYÝ\˜][ÛŽ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJNÓÉ‰Ëœ\Ú
ØZ[ØØ][ÛœÎž›ØØ][ÛœËØØ]ÜŽ’KZ[™\]Y\Ý“ßJ_\™]\›ˆ	‰\Ë›ÜËœ™\Üœ™\ÜØ\›š[™ÊÌ‹H\XØ][Ûˆ\Ù\ÈÜ[È[™]	ÜÈÚH	ÜKœ™]J\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹‹K\™\Ù\™K\Þ[[[šÜÈ‹K•\KÓÑJ_H›ÙHÜ[Ûˆ\È™\]Z\™Y›Üˆ][˜Ú[™È]
KØÝ\ÝÛQ]N\Ë˜Ý\ÝÛQ]K™XÛÜ™Îß__NØ\Þ[˜È[˜Ý[Ûˆ	
K
^Û]X]ØZ]]žQš[™
œ™Yš^]Ø˜\ÙQœÎœXÚØYÙQœßJOÏÛ™]È]Ï[™]ÈÙ]
Èœ™Z[œÝ[‹š[œÝ[‹œÜÝ[œÝ[—JNÙ›ÜŠ]HÙˆ‹œØÜš\ËšÙ^\Ê
J\Ëš\ÊJ_‹œØÜš\Ë™[]JJNÜ™]\›žÛX[šY™\ÝžØš[Žœ‹˜š[‹ØÜš\Îœ‹œØÜš\ßKZ\ØÎžÚ\Ðš[™[™ÑÞ\™Kš\Ðš[™[™ÑÞ\

___X\Þ[˜È[˜Ý[ÛˆL
K‹ËÚ[œÝ[Ú[™ÙYžU\Ù\Ž˜_J^Û]HˆŽÛŠÏXÈØ\›š[™Îˆ\Èš[H\È]]ÛX]XØ[HÙ[™\˜]Yˆ™[[Ýš[™È]\Èš[™K]Ú[˜ŠÏXÈØ]\ÙH[Ý\ˆ›ÙWÛ[Ù[\È[œÝ[][ÛˆÈ™XÛÛYH[˜[Y]Y‚˜ŠÏX˜ŠÏX×ÛY]Y]N‚˜ŠÏX™\œÚ[ÛŽˆ	ØŒY_B˜ŠÏX›S[ÙNˆ	ÜË˜[Y_B˜Û]ÏP\œ˜^K™œ›ÛJšÙ^\Ê
JKœÛÜ

KZ‹œÝš[™ÚYžSØØ]ÜŠKÜ]™[ÛÜšÜÜXÙK˜[˜ÚÜ™YØØ]ÜŠNÙ›ÜŠ]HÙˆÊ^Û]Ï]™Ù]
JNÛŠÏX˜ŠÏX	Ò”ÓÓ‹œÝš[™ÚYžJJ_N‚˜ŠÏXØØ][ÛœÎ‚˜Ù›ÜŠ]ÈÙˆË›ØØ][ÛœÊ^Û]RË˜ÛÛZ[œÊK˜ÝÙÊNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH]È™HÚ][ˆH›Ú™XÝ
	ÔßJX
NÛŠÏXH	Ò”ÓÓ‹œÝš[™ÚYžJ
_B˜ZYŠË˜[X\Ù\Ë›[™ÝŒ
^ÛŠÏX[X\Ù\Î‚˜Ù›ÜŠ]ÈÙˆË˜[X\Ù\Ê[ŠÏXH	Ò”ÓÓ‹œÝš[™ÚYžJÊ_B˜ZYŠOOOY‰‰œ‹œÚ^™OŒ
^ÛŠÏXš[Ž‚˜Ù›ÜŠ]ÔË[ÙˆŠ^Û]ORË˜ÛÛZ[œÊK˜ÝÙÊNÚYŠOOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH]È™HÚ][ˆH›Ú™XÝ
	ÔßJX
NÛŠÏX	Ò”ÓÓ‹œÝš[™ÚYžJJ_N‚˜Ù›ÜŠ]Õ×[Ùˆ
^Û]ORËœ™[]]™JËš›Ú[ŠËšJKÊNÛŠÏX	Ò”ÓÓ‹œÝš[™ÚYžJ
_Nˆ	Ò”ÓÓ‹œÝš[™ÚYžJJ_B˜___[]YK˜ÝÙRËš›Ú[ŠšKYJNØI‰˜]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ
K]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJ‹Ø]]ÛX]XÓ™]Û[™\ÎˆLJ_X\Þ[˜È[˜Ý[ÛˆÕÊKÝ[œ›Û[X\Ù\ÎHL_O^ßJ^Û]YK˜ÝÙÏRËš›Ú[Š‹šKYJKNÝž^ØOX]ØZ]KœÝ]›ÛZ\ÙJÊ_XØ]ÚßZYŠXJ\™]\›ˆ[Û]XÜÊ]ØZ]Kœ™XYš[T›ÛZ\ÙJË]ŽŠJNÚYŠ‹—×ÛY]Y]K™\œÚ[Û˜ŒYJ\™]\›ˆ[Û]Ï[‹—×ÛY]Y]K››S[Ù_˜Û\ÜÚXÈ‹[™]ÈX\[™]ÈX\Ù[]H‹—×ÛY]Y]NÙ›ÜŠ]ÚW[ÙˆØš™XÝ™[šY\ÊŠJ^Û]ÏQK›ØØ][ÛœË›X\
O’Ëš›Ú[Š‹
JKÏQK˜š[ŽÚYŠÊY›ÜŠ]ÞW[ÙˆØš™XÝ™[šY\ÊÊJ^Û]RËš›Ú[Š‹™KÔÜX›T]

JKÏQÙK™Ù]X\Ú]Y˜][

NÙ›ÜŠ]ÕKW[ÙˆØš™XÝ™[šY\ÊJJSËœÙ]
K™KÔÜX›T]
ÕšKWKš›Ú[ŠËœÙ\
JJ_ZYŠ‹œÙ]
Ý\™Ù]™Ý[šÕ\Nˆ’T‘‹ØØ][ÛœÎË[X\Ù\Î‘K˜[X\Ù\ß×_JK	‰‘K˜[X\Ù\ÊY›ÜŠ]ÙˆK˜[X\Ù\Ê^Û]ÜØÛÜN’K˜[YN•OZ‹œ\œÙSØØ]ÜŠ
KÏZ‹›XZÙSØØ]ÜŠ‹›XZÙRY[
K
K
KOZ‹œÝš[™ÚYžSØØ]ÜŠÊNÙ‹œÙ]
KÝ\™Ù]™Ý[šÕ\Nˆ’T‘‹ØØ][ÛœÎË[X\Ù\Î–×_J__\™]\›žÛØØ]Ü“X\™‹š[”Þ[[[šÜÎœØØ][Û•™YNžYJ‹ÜÚÚ\™Yš^™K˜ÝÙJK›S[ÙN˜Ë][YS\Î˜K›][YS\ß_]˜\ˆ]ÏX\Þ[˜ÊK
OOžÚYŠKœÜ]
ËœÙ\
Kš[™^ÙŠšJO
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆžZ[™ÈÈ™[[Ý™H\ˆ]Ù\Û‰ÝÛÛZ[ˆ›ÙWÛ[Ù[\Îˆ	Ù_X
NÝž^Û]ŽÚYŠ]š[›™\“ÛÜ	‰ŠX]ØZ]K›Ý]›ÛZ\ÙJJK\‹š\Ñ\™XÝÜžJ
I‰ˆ\‹š\ÔÞ[X›ÛXÓ[šÊ
_‹š\ÔÞ[X›ÛXÓ[šÊ
I‰ˆ]š\ÕÛÜšÜÜXÙQ\ŠJ^Ø]ØZ]K[›[šÔ›ÛZ\ÙJJNÜ™]\›Ÿ[]ÏX]ØZ]Kœ™XY\”›ÛZ\ÙJKÝÚ]š[U\\ÎˆLJNÙ›ÜŠ]ˆÙˆÊ^Û]ÏRËš›Ú[ŠK‹›˜[YJNÛ‹š\Ñ\™XÝÜžJ
OÊ‹›˜[YHOOTš_	‰š[›™\“ÛÜ
I‰˜]ØZ]]ÊËÚ[›™\“ÛÜˆLÛÛ[ÓÛ›NˆL_JN˜]ØZ]K[›[šÔ›ÛZ\ÙJÊ_[]OH]š[›™\“ÛÜ	‰š\ÕÛÜšÜÜXÙQ\‰‰œËš\ÔÞ[X›ÛXÓ[šÊ
NÈ]˜ÛÛ[ÓÛ›I‰ˆXI‰˜]ØZ]Kœ›Y\”›ÛZ\ÙJJ_XØ]Ú
Š^ÚYŠ‹˜ÛÙHOOH‘S“ÑS•‰‰œ‹˜ÛÙHOOH‘S“ÕSTHŠ]›ÝÈŸ_KŒYOM‘JKÜÚÚ\™Yš^JOOžÛ]RË˜ÛÛZ[œÊJNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆÜš][™È][\™]™[YÈ	Ù_HÚXÚ\ÈÝ]ÚYH›Ú™XÝ›ÛÝˆ	ÝX
NÛ]Ï\‹œÜ]
ËœÙ\
K™š[\ŠOœOOHˆŠKO\Ëš[™^ÙŠšJK\ËœÛXÙJJKš›Ú[ŠËœÙ\
KÏRËš›Ú[ŠŠK\ËœÛXÙJJNÜ™]\›žÛØØ][Û”›ÛÝ˜ËÙYÛY[Î™Ÿ_KYOJKÜÚÚ\™Yš^JOOžÛ][™]ÈX\ÚYŠOOO[[
\™]\›ˆŽÛ]ÏJ
OOŠØÚ[™[Ž›™]ÈX\[šÕ\Nˆ’T‘ŸJNÙ›ÜŠ]ØK—[ÙˆK™[šY\Ê
J^ÚYŠ‹›[šÕ\OOOH”ÓÑ•‰‰’Ë˜ÛÛZ[œÊ‹\™Ù]
HOO[[
^Û]QÙK™Ù]˜XÝÜžUÚ]Y˜][
‹‹\™Ù]ÊNÙ‹›ØØ]ÜXK‹›[šÕ\O[‹›[šÕ\_Y›ÜŠ]ÈÙˆ‹›ØØ][ÛœÊ^Û]ÛØØ][Û”›ÛÝ™‹ÙYÛY[ÎœOU‘ŠËÜÚÚ\™Yš^JKQÙK™Ù]˜XÝÜžUÚ]Y˜][
‹‹ÊNÙ›ÜŠ]OLÑO›[™ÝÊÊÑJ^Û]Ï\ÑWNÚYŠÈOOH‹ˆŠ^Û]ÏQÙK™Ù]˜XÝÜžUÚ]Y˜][
˜Ú[™[‹ËÊNÚ˜Ú[™[‹œÙ]
ËÊKTßQOOO\›[™ÝLI‰Š›ØØ]ÜXK›[šÕ\O[‹›[šÕ\J___\™]\›ˆŸKÕÏX\Þ[˜ÊKŠOOžÚYŠ›ØÙ\ÜËœ]›Ü›OOOHÚ[ŒÌˆ‰‰œOOHš[˜Ý[ÛœÈŠ^Û]ÎÝž^ÜÏX]ØZ]K›Ý]›ÛZ\ÙJJ_XØ]ÚßZYŠ\ßËš\Ñ\™XÝÜžJ
J^Ø]ØZ]KœÞ[[[šÔ›ÛZ\ÙJKš[˜Ý[ÛˆŠNÜ™]\›Ÿ_X]ØZ]KœÞ[[[šÔ›ÛZ\ÙJËœ™[]]™JË™\›˜[YJ
KJK
_NØ\Þ[˜È[˜Ý[ÛˆÌYJKŠ^Û]ÏRËš›Ú[ŠK	Õ•Ë™Y˜][œ˜[™ÛPž]\ÊMŠKÔÝš[™Êš^Š_K\
NÝž^Ø]ØZ]KÜš]Qš[T›ÛZ\ÙJËŠNÝž^Ø]ØZ]K›[šÔ›ÛZ\ÙJË
_XØ]Úß_Yš[˜[^Ø]ØZ]K[›[šÔ›ÛZ\ÙJÊ__X\Þ[˜È[˜Ý[Ûˆ
ÜÜ˜Ô]™KÝ][žNœ‹ÛØ˜[\™[šÜÔÝÜ™NœË˜\ÙQœÎ˜K›S[ÙN›ŸJ^ÚYŠ‹šÚ[™OOH™š[HŠ^ÚYŠ‹˜[YOOOHš\™[šÜËYÛØ˜[‰‰œÉ‰œ‹™YÙ\Ý
^Û]RËš›Ú[ŠË‹™YÙ\ÝœÝXœÝš[™ÊŠK	Ü‹™YÙ\ÝœÝXœÝš[™ÊŠ_K™]
KÝž^Û]X]ØZ]KœÝ]›ÛZ\ÙJŠNÚYŠ	‰Š\‹›][YS\ß›][YS\Ïœ‹›][YS\ß›][YS\Ï‹›][YS\ËV
JZYŠ]ØZ]‹˜ÚXÚÜÝ[Qš[J‹Ø˜\ÙQœÎ›K[ÛÜš]NˆœÚLHŸJHOO\‹™YÙ\Ý
^Û]ÏRËš›Ú[ŠË	Õ•Ë™Y˜][œ˜[™ÛPž]\ÊMŠKÔÝš[™Êš^Š_K\
NØ]ØZ]Kœ™[˜[YT›ÛZ\ÙJ‹ÊNÛ]ÏX]ØZ]Kœ™XYš[T›ÛZ\ÙJJNØ]ØZ]KÜš]Qš[T›ÛZ\ÙJËÊNÝž^Ø]ØZ]K›[šÔ›ÛZ\ÙJËŠK‹›][YS\Ï[™]È]J
K™Ù][YJ
K]ØZ]K[›[šÔ›ÛZ\ÙJÊ_XØ]Úß_Y[ÙH‹›][YS\ß
‹›][YS\ÏSX]˜ÙZ[
›][YS\ÊJNØ]ØZ]K›[šÔ›ÛZ\ÙJ‹
KHLXØ]ÚÜHL_ZYŠ\
^Û]X]ØZ]Kœ™XYš[T›ÛZ\ÙJJNØ]ØZ]ÌYJË‹
K‹›][YS\Ï[™]È]J
K™Ù][YJ
NÝž^Ø]ØZ]K›[šÔ›ÛZ\ÙJ‹
_XØ]Ú
J^ÑI‰‘K˜ÛÙI‰‘K˜ÛÙOOH‘VUˆ‰‰Š‹˜[YOHš\™[šÜË[ØØ[‹]ØZ]K˜ÛÜQš[T›ÛZ\ÙJK
J___Y[ÙH]ØZ]K˜ÛÜQš[T›ÛZ\ÙJK
NÛ]Ï\‹›[ÙILLNØÈOOMŒ	‰˜]ØZ]K˜Ú[Ù›ÛZ\ÙJÊ__]˜\ˆŒX\Þ[˜ÊKØ˜\ÙQœÎœ‹ÛØ˜[\™[šÜÔÝÜ™NœË›S[ÙN˜KÚ[™ÝÜÓ[šÕ\N›‹XÚØYÙPÚXÚÜÝ[N˜ßJOOžØ]ØZ]K›ZÙ\”›ÛZ\ÙJKÜ™XÝ\œÚ]™NˆLJNÛ]X\Þ[˜ÊO]™Ý
OOžÛ]ÏRËš›Ú[ŠJKÏX]ØZ]‹œ™XY\”›ÛZ\ÙJËÝÚ]š[U\\ÎˆLJK[™]ÈX\Ù›ÜŠ]HÙˆÊ^Û]RËš›Ú[ŠKK›˜[YJKËORËš›Ú[ŠËK›˜[YJNÚYŠKš\Ñš[J
J^ÚYŠÏ^ÚÚ[™ˆ™š[H‹[ÙNŠ]ØZ]‹›Ý]›ÛZ\ÙJJJK›[Ù_KK˜[YOOOHš\™[šÜËYÛØ˜[Š^Û]OX]ØZ]‹˜ÚXÚÜÝ[Qš[JKØ˜\ÙQœÎœ‹[ÛÜš]NˆœÚLHŸJNÓË™YÙ\ÝV__Y[ÙHYŠKš\Ñ\™XÝÜžJ
JSÏ^ÚÚ[™ˆ™\™XÝÜžHŸNÙ[ÙHYŠKš\ÔÞ[X›ÛXÓ[šÊ
JSÏ^ÚÚ[™ˆœÞ[[[šÈ‹Þ[[[šÕÎ˜]ØZ]‹œ™XY[šÔ›ÛZ\ÙJJ_NÙ[ÙH›ÝÈ™]È\œ›ÜŠ[œÝ\ÜYš[H\H
š[Nˆ	Õ_K[ÙNˆÉØ]ØZ]‹œÝ]Þ[˜ÊJK›[ÙKÔÝš[™Ê
KœYÝ\
‹ŒŠ_JX
NÚYŠœÙ]
ÊKKš\Ñ\™XÝÜžJ
I‰•OOTšJ^Û]OX]ØZ]Š
NÙ›ÜŠ]ÝKYW[ÙˆJ^œÙ]
KYJ__\™]\›ˆKÚYŠK˜[YOOOHš\™[šÜËYÛØ˜[‰‰œÉ‰˜Ê^Û]ORËš›Ú[ŠËËœÝXœÝš[™ÊŠK	ØËœÝXœÝš[™ÊŠ_KšœÛÛ˜
NÝž^Ü[™]ÈX\
Øš™XÝ™[šY\Ê”ÓÓ‹œ\œÙJ]ØZ]Kœ™XYš[T›ÛZ\ÙJK]ŽŠJJJ_XØ]ÚÜX]ØZ]Š
__Y[ÙHX]ØZ]Š
NÛ]HLNÙ›ÜŠ]ÑK×[Ùˆ
^Û]ÏRËš›Ú[ŠJKRËš›Ú[ŠKJNÚYŠËšÚ[™OOH™\™XÝÜžHŠX]ØZ]K›ZÙ\”›ÛZ\ÙJÜ™XÝ\œÚ]™NˆLJNÙ[ÙHYŠËšÚ[™OOH™š[HŠ^Û]OPË›][YS\ÎØ]ØZ]
ÜÜ˜Ô]”ËÝ]ž[žNË›S[ÙN˜K˜\ÙQœÎœ‹ÛØ˜[\™[šÜÔÝÜ™NœßJKË›][YS\ÈOORI‰ŠHL
_Y[ÙHËšÚ[™OOHœÞ[[[šÈ‰‰˜]ØZ]ÕÊËœ™\ÛÛ™JË™\›˜[YJ
KËœÞ[[[šÕÊKŠ_ZYŠK˜[YOOOHš\™[šÜËYÛØ˜[‰‰œÉ‰š	‰˜Ê^Û]ORËš›Ú[ŠËËœÝXœÝš[™ÊŠK	ØËœÝXœÝš[™ÊŠ_KšœÛÛ˜
NØ]ØZ]Kœ™[[Ý™T›ÛZ\ÙJJK]ØZ]ÌYJËKY™™\‹™œ›ÛJ”ÓÓ‹œÝš[™ÚYžJØš™XÝ™œ›ÛQ[šY\Ê
JJJ__NÙ[˜Ý[ÛˆŒ
K‹Ê^Û]O[™]ÈX\[™]ÈX\Ï[™]ÈX\HLKJKËË
OOžÛ]OHLRËš›Ú[ŠJKÏ[™]ÈÙ]ÚYŠOOOTš_KœÝ\ÕÚ]
ŠJ^Û]NÝž^ÖO[KœÝ]Þ[˜Ê
_XØ]ÚßROHHVKOÖK›][YS\ÏœÊHLÏ[™]ÈÙ]
Kœ™XY\”Þ[˜Ê
JJN“Ï[™]ÈÙ]
Ë˜Ú[™[‹™Ù]
JK˜Ú[™[‹šÙ^\Ê
JN™HLÛ]O]™Ù]

NÚYŠJ^Û]YORËš›Ú[ŠšKÑŠKYNÝž^ÝYO[KœÝ]Þ[˜ÊYJ_XØ]ÚßZYŠ]YJYHLÙ[ÙHYŠYK›][YS\ÏœŠ^ÙHLÛ]YO[™]ÈÙ]
Kœ™XY\”Þ[˜ÊYJJKO[™]ÈX\Û‹œÙ]
JNÙ›ÜŠ]ÐYKÙW[ÙˆJXYKš\ÊYJI‰™KœÙ]
YKÙJ_Y[ÙH‹œÙ]
J__Y[ÙHO^š\ÊJNÛ]OPË˜Ú[™[‹™Ù]
JNÚYŠJ^Û]Û[šÕ\N–KØØ]ÜŽ_OUKYO^ØÚ[™[Ž›™]ÈX\[šÕ\N–KØØ]ÜŽ_NÚYŠË˜Ú[™[‹œÙ]
KYJKJ^Û]YOQÙK™Ù]Ù]Ú]Y˜][
ËJNÝYK˜Y

KËœÙ]
KYJ_Y›ÜŠ]YHÙˆK˜Ú[™[‹šÙ^\Ê
J\
YKKYKÊ_Y[ÙHK›ØØ]Ü‰‰œËœÝÜ™YZ[Ý]K™[]J‹œ\œÙSØØ]ÜŠK›ØØ]ÜŠK›ØØ]Ü’\Ú
_NÙ›ÜŠ]ÚW[ÙˆJ^Û]Û[šÕ\NËØØ]ÜŽ”ßOQK^ØÚ[™[Ž›™]ÈX\[šÕ\NËØØ]ÜŽ”ßNÚYŠKœÙ]

KÊ^Û]OQÙK™Ù]Ù]Ú]Y˜][
ËK›ØØ]ÜŠNÒK˜Y

KËœÙ]
K›ØØ]Ü‹J_QK˜Ú[™[‹š\ÊšJI‰œ
šKK™]ÈÙ]
_\™]\›žÛØØ][Û•™YN˜Kš[”Þ[[[šÜÎ›‹ØØ]Ü“ØØ][ÛœÎ˜Ë[œÝ[Ú[™ÙYžU\Ù\Ž™Ÿ_Y[˜Ý[ÛˆLYJJ^Û]Z‹œ\œÙQ\ØÜš\ÜŠJNÜ™]\›ˆ‹š\Õš\X[\ØÜš\ÜŠ
I‰ŠZ‹™]š\X[^™Q\ØÜš\ÜŠ
JKœ˜[™ÙKœÝ\ÕÚ]
›[šÎˆŠ_X\Þ[˜È[˜Ý[ÛˆL
K‹ÛØYX[šY™\ÝœßJ^Û]O[™]ÈX\Ù›ÜŠ]Ù‹ÛØØ][ÛœÎœW[ÙˆJ^Û]TLYJŠOÛ[˜]ØZ]Ê‹ÌJKO[™]ÈX\ÚYŠ
Y›ÜŠ]ÐË×[Ùˆ˜š[Š^Û]RËš›Ú[ŠÌKÊNÔÈOOHˆ‰‰›K™^\ÝÔÞ[˜Ê
I‰‘KœÙ]
ËÊ_XKœÙ]
‹J_[][™]ÈX\ÏJ‹
OOžÛ]O[™]ÈX\ÏRË˜ÛÛZ[œÊ‹ŠNÚYŠ›ØØ]Ü‰‰ÈOO[[
^Û]ÏXK™Ù]
›ØØ]ÜŠNÙ›ÜŠ]ÞW[ÙˆÊ^Û]RËš›Ú[Š‹™KÔÜX›T]
JJNÑKœÙ]

_Y›ÜŠ]ÞW[Ùˆ˜Ú[™[Š^Û]RËš›Ú[Š‹
KÏXÊJNÓËœÚ^™OŒ	‰›‹œÙ]
‹™]ÈX\
Ë‹‹›‹™Ù]
Š_™]ÈX\‹‹“×JJ__Y[ÙH›ÜŠ]ÔË[Ùˆ˜Ú[™[Š^Û]OXÊËš›Ú[Š‹ÊK
NÙ›ÜŠ]Õ×[ÙˆJQKœÙ]
Ê_\™]\›ˆ_NÙ›ÜŠ]Ù‹[Ùˆ
^Û]XÊ‹‹
NÚœÚ^™OŒ	‰›‹œÙ]
‹™]ÈX\
Ë‹‹›‹™Ù]
Š_™]ÈX\‹‹šJJ_\™]\›ˆŸ]˜\ˆŒYOJK
OOžÚYŠY_]
\™]\›ˆOOO]Û]Z‹œ\œÙSØØ]ÜŠJNÚ‹š\Õš\X[ØØ]ÜŠŠI‰ŠZ‹™]š\X[^™SØØ]ÜŠŠJNÛ]ÏZ‹œ\œÙSØØ]ÜŠ
NÜ™]\›ˆ‹š\Õš\X[ØØ]ÜŠÊI‰ŠÏZ‹™]š\X[^™SØØ]ÜŠÊJK‹˜\™SØØ]ÜœÑ\]X[
‹Ê_NÙ[˜Ý[Ûˆ•ÊJ^Ü™]\›ˆËš›Ú[ŠK™Ù]
™ÛØ˜[›Û\ˆŠKœÝÜ™HŠ_Y[˜Ý[ÛˆÌ
K
^Û]\ÏOžÛ]O\ËœÜ]
ËœÙ\
KXK›\Ý[™^ÙŠšJNÚYŠOXK›[™ÝLJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ]\ÈÝ]ÚYHÙˆ[žH›ÙWÛ[Ù[\ÈXÚØYÙH	ÜßX
NÜ™]\›ˆKœÛXÙJŠÊVÛŠÌWKœÝ\ÕÚ]
ŠOÌÎŒŠJKš›Ú[ŠËœÙ\
_NÙ›ÜŠ]ÈÙˆK˜[Y\Ê
JY›ÜŠ]ØK—[ÙˆÊ]š\ÊŠŠJI‰œË™[]JJ_X\Þ[˜È[˜Ý[ÛˆÌ
KØ˜\ÙQœÎœ‹›Ú™XÝœË™\Ü˜KØYX[šY™\Ý›‹™X[ØØ]ÜÚXÚÜÝ[\Î˜ßJ^Û]RËš›Ú[ŠË˜ÝÙšJKÛØØ][Û•™YNœš[”Þ[[[šÜÎšØØ]Ü“ØØ][ÛœÎ‘K[œÝ[Ú[™ÙYžU\Ù\ŽßO[Œ
K›ØØ][Û•™YKK˜š[”Þ[[[šÜËK›][YS\ËÊKÏ^YJÜÚÚ\™Yš^œË˜ÝÙJKV×KOX\Þ[˜ÊÜÜ˜Ñ\ŽÙKÝ\Ž‘YK[šÕ\N™ËÛØ˜[\™[šÜÔÝÜ™N”ÙK›S[ÙN™KÚ[™ÝÜÓ[šÕ\N›YKXÚØYÙPÚXÚÜÝ[N˜Ù_JOOžÛ]J\Þ[˜Ê
OOžÝž^ÙÏOOH”ÓÑ•Ê]ØZ]K›ZÙ\”›ÛZ\ÙJË™\›˜[YJYJKÜ™XÝ\œÚ]™NˆLJK]ØZ]ÕÊËœ™\ÛÛ™JÙJKYKYJJN˜]ØZ]Œ
YKÙKØ˜\ÙQœÎœ‹ÛØ˜[\™[šÜÔÝÜ™N”ÙK›S[ÙN™KÚ[™ÝÜÓ[šÕ\N›YKXÚØYÙPÚXÚÜÝ[N˜Ù_J_XØ]Ú
J^Ý›ÝÈK›Y\ÜØYÙOXÚ[H\œÚ\Ý[™È	ÐÙ_HOˆ	ÑY_H	ÑK›Y\ÜØYÙ_X_Yš[˜[^ÚYKXÚÊ
__JJ
K[Š

OOžœÜXÙJš[™^ÙŠ
KJJNÞœ\Ú

K›[™ÝŒYI‰˜]ØZ]›ÛZ\ÙKœ˜XÙJ
_KX\Þ[˜ÊÙKYKÊOOžÛ]ÙOJ\Þ[˜Ê
OOžÛ]™OX\Þ[˜ÊYKÙK
OOžÝž^Öš[›™\“ÛÜ]ØZ]K›ZÙ\”›ÛZ\ÙJÙKÜ™XÝ\œÚ]™NˆLJNÛ]OX]ØZ]Kœ™XY\”›ÛZ\ÙJYKÝÚ]š[U\\ÎˆLJNÙ›ÜŠ]YHÙˆJ^ÚYŠVš[›™\“ÛÜ	‰”YK›˜[YOOOUÑŠXÛÛ[YNÛ]]RËš›Ú[ŠYKYK›˜[YJKÏRËš›Ú[ŠÙKYK›˜[YJNÔYKš\Ñ\™XÝÜžJ
OÊYK›˜[YHOOTš_	‰–š[›™\“ÛÜ
I‰Š]ØZ]K›ZÙ\”›ÛZ\ÙJËÜ™XÝ\œÚ]™NˆLJK]ØZ]™J]ËË‹‹–[›™\“ÛÜˆLJJN™K˜[YOOOHš\™[šÜË[ØØ[ŸK˜[YOOOHš\™[šÜËYÛØ˜[Ø]ØZ]K›[šÔ›ÛZ\ÙJ]ÊN˜]ØZ]K˜ÛÜQš[T›ÛZ\ÙJ]ËYK™Y˜][˜ÛÛœÝ[ËÓÔQ’SWÑ’PÓÓ‘J__XØ]Ú
J^Ý›ÝÈš[›™\“ÛÜ
K›Y\ÜØYÙOXÚ[HÛÛš[™È	ÛY_HOˆ	ØÙ_H	ÑK›Y\ÜØYÙ_X
K_Yš[˜[^Öš[›™\“ÛÜYKXÚÊ
__NØ]ØZ]™JÙKYKÊ_JJ
K[Š

OOžœÜXÙJš[™^ÙŠÙJKJJNÞœ\Ú
ÙJK›[™ÝŒYI‰˜]ØZ]›ÛZ\ÙKœ˜XÙJ
_KÏX\Þ[˜ÊÙKYKÊOOžÚYŠÊY›ÜŠ]ÔÙK™W[ÙˆYK˜Ú[™[Š^Û]YOYË˜Ú[™[‹™Ù]
ÙJNØ]ØZ]ÊËš›Ú[ŠÙKÙJK™KYJ_Y[Ù^ÑYK˜Ú[™[‹š\ÊšJI‰˜]ØZ]]ÊËš›Ú[ŠÙKšJKØÛÛ[ÓÛ›NˆL_JNÛ]ÙORË˜˜\Ù[˜[YJÙJOOOTšI‰œš\ÊËš›Ú[ŠË™\›˜[YJÙJJJNØ]ØZ]]ÊÙKØÛÛ[ÓÛ›NÙOOOY‹\ÕÛÜšÜÜXÙQ\Ž”Ù_J__NÙ›ÜŠ]ÐÙKYW[Ùˆ
^Û]ÏTË™Ù]
ÙJNÙ›ÜŠ]ÔÙK™W[ÙˆYK˜Ú[™[Š^ÚYŠÙOOOH‹ˆŠXÛÛ[YNÛ]YOYÉ‰™Ë˜Ú[™[‹™Ù]
ÙJKÙORËš›Ú[ŠÙKÙJNØ]ØZ]ÊÙK™KYJ__[]OX\Þ[˜ÊÙKYKÊOOžÚYŠÊ^ÝŒYJYK›ØØ]Ü‹Ë›ØØ]ÜŠ_]ØZ]]ÊÙKØÛÛ[ÓÛ›N‘YK›[šÕ\OOOH’T‘ŸJNÙ›ÜŠ]ÔÙK™W[ÙˆYK˜Ú[™[Š^Û]YOYË˜Ú[™[‹™Ù]
ÙJNØ]ØZ]JËš›Ú[ŠÙKÙJK™KYJ__Y[Ù^ÑYK˜Ú[™[‹š\ÊšJI‰˜]ØZ]]ÊËš›Ú[ŠÙKšJKØÛÛ[ÓÛ›NˆLJNÛ]ÙORË˜˜\Ù[˜[YJÙJOOOTšI‰”Ëš\ÊËš›Ú[ŠË™\›˜[YJÙJJJNØ]ØZ]]ÊÙKØÛÛ[ÓÛ›N‘YK›[šÕ\OOOH’T‘‹\ÕÛÜšÜÜXÙQ\Ž”Ù_J__NÙ›ÜŠ]ÐÙKYW[ÙˆÊ^Û]Ï\™Ù]
ÙJNÙ›ÜŠ]ÔÙK™W[ÙˆYK˜Ú[™[Š^ÚYŠÙOOOH‹ˆŠXÛÛ[YNÛ]YOYÉ‰™Ë˜Ú[™[‹™Ù]
ÙJNØ]ØZ]JËš›Ú[ŠÙKÙJK™KYJ__[]O[™]ÈX\OV×NÙ›ÜŠ]ÐÙKYW[ÙˆJY›ÜŠ]ÈÙˆYJ^Û]ÛØØ][Û”›ÛÝ”ÙKÙYÛY[Î™_OU‘ŠËÜÚÚ\™Yš^œË˜ÝÙJKYOTË™Ù]
ÙJKÙOTÙNÚYŠYJ^Ù›ÜŠ]Ùˆ™JZYŠÙORËš›Ú[ŠÙK
KYO[YK˜Ú[™[‹™Ù]

K[YJXœ™XZÎÚYŠYJ^Û]]ŒYJYK›ØØ]Ü‹ÙJKO]™Ù]
YK›ØØ]ÜŠKYOQK\™Ù]]XÙKÏQK›[šÕ\NÚYŠ
VKš\ÊYJ_KœÙ]
YK]
NÙ[ÙHYŠYHOOZ]
^Û]Z‹œ\œÙSØØ]ÜŠYK›ØØ]ÜŠNÚ‹š\Õš\X[ØØ]ÜŠ
I‰ŠZ‹™]š\X[^™SØØ]ÜŠ
JKKœ\Ú
ÜÜ˜Ñ\Ž”YKÝ\Žš][šÕ\N—Ë™X[ØØ]Ü’\Ú›ØØ]Ü’\ÚJ____Y›ÜŠ]ÐÙKÛØØ][ÛœÎ‘Y_W[Ùˆ™[šY\Ê
JY›ÜŠ]ÈÙˆYJ^Û]ÛØØ][Û”›ÛÝ”ÙKÙYÛY[Î™_OU‘ŠËÜÚÚ\™Yš^œË˜ÝÙJKYO\™Ù]
ÙJKÙOTË™Ù]
ÙJKTÙKO]™Ù]
ÙJKYOZ‹œ\œÙSØØ]ÜŠÙJNÚ‹š\Õš\X[ØØ]ÜŠYJI‰ŠYOZ‹™]š\X[^™SØØ]ÜŠYJJNÛ]]TYK›ØØ]Ü’\ÚÏQK\™Ù]YÎÚYŠÏOO]
XÛÛ[YNÛ]™OQK›[šÕ\NÙ›ÜŠ]ÙHÙˆ™JXÙOXÙK˜Ú[™[‹™Ù]
ÙJNÚYŠ[YJ]Kœ\Ú
ÜÜ˜Ñ\Ž—ËÝ\Ž[šÕ\N“™K™X[ØØ]Ü’\Úš]JNÙ[ÙH›ÜŠ]ÙHÙˆ™JZYŠRËš›Ú[ŠÙJKYO[YK˜Ú[™[‹™Ù]
ÙJK[YJ^ÝKœ\Ú
ÜÜ˜Ñ\Ž—ËÝ\Ž[šÕ\N“™K™X[ØØ]Ü’\Úš]JNØœ™XZß_[]YO^[Ëœ›ÙÜ™\ÜÕšXPÛÝ[\ŠK›[™Ý
KYOXKœ™\Ü›ÙÜ™\ÜÊYJKYO\Ë˜ÛÛ™šYÝ\˜][Û‹™Ù]
››S[ÙHŠKO^Ý˜[YN˜Y_KYO\Ë˜ÛÛ™šYÝ\˜][Û‹™Ù]
Ú[“[šÕ\HŠNÝž^Û]ÙOYK˜[YOOOHš\™[šÜËYÛØ˜[Ø	Ò•ÊË˜ÛÛ™šYÝ\˜][ÛŠ_KÝŒX›[ÚYŠÙI‰ˆX]ØZ]K™^\ÝÔ›ÛZ\ÙJÙJJ^Ø]ØZ]K›ZÙ\œ›ÛZ\ÙJÙJNÙ›ÜŠ]ÏLÙÏMŽÙÊÊÊX]ØZ]K›ZÙ\”›ÛZ\ÙJËš›Ú[ŠÙKËÔÝš[™ÊMŠKœYÝ\
‹ŒŠJJ_Y›ÜŠ]ÈÙˆJJË›[šÕ\OOOH”ÓÑ•ŸVKš\ÊËœÜ˜Ñ\ŠJI‰ŠKœÙ]
ËœÜ˜Ñ\‹Ë™Ý\ŠK]ØZ]JË‹‹™ËÛØ˜[\™[šÜÔÝÜ™NÙK›S[ÙN™KÚ[™ÝÜÓ[šÕ\NYKXÚØYÙPÚXÚÜÝ[N˜Ë™Ù]
Ëœ™X[ØØ]Ü’\Ú
_[JJNØ]ØZ]›ÛZ\ÙK˜[

K›[™ÝLÙ›ÜŠ]ÈÙˆJ^Û]ÙOVK™Ù]
ËœÜ˜Ñ\ŠNÙË›[šÕ\HOOH”ÓÑ•‰‰™Ë™Ý\ˆOOTÙI‰˜]ØZ]
ÙKË™Ý\‹Û›S[ÙN™_J_X]ØZ]›ÛZ\ÙK˜[

K]ØZ]K›ZÙ\”›ÛZ\ÙJ‹Ü™XÝ\œÚ]™NˆLJKÌ
™]ÈÙ]
K›X\
ÏO™Ë™Ý\ŠJJNÛ]YOX]ØZ]L
ËË˜ÝÙÛØYX[šY™\Ý›ŸJNØ]ØZ]L
YKË˜ÝÙYJK]ØZ]L
ËYKKÚ[œÝ[Ú[™ÙYžU\Ù\ŽßJKYOOHš\™[šÜËYÛØ˜[‰‰™K˜[YOOHš\™[šÜË[ØØ[‰‰˜Kœ™\ÜØ\›š[™ÓÛ˜ÙJÍ‰Û›S[ÙIÈ\È™Y[ˆÝÛ™Ü˜YYÈ	Ú\™[šÜË[ØØ[	ÈYHÈÛØ˜[ØXÚH[™[œÝ[›Û\ˆ™Z[™ÈÛˆY™™\™[]šXÙ\ÈŠ_Yš[˜[^ÝYKœÝÜ

__X\Þ[˜È[˜Ý[ÛˆL
K‹Ê^Ù›ÜŠ]HÙˆKšÙ^\Ê
J^ÚYŠË˜ÛÛZ[œÊ‹JOOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^Ù\Yš[ˆÞ[[[šÈØØ][ÛˆÈ™H[œÚYH›Ú™XÝ\‹[œÝXY]Ø\È]	Ø_X
NÚYŠ]š\ÊJJ^Û]RËš›Ú[ŠKšKÑŠNØ]ØZ]Kœ™[[Ý™T›ÛZ\ÙJŠ__Y›ÜŠ]ØK—[Ùˆ
^ÚYŠË˜ÛÛZ[œÊ‹JOOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^Ù\Yš[ˆÞ[[[šÈØØ][ÛˆÈ™H[œÚYH›Ú™XÝ\‹[œÝXY]Ø\È]	Ø_X
NÛ]ÏRËš›Ú[ŠKšKÑŠKYK™Ù]
J_™]ÈX\Ø]ØZ]K›ZÙ\”›ÛZ\ÙJËÜ™XÝ\œÚ]™NˆLJNÙ›ÜŠ]Ùˆ‹šÙ^\Ê
J[‹š\Ê
_
]ØZ]Kœ™[[Ý™T›ÛZ\ÙJËš›Ú[ŠË
JK›ØÙ\ÜËœ]›Ü›OOOHÚ[ŒÌˆ‰‰˜]ØZ]Kœ™[[Ý™T›ÛZ\ÙJËš›Ú[ŠË	ÜK˜ÛY
JJNÙ›ÜŠ]Ü[ÙˆŠ^Û]OY‹™Ù]

KÏRËš›Ú[ŠË
NÑHOOZ	‰Š›ØÙ\ÜËœ]›Ü›OOOHÚ[ŒÌˆØ]ØZ]
ÌYK™Y˜][
J™K™œ›ÛTÜX›T]

K™K™œ›ÛTÜX›T]
ÊKØÜ™X]TÜÚš[NˆL_JNŠ]ØZ]Kœ™[[Ý™T›ÛZ\ÙJÊK]ØZ]ÕÊËÊKË˜ÛÛZ[œÊ‹]ØZ]Kœ™X[]›ÛZ\ÙJ
JHOO[[	‰˜]ØZ]K˜Ú[Ù›ÛZ\ÙJLÊJJ___\YJ
NÑ

NÜJ
NÝ˜\ˆÑXÛ\ÜÈ^[™È™ÞØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë›[ÙOH›ÛÜÙHŸ[XZÙR[œÝ[\ŠŠ^Ü™]\›ˆ™]È•ÊŠ__K•ÏXÛ\ÜÈ^[™È›^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë›[ÙOH›ÛÜÙHŸX\Þ[˜È˜[œÙ›Ü›TœÙ][™ÜÊŠ^Û]Ï[™]È[ÊØ˜\ÙQœÎ›™]ÈJÛX^Ü[‘š[\ÎŽ™XYÛ›P\˜Ú]™\ÎˆLJ_JKOYŒYJ‹\Ë›ÜËœ›Ú™XÝ˜ÝÙÊKÝ™YN›‹\œ›ÜœÎ˜ßOZÑ
KÜœYžQœÎˆLK›Ú™XÝ\Ë›ÜËœ›Ú™XÝJNÚYŠ[Š^Ù›ÜŠ]ÛY\ÜØYÙS˜[YNË^”ß[ÙˆÊ]\Ë›ÜËœ™\Üœ™\Ü\œ›ÜŠËÊNÜ™]\›Ÿ[][™]ÈX\Ü‹™˜[˜XÚÔÛÛYŽÛ]JËÊOOžÛ]Z‹œ\œÙSØØ]ÜŠË›ØØ]ÜŠKOZ‹œÝš[™ÚYžRY[

NÒOOOPÏÙ‹œÙ]
Ëœ™Y™\™[˜ÙJN™‹œÙ]
ËÒKœ™Y™\™[˜ÙWJ_KRËš›Ú[Š\Ë›ÜËœ›Ú™XÝ˜ÝÙ\‹››ÙS[Ù[\ÊKO[‹™Ù]

NÚYŠJ\[ÙˆOˆHŠJ^ÚYŠ\™Ù]š[ˆJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH›ÛÝ[˜Ý[ÛˆÚ[È™HH\™XÝÜžHŠNÙ›ÜŠ]ÈÙˆK™\“\Ý
^Û]ÏRËš›Ú[ŠÊK[‹™Ù]
ÊNÚYŠ\[ÙˆˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÚ[È]™H™Y[ˆ™YÚ\Ý\™YŠNÚYŠ\™Ù]š[ˆ
\
Ë
NÙ[ÙH›ÜŠ]HÙˆ™\“\Ý
^Û]RËš›Ú[ŠËJKÏ[‹™Ù]

NÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÝX˜Ú[È]™H™Y[ˆ™YÚ\Ý\™YŠNÚYŠ\™Ù]š[ˆÊ\
	ÐßKÉÒ_XÊNÙ[ÙH›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXYˆ[˜Ý[ÛˆÈ™HHXÚØYÙHŠ_____NÝ˜\ˆ^ÚÛÚÜÎžØÛX[‘ÛØ˜[\Y˜XÝÎ˜\Þ[˜ÈOOžÛ]R•ÊJNØ]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ
__KÛÛ™šYÝ\˜][ÛŽžÛ›RÚ\Ý[™Ó[Z]ÎžÙ\ØÜš\[ÛŽˆ”™]™[ÈXÚØYÙ\ÈÈ™HÚ\ÝY\ÝÜXÚYšXÈ]™[È‹\Nˆ”Õ’S‘È‹˜[Y\Î–ÈÛÜšÜÜXÙ\È‹™\[™[˜ÚY\È‹››Û™H—KY˜][ˆ››Û™HŸK›S[ÙNžÙ\ØÜš\[ÛŽˆ‘Yš[™\È[ˆÚXÚYX\Ý\™HX\›ˆ]\Ý\ÙH\™[šÜÈ[™Þ[[[šÜÈÚ[ˆÙ[™\˜]Y›ÙWÛ[Ù[\Ø\™XÝÜšY\Ëˆ‹\Nˆ”Õ’S‘È‹˜[Y\Î–È˜Û\ÜÚXÈ‹š\™[šÜË[ØØ[‹š\™[šÜËYÛØ˜[—KY˜][ˆ˜Û\ÜÚXÈŸK›TÙ[”™Y™\™[˜Ù\ÎžÙ\ØÜš\[ÛŽˆ‘Yš[™\ÈÚ]\ˆH[šÙ\ˆÚÝ[Ù[™\˜]HÙ[‹\™Y™\™[˜Ú[™ÈÞ[[[šÜÈ›ÜˆÛÜšÜÜXÙ\Ëˆ‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_K[šÙ\œÎ–Ú‘Ñ_KÌ[Ý˜\ˆ’Ï^ßNÖ]
’ËÓœR™]Ú\ŽŠ
OO–QœT™[X\™\ÛÛ™\ŽŠ
OO’ÑœTÙ[]™\‘™]Ú\ŽŠ
OOšZœTÙ[]™\”™\ÛÛ™\ŽŠ
OO’‘œUYÔ™\ÛÛ™\ŽŠ
OOž‘Y˜][Š
OOœPÛÛ™šYÕ][ÎŠ
OO™ÚKœR][ÎŠ
OO™[‹œTX›\Ú][ÎŠ
OO™_JNÜYJ
NÝ˜\ˆLYOY]
J
JNÝ˜\ˆZOH›œNˆŽÝ˜\ˆ[^ßNÖ]
[‹Ð]]\NŠ
OO“ÌYKÝ\ÝÛTXÚØYÙQ\œ›ÜŽŠ
OO–[K[Š
OO‘Ù]Š
OO’ÛKÙ]Y[\›Š
OO•ÑÙ]XÚØYÙSY]Y]NŠ
OOË[™R[˜[Y]][XØ][Û‘\œ›ÜŽŠ
OOœÙËÜÝŠ
OOŒ]Š
OO”ÌJNÜYJ
NÜYJ
NÑ

NÝ˜\ˆUY]
]Š
JNÒ›

NÝ˜\ˆŒYOY]
J
JNÝ˜\ˆÚO^ßNÖ]
ÚKÔ™YÚ\ÝžU\NŠ
OO•YKÙ]]Y]™YÚ\ÝžNŠ
OOLÙ]]]ÛÛ™šYÝ\˜][ÛŽŠ
OO‰ËÙ]Y˜][™YÚ\ÝžNŠ
OOœQÙ]X›\Ú™YÚ\ÝžNŠ
OO™ŒÙ]™YÚ\ÝžPÛÛ™šYÝ\˜][ÛŽŠ
OO‘ŒYKÙ]ØÛÜPÛÛ™šYÝ\˜][ÛŽŠ
OO–ËÙ]ØÛÜT™YÚ\ÝžNŠ
OO’]Ë\ÔXÚØYÙP\›Ý™YŠ
OOÝË›Ü›X[^™T™YÚ\ÝžNŠ
OO•˜ßJNÜYJ
NÝ˜\ˆŒYOY]
›Ê
JKYOJÏOŠËUQUÔ‘QÒTÕ–OH›œP]Y]™YÚ\ÝžH‹Ë‘‘UÒÔ‘QÒTÕ–OH›œT™YÚ\ÝžTÙ\™\ˆ‹Ë”P“TÒÔ‘QÒTÕ–OH›œTX›\Ú™YÚ\ÝžH‹ÊJJY_ßJNÙ[˜Ý[Ûˆ˜ÊJ^Ü™]\›ˆKœ™\XÙJ×ÉËˆŠ_Y[˜Ý[ÛˆL
ØÛÛ™šYÝ\˜][ÛŽ™_J^Ü™]\›ˆQ
ØÛÛ™šYÝ\˜][ÛŽ™K\Nˆ›œP]Y]™YÚ\ÝžHŸJ_Y[˜Ý[ÛˆŒ
KØÛÛ™šYÝ\˜][ÛŽJ^Ü™]\›ˆKœX›\ÚÛÛ™šYÏËœ™YÚ\ÝžOÕ˜ÊKœX›\ÚÛÛ™šYËœ™YÚ\ÝžJN™K›˜[YOÒ]ÊK›˜[YKœØÛÜKØÛÛ™šYÝ\˜][ÛŽ\Nˆ›œTX›\Ú™YÚ\ÝžHŸJNœQ
ØÛÛ™šYÝ\˜][ÛŽ\Nˆ›œTX›\Ú™YÚ\ÝžHŸJ_Y[˜Ý[Ûˆ]ÊKØÛÛ™šYÝ\˜][ÛŽ\NœH›œT™YÚ\ÝžTÙ\™\ˆŸJ^Û]ÏVÊKØÛÛ™šYÝ\˜][ÛŽJNÚYŠÏOO[[
\™]\›ˆQ
ØÛÛ™šYÝ\˜][ÛŽ\NœŸJNÛ]O\Ë™Ù]
ŠNÜ™]\›ˆOOO[[ÜQ
ØÛÛ™šYÝ\˜][ÛŽ\NœŸJN•˜ÊJ_Y[˜Ý[ÛˆQ
ØÛÛ™šYÝ\˜][ÛŽ™K\NH›œT™YÚ\ÝžTÙ\™\ˆŸJ^Û]YK™Ù]

NÜ™]\›ˆ˜ÊˆOO[[ÜŽ™K™Ù]
›œT™YÚ\ÝžTÙ\™\ˆŠJ_Y[˜Ý[ÛˆŒYJKØÛÛ™šYÝ\˜][ÛŽJ^Û]]™Ù]
›œT™YÚ\ÝšY\ÈŠKÏU˜ÊJKO\‹™Ù]
ÊNÚYŠ\[ÙˆOHŠ\™]\›ˆNÛ]\‹™Ù]
Ëœ™\XÙJ×–ØK^—JÎ‹ËˆŠJNÜ™]\›ˆ\[ÙˆHÛŽ›[]˜\ˆL[™]ÈX\
ÖÈ›œT™YÚ\ÝžTÙ\™\ˆ‹šÎ‹ËÛœKšœÜ‹š[ËÈ—WJNÙ[˜Ý[ÛˆÊKØÛÛ™šYÝ\˜][ÛŽJ^ÚYŠOOO[[
\™]\›ˆ[Û]Ï]™Ù]
›œTØÛÜ\ÈŠK™Ù]
JNÜ™]\›ˆß
OOOHšœÜˆÐL›[
_Y[˜Ý[Ûˆ	ÊKØÛÛ™šYÝ\˜][ÛŽY[œŸJ^Û]Ï\‰‰–Ê‹œØÛÜKØÛÛ™šYÝ\˜][ÛŽJNÜ™]\›ˆÏË™Ù]
›œP]]Y[Š_ÏË™Ù]
›œP]]ÚÙ[ˆŠOÜÎ‘ŒYJKØÛÛ™šYÝ\˜][ÛŽJ_Y[˜Ý[Ûˆ
ØÛÛ™šYÝ\˜][ÛŽ™K™\œÚ[ÛŽX›\Ú[Y\ÎœŸJ^Û]ÏYK™Ù]
›œSZ[š[X[YÙQØ]HŠNÚYŠÊ^Û]O\Ë–ÝNÚYŠ\[ÙˆOˆHŸ
™]È]J
K™Ù][YJ
K[™]È]JJK™Ù][YJ
JKÍŒÌYLÏÊ\™]\›ˆL\™]\›ˆL_Y[˜Ý[Ûˆ
KŠ^Û]ÏZ‹žT\œÙQ\ØÜš\ÜŠŠNÚYŠ\ßËšY[\ÚOOYKšY[\Ú	‰ˆTŒYK™Y˜][š\ÓX]Ú
‹œÝš[™ÚYžRY[
JK‹œÝš[™ÚYžRY[
ÊJJ\™]\›ˆLNÚYŠËœ˜[™ÙOOOH[šÛ›ÝÛˆŠ\™]\›ˆLÛ]OQœ‹˜[Y˜[™ÙJËœ˜[™ÙJNÜ™]\›ˆJX_XK\Ý

J_Y[˜Ý[ÛˆÌ
ØÛÛ™šYÝ\˜][ÛŽ™KY[™\œÚ[ÛŽœŸJ^Ü™]\›ˆK™Ù]
›œT™X\›Ý™YXÚØYÙ\ÈŠKœÛÛYJÏOš
‹ÊJ_Y[˜Ý[ÛˆÝÊJ^Ü™]\›ˆ\
J_Ì
J_]˜\ˆÌYOJOOŠVØK““×ÐUULOH““×ÐUU‹VØK‘TÕÑQ‘“Ô•LWOH‘TÕÑQ‘“Ô•‹VØKÓÓ‘’QÕTUSÓL—OHÓÓ‘’QÕTUSÓˆ‹VØKSÐVT×ÐUUL×OHSÐVT×ÐUU‹JJJÌY_ßJNØ\Þ[˜È[˜Ý[ÛˆÙÊKØ][\Y\Î™YÚ\ÝžNœ‹XY\œÎœËÛÛ™šYÝ\˜][ÛŽ˜_J^ÚYŠÑŠJJ]›ÝÈ™]ÈÝ
K’[˜[YÕÚÙ[ˆŠNÚYŠK›ÜšYÚ[˜[\œ›ÜË›˜[YOOOH’\œ›Üˆ‰‰™K›ÜšYÚ[˜[\œ›ÜËœ™\ÜÛœÙKœÝ]\ÐÛÙOOOMJ]›ÝÈ™]ÈÝ
K[˜[Y]][XØ][Ûˆ
	Ý\[ÙˆOHœÝš[™ÈØ\È	Ø]ØZ]
‹ËØÛÛ™šYÝ\˜][ÛŽ˜_J_X˜][\Y\È	ÝXJX
_Y[˜Ý[Ûˆ[JK
^Û]YKœ™\ÜÛœÙOËœÝ]\ÐÛÙNÜ™]\›ˆÜOOMÈ”XÚØYÙH›Ý›Ý[™ŽœML	‰œŒØH™YÚ\ÝžH\X\œÈÈ™HÝÛˆ
\Ú[™ÈH	ÜK˜\R\\›[šÊ›ØØ[ØXÚH‹šÎ‹ËÞX\›œÙË˜ÛÛKØY˜[˜ÙYÛ^XÛÛˆÛØØ[XØXÚHŠ_HZYÚ]™H›ÝXÝY[ÝHYØZ[œÝÝXÚÝ]YÙ\ÊX›[›[Y[˜Ý[ÛˆÑ
J^Ü™]\›ˆKœØÛÜOØÐ	ÙKœØÛÜ_IL™‰ÙK›˜[Y_X˜ÉÙK›˜[Y_X]˜\ˆYO[™]ÈX\[™]ÈX\Ø\Þ[˜È[˜Ý[ÛˆL
J^Ü™]\›ˆ]ØZ]ÙK™Ù]˜XÝÜžUÚ]Y˜][
YKK\Þ[˜Ê
OOžÛ][[Ýž^ÝX]ØZ]Kœ™XYœÛÛ”›ÛZ\ÙJJ_XØ]Úß\™]\›ˆJ_X\Þ[˜È[˜Ý[ÛˆL
KØÛÛ™šYÝ\˜][ÛŽœ‹ØXÚYœË™YÚ\ÝžN˜KXY\œÎ›‹™\œÚ[ÛŽ˜Ë‹‹™ŸJ^Ü™]\›ˆ]ØZ]ÙK™Ù]˜XÝÜžUÚ]Y˜][
K\Þ[˜Ê
OO˜]ØZ]ÛJÑ

KË‹‹™‹Ý\ÝÛQ\œ›Ü“Y\ÜØYÙN–[KÛÛ™šYÝ\˜][ÛŽœ‹™YÚ\ÝžN˜KY[XY\œÎžË‹‹›‹’Y‹S›Û™KSX]ÚŽœÏË™]YË’Y‹S[ÙYšYYTÚ[˜ÙHŽœÏË›\Ý[ÙYšYYKÜ˜\™]ÛÜšÔ™\]Y\Ý˜\Þ[˜ÈO˜\Þ[˜Ê
OOžÛ]X]ØZ]

NÚYŠœÝ]\ÐÛÙOOOLÌ
^ÚYŠÏOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆØXÚYY]Y]HÚÝ[›Ý™H[ŠNÜ™]\›žË‹‹š›ÙNœË›Y]Y]__[]ORL
”ÓÓ‹œ\œÙJ˜›ÙKÔÝš[™Ê
JJKÏ^ÛY]Y]N‘K]YÎššXY\œË™]YË\Ý[ÙYšYYššXY\œÖÈ›\Ý[[ÙYšYY—_NÜ™]\›ˆYKœÙ]
K›ÛZ\ÙKœ™\ÛÛ™JÊJK›ÛZ\ÙKœ™\ÛÛ™J
K[Š\Þ[˜Ê
OOžÛ]ÏX	Ù_KIÜ›ØÙ\ÜËœYK\Ø]ØZ]K›ZÙ\”›ÛZ\ÙJË™\›˜[YJÊKÜ™XÝ\œÚ]™NˆLJK]ØZ]KÜš]RœÛÛ”›ÛZ\ÙJËËØÛÛ\XÝˆLJK]ØZ]Kœ™[˜[YT›ÛZ\ÙJËJ_JK˜Ø]Ú


OOžßJKË‹‹š›ÙN‘___JJ_Y[˜Ý[ÛˆL
J^Ü™]\›ˆKœØÛÜHOO[[Ø	ÙKœØÛÜ_KIÙK›˜[Y_KIÙKœØÛÜK›[™ÝX™K›˜[Y_X\Þ[˜È[˜Ý[ÛˆÊKØØXÚN›Ú™XÝœ‹™YÚ\ÝžNœËXY\œÎ˜K™\œÚ[ÛŽ›‹‹‹˜ßJ^Û]ØÛÛ™šYÝ\˜][ÛŽ™ŸO\ŽÜÏU‘
‹ÚY[™K™YÚ\ÝžNœßJNÛ]]Ì
‹ÊKRËš›Ú[Š	ÑL
J_KšœÛÛ˜
KO[[ÚYŠ\‹›ØÚÙš[S™YYÔ™Yœ™\Ú	‰ŠOX]ØZ]L

KJJ^ÚYŠ\[ÙˆH‰‰\[ÙˆK›Y]Y]K™\œÚ[ÛœÖÛ—OHŠ\™]\›ˆK›Y]Y]NÚYŠ‹™Ù]
™[˜X›SÙ™›[™S[ÙHŠJ^Û]Ï\ÝXÝ\™YÛÛ™JK›Y]Y]JKÏ[™]ÈÙ]ÚYŠ
^Ù›ÜŠ]HÙˆØš™XÝšÙ^\ÊË™\œÚ[ÛœÊJ^Û]Z‹›XZÙSØØ]ÜŠKœN‰Ò_X
KÏ]™Ù]ØØ]Ü“Z\œ›Ü”]

NÊSß[K™^\ÝÔÞ[˜ÊÊJI‰Š[]HË™\œÚ[ÛœÖÒWKË˜Y
JJ_[]PÖÈ™\Ý]YÜÈ—K›]\ÝÚYŠËš\Ê
J^Û]OSØš™XÝšÙ^\ÊK›Y]Y]K™\œÚ[ÛœÊKœÛÜ
ŒYK™Y˜][˜ÛÛ\\™JKRKš[™^ÙŠ
NÙ›ÜŠÔËš\ÊVÕJI‰•LÊUOLNÕLÐÖÈ™\Ý]YÜÈ—K›]\ÝRVÕN™[]HÖÈ™\Ý]YÜÈ—K›]\Ý_\™]\›ˆß_\™]\›ˆ]ØZ]L
KË‹‹˜ËÛÛ™šYÝ\˜][ÛŽ™‹ØXÚY‘K™YÚ\ÝžNœËXY\œÎ˜K™\œÚ[ÛŽ›ŸJ_]˜\ˆLYOVÈ›˜[YH‹™\Ý\˜˜[‹˜š[ˆ‹œØÜš\È‹›ÜÈ‹˜ÜH‹›X˜È‹™\[™[˜ÚY\È‹™\[™[˜ÚY\ÓY]H‹›Ü[Û˜[\[™[˜ÚY\È‹œY\‘\[™[˜ÚY\È‹œY\‘\[™[˜ÚY\ÓY]H‹™\™XØ]Y—NÙ[˜Ý[ÛˆL
J^Ü™]\›žÈ™\Ý]YÜÈŽ™VÈ™\Ý]YÜÈ—K™\œÚ[ÛœÎ“Øš™XÝ™œ›ÛQ[šY\ÊØš™XÝ™[šY\ÊK™\œÚ[ÛœÊK›X\

Ý—JOO–ÝY
‹LYJWJJK[YN™K[Y__]˜\ˆÌS‹›XZÙR\Ú
[YH‹‹‹“LYJKœÛXÙJŠNÙ[˜Ý[ÛˆÌ
K
^Û]PŒ
JKÏ[™]ÈT“

NÜ™]\›ˆËš›Ú[Š‹ÌËšÜÝ˜[YJ_Y[˜Ý[ÛˆŒ
J^Ü™]\›ˆËš›Ú[ŠK™Ù]
™ÛØ˜[›Û\ˆŠK›Y]Y]KÛœHŠ_X\Þ[˜È[˜Ý[ÛˆÛJKØÛÛ™šYÝ\˜][ÛŽXY\œÎœ‹Y[œË]]\N˜K[ÝÓÚYÎ›‹™YÚ\ÝžN˜Ë‹‹™ŸJ^ØÏU‘
ÚY[œË™YÚ\ÝžN˜ßJKÉ‰œËœØÛÜI‰\[ÙˆOˆH‰‰ŠOLJNÛ]X]ØZ]QŠËØ]]\N˜K[ÝÓÚYÎ›‹ÛÛ™šYÝ\˜][ÛŽY[œßJNÜ	‰Š^Ë‹‹œ‹]]Üš^˜][ÛŽœJNÝž^Ü™]\›ˆ]ØZ]›‹™Ù]
K˜Ú\]

OOOH‹ÈØ	ØßIÙ_X™KØÛÛ™šYÝ\˜][ÛŽXY\œÎœ‹‹‹™ŸJ_XØ]Ú

^Ý›ÝÈ]ØZ]ÙÊÜ™YÚ\ÝžN˜ËÛÛ™šYÝ\˜][ÛŽXY\œÎœŸJK_X\Þ[˜È[˜Ý[ÛˆŒ
KØ][\Y\Îœ‹ÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜KY[›‹]]\N˜ÏLË[ÝÓÚYÎ™‹™YÚ\ÝžNœÝš‹‹‘_J^ÜU‘
ËÚY[›‹™YÚ\ÝžNœJNÛ]ÏX]ØZ]QŠØ]]\N˜Ë[ÝÓÚYÎ™‹ÛÛ™šYÝ\˜][ÛŽœËY[›ŸJNÐÉ‰ŠO^Ë‹‹˜K]]Üš^˜][ÛŽßJK	‰ŠO^Ë‹‹˜K‹‹ÝÊ
_JNÝž^Ü™]\›ˆ]ØZ]›‹œÜÝ

ÙKØÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜K‹‹‘_J_XØ]Ú
Ê^ÚYŠRÑŠÊ_
]›ÝÈ]ØZ]ÙÊËØ][\Y\Îœ‹™YÚ\ÝžNœÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜_JKÎÚX]ØZ]ŠËØÛÛ™šYÝ\˜][ÛŽœßJNÛ]^Ë‹‹˜K‹‹ÝÊ
_NÝž^Ü™]\›ˆ]ØZ]›‹œÜÝ
	ÜIÙ_XØÛÛ™šYÝ\˜][ÛŽœËXY\œÎž‹‹‘_J_XØ]Ú
J^Ý›ÝÈ]ØZ]ÙÊKØ][\Y\Îœ‹™YÚ\ÝžNœÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜_JK___X\Þ[˜È[˜Ý[ÛˆÌ
KØ][\Y\Îœ‹ÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜KY[›‹]]\N˜ÏLË[ÝÓÚYÎ™‹™YÚ\ÝžNœÝš‹‹‘_J^ÜU‘
ËÚY[›‹™YÚ\ÝžNœJNÛ]ÏX]ØZ]QŠØ]]\N˜Ë[ÝÓÚYÎ™‹ÛÛ™šYÝ\˜][ÛŽœËY[›ŸJNÐÉ‰ŠO^Ë‹‹˜K]]Üš^˜][ÛŽßJK	‰ŠO^Ë‹‹˜K‹‹ÝÊ
_JNÝž^Ü™]\›ˆ]ØZ]›‹œ]

ÙKØÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜K‹‹‘_J_XØ]Ú
Ê^ÚYŠRÑŠÊJ]›ÝÈ]ØZ]ÙÊËØ][\Y\Îœ‹™YÚ\ÝžNœÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜_JKÎÚX]ØZ]ŠËØÛÛ™šYÝ\˜][ÛŽœßJNÛ]^Ë‹‹˜K‹‹ÝÊ
_NÝž^Ü™]\›ˆ]ØZ]›‹œ]
	ÜIÙ_XØÛÛ™šYÝ\˜][ÛŽœËXY\œÎž‹‹‘_J_XØ]Ú
J^Ý›ÝÈ]ØZ]ÙÊKØ][\Y\Îœ‹™YÚ\ÝžNœÛÛ™šYÝ\˜][ÛŽœËXY\œÎ˜_JK___X\Þ[˜È[˜Ý[Ûˆ
KØ][\Y\ÎÛÛ™šYÝ\˜][ÛŽœ‹XY\œÎœËY[˜K]]\N›LË[ÝÓÚYÎ˜Ë™YÚ\ÝžN™‹Ýœ‹‹šJ^ÙU‘
‹ÚY[˜K™YÚ\ÝžN™ŸJNÛ]OX]ØZ]QŠ‹Ø]]\N›‹[ÝÓÚYÎ˜ËÛÛ™šYÝ\˜][ÛŽœ‹Y[˜_JNÑI‰ŠÏ^Ë‹‹œË]]Üš^˜][ÛŽ‘_JK	‰ŠÏ^Ë‹‹œË‹‹ÝÊ
_JNÝž^Ü™]\›ˆ]ØZ]›‹™[
ŠÙKØÛÛ™šYÝ\˜][ÛŽœ‹XY\œÎœË‹‹šJ_XØ]Ú
Ê^ÚYŠRÑŠÊ_
]›ÝÈ]ØZ]ÙÊËØ][\Y\Î™YÚ\ÝžN™‹ÛÛ™šYÝ\˜][ÛŽœ‹XY\œÎœßJKÎÜX]ØZ]ŠËØÛÛ™šYÝ\˜][ÛŽœŸJNÛ]Ï^Ë‹‹œË‹‹ÝÊ
_NÝž^Ü™]\›ˆ]ØZ]›‹™[
	ÙŸIÙ_XØÛÛ™šYÝ\˜][ÛŽœ‹XY\œÎ”Ë‹‹šJ_XØ]Ú

^Ý›ÝÈ]ØZ]ÙÊØ][\Y\Î™YÚ\ÝžN™‹ÛÛ™šYÝ\˜][ÛŽœ‹XY\œÎœßJK__Y[˜Ý[Ûˆ‘
KÚY[™YÚ\ÝžNœŸJ^ÚYŠ\[ÙˆˆH‰‰
\™]\›ˆ]ÊœØÛÜKØÛÛ™šYÝ\˜][ÛŽ™_JNÚYŠ\[ÙˆˆOHœÝš[™ÈŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH™YÚ\ÝžHÚÝ[™HHÝš[™ÈŠNÜ™]\›ˆ˜ÊŠ_X\Þ[˜È[˜Ý[ÛˆQŠKØ]]\NL‹[ÝÓÚYÎœHLKÛÛ™šYÝ\˜][ÛŽœËY[˜_J^Û]IÊKØÛÛ™šYÝ\˜][ÛŽœËY[˜_JKÏXŒ
‹
NÚYŠXÊ\™]\›ˆ[Û]X]ØZ]Ëœ™YXÙRÛÚÊOœ™Ù]œP]][XØ][Û’XY\‹›ÚYKØÛÛ™šYÝ\˜][ÛŽœËY[˜_JNÚYŠŠ\™]\›ˆŽÚYŠ‹™Ù]
›œP]]ÚÙ[ˆŠJ\™]\›˜™X\™\ˆ	Û‹™Ù]
›œP]]ÚÙ[ˆŠ_XÚYŠ‹™Ù]
›œP]]Y[ŠJ^Û][‹™Ù]
›œP]]Y[ŠNÜ™]\›ˆš[˜ÛY\ÊŽˆŠOØ˜\ÚXÈ	ÐY™™\‹™œ›ÛJ
KÔÝš[™Ê˜˜\ÙMŠ_X˜˜\ÚXÈ	ÜXZYŠ‰‰˜J^Û]X]ØZ]
KØÛÛ™šYÝ\˜][ÛŽœËY[˜_JNÚYŠ
\™]\›˜™X\™\ˆ	ÜXZYŠÉ‰OOLJ]›ÝÈ™]ÈÝ
ÌË“›È]][XØ][ÛˆÛÛ™šYÝ\™Y›Üˆ™\]Y\ÝŠNÜ™]\›ˆ[Y[˜Ý[ÛˆŒ
K
^ÜÝÚ]Ú

^ØØ\ÙHŽœ™]\›ˆK™Ù]
›œP[Ø^\Ð]]ŠNØØ\ÙHN˜Ø\ÙHÎœ™]\›ˆLØØ\ÙHœ™]\›ˆLNÙY˜][›ÝÈ™]È\œ›ÜŠ•[œ™XXÚX›HŠ__X\Þ[˜È[˜Ý[Ûˆ
KØÛÛ™šYÝ\˜][ÛŽœŸJ^ÚYŠ\[ÙˆˆHŸ\[Ùˆ˜]]Üš^˜][ÛˆHŠ\™]\›ˆ˜[ˆ[›Ûž[[Ý\È\Ù\ˆŽÝž^Ü™]\›Š]ØZ]›‹™Ù]
™]ÈT“
	Ù_KËKÝÚØ[ZX
Kš™Y‹ØÛÛ™šYÝ\˜][ÛŽœ‹XY\œÎœÛÛ”™\ÜÛœÙNˆLJJK\Ù\›˜[YOÏÈ˜[ˆ[šÛ›ÝÛˆ\Ù\ˆŸXØ]ÚÜ™]\›ˆ˜[ˆ[šÛ›ÝÛˆ\Ù\ˆŸ_X\Þ[˜È[˜Ý[ÛˆŠKØÛÛ™šYÝ\˜][ÛŽJ^Û]YK›ÜšYÚ[˜[\œ›ÜËœ™\ÜÛœÙKšXY\œÖÈ›œK[›ÝXÙH—NÚYŠ‰‰Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽÝÝ]œ›ØÙ\ÜËœÝÝ][˜ÛYQ›ÛÝ\ŽˆL_K\Þ[˜ÈOOžÚYŠKœ™\Ü[™›Ê‹œ™\XÙJÊÏÎ—××ÊÊKÙËKœ™]J‰H‹K•\K•T“
JJK\›ØÙ\ÜË™[‹–PT“—ÒT×ÕTÕÑS•Š^Û]\‹›X]Ú
ÛÜ[ˆ
ÏÎ—××ÊÊKÚJNÚYŠ‰‰•ZK›Ü[•\›
^Û]ÛÜ[“›ÝÎ˜ßOX]ØZ]
U‹œ›Û\
JÝ\Nˆ˜ÛÛ™š\›H‹˜[YNˆ›Ü[“›ÝÈ‹Y\ÜØYÙNˆ‘È[ÝHØ[ÈžHÈÜ[ˆ\È\››ÝÏÈ‹™\]Z\™YˆL[š]X[ˆLÛØ[˜Ù[Š
OOœ›ØÙ\ÜË™^]
LÌ
_JNØÉ‰Š]ØZ]ZK›Ü[•\›
–ÌWJ_
Kœ™\ÜÙ\\˜]ÜŠ
KKœ™\ÜØ\›š[™Ê•ÙH˜Z[YÈ]]ÛX]XØ[HÜ[ˆH\›È[ÝIÛ]™HÈÜ[ˆ][Ý\œÙ[ˆ[ˆ[Ý\ˆœ›ÝÜÙ\ˆÙˆÚÚXÙKˆŠJJ___JK›ØÙ\ÜËœÝÝ]Üš]J˜
JK›ØÙ\ÜË™[‹–PT“—ÒT×ÕTÕÑS•Š\™]\›ˆ›ØÙ\ÜË™[‹–PT“—ÒS’‘PÕÓ”WÌ‘WÕÒÑSŸˆŽÛ]ÛÝœßOX]ØZ]
U‹œ›Û\
JÝ\Nˆœ\ÜÝÛÜ™‹˜[YNˆ›Ý‹Y\ÜØYÙNˆ“Û™K][YH\ÜÝÛÜ™ˆ‹™\]Z\™YˆLÛØ[˜Ù[Š
OOœ›ØÙ\ÜË™^]
LÌ
_JNÜ™]\›ˆ›ØÙ\ÜËœÝÝ]Üš]J˜
KßY[˜Ý[ÛˆÑŠJ^ÚYŠK›ÜšYÚ[˜[\œ›ÜË›˜[YHOOH’\œ›ÜˆŠ\™]\›ˆLNÝž^Ü™]\›ŠK›ÜšYÚ[˜[\œ›ÜËœ™\ÜÛœÙKšXY\œÖÈÝÝËX]][XØ]H—KœÜ]
ËÊ‹ÊK›X\
Oœ‹ÓÝÙ\Ø\ÙJ
JJKš[˜ÛY\Ê›ÝŠ_XØ]ÚÜ™]\›ˆL__Y[˜Ý[ÛˆÝÊJ^Ü™]\›žÈ›œK[ÝŽ™__X\Þ[˜È[˜Ý[Ûˆ
KØÛÛ™šYÝ\˜][ÛŽY[œŸJ^Û]Ï[[ÚYŠ›ØÙ\ÜË™[‹‘ÒUP—ÐÒJ\Ï\›ØÙ\ÜË™[‹“”WÒQÕÒÑSŸ[Ù[ÙHYŠ›ØÙ\ÜË™[‹‘ÒUP—ÐPÕSÓ”Ê^ÚYŠJ›ØÙ\ÜË™[‹PÕSÓ”×ÒQÕÒÑS—Ô‘TUQTÕÕT“	‰œ›ØÙ\ÜË™[‹PÕSÓ”×ÒQÕÒÑS—Ô‘TUQTÕÕÒÑSŠJ\™]\›ˆ[Û]OXœN‰Û™]ÈT“
JKšÜÝœ™\XÙJœ™YÚ\ÝžKžX\›œÙË˜ÛÛH‹œ™YÚ\ÝžK›œZœË›Ü™ÈŠKœ™\XÙJžX\›‹›œZœË›Ü™È‹œ™YÚ\ÝžK›œZœË›Ü™ÈŠ_X[™]ÈT“
›ØÙ\ÜË™[‹PÕSÓ”×ÒQÕÒÑS—Ô‘TUQTÕÕT“
NÛ‹œÙX\˜Ú\˜[\Ë˜\[™
˜]YY[˜ÙH‹JKÏJ]ØZ]›‹™Ù]
‹š™Y‹ØÛÛ™šYÝ\˜][ÛŽœÛÛ”™\ÜÛœÙNˆLXY\œÎžÐ]]Üš^˜][ÛŽ˜™X\™\ˆ	Ü›ØÙ\ÜË™[‹PÕSÓ”×ÒQÕÒÑS—Ô‘TUQTÕÕÒÑSŸX_JJK˜[Y_ZYŠ\Ê\™]\›ˆ[Ýž^Ü™]\›Š]ØZ]›‹œÜÝ
	Ù_KËKÛœKÝŒKÛÚYËÝÚÙ[‹Ù^Ú[™ÙKÜXÚØYÙIÕÑ
Š_X[ØÛÛ™šYÝ\˜][ÛŽœÛÛ”™\ÜÛœÙNˆLXY\œÎžÐ]]Üš^˜][ÛŽ˜™X\™\ˆ	ÜßX_JJKÚÙ[Ÿ[XØ]Úß\™]\›ˆ[]˜\ˆQXÛ\ÜÞÜÝ\ÜÊŠ^ÚYŠ]œ™Y™\™[˜ÙKœÝ\ÕÚ]
ZJJ\™]\›ˆLNÛ]ÜÙ[XÝÜŽœË\˜[\Î˜_OZ‹œ\œÙT˜[™ÙJœ™Y™\™[˜ÙJNÜ™]\›ˆJULYK™Y˜][˜[Y
Ê_OOO[[\[ÙˆK—×Ø\˜Ú]™U\›OHœÝš[™ÈŠ_YÙ]ØØ[]
Š^Ü™]\›ˆ[X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHH™[[ÝHÙ\™\˜
KØY\ŽŠ
OO\Ë™™]Úœ›ÛS™]ÛÜšÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛS™]ÛÜšÊŠ^Û]Ü\˜[\ÎœßOZ‹œ\œÙT˜[™ÙJœ™Y™\™[˜ÙJNÚYŠÏOO[[\[ÙˆË—×Ø\˜Ú]™U\›OHœÝš[™ÈŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\˜Ú]™U\›]Y\ž\Ýš[™È\˜[Y]\ˆÚÝ[]™H™Y[ˆ]˜Z[X›HŠNÛ]OX]ØZ]ÛJË—×Ø\˜Ú]™U\›ØÝ\ÝÛQ\œ›Ü“Y\ÜØYÙN–[KÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Y[JNÜ™]\›ˆ]ØZ]Ë˜ÛÛ™\Öš\
KØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÝš\ÛÛ\Û™[ÎŒ_J__NÜYJ
NÝ˜\ˆÑXÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆJ]œ˜[™ÙKœÝ\ÕÚ]
ZJ_Z‹žT\œÙQ\ØÜš\ÜŠœ˜[™ÙKœÛXÙJZK›[™Ý
KL
J_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆL_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ý›ÝÈ™]È\œ›ÜŠ•[œ™XXÚX›HŠ_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆYÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Û]Ï\‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJ‹œ\œÙQ\ØÜš\ÜŠœ˜[™ÙKœÛXÙJZK›[™Ý
KL
JNÜ™]\›ˆ‹œ™\ÛÛ™\‹™Ù]™\ÛÛ][Û‘\[™[˜ÚY\ÊËŠ_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]O\Ëœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJ‹œ\œÙQ\ØÜš\ÜŠœ˜[™ÙKœÛXÙJZK›[™Ý
KL
JNÜ™]\›ˆ]ØZ]Ëœ™\ÛÛ™\‹™Ù]Ø[™Y]\ÊK‹Ê_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]XKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJ‹œ\œÙQ\ØÜš\ÜŠœ˜[™ÙKœÛXÙJZK›[™Ý
KL
JNÜ™]\›ˆKœ™\ÛÛ™\‹™Ù]Ø]\ÙžZ[™Ê‹‹ËJ_\™\ÛÛ™JŠ^Ý›ÝÈ™]È\œ›ÜŠ•[œ™XXÚX›HŠ__NÜYJ
NÜYJ
NÝ˜\ˆÌYOY]
J
JNÝ˜\ˆZXÛ\ÜÈ^ÜÝ\ÜÊŠ^ÚYŠ]œ™Y™\™[˜ÙKœÝ\ÕÚ]
ZJJ\™]\›ˆLNÛ]Ï[™]ÈT“
œ™Y™\™[˜ÙJNÜ™]\›ˆJWÌYK™Y˜][˜[Y
Ëœ]˜[YJ_ËœÙX\˜Ú\˜[\Ëš\Ê—×Ø\˜Ú]™U\›ŠJ_YÙ]ØØ[]
Š^Ü™]\›ˆ[X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHH™[[ÝH™YÚ\ÝžX
KØY\ŽŠ
OO\Ë™™]Úœ›ÛS™]ÛÜšÊŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÚXÚÜÝ[N˜ß_X\Þ[˜È™]Úœ›ÛS™]ÛÜšÊŠ^Û]ÎÝž^ÜÏX]ØZ]ÛJK™Ù]ØØ]Ü•\›

KØÝ\ÝÛQ\œ›Ü“Y\ÜØYÙN–[KÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Y[J_XØ]ÚÜÏX]ØZ]ÛJK™Ù]ØØ]Ü•\›

Kœ™\XÙJÉL™‹ÙË‹ÈŠKØÝ\ÝÛQ\œ›Ü“Y\ÜØYÙN–[KÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Y[J_\™]\›ˆ]ØZ]Ë˜ÛÛ™\Öš\
ËØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Yš^]š‹™Ù]Y[™[™Ü”]

KÝš\ÛÛ\Û™[ÎŒ_J_\Ý]XÈ\ÐÛÛ™[[Û˜[\˜˜[\›
‹ØÛÛ™šYÝ\˜][ÛŽœßJ^Û]OR]ÊœØÛÜKØÛÛ™šYÝ\˜][ÛŽœßJKYK™Ù]ØØ]Ü•\›

NÜ™]\›ˆ\‹œ™\XÙJ×šÏÎŠ×ÊÎ–×‹×J×ŠOÛœZœË›Ü™ÊÎ‰ÊJKËšÎ‰HŠKOXKœ™\XÙJ×šÎ—×Ü™YÚ\ÝžW›œZœ×›Ü™Ê	ÊKËšÎ‹ËÜ™YÚ\ÝžKžX\›œÙË˜ÛÛIHŠK\‹œ™\XÙJ×šÎ—×Ü™YÚ\ÝžW›œZœ×›Ü™Ê	ÊKËšÎ‹ËÜ™YÚ\ÝžKžX\›œÙË˜ÛÛIHŠKOOXJÛŸOOXJÛ‹œ™\XÙJÉL™‹ÙË‹ÈŠ_\Ý]XÈÙ]ØØ]Ü•\›

^Û]Qœ‹˜ÛX[Šœ™Y™\™[˜ÙKœÛXÙJZK›[™Ý
JNÚYŠOO[[
]›ÝÈ™]ÈÝ
L•HœHÙ[]™\ˆ™\ÛÛ™\ˆÛÝÙ[XÝY]H™\œÚ[Ûˆ\Û‰ÝÙ[]™\ˆŠNÜ™]\›˜	ÕÑ

_KËKÉÝ›˜[Y_KIÜŸKÞ˜_NÜYJ
NÜYJ
NÜYJ
NÝ˜\ˆ•Y]
J
JNÝ˜\ˆ‘Z‹›XZÙRY[
[››ÙKYÞ\ŠKÌK×Š›ÙKYÞ\™XZ[Z[œÝ[
W‹Ë‘XÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆœ˜[™ÙKœÝ\ÕÚ]
ZJOÈHQœ‹˜[Y˜[™ÙJœ˜[™ÙKœÛXÙJZK›[™Ý
JNˆL_\Ý\ÜÓØØ]ÜŠŠ^ÚYŠ]œ™Y™\™[˜ÙKœÝ\ÕÚ]
ZJJ\™]\›ˆLNÛ]ÜÙ[XÝÜŽœßOZ‹œ\œÙT˜[™ÙJœ™Y™\™[˜ÙJNÜ™]\›ˆH\•‹™Y˜][˜[Y
Ê_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆLXš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆYÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]OQœ‹˜[Y˜[™ÙJœ˜[™ÙKœÛXÙJZK›[™Ý
JNÚYŠOOO[[
]›ÝÈ™]È\œ›ÜŠ^XÝYH˜[Y˜[™ÙKÛÝ	Ýœ˜[™ÙKœÛXÙJZK›[™Ý
_X
NÛ]X]ØZ]ÊØØXÚNœË™™]ÚÜ[ÛœÏË˜ØXÚK›Ú™XÝœËœ›Ú™XÝ™\œÚ[ÛŽœ•‹™Y˜][˜[Y
Kœ˜]ÊOØKœ˜]Î›ÚYJKÏQÙK›X\[™š[\ŠØš™XÝšÙ^\Ê‹™\œÚ[ÛœÊKOOžÝž^Û]Ï[™]Èœ‹”Ù[U™\ŠJNÚYŠK\Ý
ÊJ\™]\›ˆßXØ]Úß\™]\›ˆÙK›X\[™š[\‹œÚÚ\JKXË™š[\ŠOOÝÊØÛÛ™šYÝ\˜][ÛŽœËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Y[™\œÚ[ÛŽ‘Kœ˜]ËX›\Ú[Y\Î›‹[Y_JJNÚYŠË›[™ÝŒ	‰™‹›[™ÝOOL
]›ÝÈ™]ÈÝ
M‹[™\œÚ[ÛœÈØ]\ÙžZ[™È‰Ýœ˜[™ÙKœÛXÙJZK›[™Ý
_Hˆ\™H]X\˜[[™Y
NÛ]Y‹™š[\ŠOOˆ[‹™\œÚ[ÛœÖÑKœ˜]×K™\™XØ]Y
K\›[™ÝŒÜ™ŽÜ™]\›ˆœÛÜ

KÊOO‹QK˜ÛÛ\\™JÊJK›X\
OOžÛ]ÏZ‹›XZÙSØØ]ÜŠ	ÙZ_IÑKœ˜]ßX
KÏ[‹™\œÚ[ÛœÖÑKœ˜]×K™\Ý\˜˜[Ü™]\›ˆZš\ÐÛÛ™[[Û˜[\˜˜[\›
ËËØÛÛ™šYÝ\˜][ÛŽœËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJOÐÎš‹˜š[™ØØ]ÜŠË××Ø\˜Ú]™U\›”ßJ_J_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Qœ‹˜[Y˜[™ÙJœ˜[™ÙKœÛXÙJZK›[™Ý
JNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ^XÝYH˜[Y˜[™ÙKÛÝ	Ýœ˜[™ÙKœÛXÙJZK›[™Ý
_X
NÜ™]\›žÛØØ]ÜœÎ‘ÙK›X\[™š[\ŠËOžÚYŠšY[\ÚOO]šY[\Ú
\™]\›ˆÙK›X\[™š[\‹œÚÚ\Û]Z‹žT\œÙT˜[™ÙJœ™Y™\™[˜ÙKÜ™\]Z\™T›ÝØÛÛ™Z_JNÚYŠZ
\™]\›ˆÙK›X\[™š[\‹œÚÚ\Û]O[™]Èœ‹”Ù[U™\ŠœÙ[XÝÜŠNÜ™]\›ˆ‹\Ý
JOÞÛØØ]ÜŽœ™\œÚ[ÛŽ‘_N‘ÙK›X\[™š[\‹œÚÚ\JKœÛÜ


OO‹\™\œÚ[Û‹˜ÛÛ\\™J™\œÚ[ÛŠJK›X\

ÛØØ]ÜŽœJOOœ
KÛÜYˆL_X\Þ[˜È™\ÛÛ™JŠ^Û]ÜÙ[XÝÜŽœßOZ‹œ\œÙT˜[™ÙJœ™Y™\™[˜ÙJKOQœ‹˜ÛX[ŠÊNÚYŠOOO[[
]›ÝÈ™]ÈÝ
L•HœHÙ[]™\ˆ™\ÛÛ™\ˆÛÝÙ[XÝY]H™\œÚ[Ûˆ\Û‰ÝÙ[]™\ˆŠNÛ]X]ØZ]ÊØØXÚNœ‹™™]ÚÜ[ÛœÏË˜ØXÚK›Ú™XÝœ‹œ›Ú™XÝ™\œÚ[ÛŽ˜_JNÚYŠSØš™XÝš\ÓÝÛŠ‹™\œÚ[ÛœÈŠJ]›ÝÈ™]ÈÝ
MK	Ô™YÚ\ÝžH™]\›™Y[˜[Y]H›ÜˆHZ\ÜÚ[™È™\œÚ[ÛœÈˆšY[	ÊNÚYŠSØš™XÝš\ÓÝÛŠ‹™\œÚ[ÛœËJJ]›ÝÈ™]ÈÝ
M‹™YÚ\ÝžH˜Z[YÈ™]\›ˆ™Y™\™[˜ÙH‰Ø_H˜
NÛ]Ï[™]È]ÚYŠË›ØY
‹™\œÚ[ÛœÖØWJKXË™\[™[˜ÚY\Ëš\Ê‘‹šY[\Ú
I‰ˆXËœY\‘\[™[˜ÚY\Ëš\Ê‘‹šY[\Ú
J^Ù›ÜŠ]ˆÙˆËœØÜš\Ë˜[Y\Ê
JZYŠ‹›X]Ú
Ì
J^ØË™\[™[˜ÚY\ËœÙ]
‘‹šY[\Ú‹›XZÙQ\ØÜš\ÜŠ‘‹›]\ÝŠJNØœ™XZß_\™]\›žË‹‹™\œÚ[ÛŽ˜K[™ÝXYÙS˜[YNˆ››ÙH‹[šÕ\Nˆ’T‘‹ÛÛ™][ÛœÎ˜Ë™Ù]ÛÛ™][ÛœÊ
K\[™[˜ÚY\Îœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞSX\
Ë™\[™[˜ÚY\ÊKY\‘\[™[˜ÚY\Î˜ËœY\‘\[™[˜ÚY\Ë\[™[˜ÚY\ÓY]N˜Ë™\[™[˜ÚY\ÓY]KY\‘\[™[˜ÚY\ÓY]N˜ËœY\‘\[™[˜ÚY\ÓY]Kš[Ž˜Ë˜š[Ÿ__NÜYJ
NÜYJ
NÝ˜\ˆ‘Y]
J
JNÝ˜\ˆ‘XÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆJ]œ˜[™ÙKœÝ\ÕÚ]
ZJ_U\\Ý
œ˜[™ÙKœÛXÙJZK›[™Ý
JJ_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆL_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ý›ÝÈ™]È\œ›ÜŠ•[œ™XXÚX›HŠ_Xš[™\ØÜš\ÜŠ‹Ê^Ü™]\›ˆYÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Ü™]\›žß_X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^Û]O]œ˜[™ÙKœÛXÙJZK›[™Ý
KX]ØZ]ÊØØXÚNœË™™]ÚÜ[ÛœÏË˜ØXÚK›Ú™XÝœËœ›Ú™XÝJNÚYŠSØš™XÝš\ÓÝÛŠ‹™\Ý]YÜÈŠJ]›ÝÈ™]ÈÝ
MK	Ô™YÚ\ÝžH™]\›™Y[˜[Y]HHZ\ÜÚ[™È™\Ý]YÜÈˆšY[	ÊNÛ]Ï[–È™\Ý]YÜÈ—NÚYŠSØš™XÝš\ÓÝÛŠËJJ]›ÝÈ™]ÈÝ
M‹™YÚ\ÝžH˜Z[YÈ™]\›ˆYÈ‰Ø_H˜
NÛ]SØš™XÝšÙ^\Ê‹™\œÚ[ÛœÊK[‹[YKXÖØWNÚYŠOOOH›]\Ý‰‰ˆPÝÊØÛÛ™šYÝ\˜][ÛŽœËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Y[™\œÚ[ÛŽšX›\Ú[Y\ÎœJJ^Û]ÏZš[˜ÛY\Ê‹HŠK^‘‹™Y˜][œœÛÜ
ŠK™š[™
OOž‘‹™Y˜][›
K
I‰ŠßRKš[˜ÛY\Ê‹HŠJI‰ÝÊØÛÛ™šYÝ\˜][ÛŽœËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹Y[™\œÚ[ÛŽ’KX›\Ú[Y\ÎœJJNÚYŠ^
]›ÝÈ™]ÈÝ
M‹H™\œÚ[Ûˆ›ÜˆYÈ‰Ø_Hˆ\È]X\˜[[™Y[™›ÈÝÙ\ˆ™\œÚ[Ûˆ\È]˜Z[X›X
NÚ^[]OZ‹›XZÙSØØ]ÜŠ	ÙZ_IÚX
KÏ[‹™\œÚ[ÛœÖÚK™\Ý\˜˜[Ü™]\›ˆZš\ÐÛÛ™[[Û˜[\˜˜[\›
KËØÛÛ™šYÝ\˜][ÛŽœËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJOÖÑWN–Ú‹˜š[™ØØ]ÜŠK××Ø\˜Ú]™U\›ßJW_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]V×NÙ›ÜŠ]ÈÙˆÊ^ÚYŠËšY[\ÚOO]šY[\Ú
XÛÛ[YNÛ]Z‹žT\œÙT˜[™ÙJËœ™Y™\™[˜ÙKÜ™\]Z\™T›ÝØÛÛ™Z_JNÚYŠJYŸ^‘‹™Y˜][˜[Y
‹œÙ[XÝÜŠJJ^ÚYŠ‹œ\˜[\ÏË—×Ø\˜Ú]™U\›
^Û]Z‹›XZÙT˜[™ÙJÜ›ÝØÛÛ™ZKÙ[XÝÜŽ™‹œÙ[XÝÜ‹ÛÝ\˜ÙN›[\˜[\Î›[JKÚOX]ØZ]Kœ™\ÛÛ™\‹™Ù]Ø[™Y]\Ê‹›XZÙQ\ØÜš\ÜŠ
K‹JNÚYŠËœ™Y™\™[˜ÙHOOZœ™Y™\™[˜ÙJXÛÛ[Y_[‹œ\Ú
Ê__\™]\›žÛØØ]ÜœÎ›‹ÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^Ý›ÝÈ™]È\œ›ÜŠ•[œ™XXÚX›HŠ__NÝ˜\ˆO^ßNÖ]
KÙÙ]Ú]XYŠ
OOÝÙ]X›\ÚXØÙ\ÜÎŠ
OOšØ™KÙ]™XYYPÛÛ[Š
OO”X™KXZÙTX›\Ú›ÙNŠ
OO’]JNÜYJ
NÜYJ
NÑ

NÝ˜\ˆU^ßNÖ]
U‹ÔXÚÐÛÛ[X[™Š
OO‘ËY˜][Š
OO˜Û]XÚÕ][ÎŠ
OO‘P_JNÜYJ
NÜYJ
NÜYJ
NÑ

NÕ

NÝ˜\ˆPO^ßNÖ]
PKÙÙ[”XÚÓ\ÝŠ
OO‘S‹Ù[”XÚÔÝ™X[NŠ
OO‘Õ‹Ù[”XÚØYÙSX[šY™\ÝŠ
OO›L™K\ÔXÚÔØÜš\ÎŠ
OO’‹™\\™Q›Ü”XÚÎŠ
OOš•ŸJNÜYJ
NÑ

NÝ˜\ˆÕY]
›Ê
JKÌ™OY]
Œ™J
JK™ORYJž›XˆŠKVÈ‹ÜXÚØYÙKšœÛÛˆ‹‹Ü™XYYH‹‹Ü™XYYKŠˆ‹‹ÛXÙ[œÙH‹‹ÛXÙ[œÙKŠˆ‹‹ÛXÙ[˜ÙH‹‹ÛXÙ[˜ÙKŠˆ‹‹ØÚ[™Ù[ÙÈ‹‹ØÚ[™Ù[ÙËŠˆ—K	VÈ‹ÜXÚØYÙKÞˆ‹‹™Ú]Xˆ‹‹™Ú]‹‹šÈ‹››ÙWÛ[Ù[\È‹‹›œZYÛ›Ü™H‹‹™Ú]YÛ›Ü™H‹‹ˆÊˆ‹‹‘×ÔÝÜ™H—NØ\Þ[˜È[˜Ý[ÛˆŠJ^Ü™]\›ˆHJÛ‹š\ÕÛÜšÜÜXÙTØÜš\
Kœ™\XÚÈŠ_Û‹š\ÕÛÜšÜÜXÙTØÜš\
KœÜÝXÚÈŠJ_X\Þ[˜È[˜Ý[Ûˆ•ŠKÜ™\ÜKŠ^Ø]ØZ]Û‹›X^X™Q^XÝ]UÛÜšÜÜXÙSY™XÞXÛTØÜš\
Kœ™\XÚÈ‹Ü™\ÜJNÝž^Û]ÏRËš›Ú[ŠK˜ÝÙ]™š[S˜[YJNØ]ØZ]K™^\ÝÔ›ÛZ\ÙJÊI‰˜]ØZ]K›X[šY™\Ý›ØYš[JËØ˜\ÙQœÎ›_JK]ØZ]Š
_Yš[˜[^Ø]ØZ]Û‹›X^X™Q^XÝ]UÛÜšÜÜXÙSY™XÞXÛTØÜš\
KœÜÝXÚÈ‹Ü™\ÜJ__X\Þ[˜È[˜Ý[ÛˆÕŠK
^Ý\[ÙˆˆH‰‰ŠX]ØZ]SŠJJNÛ][™]ÈÙ]Ù›ÜŠ]ˆÙˆK›X[šY™\ÝœX›\ÚÛÛ™šYÏË™^XÝ]X›Qš[\ÏÏÛ™]ÈÙ]
\‹˜Y
Ë››Ü›X[^™JŠJNÙ›ÜŠ]ˆÙˆK›X[šY™\Ý˜š[‹˜[Y\Ê
J\‹˜Y
Ë››Ü›X[^™JŠJNÛ]ÏYÌ™K™Y˜][œXÚÊ
NÜ›ØÙ\ÜË›™^XÚÊ\Þ[˜Ê
OOžÙ›ÜŠ]ˆÙˆ
^Û]ÏRË››Ü›X[^™JŠKRËœ™\ÛÛ™JK˜ÝÙÊKRËš›Ú[ŠœXÚØYÙH‹ÊKX]ØZ]K›Ý]›ÛZ\ÙJŠKO^Û˜[YNœ][YN›™]È]JZK”ÐQ‘WÕSQJŒYLÊ_KÏ\‹š\ÊÊOÍLÎŒËO[™]È›ÛZ\ÙJ
ËJOOžÔÏSËU_JKSÏOžÓÏÞ
ÊN”Ê
_NÚYŠš\Ñš[J
J^Û]ÎØÏOOHœXÚØYÙKšœÛÛˆÓÏPY™™\‹™œ›ÛJ”ÓÓ‹œÝš[™ÚYžJ]ØZ]L™JJK[ŠJN“ÏX]ØZ]Kœ™XYš[T›ÛZ\ÙJŠKË™[žJË‹‹‘K[ÙNË\Nˆ™š[HŸKË
_Y[ÙHš\ÔÞ[X›ÛXÓ[šÊ
OÜË™[žJË‹‹‘K[ÙNË\NˆœÞ[[[šÈ‹[šÛ˜[YN˜]ØZ]Kœ™XY[šÔ›ÛZ\ÙJŠ_K
N•
™]È\œ›ÜŠ[œÝ\ÜYš[H\H	Ú›[Ù_H›Üˆ	Ù™K™œ›ÛTÜX›T]
Ê_X
JNØ]ØZ]_\Ë™š[˜[^™J
_JNÛ]OJ™K˜Ü™X]QÞš\
J
NÜ™]\›ˆËœ\JJK_X\Þ[˜È[˜Ý[ÛˆL™JJ^Û]R”ÓÓ‹œ\œÙJ”ÓÓ‹œÝš[™ÚYžJK›X[šY™\Ýœ˜]ÊJNÜ™]\›ˆ]ØZ]Kœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹šYÙÙ\’ÛÚÊOœ‹˜™Y›Ü™UÛÜšÜÜXÙTXÚÚ[™ËK
KX\Þ[˜È[˜Ý[ÛˆSŠJ^Û]YKœ›Ú™XÝ]˜ÛÛ™šYÝ\˜][Û‹Ï^ØXØÙ\–×K™Z™XÝ–×_NÙ›ÜŠ]ÈÙˆ	
\Ëœ™Z™XÝœ\Ú
ÊNÙ›ÜŠ]ÈÙˆ
\Ë˜XØÙ\œ\Ú
ÊNÜËœ™Z™XÝœ\Ú
‹™Ù]
œ˜Ñš[[˜[YHŠJNÛ]OPÏOžÚYŠÏOO[[PËœÝ\ÕÚ]
	ÙK˜ÝÙKØ
J\™]\›ŽÛ]ÏRËœ™[]]™JK˜ÝÙÊKRËœ™\ÛÛ™Jœ›ÛÝÊNÜËœ™Z™XÝœ\Ú

_NØJËœ™\ÛÛ™J˜ÝÙ\‹›ØÚÙš[JJKJ‹™Ù]
˜ØXÚQ›Û\ˆŠJKJ‹™Ù]
™ÛØ˜[›Û\ˆŠJKJ‹™Ù]
š[œÝ[Ý]T]ŠJKJ‹™Ù]
š\X[›Û\ˆŠJKJ‹™Ù]
žX\›”]ŠJK]ØZ]‹šYÙÙ\’ÛÚÊÏOËœÜ[]VX\›”]ËÏOžØJÊ_JNÙ›ÜŠ]ÈÙˆÛÜšÜÜXÙ\Ê^Û]ÏRËœ™[]]™JK˜ÝÙË˜ÝÙ
NÔÈOOHˆ‰‰ˆTË›X]Ú
×Š—ŠO×ËÊI‰œËœ™Z™XÝœ\Ú
ÉÔßX
_[]^ØXØÙ\–×K™Z™XÝ–×_KÏYK›X[šY™\ÝœX›\ÚÛÛ™šYÏË›XZ[ÏÙK›X[šY™\Ý›XZ[‹YK›X[šY™\ÝœX›\ÚÛÛ™šYÏË›[Ù[OÏÙK›X[šY™\Ý›[Ù[KYK›X[šY™\ÝœX›\ÚÛÛ™šYÏË˜œ›ÝÜÙ\ÏÙK›X[šY™\Ý˜œ›ÝÜÙ\‹YK›X[šY™\ÝœX›\ÚÛÛ™šYÏË˜š[ÏÙK›X[šY™\Ý˜š[ŽØÈO[[	‰›‹˜XØÙ\œ\Ú
Ëœ™\ÛÛ™Jœ›ÛÝÊJKˆO[[	‰›‹˜XØÙ\œ\Ú
Ëœ™\ÛÛ™Jœ›ÛÝŠJK\[ÙˆOHœÝš[™È‰‰›‹˜XØÙ\œ\Ú
Ëœ™\ÛÛ™Jœ›ÛÝ
JNÙ›ÜŠ]ÈÙˆ˜[Y\Ê
J[‹˜XØÙ\œ\Ú
Ëœ™\ÛÛ™Jœ›ÛÝÊJNÚYŠ[œÝ[˜Ù[ÙˆX\
Y›ÜŠ]ÐË×[Ùˆ™[šY\Ê
J[‹˜XØÙ\œ\Ú
Ëœ™\ÛÛ™Jœ›ÛÝÊJK\[ÙˆÏOHœÝš[™È‰‰›‹˜XØÙ\œ\Ú
Ëœ™\ÛÛ™Jœ›ÛÝÊJNÛ]OYK›X[šY™\Ý™š[\ÈOO[[ÚYŠJ^Û‹œ™Z™XÝœ\Ú
‹ÊˆŠNÙ›ÜŠ]ÈÙˆK›X[šY™\Ý™š[\Ê^L™J‹˜XØÙ\ËØÝÙœ›ÛÝJ_\™]\›ˆ]ØZ][]
K˜ÝÙÚ\Ñ^XÚ]š[S\Ý‘KÛØ˜[\ÝœËYÛ›Ü™S\Ý›ŸJ_X\Þ[˜È[˜Ý[Ûˆ[]
KÚ\Ñ^XÚ]š[S\ÝÛØ˜[\Ýœ‹YÛ›Ü™S\ÝœßJ^Û]OV×K[™]ÈÙŠJKÏVÖÝœ›ÛÝÜ×WWNÙ›ÜŠØË›[™ÝŒÊ^Û]Ù‹OXËœÜ

KX]ØZ]‹›Ý]›ÛZ\ÙJŠNÚYŠ\™J‹ÙÛØ˜[\Ýœ‹YÛ›Ü™S\ÝÎšš\Ñ\™XÝÜžJ
OÛ[œJJZYŠš\Ñ\™XÝÜžJ
J^Û]OX]ØZ]‹œ™XY\”›ÛZ\ÙJŠKÏHLKÏHLNÚYŠ]ˆOO]œ›ÛÝ
Y›ÜŠ]ÙˆJPÏPßOOH‹™Ú]YÛ›Ü™H‹ÏTßOOH‹›œZYÛ›Ü™HŽÛ]TÏØ]ØZ]L™J‹‹‹›œZYÛ›Ü™HŠNÏØ]ØZ]L™J‹‹‹™Ú]YÛ›Ü™HŠN›[O^OO[[ÖÞK˜ÛÛ˜Ø]

NœÜ™J‹ÙÛØ˜[\Ýœ‹YÛ›Ü™S\ÝÎœJI‰ŠOVË‹‹œØXØÙ\–×K™Z™XÝ–ÈŠŠ‹Êˆ—_WJNÙ›ÜŠ]ÙˆJXËœ\Ú
ÒËœ™\ÛÛ™J‹
KWJ_Y[ÙJš\Ñš[J
_š\ÔÞ[X›ÛXÓ[šÊ
JI‰˜Kœ\Ú
Ëœ™[]]™Jœ›ÛÝŠJ_\™]\›ˆKœÛÜ

_X\Þ[˜È[˜Ý[ÛˆL™JKŠ^Û]Ï^ØXØÙ\–×K™Z™XÝ–×_KOX]ØZ]Kœ™XYš[T›ÛZ\ÙJËš›Ú[ŠŠK]ŽŠNÙ›ÜŠ]ˆÙˆKœÜ]
×‹ÙÊJ^L™JËœ™Z™XÝ‹ØÝÙJNÜ™]\›ˆßY[˜Ý[Ûˆ]
KØÝÙJ^Û]YVÌOOOHˆHŽÜ™]\›ˆ‰‰ŠOYKœÛXÙJJJKK›X]Ú
×žÌ_WËÊI‰ŠORËœ™\ÛÛ™JJJK‰‰ŠOXIÙ_X
K_Y[˜Ý[ÛˆL™JKØÝÙœŸJ^Û]Ï]š[J
NÜÏOOHˆŸÖÌOOOHˆÈŸKœ\Ú
]
ËØÝÙœŸJJ_Y[˜Ý[Ûˆ™JKÙÛØ˜[\ÝYÛ›Ü™S\ÝÎœŸJ^Û]Ï^SŠK˜XØÙ\
NÚYŠÈOOL
\™]\›ˆÏOOLŽÛ]O^SŠKœ™Z™XÝ
NÚYŠHOOL
\™]\›ˆOOOLNÚYŠˆOO[[
Y›ÜŠ]ˆÙˆŠ^Û]Ï^SŠK‹˜XØÙ\
NÚYŠÈOOL
\™]\›ˆÏOOLŽÛ]^SŠK‹œ™Z™XÝ
NÚYŠˆOOL
\™]\›ˆOOL_\™]\›ˆL_Y[˜Ý[ÛˆSŠK
^Û]]ÏV×NÙ›ÜŠ]OLØO›[™ÝÊÊØJ]ØWVÌHOOHˆHÜˆOO]	‰œ‹œ\Ú
ØWJNŠOO]	‰Š]œÛXÙJJJKËœ\Ú
ØWKœÛXÙJJJJNÜ™]\›ˆ™JKÊOÌŽš™JKŠOÌNŒY[˜Ý[Ûˆ™JK
^Û]]ÏV×NÙ›ÜŠ]OLØO›[™ÝÊÊØJ]ØWKš[˜ÛY\Ê‹ÈŠOÜˆOO]	‰œ‹œ\Ú
ØWJNŠOO]	‰Š]œÛXÙJJJKËœ\Ú
ØWJJNÜ™]\›ˆHJÕ‹™Y˜][š\ÓX]Ú
K‹ÙÝˆL›ØØ\ÙNˆLJ_Õ‹™Y˜][š\ÓX]Ú
KËÙÝˆL˜\Ù[˜[YNˆL›ØØ\ÙNˆLJJ_]˜\ˆÏXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ëš[œÝ[Y“™YYYZK›ÛÛX[Š‹KZ[œÝ[ZY‹[™YYY‹LKÙ\ØÜš\[ÛŽˆ”[ˆH™[[Z[˜\žHX\›ˆ[œÝ[YˆHXÚØYÙHÛÛZ[œÈZ[ØÜš\ÈŸJNÝ\Ë™žT[ZK›ÛÛX[Š‹[‹KYžK\[ˆ‹LKÙ\ØÜš\[ÛŽˆ”š[Hš[H]ÈÚ]Ý]XÝX[HÙ[™\˜][™ÈHXÚØYÙH\˜Ú]™HŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\Ë›Ý]ZK”Ýš[™Ê‹[ËK[Ý]‹Ù\ØÜš\[ÛŽˆÜ™X]HH\˜Ú]™H]HÜXÚYšYY]ŸJNÝ\Ë™š[[˜[YOZK”Ýš[™Ê‹KYš[[˜[YH‹ÚY[ŽˆLJ_\Ý]XÞÝ\Ëœ]ÏVÖÈœXÚÈ—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆ™Ù[™\˜]HH\˜˜[œ›ÛHHXÝ]™HÛÜšÜÜXÙH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[\›ˆHXÝ]™HÛÜšÜÜXÙH[ÈHÛÛ\™\ÜÙY\˜Ú]™HÝZ]X›H›ÜˆX›\Ú[™ËˆH\˜Ú]™HÚ[žHY˜][™HÝÜ™Y]H›ÛÝÙˆHÛÜšÜÜXÙH
XÚØYÙKÞ˜
K——ˆYˆH[ËK[Ý]\ÈÙ]H\˜Ú]™HÚ[™HÜ™X]Y]HÜXÚYšYY]ˆH	\Ø[™	]˜˜\šXX›\ÈØ[ˆ™H\ÙYÚ][ˆH][™Ú[™H™\ÜXÝ]™[H™\XÙYžHHXÚØYÙH˜[YH[™™\œÚ[Û‹—ˆ‹^[\\Î–ÖÈÜ™X]H[ˆ\˜Ú]™Hœ›ÛHHXÝ]™HÛÜšÜÜXÙH‹žX\›ˆXÚÈ—KÈ“\ÝHš[\È]ÛÝ[™HXYH\ÙˆHÛÜšÜÜXÙIÜÈ\˜Ú]™H‹žX\›ˆXÚÈKYžK\[ˆ—KÈ“˜[YH[™Ý]]H\˜Ú]™H[ˆHYXØ]Y›Û\ˆ‹žX\›ˆXÚÈK[Ý]Ø\Y˜XÝËÉ\ËI]‹Þˆ—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]ŠJI‰Š\Ëš[œÝ[Y“™YYYØ]ØZ]Ëš[œÝ[
ØØXÚN˜]ØZ]œ‹™š[™
ŠK™\Ü›™]ÈÚ_JN˜]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
JNÛ]]\Ë›Ý]ÏÝ\Ë™š[[˜[YKÏ]\[ÙˆHÒËœ™\ÛÛ™J\Ë˜ÛÛ^˜ÝÙ›]
‹ÝÛÜšÜÜXÙN˜_JJN’Ëœ™\ÛÛ™JK˜ÝÙœXÚØYÙKÞˆŠNÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]œÛÛŽ\ËšœÛÛŸK\Þ[˜ÈOžØ]ØZ]•ŠKÜ™\ÜœK\Þ[˜Ê
OOžÜœ™\ÜœÛÛŠØ˜\ÙN™™K™œ›ÛTÜX›T]
K˜ÝÙ
_JNÛ]X]ØZ]SŠJNÙ›ÜŠ]HÙˆ
\œ™\Ü[™›Ê[™K™œ›ÛTÜX›T]
JJKœ™\ÜœÛÛŠÛØØ][ÛŽ™™K™œ›ÛTÜX›T]
J_JNÚYŠ]\Ë™žT[Š^Û]OX]ØZ]ÕŠK
NØ]ØZ]K›ZÙ\”›ÛZ\ÙJË™\›˜[YJÊKÜ™XÝ\œÚ]™NˆLJNÛ]Ï[K˜Ü™X]UÜš]TÝ™X[JÊNÑKœ\JÊK]ØZ]™]È›ÛZ\ÙJÏOžÐË›ÛŠ™š[š\Ú‹Ê_J__JK\Ë™žT[Ÿ
œ™\Ü[™›ÊXÚØYÙH\˜Ú]™HÙ[™\˜]Y[ˆ	ÜKœ™]J‹ËK•\K”U
_X
Kœ™\ÜœÛÛŠÛÝ]]™™K™œ›ÛTÜX›T]
Ê_JJ_JJK™^]ÛÙJ
__NÙ[˜Ý[Ûˆ›]
KÝÛÜšÜÜXÙNJ^Û]YKœ™\XÙJ‰\È‹›]

JKœ™\XÙJ‰]ˆ‹[]

JNÜ™]\›ˆ™KÔÜX›T]
Š_Y[˜Ý[Ûˆ›]
J^Ü™]\›ˆK›X[šY™\Ý›˜[YHOO[[Ú‹œÛYÚYžRY[
K›X[šY™\Ý›˜[YJNˆœXÚØYÙHŸY[˜Ý[Ûˆ[]
J^Ü™]\›ˆK›X[šY™\Ý™\œÚ[ÛˆOO[[ÙK›X[šY™\Ý™\œÚ[ÛŽˆ[šÛ›ÝÛˆŸ]˜\ˆÛ]VÈ™\[™[˜ÚY\È‹™]‘\[™[˜ÚY\È‹œY\‘\[™[˜ÚY\È—KÛ]HÛÜšÜÜXÙNˆ‹[]JK
OOžÝœX›\ÚÛÛ™šYÉ‰ŠœX›\ÚÛÛ™šYË\I‰Š\O]œX›\ÚÛÛ™šYË\JKœX›\ÚÛÛ™šYË›XZ[‰‰Š›XZ[]œX›\ÚÛÛ™šYË›XZ[ŠKœX›\ÚÛÛ™šYË˜œ›ÝÜÙ\‰‰Š˜œ›ÝÜÙ\]œX›\ÚÛÛ™šYË˜œ›ÝÜÙ\ŠKœX›\ÚÛÛ™šYË›[Ù[I‰Š›[Ù[O]œX›\ÚÛÛ™šYË›[Ù[JKœX›\ÚÛÛ™šYË™^ÜÉ‰Š™^ÜÏ]œX›\ÚÛÛ™šYË™^ÜÊKœX›\ÚÛÛ™šYËš[\ÜÉ‰Šš[\ÜÏ]œX›\ÚÛÛ™šYËš[\ÜÊKœX›\ÚÛÛ™šYË˜š[‰‰Š˜š[]œX›\ÚÛÛ™šYË˜š[ŠJNÛ]YKœ›Ú™XÝÙ›ÜŠ]ÈÙˆÛ]
Y›ÜŠ]HÙˆK›X[šY™\Ý™Ù]›Ü”ØÛÜJÊK˜[Y\Ê
J^Û]\‹žUÛÜšÜÜXÙPžQ\ØÜš\ÜŠJKÏZ‹œ\œÙT˜[™ÙJKœ˜[™ÙJNÚYŠËœ›ÝØÛÛOO[Û]
ZYŠOO[[
^ÚYŠ‹žUÛÜšÜÜXÙPžRY[
JOOO[[
]›ÝÈ™]ÈÝ
ŒK	Ú‹œ™]Q\ØÜš\ÜŠ‹˜ÛÛ™šYÝ\˜][Û‹J_Nˆ›ÈØØ[ÛÜšÜÜXÙH›Ý[™›Üˆ\È˜[™ÙX
_Y[Ù^Û]ŽÚ‹˜\™Q\ØÜš\ÜœÑ\]X[
K‹˜[˜ÚÜ™Y\ØÜš\ÜŠ_ËœÙ[XÝÜOOHŠˆÙ[‹›X[šY™\Ý™\œÚ[ÛÏÈŒŒŒŽ˜ËœÙ[XÝÜOOHŸˆŸËœÙ[XÝÜOOH—ˆÙX	ØËœÙ[XÝÜŸIÛ‹›X[šY™\Ý™\œÚ[ÛÏÈŒŒŒŸX™XËœÙ[XÝÜŽÛ]\ÏOOH™\[™[˜ÚY\ÈÚ‹›XZÙQ\ØÜš\ÜŠK[šÛ›ÝÛˆŠN›[\OO[[	‰™K›X[šY™\Ý™[œÝ\™Q\[™[˜ÞSY]J
K›Ü[Û˜[È›Ü[Û˜[\[™[˜ÚY\ÈŽœÎÝÚVÚ‹œÝš[™ÚYžRY[
JWOYŸ__K]^ÚÛÚÜÎžØ™Y›Ü™UÛÜšÜÜXÙTXÚÚ[™Î˜[]KÛÛ[X[™Î–Ñ×_KÛ][]Ý˜\ˆ™OY]
Œ™J
JNÜYJ
NÝ˜\ˆ˜™OY]
™J
JKÙ[ŽO\›ØÙ\ÜËH˜\XØ][Û‹Ý›™š[‹]ÝÊÚœÛÛˆ‹]HšÎ‹ËÚ[‹]ÝËš[ËÔÝ][Y[ÝŒŒH‹HšÎ‹ËÚ[‹]ÝËš[ËÔÝ][Y[ÝŒH‹HšÎ‹ËÜÛØK™]‹Ü›Ý™[˜[˜ÙKÝŒŒˆ‹ÝHšÎ‹ËÜÛØK™]‹Ü›Ý™[˜[˜ÙKÝŒH‹HšÎ‹ËÙÚ]X‹˜ÛÛKØXÝ[ÛœËÜ[›™\ˆ‹]HšÎ‹ËÜÛØKYœ˜[Y]ÛÜšË™Ú]X‹š[ËÙÚ]X‹XXÝ[ÛœËXZ[\\ËÝÛÜšÙ›ÝËÝŒH‹]HšÎ‹ËÙÚ]X‹˜ÛÛKÛœKØÛKÙÚ]Xˆ‹]HŒ[LH‹™OX\Þ[˜ÊK
OOžÛ]ŽÚYŠ‘ÒUP—ÐPÕSÓ”Ê^ÚYŠPPÕSÓ”×ÒQÕÒÑS—Ô‘TUQTÕÕT“
]›ÝÈ™]ÈÝ
LK	Ô›Ý™[˜[˜ÙHÙ[™\˜][Ûˆ[ˆÚ]XˆXÝ[ÛœÈ™\]Z\™\ÈÜš]HˆXØÙ\ÜÈÈHšY]ÚÙ[ˆˆ\›Z\ÜÚ[Û‰ÊNÛ]ÏJ‘ÒUP—ÕÓÔ’Ñ“Õ×Ô‘QŸˆŠKœ™\XÙJ	Ð‘ÒUP—Ô‘TÔÒUÔ–_KØˆŠKO\Ëš[™^ÙŠŠK\ËœÛXÙJJKÏ\ËœÛXÙJJÌJNÜ^×Ý\NœÝXš™XÝ™K™YXØ]U\N™Ý™YXØ]NžØZ[Yš[š][ÛŽžØZ[\N›]^\›˜[\˜[Y]\œÎžÝÛÜšÙ›ÝÎžÜ™YŽ˜Ë™\ÜÚ]ÜžN˜	Ð‘ÒUP—ÔÑT•‘T—ÕT“KÉÐ‘ÒUP—Ô‘TÔÒUÔ–_X]›Ÿ_K[\›˜[\˜[Y]\œÎžÙÚ]XŽžÙ]™[Û˜[YN‘ÒUP—ÑU‘S•ÓSQK™\ÜÚ]ÜžWÚY‘ÒUP—Ô‘TÔÒUÔ–WÒQ™\ÜÚ]ÜžWÛÝÛ™\—ÚY‘ÒUP—Ô‘TÔÒUÔ–WÓÕÓ‘T—ÒQ_K™\ÛÛ™Y\[™[˜ÚY\Î–ÞÝ\šN˜Ú]
ÉÐ‘ÒUP—ÔÑT•‘T—ÕT“KÉÐ‘ÒUP—Ô‘TÔÒUÔ–_P	Ð‘ÒUP—Ô‘QŸXYÙ\ÝžÙÚ]ÛÛ[Z]‘ÒUP—ÔÒ__W_K[‘]Z[ÎžØZ[\ŽžÚY˜	ÙKÉÐ”•S“‘T—ÑS•’T“Ó“QS•XKY]Y]NžÚ[›ØØ][Û’Y˜	Ð‘ÒUP—ÔÑT•‘T—ÕT“KÉÐ‘ÒUP—Ô‘TÔÒUÔ–_KØXÝ[ÛœËÜ[œËÉÐ‘ÒUP—Ô•S—ÒQKØ][\ËÉÐ‘ÒUP—Ô•S—ÐUSTX____Y[ÙHYŠ‘ÒUP—ÐÒJ^ÚYŠP”ÒQÔÕÔ‘WÒQÕÒÑSŠ]›ÝÈ™]ÈÝ
LK›Ý™[˜[˜ÙHÙ[™\˜][Ûˆ[ˆÚ]XˆÒH™\]Z\™\È”ÒQÔÕÔ‘WÒQÕÒÑSˆˆÚ]œÚYÜÝÜ™Hˆ]YY[˜ÙHÈ™H™\Ù[[ˆšYÝÚÙ[œÈ‹ˆ›Üˆ[Ü™H[™›ÈÙYN‚šÎ‹ËÙØÜË™Ú]X‹˜ÛÛKÙYKØÚKÜÙXÜ™]ËÚYÝÚÙ[—Ø]][XØ][Û‹š[
NÜ^×Ý\N]ÝXš™XÝ™K™YXØ]U\Nš™YXØ]NžØZ[\N˜	Þ]KÉÑ]XZ[\ŽžÚY˜	ÐÒWÔ“Ò‘PÕÕT“KËKÜ[›™\œËÉÐÒWÔ•S“‘T—ÒQXK[›ØØ][ÛŽžØÛÛ™šYÔÛÝ\˜ÙNžÝ\šN˜Ú]
ÉÐÒWÔ“Ò‘PÕÕT“XYÙ\ÝžÜÚLNÒWÐÓÓSRUÔÒ_K[žTÚ[ÒWÒ“Ð—ÓSQ_K\˜[Y]\œÎžÐÒNÒKÒWÐTWÑÔTSÕT“ÒWÐTWÑÔTSÕT“ÒWÐTWÕÕT“ÒWÐTWÕÕT“ÒWÐ•RSÐ‘Q“Ô‘WÔÒNÒWÐ•RSÐ‘Q“Ô‘WÔÒKÒWÐ•RSÒQÒWÐ•RSÒQÒWÐ•RSÓSQNÒWÐ•RSÓSQKÒWÐ•RSÔ‘QŽÒWÐ•RSÔ‘Q‹ÒWÐ•RSÔ‘Q—ÓSQNÒWÐ•RSÔ‘Q—ÓSQKÒWÐ•RSÔ‘Q—ÔÓQÎÒWÐ•RSÔ‘Q—ÔÓQËÒWÐ•RSÔÕQÑNÒWÐ•RSÔÕQÑKÒWÐÓÓSRUÐ‘Q“Ô‘WÔÒNÒWÐÓÓSRUÐ‘Q“Ô‘WÔÒKÒWÐÓÓSRUÐ”SÒÒWÐÓÓSRUÐ”SÒÒWÐÓÓSRUÔ‘Q—ÓSQNÒWÐÓÓSRUÔ‘Q—ÓSQKÒWÐÓÓSRUÔ‘Q—Ô“ÕPÕQÒWÐÓÓSRUÔ‘Q—Ô“ÕPÕQÒWÐÓÓSRUÔ‘Q—ÔÓQÎÒWÐÓÓSRUÔ‘Q—ÔÓQËÒWÐÓÓSRUÔÒNÒWÐÓÓSRUÔÒKÒWÐÓÓSRUÔÒÔ•ÔÒNÒWÐÓÓSRUÔÒÔ•ÔÒKÒWÐÓÓSRUÕSQTÕSTÒWÐÓÓSRUÕSQTÕSTÒWÐÓÓSRUÕUNÒWÐÓÓSRUÕUKÒWÐÓÓ‘’Q×ÔUÒWÐÓÓ‘’Q×ÔUÒWÑQUSÐ”SÒÒWÑQUSÐ”SÒÒWÑTS‘SÖWÔ“ÖWÑT‘PÕÑÔ“ÕTÒSPQÑWÔ‘Q’VÒWÑTS‘SÖWÔ“ÖWÑT‘PÕÑÔ“ÕTÒSPQÑWÔ‘Q’VÒWÑTS‘SÖWÔ“ÖWÑÔ“ÕTÒSPQÑWÔ‘Q’VÒWÑTS‘SÖWÔ“ÖWÑÔ“ÕTÒSPQÑWÔ‘Q’VÒWÑTS‘SÖWÔ“ÖWÔÑT•‘TŽÒWÑTS‘SÖWÔ“ÖWÔÑT•‘T‹ÒWÑTS‘SÖWÔ“ÖWÕTÑTŽÒWÑTS‘SÖWÔ“ÖWÕTÑT‹ÒWÒ“Ð—ÒQÒWÒ“Ð—ÒQÒWÒ“Ð—ÓSQNÒWÒ“Ð—ÓSQKÒWÒ“Ð—ÓSQWÔÓQÎÒWÒ“Ð—ÓSQWÔÓQËÒWÒ“Ð—ÔÕQÑNÒWÒ“Ð—ÔÕQÑKÒWÒ“Ð—ÔÕT•QÐUÒWÒ“Ð—ÔÕT•QÐUÒWÒ“Ð—ÕT“ÒWÒ“Ð—ÕT“ÒWÓ“ÑWÕÕSÒWÓ“ÑWÕÕSÒWÔQÑT×ÑÓPRSŽÒWÔQÑT×ÑÓPRS‹ÒWÔQÑT×ÕT“ÒWÔQÑT×ÕT“ÒWÔTSS‘WÐÔ‘PUQÐUÒWÔTSS‘WÐÔ‘PUQÐUÒWÔTSS‘WÒQÒWÔTSS‘WÒQÒWÔTSS‘WÒRQÒWÔTSS‘WÒRQÒWÔTSS‘WÔÓÕTÑNÒWÔTSS‘WÔÓÕTÑKÒWÔTSS‘WÕT“ÒWÔTSS‘WÕT“ÒWÔ“Ò‘PÕÐÓTÔÒQ’PÐUSÓ—ÓP‘SÒWÔ“Ò‘PÕÐÓTÔÒQ’PÐUSÓ—ÓP‘SÒWÔ“Ò‘PÕÑTÐÔ’TSÓŽÒWÔ“Ò‘PÕÑTÐÔ’TSÓ‹ÒWÔ“Ò‘PÕÒQÒWÔ“Ò‘PÕÒQÒWÔ“Ò‘PÕÓSQNÒWÔ“Ò‘PÕÓSQKÒWÔ“Ò‘PÕÓSQTÔPÑNÒWÔ“Ò‘PÕÓSQTÔPÑKÒWÔ“Ò‘PÕÓSQTÔPÑWÒQÒWÔ“Ò‘PÕÓSQTÔPÑWÒQÒWÔ“Ò‘PÕÔUÒWÔ“Ò‘PÕÔUÒWÔ“Ò‘PÕÔUÔÓQÎÒWÔ“Ò‘PÕÔUÔÓQËÒWÔ“Ò‘PÕÔ‘TÔÒUÔ–WÓS‘ÕPQÑTÎÒWÔ“Ò‘PÕÔ‘TÔÒUÔ–WÓS‘ÕPQÑTËÒWÔ“Ò‘PÕÔ“ÓÕÓSQTÔPÑNÒWÔ“Ò‘PÕÔ“ÓÕÓSQTÔPÑKÒWÔ“Ò‘PÕÕUNÒWÔ“Ò‘PÕÕUKÒWÔ“Ò‘PÕÕT“ÒWÔ“Ò‘PÕÕT“ÒWÔ“Ò‘PÕÕ’TÒP’SUNÒWÔ“Ò‘PÕÕ’TÒP’SUKÒWÔ‘QÒTÕ–NÒWÔ‘QÒTÕ–KÒWÔ‘QÒTÕ–WÒSPQÑNÒWÔ‘QÒTÕ–WÒSPQÑKÒWÔ‘QÒTÕ–WÕTÑTŽÒWÔ‘QÒTÕ–WÕTÑT‹ÒWÔ•S“‘T—ÑTÐÔ’TSÓŽÒWÔ•S“‘T—ÑTÐÔ’TSÓ‹ÒWÔ•S“‘T—ÒQÒWÔ•S“‘T—ÒQÒWÔ•S“‘T—ÕQÔÎÒWÔ•S“‘T—ÕQÔËÒWÔÑT•‘T—ÒÔÕÒWÔÑT•‘T—ÒÔÕÒWÔÑT•‘T—ÓSQNÒWÔÑT•‘T—ÓSQKÒWÔÑT•‘T—ÔÔ•ÒWÔÑT•‘T—ÔÔ•ÒWÔÑT•‘T—Ô“ÕÐÓÓÒWÔÑT•‘T—Ô“ÕÐÓÓÒWÔÑT•‘T—Ô‘U’TÒSÓŽÒWÔÑT•‘T—Ô‘U’TÒSÓ‹ÒWÔÑT•‘T—ÔÒSÔÔÒÒÔÕÒWÔÑT•‘T—ÔÒSÔÔÒÒÔÕÒWÔÑT•‘T—ÔÒSÔÔÒÔÔ•ÒWÔÑT•‘T—ÔÒSÔÔÒÔÔ•ÒWÔÑT•‘T—ÕT“ÒWÔÑT•‘T—ÕT“ÒWÔÑT•‘T—Õ‘T”ÒSÓŽÒWÔÑT•‘T—Õ‘T”ÒSÓ‹ÒWÔÑT•‘T—Õ‘T”ÒSÓ—ÓPR“ÔŽÒWÔÑT•‘T—Õ‘T”ÒSÓ—ÓPR“Ô‹ÒWÔÑT•‘T—Õ‘T”ÒSÓ—ÓRS“ÔŽÒWÔÑT•‘T—Õ‘T”ÒSÓ—ÓRS“Ô‹ÒWÔÑT•‘T—Õ‘T”ÒSÓ—ÔUÒÒWÔÑT•‘T—Õ‘T”ÒSÓ—ÔUÒÒWÕSTUWÔ‘QÒTÕ–WÒÔÕÒWÕSTUWÔ‘QÒTÕ–WÒÔÕÒUP—ÐÒN‘ÒUP—ÐÒKÒUP—Ñ‘PUT‘TÎ‘ÒUP—Ñ‘PUT‘TËÒUP—ÕTÑT—ÒQ‘ÒUP—ÕTÑT—ÒQÒUP—ÕTÑT—ÓÑÒSŽ‘ÒUP—ÕTÑT—ÓÑÒS‹•S“‘T—ÑÑS‘TUWÐT•QPÕ×ÓQUQUN”•S“‘T—ÑÑS‘TUWÐT•QPÕ×ÓQUQU_K[š\›Û›Y[žÛ˜[YNÒWÔ•S“‘T—ÑTÐÔ’TSÓ‹\˜Ú]XÝ\™NÒWÔ•S“‘T—ÑVPÕUP“WÐTÒÙ\™\ŽÒWÔÑT•‘T—ÕT“›Ú™XÝÒWÔ“Ò‘PÕÔU›ØŽžÚYÒWÒ“Ð—ÒQK\[[™NžÚYÒWÔTSS‘WÒQ™YŽÒWÐÓÓ‘’Q×ÔU__KY]Y]NžØZ[[›ØØ][Û’Y˜	ÐÒWÒ“Ð—ÕT“XÛÛ\][™\ÜÎžÜ\˜[Y]\œÎˆL[š\›Û›Y[ˆLX]\šX[ÎˆL_K™\›ÙXÚX›NˆL_KX]\šX[Î–ÞÝ\šN˜Ú]
ÉÐÒWÔ“Ò‘PÕÕT“XYÙ\ÝžÜÚLNÒWÐÓÓSRUÔÒ__W___Y[ÙH›ÝÈ™]ÈÝ
LK”›Ý™[˜[˜ÙHÙ[™\˜][Ûˆ\ÈÛ›HÝ\ÜY[ˆÚ]XˆXÝ[ÛœÈ[™Ú]XˆÒHŠNÜ™]\›ˆ˜™K˜]\Ý
Y™™\‹™œ›ÛJ”ÓÓ‹œÝš[™ÚYžJŠJK
_NØ\Þ[˜È[˜Ý[Ûˆ]
KØXØÙ\ÜÎœ‹YÎœË™YÚ\ÝžN˜KÚ]XY›‹›Ý™[˜[˜ÙN˜ßJ^Û]YK›X[šY™\Ý›˜[YKYK›X[šY™\Ý™\œÚ[Û‹Z‹œÝš[™ÚYžRY[
ŠKO^™K™Y˜][™œ›ÛQ]JØ[ÛÜš]\Î–ÈœÚLH‹œÚMLLˆ—_JKÏ\ÏÚØ™JKŠKÏX]ØZ]X™JJKX]ØZ]PK™Ù[”XÚØYÙSX[šY™\Ý
JKOX	ÚKIÜKÞ˜[™]ÈT“
	Õ˜ÊJ_KÉÚKËKÉÒ_X
KÏ^ÖÒWNžØÛÛ[Ý\Nˆ˜\XØ][Û‹ÛØÝ]\Ý™X[H‹]NÔÝš[™Ê˜˜\ÙMŠK[™Ý›[™Ý_NÚYŠÊ^Û]O^Û˜[YN˜ÙÎ›œKÉÚœ™\XÙJ×Ë‰MŠ_P	ÜXYÙ\ÝžÜÚMLLŽ‘KœÚMLL–ÌKš^YÙ\Ý

__KOX]ØZ]™JÕWJKOR”ÓÓ‹œÝš[™ÚYžJJNÓÖØ	ÚKIÜKœÚYÜÝÜ™XO^ØÛÛ[Ý\N–K›YYXU\K]NK[™ÝK›[™Ý_\™]\›ž×ÚYšØ]XÚY[Î“Ë˜[YNšXØÙ\ÜÎË™\Ý]YÜÈŽžÖÜ×NœK™\œÚ[ÛœÎžÖÜNžË‹‹žÚY˜	ÚP	ÜX˜[YNš™\œÚ[ÛŽœÚ]XY›‹\ÝžÜÚ\Ý[N‘KœÚLVÌKš^YÙ\Ý

K[YÜš]N‘KœÚMLL–ÌKÔÝš[™Ê
K\˜˜[•ÔÝš[™Ê
___K™XYYN”ß_X\Þ[˜È[˜Ý[ÛˆÝ
J^Ýž^Û]ÜÝÝ]OX]ØZ]\‹™^XÝœ
™Ú]‹Èœ™]‹\\œÙH‹‹K\™]œË[Û›H‹’PQ—KØÝÙ™_JNÜ™]\›ˆš[J
OOOHˆÝ›ÚYš[J
_XØ]ÚÜ™]\›Ÿ_Y[˜Ý[ÛˆØ™JK
^Û]YKœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŽÜ™]\›ˆK›X[šY™\ÝœX›\ÚÛÛ™šYÉ‰\[ÙˆK›X[šY™\ÝœX›\ÚÛÛ™šYË˜XØÙ\ÜÏOHœÝš[™ÈÙK›X[šY™\ÝœX›\ÚÛÛ™šYË˜XØÙ\ÜÎœ‹™Ù]
›œTX›\ÚXØÙ\ÜÈŠHOO[[Ü‹™Ù]
›œTX›\ÚXØÙ\ÜÈŠNœØÛÜOÈœ™\ÝšXÝYŽˆœX›XÈŸX\Þ[˜È[˜Ý[ÛˆX™JJ^Û]Y™KÔÜX›T]
	ÙK˜ÝÙKÔ‘PQQK›Y
KYK›X[šY™\Ý›˜[YKOXÈ	Ú‹œÝš[™ÚYžRY[
Š_B˜Ýž^ØOX]ØZ]Kœ™XYš[T›ÛZ\ÙJ]ŽŠ_XØ]Ú
Š^ÚYŠ‹˜ÛÙOOOH‘S“ÑS•Š\™]\›ˆNÝ›ÝÈŸ\™]\›ˆ_]˜\ˆ’Ï^ÛœP[Ø^\Ð]]žÙ\ØÜš\[ÛŽˆ•T“ÙˆHÙ[XÝYœH™YÚ\ÝžH
›ÝNˆœH[\œš\ÙH\Û‰ÝÝ\ÜY
H‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_KœP]]Y[žÙ\ØÜš\[ÛŽˆ]][XØ][ÛˆY[]H›ÜˆHœH™YÚ\ÝžH
Ø]][ˆœH[™X\›ˆŒJH‹\Nˆ”ÑPÔ‘U‹Y˜][›[KœP]]ÚÙ[ŽžÙ\ØÜš\[ÛŽˆ]][XØ][ÛˆÚÙ[ˆ›ÜˆHœH™YÚ\ÝžH
Ø]]ÚÙ[ˆ[ˆœH[™X\›ˆŒJH‹\Nˆ”ÑPÔ‘U‹Y˜][›[_K˜™O^ÛœP]Y]™YÚ\ÝžNžÙ\ØÜš\[ÛŽˆ”™YÚ\ÝžHÈ]Y\žH›Üˆ]Y]™\ÜÈ‹\Nˆ”Õ’S‘È‹Y˜][›[KœTX›\Ú™YÚ\ÝžNžÙ\ØÜš\[ÛŽˆ”™YÚ\ÝžHÈ\ÚXÚØYÙ\ÈÈ‹\Nˆ”Õ’S‘È‹Y˜][›[KœT™YÚ\ÝžTÙ\™\ŽžÙ\ØÜš\[ÛŽˆ•T“ÙˆHÙ[XÝYœH™YÚ\ÝžH
›ÝNˆœH[\œš\ÙH\Û‰ÝÝ\ÜY
H‹\Nˆ”Õ’S‘È‹Y˜][ˆšÎ‹ËÜ™YÚ\ÝžKžX\›œÙË˜ÛÛHŸ_KÝ^ÛœSZ[š[X[YÙQØ]NžÙ\ØÜš\[ÛŽˆ“Z[š[][HYÙHÙˆHXÚØYÙH™\œÚ[ÛˆXØÛÜ™[™ÈÈHX›\Ú]HÛˆHœH™YÚ\ÝžHÈ™HÛÛœÚY\™Y›Üˆ[œÝ[][Ûˆ‹\Nˆ‘TUSÓˆ‹[š]ˆ›H‹Y˜][ˆŒHŸKœT™X\›Ý™YXÚØYÙ\ÎžÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆXÚØYÙH\ØÜš\ÜœÈÜˆXÚØYÙH˜[YHÛØˆ]\›œÈÈ^ÛYHœ›ÛHHZ[š[][H™[X\ÙHYÙHÚXÚÈ‹\Nˆ”Õ’S‘È‹\Ð\œ˜^NˆLY˜][–×__K^ØÛÛ™šYÝ\˜][ÛŽžË‹‹ž’Ë‹‹”˜™K‹‹ÝœTØÛÜ\ÎžÙ\ØÜš\[ÛŽˆ”Ù][™ÜÈ\ˆXÚØYÙHØÛÜH‹\Nˆ“PT‹˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆˆ‹\Nˆ”ÒTH‹›Ü\Y\ÎžË‹‹ž’Ë‹‹”˜™___KœT™YÚ\ÝšY\ÎžÙ\ØÜš\[ÛŽˆ”Ù][™ÜÈ\ˆ™YÚ\ÝžH‹\Nˆ“PT‹›Ü›X[^™RÙ^\Î•˜Ë˜[YQYš[š][ÛŽžÙ\ØÜš\[ÛŽˆˆ‹\Nˆ”ÒTH‹›Ü\Y\ÎžË‹‹ž’ß___K™]Ú\œÎ–ÖQZK™\ÛÛ™\œÎ–ÒÑ‘‘_KPÝ˜\ˆR^ßNÖ]
R‹ÓœP]Y]ÛÛ[X[™Š
OOžLKœR[™›ÐÛÛ[X[™Š
OO‘LKœSÙÚ[ÛÛ[X[™Š
OO’LKœSÙÛÝ]ÛÛ[X[™Š
OOÌKœTX›\ÚÛÛ[X[™Š
OOŒKœUYÐYÛÛ[X[™Š
OO”ÌKœUYÓ\ÝÛÛ[X[™Š
OOŒKœUYÔ™[[Ý™PÛÛ[X[™Š
OO‘KœUÚØ[ZPÛÛ[X[™Š
OO˜ŒKY˜][Š
OO“ÝœP]Y]\\ÎŠ
OOž˜‹œP]Y]][ÎŠ
OOšJNÜYJ
NÜYJ
NÕ

NÝ˜\ˆ’Y]
›Ê
JNÝ[

NÝ˜\ˆ˜^ßNÖ]
˜‹Ñ[š\›Û›Y[Š
OO’Ø‹Ù]™\š]NŠ
OO’˜ŸJNÝ˜\ˆØJÏOŠË[H˜[‹Ë”›ÙXÝ[ÛHœ›ÙXÝ[Ûˆ‹Ë‘]™[ÜY[H™]™[ÜY[‹ÊJJØŸßJK˜JOŠ‹’[™›ÏHš[™›È‹‹“ÝÏH›ÝÈ‹‹“[Ù\˜]OH›[Ù\˜]H‹‹’YÚHšYÚ‹‹Üš]XØ[H˜Üš]XØ[‹ŠJJ˜ŸßJNÝ˜\ˆ^ßNÖ]
Ø[Ù]™\š]Y\ÎŠ
OO›LKÙ]XÚØYÙ\ÎŠ
OO‹Ù]™\Ü™YNŠ
OO‰ËÙ]Ù]™\š]R[˜Û\Ú[ÛœÎŠ
OO–ËÙ]Ü]™[\[™[˜ÚY\ÎŠ
OO™RŸJNÜYJ
NÝ˜\ˆ™OY]
J
JNÝ˜\ˆLOVÈš[™›È‹›ÝÈ‹›[Ù\˜]H‹šYÚ‹˜Üš]XØ[—NÙ[˜Ý[ÛˆÊJ^ÚYŠ\[ÙˆOˆHŠ\™]\›ˆ™]ÈÙ]
LJNÛ][LKš[™^ÙŠJK[LKœÛXÙJ
NÜ™]\›ˆ™]ÈÙ]
Š_Y[˜Ý[Ûˆ	ÊJ^Û]^ßK^ØÚ[™[ŽNÙ›ÜŠ]ÜËW[ÙˆÙKœÛÜX\
Øš™XÝ™[šY\ÊJKO›–ÌJJY›ÜŠ]ˆÙˆÙKœÛÜX\
KÏO˜	ØËšYX
J]Ø	ÜßKÉÛ‹šYXO^Ý˜[YNœK\JK•\K’QS•‹œ\œÙRY[
ÊJKÚ[™[ŽžÒQ\[Ùˆ‹šYH‰‰žÛX™[ˆ’Q‹˜[YNœK\JK•\K’Q‹šY
_K\ÜÝYNžÛX™[ˆ’\ÜÝYH‹˜[YNœK\JK•\K““×ÒS•‹]J_KT“\[Ùˆ‹\›H‰‰žÛX™[ˆ•T“‹˜[YNœK\JK•\K•T“‹\›
_KÙ]™\š]NžÛX™[ˆ”Ù]™\š]H‹˜[YNœK\JK•\K““×ÒS•‹œÙ]™\š]J_K•[™\˜X›H™\œÚ[ÛœÈŽžÛX™[ˆ•[™\˜X›H™\œÚ[ÛœÈ‹˜[YNœK\JK•\K”S‘ÑK‹[™\˜X›WÝ™\œÚ[ÛœÊ_K•™YH™\œÚ[ÛœÈŽžÛX™[ˆ•™YH™\œÚ[ÛœÈ‹Ú[™[Ž–Ë‹‹›‹™\œÚ[Ûœ×KœÛÜ
™K™Y˜][˜ÛÛ\\™JK›X\
ÏOŠÝ˜[YNœK\JK•\K”‘Q‘T‘SÑKÊ_JJ_K\[™[ÎžÛX™[ˆ‘\[™[È‹Ú[™[Ž‘ÙKœÛÜX\
‹™\[™[ËÏOš‹œÝš[™ÚYžSØØ]ÜŠÊJK›X\
ÏOŠÝ˜[YNœK\JK•\K“ÐÐUÔ‹Ê_JJ___NÜ™]\›ˆŸY[˜Ý[ÛˆRŠKØ[œ‹[š\›Û›Y[œßJ^Û]OV×K\ÙKÛÜšÜÜXÙ\Î–ÝKÏVÈ˜[‹œ›ÙXÝ[Ûˆ—Kš[˜ÛY\ÊÊKVÈ˜[‹™]™[ÜY[—Kš[˜ÛY\ÊÊNÙ›ÜŠ]ÙˆŠY›ÜŠ]Ùˆ˜[˜ÚÜ™YXÚØYÙK™\[™[˜ÚY\Ë˜[Y\Ê
JJ›X[šY™\Ý™]‘\[™[˜ÚY\Ëš\ÊšY[\Ú
OÈYŽˆXÊ_Kœ\Ú
ÝÛÜšÜÜXÙNœ\[™[˜ÞNšJNÜ™]\›ˆ_Y[˜Ý[ÛˆŠKÜ™XÝ\œÚ]™NœŸJ^Û]Ï[™]ÈX\O[™]ÈÙ]V×KÏYK˜ÛÛ™šYÝ\˜][Û‹›XZÙT™\ÛÛ™\Š
K^Ü›Ú™XÝ™K™\ÛÛ™\Ž˜ßKJJOOžÛ]ÏYKœÝÜ™Y™\ÛÛ][ÛœË™Ù]
K™\ØÜš\Ü’\Ú
NÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH™\ÛÛ][ÛˆÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÚYŠXKš\ÊÊJXK˜Y
ÊNÙ[ÙH™]\›ŽÛ]ÏYKœÝÜ™YXÚØYÙ\Ë™Ù]
ÊNÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆHXÚØYÙHÚÝ[]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]Z‹™[œÝ\™Q]š\X[^™Y\ØÜš\ÜŠJNÚYŠËœÝ\ÜÑ\ØÜš\ÜŠŠJ^Û]XË™Ù]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠNÚYŠØš™XÝšÙ^\Ê
K›[™ÝŒ
Y›ÜŠ]ÈÙˆØš™XÝ˜[Y\Ê
J\
Ê_ZYŠ‹™[œÝ\™Q]š\X[^™YØØ]ÜŠÊKœ™Y™\™[˜ÙKœÝ\ÕÚ]
›œNˆŠI‰”Ë™\œÚ[ÛˆOO[[
^Û]Z‹œÝš[™ÚYžRY[
ÊKÏQÙK™Ù]X\Ú]Y˜][
Ë
NÑÙK™Ù]\œ˜^UÚ]Y˜][
ËË™\œÚ[ÛŠKœ\Ú

_ZYŠŠY›ÜŠ]ÙˆË™\[™[˜ÚY\Ë˜[Y\Ê
J[‹œ\Ú
ÔËJ_NÙ›ÜŠ]ÝÛÜšÜÜXÙNš\[™[˜ÞN‘_[Ùˆ
[‹œ\Ú
Ú˜[˜ÚÜ™YØØ]Ü‹WJNÙ›ÜŠÛ‹›[™ÝŒÊ^Û]ÚWO[‹œÚY

NÜ
J_\™]\›ˆß]˜\ˆLOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë˜[ZK›ÛÛX[Š‹PKKX[‹LKÙ\ØÜš\[ÛŽˆ]Y]\[™[˜ÚY\Èœ›ÛH[ÛÜšÜÜXÙ\ÈŸJNÝ\Ëœ™XÝ\œÚ]™OZK›ÛÛX[Š‹T‹K\™XÝ\œÚ]™H‹LKÙ\ØÜš\[ÛŽˆ]Y]˜[œÚ]]™H\[™[˜ÚY\È\ÈÙ[ŸJNÝ\Ë™[š\›Û›Y[ZK”Ýš[™Ê‹KY[š\›Û›Y[‹˜[‹Ù\ØÜš\[ÛŽˆ•ÚXÚ[š\›Û›Y[ÈÈÛÝ™\ˆ‹˜[Y]ÜŽšÜÊØŠ_JNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\Ë››Ñ\™XØ][ÛœÏZK›ÛÛX[Š‹K[›ËY\™XØ][ÛœÈ‹LKÙ\ØÜš\[ÛŽˆ‘Û‰ÝØ\›ˆX›Ý]\™XØ]YXÚØYÙ\ÈŸJNÝ\ËœÙ]™\š]OZK”Ýš[™Ê‹K\Ù]™\š]H‹š[™›È‹Ù\ØÜš\[ÛŽˆ“Z[š[X[Ù]™\š]H™\]Y\ÝY›ÜˆXÚØYÙ\ÈÈ™H\Ü^YY‹˜[Y]ÜŽšÜÊ˜Š_JNÝ\Ë™^ÛY\ÏZK\œ˜^J‹KY^ÛYH‹×KÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆÛØˆ]\›œÈÙˆXÚØYÙ\ÈÈ^ÛYHœ›ÛH]Y]ŸJNÝ\ËšYÛ›Ü™\ÏZK\œ˜^J‹KZYÛ›Ü™H‹×KÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆÛØˆ]\›œÈÙˆYš\ÛÜžHQ	ÜÈÈYÛ›Ü™H[ˆH]Y]™\ÜŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹˜]Y]—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆœ\™›Ü›HH[™\˜Xš[]H]Y]YØZ[œÝH[œÝ[YXÚØYÙ\È‹]Z[Î˜ˆ\ÈÛÛ[X[™ÚXÚÜÈ›ÜˆÛ›ÝÛˆÙXÝ\š]H™\ÜÈÛˆHXÚØYÙ\È[ÝH\ÙKˆH™\ÜÈ\™HžHY˜][^˜XÝYœ›ÛHHœH™YÚ\ÝžK[™X^HÜˆX^H›Ý™H™[]˜[È[Ý\ˆXÝX[›ÙÜ˜[H
›Ý[[™\˜Xš[]Y\ÈY™™XÝ[ÛÙH]ÊK‚‚ˆ›ÜˆÛÛœÚ\Ý[˜ÞHÚ]Ý\ˆÝ\ˆÛÛ[X[™ÈHY˜][\ÈÈÛ›HÚXÚÈH\™XÝ\[™[˜ÚY\È›ÜˆHXÝ]™HÛÜšÜÜXÙKˆÈ^[™\ÈÙX\˜ÚÈ[ÛÜšÜÜXÙ\Ë\ÙHPKKX[ˆÈ^[™\ÈÙX\˜ÚÈ›Ý\™XÝ[™˜[œÚ]]™H\[™[˜ÚY\Ë\ÙHT‹K\™XÝ\œÚ]™W‚‚ˆ\Z[™ÈHK\Ù]™\š]W›YÈÚ[[Z]H]Y]X›HÈ[™\˜Xš[]Y\ÈÙˆHÛÜœ™\ÜÛ™[™ÈÙ]™\š]H[™X›Ý™Kˆ˜[Y˜[Y\È\™H	ÛLK›X\
O˜	ÜŸW
Kš›Ú[Š‹Š_K‚‚ˆYˆHKZœÛÛ—›YÈ\ÈÙ]X\›ˆÚ[š[HÝ]]^XÝH\È™XÙZ]™Yœ›ÛHH™YÚ\ÝžKˆ™YØ\™\ÜÈÙˆ\È›YËH›ØÙ\ÜÈÚ[^]Ú]H›Û‹^™\›È^]ÛÙHYˆH™\Ü\È›Ý[™›ÜˆHÙ[XÝYXÚØYÙ\Ë‚‚ˆYˆÙ\Z[ˆXÚØYÙ\È›ÙXÙH˜[ÙHÜÚ]]™\È›ÜˆH\XÝ[\ˆ[š\›Û›Y[HKY^ÛYW›YÈØ[ˆ™H\ÙYÈ^ÛYH[žH[X™\ˆÙˆXÚØYÙ\Èœ›ÛHH]Y]ˆ\ÈØ[ˆ[ÛÈ™HÙ][ˆHÛÛ™šYÝ\˜][Ûˆš[HÚ]HœP]Y]^ÛYTXÚØYÙ\×Ü[Û‹‚‚ˆYˆ\XÝ[\ˆYš\ÛÜšY\È\™H™YYYÈ™HYÛ›Ü™YHKZYÛ›Ü™W›YÈØ[ˆ™H\ÙYÚ]Yš\ÛÜžHQ	ÜÈÈYÛ›Ü™H[žH[X™\ˆÙˆYš\ÛÜšY\È[ˆH]Y]™\Üˆ\ÈØ[ˆ[ÛÈ™HÙ][ˆHÛÛ™šYÝ\˜][Ûˆš[HÚ]HœP]Y]YÛ›Ü™PYš\ÛÜšY\×Ü[Û‹‚‚ˆÈ[™\œÝ[™H\[™[˜ÞH™YH™\]Z\š[™È[™\˜X›HXÚØYÙ\ËÚXÚÈH˜]È™\ÜÚ]HKZœÛÛ—›YÈÜˆ\ÙHX\›ˆÚHXÚØYÙWÈÙ][Ü™H[™›Ü›X][Ûˆ\ÈÈÚÈ\[™ÈÛˆ[K‚ˆ^[\\Î–ÖÈÚXÚÜÈ›ÜˆÛ›ÝÛˆÙXÝ\š]H\ÜÝY\ÈÚ]H[œÝ[YXÚØYÙ\ËˆHÝ]]\ÈH\ÝÙˆÛ›ÝÛˆ\ÜÝY\Ëˆ‹žX\›ˆœH]Y]—KÈ]Y]\[™[˜ÚY\È[ˆ[ÛÜšÜÜXÙ\È‹žX\›ˆœH]Y]KX[—KÈ“[Z]]Y][™ÈÈ\[™[˜ÚY\Ø
^ÛY\È]‘\[™[˜ÚY\Ø
H‹žX\›ˆœH]Y]KY[š\›Û›Y[›ÙXÝ[Ûˆ—KÈ”ÚÝÈ]Y]™\Ü\È˜[Y”ÓÓˆ‹žX\›ˆœH]Y]KZœÛÛˆ—KÈ]Y][\™XÝ[™˜[œÚ]]™H\[™[˜ÚY\È‹žX\›ˆœH]Y]K\™XÝ\œÚ]™H—KÈ“Ý]][Ù\˜]H
Üˆ[Ü™HÙ]™\™JH[™\˜Xš[]Y\È‹žX\›ˆœH]Y]K\Ù]™\š]H[Ù\˜]H—KÈ‘^ÛYHÙ\Z[ˆXÚØYÙ\È‹žX\›ˆœH]Y]KY^ÛYHXÚØYÙLHKY^ÛYHXÚØYÙLˆ—KÈ’YÛ›Ü™HÜXÚYšXÈYš\ÛÜšY\È‹žX\›ˆœH]Y]KZYÛ›Ü™HLŒÍMÈKZYÛ›Ü™HÍMÌŒH—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]YRŠËKØ[\Ë˜[[š\›Û›Y[\Ë™[š\›Û›Y[JKÏ]ŠË‹Ü™XÝ\œÚ]™N\Ëœ™XÝ\œÚ]™_JKP\œ˜^K™œ›ÛJ™]ÈÙ]
Ë‹‹œ‹™Ù]
›œP]Y]^ÛYTXÚØYÙ\ÈŠK‹‹\Ë™^ÛY\×JJKSØš™XÝ˜Ü™X]J[
NÙ›ÜŠ]ÓËW[ÙˆÊY‹œÛÛYJOOœ’‹™Y˜][š\ÓX]Ú
ËJJ_
Ó×OVË‹‹•KšÙ^\Ê
WJNÛ]YÚK™Ù]]Y]™YÚ\ÝžJØÛÛ™šYÝ\˜][ÛŽœŸJKKÏX]ØZ]ÐKœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜Ê
OOžÛ]ÏY[‹œÜÝ
‹ËKÛœKÝŒKÜÙXÝ\š]KØYš\ÛÜšY\ËØ[È‹Ø]]\N™[‹]]\K‘TÕÑQ‘“Ô•ÛÛ™šYÝ\˜][ÛŽœ‹œÛÛ”™\ÜÛœÙNˆL™YÚ\ÝžNšJKO]\Ë››Ñ\™XØ][ÛœÏÖ×N˜]ØZ]›ÛZ\ÙK˜[
\œ˜^K™œ›ÛJØš™XÝ™[šY\Ê
K\Þ[˜ÊÝKYWJOOžÛ]YOX]ØZ][‹™Ù]XÚØYÙSY]Y]J‹œ\œÙRY[
JKÜ›Ú™XÝœßJNÜ™]\›ˆÙK›X\[™š[\ŠYKYOOžÛ]Ù\™XØ]Y™_O]YK™\œÚ[ÛœÖØYWNÜ™]\›ˆOÖÝKYKWN‘ÙK›X\[™š[\‹œÚÚ\J_JJKOX]ØZ]ÎÙ›ÜŠ]ÝKYKYW[ÙˆK™›]
JJSØš™XÝš\ÓÝÛŠKJI‰–VÝWKœÛÛYJYOO‘œ‹œØ]\ÙšY\ÕÚ]™\™[X\Ù\ÊYKYK[™\˜X›WÝ™\œÚ[ÛœÊJ_
VÝWOÏÏV×KVÝWKœ\Ú
ÚY˜	Ý_H
\™XØ][ÛŠX]NŠ\[ÙˆYOOHœÝš[™ÈÝYNˆˆŠKš[J
_•\ÈXÚØYÙH\È™Y[ˆ\™XØ]Yˆ‹Ù]™\š]Nˆ›[Ù\˜]H‹[™\˜X›WÝ™\œÚ[ÛœÎšY_JJNÑOV_JNÚYŠËš\Ñ\œ›ÜœÊ
J\™]\›ˆË™^]ÛÙJ
NÛ]ÏVÊ\ËœÙ]™\š]JKP\œ˜^K™œ›ÛJ™]ÈÙ]
Ë‹‹œ‹™Ù]
›œP]Y]YÛ›Ü™PYš\ÛÜšY\ÈŠK‹‹\ËšYÛ›Ü™\×JJKOSØš™XÝ˜Ü™X]J[
NÙ›ÜŠ]ÓËW[ÙˆØš™XÝ™[šY\ÊJJ^Û]OUK™š[\ŠOOˆ\’‹™Y˜][š\ÓX]Ú
	ÝKšYX
I‰”Ëš\ÊKœÙ]™\š]JJNÖK›[™ÝŒ	‰ŠVÓ×OVK›X\
OOžÛ]YOXË™Ù]
ÊNÚYŠ\[ÙˆYOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH™YÚ\ÝžHÈÛ›H™]\›ˆXÚØYÙ\È]Ù\™H™\]Y\ÝYŠNÛ]YOVË‹‹šYKšÙ^\Ê
WK™š[\ŠOO‘œ‹œØ]\ÙšY\ÕÚ]™\™[X\Ù\ÊKK[™\˜X›WÝ™\œÚ[ÛœÊJKYO[™]ÈX\Ù›ÜŠ]HÙˆYJY›ÜŠ]YHÙˆYK™Ù]
JJXYKœÙ]
YK›ØØ]Ü’\ÚYJNÜ™]\›žË‹‹K™\œÚ[ÛœÎYK\[™[Î–Ë‹‹˜YK˜[Y\Ê
W__JJ_[]SØš™XÝšÙ^\ÊJK›[™ÝŒÜ™]\›ˆÊœË™[Z]™YJ	ÊJKØÛÛ™šYÝ\˜][ÛŽœ‹œÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]Ù\\˜]ÜœÎŒŸJKJNŠ]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹[˜ÛYQ›ÛÝ\ŽˆLKœÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈÏOžÓËœ™\Ü[™›ÊK“›È]Y]ÝYÙÙ\Ý[ÛœÈŠ_JKÌNŒ
__NÜYJ
NÜYJ
NÑ

NÕ

NÝ˜\ˆ’Y]
J
JKRRYJ][ŠKLOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë™šY[ÏZK”Ýš[™Ê‹Y‹KYšY[È‹Ù\ØÜš\[ÛŽˆHÛÛ[XK\Ù\\˜]Y\ÝÙˆX[šY™\ÝšY[È]ÚÝ[™H\Ü^YYŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\ËœXÚØYÙ\ÏZK”™\Ý

_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹š[™›È—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœÚÝÈ[™›Ü›X][ÛˆX›Ý]HXÚØYÙH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™™]Ú\È[™›Ü›X][ÛˆX›Ý]HXÚØYÙHœ›ÛHHœH™YÚ\ÝžH[™š[È][ˆH™YH›Ü›X]——ˆHXÚØYÙHÙ\È›Ý]™HÈ™H[œÝ[YØØ[K]™YYÈÈ]™H™Y[ˆX›\ÚY
[ˆ\XÝ[\‹ØØ[Ú[™Ù\ÈÚ[™HYÛ›Ü™Y]™[ˆ›ÜˆÛÜšÜÜXÙ\ÊK——ˆ\[™˜[™ÙO˜ÈHXÚØYÙH\™Ý[Y[È›ÝšYH[™›Ü›X][ÛˆÜXÚYšXÈÈH]\Ý™\œÚ[Ûˆ]Ø]\ÙšY\ÈH˜[™ÙHÜˆÈHÛÜœ™\ÜÛ™[™ÈYÙÙY™\œÚ[Û‹ˆYˆH˜[™ÙH\È[˜[YÜˆYˆ\™H\È›È™\œÚ[ÛˆØ]\ÙžZ[™ÈH˜[™ÙKHÛÛ[X[™Ú[š[HØ\›š[™È[™˜[˜XÚÈÈH]\Ý™\œÚ[Û‹——ˆYˆHY‹KYšY[ØÜ[Ûˆ\ÈÙ]]	ÜÈHÛÛ[XK\Ù\\˜]Y\ÝÙˆšY[ÈÚXÚÚ[™H\ÙYÈÛ›H\Ü^H\ÙˆHXÚØYÙH[™›Ü›X][Û‹——ˆžHY˜][\ÈÛÛ[X[™ÛÛ‰Ý™]\›ˆH\Ý™XYYX[™\Ù\œØšY[ËÚ[˜ÙH^H\™HÙ[ˆ™\žHÛ™ËˆÈ^XÚ]H™\]Y\ÝÜÙHšY[Ë^XÚ]H\Ý[HÚ]HKYšY[Ø›YÈÜˆ™\]Y\ÝHÝ]][ˆ”ÓÓˆ[ÙK—ˆ‹^[\\Î–ÖÈ”ÚÝÈ[]˜Z[X›H[™›Ü›X][ÛˆX›Ý]™XXÝ
^Ù\H\Ý™XYYX[™\Ù\œØšY[ÊH‹žX\›ˆœH[™›È™XXÝ—KÈ”ÚÝÈ[]˜Z[X›H[™›Ü›X][ÛˆX›Ý]™XXÝ\È˜[Y”ÓÓˆ
[˜ÛY[™ÈH\Ý™XYYX[™\Ù\œØšY[ÊH‹žX\›ˆœH[™›È™XXÝKZœÛÛˆ—KÈ”ÚÝÈ[]˜Z[X›H[™›Ü›X][ÛˆX›Ý]™XXÝM‹ŒL‹Œ‹žX\›ˆœH[™›È™XXÝM‹ŒL‹Œ—KÈ”ÚÝÈ[]˜Z[X›H[™›Ü›X][ÛˆX›Ý]™XXÝ™^‹žX\›ˆœH[™›È™XXÝ™^—KÈ”ÚÝÈH\ØÜš\[ÛˆÙˆ™XXÝ‹žX\›ˆœH[™›È™XXÝKYšY[È\ØÜš\[Ûˆ—KÈ”ÚÝÈ[]˜Z[X›H™\œÚ[ÛœÈÙˆ™XXÝ‹žX\›ˆœH[™›È™XXÝKYšY[È™\œÚ[ÛœÈ—KÈ”ÚÝÈH™XYYHÙˆ™XXÝ‹žX\›ˆœH[™›È™XXÝKYšY[È™XYYH—KÈ”ÚÝÈH™]ÈšY[ÈÙˆ™XXÝ‹žX\›ˆœH[™›È™XXÝKYšY[ÈÛY\YÙK™\ÜÚ]ÜžH—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœßOX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KO]\[Ùˆ\Ë™šY[ÏHÛ™]ÈÙ]
È›˜[YH‹‹‹\Ë™šY[ËœÜ]
×Ê‹Ê‹ÊWJN›[V×KÏHLKX]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹[˜ÛYQ›ÛÝ\ŽˆLKœÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÙ›ÜŠ]Ùˆ\ËœXÚØYÙ\Ê^Û]NÚYŠOOH‹ˆŠ^Û]YO\ËÜ]™[ÛÜšÜÜXÙNÚYŠZYK›X[šY™\Ý›˜[YJ]›ÝÈ™]ÈÝ
Z\ÜÚ[™È	ÜKœ™]J‹›˜[YH‹K•\KÓÑJ_HšY[[ˆ	Ù™K™œ›ÛTÜX›T]
Ëš›Ú[ŠYK˜ÝÙ\‹›X[šY™\Ý
J_X
NÑOZ‹›XZÙQ\ØÜš\ÜŠYK›X[šY™\Ý›˜[YK[šÛ›ÝÛˆŠ_Y[ÙHOZ‹œ\œÙQ\ØÜš\ÜŠ
NÛ]ÏY[‹™Ù]Y[\›
JKÏ\ÒŠ]ØZ][‹™Ù]
ËØÛÛ™šYÝ\˜][ÛŽœ‹Y[‘KœÛÛ”™\ÜÛœÙNˆLÝ\ÝÛQ\œ›Ü“Y\ÜØYÙN™[‹˜Ý\ÝÛTXÚØYÙQ\œ›ÜŸJJKSØš™XÝšÙ^\ÊË™\œÚ[ÛœÊKœÛÜ
’‹™Y˜][˜ÛÛ\\™SÛÜÙJKTÖÈ™\Ý]YÜÈ—K›]\ÝÞ›[™ÝLWKÏQœ‹˜[Y˜[™ÙJKœ˜[™ÙJNÚYŠÊ^Û]YO[’‹™Y˜][›X^Ø]\ÙžZ[™ÊÊNÚYHOO[[ÕZYNŠœ™\ÜØ\›š[™Ê[›Y]˜[™ÙH	Ú‹œ™]T˜[™ÙJ‹Kœ˜[™ÙJ_NÈ˜[[™È˜XÚÈÈH]\Ý™\œÚ[Û˜
KÏHL
_Y[ÙHØš™XÝš\ÓÝÛŠÖÈ™\Ý]YÜÈ—KKœ˜[™ÙJOÕTÖÈ™\Ý]YÜÈ—VÑKœ˜[™ÙWN‘Kœ˜[™ÙHOOH[šÛ›ÝÛˆ‰‰Šœ™\ÜØ\›š[™Ê[šÛ›ÝÛˆYÈ	Ú‹œ™]T˜[™ÙJ‹Kœ˜[™ÙJ_NÈ˜[[™È˜XÚÈÈH]\Ý™\œÚ[Û˜
KÏHL
NÛ]OTË™\œÚ[ÛœÖÕKO^Ë‹‹”Ë‹‹•K™\œÚ[ÛŽ•™\œÚ[ÛœÎžKNÚYŠHOO[[
^ÝO^ßNÙ›ÜŠ]YHÙˆJ^Û]YOVVÚYWNÚYŠ\[ÙˆYOHŠ]VÚYWO]YNÙ[Ù^Üœ™\ÜØ\›š[™ÊKH	ÜKœ™]J‹YKK•\KÓÑJ_HšY[Ù\Û‰Ý^\Ý[œÚYH	Ú‹œ™]RY[
‹J_IÜÈ[™›Ü›X][Û˜
KÏHLØÛÛ[Y___Y[ÙH\ËšœÛÛŸ
[]HK™\Ý[]HKœ™XYYK[]HK\Ù\œÊKOVNÜœ™\ÜœÛÛŠJK\ËšœÛÛŸ‹œ\Ú
J__JNÚR‹š[œÜXÝœÝ[\Ë›˜[YOH˜ÞX[ˆŽÙ›ÜŠ]ÙˆŠJOO[–Ì_ÊI‰\Ë˜ÛÛ^œÝÝ]Üš]J˜
K\Ë˜ÛÛ^œÝÝ]Üš]J	ÊR‹š[œÜXÝ
JÙ\ŒKÌÛÛÜœÎˆLÛÛ\XÝˆL_J_B˜
NÜ™]\›ˆ‹™^]ÛÙJ
__NÙ[˜Ý[ÛˆÒŠJ^ÚYŠ\œ˜^Kš\Ð\œ˜^JJJ^Û]V×NÙ›ÜŠ]ˆÙˆJ\\ÒŠŠK‰‰œ\Ú
ŠNÜ™]\›ˆY[ÙHYŠ\[ÙˆOOH›Øš™XÝ‰‰™HOO[[
^Û]^ßNÙ›ÜŠ]ˆÙˆØš™XÝšÙ^\ÊJJ^ÚYŠ‹œÝ\ÕÚ]
—ÈŠJXÛÛ[YNÛ]Ï\ÒŠVÜ—JNÜÉ‰ŠÜ—O\Ê_\™]\›ˆY[ÙH™]\›ˆ_[\YJ
NÜYJ
NÕ

NÝ˜\ˆÒY]
]Š
JKLOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœØÛÜOZK”Ýš[™Ê‹\ËK\ØÛÜH‹Ù\ØÜš\[ÛŽˆ“ÙÚ[ˆÈH™YÚ\ÝžHÛÛ™šYÝ\™Y›ÜˆHÚ]™[ˆØÛÜHŸJNÝ\ËœX›\ÚZK›ÛÛX[Š‹K\X›\Ú‹LKÙ\ØÜš\[ÛŽˆ“ÙÚ[ˆÈHX›\Ú™YÚ\ÝžHŸJNÝ\Ë˜[Ø^\Ð]]ZK›ÛÛX[Š‹KX[Ø^\ËX]]‹Ù\ØÜš\[ÛŽˆ”Ù]HœP[Ø^\Ð]]ÛÛ™šYÝ\˜][ÛˆŸJNÝ\ËÙX“ÙÚ[ZK›ÛÛX[Š‹K]ÙX‹[ÙÚ[ˆ‹Ù\ØÜš\[ÛŽˆ‘[˜X›HÙXˆÙÚ[ˆŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹›ÙÚ[ˆ—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœÝÜ™H™]ÈÙÚ[ˆ[™›ÈÈXØÙ\ÜÈHœH™YÚ\ÝžH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[\ÚÈ[ÝH›Üˆ[Ý\ˆ\Ù\›˜[YK\ÜÝÛÜ™[™‘HÛ™KU[YKT\ÜÝÛÜ™
Ú[ˆ]\Y\ÊKˆ]Ú[[ˆ[ÙYžH[Ý\ˆØØ[ÛÛ™šYÝ\˜][Ûˆ
[ˆ[Ý\ˆÛYH›Û\‹™]™\ˆ[ˆH›Ú™XÝ]Ù[ŠHÈ™Y™\™[˜ÙHH™]ÈÚÙ[œÈ\ÈÙ[™\˜]Y——ˆY[™ÈH\ËK\ØÛÜX›YÈÚ[Ø]\ÙHH]][XØ][ÛˆÈ™HÛ™HYØZ[œÝÚ]]™\ˆ™YÚ\ÝžH\ÈÛÛ™šYÝ\™Y›ÜˆH\ÜÛØÚX]YØÛÜH
ÙYH[ÛÈœTØÛÜ\Ø
K——ˆY[™ÈHK\X›\Ú›YÈÚ[Ø]\ÙHH]][XØ][ÛˆÈ™HÛ™HYØZ[œÝH™YÚ\ÝžH\ÙYÚ[ˆX›\Ú[™ÈHXÚØYÙH
ÙYH[ÛÈX›\ÚÛÛ™šYËœ™YÚ\ÝžX[™œTX›\Ú™YÚ\ÝžX
K—ˆ‹^[\\Î–ÖÈ“ÙÚ[ˆÈHY˜][™YÚ\ÝžH‹žX\›ˆœHÙÚ[ˆ—KÈ“ÙÚ[ˆÈH™YÚ\ÝžH[šÙYÈH^K\ØÛÜH™YÚ\ÝžH‹žX\›ˆœHÙÚ[ˆK\ØÛÜH^K\ØÛÜH—KÈ“ÙÚ[ˆÈHX›\Ú™YÚ\ÝžH›ÜˆHÝ\œ™[XÚØYÙH‹žX\›ˆœHÙÚ[ˆK\X›\Ú—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÏX]ØZ]Ó
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÙ\Ë˜ÛÛ^˜ÝÙX›\Ú\ËœX›\ÚØÛÜN\ËœØÛÜ_JNÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ][˜ÛYQ›ÛÝ\ŽˆL_K\Þ[˜ÈOžÛ]ÏX]ØZ]
Ü™YÚ\ÝžNœËÛÛ™šYÝ\˜][ÛŽœ‹™\Ü›‹ÙX“ÙÚ[Ž\ËÙX“ÙÚ[‹Ý[Ž\Ë˜ÛÛ^œÝ[‹ÝÝ]\Ë˜ÛÛ^œÝÝ]JNÜ™]\›ˆ]ØZ]]
ËËØ[Ø^\Ð]]\Ë˜[Ø^\Ð]]ØÛÜN\ËœØÛÜ_JK‹œ™\Ü[™›Ê”ÝXØÙ\ÜÙ[HÙÙÙY[ˆŠ_JJK™^]ÛÙJ
__NØ\Þ[˜È[˜Ý[ÛˆÓ
ÜØÛÜN™KX›\ÚÛÛ™šYÝ\˜][ÛŽœ‹ÝÙœßJ^Ü™]\›ˆI‰ÙÚK™Ù]ØÛÜT™YÚ\ÝžJKØÛÛ™šYÝ\˜][ÛŽœ‹\N™ÚK”™YÚ\ÝžU\K”P“TÒÔ‘QÒTÕ–_JN™OÙÚK™Ù]ØÛÜT™YÚ\ÝžJKØÛÛ™šYÝ\˜][ÛŽœŸJNÙÚK™Ù]X›\Ú™YÚ\ÝžJ
]ØZ]ÒJ‹ÊJK›X[šY™\ÝØÛÛ™šYÝ\˜][ÛŽœŸJN™ÚK™Ù]Y˜][™YÚ\ÝžJØÛÛ™šYÝ\˜][ÛŽœŸJ_X\Þ[˜È[˜Ý[ÛˆÝ
K
^Û]ŽÝž^ÜX]ØZ][‹œÜÝ
‹ËKÝŒKÛÙÚ[ˆ‹[ØÛÛ™šYÝ\˜][ÛŽ™YÚ\ÝžN™K]]\N™[‹]]\K““×ÐUUœÛÛ”™\ÜÛœÙNˆLXY\œÎžÈ›œKX]]]\HŽˆÙXˆŸ_J_XØ]ÚÜ™]\›ˆ[\™]\›ˆŸX\Þ[˜È[˜Ý[Ûˆ
K
^Û]X]ØZ]›‹œ™\]Y\Ý
K[ØÛÛ™šYÝ\˜][ÛŽœÛÛ”™\ÜÛœÙNˆLJNÚYŠ‹œÝ]\ÐÛÙOOOLŒŠ^Û]Ï\‹šXY\œÖÈœ™]žKXY\ˆ—OÏÈŒHŽÜ™]\›žÝ\NˆØZ][™È‹ÛY\œ\œÙR[
ËL
__\™]\›ˆ‹œÝ]\ÐÛÙOOOLŒÞÝ\NˆœÝXØÙ\ÜÈ‹ÚÙ[Žœ‹˜›ÙKÚÙ[ŸN›[X\Þ[˜È[˜Ý[Ûˆ
Ü™YÚ\ÝžN™KÛÛ™šYÝ\˜][ÛŽ™\ÜœŸJ^Û]ÏX]ØZ]Ý
K
NÚYŠ\Ê\™]\›ˆ[ÚYŠZK›Ü[•\›
^Ü‹œ™\Ü[™›Ê”Ý\[™ÈHÙXˆÙÚ[ˆ›ØÙ\ÜË‹‹ˆŠK‹œ™\ÜÙ\\˜]ÜŠ
NÛ]ÛÜ[“›ÝÎ˜_OX]ØZ]
Ò‹œ›Û\
JÝ\Nˆ˜ÛÛ™š\›H‹˜[YNˆ›Ü[“›ÝÈ‹Y\ÜØYÙNˆ‘È[ÝHØ[ÈžHÈÜ[ˆ[Ý\ˆœ›ÝÜÙ\ˆ›ÝÏÈ‹™\]Z\™YˆL[š]X[ˆLÛØ[˜Ù[Š
OOœ›ØÙ\ÜË™^]
LÌ
_JNÜ‹œ™\ÜÙ\\˜]ÜŠ
K
X_X]ØZ]ZK›Ü[•\›
Ë›ÙÚ[•\›
JI‰Š‹œ™\ÜØ\›š[™Ê•ÙH˜Z[YÈ]]ÛX]XØ[HÜ[ˆH\›È[ÝIÛ]™HÈÜ[ˆ][Ý\œÙ[ˆ[ˆ[Ý\ˆœ›ÝÜÙ\ˆÙˆÚÚXÙNˆŠK‹œ™\ÜØ\›š[™ÊKœ™]JË›ÙÚ[•\›K•\K•T“
JK‹œ™\ÜÙ\\˜]ÜŠ
J_Y›ÜŠÎÊ^Û]OX]ØZ]
Ë™Û™U\›
NÚYŠOOO[[
\™]\›ˆ[ÚYŠK\OOOHØZ][™ÈŠX]ØZ]™]È›ÛZ\ÙJOœÙ][Y[Ý]
‹KœÛY\
ŒYLÊJNÙ[ÙH™]\›ˆKÚÙ[Ÿ_]˜\ˆVÈšÎ‹ËÜ™YÚ\ÝžKžX\›œÙË˜ÛÛH‹šÎ‹ËÜ™YÚ\ÝžK›œZœË›Ü™È—NØ\Þ[˜È[˜Ý[Ûˆ
J^ÚYŠKÙX“ÙÚ[ÏÔš[˜ÛY\ÊKœ™YÚ\ÝžJJ^Û]X]ØZ]
JNÚYŠOO[[
\™]\›ˆ\™]\›ˆ]ØZ]Ý
J_X\Þ[˜È[˜Ý[ÛˆÝ
Ü™YÚ\ÝžN™KÛÛ™šYÝ\˜][ÛŽ™\Üœ‹Ý[ŽœËÝÝ]˜_J^Û]X]ØZ]
ØÛÛ™šYÝ\˜][ÛŽ™YÚ\ÝžN™K™\Üœ‹Ý[ŽœËÝÝ]˜_JKÏXËKÝ\Ù\‹ÛÜ™Ë˜ÛÝXÚ‹\Ù\Ž‰Ù[˜ÛÙUT’PÛÛ\Û™[
‹›˜[YJ_X^×ÚY˜Ü™Ë˜ÛÝXÚ‹\Ù\Ž‰Û‹›˜[Y_X˜[YN›‹›˜[YK\ÜÝÛÜ™›‹œ\ÜÝÛÜ™\Nˆ\Ù\ˆ‹›Û\Î–×K]N›™]È]J
KÒTÓÔÝš[™Ê
_K^Ø][\Y\Î›‹›˜[YKÛÛ™šYÝ\˜][ÛŽ™YÚ\ÝžN™KœÛÛ”™\ÜÛœÙNˆL]]\N™[‹]]\K““×ÐUUNÝž^Ü™]\›Š]ØZ][‹œ]
Ë‹
JKÚÙ[ŸXØ]Ú

^ÚYŠJ›ÜšYÚ[˜[\œ›ÜË›˜[YOOOH’\œ›Üˆ‰‰ž›ÜšYÚ[˜[\œ›ÜËœ™\ÜÛœÙKœÝ]\ÐÛÙOOOMJJ]›ÝÈ[]^Ë‹‹œ]]\N™[‹]]\K““×ÐUUXY\œÎžØ]]Üš^˜][ÛŽ˜˜\ÚXÈ	ÐY™™\‹™œ›ÛJ	Û‹›˜[Y_N‰Û‹œ\ÜÝÛÜ™X
KÔÝš[™Ê˜˜\ÙMŠ_X_KOX]ØZ][‹™Ù]
Ë
NÙ›ÜŠ]ÞW[ÙˆØš™XÝ™[šY\ÊJJJY–Þ_OOHœ›Û\ÈŠI‰Š–ÞORJNÛ]ÏX	ØßKË\™]‹ÉÙ‹—Ü™]ŸXÜ™]\›Š]ØZ][‹œ]
Ë‹
JKÚÙ[ŸX\Þ[˜È[˜Ý[Ûˆ]
KØ[Ø^\Ð]]œ‹ØÛÜNœßJ^Û]OXÏO™OžÛ]QÙKš\Ò[™^X›SØš™XÝ
ŠOÙŽžßK\Ø×KOQÙKš\Ò[™^X›SØš™XÝ

OÚžßNÜ™]\›žË‹‹œØ×NžË‹‹‘K‹‹œˆOO]›ÚYÞÛœP[Ø^\Ð]]œŸNžßKœP]]ÚÙ[Ž__K\ÏÞÛœTØÛÜ\Î˜JÊ_NžÛœT™YÚ\ÝšY\Î˜JJ_NÜ™]\›ˆ]ØZ]™K\]RÛYPÛÛ™šYÝ\˜][ÛŠŠ_X\Þ[˜È[˜Ý[Ûˆ
ØÛÛ™šYÝ\˜][ÛŽ™K™YÚ\ÝžN™\Üœ‹Ý[ŽœËÝÝ]˜_J^Ü‹œ™\Ü[™›ÊÙÙÚ[™È[ˆÈ	ÜKœ™]JKK•\K•T“
_X
NÛ]HLNÚYŠ›X]Ú
×šÎ—×ÛœWœÙ×™Ú]X—˜ÛÛJß	
KÊI‰Š‹œ™\Ü[™›Ê–[ÝHÙY[HÈ™H\Ú[™ÈHÚ]XˆXÚØYÙH™YÚ\ÝžKˆÚÙ[œÈ]\Ý™HÙ[™\˜]YÚ]H	Ü™\ÉË	ÝÜš]NœXÚØYÙ\ÉË[™	Ü™XYœXÚØYÙ\ÉÈ\›Z\ÜÚ[ÛœËˆŠKHL
K‹œ™\ÜÙ\\˜]ÜŠ
KK™[‹–PT“—ÒT×ÕTÕÑS•Š\™]\›žÛ˜[YN™K™[‹–PT“—ÒS’‘PÕÓ”WÕTÑTŸˆ‹\ÜÝÛÜ™™K™[‹–PT“—ÒS’‘PÕÓ”WÔTÔÕÓÔ‘ˆŸNÛ]ÏX]ØZ]
Ò‹œ›Û\
JÞÝ\Nˆš[œ]‹˜[YNˆ›˜[YH‹Y\ÜØYÙNˆ•\Ù\›˜[YNˆ‹™\]Z\™YˆLÛØ[˜Ù[Š
OOœ›ØÙ\ÜË™^]
LÌ
KÝ[ŽœËÝÝ]˜_KÝ\Nˆœ\ÜÝÛÜ™‹˜[YNˆœ\ÜÝÛÜ™‹Y\ÜØYÙN›È•ÚÙ[ŽˆŽˆ”\ÜÝÛÜ™ˆ‹™\]Z\™YˆLÛØ[˜Ù[Š
OOœ›ØÙ\ÜË™^]
LÌ
KÝ[ŽœËÝÝ]˜_WJNÜ™]\›ˆ‹œ™\ÜÙ\\˜]ÜŠ
Kß\YJ
NÜYJ
NÕ

NÝ˜\ˆÌO[™]ÈÙ]
È›œP]]Y[‹›œP]]ÚÙ[ˆ—JKÌOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœØÛÜOZK”Ýš[™Ê‹\ËK\ØÛÜH‹Ù\ØÜš\[ÛŽˆ“ÙÛÝ]ÙˆH™YÚ\ÝžHÛÛ™šYÝ\™Y›ÜˆHÚ]™[ˆØÛÜHŸJNÝ\ËœX›\ÚZK›ÛÛX[Š‹K\X›\Ú‹LKÙ\ØÜš\[ÛŽˆ“ÙÛÝ]ÙˆHX›\Ú™YÚ\ÝžHŸJNÝ\Ë˜[ZK›ÛÛX[Š‹PKKX[‹LKÙ\ØÜš\[ÛŽˆ“ÙÛÝ]Ùˆ[™YÚ\ÝšY\ÈŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹›ÙÛÝ]—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ›ÙÛÝ]ÙˆHœH™YÚ\ÝžH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[ÙÈ[ÝHÝ]žH[ÙYžZ[™È[Ý\ˆØØ[ÛÛ™šYÝ\˜][Ûˆ
[ˆ[Ý\ˆÛYH›Û\‹™]™\ˆ[ˆH›Ú™XÝ]Ù[ŠHÈ[]H[Ü™Y[X[È[šÙYÈH™YÚ\ÝžK——ˆY[™ÈH\ËK\ØÛÜX›YÈÚ[Ø]\ÙHH[][ÛˆÈ™HÛ™HYØZ[œÝÚ]]™\ˆ™YÚ\ÝžH\ÈÛÛ™šYÝ\™Y›ÜˆH\ÜÛØÚX]YØÛÜH
ÙYH[ÛÈœTØÛÜ\Ø
K——ˆY[™ÈHK\X›\Ú›YÈÚ[Ø]\ÙHH[][ÛˆÈ™HÛ™HYØZ[œÝH™YÚ\ÝžH\ÙYÚ[ˆX›\Ú[™ÈHXÚØYÙH
ÙYH[ÛÈX›\ÚÛÛ™šYËœ™YÚ\ÝžX[™œTX›\Ú™YÚ\ÝžX
K——ˆY[™ÈHPKKX[›YÈÚ[Ø]\ÙHH[][ÛˆÈ™HÛ™HYØZ[œÝ[™YÚ\ÝšY\È[™ØÛÜ\Ë—ˆ‹^[\\Î–ÖÈ“ÙÛÝ]ÙˆHY˜][™YÚ\ÝžH‹žX\›ˆœHÙÛÝ]—KÈ“ÙÛÝ]ÙˆH^K\ØÛÜHØÛÜH‹žX\›ˆœHÙÛÝ]K\ØÛÜH^K\ØÛÜH—KÈ“ÙÛÝ]ÙˆHX›\Ú™YÚ\ÝžH›ÜˆHÝ\œ™[XÚØYÙH‹žX\›ˆœHÙÛÝ]K\X›\Ú—KÈ“ÙÛÝ]Ùˆ[™YÚ\ÝšY\È‹žX\›ˆœHÙÛÝ]KX[—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÏX\Þ[˜Ê
OOžÛ]X]ØZ]Ó
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÙ\Ë˜ÛÛ^˜ÝÙX›\Ú\ËœX›\ÚØÛÜN\ËœØÛÜ_JKÏX]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKZ‹›XZÙRY[
\ËœØÛÜOÏÛ[œÙÈŠNÜ™]\›ˆYÚK™Ù]]]ÛÛ™šYÝ\˜][ÛŠ‹ØÛÛ™šYÝ\˜][ÛŽ˜ËY[™ŸJK™Ù]
›œP]]ÚÙ[ˆŠ_NÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÚYŠ\Ë˜[	‰Š]ØZ]

K‹œ™\Ü[™›Ê”ÝXØÙ\ÜÙ[HÙÙÙYÝ]œ›ÛH]™\ž][™ÈŠJK\ËœØÛÜJ^Ø]ØZ]˜™J›œTØÛÜ\È‹\ËœØÛÜJK]ØZ]Ê
OÛ‹œ™\Ü[™›ÊÝXØÙ\ÜÙ[HÙÙÙYÝ]œ›ÛH	Ý\ËœØÛÜ_X
N›‹œ™\ÜØ\›š[™Ê”ØÛÜH]][XØ][ÛˆÙ][™ÜÈ™[[Ý™Y]ÛÛYHÝ\ˆÛ™\ÈÙ][™ÜÈÝ[\HÈ]ŠNÜ™]\›Ÿ[]ÏX]ØZ]Ó
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÙ\Ë˜ÛÛ^˜ÝÙX›\Ú\ËœX›\ÚJNØ]ØZ]˜™J›œT™YÚ\ÝšY\È‹ÊK]ØZ]Ê
OÛ‹œ™\Ü[™›ÊÝXØÙ\ÜÙ[HÙÙÙYÝ]œ›ÛH	ØßX
N›‹œ™\ÜØ\›š[™Ê”™YÚ\ÝžH]][XØ][ÛˆÙ][™ÜÈ™[[Ý™Y]ÛÛYHÝ\ˆÛ™\ÈÙ][™ÜÈÝ[\HÈ]Š_JJK™^]ÛÙJ
__NÙ[˜Ý[Ûˆ
K
^Û]YVÝNÚYŠQÙKš\Ò[™^X›SØš™XÝ
ŠJ\™]\›ˆLNÛ]Ï[™]ÈÙ]
Øš™XÝšÙ^\ÊŠJNÚYŠË‹‹ÌWK™]™\žJOˆ\Ëš\ÊŠJJ\™]\›ˆLNÙ›ÜŠ]ˆÙˆÌJ\Ë™[]JŠNÚYŠËœÚ^™OOOL
\™]\›ˆVÝO]›ÚYLÛ]O^Ë‹‹œŸNÙ›ÜŠ]ˆÙˆÌJY[]HVÛ—NÜ™]\›ˆVÝOXKLX\Þ[˜È[˜Ý[Ûˆ

^Û]O]OžÛ]HLKÏQÙKš\Ò[™^X›SØš™XÝ

OÞË‹‹NžßNÜË›œP]]ÚÙ[‰‰Š[]HË›œP]]ÚÙ[‹HL
NÙ›ÜŠ]HÙˆØš™XÝšÙ^\ÊÊJU
ËJI‰ŠHL
NÚYŠØš™XÝšÙ^\ÊÊK›[™ÝOOL
\™]\›ˆÜÎNÜ™]\›ˆ]ØZ]™K\]RÛYPÛÛ™šYÝ\˜][ÛŠÛœT™YÚ\ÝšY\Î™KœTØÛÜ\Î™_J_X\Þ[˜È[˜Ý[Ûˆ˜™JK
^Ü™]\›ˆ]ØZ]™K\]RÛYPÛÛ™šYÝ\˜][ÛŠÖÙWNœOžÛ]ÏQÙKš\Ò[™^X›SØš™XÝ
ŠOÜŽžßNÚYŠSØš™XÝš\ÓÝÛŠË
J\™]\›ˆŽÛ]O\ÖÝKQÙKš\Ò[™^X›SØš™XÝ
JOØNžßKÏ[™]ÈÙ]
Øš™XÝšÙ^\ÊŠJNÚYŠË‹‹ÌWK™]™\žJOˆXËš\Ê
JJ\™]\›ˆŽÙ›ÜŠ]ÙˆÌJXË™[]J
NÚYŠËœÚ^™OOOL
\™]\›ˆØš™XÝšÙ^\ÊÊK›[™ÝOOLOÝ›ÚYžË‹‹œËÝN›ÚYNÛ]^ßNÙ›ÜŠ]ÙˆÌJY–ÜO]›ÚYÜ™]\›žË‹‹œËÝNžË‹‹›‹‹‹™Ÿ___J_\YJ
NÑ

NÕ

NÝ˜\ˆŒOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë˜XØÙ\ÜÏZK”Ýš[™Ê‹KXXØÙ\ÜÈ‹Ù\ØÜš\[ÛŽˆ•HXØÙ\ÜÈ›ÜˆHX›\ÚYXÚØYÙH
X›XÈÜˆ™\ÝšXÝY
HŸJNÝ\ËYÏZK”Ýš[™Ê‹K]YÈ‹›]\Ý‹Ù\ØÜš\[ÛŽˆ•HYÈÛˆH™YÚ\ÝžH]HXÚØYÙHÚÝ[™H]XÚYÈŸJNÝ\ËÛ\˜]T™\X›\ÚZK›ÛÛX[Š‹K]Û\˜]K\™\X›\Ú‹LKÙ\ØÜš\[ÛŽˆ•Ø\›ˆ[™^]Ú[ˆ™\X›\Ú[™È[ˆ[™XYH^\Ý[™È™\œÚ[ÛˆÙˆHXÚØYÙHŸJNÝ\Ë›ÝZK”Ýš[™Ê‹K[Ý‹Ù\ØÜš\[ÛŽˆ•HÕÚÙ[ˆÈ\ÙHÚ]HÛÛ[X[™ŸJNÝ\Ëœ›Ý™[˜[˜ÙOZK›ÛÛX[Š‹K\›Ý™[˜[˜ÙH‹LKÙ\ØÜš\[ÛŽˆ‘Ù[™\˜]H›Ý™[˜[˜ÙH›ÜˆHXÚØYÙKˆÛ›H]˜Z[X›H[ˆÚ]XˆXÝ[ÛœÈ[™Ú]XˆÒKˆØ[ˆ™HÙ]ÛØ˜[H›ÝYÚHœTX›\Ú›Ý™[˜[˜ÙXÙ][™ÈÜˆHPT“—Ó”WÐÓÓ‘’Q×Ô“Õ‘SSÑX[š\›Û›Y[˜\šXX›KÜˆ\‹\XÚØYÙH›ÝYÚHX›\ÚÛÛ™šYËœ›Ý™[˜[˜ÙXšY[[ˆXÚØYÙKšœÛÛ‹ˆŸJNÝ\Ë™žT[ZK›ÛÛX[Š‹[‹KYžK\[ˆ‹LKÙ\ØÜš\[ÛŽˆ”ÚÝÈÚ]ÛÝ[™HX›\ÚYÚ]Ý]XÝX[HX›\Ú[™ÈŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ“Ý]]H™\Ý[[ˆ”ÓÓˆ›Ü›X]ŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹œX›\Ú—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœX›\ÚHXÝ]™HÛÜšÜÜXÙHÈHœH™YÚ\ÝžH‹]Z[Î‰×ˆ\ÈÛÛ[X[™Ú[XÚÈHXÝ]™HÛÜšÜÜXÙH[ÈHœ™\Ú\˜Ú]™H[™\ØY]ÈHœH™YÚ\ÝžK——ˆHXÚØYÙHÚ[žHY˜][™H]XÚYÈH]\ÝYÈÛˆH™YÚ\ÝžK]\È™Z]š[ÜˆØ[ˆ™HÝ™\œšY[ˆžH\Ú[™ÈHK]YØÜ[Û‹——ˆ›ÝH]›ÜˆYØXÞH™X\ÛÛœÈØÛÜYXÚØYÙ\È\™HžHY˜][X›\ÚYÚ][ˆXØÙ\ÜÈÙ]È™\ÝšXÝY
ZØHœš]˜]HXÚØYÙ\ÈŠKˆ\È™\]Z\™\È[ÝHÈ™YÚ\Ý\ˆ›ÜˆHZYœH[‹ˆ[ˆØ\ÙH[ÝHÚ[\HÚ\ÚÈX›\ÚHX›XÈØÛÜYXÚØYÙHÈH™YÚ\ÝžH
›Üˆœ™YJK\ÝYHKXXØÙ\ÜÈX›XØ›YËˆ\È™Z]š[ÜˆØ[ˆ™H[˜X›YžHY˜][›ÝYÚHœTX›\ÚXØÙ\ÜØÙ][™ÜË—ˆ	Ë^[\\Î–ÖÈ”X›\ÚHXÝ]™HÛÜšÜÜXÙH‹žX\›ˆœHX›\Ú—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÚYŠK›X[šY™\Ýœš]˜]J]›ÝÈ™]ÈÝ
”š]˜]HÛÜšÜÜXÙ\ÈØ[››Ý™HX›\ÚYŠNÚYŠK›X[šY™\Ý›˜[YOOO[[K›X[šY™\Ý™\œÚ[ÛOO[[
]›ÝÈ™]ÈÝ
•ÛÜšÜÜXÙ\È]\Ý]™H˜[Y˜[Y\È[™™\œÚ[ÛœÈÈ™HX›\ÚYÛˆ[ˆ^\›˜[™YÚ\ÝžHŠNØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]XK›X[šY™\Ý›˜[YKÏXK›X[šY™\Ý™\œÚ[Û‹YÚK™Ù]X›\Ú™YÚ\ÝžJK›X[šY™\ÝØÛÛ™šYÝ\˜][ÛŽœŸJNÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]œÛÛŽ\ËšœÛÛŸK\Þ[˜ÈOžÚYŠœ™\Ü[™›ÊX›\Ú[™ÈÈ	ÙŸHÚ]YÈ	Ý\ËYßX
K\ËÛ\˜]T™\X›\Ú
]ž^Û]OX]ØZ][‹™Ù]
[‹™Ù]Y[\›
ŠKØÛÛ™šYÝ\˜][ÛŽœ‹™YÚ\ÝžN™‹Y[›‹œÛÛ”™\ÜÛœÙNˆLJNÚYŠSØš™XÝš\ÓÝÛŠK™\œÚ[ÛœÈŠJ]›ÝÈ™]ÈÝ
MK	Ô™YÚ\ÝžH™]\›™Y[˜[Y]H›ÜˆHZ\ÜÚ[™È™\œÚ[ÛœÈˆšY[	ÊNÚYŠØš™XÝš\ÓÝÛŠK™\œÚ[ÛœËÊJ^Û]ÏX™YÚ\ÝžH[™XYHÛ›ÝÜÈX›Ý]™\œÚ[Ûˆ	ØßNÈÚÚ\[™Ë˜Úœ™\ÜØ\›š[™ÊÊKœ™\ÜœÛÛŠÛ˜[YNš‹œÝš[™ÚYžRY[
ŠK™\œÚ[ÛŽ˜Ë™YÚ\ÝžN™‹Ø\›š[™ÎËÚÚ\YˆLJNÜ™]\›Ÿ_XØ]Ú
J^ÚYŠK›ÜšYÚ[˜[\œ›ÜËœ™\ÜÛœÙOËœÝ]\ÐÛÙHOOM
]›ÝÈ_X]ØZ]Û‹›X^X™Q^XÝ]UÛÜšÜÜXÙSY™XÞXÛTØÜš\
Kœ™\X›\Ú‹Ü™\ÜšJK]ØZ]PKœ™\\™Q›Ü”XÚÊKÜ™\ÜšK\Þ[˜Ê
OOžÛ]OX]ØZ]PK™Ù[”XÚÓ\Ý
JNÙ›ÜŠ]HÙˆJZœ™\Ü[™›Ê[™K™œ›ÛTÜX›T]
JJKœ™\ÜœÛÛŠÙš[N™™K™œ›ÛTÜX›T]
J_JNÛ]ÏX]ØZ]PK™Ù[”XÚÔÝ™X[JKJKÏX]ØZ]ÙK˜Y™™\”Ý™X[JÊKX]ØZ]K™Ù]Ú]XY
K˜ÝÙ
KOHLKHˆŽØK›X[šY™\ÝœX›\ÚÛÛ™šYÉ‰ˆœ›Ý™[˜[˜ÙHš[ˆK›X[šY™\ÝœX›\ÚÛÛ™šYÏÊOHHXK›X[šY™\ÝœX›\ÚÛÛ™šYËœ›Ý™[˜[˜ÙKROÈ‘Ù[™\˜][™È›Ý™[˜[˜ÙHÝ][Y[™XØ]\ÙHX›\ÚÛÛ™šYËœ›Ý™[˜[˜ÙXšY[\ÈÙ]ˆŽˆ”ÚÚ\[™È›Ý™[˜[˜ÙHÝ][Y[™XØ]\ÙHX›\ÚÛÛ™šYËœ›Ý™[˜[˜ÙXšY[\ÈÙ]È˜[ÙKˆŠN\Ëœ›Ý™[˜[˜ÙOÊOHLH‘Ù[™\˜][™È›Ý™[˜[˜ÙHÝ][Y[™XØ]\ÙHK\›Ý™[˜[˜ÙX›YÈ\ÈÙ]ˆŠNœ‹™Ù]
›œTX›\Ú›Ý™[˜[˜ÙHŠI‰ŠOHLH‘Ù[™\˜][™È›Ý™[˜[˜ÙHÝ][Y[™XØ]\ÙHœTX›\Ú›Ý™[˜[˜ÙXÙ][™È\ÈÙ]ˆŠK	‰Šœ™\Ü[™›Ê[
Kœ™\ÜœÛÛŠÝ\Nˆœ›Ý™[˜[˜ÙH‹[˜X›Y’K›Ý™[˜[˜ÙSY\ÜØYÙN•JJNÛ]ÏX]ØZ]K›XZÙTX›\Ú›ÙJKËØXØÙ\ÜÎ\Ë˜XØÙ\ÜËYÎ\ËYË™YÚ\ÝžN™‹Ú]XYž›Ý™[˜[˜ÙN’_JNÝ\Ë™žT[Ÿ]ØZ][‹œ]
[‹™Ù]Y[\›
ŠKËØÛÛ™šYÝ\˜][ÛŽœ‹™YÚ\ÝžN™‹Y[›‹Ý\Ë›ÝœÛÛ”™\ÜÛœÙNˆL[ÝÓÚYÎˆHJ›ØÙ\ÜË™[‹ÒI‰Š›ØÙ\ÜË™[‹‘ÒUP—ÐPÕSÓ”ß›ØÙ\ÜË™[‹‘ÒUP—ÐÒJJ_JNÛ]O]\Ë™žT[È”XÚØYÙH\˜Ú]™H›ÝX›\ÚY
žH[ŠHŽˆ”XÚØYÙH\˜Ú]™HX›\ÚYŽÚœ™\Ü[™›ÊJKœ™\ÜœÛÛŠÛ˜[YNš‹œÝš[™ÚYžRY[
ŠK™\œÚ[ÛŽ˜Ë™YÚ\ÝžN™‹YÎ\ËYß›]\Ý‹š[\Î‘K›X\
OO™™K™œ›ÛTÜX›T]
JJKXØÙ\ÜÎ\Ë˜XØÙ\Üß[žT[Ž\Ë™žT[‹X›\ÚYˆ]\Ë™žT[‹Y\ÜØYÙN•K›Ý™[˜[˜ÙNˆHR_J_J_JJK™^]ÛÙJ
__NÜYJ
NÕ

NÝ˜\ˆ˜™OY]
J
JNÜYJ
NÑ

NÕ

NÝ˜\ˆŒOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\ËœXÚØYÙOZK”Ýš[™ÊÜ™\]Z\™YˆL_J_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹YÈ‹›\Ý—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ›\Ý[\Ý]YÜÈÙˆHXÚØYÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[\Ý[YÜÈÙˆHXÚØYÙHœ›ÛHHœH™YÚ\ÝžK‚‚ˆYˆHXÚØYÙH\È›ÝÜXÚYšYYX\›ˆÚ[Y˜][ÈHÝ\œ™[ÛÜšÜÜXÙK‚ˆ^[\\Î–ÖÈ“\Ý[YÜÈÙˆXÚØYÙH^K\ÙØ‹žX\›ˆœHYÈ\Ý^K\ÙÈ—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KŽÚYŠ\[Ùˆ\ËœXÚØYÙOHŠ[Z‹œ\œÙRY[
\ËœXÚØYÙJNÙ[Ù^ÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÚYŠXK›X[šY™\Ý›˜[YJ]›ÝÈ™]ÈÝ
Z\ÜÚ[™È	Û˜[YIÈšY[[ˆ	Ù™K™œ›ÛTÜX›T]
Ëš›Ú[ŠK˜ÝÙ\‹›X[šY™\Ý
J_X
NÛXK›X[šY™\Ý›˜[Y_[]ÏX]ØZ]˜Š‹ŠK^ØÚ[™[Ž‘ÙKœÛÜX\
Øš™XÝ™[šY\ÊÊK
ÚJOOš
K›X\

ÚWJOOŠÝ˜[YNœK\JK•\K”‘TÓÓUSÓ‹Ù\ØÜš\ÜŽš‹›XZÙQ\ØÜš\ÜŠ‹
KØØ]ÜŽš‹›XZÙSØØ]ÜŠ‹J_J_JJ_NÜ™]\›ˆœË™[Z]™YJØÛÛ™šYÝ\˜][ÛŽœ‹œÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]J__NØ\Þ[˜È[˜Ý[Ûˆ˜ŠK
^Û]XËKÜXÚØYÙIÙ[‹™Ù]Y[\›
J_KÙ\Ý]YÜØÜ™]\›ˆ[‹™Ù]
‹ØÛÛ™šYÝ\˜][ÛŽY[™KœÛÛ”™\ÜÛœÙNˆLÝ\ÝÛQ\œ›Ü“Y\ÜØYÙN™[‹˜Ý\ÝÛTXÚØYÙQ\œ›ÜŸJ_]˜\ˆÌOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœXÚØYÙOZK”Ýš[™Ê
NÝ\ËYÏZK”Ýš[™Ê
_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹YÈ‹˜Y—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ˜YHYÈ›ÜˆHÜXÚYšXÈ™\œÚ[ÛˆÙˆHXÚØYÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[YHYÈÈHœH™YÚ\ÝžH›ÜˆHÜXÚYšXÈ™\œÚ[ÛˆÙˆHXÚØYÙKˆYˆHYÈ[™XYH^\ÝË]Ú[™HÝ™\Üš][‹‚ˆ^[\\Î–ÖÈYH™]XYÈ›Üˆ™\œÚ[Ûˆ‹ŒËX™]KÙˆXÚØYÙH^K\ÙØ‹žX\›ˆœHYÈY^K\ÙÐ‹ŒËX™]K™]H—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÛ]Z‹œ\œÙQ\ØÜš\ÜŠ\ËœXÚØYÙKL
KÏ[‹œ˜[™ÙNÚYŠS˜™K™Y˜][˜[Y
ÊJ]›ÝÈ™]ÈÝ
H˜[™ÙH	ÜKœ™]J‹‹œ˜[™ÙKK•\K”S‘ÑJ_H]\Ý™HH˜[YÙ[]™\ˆ™\œÚ[Û˜
NÛ]YÚK™Ù]X›\Ú™YÚ\ÝžJK›X[šY™\ÝØÛÛ™šYÝ\˜][ÛŽœŸJK\Kœ™]J‹‹K•\K’QS•
K\Kœ™]J‹ËK•\K”S‘ÑJKO\Kœ™]J‹\ËYËK•\KÓÑJNÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈÏOžÛ]X]ØZ]˜Š‹ŠNÓØš™XÝš\ÓÝÛŠ\ËYÊI‰žÝ\ËY×OOOXÉ‰”Ëœ™\ÜØ\›š[™ÊYÈ	Ñ_H\È[™XYHÙ]È™\œÚ[Ûˆ	ÚX
NÛ]OXËKÜXÚØYÙIÙ[‹™Ù]Y[\›
Š_KÙ\Ý]YÜËÉÙ[˜ÛÙUT’PÛÛ\Û™[
\ËYÊ_XØ]ØZ][‹œ]
KËØÛÛ™šYÝ\˜][ÛŽœ‹™YÚ\ÝžN™‹Y[›‹œÛÛ”™\]Y\ÝˆLœÛÛ”™\ÜÛœÙNˆLJKËœ™\Ü[™›ÊYÈ	Ñ_HYYÈ™\œÚ[Ûˆ	ÚHÙˆXÚØYÙH	ÜX
_JJK™^]ÛÙJ
__NÜYJ
NÕ

NÝ˜\ˆOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœXÚØYÙOZK”Ýš[™Ê
NÝ\ËYÏZK”Ýš[™Ê
_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹YÈ‹œ™[[Ý™H—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœ™[[Ý™HHYÈœ›ÛHHXÚØYÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[™[[Ý™HHYÈœ›ÛHHXÚØYÙHœ›ÛHHœH™YÚ\ÝžK‚ˆ^[\\Î–ÖÈ”™[[Ý™HH™]XYÈœ›ÛHXÚØYÙH^K\ÙØ‹žX\›ˆœHYÈ™[[Ý™H^K\ÙÈ™]H—W_J_X\Þ[˜È^XÝ]J
^ÚYŠ\ËYÏOOH›]\ÝŠ]›ÝÈ™]ÈÝ
•H	Û]\Ý	ÈYÈØ[››Ý™H™[[Ý™YˆŠNÛ]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÛ]Z‹œ\œÙRY[
\ËœXÚØYÙJKÏYÚK™Ù]X›\Ú™YÚ\ÝžJK›X[šY™\ÝØÛÛ™šYÝ\˜][ÛŽœŸJK\Kœ™]J‹\ËYËK•\KÓÑJK\Kœ™]J‹‹K•\K’QS•
KX]ØZ]˜Š‹ŠNÚYŠSØš™XÝš\ÓÝÛŠ\ËYÊJ]›ÝÈ™]ÈÝ
	ÙŸH\È›ÝHYÈÙˆXÚØYÙH	ÜX
NÜ™]\›Š]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈÏOžÛ]ÏXËKÜXÚØYÙIÙ[‹™Ù]Y[\›
Š_KÙ\Ý]YÜËÉÙ[˜ÛÙUT’PÛÛ\Û™[
\ËYÊ_XØ]ØZ][‹™[
ËØÛÛ™šYÝ\˜][ÛŽœ‹™YÚ\ÝžN˜ËY[›‹œÛÛ”™\ÜÛœÙNˆLJKËœ™\Ü[™›ÊYÈ	ÙŸH™[[Ý™Yœ›ÛHXÚØYÙH	ÜX
_JJK™^]ÛÙJ
__NÜYJ
NÜYJ
NÕ

NÝ˜\ˆŒOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœØÛÜOZK”Ýš[™Ê‹\ËK\ØÛÜH‹Ù\ØÜš\[ÛŽˆ”š[\Ù\›˜[YH›ÜˆH™YÚ\ÝžHÛÛ™šYÝ\™Y›ÜˆHÚ]™[ˆØÛÜHŸJNÝ\ËœX›\ÚZK›ÛÛX[Š‹K\X›\Ú‹LKÙ\ØÜš\[ÛŽˆ”š[\Ù\›˜[YH›ÜˆHX›\Ú™YÚ\ÝžHŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ›œH‹ÚØ[ZH—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ“œK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ™\Ü^HH˜[YHÙˆH]][XØ]Y\Ù\ˆ‹]Z[Îˆ—ˆš[H\Ù\›˜[YH\ÜÛØÚX]YÚ]HÝ\œ™[]][XØ][ÛˆÙ][™ÜÈÈHÝ[™\™Ý]]——ˆÚ[ˆ\Ú[™È\ËK\ØÛÜXH\Ù\›˜[YHš[YÚ[™HHÛ™H]X]Ú\ÈH]][XØ][ÛˆÙ][™ÜÈÙˆH™YÚ\ÝžH\ÜÛØÚX]YÚ]HÚ]™[ˆØÛÜH
ÜÙHÙ][™ÜÈØ[ˆ™HÝ™\œšY[ˆ\Ú[™ÈHœT™YÚ\ÝšY\ØX\[™H™YÚ\ÝžH\ÜÛØÚX]YÚ]HØÛÜH\ÈÛÛ™šYÝ\™YšXHHœTØÛÜ\ØX\
K——ˆÚ[ˆ\Ú[™ÈK\X›\ÚH™YÚ\ÝžHÙIÛÙ[XÝÚ[žHY˜][™HHÛ™H\ÙYÚ[ˆX›\Ú[™ÈXÚØYÙ\È
X›\ÚÛÛ™šYËœ™YÚ\ÝžXÜˆœTX›\Ú™YÚ\ÝžXYˆ]˜Z[X›KÝ\Ú\ÙHÙIÛ˜[˜XÚÈÈH™YÝ[\ˆœT™YÚ\ÝžTÙ\™\˜
K—ˆ‹^[\\Î–ÖÈ”š[\Ù\›˜[YH›ÜˆHY˜][™YÚ\ÝžH‹žX\›ˆœHÚØ[ZH—KÈ”š[\Ù\›˜[YH›ÜˆH™YÚ\ÝžHÛˆHÚ]™[ˆØÛÜH‹žX\›ˆœHÚØ[ZHK\ØÛÜHÛÛ\[žH—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÎÜ™]\›ˆ\ËœØÛÜI‰\ËœX›\ÚÜÏYÚK™Ù]ØÛÜT™YÚ\ÝžJ\ËœØÛÜKØÛÛ™šYÝ\˜][ÛŽœ‹\N™ÚK”™YÚ\ÝžU\K”P“TÒÔ‘QÒTÕ–_JN\ËœØÛÜOÜÏYÚK™Ù]ØÛÜT™YÚ\ÝžJ\ËœØÛÜKØÛÛ™šYÝ\˜][ÛŽœŸJN\ËœX›\ÚÜÏYÚK™Ù]X›\Ú™YÚ\ÝžJ
]ØZ]ÒJ‹\Ë˜ÛÛ^˜ÝÙ
JK›X[šY™\ÝØÛÛ™šYÝ\˜][ÛŽœŸJNœÏYÚK™Ù]Y˜][™YÚ\ÝžJØÛÛ™šYÝ\˜][ÛŽœŸJK
]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÛ]ÎÝž^ØÏX]ØZ][‹™Ù]
‹ËKÝÚØ[ZH‹ØÛÛ™šYÝ\˜][ÛŽœ‹™YÚ\ÝžNœË]]\N™[‹]]\KSÐVT×ÐUUœÛÛ”™\ÜÛœÙNˆLY[\ËœØÛÜOÚ‹›XZÙRY[
\ËœØÛÜKˆŠN›ÚYJ_XØ]Ú
Š^ÚYŠ‹œ™\ÜÛœÙOËœÝ]\ÐÛÙOOOM_‹œ™\ÜÛœÙOËœÝ]\ÐÛÙOOOMÊ^Û‹œ™\Ü\œ›ÜŠK]][XØ][Ûˆ˜Z[YH[Ý\ˆÜ™Y[X[ÈX^H]™H^\™YŠNÜ™]\›ŸY[ÙH›ÝÈŸ[‹œ™\Ü[™›ÊË\Ù\›˜[YJ_JJK™^]ÛÙJ
__NÝ˜\ˆ^ØÛÛ™šYÝ\˜][ÛŽžÛœTX›\ÚXØÙ\ÜÎžÙ\ØÜš\[ÛŽˆ‘Y˜][XØÙ\ÜÈÙˆHX›\ÚYXÚØYÙ\È‹\Nˆ”Õ’S‘È‹Y˜][›[KœTX›\Ú›Ý™[˜[˜ÙNžÙ\ØÜš\[ÛŽˆ•Ú]\ˆÈÙ[™\˜]H›Ý™[˜[˜ÙH›ÜˆHX›\ÚYXÚØYÙ\È‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_KœP]Y]^ÛYTXÚØYÙ\ÎžÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆÛØˆ]\›œÈÙˆXÚØYÙ\ÈÈ^ÛYHœ›ÛHœH]Y]‹\Nˆ”Õ’S‘È‹Y˜][–×K\Ð\œ˜^NˆLKœP]Y]YÛ›Ü™PYš\ÛÜšY\ÎžÙ\ØÜš\[ÛŽˆ\œ˜^HÙˆÛØˆ]\›œÈÙˆYš\ÛÜžHQÈÈ^ÛYHœ›ÛHœH]Y]‹\Nˆ”Õ’S‘È‹Y˜][–×K\Ð\œ˜^NˆL_KÛÛ[X[™Î–ÞLKLKLKÌKŒKÌKŒKKŒW_KÝSÝ˜\ˆ^ßNÖ]
‹Ô]ÚÛÛ[X[™Š
OO•K]ÚÛÛ[Z]ÛÛ[X[™Š
OO”ŒK]Ú™]Ú\ŽŠ
OOœ”]Ú™\ÛÛ™\ŽŠ
OO›”Y˜][Š
OO™TÝ]Ú][ÎŠ
OOž^_JNÜYJ
NÜYJ
NÑ

NÜJ
NÝ˜\ˆ^O^ßNÖ]
^KØ\T]Úš[NŠ
OO›SY™‘›Û\œÎŠ
OOR‹[œÝ\™U[œ]ÚY\ØÜš\ÜŽŠ
OO›‹[œÝ\™U[œ]ÚYØØ]ÜŽŠ
OO‘S^˜XÝXÚØYÙUÑ\ÚÎŠ
OO™’‹^˜XÝ]Ú›YÜÎŠ
OOš˜™K\Ô\™[™\]Z\™YŠ
OOR‹\Ô]Ú\ØÜš\ÜŽŠ
OOžS\Ô]ÚØØ]ÜŽŠ
OO”YËØY]Úš[\ÎŠ
OOXZÙQ\ØÜš\ÜŽŠ
OO’SXZÙSØØ]ÜŽŠ
OO˜Ò‹XZÙT]Ú\ÚŠ
OOœ‹\œÙQ\ØÜš\ÜŽŠ
OO‰‹\œÙSØØ]ÜŽŠ
OO™T\œÙT]Úš[NŠ
OO–‹[œ]Ú\ØÜš\ÜŽŠ
OO–[œ]ÚØØ]ÜŽŠ
OO–JNÜYJ
NÑ

NÜYJ
NÑ

NÝ˜\ˆK×J
ÊJ

ÊJOÈ
Ê
ÊJ

ÊJOÈŠ‹ÎÙ[˜Ý[ÛˆJJ^Ü™]\›ˆËœ™[]]™Jœ›ÛÝËœ™\ÛÛ™Jœ›ÛÝ™KÔÜX›T]
JJJ_Y[˜Ý[Ûˆ]
J^Û]YKš[J
K›X]Ú

NÚYŠ]
]›ÝÈ™]È\œ›ÜŠ˜YXY\ˆ[™Nˆ	ÉÙ_IØ
NÜ™]\›žÛÜšYÚ[˜[žÜÝ\“X]›X^
[X™\ŠÌWJKJK[™Ý“[X™\ŠÌ×_J_K]ÚYžÜÝ\“X]›X^
[X™\ŠÍJKJK[™Ý“[X™\ŠÍ—_J___]˜\ˆ]MŒÝMLÎÝ˜\ˆØ™OJ
OOŠÜÙ[]™\‘^Û\Ú]š]N›[Y™“[™Qœ›ÛT]›[Y™“[™UÔ]›[Û[ÙN›[™]Ó[ÙN›[[]Yš[S[ÙN›[™]Ñš[S[ÙN›[™[˜[YQœ›ÛN›[™[˜[YUÎ›[™Y›Ü™R\Ú›[Y\’\Ú›[œ›ÛT]›[Ô]›[[šÜÎ›[JKYOOŠÚXY\Ž“]
JK\Î–×_JK^ÈŽˆšXY\ˆ‹‹HŽˆ™[][Ûˆ‹ŠÈŽˆš[œÙ\[Ûˆ‹ˆŽˆ˜ÛÛ^‹—Žˆœ˜YÛXH‹[™Yš[™Yˆ˜ÛÛ^ŸNÙ[˜Ý[ÛˆÝ
J^Û]V×KSØ™J
KÏHœ\œÚ[™ÈXY\ˆ‹O[[[[Ù[˜Ý[ÛˆÊ
^ØI‰Š‰‰ŠKœ\Ëœ\Ú
ŠK[[
K‹š[šÜËœ\Ú
JKO[[
_Y[˜Ý[ÛˆŠ
^ØÊ
Kœ\Ú
ŠKSØ™J
_Y›ÜŠ]LÜK›[™ÝÜ
ÊÊ^Û]YVÜNÚYŠÏOOHœ\œÚ[™ÈXY\ˆŠZYŠœÝ\ÕÚ]
ŠJ\ÏHœ\œÚ[™È[šÜÈ‹‹š[šÜÏV×KOLNÙ[ÙHYŠœÝ\ÕÚ]
™Y™ˆKYÚ]ŠJ^Ü‰‰œ‹™Y™“[™Qœ›ÛT]	‰™Š
NÛ]OZ›X]Ú
×™Y™ˆKYÚ]WÊŠÊH—ÊŠÊWÊ‰ÊNÚYŠQJ]›ÝÈ™]È\œ›ÜŠ˜YY™ˆ[™Nˆ	ÚX
NÜ‹™Y™“[™Qœ›ÛT]QVÌWK‹™Y™“[™UÔ]QVÌ—_Y[ÙHYŠœÝ\ÕÚ]
›Û[ÙHŠJ\‹›Û[ÙOZœÛXÙJJKš[J
NÙ[ÙHYŠœÝ\ÕÚ]
›™]È[ÙHŠJ\‹›™]Ó[ÙOZœÛXÙJJKš[J
NÙ[ÙHYŠœÝ\ÕÚ]
™[]Yš[H[ÙHŠJ\‹™[]Yš[S[ÙOZœÛXÙJN
Kš[J
NÙ[ÙHYŠœÝ\ÕÚ]
›™]Èš[H[ÙHŠJ\‹›™]Ñš[S[ÙOZœÛXÙJM
Kš[J
NÙ[ÙHYŠœÝ\ÕÚ]
œ™[˜[YHœ›ÛHŠJ\‹œ™[˜[YQœ›ÛOZœÛXÙJLŠKš[J
NÙ[ÙHYŠœÝ\ÕÚ]
œ™[˜[YHÈŠJ\‹œ™[˜[YUÏZœÛXÙJL
Kš[J
NÙ[ÙHYŠœÝ\ÕÚ]
š[™^ŠJ^Û]OZ›X]Ú
ÊÊÊW—ŠÊÊKÊNÚYŠQJXÛÛ[YNÜ‹˜™Y›Ü™R\ÚQVÌWK‹˜Y\’\ÚQVÌ—_Y[ÙHœÝ\ÕÚ]
œÙ[]™\ˆ^Û\Ú]š]HŠOÜ‹œÙ[]™\‘^Û\Ú]š]OZœÛXÙJNJKš[J
NšœÝ\ÕÚ]
‹KKHŠOÜ‹™œ›ÛT]ZœÛXÙJŠKš[J
NšœÝ\ÕÚ]
ŠÊÊÈŠI‰Š‹Ô]ZœÛXÙJŠKš[J
JNÙ[Ù^Û]OZÚÌW_[ÜÝÚ]Ú
J^ØØ\ÙHšXY\ˆŽ˜Ê
KOR

NØœ™XZÎØØ\ÙH[œÏHœ\œÚ[™ÈXY\ˆ‹Š
KOLNØœ™XZÎØØ\ÙHœ˜YÛXHŽžÚYŠZœÝ\ÕÚ]
—›È™]Û[™H][™Ùˆš[HŠJ]›ÝÈ™]È\œ›ÜŠ[œ™XÛÙÛš^™Y˜YÛXH[ˆ]Úš[Nˆ	ÚX
NÚYŠ[Š]›ÝÈ™]È\œ›ÜŠ˜Y\œÙ\ˆÝ]Nˆ›È™]Û[™H]SÑˆ˜YÛXH[˜ÛÝ[\™YÚ]Ý]ÛÛ^ŠNÛ‹››Ó™]Û[™P][™Ù‘š[OHLXœ™XZÎØØ\ÙH˜ÛÛ^Ž˜Ø\ÙH™[][ÛˆŽ˜Ø\ÙHš[œÙ\[ÛˆŽžÚYŠXJ]›ÝÈ™]È\œ›ÜŠ˜Y\œÙ\ˆÝ]Nˆ[šÈ[™\È[˜ÛÝ[\™Y™Y›Ü™H[šÈXY\ˆŠNÛ‰‰›‹\HOOQI‰ŠKœ\Ëœ\Ú
ŠK[[
KŸ
^Ý\N‘K[™\Î–×K›Ó™]Û[™P][™Ù‘š[NˆL_JK‹›[™\Ëœ\Ú
œÛXÙJJJ_Xœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠJNØœ™XZß__YŠ
NÙ›ÜŠ]Ú[šÜÎœ[Ùˆ
ZYŠ
Y›ÜŠ]Ùˆ
UÝ

NÜ™]\›ˆY[˜Ý[Ûˆ]
J^Û]V×NÙ›ÜŠ]ˆÙˆJ^Û]ÜÙ[]™\‘^Û\Ú]š]NœËY™“[™Qœ›ÛT]˜KY™“[™UÔ]›‹Û[ÙN˜Ë™]Ó[ÙN™‹[]Yš[S[ÙNœ™]Ñš[S[ÙNš™[˜[YQœ›ÛN‘K™[˜[YUÎË™Y›Ü™R\Ú”ËY\’\Úžœ›ÛT]’KÔ]•[šÜÎ“ßO\‹OQOÈœ™[˜[YHŽœÈ™š[H[][ÛˆŽšÈ™š[HÜ™X][ÛˆŽ“É‰“Ë›[™ÝŒÈœ]ÚŽˆ›[ÙHÚ[™ÙH‹O[[ÜÝÚ]Ú
J^ØØ\ÙHœ™[˜[YHŽžÚYŠQ_PÊ]›ÝÈ™]È\œ›ÜŠ˜Y\œÙ\ˆÝ]Nˆ™[˜[YHœ›ÛH	ˆÈ›ÝÚ]™[ˆŠNÝœ\Ú
Ý\Nˆœ™[˜[YH‹Ù[]™\‘^Û\Ú]š]NœËœ›ÛT]”JJKÔ]”JÊ_JKOPßXœ™XZÎØØ\ÙH™š[H[][ÛˆŽžÛ]OX_NÚYŠ]J]›ÝÈ™]È\œ›ÜŠ˜Y\œÙHÝ]Nˆ›È]Ú]™[ˆ›Üˆš[H[][ÛˆŠNÝœ\Ú
Ý\Nˆ™š[H[][Ûˆ‹Ù[]™\‘^Û\Ú]š]NœË[šÎ“É‰“ÖÌ_[]”JJK[ÙN™

K\Ú”ßJ_Xœ™XZÎØØ\ÙH™š[HÜ™X][ÛˆŽžÛ]O[ŸÚYŠ]J]›ÝÈ™]È\œ›ÜŠ˜Y\œÙHÝ]Nˆ›È]Ú]™[ˆ›Üˆš[HÜ™X][ÛˆŠNÝœ\Ú
Ý\Nˆ™š[HÜ™X][Ûˆ‹Ù[]™\‘^Û\Ú]š]NœË[šÎ“É‰“ÖÌ_[]”JJK[ÙN™

K\ÚžJ_Xœ™XZÎØØ\ÙHœ]ÚŽ˜Ø\ÙH›[ÙHÚ[™ÙHŽ–OUŽØœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠJNØœ™XZßVI‰˜É‰™‰‰˜ÈOOY‰‰œ\Ú
Ý\Nˆ›[ÙHÚ[™ÙH‹Ù[]™\‘^Û\Ú]š]NœË]”JJKÛ[ÙN™
ÊK™]Ó[ÙN™
Š_JKI‰“É‰“Ë›[™Ý	‰œ\Ú
Ý\Nˆœ]Ú‹Ù[]™\‘^Û\Ú]š]NœË]”JJK[šÜÎ“Ë™Y›Ü™R\Ú”ËY\’\ÚžJ_ZYŠ›[™ÝOOL
]›ÝÈ™]È\œ›ÜŠ•[˜X›HÈ\œÙH]Úš[Nˆ›ÈÚ[™Ù\È›Ý[™ˆXZÙHÝ\™HH]Ú\ÈH˜[YUŽ[˜ÛÙYÝš[™ÈŠNÜ™]\›ˆY[˜Ý[Ûˆ
J^Û]\\œÙR[
K
ILLNÚYŠOOU]	‰OOWÝ
]›ÝÈ™]È\œ›ÜŠ[™^XÝYš[H[ÙHÝš[™Îˆ	Ù_X
NÜ™]\›ˆY[˜Ý[ÛˆŠJ^Û]YKœÜ]
×‹ÙÊNÜ™]\›ˆÝ›[™ÝLWOOOHˆ‰‰œÜ

K]
Ý

J_Y[˜Ý[ÛˆÝ
J^Û]LLÙ›ÜŠ]Ý\NœË[™\Î˜_[ÙˆKœ\Ê\ÝÚ]Ú
Ê^ØØ\ÙH˜ÛÛ^ŽœŠÏXK›[™Ý
ÏXK›[™ÝØœ™XZÎØØ\ÙH™[][ÛˆŽ
ÏXK›[™ÝØœ™XZÎØØ\ÙHš[œÙ\[ÛˆŽœŠÏXK›[™ÝØœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠÊNØœ™XZßZYŠOOYKšXY\‹›ÜšYÚ[˜[›[™ÝˆOOYKšXY\‹œ]ÚY›[™Ý
^Û]ÏXOO˜OØN˜
ÉØ_XÝ›ÝÈ™]È\œ›ÜŠ[šÈXY\ˆ[YÜš]HÚXÚÈ˜Z[Y
^XÝY	ÜÊKšXY\‹›ÜšYÚ[˜[›[™Ý
_H	ÜÊKšXY\‹œ]ÚY›[™Ý
_HÛÝ	ÜÊ
_H	ÜÊŠ_H
X
__\YJ
NÑ

NÝ˜\ˆOXÛ\ÜÈ^[™È\œ›ÜžØÛÛœÝXÝÜŠ‹Ê^ÜÝ\\ŠØ[››Ý\H[šÈÉÜŠÌ_X
NÝ\Ëš[šÏ\ß_NØ\Þ[˜È[˜Ý[ÛˆÌJKŠ^Û]ÏX]ØZ]K›Ý]›ÛZ\ÙJ
KOX]ØZ]Š
NÝ\[ÙˆOH‰‰ŠXJK]ØZ]K›][Y\Ô›ÛZ\ÙJË˜][YKË›][YJ_X\Þ[˜È[˜Ý[ÛˆS
KØ˜\ÙQœÎ[™]È[‹žT[ŽœHLK™\œÚ[ÛŽœÏ[[O^ßJ^Ù›ÜŠ]HÙˆJZYŠJKœÙ[]™\‘^Û\Ú]š]HOO[[	‰œÈOO[[	‰ˆQœ‹œØ]\ÙšY\ÕÚ]™\™[X\Ù\ÊËKœÙ[]™\‘^Û\Ú]š]JJJ\ÝÚ]Ú
K\J^ØØ\ÙH™š[H[][ÛˆŽšYŠŠ^ÚYŠ]™^\ÝÔÞ[˜ÊKœ]
J]›ÝÈ™]È\œ›ÜŠžZ[™ÈÈ[]HHš[H]Ù\Û‰Ý^\Ýˆ	ØKœ]X
_Y[ÙH]ØZ]ÌJË™\›˜[YJKœ]
K\Þ[˜Ê
OOžØ]ØZ][›[šÔ›ÛZ\ÙJKœ]
_JNØœ™XZÎØØ\ÙHœ™[˜[YHŽšYŠŠ^ÚYŠ]™^\ÝÔÞ[˜ÊK™œ›ÛT]
J]›ÝÈ™]È\œ›ÜŠžZ[™ÈÈ[Ý™HHš[H]Ù\Û‰Ý^\Ýˆ	ØK™œ›ÛT]X
_Y[ÙH]ØZ]ÌJË™\›˜[YJK™œ›ÛT]
K\Þ[˜Ê
OOžØ]ØZ]ÌJË™\›˜[YJKÔ]
K\Þ[˜Ê
OOžØ]ØZ]ÌJK™œ›ÛT]\Þ[˜Ê
OOŠ]ØZ]›[Ý™T›ÛZ\ÙJK™œ›ÛT]KÔ]
KKÔ]
J_J_JNØœ™XZÎØØ\ÙH™š[HÜ™X][ÛˆŽšYŠŠ^ÚYŠ™^\ÝÔÞ[˜ÊKœ]
J]›ÝÈ™]È\œ›ÜŠžZ[™ÈÈÜ™X]HHš[H][™XYH^\ÝÎˆ	ØKœ]X
_Y[Ù^Û]XKš[šÏØKš[šËœ\ÖÌK›[™\Ëš›Ú[Š˜
JÊKš[šËœ\ÖÌK››Ó™]Û[™P][™Ù‘š[OÈˆŽ˜˜
NˆˆŽØ]ØZ]›ZÙ\œ›ÛZ\ÙJË™\›˜[YJKœ]
KØÚ[ÙLË][Y\Î–ÐZK”ÐQ‘WÕSQKZK”ÐQ‘WÕSQW_JK]ØZ]Üš]Qš[T›ÛZ\ÙJKœ]‹Û[ÙN˜K›[Ù_JK]ØZ]][Y\Ô›ÛZ\ÙJKœ]ZK”ÐQ‘WÕSQKZK”ÐQ‘WÕSQJ_Xœ™XZÎØØ\ÙHœ]ÚŽ˜]ØZ]ÌJKœ]\Þ[˜Ê
OOžØ]ØZ]Ý
KØ˜\ÙQœÎžT[ŽœŸJ_JNØœ™XZÎØØ\ÙH›[ÙHÚ[™ÙHŽžÛ]ÏJ]ØZ]œÝ]›ÛZ\ÙJKœ]
JK›[ÙNÚYŠ™JK›™]Ó[ÙJHOOS™JÊJXÛÛ[YNØ]ØZ]ÌJKœ]\Þ[˜Ê
OOžØ]ØZ]˜Ú[Ù›ÛZ\ÙJKœ]K›™]Ó[ÙJ_J_Xœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠJNØœ™XZß_Y[˜Ý[Ûˆ™JJ^Ü™]\›ŠI
OŒY[˜Ý[ÛˆX™JJ^Ü™]\›ˆKœ™\XÙJ×ÊÉËˆŠ_Y[˜Ý[Ûˆ]
K
^Ü™]\›ˆX™JJOOOSX™J
_X\Þ[˜È[˜Ý[ÛˆÝ
Ú[šÜÎ™K]KØ˜\ÙQœÎœ‹žT[ŽœÏHL_J^Û]OX]ØZ]‹œÝ]Þ[˜Ê
K›[ÙKÏJ]ØZ]‹œ™XYš[TÞ[˜Ê]ŽŠJKœÜ]
×‹ÊKV×KLLÙ›ÜŠ]ÈÙˆJ^Û]ÏSX]›X^
ËšXY\‹œ]ÚYœÝ\
Ü
KSX]›X^
ËZ
KOSX]›X^
Ë›[™ÝTËPËšXY\‹›ÜšYÚ[˜[›[™Ý
KSX]›X^
JKÏLOLO[[Ù›ÜŠÓÏUÊ^ÚYŠÏ^	‰ŠOTËSËOUX™JËËJKHOO[[
J^ÓÏKSÎØœ™XZßZYŠÏRI‰ŠOTÊÓËOUX™JËËJKHOO[[
JXœ™XZÎÓÊÏL_ZYŠOOO[[
]›ÝÈ™]ÈJKš[™^ÙŠÊKÊNÙ‹œ\Ú
JK
ÏSËUJÐËšXY\‹›ÜšYÚ[˜[›[™ÝZYŠÊ\™]\›ŽÛ]OLÙ›ÜŠ]ÈÙˆŠY›ÜŠ]ÈÙˆÊ\ÝÚ]Ú
Ë\J^ØØ\ÙHœÜXÙHŽžÛ]TËš[™^
ÑNØËœÜXÙJË›[UÑ[]K‹‹”Ë›[™\ÕÒ[œÙ\
KJÏTË›[™\ÕÒ[œÙ\›[™ÝTË›[UÑ[]_Xœ™XZÎØØ\ÙHœÜŽ˜ËœÜ

NØœ™XZÎØØ\ÙHœ\ÚŽ˜Ëœ\Ú
Ë›[™JNØœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠÊNØœ™XZßX]ØZ]‹Üš]Qš[T›ÛZ\ÙJËš›Ú[Š˜
KÛ[ÙN˜_J_Y[˜Ý[ÛˆX™JKŠ^Û]ÏV×NÙ›ÜŠ]HÙˆKœ\Ê\ÝÚ]Ú
K\J^ØØ\ÙH˜ÛÛ^Ž˜Ø\ÙH™[][ÛˆŽžÙ›ÜŠ]ˆÙˆK›[™\Ê^Û]Ï]Ü—NÚYŠÏO[[V]
ËŠJ\™]\›ˆ[ÜŠÏL_XK\OOOH™[][Ûˆ‰‰ŠËœ\Ú
Ý\NˆœÜXÙH‹[™^œ‹XK›[™\Ë›[™Ý[UÑ[]N˜K›[™\Ë›[™Ý[™\ÕÒ[œÙ\–×_JKK››Ó™]Û[™P][™Ù‘š[I‰œËœ\Ú
Ý\Nˆœ\Ú‹[™NˆˆŸJJ_Xœ™XZÎØØ\ÙHš[œÙ\[ÛˆŽœËœ\Ú
Ý\NˆœÜXÙH‹[™^œ‹[UÑ[]NŒ[™\ÕÒ[œÙ\˜K›[™\ßJKK››Ó™]Û[™P][™Ù‘š[I‰œËœ\Ú
Ý\NˆœÜŸJNØœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠK\JNØœ™XZß\™]\›ˆß]˜\ˆK×˜Z[[
×—JÊO‰ÎÙ[˜Ý[ÛˆLJK
^Û]Ü›ÝØÛÛœ‹ÛÝ\˜ÙNœËÙ[XÝÜŽ˜K\˜[\Î›ŸOZ‹œ\œÙT˜[™ÙJJNÚYŠˆOOHœ]ÚˆŠ]›ÝÈ™]È\œ›ÜŠ’[˜[Y]Ú˜[™ÙHŠNÚYŠÏOO[[
]›ÝÈ™]È\œ›ÜŠ”]ÚØØ]ÜœÈ]\Ý^XÚ]HYš[™HZ\ˆÛÝ\˜ÙHŠNÛ]ÏXOØKœÜ]
É‹ÊK›X\
OO™™KÔÜX›T]
JJN–×K[‰‰\[Ùˆ‹›ØØ]ÜOHœÝš[™ÈÚ‹œ\œÙSØØ]ÜŠ‹›ØØ]ÜŠN›[[‰‰\[Ùˆ‹™\œÚ[ÛOHœÝš[™ÈÛ‹™\œÚ[ÛŽ›[]
ÊNÜ™]\›žÜ\™[ØØ]ÜŽ™‹ÛÝ\˜ÙR][Nš]Ú]Î˜ËÛÝ\˜ÙU™\œÚ[ÛŽœ_Y[˜Ý[ÛˆS
J^Ü™]\›ˆKœ˜[™ÙKœÝ\ÕÚ]
œ]ÚˆŠ_Y[˜Ý[ÛˆYÊJ^Ü™]\›ˆKœ™Y™\™[˜ÙKœÝ\ÕÚ]
œ]ÚˆŠ_Y[˜Ý[Ûˆ	ŠJ^Û]ÜÛÝ\˜ÙR][N‹‹œŸOTLJKœ˜[™ÙK‹œ\œÙQ\ØÜš\ÜŠNÜ™]\›žË‹‹œ‹ÛÝ\˜ÙQ\ØÜš\ÜŽ_Y[˜Ý[ÛˆT
J^Û]ÜÛÝ\˜ÙR][N‹‹œŸOTLJKœ™Y™\™[˜ÙK‹œ\œÙSØØ]ÜŠNÜ™]\›žË‹‹œ‹ÛÝ\˜ÙSØØ]ÜŽ_Y[˜Ý[Ûˆ
J^Û]ÜÛÝ\˜ÙR][NOTLJKœ˜[™ÙK‹œ\œÙQ\ØÜš\ÜŠNÜ™]\›ˆY[˜Ý[Ûˆ
J^Û]ÜÛÝ\˜ÙR][NOTLJKœ™Y™\™[˜ÙK‹œ\œÙSØØ]ÜŠNÜ™]\›ˆY[˜Ý[ÛˆŠJ^ÚYŠ^S
JJ\™]\›ˆNÛ]ÜÛÝ\˜ÙR][NOTLJKœ˜[™ÙK‹œ\œÙQ\ØÜš\ÜŠNÜ™]\›ˆY[˜Ý[ÛˆS
J^ÚYŠTYÊJJ\™]\›ˆNÛ]ÜÛÝ\˜ÙR][NOTLJKœ™Y™\™[˜ÙK‹œ\œÙSØØ]ÜŠNÜ™]\›ˆY[˜Ý[ÛˆØ™JÜ\™[ØØ]ÜŽ™KÛÝ\˜ÙR][N]Ú]Îœ‹ÛÝ\˜ÙU™\œÚ[ÛŽœË]Ú\Ú˜_KŠ^Û]ÏYHOO[[ÞÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠJ_NžßK]\[ÙˆÏHÞÝ™\œÚ[ÛŽœßNžßK]\[ÙˆOHÞÚ\Ú˜_NžßNÜ™]\›ˆ‹›XZÙT˜[™ÙJÜ›ÝØÛÛˆœ]Úˆ‹ÛÝ\˜ÙN›Š
KÙ[XÝÜŽœ‹š›Ú[Š‰ˆŠK\˜[\ÎžË‹‹™‹‹‹œ‹‹˜ß_J_Y[˜Ý[ÛˆS
KÜ\™[ØØ]ÜŽÛÝ\˜ÙQ\ØÜš\ÜŽœ‹]Ú]ÎœßJ^Ü™]\›ˆ‹›XZÙQ\ØÜš\ÜŠKØ™JÜ\™[ØØ]ÜŽÛÝ\˜ÙR][Nœ‹]Ú]ÎœßK‹œÝš[™ÚYžQ\ØÜš\ÜŠJ_Y[˜Ý[ÛˆÒŠKÜ\™[ØØ]ÜŽÛÝ\˜ÙTXÚØYÙNœ‹]Ú]ÎœË]Ú\Ú˜_J^Ü™]\›ˆ‹›XZÙSØØ]ÜŠKØ™JÜ\™[ØØ]ÜŽÛÝ\˜ÙR][Nœ‹ÛÝ\˜ÙU™\œÚ[ÛŽœ‹™\œÚ[Û‹]Ú]ÎœË]Ú\Ú˜_K‹œÝš[™ÚYžSØØ]ÜŠJ_Y[˜Ý[Ûˆ™JÛÛXœÛÛ]N™KÛ”™[]]™NÛ”›Ú™XÝœ‹ÛZ[[ŽœßKJ^Û]XK›\Ý[™^ÙŠˆHŠNÛˆOOKLI‰ŠOXKœÛXÙJŠÌJJNÛ]ÏXK›X]Ú

NÜ™]\›ˆÈOO[[ÜÊÖÌWJN˜KœÝ\ÕÚ]
Ÿ‹ÈŠOÜŠKœÛXÙJŠJN’Ëš\ÐXœÛÛ]JJOÙJJN
J_Y[˜Ý[Ûˆ˜™JJ^Û]YK›\Ý[™^ÙŠˆHŠNÜ™]\›žÛÜ[Û˜[ŠOOKLOÛ™]ÈÙ]
KœÛXÙJ
KœÜ]
ÈKÊJN›™]ÈÙ]
Kš\Ê›Ü[Û˜[Š__Y[˜Ý[ÛˆRŠJ^Ü™]\›ˆ™JÛÛXœÛÛ]NŠ
OOˆLKÛ”™[]]™NŠ
OOˆLÛ”›Ú™XÝŠ
OOˆLKÛZ[[ŽŠ
OOˆL_KJ_X\Þ[˜È[˜Ý[Ûˆ
KŠ^Û]ÏYHOO[[Ø]ØZ]‹™™]Ú\‹™™]Ú
KŠN›[O\É‰œË›ØØ[]ÞÜXÚØYÙQœÎ›™]È›Šœ›ÛÝ
K™Yš^]’Ëœ™[]]™Jœ›ÛÝË›ØØ[]
_NœÎÜÉ‰œÈOOXI‰œËœ™[X\ÙQœÉ‰œËœ™[X\ÙQœÊ
NÛ]X]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OO˜]ØZ]›ÛZ\ÙK˜[
›X\
\Þ[˜ÈÏOžÛ]Z˜™JÊKX]ØZ]™JÛÛXœÛÛ]N˜\Þ[˜ÈO˜]ØZ]Kœ™XYš[T›ÛZ\ÙJ]ŽŠKÛ”™[]]™N˜\Þ[˜ÈOžÚYŠOOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\™[ØØ]ÜˆÚÝ[]™H™Y[ˆ™]ÚYŠNÜ™]\›ˆ]ØZ]KœXÚØYÙQœËœ™XYš[T›ÛZ\ÙJËš›Ú[ŠKœ™Yš^]
K]ŽŠ_KÛ”›Ú™XÝ˜\Þ[˜ÈO˜]ØZ]Kœ™XYš[T›ÛZ\ÙJËš›Ú[Š‹œ›Ú™XÝ˜ÝÙ
K]ŽŠKÛZ[[Ž˜\Þ[˜ÈO˜]ØZ]‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™š\œÝÛÚÊOO‘K™Ù]Z[[”]Ú‹œ›Ú™XÝ
_KÊNÜ™]\›žË‹‹™‹ÛÝ\˜ÙNœ_JJJNÙ›ÜŠ]ÈÙˆŠ]\[ÙˆËœÛÝ\˜ÙOOHœÝš[™È‰‰ŠËœÛÝ\˜ÙOXËœÛÝ\˜ÙKœ™\XÙJ×—ËÙË˜
JNÜ™]\›ˆŸX\Þ[˜È[˜Ý[Ûˆ’ŠKØØXÚN›Ú™XÝœŸJ^Û]Ï\‹œÝÜ™YXÚØYÙ\Ë™Ù]
K›ØØ]Ü’\Ú
NÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙHÈ™H™YÚ\Ý\™YŠNÛ]OQS
JK\‹œÝÜ™YÚXÚÜÝ[\ËÏ[™]ÈÚKX]ØZ]K›ZÝ[\›ÛZ\ÙJ
KRËš›Ú[Š‹œÛÝ\˜ÙHŠKRËš›Ú[Š‹\Ù\ˆŠKORËš›Ú[Š‹‹žX\›‹\]ÚšœÛÛˆŠKÏ\‹˜ÛÛ™šYÝ\˜][Û‹›XZÙQ™]Ú\Š
KÏV×NÝž^Û]NÚYŠK›ØØ]Ü’\ÚOOXK›ØØ]Ü’\Ú
^Û]X]ØZ]Ë™™]Ú
KØØXÚN›Ú™XÝœ‹™]Ú\ŽËÚXÚÜÝ[\Î›‹™\Ü˜ßJNÔËœ\Ú


OO•œ™[X\ÙQœÏËŠ
JKUOUY[ÙHX]ØZ]Ë™™]Ú
KØØXÚN›Ú™XÝœ‹™]Ú\ŽËÚXÚÜÝ[\Î›‹™\Ü˜ßJKËœ\Ú


OOžœ™[X\ÙQœÏËŠ
JKOX]ØZ]Ë™™]Ú
KØØXÚN›Ú™XÝœ‹™]Ú\ŽËÚXÚÜÝ[\Î›‹™\Ü˜ßJKËœ\Ú


OO’Kœ™[X\ÙQœÏËŠ
JNØ]ØZ]›ÛZ\ÙK˜[
ÛK˜ÛÜT›ÛZ\ÙJœ™Yš^]Ø˜\ÙQœÎžœXÚØYÙQœßJKK˜ÛÜT›ÛZ\ÙJKœ™Yš^]Ø˜\ÙQœÎ’KœXÚØYÙQœßJKKÜš]RœÛÛ”›ÛZ\ÙJKÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠJK™\œÚ[ÛŽœË™\œÚ[ÛŸJWJ_Yš[˜[^Ù›ÜŠ]ÙˆÊ^

_\™]\›ˆK™]XÚ[\
ŠKX\Þ[˜È[˜Ý[ÛˆRŠK
^Û]Y™K™œ›ÛTÜX›T]
JKœ™\XÙJ×ÙË‹ÈŠKÏY™K™œ›ÛTÜX›T]

Kœ™\XÙJ×ÙË‹ÈŠKÜÝÝ]˜KÝ\œŽ›ŸOX]ØZ]\‹™^XÝœ
™Ú]‹È‹XÈ‹˜ÛÜ™KœØY™XÜ›Y˜[ÙH‹™Y™ˆ‹‹K\Ü˜Ë\™Yš^XKÈ‹‹KYÝ\™Yš^X‹È‹‹KZYÛ›Ü™KXÜ‹X]Y[Û‹‹KY[Z[™^‹‹K[›ËZ[™^‹‹K[›Ë\™[˜[Y\È‹‹K]^‹‹×KØÝÙ™™KÔÜX›T]
›ØÙ\ÜË˜ÝÙ

JK[ŽžË‹‹œ›ØÙ\ÜË™[‹ÒUÐÓÓ‘’Q×Ó“ÔÖTÕSNˆŒH‹ÓQNˆˆ‹×ÐÓÓ‘’Q×ÒÓQNˆˆ‹TÑT”“Ñ’SNˆˆŸ_JNÚYŠ‹›[™ÝŒ
]›ÝÈ™]È\œ›ÜŠ[˜X›HÈY™ˆ\™XÝÜšY\ËˆXZÙHÝ\™H[ÝH]™HH™XÙ[™\œÚ[ÛˆÙˆ	ÙÚ]	È]˜Z[X›H[ˆU‚•H›ÛÝÚ[™È\œ›ÜˆØ\È™\ÜYžH	ÙÚ]	Î‚‰ÛŸX
NÛ]Ï\‹œÝ\ÕÚ]
‹ÈŠOÙO™‹œÛXÙJJN™O™ŽÜ™]\›ˆKœ™\XÙJ™]È™YÑ^

_ŠJ	ÑÙK™\ØØ\T™YÑ^
ÉØÊŠ_KØ
_JX™ÈŠK‰KÈŠKœ™\XÙJ™]È™YÑ^

_ŠIÑÙK™\ØØ\T™YÑ^
ÉØÊÊ_KØ
_X™ÈŠK‰KÈŠKœ™\XÙJ™]È™YÑ^
ÙK™\ØØ\T™YÑ^
	ÜŸKØ
K™ÈŠKˆŠKœ™\XÙJ™]È™YÑ^
ÙK™\ØØ\T™YÑ^
	ÜßKØ
K™ÈŠKˆŠ_Y[˜Ý[ÛˆŠK
^Û]V×NÙ›ÜŠ]ÜÛÝ\˜ÙNœß[ÙˆJ^ÚYŠÏOO[[
XÛÛ[YNÛ]OVŠÊNÙ›ÜŠ]ˆÙˆJ^Û]ÜÙ[]™\‘^Û\Ú]š]N˜Ë‹‹™ŸO[ŽØÈOO[[	‰OO[[	‰ˆQœ‹œØ]\ÙšY\ÕÚ]™\™[X\Ù\ÊÊ_‹œ\Ú
”ÓÓ‹œÝš[™ÚYžJŠJ__\™]\›ˆ‹›XZÙR\Ú
	ÌßX‹‹œŠKœÛXÙJŠ_\YJ
NÙ[˜Ý[ÛˆØ™JKØÛÛ™šYÝ\˜][ÛŽ™\ÜœŸJ^Ù›ÜŠ]ÈÙˆKœ\ÊY›ÜŠ]HÙˆË›[™\Ê\ÝÚ]Ú
Ë\J^ØØ\ÙH˜ÛÛ^Žœ‹œ™\Ü[™›Ê[	ÜKœ™]JK™Ü™^HŠ_X
NØœ™XZÎØØ\ÙH™[][ÛˆŽœ‹œ™\Ü\œ›ÜŠŽH	ÜKœ™]JKK•\K”‘SSÕ‘Q
_X
NØœ™XZÎØØ\ÙHš[œÙ\[ÛˆŽœ‹œ™\Ü\œ›ÜŠŽ
È	ÜKœ™]JKK•\KQQ
_X
NØœ™XZÎÙY˜][‘ÙK˜\ÜÙ\™]™\ŠË\J__]˜\ˆ”XÛ\ÜÞÜÝ\ÜÊŠ^Ü™]\›ˆHTYÊ
_YÙ]ØØ[]
Š^Ü™]\›ˆ[X\Þ[˜È™]Ú
Š^Û]Ï\‹˜ÚXÚÜÝ[\Ë™Ù]
›ØØ]Ü’\Ú
_[ØK‹×OX]ØZ]‹˜ØXÚK™™]ÚXÚØYÙQœ›ÛPØXÚJËÛÛ’]Š
OOœ‹œ™\Üœ™\ÜØXÚR]

KÛ“Z\ÜÎŠ
OOœ‹œ™\Üœ™\ÜØXÚSZ\ÜÊ	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_HØ[‰Ý™H›Ý[™[ˆHØXÚH[™Ú[™H™]ÚYœ›ÛHH\ÚØ
KØY\ŽŠ
OO\Ëœ]ÚXÚØYÙJŠK‹‹œ‹˜ØXÚSÜ[ÛœßJNÜ™]\›žÜXÚØYÙQœÎ˜K™[X\ÙQœÎ›‹™Yš^]š‹™Ù]Y[™[™Ü”]

KØØ[]\Ë™Ù]ØØ[]
ŠKÚXÚÜÝ[N˜ß_X\Þ[˜È]ÚXÚØYÙJŠ^Û]Ü\™[ØØ]ÜŽœËÛÝ\˜ÙSØØ]ÜŽ˜KÛÝ\˜ÙU™\œÚ[ÛŽ›‹]Ú]Î˜ßOYT

KX]ØZ]
ËËŠKX]ØZ]K›ZÝ[\›ÛZ\ÙJ
KRËš›Ú[Š˜Ý\œ™[žš\ŠKOX]ØZ]‹™™]Ú\‹™™]Ú
KŠKÏZ‹™Ù]Y[™[™Ü”]

KÏ[™]ÈÊØÜ™X]NˆL]™[œ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜ÛÛ\™\ÜÚ[Û“]™[Š_JNØ]ØZ]ÙKœ™[X\ÙPY\•\ÙP\Þ[˜Ê\Þ[˜Ê
OOžØ]ØZ]Ë˜ÛÜT›ÛZ\ÙJËKœ™Yš^]Ø˜\ÙQœÎ‘KœXÚØYÙQœËÝX›TÛÜˆLJ_KKœ™[X\ÙQœÊKËœØ]™P[™ÛÜÙJ
NÙ›ÜŠ]ÜÛÝ\˜ÙNžÜ[Û˜[’_[ÙˆŠ^ÚYŠOO[[
XÛÛ[YNÛ][™]ÈÊÛ]™[œ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜ÛÛ\™\ÜÚ[Û“]™[Š_JKÏ[™]È›ŠËœ™\ÛÛ™Jœ›ÛÝÊKØ˜\ÙQœÎ•JNÝž^Ø]ØZ]S
Š
KØ˜\ÙQœÎ“Ë™\œÚ[ÛŽ›ŸJ_XØ]Ú
J^ÚYŠJH[œÝ[˜Ù[ÙˆJJ]›ÝÈNÛ]O\‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™[˜X›R[›[™R[šÜÈŠKOHVI‰ˆROÈˆ
Ù][˜X›R[›[™R[šÜÈ›Üˆ]Z[ÊHŽˆˆ‹YOX	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_Nˆ	ÕK›Y\ÜØYÙ_IÝ_XYOXYOOžÖI‰‘Ø™JKš[šËØÛÛ™šYÝ\˜][ÛŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™\Ü˜Y_J_NÚYŠ™\ØØ\™[™ÛÜÙJ
KJ^Ü‹œ™\Üœ™\ÜØ\›š[™ÓÛ˜ÙJ‹YKÜ™\Ü^˜NY_JNØÛÛ[Y_Y[ÙH›ÝÈ™]ÈÝ
‹YKYJ_UœØ]™P[™ÛÜÙJ
_\™]\›ˆ™]ÈÊÛ]™[œ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
˜ÛÛ\™\ÜÚ[Û“]™[Š_J__NÜYJ
NÝ˜\ˆ”XÛ\ÜÞÜÝ\ÜÑ\ØÜš\ÜŠŠ^Ü™]\›ˆH^S

_\Ý\ÜÓØØ]ÜŠŠ^Ü™]\›ˆHTYÊ
_\ÚÝ[\œÚ\Ý™\ÛÛ][ÛŠŠ^Ü™]\›ˆL_Xš[™\ØÜš\ÜŠ‹Ê^Û]Ü]Ú]Î˜_OIŠ
NÜ™]\›ˆK™]™\žJOˆ]RŠŠJOÝš‹˜š[™\ØÜš\ÜŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠŠ_J_YÙ]™\ÛÛ][Û‘\[™[˜ÚY\ÊŠ^Û]ÜÛÝ\˜ÙQ\ØÜš\ÜŽœßOIŠ
NÜ™]\›žÜÛÝ\˜ÙQ\ØÜš\ÜŽœ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹››Ü›X[^™Q\[™[˜ÞJÊ__X\Þ[˜ÈÙ]Ø[™Y]\Ê‹Ê^ÚYŠ\Ë™™]ÚÜ[ÛœÊ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ\È™\ÛÛ™\ˆØ[››Ý™H\ÙY[›\ÜÈH™]Ú\ˆ\ÈÛÛ™šYÝ\™YŠNÛ]Ü\™[ØØ]ÜŽ˜K]Ú]Î›ŸOIŠ
KÏX]ØZ]
K‹Ë™™]ÚÜ[ÛœÊK\‹œÛÝ\˜ÙQ\ØÜš\ÜŽÚYŠ\[ÙˆˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\[™[˜ÞHÚÝ[]™H™Y[ˆ™\ÛÛ™YŠNÛ]\ŠË‹™\œÚ[ÛŠNÜ™]\›–ØÒŠÜ\™[ØØ]ÜŽ˜KÛÝ\˜ÙTXÚØYÙN™‹]Ú]Î›‹]Ú\ÚœJW_X\Þ[˜ÈÙ]Ø]\ÙžZ[™Ê‹ËJ^Û]Û—OX]ØZ]\Ë™Ù]Ø[™Y]\Ê‹JNÜ™]\›žÛØØ]ÜœÎœË™š[\ŠÏO˜Ë›ØØ]Ü’\ÚOO[‹›ØØ]Ü’\Ú
KÛÜYˆL__X\Þ[˜È™\ÛÛ™JŠ^Û]ÜÛÝ\˜ÙSØØ]ÜŽœßOYT

NÜ™]\›žË‹‹˜]ØZ]‹œ™\ÛÛ™\‹œ™\ÛÛ™JËŠK‹‹__NÜYJ
NÑ

NÕ

NÝ˜\ˆŒOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËœØ]™OZK›ÛÛX[Š‹\ËK\Ø]™H‹LKÙ\ØÜš\[ÛŽˆYH]ÚÈ[Ý\ˆ™\ÛÛ][Ûˆ[šY\ÈŸJNÝ\Ëœ]Ú›Û\ZK”Ýš[™Ê
_\Ý]XÞÝ\Ëœ]ÏVÖÈœ]ÚXÛÛ[Z]—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆ™Ù[™\˜]HH]ÚÝ]ÙˆH\™XÝÜžH‹]Z[Îˆ—ˆžHY˜][\ÈÚ[š[H]Úš[HÛˆÝÝ]˜\ÙYÛˆHY™ˆ™]ÙY[ˆH›Û\ˆ\ÜÙY[ˆ[™HÜšYÚ[˜[™\œÚ[ÛˆÙˆHXÚØYÙKˆÝXÚš[H\ÈÝZ]X›H›ÜˆÛÛœÝ[\[ÛˆÚ]H]Ú˜›ÝØÛÛ——ˆÚ]H\ËK\Ø]™XÜ[ÛˆÙ]H]Úš[HÛÛ‰Ý™Hš[YÛˆÝÝ][ž[[Ü™H[™Ú[[œÝXY™HÝÜ™YÚ][ˆHØØ[š[H
žHY˜][Ù\Ú][ˆžX\›‹Ü]Ú\Ø]ÛÛ™šYÝ\˜X›HšXHH]Ú›Û\˜Ù][™ÊKˆH™\ÛÛ][ÛœØ[žHÚ[[ÛÈ™HYYÈ[Ý\ˆÜ[]™[X[šY™\Ý™Y™\™[˜Ú[™ÈH]ÚYXÚØYÙHšXHH]Ú˜›ÝØÛÛ——ˆ›ÝH]Û›H›Û\œÈÙ[™\˜]YžHX\›ˆ]Ú\™HXØÙ\Y\È˜[Y[œ]›ÜˆX\›ˆ]ÚXÛÛ[Z]—ˆŸJ_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]RËœ™\ÛÛ™J\Ë˜ÛÛ^˜ÝÙ™KÔÜX›T]
\Ëœ]Ú›Û\ŠJKÏRËš›Ú[Š‹‹‹‹ÜÛÝ\˜ÙHŠKRËš›Ú[Š‹‹‹‹ËžX\›‹\]ÚšœÛÛˆŠNÚYŠ[K™^\ÝÔÞ[˜ÊÊJ]›ÝÈ™]ÈÝ
•H\™Ý[Y[›Û\ˆY‰ÝÙ]Ü™X]YžH	ÞX\›ˆ]Ú	ÈŠNÛ]X]ØZ]RŠËŠKX]ØZ]Kœ™XYœÛÛ”›ÛZ\ÙJŠKOZ‹œ\œÙSØØ]ÜŠ›ØØ]Ü‹L
NÚYŠ\ËœÝÜ™YXÚØYÙ\Ëš\ÊK›ØØ]Ü’\Ú
J]›ÝÈ™]ÈÝ
“›ÈXÚØYÙH›Ý[™[ˆH›Ú™XÝ›ÜˆHÚ]™[ˆØØ]ÜˆŠNÚYŠ]\ËœØ]™J^Ý\Ë˜ÛÛ^œÝÝ]Üš]J
NÜ™]\›Ÿ[]Ï\‹™Ù]
œ]Ú›Û\ˆŠKÏRËš›Ú[ŠË	Ú‹œÛYÚYžSØØ]ÜŠJ_Kœ]Ú
NØ]ØZ]K›ZÙ\”›ÛZ\ÙJËÜ™XÝ\œÚ]™NˆLJK]ØZ]KÜš]Qš[T›ÛZ\ÙJË
NÛ]V×KO[™]ÈX\Ù›ÜŠ]ÙˆËœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
J^ÚYŠ‹š\Õš\X[ØØ]ÜŠ
JXÛÛ[YNÛ]ÏU™\[™[˜ÚY\Ë™Ù]
KšY[\Ú
NÚYŠSÊXÛÛ[YNÛ]OZ‹™[œÝ\™Q]š\X[^™Y\ØÜš\ÜŠÊKO[ŠJKO\ËœÝÜ™Y™\ÛÛ][ÛœË™Ù]
K™\ØÜš\Ü’\Ú
NÚYŠ]J]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH™\ÛÛ][ÛˆÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÚYŠ\ËœÝÜ™YXÚØYÙ\Ë™Ù]
JJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]YO\ËžUÛÜšÜÜXÙPžSØØ]ÜŠ
NÚYŠYJ^œ\Ú
YJNÙ[Ù^Û]YO\Ë›ÜšYÚ[˜[XÚØYÙ\Ë™Ù]
›ØØ]Ü’\Ú
NÚYŠXYJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÜšYÚ[˜[XÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÛ]OXYK™\[™[˜ÚY\Ë™Ù]
ËšY[\Ú
NÚYŠYJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÜšYÚ[˜[\[™[˜ÞHÈ]™H™Y[ˆ™YÚ\Ý\™YŠNÒKœÙ]
K™\ØÜš\Ü’\ÚJ__Y›ÜŠ]Ùˆ
Y›ÜŠ]ÈÙˆ]š\™\[™[˜ÚY\Ê^Û]OU›X[šY™\ÝÓ×K™Ù]
KšY[\Ú
NÚYŠUJXÛÛ[YNÛ]ORS
KÜ\™[ØØ]ÜŽ›[ÛÝ\˜ÙQ\ØÜš\ÜŽš‹˜ÛÛ™\ØØ]Ü•Ñ\ØÜš\ÜŠJK]Ú]Î–ÒËš›Ú[Š\‹šÛYKËœ™[]]™JË˜ÝÙÊJW_JNÕ›X[šY™\ÝÓ×KœÙ]
KšY[\ÚJ_Y›ÜŠ]ÙˆK˜[Y\Ê
J^Û]ÏRS
Ü\™[ØØ]ÜŽ›[ÛÝ\˜ÙQ\ØÜš\ÜŽš‹˜ÛÛ™\ØØ]Ü•Ñ\ØÜš\ÜŠJK]Ú]Î–ÒËš›Ú[Š\‹šÛYKËœ™[]]™JË˜ÝÙÊJW_JNÜËÜ]™[ÛÜšÜÜXÙK›X[šY™\Ýœ™\ÛÛ][ÛœËœ\Ú
Ü]\›ŽžÙ\ØÜš\ÜŽžÙ[˜[YNš‹œÝš[™ÚYžRY[
ÊK\ØÜš\[ÛŽ•œ˜[™Ù__K™Y™\™[˜ÙN“Ëœ˜[™Ù_J_X]ØZ]Ëœ\œÚ\Ý

__NÜYJ
NÑ

NÕ

NÝ˜\ˆOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë\]OZK›ÛÛX[Š‹]KK]\]H‹LKÙ\ØÜš\[ÛŽˆ”™X\HØØ[]Ú\È][™XYH\HÈ\ÈXÚØYÙ\ÈŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\ËœXÚØYÙOZK”Ýš[™Ê
_\Ý]XÞÝ\Ëœ]ÏVÖÈœ]Ú—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆœ™\\™HHXÚØYÙH›Üˆ]Ú[™È‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[Ø]\ÙHHXÚØYÙHÈ™H^˜XÝY[ˆH[\Ü˜\žH\™XÝÜžH[[™YÈ™HY]X›H]Ú[——ˆÛ˜ÙH[ÝIÜ™HÛ™HÚ][Ý\ˆÚ[™Ù\Ë[ˆX\›ˆ]ÚXÛÛ[Z]\È]
Ú]]™Z[™ÈH[\Ü˜\žH\™XÝÜžH[ÝH™XÙZ]™Y
HÈÙ[™\˜]HH]Úš[H[™™YÚ\Ý\ˆ][È[Ý\ˆÜ[]™[X[šY™\ÝšXHH]Ú˜›ÝØÛÛˆ[ˆX\›ˆ]ÚXÛÛ[Z]Z›Üˆ[Ü™H]Z[Ë——ˆØ[[™ÈHÛÛ[X[™Ú[ˆ[ÝH[™XYH]™HH]ÚÛÛ‰Ý[\Ü]žHY˜][
[ˆÝ\ˆÛÜ™ËHY˜][™Z]š[Üˆ\ÈÈ™\Ù]^\Ý[™È]Ú\ÊKˆÝÙ]™\‹Y[™ÈH]KK]\]X›YÈÚ[[\Ü[žHÝ\œ™[]Ú—ˆŸJ_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KX]ØZ]œ‹™š[™
ŠNÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]ÏZ‹œ\œÙSØØ]ÜŠ\ËœXÚØYÙJNÚYŠËœ™Y™\™[˜ÙOOOH[šÛ›ÝÛˆŠ^Û]QÙK›X\[™š[\ŠË‹‹œËœÝÜ™YXÚØYÙ\Ë˜[Y\Ê
WKOœšY[\ÚOOXËšY[\ÚÑÙK›X\[™š[\‹œÚÚ\š‹š\Õš\X[ØØ]ÜŠ
OÑÙK›X\[™š[\‹œÚÚ\”YÊ
HOO]\Ë\]OÑÙK›X\[™š[\‹œÚÚ\œ
NÚYŠ‹›[™ÝOOL
]›ÝÈ™]ÈÝ
“›ÈXÚØYÙH›Ý[™[ˆH›Ú™XÝ›ÜˆHÚ]™[ˆØØ]ÜˆŠNÚYŠ‹›[™ÝŒJ]›ÝÈ™]ÈÝ
][\HØ[™Y]HXÚØYÙ\È›Ý[™È^XÚ]HÚÛÜÙHÛ™HÙˆ[H
\ÙHX\›ˆÚHXÚØYÙO—ÈÙ][Ü™H[™›Ü›X][Ûˆ\ÈÈÚÈ\[™ÈÛˆ[JN‚‰Ù‹›X\
O˜‹H	Ú‹œ™]SØØ]ÜŠ‹
_X
Kš›Ú[ŠˆŠ_X
NØÏY–Ì_ZYŠ\ËœÝÜ™YXÚØYÙ\Ëš\ÊË›ØØ]Ü’\Ú
J]›ÝÈ™]ÈÝ
“›ÈXÚØYÙH›Ý[™[ˆH›Ú™XÝ›ÜˆHÚ]™[ˆØØ]ÜˆŠNØ]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹œÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÛ]QS
ÊKX]ØZ]’ŠËØØXÚN›‹›Ú™XÝœßJNÙ‹œ™\ÜœÛÛŠÛØØ]ÜŽš‹œÝš[™ÚYžSØØ]ÜŠ
K]™™K™œ›ÛTÜX›T]

_JNÛ]O]\Ë\]OÈˆ[Û™ÈÚ]]ÈÝ\œ™[[ÙYšXØ][ÛœÈŽˆˆŽÙ‹œ™\Ü[™›ÊXÚØYÙH	Ú‹œ™]SØØ]ÜŠ‹
_HÛÝ^˜XÝYÚ]ÝXØÙ\ÜÉÑ_HX
K‹œ™\Ü[™›Ê[ÝHØ[ˆ›ÝÈY]H›ÛÝÚ[™È›Û\Žˆ	ÜKœ™]J‹™K™œ›ÛTÜX›T]

K›XYÙ[HŠ_X
K‹œ™\Ü[™›ÊÛ˜ÙH[ÝH\™HÛ™H[ˆ	ÜKœ™]J‹X\›ˆ]ÚXÛÛ[Z]\È	Ü›ØÙ\ÜËœ]›Ü›OOOHÚ[ŒÌˆÉÈ‰ÎˆˆŸIÙ™K™œ›ÛTÜX›T]

_IÜ›ØÙ\ÜËœ]›Ü›OOOHÚ[ŒÌˆÉÈ‰ÎˆˆŸX˜ÞX[ˆŠ_H[™X\›ˆÚ[ÝÜ™HH]Úš[H˜\ÙYÛˆ[Ý\ˆÚ[™Ù\Ë˜
_J__NÝ˜\ˆ	^ØÛÛ™šYÝ\˜][ÛŽžÙ[˜X›R[›[™R[šÜÎžÙ\ØÜš\[ÛŽˆ’YˆYKH[œÝ[ÈÚ[š[[›X]ÚY]Ú[šÜÈ‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL_K]Ú›Û\ŽžÙ\ØÜš\[ÛŽˆ‘›Û\ˆÚ\™HH]Úš[\È]\Ý™HÜš][ˆ‹\NˆP”ÓÓUWÔU‹Y˜][ˆ‹‹ËžX\›‹Ü]Ú\ÈŸ_KÛÛ[X[™Î–ÔŒKWK™]Ú\œÎ–Ü”K™\ÛÛ™\œÎ–Û”_KTÝIÝ˜\ˆR^ßNÖ]
R‹ÔœS[šÙ\ŽŠ
OOšTY˜][Š
OO›ÔÝJNÜYJ
NÑ

NÕ

NÝ˜\ˆTXÛ\ÜÞÙÙ]Ý\ÝÛQ]RÙ^J
^Ü™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÛ˜[YNˆ”œS[šÙ\ˆ‹™\œÚ[ÛŽŒßJ_\Ý\ÜÔXÚØYÙJŠ^Ü™]\›ˆ\Ëš\Ñ[˜X›Y
Š_X\Þ[˜Èš[™XÚØYÙSØØ][ÛŠŠ^ÚYŠ]\Ëš\Ñ[˜X›Y
ŠJ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHœH[šÙ\ˆÈ™H[˜X›YŠNÛ]Ï]\Ë™Ù]Ý\ÝÛQ]RÙ^J
KO\‹œ›Ú™XÝ›[šÙ\œÐÝ\ÝÛQ]K™Ù]
ÊNÚYŠXJ]›ÝÈ™]ÈÝ
H›Ú™XÝ[ˆ	ÜKœ™]J‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹	Ü‹œ›Ú™XÝ˜ÝÙKÜXÚØYÙKšœÛÛ˜K•\K”U
_HÙ\Û‰ÝÙY[HÈ]™H™Y[ˆ[œÝ[YH[›š[™È[ˆ[œÝ[\™HZYÚ[
NÛ]XKœ]ÐžSØØ]Ü‹™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆˆHŠ]›ÝÈ™]ÈÝ
ÛÝ[‰Ýš[™	Ú‹œ™]SØØ]ÜŠ‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹
_H[ˆHÝ\œ™[H[œÝ[YœHX\H[›š[™È[ˆ[œÝ[ZYÚ[
NÜ™]\›ˆ‹œXÚØYÙSØØ][ÛŸX\Þ[˜Èš[™XÚØYÙSØØ]ÜŠŠ^ÚYŠ]\Ëš\Ñ[˜X›Y
ŠJ\™]\›ˆ[Û]Ï]\Ë™Ù]Ý\ÝÛQ]RÙ^J
KO\‹œ›Ú™XÝ›[šÙ\œÐÝ\ÝÛQ]K™Ù]
ÊNÚYŠXJ]›ÝÈ™]ÈÝ
H›Ú™XÝ[ˆ	ÜKœ™]J‹œ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹	Ü‹œ›Ú™XÝ˜ÝÙKÜXÚØYÙKšœÛÛ˜K•\K”U
_HÙ\Û‰ÝÙY[HÈ]™H™Y[ˆ[œÝ[YH[›š[™È[ˆ[œÝ[\™HZYÚ[
NÛ]]›X]Ú
Ê‹Š—Û›ÙWÛ[Ù[\×Ê×‹×J—ÊOÖ×‹×JÊJËŠ‰
KÊNÚYŠŠ^Û]XK›ØØ]ÜžT]™Ù]
–ÌWJNÚYŠ
\™]\›ˆ[]Ï]]ÙÞÙXËÏRË™\›˜[YJŠNÛ]XK›ØØ]ÜžT]™Ù]
ŠNÚYŠ
\™]\›ˆ]Ú[JÈOOYŠNÜ™]\›ˆ[[XZÙR[œÝ[\Š
^Ü™]\›ˆ™]ÈÒŠ
_Z\Ñ[˜X›Y

^Ü™]\›ˆœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠOOOHœœHŸ_KÒXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë›ÜÏ]Ý\Ë˜\Þ[˜ÐXÝ[ÛœÏ[™]ÈÙK\Þ[˜ÐXÝ[ÛœÊL
NÝ\Ë˜Ý\ÝÛQ]O^Ü]ÐžSØØ]ÜŽ›™]ÈX\ØØ]ÜžT]›™]ÈX\NÝ\Ëš[™^›Û\”›ÛZ\ÙOI
KÚ[™^]’Ëš›Ú[Šœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
™ÛØ˜[›Û\ˆŠKš[™^Š_J_X]XÚÝ\ÝÛQ]J
^ßX\Þ[˜È[œÝ[XÚØYÙJ‹Ê^ÜÝÚ]Ú
›[šÕ\J^ØØ\ÙH”ÓÑ•Žœ™]\›ˆ\Ëš[œÝ[XÚØYÙTÛÙ
‹ÊNØØ\ÙH’T‘Žœ™]\›ˆ\Ëš[œÝ[XÚØYÙR\™
‹Ê_]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[œÝ\ÜYXÚØYÙH[šÈ\HŠ_X\Þ[˜È[œÝ[XÚØYÙTÛÙ
‹Ê^Û]ORËœ™\ÛÛ™J‹œXÚØYÙQœË™Ù]™X[]

K‹œ™Yš^]
K]\Ë›ÜËœ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠ
OÒËš›Ú[ŠK\‹››ÙS[Ù[\ÊN›[Ü™]\›ˆ\Ë˜Ý\ÝÛQ]Kœ]ÐžSØØ]Ü‹œÙ]
›ØØ]Ü’\ÚÜXÚØYÙSØØ][ÛŽ˜K\[™[˜ÚY\ÓØØ][ÛŽ›ŸJKÜXÚØYÙSØØ][ÛŽ˜KZ[™\]Y\Ý›[_X\Þ[˜È[œÝ[XÚØYÙR\™
‹Ê^Û]O\”Ý
Ü›Ú™XÝ\Ë›ÜËœ›Ú™XÝJKXKœXÚØYÙSØØ][ÛŽÝ\Ë˜Ý\ÝÛQ]K›ØØ]ÜžT]œÙ]
‹‹œÝš[™ÚYžSØØ]ÜŠ
JK\Ë˜Ý\ÝÛQ]Kœ]ÐžSØØ]Ü‹œÙ]
›ØØ]Ü’\ÚJKËšÛ™]Ú™\Ý[
\Ë˜\Þ[˜ÐXÝ[ÛœËœÙ]
›ØØ]Ü’\Ú\Þ[˜Ê
OOžØ]ØZ]K›ZÙ\”›ÛZ\ÙJ‹Ü™XÝ\œÚ]™NˆLJK]ØZ]K˜ÛÜT›ÛZ\ÙJ‹‹œ™Yš^]Ø˜\ÙQœÎœ‹œXÚØYÙQœËÝ™\Üš]NˆLK[šÔÝ˜]YÞNžÝ\Nˆ’\™[šÑœ›ÛR[™^‹[™^]˜]ØZ]\Ëš[™^›Û\”›ÛZ\ÙK]]Ô™\Z\ŽˆL_J_JJNÛ]Z‹š\Õš\X[ØØ]ÜŠ
OÚ‹™]š\X[^™SØØ]ÜŠ
N^ÛX[šY™\Ý˜]ØZ]]žQš[™
‹œ™Yš^]Ø˜\ÙQœÎœ‹œXÚØYÙQœßJOÏÛ™]È]Z\ØÎžÚ\Ðš[™[™ÑÞ\™Kš\Ðš[™[™ÑÞ\
Š__K]\Ë›ÜËœ›Ú™XÝ™Ù]\[™[˜ÞSY]J‹™\œÚ[ÛŠKOYK™^˜XÝZ[™\]Y\Ý
ØÛÛ™šYÝ\˜][ÛŽ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][ÛŸJNÜ™]\›žÜXÚØYÙSØØ][ÛŽ›‹Z[™\]Y\Ý‘__X\Þ[˜È]XÚ[\›˜[\[™[˜ÚY\ÊŠ^ÚYŠ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOHœœHŸ\X™JÜ›Ú™XÝ\Ë›ÜËœ›Ú™XÝJJ\™]\›ŽÛ]Ï]\Ë˜Ý\ÝÛQ]Kœ]ÐžSØØ]Ü‹™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆÏˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™Y
	Ú‹œÝš[™ÚYžSØØ]ÜŠ
_JX
NÛ]Ù\[™[˜ÚY\ÓØØ][ÛŽ˜_O\ÎØI‰\Ë˜\Þ[˜ÐXÝ[ÛœËœ™YXÙJ›ØØ]Ü’\Ú\Þ[˜ÈOžØ]ØZ]K›ZÙ\”›ÛZ\ÙJKÜ™XÝ\œÚ]™NˆLJNÛ]ÏX]ØZ]”Ý
JK[™]ÈX\
ÊKVÛ—KJËÊOOžÛ]TÎÜX™JËÜ›Ú™XÝ\Ë›ÜËœ›Ú™XÝJ_
\Ë›ÜËœ™\Üœ™\ÜØ\›š[™ÓÛ˜ÙJ•HœH[šÙ\ˆÙ\Û‰ÝÝ\Ü›ÝšY[™ÈY™™\™[™\œÚ[ÛœÈÈÛÜšÜÜXÙ\ÉÈY\ˆ\[™[˜ÚY\ÈŠKZ‹™]š\X[^™SØØ]ÜŠÊJNÛ]O]\Ë˜Ý\ÝÛQ]Kœ]ÐžSØØ]Ü‹™Ù]
›ØØ]Ü’\Ú
NÚYŠ\[ÙˆOˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHXÚØYÙHÈ]™H™Y[ˆ™YÚ\Ý\™Y
	Ú‹œÝš[™ÚYžSØØ]ÜŠÊ_JX
NÛ]Z‹œÝš[™ÚYžRY[
ÊKÏRËš›Ú[ŠK
KORËœ™[]]™JË™\›˜[YJÊKKœXÚØYÙSØØ][ÛŠKOY‹™Ù]

NÙ‹™[]J
Kœ\Ú
›ÛZ\ÙKœ™\ÛÛ™J
K[Š\Þ[˜Ê
OOžÚYŠJ^ÚYŠKš\ÔÞ[X›ÛXÓ[šÊ
I‰˜]ØZ]Kœ™XY[šÔ›ÛZ\ÙJÊOOOUJ\™]\›ŽØ]ØZ]Kœ™[[Ý™T›ÛZ\ÙJÊ_X]ØZ]K›ZÙ\œ›ÛZ\ÙJË™\›˜[YJÊJK›ØÙ\ÜËœ]›Ü›OOHÚ[ŒÌˆ‰‰\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
Ú[“[šÕ\HŠOOOHš[˜Ý[ÛœÈØ]ØZ]KœÞ[[[šÔ›ÛZ\ÙJKœXÚØYÙSØØ][Û‹Ëš[˜Ý[ÛˆŠN˜]ØZ]KœÞ[[[šÔ›ÛZ\ÙJKÊ_JJ_KOHLNÙ›ÜŠ]ÐË×[ÙˆŠPËšY[\ÚOO]šY[\Ú	‰ŠOHL
K
ËÊNÈQI‰ˆ]\Ë›ÜËœ›Ú™XÝžUÛÜšÜÜXÙPžSØØ]ÜŠ
I‰š
‹˜ÛÛ™\ØØ]Ü•Ñ\ØÜš\ÜŠ
K
Kœ\Ú
TÝ
KŠJK]ØZ]›ÛZ\ÙK˜[

_J_X\Þ[˜È]XÚ^\›˜[\[™[ÊŠ^Ý›ÝÈ™]È\œ›ÜŠ‘^\›˜[\[™[˜ÚY\È]™[‰Ý™Y[ˆ[\[Y[Y›ÜˆHœH[šÙ\ˆŠ_X\Þ[˜Èš[˜[^™R[œÝ[

^Û]UØ™J\Ë›ÜËœ›Ú™XÝ
NÚYŠ\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOHœœHŠX]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ
NÙ[Ù^Û]ŽÝž^Ü[™]ÈÙ]
]ØZ]Kœ™XY\”›ÛZ\ÙJ
J_XØ]ÚÜ[™]ÈÙ]Y›ÜŠ]Ù\[™[˜ÚY\ÓØØ][ÛŽœß[Ùˆ\Ë˜Ý\ÝÛQ]Kœ]ÐžSØØ]Ü‹˜[Y\Ê
J^ÚYŠ\ÊXÛÛ[YNÛ]ORË˜ÛÛZ[œÊÊNÚYŠOOO[[
XÛÛ[YNÛ]Û—OXKœÜ]
ËœÙ\
NÜ‹™[]JŠ_X]ØZ]›ÛZ\ÙK˜[
Ë‹‹œ—K›X\
\Þ[˜ÈÏOžØ]ØZ]Kœ™[[Ý™T›ÛZ\ÙJËš›Ú[ŠÊJ_JJ_\™]\›ˆ]ØZ]\Ë˜\Þ[˜ÐXÝ[ÛœËØZ]

K]ØZ]Š
K\Ë›ÜËœ›Ú™XÝ˜ÛÛ™šYÝ\˜][Û‹™Ù]
››ÙS[šÙ\ˆŠHOOH››ÙK[[Ù[\È‰‰˜]ØZ]ŠÝ
\Ë›ÜËœ›Ú™XÝ
JKØÝ\ÝÛQ]N\Ë˜Ý\ÝÛQ]___NÙ[˜Ý[ÛˆÝ
J^Ü™]\›ˆËš›Ú[ŠK˜ÝÙ\‹››ÙS[Ù[\Ê_Y[˜Ý[ÛˆØ™JJ^Ü™]\›ˆK˜ÛÛ™šYÝ\˜][Û‹™Ù]
œœTÝÜ™Q›Û\ˆŠ_Y[˜Ý[Ûˆ”Ý
KÜ›Ú™XÝJ^Û]Z‹œÛYÚYžSØØ]ÜŠJKÏUØ™J
KORËš›Ú[ŠË‹œXÚØYÙHŠKRËš›Ú[ŠË‹\‹››ÙS[Ù[\ÊNÜ™]\›žÜXÚØYÙSØØ][ÛŽ˜K\[™[˜ÚY\ÓØØ][ÛŽ›Ÿ_Y[˜Ý[ÛˆX™JKÜ›Ú™XÝJ^Ü™]\›ˆZ‹š\Õš\X[ØØ]ÜŠJ_]žUÛÜšÜÜXÙPžSØØ]ÜŠJ_X\Þ[˜È[˜Ý[Ûˆ”Ý
J^Û][™]ÈX\V×NÝž^ÜX]ØZ]Kœ™XY\”›ÛZ\ÙJKÝÚ]š[U\\ÎˆLJ_XØ]Ú
Ê^ÚYŠË˜ÛÙHOOH‘S“ÑS•Š]›ÝÈß]ž^Ù›ÜŠ]ÈÙˆŠZYŠ\Ë›˜[YKœÝ\ÕÚ]
‹ˆŠJZYŠË›˜[YKœÝ\ÕÚ]
ŠJ^Û]OX]ØZ]Kœ™XY\”›ÛZ\ÙJËš›Ú[ŠKË›˜[YJKÝÚ]š[U\\ÎˆLJNÚYŠK›[™ÝOOL
]œÙ]
Ë›˜[YKÊNÙ[ÙH›ÜŠ]ˆÙˆJ]œÙ]
	ÜË›˜[Y_KÉÛ‹›˜[Y_XŠ_Y[ÙHœÙ]
Ë›˜[YKÊ_XØ]Ú
Ê^ÚYŠË˜ÛÙHOOH‘S“ÑS•Š]›ÝÈß\™]\›ˆX\Þ[˜È[˜Ý[ÛˆTÝ
K
^Û]V×KÏ[™]ÈÙ]Ù›ÜŠ]HÙˆšÙ^\Ê
J^Ü‹œ\Ú
Kœ™[[Ý™T›ÛZ\ÙJËš›Ú[ŠKJJJNÛ]Z‹žT\œÙRY[
JOËœØÛÜNÛ‰‰œË˜Y
	ÛŸX
_\™]\›ˆ›ÛZ\ÙK˜[
ŠK[Š

OO”›ÛZ\ÙK˜[
Ë‹‹œ×K›X\
OO™ŠËš›Ú[ŠKJJJJJ_X\Þ[˜È[˜Ý[ÛˆŠJ^Ýž^Ø]ØZ]Kœ›Y\”›ÛZ\ÙJJ_XØ]Ú

^ÚYŠ˜ÛÙHOOH‘S“ÑS•‰‰˜ÛÙHOOH‘S“ÕSTH‰‰˜ÛÙHOOH‘P•TÖHŠ]›ÝÈ_]˜\ˆÔÝ^ØÛÛ™šYÝ\˜][ÛŽžÜœTÝÜ™Q›Û\ŽžÙ\ØÜš\[ÛŽˆžHY˜][HÝÜ™H\ÈÝÜ™Y[ˆH	Û›ÙWÛ[Ù[\ËËœÝÜ™IÈÙˆH›Ú™XÝˆÛÛY][Y\È[ˆÒHØÙ[˜\š[ÉÜÈ]\ÈÛÛ™[šY[ÈÝÜ™H\È[ˆHY™™\™[ØØ][ÛˆÛÈ]Ø[ˆ™HØXÚY[™™]\ÙYˆ‹\NˆP”ÓÓUWÔU‹Y˜][ˆ‹‹Û›ÙWÛ[Ù[\ËËœÝÜ™HŸ_K[šÙ\œÎ–ÚT_KÔÝ\ÔÝÝ˜\ˆ’^ßNÖ]
’‹ÔÝYÙPÛÛ[X[™Š
OO‘ŒKY˜][Š
OO›TÝÝYÙU][ÎŠ
OOÓJNÜYJ
NÑ

NÕ

NÜYJ
NÑ

NÝ˜\ˆÓ^ßNÖ]
ÓÐXÝ[Û•\NŠ
OOžR‹ÚXÚÐÛÛœÙ[œÝ\ÎŠ
OOÓ^[™\™XÝÜžNŠ
OOÒ‹š[™ÛÛœÙ[œÝ\ÎŠ
OOÒ‹š[™˜ÜÔ›ÛÝŠ
OO‘R‹Ù[ÛÛ[Z]Y\ÜØYÙNŠ
OO’‹Ù]ÛÛ[Z]™Yš^Š
OO•˜™K\ÖX\›‘š[NŠ
OO’RŸJNÑ

NÝ˜\ˆRJOŠ–Û‹Ô‘PUOLOHÔ‘PUH‹–Û‹‘SUOLWOH‘SUH‹–Û‹QL—OHQ‹–Û‹”‘SSÕ‘OL×OH”‘SSÕ‘H‹–Û‹“SÑQ–OMOH“SÑQ–H‹ŠJJRŸßJNØ\Þ[˜È[˜Ý[ÛˆRŠKÛX\šÙ\ŽJ^ÙÈYŠ[K™^\ÝÔÞ[˜ÊËš›Ú[ŠK
JJYORË™\›˜[YJJNÙ[ÙH™]\›ˆNÝÚ[JHOOH‹ÈŠNÜ™]\›ˆ[Y[˜Ý[ÛˆRŠKÜ›ÛÝÎ˜[Y\ÎœŸJ^ÚYŠ‹š\ÊË˜˜\Ù[˜[YJJJJ\™]\›ˆLÙÈYŠ]š\ÊJJYORË™\›˜[YJJNÙ[ÙH™]\›ˆLÝÚ[JHOOH‹ÈŠNÜ™]\›ˆL_Y[˜Ý[ÛˆÒŠJ^Û]V×KVÙWNÙ›ÜŠÜ‹›[™ÝŒÊ^Û]Ï\‹œÜ

KO[Kœ™XY\”Þ[˜ÊÊNÙ›ÜŠ]ˆÙˆJ^Û]ÏRËœ™\ÛÛ™JËŠNÛK›Ý]Þ[˜ÊÊKš\Ñ\™XÝÜžJ
OÜ‹œ\Ú
ÊNœ\Ú
Ê__\™]\›ˆY[˜Ý[ÛˆÓ
K
^Û]LÏLÙ›ÜŠ]HÙˆJXHOOHÚ\‰‰Š\Ý
JOÜŠÏLNœÊÏLJNÜ™]\›ˆ\ßY[˜Ý[ÛˆÒŠJ^Û]PÓ
K×Š×
Ê×
N—ÊŠO×ÊÜËÊKPÓ
K×Š×
Ê×
N—ÊŠOÖÐKV—KÊKÏPÓ
K×—×
Ê×
N‹ÊNÜ™]\›žÝ\ÙU\™\œÛÛŽ\ÙU\\Ø\ÙNœ‹\ÙPÛÛ\Û™[œß_Y[˜Ý[Ûˆ˜™JJ^Ü™]\›ˆK\ÙPÛÛ\Û™[È˜ÚÜ™JX\›ŠNˆŽˆˆŸ]˜\ˆTÝ[™]ÈX\
ÖÌ˜Ü™X]H—KÌK™[]H—KÌ‹˜Y—KÌËœ™[[Ý™H—KÍ\]H—WJNÙ[˜Ý[Ûˆ’ŠK
^Û]U˜™JJKÏV×KO]œÛXÙJ
KœÛÜ

‹ÊOO›–ÌKXÖÌJNÙ›ÜŠØK›[™ÝŒÊ^Û]Û‹×OXKœÚY

KXTÝ™Ù]
ŠNÙK\ÙU\\Ø\ÙI‰œË›[™ÝOOL	‰ŠX	Ù–ÌKÕ\\Ø\ÙJ
_IÙ‹œÛXÙJJ_X
KK\ÙU\™\œÛÛ‰‰ŠŠÏHœÈŠNÛ]VØ×NÙ›ÜŠØK›[™ÝŒ	‰˜VÌVÌOOO[ŽÊ^Û]ËWOXKœÚY

NÜœ\Ú
J_\œÛÜ

NÛ]\œÚY

NÜ›[™ÝOOLOÚ
ÏHˆ
[™Û™HÝ\ŠHŽœ›[™ÝŒI‰Š
ÏX
[™	Ü›[™ÝHÝ\œÊX
KËœ\Ú
	ÙŸH	ÚX
_\™]\›˜	ÜŸIÜËš›Ú[Š‹Š_X]˜\ˆÝHÛÛ[Z]Ù[™\˜]YšXHX\›ˆÝYÙX‹ÔÝLLNØ\Þ[˜È[˜Ý[ÛˆX™JJ^Û]ØÛÙNÝÝ]œŸOX]ØZ]\‹™^XÝœ
™Ú]‹È›ÙÈ‹‹LH‹‹K\™]OY›Ü›X]‰R—KØÝÙ™_JNÜ™]\›ˆOOLÜ‹š[J
N›[X\Þ[˜È[˜Ý[ÛˆTÝ
K
^Û]V×KÏ]™š[\ŠO’Ë˜˜\Ù[˜[YJœ]
OOOHœXÚØYÙKšœÛÛˆŠNÙ›ÜŠ]ØXÝ[ÛŽš]‘_[ÙˆÊ^Û]ÏRËœ™[]]™JKJNÚYŠOOM
^Û]ÏX]ØZ]X™JJKÜÝÝ]žOX]ØZ]\‹™^XÝœ
™Ú]‹ÈœÚÝÈ‹	ÔßN‰ÐßXKØÝÙ™KÝšXÝˆLJKOX]ØZ]]™œ›ÛU^

KX]ØZ]]™œ›ÛQš[JJKÏ[™]ÈX\
Ë‹‹•™\[™[˜ÚY\Ë‹‹•™]‘\[™[˜ÚY\×JKO[™]ÈX\
Ë‹‹’K™\[™[˜ÚY\Ë‹‹’K™]‘\[™[˜ÚY\×JNÙ›ÜŠ]ÖKW[ÙˆJ^Û]YOZ‹œÝš[™ÚYžRY[
JKYOSË™Ù]
JNÝYOÝYKœ˜[™ÙHOO]Kœ˜[™ÙI‰œ‹œ\Ú
Í	ÚY_HÈ	ÝYKœ˜[™Ù_XJNœ‹œ\Ú
ÌËYWJ_Y›ÜŠ]ÖKW[ÙˆÊUKš\ÊJ_‹œ\Ú
Ì‹‹œÝš[™ÚYžRY[
JWJ_Y[ÙHYŠOOL
^Û]ÏX]ØZ]]™œ›ÛQš[JJNÔË›˜[YOÜ‹œ\Ú
Ì‹œÝš[™ÚYžRY[
Ë›˜[YJWJNœ‹œ\Ú
Ì˜HXÚØYÙH—J_Y[ÙHYŠOOLJ^Û]ÏX]ØZ]X™JJKÜÝÝ]žOX]ØZ]\‹™^XÝœ
™Ú]‹ÈœÚÝÈ‹	ÔßN‰ÐßXKØÝÙ™KÝšXÝˆLJKOX]ØZ]]™œ›ÛU^

NÒK›˜[YOÜ‹œ\Ú
ÌK‹œÝš[™ÚYžRY[
K›˜[YJWJNœ‹œ\Ú
ÌK˜HXÚØYÙH—J_Y[ÙH›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ[œÝ\ÜYXÝ[Ûˆ\HŠ_[]ØÛÙN˜KÝÝ]›ŸOX]ØZ]\‹™^XÝœ
™Ú]‹È›ÙÈ‹IØÔÝX‹K\™]OY›Ü›X]‰\È—KØÝÙ™_JKÏXOOOLÛ‹œÜ]
×‹ÙÊK™š[\ŠOšOOHˆŠN–×K]ÒŠÊNÜ™]\›ˆ’Š‹Š_]˜\ˆ”Ý^Ì–ÈˆH‹ÏÈ—K–ÈˆH—KN–Èˆ—_KTÝ^Ì–ÈH—K–È“H—KN–È‘—_KØ™O^Ø\Þ[˜Èš[™›ÛÝ
J^Ü™]\›ˆ]ØZ]RŠKÛX\šÙ\Žˆ‹™Ú]ŸJ_K\Þ[˜Èš[\Ú[™Ù\ÊK‹Ê^Û]ÜÝÝ]˜_OX]ØZ]\‹™^XÝœ
™Ú]‹ÈœÝ]\È‹‹\È—KØÝÙ™KÝšXÝˆLJKXKÔÝš[™Ê
KœÜ]
×‹ÙÊKÏ\ÏËœÝYÙYÐTÝ™”ÝÜ™]\›–×K˜ÛÛ˜Ø]
‹‹›‹›X\
OžÚYŠOOHˆŠ\™]\›–×NÛ]\œÛXÙJÊKORËœ™\ÛÛ™JKœÛXÙJÊJNÚYŠ\ÏËœÝYÙY	‰šOOHÏÈ‰‰œ™[™ÕÚ]
‹ÈŠJ\™]\›ˆÒŠJK›X\
ÏOŠØXÝ[ÛŽŒ]ßJJNÞÛ]ÏVÌWK™š[™
O˜ÖÞKš[˜ÛY\Ê
JNÜ™]\›ˆÈOO]›ÚYÖÞØXÝ[ÛŽ”Ë]‘_WN–×__JJK™š[\ŠO’RŠœ]Ü›ÛÝÎ˜[Y\ÎœŸJJ_K\Þ[˜ÈÙ[ÛÛ[Z]Y\ÜØYÙJK
^Ü™]\›ˆ]ØZ]TÝ
K
_K\Þ[˜ÈXZÙTÝYÙJK
^Û]]›X\
ÏO™™K™œ›ÛTÜX›T]
Ëœ]
JNØ]ØZ]\‹™^XÝœ
™Ú]‹È˜Y‹‹KH‹‹‹œ—KØÝÙ™KÝšXÝˆLJ_K\Þ[˜ÈXZÙPÛÛ[Z]
KŠ^Û]Ï]›X\
OO™™K™œ›ÛTÜX›T]
Kœ]
JNØ]ØZ]\‹™^XÝœ
™Ú]‹È˜Y‹‹Sˆ‹‹KH‹‹‹œ×KØÝÙ™KÝšXÝˆLJK]ØZ]\‹™^XÝœ
™Ú]‹È˜ÛÛ[Z]‹‹[H‹	ÜŸB‚‰ÛÝB˜‹KH‹‹‹œ×KØÝÙ™KÝšXÝˆLJ_K\Þ[˜ÈXZÙT™\Ù]
K
^Û]]›X\
ÏO™™K™œ›ÛTÜX›T]
Ëœ]
JNØ]ØZ]\‹™^XÝœ
™Ú]‹Èœ™\Ù]‹’PQ‹‹KH‹‹‹œ—KØÝÙ™KÝšXÝˆLJ__NÝ˜\ˆÝVÒØ™WKŒOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë˜ÛÛ[Z]ZK›ÛÛX[Š‹XËKXÛÛ[Z]‹LKÙ\ØÜš\[ÛŽˆÛÛ[Z]HÝYÙYš[\ÈŸJNÝ\Ëœ™\Ù]ZK›ÛÛX[Š‹\‹K\™\Ù]‹LKÙ\ØÜš\[ÛŽˆ”™[[Ý™H[š[\Èœ›ÛHHÝYÚ[™È\™XHŸJNÝ\Ë™žT[ZK›ÛÛX[Š‹[‹KYžK\[ˆ‹LKÙ\ØÜš\[ÛŽˆ”š[HÛÛ[Z]Y\ÜØYÙH[™H\ÝÙˆ[ÙYšYYš[\ÈÚ]Ý]ÝYÚ[™ÈÈÛÛ[Z][™ÈŸJNÝ\Ë\]OZK›ÛÛX[Š‹]KK]\]H‹LKÚY[ŽˆLJ_\Ý]XÞÝ\Ëœ]ÏVÖÈœÝYÙH—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJÙ\ØÜš\[ÛŽˆ˜Y[X\›ˆš[\ÈÈ[Ý\ˆ˜ÜÈ‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[YÈ[Ý\ˆÝYÚ[™È\™XHHš[\È™[Û™Ú[™ÈÈX\›ˆ
\XØ[H[žH[ÙYšYYXÚØYÙKšœÛÛ˜[™žX\›œ˜Ëž[[š[\Ë][ÛÈ[šÙ\‹YÙ[™\˜]Yš[\ËØXÚH]K]ÊKˆ]Ú[ZÙH[Ý\ˆYÛ›Ü™H\Ý[ÈXØÛÝ[ÛÈHØXÚHš[\ÈÛÛ‰Ý™HYYYˆHØXÚH\ÈYÛ›Ü™Y[ˆH™Ú]YÛ›Ü™Xš[H
\ÜÝ[Z[™È[ÝH\ÙHÚ]
K——ˆ[›š[™ÈK\™\Ù]Ú[[œÝXY™[[Ý™H[Hœ›ÛHHÝYÚ[™È\™XH
HÚ[™Ù\ÈÚ[Ý[™H\™K]ÛÛ‰Ý™HÛÛ[Z]Y[[[ÝHÝYÙH[H˜XÚÊK——ˆÚ[˜ÙHHÝYÚ[™È\™XH\ÈH›Û‹Y^\Ý[ÛÛ˜Ù\[ˆY\˜Ý\šX[X\›ˆÚ[[Ø^\ÈÜ™X]HH™]ÈÛÛ[Z]Ú[ˆ[›š[™È\ÈÛÛ[X[™ÛˆY\˜Ý\šX[™\ÜÚ]ÜšY\Ëˆ[ÝHØ[ˆÙ]\È™Z]š[ÜˆÚ[ˆ\Ú[™ÈÚ]žH\Ú[™ÈHKXÛÛ[Z]›YÈÚXÚÚ[\™XÝHÜ™X]HHÛÛ[Z]—ˆ‹^[\\Î–ÖÈYÈ[[ÙYšYY›Ú™XÝš[\ÈÈHÝYÚ[™È\™XH‹žX\›ˆÝYÙH—KÈÜ™X]\ÈH™]ÈÛÛ[Z]ÛÛZ[š[™È[[ÙYšYY›Ú™XÝš[\È‹žX\›ˆÝYÙHKXÛÛ[Z]—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœßOX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KÙš]™\Ž˜K›ÛÝ›ŸOX]ØZ]Ý
Ë˜ÝÙ
KÏVÜ‹™Ù]
˜ØXÚQ›Û\ˆŠK‹™Ù]
™ÛØ˜[›Û\ˆŠK‹™Ù]
š\X[›Û\ˆŠK‹™Ù]
žX\›”]ŠWNØ]ØZ]‹šYÙÙ\’ÛÚÊÏOËœÜ[]VX\›”]ËËÏOžØËœ\Ú
Ê_JNÛ][™]ÈÙ]Ù›ÜŠ]ÈÙˆÊY›ÜŠ]ÈÙˆÔÝ
‹ÊJY‹˜Y
ÊNÛ][™]ÈÙ]
Ü‹™Ù]
œ˜Ñš[[˜[YHŠK\‹›ØÚÙš[K\‹›X[šY™\ÝJKX]ØZ]K™š[\Ú[™Ù\Ê‹‹
KOX]ØZ]K™Ù[ÛÛ[Z]Y\ÜØYÙJ‹
NÚYŠ\Ë™žT[ŠZYŠ\Ë˜ÛÛ[Z]
]\Ë˜ÛÛ^œÝÝ]Üš]J	Ñ_B˜
NÙ[ÙH›ÜŠ]ÈÙˆ
]\Ë˜ÛÛ^œÝÝ]Üš]J	Ù™K™œ›ÛTÜX›T]
Ëœ]
_B˜
NÙ[ÙHYŠ\Ëœ™\Ù]
^Û]ÏX]ØZ]K™š[\Ú[™Ù\Ê‹‹ÜÝYÙYˆLJNÐË›[™ÝOOLÝ\Ë˜ÛÛ^œÝÝ]Üš]J“›ÈÝYÙYÚ[™Ù\È›Ý[™HŠN˜]ØZ]K›XZÙT™\Ù]
‹Ê_Y[ÙH›[™ÝOOLÝ\Ë˜ÛÛ^œÝÝ]Üš]J“›ÈÚ[™Ù\È›Ý[™HŠN\Ë˜ÛÛ[Z]Ø]ØZ]K›XZÙPÛÛ[Z]
‹JNŠ]ØZ]K›XZÙTÝYÙJ‹
K\Ë˜ÛÛ^œÝÝ]Üš]JJJ__NØ\Þ[˜È[˜Ý[ÛˆÝ
J^Û][[[[Ù›ÜŠ]ÈÙˆÝ
ZYŠ
X]ØZ]Ë™š[™›ÛÝ
JJHOO[[
^Ý\ÎØœ™XZßZYŠOO[[OO[[
]›ÝÈ™]ÈÝ
“›ÈÝYÙHš]™\ˆ\È™Y[ˆ›Ý[™›Üˆ[Ý\ˆÝ\œ™[›Ú™XÝŠNÜ™]\›žÙš]™\Ž›ÛÝœŸ_Y[˜Ý[ÛˆÔÝ
K
^Û]V×NÚYŠOO[[
\™]\›ˆŽÙ›ÜŠÎÊ^ÊOOY_œÝ\ÕÚ]
	Ù_KØ
JI‰œ‹œ\Ú

NÛ]ÎÝž^ÜÏ[KœÝ]Þ[˜Ê
_XØ]ÚØœ™XZßZYŠËš\ÔÞ[X›ÛXÓ[šÊ
J]RËœ™\ÛÛ™JË™\›˜[YJ
KKœ™XY[šÔÞ[˜Ê
JNÙ[ÙHœ™XZß\™]\›ˆŸ]˜\ˆÝ^ØÛÛ[X[™Î–ÑŒW_KTÝYÝÝ˜\ˆÒ^ßNÖ]
Ò‹ÙY˜][Š
OO”ÔÝJNÜYJ
NÜYJ
NÑ

NÝ˜\ˆ˜™OY]
J
JNÜYJ
NÝ˜\ˆ˜™OY]
œJ
JKTÝH™NLX™ÌŒL˜ŽÍNLÙ™˜LYX‹TÝH“ÑÓÓÑÌÕH‹˜™OX\Þ[˜ÊK
OOžÛ]Z‹œÝš[™ÚYžRY[
JKORTÝ

Kš[š][™^
›œK\ÙX\˜ÚŠNÝž^Ü™]\›Š]ØZ]K™Ù]Øš™XÝ
‹Ø]šX]\ÕÔ™]šY]™N–È\\È—_JJK\\ÏËÏOOH™Yš[š][K]\YŸXØ]ÚÜ™]\›ˆL__KTÝYOOŠ˜™K™Y˜][
JTÝTÝÜ™\]Y\Ý\ŽžØ\Þ[˜ÈÙ[™
Š^Ýž^Û]ÏX]ØZ]›‹œ™\]Y\Ý
‹\›‹™]_[ØÛÛ™šYÝ\˜][ÛŽ™KXY\œÎœ‹šXY\œßJNÜ™]\›žØÛÛ[œË˜›ÙK\Õ[YYÝ]ˆLKÝ]\ÎœËœÝ]\ÐÛÙ__XØ]Ú
Ê^Ü™]\›žØÛÛ[œËœ™\ÜÛœÙK˜›ÙK\Õ[YYÝ]ˆLKÝ]\ÎœËœ™\ÜÛœÙKœÝ]\ÐÛÙ_____JNÝ˜\ˆ™OYOO™KœØÛÜOØ	ÙKœØÛÜ_W×ÉÙK›˜[Y_X˜	ÙK›˜[Y_XÔÝX\Þ[˜ÊK‹ÊOOžÚYŠ‹œØÛÜOOOH\\ÈŠ\™]\›ŽÛ]Ü›Ú™XÝ˜_OYKØÛÛ™šYÝ\˜][ÛŽ›ŸOXNÚYŠJ‹™Ù]
Ñ[˜X›P]]Õ\\ÈŠOÏÊK™^\ÝÔÞ[˜ÊËš›Ú[ŠK˜ÝÙØÛÛ™šYËšœÛÛˆŠJ_K™^\ÝÔÞ[˜ÊËš›Ú[ŠK˜ÝÙØÛÛ™šYËšœÛÛˆŠJJJJ\™]\›ŽÛ][‹›XZÙT™\ÛÛ™\Š
K^Ü›Ú™XÝ˜K™\ÛÛ™\Ž™‹™\Ü›™]ÈÚ_NÚYŠX]ØZ]˜™J‹ŠJ\™]\›ŽÛ]OV™JŠKÏZ‹œ\œÙT˜[™ÙJ‹œ˜[™ÙJKœÙ[XÝÜŽÚYŠQœ‹˜[Y˜[™ÙJÊJ^Û]Ï[‹››Ü›X[^™Q\[™[˜ÞJŠKOX]ØZ]‹™Ù]Ø[™Y]\ÊËßK
NÐÏZ‹œ\œÙT˜[™ÙJVÌKœ™Y™\™[˜ÙJKœÙ[XÝÜŸ[]ÏV˜™K™Y˜][˜ÛÙ\˜ÙJÊNÚYŠÏOO[[
\™]\›ŽÛ]X	ÉK“[ÙYšY\‹ÐT‘UIÔË›XZ›ÜŸXOZ‹›XZÙQ\ØÜš\ÜŠ‹›XZÙRY[
\\È‹JK
KQÙK›X\[™š[™
KÛÜšÜÜXÙ\ËÏOžÛ]OSË›X[šY™\Ý™\[™[˜ÚY\Ë™Ù]
‹šY[\Ú
OË™\ØÜš\Ü’\ÚOSË›X[šY™\Ý™]‘\[™[˜ÚY\Ë™Ù]
‹šY[\Ú
OË™\ØÜš\Ü’\ÚÚYŠHOO\‹™\ØÜš\Ü’\Ú	‰–HOO\‹™\ØÜš\Ü’\Ú
\™]\›ˆÙK›X\[™š[™œÚÚ\Û]OV×NÙ›ÜŠ]YHÙˆ]˜[\[™[˜ÚY\Ê^Û]YOSË›X[šY™\ÝÚYWK™Ù]
KšY[\Ú
NÝ\[ÙˆYOˆHŸKœ\Ú
ÚYKYWJ_\™]\›ˆK›[™ÝOOLÑÙK›X\[™š[™œÚÚ\_JNÚYŠ\[ÙˆHŠY›ÜŠ]ÓËW[Ùˆ
YK›X[šY™\ÝÓ×KœÙ]
KšY[\ÚJNÙ[Ù^Ýž^Û]Ï[‹››Ü›X[^™Q\[™[˜ÞJJNÚYŠ
]ØZ]‹™Ù]Ø[™Y]\ÊËßK
JK›[™ÝOOL
\™]\›ŸXØ]ÚÜ™]\›ŸYK›X[šY™\ÝÉK•\™Ù]‘U‘SÔQS•KœÙ]
KšY[\ÚJ__KÔÝX\Þ[˜ÊKŠOOžÚYŠ‹œØÛÜOOOH\\ÈŠ\™]\›ŽÛ]Ü›Ú™XÝœßOYKØÛÛ™šYÝ\˜][ÛŽ˜_O\ÎÚYŠJK™Ù]
Ñ[˜X›P]]Õ\\ÈŠOÏÊK™^\ÝÔÞ[˜ÊËš›Ú[ŠK˜ÝÙØÛÛ™šYËšœÛÛˆŠJ_K™^\ÝÔÞ[˜ÊËš›Ú[ŠË˜ÝÙØÛÛ™šYËšœÛÛˆŠJJJJ\™]\›ŽÛ]ÏV™JŠKZ‹›XZÙRY[
\\È‹ÊNÙ›ÜŠ]Ùˆ]˜[\[™[˜ÚY\Ê]\[ÙˆK›X[šY™\ÝÜK™Ù]
‹šY[\Ú
OˆHŸK›X[šY™\ÝÜK™[]J‹šY[\Ú
_K”ÝJK
OOžÝœX›\ÚÛÛ™šYÉ‰œX›\ÚÛÛ™šYË\[™ÜÉ‰Š\[™ÜÏ]œX›\ÚÛÛ™šYË\[™ÜÊKœX›\ÚÛÛ™šYÉ‰œX›\ÚÛÛ™šYË\\É‰Š\\Ï]œX›\ÚÛÛ™šYË\\Ê_K”Ý^ØÛÛ™šYÝ\˜][ÛŽžÝÑ[˜X›P]]Õ\\ÎžÙ\ØÜš\[ÛŽˆ•Ú]\ˆX\›ˆÚÝ[]]ËZ[œÝ[\\ËÈ\[™[˜ÚY\ÈÛˆ	ÞX\›ˆY	È‹\Nˆ“ÓÓPSˆ‹\Ó[X›NˆLY˜][›[_KÛÚÜÎžØY\•ÛÜšÜÜXÙQ\[™[˜ÞPY][ÛŽÔÝY\•ÛÜšÜÜXÙQ\[™[˜ÞT™[[Ý˜[ÔÝ™Y›Ü™UÛÜšÜÜXÙTXÚÚ[™Î”Ý_KÔÝ]”ÝÝ˜\ˆÒ^ßNÖ]
Ò‹Õ™\œÚ[Û\PÛÛ[X[™Š
OO“LK™\œÚ[ÛÚXÚÐÛÛ[X[™Š
OO•LK™\œÚ[ÛÛÛ[X[™Š
OO—ÌKY˜][Š
OOšÔÝ™\œÚ[Û•][ÎŠ
OO“_JNÜYJ
NÜYJ
NÕ

NÝ˜\ˆO^ßNÖ]
KÑXÚ\Ú[ÛŽŠ
OO“ŒK\T™\™[X\ÙNŠ
OO‰™K\T™[X\Ù\ÎŠ
OOž‹\TÝ˜]YÞNŠ
OOœÔÛX\•™\œÚ[Û‘š[\ÎŠ
OO‘‹Ù][™XÚYY\[™[ÛÜšÜÜXÙ\ÎŠ
OO˜TÙ][™XÚYYÛÜšÜÜXÙ\ÎŠ
OO“Ü[•™\œÚ[Û‘š[NŠ
OO“ÌK™\]Z\™S[Ü™QXÚ\Ú[ÛœÎŠ
OO˜”Ý™\ÛÛ™U™\œÚ[Û‘š[\ÎŠ
OO›ÔÝYÙÙ\ÝÝ˜]YÞNŠ
OO”‹\]U™\œÚ[Û‘š[\ÎŠ
OO˜’‹˜[Y]T™[X\ÙQXÚ\Ú[ÛŽŠ
OO‘^_JNÜYJ
NÑ

NÐ˜Ê
NÕ

NÒ›

NÝ˜\ˆPOY]
J
JKÝK×Š_ß——_
JÌKNWW
ŠWŠÌKNWW
ŠWŠÌKNWW
ŠJJÌKNWW
Ÿ
–ØK^KV‹WVÌNXK^KV‹WJŠJŠÌKNWW
Ÿ
–ØK^KV‹WVÌNXK^KV‹WJŠJJŠOÊ
ÖÌNXK^KV‹WJÊ–ÌNXK^KV‹WJÊJŠOÉËŒOJOŠ•S‘PÒQQH[™XÚYY‹‘PÓS‘OH™XÛ[™H‹“PR“ÔH›XZ›Üˆ‹“RS“ÔH›Z[›Üˆ‹”UÒHœ]Ú‹”‘SPR“ÔHœ™[XZ›Üˆ‹”‘SRS“ÔHœ™[Z[›Üˆ‹”‘TUÒHœ™\]Ú‹”‘T‘SPTÑOHœ™\™[X\ÙH‹
JJŒ_ßJNÙ[˜Ý[Ûˆ^JJ^Û]TPK™Y˜][˜[Y
JNÜ™]\›ˆÙK˜[Y]Q[[JM
ŒK•S‘PÒQQŠKJ_X\Þ[˜È[˜Ý[ÛˆÔ
KÜ™\™[X\ÙN[[O^ßJ^Û][™]ÈX\ÏYK˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y™\œ™Y™\œÚ[Û‘›Û\ˆŠNÚYŠ[K™^\ÝÔÞ[˜ÊÊJ\™]\›ˆŽÛ]OX]ØZ]Kœ™XY\”›ÛZ\ÙJÊNÙ›ÜŠ]ˆÙˆJ^ÚYŠ[‹™[™ÕÚ]
‹ž[[ŠJXÛÛ[YNÛ]ÏRËš›Ú[ŠËŠKX]ØZ]Kœ™XYš[T›ÛZ\ÙJË]ŽŠKXÜÊŠNÙ›ÜŠ]ÚW[ÙˆØš™XÝ™[šY\Êœ™[X\Ù\ßßJJ^ÚYŠOOOH™XÛ[™HŠXÛÛ[YNÛ]ÏZ‹œ\œÙRY[

KÏYKžUÛÜšÜÜXÙPžRY[
ÊNÚYŠÏOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYH™[X\ÙHYš[š][Ûˆš[HÈÛ›H™Y™\™[˜ÙH^\Ý[™ÈÛÜšÜÜXÙ\È
	ÒË˜˜\Ù[˜[YJÊ_H™Y™\™[˜Ù\È	ÚJX
NÚYŠË›X[šY™\Ý™\œÚ[ÛOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝYHÛÜšÜÜXÙHÈ]™HH™\œÚ[Ûˆ
	Ú‹œ™]SØØ]ÜŠK˜ÛÛ™šYÝ\˜][Û‹Ë˜[˜ÚÜ™YØØ]ÜŠ_JX
NÛ]TË›X[šY™\Ýœ˜]ËœÝX›U™\œÚ[ÛÏÔË›X[šY™\Ý™\œÚ[Û‹O\‹™Ù]
ÊK\Ô
OOOHœ™\™[X\ÙHÔË›X[šY™\Ý™\œÚ[ÛŽž^JJJNÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ^XÝY	ÞHÈÝ\Ü™Z[™È[\YšXHÝ˜]YÞH	Ñ_X
NÛ]Ï]\[ÙˆOHÔPK™Y˜][™Ý
JOÕ’N•Ü‹œÙ]
ËÊ__\™]\›ˆ	‰Š[™]ÈX\
Ë‹‹œ—K›X\

Û‹×JOO–Û‹	™JËØÝ\œ™[›‹›X[šY™\Ý™\œÚ[Û‹™\™[X\ÙNJWJJJKŸX\Þ[˜È[˜Ý[ÛˆŠJ^Û]YK˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y™\œ™Y™\œÚ[Û‘›Û\ˆŠNÛK™^\ÝÔÞ[˜Ê
I‰˜]ØZ]Kœ™[[Ý™T›ÛZ\ÙJ
_X\Þ[˜È[˜Ý[Ûˆ’ŠK
^Û][™]ÈÙ]

KÏYK˜ÛÛ™šYÝ\˜][Û‹™Ù]
™Y™\œ™Y™\œÚ[Û‘›Û\ˆŠNÚYŠ[K™^\ÝÔÞ[˜ÊÊJ\™]\›ŽÛ]OX]ØZ]Kœ™XY\”›ÛZ\ÙJÊNÙ›ÜŠ]ˆÙˆJ^ÚYŠ[‹™[™ÕÚ]
‹ž[[ŠJXÛÛ[YNÛ]ÏRËš›Ú[ŠËŠKX]ØZ]Kœ™XYš[T›ÛZ\ÙJË]ŽŠKXÜÊŠK\Ëœ™[X\Ù\ÎÚYŠ
^Ù›ÜŠ]HÙˆØš™XÝšÙ^\Ê
J^Û]ÏZ‹œ\œÙRY[
JKÏYKžUÛÜšÜÜXÙPžRY[
ÊNÊÏOO[[‹š\ÊÊJI‰™[]Hœ™[X\Ù\ÖÑW_SØš™XÝšÙ^\Êœ™[X\Ù\ÊK›[™ÝŒØ]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJËÛ
™]ÈÛ”™\Ù\™SÜ™\š[™Ê
JJN˜]ØZ]K[›[šÔ›ÛZ\ÙJÊ___X\Þ[˜È[˜Ý[ÛˆÌJKØ[ÝÑ[\NHL_O^ßJ^Û]YK˜ÛÛ™šYÝ\˜][ÛŽÚYŠ‹œ›Ú™XÝÝÙOO[[
]›ÝÈ™]ÈÝ
•\ÈÛÛ[X[™Ø[ˆÛ›H™H[ˆœ›ÛHÚ][ˆHX\›ˆ›Ú™XÝŠNÛ]ÏX]ØZ]ØK™™]Ú›ÛÝ
‹œ›Ú™XÝÝÙ
KO\ÈOO[[Ø]ØZ]ØK™™]Ú˜\ÙJËØ˜\ÙT™YœÎœ‹™Ù]
˜Ú[™Ù\Ù]˜\ÙT™YœÈŠ_JN›[\ÈOO[[Ø]ØZ]ØK™™]ÚÚ[™ÙYš[\ÊËØ˜\ÙN˜Kš\Ú›Ú™XÝ™_JN–×KÏ\‹™Ù]
™Y™\œ™Y™\œÚ[Û‘›Û\ˆŠK[‹™š[\ŠO’Ë˜ÛÛZ[œÊË
HOO[[
NÚYŠ‹›[™ÝŒJ]›ÝÈ™]ÈÝ
[Ý\ˆÝ\œ™[œ˜[˜ÚÛÛZ[œÈ][\H™\œÚ[Ûš[™Èš[\ÎÈ\È\Û‰ÝÝ\ÜY‚‹H	Ù‹›X\
O™™K™œ›ÛTÜX›T]

JKš›Ú[Š‹H
_X
NÛ][™]ÈÙ]
ÙK›X\[™š[\Š‹OžÛ]OYKžUÛÜšÜÜXÙPžQš[T]

NÜ™]\›ˆOOO[[ÑÙK›X\[™š[\‹œÚÚ\’_JJNÚYŠ‹›[™ÝOOL	‰œœÚ^™OOOL	‰ˆ]
\™]\›ˆ[Û]Y‹›[™ÝOOLOÙ–ÌN’Ëš›Ú[ŠË	Ó‹›XZÙR\Ú
X]œ˜[™ÛJ
KÔÝš[™Ê
JKœÛXÙJ
_Kž[[
KO[K™^\ÝÔÞ[˜Ê
OØ]ØZ]Kœ™XYš[T›ÛZ\ÙJ]ŽŠNˆžßH‹ÏXÜÊJKÏ[™]ÈX\Ù›ÜŠ]ÙˆË™XÛ[™Y×J^Û]OZ‹œ\œÙRY[

KYK™Ù]ÛÜšÜÜXÙPžRY[
JNÔËœÙ]
™XÛ[™HŠ_Y›ÜŠ]ÞW[ÙˆØš™XÝ™[šY\ÊËœ™[X\Ù\ßßJJ^Û]Z‹œ\œÙRY[

KÏYK™Ù]ÛÜšÜÜXÙPžRY[

NÔËœÙ]
Ë^JJJ_\™]\›žÜ›Ú™XÝ™K›ÛÝœË˜\ÙR\Ú˜HOO[[ØKš\Ú›[˜\ÙU]N˜HOO[[ØK]N›[Ú[™ÙYš[\Î›™]ÈÙ]
ŠKÚ[™ÙYÛÜšÜÜXÙ\Îœ™[X\ÙT›ÛÝÎ›™]ÈÙ]
Ë‹‹œK™š[\ŠOž›X[šY™\Ý™\œÚ[ÛˆOO[[
JK™[X\Ù\Î”Ë\Þ[˜ÈØ]™P[

^Û]^ßKOV×KV×NÙ›ÜŠ]ÈÙˆKÛÜšÜÜXÙ\Ê^ÚYŠË›X[šY™\Ý™\œÚ[ÛOO[[
XÛÛ[YNÛ]OZ‹œÝš[™ÚYžRY[
Ë˜[˜ÚÜ™YØØ]ÜŠKOTË™Ù]
ÊNÖOOOH™XÛ[™HÒKœ\Ú
JN\[ÙˆOHÞÕWOQ^JJNœš\ÊÊI‰•œ\Ú
J_X]ØZ]K›ZÙ\”›ÛZ\ÙJË™\›˜[YJ
KÜ™XÝ\œÚ]™NˆLJK]ØZ]K˜Ú[™ÙQš[T›ÛZ\ÙJÛ
™]ÈÛ”™\Ù\™SÜ™\š[™ÊÜ™[X\Ù\Î“Øš™XÝšÙ^\Ê
K›[™ÝŒÞ›ÚYXÛ[™Y’K›[™ÝŒÒN›ÚY[™XÚYY•›[™ÝŒÕ›ÚYJJJ___Y[˜Ý[Ûˆ”Ý
J^Ü™]\›ˆ“
JKœÚ^™OŒT
JK›[™ÝŒY[˜Ý[Ûˆ“
J^Û][™]ÈÙ]Ù›ÜŠ]ˆÙˆK˜Ú[™ÙYÛÜšÜÜXÙ\Ê\‹›X[šY™\Ý™\œÚ[ÛˆOO[[	‰ŠKœ™[X\Ù\Ëš\ÊŠ_˜Y
ŠJNÜ™]\›ˆY[˜Ý[ÛˆT
KÚ[˜ÛYN[™]ÈÙ]O^ßJ^Û]V×KÏ[™]ÈX\
ÙK›X\[™š[\ŠË‹‹™Kœ™[X\Ù\×K
Û‹×JOO˜ÏOOH™XÛ[™HÑÙK›X\[™š[\‹œÚÚ\–Û‹˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú—JJKO[™]ÈX\
ÙK›X\[™š[\ŠË‹‹™Kœ™[X\Ù\×K
Û‹×JOO˜ÈOOH™XÛ[™HÑÙK›X\[™š[\‹œÚÚ\–Û‹˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú—JJNÙ›ÜŠ]ˆÙˆKœ›Ú™XÝÛÜšÜÜXÙ\ÊZYŠJ]š\ÊŠI‰ŠKš\Ê‹˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú
_Ëš\Ê‹˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú
JJI‰›‹›X[šY™\Ý™\œÚ[ÛˆOO[[
Y›ÜŠ]ÈÙˆ]š\™\[™[˜ÚY\ÊY›ÜŠ]ˆÙˆ‹›X[šY™\Ý™Ù]›Ü”ØÛÜJÊK˜[Y\Ê
J^Û]YKœ›Ú™XÝžUÛÜšÜÜXÙPžQ\ØÜš\ÜŠŠNÜOO[[	‰œËš\Ê˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú
I‰œ‹œ\Ú
Û‹J_\™]\›ˆŸY[˜Ý[ÛˆŠK
^Û]TPK™Y˜][˜ÛX[Š
NÙ›ÜŠ]ÈÙˆØš™XÝ˜[Y\ÊŒJJZYŠÈOOH[™XÚYY‰‰œÈOOH™XÛ[™H‰‰”PK™Y˜][š[˜ÊKÊOOO\Š\™]\›ˆÎÜ™]\›ˆ[Y[˜Ý[ÛˆÔ
K
^ÚYŠPK™Y˜][˜[Y

J\™]\›ˆÚYŠOOO[[
]›ÝÈ™]ÈÝ
Ø[››Ý\HH™[X\ÙHÝ˜]YÞH‰ÝHˆ[›\ÜÈHÛÜšÜÜXÙH[™XYH\ÈH˜[Y™\œÚ[Û˜
NÚYŠTPK™Y˜][˜[Y
JJ]›ÝÈ™]ÈÝ
Ø[››Ý\HH™[X\ÙHÝ˜]YÞH‰ÝHˆÛˆH›Û‹\Ù[]™\ˆ™\œÚ[Ûˆ
	Ù_JX
NÛ]TPK™Y˜][š[˜ÊK
NÚYŠOO[[
]›ÝÈ™]ÈÝ
Ø[››Ý\HH™[X\ÙHÝ˜]YÞH‰ÝHˆÛˆHÜXÚYšYY™\œÚ[Ûˆ
	Ù_JX
NÜ™]\›ˆŸY[˜Ý[ÛˆŠKÜ™\Üœ‹^XÝœßJ^Û]O[™]ÈX\Ù›ÜŠ]ˆÙˆKÛÜšÜÜXÙ\ÊY›ÜŠ]ÈÙˆ]˜[\[™[˜ÚY\ÊY›ÜŠ]ˆÙˆ‹›X[šY™\ÝØ×K˜[Y\Ê
J^Û]YKžUÛÜšÜÜXÙPžQ\ØÜš\ÜŠŠNÚYŠOO[[]š\Ê
JXÛÛ[YNÑÙK™Ù]\œ˜^UÚ]Y˜][
K
Kœ\Ú
Û‹Ë‹šY[\ÚJ_Y›ÜŠ]Û‹×[Ùˆ
^Û][‹›X[šY™\Ý™\œÚ[ÛŽÛ‹›X[šY™\Ý™\œÚ[ÛXËPK™Y˜][œ™\™[X\ÙJÊOOO[[Ù[]H‹›X[šY™\Ýœ˜]ËœÝX›U™\œÚ[ÛŽ›‹›X[šY™\Ýœ˜]ËœÝX›U™\œÚ[ÛŸ
‹›X[šY™\Ýœ˜]ËœÝX›U™\œÚ[ÛYŠNÛ][‹›X[šY™\Ý›˜[YHOO[[Ú‹œÝš[™ÚYžRY[
‹›X[šY™\Ý›˜[YJN›[Ü‹œ™\Ü[™›Ê	Ú‹œ™]SØØ]ÜŠK˜ÛÛ™šYÝ\˜][Û‹‹˜[˜ÚÜ™YØØ]ÜŠ_Nˆ[\YÈ	ØßX
K‹œ™\ÜœÛÛŠØÝÙ™™K™œ›ÛTÜX›T]
‹˜ÝÙ
KY[œÛ™\œÚ[ÛŽ™‹™]Õ™\œÚ[ÛŽ˜ßJNÛ]XK™Ù]
ŠNÚYŠJ\[ÙˆˆHŠJY›ÜŠ]ÑKË×[Ùˆ
^Û]QK›X[šY™\ÝÐ×K™Ù]
ÊNÚYŠ\[ÙˆˆHŠ]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH\[™[˜ÞHÚÝ[]™H^\ÝYŠNÛ]O^œ˜[™ÙKHLNÚYŠKœÝ\ÕÚ]
ZKœ›ÝØÛÛ
I‰ŠORKœÛXÙJZKœ›ÝØÛÛ›[™Ý
KHLOOO[‹œ™[]]™PÝÙ
JXÛÛ[YNÛ]ÏRK›X]Ú
Ý
NÚYŠSÊ^Ü‹œ™\ÜØ\›š[™ÊÛÝ[‰Ý]]Ë]\Ü˜YH˜[™ÙH	Ò_H
[ˆ	Ú‹œ™]SØØ]ÜŠK˜ÛÛ™šYÝ\˜][Û‹K˜[˜ÚÜ™YØØ]ÜŠ_JX
NØÛÛ[Y_[]O\ÏØ	ØßX˜	ÓÖÌW_IØßXÕ	‰ŠOX	ÒZKœ›ÝØÛÛIÕ_X
NÛ]OZ‹›XZÙQ\ØÜš\ÜŠJNÑK›X[šY™\ÝÐ×KœÙ]
ËJ___]˜\ˆÝ[™]ÈX\
ÖÈ‰[ˆ‹Ù^˜XÝ™OO™K›[™ÝLOÖÙVÌKKœÛXÙJJWN›[Ù[™\˜]NŠOL
OO˜	ÙJÌ_XWWJNÙ[˜Ý[Ûˆ	™JKØÝ\œ™[™\™[X\ÙNœŸJ^Û]Ï[™]ÈPK™Y˜][”Ù[U™\Š
KO\Ëœ™\™[X\ÙKœÛXÙJ
KV×NÜËœ™\™[X\ÙOV×KË™›Ü›X]

HOOYI‰ŠK›[™ÝL
NÛ]ÏHL\‹œÜ]
×‹ÙÊNÙ›ÜŠ]ÙˆŠ^Û]TÝ™Ù]

NÚYŠ\[ÙˆˆHŠ[‹œ\Ú

KVÌOOO\ØKœÚY

N˜ÏHLNÙ[Ù^Û]OXÏÚ™^˜XÝ
JN›[ÑHOO[[	‰\[ÙˆVÌOOH›[X™\ˆÊ‹œ\Ú
™Ù[™\˜]JVÌJJKOQVÌWJNŠ‹œ\Ú
™Ù[™\˜]J
JKÏHLJ__\™]\›ˆËœ™\™[X\ÙI‰ŠËœ™\™[X\ÙOV×JK	Ù_KIÛ‹š›Ú[Š‹ˆŠ_X]˜\ˆLOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë˜[ZK›ÛÛX[Š‹KX[‹LKÙ\ØÜš\[ÛŽˆ\HHY™\œ™Y™\œÚ[ÛˆÚ[™Ù\ÈÛˆ[ÛÜšÜÜXÙ\ÈŸJNÝ\Ë™žT[ZK›ÛÛX[Š‹KYžK\[ˆ‹LKÙ\ØÜš\[ÛŽˆ”š[H™\œÚ[ÛœÈÚ]Ý]XÝX[HÙ[™\˜][™ÈHXÚØYÙH\˜Ú]™HŸJNÝ\Ëœ™\™[X\ÙOZK”Ýš[™Ê‹K\™\™[X\ÙH‹Ù\ØÜš\[ÛŽˆYH™\™[X\ÙHY[YšY\ˆÈ™]È™\œÚ[ÛœÈ‹Û\˜]P›ÛÛX[ŽˆLJNÝ\Ë™^XÝZK›ÛÛX[Š‹KY^XÝ‹LKÙ\ØÜš\[ÛŽˆ•\ÙHH^XÝ™\œÚ[ÛˆÙˆXXÚXÚØYÙK™[[Ý™\È[žH˜[™ÙKˆ\ÙY[›ÜˆšYÚH™[X\Ù\ÈÚ\™HH˜[™ÙHZYÚX]Ú[›Ý\ˆ™\œÚ[Û‹ˆŸJNÝ\Ëœ™XÝ\œÚ]™OZK›ÛÛX[Š‹T‹K\™XÝ\œÚ]™H‹Ù\ØÜš\[ÛŽˆ”™[X\ÙHH˜[œÚ]]™HÛÜšÜÜXÙ\È\ÈÙ[ŸJNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ™\œÚ[Ûˆ‹˜\H—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ”™[X\ÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ˜\H[HY™\œ™Y™\œÚ[Ûˆ[\È]Û˜ÙH‹]Z[Î˜ˆ\ÈÛÛ[X[™Ú[\HHY™\œ™Y™\œÚ[ÛˆÚ[™Ù\È[™™[[Ý™HZ\ˆYš[š][ÛœÈœ›ÛHH™\ÜÚ]ÜžK‚‚ˆ›ÝH]YˆK\™\™[X\ÙW\ÈÙ]HÚ]™[ˆ™\™[X\ÙHY[YšY\ˆ
žHY˜][˜Ë‰[—
HÚ[™H\ÙYÛˆ[™]È™\œÚ[ÛœÈ[™H™\œÚ[ÛˆYš[š][ÛœÈÚ[™HÙ\\ËZ\Ë‚‚ˆžHY˜][Û›HHÝ\œ™[ÛÜšÜÜXÙHÚ[™H[\Y][ÝHØ[ˆÛÛ™šYÝ\™H\È™Z]š[ÜˆžH\Ú[™ÈÛ™HÙŽ‚‚ˆHK\™XÝ\œÚ]™WÈ[ÛÈ\HH™\œÚ[Ûˆ[\Ûˆ]È\[™[˜ÚY\ÂˆHKX[È\HH™\œÚ[Ûˆ[\Ûˆ[XÚØYÙ\È[ˆH™\ÜÚ]ÜžB‚ˆ›ÝH]\ÈÛÛ[X[™Ú[[ÛÈ\]HHÛÜšÜÜXÙN—™Y™\™[˜Ù\ÈXÜ›ÜÜÈ[[Ý\ˆØØ[ÛÜšÜÜXÙ\Ë\È[œÝ\š[™È]^HÙY\™Y™\œš[™ÈÈHØ[YHÛÜšÜÜXÙ\È]™[ˆY\ˆH™\œÚ[Ûˆ[\‚ˆ^[\\Î–ÖÈ\HH™\œÚ[ÛˆÚ[™ÙHÈHØØ[ÛÜšÜÜXÙH‹žX\›ˆ™\œÚ[Ûˆ\H—KÈ\HH™\œÚ[ÛˆÚ[™ÙHÈ[HÛÜšÜÜXÙ\È[ˆHØØ[ÛÜšÜÜXÙH‹žX\›ˆ™\œÚ[Ûˆ\HKX[—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KX]ØZ]œ‹™š[™
ŠNÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]JÜ™\ÝÜ™T™\ÛÛ][ÛœÎˆL_JNÛ]ÏX]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹œÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈOžÛ]]\Ëœ™\™[X\ÙOÝ\[Ùˆ\Ëœ™\™[X\ÙHOH˜›ÛÛX[ˆÝ\Ëœ™\™[X\ÙNˆœ˜Ë‰[ˆŽ›[X]ØZ]Ô
ËÜ™\™[X\ÙNœJKO[™]ÈX\ÚYŠ\Ë˜[
QOZÙ[Ù^Û]Ï]\Ëœ™XÝ\œÚ]™OØK™Ù]™XÝ\œÚ]™UÛÜšÜÜXÙQ\[™[˜ÚY\Ê
N–ØWNÙ›ÜŠ]ÈÙˆÊ^Û]Z™Ù]
ÊNÝ\[ÙˆH‰‰‘KœÙ]
Ë
__ZYŠKœÚ^™OOOL
^Û]ÏZœÚ^™OŒÈˆY[ÝHØ[ÈYKX[ÈŽˆˆŽÙ‹œ™\ÜØ\›š[™ÊHÝ\œ™[ÛÜšÜÜXÙHÙ\Û‰ÝÙY[HÈ™\]Z\™HH™\œÚ[Ûˆ[\‰ÐßX
NÜ™]\›Ÿ^ŠËKÜ™\Ü™‹^XÝ\Ë™^XÝJK\Ë™žT[Ÿ

\Ë˜[Ø]ØZ]ŠÊN˜]ØZ]’ŠËË‹‹‘KšÙ^\Ê
WJJK‹œ™\ÜÙ\\˜]ÜŠ
J_JNÜ™]\›ˆ\Ë™žT[ŸËš\Ñ\œ›ÜœÊ
OØË™^]ÛÙJ
N˜]ØZ]Ëš[œÝ[Ú]™]Ô™\Ü
ÚœÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]KØØXÚN›ŸJ__NÜYJ
NÑ

NÕ

NÝ˜\ˆ“Y]
J
JNÝ˜\ˆLOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ëš[\˜XÝ]™OZK›ÛÛX[Š‹ZKKZ[\˜XÝ]™H‹Ù\ØÜš\[ÛŽˆ“Ü[ˆ[ˆ[\˜XÝ]™H[\™˜XÙH\ÙYÈÙ]™\œÚ[Ûˆ[\ÈŸJ_\Ý]XÞÝ\Ëœ]ÏVÖÈ™\œÚ[Ûˆ‹˜ÚXÚÈ—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ”™[X\ÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ˜ÚXÚÈ][H™[]˜[XÚØYÙ\È]™H™Y[ˆ[\Y‹]Z[Îˆ—ˆ
Š•Ø\›š[™ÎŠŠˆ\ÈÛÛ[X[™Ý\œ™[H™\]Z\™\ÈÚ]——ˆ\ÈÛÛ[X[™Ú[ÚXÚÈ][HXÚØYÙ\ÈÛÝ™\™YžHHš[\È\ÝY[ˆ\™Ý[Y[]™H™Y[ˆ›Ü\›H[\YÜˆXÛ[™YÈ[\——ˆ[ˆHØ\ÙHÙˆH[\HÚXÚÈÚ[[ÛÈÛÝ™\ˆ˜[œÚ]]™HXÚØYÙ\ÈHYX[š[™È]ÚÝ[›ÛØ™H[\YHXÚØYÙH˜\˜\[™[™ÈÛˆ›ÛØÚ[™\]Z\™HHXÚ\Ú[Ûˆ\ÈÈÚ]\ˆ˜\˜Ú[™YYÈ™H[\Yˆ\ÈÚXÚÈÙ\Û‰ÝÜ›ÜÜÈXÚØYÙ\È]]™HXÛ[™YÈ[\——ˆ[ˆØ\ÙH›È\™Ý[Y[È\™H\ÜÙYÈH[˜Ý[Û‹H\ÝÙˆ[ÙYšYYš[\ÈÚ[™HÙ[™\˜]YžHÛÛ\\š[™ÈHPQYØZ[œÝX\Ý\˜—ˆ‹^[\\Î–ÖÈÚXÚÈÚ]\ˆH[ÙYšYYXÚØYÙ\È™YYH[\‹žX\›ˆ™\œÚ[ÛˆÚXÚÈ—W_J_X\Þ[˜È^XÝ]J
^Ü™]\›ˆ\Ëš[\˜XÝ]™OØ]ØZ]\Ë™^XÝ]R[\˜XÝ]™J
N˜]ØZ]\Ë™^XÝ]TÝ[™\™

_X\Þ[˜È^XÝ]R[\˜XÝ]™J
^ÒÊ\Ë˜ÛÛ^
NÛ]ÑÙ[NœŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
KUÊJKÔØÜ›ÛX›R][\ÎœßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
K‘ŠJKÑ›ØÝ\Ô™\]Y\Ý˜_OX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠ•Ê
K]ÙJJKÝ\ÙS\Ý[œ]›ŸOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠQŠ
KÙJJKÜ™[™\‘›Ü›N˜ßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OOŠŠ
KÑŠJKÐ›Þ™‹^œOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
ØÊ
JJKÙY˜][š\ÙPØ[˜XÚÎ‘K\ÙTÝ]NßOX]ØZ]›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO™]
ÛŠ
JJKÏX]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝžÛÜšÜÜXÙN’_OX]ØZ]™š[™
Ë\Ë˜ÛÛ^˜ÝÙ
NÚYŠRJ]›ÝÈ™]È\Š˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]œ™\ÝÜ™R[œÝ[Ý]J
NÛ]X]ØZ]ÌJ
NÚYŠOO[[œ™[X\ÙT›ÛÝËœÚ^™OOOL
\™]\›ˆÚYŠœ›ÛÝOO[[
]›ÝÈ™]ÈÝ
•\ÈÛÛ[X[™Ø[ˆÛ›H™H[ˆÛˆÚ]™\ÜÚ]ÜšY\ÈŠNÛ]ÏJ
OOš˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆœ›ÝÈ‹Y[™Ð›ÝÛNŒ_K˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆ‹ÚYŒK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK\ˆŠK‹È‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÝÛˆŠKˆÈÙ[XÝÛÜšÜÜXÙ\ËˆŠJK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKYˆŠK‹È‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKšYÚˆŠKˆÈÙ[XÝ™[X\ÙHÝ˜]YÚY\ËˆŠJJK˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
‹ÛX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸK[\ˆŠKˆÈØ]™KˆŠJK˜Ü™X]Q[[Y[
‹ÛX\™Ú[“YŒ_K˜Ü™X]Q[[Y[
[”™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKÝ›
ØÏˆŠKˆÈX›ÜˆŠJJJKOJÝÛÜšÜÜXÙN™KXÝ]™NYKXÚ\Ú[ÛŽÙKÙ]XÚ\Ú[ÛŽ‘Y_JOOžÛ]ÏYK›X[šY™\Ýœ˜]ËœÝX›U™\œÚ[ÛÏÙK›X[šY™\Ý™\œÚ[ÛŽÚYŠÏOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[YˆH™\œÚ[ÛˆÚÝ[]™H™Y[ˆÙ]
	Ú‹œ™]SØØ]ÜŠËK˜[˜ÚÜ™YØØ]ÜŠ_JX
NÚYŠ“™Y˜][œ™\™[X\ÙJÊHOO[[
]›ÝÈ™]È\œ›ÜŠ\ÜÙ\[Ûˆ˜Z[Yˆ™\™[X\ÙHY[YšY\œÈÚÝ[‰Ý™H›Ý[™
	ÙßJX
NÛ]ÙOVÈ[™XÚYY‹™XÛ[™H‹œ]Ú‹›Z[›Üˆ‹›XZ›Üˆ—NÛŠÙKÙKØXÝ]™NYKZ[\Îˆ›Y‹\ÎˆœšYÚ‹Ù]‘Y_JNÛ]™OPÙOOOH[™XÚYYÚ˜Ü™X]Q[[Y[
ØÛÛÜŽˆžY[ÝÈŸKÊNÙOOOH™XÛ[™HÚ˜Ü™X]Q[[Y[
ØÛÛÜŽˆ™Ü™Y[ˆŸKÊNš˜Ü™X]Q[[Y[
[˜Ü™X]Q[[Y[
ØÛÛÜŽˆ›XYÙ[HŸKÊKˆLŒNLˆ‹˜Ü™X]Q[[Y[
ØÛÛÜŽˆ™Ü™Y[ˆŸK“™Y˜][˜[Y
ÙJOÐÙN“™Y˜][š[˜ÊËÙJJJNÜ™]\›ˆ˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[‹œ™]SØØ]ÜŠËK˜[˜ÚÜ™YØØ]ÜŠKˆH‹™JJK˜Ü™X]Q[[Y[
‹[ÙK›X\
YOOš˜Ü™X]Q[[Y[
‹ÚÙ^N›YKY[™ÓYŒŸK˜Ü™X]Q[[Y[
[˜Ü™X]Q[[Y[
‹ØXÝ]™N›YOOOPÙ_JKˆ‹YJJJJJ_KOYOOžÛ]YO[™]ÈÙ]
œ™[X\ÙT›ÛÝÊKÙO[™]ÈX\
Ë‹‹™WK™š[\Š
ÑYWJOOYKš\ÊYJJJNÙ›ÜŠÎÊ^Û]YOXT
Ü›Ú™XÝ•œ›Ú™XÝ™[X\Ù\ÎÙ_JKÏHLNÚYŠYK›[™ÝŒ
^Ù›ÜŠ]ÔÙW[ÙˆYJZYŠPYKš\ÊÙJJ^ÐYK˜Y
ÙJKÏHLÛ]™OYK™Ù]
ÙJNÝ\[Ùˆ™OH‰‰ÙKœÙ]
ÙK™J__ZYŠYÊXœ™XZß\™]\›žÜ™[]˜[ÛÜšÜÜXÙ\ÎYK™[]˜[™[X\Ù\ÎÙ__KOJ
OOžÛ]ÙKYWOPÊ

OO›™]ÈX\
œ™[X\Ù\ÊJKÙOQJ
YKÊOOžÛ]ÙO[™]ÈX\
JNÙÈOOH[™XÚYYÔÙKœÙ]
YKÊN”ÙK™[]JYJNÛ]Ü™[]˜[™[X\Ù\Î™_OVJÙJNÐYJ™J_KÙKYWJNÜ™]\›–ÙKÙW_KYOJÝÛÜšÜÜXÙ\Î™K™[X\Ù\ÎY_JOOžÛ]ÙOV×NÐÙKœ\Ú
	ÙKœÚ^™_HÝ[
NÛ]YOLÏLÙ›ÜŠ]ÙHÙˆJ^Û]™OPYK™Ù]
ÙJNÝ\[Ùˆ™OˆHÙÊÏLN™HOOH™XÛ[™H‰‰ŠYJÏLJ_\™]\›ˆÙKœ\Ú
	ÑY_H™[X\ÙIÑYOOOLOÈˆŽˆœÈŸX
KÙKœ\Ú
	ÙßH™[XZ[š[™Ø
K˜Ü™X]Q[[Y[
ØÛÛÜŽˆžY[ÝÈŸKÙKš›Ú[Š‹ŠJ_KYOX]ØZ]Ê
Ý\ÙTÝX›Z]™_JOOžÛ]ÐYKÙWO]J
NÙJYJNÛ]Ü™[]˜[ÛÜšÜÜXÙ\Î‘Y_OVJYJKÏ[™]ÈÙ]
Ë‹‹‘YWK™š[\ŠÙOOˆUœ™[X\ÙT›ÛÝËš\ÊÙJJJKÔÙK™WOPÊ
KYOQJÙOOžÜÝÚ]Ú
ÙJ^ØØ\ÙHK‘Q“Ô‘N™JÙKLJNØœ™XZÎØØ\ÙHKQ•TŽ™JÙJÌJNØœ™XZß_KÔÙK™WJNÜ™]\›ˆ˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
Ë[
K˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
ÝÜ˜\ˆÜ˜\ŸK•H›ÛÝÚ[™Èš[\È]™H™Y[ˆ[ÙYšYY[ˆ[Ý\ˆØØ[ÚXÚÛÝ]ˆŠJK˜Ü™X]Q[[Y[
‹Ù›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆ‹X\™Ú[•ÜŒKY[™ÓYŒŸKË‹‹•˜Ú[™ÙYš[\×K›X\
ÙOOš˜Ü™X]Q[[Y[
‹ÚÙ^N˜Ù_K˜Ü™X]Q[[Y[
[˜Ü™X]Q[[Y[
ØÛÛÜŽˆ™Ü™^HŸK™K™œ›ÛTÜX›T]
œ›ÛÝ
JK™KœÙ\™Kœ™[]]™J™K™œ›ÛTÜX›T]
œ›ÛÝ
K™K™œ›ÛTÜX›T]
ÙJJJJJJKœ™[X\ÙT›ÛÝËœÚ^™OŒ	‰š˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
ÝÜ˜\ˆÜ˜\ŸK™XØ]\ÙHÙˆÜÙHš[\È]š[™È™Y[ˆ[ÙYšYYH›ÛÝÚ[™ÈÛÜšÜÜXÙ\ÈX^H™YYÈ™H™[X\ÙYYØZ[ˆ
›ÝH]š]˜]HÛÜšÜÜXÙ\È\™H[ÛÈÚÝÛˆ\™K™XØ]\ÙH]™[ˆÝYÚ^HÛÛ‰Ý™HX›\ÚY™[X\Ú[™È[HÚ[[ÝÈ\ÈÈ›YÈZ\ˆ\[™[È›ÜˆÝ[X[™K\™[X\ÙJNˆŠJKËœÚ^™OŒÏÚ˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
YKÝÛÜšÜÜXÙ\Î•œ™[X\ÙT›ÛÝË™[X\Ù\ÎY_JJN›[˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒK›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
ËØXÝ]™N”ÙILOOL˜Y]\ÎŒKÚ^™NŒ‹Û‘›ØÝ\Ô™\]Y\Ý›Y_KË‹‹•œ™[X\ÙT›ÛÝ×K›X\
ÙOOš˜Ü™X]Q[[Y[
KÚÙ^N˜ÙK˜ÝÙÛÜšÜÜXÙN˜ÙKXÚ\Ú[ÛŽYK™Ù]
ÙJ_[™XÚYY‹Ù]XÚ\Ú[ÛŽ–OÙJÙK
_JJJJJKËœÚ^™OŒÚ˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
ÝÜ˜\ˆÜ˜\ŸK•H›ÛÝÚ[™ÈÛÜšÜÜXÙ\È\[™ÛˆÝ\ˆÛÜšÜÜXÙ\È]]™H™Y[ˆX\šÙY›Üˆ™[X\ÙK[™\ÈX^H™YYÈ™H™[X\ÙY\ÈÙ[ˆŠJK˜Ü™X]Q[[Y[
‹[˜Ü™X]Q[[Y[
[Š™\ÜÈ‹˜Ü™X]Q[[Y[
Ø›ÛˆLÛÛÜŽˆ˜ÞX[œšYÚŸKXˆŠKˆÈ[Ý™HH›ØÝ\È™]ÙY[ˆHÛÜšÜÜXÙHÜ›Ý\ËŠHŠJKËœÚ^™OOÚ˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒ_K˜Ü™X]Q[[Y[
YKÝÛÜšÜÜXÙ\Î™Ë™[X\Ù\ÎY_JJN›[˜Ü™X]Q[[Y[
‹ÛX\™Ú[•ÜŒK›^\™XÝ[ÛŽˆ˜ÛÛ[[ˆŸK˜Ü™X]Q[[Y[
ËØXÝ]™N”ÙILOOLK˜Y]\ÎŒ‹Ú^™NŒ‹Û‘›ØÝ\Ô™\]Y\Ý›Y_KË‹‹™×K›X\
ÙOOš˜Ü™X]Q[[Y[
KÚÙ^N˜ÙK˜ÝÙÛÜšÜÜXÙN˜ÙKXÚ\Ú[ÛŽYK™Ù]
ÙJ_[™XÚYY‹Ù]XÚ\Ú[ÛŽ–OÙJÙK
_JJJJJN›[
_KÝ™\œÚ[Û‘š[N•KÜÝ[Ž\Ë˜ÛÛ^œÝ[‹ÝÝ]\Ë˜ÛÛ^œÝÝ]Ý\œŽ\Ë˜ÛÛ^œÝ\œŸJNÚYŠ\[ÙˆYOˆHŠ\™]\›ˆNÕœ™[X\Ù\Ë˜ÛX\Š
NÙ›ÜŠ]ÙKYW[ÙˆYJUœ™[X\Ù\ËœÙ]
KYJNØ]ØZ]œØ]™P[

_X\Þ[˜È^XÝ]TÝ[™\™

^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÜ™]\›ˆ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
K
]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]K\Þ[˜ÈÏOžÛ]X]ØZ]ÌJÊNÚYŠOO[[‹œ™[X\ÙT›ÛÝËœÚ^™OOOL
\™]\›ŽÚYŠ‹œ›ÛÝOO[[
]›ÝÈ™]ÈÝ
•\ÈÛÛ[X[™Ø[ˆÛ›H™H[ˆÛˆÚ]™\ÜÚ]ÜšY\ÈŠNÚYŠËœ™\Ü[™›Ê[Ý\ˆˆØ\ÈÝ\YšYÚY\ˆ	ÜKœ™]J‹‹˜˜\ÙR\ÚœÛXÙJÊKžY[ÝÈŠ_H	ÜKœ™]J‹‹˜˜\ÙU]K›XYÙ[HŠ_X
K‹˜Ú[™ÙYš[\ËœÚ^™OŒ
^ØËœ™\Ü[™›Ê–[ÝH]™HÚ[™ÙYH›ÛÝÚ[™Èš[\ÈÚ[˜ÙH[ŽˆŠKËœ™\ÜÙ\\˜]ÜŠ
NÙ›ÜŠ]ÈÙˆ‹˜Ú[™ÙYš[\ÊXËœ™\Ü[™›Ê[	ÜKœ™]J‹™K™œ›ÛTÜX›T]
‹œ›ÛÝ
K™Ü˜^HŠ_IÙ™KœÙ\IÙ™Kœ™[]]™J™K™œ›ÛTÜX›T]
‹œ›ÛÝ
K™K™œ›ÛTÜX›T]
ÊJ_X
_[]HLKHLKOP“
ŠNÚYŠKœÚ^™OŒ
^ÜËœ™\ÜÙ\\˜]ÜŠ
NÙ›ÜŠ]ÈÙˆJXËœ™\Ü\œ›ÜŠ	Ú‹œ™]SØØ]ÜŠ‹Ë˜[˜ÚÜ™YØØ]ÜŠ_H\È™Y[ˆ[ÙYšYY]Ù\Û‰Ý]™HH™[X\ÙHÝ˜]YÞH]XÚY
NÜHL[]ÏXT
ŠNÙ›ÜŠ]ÔË[ÙˆÊZËœ™\ÜÙ\\˜]ÜŠ
KËœ™\Ü\œ›ÜŠ	Ú‹œ™]SØØ]ÜŠ‹Ë˜[˜ÚÜ™YØØ]ÜŠ_HÙ\Û‰Ý]™HH™[X\ÙHÝ˜]YÞH]XÚY]\[™ÈÛˆ	Ú‹œ™]UÛÜšÜÜXÙJ‹
_HÚXÚ\È[›™Y›Üˆ™[X\ÙK˜
KHLÊ
I‰ŠËœ™\ÜÙ\\˜]ÜŠ
KËœ™\Ü[™›Ê•\ÈÛÛ[X[™]XÝY]]X\ÝÛÛYHÛÜšÜÜXÙ\È]™H™XÙZ]™Y[ÙYšXØ][ÛœÈÚ]Ý]^XÚ][œÝXÝ[ÛœÈ\ÈÈÝÈ^HYÈ™H™[X\ÙY
Yˆ™YYY
KˆŠKËœ™\Ü[™›Ê•ÈÛÜœ™XÝ\ÙH\œ›ÜœË[ˆX\›ˆ™\œÚ[ÛˆÚXÚÈKZ[\˜XÝ]™X[ˆ›ÛÝÈH[œÝXÝ[ÛœËˆŠJ_JJK™^]ÛÙJ
__NÜYJ
NÕ

NÝ˜\ˆÓY]
J
JNÝ˜\ˆÌOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë™Y™\œ™YZK›ÛÛX[Š‹YKYY™\œ™Y‹Ù\ØÜš\[ÛŽˆ”™\\™HH™\œÚ[ÛˆÈ™H[\Y\š[™ÈH™^™[X\ÙHÞXÛHŸJNÝ\Ëš[[YYX]OZK›ÛÛX[Š‹ZKKZ[[YYX]H‹Ù\ØÜš\[ÛŽˆ[\H™\œÚ[Ûˆ[[YYX][HŸJNÝ\ËœÝ˜]YÞOZK”Ýš[™Ê
_\Ý]XÞÝ\Ëœ]ÏVÖÈ™\œÚ[Ûˆ—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ”™[X\ÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆ˜\HH™]È™\œÚ[ÛˆÈHÝ\œ™[XÚØYÙH‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[[\H™\œÚ[Ûˆ[X™\ˆ›ÜˆHÚ]™[ˆXÚØYÙK›ÛÝÚ[™ÈHÜXÚYšYYÝ˜]YÞN——ˆHYˆXZ›Ü˜Hš\œÝ[X™\ˆœ›ÛHHÙ[]™\ˆ˜[™ÙHÚ[™H[˜Ü™X\ÙY
ŒŒ
K—ˆHYˆZ[›Ü˜HÙXÛÛ™[X™\ˆœ›ÛHHÙ[]™\ˆ˜[™ÙHÚ[™H[˜Ü™X\ÙY
–Œ
K—ˆHYˆ]ÚH\™[X™\ˆœ›ÛHHÙ[]™\ˆ˜[™ÙHÚ[™H[˜Ü™X\ÙY
Œ–
K—ˆHYˆ™Yš^YžH™X
™[XZ›Ü˜‹‹ŠKHLÝY™š^Ú[™HÙ]
ŒŒL
K—ˆHYˆ™\™[X\ÙXHÝY™š^Ú[™H[˜Ü™X\ÙY
ŒŒV
NÈH\™[X™\ˆœ›ÛHHÙ[]™\ˆ˜[™ÙHÚ[[ÛÈ™H[˜Ü™X\ÙYYˆ\™HØ\È›ÈÝY™š^[ˆH™]š[Ý\È™\œÚ[Û‹—ˆHYˆXÛ[™XH›Û˜ÙHÚ[™H[˜Ü™X\ÙY›ÜˆX\›ˆ™\œÚ[ÛˆÚXÚØÈ\ÜÈÚ]Ý]™\œÚ[Ûˆ[\—ˆHYˆH˜[YÙ[]™\ˆ˜[™ÙK]Ú[™H\ÙY\È™]È™\œÚ[Û‹—ˆHYˆ[œÜXÚYšYYX\›ˆÚ[\ÚÈ[ÝH›ÜˆÝZY[˜ÙK——ˆ›Üˆ[Ü™H[™›Ü›X][ÛˆX›Ý]HKYY™\œ™Y›YËÛÛœÝ[Ý\ˆØÝ[Y[][Ûˆ
Î‹ËÞX\›œÙË˜ÛÛKÙ™X]\™\ËÜ™[X\ÙK]ÛÜšÙ›ÝÈÙY™\œ™Y]™\œÚ[Ûš[™ÊK—ˆ‹^[\\Î–ÖÈ’[[YYX][H[\H™\œÚ[ÛˆÈH™^XZ›Üˆ‹žX\›ˆ™\œÚ[ÛˆXZ›Üˆ—KÈ”™\\™HH™\œÚ[ÛˆÈ™H[\YÈH™^XZ›Üˆ‹žX\›ˆ™\œÚ[ÛˆXZ›ÜˆKYY™\œ™Y—W_J_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NÛ]\‹™Ù]
œ™Y™\‘Y™\œ™Y™\œÚ[ÛœÈŠNÝ\Ë™Y™\œ™Y	‰ŠHL
K\Ëš[[YYX]I‰ŠHLJNÛ]ÏTÓ™Y˜][˜[Y
\ËœÝ˜]YÞJK]\ËœÝ˜]YÞOOOH™XÛ[™H‹ÚYŠÊZYŠK›X[šY™\Ý™\œÚ[ÛˆOO[[
^Û]OTŠK›X[šY™\Ý™\œÚ[Û‹\ËœÝ˜]YÞJNÑHOO[[ÜQNœ]\ËœÝ˜]YÞ_Y[ÙH]\ËœÝ˜]YÞNÙ[Ù^Û]OXK›X[šY™\Ý™\œÚ[ÛŽÚYŠYŠ^ÚYŠOOO[[
]›ÝÈ™]ÈÝ
Ø[‰Ý[\H™\œÚ[ÛˆYˆ\™HØ\Û‰ÝH™\œÚ[ÛˆÈ™YÚ[ˆÚ]H\ÙHŒŒ\È[š]X[™\œÚ[Ûˆ[ˆ[ˆHÛÛ[X[™YØZ[‹ˆŠNÚYŠ\[ÙˆHOHœÝš[™ÈŸTÓ™Y˜][˜[Y
JJ]›ÝÈ™]ÈÝ
Ø[‰Ý[\H™\œÚ[Ûˆ
	Ñ_JHYˆ]	ÜÈ›Ý˜[YÙ[]™\˜
_\Q^J\ËœÝ˜]YÞJ_ZYŠ[Š^Û]ÏJ]ØZ]Ô
ÊJK™Ù]
JNÚYŠ\[ÙˆÏH‰‰œOOH™XÛ[™HŠ^Û]Ï\Ô
K›X[šY™\Ý™\œÚ[Û‹
NÚYŠÓ™Y˜][›
ËÊJ]›ÝÈ™]ÈÝ
Ø[‰Ý[\H™\œÚ[ÛˆÈÛ™H]ÛÝ[™HÝÙ\ˆ[ˆHÝ\œ™[Y™\œ™YÛ™H
	ÐßJX
__[]X]ØZ]ÌJËØ[ÝÑ[\NˆLJNÜ™]\›ˆœ™[X\Ù\ËœÙ]
K
K]ØZ]œØ]™P[

KÌ˜]ØZ]\Ë˜ÛKœ[ŠÈ™\œÚ[Ûˆ‹˜\H—J__NÝ˜\ˆÝ^ØÛÛ™šYÝ\˜][ÛŽžÙY™\œ™Y™\œÚ[Û‘›Û\ŽžÙ\ØÜš\[ÛŽˆ‘›Û\ˆÚ\™H\™HÝÜ™YH™\œÚ[Ûš[™Èš[\È‹\NˆP”ÓÓUWÔU‹Y˜][ˆ‹‹ËžX\›‹Ý™\œÚ[ÛœÈŸK™Y™\‘Y™\œ™Y™\œÚ[ÛœÎžÙ\ØÜš\[ÛŽˆ’YˆYK[›š[™ÈX\›ˆ™\œÚ[Û˜Ú[\ÜÝ[YHHKYY™\œ™Y›YÈ[›\ÜÈKZ[[YYX]X\ÈÙ]‹\Nˆ“ÓÓPSˆ‹Y˜][ˆL__KÛÛ[X[™Î–ÓLKLKÌW_KÔÝ^ÝÝ˜\ˆR^ßNÖ]
R‹ÕÛÜšÜÜXÙ\Ñ›ØÝ\ÐÛÛ[X[™Š
OO’KÛÜšÜÜXÙ\Ñ›Ü™XXÚÛÛ[X[™Š
OO‘ÌKY˜][Š
OO•ÝJNÜYJ
NÜYJ
NÕ

NÝ˜\ˆOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\ËšœÛÛZK›ÛÛX[Š‹KZœÛÛˆ‹LKÙ\ØÜš\[ÛŽˆ‘›Ü›X]HÝ]]\È[ˆ‘”ÓÓˆÝ™X[HŸJNÝ\Ëœ›ÙXÝ[ÛZK›ÛÛX[Š‹K\›ÙXÝ[Ûˆ‹LKÙ\ØÜš\[ÛŽˆ“Û›H[œÝ[™YÝ[\ˆ\[™[˜ÚY\ÈžHÛZ][™È]ˆ\[™[˜ÚY\ÈŸJNÝ\Ë˜[ZK›ÛÛX[Š‹PKKX[‹LKÙ\ØÜš\[ÛŽˆ’[œÝ[H[\™H›Ú™XÝŸJNÝ\ËÛÜšÜÜXÙ\ÏZK”™\Ý

_\Ý]XÞÝ\Ëœ]ÏVÖÈÛÜšÜÜXÙ\È‹™›ØÝ\È—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ•ÛÜšÜÜXÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆš[œÝ[HÚ[™ÛHÛÜšÜÜXÙH[™]È\[™[˜ÚY\È‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[[ˆ[ˆ[œÝ[\ÈYˆHÜXÚYšYYÛÜšÜÜXÙ\È
[™[Ý\ˆÛÜšÜÜXÙ\È^H\[™ÛŠHÙ\™HHÛ›HÛ™\È[ˆH›Ú™XÝˆYˆ›ÈÛÜšÜÜXÙ\È\™H^XÚ]H\ÝYHXÝ]™HÛ™HÚ[™H\ÜÝ[YY——ˆ›ÝH]\ÈÛÛ[X[™\ÈÛ›H™\žH[Ù\˜][H\ÙY[Ú[ˆ\Ú[™È™\›ËZ[œÝ[ËÚ[˜ÙHHØXÚHÚ[ÛÛZ[ˆ[HXÚØYÙ\È[ž]Ø^HHYX[š[™È]HÛ›HY™™\™[˜ÙH™]ÙY[ˆH[[œÝ[[™H›ØÝ\ÙY[œÝ[ÛÝ[\Ý™HH™]È^˜H[™\È[ˆHœœ˜ÚœØš[K]HÛÜÝÙˆ[›ÙXÚ[™È[ˆ^˜HÛÛ\^]K——ˆYˆHPKKX[›YÈ\ÈÙ]H[\™H›Ú™XÝÚ[™H[œÝ[YˆÛÛXš[™HÚ]K\›ÙXÝ[Û˜È™\XØ]HHÛX\›ˆ[œÝ[K\›ÙXÝ[Û˜—ˆŸJ_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
KX]ØZ]œ‹™š[™
ŠNØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]JÜ™\ÝÜ™T™\ÛÛ][ÛœÎˆL_JNÛ]ÎÚYŠ\Ë˜[
XÏ[™]ÈÙ]
ËÛÜšÜÜXÙ\ÊNÙ[ÙHYŠ\ËÛÜšÜÜXÙ\Ë›[™ÝOOL
^ÚYŠXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØÏ[™]ÈÙ]
ØWJ_Y[ÙHÏ[™]ÈÙ]
\ËÛÜšÜÜXÙ\Ë›X\
OœË™Ù]ÛÜšÜÜXÙPžRY[
‹œ\œÙRY[
ŠJJJNÙ›ÜŠ]ˆÙˆÊY›ÜŠ]Ùˆ\Ëœ›ÙXÝ[ÛÖÈ™\[™[˜ÚY\È—N•]š\™\[™[˜ÚY\ÊY›ÜŠ]Ùˆ‹›X[šY™\Ý™Ù]›Ü”ØÛÜJ
K˜[Y\Ê
J^Û]O\ËžUÛÜšÜÜXÙPžQ\ØÜš\ÜŠ
NÑHOO[[	‰˜Ë˜Y
J_Y›ÜŠ]ˆÙˆËÛÜšÜÜXÙ\ÊXËš\ÊŠOÝ\Ëœ›ÙXÝ[Û‰‰™‹›X[šY™\Ý™]‘\[™[˜ÚY\Ë˜ÛX\Š
NŠ‹›X[šY™\Ýš[œÝ[ÛÛ™šYÏY‹›X[šY™\Ýš[œÝ[ÛÛ™šYßßK‹›X[šY™\Ýš[œÝ[ÛÛ™šYËœÙ[”™Y™\™[˜Ù\ÏHLK‹›X[šY™\Ý™\[™[˜ÚY\Ë˜ÛX\Š
K‹›X[šY™\Ý™]‘\[™[˜ÚY\Ë˜ÛX\Š
K‹›X[šY™\ÝœY\‘\[™[˜ÚY\Ë˜ÛX\Š
K‹›X[šY™\ÝœØÜš\Ë˜ÛX\Š
JNÜ™]\›ˆ]ØZ]Ëš[œÝ[Ú]™]Ô™\Ü
ÚœÛÛŽ\ËšœÛÛ‹ÝÝ]\Ë˜ÛÛ^œÝÝ]KØØXÚN›‹\œÚ\Ý›Ú™XÝˆL_J__NÜYJ
NÜYJ
NÜYJ
NÕ

NÝ˜\ˆŒOY]
›Ê
JKOY]
™

JNÝ[

NÝ˜\ˆÌOXÛ\ÜÈ^[™È]ØÛÛœÝXÝÜŠ
^ÜÝ\\Š‹‹˜\™Ý[Y[ÊNÝ\Ë™œ›ÛOZK\œ˜^J‹KYœ›ÛH‹Ù\ØÜš\[ÛŽˆ[ˆ\œ˜^HÙˆÛØˆ]\›ˆY[ÈÜˆ]Èœ›ÛHÚXÚÈ˜\ÙH[žH™XÝ\œÚ[ÛˆŸJNÝ\Ë˜[ZK›ÛÛX[Š‹PKKX[‹Ù\ØÜš\[ÛŽˆ”[ˆHÛÛ[X[™Ûˆ[ÛÜšÜÜXÙ\ÈÙˆH›Ú™XÝŸJNÝ\Ëœ™XÝ\œÚ]™OZK›ÛÛX[Š‹T‹K\™XÝ\œÚ]™H‹Ù\ØÜš\[ÛŽˆ”[ˆHÛÛ[X[™ÛˆHÝ\œ™[ÛÜšÜÜXÙH[™[Ùˆ]È™XÝ\œÚ]™H\[™[˜ÚY\ÈŸJNÝ\ËÛÜšÝ™YOZK›ÛÛX[Š‹UËK]ÛÜšÝ™YH‹Ù\ØÜš\[ÛŽˆ”[ˆHÛÛ[X[™Ûˆ[ÛÜšÜÜXÙ\ÈÙˆHÝ\œ™[ÛÜšÝ™YHŸJNÝ\Ë™\˜›ÜÙOZKÛÝ[\Š‹]‹K]™\˜›ÜÙH‹Ù\ØÜš\[ÛŽˆ’[˜Ü™X\ÙH]™[ÙˆÙÙÚ[™È™\˜›ÜÚ]H\Èˆ[Y\ÈŸJNÝ\Ëœ\˜[[ZK›ÛÛX[Š‹\K\\˜[[‹LKÙ\ØÜš\[ÛŽˆ”[ˆHÛÛ[X[™È[ˆ\˜[[ŸJNÝ\Ëš[\›XÙYZK›ÛÛX[Š‹ZKKZ[\›XÙY‹LKÙ\ØÜš\[ÛŽˆ”š[HÝ]]ÙˆÛÛ[X[™È[ˆ™X[][YH[œÝXYÙˆY™™\š[™È]ŸJNÝ\Ëš›ØœÏZK”Ýš[™Ê‹Z‹KZ›ØœÈ‹Ù\ØÜš\[ÛŽˆ•HX^[][H[X™\ˆÙˆ\˜[[\ÚÜÈ]H^XÝ][ÛˆÚ[™H[Z]YÎÈÜˆ[›[Z]Y‹˜[Y]ÜŽ‰JÚÜÊÈ[›[Z]Y—JKÐŠJ
KÝÊ
KWÊJWJWJ_JNÝ\ËÜÛÙÚXØ[ZK›ÛÛX[Š‹]K]ÜÛÙÚXØ[‹LKÙ\ØÜš\[ÛŽˆ”[ˆHÛÛ[X[™Y\ˆ[ÛÜšÜÜXÙ\È]\[™ÈÛˆ
™YÝ[\ŠH]™Hš[š\ÚYŸJNÝ\ËÜÛÙÚXØ[]ZK›ÛÛX[Š‹K]ÜÛÙÚXØ[Y]ˆ‹LKÙ\ØÜš\[ÛŽˆ”[ˆHÛÛ[X[™Y\ˆ[ÛÜšÜÜXÙ\È]\[™ÈÛˆ
™YÝ[\ˆ
È]ŠH]™Hš[š\ÚYŸJNÝ\Ëš[˜ÛYOZK\œ˜^J‹KZ[˜ÛYH‹×KÙ\ØÜš\[ÛŽˆ[ˆ\œ˜^HÙˆÛØˆ]\›ˆY[ÈÜˆ]ÎÈÛ›HX]Ú[™ÈÛÜšÜÜXÙ\ÈÚ[™H˜]™\œÙYŸJNÝ\Ë™^ÛYOZK\œ˜^J‹KY^ÛYH‹×KÙ\ØÜš\[ÛŽˆ[ˆ\œ˜^HÙˆÛØˆ]\›ˆY[ÈÜˆ]ÎÈX]Ú[™ÈÛÜšÜÜXÙ\ÈÛÛ‰Ý™H˜]™\œÙYŸJNÝ\ËœX›XÓÛ›OZK›ÛÛX[Š‹K[›Ë\š]˜]H‹Ù\ØÜš\[ÛŽˆ]›ÚY[›š[™ÈHÛÛ[X[™Ûˆš]˜]HÛÜšÜÜXÙ\ÈŸJNÝ\ËœÚ[˜ÙOZK”Ýš[™Ê‹K\Ú[˜ÙH‹Ù\ØÜš\[ÛŽˆ“Û›H[˜ÛYHÛÜšÜÜXÙ\È]]™H™Y[ˆÚ[™ÙYÚ[˜ÙHHÜXÚYšYY™Y‹ˆ‹Û\˜]P›ÛÛX[ŽˆLJNÝ\Ë™žT[ZK›ÛÛX[Š‹[‹KYžK\[ˆ‹Ù\ØÜš\[ÛŽˆ”š[HÛÛ[X[™È]ÛÝ[™H[‹Ú]Ý]XÝX[H[›š[™È[HŸJNÝ\Ë˜ÛÛ[X[™˜[YOZK”Ýš[™Ê
NÝ\Ë˜\™ÜÏZK”›ÞJ
_\Ý]XÞÝ\Ëœ]ÏVÖÈÛÜšÜÜXÙ\È‹™›Ü™XXÚ—W_\Ý]XÞÝ\Ë\ØYÙOX]•\ØYÙJØØ]YÛÜžNˆ•ÛÜšÜÜXÙK\™[]YÛÛ[X[™È‹\ØÜš\[ÛŽˆœ[ˆHÛÛ[X[™Ûˆ[ÛÜšÜÜXÙ\È‹]Z[Îˆ—ˆ\ÈÛÛ[X[™Ú[[ˆHÚ]™[ˆÝX‹XÛÛ[X[™ÛˆÝ\œ™[[™[]È\ØÙ[™[ÛÜšÜÜXÙ\Ëˆ˜\š[Ý\È›YÜÈØ[ˆ[\ˆH^XÝ™Z]š[ÜˆÙˆHÛÛ[X[™——ˆHYˆ\K\\˜[[\ÈÙ]HÛÛ[X[™ÈÚ[™H˜[ˆ[ˆ\˜[[È^IÛžHY˜][™H[Z]YÈH[X™\ˆÙˆ\˜[[\ÚÜÈ›ÝYÚH\]X[È[ˆ[Ý\ˆÛÜ™H[X™\‹]]Ø[ˆ™HÝ™\œšY[ˆšXHZ‹KZ›ØœØÜˆ\ØX›YžHÙ][™ÈZˆ[›[Z]Y——ˆHYˆ\K\\˜[[[™ZKKZ[\›XÙY\™H›ÝÙ]X\›ˆÚ[š[H[™\Èœ›ÛHHÝ]]\È]™XÙZ]™\È[KˆYˆZKKZ[\›XÙYØ\Û‰ÝÙ]]ÛÝ[[œÝXYY™™\ˆHÝ]]œ›ÛHXXÚ›ØÙ\ÜÈ[™š[H™\Ý[[™ÈY™™\œÈÛ›HY\ˆZ\ˆÛÝ\˜ÙH›ØÙ\ÜÙ\È]™H^]Y——ˆHYˆ]K]ÜÛÙÚXØ[\ÈÙ]X\›ˆÚ[Û›H[ˆHÛÛ[X[™Y\ˆ[ÛÜšÜÜXÙ\È]]\[™ÈÛˆ›ÝYÚH\[™[˜ÚY\ØšY[]™HÝXØÙ\ÜÙ[Hš[š\ÚY^XÝ][™ËˆYˆK]ÜÛÙÚXØ[Y]˜\ÈÙ]›ÝH\[™[˜ÚY\Ø[™]‘\[™[˜ÚY\ØšY[ÈÚ[™HÛÛœÚY\™YÚ[ˆšYÝ\š[™ÈÝ]HØZ]Ú[Ë——ˆHYˆPKKX[\ÈÙ]X\›ˆÚ[[ˆHÛÛ[X[™Ûˆ[HÛÜšÜÜXÙ\ÈÙˆH›Ú™XÝ——ˆHYˆT‹K\™XÝ\œÚ]™X\ÈÙ]X\›ˆÚ[š[™ÛÜšÜÜXÙ\ÈÈ[ˆHÛÛ[X[™ÛˆžH™XÝ\œÚ]™[H]˜[X][™È\[™[˜ÚY\Ø[™]‘\[™[˜ÚY\ØšY[Ë[œÝXYÙˆÛÚÚ[™È]HÛÜšÜÜXÙ\ØšY[Ë——ˆHYˆUËK]ÛÜšÝ™YX\ÈÙ]X\›ˆÚ[š[™ÛÜšÜÜXÙ\ÈÈ[ˆHÛÛ[X[™ÛˆžHÛÚÚ[™È]HÝ\œ™[ÛÜšÝ™YK——ˆHYˆKYœ›ÛX\ÈÙ]X\›ˆÚ[\ÙHHXÚØYÙ\ÈX]Ú[™ÈH	Ùœ›ÛIÈÛØˆ\ÈHÝ\[™ÈÚ[›Üˆ[žH™XÝ\œÚ]™HÙX\˜Ú——ˆHYˆK\Ú[˜ÙX\ÈÙ]X\›ˆÚ[Û›H[ˆHÛÛ[X[™ÛˆÛÜšÜÜXÙ\È]]™H™Y[ˆ[ÙYšYYÚ[˜ÙHHÜXÚYšYY™Y‹ˆžHY˜][X\›ˆÚ[\ÙHH™YœÈÜXÚYšYYžHHÚ[™Ù\Ù]˜\ÙT™YœØÛÛ™šYÝ\˜][ÛˆÜ[Û‹——ˆHYˆKYžK\[˜\ÈÙ]X\›ˆÚ[^Z[ˆÚ]]ÛÝ[ÈÚ]Ý]XÝX[HÚ[™È[ž][™Ë——ˆHHÛÛ[X[™X^H\HÈÛ›HÛÛYHÛÜšÜÜXÙ\È›ÝYÚH\ÙHÙˆKZ[˜ÛYXÚXÚXÝÈ\ÈHÚ][\ÝˆHKY^ÛYX›YÈÚ[ÈHÜÜÚ]H[™Ú[™HH\ÝÙˆXÚØYÙ\È]]\Ý‰Ý^XÝ]HHØÜš\ˆ›Ý›YÜÈXØÙ\ÛØˆ]\›œÈ
Yˆ˜[YY[È[™Ý\ÜYžHÛZXÜ›ÛX]ÚJÎ‹ËÙÚ]X‹˜ÛÛKÛZXÜ›ÛX]ÚÛZXÜ›ÛX]Ú
JKˆXZÙHÝ\™HÈ\ØØ\HH]\›œËÈ™]™[[Ý\ˆÝÛˆÚ[œ›ÛHžZ[™ÈÈ^[™[Kˆ[ÝHØ[ˆ[ÛÈ\ÙHHK[›Ë\š]˜]X›YÈÈ]›ÚY[›š[™ÈHÛÛ[X[™[ˆš]˜]HÛÜšÜÜXÙ\Ë——ˆH]‹K]™\˜›ÜÙX›YÈØ[ˆ™H\ÜÙY\ÈÚXÙNˆÛ˜ÙHÈ™Yš^Ý]][™\ÈÚ]HÜšYÚ[˜][™ÈÛÜšÜÜXÙIÜÈ˜[YK[™YØZ[ˆÈ[˜ÛYHÝ\Ùš[š\ÚÝ[Z[™ÈÙÈ[™\ËˆX^[][H™\˜›ÜÚ]H\È[˜X›YžHY˜][[ˆ\›Z[˜[[š\›Û›Y[Ë——ˆYˆHÛÛ[X[™\È[˜[™HØÜš\™Z[™È[ˆÙ\È›Ý^\ÝHÚ[ÛÜšÜÜXÙHÚ[™HÚÚ\YÚ]Ý]\œ›Ü‹—ˆ‹^[\\Î–ÖÈ”X›\Ú[XÚØYÙ\È‹žX\›ˆÛÜšÜÜXÙ\È›Ü™XXÚPHK[›Ë\š]˜]HœHX›\ÚK]Û\˜]K\™\X›\Ú—KÈ”[ˆHZ[ØÜš\Ûˆ[\ØÙ[™[XÚØYÙ\È‹žX\›ˆÛÜšÜÜXÙ\È›Ü™XXÚPH[ˆZ[—KÈ”[ˆHZ[ØÜš\ÛˆÝ\œ™[[™[\ØÙ[™[XÚØYÙ\È[ˆ\˜[[Z[[™ÈXÚØYÙH\[™[˜ÚY\Èš\œÝ‹žX\›ˆÛÜšÜÜXÙ\È›Ü™XXÚP\[ˆZ[—KÈ”[ˆHZ[ØÜš\ÛˆÙ]™\˜[XÚØYÙ\È[™[Z\ˆ\[™[˜ÚY\ËZ[[™È\[™[˜ÚY\Èš\œÝ‹žX\›ˆÛÜšÜÜXÙ\È›Ü™XXÚTœKYœ›ÛH	ÞÝÛÜšÜÜXÙKXKÛÜšÜÜXÙKXŸIÈ[ˆZ[—W_J_\Ý]XÞÝ\ËœØÚ[XOVÖPŠ˜[‹™‹‘›Ü˜šYËÈ™œ›ÛH‹œ™XÝ\œÚ]™H‹œÚ[˜ÙH‹ÛÜšÝ™YH—KÛZ\ÜÚ[™ÒYŽˆ[™Yš[™YŸJK—ÊÈ˜[‹œ™XÝ\œÚ]™H‹œÚ[˜ÙH‹ÛÜšÝ™YH—KÛZ\ÜÚ[™ÒYŽˆ[™Yš[™YŸJW_X\Þ[˜È^XÝ]J
^Û]X]ØZ]™K™š[™
\Ë˜ÛÛ^˜ÝÙ\Ë˜ÛÛ^œYÚ[œÊKÜ›Ú™XÝœËÛÜšÜÜXÙN˜_OX]ØZ]™š[™
‹\Ë˜ÛÛ^˜ÝÙ
NÚYŠ]\Ë˜[	‰ˆXJ]›ÝÈ™]È\ŠË˜ÝÙ\Ë˜ÛÛ^˜ÝÙ
NØ]ØZ]Ëœ™\ÝÜ™R[œÝ[Ý]J
NÛ]]\Ë˜ÛKœ›ØÙ\ÜÊÝ\Ë˜ÛÛ[X[™˜[YK‹‹\Ë˜\™Ü×JKÏ[‹œ]›[™ÝOOLI‰›‹œ]ÌOOOHœ[ˆ‰‰\[Ùˆ‹œØÜš\˜[YOHÛ‹œØÜš\˜[YN›[ÚYŠ‹œ]›[™ÝOOL
]›ÝÈ™]ÈÝ
’[˜[YÝX˜ÛÛ[X[™˜[YH›Üˆ]\˜][ÛˆH\ÙHH	Ü[‰ÈÙ^]ÛÜ™Yˆ[ÝHÚ\ÚÈ^XÝ]HHØÜš\ŠNÛ]QYOOžÝ\Ë™žT[‰‰\Ë˜ÛÛ^œÝÝ]Üš]J	ÑY_B˜
_KJ
OOžÛ]YO]\Ë™œ›ÛK›X\
ÏOšŒK™Y˜][›X]Ú\ŠÊJNÜ™]\›ˆËÛÜšÜÜXÙ\Ë™š[\ŠÏOžÛ]ÙOZ‹œÝš[™ÚYžRY[
Ë˜[˜ÚÜ™YØØ]ÜŠK™OYËœ™[]]™PÝÙÜ™]\›ˆYKœÛÛYJYOO›YJÙJ_YJ™JJ_J_KV×NÚYŠ\ËœÚ[˜ÙOÊŠ“Ü[ÛˆK\Ú[˜ÙH\ÈÙ]ÈÙ[XÝ[™ÈHÚ[™ÙYÛÜšÜÜXÙ\È\È›ÛÝ›ÜˆÛÜšÜÜXÙHÙ[XÝ[ÛˆŠKP\œ˜^K™œ›ÛJ]ØZ]ØK™™]ÚÚ[™ÙYÛÜšÜÜXÙ\ÊÜ™YŽ\ËœÚ[˜ÙK›Ú™XÝœßJJJN\Ë™œ›ÛOÊŠ“Ü[ÛˆKYœ›ÛH\ÈÙ]ÈÙ[XÝ[™ÈHÜXÚYšYYÛÜšÜÜXÙ\ÈŠKVË‹‹œ

WJN\ËÛÜšÝ™YOÊŠ“Ü[ÛˆK]ÛÜšÝ™YH\ÈÙ]ÈÙ[XÝ[™ÈHÝ\œ™[ÛÜšÜÜXÙHŠKVØWJN\Ëœ™XÝ\œÚ]™OÊŠ“Ü[ÛˆK\™XÝ\œÚ]™H\ÈÙ]ÈÙ[XÝ[™ÈHÝ\œ™[ÛÜšÜÜXÙHŠKVØWJN\Ë˜[	‰ŠŠ“Ü[ÛˆKX[\ÈÙ]ÈÙ[XÝ[™È[ÛÜšÜÜXÙ\ÈŠKVË‹‹œËÛÜšÜÜXÙ\×JK\Ë™žT[‰‰ˆ]\Ë˜[
^Ù›ÜŠ]YHÙˆ
YŠ‹H	ÑYKœ™[]]™PÝÙBˆ	Ú‹œ™]SØØ]ÜŠ‹YK˜[˜ÚÜ™YØØ]ÜŠ_X
NÚ›[™ÝŒ	‰™ŠˆŠ_[]NÚYŠ\Ëœ™XÝ\œÚ]™OÝ\ËœÚ[˜ÙOÊŠ“Ü[ÛˆK\™XÝ\œÚ]™HK\Ú[˜ÙH\ÈÙ]È™XÝ\œÚ]™[HÙ[XÝ[™È[\[™[ÛÜšÜÜXÙ\ÈŠKO[™]ÈÙ]
›X\
YOO–Ë‹‹‘YK™Ù]™XÝ\œÚ]™UÛÜšÜÜXÙQ\[™[Ê
WJK™›]

JJNŠŠ“Ü[ÛˆK\™XÝ\œÚ]™H\ÈÙ]È™XÝ\œÚ]™[HÙ[XÝ[™È[˜[œÚ]]™H\[™[˜ÚY\ÈŠKO[™]ÈÙ]
›X\
YOO–Ë‹‹‘YK™Ù]™XÝ\œÚ]™UÛÜšÜÜXÙQ\[™[˜ÚY\Ê
WJK™›]

JJN\ËÛÜšÝ™YOÊŠ“Ü[ÛˆK]ÛÜšÝ™YH\ÈÙ]È™XÝ\œÚ]™[HÙ[XÝ[™È[™\ÝYÛÜšÜÜXÙ\ÈŠKO[™]ÈÙ]
›X\
YOO–Ë‹‹‘YK™Ù]™XÝ\œÚ]™UÛÜšÜÜXÙPÚ[™[Š
WJK™›]

JJN‘O[[HOO[[	‰ŠVË‹‹›™]ÈÙ]
Ë‹‹š‹‹‘WJWK\Ë™žT[ŠJY›ÜŠ]YHÙˆJYŠ‹H	ÑYKœ™[]]™PÝÙBˆ	Ú‹œ™]SØØ]ÜŠ‹YK˜[˜ÚÜ™YØØ]ÜŠ_X
NÛ]ÏV×KÏHLNÚYŠÏËš[˜ÛY\ÊŽˆŠJ^Ù›ÜŠ]YHÙˆËÛÜšÜÜXÙ\ÊZYŠYK›X[šY™\ÝœØÜš\Ëš\ÊÊI‰ŠÏHTËÏOOHLJJXœ™XZßY›ÜŠ]YHÙˆ
^ÚYŠÉ‰ˆQYK›X[šY™\ÝœØÜš\Ëš\ÊÊI‰ˆTÉ‰ˆJ]ØZ]Û‹™Ù]ÛÜšÜÜXÙPXØÙ\ÜÚX›Pš[˜\šY\ÊYJJKš\ÊÊJ^ÙŠ^ÛY[™È	ÑYKœ™[]]™PÝÙH™XØ]\ÙH]Ù\Û‰Ý]™HH‰ØßHˆØÜš\
NØÛÛ[Y_ZYŠJÏOO\‹™[‹›œWÛY™XÞXÛWÙ]™[	‰‘YK˜ÝÙOOXK˜ÝÙ
J^ÚYŠ\Ëš[˜ÛYK›[™ÝŒ	‰ˆZŒK™Y˜][š\ÓX]Ú
‹œÝš[™ÚYžRY[
YK˜[˜ÚÜ™YØØ]ÜŠK\Ëš[˜ÛYJI‰ˆZŒK™Y˜][š\ÓX]Ú
YKœ™[]]™PÝÙ\Ëš[˜ÛYJJ^ÙŠ^ÛY[™È	ÑYKœ™[]]™PÝÙH™XØ]\ÙH]Ù\Û‰ÝX]ÚHKZ[˜ÛYHš[\˜
NØÛÛ[Y_ZYŠ\Ë™^ÛYK›[™ÝŒ	‰ŠŒK™Y˜][š\ÓX]Ú
‹œÝš[™ÚYžRY[
YK˜[˜ÚÜ™YØØ]ÜŠK\Ë™^ÛYJ_ŒK™Y˜][š\ÓX]Ú
YKœ™[]]™PÝÙ\Ë™^ÛYJJJ^ÙŠ^ÛY[™È	ÑYKœ™[]]™PÝÙH™XØ]\ÙH]X]Ú\ÈHKY^ÛYHš[\˜
NØÛÛ[Y_ZYŠ\ËœX›XÓÛ›I‰‘YK›X[šY™\Ýœš]˜]OOOHL
^ÙŠ^ÛY[™È	ÑYKœ™[]]™PÝÙH™XØ]\ÙH]	ÜÈHš]˜]HÛÜšÜÜXÙH[™K[›Ë\š]˜]HØ\ÈÙ]
NØÛÛ[Y_PËœ\Ú
YJ__ZYŠËœÛÜ

YKÊOOš‹œÝš[™ÚYžRY[
YK˜[˜ÚÜ™YØØ]ÜŠK›ØØ[PÛÛ\\™J‹œÝš[™ÚYžRY[
Ë˜[˜ÚÜ™YØØ]ÜŠJJK\Ë™žT[Š\™]\›ˆÛ]]\Ë™\˜›ÜÙOÏÊ\Ë˜ÛÛ^œÝÝ]š\ÕOÌKÌŒ
KO^Œ^ŒKÏ]\Ëœ\˜[[Ý\Ëš›ØœÏOOH[›[Z]YÌKÌ“[X™\Š\Ëš›ØœÊ_X]˜ÙZ[
ZK˜]˜Z[X›T\˜[[\ÛJ
KÌŠNŒKOSÏOOLOÈLN\Ëœ\˜[[OUOÝ\Ëš[\›XÙYˆLOJK™Y˜][
JÊKYO[™]ÈX\YO[™]ÈÙ]YOLO[[YOHLKÙOX]ØZ]ÝœÝ\
ØÛÛ™šYÝ\˜][ÛŽœ‹ÝÝ]\Ë˜ÛÛ^œÝÝ][˜ÛYT™Yš^ˆL_K\Þ[˜ÈYOOžÛ]ÏX\Þ[˜ÊÙKØÛÛ[X[™[™^™_JOOžÚYŠYJ\™]\›‹LNÈUI‰•	‰™OŒI‰‘YKœ™\ÜÙ\\˜]ÜŠ
NÛ]YOTTÝ
ÙKØÛÛ™šYÝ\˜][ÛŽœ‹X™[’KÛÛ[X[™[™^™_JKØÙKOYTJYKÜ™Yš^›YK[\›XÙY–_JKÑKYWOYTJYKÜ™Yš^›YK[\›XÙY–_JNÝž^Õ	‰‘YKœ™\Ü[™›Ê[	ÛYOØ	ÛY_HˆˆŸT›ØÙ\ÜÈÝ\Y
NÛ]]Q]K››ÝÊ
KÏX]ØZ]\Ë˜ÛKœ[ŠÝ\Ë˜ÛÛ[X[™˜[YK‹‹\Ë˜\™Ü×KØÝÙ”ÙK˜ÝÙÝÝ]˜ÙKÝ\œŽ‘_J_ØÙK™[™

KK™[™

K]ØZ]]ØZ]YNÛ]Q]K››ÝÊ
NÚYŠ
^Û]™O\‹™Ù]
™[˜X›U[Y\œÈŠOØÛÛ\]Y[ˆ	ÜKœ™]J‹Z]K•\K‘TUSÓŠ_XˆˆŽÑYKœ™\Ü[™›Ê[	ÛYOØ	ÛY_HˆˆŸT›ØÙ\ÜÈ^]Y
^]ÛÙH	×ßJIÓ™_X
_\™]\›ˆÏOOLLÌ	‰ŠYOHLOWÊKßXØ]Ú
]
^Ý›ÝÈÙK™[™

KK™[™

K]ØZ]]ØZ]YK]_NÙ›ÜŠ]ÙHÙˆÊZYKœÙ]
ÙK˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\ÚÙJNÙ›ÜŠÚYKœÚ^™OŒ	‰ˆQYKš\Ñ\œ›ÜœÊ
NÊ^Û]ÙOV×NÙ›ÜŠ]ÖW[ÙˆYJ^ÚYŠYKš\ÊK˜[˜ÚÜ™Y\ØÜš\Ü‹™\ØÜš\Ü’\Ú
JXÛÛ[YNÛ]YOHLÚYŠ\ËÜÛÙÚXØ[\ËÜÛÙÚXØ[]Š^Û]]]\ËÜÛÙÚXØ[]Û™]ÈX\
Ë‹‹‘K›X[šY™\Ý™\[™[˜ÚY\Ë‹‹‘K›X[šY™\Ý™]‘\[™[˜ÚY\×JN‘K›X[šY™\Ý™\[™[˜ÚY\ÎÙ›ÜŠ]ÈÙˆ]˜[Y\Ê
J^Û]\ËžUÛÜšÜÜXÙPžQ\ØÜš\ÜŠÊNÚYŠYO]OO[[ZYKš\Ê˜[˜ÚÜ™YØØ]Ü‹›ØØ]Ü’\Ú
KTYJXœ™XZß_ZYŠYI‰ŠYK˜Y
K˜[˜ÚÜ™Y\ØÜš\Ü‹™\ØÜš\Ü’\Ú
KÙKœ\Ú
J\Þ[˜Ê
OOžÛ]]X]ØZ]ÊKØÛÛ[X[™[™^ŠÊØY_JNÜ™]\›ˆYK™[]J
KYK™[]JK˜[˜ÚÜ™Y\ØÜš\Ü‹™\ØÜš\Ü’\Ú
KÝÛÜšÜÜXÙN‘K^]ÛÙNš]_JJKUJJXœ™XZßZYŠÙK›[™ÝOOL
^Û]P\œ˜^K™œ›ÛJYK˜[Y\Ê
JK›X\
OOš‹œ™]SØØ]ÜŠ‹K˜[˜ÚÜ™YØØ]ÜŠJKš›Ú[Š‹ŠNÑYKœ™\Ü\œ›ÜŠË\[™[˜ÞHÞXÛH]XÝY
	ÖJX
NÜ™]\›Ÿ[]™OX]ØZ]›ÛZ\ÙK˜[
ÙJNÐ™K™›Ü‘XXÚ

ÝÛÜšÜÜXÙN–^]ÛÙN‘_JOOžÑHOOL	‰‘YKœ™\Ü\œ›ÜŠHÛÛ[X[™˜Z[Y[ˆÛÜšÜÜXÙH	Ú‹œ™]SØØ]ÜŠ‹˜[˜ÚÜ™YØØ]ÜŠ_HÚ]^]ÛÙH	Ñ_X
_JNÛ]ÙOP™K›X\
O–™^]ÛÙJK™š[™
O–OOL
NÊ\ËÜÛÙÚXØ[\ËÜÛÙÚXØ[]ŠI‰\[ÙˆÙOH‰‰‘YKœ™\Ü\œ›ÜŠ•HÛÛ[X[™˜Z[Y›ÜˆÛÜšÜÜXÙ\È]\™H\[™Y\ÛˆžHÝ\ˆÛÜšÜÜXÙ\ÎÈØ[‰ÝØ]\ÙžHH\[™[˜ÞHÜ˜\Š__JNÜ™]\›ˆHOO[[ÙNÙK™^]ÛÙJ
__NÙ[˜Ý[ÛˆTJKÜ™Yš^[\›XÙYœŸJ^Û]ÏYK˜Ü™X]TÝ™X[T™\Ü\Š
KO[™]ÈÙK‘Y˜][Ý™X[NØKœ\JËÙ[™ˆL_JKK›ÛŠ™š[š\Ú‹

OOžÜË™[™

_JNÛ][™]È›ÛZ\ÙJOžÜË›ÛŠ™š[š\Ú‹

OOžÙŠK˜XÝ]™J_J_JNÚYŠŠ\™]\›–ØK—NÛ]Ï[™]ÈÙKY™™\”Ý™X[NÜ™]\›ˆËœ\JKÙ[™ˆL_JKË›ÛŠ™š[š\Ú‹

OOžØK™[™

_JKØË—_Y[˜Ý[ÛˆTÝ
KØÛÛ™šYÝ\˜][ÛŽÛÛ[X[™[™^œ‹X™[œßJ^ÚYŠ\Ê\™]\›ˆ[Û]XÉÚ‹œÝš[™ÚYžRY[
K˜[˜ÚÜ™YØØ]ÜŠ_WN˜ÏVÈˆÌ‘NPˆ‹ˆÐLŒÐÌˆ‹ˆÑŒNŒH‹ˆÐÍÌÑLQ‹ˆÐÐÑLLÈ—KXÖÜ‰XË›[™ÝNÜ™]\›ˆKœ™]J‹Š_]˜\ˆ”Ý^ØÛÛ[X[™Î–ÒKÌW_KÝT”ÝÝ˜\ˆ’OJ
OOŠÛ[Ù[\Î›™]ÈX\
ÖÈX\›œÙËØÛH‹Ý—KÈX\›œÙËØÛÜ™H‹—KÈX\›œÙËÙœÛXˆ‹—KÈX\›œÙËÛXžš\‹—KÈX\›œÙËÜ\œÙ\œÈ‹Ð—KÈX\›œÙËÜÚ[‹Ý—KÈ˜Û\[š[Ûˆ‹—KÈœÙ[]™\ˆ‹”ÝKÈ\[š[Ûˆ‹[×KÈX\›œÙËÜYÚ[‹Y\ÜÙ[X[È‹MWKÈX\›œÙËÜYÚ[‹XØ][ÙÈ‹WKÈX\›œÙËÜYÚ[‹XÛÛ\]‹ÍWKÈX\›œÙËÜYÚ[‹XÛÛœÝ˜Z[È‹œWKÈX\›œÙËÜYÚ[‹Y‹\WKÈX\›œÙËÜYÚ[‹Y^XÈ‹\WKÈX\›œÙËÜYÚ[‹Yš[H‹ÜWKÈX\›œÙËÜYÚ[‹YÚ]‹ÍWKÈX\›œÙËÜYÚ[‹YÚ]Xˆ‹\WKÈX\›œÙËÜYÚ[‹Z‹WKÈX\›œÙËÜYÚ[‹Z[š]‹WKÈX\›œÙËÜYÚ[‹Z[\˜XÝ]™K]ÛÛÈ‹•×KÈX\›œÙËÜYÚ[‹ZœÜˆ‹×KÈX\›œÙËÜYÚ[‹[[šÈ‹×KÈX\›œÙËÜYÚ[‹[›H‹•×KÈX\›œÙËÜYÚ[‹[œH‹’×KÈX\›œÙËÜYÚ[‹[œKXÛH‹R—KÈX\›œÙËÜYÚ[‹\XÚÈ‹U—KÈX\›œÙËÜYÚ[‹\]Ú‹—KÈX\›œÙËÜYÚ[‹\œ‹U×KÈX\›œÙËÜYÚ[‹\œH‹R—KÈX\›œÙËÜYÚ[‹\ÝYÙH‹’—KÈX\›œÙËÜYÚ[‹]\\ØÜš\‹Ò—KÈX\›œÙËÜYÚ[‹]™\œÚ[Ûˆ‹Ò—KÈX\›œÙËÜYÚ[‹]ÛÜšÜÜXÙK]ÛÛÈ‹R—WJKYÚ[œÎ›™]ÈÙ]
ÈX\›œÙËÜYÚ[‹Y\ÜÙ[X[È‹X\›œÙËÜYÚ[‹XØ][ÙÈ‹X\›œÙËÜYÚ[‹XÛÛ\]‹X\›œÙËÜYÚ[‹XÛÛœÝ˜Z[È‹X\›œÙËÜYÚ[‹Y‹X\›œÙËÜYÚ[‹Y^XÈ‹X\›œÙËÜYÚ[‹Yš[H‹X\›œÙËÜYÚ[‹YÚ]‹X\›œÙËÜYÚ[‹YÚ]Xˆ‹X\›œÙËÜYÚ[‹Z‹X\›œÙËÜYÚ[‹Z[š]‹X\›œÙËÜYÚ[‹Z[\˜XÝ]™K]ÛÛÈ‹X\›œÙËÜYÚ[‹ZœÜˆ‹X\›œÙËÜYÚ[‹[[šÈ‹X\›œÙËÜYÚ[‹[›H‹X\›œÙËÜYÚ[‹[œH‹X\›œÙËÜYÚ[‹[œKXÛH‹X\›œÙËÜYÚ[‹\XÚÈ‹X\›œÙËÜYÚ[‹\]Ú‹X\›œÙËÜYÚ[‹\œ‹X\›œÙËÜYÚ[‹\œH‹X\›œÙËÜYÚ[‹\ÝYÙH‹X\›œÙËÜYÚ[‹]\\ØÜš\‹X\›œÙËÜYÚ[‹]™\œÚ[Ûˆ‹X\›œÙËÜYÚ[‹]ÛÜšÜÜXÙK]ÛÛÈ—J_JNÙ[˜Ý[ÛˆTJØÝÙ™KYÚ[ÛÛ™šYÝ\˜][ÛŽJ^Û][™]È˜JØš[˜\žSX™[ˆ–X\›ˆXÚØYÙHX[˜YÙ\ˆ‹š[˜\žS˜[YNˆžX\›ˆ‹š[˜\žU™\œÚ[ÛŽ[ÏÈ[šÛ›ÝÛˆŸJNÜ™]\›ˆØš™XÝ˜\ÜÚYÛŠ‹ÙY˜][ÛÛ^žË‹‹˜K™Y˜][ÛÛ^ÝÙ™KYÚ[œÎ]ZY]ˆLKÝ[Žœ›ØÙ\ÜËœÝ[‹ÝÝ]œ›ØÙ\ÜËœÝÝ]Ý\œŽœ›ØÙ\ÜËœÝ\œŸ_J_Y[˜Ý[Ûˆ”Ý
J^ÚYŠÙKœ\œÙSÜ[Û˜[›ÛÛX[Š›ØÙ\ÜË™[‹–PT“—ÒQÓ“Ô‘WÓ“ÑJJ\™]\›ˆLÛ]\›ØÙ\ÜË™\œÚ[ÛœË››ÙKÏHLNŒL‹ŒŽÚYŠœ‹œØ]\ÙšY\ÕÚ]™\™[X\Ù\Ê‹ÊJ\™]\›ˆLÛ]O[™]ÈÝ
\ÈÛÛ™\]Z\™\ÈH›ÙH™\œÚ[ÛˆÛÛ\]X›HÚ]	ÜßH
ÛÝ	ÜŸJKˆ\Ü˜YH›ÙKÜˆÙ]PT“—ÒQÓ“Ô‘WÓ“ÑOLW[ˆ[Ý\ˆ[š\›Û›Y[˜
NÜ™]\›ˆ˜K™Y˜][ÛÛ^œÝÝ]Üš]JK™\œ›ÜŠJJKL_X\Þ[˜È[˜Ý[ÛˆÔJÜÙ[”]™KYÚ[ÛÛ™šYÝ\˜][ÛŽJ^Ü™]\›ˆ]ØZ]™K™š[™
™KÔÜX›T]
›ØÙ\ÜË˜ÝÙ

JKÜÝšXÝˆLK\ÙT]ÚXÚÎ™_J_Y[˜Ý[ÛˆÔÝ
KÞX\›”]œŸJ^ÚYŠ[K™^\ÝÔÞ[˜ÊŠJ\™]\›ˆK™\œ›ÜŠ™]È\œ›ÜŠHžX\›‹\]ˆÜ[Ûˆ\È™Y[ˆÙ]]HÜXÚYšYYØØ][ÛˆÙ\Û‰Ý^\Ý
	ÜŸJK˜
JKNÜ›ØÙ\ÜË›ÛŠ”ÒQÒS•‹

OOžßJNÛ]Ï^ÜÝ[Îˆš[š\š]‹[ŽžË‹‹œ›ØÙ\ÜË™[‹PT“—ÒQÓ“Ô‘WÔUˆŒHŸ_NÝž^Ê”K™^XÑš[TÞ[˜ÊJ›ØÙ\ÜË™^XÔ]Ù™K™œ›ÛTÜX›T]
ŠK‹‹KÊ_XØ]Ú
J^Ü™]\›ˆKœÝ]\ÏÏÌ_\™]\›ˆY[˜Ý[ÛˆÝ
K
^Û][[Ï]Ü™]\›ˆ›[™ÝL‰‰ÌOOOH‹KXÝÙÊY™KÔÜX›T]
ÌWJKÏ]œÛXÙJŠJN›[™ÝLI‰ÌKœÝ\ÕÚ]
‹KXÝÙHŠOÊY™KÔÜX›T]
ÌKœÛXÙJŠJKÏ]œÛXÙJJJNÌOOOH˜Y‰‰Ý›[™ÝL—OOOH‹KXÝÙ‰‰ŠY™KÔÜX›T]
Ý›[™ÝLWJKÏ]œÛXÙJ›[™ÝLŠJKK™Y˜][ÛÛ^˜ÝÙ\ˆOO[[ÒËœ™\ÛÛ™JŠN’Ë˜ÝÙ

KßY[˜Ý[ÛˆTÝ
KØÛÛ™šYÝ\˜][ÛŽJ^ÚYŠ]™Ù]
™[˜X›U[[Y]žHŠ_”Kš\ÐÒ_\›ØÙ\ÜËœÝÝ]š\ÕJ\™]\›ŽÞ™K[[Y]žO[™]ÈÒJœX˜NXÙÌLXÍMÎLL˜ÙMŽYLØMÌÌŠNÛ]ÏK×X\›œÙ×ÜYÚ[‹JŠŠIÎÙ›ÜŠ]HÙˆœYÚ[œËšÙ^\Ê
J\RKš\ÊK›X]Ú
ÊOË–ÌWOÏÈˆŠI‰ž™K[[Y]žOËœ™\ÜYÚ[“˜[YJJNÙK˜š[˜\žU™\œÚ[Û‰‰ž™K[[Y]žKœ™\Ü™\œÚ[ÛŠK˜š[˜\žU™\œÚ[ÛŠ_Y[˜Ý[ÛˆÔJKØÛÛ™šYÝ\˜][ÛŽJ^Ù›ÜŠ]ˆÙˆœYÚ[œË˜[Y\Ê
JY›ÜŠ]ÈÙˆ‹˜ÛÛ[X[™ß×JYKœ™YÚ\Ý\ŠÊ_X\Þ[˜È[˜Ý[ÛˆTÝ
KÜÙ[”]œ‹YÚ[ÛÛ™šYÝ\˜][ÛŽœßJ^ÚYŠS”Ý
JJ\™]\›ˆNÛ]OX]ØZ]ÔJÜÙ[”]œ‹YÚ[ÛÛ™šYÝ\˜][ÛŽœßJKXK™Ù]
žX\›”]ŠKÏXK™Ù]
šYÛ›Ü™T]ŠNÚYŠ‰‰ˆXÊ\™]\›ˆÔÝ
KÞX\›”]›ŸJNÙ[]H›ØÙ\ÜË™[‹–PT“—ÒQÓ“Ô‘WÔUÛ]SÝ
K
NÓTÝ
KØÛÛ™šYÝ\˜][ÛŽ˜_JKÔJKØÛÛ™šYÝ\˜][ÛŽ˜_JNÛ]YKœ›ØÙ\ÜÊ‹K™Y˜][ÛÛ^
NÜ™]\›ˆš[™K[[Y]žOËœ™\ÜÛÛ[X[™˜[YJœ]š›Ú[ŠˆŠJK]ØZ]Kœ[ŠK™Y˜][ÛÛ^
_X\Þ[˜È[˜Ý[ÛˆJØÝÙ™ORË˜ÝÙ

KYÚ[ÛÛ™šYÝ\˜][ÛŽU’J
_O^ßJ^Û]ZTJØÝÙ™KYÚ[ÛÛ™šYÝ\˜][ÛŽJKÏX]ØZ]ÔJÜYÚ[ÛÛ™šYÝ\˜][ÛŽÙ[”]›[JNÜ™]\›ˆÔJ‹ØÛÛ™šYÝ\˜][ÛŽœßJKŸX\Þ[˜È[˜Ý[ÛˆU
KØÝÙRË˜ÝÙ

KÙ[”]œ‹YÚ[ÛÛ™šYÝ\˜][ÛŽœßJ^Û]OZTJØÝÙYÚ[ÛÛ™šYÝ\˜][ÛŽœßJNÙ[˜Ý[ÛˆŠ
^Ý˜K™Y˜][ÛÛ^œÝÝ]Üš]JT”“ÔŽˆX\›ˆ\È\›Z[˜][™ÈYHÈ[ˆ[™^XÝY[\H]™[ÛÜ‚”X\ÙH™\Ü\È\ÜÝYH]Î‹ËÙÚ]X‹˜ÛÛKÞX\›œÙËØ™\œžKÚ\ÜÝY\Ë˜
_\›ØÙ\ÜË›Û˜ÙJ˜™Y›Ü™Q^]‹ŠNÝž^Ü›ØÙ\ÜË™^]ÛÙOM‹›ØÙ\ÜË™^]ÛÙOX]ØZ]TÝ
KKÜÙ[”]œ‹YÚ[ÛÛ™šYÝ\˜][ÛŽœßJ_XØ]Ú
Ê^Ý˜K™Y˜][ÛÛ^œÝÝ]Üš]JK™\œ›ÜŠÊJK›ØÙ\ÜË™^]ÛÙOL_Yš[˜[^Ü›ØÙ\ÜË›Ù™Š˜™Y›Ü™Q^]‹ŠK]ØZ]Kœ›][\›ÛZ\ÙJ
__TU
›ØÙ\ÜË˜\™Ý‹œÛXÙJŠKØÝÙ’Ë˜ÝÙ

KÙ[”]™™KÔÜX›T]
™Kœ™\ÛÛ™J›ØÙ\ÜË˜\™Ý–ÌWJJKYÚ[ÛÛ™šYÝ\˜][ÛŽ•’J
_JNßJJ
NÂ‹ÊŠ‚ˆXÙ[œÙBˆÛÜ\šYÚ
ÊHŒMK™X™XØØH\›™\‚‚ˆ\›Z\ÜÚ[ÛˆÈ\ÙKÛÜK[ÙYžK[™ÛÜˆ\ÝšX]H\ÈÛÙØ\™H›Üˆ[žBˆ\œÜÙHÚ]ÜˆÚ]Ý]™YH\È\™XžHÜ˜[Y›ÝšYY]HX›Ý™BˆÛÜ\šYÚ›ÝXÙH[™\È\›Z\ÜÚ[Ûˆ›ÝXÙH\X\ˆ[ˆ[ÛÜY\Ë‚‚ˆHÓÑ•ÐT‘HTÈ“Õ’QQTÈTÈˆS‘HUUÔˆTÐÓRSTÈSÐT”S•QTÈÒUˆ‘QÐT‘ÈTÈÓÑ•ÐT‘HSÓQS‘ÈSSTQQÐT”S•QTÈÑˆQTÒS•P’SUHS‘ˆ’U‘TÔËˆSˆ“ÈU‘S•ÒSHUUÔˆ‘HPP“H“ÔˆS–HÔPÒPST‘PÕˆS‘T‘PÕÔˆÓÓ”ÑTUQS•PSSPQÑTÈÔˆS–HSPQÑTÈÒUÓÑU‘Tˆ‘TÕSS‘È”“ÓBˆÔÔÈÑˆTÑKUHÔˆ“Ñ’UËÒUTˆSˆSˆPÕSÓˆÑˆÓÓ•PÕ‘QÓQÑSÑHÔ‚ˆÕTˆÔ•SÕTÈPÕSÓ‹T’TÒS‘ÈÕUÑˆÔˆSˆÓÓ“‘PÕSÓˆÒUHTÑHÔ‚ˆT‘“Ô“PSÑHÑˆTÈÓÑ•ÐT‘K‚ˆ
‹Â‹ÊŠ‚ˆXÙ[œÙBˆÛÜ\šYÚ›ÙKšœÈÛÛšX]ÜœËˆ[šYÚÈ™\Ù\™Y‚‚ˆ\›Z\ÜÚ[Ûˆ\È\™XžHÜ˜[Yœ™YHÙˆÚ\™ÙKÈ[žH\œÛÛˆØZ[š[™ÈHÛÜBˆÙˆ\ÈÛÙØ\™H[™\ÜÛØÚX]YØÝ[Y[][Ûˆš[\È
H”ÛÙØ\™HŠKÂˆX[[ˆHÛÙØ\™HÚ]Ý]™\ÝšXÝ[Û‹[˜ÛY[™ÈÚ]Ý][Z]][ÛˆBˆšYÚÈÈ\ÙKÛÜK[ÙYžKY\™ÙKX›\Ú\ÝšX]KÝX›XÙ[œÙK[™ÛÜ‚ˆÙ[ÛÜY\ÈÙˆHÛÙØ\™K[™È\›Z]\œÛÛœÈÈÚÛHHÛÙØ\™H\Âˆ\›š\ÚYÈÈÛËÝXš™XÝÈH›ÛÝÚ[™ÈÛÛ™][ÛœÎ‚‚ˆHX›Ý™HÛÜ\šYÚ›ÝXÙH[™\È\›Z\ÜÚ[Ûˆ›ÝXÙHÚ[™H[˜ÛYY[‚ˆ[ÛÜY\ÈÜˆÝXœÝ[X[Ü[ÛœÈÙˆHÛÙØ\™K‚‚ˆHÓÑ•ÐT‘HTÈ“Õ’QQTÈTÈ‹ÒUÕUÐT”S•HÑˆS–HÒS‘V‘TÔÈÔ‚ˆSTQQSÓQS‘È•U“ÕSRUQÈHÐT”S•QTÈÑˆQTÒS•P’SUKˆ’U‘TÔÈ“ÔˆHT•PÕSTˆT”ÔÑHS‘“Ó’S‘”’S‘ÑSQS•ˆSˆ“ÈU‘S•ÒSBˆUUÔ”ÈÔˆÓÔT’QÒÓT”È‘HPP“H“ÔˆS–HÓRSKSPQÑTÈÔˆÕT‚ˆPP’SUKÒUTˆSˆSˆPÕSÓˆÑˆÓÓ•PÕÔ•ÔˆÕT•ÒTÑKT’TÒS‘Âˆ”“ÓKÕUÑˆÔˆSˆÓÓ“‘PÕSÓˆÒUHÓÑ•ÐT‘HÔˆHTÑHÔˆÕTˆPSS‘ÔÂˆSˆHÓÑ•ÐT‘K‚Š‹Â‹ÊŠ‚ˆXÙ[œÙBˆHRUXÙ[œÙH
RU
B‚ˆÛÜ\šYÚ
ÊHŒM›ZÙH[Xœ™^H
[Ð›ZÙY[Xœ™^K˜ÛÛJB‚ˆ\›Z\ÜÚ[Ûˆ\È\™XžHÜ˜[Yœ™YHÙˆÚ\™ÙKÈ[žH\œÛÛˆØZ[š[™ÈHÛÜBˆÙˆ\ÈÛÙØ\™H[™\ÜÛØÚX]YØÝ[Y[][Ûˆš[\È
H”ÛÙØ\™HŠKÈX[ˆ[ˆHÛÙØ\™HÚ]Ý]™\ÝšXÝ[Û‹[˜ÛY[™ÈÚ]Ý][Z]][ÛˆHšYÚÂˆÈ\ÙKÛÜK[ÙYžKY\™ÙKX›\Ú\ÝšX]KÝX›XÙ[œÙK[™ÛÜˆÙ[ˆÛÜY\ÈÙˆHÛÙØ\™K[™È\›Z]\œÛÛœÈÈÚÛHHÛÙØ\™H\Âˆ\›š\ÚYÈÈÛËÝXš™XÝÈH›ÛÝÚ[™ÈÛÛ™][ÛœÎ‚‚ˆHX›Ý™HÛÜ\šYÚ›ÝXÙH[™\È\›Z\ÜÚ[Ûˆ›ÝXÙHÚ[™H[˜ÛYY[‚ˆ[ÛÜY\ÈÜˆÝXœÝ[X[Ü[ÛœÈÙˆHÛÙØ\™K‚‚ˆHÓÑ•ÐT‘HTÈ“Õ’QQTÈTÈ‹ÒUÕUÐT”S•HÑˆS–HÒS‘V‘TÔÈÔ‚ˆSTQQSÓQS‘È•U“ÕSRUQÈHÐT”S•QTÈÑˆQTÒS•P’SUKˆ’U‘TÔÈ“ÔˆHT•PÕSTˆT”ÔÑHS‘“Ó’S‘”’S‘ÑSQS•ˆSˆ“ÈU‘S•ÒSBˆUUÔ”ÈÔˆÓÔT’QÒÓT”È‘HPP“H“ÔˆS–HÓRSKSPQÑTÈÔˆÕT‚ˆPP’SUKÒUTˆSˆSˆPÕSÓˆÑˆÓÓ•PÕÔ•ÔˆÕT•ÒTÑKT’TÒS‘È”“ÓKˆÕUÑˆÔˆSˆÓÓ“‘PÕSÓˆÒUHÓÑ•ÐT‘HÔˆHTÑHÔˆÕTˆPSS‘ÔÈS‚ˆHÓÑ•ÐT‘K‚Š‹Â‹ÊŠ‚ˆXÙ[œÙBˆÛÜ\šYÚ›ÞY[[˜Ëˆ[™Ý\ˆ›ÙHÛÛšX]ÜœË‚‚ˆ\›Z\ÜÚ[Ûˆ\È\™XžHÜ˜[Yœ™YHÙˆÚ\™ÙKÈ[žH\œÛÛˆØZ[š[™ÈBˆÛÜHÙˆ\ÈÛÙØ\™H[™\ÜÛØÚX]YØÝ[Y[][Ûˆš[\È
Bˆ”ÛÙØ\™HŠKÈX[[ˆHÛÙØ\™HÚ]Ý]™\ÝšXÝ[Û‹[˜ÛY[™ÂˆÚ]Ý][Z]][ÛˆHšYÚÈÈ\ÙKÛÜK[ÙYžKY\™ÙKX›\Úˆ\ÝšX]KÝX›XÙ[œÙK[™ÛÜˆÙ[ÛÜY\ÈÙˆHÛÙØ\™K[™È\›Z]ˆ\œÛÛœÈÈÚÛHHÛÙØ\™H\È\›š\ÚYÈÈÛËÝXš™XÝÈBˆ›ÛÝÚ[™ÈÛÛ™][ÛœÎ‚‚ˆHX›Ý™HÛÜ\šYÚ›ÝXÙH[™\È\›Z\ÜÚ[Ûˆ›ÝXÙHÚ[™H[˜ÛYYˆ[ˆ[ÛÜY\ÈÜˆÝXœÝ[X[Ü[ÛœÈÙˆHÛÙØ\™K‚‚ˆHÓÑ•ÐT‘HTÈ“Õ’QQTÈTÈ‹ÒUÕUÐT”S•HÑˆS–HÒS‘V‘TÔÂˆÔˆSTQQSÓQS‘È•U“ÕSRUQÈHÐT”S•QTÈÑ‚ˆQTÒS•P’SUK’U‘TÔÈ“ÔˆHT•PÕSTˆT”ÔÑHS‘“Ó’S‘”’S‘ÑSQS•ˆS‚ˆ“ÈU‘S•ÒSHUUÔ”ÈÔˆÓÔT’QÒÓT”È‘HPP“H“ÔˆS–HÓRSKˆSPQÑTÈÔˆÕTˆPP’SUKÒUTˆSˆSˆPÕSÓˆÑˆÓÓ•PÕÔ•Ô‚ˆÕT•ÒTÑKT’TÒS‘È”“ÓKÕUÑˆÔˆSˆÓÓ“‘PÕSÓˆÒUHÓÑ•ÐT‘HÔˆBˆTÑHÔˆÕTˆPSS‘ÔÈSˆHÓÑ•ÐT‘K‚Š‹Â‹ÊˆH[™YXÙ[œÙH[™›Ü›X][ÛŽ‚‚š\Ë[[X™\‹Ú[™^šœÎ‚ˆ

ˆBˆ
ˆ\Ë[[X™\ˆÎ‹ËÙÚ]X‹˜ÛÛKÚ›ÛœØÚ[šÙ\Ú\Ë[[X™\‚ˆ
‚ˆ
ˆÛÜ\šYÚ
ÊHŒM\™\Ù[›ÛˆØÚ[šÙ\‚ˆ
ˆ™[X\ÙY[™\ˆHRUXÙ[œÙK‚ˆ
ŠB‚Ë\™YÙ^\˜[™ÙKÚ[™^šœÎ‚ˆ

ˆBˆ
ˆË\™YÙ^\˜[™ÙHÎ‹ËÙÚ]X‹˜ÛÛKÛZXÜ›ÛX]ÚÝË\™YÙ^\˜[™ÙO‚ˆ
‚ˆ
ˆÛÜ\šYÚ
ÊHŒMK\™\Ù[›ÛˆØÚ[šÙ\‚ˆ
ˆ™[X\ÙY[™\ˆHRUXÙ[œÙK‚ˆ
ŠB‚™š[\˜[™ÙKÚ[™^šœÎ‚ˆ

ˆBˆ
ˆš[\˜[™ÙHÎ‹ËÙÚ]X‹˜ÛÛKÚ›ÛœØÚ[šÙ\Ùš[\˜[™ÙO‚ˆ
‚ˆ
ˆÛÜ\šYÚ
ÊHŒM\™\Ù[›ÛˆØÚ[šÙ\‚ˆ
ˆXÙ[œÙY[™\ˆHRUXÙ[œÙK‚ˆ
ŠB‚š\ËY^ÛØ‹Ú[™^šœÎ‚ˆ

ˆBˆ
ˆ\ËY^ÛØˆÎ‹ËÙÚ]X‹˜ÛÛKÚ›ÛœØÚ[šÙ\Ú\ËY^ÛØ‚ˆ
‚ˆ
ˆÛÜ\šYÚ
ÊHŒMLŒM‹›ÛˆØÚ[šÙ\‚ˆ
ˆXÙ[œÙY[™\ˆHRUXÙ[œÙK‚ˆ
ŠB‚š\ËYÛØ‹Ú[™^šœÎ‚ˆ

ˆBˆ
ˆ\ËYÛØˆÎ‹ËÙÚ]X‹˜ÛÛKÚ›ÛœØÚ[šÙ\Ú\ËYÛØ‚ˆ
‚ˆ
ˆÛÜ\šYÚ
ÊHŒMLŒMË›ÛˆØÚ[šÙ\‚ˆ
ˆ™[X\ÙY[™\ˆHRUXÙ[œÙK‚ˆ
ŠB‚œ]Y]YK[ZXÜ›Ý\ÚËÚ[™^šœÎ‚ˆ

ˆH]Y]YK[ZXÜ›Ý\ÚËˆRUXÙ[œÙKˆ™\›ÜÜÈX›ÝZÚYZ™ZÎ‹ËÙ™\›ÜÜË›Ü™ËÛÜ[œÛÝ\˜ÙOˆ
ŠB‚œ[‹\\˜[[Ú[™^šœÎ‚ˆ

ˆH[‹\\˜[[ˆRUXÙ[œÙKˆ™\›ÜÜÈX›ÝZÚYZ™ZÎ‹ËÙ™\›ÜÜË›Ü™ËÛÜ[œÛÝ\˜ÙOˆ
ŠB‚™Ú]]\›\\œÙKÛX‹Ú[™^šœÎ‚ˆ

ˆBˆ
ˆZ[ÚÙ[‚ˆ
ˆZ[ÈÐ]]ÚÙ[ˆ™Yš^
[\ˆ[˜Ý[ÛŠBˆ
‚ˆ
ˆ˜[YHZ[ÚÙ[‚ˆ
ˆ[˜Ý[Û‚ˆ
ˆ\˜[HÑÚ]\›HØšˆH\œÙYÚ]\›Øš™XÝ‚ˆ
ˆ™]\›ˆÔÝš[™ßHÚÙ[ˆ™Yš^ˆ
ŠB‚›Øš™XÝX\ÜÚYÛ‹Ú[™^šœÎ‚ˆ

‚ˆØš™XÝX\ÜÚYÛ‚ˆ
ÊHÚ[™™HÛÜš\ÂˆXÙ[œÙHRUˆ
ŠB‚œ™XXÝØÚœËÜ™XXÝœ›ÙXÝ[Û‹›Z[‹šœÎ‚ˆ

ŠˆXÙ[œÙH™XXÝŒMËŒŒ‚ˆ
ˆ™XXÝœ›ÙXÝ[Û‹›Z[‹šœÂˆ
‚ˆ
ˆÛÜ\šYÚ
ÊH˜XÙX›ÛÚË[˜Ëˆ[™]ÈY™š[X]\Ë‚ˆ
‚ˆ
ˆ\ÈÛÝ\˜ÙHÛÙH\ÈXÙ[œÙY[™\ˆHRUXÙ[œÙH›Ý[™[ˆBˆ
ˆPÑS”ÑHš[H[ˆH›ÛÝ\™XÝÜžHÙˆ\ÈÛÝ\˜ÙH™YK‚ˆ
ŠB‚œØÚY[\‹ØÚœËÜØÚY[\‹œ›ÙXÝ[Û‹›Z[‹šœÎ‚ˆ

ŠˆXÙ[œÙH™XXÝŒŒŒŒ‚ˆ
ˆØÚY[\‹œ›ÙXÝ[Û‹›Z[‹šœÂˆ
‚ˆ
ˆÛÜ\šYÚ
ÊH˜XÙX›ÛÚË[˜Ëˆ[™]ÈY™š[X]\Ë‚ˆ
‚ˆ
ˆ\ÈÛÝ\˜ÙHÛÙH\ÈXÙ[œÙY[™\ˆHRUXÙ[œÙH›Ý[™[ˆBˆ
ˆPÑS”ÑHš[H[ˆH›ÛÝ\™XÝÜžHÙˆ\ÈÛÝ\˜ÙH™YK‚ˆ
ŠB‚œ™XXÝ\™XÛÛ˜Ú[\‹ØÚœËÜ™XXÝ\™XÛÛ˜Ú[\‹œ›ÙXÝ[Û‹›Z[‹šœÎ‚ˆ

ŠˆXÙ[œÙH™XXÝŒŒ‹Œ‚ˆ
ˆ™XXÝ\™XÛÛ˜Ú[\‹œ›ÙXÝ[Û‹›Z[‹šœÂˆ
‚ˆ
ˆÛÜ\šYÚ
ÊH˜XÙX›ÛÚË[˜Ëˆ[™]ÈY™š[X]\Ë‚ˆ
‚ˆ
ˆ\ÈÛÝ\˜ÙHÛÙH\ÈXÙ[œÙY[™\ˆHRUXÙ[œÙH›Ý[™[ˆBˆ
ˆPÑS”ÑHš[H[ˆH›ÛÝ\™XÝÜžHÙˆ\ÈÛÝ\˜ÙH™YK‚ˆ
ŠB‚š\Ë]Ú[™ÝÜËÚ[™^šœÎ‚ˆ

ˆBˆ
ˆ\Ë]Ú[™ÝÜÈÎ‹ËÙÚ]X‹˜ÛÛKÚ›ÛœØÚ[šÙ\Ú\Ë]Ú[™ÝÜÏ‚ˆ
‚ˆ
ˆÛÜ\šYÚ0ªHŒMKLŒN›ÛˆØÚ[šÙ\‚ˆ
ˆ™[X\ÙY[™\ˆHRUXÙ[œÙK‚ˆ
ŠBŠ‹Â