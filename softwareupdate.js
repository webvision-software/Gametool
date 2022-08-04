function sw(){
    if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js').then(function(registration) {
// registration worked
console.log('Registration succeeded.');
registration.unregister().then(function(boolean) {
  // if boolean = true, unregister is successful
});
}).catch(function(error) {
// registration failed
console.log('Registration failed with ' + error);
});
};
        
setTimeout(function(){
    location.reload();
},300)

}