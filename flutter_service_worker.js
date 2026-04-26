'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "39d04cd887a67b6842d08b87b7639326",
".git/config": "8c579a67b3bb84a6f38e5bd6dd5e027b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "64b3210cdb01ab5b0a0f01a1c629496b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3725e072efcd96cce77a51033ba4f185",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67c469687053cd39771ccff256bb1fef",
".git/logs/refs/heads/main": "ec07880732eb13c9351471c6d6de78c2",
".git/logs/refs/remotes/origin/main": "9a8d56e867acc231e8860fab74743f08",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0f/11f85fc03dd92e7bda5fda2a143b368e78850d": "0b57c31075e1ea05b2960b626b337202",
".git/objects/12/f91076f4d6668f5121744cfc05143a3954a96f": "9149f69416862feb28904db0f73b5ce3",
".git/objects/17/c69526bfbe09ca8bbd980e62b337ae075f1fc2": "d40615f2b3e57f151cf4afb1f8408ae5",
".git/objects/1f/590d03cee841d2ce2476201bd61ad930373aee": "277a3aa35369f8a4a36d618018e3e681",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/b4e5fb6e352c36e3c6af2d7c569ae5580fd0e2": "921710b291648e79dcb5f041d7fe6b89",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/32/0b0590962a31b2ab5c55ac1e6c1761e3a957bc": "ac1a22a006969959474705458e7b1c0b",
".git/objects/32/fd6e084bc52cb3581ec91b36db6425c2e9d2cd": "c6290e12bf75e51ffaab64f364489c29",
".git/objects/3a/8077f95f5ba923ba908529399cd9d25bbda057": "fea9f3ec9278ff4fc8dd5e7f04dca224",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e1e22ea99cf83ed0136611962d8f96a2c6b512": "868cc3a39125396e98e920a8167a5969",
".git/objects/4d/42ee95f655f0db30bb25be65280eee444c777e": "3417ccf590fda8633d6cd404a2cf9382",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/4892b12c889ff65dc13a77da7e7cb5196a69a5": "d1d9b285aa2c2845fe164af435043eb7",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/55/eb733b303d2ccf934de814b1ca0cb00748fc5f": "367ca7ed11bc1a5fcb667523bd627827",
".git/objects/56/68e37e389a0b82483886f13175221257ef9fa9": "7d03852850397c735710c3cd15870e41",
".git/objects/59/8eb60a1618a23c3aa3587acdf4177607c51a75": "1d95ab7445db9dc85e6fbdeaee20babe",
".git/objects/61/18616e9d6ad1e268bfbbd25443dd9c910c2e01": "fc4937d984235b1a20abee485a630e31",
".git/objects/66/98cd97c18eed60f56cca3424c99a6798598573": "699ee6f8aaef48fb30f2fbe3d26ef823",
".git/objects/6d/27f5944704c123634569a78499773ed2e8dca2": "c0dd50c94acbe7c31750d1e11a45a167",
".git/objects/6d/da2eb5d8ee822b26bc7aeba2619f1551b32c60": "dc2328ef0b5a1d993901ec6193396ab7",
".git/objects/72/1da2fdaa90dff724662f73ff613df95f131769": "1eb9ab2d440443735c27987c70494adc",
".git/objects/76/19f5a6f92d23d1d320badfa475ba8359d2873d": "931da75d58d26f53969c81a72b62b1c9",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/738be735e2c740d2252225926911d1f5b227c9": "5a25feac2a392acaef1a2e1481bdca93",
".git/objects/95/c8ed9f917153d4143cb104229225d8ec60787d": "743c63dd1d54879a16ce7204eef1ba20",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/ac/248c498e9cb134ac6c4ce134cbd307b3359bdc": "e958b75ebc110753691cba29ac83328b",
".git/objects/b2/12e87b5b9d1907ae3de890142d0b63b00f295c": "73741e92d5b4432d13b5d182c319fbbb",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0e0bb790e29fb27b1551e137a0c6621892df9f": "6b31288b2a53d02db454912f46c7e8fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d2/b9d680d0e82838f1500157b176fa667fa79932": "90ef49bafa9959791872692977749ca0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/40933f3d4db3574c7ffa583cc6242ff21215bc": "aff71c6b6493d423abc1bf8e9ac34378",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3cb3f9eb1babeec2a5b44bd62ff8150cbef69d": "3ddb5e4269e308a61d2be4e587e2071e",
".git/objects/f2/e597c5713fb141634e85dbb2695bfa58568122": "03f1417d7fb9f58cf6440d2b91b85405",
".git/objects/f7/6eb3c0f81380ee5ed5c60efbaf306cafd7df43": "36b71c53488cba7171604173d4e2e5c6",
".git/objects/fe/35ab9ac317066222642f4c1410e06d4b3d1bea": "bd5cf871ba3471622723e55cae9c4063",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/pack/pack-6068ca0e315c91c3359fd90b11bdefa9c4ea6ebc.idx": "0a2a533a932f4f042cdcba5c2ae20b4e",
".git/objects/pack/pack-6068ca0e315c91c3359fd90b11bdefa9c4ea6ebc.pack": "042513a714f90486526df5a5c0f15ce8",
".git/objects/pack/pack-6068ca0e315c91c3359fd90b11bdefa9c4ea6ebc.rev": "3ab2400f4eec1a3157cd08677ffd2624",
".git/objects/pack/tmp_pack_ca846B": "4a7ad3ca50a087fce3c6cbd856337a2c",
".git/refs/heads/main": "bb78a76a83473bacdda116350cc95169",
".git/refs/remotes/origin/main": "bb78a76a83473bacdda116350cc95169",
"assets/AssetManifest.bin": "5447e19a1c8e7d49cf16de12f95cf54f",
"assets/AssetManifest.bin.json": "46dfd41d1719fcaee5bfab3c05f574d0",
"assets/AssetManifest.json": "3b73545b9017daf4d8762975be460b28",
"assets/assets/11.png": "d164cc0d3ea6e344120d86c3f678a30f",
"assets/assets/22.png": "927fcaefd4c96179de068d62b327f697",
"assets/assets/33.png": "795681a2371e7022cad816e3a321d17a",
"assets/assets/44.png": "8fc415ad01782407ab6541ebd5b31a1c",
"assets/assets/bg.png": "42aee560d0906eaf055b94fc2f5bb597",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "af878732d2753093aa02efab45098cd9",
"assets/NOTICES": "0582d055d3d65f0d0e0ab6f11d65488c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d0f8bf722b70938885420213034a00f6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9fbad6fd0f05d595ec5f9811e264cfd2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e4e40ea4be745efe7cf31565a31a0f3",
"/": "5e4e40ea4be745efe7cf31565a31a0f3",
"main.dart.js": "2f1f02a52a62fecd0f1b8ed0c90fd6e3",
"manifest.json": "2076d400abb37526653769dd8a49be80",
"version.json": "853bf034df1bab37873e2383f8bedbe0"};
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
