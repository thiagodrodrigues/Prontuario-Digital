import { UsersEntity } from "../../../../domain/entities/users/users.entity";
import { IChartEntity } from "../../../../domain/entities/users/chart.entity";



export default function (user: IChartEntity ){
    const userGeneral = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        password: user.password,
        birthDate: user.birthDate, 
        telephone: user.telephone,
        maritalStatus: user.maritalStatus,
        sex: user.sex,
        weight: user.weight,
        height: user.height,
        zipCode: user.zipCode,
        address: user.address,
        number: user.number,
        neighborhood: user.neighborhood,
        complement: user.complement,
        state: user.state,
        city: user.city,
        smoke: user.smoke,
        drugs: user.drugs,
        exercises: user.exercises,
        recreation: user.recreation,
        familialDisease: user.familialDisease,
        treatment: user.treatment,
        allergy: user.allergy,
        pregnant: user.pregnant,
        medicines: user.medicines,
        disease: user.disease,
        bloodType: user.bloodType,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt, 
        }
    

    return {
        userGeneral: userGeneral,
    };
}