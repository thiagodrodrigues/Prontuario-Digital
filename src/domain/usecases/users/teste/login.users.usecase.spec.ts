import LoginAuthUseCase from "../login.users.usecase";

test("Teste unitário loginUsercase", async () => {  
    const userlogin = {
        "email": "Alcia.Melo11@live.com",
        "password": "123456"      
    };
    const login = await LoginAuthUseCase.execute(userlogin);
     if(login) {
        expect(login.user).toMatchObject({"idUser": /0-9/})
    }else{
        expect(login).toBeUndefined()
    }
});