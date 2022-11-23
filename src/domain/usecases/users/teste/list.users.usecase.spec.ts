import listUsersUsecase from "../list.users.usecase";

test("Teste unitário listUsersUsecase", async () => {  
    
    const list = await listUsersUsecase.execute();
    if(list) {
        expect(list[0]).toMatchObject({"idUser": /0-9/})
    }else{
        expect(list).toEqual([])
    }
    
});
