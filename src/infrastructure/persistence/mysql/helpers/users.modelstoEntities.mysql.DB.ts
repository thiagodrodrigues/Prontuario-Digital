import { UsersEntity } from "../../../../domain/entities/users/users.entity";
import { IUserEntity } from "../../../../domain/entities/users/user.entity";
import { IChartEntity } from "../../../../domain/entities/users/chart.entity";

export default function (user:any): IChartEntity | undefined {
    if(!user)
    return;


    let userGeneral: IChartEntity = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt, 
        birthDate: user.birthDate,
        healthPlan: user.healthPlan,
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
    };


    return (userGeneral as IChartEntity);
}
