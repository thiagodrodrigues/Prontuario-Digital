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
const debug_1 = __importDefault(require("debug"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log = (0, debug_1.default)('app:auth-middleware');
class AuthMiddleware {
    checkAuth(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
                if (!token) {
                    res.status(401).send({
                        error: constants_config_1.default.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
                    });
                }
                else {
                    const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                    if (typeof decoded == `string`) {
                        res.status(401).send({
                            error: constants_config_1.default.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
                        });
                    }
                    else {
                        console.log(decoded.idUser);
                        next();
                    }
                }
            }
            catch (err) {
                res.status(401).send({
                    error: constants_config_1.default.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
                });
            }
        });
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLHVHQUE4RTtBQUM5RSxnRUFBK0I7QUFFL0IsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFMUQsTUFBTSxjQUFjO0lBQ1YsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7O1lBQ25GLElBQUc7Z0JBQ0MsTUFBTSxLQUFLLEdBQUcsTUFBQSxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUVsRSxJQUFHLENBQUMsS0FBSyxFQUFDO29CQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNqQixLQUFLLEVBQUUsMEJBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7cUJBQ25FLENBQUMsQ0FBQztpQkFDTjtxQkFBTTtvQkFDSCxNQUFNLE9BQU8sR0FBRyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsSUFBRyxPQUFPLE9BQU8sSUFBSSxRQUFRLEVBQUM7d0JBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNqQixLQUFLLEVBQUUsMEJBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7eUJBQ25FLENBQUMsQ0FBQztxQkFDTjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxFQUFFLENBQUM7cUJBQ1Y7aUJBQ0o7YUFFSjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsMEJBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7aUJBQ25FLENBQUMsQ0FBQzthQUNOOztLQUNKO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=