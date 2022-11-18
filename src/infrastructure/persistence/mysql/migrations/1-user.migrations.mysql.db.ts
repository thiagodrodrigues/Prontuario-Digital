import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            idUser: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idUser',
                autoIncrement: true
            },
            name: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            password: Sequelize.DataTypes.STRING,
            birthDate: {type:Sequelize.DataTypes.DATE, allowNull: true},
            healthPlan:{type:Sequelize.DataTypes.STRING, allowNull: true},
            allergy: {type:Sequelize.DataTypes.STRING, allowNull: true},
            bloodType: {type:Sequelize.DataTypes.STRING, allowNull: true},
            weight: {type:Sequelize.DataTypes.INTEGER, allowNull: true},
            height: {type:Sequelize.DataTypes.INTEGER, allowNull: true},
            address: {type:Sequelize.DataTypes.STRING, allowNull: true},
            telephone: {type:Sequelize.DataTypes.STRING, allowNull: true},
            emergency:{type:Sequelize.DataTypes.STRING, allowNull: true},
            medicines: {type:Sequelize.DataTypes.STRING, allowNull: true},
            photo: {type:Sequelize.DataTypes.STRING, allowNull: true},
            comments: {type:Sequelize.DataTypes.STRING, allowNull: true},
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}