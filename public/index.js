$(() => {

   let productList = $('#product-list')



   fetchProducts((products) => {
      productList.empty()

      for (product of products) {
         productList.append(createProductCard(product))
      }
   })

})