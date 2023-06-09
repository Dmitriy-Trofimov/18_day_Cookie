// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"64l5X":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bDbGG":[function(require,module,exports) {
// import { format } from 'date-fns'
/*
let list = [];
let lastCheckedCity = [];
let listForecast = [];
let lastCheckedForecast = [];
*/ // Хранилище имен (Модуль)
const cityNow = document.querySelector(".city-now");
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
const serverUrlWeather = "http://api.openweathermap.org/data/2.5/weather";
const serverUrlForecast = "http://api.openweathermap.org/data/2.5/forecast";
const clearInput = "";
const parentCitysContainer = document.querySelector(".added-cities_list");
const temperatureNow = document.querySelector(".weather-now");
const detailsTitle = document.querySelector(".details-title");
const parameterTemperature = document.querySelector(".parameter-temperature");
const parameterFeelsLike = document.querySelector(".parameter-Feels-like");
const parameterWeather = document.querySelector(".parameter-weather");
const parameterSunrise = document.querySelector(".parameter-sunrise");
const parameterSunset = document.querySelector(".parameter-sunset");
const forecastTitle = document.querySelector(".forecast-title");
const forecastParent = document.querySelector(".forecast-section");
let cityQuery = document.querySelector(".search-form");
let searchInput = document.querySelector(".search-input");
let likeButton = document.querySelector(".like-img");
///////////////////////////
let list = []; // поместить название 1го города после Fetch запроса
let favouriteCities = []; // сохранить список названий городов в Локалсторадже
let lastCheckedCity = []; // сохранить название 1го города в Локалсторадже
// Список городов хварнить в Set()
likeButton.addEventListener("click", addLocation);
cityQuery.addEventListener("submit", function() {
    const cityName = document.querySelector(".search-input").value;
    const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`;
    fetch(urlWeather).then((responce)=>responce.json()).then((weatherNow)=>{
        if (weatherNow.cod === "404") {
            searchInput.value = clearInput;
            alert("Такого города нет");
            throw new Error("Ошибка сервера №404");
        } else if (weatherNow.cod === 401) {
            searchInput.value = clearInput;
            alert("Что то пошло не так");
            throw new Error("Ошибка сервера №401");
        } else if (weatherNow.cod === "400") {
            alert("Введите название города!");
            throw new Error("Ошибка сервера №400");
        } else {
            list.push(weatherNow.name);
            showWeatherNow(weatherNow);
        }
    }).catch(console.error);
// findForecast(cityName)
});
function showWeatherNow(weatherNow) {
    cityNow.textContent = weatherNow.name;
    temperatureNow.textContent = Math.round(weatherNow.main.temp - 273) + "\xb0";
    searchInput.value = clearInput;
}
/*
function findForecast(cityName){
    const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}`; 

    fetch(urlForecast)
    .then(responce => responce.json())
    .then(weatherForecast => {
        listForecast.push(weatherForecast);
    })
    .catch(console.error);
}
*/ /*
function render() {
    clearOldCitys()
    clearOldForecast()
    addLocation()
    addListStorage()
    addForecastStorage()
}
*/ /*
function clearOldCitys() {  
    let deleteOldCitys = document.querySelectorAll('.added-city_container'); 
    if (deleteOldCitys) {
        deleteOldCitys.forEach(OldCitys => OldCitys.remove());
    } else {
        return
    }
}
*/ /*
function clearOldForecast() {  
    let deleteOldForecast = document.querySelectorAll('.forecast-parametres'); 
    if (deleteOldForecast) {
        deleteOldForecast.forEach(OldForecast => OldForecast.remove());
    } else {
        return
    }
}
*/ function addLocation() {
    favouriteCities.push(list[list.length - 1]);
    for(let i = 0; i < favouriteCities.length; i++){
        let cityName = favouriteCities[i];
        const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`;
        fetch(urlWeather).then((responce)=>responce.json()).then((weatherNow)=>{
            showWeatherNow(weatherNow);
            // Добавить город в список избранных
            const newCityContainer = document.createElement("div");
            parentCitysContainer.appendChild(newCityContainer);
            newCityContainer.classList.add("added-city_container");
            newCityContainer.innerHTML = '<svg class="img-delete-city" width="24" height="24"><path d="M12 12.293l5.657-5.657a.5.5 0 0 1 .707.707L12.707 13l5.657 5.657a.5.5 0 1 1-.707.707L12 13.707l-5.657 5.657a.5.5 0 1 1-.707-.707L11.293 13 5.636 7.343a.5.5 0 1 1 .707-.707L12 12.293z" fill="#979797"/></svg>';
            const newCityName = document.createElement("p");
            newCityContainer.appendChild(newCityName);
            newCityName.textContent = weatherNow.name;
            newCityName.classList.add("added-city_name");
            // Кнопка удалить
            let buttonDelete = document.createElement("button");
            buttonDelete.classList.add("button-delete");
            newCityContainer.appendChild(buttonDelete);
            buttonDelete.addEventListener("click", ()=>{
                alert("hu");
            // let indexListCity = list.findIndex(indexCity => indexCity.name ===  newCityName.textContent);    // тут используется старый массив "list"!!!!!
            // let deleteObjectCity = list.splice(indexListCity, 1);    // тут используется старый массив "list"!!!!!
            // let indexlistForecast = listForecast.findIndex(listForecast => listForecast.name ===  newCityName.textContent); // тут используется старый массив "listForecast"!!!!!
            // let deleteObjectForecast = listForecast.splice(indexlistForecast, 1); // тут используется старый массив "listForecast"!!!!!
            // render()
            });
        });
    // // Отобразить параметры по клику на город страва
    // newCityName.addEventListener('click', function() {
    //     cityNow.textContent = list[i].name;
    //     temperatureNow.textContent = Math.round(list[i].main.temp - 273) + '°';
    //     lastCheckedCity.push(list[i]);
    //     lastCheckedForecast.push(listForecast[i]);
    //     // Таб с деталями
    //     detailsTitle.textContent = lastCheckedCity[lastCheckedCity.length - 1].name;
    //     parameterTemperature.textContent = `Temperature: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.temp - 273) + '°'}`;
    //     parameterFeelsLike.textContent = `Feels like: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.feels_like  - 273) + '°'}`;
    //     parameterWeather.textContent = `Weather: ${lastCheckedCity[lastCheckedCity.length - 1].weather[0].description}`;
    //     let sunriseTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunrise;
    //     let sunriseConverted =  format(new Date(1000 * sunriseTime), 'kk:mm');
    //     parameterSunrise.textContent = `Sunset: ${sunriseConverted}`;
    //     let sunsetTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunset;
    //     let sunsetConverted = format(new Date(1000 * sunsetTime), 'kk:mm');
    //     parameterSunset.textContent = `Sunset: ${sunsetConverted}`;
    //     addCheckedStorage()
    //     addCheckedForecast()   
    //     clearOldForecast()         
    //     showForecast()
    // });
    }
}
/*
function showForecast() {

    for (let repeat = 0; repeat < 40; repeat++) {

    forecastTitle.textContent = lastCheckedForecast[lastCheckedForecast.length - 1].city.name; 

    const forecastParametres = document.createElement('div');
    forecastParent.appendChild(forecastParametres);
    forecastParametres.classList.add('forecast-parametres'); 

    const forecastDate = document.createElement('div');
    forecastParametres.appendChild(forecastDate);
    forecastDate.classList.add('forecast-date');

    const futureDate = document.createElement('span');
    forecastDate.appendChild(futureDate);
    futureDate.classList.add('future-date');

    const futureforecastDate = lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].dt; 
    const futureDateConverted = format(new Date(1000 * futureforecastDate), 'd MMMM');
    futureDate.textContent = futureDateConverted;

    const futureTime = document.createElement('span');
    forecastDate.appendChild(futureTime);
    futureTime.classList.add('future-time');

    const futureTimeConverted = format(new Date(1000 * futureforecastDate), 'kk:mm');;
    futureTime.textContent = futureTimeConverted;

    const forecastTemperaturePrecipitation = document.createElement('div');
    forecastParametres.appendChild(forecastTemperaturePrecipitation);
    forecastTemperaturePrecipitation.classList.add('forecast-temperature-precipitation');

    const forecastTemperature = document.createElement('span');
    forecastTemperaturePrecipitation.appendChild(forecastTemperature);
    forecastTemperature.classList.add('forecast-temperature');
    forecastTemperature.textContent = `Temperature: ${Math.round(lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].main.temp - 273) + '°'}`; 

    const forecastPrecipitation = document.createElement('span');
    forecastTemperaturePrecipitation.appendChild(forecastPrecipitation);
    forecastPrecipitation.classList.add('forecast-precipitation');
    forecastPrecipitation.textContent = lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].weather[0].main; 


    const forecastFeelsLike = document.createElement('div');
    forecastParametres.appendChild(forecastFeelsLike);
    forecastFeelsLike.classList.add('forecast-feels-like');

    const feelsLike = document.createElement('span');
    forecastFeelsLike.appendChild(feelsLike);
    feelsLike.classList.add('feels-like');
    feelsLike.textContent = `Feels like: ${Math.round(lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].main.feels_like - 273) + '°'}`; 
    }
}
*/ /*
function addListStorage() {
    localStorage.setItem("list", JSON.stringify(list)); 
}
*/ /*
function addForecastStorage() {
    localStorage.setItem("listForecast", JSON.stringify(listForecast)); 
}
*/ /*
function addCheckedStorage() {
    localStorage.setItem("lastCheckedCity", JSON.stringify(lastCheckedCity));
}
*/ /*
function addCheckedForecast() {
    localStorage.setItem("lastCheckedForecast", JSON.stringify(lastCheckedForecast));
}
*/ /*
function showSavedParavetres() {

    lastCheckedCity = JSON.parse(localStorage.getItem("lastCheckedCity"));
    list = JSON.parse(localStorage.getItem("list"));
    listForecast = JSON.parse(localStorage.getItem("listForecast"));
    lastCheckedForecast = JSON.parse(localStorage.getItem("lastCheckedForecast"));    

    if (list === null) {
        list = [];
    }

    if (lastCheckedCity === null) {
        lastCheckedCity = [];
    }

    if (listForecast === null) {
        listForecast = [];
    }

    if (lastCheckedForecast === null) {
        lastCheckedForecast = [];
    }

    if (lastCheckedCity.length != 0) {

        cityNow.textContent = lastCheckedCity[lastCheckedCity.length - 1].name;
        temperatureNow.textContent = Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.temp - 273) + '°';

        // Таб с деталями
        detailsTitle.textContent = lastCheckedCity[lastCheckedCity.length - 1].name;

        parameterTemperature.textContent = `Temperature: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.temp - 273) + '°'}`;

        parameterFeelsLike.textContent = `Feels like: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.feels_like  - 273) + '°'}`;

        const sunriseTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunrise;
        const sunriseConverted =  format(new Date(1000 * sunriseTime), 'kk:mm');
        parameterSunrise.textContent = `Sunset: ${sunriseConverted}`;

        let sunsetTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunset;
        let sunsetConverted = format(new Date(1000 * sunsetTime), 'kk:mm');
        parameterSunset.textContent = `Sunset: ${sunsetConverted}`;
    }

    render()

    if (lastCheckedForecast.length != 0) {
        showForecast();
    } else {
        return
    }
}
*/ /*
showSavedParavetres()
*/ // Функция проверка
// checkStorage()
let check = document.querySelector(".added-citys_title");
function checkStorage() {
    // console.log(localStorage);
    // console.log(list);
    console.log(favouriteCities);
// console.log(lastCheckedCity);
// console.log(lastCheckedForecast);
// localStorage.clear()
}
check.addEventListener("click", checkStorage);

},{}]},["64l5X","bDbGG"], "bDbGG", "parcelRequire94c2")

//# sourceMappingURL=index.fbb3188c.js.map
