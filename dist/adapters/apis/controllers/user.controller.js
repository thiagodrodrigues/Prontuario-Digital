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
const create_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/create.users.usecase"));
const read_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/read.users.usecase"));
const update_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/update.users.usecase"));
const delete_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/delete.users.usecase"));
const debug_1 = __importDefault(require("debug"));
const login_users_usecase_1 = __importDefault(require("../../../domain/usecases/users/login.users.usecase"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const log = (0, debug_1.default)('app:users-controller');
class UserController {
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield read_users_usecase_1.default.execute({
                idUser: Number(req.params.idUser)
            });
            res.status(200).send(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield create_users_usecase_1.default.execute(req.body);
            log(user);
            res.status(201).send(user);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userModel = yield update_users_usecase_1.default.execute({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                birthDate: req.body.birthDate,
                idUser: Number(req.params.idUser)
            });
            log(userModel);
            res.status(200).send(userModel);
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield delete_users_usecase_1.default.execute({
                idUser: Number(req.params.idUser)
            });
            res.status(204).send();
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield login_users_usecase_1.default.execute(req.body);
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.status(401).send({
                    error: constants_config_1.default.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
                });
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0dBQW9GO0FBQ3BGLDJHQUFnRjtBQUNoRiwrR0FBb0Y7QUFDcEYsK0dBQW9GO0FBQ3BGLGtEQUEwQjtBQUMxQiw2R0FBa0Y7QUFDbEYsdUdBQThFO0FBRTlFLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sY0FBYztJQUNWLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLElBQUksR0FBRyxNQUFNLDRCQUFlLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLElBQUksR0FBRyxNQUFNLDhCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3hELE1BQU0sU0FBUyxHQUFHLE1BQU0sOEJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUM5QyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUN0QixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNyQixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUN4QixTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUM3QixNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLElBQUksR0FBRyxNQUFNLDhCQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxNQUFNLElBQUksR0FBRyxNQUFNLDZCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtpQkFDbkUsQ0FBQyxDQUFDO2FBQ047UUFFTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==