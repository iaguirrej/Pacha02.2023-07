const Sequelize     = require('sequelize');
const typeIdentityDocument       = require('../models').typeIdentityDocument;
module.exports = {
 insert(req, res) {
    return typeIdentityDocument
        .create (req.body)
        .then(typeIdentityDocument => res.status(200).send(typeIdentityDocument))
        .catch(error => res.status(400).send(error))
 },
 
 list(_, res) {
     return typeIdentityDocument.findAll({})
        .then(typeIdentityDocument => res.status(200).send(typeIdentityDocument))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return user.findAll({
         where: {
             username: req.params.username,
         }
     })
     .then(user => res.status(200).send(user))
     .catch(error => res.status(400).send(error))
  },
};