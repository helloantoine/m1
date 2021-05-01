const staticDev = "app";
const assets = [
  "/",
  "/index.html",
  "/list.min.js",
  "/manifest.json",
  "/movies.js",
  "/serviceWorker.js",
  "/style.css",
  "/assets/ic/icon-72x72.png",
  "/assets/ic/icon-96x96.png",
  "/assets/ic/icon-128x128.png",
  "/assets/ic/icon-144x144.png",
  "/assets/ic/icon-152x152.png",
  "/assets/ic/icon-192x192.png",
  "/assets/ic/icon-384x384.png",
  "/assets/ic/icon-512x512.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
