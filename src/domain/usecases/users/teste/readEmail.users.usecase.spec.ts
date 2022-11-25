import CreateUsersUseCase from "../create.users.usecase";
import ReadUsersUseCase from "../read.users.usecase";
import { UsersEntity } from "../../../entities/users/users.entity";
import readEmailUsersUsecase from "../readEmail.users.usecase";
import deleteUsersUsecase from "../delete.users.usecase";

test("Teste unitário createUsercase", async () => {  

    const usercreted: UsersEntity = {
        "idUser": 97,
        "name": "Maria Barros",
        "email": "mariabarros@email.com",
        "password": "123456"        
    };
    await CreateUsersUseCase.execute(usercreted)

    const user = {
        "idUser": 97,
        "name": "Maria Barros",
        "email": "mariabarros@email.com",
        "birthDate": null,
        "telephone": null,
        "maritalStatus": null,
        "sex": null,
        "weight": null,
        "height": null,
        "zipCode": null,
        "address": null,
        "number": null,
        "neighborhood": null,
        "complement": null,
        "state": null,
        "city": null,
        "smoke": null,
        "drugs": null,
        "exercises": null,
        "recreation": null,
        "familialDisease": null,
        "treatment": null,
        "allergy": null,
        "pregnant": null,
        "medicines": null,
        "disease": null,
        "bloodType": null,
        "status": null                
    };
   
    expect( await readEmailUsersUsecase.execute({"email": "mariabarros@email.com"})).toMatchObject(user);

    await deleteUsersUsecase.execute({idUser: 97})
    
});