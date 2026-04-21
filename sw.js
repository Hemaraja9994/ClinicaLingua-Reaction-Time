// Bump this version string on every deploy to invalidate old caches.
const CACHE_VERSION = 'v3-lagoon-2026-04-17';
const CACHE_NAME = `clinlingua-rt-${CACHE_VERSION}`;

const urlsToCache = [
  './index.html',
  './style.css',
  './app.js',
  './logo.png',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+Kannada:wght@400;600&family=Noto+Sans+Malayalam&family=Noto+Sans+Tamil&family=Noto+Sans+Telugu&family=Noto+Sans+Devanagari&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install: pre-cache core assets, then immediately activate (don't wait for old tabs to close)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate: delete any older caches from previous versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('clinlingua-rt-') && k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for app files so users always get the latest deployment.
// Falls back to cache only if offline. Cross-origin (fonts/CDN) stays cache-first for speed.
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    // Network-first for our own HTML/CSS/JS — keeps updates fresh
    event.respondWith(
      fetch(req)
        .then(networkResp => {
          const copy = networkResp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          return networkResp;
        })
        .catch(() => caches.match(req).then(cached => cached || caches.match('./index.html')))
    );
  } else {
    // Cache-first for fonts & CDN assets (they rarely change)
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(networkResp => {
        const copy = networkResp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return networkResp;
      }))
    );
  }
});
