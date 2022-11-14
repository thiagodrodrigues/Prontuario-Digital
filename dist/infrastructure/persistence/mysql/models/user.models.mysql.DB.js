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
const mysql_Database_1 = require("../mysql.Database");
exports.default = mysql_Database_1.MySqlDatabase.getInstance().createModel('user', {
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idUser'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbHMubXlzcWwuREIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbW9kZWxzL3VzZXIubW9kZWxzLm15c3FsLkRCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFDdkMsc0RBQWtEO0FBRWxELGtCQUFlLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQztJQUMxRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ2pDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLEtBQUssRUFBRSxRQUFRO0tBQ2xCO0lBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNoQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2pDLFFBQVEsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDcEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtJQUNuQyxVQUFVLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3JDLE9BQU8sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNyQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2xDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDbEMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3JDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDckMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNyQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2pDLFFBQVEsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDcEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtJQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0NBRXRDLENBQUMsQ0FBQSJ9