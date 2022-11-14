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
const readEmail_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/readEmail.users.usecase"));
const debug_1 = __importDefault(require("debug"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const read_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.users.usecase"));
const log = (0, debug_1.default)('app:user-middleware');
class UserMiddleware {
    validateUserRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let dataWhere = req.body.email;
            const user = yield readEmail_users_usecase_1.default.execute({
                email: dataWhere
            });
            if (!user) {
                next();
            }
            else {
                res.status(409).send({ error: constants_config_1.default.USERS.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(dataWhere)) });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield read_users_usecase_1.default.execute({
                idUser: Number(req.params.idUser)
            });
            if (user) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.USERS.MESSAGES.ERROR.USER_NOT_FOUND.replace('{USER_ID}', String(req.params.idUser)) });
            }
        });
    }
    validateRequiredNameBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.name) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.USERS.MESSAGES.ERROR.VOID_NAME });
            }
        });
    }
    validateRequiredEmailBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.email) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.USERS.MESSAGES.ERROR.VOID_EMAIL });
            }
        });
    }
    validateRequiredPasswordBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.password) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.USERS.MESSAGES.ERROR.VOID_PASSWORD });
            }
        });
    }
    validateRequiredBirthDateBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.birthDate) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.USERS.MESSAGES.ERROR.VOID_BIRTHDATE });
            }
        });
    }
}
exports.default = new UserMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvdXNlci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUhBQXNGO0FBQ3RGLGtEQUEwQjtBQUMxQix1R0FBOEU7QUFDOUUsMkdBQWlGO0FBRWpGLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTFELE1BQU0sY0FBYztJQUVWLG9CQUFvQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDOUYsSUFBSSxTQUFTLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQ0FBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLEtBQUssRUFBRSxTQUFTO2FBQ25CLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ25JO1FBQ0wsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUM1RixNQUFNLElBQUksR0FBRyxNQUFNLDRCQUFnQixDQUFDLE9BQU8sQ0FBQztnQkFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxJQUFHLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFLO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDBCQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUE7YUFDckk7UUFDTCxDQUFDO0tBQUE7SUFFSyw4QkFBOEIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3hHLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7YUFDakY7UUFDTCxDQUFDO0tBQUE7SUFFSywrQkFBK0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3pHLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7YUFDbEY7UUFDTCxDQUFDO0tBQUE7SUFFSyxrQ0FBa0MsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzVHLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsSUFBSSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7YUFDckY7UUFDTCxDQUFDO0tBQUE7SUFFSyxtQ0FBbUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzdHLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLENBQUM7YUFDZDtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7YUFDdEY7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==