'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-icon-144x144.png": "2af86e5d93bc52f16da89d5b2ce73d4d",
"android-icon-192x192.png": "250590e16cfa913afd4527c40f35ae16",
"android-icon-36x36.png": "22841fe47112223cf198d71f2835e5f8",
"android-icon-48x48.png": "212224fc77593499fcbe35e6412774e8",
"android-icon-72x72.png": "b1c8667ea52dd599d86e1f18bd6708e6",
"android-icon-96x96.png": "47967adba51d5def9315a04847061dc2",
"apple-icon-114x114.png": "4f8afcb760c09cadf341ec3dd471aca9",
"apple-icon-120x120.png": "9a8d8a4e6379d189ad9953ac985d36e4",
"apple-icon-144x144.png": "2af86e5d93bc52f16da89d5b2ce73d4d",
"apple-icon-152x152.png": "113ec974e3c437a21504310f6cb15be8",
"apple-icon-180x180.png": "efb8b64fc2f183d5d04af1fb8677e787",
"apple-icon-57x57.png": "ba187a71b4de41c5c24a615c3f1c74b1",
"apple-icon-60x60.png": "230d1f78f10d3535675f4220d365215b",
"apple-icon-72x72.png": "b1c8667ea52dd599d86e1f18bd6708e6",
"apple-icon-76x76.png": "af5ee9d48b08bd80608615568f200cc1",
"apple-icon-precomposed.png": "eee7b65dcbc1a1b1f34fd09b49bd2a17",
"apple-icon.png": "eee7b65dcbc1a1b1f34fd09b49bd2a17",
"assets/AssetManifest.bin": "e4401f5caeff54e90e6d102200001eff",
"assets/AssetManifest.bin.json": "9ca18c29db4cbb034b1479433d390e60",
"assets/AssetManifest.json": "0847f047d2a2ad20f61716fd87a260b9",
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
"assets/fonts/MaterialIcons-Regular.otf": "81f75f55628017b3b176239673eb13be",
"assets/NOTICES": "68599e36a90304b4f6cf0564a2b947fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/android-icon-144x144.png": "2af86e5d93bc52f16da89d5b2ce73d4d",
"assets/web/android-icon-192x192.png": "250590e16cfa913afd4527c40f35ae16",
"assets/web/android-icon-36x36.png": "22841fe47112223cf198d71f2835e5f8",
"assets/web/android-icon-48x48.png": "212224fc77593499fcbe35e6412774e8",
"assets/web/android-icon-72x72.png": "b1c8667ea52dd599d86e1f18bd6708e6",
"assets/web/android-icon-96x96.png": "47967adba51d5def9315a04847061dc2",
"assets/web/apple-icon-114x114.png": "4f8afcb760c09cadf341ec3dd471aca9",
"assets/web/apple-icon-120x120.png": "9a8d8a4e6379d189ad9953ac985d36e4",
"assets/web/apple-icon-144x144.png": "2af86e5d93bc52f16da89d5b2ce73d4d",
"assets/web/apple-icon-152x152.png": "113ec974e3c437a21504310f6cb15be8",
"assets/web/apple-icon-180x180.png": "efb8b64fc2f183d5d04af1fb8677e787",
"assets/web/apple-icon-57x57.png": "ba187a71b4de41c5c24a615c3f1c74b1",
"assets/web/apple-icon-60x60.png": "230d1f78f10d3535675f4220d365215b",
"assets/web/apple-icon-72x72.png": "b1c8667ea52dd599d86e1f18bd6708e6",
"assets/web/apple-icon-76x76.png": "af5ee9d48b08bd80608615568f200cc1",
"assets/web/apple-icon-precomposed.png": "eee7b65dcbc1a1b1f34fd09b49bd2a17",
"assets/web/apple-icon.png": "eee7b65dcbc1a1b1f34fd09b49bd2a17",
"assets/web/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"assets/web/favicon-16x16.png": "8e609ae4ddbbcda47a2e95bc6978d526",
"assets/web/favicon-32x32.png": "efbc5a4c8d6541aa9c7fb02a01c77c01",
"assets/web/favicon-96x96.png": "47967adba51d5def9315a04847061dc2",
"assets/web/favicon.ico": "017777cf760998dfb506f4e443c4ed49",
"assets/web/favicon.png": "0a9d63a9e9d7b6990b1c246f38564af0",
"assets/web/index.html": "b02f6bb198b6ac9945cf413746c6ad97",
"assets/web/manifest.json": "6b719ca4407e9d7a48f887b8f7e3f4cb",
"assets/web/ms-icon-144x144.png": "2af86e5d93bc52f16da89d5b2ce73d4d",
"assets/web/ms-icon-150x150.png": "0b2130607f01efd450dd97b0fd17c1fa",
"assets/web/ms-icon-310x310.png": "9effc20341db0157a4cf8551af50aa59",
"assets/web/ms-icon-70x70.png": "d50bfcffd0cdf5c08df8f90f1c661d92",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon-16x16.png": "8e609ae4ddbbcda47a2e95bc6978d526",
"favicon-32x32.png": "efbc5a4c8d6541aa9c7fb02a01c77c01",
"favicon-96x96.png": "47967adba51d5def9315a04847061dc2",
"favicon.ico": "017777cf760998dfb506f4e443c4ed49",
"favicon.png": "0a9d63a9e9d7b6990b1c246f38564af0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9a135a0ac2ea919e678e134d44c7421f",
"icons/Icon-192.png": "99dd7183e1b968e43fee7f8cf55fe7f8",
"icons/Icon-512.png": "3e83712f7dec1ba26336515f4cd96eca",
"icons/Icon-maskable-192.png": "99dd7183e1b968e43fee7f8cf55fe7f8",
"icons/Icon-maskable-512.png": "3e83712f7dec1ba26336515f4cd96eca",
"index.html": "b02f6bb198b6ac9945cf413746c6ad97",
"/": "b02f6bb198b6ac9945cf413746c6ad97",
"main.dart.js": "2ce324aac6d7e1fe97760decbd0e5db0",
"manifest.json": "6b719ca4407e9d7a48f887b8f7e3f4cb",
"ms-icon-144x144.png": "2af86e5d93bc52f16da89d5b2ce73d4d",
"ms-icon-150x150.png": "0b2130607f01efd450dd97b0fd17c1fa",
"ms-icon-310x310.png": "9effc20341db0157a4cf8551af50aa59",
"ms-icon-70x70.png": "d50bfcffd0cdf5c08df8f90f1c661d92",
"version.json": "df04353532116832286c1821f7feeafc"};
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
