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
exports.LoginAuthUseCase = void 0;
const users_repository_1 = __importDefault(require("../../../adapters/repositories/users.repository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginAuthUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this._repository.readByWhere(data.email, data.password);
            if (users) {
                const token = jsonwebtoken_1.default.sign(users, String(process.env.SECRET_KEY), {
                    expiresIn: '2 days'
                });
                return {
                    user: users,
                    token: token
                };
            }
            return;
        });
    }
}
exports.LoginAuthUseCase = LoginAuthUseCase;
exports.default = new LoginAuthUseCase(users_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udXNlcnMudXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvdXNlcnMvbG9naW4udXNlcnMudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSx1R0FBOEU7QUFDOUUsZ0VBQStCO0FBRS9CLE1BQWEsZ0JBQWdCO0lBQ3pCLFlBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUVqRCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQXlDOztZQUNuRCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVFLElBQUcsS0FBSyxFQUFDO2dCQUVMLE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDMUQsU0FBUyxFQUFFLFFBQVE7aUJBQ3RCLENBQUMsQ0FBQztnQkFFSCxPQUFPO29CQUNILElBQUksRUFBRSxLQUFLO29CQUNYLEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDTDtZQUVELE9BQU87UUFDWCxDQUFDO0tBQUE7Q0FDSjtBQXRCRCw0Q0FzQkM7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixDQUMvQiwwQkFBZSxDQUNsQixDQUFDIn0=