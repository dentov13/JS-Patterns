function A() {
  this.get = function() {
    console.log("class A");
  };
}
// --------------
function Decorator(obj) {
  this._obj = obj;
}
Decorator.prototype = Object.create(A.prototype);
Decorator.prototype.constructor = Decorator;

// ----- B ------
function DecoratorB(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this._obj.get();
    console.log('Boosted');
  };
}
DecoratorB.prototype = Object.create(Decorator.prototype);
DecoratorB.prototype.constructor = DecoratorB;

// ----- C ------
function DecoratorC(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this._obj.get();
    console.log('Boosted x2');
  };
}
DecoratorC.prototype = Object.create(Decorator.prototype);
DecoratorC.prototype.constructor = DecoratorC;

var obj1 = new A(),
    obj2 = new DecoratorB(new A()),
    obj3 = new DecoratorC(new A()),
    obj4 = new DecoratorC(new DecoratorB(new A()));

obj1.get();
console.log('---------------');
obj2.get();
console.log('---------------');
obj3.get();
console.log('---------------');
obj4.get();
console.log('---------------');
