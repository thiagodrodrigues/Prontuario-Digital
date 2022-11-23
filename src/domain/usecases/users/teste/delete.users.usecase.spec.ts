import deleteUsersUsecase from "../delete.users.usecase";

test("Teste unitário deleteUserUsecase", async() => {
    const client = {
        idUser: 0
    };
    expect(await deleteUsersUsecase.execute(client)).toBeUndefined();
})