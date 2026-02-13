const CACHE_NAME = 'mon-app-cache-v2'; // Version mise à jour pour forcer le cache
const URLS_A_GARDER = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/manifest.json',
  'icon.png'  // Le nouveau fichier icône
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_A_GARDER);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
