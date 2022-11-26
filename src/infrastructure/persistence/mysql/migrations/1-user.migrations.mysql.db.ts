import * as Sequelize from 'sequelize';
import { DataType } from 'sequelize-typescript';

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
            birthDate: Sequelize.DataTypes.DATE, 
            telephone: Sequelize.DataTypes.STRING,
            maritalStatus: Sequelize.DataTypes.STRING,
            sex: Sequelize.DataTypes.STRING,
            weight: Sequelize.DataTypes.DECIMAL(5,2),
            height: Sequelize.DataTypes.DECIMAL(5,2),
            zipCode: Sequelize.DataTypes.STRING,
            address: Sequelize.DataTypes.STRING,
            number: Sequelize.DataTypes.INTEGER,
            neighborhood: Sequelize.DataTypes.STRING,
            complement: Sequelize.DataTypes.STRING,
            state: Sequelize.DataTypes.STRING,
            city: Sequelize.DataTypes.STRING,
            smoke: Sequelize.DataTypes.STRING,
            drugs: Sequelize.DataTypes.STRING,
            exercises: Sequelize.DataTypes.STRING,
            recreation: Sequelize.DataTypes.STRING,
            familialDisease: Sequelize.DataTypes.STRING,
            treatment: Sequelize.DataTypes.STRING,
            allergy: Sequelize.DataTypes.STRING,
            pregnant: Sequelize.DataTypes.STRING,
            medicines: Sequelize.DataTypes.STRING,
            disease: Sequelize.DataTypes.JSON,
            bloodType: Sequelize.DataTypes.STRING,
            status: Sequelize.DataTypes.BOOLEAN,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}