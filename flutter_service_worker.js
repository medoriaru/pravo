'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "78533d0cd3e885f3734e066d174bd96c",
"version.json": "2f88c2749bd3d3668bc3fa4e3dcf6a3f",
"favicon.ico": "1e897cdbe42a696e62c90a882a004600",
"index.html": "c8bab5e26df96ff174d26da325fa4bb4",
"/": "c8bab5e26df96ff174d26da325fa4bb4",
"privacy/index.html": "d61fefa0a57992ee26fde69da6f7ef73",
"firebase-messaging-sw.js": "320ea0e1925a08152df6ea5976e6dd22",
"main.dart.js": "7b6252384aed7504e3ede8f844a283c2",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"remove_account/index.html": "dd2437e2f7fd53297864af8741b3ece8",
"icons/Icon-192.png": "5dfce1c81d9190814fbac88dda889cd1",
"icons/Icon-maskable-192.png": "a5cfff9fa54b94349909e5442d13c263",
"icons/Icon-maskable-512.png": "42f423745476fefe21a3fa2283497722",
"icons/Icon-512.png": "246b55df35f89b03f9e99ae360f188cd",
"loading.css": "e2a0312959e4f10885dce12de03856b7",
"manifest.json": "d7599b5a6cf3699df3268a452a4a4663",
"assets/AssetManifest.json": "53eed9dbe5e32d66b95fc293e7b49cc6",
"assets/NOTICES": "6e1809e93062330697cb4c11dac4e337",
"assets/img/footer/payment/visa.png": "eee92e8dd68fc32a3e4d729214a99c9f",
"assets/img/footer/payment/sbp.png": "35f3981592506450a0d9c726332e00ea",
"assets/img/footer/payment/mastercard.png": "491fd28b493211513debfd180b2a2563",
"assets/img/footer/payment/mir.png": "66cfe6cf10d1aa658ec4d965c40b0e3d",
"assets/img/footer/google_play.png": "7e77a04a06b7e5c096beacd818799c0c",
"assets/img/footer/app_store.png": "9dd9df4923aeea2c00d2c98c17eb0256",
"assets/img/conference/icons/paperclip.svg": "6efa2b15688fc469840e9021d2753144",
"assets/img/conference/icons/send.svg": "b4f8bdbb10a9b55690798829595afd28",
"assets/img/vk.png": "1ec71d48224bf9c3a4cc94f1e2e14912",
"assets/img/components/search_icon.svg": "2bf32968b8527841a75fed150768d0ab",
"assets/img/components/trash_icon.svg": "af4f5c9e0530ca343ec247c103cf0ed6",
"assets/img/components/pen_icon.svg": "9d0e5bd1155f59068557d58e3e28c9d9",
"assets/img/components/export.svg": "7e91fd8c675cb202ff94923bbb74f089",
"assets/img/components/checkbox_unchecked.svg": "075daf4604f9e73c0db189f5635ba2d1",
"assets/img/components/teacher.svg": "1d7ff583d13f55c1174f44e3763e0ff6",
"assets/img/components/sms-tracking.svg": "5e377d3378a7e71e77988e9bd1c50d58",
"assets/img/components/educationicon.svg": "ea8468c9b1448649ab7f8abc153fde78",
"assets/img/components/checkbox_checked.svg": "be9d873e9306eb12d21582d7e4a554e1",
"assets/img/profile/avatar.jpg": "9ca3831ee0c70345fc8fa4bfdd6e7735",
"assets/img/logo.png": "794f79d93c81852f986f72020ac4a3a9",
"assets/img/main_page/banner.png": "ca66cbcd905799af0060037cc1256c4f",
"assets/img/main_page/banner_pravo.jpg": "fad2545dc8e20e97e4aebf68c574735a",
"assets/img/main_page/ads_mobile.svg": "d39f67e140a10177230558507ee5347e",
"assets/img/main_page/app_store.svg": "91394bddbc00660948afeca3e64fda57",
"assets/img/main_page/google_play.svg": "59988aed20e6a9e0e76514a4a2d318dd",
"assets/img/main_page/icons/psychotherapist.svg": "22d624ace6e1e9723e02ee16b65b76b9",
"assets/img/main_page/icons/Infectious.svg": "090bd5617783584bae853f4b8080552c",
"assets/img/main_page/icons/endocrinologist.svg": "776d56d8bb34fe975c1e056e44243b1b",
"assets/img/main_page/icons/neurologist.svg": "d5c7aff1efa164691a50ad6248728233",
"assets/img/main_page/icons/dermatologist.svg": "9e317024c233a2208dd88cc6da62556f",
"assets/img/main_page/icons/pulmonologist.svg": "b1cdc68078ec38b17a4f377f5ad319e9",
"assets/img/main_page/icons/cosmetologist.svg": "e13860fe32ce2dcb2f152361b48a56e0",
"assets/img/main_page/icons/cardiologist.svg": "db4386a39b6179fcbb161cb149bbf61d",
"assets/img/main_page/icons/gynecologist.svg": "e201b6bbcc9ecb1bb54e895d4e3a1552",
"assets/img/main_page/icons/urologist.svg": "9179afb6e8855ea3f94761eb6949b928",
"assets/img/main_page/icons/therapist.svg": "9587fb8958daa01b69a52dcb540e7d17",
"assets/img/main_page/icons/ophthalmologist.svg": "8a72080ddf781d929470eb3849e4d4fa",
"assets/img/main_page/icons/allergies.svg": "27e40d114108d15cb0e2bbd9b05f5595",
"assets/img/main_page/icons/otolaryngologist.svg": "8b9c272dfbd43143cd013912fef091bb",
"assets/img/main_page/icons/gastroenterologist.svg": "64c644aeed7544f372c06622d9edc59d",
"assets/img/main_page/icons_pravo/finansu.svg": "8c62507ec0782c1d1fb6501c70c56c3d",
"assets/img/main_page/icons_pravo/urist_v_sfere_it.svg": "f7b285a944e1a9f5e06b59ba5c50720c",
"assets/img/main_page/icons_pravo/strahovum_sporam.svg": "3ee5206589ddc93ed7714282f0a650b5",
"assets/img/main_page/icons_pravo/nedvigimost.svg": "58d5364fdb41b3cad9159cdb97e6b5d5",
"assets/img/main_page/icons_pravo/nalogovue_sporu.svg": "bd9ab98bea127977f4844237423b7948",
"assets/img/account/edit-2.svg": "23b9e844e9d4df022ac8b8770247515b",
"assets/img/account/home.svg": "c158e3aeb2f16f388b0468e468dba334",
"assets/img/account/document-text-fill.svg": "d38469501652e726a38968d5df768fb5",
"assets/img/account/ticket.svg": "46c68c2e40e0f59015ac49828938bd89",
"assets/img/account/percentage-square.svg": "a680aa4b7e98a6427aca026538e2860e",
"assets/img/account/support.svg": "e4ceba2db7de9207cd9ee1a5fdadfe3e",
"assets/img/account/card.svg": "35c104aa74e3f6c976b18916cce42431",
"assets/img/account/document-text.svg": "b6b2583fae56ecc5d3f8e435ce222de5",
"assets/img/account/profile_fill.svg": "83bddba7de5c75333d856a55d0d20b8e",
"assets/img/account/device-message.svg": "aa3aedfccf9441763f20ff9582ca0164",
"assets/img/account/profile.svg": "4ac4181233ba4cfea38482bc5168b92d",
"assets/img/account/document-download-fill.svg": "3c77846075a462a989d2587883a61807",
"assets/img/account/users.svg": "6f5941f78899536e71922cdb94f04c63",
"assets/img/google.png": "8a393c5430ca78fcd92b1c0a72ee0a23",
"assets/FontManifest.json": "1eca2cba739d886596c43dfc16198ea1",
"assets/AssetManifest.bin.json": "bdbabe8d3e5aebe15f92461d6e2582b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a10b36f1b323156d7a2909c9089501d2",
"assets/packages/app/img/footer/payment/visa.png": "eee92e8dd68fc32a3e4d729214a99c9f",
"assets/packages/app/img/footer/payment/sbp.png": "35f3981592506450a0d9c726332e00ea",
"assets/packages/app/img/footer/payment/mastercard.png": "491fd28b493211513debfd180b2a2563",
"assets/packages/app/img/footer/payment/mir.png": "66cfe6cf10d1aa658ec4d965c40b0e3d",
"assets/packages/app/img/footer/google_play.png": "7e77a04a06b7e5c096beacd818799c0c",
"assets/packages/app/img/footer/app_store.png": "9dd9df4923aeea2c00d2c98c17eb0256",
"assets/packages/app/img/conference/icons/paperclip.svg": "6efa2b15688fc469840e9021d2753144",
"assets/packages/app/img/conference/icons/send.svg": "b4f8bdbb10a9b55690798829595afd28",
"assets/packages/app/img/vk.png": "1ec71d48224bf9c3a4cc94f1e2e14912",
"assets/packages/app/img/components/search_icon.svg": "2bf32968b8527841a75fed150768d0ab",
"assets/packages/app/img/components/trash_icon.svg": "af4f5c9e0530ca343ec247c103cf0ed6",
"assets/packages/app/img/components/pen_icon.svg": "9d0e5bd1155f59068557d58e3e28c9d9",
"assets/packages/app/img/components/export.svg": "7e91fd8c675cb202ff94923bbb74f089",
"assets/packages/app/img/components/checkbox_unchecked.svg": "075daf4604f9e73c0db189f5635ba2d1",
"assets/packages/app/img/components/teacher.svg": "1d7ff583d13f55c1174f44e3763e0ff6",
"assets/packages/app/img/components/sms-tracking.svg": "5e377d3378a7e71e77988e9bd1c50d58",
"assets/packages/app/img/components/educationicon.svg": "ea8468c9b1448649ab7f8abc153fde78",
"assets/packages/app/img/components/checkbox_checked.svg": "be9d873e9306eb12d21582d7e4a554e1",
"assets/packages/app/img/profile/avatar.jpg": "9ca3831ee0c70345fc8fa4bfdd6e7735",
"assets/packages/app/img/logo.png": "ab79d0cf3f6f24ab28c3f058f5f1d555",
"assets/packages/app/img/main_page/banner.png": "ca66cbcd905799af0060037cc1256c4f",
"assets/packages/app/img/main_page/banner_pravo.jpg": "fad2545dc8e20e97e4aebf68c574735a",
"assets/packages/app/img/main_page/ads_mobile.svg": "d39f67e140a10177230558507ee5347e",
"assets/packages/app/img/main_page/app_store.svg": "91394bddbc00660948afeca3e64fda57",
"assets/packages/app/img/main_page/google_play.svg": "59988aed20e6a9e0e76514a4a2d318dd",
"assets/packages/app/img/main_page/icons/psychotherapist.svg": "22d624ace6e1e9723e02ee16b65b76b9",
"assets/packages/app/img/main_page/icons/Infectious.svg": "090bd5617783584bae853f4b8080552c",
"assets/packages/app/img/main_page/icons/endocrinologist.svg": "776d56d8bb34fe975c1e056e44243b1b",
"assets/packages/app/img/main_page/icons/neurologist.svg": "d5c7aff1efa164691a50ad6248728233",
"assets/packages/app/img/main_page/icons/dermatologist.svg": "9e317024c233a2208dd88cc6da62556f",
"assets/packages/app/img/main_page/icons/pulmonologist.svg": "b1cdc68078ec38b17a4f377f5ad319e9",
"assets/packages/app/img/main_page/icons/cosmetologist.svg": "e13860fe32ce2dcb2f152361b48a56e0",
"assets/packages/app/img/main_page/icons/cardiologist.svg": "db4386a39b6179fcbb161cb149bbf61d",
"assets/packages/app/img/main_page/icons/gynecologist.svg": "e201b6bbcc9ecb1bb54e895d4e3a1552",
"assets/packages/app/img/main_page/icons/urologist.svg": "9179afb6e8855ea3f94761eb6949b928",
"assets/packages/app/img/main_page/icons/therapist.svg": "9587fb8958daa01b69a52dcb540e7d17",
"assets/packages/app/img/main_page/icons/ophthalmologist.svg": "8a72080ddf781d929470eb3849e4d4fa",
"assets/packages/app/img/main_page/icons/allergies.svg": "27e40d114108d15cb0e2bbd9b05f5595",
"assets/packages/app/img/main_page/icons/otolaryngologist.svg": "8b9c272dfbd43143cd013912fef091bb",
"assets/packages/app/img/main_page/icons/gastroenterologist.svg": "64c644aeed7544f372c06622d9edc59d",
"assets/packages/app/img/main_page/icons_pravo/finansu.svg": "8c62507ec0782c1d1fb6501c70c56c3d",
"assets/packages/app/img/main_page/icons_pravo/urist_v_sfere_it.svg": "f7b285a944e1a9f5e06b59ba5c50720c",
"assets/packages/app/img/main_page/icons_pravo/strahovum_sporam.svg": "3ee5206589ddc93ed7714282f0a650b5",
"assets/packages/app/img/main_page/icons_pravo/nedvigimost.svg": "58d5364fdb41b3cad9159cdb97e6b5d5",
"assets/packages/app/img/main_page/icons_pravo/nalogovue_sporu.svg": "bd9ab98bea127977f4844237423b7948",
"assets/packages/app/img/account/edit-2.svg": "23b9e844e9d4df022ac8b8770247515b",
"assets/packages/app/img/account/home.svg": "c158e3aeb2f16f388b0468e468dba334",
"assets/packages/app/img/account/document-text-fill.svg": "d38469501652e726a38968d5df768fb5",
"assets/packages/app/img/account/ticket.svg": "46c68c2e40e0f59015ac49828938bd89",
"assets/packages/app/img/account/percentage-square.svg": "a680aa4b7e98a6427aca026538e2860e",
"assets/packages/app/img/account/support.svg": "e4ceba2db7de9207cd9ee1a5fdadfe3e",
"assets/packages/app/img/account/card.svg": "35c104aa74e3f6c976b18916cce42431",
"assets/packages/app/img/account/document-text.svg": "b6b2583fae56ecc5d3f8e435ce222de5",
"assets/packages/app/img/account/profile_fill.svg": "83bddba7de5c75333d856a55d0d20b8e",
"assets/packages/app/img/account/device-message.svg": "aa3aedfccf9441763f20ff9582ca0164",
"assets/packages/app/img/account/profile.svg": "4ac4181233ba4cfea38482bc5168b92d",
"assets/packages/app/img/account/document-download-fill.svg": "3c77846075a462a989d2587883a61807",
"assets/packages/app/img/account/users.svg": "6f5941f78899536e71922cdb94f04c63",
"assets/packages/app/img/google.png": "8a393c5430ca78fcd92b1c0a72ee0a23",
"assets/packages/app/assets/fonts/roboto.ttf": "00f28b39d465c105394945c2bf3b5cf7",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9e2dd739b3a52f139f46e0c344c6b8bd",
"assets/fonts/MaterialIcons-Regular.otf": "4830ef1847b3ba22ea66efb9aa942bc7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
