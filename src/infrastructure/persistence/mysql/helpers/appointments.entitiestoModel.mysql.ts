import { IAppointmentEntity } from "../../../../domain/entities/appointments/appointment.entity"

export default function (appointment: IAppointmentEntity ){
   
    const appointmentGeneral = {
      idAppointment: appointment.idAppointment,
      idUser: appointment.idUser,
      doctor: appointment.doctor,
      hospital: appointment.hospital,
      crm: appointment.crm,
      date: appointment.date,
      symptoms: appointment.symptoms,
      medicines: appointment.medicines,
      comments: appointment.comments,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt 
    }

    return {
      appointmentGeneral: appointmentGeneral
    };
}