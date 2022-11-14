"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const mysql_Database_1 = require("../../infrastructure/persistence/mysql/mysql.Database");
const user_models_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/user.models.mysql.DB"));
const users_modelstoEntities_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/users.modelstoEntities.mysql.DB"));
const users_entitiestoModel_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/users.entitiestoModel.mysql.DB"));
class UsersRepository {
    constructor(_database, _modelUser) {
        this._database = _database;
        this._modelUser = _modelUser;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userGeneral = yield this._database.read(this._modelUser, resourceId, {});
                return (0, users_modelstoEntities_mysql_DB_1.default)(userGeneral);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    readByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userGeneral = yield this._database.readByWhere(this._modelUser, {
                    email: email
                });
                return (0, users_modelstoEntities_mysql_DB_1.default)(userGeneral);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    readByWhere(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userGeneral = yield this._database.readByWhere(this._modelUser, {
                    email: email,
                    password: password
                });
                return (0, users_modelstoEntities_mysql_DB_1.default)(userGeneral);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            yield this._database.create(this._modelUser, userGeneral);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelUser, { idUser: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const userGeneral = yield this._database.list(this._modelUser, {});
            const clients = userGeneral.map(users_modelstoEntities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(resource);
            let userModel = yield this._database.read(this._modelUser, resource.idUser);
            console.log(`User Model: ${userModel}`);
            const { userGeneral } = (0, users_entitiestoModel_mysql_DB_1.default)(resource);
            console.log(userGeneral);
            yield this._database.update(userModel, userGeneral);
            return resource;
        });
    }
}
exports.UsersRepository = UsersRepository;
exports.default = new UsersRepository(mysql_Database_1.MySqlDatabase.getInstance(), user_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvdXNlcnMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwRkFBc0Y7QUFHdEYsOEhBQTJGO0FBQzNGLHFKQUE4RztBQUM5RyxtSkFBNkc7QUFFN0csTUFBYSxlQUFlO0lBQ3hCLFlBQ1ksU0FBeUIsRUFDekIsVUFBMEQ7UUFEMUQsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0Q7SUFFbEUsQ0FBQztJQUVDLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBRztnQkFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUUvRSxPQUFPLElBQUEseUNBQWdCLEVBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7WUFBQyxPQUFNLEdBQUcsRUFBQztnQkFDUixNQUFNLElBQUksS0FBSyxDQUFFLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxLQUFhOztZQUMzQixJQUFHO2dCQUNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbEUsS0FBSyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBQSx5Q0FBZ0IsRUFBQyxXQUFXLENBQUMsQ0FBQzthQUN4QztZQUFDLE9BQU0sR0FBRyxFQUFDO2dCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEtBQWEsRUFBRSxRQUFnQjs7WUFDN0MsSUFBRztnQkFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2xFLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxRQUFRO2lCQUNyQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxJQUFBLHlDQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hDO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBcUI7O1lBQzlCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBSSxJQUFBLHdDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMxRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMseUNBQWdCLENBQUMsQ0FBQztZQUNsRCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBcUI7O1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUN4QyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBQSx3Q0FBZ0IsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBbkVELDBDQW1FQztBQUVELGtCQUFlLElBQUksZUFBZSxDQUM5Qiw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQiw4QkFBUyxDQUNSLENBQUMifQ==