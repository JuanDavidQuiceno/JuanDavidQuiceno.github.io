'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "92a9b5c9e18c96d14cda436e8356e148",
"index.html": "01ac9e755ce77eb51ccd7efd97ea24ca",
"/": "01ac9e755ce77eb51ccd7efd97ea24ca",
"main.dart.js": "440caa6ecc44f9f4e527e9818d52e9b5",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a80db1932e1bfea650f91136be3649d1",
"assets/AssetManifest.json": "6edf16c7df7f5efa4498f7d56fb5371e",
"assets/NOTICES": "3c4efb064eec68d5312785aa947977db",
"assets/FontManifest.json": "f652d985c3ffe1839b02d4d24ab8b088",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/information/scooter-entrega-app.png": "2b3be28a476da7e5db08e59960549b1b",
"assets/assets/information/scooter-app.png": "11fc3d644b568fb30193bf228cb91d74",
"assets/assets/information/salud.png": "366630fd5d006df33e9cce227ce6f100",
"assets/assets/not-found-large.png": "da385dcb7d9f1e3e9380babe155f84df",
"assets/assets/no-image.png": "acb907ceb1d75d6297681e6b0962777f",
"assets/assets/no-icon1.png": "9907d06aefd20069d74a159a5e6251ab",
"assets/assets/no-icon2.png": "4c095348d718fd15e24c806f41673783",
"assets/assets/loading.gif": "a0a7f99bbe4eb3f98bc9c957d8dd1756",
"assets/assets/image/email-verificate.svg": "cde8e1ee3e9b5a05d0933016140ff353",
"assets/assets/image/otp-verification.svg": "95992621e7633ebea62398a64f889e76",
"assets/assets/image/auth/auth-1.png": "dbbe1422983828926dc3118085a054db",
"assets/assets/image/auth/auth-0.png": "3ce0e43ec4b7c2b6017964f8fa43d81f",
"assets/assets/image/auth/auth-2.png": "724e5b1b5ddf0d3a1f1188ad670eb3fb",
"assets/assets/image/boarding/boarding-1.png": "97300441e46e1cd89f489907ba58055d",
"assets/assets/image/boarding/boarding-3.png": "882daa0025b7244b3938f8d4f2fa62b5",
"assets/assets/image/boarding/boarding-2.png": "1ea857b058f5539b586d2c8f79ef703b",
"assets/assets/image/reset-password.svg": "566839c375df95b529cfeaf71211befe",
"assets/assets/error.png": "0334dd917e945be4852faca00fb45305",
"assets/assets/icon/document.png": "2cda2d8aac3c324089818fb3f28308f7",
"assets/assets/icon/notificacion.png": "1a83c6f4baa47aa38f3f784ee57fca7c",
"assets/assets/icon/location-pin.png": "725e0fdc80390cdc70011e364c2040a8",
"assets/assets/icon/factura%2520(1).png": "70e834641d0747fd8996a793459a4810",
"assets/assets/icon/distance.png": "848b3186d6e1271c7a2ae954e286828d",
"assets/assets/icon/factura%2520(2).png": "e060a04ebc758ebeddac5653967b7926",
"assets/assets/icon/factura.png": "040328f1580da0c8bd150455c399b3df",
"assets/assets/icon/scooter.png": "7aced29f6c57d466886afd4517f086d3",
"assets/assets/not-found.png": "617bb8cfd18a69242eebe74011aa845d",
"assets/assets/fonts/lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/pedi2ya.png": "ed80640f4c4882733fa1c8943b3479cc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
