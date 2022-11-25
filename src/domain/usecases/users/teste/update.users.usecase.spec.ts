import CreateUsersUseCase from "../create.users.usecase";
import ReadUsersUseCase from "../read.users.usecase";
import { UsersEntity } from "../../../entities/users/users.entity";
import readEmailUsersUsecase from "../readEmail.users.usecase";
import updateUsersUsecase from "../update.users.usecase";
import deleteUsersUsecase from "../delete.users.usecase";

test("Teste unitário createUsercase", async () => {  
    const usercreted: UsersEntity = {
        "idUser": 96,
        "name": "Maria Barros",
        "email": "maria3@email.com",
        "password": "123456"        
    };
    await CreateUsersUseCase.execute(usercreted)
    const userUpdate = {
        "idUser": 96,
        "name": "Maria Cecília Barros",
        "email": "maria3@email.com",
        "birthDate": "1997-05-17 04:03:27",
        "telephone": "(22) 57862-2540",
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
   
    expect(await updateUsersUsecase.execute(userUpdate)).toMatchObject(userUpdate);

    await deleteUsersUsecase.execute({idUser: 96})
});