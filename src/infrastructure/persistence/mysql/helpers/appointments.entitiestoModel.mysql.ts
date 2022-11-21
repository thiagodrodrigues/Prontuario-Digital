import { IAppointmentEntity } from "../../../../domain/entities/appointments/appointment.entity"

export default function (appointment: IAppointmentEntity ){
   
    const appointmentGeneral = {
      idAppointment: appointment.idAppointment,
      idUser: appointment.idUser,
      medicalSpecialties: appointment.medicalSpecialties,
      doctor: appointment.doctor,
      hospital: appointment.hospital,
      date: appointment.date,
      diagnosis: appointment.diagnosis,
      comments: appointment.comments,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt 
    }

    return {
      appointmentGeneral: appointmentGeneral
    };
}