'use strict';
const {
	Model, DATE
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class typeDocument extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	typeDocument.init({
        idTypDoc: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        dsTypDoc: {
            type: String,
            require: true,       
        },
        abrTypDoc:{
            type: String,
            require: true,       
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
        tableName: 'type_document',
        classMethods: {},
		sequelize
	});

	return typeDocument;
};
