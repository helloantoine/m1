const staticDev = "app";
const assets = [
  "/",
  "/index.html",
  "/list.min.js",
  "/manifest.json",
  "/movies.js",
  "/pi-mini.png",
  "/serviceWorker.js",
  "/style.css",
  "/ic/icon-72x72.png",
  "/ic/icon-96x96.png",
  "/ic/icon-128x128.png",
  "/ic/icon-144x144.png",
  "/ic/icon-152x152.png",
  "/ic/icon-192x192.png",
  "/ic/icon-384x384.png",
  "/ic/icon-512x512.png",
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
