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
const appointments_repository_1 = __importDefault(require("../../../adapters/repositories/appointments.repository"));
class UpdateExamUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.updateById(data);
        });
    }
}
exports.default = new UpdateExamUseCase(appointments_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmFwcG9pbnRtZW50LnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL2FwcG9pbnRtZW50cy91cGRhdGUuYXBwb2ludG1lbnQudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLHFIQUEyRjtBQUczRixNQUFNLGlCQUFpQjtJQUNuQixZQUFvQixXQUFvQztRQUFwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7SUFDeEQsQ0FBQztJQUNLLE9BQU8sQ0FBQyxJQUF1Qjs7WUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsQ0FDaEMsaUNBQXFCLENBQ3hCLENBQUMifQ==