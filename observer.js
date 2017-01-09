function Observable() {
  var observers = [];
  this.sendMessage = function(message) {
    for(var sub of observers) {
      sub.notify(message);
    }
  };
  this.addObservers = function(observer) {
    observers.push(observer)
  }
}

function Observer(behavior) {
  this.notify = function(message) {
    behavior(message);
  };
}

var observable = new Observable();
var obs1 = new Observer(function(message){console.log(message);});
var obs2 = new Observer(function(message){alert(message);});
observable.addObservers(obs1);
observable.addObservers(obs2);
setTimeout(function() {
  observable.sendMessage('Текущее время - ' + new Date());
}, 3000);
