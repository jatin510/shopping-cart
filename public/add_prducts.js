$(() => {

   let productName = $('#productName')
   let productManufacturer = $('#productManufacturer')
   let productPrice = $('#productPrice')

   $('#btnProductAdd').click(() => {

      addProduct(
         productName.val(),
         productManufacturer.val(),
         productPrice.val(),
         (addProduct) => {
            window.alert('added')
         })

   })
})