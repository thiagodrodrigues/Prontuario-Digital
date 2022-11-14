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
exports.ReadEmailUseCase = void 0;
const users_repository_1 = __importDefault(require("../../../adapters/repositories/users.repository"));
class ReadEmailUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.readByEmail(data.email);
        });
    }
}
exports.ReadEmailUseCase = ReadEmailUseCase;
exports.default = new ReadEmailUseCase(users_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEVtYWlsLnVzZXJzLnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL3VzZXJzL3JlYWRFbWFpbC51c2Vycy51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHVHQUE4RTtBQUU5RSxNQUFhLGdCQUFnQjtJQUV6QixZQUFvQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFFakQsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUF1Qjs7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7Q0FDSjtBQVRELDRDQVNDO0FBRUQsa0JBQWUsSUFBSSxnQkFBZ0IsQ0FDL0IsMEJBQWUsQ0FDbEIsQ0FBQyJ9