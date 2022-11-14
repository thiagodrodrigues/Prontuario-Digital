"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/users`)
            .all(user_middleware_1.default.validateUserRepeated) // valida se o email utilizado já existe
            .post(user_middleware_1.default.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
        user_middleware_1.default.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
        user_middleware_1.default.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
        user_middleware_1.default.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
        user_controller_1.default.createUser //cadastrar novo usuário
        );
        this.app.route(`/users/:idUser`)
            .all(auth_middleware_1.default.checkAuth, // verifica se o usuário está logado e retorna o idUser
        user_middleware_1.default.validateUserExists // verifica se o idUser existe
        )
            .get(user_controller_1.default.getUserById) // perfil pessoal do usuário
            .put(user_middleware_1.default.validateUserRepeated, // Verifica se o email enviado já existe
        user_middleware_1.default.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
        user_middleware_1.default.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
        user_middleware_1.default.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
        user_middleware_1.default.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
        user_controller_1.default.updateUser // atualizar um usuário específico
        )
            .delete(user_controller_1.default.removeUser); // deletar um usuário específico
        this.app.route(`/users/login`)
            .post(user_controller_1.default.login); // logar um usuário
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL3JvdXRlcy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlFQUE0RDtBQUM1RCxxRkFBNEQ7QUFDNUQscUZBQThEO0FBQzlELHFGQUEyRDtBQUkzRCxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25CLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsd0NBQXdDO2FBQ2pGLElBQUksQ0FDRCx5QkFBYyxDQUFDLDhCQUE4QixFQUFFLDBDQUEwQztRQUN6Rix5QkFBYyxDQUFDLCtCQUErQixFQUFFLDJDQUEyQztRQUMzRix5QkFBYyxDQUFDLGtDQUFrQyxFQUFFLDJDQUEyQztRQUM5Rix5QkFBYyxDQUFDLG1DQUFtQyxFQUFFLHdEQUF3RDtRQUM1Ryx5QkFBYyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0I7U0FDakQsQ0FBQztRQUVWLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQzNCLEdBQUcsQ0FDQSx5QkFBZ0IsQ0FBQyxTQUFTLEVBQUUsdURBQXVEO1FBQ25GLHlCQUFjLENBQUMsa0JBQWtCLENBQUMsOEJBQThCO1NBQy9EO2FBQ0osR0FBRyxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsNEJBQTRCO2FBQzVELEdBQUcsQ0FDQSx5QkFBYyxDQUFDLG9CQUFvQixFQUFFLHdDQUF3QztRQUM3RSx5QkFBYyxDQUFDLDhCQUE4QixFQUFFLDBDQUEwQztRQUN6Rix5QkFBYyxDQUFDLCtCQUErQixFQUFFLDJDQUEyQztRQUMzRix5QkFBYyxDQUFDLGtDQUFrQyxFQUFFLDJDQUEyQztRQUM5Rix5QkFBYyxDQUFDLG1DQUFtQyxFQUFFLHdEQUF3RDtRQUM1Ryx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxrQ0FBa0M7U0FDM0Q7YUFDSixNQUFNLENBQUMseUJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUV4RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDekIsSUFBSSxDQUFDLHlCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFFcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXJDRCxnQ0FxQ0MifQ==