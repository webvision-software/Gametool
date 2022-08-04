self.addEventListener('install', event => {
    event.waitUntil(caches.open('App-name')
        .then(cache => cache.addAll(['/', 'index.html', 'style.css','manifest.json']))
        .then(() => self.skipWaiting()));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(response => response || fetch(event.request)));
});