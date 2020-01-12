//import { promises } from "dns"

//https://developers.google.com/web/fundamentals/app-install-banners/
const cacheName ='site-static-v1'//
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/style.css',
    'https://fonts.googleapis.com/css?family=Quicksand:700&display=swap'
]

self.addEventListener('install', evt => {
    
    evt.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('reinstalled cache')
            cache.addAll(assets)
        })
    )
    

})


self.addEventListener('activate', evt => {
    
    //cache versioning
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            )
        })
    )
    
});



self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheResponse => {
            return cacheResponse || fetch(evt.request)
        })
    )
})
