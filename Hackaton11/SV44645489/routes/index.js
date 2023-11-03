/* Controllers */
const userController = require('../controllers/user');
const typeIdentityDocumentController = require('../controllers/type_identity_document');
const unitMeasurementController = require('../controllers/unit_measurement');
const elementController = require('../controllers/element');
const productController = require('../controllers/product');

module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   // Users of players
	app.post('/api/user/insert', userController.insert);
	app.get('/api/usuarios/list', userController.list);
	app.get('/api/usuarios/find/username/:username', userController.find);

    app.post('/api/type_identity_document/insert', typeIdentityDocumentController.insert);

    app.post('/api/unit_measurement/insert', unitMeasurementController.insert);

    app.post('/api/element/insert', elementController.insert);

    app.post('/api/product/insert', productController.insert);

};