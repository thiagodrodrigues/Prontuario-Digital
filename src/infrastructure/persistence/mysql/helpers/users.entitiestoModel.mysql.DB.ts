import { UsersEntity } from "../../../../domain/entities/users/users.entity";
import { IChartEntity } from "../../../../domain/entities/users/chart.entity";



export default function (user: IChartEntity ){
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
        userGeneral: userGeneral,
    };
}