//chrome and safari support manifest. other browsers are slowly catching up
//Json are files of objects
{
    "name": "Dinner Generator" //name on the splash screen while app is loading
    "short_name": "DinnerGenerator", //name that will be present underneath icon on home screen or desktop app
    "start_url": "/index.html",//the page you want the app to load to
    "display": "standalone", //standalone gives it the native app feel as opposed to "browser" which would still have the browser bar on top
    "background_color": "#cfb997",//background of loading splash screen
    "theme_color": "#f0e7db",//background of little bar on top of the app, little detail to make it feel like a native app
    "orientation": "portrait-primary",//orientation on app opening
    "icons": [ //icons are displayed as objects within an array. My browser says i had to have icons minmun 144x144. added in other sizes as well
        {
            "src": "/icons/dinner-64x64.png",
            "type": "image/png",
            "size": "64x64"
        },
        {
            "src": "/icons/dinner-128x128.png",
            "type": "image/png",
            "size": "128x128"
        },
        {
            "src": "/icons/dinner-256x256.png",
            "type": "image/png",
            "size": "256x256"
        }
    ]
}