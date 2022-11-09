import bcrypt from 'bcrypt';
import { IUserEntity } from "../../../../domain/entities/users/user.entity"



export default function (user: IUserEntity ){
    let shufflePass = bcrypt.hashSync(user.password,10)
    const userGeneral = {
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

    return {
        userGeneral: userGeneral
    };
}