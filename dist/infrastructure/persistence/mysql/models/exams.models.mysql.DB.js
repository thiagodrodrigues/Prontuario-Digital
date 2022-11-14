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
exports.default = mysql_Database_1.MySqlDatabase.getInstance().createModel('exams', {
    idExams: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idExams'
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'user'
            },
            key: 'idUser'
        }
    },
    exam: Sequelize.DataTypes.STRING,
    date: Sequelize.DataTypes.DATE,
    status: Sequelize.DataTypes.STRING,
    clinic: Sequelize.DataTypes.STRING,
    doctor: Sequelize.DataTypes.STRING,
    comments: Sequelize.DataTypes.NUMBER,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXMubW9kZWxzLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL21vZGVscy9leGFtcy5tb2RlbHMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUN2QyxzREFBa0Q7QUFFbEQsa0JBQWUsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDO0lBQzNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDakMsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsS0FBSyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ2pDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRTtnQkFDRyxTQUFTLEVBQUUsTUFBTTthQUNuQjtZQUVSLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7S0FDSjtJQUNELElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDaEMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtJQUM5QixNQUFNLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2pDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDbEMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNsQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3BDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7SUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtDQUV0QyxDQUFDLENBQUEifQ==