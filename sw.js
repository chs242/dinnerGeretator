//https://developers.google.com/web/fundamentals/app-install-banners/
const cacheName ='site-static-v3'
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/style.css',
    'https://fonts.googleapis.com/css?family=Quicksand:700&display=swap'
]

//lifecycle of PWA includes 3 stages. 'install', 'activate', 'fetch'

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
    //we don't want to cache any data response from the firestore
        if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
        evt.respondWith(
            caches.match(evt.request).then(cacheResponse => {
                return cacheResponse || fetch(evt.request)
            })
        )
    }
})
