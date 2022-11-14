"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function default_1(user) {
    let shufflePass = bcrypt_1.default.hashSync(user.password, 10);
    const userGeneral = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        password: shufflePass,
        birthDate: user.birthDate,
        healthPlan: user.healthPlan,
        allergy: user.allergy,
        bloodType: user.bloodType,
        weight: user.weight,
        height: user.height,
        address: user.address,
        telephone: user.telephone,
        emergency: user.emergency,
        medicines: user.medicines,
        photo: user.photo,
        comments: user.comments,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
    return {
        userGeneral: userGeneral
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZW50aXRpZXN0b01vZGVsLm15c3FsLkRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL2hlbHBlcnMvdXNlcnMuZW50aXRpZXN0b01vZGVsLm15c3FsLkRCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBSzVCLG1CQUF5QixJQUFpQjtJQUN0QyxJQUFJLFdBQVcsR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ25ELE1BQU0sV0FBVyxHQUFHO1FBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsUUFBUSxFQUFFLFdBQVc7UUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVTtRQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztLQUU1QixDQUFBO0lBRUQsT0FBTztRQUNILFdBQVcsRUFBRSxXQUFXO0tBQzNCLENBQUM7QUFDTixDQUFDO0FBM0JELDRCQTJCQyJ9