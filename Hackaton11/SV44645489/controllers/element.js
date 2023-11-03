const Sequelize     = require('sequelize');
const element       = require('../models').element;
module.exports = {
 
    insert(req, res) {
        return element
            .create (req.body)
            .then(element => res.status(200).send(element))
            .catch(error => res.status(400).send(error))
    }, 
    
};