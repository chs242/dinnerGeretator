//https://developers.google.com/web/fundamentals/app-install-banners/

//install service worker
//self refers to sw itself
//sw installs itself only if there is a change in the files. On reload
//if nothing in the files have cvhanged this won't be logged.
//(understand the lifecycle of the service worker)
self.addEventListener('install', evt => {
    console.log('sw been installed')
})

//activate sw. listening for sw activation
// even if something in the files have been changed this won't be
//logged. it is in waiting mode. check devtools;application;service workers
//and it will say waiting to activate becuase it could cause
//breaking changes in the app and affect UX. only activates when user
//has closed all instances of app in browser or on phone
self.addEventListener('activate', evt => {
    console.log('sw has been activated');
});


//another prerequisite for a pwa is that it must have fetch event
//to intercept fetch requests to the server
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt)
})
