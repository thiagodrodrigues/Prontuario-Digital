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
        return queryInterface.createTable('exams', {
            idExams: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idExams',
                autoIncrement: true
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
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('exams');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1leGFtcy5taWdyYXRpb25zLm15c3FsLmRiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL21pZ3JhdGlvbnMvMi1leGFtcy5taWdyYXRpb25zLm15c3FsLmRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFFdkMsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QyxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixhQUFhLEVBQUUsSUFBSTthQUN0QjtZQUNELE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRTt3QkFDRyxTQUFTLEVBQUUsTUFBTTtxQkFDbkI7b0JBRVIsR0FBRyxFQUFFLFFBQVE7aUJBQ2Q7YUFDSjtZQUNELElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDaEMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUM5QixNQUFNLEVBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2pDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDbEMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNsQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3BDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUV0QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQy9DLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0osQ0FBQSJ9