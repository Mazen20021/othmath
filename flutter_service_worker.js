'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "0ba367a56970b57a668c2b402d28d087",
"assets/AssetManifest.bin": "1016d23c080c7d52099b07f767b00a0c",
"assets/AssetManifest.bin.json": "b69ddbd236db287513e165b5fc29f447",
"assets/AssetManifest.json": "5d7baafd5fcf44dee575031b98d0fa63",
"assets/assets/images/BackGround.png": "bf8ab79deb8f533f754ba4180cda43b7",
"assets/assets/images/BG.png": "8a9f8e0ceaf586b99e16b0cc907a77ed",
"assets/assets/images/BG1.png": "e18900c24f7025eda7c49344e57f4c45",
"assets/assets/images/BG2.png": "eb2a54d5d4b204b548e138a6346b4951",
"assets/assets/images/BG3.png": "da9adc315509ed1c3b5e42ff3bf12667",
"assets/assets/images/blob.jpeg": "c61512aad4a5802bd4a1d6c67843b671",
"assets/assets/images/Devops.png": "19c441ec085ee1b955c6bb7f787d0d48",
"assets/assets/images/Mahmoud.png": "093b7f370c8e8ab4ca1e50ddcfbbc8c1",
"assets/assets/images/mr.png": "bc15a81aa442565e24965b03befb747c",
"assets/assets/images/mr2.jpg": "e0c3ed049154e577841a008d3d0f7e8f",
"assets/assets/images/mr3.jpg": "494aa2d6bc8d830bc5e97396cb0bc932",
"assets/assets/images/mr3.png": "956e33b219135aa63c60ca7ab9306fe7",
"assets/assets/images/mr4.png": "25d2daa78a23a79dc4ad6d256b592d91",
"assets/assets/images/mr5.png": "b380f2dae00f27f20bc501bfc1277ab0",
"assets/assets/images/people.png": "971912d8a2d82d741c03e1a3f6d79eb0",
"assets/assets/images/person.png": "38742ec480709493508f5ac8bd7de42b",
"assets/assets/images/Yassin.png": "c610f9c8d81bc6b5dc5227d768990839",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6ce25626bd1e323956e5370aea7c1416",
"assets/NOTICES": "0f9b97dd00adf97f8a4f751ee6d73582",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/apple-touch-icon.png": "0ba367a56970b57a668c2b402d28d087",
"assets/web/favicon-32x32.png": "64665252b886a269be4dae9099f79b9f",
"assets/web/favicon.ico": "44e667abde587cfc5aaacecba40798b9",
"assets/web/favicon.png": "0a9d63a9e9d7b6990b1c246f38564af0",
"assets/web/index.html": "0e5679bc7f16f51aa0ec916f508fdff0",
"assets/web/manifest.json": "cee050327b51249a0d894e02c9f87b37",
"assets/web/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-32x32.png": "64665252b886a269be4dae9099f79b9f",
"favicon.ico": "44e667abde587cfc5aaacecba40798b9",
"favicon.png": "0a9d63a9e9d7b6990b1c246f38564af0",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "64f5a78a90a982aa8ecee4659a1aa8ea",
"icons/Icon-192.png": "5a5733b5c5fcf1e41a0809d939dff133",
"icons/Icon-512.png": "4792288a7b51dd4b032da14f8c60d093",
"index.html": "0e5679bc7f16f51aa0ec916f508fdff0",
"/": "0e5679bc7f16f51aa0ec916f508fdff0",
"main.dart.js": "96871ae1ae479dd6889b4d7beaf33e5d",
"manifest.json": "cee050327b51249a0d894e02c9f87b37",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "9f957273a2b25d9abe8d893f40509dbe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
