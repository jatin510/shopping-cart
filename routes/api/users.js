const route = require('express').Router()
const User = require('../../database/db').User

route.get('/', (req, res) => {
   //send array of all users
   // from database

   User.findAll()
      .then(users => {
         res.status(200).send(users)

      })
      .catch(err => {
         res.status(500).send({
            error: 'Couldz not receive users'
         })
      })
})

route.post('/', (req, res) => {
   //We expect the req to have name in it
   // We will create new User

   User.create({
         name: req.body.name
      })
      .then(user => {
         res.status(200).send(user)
      })
      .catch((err) => {
         res.status(500).send({
            error: 'could not add user'
         })
      })

})

exports = module.exports = route