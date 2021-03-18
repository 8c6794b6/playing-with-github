module.exports=(()=>{var n={351:function(n,t,r){"use strict";var e=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var r in n)if(Object.hasOwnProperty.call(n,r))t[r]=n[r];t["default"]=n;return t};Object.defineProperty(t,"__esModule",{value:true});const o=e(r(87));const u=r(278);function issueCommand(n,t,r){const e=new Command(n,t,r);process.stdout.write(e.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(n,t=""){issueCommand(n,{},t)}t.issue=issue;const i="::";class Command{constructor(n,t,r){if(!n){n="missing.command"}this.command=n;this.properties=t;this.message=r}toString(){let n=i+this.command;if(this.properties&&Object.keys(this.properties).length>0){n+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const e=this.properties[r];if(e){if(t){t=false}else{n+=","}n+=`${r}=${escapeProperty(e)}`}}}}n+=`${i}${escapeData(this.message)}`;return n}}function escapeData(n){return u.toCommandValue(n).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(n){return u.toCommandValue(n).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(n,t,r){"use strict";var e=this&&this.__awaiter||function(n,t,r,e){function adopt(n){return n instanceof r?n:new r(function(t){t(n)})}return new(r||(r=Promise))(function(r,o){function fulfilled(n){try{step(e.next(n))}catch(n){o(n)}}function rejected(n){try{step(e["throw"](n))}catch(n){o(n)}}function step(n){n.done?r(n.value):adopt(n.value).then(fulfilled,rejected)}step((e=e.apply(n,t||[])).next())})};var o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var r in n)if(Object.hasOwnProperty.call(n,r))t[r]=n[r];t["default"]=n;return t};Object.defineProperty(t,"__esModule",{value:true});const u=r(351);const i=r(717);const a=r(278);const c=o(r(87));const s=o(r(622));var f;(function(n){n[n["Success"]=0]="Success";n[n["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(n,t){const r=a.toCommandValue(t);process.env[n]=r;const e=process.env["GITHUB_ENV"]||"";if(e){const t="_GitHubActionsFileCommandDelimeter_";const e=`${n}<<${t}${c.EOL}${r}${c.EOL}${t}`;i.issueCommand("ENV",e)}else{u.issueCommand("set-env",{name:n},r)}}t.exportVariable=exportVariable;function setSecret(n){u.issueCommand("add-mask",{},n)}t.setSecret=setSecret;function addPath(n){const t=process.env["GITHUB_PATH"]||"";if(t){i.issueCommand("PATH",n)}else{u.issueCommand("add-path",{},n)}process.env["PATH"]=`${n}${s.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(n,t){const r=process.env[`INPUT_${n.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${n}`)}return r.trim()}t.getInput=getInput;function setOutput(n,t){u.issueCommand("set-output",{name:n},t)}t.setOutput=setOutput;function setCommandEcho(n){u.issue("echo",n?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(n){process.exitCode=f.Failure;error(n)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(n){u.issueCommand("debug",{},n)}t.debug=debug;function error(n){u.issue("error",n instanceof Error?n.toString():n)}t.error=error;function warning(n){u.issue("warning",n instanceof Error?n.toString():n)}t.warning=warning;function info(n){process.stdout.write(n+c.EOL)}t.info=info;function startGroup(n){u.issue("group",n)}t.startGroup=startGroup;function endGroup(){u.issue("endgroup")}t.endGroup=endGroup;function group(n,t){return e(this,void 0,void 0,function*(){startGroup(n);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group;function saveState(n,t){u.issueCommand("save-state",{name:n},t)}t.saveState=saveState;function getState(n){return process.env[`STATE_${n}`]||""}t.getState=getState},717:function(n,t,r){"use strict";var e=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var r in n)if(Object.hasOwnProperty.call(n,r))t[r]=n[r];t["default"]=n;return t};Object.defineProperty(t,"__esModule",{value:true});const o=e(r(747));const u=e(r(87));const i=r(278);function issueCommand(n,t){const r=process.env[`GITHUB_${n}`];if(!r){throw new Error(`Unable to find environment variable for file command ${n}`)}if(!o.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}o.appendFileSync(r,`${i.toCommandValue(t)}${u.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(n,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(n){if(n===null||n===undefined){return""}else if(typeof n==="string"||n instanceof String){return n}return JSON.stringify(n)}t.toCommandValue=toCommandValue},260:(n,t,r)=>{var e={};(function(n){"use strict";n["Control.Apply"]=n["Control.Apply"]||{};var t=n["Control.Apply"];var r=function(n,t){this.Functor0=n;this.apply=t};var e=function(n){return n.apply};t["Apply"]=r;t["apply"]=e})(e);(function(n){"use strict";n["Control.Applicative"]=n["Control.Applicative"]||{};var t=n["Control.Applicative"];var r=n["Control.Apply"];var e=function(n,t){this.Apply0=n;this.pure=t};var o=function(n){return n.pure};var u=function(n){return function(t){return function(e){return r.apply(n.Apply0())(o(n)(t))(e)}}};t["Applicative"]=e;t["pure"]=o;t["liftA1"]=u})(e);(function(n){"use strict";n["Control.Bind"]=n["Control.Bind"]||{};var t=n["Control.Bind"];var r=function(n,t){this.Apply0=n;this.bind=t};var e=function(n){return n.bind};t["Bind"]=r;t["bind"]=e})(e);(function(n){"use strict";n["Control.Monad"]=n["Control.Monad"]||{};var t=n["Control.Monad"];var r=n["Control.Applicative"];var e=n["Control.Bind"];var o=function(n,t){this.Applicative0=n;this.Bind1=t};var u=function(n){return function(t){return function(o){return e.bind(n.Bind1())(t)(function(t){return e.bind(n.Bind1())(o)(function(e){return r.pure(n.Applicative0())(t(e))})})}}};t["Monad"]=o;t["ap"]=u})(e);(function(n){"use strict";n["Data.Either"]=n["Data.Either"]||{};var t=n["Data.Either"];var r=function(){function Left(n){this.value0=n}Left.create=function(n){return new Left(n)};return Left}();var e=function(){function Right(n){this.value0=n}Right.create=function(n){return new Right(n)};return Right}();t["Left"]=r;t["Right"]=e})(e);(function(n){"use strict";n["Data.Function"]=n["Data.Function"]||{};var t=n["Data.Function"];var r=function(n){return function(t){return function(r){return n(r)(t)}}};t["flip"]=r})(e);(function(n){"use strict";n["Data.Functor"]=n["Data.Functor"]||{};var t=n["Data.Functor"];var r=function(n){this.map=n};var e=function(n){return n.map};t["Functor"]=r;t["map"]=e})(e);(function(n){"use strict";n.pureE=function(n){return function(){return n}};n.bindE=function(n){return function(t){return function(){return t(n())()}}}})(e["Effect"]=e["Effect"]||{});(function(n){"use strict";n["Effect"]=n["Effect"]||{};var t=n["Effect"];var r=n["Effect"];var e=n["Control.Applicative"];var o=n["Control.Apply"];var u=n["Control.Bind"];var i=n["Control.Monad"];var a=n["Data.Functor"];var c=new i.Monad(function(){return p},function(){return s});var s=new u.Bind(function(){return f},r.bindE);var f=new o.Apply(function(){return l},i.ap(c));var p=new e.Applicative(function(){return f},r.pureE);var l=new a.Functor(e.liftA1(p));t["bindEffect"]=s;t["monadEffect"]=c})(e);(function(n){"use strict";n.message=function(n){return n.message};n.throwException=function(n){return function(){throw n}};n.catchException=function(n){return function(t){return function(){try{return t()}catch(t){if(t instanceof Error||Object.prototype.toString.call(t)==="[object Error]"){return n(t)()}else{return n(new Error(t.toString()))()}}}}}})(e["Effect.Exception"]=e["Effect.Exception"]||{});(function(n){"use strict";n["Effect.Exception"]=n["Effect.Exception"]||{};var t=n["Effect.Exception"];var r=n["Effect.Exception"];t["message"]=r.message;t["throwException"]=r.throwException;t["catchException"]=r.catchException})(e);(function(n){"use strict";n["Control.Monad.Error.Class"]=n["Control.Monad.Error.Class"]||{};var t=n["Control.Monad.Error.Class"];var r=n["Control.Applicative"];var e=n["Data.Either"];var o=n["Data.Function"];var u=n["Data.Functor"];var i=n["Effect"];var a=n["Effect.Exception"];var c=function(n,t){this.Monad0=n;this.throwError=t};var s=function(n,t){this.MonadThrow0=n;this.catchError=t};var f=new c(function(){return i.monadEffect},a.throwException);var p=new s(function(){return f},o.flip(a.catchException));var l=function(n){return n.catchError};var v=function(n){return function(t){return l(n)(u.map(n.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(e.Right.create)(t))(function(){var t=r.pure(n.MonadThrow0().Monad0().Applicative0());return function(n){return t(e.Left.create(n))}}())}};t["try"]=v;t["monadErrorEffect"]=p})(e);(function(n){"use strict";n["Control.Monad.Except.Trans"]=n["Control.Monad.Except.Trans"]||{};var t=n["Control.Monad.Except.Trans"];var r=function(n){return n};var e=function(n){return n};t["ExceptT"]=r;t["runExceptT"]=e})(e);(function(n){"use strict";n.runFn4=function(n){return function(t){return function(r){return function(e){return function(o){return n(t,r,e,o)}}}}}})(e["Data.Function.Uncurried"]=e["Data.Function.Uncurried"]||{});(function(n){"use strict";n["Data.Function.Uncurried"]=n["Data.Function.Uncurried"]||{};var t=n["Data.Function.Uncurried"];var r=n["Data.Function.Uncurried"];t["runFn4"]=r.runFn4})(e);(function(n){"use strict";n.now=function(){return new Date};n.dateMethodEff=function(n,t){return function(){return t[n]()}}})(e["Data.JSDate"]=e["Data.JSDate"]||{});(function(n){"use strict";n["Data.JSDate"]=n["Data.JSDate"]||{};var t=n["Data.JSDate"];var r=n["Data.JSDate"];var e=function(n){return r.dateMethodEff("toISOString",n)};t["toISOString"]=e;t["now"]=r.now})(e);(function(n){"use strict";n["Data.Maybe"]=n["Data.Maybe"]||{};var t=n["Data.Maybe"];var r=function(){function Nothing(){}Nothing.value=new Nothing;return Nothing}();var e=function(){function Just(n){this.value0=n}Just.create=function(n){return new Just(n)};return Just}();t["Nothing"]=r;t["Just"]=e})(e);(function(n){"use strict";n["Data.Show"]=n["Data.Show"]||{};var t=n["Data.Show"];var r=function(n){this.show=n};var e=function(n){return n.show};t["Show"]=r;t["show"]=e})(e);(function(n){"use strict";n.runEffectFn1=function runEffectFn1(n){return function(t){return function(){return n(t)}}}})(e["Effect.Uncurried"]=e["Effect.Uncurried"]||{});(function(n){"use strict";n["Effect.Uncurried"]=n["Effect.Uncurried"]||{};var t=n["Effect.Uncurried"];var r=n["Effect.Uncurried"];t["runEffectFn1"]=r.runEffectFn1})(e);(function(n){"use strict";n._lookup=function(n,t,r,e){return r in e?t(e[r]):n};function toArrayWithKey(n){return function(t){var r=[];for(var e in t){if(hasOwnProperty.call(t,e)){r.push(n(e)(t[e]))}}return r}}})(e["Foreign.Object"]=e["Foreign.Object"]||{});(function(n){"use strict";n["Foreign.Object"]=n["Foreign.Object"]||{};var t=n["Foreign.Object"];var r=n["Foreign.Object"];var e=n["Data.Function.Uncurried"];var o=n["Data.Maybe"];var u=e.runFn4(r["_lookup"])(o.Nothing.value)(o.Just.create);t["lookup"]=u})(e);(function(n){"use strict";const t=r(186);n.getInput1Impl=t.getInput;n.getInput2Impl=t.getInput;n.setOutputImpl=t.setOutput;n.setFailedImpl=t.setFailed;n.infoImpl=t.info})(e["GitHub.Actions.Core"]=e["GitHub.Actions.Core"]||{});(function(n){"use strict";n["GitHub.Actions.Core"]=n["GitHub.Actions.Core"]||{};var t=n["GitHub.Actions.Core"];var r=n["GitHub.Actions.Core"];var e=n["Control.Monad.Error.Class"];var o=n["Control.Monad.Except.Trans"];var u=n["Data.Maybe"];var i=n["Effect.Uncurried"];var a=function(n){return function(){return r.setOutputImpl(n.name,n.value)}};var c=i.runEffectFn1(r.setFailedImpl);var s=i.runEffectFn1(r.infoImpl);var f=function(){var n=function(n){if(n.options instanceof u.Nothing){return function(){return r.getInput1Impl(n.name)}}if(n.options instanceof u.Just){return function(){return r.getInput2Impl(n.name,n.options.value0)}}throw new Error("Failed pattern match at GitHub.Actions.Core (line 85, column 37 - line 87, column 54): "+[n.options.constructor.name])};var t=e["try"](e.monadErrorEffect);return function(r){return o.ExceptT(t(n(r)))}}();t["getInput"]=f;t["setOutput"]=a;t["setFailed"]=c;t["info"]=s})(e);(function(n){"use strict";n["Node.Platform"]=n["Node.Platform"]||{};var t=n["Node.Platform"];var r=n["Data.Maybe"];var e=n["Data.Show"];var o=function(){function AIX(){}AIX.value=new AIX;return AIX}();var u=function(){function Darwin(){}Darwin.value=new Darwin;return Darwin}();var i=function(){function FreeBSD(){}FreeBSD.value=new FreeBSD;return FreeBSD}();var a=function(){function Linux(){}Linux.value=new Linux;return Linux}();var c=function(){function OpenBSD(){}OpenBSD.value=new OpenBSD;return OpenBSD}();var s=function(){function SunOS(){}SunOS.value=new SunOS;return SunOS}();var f=function(){function Win32(){}Win32.value=new Win32;return Win32}();var p=function(){function Android(){}Android.value=new Android;return Android}();var l=new e.Show(function(n){if(n instanceof o){return"AIX"}if(n instanceof u){return"Darwin"}if(n instanceof i){return"FreeBSD"}if(n instanceof a){return"Linux"}if(n instanceof c){return"OpenBSD"}if(n instanceof s){return"SunOS"}if(n instanceof f){return"Win32"}if(n instanceof p){return"Android"}throw new Error("Failed pattern match at Node.Platform (line 43, column 1 - line 51, column 27): "+[n.constructor.name])});var v=function(n){if(n==="aix"){return new r.Just(o.value)}if(n==="darwin"){return new r.Just(u.value)}if(n==="freebsd"){return new r.Just(i.value)}if(n==="linux"){return new r.Just(a.value)}if(n==="openbsd"){return new r.Just(c.value)}if(n==="sunos"){return new r.Just(s.value)}if(n==="win32"){return new r.Just(f.value)}if(n==="android"){return new r.Just(p.value)}return r.Nothing.value};t["fromString"]=v;t["showPlatform"]=l})(e);(function(n){"use strict";n.process=process})(e["Node.Process"]=e["Node.Process"]||{});(function(n){"use strict";n.unsafeCoerce=function(n){return n}})(e["Unsafe.Coerce"]=e["Unsafe.Coerce"]||{});(function(n){"use strict";n["Unsafe.Coerce"]=n["Unsafe.Coerce"]||{};var t=n["Unsafe.Coerce"];var r=n["Unsafe.Coerce"];t["unsafeCoerce"]=r.unsafeCoerce})(e);(function(n){"use strict";n["Node.Process"]=n["Node.Process"]||{};var t=n["Node.Process"];var r=n["Node.Process"];var e=n["Foreign.Object"];var o=n["Node.Platform"];var u=n["Unsafe.Coerce"];var i=r.process.platform;var a=o.fromString(i);var c=u.unsafeCoerce;var s=function(n){return function(t){return c(function(r){return e.lookup(n)(t)})}};var f=function(n){return s(n)(r.process.env)};t["lookupEnv"]=f;t["platform"]=a})(e);(function(n){"use strict";n["Main"]=n["Main"]||{};var t=n["Main"];var r=n["Control.Bind"];var e=n["Control.Monad.Except.Trans"];var o=n["Data.Either"];var u=n["Data.JSDate"];var i=n["Data.Maybe"];var a=n["Data.Show"];var c=n["Effect"];var s=n["Effect.Exception"];var f=n["GitHub.Actions.Core"];var p=n["Node.Platform"];var l=n["Node.Process"];var v=function(n){return function __do(){f.info("Hello, "+(n+"!"))();var t=r.bind(c.bindEffect)(u.now)(u.toISOString)();f.setOutput({name:"time",value:t})();var e=l.lookupEnv("GITHUB_ACTOR")();f.info(function(){if(e instanceof i.Just){return"GITHUB_ACTOR"+(": "+e.value0)}return"NO GITHUB_RUNNER found in process"}())();return f.info(function(){if(l.platform instanceof i.Just){return"Platform: "+a.show(p.showPlatform)(l.platform.value0)}return"Unknown platform"}())()}};var d=function __do(){var n=e.runExceptT(f.getInput({name:"who-to-greet",options:new i.Just({required:true})}))();if(n instanceof o.Right){return v(n.value0)()}if(n instanceof o.Left){return f.setFailed(s.message(n.value0))()}throw new Error("Failed pattern match at Main (line 27, column 3 - line 29, column 45): "+[n.constructor.name])};t["main"]=d;t["greetAndSetOutput"]=v})(e);e["Main"].main()},747:n=>{"use strict";n.exports=require("fs")},87:n=>{"use strict";n.exports=require("os")},622:n=>{"use strict";n.exports=require("path")}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var e=t[r]={exports:{}};var o=true;try{n[r].call(e.exports,e,e.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return e.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(260)})();