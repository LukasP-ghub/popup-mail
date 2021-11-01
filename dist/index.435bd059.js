// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hVNDP":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "1d975469435bd059";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dxxdW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _emailjsCom = require("emailjs-com");
var _emailjsComDefault = parcelHelpers.interopDefault(_emailjsCom);
class App {
    constructor(){
        this.emailInput = document.querySelector('.js-email');
        this.nameInput = document.querySelector('#name');
        this.sendBtn = document.querySelector('.js-send-btn');
        this.emailLabel = document.querySelector('.js-email-label');
        this.nameLabel = document.querySelector('.js-user-name-label');
        this.form = document.querySelector('#js-form');
        this.htmlContent = `<!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <!--[if mso]>
    <style>
        table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
        div, td {padding:0;}
        div {margin:0 !important;}
    </style>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
    </style>
  </head>

  <body style="margin:0 auto;padding:0;word-spacing:normal;height:100%; max-width: 600px;">
    <table role="presentation"
      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width:100%; box-sizing: border-box; height:100%;"
      width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="100%" height="100%" style="text-align: center;">
          <table role="presentation"
            style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%"
            height="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:100%;height:40vh;background-size: cover;" width="100%"
                background="https://www.panstwa.com/zabytki-zdj/luwr.webp">
              </td>
            </tr>
            <tr>
              <td align="center" width="100%" style="padding: 0 5%;">
                <header style="text-align: center;">
                  <h1 style="font-weight: 300;">Lorem ipsum</h1>
                  <p style="margin: 0; font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                    totam, at non
                    adipisci
                    repudiandae accusamus quos nulla praesentium, illo ratione architecto nam, minima distinctio enim
                    iusto saepe sit eius nostrum!</p>
                </header>
              </td>
            </tr>
            <tr>
              <td width="100%" style="width: 100%; font-size: 14px; padding:5vh 0;">
                <div style="display: inline-block; width: 30%;">
                  <p>a</p>
                  <p>1111111111</p>
                </div>
                <div style="display: inline-block; width: 30%;">
                  <p>s</p>
                  <p>email@email.com</p>
                </div>
                <div style="display: inline-block; width: 30%;">
                  <p>c</p>
                  <p>test@test:com</p>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0 5%; font-size: 13px;">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Harum
                repellendus ratione
                provident illo
                voluptates quisquam vitae, culpa quidem ex animi adipisci blanditiis soluta illum labore eius
                distinctio voluptatem vero suscipit.</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>

</html>`;
    }
    getInputValue = (input)=>{
        return input.value;
    };
    validateInputData = (data, pattern)=>{
        const ptrn = pattern ? new RegExp(pattern) : '';
        if (!data) return false;
        if (pattern) return ptrn.test(data);
        return true;
    };
    sendRequest = ({ email_to , html_content  })=>{
        _emailjsComDefault.default.send("service_z9v00sh", "template_id9dp2d", {
            html_content,
            email_to,
            reply_to: "xyz@xyz.pl",
            from_name: "LukasP"
        }, "user_5qaFnip6BB2GEzlG4R41n");
    };
    handleSendBtn = ()=>{
        const email = this.getInputValue(this.emailInput);
        const name = this.getInputValue(this.nameInput);
        const isEmailValid = this.validateInputData(email, '.+\@.+\..+');
        const isNameValid = this.validateInputData(name);
        if (!isEmailValid) {
            this.emailInput.classList.add('input-invalid');
            return;
        }
        if (!isNameValid) {
            this.nameInput.classList.add('input-invalid');
            return;
        }
        this.sendRequest({
            email_to: email,
            html_content: this.htmlContent
        });
        sessionStorage.setItem('UserName', name);
        window.location.replace('pages/thank-you-page.html');
    };
    handleLabelVisibility = (e)=>{
        const content = e.currentTarget.value;
        e.currentTarget.nextElementSibling.classList.add('hide-label');
        if (!content) e.currentTarget.nextElementSibling.classList.remove('hide-label');
    };
    bindListeners = ()=>{
        this.sendBtn.addEventListener('click', ()=>this.handleSendBtn()
        );
        this.nameInput.addEventListener('change', (e)=>this.handleLabelVisibility(e)
        );
        this.emailInput.addEventListener('change', (e)=>this.handleLabelVisibility(e)
        );
    };
    init = ()=>{
        this.bindListeners();
    };
}
const app = new App();
app.init();

},{"emailjs-com":"h6g4H","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h6g4H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>_init.init
);
parcelHelpers.export(exports, "send", ()=>_send.send
);
parcelHelpers.export(exports, "sendForm", ()=>_sendForm.sendForm
);
var _init = require("./methods/init/init");
var _send = require("./methods/send/send");
var _sendForm = require("./methods/sendForm/sendForm");
exports.default = {
    init: _init.init,
    send: _send.send,
    sendForm: _sendForm.sendForm
};

},{"./methods/init/init":"elgPv","./methods/send/send":"2Vu5E","./methods/sendForm/sendForm":"6hrNP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"elgPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _store = require("../../store/store");
const init = (userID, origin = 'https://api.emailjs.com')=>{
    _store.store._userID = userID;
    _store.store._origin = origin;
};

},{"../../store/store":"fY2pH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fY2pH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store
);
const store = {
    _origin: 'https://api.emailjs.com'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2Vu5E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "send", ()=>send
);
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
const send = (serviceID, templateID, templatePrams, userID)=>{
    const uID = userID || _store.store._userID;
    _validateParams.validateParams(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams
    };
    return _sendPost.sendPost('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
};

},{"../../store/store":"fY2pH","../../utils/validateParams":"cblD2","../../api/sendPost":"7Of1v","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cblD2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateParams", ()=>validateParams
);
const validateParams = (userID, serviceID, templateID)=>{
    if (!userID) throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    if (!serviceID) throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    if (!templateID) throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Of1v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendPost", ()=>sendPost
);
var _emailJSResponseStatus = require("../models/EmailJSResponseStatus");
var _store = require("../store/store");
const sendPost = (url, data, headers = {
})=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target  })=>{
            const responseStatus = new _emailJSResponseStatus.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') resolve(responseStatus);
            else reject(responseStatus);
        });
        xhr.addEventListener('error', ({ target  })=>{
            reject(new _emailJSResponseStatus.EmailJSResponseStatus(target));
        });
        xhr.open('POST', _store.store._origin + url, true);
        Object.keys(headers).forEach((key)=>{
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};

},{"../models/EmailJSResponseStatus":"jXIfG","../store/store":"fY2pH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jXIfG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmailJSResponseStatus", ()=>EmailJSResponseStatus
);
class EmailJSResponseStatus {
    constructor(httpResponse){
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6hrNP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendForm", ()=>sendForm
);
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
const findHTMLForm = (form)=>{
    let currentForm;
    if (typeof form === 'string') currentForm = document.querySelector(form);
    else currentForm = form;
    if (!currentForm || currentForm.nodeName !== 'FORM') throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    return currentForm;
};
const sendForm = (serviceID, templateID, form, userID)=>{
    const uID = userID || _store.store._userID;
    const currentForm = findHTMLForm(form);
    _validateParams.validateParams(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return _sendPost.sendPost('/api/v1.0/email/send-form', formData);
};

},{"../../store/store":"fY2pH","../../utils/validateParams":"cblD2","../../api/sendPost":"7Of1v","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["hVNDP","dxxdW"], "dxxdW", "parcelRequiree714")

//# sourceMappingURL=index.435bd059.js.map
