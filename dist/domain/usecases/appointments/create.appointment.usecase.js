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
exports.CreateAppointmentUseCase = void 0;
const appointments_repository_1 = __importDefault(require("../../../adapters/repositories/appointments.repository"));
class CreateAppointmentUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.create(data);
        });
    }
}
exports.CreateAppointmentUseCase = CreateAppointmentUseCase;
exports.default = new CreateAppointmentUseCase(appointments_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmFwcG9pbnRtZW50LnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL2FwcG9pbnRtZW50cy9jcmVhdGUuYXBwb2ludG1lbnQudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSxxSEFBMkY7QUFHM0YsTUFBYSx3QkFBd0I7SUFDakMsWUFBb0IsV0FBb0M7UUFBcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0lBQ3hELENBQUM7SUFDSyxPQUFPLENBQUMsSUFBdUI7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7Q0FDSjtBQU5ELDREQU1DO0FBRUQsa0JBQWUsSUFBSSx3QkFBd0IsQ0FDdkMsaUNBQXFCLENBQ3hCLENBQUMifQ==