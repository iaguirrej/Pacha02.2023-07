const Sequelize     = require('sequelize');
const product       = require('../models').product;
module.exports = {
 
    insert(req, res) {
        return product
            .create (req.body)
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error))
    }, 
    
};