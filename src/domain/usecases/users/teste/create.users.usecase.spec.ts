import CreateUsersUseCase from "../create.users.usecase";
import { UsersEntity } from "../../../entities/users/users.entity";
import deleteUsersUsecase from "../delete.users.usecase";

test("Teste unitário createUsercase", async () => {  
    const usercreted: UsersEntity = {
        "idUser": 99,
        "name": "Maria Cecília Barros",
        "email": "maria@email.com",
        "password": "123456"        
    };
    const user: UsersEntity = {
        "name": "Maria Cecília Barros",
        "email": "maria@email.com"        
    };
    expect(await CreateUsersUseCase.execute(usercreted)).toMatchObject(user);

    await deleteUsersUsecase.execute({idUser: 99})
});