self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('tally-counter').then((cache) => {
            return cache.addAll([
                '/',
                '/tally-counter/index.html',
                '/tally-counter/styles.css',
                '/tally-counter/app.js',
                '/tally-counter/manifest.json',
                '/tally-counter/icon.png'
            ]);
        });
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

