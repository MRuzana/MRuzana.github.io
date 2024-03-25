'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e73cc855e4f6d49db5775880a5ccf10e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "007154fc21b35a8d70eb0a5857f18354",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a803461bbe7fd786bad476cdb86274e3",
".git/logs/refs/heads/main": "abe9486fb895b34420139f878693dff6",
".git/logs/refs/remotes/origin/main": "98efca1ddddc6da365b32129a855d4cd",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/b8c3a31853ebf09cf3fcb9aab4ffaf85d89267": "17a47b77072d265ac0be69e5602c146f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/62a2cbf9d8b8afae500499e3ca39a1bcd129ac": "644be6b7291726ca92fcaee133d06645",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/3d/1ca19a0e2d6bbdfddc1eff0f994b70585b62d5": "07c237f0cf21d397fc028768f5a7b125",
".git/objects/41/21c4e01632ccf7bd7e5f6475d908072c6644b1": "a12cfd7b32173d0fd29ebdc5a9ebffd1",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/86e54bf3b4b1a3bcc1328aba96879eebc71b15": "fdbd899d051f48f63e7e6bf08d1bacff",
".git/objects/64/ecab81e4c1c17477bd94b96cc404812b66e3ba": "9aeccd189170db2fa660d30cd133cca5",
".git/objects/66/f63f5ddd50968dc5f238eed9df818df19f73eb": "b20723753b8f493904ff3bd5e82ec708",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7eded415651f381a85df4a12aabea29a689420": "efeb4ebc62beeb283faca7ecad43b2b8",
".git/objects/72/92985a65898ec52724cd8a1a775e0a4c700066": "e809960416e32fa0460ade6401ba6607",
".git/objects/75/168f4dc5ac81104cbf469432d7260076194a83": "55922ffe6b97f906e10687b2feec630f",
".git/objects/77/c7d8ac6e880c1c128c60724ab8b81ff8d5ceb7": "fda3264efcb3d9a8c2bf420875120eab",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/adb7e9207e92888882b86d50bf774242df8a25": "38a41ab9898006aadc9bd866eab9f306",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/f9787974f9e79677b4dfcf301bd9572b60323b": "08cf4da6c289c4c72fc23b8a49f204b8",
".git/objects/9a/230a7f989fcd866cbef30c1036f48d78932496": "0008ef7a34266dc1a36348295ec131c1",
".git/objects/9b/bad50ee9aa8f87255129fdf9a85d2d544bb04d": "805f3d5e2b36c2ef3a0fddd5c4441c92",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/a382b47319631b0ecbb1a2cfbb57b6eaa120b7": "5dca0944739ba6cc29ce7e24c7266135",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/6d8f01a9d7b950cd6633f95be198c0e052f7bd": "43b46cfa19e174328a622ee47daa7b1a",
".git/objects/bb/1faf728431eb642ecd8ad87730b619eb475e10": "a76d10ce5f20a953a9221a3e1a9b4fd4",
".git/objects/c0/08a1ad8c41295bec8f9771945da598b137d74a": "57e26144cc3d8cbb6c771d923fc11f33",
".git/objects/c1/84642fc99a23d156a2c41ede6603887b6a9870": "f12c16369e2783c4b3d9d8e0fd097cfe",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/23cb131c9f59e865bccd60301d2121db534026": "d856f6e8d048c8d371f7c03b2bb77054",
".git/objects/dc/7544fd2782c1acbfe4dc467fc9a96b1e606274": "34521437fa1872d1b5825f7712bb2c41",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/6684c46787c4a2184ed7b717e034ec101e3432": "df340f19a5381c984a6b357c8cea17fd",
".git/refs/heads/main": "a07004ad65d15eaa8e951a7a21f3cc37",
".git/refs/remotes/origin/main": "a07004ad65d15eaa8e951a7a21f3cc37",
"assets/AssetManifest.bin": "0b8d8339aab67ad60c57c1697c24726d",
"assets/AssetManifest.bin.json": "64c93c39c8c4fdccd9a5f88111edac5e",
"assets/AssetManifest.json": "d81ec77c758bc2c8d63f5bc0c10878ee",
"assets/assets/fonts/Inspiration-Regular.ttf": "35d8130ecad929cc4e659b266f1173c1",
"assets/assets/images/img.jpg": "3c66a32be847896486b2813a6f07708e",
"assets/assets/images/logo.png": "7678e29505c22cf93e66d9a0c42211e7",
"assets/assets/images/necklace1.jpg": "030437be1eb27ac1eb6f8e658d93c577",
"assets/assets/images/slider1.jpg": "3d57f8eea9b801bdbd5aa9ef12e0d26f",
"assets/assets/images/slider2.jpeg": "1817d30b53d084a6b867279097bbc44a",
"assets/assets/images/slider3.jpeg": "bcd3a44be85d5f08324a90ad9401a8cf",
"assets/assets/images/slider4.jpeg": "adaff680f7ef512c18736b688779d9a1",
"assets/assets/images/slider5.jpeg": "b7cfc3c245f7fdf36af06d8c03e9f7fa",
"assets/FontManifest.json": "572fcdf7e333e04d470501969429a701",
"assets/fonts/MaterialIcons-Regular.otf": "86cbcfc8f5887e4be32f11cac98fd0d4",
"assets/NOTICES": "74ffbd5f52bbdb27cde5cac32bbe2103",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90c46ff46446fc9c5b29991b711854be",
"/": "90c46ff46446fc9c5b29991b711854be",
"main.dart.js": "4fe1e6cd668ba56a85807f699ece2522",
"manifest.json": "9812adf06c88a9c5c95346c39f4a8a41",
"README.md": "7261b8c2cbc61ab4117fc9ebd28ea44e",
"version.json": "109173ce13bcae14bbb5262ce210a9e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
