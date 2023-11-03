'use strict';
const {
	Model, INTEGER, STRING, JSON, DATE, DECIMAL
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class element extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			element.associate = function(models) {
				// associations can be defined here
				element.belongsTo(models.unit_measurement,
					{
						as: 'unit_measurement',
						foreignKey: 'idUniMean',
					}
				);				
			};
		}
	};
	element.init({
        idElement: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dsElement:{
            type: STRING,
            allowNull: false
        },
        typeElement:{
            type: JSON,
            allowNull: true
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
        tableName: 'element',
        classMethods: {},
		sequelize
	});
	return element;
};
