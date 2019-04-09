var addCounter = (function() {
  var counter = 0;
  return function() {
    return (counter += 1);
  };
})();
var counter = addCounter();
console.log('counter:', counter);
