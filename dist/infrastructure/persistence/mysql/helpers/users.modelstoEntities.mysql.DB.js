"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function default_1(user) {
    if (!user)
        return;
    let shufflePass = bcrypt_1.default.hashSync(user.password, 10);
    let userGeneral = {
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
    //
    if (user.logado) {
        userGeneral.idUser = user.idUser;
        userGeneral.name = user.name(userGeneral).email = user.email;
        userGeneral.password = user.password;
        userGeneral.birthDate = user.birthDate;
        userGeneral.healthPlan = user.healthPlan(userGeneral).allergy = user.allergy;
        userGeneral.bloodType = user.bloodType;
        userGeneral.weight = user.weight;
        userGeneral.height = user.height;
        userGeneral.address = user.address;
        userGeneral.telephone = user.telephone;
        userGeneral.emergency = user.emergency(userGeneral).medicines = user.medicines;
        userGeneral.photo = user.photo;
        userGeneral.createdAt = user.createdAt;
        userGeneral.updatedAt = user.updatedAt;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL3VzZXJzLm1vZGVsc3RvRW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFHNUIsbUJBQXlCLElBQVE7SUFDN0IsSUFBRyxDQUFDLElBQUk7UUFDUixPQUFNO0lBRU4sSUFBSSxXQUFXLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVwRCxJQUFJLFdBQVcsR0FBZ0I7UUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVO1FBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtRQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0tBQzVCLENBQUE7SUFDTCxFQUFFO0lBQ0UsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ1YsV0FBMkIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxXQUEyQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUM1QyxXQUEwQixDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0MsV0FBMkIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxXQUEyQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZELFdBQTJCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQ3hELFdBQTBCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuRCxXQUEyQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZELFdBQTJCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsV0FBMkIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxXQUEyQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25ELFdBQTJCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkQsV0FBMkIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDdEQsV0FBMEIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZELFdBQTJCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0MsV0FBMkIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxXQUEyQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBRTNEO0lBRUQsT0FBUSxXQUEyQixDQUFDO0FBQ3hDLENBQUM7QUFqREQsNEJBaURDIn0=