module.exports=(()=>{var t={351:function(t,n,r){"use strict";var e=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var r in t)if(Object.hasOwnProperty.call(t,r))n[r]=t[r];n["default"]=t;return n};Object.defineProperty(n,"__esModule",{value:true});const o=e(r(87));const i=r(278);function issueCommand(t,n,r){const e=new Command(t,n,r);process.stdout.write(e.toString()+o.EOL)}n.issueCommand=issueCommand;function issue(t,n=""){issueCommand(t,{},n)}n.issue=issue;const u="::";class Command{constructor(t,n,r){if(!t){t="missing.command"}this.command=t;this.properties=n;this.message=r}toString(){let t=u+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let n=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const e=this.properties[r];if(e){if(n){n=false}else{t+=","}t+=`${r}=${escapeProperty(e)}`}}}}t+=`${u}${escapeData(this.message)}`;return t}}function escapeData(t){return i.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(t){return i.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(t,n,r){"use strict";var e=this&&this.__awaiter||function(t,n,r,e){function adopt(t){return t instanceof r?t:new r(function(n){n(t)})}return new(r||(r=Promise))(function(r,o){function fulfilled(t){try{step(e.next(t))}catch(t){o(t)}}function rejected(t){try{step(e["throw"](t))}catch(t){o(t)}}function step(t){t.done?r(t.value):adopt(t.value).then(fulfilled,rejected)}step((e=e.apply(t,n||[])).next())})};var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var r in t)if(Object.hasOwnProperty.call(t,r))n[r]=t[r];n["default"]=t;return n};Object.defineProperty(n,"__esModule",{value:true});const i=r(351);const u=r(717);const a=r(278);const c=o(r(87));const s=o(r(622));var f;(function(t){t[t["Success"]=0]="Success";t[t["Failure"]=1]="Failure"})(f=n.ExitCode||(n.ExitCode={}));function exportVariable(t,n){const r=a.toCommandValue(n);process.env[t]=r;const e=process.env["GITHUB_ENV"]||"";if(e){const n="_GitHubActionsFileCommandDelimeter_";const e=`${t}<<${n}${c.EOL}${r}${c.EOL}${n}`;u.issueCommand("ENV",e)}else{i.issueCommand("set-env",{name:t},r)}}n.exportVariable=exportVariable;function setSecret(t){i.issueCommand("add-mask",{},t)}n.setSecret=setSecret;function addPath(t){const n=process.env["GITHUB_PATH"]||"";if(n){u.issueCommand("PATH",t)}else{i.issueCommand("add-path",{},t)}process.env["PATH"]=`${t}${s.delimiter}${process.env["PATH"]}`}n.addPath=addPath;function getInput(t,n){const r=process.env[`INPUT_${t.replace(/ /g,"_").toUpperCase()}`]||"";if(n&&n.required&&!r){throw new Error(`Input required and not supplied: ${t}`)}return r.trim()}n.getInput=getInput;function setOutput(t,n){i.issueCommand("set-output",{name:t},n)}n.setOutput=setOutput;function setCommandEcho(t){i.issue("echo",t?"on":"off")}n.setCommandEcho=setCommandEcho;function setFailed(t){process.exitCode=f.Failure;error(t)}n.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}n.isDebug=isDebug;function debug(t){i.issueCommand("debug",{},t)}n.debug=debug;function error(t){i.issue("error",t instanceof Error?t.toString():t)}n.error=error;function warning(t){i.issue("warning",t instanceof Error?t.toString():t)}n.warning=warning;function info(t){process.stdout.write(t+c.EOL)}n.info=info;function startGroup(t){i.issue("group",t)}n.startGroup=startGroup;function endGroup(){i.issue("endgroup")}n.endGroup=endGroup;function group(t,n){return e(this,void 0,void 0,function*(){startGroup(t);let r;try{r=yield n()}finally{endGroup()}return r})}n.group=group;function saveState(t,n){i.issueCommand("save-state",{name:t},n)}n.saveState=saveState;function getState(t){return process.env[`STATE_${t}`]||""}n.getState=getState},717:function(t,n,r){"use strict";var e=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var r in t)if(Object.hasOwnProperty.call(t,r))n[r]=t[r];n["default"]=t;return n};Object.defineProperty(n,"__esModule",{value:true});const o=e(r(747));const i=e(r(87));const u=r(278);function issueCommand(t,n){const r=process.env[`GITHUB_${t}`];if(!r){throw new Error(`Unable to find environment variable for file command ${t}`)}if(!o.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}o.appendFileSync(r,`${u.toCommandValue(n)}${i.EOL}`,{encoding:"utf8"})}n.issueCommand=issueCommand},278:(t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:true});function toCommandValue(t){if(t===null||t===undefined){return""}else if(typeof t==="string"||t instanceof String){return t}return JSON.stringify(t)}n.toCommandValue=toCommandValue},260:(t,n,r)=>{var e={};(function(t){"use strict";t["Control.Apply"]=t["Control.Apply"]||{};var n=t["Control.Apply"];var r=function(t,n){this.Functor0=t;this.apply=n};var e=function(t){return t.apply};n["Apply"]=r;n["apply"]=e})(e);(function(t){"use strict";t["Control.Applicative"]=t["Control.Applicative"]||{};var n=t["Control.Applicative"];var r=t["Control.Apply"];var e=function(t,n){this.Apply0=t;this.pure=n};var o=function(t){return t.pure};var i=function(t){return function(n){return function(e){return r.apply(t.Apply0())(o(t)(n))(e)}}};n["Applicative"]=e;n["pure"]=o;n["liftA1"]=i})(e);(function(t){"use strict";t["Control.Bind"]=t["Control.Bind"]||{};var n=t["Control.Bind"];var r=function(t,n){this.Apply0=t;this.bind=n};var e=function(t){return t.bind};n["Bind"]=r;n["bind"]=e})(e);(function(t){"use strict";t["Control.Monad"]=t["Control.Monad"]||{};var n=t["Control.Monad"];var r=t["Control.Applicative"];var e=t["Control.Bind"];var o=function(t,n){this.Applicative0=t;this.Bind1=n};var i=function(t){return function(n){return function(o){return e.bind(t.Bind1())(n)(function(n){return e.bind(t.Bind1())(o)(function(e){return r.pure(t.Applicative0())(n(e))})})}}};n["Monad"]=o;n["ap"]=i})(e);(function(t){"use strict";t["Data.Either"]=t["Data.Either"]||{};var n=t["Data.Either"];var r=function(){function Left(t){this.value0=t}Left.create=function(t){return new Left(t)};return Left}();var e=function(){function Right(t){this.value0=t}Right.create=function(t){return new Right(t)};return Right}();n["Left"]=r;n["Right"]=e})(e);(function(t){"use strict";t["Data.Function"]=t["Data.Function"]||{};var n=t["Data.Function"];var r=function(t){return function(n){return function(r){return t(r)(n)}}};n["flip"]=r})(e);(function(t){"use strict";t["Data.Functor"]=t["Data.Functor"]||{};var n=t["Data.Functor"];var r=function(t){this.map=t};var e=function(t){return t.map};n["Functor"]=r;n["map"]=e})(e);(function(t){"use strict";t.pureE=function(t){return function(){return t}};t.bindE=function(t){return function(n){return function(){return n(t())()}}}})(e["Effect"]=e["Effect"]||{});(function(t){"use strict";t["Effect"]=t["Effect"]||{};var n=t["Effect"];var r=t["Effect"];var e=t["Control.Applicative"];var o=t["Control.Apply"];var i=t["Control.Bind"];var u=t["Control.Monad"];var a=t["Data.Functor"];var c=new u.Monad(function(){return p},function(){return s});var s=new i.Bind(function(){return f},r.bindE);var f=new o.Apply(function(){return l},u.ap(c));var p=new e.Applicative(function(){return f},r.pureE);var l=new a.Functor(e.liftA1(p));n["bindEffect"]=s;n["monadEffect"]=c})(e);(function(t){"use strict";t.message=function(t){return t.message};t.throwException=function(t){return function(){throw t}};t.catchException=function(t){return function(n){return function(){try{return n()}catch(n){if(n instanceof Error||Object.prototype.toString.call(n)==="[object Error]"){return t(n)()}else{return t(new Error(n.toString()))()}}}}}})(e["Effect.Exception"]=e["Effect.Exception"]||{});(function(t){"use strict";t["Effect.Exception"]=t["Effect.Exception"]||{};var n=t["Effect.Exception"];var r=t["Effect.Exception"];n["message"]=r.message;n["throwException"]=r.throwException;n["catchException"]=r.catchException})(e);(function(t){"use strict";t["Control.Monad.Error.Class"]=t["Control.Monad.Error.Class"]||{};var n=t["Control.Monad.Error.Class"];var r=t["Control.Applicative"];var e=t["Data.Either"];var o=t["Data.Function"];var i=t["Data.Functor"];var u=t["Effect"];var a=t["Effect.Exception"];var c=function(t,n){this.Monad0=t;this.throwError=n};var s=function(t,n){this.MonadThrow0=t;this.catchError=n};var f=new c(function(){return u.monadEffect},a.throwException);var p=new s(function(){return f},o.flip(a.catchException));var l=function(t){return t.catchError};var v=function(t){return function(n){return l(t)(i.map(t.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(e.Right.create)(n))(function(){var n=r.pure(t.MonadThrow0().Monad0().Applicative0());return function(t){return n(e.Left.create(t))}}())}};n["try"]=v;n["monadErrorEffect"]=p})(e);(function(t){"use strict";t["Control.Monad.Except.Trans"]=t["Control.Monad.Except.Trans"]||{};var n=t["Control.Monad.Except.Trans"];var r=function(t){return t};var e=function(t){return t};n["ExceptT"]=r;n["runExceptT"]=e})(e);(function(t){"use strict";t.runFn4=function(t){return function(n){return function(r){return function(e){return function(o){return t(n,r,e,o)}}}}}})(e["Data.Function.Uncurried"]=e["Data.Function.Uncurried"]||{});(function(t){"use strict";t["Data.Function.Uncurried"]=t["Data.Function.Uncurried"]||{};var n=t["Data.Function.Uncurried"];var r=t["Data.Function.Uncurried"];n["runFn4"]=r.runFn4})(e);(function(t){"use strict";t.now=function(){return new Date};t.dateMethodEff=function(t,n){return function(){return n[t]()}}})(e["Data.JSDate"]=e["Data.JSDate"]||{});(function(t){"use strict";t["Data.JSDate"]=t["Data.JSDate"]||{};var n=t["Data.JSDate"];var r=t["Data.JSDate"];var e=function(t){return r.dateMethodEff("toISOString",t)};n["toISOString"]=e;n["now"]=r.now})(e);(function(t){"use strict";t["Data.Maybe"]=t["Data.Maybe"]||{};var n=t["Data.Maybe"];var r=function(){function Nothing(){}Nothing.value=new Nothing;return Nothing}();var e=function(){function Just(t){this.value0=t}Just.create=function(t){return new Just(t)};return Just}();n["Nothing"]=r;n["Just"]=e})(e);(function(t){"use strict";t.runEffectFn1=function runEffectFn1(t){return function(n){return function(){return t(n)}}}})(e["Effect.Uncurried"]=e["Effect.Uncurried"]||{});(function(t){"use strict";t["Effect.Uncurried"]=t["Effect.Uncurried"]||{};var n=t["Effect.Uncurried"];var r=t["Effect.Uncurried"];n["runEffectFn1"]=r.runEffectFn1})(e);(function(t){"use strict";t._lookup=function(t,n,r,e){return r in e?n(e[r]):t};function toArrayWithKey(t){return function(n){var r=[];for(var e in n){if(hasOwnProperty.call(n,e)){r.push(t(e)(n[e]))}}return r}}})(e["Foreign.Object"]=e["Foreign.Object"]||{});(function(t){"use strict";t["Foreign.Object"]=t["Foreign.Object"]||{};var n=t["Foreign.Object"];var r=t["Foreign.Object"];var e=t["Data.Function.Uncurried"];var o=t["Data.Maybe"];var i=e.runFn4(r["_lookup"])(o.Nothing.value)(o.Just.create);n["lookup"]=i})(e);(function(t){"use strict";const n=r(186);t.getInput1Impl=n.getInput;t.getInput2Impl=n.getInput;t.setOutputImpl=n.setOutput;t.setFailedImpl=n.setFailed;t.infoImpl=n.info})(e["GitHub.Actions.Core"]=e["GitHub.Actions.Core"]||{});(function(t){"use strict";t["GitHub.Actions.Core"]=t["GitHub.Actions.Core"]||{};var n=t["GitHub.Actions.Core"];var r=t["GitHub.Actions.Core"];var e=t["Control.Monad.Error.Class"];var o=t["Control.Monad.Except.Trans"];var i=t["Data.Maybe"];var u=t["Effect.Uncurried"];var a=function(t){return function(){return r.setOutputImpl(t.name,t.value)}};var c=u.runEffectFn1(r.setFailedImpl);var s=u.runEffectFn1(r.infoImpl);var f=function(){var t=function(t){if(t.options instanceof i.Nothing){return function(){return r.getInput1Impl(t.name)}}if(t.options instanceof i.Just){return function(){return r.getInput2Impl(t.name,t.options.value0)}}throw new Error("Failed pattern match at GitHub.Actions.Core (line 85, column 37 - line 87, column 54): "+[t.options.constructor.name])};var n=e["try"](e.monadErrorEffect);return function(r){return o.ExceptT(n(t(r)))}}();n["getInput"]=f;n["setOutput"]=a;n["setFailed"]=c;n["info"]=s})(e);(function(t){"use strict";t.process=process})(e["Node.Process"]=e["Node.Process"]||{});(function(t){"use strict";t.unsafeCoerce=function(t){return t}})(e["Unsafe.Coerce"]=e["Unsafe.Coerce"]||{});(function(t){"use strict";t["Unsafe.Coerce"]=t["Unsafe.Coerce"]||{};var n=t["Unsafe.Coerce"];var r=t["Unsafe.Coerce"];n["unsafeCoerce"]=r.unsafeCoerce})(e);(function(t){"use strict";t["Node.Process"]=t["Node.Process"]||{};var n=t["Node.Process"];var r=t["Node.Process"];var e=t["Foreign.Object"];var o=t["Unsafe.Coerce"];var i=o.unsafeCoerce;var u=function(t){return function(n){return i(function(r){return e.lookup(t)(n)})}};var a=function(t){return u(t)(r.process.env)};n["lookupEnv"]=a})(e);(function(t){"use strict";t["Main"]=t["Main"]||{};var n=t["Main"];var r=t["Control.Bind"];var e=t["Control.Monad.Except.Trans"];var o=t["Data.Either"];var i=t["Data.JSDate"];var u=t["Data.Maybe"];var a=t["Effect"];var c=t["Effect.Exception"];var s=t["GitHub.Actions.Core"];var f=t["Node.Process"];var p=function(t){return function __do(){s.info("Hello, "+(t+"!"))();var n=r.bind(a.bindEffect)(i.now)(i.toISOString)();s.setOutput({name:"time",value:n})();var e=f.lookupEnv("GITHUB_ACTOR")();return s.info(function(){if(e instanceof u.Just){return"GITHUB_ACTOR"+(": "+e.value0)}return"NO GITHUB_RUNNER found in process"}())()}};var l=function __do(){var t=e.runExceptT(s.getInput({name:"who-to-greet",options:new u.Just({required:true})}))();if(t instanceof o.Right){return p(t.value0)()}if(t instanceof o.Left){return s.setFailed(c.message(t.value0))()}throw new Error("Failed pattern match at Main (line 27, column 3 - line 29, column 45): "+[t.constructor.name])};n["main"]=l;n["greetAndSetOutput"]=p})(e);e["Main"].main()},747:t=>{"use strict";t.exports=require("fs")},87:t=>{"use strict";t.exports=require("os")},622:t=>{"use strict";t.exports=require("path")}};var n={};function __nccwpck_require__(r){if(n[r]){return n[r].exports}var e=n[r]={exports:{}};var o=true;try{t[r].call(e.exports,e,e.exports,__nccwpck_require__);o=false}finally{if(o)delete n[r]}return e.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(260)})();