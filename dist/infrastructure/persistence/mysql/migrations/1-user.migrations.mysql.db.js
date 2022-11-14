"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable('user', {
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
            healthPlan: Sequelize.DataTypes.STRING,
            allergy: Sequelize.DataTypes.STRING,
            bloodType: Sequelize.DataTypes.STRING,
            weight: Sequelize.DataTypes.NUMBER,
            height: Sequelize.DataTypes.NUMBER,
            address: Sequelize.DataTypes.STRING,
            telephone: Sequelize.DataTypes.NUMBER,
            emergency: Sequelize.DataTypes.NUMBER,
            medicines: Sequelize.DataTypes.NUMBER,
            photo: Sequelize.DataTypes.STRING,
            comments: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('user');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLm1pZ3JhdGlvbnMubXlzcWwuZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbWlncmF0aW9ucy8xLXVzZXIubWlncmF0aW9ucy5teXNxbC5kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBRXZDLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsTUFBTSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixLQUFLLEVBQUUsUUFBUTtnQkFDZixhQUFhLEVBQUUsSUFBSTthQUN0QjtZQUNELElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDaEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNqQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3BDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkMsVUFBVSxFQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNyQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ25DLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDckMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNsQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2xDLE9BQU8sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNyQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3JDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDckMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNqQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3BDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUV0QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQy9DLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0osQ0FBQSJ9