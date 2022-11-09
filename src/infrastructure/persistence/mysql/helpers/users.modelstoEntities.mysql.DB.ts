import bcrypt from "bcrypt";
import { IUserEntity } from "../../../../domain/entities/users/user.entity"

export default function (user:any): IUserEntity | undefined {
    if(!user)
    return

    let shufflePass = bcrypt.hashSync(user.password, 10) 

    let userGeneral: IUserEntity = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        password: user.password,
        birthDate: user.birthDate, 
        healthPlan:user.healthPlan,
        allergy: user.allergy,
        bloodType: user.bloodType,
        weight: user.weight,
        height: user.height,
        address: user.address,
        telephone: user.telephone,
        emergency: user.emergency,
        medicines: user.medicines,
        photo: user.photo,
        comments: user.comments,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt, 
    }
//
    if(user.logado){
        (userGeneral as IUserEntity).idUser = user.idUser;
        (userGeneral as IUserEntity).name = user.name
        (userGeneral as IUserEntity).apartment = user.apartment;
        (userGeneral as IUserEntity).email = user.email;
        (userGeneral as IUserEntity).password = user.password;
        (userGeneral as IUserEntity).createdAt = user.createdAt;
        (userGeneral as IUserEntity).updatedAt = user.updatedAt;
        (userGeneral as IUserEntity).photo = user.photo;
    }

    return (userGeneral as IUserEntity);
}