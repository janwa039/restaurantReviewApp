let jennyCacheName = 'jenny-restaurant-cache'

// let cacheArray=

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(jennyCacheName).then(function(cache){
    return cache.addAll([
      '/',
      '/index.html',
      '/restaurant.html',
      '/js/',
      '/js/main.js',
      '/js/restaurant_info.js',
      '/js/dbhelper.js', 
      '/js/serviceReg.js', 
      '/data/restaurants.json',
      '/css/styles.css',
      '/img/1.jpg', 
      '/img/2.jpg', 
      '/img/3.jpg',
      '/img/4.jpg', 
      '/img/5.jpg', 
      '/img/6.jpg', 
      '/img/7.jpg', 
      '/img/8.jpg', 
      '/img/9.jpg', 
      '/img/10.jpg',
      '/restaurant.html?id=1',
      '/restaurant.html?id=2',
      '/restaurant.html?id=3',
      '/restaurant.html?id=4',
      '/restaurant.html?id=5',
      '/restaurant.html?id=6',
      '/restaurant.html?id=7',
      '/restaurant.html?id=8',
      '/restaurant.html?id=9',
      '/restaurant.html?id=10',
    ])
  }))
})

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          if (cache !== jennyCacheName) {
            return caches.delete(cache);
          }
        })
      )
    })
  )
})

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.open(jennyCacheName).then(function(cache) {
      return cache.match(e.request).then(function(response) {
        return (
          response ||
          fetch(e.request).then(function(response) {
            cache.put(e.request, response.clone());
            return response;
          })
        )
      })
    })
  )
})
