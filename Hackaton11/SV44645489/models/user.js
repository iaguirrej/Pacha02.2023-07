'use strict';
const {
	Model, INTEGER, STRING, JSON, DATE
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			user.associate = function(models) {
				// associations can be defined here
				user.belongsTo(models.type_identity_document,
					{
						as: 'type_identity_document',
						foreignKey: 'idTypIdeDoc',
					}
				);				
			};
		}
	};
	user.init({
        idUser: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        idTypIdeDoc:{
            type: INTEGER,
            allowNull: false    
        },
        nroIdeDoc:{
            type: STRING,
            allowNull: false
        },
        dsUser:{
            type: STRING,
            allowNull: false
        },
        nomUser:{
            type: STRING,
            allowNull: true,
            defaultValue: null
        },
        appUser:{
            type: STRING,
            allowNull: true,
            defaultValue: null
        },
        apmUser:{
            type: STRING,
            allowNull: true,
            defaultValue: null
        },
        businessName:{
            type: STRING,
            allowNull: true,
            defaultValue: null
        },
        tradeName:{
            type: STRING,
            allowNull: true,
            defaultValue: null
        },
        role:{
            type: JSON,
            defaultValue: null
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
        tableName: 'user',
        classMethods: {},
		sequelize
	});
	return user;
};


