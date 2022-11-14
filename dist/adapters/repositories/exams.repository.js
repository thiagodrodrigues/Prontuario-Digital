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
exports.ExamsRepository = void 0;
const mysql_Database_1 = require("../../infrastructure/persistence/mysql/mysql.Database");
const exams_models_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/exams.models.mysql.DB"));
const exams_modelstoEntities_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/exams.modelstoEntities.mysql.DB"));
const exams_entitiestoModel_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/exams.entitiestoModel.mysql.DB"));
class ExamsRepository {
    constructor(_database, _modelUser) {
        this._database = _database;
        this._modelUser = _modelUser;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userGeneral = yield this._database.read(this._modelUser, resourceId, {});
                return (0, exams_modelstoEntities_mysql_DB_1.default)(userGeneral);
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
                return (0, exams_modelstoEntities_mysql_DB_1.default)(userGeneral);
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
                return (0, exams_modelstoEntities_mysql_DB_1.default)(userGeneral);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneral } = (0, exams_entitiestoModel_mysql_DB_1.default)(resource);
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
            const clients = userGeneral.map(exams_modelstoEntities_mysql_DB_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(resource);
            let examsModel = yield this._database.read(this._modelUser, resource.idUser);
            console.log(`User Model: ${examsModel}`);
            const { userGeneral } = (0, exams_entitiestoModel_mysql_DB_1.default)(resource);
            console.log(userGeneral);
            yield this._database.update(examsModel, userGeneral);
            return resource;
        });
    }
}
exports.ExamsRepository = ExamsRepository;
exports.default = new ExamsRepository(mysql_Database_1.MySqlDatabase.getInstance(), exams_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvZXhhbXMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwRkFBc0Y7QUFHdEYsZ0lBQTZGO0FBQzdGLHFKQUE2RztBQUM3RyxtSkFBNEc7QUFFNUcsTUFBYSxlQUFlO0lBQzFCLFlBQ1ksU0FBeUIsRUFDekIsVUFBMEQ7UUFEMUQsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0Q7SUFFbEUsQ0FBQztJQUVDLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBRztnQkFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUUvRSxPQUFPLElBQUEseUNBQWdCLEVBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7WUFBQyxPQUFNLEdBQUcsRUFBQztnQkFDUixNQUFNLElBQUksS0FBSyxDQUFFLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxLQUFhOztZQUMzQixJQUFHO2dCQUNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbEUsS0FBSyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBQSx5Q0FBZ0IsRUFBQyxXQUFXLENBQUMsQ0FBQzthQUN4QztZQUFDLE9BQU0sR0FBRyxFQUFDO2dCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEtBQWEsRUFBRSxRQUFnQjs7WUFDN0MsSUFBRztnQkFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2xFLEtBQUssRUFBRSxLQUFLO29CQUNaLFFBQVEsRUFBRSxRQUFRO2lCQUNyQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxJQUFBLHlDQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hDO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBb0I7O1lBQzdCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBSSxJQUFBLHdDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMxRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMseUNBQWdCLENBQUMsQ0FBQztZQUNsRCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsUUFBb0I7O1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsSUFBSSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN6QyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBQSx3Q0FBZ0IsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNGO0FBbkVELDBDQW1FQztBQUVELGtCQUFlLElBQUksZUFBZSxDQUNoQyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQiwrQkFBVSxDQUNULENBQUMifQ==