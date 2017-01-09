var Singleton = (function() {
  var instance;

  function Singleton() {
    if (!instance) {
      instance = this;
    } else {
      return instance;
    }
  }

  return Singleton;
})();

var s1 = new Singleton();
var s2 = new Singleton();

console.log(s1 === s2);
