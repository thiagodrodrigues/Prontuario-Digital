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
        password: shufflePass,
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
        (userGeneral as IUserEntity).email = user.email;
        (userGeneral as IUserEntity).password = user.password;
        (userGeneral as IUserEntity).birthDate = user.birthDate;
        (userGeneral as IUserEntity).healthPlan = user.healthPlan
        (userGeneral as IUserEntity).allergy = user.allergy;
        (userGeneral as IUserEntity).bloodType = user.bloodType;
        (userGeneral as IUserEntity).weight = user.weight;
        (userGeneral as IUserEntity).height = user.height;
        (userGeneral as IUserEntity).address = user.address;
        (userGeneral as IUserEntity).telephone = user.telephone;
        (userGeneral as IUserEntity).emergency = user.emergency
        (userGeneral as IUserEntity).medicines = user.medicines;
        (userGeneral as IUserEntity).photo = user.photo;
        (userGeneral as IUserEntity).createdAt = user.createdAt;
        (userGeneral as IUserEntity).updatedAt = user.updatedAt;
      
    }

    return (userGeneral as IUserEntity);
}
