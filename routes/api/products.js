const route = require('express').Router()
const Product = require('../../database/db').Product

route.get('/', (req, res) => {
   //Get all products

   Product.findAll()
      .then(products => {
         res.status(200).send(products)
      })
      .catch(err => {
         res.status(500).send({
            error: "Could not fetch products"
         })
      })

})

route.post('/', (req, res) => {

   //Validate the values

   if (isNaN(req.body.price)) {
      return res.status(403).send({
         error: " price is not valid"
      })
   }

   //Add a product
   Product.create({
         name: req.body.name,
         manufacturer: req.body.manufacturer,
         price: parseFloat(req.body.price)
      })
      .then(product => {
         res.status(200).send(product)
      })
      .catch(err => {
         res.status(500).send({
            error: 'Cannot add Product'
         })
      })

})

exports = module.exports = route