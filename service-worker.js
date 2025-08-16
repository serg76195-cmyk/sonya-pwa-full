self.addEventListener("install", event => {
  console.log("Service Worker: установлен");
  event.waitUntil(
    caches.open("sonya-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker: активирован");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
