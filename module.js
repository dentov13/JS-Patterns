var BasketModule = (function() {

  var sum = 0;
  var goods = [];

  return {
    addProduct: function(product) {
      sum += product.price;
      goods.push(product);
    },
    printProducts: function() {
      for(var good of goods) {
        console.log(good.name, good.price);
      }
    }
  };

})();

var sault = {
  name: 'Мороженка',
  price: '20грн'
};

BasketModule.addProduct(sault);
BasketModule.printProducts();
