if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
    .then(function() {
      console.log('Registered')
    })
    .catch(function() {
      console.log('Cant register')
    })
}
