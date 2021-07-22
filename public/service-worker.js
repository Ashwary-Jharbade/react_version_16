// Tip: By changing the cache-version we can invalidate the old cache
// and let the browser load the new one.
const self = this;
const version = 3;
const cacheName = 'cache-' + version;
const offlinePageUrl = ['offline.html',];
const urlsToCache = [
  'index.html',
  'react.png',
  offlinePageUrl
];

// ------------   INSTALL  ------------
self.addEventListener('install', event => {
  console.log("install called");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(urlsToCache);
    }).catch(err => console.error('Error while installing: ', err))
  );
});

// ------------   FETCH  ------------
self.addEventListener('fetch', event => {
  // We want to handle the case only if it's a navigation request
  // for an HTML page.
  console.log("fetch called");
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(offlinePageUrl);
      })
    );
  }
  else {
    event.respondWith(
      // We try to provide the data from the cache, if available,
      // falling back to the network otherwise.
      caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});

// Activate Service Worker
self.addEventListener('activate',(event)=>{
  const cacheWhiteList = [];
  cacheWhiteList.push(cacheName)
  console.log("activate called");
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if(!cacheWhiteList.includes(cacheName)){
          return caches.delete(cacheName)
        }
      })
    ))
  )
})