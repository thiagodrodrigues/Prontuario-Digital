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
exports.CreateExamUseCase = void 0;
const exams_repository_1 = __importDefault(require("../../../adapters/repositories/exams.repository"));
class CreateExamUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.create(data);
        });
    }
}
exports.CreateExamUseCase = CreateExamUseCase;
exports.default = new CreateExamUseCase(exams_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmV4YW0udXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvZXhhbXMvY3JlYXRlLmV4YW0udXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSx1R0FBNkU7QUFHN0UsTUFBYSxpQkFBaUI7SUFDMUIsWUFBb0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQ2pELENBQUM7SUFDSyxPQUFPLENBQUMsSUFBZ0I7O1lBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7Q0FDSjtBQU5ELDhDQU1DO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsQ0FDaEMsMEJBQWMsQ0FDakIsQ0FBQyJ9