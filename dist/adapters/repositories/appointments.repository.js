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
exports.AppointmentRepository = void 0;
const mysql_Database_1 = require("../../infrastructure/persistence/mysql/mysql.Database");
const exams_models_mysql_DB_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/exams.models.mysql.DB"));
const appointment_modeltoEntity_mysql_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/appointment.modeltoEntity.mysql"));
const appointments_entitiestoModel_mysql_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/appointments.entitiestoModel.mysql"));
class AppointmentRepository {
    constructor(_database, _modelUser) {
        this._database = _database;
        this._modelUser = _modelUser;
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userGeneral = yield this._database.read(this._modelUser, resourceId, {});
                return (0, appointment_modeltoEntity_mysql_1.default)(userGeneral);
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
                return (0, appointment_modeltoEntity_mysql_1.default)(userGeneral);
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
                return (0, appointment_modeltoEntity_mysql_1.default)(userGeneral);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userGeneral } = (0, appointments_entitiestoModel_mysql_1.default)(resource);
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
            const clients = userGeneral.map(appointment_modeltoEntity_mysql_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(resource);
            let examsModel = yield this._database.read(this._modelUser, resource.idUser);
            console.log(`User Model: ${examsModel}`);
            const { userGeneral } = (0, appointments_entitiestoModel_mysql_1.default)(resource);
            console.log(userGeneral);
            yield this._database.update(examsModel, userGeneral);
            return resource;
        });
    }
}
exports.AppointmentRepository = AppointmentRepository;
exports.default = new AppointmentRepository(mysql_Database_1.MySqlDatabase.getInstance(), exams_models_mysql_DB_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRhcHRlcnMvcmVwb3NpdG9yaWVzL2FwcG9pbnRtZW50cy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDBGQUFzRjtBQUd0RixnSUFBNkY7QUFDN0YscUpBQTZHO0FBQzdHLDJKQUFnSDtBQUdoSCxNQUFhLHFCQUFxQjtJQUNoQyxZQUNZLFNBQXlCLEVBQ3pCLFVBQTBEO1FBRDFELGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQWdEO0lBRWxFLENBQUM7SUFFQyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUc7Z0JBQ0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFL0UsT0FBTyxJQUFBLHlDQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hDO1lBQUMsT0FBTSxHQUFHLEVBQUM7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsS0FBYTs7WUFDM0IsSUFBRztnQkFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2xFLEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUEseUNBQWdCLEVBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7WUFBQyxPQUFNLEdBQUcsRUFBQztnQkFDUixNQUFNLElBQUksS0FBSyxDQUFFLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7O1lBQzdDLElBQUc7Z0JBQ0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNsRSxLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBQSx5Q0FBZ0IsRUFBQyxXQUFXLENBQUMsQ0FBQzthQUN4QztZQUFDLE9BQU0sR0FBRyxFQUFDO2dCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQTJCOztZQUNwQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUksSUFBQSw0Q0FBZ0IsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUQsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWtCOztZQUMvQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRSxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLHlDQUFnQixDQUFDLENBQUM7WUFDbEQsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQTJCOztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLElBQUksVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDekMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUEsNENBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDRjtBQW5FRCxzREFtRUM7QUFFRCxrQkFBZSxJQUFJLHFCQUFxQixDQUN0Qyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQiwrQkFBVSxDQUNULENBQUMifQ==