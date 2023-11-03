'use strict';
const {
	Model, INTEGER, STRING, DATE
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class typeIdentityDocument extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	typeIdentityDocument.init({
        idTypIdeDoc: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dsTypIdeDoc: {
            type: STRING,
            require: true,       
        },
        abrTypIdeDoc:{
            type: STRING,
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
        tableName: 'type_identity_document',
        classMethods: {},
		sequelize
	});

	return typeIdentityDocument;
};

