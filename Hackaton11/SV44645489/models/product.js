'use strict';
const {
	Model, INTEGER, STRING, DATE, DECIMAL
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			product.associate = function(models) {
				// associations can be defined here
				product.belongsTo(models.unit_measurement,
					{
						as: 'unit_measurement',
						foreignKey: 'idUniMean',
					}
				);				
			};
		}
	};
	product.init({
        idProduct: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dsProduct:{
            type: STRING,
            allowNull: false
        },        
        idUniMean:{
            type: INTEGER,
            allowNull: false,
            defaultValue: null
        },
        multiple:{
            type: INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        quantity:{
            type: INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        cost:{
            type: DECIMAL,
            allowNull: true,
            defaultValue: 0.00
        },
        utility:{
            type: DECIMAL,
            allowNull: true,
            defaultValue: 0.00
        },
        price:{
            type: DECIMAL,
            allowNull: true,
            defaultValue: 0.00
        },
        createdAt: {
            type: DATE,
            allowNull: false            
        },
        updatedAt: {
            type: DATE,
            allowNull: false
          }
	}, 
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'product',
        classMethods: {},
		sequelize
	});
	return product;
};
