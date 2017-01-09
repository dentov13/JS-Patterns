var module = (function functionName() {
  var strategy = {};

  return {
    exec: function() {
      strategy.exec();
    },
    setStrategy: function(s) {
      strategy = s;
    }
  };
})();

function Strategy(){};
Strategy.prototype.exec = function(){};

function Strategy1(){};
Strategy1.prototype = Object.create(Strategy.prototype);
Strategy1.prototype.exec = function() {
  console.log('1st behavior');
};

function Strategy2(){};
Strategy2.prototype = Object.create(Strategy.prototype);
Strategy2.prototype.exec = function() {
  console.log('2st behavior');
};

module.setStrategy(new Strategy1());
module.exec();
module.setStrategy(new Strategy2());
module.exec();
