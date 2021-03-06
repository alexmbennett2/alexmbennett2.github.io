'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5411e358ab99f44eb285e9f6649266b8",
"assets/FontManifest.json": "e7bd217c37a45cce60cc389e0f034e14",
"assets/fonts/AllertaStencil-Regular.ttf": "de576c535616e1d3aed12cb491aab3ab",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/images/abbott_logo.png": "c71f5a64a7db7035386495b9ca2f0fb2",
"assets/images/abbott_logo_black.png": "156a25460ed58b4bbf454d354f47b511",
"assets/images/abbott_logo_white.png": "958827d05b1f1f8c7a94727c88221db8",
"assets/images/about_group_picture.png": "3c90ce7e4a6330db4e4d678d9a679c0a",
"assets/images/alumni_eating_pattern.PNG": "3d23aca2fc7382a32b4e6390ebe83f6b",
"assets/images/alumni_gym.PNG": "bda1711f0357195f3e16c8fff57c8908",
"assets/images/alumni_physical_activity.png": "ea031b7e87535797964c3e3e4062756a",
"assets/images/alumni_physical_activity_bw.png": "4b12ed4b0cab7b5e51a3f39c2288ef3e",
"assets/images/books1.png": "b131b8b63110b8f30269a38eae02b3d2",
"assets/images/carbs_graph.png": "26db146c05260730963fc5776142ed96",
"assets/images/carbs_on_campus.png": "f19cd25d603c88058c2ede3a5a9ea4e2",
"assets/images/carbs_on_campus_bw.png": "867cc17b6e822adf3ea7d94a307a886e",
"assets/images/dexcom_logo.png": "11f547cb55c9e6e29baeb77771222133",
"assets/images/dhf_guide_smiles_2022.png": "2946fdbf1d9fece42966d8a6230c73f4",
"assets/images/dhf_logo.png": "36644afc303e197beeabd0f576b8d1c9",
"assets/images/dhf_logo_crop.png": "d3e6c33870e69fcebe021b0c1b8571c4",
"assets/images/exam1_graph.png": "9b896cb687bb986f224f3179f54c2df3",
"assets/images/exam2_graph.png": "c9b4ce8216558d5e25010a9609ac2ea3",
"assets/images/fitness_graph.png": "599fd3b35de069ca712e401bb4b1fee8",
"assets/images/gavel1.png": "c7bbee5f4f2c37c25499a5f1f270ca91",
"assets/images/gavel2.png": "b37f556165f81ecbe48511855251e0c8",
"assets/images/housing_graph.png": "2504dcd6056ace83c804e5f1642d95d9",
"assets/images/live_at_home.png": "8cf3f21b697b3889defefeea9fee50a3",
"assets/images/live_at_home_bw.png": "013eb0ee1a72ff65c31a856d6d310c6b",
"assets/images/logo_mylife_diabetescare.png": "ce552ce199e5e8c880795863e121d376",
"assets/images/logo_mylife_diabetescare_large.png": "03a81dabfb078012675ae94ba4ae3959",
"assets/images/logo_mylife_diabetescare_medium.png": "f6ddbe77ec9963b2833ab10c59905617",
"assets/images/logo_mylife_diabetescare_spaced.png": "bb638797bdd8e4468891051b0ff2183b",
"assets/images/minifridge_graph.png": "876c0be28a834f02247df35ab84462b7",
"assets/images/ypsomed_logo.png": "d3dc0b2b160701a3d8981bf259897925",
"assets/images/ypsomed_logo_black.png": "97d50bed85b0b1697d746d8fd84231c3",
"assets/images/ypsomed_logo_white.png": "600dc96fc60afd406135d7f34b5529c1",
"assets/NOTICES": "3a874ddd0c6a879de7f45e9440b1ae39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "1e5582d12486e19660118d304f95179c",
"canvaskit/canvaskit.js": "9d49083c3442cfc15366562eb578b5f3",
"canvaskit/canvaskit.wasm": "e58017ff67dd1419dbd7b720458fb1af",
"canvaskit/profiling/canvaskit.js": "dfb57a8542220c772374503baaf2632c",
"canvaskit/profiling/canvaskit.wasm": "2c16ab2af3d4fbad52da379264e260e8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "213f8551183e8eafced3c763eb5a9637",
"/": "213f8551183e8eafced3c763eb5a9637",
"main.dart.js": "fd0cbc9c4d623721861a34eff1957f04",
"manifest.json": "ecdc94e87d9b0cd5c3200a22d5c721ed",
"version.json": "52f2ce169af5f189c35f3687f2c04b03"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
