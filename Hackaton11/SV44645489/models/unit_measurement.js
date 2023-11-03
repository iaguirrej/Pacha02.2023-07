'use strict';
const {
	Model, DATE, INTEGER
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class unitMeasurement extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	unitMeasurement.init({
        idUniMean: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dsUniMean: {
            type: String,
            allowNull: false      
        },
        abrUniMean: {
            type: String,
            allowNull: false     
        },
        multiple:{
            type: Number,
            defaultValue: 0.0
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
        tableName: 'unit_measurement',
        classMethods: {},
		sequelize
	});

	return unitMeasurement;
};
