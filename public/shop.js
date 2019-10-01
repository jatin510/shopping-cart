function fetchProducts(done) {
  $.get("/api/products", data => {
    done(data);
  });
}

function addProduct(name, manuf, price, done) {
  $.post(
    "/api/products",
    {
      name: name,
      manufacturer: manuf,
      price: price
    },
    data => {
      done(data);
    }
  );
}
function addProductdemo(name, manuf, price, done) {
  $.post(
    "/api/products",
    {
      name: name,
      manufacturer: manuf,
      price: price
    },
    data => {
      done(data);
    }
  );
}

function createProductCard(product) {
  return $(`
         <div class="col-4 card mx-2 p-2">
            <div class="product-name"> ${product.name} </div>
            <div class="product-manufacturer">${product.manufacturer} </div>
            <div class="row">
               <div class="col m-3 p-3">
                  Rs. ${product.price}
               </div>
               <button class="col btn-primary m-3">Buy</button>
            </div>
        </div>
   `);
}
