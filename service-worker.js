"use strict";var precacheConfig=[["/sm-port-react/index.html","c0998bcc2bdeece598c5f30c849254bd"],["/sm-port-react/static/css/main.0122fd7b.css","2721eac03d06cb0e1e8f07717077da77"],["/sm-port-react/static/js/main.63e60fda.js","f751347928680b382d1e60186f75a9dc"],["/sm-port-react/static/media/SourceSansPro-ExtraLight.3bb60a8a.ttf","3bb60a8ae87f0819ee4a8641b2720a78"],["/sm-port-react/static/media/SourceSansPro-Light.b2e90cc0.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/sm-port-react/static/media/SourceSansPro-Regular.ba6cad25.ttf","ba6cad25afe01d394e830f548a7f94df"],["/sm-port-react/static/media/digi-bg1.3cf818fe.png","3cf818fefc94072ecc87291972c1acc6"],["/sm-port-react/static/media/finger-swipe.4df0fcdd.svg","4df0fcdd9e167dce2d38b3216be11db6"],["/sm-port-react/static/media/location.73de59f7.svg","73de59f75c5657cdf6b9471d838641aa"],["/sm-port-react/static/media/me-trans.6a1c5f21.png","6a1c5f2105ec16fbafa48e4b047b37dc"],["/sm-port-react/static/media/minus.6e35eb23.svg","6e35eb2309d7eea2141ffe32240835e1"],["/sm-port-react/static/media/plus.a718b9d8.svg","a718b9d8f3bb7a9619ea681ad0efff71"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var n="/sm-port-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});